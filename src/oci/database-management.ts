// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optManagedDatabaseId: Fig.Option = {
  name: "--managed-database-id",
  description: "The OCID of the Managed Database",
  args: { name: "managed-database-id" },
  isRequired: true,
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page from where the next set of paginated results are retrieved",
  args: { name: "page" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "The maximum number of records returned in the paginated response",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The option to sort information in ascending (‘ASC’) or descending (‘DESC’) order",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCredentials: Fig.Option = {
  name: "--credentials",
  args: { name: "json" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optDatabaseCredential: Fig.Option = {
  name: "--database-credential",
  args: { name: "json" },
};
const optOpcNamedCredentialId: Fig.Option = {
  name: "--opc-named-credential-id",
  description: "The OCID of the Named Credential",
  args: { name: "opc-named-credential-id" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optDatabaseCredentialRole: Fig.Option = {
  name: "--database-credential-role",
  description: "The role of the database user",
  args: { suggestions: ["NORMAL", "SYSDBA", "SYSDG"] },
};
const optDatabaseCredentialUsername: Fig.Option = {
  name: "--database-credential-username",
  description: "The user to connect to the database",
  args: { name: "database-credential-username" },
};
const optRole: Fig.Option = {
  name: "--role",
  description: "The role of the database user. required",
  args: { suggestions: ["NORMAL", "SYSDBA"] },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optUsername: Fig.Option = {
  name: "--username",
  description: "The user name used to connect to the database. required",
  args: { name: "username" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optFeatureDetailsConnectorDetails: Fig.Option = {
  name: "--feature-details-connector-details",
  args: { name: "json" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to only return the resources that match the entire display name",
  args: { name: "display-name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort information by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optDatabaseCredentialNamedCredentialId: Fig.Option = {
  name: "--database-credential-named-credential-id",
  description:
    "The OCID of the named credential where the database password metadata is stored",
  args: { name: "database-credential-named-credential-id" },
  isRequired: true,
};
const optDatabaseCredentialPassword: Fig.Option = {
  name: "--database-credential-password",
  description: "The database user's password encoded using BASE64 scheme",
  args: { name: "database-credential-password" },
  isRequired: true,
};
const optDatabaseCredentialPasswordSecretId: Fig.Option = {
  name: "--database-credential-password-secret-id",
  description: "The OCID of the Secret where the database password is stored",
  args: { name: "database-credential-password-secret-id" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort information by",
  args: { suggestions: ["TIMECREATED", "NAME"] },
};
const optPassword: Fig.Option = {
  name: "--password",
  description:
    "The database user's password encoded using BASE64 scheme. required",
  args: { name: "password" },
  isRequired: true,
};
const optFilterByMetricNames: Fig.Option = {
  name: "--filter-by-metric-names",
  description:
    "The filter used to retrieve a specific set of metrics by passing the desired metric names with a comma",
  args: { name: "filter-by-metric-names" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "A filter to return only resources that match the entire name",
  args: { name: "name" },
};
const optFeatureDetailsDatabaseConnectionDetails: Fig.Option = {
  name: "--feature-details-database-connection-details",
  args: { name: "json" },
  isRequired: true,
};
const optSecretId: Fig.Option = {
  name: "--secret-id",
  description:
    "The OCID of the Secret where the database password is stored. required",
  args: { name: "secret-id" },
  isRequired: true,
};
const optTablespaceName: Fig.Option = {
  name: "--tablespace-name",
  description: "The name of the tablespace",
  args: { name: "tablespace-name" },
  isRequired: true,
};
const optCredentialDetails: Fig.Option = {
  name: "--credential-details",
  args: { name: "json" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "INACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort information by",
  args: { suggestions: ["NAME"] },
};
const optTimeGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-greater-than-or-equal-to",
  description:
    "The optional greater than or equal to query parameter to filter the timestamp",
  args: { name: "datetime" },
};
const optTimeLessThanOrEqualTo: Fig.Option = {
  name: "--time-less-than-or-equal-to",
  description:
    "The optional less than or equal to query parameter to filter the timestamp",
  args: { name: "datetime" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optIsEnabled: Fig.Option = {
  name: "--is-enabled",
  description:
    "Indicates whether the loaded plans are enabled (true) or not (false)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsFixed: Fig.Option = {
  name: "--is-fixed",
  description:
    "Indicates whether the plans are loaded as fixed plans (true) or non-fixed plans (false)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optJobDescription: Fig.Option = {
  name: "--job-description",
  description: "The description of the job",
  args: { name: "job-description" },
};
const optJobName: Fig.Option = {
  name: "--job-name",
  description:
    "The name of the database job used for loading SQL plan baselines",
  args: { name: "job-name" },
  isRequired: true,
};
const optManagedMySqlDatabaseId: Fig.Option = {
  name: "--managed-my-sql-database-id",
  description: "The OCID of the Managed MySQL Database",
  args: { name: "managed-my-sql-database-id" },
  isRequired: true,
};
const optSqlHandle: Fig.Option = {
  name: "--sql-handle",
  description: "The SQL statement handle",
  args: { name: "sql-handle" },
};
const optCloudDbSystemId: Fig.Option = {
  name: "--cloud-db-system-id",
  description: "The OCID of the cloud DB system",
  args: { name: "cloud-db-system-id" },
  isRequired: true,
};
const optEndTime: Fig.Option = {
  name: "--end-time",
  description:
    "The end time of the time range to retrieve the health metrics of a Managed Database in UTC in ISO-8601",
  args: { name: "end-time" },
  isRequired: true,
};
const optStartTime: Fig.Option = {
  name: "--start-time",
  description:
    "The start time of the time range to retrieve the health metrics of a Managed Database in UTC in ISO-8601",
  args: { name: "start-time" },
  isRequired: true,
};
const optAwrDbId: Fig.Option = {
  name: "--awr-db-id",
  description: "The parameter to filter the database by internal ID",
  args: { name: "awr-db-id" },
  isRequired: true,
};
const optBeginSnIdGreaterThanOrEqualTo: Fig.Option = {
  name: "--begin-sn-id-greater-than-or-equal-to",
  description:
    "The optional greater than or equal to filter on the snapshot ID",
  args: { name: "integer" },
};
const optContainerId: Fig.Option = {
  name: "--container-id",
  description:
    "The optional query parameter to filter the database container by an exact ID value",
  args: { name: "integer" },
};
const optEndSnIdLessThanOrEqualTo: Fig.Option = {
  name: "--end-sn-id-less-than-or-equal-to",
  description:
    "The optional less than or equal to query parameter to filter the snapshot ID",
  args: { name: "integer" },
};
const optEndTime2: Fig.Option = {
  name: "--end-time",
  description:
    "The end of the time range set to retrieve metric data for the DB system and its members",
  args: { name: "end-time" },
  isRequired: true,
};
const optExternalDbSystemId: Fig.Option = {
  name: "--external-db-system-id",
  description: "The OCID of the external DB system",
  args: { name: "external-db-system-id" },
  isRequired: true,
};
const optFeatureDetails: Fig.Option = {
  name: "--feature-details",
  args: { name: "json" },
  isRequired: true,
};
const optInstNum: Fig.Option = {
  name: "--inst-num",
  description:
    "The optional single value query parameter to filter the database instance number",
  args: { name: "inst-num" },
};
const optStartTime2: Fig.Option = {
  name: "--start-time",
  description:
    "The beginning of the time range set to retrieve metric data for the DB system and its members",
  args: { name: "start-time" },
  isRequired: true,
};
const optDatabaseId: Fig.Option = {
  name: "--database-id",
  description: "The OCID of the Database",
  args: { name: "database-id" },
  isRequired: true,
};
const optExternalContainerDatabaseId: Fig.Option = {
  name: "--external-container-database-id",
  description: "The OCID of the external container database",
  args: { name: "external-container-database-id" },
  isRequired: true,
};
const optPluggableDatabaseId: Fig.Option = {
  name: "--pluggable-database-id",
  description: "The OCID of the Oracle cloud pluggable database",
  args: { name: "pluggable-database-id" },
  isRequired: true,
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optCredentialName: Fig.Option = {
  name: "--credential-name",
  description: "The name of the preferred credential",
  args: { name: "credential-name" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the DB system",
  args: { name: "display-name" },
};
const optExternalExadataInfrastructureId: Fig.Option = {
  name: "--external-exadata-infrastructure-id",
  description: "The OCID of the Exadata infrastructure",
  args: { name: "external-exadata-infrastructure-id" },
  isRequired: true,
};
const optFileType: Fig.Option = {
  name: "--file-type",
  description: "Specifies whether the file is a data file or temp file",
  args: { suggestions: ["DATAFILE", "TEMPFILE"] },
  isRequired: true,
};
const optManagedDatabaseGroupId: Fig.Option = {
  name: "--managed-database-group-id",
  description: "The OCID of the Managed Database Group",
  args: { name: "managed-database-group-id" },
};
const optScope: Fig.Option = {
  name: "--scope",
  description:
    "The clause used to specify when the parameter change takes effect",
  args: { suggestions: ["MEMORY", "SPFILE", "BOTH"] },
  isRequired: true,
};
const optUserName: Fig.Option = {
  name: "--user-name",
  description: "The name of the user whose details are to be viewed",
  args: { name: "user-name" },
  isRequired: true,
};
const optAutonomousDatabaseId: Fig.Option = {
  name: "--autonomous-database-id",
  description: "The OCID of the Autonomous Database",
  args: { name: "autonomous-database-id" },
  isRequired: true,
};
const optExternalDbSystemId2: Fig.Option = {
  name: "--external-db-system-id",
  description: "The OCID of the external DB system",
  args: { name: "external-db-system-id" },
};
const optFeatureDetailsCanEnableAllCurrentPdbs: Fig.Option = {
  name: "--feature-details-can-enable-all-current-pdbs",
  description:
    "Indicates whether Diagnostics & Management should be enabled for all the current pluggable databases in",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optFeatureDetailsIsAutoEnablePluggableDatabase: Fig.Option = {
  name: "--feature-details-is-auto-enable-pluggable-database",
  description:
    "Indicates whether Diagnostics & Management should be enabled automatically for all the pluggable databases",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLimit2: Fig.Option = {
  name: "--limit",
  description:
    "The maximum number of records returned in large paginated response",
  args: { name: "integer" },
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "NOT_CONNECTED",
      "ACTIVE",
      "INACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optAutoCaptureFilters: Fig.Option = {
  name: "--auto-capture-filters",
  description: "The filters used in automatic initial plan capture",
  args: { name: "json" },
  isRequired: true,
};
const optBeginSnapshot: Fig.Option = {
  name: "--begin-snapshot",
  description: "The begin snapshot",
  args: { name: "integer" },
  isRequired: true,
};
const optCloudAsmId: Fig.Option = {
  name: "--cloud-asm-id",
  description: "The OCID of the cloud ASM",
  args: { name: "cloud-asm-id" },
  isRequired: true,
};
const optCloudDbSystemId2: Fig.Option = {
  name: "--cloud-db-system-id",
  description: "The OCID of the cloud DB system",
  args: { name: "cloud-db-system-id" },
};
const optCredentialDetailsRole: Fig.Option = {
  name: "--credential-details-role",
  description: "The role of the database user",
  args: { suggestions: ["NORMAL", "SYSDBA"] },
  isRequired: true,
};
const optCredentialDetailsUsername: Fig.Option = {
  name: "--credential-details-username",
  description: "The user name used to connect to the database",
  args: { name: "credential-details-username" },
  isRequired: true,
};
const optDataFile: Fig.Option = {
  name: "--data-file",
  description:
    "Name of the data file or temp file to be removed from the tablespace",
  args: { name: "data-file", template: "filepaths" },
  isRequired: true,
};
const optEndSnapshot: Fig.Option = {
  name: "--end-snapshot",
  description: "The end snapshot",
  args: { name: "integer" },
  isRequired: true,
};
const optExternalAsmId: Fig.Option = {
  name: "--external-asm-id",
  description: "The OCID of the external ASM",
  args: { name: "external-asm-id" },
  isRequired: true,
};
const optFeature: Fig.Option = {
  name: "--feature",
  description: "The name of the Database Management feature",
  args: {
    suggestions: [
      "DIAGNOSTICS_AND_MANAGEMENT",
      "DB_LIFECYCLE_MANAGEMENT",
      "SQLWATCH",
    ],
  },
  isRequired: true,
};
const optFeatureDetailsLicenseModel: Fig.Option = {
  name: "--feature-details-license-model",
  description: "The Oracle license model that applies to the external database",
  args: { suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"] },
  isRequired: true,
};
const optFilterName: Fig.Option = {
  name: "--filter-name",
  description: "The name of the filter",
  args: {
    suggestions: ["SQL_TEXT", "PARSING_SCHEMA_NAME", "MODULE", "ACTION"],
  },
};
const optFilterValue: Fig.Option = {
  name: "--filter-value",
  description: "The filter value",
  args: { name: "filter-value" },
};
const optId: Fig.Option = {
  name: "--id",
  description: "The identifier of the resource",
  args: { name: "id" },
};
const optIsAutoPurged: Fig.Option = {
  name: "--is-auto-purged",
  description:
    "Indicates whether the plan is purged if it is not used for a time period",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsCascadeConstraints: Fig.Option = {
  name: "--is-cascade-constraints",
  description:
    "Specifies whether all the constraints on the tablespace being dropped should be dropped",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsDroppingDataFiles: Fig.Option = {
  name: "--is-dropping-data-files",
  description:
    "Specifies whether all the associated data files of the tablespace being dropped should be dropped",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsEnabled2: Fig.Option = {
  name: "--is-enabled",
  description:
    "Indicates whether the plan is available for use by the optimizer",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsFixed2: Fig.Option = {
  name: "--is-fixed",
  description: "Indicates whether the plan baseline is fixed",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsIncludingContents: Fig.Option = {
  name: "--is-including-contents",
  description:
    "Specifies whether all the contents of the tablespace being dropped should be dropped",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optJobId: Fig.Option = {
  name: "--job-id",
  description: "The identifier of the job",
  args: { name: "job-id" },
  isRequired: true,
};
const optManagedDatabaseGroupId2: Fig.Option = {
  name: "--managed-database-group-id",
  description: "The OCID of the Managed Database Group",
  args: { name: "managed-database-group-id" },
  isRequired: true,
};
const optNamedCredentialId: Fig.Option = {
  name: "--named-credential-id",
  description: "The OCID of the named credential",
  args: { name: "named-credential-id" },
  isRequired: true,
};
const optPlanHash: Fig.Option = {
  name: "--plan-hash",
  description: "The plan identifier",
  args: { name: "number" },
};
const optPlanName: Fig.Option = {
  name: "--plan-name",
  description: "The plan name",
  args: { name: "plan-name" },
};
const optPlanName2: Fig.Option = {
  name: "--plan-name",
  description: "Then plan name",
  args: { name: "plan-name" },
};
const optRetentionWeeks: Fig.Option = {
  name: "--retention-weeks",
  description: "The retention period in weeks",
  args: { name: "integer" },
  isRequired: true,
};
const optSpaceBudgetPercent: Fig.Option = {
  name: "--space-budget-percent",
  description:
    "The maximum percent of SYSAUX space that the SQL Management Base can use",
  args: { name: "space-budget-percent" },
  isRequired: true,
};
const optSqlHandle2: Fig.Option = {
  name: "--sql-handle",
  description:
    "The SQL handle to use in identifying the SQL plan baseline into which the plans are loaded",
  args: { name: "sql-handle" },
};
const optSqlId: Fig.Option = {
  name: "--sql-id",
  description: "The SQL statement identifier",
  args: { name: "sql-id" },
};
const optSqlText: Fig.Option = {
  name: "--sql-text",
  description:
    "The SQL text to use in identifying the SQL plan baseline into which the plans are loaded",
  args: { name: "sql-text" },
};
const optSqlTextFilter: Fig.Option = {
  name: "--sql-text-filter",
  description:
    "A filter applied to AWR to select only qualifying plans to be loaded",
  args: { name: "sql-text-filter" },
};
const optTaskDescription: Fig.Option = {
  name: "--task-description",
  description: "The description of the SQL tuning task",
  args: { name: "task-description" },
};
const optTaskName: Fig.Option = {
  name: "--task-name",
  description: "The name of the SQL tuning task",
  args: { name: "task-name" },
  isRequired: true,
};
const optTaskParameters: Fig.Option = {
  name: "--task-parameters",
  args: { name: "json" },
  isRequired: true,
};
const optCloudConnectorId: Fig.Option = {
  name: "--cloud-connector-id",
  description: "The OCID of the cloud connector",
  args: { name: "cloud-connector-id" },
};
const optCloudDbSystemConnectorId: Fig.Option = {
  name: "--cloud-db-system-connector-id",
  description: "The OCID of the cloud connector",
  args: { name: "cloud-db-system-connector-id" },
  isRequired: true,
};
const optExternalConnectorId: Fig.Option = {
  name: "--external-connector-id",
  description: "The OCID of the external connector",
  args: { name: "external-connector-id" },
};
const optExternalExadataStorageServerId: Fig.Option = {
  name: "--external-exadata-storage-server-id",
  description: "The OCID of the Exadata storage server",
  args: { name: "external-exadata-storage-server-id" },
  isRequired: true,
};
const optExternalNonContainerDatabaseId: Fig.Option = {
  name: "--external-non-container-database-id",
  description: "The OCID of the external non-container database",
  args: { name: "external-non-container-database-id" },
  isRequired: true,
};
const optExternalPluggableDatabaseId: Fig.Option = {
  name: "--external-pluggable-database-id",
  description: "The OCID of the external pluggable database",
  args: { name: "external-pluggable-database-id" },
  isRequired: true,
};
const optManagedDatabaseId2: Fig.Option = {
  name: "--managed-database-id",
  description: "The OCID of the Managed Database",
  args: { name: "managed-database-id" },
};
const optPrivateEndpointId: Fig.Option = {
  name: "--private-endpoint-id",
  description: "The OCID of the Database Management private endpoint. required",
  args: { name: "private-endpoint-id" },
  isRequired: true,
};
const optSqlTuningAdvisorTaskId: Fig.Option = {
  name: "--sql-tuning-advisor-task-id",
  description: "The SQL tuning task identifier",
  args: { name: "integer" },
  isRequired: true,
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
  isRepeatable: true,
};
const optAssociatedResource: Fig.Option = {
  name: "--associated-resource",
  description:
    "The OCID of the resource that is associated to the named credential",
  args: { name: "associated-resource" },
};
const optAutoExtendMaxSize: Fig.Option = {
  name: "--auto-extend-max-size",
  description:
    "The maximum disk space allowed for automatic extension of the data files or temp files",
  args: { name: "json" },
};
const optAutoExtendNextSize: Fig.Option = {
  name: "--auto-extend-next-size",
  description:
    "The size of the next increment of disk space to be allocated automatically when more extents are required",
  args: { name: "json" },
};
const optCloudDbSystemDiscoveryId: Fig.Option = {
  name: "--cloud-db-system-discovery-id",
  description: "The OCID of the cloud DB system discovery",
  args: { name: "cloud-db-system-discovery-id" },
  isRequired: true,
};
const optCloudListenerId: Fig.Option = {
  name: "--cloud-listener-id",
  description: "The OCID of the cloud listener",
  args: { name: "cloud-listener-id" },
  isRequired: true,
};
const optConnectionInfo: Fig.Option = {
  name: "--connection-info",
  args: { name: "json" },
};
const optDefinedTagEquals: Fig.Option = {
  name: "--defined-tag-equals",
  description: "A list of tag filters to apply",
  args: { name: "defined-tag-equals" },
  isRepeatable: true,
};
const optDefinedTagExists: Fig.Option = {
  name: "--defined-tag-exists",
  description: "A list of tag existence filters to apply",
  args: { name: "defined-tag-exists" },
  isRepeatable: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "The description of the job",
  args: { name: "description" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description:
    "The information specified by the user about the named credential",
  args: { name: "description" },
};
const optExternalDbSystemConnectorId: Fig.Option = {
  name: "--external-db-system-connector-id",
  description: "The OCID of the external connector",
  args: { name: "external-db-system-connector-id" },
  isRequired: true,
};
const optExternalDbSystemDiscoveryId: Fig.Option = {
  name: "--external-db-system-discovery-id",
  description: "The OCID of the external DB system discovery",
  args: { name: "external-db-system-discovery-id" },
  isRequired: true,
};
const optExternalExadataStorageConnectorId: Fig.Option = {
  name: "--external-exadata-storage-connector-id",
  description: "The OCID of the connector to the Exadata storage server",
  args: { name: "external-exadata-storage-connector-id" },
  isRequired: true,
};
const optExternalListenerId: Fig.Option = {
  name: "--external-listener-id",
  description: "The OCID of the external listener",
  args: { name: "external-listener-id" },
  isRequired: true,
};
const optFeatureDetailsCanEnableAllCurrentPdbs2: Fig.Option = {
  name: "--feature-details-can-enable-all-current-pdbs",
  description:
    "Indicates whether SQL Watch should be enabled for all the current pluggable databases in the container",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optFeatureDetailsConnectorDetails2: Fig.Option = {
  name: "--feature-details-connector-details",
  args: { name: "json" },
};
const optFeatureDetailsIsAutoEnablePluggableDatabase2: Fig.Option = {
  name: "--feature-details-is-auto-enable-pluggable-database",
  description:
    "Indicates whether SQL Watch should be enabled automatically for all the pluggable databases in the container",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optFeatureDetailsManagementType: Fig.Option = {
  name: "--feature-details-management-type",
  description: "The management type for the database",
  args: { suggestions: ["BASIC", "ADVANCED"] },
  isRequired: true,
};
const optFreeformTagEquals: Fig.Option = {
  name: "--freeform-tag-equals",
  description: "A list of tag filters to apply",
  args: { name: "freeform-tag-equals" },
  isRepeatable: true,
};
const optFreeformTagExists: Fig.Option = {
  name: "--freeform-tag-exists",
  description: "A list of tag existence filters to apply",
  args: { name: "freeform-tag-exists" },
  isRepeatable: true,
};
const optIsAutoExtensible: Fig.Option = {
  name: "--is-auto-extensible",
  description:
    "Specifies whether the data file or temp file can be extended automatically",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsMaxSizeUnlimited: Fig.Option = {
  name: "--is-max-size-unlimited",
  description:
    "Specifies whether the disk space of the data file or temp file can be limited",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsRegularExpression: Fig.Option = {
  name: "--is-regular-expression",
  description:
    "The flag to indicate whether the search text is regular expression or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLogSearchText: Fig.Option = {
  name: "--log-search-text",
  description:
    "The optional query parameter to filter the attention or alert logs by search text",
  args: { name: "log-search-text" },
};
const optParameters: Fig.Option = {
  name: "--parameters",
  description: "A list of database parameter names",
  args: { name: "json" },
  isRequired: true,
};
const optParameters2: Fig.Option = {
  name: "--parameters",
  description: "A list of database parameters and their values",
  args: { name: "json" },
  isRequired: true,
};
const optScheduleDetails: Fig.Option = {
  name: "--schedule-details",
  args: { name: "json" },
};
const optTimeGreaterThanOrEqualTo2: Fig.Option = {
  name: "--time-greater-than-or-equal-to",
  description:
    "The optional greater than or equal to timestamp to filter the logs",
  args: { name: "datetime" },
};
const optTimeLessThanOrEqualTo2: Fig.Option = {
  name: "--time-less-than-or-equal-to",
  description:
    "The optional less than or equal to timestamp to filter the logs",
  args: { name: "datetime" },
};
const optTimeout: Fig.Option = {
  name: "--timeout",
  description: 'The job timeout duration, which is expressed like "1h 10m 15s"',
  args: { name: "timeout" },
};
const optTypeFilter: Fig.Option = {
  name: "--type-filter",
  description:
    "The optional parameter to filter the attention or alert logs by type",
  args: {
    suggestions: [
      "UNKNOWN",
      "INCIDENT_ERROR",
      "ERROR",
      "WARNING",
      "NOTIFICATION",
      "TRACE",
      "ALL",
    ],
  },
};
const optUsername2: Fig.Option = {
  name: "--username",
  description: "The user to connect to the database. required",
  args: { name: "username" },
  isRequired: true,
};
const optCloudClusterId: Fig.Option = {
  name: "--cloud-cluster-id",
  description: "The OCID of the cloud cluster",
  args: { name: "cloud-cluster-id" },
  isRequired: true,
};
const optCloudDbNodeId: Fig.Option = {
  name: "--cloud-db-node-id",
  description: "The OCID of the cloud database node",
  args: { name: "cloud-db-node-id" },
  isRequired: true,
};
const optCompareType: Fig.Option = {
  name: "--compare-type",
  description: "The time window used for metrics comparison",
  args: { suggestions: ["HOUR", "DAY", "WEEK"] },
};
const optCredentialDetailsPassword: Fig.Option = {
  name: "--credential-details-password",
  description: "The database user's password encoded using BASE64 scheme",
  args: { name: "credential-details-password" },
  isRequired: true,
};
const optCredentialDetailsPasswordSecretId: Fig.Option = {
  name: "--credential-details-password-secret-id",
  description: "The OCID of the Secret where the database password is stored",
  args: { name: "credential-details-password-secret-id" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "The optional single value query filter parameter on the entity display name",
  args: { name: "display-name" },
};
const optEndTimeLessThanOrEqualTo: Fig.Option = {
  name: "--end-time-less-than-or-equal-to",
  description:
    "The end time of the time range to retrieve the optimizer statistics of a Managed Database in UTC in ISO-8601",
  args: { name: "end-time-less-than-or-equal-to" },
};
const optExecutionName: Fig.Option = {
  name: "--execution-name",
  description: "The name of the Optimizer Statistics Advisor execution",
  args: { name: "execution-name" },
  isRequired: true,
};
const optExternalClusterId: Fig.Option = {
  name: "--external-cluster-id",
  description: "The OCID of the external cluster",
  args: { name: "external-cluster-id" },
  isRequired: true,
};
const optExternalDbNodeId: Fig.Option = {
  name: "--external-db-node-id",
  description: "The OCID of the external database node",
  args: { name: "external-db-node-id" },
  isRequired: true,
};
const optFileSize: Fig.Option = {
  name: "--file-size",
  description: "The size of each data file or temp file",
  args: { name: "json" },
};
const optIsEnabled3: Fig.Option = {
  name: "--is-enabled",
  description: "The status of the associated service",
  args: { name: "boolean", suggestions: ["true", "false"] },
  isRequired: true,
};
const optMetadata: Fig.Option = {
  name: "--metadata",
  description:
    "The associated service-specific inputs in JSON string format, which Database Management can identify",
  args: { name: "metadata" },
};
const optOriginalTaskId: Fig.Option = {
  name: "--original-task-id",
  description: "The identifier of the SQL tuning task being cloned",
  args: { name: "integer" },
  isRequired: true,
};
const optResultLocation: Fig.Option = {
  name: "--result-location",
  args: { name: "json" },
};
const optScope2: Fig.Option = {
  name: "--scope",
  description: "The scope for the SQL tuning task",
  args: { suggestions: ["LIMITED", "COMPREHENSIVE"] },
  isRequired: true,
};
const optSessionType: Fig.Option = {
  name: "--session-type",
  description:
    "The optional query parameter to filter ASH activities by FOREGROUND or BACKGROUND",
  args: { suggestions: ["FOREGROUND", "BACKGROUND", "ALL"] },
};
const optSortBy4: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optSortBy5: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort information by",
  args: { suggestions: ["DATABASENAME"] },
};
const optSqlDetails: Fig.Option = {
  name: "--sql-details",
  description: "The details of the SQL statement on which tuning is performed",
  args: { name: "json" },
};
const optSqlObjectId: Fig.Option = {
  name: "--sql-object-id",
  description: "The SQL object ID for the SQL tuning task",
  args: { name: "integer" },
  isRequired: true,
};
const optSqlTuningSet: Fig.Option = {
  name: "--sql-tuning-set",
  args: { name: "json" },
};
const optStartTimeGreaterThanOrEqualTo: Fig.Option = {
  name: "--start-time-greater-than-or-equal-to",
  description:
    "The start time of the time range to retrieve the optimizer statistics of a Managed Database in UTC",
  args: { name: "start-time-greater-than-or-equal-to" },
};
const optStatementTimeLimitInMinutes: Fig.Option = {
  name: "--statement-time-limit-in-minutes",
  description: "The time limit per SQL statement (in minutes)",
  args: { name: "integer" },
};
const optTaskId: Fig.Option = {
  name: "--task-id",
  description: "The identifier of the SQL tuning task being dropped",
  args: { name: "integer" },
  isRequired: true,
};
const optTimeEnded: Fig.Option = {
  name: "--time-ended",
  description: "The end time of the period in which SQL statements are running",
  args: { name: "datetime" },
};
const optTimeStarted: Fig.Option = {
  name: "--time-started",
  description:
    "The start time of the period in which SQL statements are running",
  args: { name: "datetime" },
};
const optTotalTimeLimitInMinutes: Fig.Option = {
  name: "--total-time-limit-in-minutes",
  description: "The time limit for running the SQL tuning task",
  args: { name: "integer" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "database-management",
  description: "Database Management",
  subcommands: [
    {
      name: "named-credential",
      description: "The details of a named credential",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a named credential to a different compartment",
          options: [
            optNamedCredentialId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the named credential should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a named credential",
          options: [
            {
              name: "--name",
              description: "The name of the named credential",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description: "The scope of the named credential",
              args: { suggestions: ["RESOURCE", "GLOBAL"] },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The type of resource associated with the named credential",
              args: { suggestions: ["ORACLE_DB"] },
              isRequired: true,
            },
            { name: "--content", args: { name: "json" }, isRequired: true },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the named credential resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDescription2,
            optAssociatedResource,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-named-credential-basic-named-credential-content",
          description: "Creates a named credential",
          options: [
            {
              name: "--name",
              description: "The name of the named credential",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description: "The scope of the named credential",
              args: { suggestions: ["RESOURCE", "GLOBAL"] },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The type of resource associated with the named credential",
              args: { suggestions: ["ORACLE_DB"] },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the named credential resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--content-user-name",
              description: "The user name used to connect to the database",
              args: { name: "content-user-name" },
              isRequired: true,
            },
            {
              name: "--content-role",
              description: "The role of the database user",
              args: { suggestions: ["NORMAL", "SYSDBA", "SYSDG"] },
              isRequired: true,
            },
            {
              name: "--content-password-secret-id",
              description:
                "The OCID of the Vault service secret that contains the database user password",
              args: { name: "content-password-secret-id" },
              isRequired: true,
            },
            {
              name: "--content-password-secret-access-mode",
              description:
                "The mechanism used to access the password plain text value",
              args: { suggestions: ["USER_PRINCIPAL", "RESOURCE_PRINCIPAL"] },
              isRequired: true,
            },
            optDescription2,
            optAssociatedResource,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the named credential specified by namedCredentialId",
          options: [
            optNamedCredentialId,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the named credential specified by namedCredentialId",
          options: [optNamedCredentialId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a single named credential specified by the name or all the named credentials in a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--associated-resource",
              description: "The resource associated to the named credential",
              args: { name: "associated-resource" },
            },
            {
              name: "--type",
              description:
                "The type of database that is associated to the named credential",
              args: { suggestions: ["ORACLE_DB"] },
            },
            {
              name: "--scope",
              description: "The scope of named credential",
              args: { suggestions: ["RESOURCE", "GLOBAL"] },
            },
            {
              name: "--name",
              description: "The name of the named credential",
              args: { name: "name" },
            },
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "test",
          description: "Tests the named credential",
          options: [optNamedCredentialId, optManagedDatabaseId2, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the named credential specified by namedCredentialId",
          options: [
            optNamedCredentialId,
            optDescription2,
            {
              name: "--scope",
              description: "The scope of the named credential",
              args: { suggestions: ["RESOURCE", "GLOBAL"] },
            },
            { name: "--content", args: { name: "json" } },
            optAssociatedResource,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-named-credential-basic-named-credential-content",
          description:
            "Updates the named credential specified by namedCredentialId",
          options: [
            optNamedCredentialId,
            {
              name: "--content-user-name",
              description: "The user name used to connect to the database",
              args: { name: "content-user-name" },
              isRequired: true,
            },
            {
              name: "--content-role",
              description: "The role of the database user",
              args: { suggestions: ["NORMAL", "SYSDBA", "SYSDG"] },
              isRequired: true,
            },
            {
              name: "--content-password-secret-id",
              description:
                "The OCID of the Vault service secret that contains the database user password",
              args: { name: "content-password-secret-id" },
              isRequired: true,
            },
            {
              name: "--content-password-secret-access-mode",
              description:
                "The mechanism used to access the password plain text value",
              args: { suggestions: ["USER_PRINCIPAL", "RESOURCE_PRINCIPAL"] },
              isRequired: true,
            },
            optDescription2,
            {
              name: "--scope",
              description: "The scope of the named credential",
              args: { suggestions: ["RESOURCE", "GLOBAL"] },
            },
            optAssociatedResource,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cluster-cache-metric",
      description:
        "The response containing the cluster cache metrics for the Oracle Real Application Clusters",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the metrics related to cluster cache for the Oracle Real Application Clusters",
          options: [
            optManagedDatabaseId,
            optStartTime,
            optEndTime,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Returns a paginated list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy4,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "managed-database-group",
      description: "The details of a Managed Database Group",
      subcommands: [
        {
          name: "add",
          description:
            "Adds a Managed Database to a specific Managed Database Group",
          options: [
            optManagedDatabaseGroupId2,
            optManagedDatabaseId,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a Managed Database Group to a different compartment",
          options: [
            optManagedDatabaseGroupId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the Managed Database Group should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a Managed Database Group",
          options: [
            {
              name: "--name",
              description: "The name of the Managed Database Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the Managed Database Group resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The information specified by the user about the Managed Database Group",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the Managed Database Group specified by managedDatabaseGroupId",
          options: [
            optManagedDatabaseGroupId2,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the Managed Database Group specified by managedDatabaseGroupId",
          options: [optManagedDatabaseGroupId2, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets the Managed Database Group for a specific ID or the list of Managed Database Groups in a specific",
          options: [
            optCompartmentId,
            optId,
            optName,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of a resource",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Removes a Managed Database from a Managed Database Group",
          options: [
            optManagedDatabaseGroupId2,
            optManagedDatabaseId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Managed Database Group specified by managedDatabaseGroupId",
          options: [
            optManagedDatabaseGroupId2,
            {
              name: "--description",
              description:
                "The information specified by the user about the Managed Database Group",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pdb-metrics",
      description:
        "The summary of Pluggable Databases (PDBs) and their resource usage metrics",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a summary of the resource usage metrics such as CPU, User I/O",
          options: [
            optManagedDatabaseId,
            optStartTime,
            optEndTime,
            optCompartmentId2,
            optCompareType,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of the work request status",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the status of the work request with the given Work Request ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--resource-id",
              description:
                "The OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter that returns the resources whose status matches the given WorkRequestStatus",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optSortOrder,
            optSortBy4,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "summary-metrics",
      description:
        "The response containing the metric collection for a specific Managed Database",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a summary of the activity and resource usage metrics like DB Time, CPU, User I/O, Wait, Storage",
          options: [
            optManagedDatabaseId,
            optStartTime,
            optEndTime,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fleet-health-metrics",
      description: "The details of the fleet health metrics",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the health metrics for a fleet of databases in a compartment or in a Managed Database Group",
          options: [
            {
              name: "--compare-baseline-time",
              description: "The baseline time for metrics comparison",
              args: { name: "compare-baseline-time" },
              isRequired: true,
            },
            {
              name: "--compare-target-time",
              description: "The target time for metrics comparison",
              args: { name: "compare-target-time" },
              isRequired: true,
            },
            optManagedDatabaseGroupId,
            optCompartmentId2,
            optCompareType,
            optFilterByMetricNames,
            {
              name: "--filter-by-database-type",
              description:
                "The filter used to filter the databases in the fleet by a specific Oracle Database type",
              args: { name: "filter-by-database-type" },
            },
            {
              name: "--filter-by-database-sub-type",
              description:
                "The filter used to filter the databases in the fleet by a specific Oracle Database subtype",
              args: { name: "filter-by-database-sub-type" },
            },
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            {
              name: "--filter-by-database-deployment-type",
              description:
                "The filter used to filter the databases in the fleet by a specific Oracle Database deployment type",
              args: { name: "filter-by-database-deployment-type" },
            },
            {
              name: "--filter-by-database-version",
              description:
                "The filter used to filter the databases in the fleet by a specific Oracle Database version",
              args: { name: "filter-by-database-version" },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tablespace",
      description: "The details of a tablespace",
      subcommands: [
        {
          name: "add",
          description: "Adds data files or temp files to the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            optCredentialDetails,
            optDatabaseCredential,
            {
              name: "--data-files",
              description:
                "The list of data files or temp files added to the tablespace",
              args: { name: "json" },
            },
            {
              name: "--file-count",
              description:
                "The number of data files or temp files to be added for the tablespace",
              args: { name: "integer" },
            },
            optFileSize,
            {
              name: "--is-reusable",
              description:
                "Specifies whether Oracle can reuse the data file or temp file",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsAutoExtensible,
            optAutoExtendNextSize,
            optAutoExtendMaxSize,
            optIsMaxSizeUnlimited,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a tablespace within the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            {
              name: "--name",
              description: "The name of the tablespace",
              args: { name: "name" },
              isRequired: true,
            },
            optCredentialDetails,
            optDatabaseCredential,
            {
              name: "--type",
              description: "The type of tablespace",
              args: { suggestions: ["PERMANENT", "TEMPORARY"] },
            },
            {
              name: "--is-bigfile",
              description:
                "Specifies whether the tablespace is a bigfile or smallfile tablespace",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--data-files",
              description:
                "The list of data files or temp files created for the tablespace",
              args: { name: "json" },
            },
            {
              name: "--file-count",
              description:
                "The number of data files or temp files created for the tablespace",
              args: { name: "integer" },
            },
            optFileSize,
            {
              name: "--is-reusable",
              description:
                "Specifies whether Oracle can reuse the data file or temp file",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsAutoExtensible,
            optAutoExtendNextSize,
            optAutoExtendMaxSize,
            optIsMaxSizeUnlimited,
            {
              name: "--block-size-in-kilobytes",
              description: "Block size for the tablespace",
              args: { name: "integer" },
            },
            {
              name: "--is-encrypted",
              description: "Indicates whether the tablespace is encrypted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--encryption-algorithm",
              description:
                "The name of the encryption algorithm to be used for tablespace encryption",
              args: { name: "encryption-algorithm" },
            },
            {
              name: "--default-compress",
              description:
                "The default compression of data for all tables created in the tablespace",
              args: { suggestions: ["NO_COMPRESS", "BASIC_COMPRESS"] },
            },
            {
              name: "--status",
              description: "The status of the tablespace",
              args: { suggestions: ["READ_ONLY", "READ_WRITE"] },
            },
            {
              name: "--extent-management",
              description:
                "Specifies how the extents of the tablespace should be managed",
              args: { suggestions: ["AUTOALLOCATE", "UNIFORM"] },
            },
            {
              name: "--extent-uniform-size",
              description:
                "The size of the extent when the tablespace is managed with uniform extents of a specific size",
              args: { name: "json" },
            },
            {
              name: "--segment-management",
              description:
                "Specifies whether tablespace segment management should be automatic or manual",
              args: { suggestions: ["AUTO", "MANUAL"] },
            },
            {
              name: "--is-default",
              description:
                "Specifies whether the tablespace is the default tablespace",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "drop",
          description:
            "Drops the tablespace specified by tablespaceName within the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optCredentialDetails,
            optDatabaseCredential,
            optIsIncludingContents,
            optIsDroppingDataFiles,
            optIsCascadeConstraints,
            optFromJson,
          ],
        },
        {
          name: "drop-tablespace-database-secret-credential-details",
          description:
            "Drops the tablespace specified by tablespaceName within the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optDatabaseCredentialPasswordSecretId,
            optCredentialDetails,
            optIsIncludingContents,
            optIsDroppingDataFiles,
            optIsCascadeConstraints,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "drop-tablespace-database-named-credential-details",
          description:
            "Drops the tablespace specified by tablespaceName within the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optDatabaseCredentialNamedCredentialId,
            optCredentialDetails,
            optIsIncludingContents,
            optIsDroppingDataFiles,
            optIsCascadeConstraints,
            optFromJson,
          ],
        },
        {
          name: "drop-tablespace-database-password-credential-details",
          description:
            "Drops the tablespace specified by tablespaceName within the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optDatabaseCredentialPassword,
            optCredentialDetails,
            optIsIncludingContents,
            optIsDroppingDataFiles,
            optIsCascadeConstraints,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the tablespace specified by tablespaceName within the Managed Database specified",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the list of tablespaces for the specified managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optName,
            optSortBy2,
            optSortOrder,
            optPage,
            optLimit,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a data file or temp file from the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            optDataFile,
            optCredentialDetails,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "remove-data-file-database-secret-credential-details",
          description: "Removes a data file or temp file from the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            optDataFile,
            optDatabaseCredentialPasswordSecretId,
            optCredentialDetails,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "remove-data-file-database-named-credential-details",
          description: "Removes a data file or temp file from the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            optDataFile,
            optDatabaseCredentialNamedCredentialId,
            optCredentialDetails,
            optFromJson,
          ],
        },
        {
          name: "remove-data-file-database-password-credential-details",
          description: "Removes a data file or temp file from the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            optDataFile,
            optDatabaseCredentialPassword,
            optCredentialDetails,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "resize-data-file",
          description: "Resizes a data file or temp file within the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            {
              name: "--data-file",
              description: "Name of the data file or temp file to be resized",
              args: { name: "data-file", template: "filepaths" },
              isRequired: true,
            },
            optCredentialDetails,
            optDatabaseCredential,
            {
              name: "--file-size",
              description: "The new size of the data file or temp file",
              args: { name: "json" },
            },
            optIsAutoExtensible,
            optAutoExtendNextSize,
            optAutoExtendMaxSize,
            optIsMaxSizeUnlimited,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the attributes of the tablespace specified by tablespaceName within the Managed Database specified",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optCredentialDetails,
            optDatabaseCredential,
            {
              name: "--name",
              description: "The name of the tablespace",
              args: { name: "name" },
            },
            {
              name: "--type",
              description: "The type of tablespace",
              args: { suggestions: ["PERMANENT", "TEMPORARY"] },
            },
            optFileSize,
            {
              name: "--status",
              description: "The status of the tablespace",
              args: { suggestions: ["READ_ONLY", "READ_WRITE"] },
            },
            optIsAutoExtensible,
            optAutoExtendNextSize,
            optAutoExtendMaxSize,
            optIsMaxSizeUnlimited,
            {
              name: "--is-default",
              description:
                "Specifies whether the tablespace is the default tablespace",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "drop-with-pwd",
          description:
            "Drops the tablespace specified by tablespaceName within the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optDatabaseCredential,
            optIsIncludingContents,
            optIsDroppingDataFiles,
            optIsCascadeConstraints,
            optPassword,
            optRole,
            optUsername2,
            optFromJson,
          ],
        },
        {
          name: "drop-with-secret",
          description:
            "Drops the tablespace specified by tablespaceName within the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optDatabaseCredential,
            optIsIncludingContents,
            optIsDroppingDataFiles,
            optIsCascadeConstraints,
            {
              name: "--secret",
              description:
                "The OCID of the Secret where the database password is stored. required",
              args: { name: "secret" },
              isRequired: true,
            },
            optRole,
            optUsername2,
            optFromJson,
          ],
        },
        {
          name: "remove-datafile-with-pwd",
          description: "Removes a data file or temp file from the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            optDataFile,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername2,
            optFromJson,
          ],
        },
        {
          name: "remove-datafile-with-secret",
          description: "Removes a data file or temp file from the tablespace",
          options: [
            optManagedDatabaseId,
            optTablespaceName,
            optFileType,
            optDataFile,
            optDatabaseCredential,
            {
              name: "--secret",
              description:
                "The OCID of the Secret where the database password is stored. required",
              args: { name: "secret" },
              isRequired: true,
            },
            optRole,
            optUsername2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a paginated list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy4,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "private-endpoint",
      description:
        "A Database Management private endpoint allows Database Management to connect to databases in a Virtual Cloud",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Database Management private endpoint and its dependent resources to the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the Database Management private endpoint needs to be moved",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Database Management private endpoint",
          options: [
            {
              name: "--name",
              description:
                "The display name of the Database Management private endpoint",
              args: { name: "name" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--subnet-id",
              description: "The OCID of the subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--is-cluster",
              description:
                "Specifies whether the Database Management private endpoint will be used for Oracle Databases in a cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-dns-resolution-enabled",
              description:
                "Specifies whether the Database Management private endpoint has DNS proxy server enabled to resolve private",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--description",
              description: "The description of the private endpoint",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCIDs of the Network Security Groups to which the Database Management private endpoint belongs",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a specific Database Management private endpoint",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of a specific Database Management private endpoint",
          options: [optPrivateEndpointId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Database Management private endpoints",
          options: [
            optCompartmentId,
            optName,
            {
              name: "--vcn-id",
              description: "The OCID of the VCN",
              args: { name: "vcn-id" },
            },
            {
              name: "--is-cluster",
              description:
                "The option to filter Database Management private endpoints that can used for Oracle Databases in a cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-dns-resolution-enabled",
              description:
                "The option to filter Database Management private endpoints which are endbled with DNS proxy server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of a resource",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of a specific Database Management private endpoint",
          options: [
            {
              name: "--name",
              description: "The display name of the private endpoint",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "The description of the private endpoint",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCIDs of the Network Security Groups to which the Database Management private endpoint belongs",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "job-executions-status",
      description: "A collection of job execution status summary objects",
      subcommands: [
        {
          name: "summarize",
          description:
            "Gets the number of job executions grouped by status for a job, Managed Database",
          options: [
            optCompartmentId,
            {
              name: "--start-time",
              description:
                "The start time of the time range to retrieve the status summary of job executions in UTC in ISO-8601 format",
              args: { name: "start-time" },
              isRequired: true,
            },
            {
              name: "--end-time",
              description:
                "The end time of the time range to retrieve the status summary of job executions in UTC in ISO-8601 format",
              args: { name: "end-time" },
              isRequired: true,
            },
            optId,
            optManagedDatabaseGroupId,
            optManagedDatabaseId2,
            optName,
            optSortBy2,
            optSortOrder,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "managed-database",
      description: "The details of a Managed Database",
      subcommands: [
        {
          name: "change-database-parameters",
          description: "Changes database parameter values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters2,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "change-database-parameters-database-secret-credential-details",
          description: "Changes database parameter values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters2,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "change-database-parameters-database-named-credential-details",
          description: "Changes database parameter values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters2,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "change-database-parameters-database-password-credential-details",
          description: "Changes database parameter values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters2,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "change-plan-retention",
          description: "Changes the retention period of unused plans",
          options: [
            optManagedDatabaseId,
            optRetentionWeeks,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "change-plan-retention-database-secret-credential-details",
          description: "Changes the retention period of unused plans",
          options: [
            optManagedDatabaseId,
            optRetentionWeeks,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "change-plan-retention-database-named-credential-details",
          description: "Changes the retention period of unused plans",
          options: [
            optManagedDatabaseId,
            optRetentionWeeks,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "change-plan-retention-database-password-credential-details",
          description: "Changes the retention period of unused plans",
          options: [
            optManagedDatabaseId,
            optRetentionWeeks,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "change-space-budget",
          description:
            "Changes the disk space limit for the SQL Management Base",
          options: [
            optManagedDatabaseId,
            optSpaceBudgetPercent,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "change-space-budget-database-secret-credential-details",
          description:
            "Changes the disk space limit for the SQL Management Base",
          options: [
            optManagedDatabaseId,
            optSpaceBudgetPercent,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "change-space-budget-database-named-credential-details",
          description:
            "Changes the disk space limit for the SQL Management Base",
          options: [
            optManagedDatabaseId,
            optSpaceBudgetPercent,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "change-space-budget-database-password-credential-details",
          description:
            "Changes the disk space limit for the SQL Management Base",
          options: [
            optManagedDatabaseId,
            optSpaceBudgetPercent,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "change-sql-plan-baselines-attributes-database-secret-credential-details",
          description:
            "Changes one or more attributes of a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optSqlHandle,
            optPlanName2,
            optIsEnabled2,
            optIsFixed2,
            optIsAutoPurged,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "change-sql-plan-baselines-attributes-database-named-credential-details",
          description:
            "Changes one or more attributes of a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optSqlHandle,
            optPlanName2,
            optIsEnabled2,
            optIsFixed2,
            optIsAutoPurged,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "change-sql-plan-baselines-attributes-database-password-credential-details",
          description:
            "Changes one or more attributes of a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optSqlHandle,
            optPlanName2,
            optIsEnabled2,
            optIsFixed2,
            optIsAutoPurged,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "configure-automatic-capture-filters-database-secret-credential-details",
          description:
            "Configures automatic capture filters to capture only those statements that match the filter criteria",
          options: [
            optManagedDatabaseId,
            optAutoCaptureFilters,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "configure-automatic-capture-filters-database-named-credential-details",
          description:
            "Configures automatic capture filters to capture only those statements that match the filter criteria",
          options: [
            optManagedDatabaseId,
            optAutoCaptureFilters,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "configure-automatic-capture-filters-database-password-credential-details",
          description:
            "Configures automatic capture filters to capture only those statements that match the filter criteria",
          options: [
            optManagedDatabaseId,
            optAutoCaptureFilters,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "configure-automatic-spm-evolve-advisor-task-database-secret-credential-details",
          description:
            "Configures the Automatic SPM Evolve Advisor task SYS_AUTO_SPM_EVOLVE_TASK by specifying task parameters",
          options: [
            optManagedDatabaseId,
            optTaskParameters,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "configure-automatic-spm-evolve-advisor-task-database-named-credential-details",
          description:
            "Configures the Automatic SPM Evolve Advisor task SYS_AUTO_SPM_EVOLVE_TASK by specifying task parameters",
          options: [
            optManagedDatabaseId,
            optTaskParameters,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "configure-automatic-spm-evolve-advisor-task-database-password-credential-details",
          description:
            "Configures the Automatic SPM Evolve Advisor task SYS_AUTO_SPM_EVOLVE_TASK by specifying task parameters",
          options: [
            optManagedDatabaseId,
            optTaskParameters,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-automatic-initial-plan-capture-database-secret-credential-details",
          description: "Disables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-automatic-initial-plan-capture-database-named-credential-details",
          description: "Disables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "disable-automatic-initial-plan-capture-database-password-credential-details",
          description: "Disables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-automatic-spm-evolve-advisor-task-database-secret-credential-details",
          description: "Disables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-automatic-spm-evolve-advisor-task-database-named-credential-details",
          description: "Disables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "disable-automatic-spm-evolve-advisor-task-database-password-credential-details",
          description: "Disables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-autonomous-database-management-feature",
          description:
            "Disables a Database Management feature for the specified Autonomous Database",
          options: [
            optAutonomousDatabaseId,
            optFeature,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-database-management-feature",
          description:
            "Disables a Database Management feature for the specified Oracle cloud database",
          options: [
            optDatabaseId,
            optFeature,
            {
              name: "--can-disable-all-pdbs",
              description:
                "Indicates whether Diagnostics & Management should be disabled for the pluggable databases before disabling it",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-external-container-database-management-feature",
          description:
            "Disables a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeature,
            {
              name: "--can-disable-all-pdbs",
              description:
                "Indicates whether Diagnostics & Management should be disabled for the pluggable databases before disabling it",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-external-non-container-database-management-feature",
          description:
            "Disables a Database Management feature for the specified external non-container database",
          options: [
            optExternalNonContainerDatabaseId,
            optFeature,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-external-pluggable-database-management-feature",
          description:
            "Disables a Database Management feature for the specified external pluggable database",
          options: [
            optExternalPluggableDatabaseId,
            optFeature,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-high-frequency-automatic-spm-evolve-advisor-task-database-secret-credential-details",
          description:
            "Disables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-high-frequency-automatic-spm-evolve-advisor-task-database-named-credential-details",
          description:
            "Disables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "disable-high-frequency-automatic-spm-evolve-advisor-task-database-password-credential-details",
          description:
            "Disables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-pluggable-database-management-feature",
          description:
            "Disables a Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeature,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-sql-plan-baselines-usage-database-secret-credential-details",
          description:
            "Disables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "disable-sql-plan-baselines-usage-database-named-credential-details",
          description:
            "Disables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "disable-sql-plan-baselines-usage-database-password-credential-details",
          description:
            "Disables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "drop-sql-plan-baselines",
          description:
            "Drops a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optSqlHandle,
            optPlanName,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "drop-sql-plan-baselines-database-secret-credential-details",
          description:
            "Drops a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optSqlHandle,
            optPlanName,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "drop-sql-plan-baselines-database-named-credential-details",
          description:
            "Drops a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optSqlHandle,
            optPlanName,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "drop-sql-plan-baselines-database-password-credential-details",
          description:
            "Drops a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optSqlHandle,
            optPlanName,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-automatic-initial-plan-capture-database-secret-credential-details",
          description: "Enables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-automatic-initial-plan-capture-database-named-credential-details",
          description: "Enables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "enable-automatic-initial-plan-capture-database-password-credential-details",
          description: "Enables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-automatic-spm-evolve-advisor-task-database-secret-credential-details",
          description: "Enables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-automatic-spm-evolve-advisor-task-database-named-credential-details",
          description: "Enables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "enable-automatic-spm-evolve-advisor-task-database-password-credential-details",
          description: "Enables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-autonomous-database-management-feature",
          description:
            "Enables a Database Management feature for the specified Autonomous Database",
          options: [
            optAutonomousDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-autonomous-database-management-feature-autonomous-database-sql-watch-feature-details",
          description:
            "Enables a Database Management feature for the specified Autonomous Database",
          options: [
            optAutonomousDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optIfMatch,
            optFeatureDetailsConnectorDetails2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-autonomous-database-management-feature-autonomous-database-diagnostics-and-management-feature-details",
          description:
            "Enables a Database Management feature for the specified Autonomous Database",
          options: [
            optAutonomousDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optIfMatch,
            optFeatureDetailsConnectorDetails2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-database-management-feature",
          description:
            "Enables a Database Management feature for the specified cloud database",
          options: [
            optDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-database-management-feature-database-diagnostics-and-management-feature-details",
          description:
            "Enables a Database Management feature for the specified cloud database",
          options: [
            optDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsManagementType,
            optIfMatch,
            optFeatureDetailsIsAutoEnablePluggableDatabase,
            optFeatureDetailsCanEnableAllCurrentPdbs,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-database-management-feature-database-lifecycle-management-feature-details",
          description:
            "Enables a Database Management feature for the specified cloud database",
          options: [
            optDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-database-management-feature-database-sql-watch-feature-details",
          description:
            "Enables a Database Management feature for the specified cloud database",
          options: [
            optDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optFeatureDetailsCanEnableAllCurrentPdbs2,
            optFeatureDetailsIsAutoEnablePluggableDatabase2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-container-database-management-feature",
          description:
            "Enables a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-container-database-management-feature-external-database-lifecycle-management-feature-details",
          description:
            "Enables a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsLicenseModel,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-container-database-management-feature-external-database-sql-watch-feature-details",
          description:
            "Enables a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-container-database-management-feature-external-database-diagnostics-and-management-feature-details",
          description:
            "Enables a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsLicenseModel,
            optIfMatch,
            optFeatureDetailsCanEnableAllCurrentPdbs,
            optFeatureDetailsIsAutoEnablePluggableDatabase,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-non-container-database-management-feature",
          description:
            "Enables Database Management feature for the specified external non-container database",
          options: [
            optExternalNonContainerDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-non-container-database-management-feature-external-database-lifecycle-management-feature-details",
          description:
            "Enables Database Management feature for the specified external non-container database",
          options: [
            optExternalNonContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsLicenseModel,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-non-container-database-management-feature-external-database-sql-watch-feature-details",
          description:
            "Enables Database Management feature for the specified external non-container database",
          options: [
            optExternalNonContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-non-container-database-management-feature-external-database-diagnostics-and-management-feature-details",
          description:
            "Enables Database Management feature for the specified external non-container database",
          options: [
            optExternalNonContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsLicenseModel,
            optIfMatch,
            optFeatureDetailsCanEnableAllCurrentPdbs,
            optFeatureDetailsIsAutoEnablePluggableDatabase,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-pluggable-database-management-feature",
          description:
            "Enables a Database Management feature for the specified external pluggable database",
          options: [
            optExternalPluggableDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-pluggable-database-management-feature-external-pluggable-database-diagnostics-and-management-feature-details",
          description:
            "Enables a Database Management feature for the specified external pluggable database",
          options: [
            optExternalPluggableDatabaseId,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-pluggable-database-management-feature-external-pluggable-database-lifecycle-management-feature-details",
          description:
            "Enables a Database Management feature for the specified external pluggable database",
          options: [
            optExternalPluggableDatabaseId,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-pluggable-database-management-feature-external-pluggable-database-sql-watch-feature-details",
          description:
            "Enables a Database Management feature for the specified external pluggable database",
          options: [
            optExternalPluggableDatabaseId,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-high-frequency-automatic-spm-evolve-advisor-task-database-secret-credential-details",
          description:
            "Enables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-high-frequency-automatic-spm-evolve-advisor-task-database-named-credential-details",
          description:
            "Enables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "enable-high-frequency-automatic-spm-evolve-advisor-task-database-password-credential-details",
          description:
            "Enables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-pluggable-database-management-feature",
          description:
            "Enables a Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-pluggable-database-management-feature-database-diagnostics-and-management-feature-details",
          description:
            "Enables a Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsManagementType,
            optIfMatch,
            optFeatureDetailsIsAutoEnablePluggableDatabase,
            optFeatureDetailsCanEnableAllCurrentPdbs,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-pluggable-database-management-feature-database-lifecycle-management-feature-details",
          description:
            "Enables a Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-pluggable-database-management-feature-database-sql-watch-feature-details",
          description:
            "Enables a Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optFeatureDetailsCanEnableAllCurrentPdbs2,
            optFeatureDetailsIsAutoEnablePluggableDatabase2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-sql-plan-baselines-usage-database-secret-credential-details",
          description:
            "Enables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "enable-sql-plan-baselines-usage-database-named-credential-details",
          description:
            "Enables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "enable-sql-plan-baselines-usage-database-password-credential-details",
          description:
            "Enables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "get-awr-db-sql-report",
          description:
            "Gets the SQL health check report for one SQL of the specified database",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            {
              name: "--sql-id",
              description: "The parameter to filter SQL by ID",
              args: { name: "sql-id" },
              isRequired: true,
            },
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            {
              name: "--report-format",
              description: "The format of the AWR report",
              args: { suggestions: ["HTML", "TEXT"] },
            },
            optContainerId,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the Managed Database specified by managedDatabaseId",
          options: [optManagedDatabaseId, optFromJson],
        },
        {
          name: "get-optimizer-statistics-advisor-execution",
          description:
            "Gets a comprehensive report of the Optimizer Statistics Advisor execution",
          options: [
            optManagedDatabaseId,
            optExecutionName,
            {
              name: "--task-name",
              description:
                "The name of the optimizer statistics collection execution task",
              args: { name: "task-name" },
              isRequired: true,
            },
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "get-optimizer-statistics-advisor-execution-script",
          description:
            "Gets the Oracle system-generated script for the specified Optimizer Statistics Advisor execution",
          options: [
            optManagedDatabaseId,
            optExecutionName,
            {
              name: "--task-name",
              description:
                "The name of the optimizer statistics collection execution task",
              args: { name: "task-name" },
              isRequired: true,
            },
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "get-optimizer-statistics-collection-operation",
          description:
            "Gets a detailed report of the Optimizer Statistics Collection operation for the specified Managed Database",
          options: [
            optManagedDatabaseId,
            {
              name: "--optimizer-statistics-collection-operation-id",
              description:
                "The ID of the Optimizer Statistics Collection operation",
              args: { name: "number" },
              isRequired: true,
            },
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "get-sql-plan-baseline",
          description:
            "Gets the SQL plan baseline details for the specified planName",
          options: [
            optManagedDatabaseId,
            {
              name: "--plan-name",
              description: "The plan name of the SQL plan baseline",
              args: { name: "plan-name" },
              isRequired: true,
            },
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "get-user",
          description:
            "Gets the details of the user specified by managedDatabaseId and userName",
          options: [
            optManagedDatabaseId,
            optUserName,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "implement-optimizer-statistics-advisor-recommendations",
          description:
            "Asynchronously implements the findings and recommendations of the Optimizer Statistics Advisor execution",
          options: [
            optManagedDatabaseId,
            optExecutionName,
            {
              name: "--task-name",
              description: "The name of the task",
              args: { name: "task-name" },
              isRequired: true,
            },
            { name: "--job-details", args: { name: "json" }, isRequired: true },
            optFromJson,
          ],
        },
        {
          name: "list-asm-properties",
          description:
            "Gets the list of ASM properties for the specified managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optName,
            optSortBy2,
            optSortOrder,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-awr-db-snapshots",
          description:
            "Lists AWR snapshots for the specified database in the AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optContainerId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the AWR snapshot summary data",
              args: { suggestions: ["TIME_BEGIN", "SNAPSHOT_ID"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-awr-dbs",
          description:
            "Gets the list of databases and their snapshot summary details available in the AWR of the specified Managed",
          options: [
            optManagedDatabaseId,
            {
              name: "--name",
              description:
                "The optional single value query parameter to filter the entity name",
              args: { name: "name" },
            },
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the AWR summary data",
              args: { suggestions: ["END_INTERVAL_TIME", "NAME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-consumer-group-privileges",
          description:
            "Gets the list of consumer group privileges granted to a specific user",
          options: [
            optManagedDatabaseId,
            optUserName,
            optName,
            optSortBy3,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-cursor-cache-statements",
          description:
            "Lists the SQL statements from shared SQL area, also called the cursor cache",
          options: [
            optManagedDatabaseId,
            {
              name: "--sql-text",
              description:
                "A filter to return all the SQL plan baselines that match the SQL text",
              args: { name: "sql-text" },
            },
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the SQL statement summary data",
              args: { suggestions: ["sqlId", "schema"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-data-access-containers",
          description: "Gets the list of containers for a specific user",
          options: [
            optManagedDatabaseId,
            optUserName,
            optName,
            optSortBy3,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-database-parameters",
          description:
            "Gets the list of database parameters for the specified Managed Database",
          options: [
            optManagedDatabaseId,
            {
              name: "--source",
              description: "The source used to list database parameters",
              args: { suggestions: ["CURRENT", "SPFILE"] },
            },
            {
              name: "--name",
              description:
                "A filter to return all parameters that have the text given in their names",
              args: { name: "name" },
            },
            {
              name: "--is-allowed-values-included",
              description:
                "When true, results include a list of valid values for parameters (if applicable)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortBy3,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the Managed Database for a specific ID or the list of Managed Databases in a specific compartment",
          options: [
            optCompartmentId,
            optId,
            optName,
            {
              name: "--management-option",
              description:
                "A filter to return Managed Databases with the specified management option",
              args: { suggestions: ["BASIC", "ADVANCED"] },
            },
            {
              name: "--deployment-type",
              description:
                "A filter to return Managed Databases of the specified deployment type",
              args: {
                suggestions: [
                  "ONPREMISE",
                  "BM",
                  "VM",
                  "EXADATA",
                  "EXADATA_CC",
                  "AUTONOMOUS",
                  "EXADATA_XS",
                ],
              },
            },
            {
              name: "--external-exadata-infrastructure-id",
              description: "The OCID of the Exadata infrastructure",
              args: { name: "external-exadata-infrastructure-id" },
            },
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-object-privileges",
          description:
            "Gets the list of object privileges granted to a specific user",
          options: [
            optManagedDatabaseId,
            optUserName,
            optName,
            optSortBy3,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-optimizer-statistics-advisor-executions",
          description:
            "Lists the details of the Optimizer Statistics Advisor task executions, such as their duration",
          options: [
            optManagedDatabaseId,
            optStartTimeGreaterThanOrEqualTo,
            optEndTimeLessThanOrEqualTo,
            optOpcNamedCredentialId,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-optimizer-statistics-collection-aggregations",
          description:
            "Gets a list of the optimizer statistics collection operations per hour",
          options: [
            optManagedDatabaseId,
            {
              name: "--group-type",
              description: "The optimizer statistics tasks grouped by type",
              args: { suggestions: ["TASK_STATUS", "TASK_OBJECTS_STATUS"] },
              isRequired: true,
            },
            optStartTimeGreaterThanOrEqualTo,
            optEndTimeLessThanOrEqualTo,
            {
              name: "--task-type",
              description: "The filter types of the optimizer statistics tasks",
              args: { suggestions: ["ALL", "MANUAL", "AUTO"] },
            },
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-optimizer-statistics-collection-operations",
          description:
            "Lists the Optimizer Statistics Collection (Auto and Manual) task operation summary for the specified Managed",
          options: [
            optManagedDatabaseId,
            optStartTimeGreaterThanOrEqualTo,
            optEndTimeLessThanOrEqualTo,
            {
              name: "--task-type",
              description: "The filter types of the optimizer statistics tasks",
              args: { suggestions: ["ALL", "MANUAL", "AUTO"] },
            },
            optLimit,
            optPage,
            {
              name: "--filter-by",
              description:
                "The parameter used to filter the optimizer statistics operations",
              args: { name: "filter-by" },
            },
            {
              name: "--sort-by",
              description:
                "Sorts the list of optimizer statistics operations based on a specific attribute",
              args: { suggestions: ["START_TIME", "END_TIME", "STATUS"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-proxied-for-users",
          description:
            "Gets the list of users on whose behalf the current user acts as proxy",
          options: [
            optManagedDatabaseId,
            optUserName,
            optName,
            optSortBy3,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-proxy-users",
          description: "Gets the list of proxy users for the current user",
          options: [
            optManagedDatabaseId,
            optUserName,
            optName,
            optSortBy3,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-roles",
          description: "Gets the list of roles granted to a specific user",
          options: [
            optManagedDatabaseId,
            optUserName,
            optName,
            optSortBy3,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-sql-plan-baselines",
          description:
            "Lists the SQL plan baselines for the specified Managed Database",
          options: [
            optManagedDatabaseId,
            {
              name: "--plan-name",
              description:
                "A filter to return only SQL plan baselines that match the plan name",
              args: { name: "plan-name" },
            },
            {
              name: "--sql-handle",
              description:
                "A filter to return all the SQL plan baselines for the specified SQL handle",
              args: { name: "sql-handle" },
            },
            {
              name: "--sql-text",
              description:
                "A filter to return all the SQL plan baselines that match the SQL text",
              args: { name: "sql-text" },
            },
            {
              name: "--is-enabled",
              description:
                "A filter to return only SQL plan baselines that are either enabled or not enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-accepted",
              description:
                "A filter to return only SQL plan baselines that are either accepted or not accepted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-reproduced",
              description:
                "A filter to return only SQL plan baselines that were either reproduced or not reproduced by the optimizer",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-fixed",
              description:
                "A filter to return only SQL plan baselines that are either fixed or not fixed",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-adaptive",
              description:
                "A filter to return only SQL plan baselines that are either adaptive or not adaptive",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--origin",
              description:
                "A filter to return all the SQL plan baselines that match the origin",
              args: {
                suggestions: [
                  "ADDM_SQLTUNE",
                  "AUTO_CAPTURE",
                  "AUTO_SQLTUNE",
                  "EVOLVE_AUTO_INDEX_LOAD",
                  "EVOLVE_CREATE_FROM_ADAPTIVE",
                  "EVOLVE_LOAD_FROM_STS",
                  "EVOLVE_LOAD_FROM_AWR",
                  "EVOLVE_LOAD_FROM_CURSOR_CACHE",
                  "MANUAL_LOAD",
                  "MANUAL_LOAD_FROM_AWR",
                  "MANUAL_LOAD_FROM_CURSOR_CACHE",
                  "MANUAL_LOAD_FROM_STS",
                  "MANUAL_SQLTUNE",
                  "STORED_OUTLINE",
                  "UNKNOWN",
                ],
              },
            },
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description:
                "The option to sort the SQL plan baseline summary data",
              args: {
                suggestions: [
                  "timeCreated",
                  "timeLastModified",
                  "timeLastExecuted",
                ],
              },
            },
            optSortOrder,
            {
              name: "--is-auto-purged",
              description:
                "A filter to return only SQL plan baselines that are either auto-purged or not auto-purged",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--time-last-executed-greater-than",
              description:
                "A filter to return only SQL plan baselines whose last execution time is after the specified value",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-executed-less-than",
              description:
                "A filter to return only SQL plan baselines whose last execution time is before the specified value",
              args: { name: "datetime" },
            },
            {
              name: "--is-never-executed",
              description:
                "A filter to return only SQL plan baselines that are not executed till now",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-system-privileges",
          description:
            "Gets the list of system privileges granted to a specific user",
          options: [
            optManagedDatabaseId,
            optUserName,
            optName,
            optSortBy3,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-table-statistics",
          description:
            "Lists the database table statistics grouped by different statuses such as Not Stale Stats, Stale Stats",
          options: [
            optManagedDatabaseId,
            optOpcNamedCredentialId,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-users",
          description:
            "Gets the list of users for the specified managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optName,
            optSortBy2,
            optSortOrder,
            optLimit,
            optPage,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "load-sql-plan-baselines-from-awr-database-secret-credential-details",
          description:
            "Loads plans from Automatic Workload Repository (AWR) snapshots",
          options: [
            optManagedDatabaseId,
            optJobName,
            optBeginSnapshot,
            optEndSnapshot,
            optDatabaseCredentialPasswordSecretId,
            optJobDescription,
            optSqlTextFilter,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "load-sql-plan-baselines-from-awr-database-named-credential-details",
          description:
            "Loads plans from Automatic Workload Repository (AWR) snapshots",
          options: [
            optManagedDatabaseId,
            optJobName,
            optBeginSnapshot,
            optEndSnapshot,
            optDatabaseCredentialNamedCredentialId,
            optJobDescription,
            optSqlTextFilter,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "load-sql-plan-baselines-from-awr-database-password-credential-details",
          description:
            "Loads plans from Automatic Workload Repository (AWR) snapshots",
          options: [
            optManagedDatabaseId,
            optJobName,
            optBeginSnapshot,
            optEndSnapshot,
            optDatabaseCredentialPassword,
            optJobDescription,
            optSqlTextFilter,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "load-sql-plan-baselines-from-cursor-cache-database-secret-credential-details",
          description:
            "Loads plans for statements directly from the shared SQL area, also called the cursor cache",
          options: [
            optManagedDatabaseId,
            optJobName,
            optDatabaseCredentialPasswordSecretId,
            optJobDescription,
            optSqlId,
            optPlanHash,
            optSqlText,
            optSqlHandle2,
            optFilterName,
            optFilterValue,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "load-sql-plan-baselines-from-cursor-cache-database-named-credential-details",
          description:
            "Loads plans for statements directly from the shared SQL area, also called the cursor cache",
          options: [
            optManagedDatabaseId,
            optJobName,
            optDatabaseCredentialNamedCredentialId,
            optJobDescription,
            optSqlId,
            optPlanHash,
            optSqlText,
            optSqlHandle2,
            optFilterName,
            optFilterValue,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "load-sql-plan-baselines-from-cursor-cache-database-password-credential-details",
          description:
            "Loads plans for statements directly from the shared SQL area, also called the cursor cache",
          options: [
            optManagedDatabaseId,
            optJobName,
            optDatabaseCredentialPassword,
            optJobDescription,
            optSqlId,
            optPlanHash,
            optSqlText,
            optSqlHandle2,
            optFilterName,
            optFilterValue,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "modify-autonomous-database-management-feature",
          description:
            "Modifies the Database Management feature for the specified Autonomous Database",
          options: [
            optAutonomousDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-autonomous-database-management-feature-autonomous-database-sql-watch-feature-details",
          description:
            "Modifies the Database Management feature for the specified Autonomous Database",
          options: [
            optAutonomousDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optIfMatch,
            optFeatureDetailsConnectorDetails2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-autonomous-database-management-feature-autonomous-database-diagnostics-and-management-feature-details",
          description:
            "Modifies the Database Management feature for the specified Autonomous Database",
          options: [
            optAutonomousDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optIfMatch,
            optFeatureDetailsConnectorDetails2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-database-management-feature",
          description:
            "Modifies a Database Management feature for the specified Oracle cloud database",
          options: [
            optDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-database-management-feature-database-diagnostics-and-management-feature-details",
          description:
            "Modifies a Database Management feature for the specified Oracle cloud database",
          options: [
            optDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsManagementType,
            optIfMatch,
            optFeatureDetailsIsAutoEnablePluggableDatabase,
            optFeatureDetailsCanEnableAllCurrentPdbs,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-database-management-feature-database-lifecycle-management-feature-details",
          description:
            "Modifies a Database Management feature for the specified Oracle cloud database",
          options: [
            optDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-database-management-feature-database-sql-watch-feature-details",
          description:
            "Modifies a Database Management feature for the specified Oracle cloud database",
          options: [
            optDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optFeatureDetailsCanEnableAllCurrentPdbs2,
            optFeatureDetailsIsAutoEnablePluggableDatabase2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-external-container-database-management-feature",
          description:
            "Modifies a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-external-container-database-management-feature-external-database-lifecycle-management-feature-details",
          description:
            "Modifies a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsLicenseModel,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-external-container-database-management-feature-external-database-sql-watch-feature-details",
          description:
            "Modifies a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-external-container-database-management-feature-external-database-diagnostics-and-management-feature-details",
          description:
            "Modifies a Database Management feature for the specified external container database",
          options: [
            optExternalContainerDatabaseId,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsLicenseModel,
            optIfMatch,
            optFeatureDetailsCanEnableAllCurrentPdbs,
            optFeatureDetailsIsAutoEnablePluggableDatabase,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-pluggable-database-management-feature",
          description:
            "Modifies the Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-pluggable-database-management-feature-database-diagnostics-and-management-feature-details",
          description:
            "Modifies the Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optFeatureDetailsManagementType,
            optIfMatch,
            optFeatureDetailsIsAutoEnablePluggableDatabase,
            optFeatureDetailsCanEnableAllCurrentPdbs,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-pluggable-database-management-feature-database-lifecycle-management-feature-details",
          description:
            "Modifies the Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-pluggable-database-management-feature-database-sql-watch-feature-details",
          description:
            "Modifies the Database Management feature for the specified Oracle cloud pluggable database",
          options: [
            optPluggableDatabaseId,
            optFeatureDetailsDatabaseConnectionDetails,
            optFeatureDetailsConnectorDetails,
            optIfMatch,
            optFeatureDetailsCanEnableAllCurrentPdbs2,
            optFeatureDetailsIsAutoEnablePluggableDatabase2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "reset-database-parameters",
          description:
            "Resets database parameter values to their default or startup values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "reset-database-parameters-database-secret-credential-details",
          description:
            "Resets database parameter values to their default or startup values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters,
            optDatabaseCredentialPasswordSecretId,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "reset-database-parameters-database-named-credential-details",
          description:
            "Resets database parameter values to their default or startup values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters,
            optDatabaseCredentialNamedCredentialId,
            optCredentials,
            optFromJson,
          ],
        },
        {
          name: "reset-database-parameters-database-password-credential-details",
          description:
            "Resets database parameter values to their default or startup values",
          options: [
            optManagedDatabaseId,
            optScope,
            optParameters,
            optDatabaseCredentialPassword,
            optCredentials,
            optDatabaseCredentialUsername,
            optDatabaseCredentialRole,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-cpu-usages",
          description:
            "Summarizes the AWR CPU resource limits and metrics for the specified database in AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optSessionType,
            optContainerId,
            optPage,
            optLimit2,
            {
              name: "--sort-by",
              description: "The option to sort the AWR CPU usage summary data",
              args: { suggestions: ["TIME_SAMPLED", "AVG_VALUE"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-metrics",
          description:
            "Summarizes the metric samples for the specified database in the AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            {
              name: "--name",
              description:
                "The required multiple value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
              isRepeatable: true,
            },
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optContainerId,
            optPage,
            optLimit2,
            {
              name: "--sort-by",
              description:
                "The option to sort the AWR time series summary data",
              args: { suggestions: ["TIMESTAMP", "NAME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-parameter-changes",
          description:
            "Summarizes the database parameter change history for one database parameter of the specified database in AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            {
              name: "--name",
              description:
                "The required single value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
            },
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optContainerId,
            optPage,
            optLimit2,
            {
              name: "--sort-by",
              description:
                "The option to sort the AWR database parameter change history data",
              args: { suggestions: ["IS_CHANGED", "NAME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-parameters",
          description:
            "Summarizes the database parameter history for the specified database in AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optContainerId,
            {
              name: "--name",
              description:
                "The optional multiple value query parameter to filter the entity name",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--name-contains",
              description:
                "The optional contains query parameter to filter the entity name by any part of the name",
              args: { name: "name-contains" },
            },
            {
              name: "--value-changed",
              description:
                "The optional query parameter to filter database parameters whose values were changed",
              args: { suggestions: ["Y", "N"] },
            },
            {
              name: "--value-default",
              description:
                "The optional query parameter to filter the database parameters that had the default value in the last",
              args: { suggestions: ["TRUE", "FALSE"] },
            },
            {
              name: "--value-modified",
              description:
                "The optional query parameter to filter the database parameters that had a modified value in the last snapshot",
              args: { suggestions: ["MODIFIED", "SYSTEM_MOD", "FALSE"] },
            },
            optPage,
            optLimit2,
            {
              name: "--sort-by",
              description:
                "The option to sort the AWR database parameter change history data",
              args: { suggestions: ["IS_CHANGED", "NAME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-snapshot-ranges",
          description:
            "Summarizes the AWR snapshot ranges that contain continuous snapshots, for the specified Managed Database",
          options: [
            optManagedDatabaseId,
            {
              name: "--name",
              description:
                "The optional single value query parameter to filter the entity name",
              args: { name: "name" },
            },
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the AWR summary data",
              args: { suggestions: ["END_INTERVAL_TIME", "NAME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-sysstats",
          description:
            "Summarizes the AWR SYSSTAT sample data for the specified database in AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            {
              name: "--name",
              description:
                "The required multiple value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
              isRepeatable: true,
            },
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optContainerId,
            optPage,
            optLimit2,
            {
              name: "--sort-by",
              description: "The option to sort the data within a time period",
              args: { suggestions: ["TIME_BEGIN", "NAME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-top-wait-events",
          description: "Summarizes the AWR top wait events",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optSessionType,
            optContainerId,
            {
              name: "--top-n",
              description:
                "The optional query parameter to filter the number of top categories to be returned",
              args: { name: "integer" },
            },
            {
              name: "--sort-by",
              description: "The option to sort the AWR top event summary data",
              args: { suggestions: ["WAITS_PERSEC", "AVG_WAIT_TIME_PERSEC"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-wait-event-buckets",
          description:
            "Summarizes AWR wait event data into value buckets and frequency, for the specified database in the AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            {
              name: "--name",
              description:
                "The required single value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
            },
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            {
              name: "--num-bucket",
              description: "The number of buckets within the histogram",
              args: { name: "integer" },
            },
            {
              name: "--min-value",
              description: "The minimum value of the histogram",
              args: { name: "min-value" },
            },
            {
              name: "--max-value",
              description: "The maximum value of the histogram",
              args: { name: "max-value" },
            },
            optContainerId,
            optPage,
            optLimit2,
            {
              name: "--sort-by",
              description: "The option to sort distribution data",
              args: { suggestions: ["CATEGORY", "PERCENTAGE"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-db-wait-events",
          description:
            "Summarizes the AWR wait event sample data for the specified database in the AWR",
          options: [
            optManagedDatabaseId,
            optAwrDbId,
            optInstNum,
            optBeginSnIdGreaterThanOrEqualTo,
            optEndSnIdLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            {
              name: "--name",
              description:
                "The optional multiple value query parameter to filter the entity name",
              args: { name: "name" },
              isRepeatable: true,
            },
            optSessionType,
            optContainerId,
            optPage,
            optLimit2,
            {
              name: "--sort-by",
              description: "The option to sort the data within a time period",
              args: { suggestions: ["TIME_BEGIN", "NAME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-managed-database-availability-metrics",
          description:
            "Gets the availability metrics related to managed database for the Oracle database specified",
          options: [
            optManagedDatabaseId,
            optStartTime,
            optEndTime,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-plan-baselines",
          description:
            "Gets the number of SQL plan baselines aggregated by their attributes",
          options: [
            optManagedDatabaseId,
            optPage,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-plan-baselines-by-last-execution",
          description:
            "Gets the number of SQL plan baselines aggregated by the age of their last execution in weeks",
          options: [
            optManagedDatabaseId,
            optPage,
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Managed Database specified by managedDatabaseId",
          options: [
            optManagedDatabaseId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get-awr-db-report",
          description: "Gets the AWR database report for one database",
          options: [
            optManagedDatabaseId,
            {
              name: "--awr-db-id",
              description:
                "Exact match filter on the internal identity of the database",
              args: { name: "awr-db-id" },
              isRequired: true,
            },
            {
              name: "--inst-nums",
              description:
                "Optional multiple value filter to match the database instance numbers exactly",
              args: { name: "inst-nums" },
              isRepeatable: true,
            },
            {
              name: "--begin-sn-id-greater-than-or-equal-to",
              description:
                "The optional greater than or equal to filter on the snapshot identity",
              args: { name: "integer" },
            },
            {
              name: "--end-sn-id-less-than-or-equal-to",
              description:
                "The optional less than or equal to filter on the snapshot identity",
              args: { name: "integer" },
            },
            {
              name: "--time-greater-than-or-equal-to",
              description:
                "The optional greater than or equal to filter on the timestamp",
              args: { name: "datetime" },
            },
            {
              name: "--time-less-than-or-equal-to",
              description:
                "The optional less than or equal to filter on the timestamp",
              args: { name: "datetime" },
            },
            {
              name: "--report-type",
              description:
                "Exact match filter on the report types of AWR database",
              args: { suggestions: ["AWR", "ASH"] },
            },
            {
              name: "--container-id",
              description:
                "The exact match filter on the identity of the database container",
              args: { name: "integer" },
            },
            {
              name: "--report-format",
              description: "The format of the AWR report content",
              args: { suggestions: ["HTML", "TEXT"] },
            },
            optFromJson,
          ],
        },
        {
          name: "database-ha-backup-details",
          description: "The database HA and backup details",
          subcommands: [
            {
              name: "get",
              description:
                "Gets HA and backup details with metrics and backup history for a single database",
              options: [
                optManagedDatabaseId,
                optOpcNamedCredentialId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "change-plan-retention-with-password",
          description: "Changes the retention period of unused plans",
          options: [
            optManagedDatabaseId,
            optRetentionWeeks,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "change-plan-retention-with-secret",
          description: "Changes the retention period of unused plans",
          options: [
            optManagedDatabaseId,
            optRetentionWeeks,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "change-space-budget-with-password",
          description:
            "Changes the disk space limit for the SQL Management Base",
          options: [
            optManagedDatabaseId,
            optSpaceBudgetPercent,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "change-space-budget-with-secret",
          description:
            "Changes the disk space limit for the SQL Management Base",
          options: [
            optManagedDatabaseId,
            optSpaceBudgetPercent,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "change-spb-attr",
          description:
            "Changes one or more attributes of a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optSqlHandle,
            optPlanName2,
            optIsEnabled2,
            optIsFixed2,
            optIsAutoPurged,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "change-spb-attr-with-password",
          description:
            "Changes one or more attributes of a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optSqlHandle,
            optPlanName2,
            optIsEnabled2,
            optIsFixed2,
            optIsAutoPurged,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "change-spb-attr-with-secret",
          description:
            "Changes one or more attributes of a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optSqlHandle,
            optPlanName2,
            optIsEnabled2,
            optIsFixed2,
            optIsAutoPurged,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "cfg-auto-capture-filters",
          description:
            "Configures automatic capture filters to capture only those statements that match the filter criteria",
          options: [
            optManagedDatabaseId,
            optAutoCaptureFilters,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "cfg-auto-capture-filters-with-password",
          description:
            "Configures automatic capture filters to capture only those statements that match the filter criteria",
          options: [
            optManagedDatabaseId,
            optAutoCaptureFilters,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "cfg-auto-capture-filters-with-secret",
          description:
            "Configures automatic capture filters to capture only those statements that match the filter criteria",
          options: [
            optManagedDatabaseId,
            optAutoCaptureFilters,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "cfg-auto-spm-evolve-task",
          description:
            "Configures the Automatic SPM Evolve Advisor task SYS_AUTO_SPM_EVOLVE_TASK by specifying task parameters",
          options: [
            optManagedDatabaseId,
            optTaskParameters,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "cfg-auto-spm-evolve-task-with-password",
          description:
            "Configures the Automatic SPM Evolve Advisor task SYS_AUTO_SPM_EVOLVE_TASK by specifying task parameters",
          options: [
            optManagedDatabaseId,
            optTaskParameters,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "cfg-auto-spm-evolve-task-with-secret",
          description:
            "Configures the Automatic SPM Evolve Advisor task SYS_AUTO_SPM_EVOLVE_TASK by specifying task parameters",
          options: [
            optManagedDatabaseId,
            optTaskParameters,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-auto-plan-capture",
          description: "Disables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "disable-auto-plan-capture-with-password",
          description: "Disables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-auto-plan-capture-with-secret",
          description: "Disables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-auto-spm-evolve-task",
          description: "Disables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "disable-auto-spm-evolve-task-with-password",
          description: "Disables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-auto-spm-evolve-task-with-secret",
          description: "Disables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-hf-auto-spm-evolve-task",
          description:
            "Disables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "disable-hf-auto-spm-evolve-task-with-password",
          description:
            "Disables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-hf-auto-spm-evolve-task-with-secret",
          description:
            "Disables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-spb-usage",
          description:
            "Disables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "disable-spb-usage-with-password",
          description:
            "Disables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "disable-spb-usage-with-secret",
          description:
            "Disables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "drop-sql-plan-baselines-with-password",
          description:
            "Drops a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optSqlHandle,
            optPlanName,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "drop-sql-plan-baselines-with-secret",
          description:
            "Drops a single plan or all plans associated with a SQL statement",
          options: [
            optManagedDatabaseId,
            optSqlHandle,
            optPlanName,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-auto-plan-capture",
          description: "Enables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "enable-auto-plan-capture-with-password",
          description: "Enables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-auto-plan-capture-with-secret",
          description: "Enables automatic initial plan capture",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-auto-spm-evolve-task",
          description: "Enables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "enable-auto-spm-evolve-task-with-password",
          description: "Enables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-auto-spm-evolve-task-with-secret",
          description: "Enables the Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-hf-auto-spm-evolve-task",
          description:
            "Enables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "enable-hf-auto-spm-evolve-task-with-password",
          description:
            "Enables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-hf-auto-spm-evolve-task-with-secret",
          description:
            "Enables the high-frequency Automatic SPM Evolve Advisor task",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-spb-usage",
          description:
            "Enables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "enable-spb-usage-with-password",
          description:
            "Enables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "enable-spb-usage-with-secret",
          description:
            "Enables the use of SQL plan baselines stored in SQL Management Base",
          options: [
            optManagedDatabaseId,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "get-spb-configuration",
          description:
            "Gets the configuration details of SQL plan baselines for the specified Managed Database",
          options: [optManagedDatabaseId, optOpcNamedCredentialId, optFromJson],
        },
        {
          name: "list-spb-jobs",
          description:
            "Lists the database jobs used for loading SQL plan baselines in the specified Managed Database",
          options: [
            optManagedDatabaseId,
            {
              name: "--name",
              description:
                "A filter to return the SQL plan baseline jobs that match the name",
              args: { name: "name" },
            },
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "load-spb-from-awr",
          description:
            "Loads plans from Automatic Workload Repository (AWR) snapshots",
          options: [
            optManagedDatabaseId,
            optJobName,
            optBeginSnapshot,
            optEndSnapshot,
            optJobDescription,
            optSqlTextFilter,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "load-spb-from-awr-with-password",
          description:
            "Loads plans from Automatic Workload Repository (AWR) snapshots",
          options: [
            optManagedDatabaseId,
            optJobName,
            optBeginSnapshot,
            optEndSnapshot,
            optJobDescription,
            optSqlTextFilter,
            optIsFixed,
            optIsEnabled,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "load-spb-from-awr-with-secret",
          description:
            "Loads plans from Automatic Workload Repository (AWR) snapshots",
          options: [
            optManagedDatabaseId,
            optJobName,
            optBeginSnapshot,
            optEndSnapshot,
            optJobDescription,
            optSqlTextFilter,
            optIsFixed,
            optIsEnabled,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "load-spb-from-cc",
          description:
            "Loads plans for statements directly from the shared SQL area, also called the cursor cache",
          options: [
            optManagedDatabaseId,
            optJobName,
            optJobDescription,
            optSqlId,
            optPlanHash,
            optSqlText,
            optSqlHandle2,
            optFilterName,
            optFilterValue,
            optIsFixed,
            optIsEnabled,
            optCredentials,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "load-spb-from-cc-with-password",
          description:
            "Loads plans for statements directly from the shared SQL area, also called the cursor cache",
          options: [
            optManagedDatabaseId,
            optJobName,
            optJobDescription,
            optSqlId,
            optPlanHash,
            optSqlText,
            optSqlHandle2,
            optFilterName,
            optFilterValue,
            optIsFixed,
            optIsEnabled,
            optDatabaseCredential,
            optPassword,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
        {
          name: "load-spb-from-cc-with-secret",
          description:
            "Loads plans for statements directly from the shared SQL area, also called the cursor cache",
          options: [
            optManagedDatabaseId,
            optJobName,
            optJobDescription,
            optSqlId,
            optPlanHash,
            optSqlText,
            optSqlHandle2,
            optFilterName,
            optFilterValue,
            optIsFixed,
            optIsEnabled,
            optDatabaseCredential,
            optSecretId,
            optRole,
            optUsername,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "job-run",
      description: "The details of a specific job run",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of the job run specified by jobRunId",
          options: [
            {
              name: "--job-run-id",
              description: "The identifier of the job run",
              args: { name: "job-run-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the job run for a specific ID or the list of job runs for a job",
          options: [
            optCompartmentId,
            optId,
            {
              name: "--job-id",
              description: "The identifier of the job",
              args: { name: "job-id" },
            },
            optManagedDatabaseId2,
            optManagedDatabaseGroupId,
            {
              name: "--run-status",
              description: "The status of the job run",
              args: { name: "run-status" },
            },
            optName,
            optLimit,
            optPage,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "job-execution",
      description: "The details of a job execution",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details of the job execution specified by jobExecutionId",
          options: [
            {
              name: "--job-execution-id",
              description: "The identifier of the job execution",
              args: { name: "job-execution-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the job execution for a specific ID or the list of job executions for a job, job run",
          options: [
            optCompartmentId,
            optId,
            {
              name: "--job-id",
              description: "The identifier of the job",
              args: { name: "job-id" },
            },
            optManagedDatabaseId2,
            optManagedDatabaseGroupId,
            {
              name: "--status",
              description: "The status of the job execution",
              args: { name: "status" },
            },
            optName,
            optLimit,
            optPage,
            optSortBy2,
            optSortOrder,
            {
              name: "--job-run-id",
              description: "The identifier of the job run",
              args: { name: "job-run-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "associated-database-summary",
      description:
        "The summary of a database currently using a Database Management private endpoint",
      subcommands: [
        {
          name: "list-associated-databases",
          description:
            "Gets the list of databases using a specific Database Management private endpoint",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The option to sort databases using a specific Database Management private endpoint",
              args: { suggestions: ["timeRegistered"] },
            },
            optAll,
            optPageSize,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "job",
      description: "The details of the job",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a job",
          options: [
            optJobId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the job should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the job specified by jobId",
          options: [
            optJobId,
            optIfMatch,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the job specified by jobId",
          options: [optJobId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets the job for a specific ID or the list of jobs for a Managed Database or Managed Database Group in",
          options: [
            optCompartmentId,
            optId,
            optManagedDatabaseGroupId,
            optManagedDatabaseId2,
            optName,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the job",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optLimit,
            optPage,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of the recurring scheduled job specified by jobId",
          options: [
            optJobId,
            optDescription,
            {
              name: "--job-type",
              description: "The type of job",
              args: { suggestions: ["SQL"] },
            },
            optTimeout,
            optResultLocation,
            optScheduleDetails,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-sql-job",
          description:
            "Creates a job to be executed on a Managed Database or Managed Database Group",
          options: [
            {
              name: "--name",
              description: "The name of the job",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the job resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--schedule-type",
              description: "The schedule type of the job",
              args: { name: "schedule-type" },
              isRequired: true,
            },
            {
              name: "--operation-type",
              description: "The SQL operation type",
              args: { name: "operation-type" },
              isRequired: true,
            },
            optDescription,
            {
              name: "--managed-database-group-id",
              description:
                "The OCID of the Managed Database Group where the job has to be executed",
              args: { name: "managed-database-group-id" },
            },
            {
              name: "--managed-database-id",
              description:
                "The OCID of the Managed Database where the job has to be executed",
              args: { name: "managed-database-id" },
            },
            {
              name: "--database-sub-type",
              description:
                "The subtype of the Oracle Database where the job has to be executed",
              args: { suggestions: ["CDB", "PDB", "NON_CDB", "ACD", "ADB"] },
            },
            optTimeout,
            optResultLocation,
            optScheduleDetails,
            {
              name: "--sql-text",
              description: "The SQL text to be executed as part of the job",
              args: { name: "sql-text" },
            },
            { name: "--in-binds", args: { name: "json" } },
            { name: "--out-binds", args: { name: "json" } },
            { name: "--sql-type", args: { name: "sql-type" } },
            {
              name: "--user-name",
              description: "The database user name used to execute the SQL job",
              args: { name: "user-name" },
            },
            {
              name: "--password",
              description:
                "The password for the database user name used to execute the SQL job",
              args: { name: "password" },
            },
            {
              name: "--secret-id",
              description:
                "The OCID of the secret containing the user password",
              args: { name: "secret-id" },
            },
            {
              name: "--named-credential-id",
              description:
                "The OCID of the Named Credentials containing password secret",
              args: { name: "named-credential-id" },
            },
            {
              name: "--role",
              description: "The role of the database user",
              args: { name: "role" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-result-location",
          description:
            "Updates the details of the recurring scheduled job specified by jobId",
          options: [
            optJobId,
            optDescription,
            optTimeout,
            optScheduleDetails,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bucket-name",
              description:
                "The name of the bucket used for job execution result storage",
              args: { name: "bucket-name" },
            },
            {
              name: "--namespace-name",
              description:
                "The Object Storage namespace used for job execution result storage",
              args: { name: "namespace-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-sql-job-details",
          description:
            "Updates the details of the recurring scheduled job specified by jobId",
          options: [
            optJobId,
            optDescription,
            optTimeout,
            optResultLocation,
            optScheduleDetails,
            {
              name: "--sql-text",
              description: "The SQL text to be executed as part of the job",
              args: { name: "sql-text" },
            },
            { name: "--in-binds", args: { name: "json" } },
            { name: "--out-binds", args: { name: "json" } },
            { name: "--sql-type", args: { name: "sql-type" } },
            {
              name: "--user-name",
              description: "The database user name used to execute the SQL job",
              args: { name: "user-name" },
            },
            {
              name: "--password",
              description:
                "The password for the database user name used to execute the SQL job",
              args: { name: "password" },
            },
            {
              name: "--secret-id",
              description:
                "The OCID of the secret containing the user password",
              args: { name: "secret-id" },
            },
            {
              name: "--named-credential-id",
              description:
                "The OCID of the Named Credentials containing password secret",
              args: { name: "named-credential-id" },
            },
            {
              name: "--role",
              description: "The role of the database user",
              args: { name: "role" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "preferred-credential",
      description: "The details of the preferred credential",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes the preferred credential based on the credentialName",
          options: [
            optManagedDatabaseId,
            optCredentialName,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the preferred credential details for a Managed Database based on credentialName",
          options: [optManagedDatabaseId, optCredentialName, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets the list of preferred credentials for a given Managed Database",
          options: [optManagedDatabaseId, optAll, optFromJson],
        },
        {
          name: "test",
          description: "Tests the preferred credential",
          options: [
            optManagedDatabaseId,
            optCredentialName,
            {
              name: "--type",
              description: "The type of preferred credential",
              args: { suggestions: ["BASIC", "NAMED_CREDENTIAL"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "test-preferred-credential-test-named-preferred-credential-details",
          description: "Tests the preferred credential",
          options: [
            optManagedDatabaseId,
            optCredentialName,
            {
              name: "--named-credential-id",
              description:
                "The OCID of the Named Credential that contains the database user password metadata",
              args: { name: "named-credential-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the preferred credential based on the credentialName",
          options: [
            optManagedDatabaseId,
            optCredentialName,
            {
              name: "--type",
              description: "The type of preferred credential",
              args: { suggestions: ["BASIC", "NAMED_CREDENTIAL"] },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-preferred-credential-update-named-preferred-credential-details",
          description:
            "Updates the preferred credential based on the credentialName",
          options: [
            optManagedDatabaseId,
            optCredentialName,
            {
              name: "--named-credential-id",
              description:
                "The OCID of the Named Credential that contains the database user password",
              args: { name: "named-credential-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "test-basic-preferred-credential-details",
          description: "Tests the preferred credential",
          options: [
            optManagedDatabaseId,
            optCredentialName,
            {
              name: "--user-name",
              description: "The user name used to connect to the database",
              args: { name: "user-name" },
            },
            {
              name: "--role",
              description: "The role of the database user",
              args: { suggestions: ["NORMAL", "SYSDBA", "SYSDG"] },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Vault service secret that contains the database user password",
              args: { name: "password-secret-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-basic-preferred-credential-details",
          description:
            "Updates the preferred credential based on the credentialName",
          options: [
            optManagedDatabaseId,
            optCredentialName,
            {
              name: "--user-name",
              description: "The user name used to connect to the database",
              args: { name: "user-name" },
            },
            {
              name: "--role",
              description: "The role of the database user",
              args: { suggestions: ["NORMAL", "SYSDBA", "SYSDG"] },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Vault service secret that contains the database user password",
              args: { name: "password-secret-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-cluster-instance",
      description: "The details of an external cluster instance",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the external cluster instance specified by externalClusterInstanceId",
          options: [
            {
              name: "--external-cluster-instance-id",
              description: "The OCID of the external cluster instance",
              args: { name: "external-cluster-instance-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the cluster instances in the specified external cluster",
          options: [
            optCompartmentId2,
            {
              name: "--external-cluster-id",
              description: "The OCID of the external cluster",
              args: { name: "external-cluster-id" },
            },
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external cluster instance specified by externalClusterInstanceId",
          options: [
            {
              name: "--external-cluster-instance-id",
              description: "The OCID of the external cluster instance",
              args: { name: "external-cluster-instance-id" },
              isRequired: true,
            },
            optExternalConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-db-home",
      description: "The details of an external database home",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the external DB home specified by externalDbHomeId",
          options: [
            {
              name: "--external-db-home-id",
              description: "The OCID of the external database home",
              args: { name: "external-db-home-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the DB homes in the specified external DB system",
          options: [
            optCompartmentId2,
            optExternalDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external DB home specified by externalDbHomeId",
          options: [
            {
              name: "--external-db-home-id",
              description: "The OCID of the external database home",
              args: { name: "external-db-home-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-db-system-connector",
      description: "The details of an external DB system connector",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes the external connector specified by externalDbSystemConnectorId",
          options: [
            optExternalDbSystemConnectorId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the external connector specified by externalDbSystemConnectorId",
          options: [optExternalDbSystemConnectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the external connectors in the specified external DB system",
          options: [
            optCompartmentId2,
            optExternalDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-macs-connector",
          description: "Creates a new external connector",
          options: [
            optExternalDbSystemId,
            {
              name: "--agent-id",
              description:
                "The OCID of the management agent used for the external DB system connector",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the external connector",
              args: { name: "display-name" },
            },
            optConnectionInfo,
            optFreeformTags,
            optDefinedTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-macs-connector",
          description:
            "Updates the external connector specified by externalDbSystemConnectorId",
          options: [
            optExternalDbSystemConnectorId,
            optConnectionInfo,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "check-connection-status",
          description:
            "Checks the status of the external DB system component connection specified in this connector",
          options: [
            optExternalDbSystemConnectorId,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-database-collection",
      description: "A collection of external databases",
      subcommands: [
        {
          name: "list-external-databases",
          description:
            "Lists the external databases in the specified compartment or in the specified DB system",
          options: [
            optCompartmentId2,
            optExternalDbSystemId2,
            {
              name: "--external-database-id",
              description: "The OCID of the external database",
              args: { name: "external-database-id" },
            },
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-db-system-discovery",
      description: "The details of an external DB system discovery",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an external DB system discovery resource and initiates the discovery process",
          options: [
            {
              name: "--agent-id",
              description:
                "The OCID of the management agent used for the external DB system discovery",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the external DB system resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the external DB system discovery resource specified by externalDbSystemDiscoveryId",
          options: [
            optExternalDbSystemDiscoveryId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the external DB system discovery resource specified by externalDbSystemDiscoveryId",
          options: [optExternalDbSystemDiscoveryId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the external DB system discovery resources in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Patches the external DB system discovery specified by externalDbSystemDiscoveryId",
          options: [
            optExternalDbSystemDiscoveryId,
            {
              name: "--items",
              description:
                "A sequence of instructions to apply to the resource",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external DB system discovery specified by externalDbSystemDiscoveryId",
          options: [
            optExternalDbSystemDiscoveryId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-asm-instance",
      description: "The details of an external ASM instance",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the external ASM instance specified by externalAsmInstanceId",
          options: [
            {
              name: "--external-asm-instance-id",
              description: "The OCID of the external ASM instance",
              args: { name: "external-asm-instance-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the ASM instances in the specified external ASM",
          options: [
            optCompartmentId2,
            {
              name: "--external-asm-id",
              description: "The OCID of the external ASM",
              args: { name: "external-asm-id" },
            },
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external ASM instance specified by externalAsmInstanceId",
          options: [
            {
              name: "--external-asm-instance-id",
              description: "The OCID of the external ASM instance",
              args: { name: "external-asm-instance-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-listener",
      description: "The details of an external listener",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the external listener specified by externalListenerId",
          options: [optExternalListenerId, optFromJson],
        },
        {
          name: "list-external-listener-services",
          description:
            "Lists the database services registered with the specified external listener for the specified Managed",
          options: [
            optExternalListenerId,
            optManagedDatabaseId,
            optPage,
            optLimit,
            optSortBy3,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the listeners in the specified external DB system",
          options: [
            optCompartmentId2,
            optExternalDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-external-listener-metrics",
          description:
            "Gets metrics for the external listener specified by externalListenerId",
          options: [
            optExternalListenerId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external listener specified by externalListenerId",
          options: [
            optExternalListenerId,
            optExternalConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-asm",
      description: "The details of an external ASM",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the external ASM specified by externalAsmId",
          options: [optExternalAsmId, optFromJson],
        },
        {
          name: "get-external-asm-configuration",
          description:
            "Gets configuration details including disk groups for the external ASM specified by externalAsmId",
          options: [optExternalAsmId, optOpcNamedCredentialId, optFromJson],
        },
        {
          name: "list-external-asm-disk-groups",
          description:
            "Lists ASM disk groups for the external ASM specified by externalAsmId",
          options: [
            optExternalAsmId,
            optPage,
            optLimit,
            optSortBy3,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-external-asm-users",
          description:
            "Lists ASM users for the external ASM specified by externalAsmId",
          options: [
            optExternalAsmId,
            optPage,
            optLimit,
            optSortBy3,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the ASMs in the specified external DB system",
          options: [
            optCompartmentId2,
            optExternalDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-external-asm-metrics",
          description:
            "Gets metrics for the external ASM specified by externalAsmId",
          options: [
            optExternalAsmId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the external ASM specified by externalAsmId",
          options: [
            optExternalAsmId,
            optExternalConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-cluster",
      description: "The details of an external cluster",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the external cluster specified by externalClusterId",
          options: [optExternalClusterId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the clusters in the specified external DB system",
          options: [
            optCompartmentId2,
            optExternalDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-external-cluster-metrics",
          description:
            "Gets metrics for the external cluster specified by externalClusterId",
          options: [
            optExternalClusterId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external cluster specified by externalClusterId",
          options: [
            optExternalClusterId,
            optExternalConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-db-system",
      description: "The details of an external DB system",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the external DB system and its related resources (excluding databases) to the specified compartment",
          options: [
            optExternalDbSystemId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the external DB system to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an external DB system and its related resources",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the external DB system resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--db-system-discovery-id",
              description: "The OCID of the DB system discovery",
              args: { name: "db-system-discovery-id" },
              isRequired: true,
            },
            optDisplayName2,
            { name: "--database-management-config", args: { name: "json" } },
            { name: "--stack-monitoring-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the external DB system specified by externalDbSystemId",
          options: [
            optExternalDbSystemId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-external-db-system-database-management",
          description:
            "Disables Database Management service for all the components of the specified external DB system",
          options: [
            optExternalDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-external-db-system-stack-monitoring",
          description:
            "Disables Stack Monitoring for all the components of the specified external DB system (except databases)",
          options: [
            optExternalDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-db-system-database-management",
          description:
            "Enables Database Management service for all the components of the specified external DB system",
          options: [
            optExternalDbSystemId,
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the external database",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-db-system-stack-monitoring",
          description:
            "Enables Stack Monitoring for all the components of the specified external DB system (except databases)",
          options: [
            optExternalDbSystemId,
            optIsEnabled3,
            optMetadata,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the external DB system specified by externalDbSystemId",
          options: [optExternalDbSystemId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the external DB systems in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-external-db-system-availability-metrics",
          description:
            "Gets availability metrics for the components present in the external DB system specified",
          options: [
            optExternalDbSystemId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            {
              name: "--filter-by-component-types",
              description:
                "The filter used to retrieve metrics for a specific set of component types by passing the desired component",
              args: { name: "filter-by-component-types" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external DB system specified by externalDbSystemId",
          options: [
            optExternalDbSystemId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "INACTIVE",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-db-node",
      description: "The details of an external database node",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the external DB node specified by externalDbNodeId",
          options: [optExternalDbNodeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the external DB nodes in the specified external DB system",
          options: [
            optCompartmentId2,
            optExternalDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-external-db-node-metrics",
          description:
            "Gets metrics for the external DB node specified by externalDbNodeId",
          options: [
            optExternalDbNodeId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the external DB node specified by externalDbNodeId",
          options: [
            optExternalDbNodeId,
            optExternalConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "peer-database-metrics",
      description:
        "The summary of resource usage metrics for the peer database",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a comparative summary of the baseline and target values of the Data Guard performance metrics",
          options: [
            optManagedDatabaseId,
            optStartTime,
            optEndTime,
            {
              name: "--peer-database-compartment-id",
              description:
                "The OCID of the compartment for which peer database metrics are required",
              args: { name: "peer-database-compartment-id" },
            },
            optCompareType,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dataguard-performance-metrics",
      description:
        "A summary of Data Guard performance metrics for Managed Databases",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a historical summary of the Database Guard performance metrics for Managed Databases",
          options: [
            optManagedDatabaseId,
            optStartTime,
            optEndTime,
            {
              name: "--peer-database-compartment-id",
              description:
                "The OCID of the compartment for which peer database metrics are required",
              args: { name: "peer-database-compartment-id" },
            },
            optFilterByMetricNames,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-exadata-infrastructure",
      description: "The details of the Exadata infrastructure",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Exadata infrastructure and its related resources (Exadata storage server",
          options: [
            optExternalExadataInfrastructureId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Exadata infrastructure and related components to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an OCI resource for the Exadata infrastructure and enables the Monitoring service for the Exadata",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description: "The name of the Exadata infrastructure",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--db-system-ids",
              description:
                "The list of DB systems in the Exadata infrastructure",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--discovery-key",
              description: "The unique key of the discovery request",
              args: { name: "discovery-key" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the database management resources",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--storage-server-names",
              description:
                "The list of all the Exadata storage server names to be included for monitoring purposes",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the Exadata infrastructure specified by externalExadataInfrastructureId",
          options: [
            optExternalExadataInfrastructureId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-external-exadata-infrastructure-management",
          description:
            "Disables Database Management for the Exadata infrastructure specified by externalExadataInfrastructureId",
          options: [
            optExternalExadataInfrastructureId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "discover",
          description:
            "Completes the Exadata system prechecking on the following",
          options: [
            optCompartmentId,
            {
              name: "--discovery-type",
              description: "The type of discovery",
              args: { suggestions: ["NEW", "OVERRIDE"] },
              isRequired: true,
            },
            {
              name: "--db-system-ids",
              description: "The list of the DB system identifiers",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--exadata-infrastructure-id",
              description: "The OCID of the Exadata infrastructure",
              args: { name: "exadata-infrastructure-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "enable-external-exadata-infrastructure-management",
          description:
            "Enables Database Management for the Exadata infrastructure specified by externalExadataInfrastructureId",
          options: [
            optExternalExadataInfrastructureId,
            {
              name: "--license-model",
              description: "The Oracle license model",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the Exadata infrastructure specified by externalExadataInfrastructureId",
          options: [optExternalExadataInfrastructureId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Exadata infrastructure resources in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName3,
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details for the Exadata infrastructure specified by externalExadataInfrastructureId",
          options: [
            optExternalExadataInfrastructureId,
            optCompartmentId,
            {
              name: "--discovery-key",
              description: "The unique key of the discovery request",
              args: { name: "discovery-key" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the database management resources",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--display-name",
              description: "The name of the Exadata infrastructure",
              args: { name: "display-name" },
            },
            {
              name: "--db-system-ids",
              description: "The list of all the DB systems OCIDs",
              args: { name: "json" },
            },
            {
              name: "--storage-server-names",
              description:
                "The list of the names of Exadata storage servers to be monitored",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-exadata-storage-connector",
      description: "The details of the Exadata storage server connector",
      subcommands: [
        {
          name: "check",
          description:
            "Checks the status of the Exadata storage server connection specified by exadataStorageConnectorId",
          options: [
            optExternalExadataStorageConnectorId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates the Exadata storage server connector after validating the connection information",
          options: [
            {
              name: "--storage-server-id",
              description: "The OCID of the Exadata storage server",
              args: { name: "storage-server-id" },
              isRequired: true,
            },
            {
              name: "--agent-id",
              description:
                "The OCID of the agent for the Exadata storage server",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--connector-name",
              description: "The name of the Exadata storage server connector",
              args: { name: "connector-name" },
              isRequired: true,
            },
            {
              name: "--connection-uri",
              description: "The unique string of the connection",
              args: { name: "connection-uri" },
              isRequired: true,
            },
            {
              name: "--credential-info",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the Exadata storage server connector specified by exadataStorageConnectorId",
          options: [
            optExternalExadataStorageConnectorId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the Exadata storage server connector specified by exadataStorageConnectorId",
          options: [optExternalExadataStorageConnectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Exadata storage server connectors for the specified Exadata infrastructure",
          options: [
            optCompartmentId,
            optExternalExadataInfrastructureId,
            optDisplayName3,
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Exadata storage server connector specified by exadataStorageConnectorId",
          options: [
            optExternalExadataStorageConnectorId,
            {
              name: "--connector-name",
              description: "The name of the Exadata storage server connector",
              args: { name: "connector-name" },
            },
            {
              name: "--connection-uri",
              description: "The unique string of the connection",
              args: { name: "connection-uri" },
            },
            { name: "--credential-info", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-exadata-storage-server",
      description: "The details of the Exadata storage server",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the summary for the Exadata storage server specified by exadataStorageServerId",
          options: [optExternalExadataStorageServerId, optFromJson],
        },
        {
          name: "get-iorm-plan",
          description:
            "Get the IORM plan from the specific Exadata storage server",
          options: [optExternalExadataStorageServerId, optFromJson],
        },
        {
          name: "get-open-alert-history",
          description:
            "Gets the open alerts from the specified Exadata storage server",
          options: [optExternalExadataStorageServerId, optFromJson],
        },
        {
          name: "get-top-sql-cpu-activity",
          description:
            "Gets the SQL IDs with the top CPU activity from the Exadata storage server",
          options: [optExternalExadataStorageServerId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Exadata storage servers for the specified Exadata infrastructure",
          options: [
            optCompartmentId,
            optExternalExadataInfrastructureId,
            optDisplayName3,
            optPage,
            optLimit,
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Exadata storage server specified by exadataStorageServerId",
          options: [
            optExternalExadataStorageServerId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-exadata-storage-grid",
      description: "The details of the Exadata storage server grid",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the Exadata storage server grid specified by exadataStorageGridId",
          options: [
            {
              name: "--external-exadata-storage-grid-id",
              description: "The OCID of the Exadata storage grid",
              args: { name: "external-exadata-storage-grid-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Exadata storage server grid specified by exadataStorageGridId",
          options: [
            {
              name: "--external-exadata-storage-grid-id",
              description: "The OCID of the Exadata storage grid",
              args: { name: "external-exadata-storage-grid-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "database-fleet-ha-overview-metrics",
      description: "The details of the HA metrics for the fleet of databases",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the fleet of container databases (CDBs) and their HA and backup metrics in a compartment or in",
          options: [
            optManagedDatabaseGroupId,
            optCompartmentId2,
            optFilterByMetricNames,
            optPage,
            optLimit,
            optSortBy5,
            optSortOrder,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "database-fleet-dataguard-metrics",
      description:
        "The list of Oracle Data Guard-enabled databases in the fleet",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the fleet of Oracle Data Guard-enabled container databases",
          options: [
            optManagedDatabaseGroupId,
            optCompartmentId2,
            optFilterByMetricNames,
            optPage,
            optLimit,
            optSortBy5,
            optSortOrder,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "database-fleet-backup-metrics",
      description:
        "The details of the backup metrics for the fleet of databases",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the fleet of container databases (CDBs) and their backup details and metrics",
          options: [
            {
              name: "--database-hosted-in",
              description:
                "Indicates whether the database is a cloud database or an external database",
              args: { suggestions: ["CLOUD", "EXTERNAL"] },
              isRequired: true,
            },
            optStartTime,
            optEndTime,
            optManagedDatabaseGroupId,
            optCompartmentId2,
            optFilterByMetricNames,
            optPage,
            optLimit,
            optSortBy5,
            optSortOrder,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-cluster-instance",
      description: "The details of a cloud cluster instance",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the cloud cluster instance specified by cloudClusterInstanceId",
          options: [
            {
              name: "--cloud-cluster-instance-id",
              description: "The OCID of the cloud cluster instance",
              args: { name: "cloud-cluster-instance-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the cluster instances in the specified cloud cluster",
          options: [
            optCompartmentId2,
            {
              name: "--cloud-cluster-id",
              description: "The OCID of the cloud cluster",
              args: { name: "cloud-cluster-id" },
            },
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the cloud cluster instance specified by cloudClusterInstanceId",
          options: [
            {
              name: "--cloud-cluster-instance-id",
              description: "The OCID of the cloud cluster instance",
              args: { name: "cloud-cluster-instance-id" },
              isRequired: true,
            },
            optCloudConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-db-home",
      description: "The details of a cloud database home",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the cloud DB home specified by cloudDbHomeId",
          options: [
            {
              name: "--cloud-db-home-id",
              description: "The OCID of the cloud database home",
              args: { name: "cloud-db-home-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the DB homes in the specified cloud DB system",
          options: [
            optCompartmentId2,
            optCloudDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the cloud DB home specified by cloudDbHomeId",
          options: [
            {
              name: "--cloud-db-home-id",
              description: "The OCID of the cloud database home",
              args: { name: "cloud-db-home-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-db-system-connector",
      description: "The details of a cloud DB system connector",
      subcommands: [
        {
          name: "check-cloud-db-system-connector-connection-status",
          description:
            "Checks the status of the cloud DB system component connection specified in this connector",
          options: [
            optCloudDbSystemConnectorId,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new cloud connector",
          options: [
            {
              name: "--connector-type",
              description: "The type of connector",
              args: { suggestions: ["MACS"] },
              isRequired: true,
            },
            optCloudDbSystemId,
            {
              name: "--display-name",
              description: "The user-friendly name for the cloud connector",
              args: { name: "display-name" },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-cloud-db-system-connector-create-cloud-db-system-macs-connector-details",
          description: "Creates a new cloud connector",
          options: [
            optCloudDbSystemId,
            {
              name: "--agent-id",
              description:
                "The OCID of the management agent used for the cloud DB system connector",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the cloud connector",
              args: { name: "display-name" },
            },
            optConnectionInfo,
            optFreeformTags,
            optDefinedTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the cloud connector specified by cloudDbSystemConnectorId",
          options: [
            optCloudDbSystemConnectorId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the cloud connector specified by cloudDbSystemConnectorId",
          options: [optCloudDbSystemConnectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the cloud connectors in the specified cloud DB system",
          options: [
            optCompartmentId2,
            optCloudDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the cloud connector specified by cloudDbSystemConnectorId",
          options: [
            optCloudDbSystemConnectorId,
            {
              name: "--connector-type",
              description: "The type of connector",
              args: { suggestions: ["MACS"] },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-cloud-db-system-connector-update-cloud-db-system-macs-connector-details",
          description:
            "Updates the cloud connector specified by cloudDbSystemConnectorId",
          options: [
            optCloudDbSystemConnectorId,
            optConnectionInfo,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-database-collection",
      description: "A collection of cloud databases",
      subcommands: [
        {
          name: "list-cloud-databases",
          description:
            "Lists the cloud databases in the specified compartment or in the specified DB system",
          options: [
            optCloudDbSystemId,
            optCompartmentId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-db-system-discovery",
      description: "The details of a cloud DB system discovery",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a cloud DB system discovery resource and initiates the discovery process",
          options: [
            {
              name: "--agent-id",
              description:
                "The OCID of the management agent used for the cloud DB system discovery",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the cloud DB system resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--dbaas-parent-infrastructure-id",
              description: "The OCID of the parent cloud DB Infrastructure",
              args: { name: "dbaas-parent-infrastructure-id" },
              isRequired: true,
            },
            {
              name: "--deployment-type",
              description: "The deployment type of cloud DB system",
              args: {
                suggestions: ["VM", "EXADATA", "EXADATA_CC", "EXADATA_XS"],
              },
              isRequired: true,
            },
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the cloud DB system discovery resource specified by cloudDbSystemDiscoveryId",
          options: [
            optCloudDbSystemDiscoveryId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the cloud DB system discovery resource specified by cloudDbSystemDiscoveryId",
          options: [optCloudDbSystemDiscoveryId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the cloud DB system discovery resources in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Patches the cloud DB system discovery specified by cloudDbSystemDiscoveryId",
          options: [
            optCloudDbSystemDiscoveryId,
            {
              name: "--items",
              description:
                "A sequence of instructions to apply to the resource",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the cloud DB system discovery specified by cloudDbSystemDiscoveryId",
          options: [
            optCloudDbSystemDiscoveryId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-asm-instance",
      description: "The details of a cloud ASM instance",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the cloud ASM instance specified by cloudAsmInstanceId",
          options: [
            {
              name: "--cloud-asm-instance-id",
              description: "The OCID of the cloud ASM instance",
              args: { name: "cloud-asm-instance-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the ASM instances in the specified cloud ASM",
          options: [
            optCompartmentId2,
            {
              name: "--cloud-asm-id",
              description: "The OCID of the cloud ASM",
              args: { name: "cloud-asm-id" },
            },
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the cloud ASM instance specified by cloudAsmInstanceId",
          options: [
            {
              name: "--cloud-asm-instance-id",
              description: "The OCID of the cloud ASM instance",
              args: { name: "cloud-asm-instance-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-listener",
      description: "The details of a cloud listener",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the cloud listener specified by cloudListenerId",
          options: [optCloudListenerId, optFromJson],
        },
        {
          name: "list-cloud-listener-services",
          description:
            "Lists the database services registered with the specified cloud listener for the specified Managed Database",
          options: [
            optCloudListenerId,
            optManagedDatabaseId,
            optPage,
            optLimit,
            optSortBy3,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the listeners in the specified cloud DB system",
          options: [
            optCompartmentId2,
            optCloudDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-cloud-listener-metrics",
          description:
            "Gets metrics for the cloud listener specified by cloudListenerId",
          options: [
            optCloudListenerId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the cloud listener specified by cloudListenerId",
          options: [
            optCloudListenerId,
            optCloudConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-asm",
      description: "The details of a cloud ASM",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the cloud ASM specified by cloudAsmId",
          options: [optCloudAsmId, optFromJson],
        },
        {
          name: "get-cloud-asm-configuration",
          description:
            "Gets configuration details including disk groups for the cloud ASM specified by cloudAsmId",
          options: [optCloudAsmId, optOpcNamedCredentialId, optFromJson],
        },
        {
          name: "list-cloud-asm-disk-groups",
          description:
            "Lists ASM disk groups for the cloud ASM specified by cloudAsmId",
          options: [
            optCloudAsmId,
            optPage,
            optLimit,
            optSortBy3,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-cloud-asm-users",
          description:
            "Lists ASM users for the cloud ASM specified by cloudAsmId",
          options: [
            optCloudAsmId,
            optPage,
            optLimit,
            optSortBy3,
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the ASMs in the specified cloud DB system",
          options: [
            optCompartmentId2,
            optCloudDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-cloud-asm-metrics",
          description: "Gets metrics for the cloud ASM specified by cloudAsmId",
          options: [
            optCloudAsmId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the cloud ASM specified by cloudAsmId",
          options: [
            optCloudAsmId,
            optCloudConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-cluster",
      description: "The details of a cloud cluster",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the cloud cluster specified by cloudClusterId",
          options: [optCloudClusterId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the clusters in the specified cloud DB system",
          options: [
            optCompartmentId2,
            optCloudDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-cloud-cluster-metrics",
          description:
            "Gets metrics for the cloud cluster specified by cloudClusterId",
          options: [
            optCloudClusterId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the cloud cluster specified by cloudClusterId",
          options: [
            optCloudClusterId,
            optCloudConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-db-system",
      description: "The details of a cloud DB system",
      subcommands: [
        {
          name: "create",
          description: "Creates a cloud DB system and its related resources",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the cloud DB system resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--db-system-discovery-id",
              description: "The OCID of the DB system discovery",
              args: { name: "db-system-discovery-id" },
              isRequired: true,
            },
            optDisplayName2,
            { name: "--database-management-config", args: { name: "json" } },
            { name: "--stack-monitoring-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the cloud DB system specified by cloudDbSystemId",
          options: [
            optCloudDbSystemId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-cloud-db-system-database-management",
          description:
            "Disables Database Management service for all the components of the specified cloud DB system",
          options: [
            optCloudDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-cloud-db-system-stack-monitoring",
          description:
            "Disables Stack Monitoring for all the components of the specified cloud DB system (except databases)",
          options: [
            optCloudDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-cloud-db-system-database-management",
          description:
            "Enables Database Management service for all the components of the specified cloud DB system",
          options: [
            optCloudDbSystemId,
            optIsEnabled3,
            optMetadata,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-cloud-db-system-stack-monitoring",
          description:
            "Enables Stack Monitoring for all the components of the specified cloud DB system (except databases)",
          options: [
            optCloudDbSystemId,
            optIsEnabled3,
            optMetadata,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details for the cloud DB system specified by cloudDbSystemId",
          options: [optCloudDbSystemId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the cloud DB systems in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--dbaas-parent-infrastructure-id",
              description:
                "The OCID of the dbaas parent infrastructure of the cloud DB system",
              args: { name: "dbaas-parent-infrastructure-id" },
            },
            {
              name: "--deployment-type",
              description:
                "A filter to return cloud DB systems of the specified deployment type",
              args: {
                suggestions: ["VM", "EXADATA", "EXADATA_CC", "EXADATA_XS"],
              },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of a resource",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "INACTIVE",
                ],
              },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-cloud-db-system-availability-metrics",
          description:
            "Gets availability metrics for the components present in the cloud DB system specified by cloudDbSystemId",
          options: [
            optCloudDbSystemId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            {
              name: "--filter-by-component-types",
              description:
                "The filter used to retrieve metrics for a specific set of component types by passing the desired component",
              args: { name: "filter-by-component-types" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the cloud DB system specified by cloudDbSystemId",
          options: [
            optCloudDbSystemId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "INACTIVE",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-db-node",
      description: "The details of a cloud DB node",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details for the cloud DB node specified by cloudDbNodeId",
          options: [optCloudDbNodeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the cloud DB nodes in the specified cloud DB system",
          options: [
            optCompartmentId2,
            optCloudDbSystemId2,
            optDisplayName,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-cloud-db-node-metrics",
          description:
            "Gets metrics for the cloud DB node specified by cloudDbNodeId",
          options: [
            optCloudDbNodeId,
            optStartTime2,
            optEndTime2,
            optPage,
            optLimit,
            optFilterByMetricNames,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the cloud DB node specified by cloudDbNodeId",
          options: [
            optCloudDbNodeId,
            optCloudConnectorId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "diagnosability",
      description:
        "Use the Database Management CLI to monitor and manage resources such as Oracle Databases, MySQL Databases",
      subcommands: [
        {
          name: "managed-database",
          description: "The details of a Managed Database",
          subcommands: [
            {
              name: "list-alert-logs",
              description:
                "Lists the alert logs for the specified Managed Database",
              options: [
                optManagedDatabaseId,
                optTimeGreaterThanOrEqualTo2,
                optTimeLessThanOrEqualTo2,
                {
                  name: "--level-filter",
                  description:
                    "The optional parameter to filter the alert logs by log level",
                  args: {
                    suggestions: [
                      "CRITICAL",
                      "SEVERE",
                      "IMPORTANT",
                      "NORMAL",
                      "ALL",
                    ],
                  },
                },
                optTypeFilter,
                optLogSearchText,
                optIsRegularExpression,
                {
                  name: "--sort-by",
                  description: "The possible sortBy values of attention logs",
                  args: {
                    suggestions: ["LEVEL", "TYPE", "MESSAGE", "TIMESTAMP"],
                  },
                },
                optSortOrder,
                optPage,
                optLimit,
                optOpcNamedCredentialId,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list-attention-logs",
              description:
                "Lists the attention logs for the specified Managed Database",
              options: [
                optManagedDatabaseId,
                optTimeGreaterThanOrEqualTo2,
                optTimeLessThanOrEqualTo2,
                {
                  name: "--urgency-filter",
                  description:
                    "The optional parameter to filter the attention logs by urgency",
                  args: {
                    suggestions: [
                      "IMMEDIATE",
                      "SOON",
                      "DEFERRABLE",
                      "INFO",
                      "ALL",
                    ],
                  },
                },
                optTypeFilter,
                optLogSearchText,
                optIsRegularExpression,
                {
                  name: "--sort-by",
                  description: "The possible sortBy values of attention logs",
                  args: {
                    suggestions: [
                      "URGENCY",
                      "TYPE",
                      "MESSAGE",
                      "TIMESTAMP",
                      "SCOPE",
                      "TARGET_USER",
                    ],
                  },
                },
                optSortOrder,
                optPage,
                optLimit,
                optOpcNamedCredentialId,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "summarize-alert-log-counts",
              description:
                "Get the counts of alert logs for the specified Managed Database",
              options: [
                optManagedDatabaseId,
                optTimeGreaterThanOrEqualTo2,
                optTimeLessThanOrEqualTo2,
                {
                  name: "--level-filter",
                  description:
                    "The optional parameter to filter the alert logs by log level",
                  args: {
                    suggestions: [
                      "CRITICAL",
                      "SEVERE",
                      "IMPORTANT",
                      "NORMAL",
                      "ALL",
                    ],
                  },
                },
                {
                  name: "--group-by",
                  description:
                    "The optional parameter used to group different alert logs",
                  args: { suggestions: ["LEVEL", "TYPE"] },
                },
                optTypeFilter,
                optLogSearchText,
                optIsRegularExpression,
                optPage,
                optLimit,
                optOpcNamedCredentialId,
                optFromJson,
              ],
            },
            {
              name: "summarize-attention-log-counts",
              description:
                "Get the counts of attention logs for the specified Managed Database",
              options: [
                optManagedDatabaseId,
                optTimeGreaterThanOrEqualTo2,
                optTimeLessThanOrEqualTo2,
                {
                  name: "--urgency-filter",
                  description:
                    "The optional parameter to filter the attention logs by urgency",
                  args: {
                    suggestions: [
                      "IMMEDIATE",
                      "SOON",
                      "DEFERRABLE",
                      "INFO",
                      "ALL",
                    ],
                  },
                },
                {
                  name: "--group-by",
                  description:
                    "The optional parameter used to group different attention logs",
                  args: { suggestions: ["URGENCY", "TYPE"] },
                },
                optTypeFilter,
                optLogSearchText,
                optIsRegularExpression,
                optPage,
                optLimit,
                optOpcNamedCredentialId,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "managed-my-sql-databases",
      description:
        "Use the Database Management CLI to monitor and manage resources such as Oracle Databases, MySQL Databases",
      subcommands: [
        {
          name: "heat-wave-fleet-metrics",
          description:
            "The details of the HeatWave cluster fleet health metrics",
          subcommands: [
            {
              name: "get",
              description:
                "Gets the health metrics for a fleet of HeatWave clusters in a compartment",
              options: [
                optCompartmentId,
                optStartTime,
                optEndTime,
                optFilterByMetricNames,
                {
                  name: "--filter-by-heat-wave-status",
                  description:
                    "The parameter to filter by HeatWave cluster status",
                  args: { suggestions: ["UP", "DOWN", "UNKNOWN"] },
                },
                {
                  name: "--filter-by-heat-wave-shape",
                  description: "The parameter to filter by HeatWave node shape",
                  args: { name: "filter-by-heat-wave-shape" },
                },
                {
                  name: "--is-heat-wave-lakehouse-enabled",
                  description:
                    "The parameter to filter based on whether HeatWave Lakehouse is enabled for the cluster",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "my-sql-fleet-metrics",
          description: "The details of the MySQL Database fleet health metrics",
          subcommands: [
            {
              name: "get",
              description:
                "Gets the health metrics for a fleet of MySQL Databases in a compartment",
              options: [
                optCompartmentId,
                optStartTime,
                optEndTime,
                optFilterByMetricNames,
                {
                  name: "--filter-by-my-sql-deployment-type-param",
                  description:
                    "The parameter to filter by MySQL deployment type",
                  args: { suggestions: ["ONPREMISE", "MDS"] },
                },
                {
                  name: "--filter-by-mds-deployment-type",
                  description:
                    "The parameter to filter by MySQL Database System type",
                  args: { suggestions: ["HA", "HEATWAVE", "STANDALONE"] },
                },
                {
                  name: "--filter-by-my-sql-database-type-param",
                  description: "The parameter to filter by MySQL database type",
                  args: { suggestions: ["EXTERNAL", "MDS"] },
                },
                {
                  name: "--filter-by-my-sql-status",
                  description:
                    "The parameter to filter by MySQL Database status",
                  args: { suggestions: ["UP", "DOWN", "UNKNOWN"] },
                },
                {
                  name: "--filter-by-my-sql-database-version",
                  description:
                    "The parameter to filter by MySQL database version",
                  args: { name: "filter-by-my-sql-database-version" },
                },
                {
                  name: "--is-heat-wave-enabled",
                  description:
                    "The parameter to filter based on whether HeatWave is enabled for the database",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "managed-my-sql-database",
          description: "The details of the Managed MySQL Database",
          subcommands: [
            {
              name: "change-mysql-database-management-type",
              description:
                "Changes the management type for a HeatWave MySQL instance, from BASIC to FULL and vice versa",
              options: [
                optManagedMySqlDatabaseId,
                {
                  name: "--management-type",
                  description: "The type of HeatWave management",
                  args: { name: "management-type" },
                  isRequired: true,
                },
                {
                  name: "--operation",
                  description:
                    "The type of operation to perform: Update managementType, enable, or disable Database Management",
                  args: {
                    suggestions: [
                      "ENABLE_DBMGMT",
                      "UPDATE_DBMGMT_TYPE",
                      "DISABLE_DBMGMT",
                    ],
                  },
                },
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get-binary-log-information",
              description:
                "Retrieves information pertaining to the binary log of a specific MySQL server",
              options: [optManagedMySqlDatabaseId, optFromJson],
            },
            {
              name: "get-general-replication-information",
              description:
                "Retrieves general information regarding the replication of a specific MySQL server",
              options: [optManagedMySqlDatabaseId, optFromJson],
            },
            {
              name: "get",
              description:
                "Retrieves the general information for a specific MySQL Database",
              options: [optManagedMySqlDatabaseId, optFromJson],
            },
            {
              name: "get-my-sql-query-details",
              description:
                "Retrieves query sample details, explain plan, and potential warnings for a given digest",
              options: [
                optManagedMySqlDatabaseId,
                {
                  name: "--digest",
                  description: "The digest of a MySQL normalized query",
                  args: { name: "digest" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list-high-availability-members",
              description:
                "Retrieves information about the high availability members of a specific MySQL server's replication group",
              options: [
                optManagedMySqlDatabaseId,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort information by",
                  args: { suggestions: ["memberHost"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list-inbound-replications",
              description:
                "Retrieves information about the inbound replications of a specific MySQL server",
              options: [
                optManagedMySqlDatabaseId,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort information by",
                  args: { suggestions: ["sourceHost"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list-managed-my-sql-database-configuration-data",
              description:
                "Retrieves configuration data for a specific MySQL database",
              options: [
                optManagedMySqlDatabaseId,
                optLimit,
                optPage,
                optSortOrder,
                optSortBy2,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list-managed-my-sql-database-sql-data",
              description:
                "Retrieves the SQL performance data for a specific MySQL database",
              options: [
                optManagedMySqlDatabaseId,
                optStartTime,
                optEndTime,
                {
                  name: "--filter-column",
                  description:
                    "The parameter to filter results by key criteria which include : - AVG_TIMER_WAIT - SUM_TIMER_WAIT",
                  args: { name: "filter-column" },
                },
                optLimit,
                optPage,
                optSortBy2,
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list-my-sql-digest-errors",
              description: "Retrieves any potential errors for a given digest",
              options: [
                optManagedMySqlDatabaseId,
                {
                  name: "--digest",
                  description: "The digest of a MySQL normalized query",
                  args: { name: "digest" },
                  isRequired: true,
                },
                optPage,
                optLimit,
                {
                  name: "--sort-by",
                  description: "The field to sort information by",
                  args: { suggestions: ["occurrenceCount"] },
                },
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list-outbound-replications",
              description:
                "Retrieves information pertaining to the outbound replications of a specific MySQL server",
              options: [
                optManagedMySqlDatabaseId,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort information by",
                  args: { suggestions: ["replicaHost"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "summarize-managed-my-sql-database-availability-metrics",
              description:
                "Gets the availability metrics for the MySQL Database specified by managedMySqlDatabaseId",
              options: [
                optManagedMySqlDatabaseId,
                optStartTime,
                optEndTime,
                optPage,
                optLimit,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "managed-my-sql-database-collection",
          description: "A collection of Managed MySQL Database objects",
          subcommands: [
            {
              name: "list-managed-my-sql-databases",
              description:
                "Gets the list of Managed MySQL Databases in a specific compartment",
              options: [
                optCompartmentId,
                optPage,
                optLimit,
                {
                  name: "--filter-by-my-sql-database-type-param",
                  description: "The parameter to filter by MySQL database type",
                  args: { suggestions: ["EXTERNAL", "MDS"] },
                },
                optSortBy2,
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "perfhub",
      description:
        "Use the Database Management CLI to monitor and manage resources such as Oracle Databases, MySQL Databases",
      subcommands: [
        {
          name: "managed-database",
          description: "The details of a Managed Database",
          subcommands: [
            {
              name: "modify-snapshot-settings",
              description:
                "Modifies the snapshot settings for the specified Database",
              options: [
                optManagedDatabaseId,
                {
                  name: "--retention",
                  description: "The retention time in minutes",
                  args: { name: "integer" },
                },
                {
                  name: "--interval",
                  description: "The interval time in minutes",
                  args: { name: "integer" },
                },
                optOpcNamedCredentialId,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "sql-tuning-task",
      description: "Sql Tuning Tasks",
      subcommands: [
        {
          name: "clone",
          description: "Clones and runs a SQL tuning task in the database",
          options: [
            optManagedDatabaseId,
            optTaskName,
            optOriginalTaskId,
            optTaskDescription,
            optCredentialDetails,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "clone-with-pwd",
          description: "Clones and runs a SQL tuning task in the database",
          options: [
            optManagedDatabaseId,
            optTaskName,
            optOriginalTaskId,
            optCredentialDetailsUsername,
            optCredentialDetailsRole,
            optCredentialDetailsPassword,
            optTaskDescription,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "clone-with-secret",
          description: "Clones and runs a SQL tuning task in the database",
          options: [
            optManagedDatabaseId,
            optTaskName,
            optOriginalTaskId,
            optCredentialDetailsUsername,
            optCredentialDetailsRole,
            optCredentialDetailsPasswordSecretId,
            optTaskDescription,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "start",
          description:
            "Starts a SQL tuning task for a given set of SQL statements from the active session history top SQL statements",
          options: [
            optManagedDatabaseId,
            optTaskName,
            optTotalTimeLimitInMinutes,
            optScope2,
            optTaskDescription,
            optCredentialDetails,
            optDatabaseCredential,
            optStatementTimeLimitInMinutes,
            optSqlTuningSet,
            optSqlDetails,
            optTimeStarted,
            optTimeEnded,
            optFromJson,
          ],
        },
        {
          name: "start-with-pwd",
          description:
            "Starts a SQL tuning task for a given set of SQL statements from the active session history top SQL statements",
          options: [
            optManagedDatabaseId,
            optTaskName,
            optTotalTimeLimitInMinutes,
            optScope2,
            optCredentialDetailsUsername,
            optCredentialDetailsRole,
            optCredentialDetailsPassword,
            optTaskDescription,
            optDatabaseCredential,
            optStatementTimeLimitInMinutes,
            optSqlTuningSet,
            optSqlDetails,
            optTimeStarted,
            optTimeEnded,
            optFromJson,
          ],
        },
        {
          name: "start-with-secret",
          description:
            "Starts a SQL tuning task for a given set of SQL statements from the active session history top SQL statements",
          options: [
            optManagedDatabaseId,
            optTaskName,
            optTotalTimeLimitInMinutes,
            optScope2,
            optCredentialDetailsUsername,
            optCredentialDetailsRole,
            optCredentialDetailsPasswordSecretId,
            optTaskDescription,
            optDatabaseCredential,
            optStatementTimeLimitInMinutes,
            optSqlTuningSet,
            optSqlDetails,
            optTimeStarted,
            optTimeEnded,
            optFromJson,
          ],
        },
        {
          name: "drop",
          description:
            "Drops a SQL tuning task and its related results from the database",
          options: [
            optManagedDatabaseId,
            optTaskId,
            optCredentialDetails,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "drop-with-pwd",
          description:
            "Drops a SQL tuning task and its related results from the database",
          options: [
            optManagedDatabaseId,
            optTaskId,
            optCredentialDetailsUsername,
            optCredentialDetailsRole,
            optCredentialDetailsPassword,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "drop-with-secret",
          description:
            "Drops a SQL tuning task and its related results from the database",
          options: [
            optManagedDatabaseId,
            optTaskId,
            optCredentialDetailsUsername,
            optCredentialDetailsRole,
            optCredentialDetailsPasswordSecretId,
            optDatabaseCredential,
            optFromJson,
          ],
        },
        {
          name: "get-summary-report",
          description:
            "Gets the summary report for the specified SQL Tuning Advisor task",
          options: [
            optManagedDatabaseId,
            optSqlTuningAdvisorTaskId,
            {
              name: "--search-period",
              description:
                "How far back the API will search for begin and end exec id",
              args: {
                suggestions: [
                  "LAST_24HR",
                  "LAST_7DAY",
                  "LAST_31DAY",
                  "SINCE_LAST",
                  "ALL",
                ],
              },
            },
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            {
              name: "--begin-exec-id-greater-than-or-equal-to",
              description:
                "The optional greater than or equal to filter on the execution ID related to a specific SQL Tuning Advisor",
              args: { name: "integer" },
            },
            {
              name: "--end-exec-id-less-than-or-equal-to",
              description:
                "The optional less than or equal to query parameter to filter on the execution ID related to a specific SQL",
              args: { name: "integer" },
            },
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "get-exec-plan-stats-compare",
          description:
            "Retrieves a comparison of the existing SQL execution plan and a new plan",
          options: [
            optManagedDatabaseId,
            optSqlTuningAdvisorTaskId,
            optSqlObjectId,
            {
              name: "--execution-id",
              description:
                "The execution ID for an execution of a SQL tuning task",
              args: { name: "integer" },
              isRequired: true,
            },
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "get-sql-exec-plan",
          description: "Retrieves a SQL execution plan for the SQL being tuned",
          options: [
            optManagedDatabaseId,
            optSqlTuningAdvisorTaskId,
            optSqlObjectId,
            {
              name: "--attribute",
              description: "The attribute of the SQL execution plan",
              args: {
                suggestions: [
                  "ORIGINAL",
                  "ORIGINAL_WITH_ADJUSTED_COST",
                  "USING_SQL_PROFILE",
                  "USING_NEW_INDICES",
                  "USING_PARALLEL_EXECUTION",
                ],
              },
              isRequired: true,
            },
            optOpcNamedCredentialId,
            optFromJson,
          ],
        },
        {
          name: "list-findings",
          description:
            "Gets an array of the details of the findings that match specific filters",
          options: [
            optManagedDatabaseId,
            optSqlTuningAdvisorTaskId,
            {
              name: "--begin-exec-id",
              description:
                "The optional greater than or equal to filter on the execution ID related to a specific SQL Tuning Advisor",
              args: { name: "integer" },
            },
            {
              name: "--end-exec-id",
              description:
                "The optional less than or equal to query parameter to filter on the execution ID related to a specific SQL",
              args: { name: "integer" },
            },
            {
              name: "--search-period",
              description:
                "The search period during which the API will search for begin and end exec id, if not supplied",
              args: {
                suggestions: [
                  "LAST_24HR",
                  "LAST_7DAY",
                  "LAST_31DAY",
                  "SINCE_LAST",
                  "ALL",
                ],
              },
            },
            {
              name: "--finding-filter",
              description:
                "The filter used to display specific findings in the report",
              args: {
                suggestions: [
                  "none",
                  "FINDINGS",
                  "NOFINDINGS",
                  "ERRORS",
                  "PROFILES",
                  "INDICES",
                  "STATS",
                  "RESTRUCTURE",
                  "ALTERNATIVE",
                  "AUTO_PROFILES",
                  "OTHER_PROFILES",
                ],
              },
            },
            {
              name: "--stats-hash-filter",
              description:
                "The hash value of the object for the statistic finding search",
              args: { name: "stats-hash-filter" },
            },
            {
              name: "--index-hash-filter",
              description: "The hash value of the index table name",
              args: { name: "index-hash-filter" },
            },
            {
              name: "--sort-by",
              description:
                "The possible sortBy values of an object's recommendations",
              args: {
                suggestions: [
                  "DBTIME_BENEFIT",
                  "PARSING_SCHEMA",
                  "SQL_ID",
                  "STATS",
                  "PROFILES",
                  "SQL_BENEFIT",
                  "DATE",
                  "INDICES",
                  "RESTRUCTURE",
                  "ALTERNATIVE",
                  "MISC",
                  "ERROR",
                  "TIMEOUTS",
                ],
              },
            },
            optSortOrder,
            optPage,
            optLimit,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-recommendations",
          description:
            "Gets the findings and possible actions for a given object in a SQL tuning task",
          options: [
            optManagedDatabaseId,
            optSqlTuningAdvisorTaskId,
            optSqlObjectId,
            {
              name: "--execution-id",
              description:
                "The execution ID for an execution of a SQL tuning task",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--sort-by",
              description:
                "The possible sortBy values of an object's recommendations",
              args: { suggestions: ["RECOMMENDATION_TYPE", "BENEFIT"] },
            },
            optSortOrder,
            optPage,
            optLimit,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-tasks",
          description:
            "Lists the SQL Tuning Advisor tasks for the specified Managed Database",
          options: [
            optManagedDatabaseId,
            {
              name: "--name",
              description:
                "The optional query parameter to filter the SQL Tuning Advisor task list by name",
              args: { name: "name" },
            },
            {
              name: "--status",
              description:
                "The optional query parameter to filter the SQL Tuning Advisor task list by status",
              args: {
                suggestions: [
                  "INITIAL",
                  "EXECUTING",
                  "INTERRUPTED",
                  "COMPLETED",
                  "ERROR",
                ],
              },
            },
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description:
                "The option to sort the SQL Tuning Advisor task summary data",
              args: { suggestions: ["NAME", "START_TIME"] },
            },
            optSortOrder,
            optOpcNamedCredentialId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
