// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "Used for optimistic concurrency control",
  args: { name: "if-match" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "For list pagination",
  args: { name: "page" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optTimeIntervalEnd: Fig.Option = {
  name: "--time-interval-end",
  description: "Analysis end time in UTC in ISO 8601 format(exclusive)",
  args: { name: "datetime" },
};
const optTimeIntervalStart: Fig.Option = {
  name: "--time-interval-start",
  description: "Analysis start time in UTC in ISO 8601 format(inclusive)",
  args: { name: "datetime" },
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "A flag to search all resources within a given compartment and all sub-compartments",
  args: { name: "boolean", suggestions: ["true", "false"] },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optAnalysisTimeInterval: Fig.Option = {
  name: "--analysis-time-interval",
  description:
    "Specify time period in ISO 8601 format with respect to current time",
  args: { name: "analysis-time-interval" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optDatabaseInsightId: Fig.Option = {
  name: "--database-insight-id",
  description: "Unique database insight identifier",
  args: { name: "database-insight-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optDatabaseId: Fig.Option = {
  name: "--database-id",
  description: "Optional list of database OCIDs of the associated DBaaS entity",
  args: { name: "database-id" },
  isRepeatable: true,
};
const optExadataInsightId: Fig.Option = {
  name: "--exadata-insight-id",
  description: "Optional list of exadata insight resource OCIDs",
  args: { name: "exadata-insight-id" },
  isRepeatable: true,
};
const optId: Fig.Option = {
  name: "--id",
  description: "Optional list of database insight resource OCIDs",
  args: { name: "id" },
  isRepeatable: true,
};
const optAwrHubId: Fig.Option = {
  name: "--awr-hub-id",
  description: "Unique Awr Hub identifier",
  args: { name: "awr-hub-id" },
  isRequired: true,
};
const optCdbName: Fig.Option = {
  name: "--cdb-name",
  description: "Filter by one or more cdb name",
  args: { name: "cdb-name" },
  isRepeatable: true,
};
const optInstanceNumber: Fig.Option = {
  name: "--instance-number",
  description:
    "The optional single value query parameter to filter by database instance number",
  args: { name: "instance-number" },
};
const optConnectionDetails: Fig.Option = {
  name: "--connection-details",
  args: { name: "json" },
  isRequired: true,
};
const optDatabaseId2: Fig.Option = {
  name: "--database-id",
  description: "Optional OCID of the associated DBaaS entity",
  args: { name: "database-id" },
};
const optId2: Fig.Option = {
  name: "--id",
  description: "OCID of the database insight resource",
  args: { name: "id" },
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "Resource Status",
  args: { suggestions: ["DISABLED", "ENABLED", "TERMINATED"] },
  isRepeatable: true,
};
const optVmclusterName: Fig.Option = {
  name: "--vmcluster-name",
  description: "Optional list of Exadata Insight VM cluster name",
  args: { name: "vmcluster-name" },
  isRepeatable: true,
};
const optExadataInsightId2: Fig.Option = {
  name: "--exadata-insight-id",
  description: "Unique Exadata insight identifier",
  args: { name: "exadata-insight-id" },
  isRequired: true,
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
const optHostId: Fig.Option = {
  name: "--host-id",
  description: "Optional OCID of the host (Compute Id)",
  args: { name: "host-id" },
};
const optManagementAgentId: Fig.Option = {
  name: "--management-agent-id",
  description: "The OCID of the Management Agent",
  args: { name: "management-agent-id" },
  isRequired: true,
};
const optResourceMetric: Fig.Option = {
  name: "--resource-metric",
  description: "Filter by resource metric",
  args: { name: "resource-metric" },
  isRequired: true,
};
const optBeginSnapshotIdentifierGreaterThanOrEqualTo: Fig.Option = {
  name: "--begin-snapshot-identifier-greater-than-or-equal-to",
  description:
    "The optional greater than or equal to filter on the snapshot ID",
  args: { name: "integer" },
};
const optEndSnapshotIdentifierLessThanOrEqualTo: Fig.Option = {
  name: "--end-snapshot-identifier-less-than-or-equal-to",
  description:
    "The optional less than or equal to query parameter to filter the snapshot Identifier",
  args: { name: "integer" },
};
const optHostInsightId: Fig.Option = {
  name: "--host-insight-id",
  description: "Unique host insight identifier",
  args: { name: "host-insight-id" },
  isRequired: true,
};
const optAwrHubSourceId: Fig.Option = {
  name: "--awr-hub-source-id",
  description: "Unique Awr Hub Source identifier",
  args: { name: "awr-hub-source-id" },
  isRequired: true,
};
const optAwrSourceDatabaseIdentifier: Fig.Option = {
  name: "--awr-source-database-identifier",
  description: "The internal ID of the database",
  args: { name: "awr-source-database-identifier" },
  isRequired: true,
};
const optExadataType: Fig.Option = {
  name: "--exadata-type",
  description: "Filter by one or more Exadata types",
  args: { name: "exadata-type" },
  isRepeatable: true,
};
const optDatabaseType: Fig.Option = {
  name: "--database-type",
  description: "Filter by one or more database type",
  args: {
    suggestions: [
      "ADW-S",
      "ATP-S",
      "ADW-D",
      "ATP-D",
      "EXTERNAL-PDB",
      "EXTERNAL-NONCDB",
      "COMANAGED-VM-CDB",
      "COMANAGED-VM-PDB",
      "COMANAGED-VM-NONCDB",
      "COMANAGED-BM-CDB",
      "COMANAGED-BM-PDB",
      "COMANAGED-BM-NONCDB",
      "COMANAGED-EXACS-CDB",
      "COMANAGED-EXACS-PDB",
      "COMANAGED-EXACS-NONCDB",
      "COMANAGED-EXACC-CDB",
      "COMANAGED-EXACC-PDB",
      "COMANAGED-EXACC-NONCDB",
      "MDS-MYSQL",
      "EXTERNAL-MYSQL",
      "ATP-EXACC",
      "ADW-EXACC",
      "EXTERNAL-ADW",
      "EXTERNAL-ATP",
      "LH-D",
      "APEX-D",
      "AJD-D",
      "AVD-D",
      "LH-S",
      "APEX-S",
      "AJD-S",
      "AVD-S",
      "LH-EXACC",
      "APEX-EXACC",
      "AJD-EXACC",
      "AVD-EXACC",
    ],
  },
  isRepeatable: true,
};
const optHostName: Fig.Option = {
  name: "--host-name",
  description: "Filter by one or more hostname",
  args: { name: "host-name" },
  isRepeatable: true,
};
const optHostType: Fig.Option = {
  name: "--host-type",
  description: "Filter by one or more host types",
  args: { name: "host-type" },
  isRepeatable: true,
};
const optStatistic: Fig.Option = {
  name: "--statistic",
  description:
    "Choose the type of statistic metric data to be used for forecasting",
  args: { suggestions: ["AVG", "MAX"] },
};
const optSystemTags: Fig.Option = {
  name: "--system-tags",
  description: "System tags for this resource",
  args: { name: "json" },
};
const optForecastDays: Fig.Option = {
  name: "--forecast-days",
  description: "Number of days used for utilization forecast analysis",
  args: { name: "integer" },
};
const optHighUtilizationThreshold: Fig.Option = {
  name: "--high-utilization-threshold",
  description:
    "Percent value in which a resource metric is considered highly utilized",
  args: { name: "integer" },
};
const optId3: Fig.Option = {
  name: "--id",
  description: "Required OCID of the host insight resource",
  args: { name: "id" },
  isRequired: true,
};
const optLowUtilizationThreshold: Fig.Option = {
  name: "--low-utilization-threshold",
  description:
    "Percent value in which a resource metric is considered low utilized",
  args: { name: "integer" },
};
const optPlatformType: Fig.Option = {
  name: "--platform-type",
  description: "Filter by one or more platform types",
  args: {
    suggestions: [
      "LINUX",
      "SOLARIS",
      "SUNOS",
      "ZLINUX",
      "WINDOWS",
      "AIX",
      "HP_UX",
    ],
  },
  isRepeatable: true,
};
const optHostName2: Fig.Option = {
  name: "--host-name",
  description: "Filter by hostname",
  args: { name: "host-name" },
  isRepeatable: true,
};
const optId4: Fig.Option = {
  name: "--id",
  description: "Optional list of host insight resource OCIDs",
  args: { name: "id" },
  isRepeatable: true,
};
const optQueryBindParams: Fig.Option = {
  name: "--query-bind-params",
  description: "List of bind parameters to be applied in the query",
  args: { name: "json" },
};
const optQueryQueryExecutionTimeoutInSeconds: Fig.Option = {
  name: "--query-query-execution-timeout-in-seconds",
  description:
    "Timeout (in seconds) to be set for the data object query execution",
  args: { name: "query-query-execution-timeout-in-seconds" },
};
const optQueryTimeFilters: Fig.Option = {
  name: "--query-time-filters",
  args: { name: "json" },
};
const optResourceType: Fig.Option = {
  name: "--resource-type",
  description: "Filter by resource",
  args: { name: "resource-type" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier of database",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optOperationsInsightsWarehouseId: Fig.Option = {
  name: "--operations-insights-warehouse-id",
  description: "Unique Ops Insights Warehouse identifier",
  args: { name: "operations-insights-warehouse-id" },
  isRequired: true,
};
const optOpsiPrivateEndpointId: Fig.Option = {
  name: "--opsi-private-endpoint-id",
  description: "The OCID of the OPSI private endpoint",
  args: { name: "opsi-private-endpoint-id" },
};
const optPercentile: Fig.Option = {
  name: "--percentile",
  description:
    "Percentile values of daily usage to be used for computing the aggregate resource usage",
  args: { name: "integer" },
};
const optResourceMetric2: Fig.Option = {
  name: "--resource-metric",
  description: "Filter by host resource metric",
  args: { name: "resource-metric" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConnectionCredentialDetailsCredentialSourceName: Fig.Option = {
  name: "--connection-credential-details-credential-source-name",
  description:
    "Credential source name that had been added in Management Agent wallet",
  args: { name: "connection-credential-details-credential-source-name" },
};
const optDatabaseId3: Fig.Option = {
  name: "--database-id",
  description: "The OCID of the database",
  args: { name: "database-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name",
  args: { name: "display-name" },
};
const optId5: Fig.Option = {
  name: "--id",
  description: "Unique Ops insight identifier",
  args: { name: "id" },
  isRequired: true,
};
const optIsDatabaseInstanceLevelMetrics: Fig.Option = {
  name: "--is-database-instance-level-metrics",
  description:
    "Flag to indicate if database instance level metrics should be returned",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "Lifecycle states",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optResourceType2: Fig.Option = {
  name: "--resource-type",
  description: "Filter by resource type",
  args: { name: "resource-type" },
  isRequired: true,
};
const optSqlIdentifier: Fig.Option = {
  name: "--sql-identifier",
  description: "Unique SQL_ID for a SQL Statement",
  args: { name: "sql-identifier" },
  isRequired: true,
};
const optConnectionDetails2: Fig.Option = {
  name: "--connection-details",
  args: { name: "json" },
};
const optEnterpriseManagerBridgeId: Fig.Option = {
  name: "--enterprise-manager-bridge-id",
  description: "Unique Enterprise Manager bridge identifier",
  args: { name: "enterprise-manager-bridge-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWarehouseId: Fig.Option = {
  name: "--warehouse-id",
  description: "The OCID of a Warehouse",
  args: { name: "warehouse-id" },
  isRequired: true,
};
const optWarehouseType: Fig.Option = {
  name: "--warehouse-type",
  description: "Type of the Warehouse",
  args: { suggestions: ["awrHubs"] },
  isRequired: true,
};
const optCategoryName: Fig.Option = {
  name: "--category-name",
  description: "Optional value filter to match the finding category exactly",
  args: { name: "category-name" },
};
const optChargebackPlanReportId: Fig.Option = {
  name: "--chargeback-plan-report-id",
  description: "The OCID of the Ops Insights chargeback plan report",
  args: { name: "chargeback-plan-report-id" },
  isRequired: true,
};
const optChargebackplanId: Fig.Option = {
  name: "--chargebackplan-id",
  description: "The OCID of the Ops Insights chargeback plan",
  args: { name: "chargebackplan-id" },
  isRequired: true,
};
const optConfidence: Fig.Option = {
  name: "--confidence",
  description:
    "This parameter is used to change data's confidence level, this data is ingested by the forecast algorithm",
  args: { name: "integer" },
};
const optConnectionCredentialDetails: Fig.Option = {
  name: "--connection-credential-details",
  args: { name: "json" },
  isRequired: true,
};
const optDataObjectIdentifier: Fig.Option = {
  name: "--data-object-identifier",
  description: "Unique OPSI data object identifier",
  args: { name: "data-object-identifier" },
};
const optDataObjects: Fig.Option = {
  name: "--data-objects",
  description: "Details of OPSI data objects used in the query",
  args: { name: "json" },
};
const optDatabaseResourceType: Fig.Option = {
  name: "--database-resource-type",
  description: "OCI database resource type",
  args: { name: "database-resource-type" },
  isRequired: true,
};
const optEmBridgeId: Fig.Option = {
  name: "--em-bridge-id",
  description: "OPSI Enterprise Manager Bridge OCID",
  args: { name: "em-bridge-id" },
};
const optExadataInsightId3: Fig.Option = {
  name: "--exadata-insight-id",
  description: "OCID of exadata insight resource",
  args: { name: "exadata-insight-id" },
  isRequired: true,
};
const optExadataInsightId4: Fig.Option = {
  name: "--exadata-insight-id",
  description: "OCID of exadata insight resource",
  args: { name: "exadata-insight-id" },
};
const optForecastModel: Fig.Option = {
  name: "--forecast-model",
  description: "Choose algorithm model for the forecasting",
  args: { suggestions: ["LINEAR", "ML_AUTO", "ML_NO_AUTO"] },
};
const optLifecycleState2: Fig.Option = {
  name: "--lifecycle-state",
  description: "Lifecycle states",
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
const optNewsReportId: Fig.Option = {
  name: "--news-report-id",
  description: "Unique news report identifier",
  args: { name: "news-report-id" },
  isRequired: true,
};
const optOpsiConfigurationId: Fig.Option = {
  name: "--opsi-configuration-id",
  description: "OCID of OPSI configuration resource",
  args: { name: "opsi-configuration-id" },
  isRequired: true,
};
const optOpsiPrivateEndpointId2: Fig.Option = {
  name: "--opsi-private-endpoint-id",
  description: "The OCID of the Operation Insights private endpoint. required",
  args: { name: "opsi-private-endpoint-id" },
  isRequired: true,
};
const optPasswordSecretId: Fig.Option = {
  name: "--password-secret-id",
  description: "The secret OCID mapping to the database credentials",
  args: { name: "password-secret-id" },
};
const optQueryFromClause: Fig.Option = {
  name: "--query-from-clause",
  description:
    "Unique data object name that will be added into the FROM clause of the query",
  args: { name: "query-from-clause" },
};
const optQueryGroupByList: Fig.Option = {
  name: "--query-group-by-list",
  description:
    "List of items to be added into the GROUP BY clause of the query; items will be added with comma separation",
  args: { name: "json" },
};
const optQueryHavingConditionsList: Fig.Option = {
  name: "--query-having-conditions-list",
  description:
    "List of items to be added into the HAVING clause of the query; items will be added with AND separation",
  args: { name: "json" },
};
const optQueryOrderByList: Fig.Option = {
  name: "--query-order-by-list",
  description:
    "List of items to be added into the ORDER BY clause of the query; items will be added with comma separation",
  args: { name: "json" },
};
const optQuerySelectList: Fig.Option = {
  name: "--query-select-list",
  description:
    "List of items to be added into the SELECT clause of the query; items will be added with comma separation",
  args: { name: "json" },
};
const optQueryStatement: Fig.Option = {
  name: "--query-statement",
  description:
    "SQL query statement with standard Oracle supported SQL syntax. - When Warehouse (e.g",
  args: { name: "query-statement" },
};
const optQueryWhereConditionsList: Fig.Option = {
  name: "--query-where-conditions-list",
  description:
    "List of items to be added into the WHERE clause of the query; items will be added with AND separation",
  args: { name: "json" },
};
const optResourceFilters: Fig.Option = {
  name: "--resource-filters",
  args: { name: "json" },
};
const optRole: Fig.Option = {
  name: "--role",
  description: "Database user role",
  args: { suggestions: ["NORMAL"] },
};
const optUserName: Fig.Option = {
  name: "--user-name",
  description: "Database user name",
  args: { name: "user-name" },
};
const optUtilizationLevel: Fig.Option = {
  name: "--utilization-level",
  description:
    "Filter by utilization level by the following buckets: - HIGH_UTILIZATION",
  args: {
    suggestions: [
      "HIGH_UTILIZATION",
      "LOW_UTILIZATION",
      "MEDIUM_HIGH_UTILIZATION",
      "MEDIUM_LOW_UTILIZATION",
    ],
  },
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier of Exadata insight",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId6: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier of host",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConfigItemsApplicableContext: Fig.Option = {
  name: "--config-items-applicable-context",
  description:
    "Returns the configuration items filtered by applicable contexts sent in this param",
  args: { name: "config-items-applicable-context" },
  isRepeatable: true,
};
const optCredentialDetailsCredentialSourceName: Fig.Option = {
  name: "--credential-details-credential-source-name",
  description:
    "Credential source name that had been added in Management Agent wallet",
  args: { name: "credential-details-credential-source-name" },
};
const optCredentialDetailsWalletSecretId: Fig.Option = {
  name: "--credential-details-wallet-secret-id",
  description:
    "The OCID of the Secret where the database keystore contents are stored",
  args: { name: "credential-details-wallet-secret-id" },
};
const optDatabaseConnectorId: Fig.Option = {
  name: "--database-connector-id",
  description:
    "The DBM owned database connector OCID mapping to the database credentials and connection details",
  args: { name: "database-connector-id" },
  isRequired: true,
};
const optEmBridgeId2: Fig.Option = {
  name: "--em-bridge-id",
  description: "OPSI Enterprise Manager Bridge OCID required",
  args: { name: "em-bridge-id" },
  isRequired: true,
};
const optEmEntityId: Fig.Option = {
  name: "--em-entity-id",
  description: "Enterprise Manager Entity Unique Identifier required",
  args: { name: "em-entity-id" },
  isRequired: true,
};
const optEmId: Fig.Option = {
  name: "--em-id",
  description: "Enterprise Manager Unqiue Identifier required",
  args: { name: "em-id" },
  isRequired: true,
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optForecastStartDay: Fig.Option = {
  name: "--forecast-start-day",
  description: "Number of days used for utilization forecast analysis",
  args: { name: "integer" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "Unique Awr Hub Object identifier required",
  args: { name: "name" },
  isRequired: true,
};
const optOperationsInsightsWarehouseUserId: Fig.Option = {
  name: "--operations-insights-warehouse-user-id",
  description: "Unique Operations Insights Warehouse User identifier",
  args: { name: "operations-insights-warehouse-user-id" },
  isRequired: true,
};
const optReportFormat: Fig.Option = {
  name: "--report-format",
  description: "The format of the AWR report",
  args: { suggestions: ["HTML", "TEXT"] },
};
const optServiceName: Fig.Option = {
  name: "--service-name",
  description: "Database service name used for connection requests",
  args: { name: "service-name" },
  isRequired: true,
};
const optSessionType: Fig.Option = {
  name: "--session-type",
  description:
    "The optional query parameter to filter ASH activities by FOREGROUND or BACKGROUND",
  args: { suggestions: ["FOREGROUND", "BACKGROUND", "ALL"] },
};
const completionSpec: Fig.Spec = {
  name: "opsi",
  description: "Ops Insights",
  subcommands: [
    {
      name: "enterprise-manager-bridges",
      description:
        "Logical grouping used for Ops Insights Enterprise Manager Bridge operations",
      subcommands: [
        {
          name: "change",
          description:
            "Moves a EnterpriseManagerBridge resource from one compartment to another",
          options: [
            optEnterpriseManagerBridgeId,
            optCompartmentId4,
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
            "Create a Enterprise Manager bridge in Operations Insights",
          options: [
            {
              name: "--compartment-id",
              description:
                "Compartment identifier of the Enterprise Manager bridge",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "User-friedly name of Enterprise Manager Bridge that does not have to be unique",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--object-storage-bucket-name",
              description: "Object Storage Bucket Name",
              args: { name: "object-storage-bucket-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of Enterprise Manager Bridge",
              args: { name: "description" },
            },
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
            "Deletes an Operations Insights Enterprise Manager bridge",
          options: [
            optEnterpriseManagerBridgeId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details of an Operations Insights Enterprise Manager bridge",
          options: [optEnterpriseManagerBridgeId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Ops Insights Enterprise Manager bridges",
          options: [
            optCompartmentId2,
            optDisplayName,
            {
              name: "--id",
              description: "Unique Enterprise Manager bridge identifier",
              args: { name: "id" },
            },
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-importable-enterprise-manager-entities",
          description:
            "Gets a list of importable entities for an Operations Insights Enterprise Manager bridge that have not been",
          options: [
            optEnterpriseManagerBridgeId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            {
              name: "--em-entity-type",
              description:
                "Filter by one or more Enterprise Manager entity types",
              args: { name: "em-entity-type" },
            },
            {
              name: "--em-id",
              description: "The unique Enterprise Manager identifier",
              args: { name: "em-id" },
            },
            {
              name: "--em-parent-id",
              description:
                "The unique Enterprise Manager Entity identifier of the parent EM entity (the Exadata for instance)",
              args: { name: "em-parent-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates configuration of an Operations Insights Enterprise Manager bridge",
          options: [
            optEnterpriseManagerBridgeId,
            {
              name: "--display-name",
              description:
                "User-friedly name of Enterprise Manager Bridge that does not have to be unique",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of Enterprise Manager Bridge",
              args: { name: "description" },
            },
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
      name: "opsi-data-objects",
      description:
        "Logical grouping used for OPSI data object targeted operations",
      subcommands: [
        {
          name: "get",
          description: "Gets details of an OPSI data object",
          options: [
            optCompartmentId,
            {
              name: "--opsi-data-object-identifier",
              description: "Unique OPSI data object identifier",
              args: { name: "opsi-data-object-identifier" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of OPSI data objects based on the query parameters specified",
          options: [
            optCompartmentId,
            {
              name: "--data-object-type",
              description: "OPSI data object types",
              args: {
                suggestions: [
                  "DATABASE_INSIGHTS_DATA_OBJECT",
                  "HOST_INSIGHTS_DATA_OBJECT",
                  "EXADATA_INSIGHTS_DATA_OBJECT",
                ],
              },
              isRepeatable: true,
            },
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "OPSI data object list sort options",
              args: { suggestions: ["displayName", "dataObjectType", "name"] },
            },
            {
              name: "--group-name",
              description:
                "A filter to return only data objects that belongs to the group of the given group name",
              args: { name: "group-name" },
            },
            {
              name: "--name",
              description:
                "A filter to return only data objects that match the entire data object name",
              args: { name: "name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "query-data-templatized-query",
          description:
            "Queries an OPSI data object with the inputs provided and sends the result set back",
          options: [
            optCompartmentId,
            optDataObjectIdentifier,
            optDataObjects,
            optResourceFilters,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQuerySelectList,
            optQueryFromClause,
            optQueryWhereConditionsList,
            optQueryGroupByList,
            optQueryHavingConditionsList,
            optQueryOrderByList,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
        {
          name: "query-data-standard-query",
          description:
            "Queries an OPSI data object with the inputs provided and sends the result set back",
          options: [
            optCompartmentId,
            optDataObjectIdentifier,
            optDataObjects,
            optResourceFilters,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQueryStatement,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
        {
          name: "query-opsi-data-object-data-data-object-templatized-query",
          description:
            "Queries an OPSI data object with the inputs provided and sends the result set back",
          options: [
            optCompartmentId,
            optDataObjectIdentifier,
            optDataObjects,
            optResourceFilters,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQuerySelectList,
            optQueryFromClause,
            optQueryWhereConditionsList,
            optQueryGroupByList,
            optQueryHavingConditionsList,
            optQueryOrderByList,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
        {
          name: "query-opsi-data-object-data-data-object-standard-query",
          description:
            "Queries an OPSI data object with the inputs provided and sends the result set back",
          options: [
            optCompartmentId,
            optDataObjectIdentifier,
            optDataObjects,
            optResourceFilters,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQueryStatement,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "exadata-insights",
      description:
        "Logical grouping used for Operations Insights Exadata related operations",
      subcommands: [
        {
          name: "change",
          description:
            "Moves an Exadata insight resource from one compartment identifier to another",
          options: [
            optExadataInsightId2,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an Exadata insight",
          options: [
            optExadataInsightId2,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable",
          description: "Disables an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-plan",
          description:
            "Disables a chargeback plan on an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-plan",
          description:
            "Enables a chargeback plan on an Exadata system in Operations Insights",
          options: [
            {
              name: "--plan-id",
              description: "OCID of OPSI Chargeback plan resource",
              args: { name: "plan-id" },
              isRequired: true,
            },
            optExadataInsightId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of an Exadata insight",
          options: [optExadataInsightId2, optFromJson],
        },
        {
          name: "list-exadata-configurations",
          description: "Gets a list of exadata insight configurations",
          options: [
            optCompartmentId2,
            optExadataInsightId,
            optExadataType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Exadata configuration list sort options",
              args: {
                suggestions: [
                  "exadataName",
                  "exadataDisplayName",
                  "exadataType",
                ],
              },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of Exadata insights based on the query parameters specified",
          options: [
            optCompartmentId2,
            {
              name: "--id",
              description: "Optional list of Exadata insight resource OCIDs",
              args: { name: "id" },
              isRepeatable: true,
            },
            optStatus,
            optLifecycleState,
            optExadataType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Exadata insight list sort options",
              args: { suggestions: ["timeCreated", "exadataName"] },
            },
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optEmBridgeId,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-capacity-trend",
          description: "Returns response with time series data (endTimestamp",
          options: [
            optResourceType,
            optResourceMetric,
            optExadataInsightId3,
            optCompartmentId2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            {
              name: "--database-insight-id",
              description: "Optional list of database insight resource OCIDs",
              args: { name: "database-insight-id" },
              isRepeatable: true,
            },
            {
              name: "--host-insight-id",
              description: "Optional list of host insight resource OCIDs",
              args: { name: "host-insight-id" },
              isRepeatable: true,
            },
            {
              name: "--storage-server-name",
              description: "Optional storage server name on an exadata system",
              args: { name: "storage-server-name" },
              isRepeatable: true,
            },
            optExadataType,
            optCdbName,
            optHostName2,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The order in which resource capacity trend records are listed",
              args: { suggestions: ["id", "name"] },
            },
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-capacity-trend-aggregated",
          description: "Returns response with time series data (endTimestamp",
          options: [
            optResourceType,
            optResourceMetric,
            optCompartmentId2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optExadataInsightId,
            optExadataType,
            optCdbName,
            optHostName2,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sorts using end timestamp or capacity",
              args: { suggestions: ["endTimestamp", "capacity"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-forecast-trend",
          description:
            "Get historical usage and forecast predictions for an exadata system with breakdown by databases",
          options: [
            optResourceType,
            optResourceMetric,
            optExadataInsightId3,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            {
              name: "--database-insight-id",
              description: "Optional list of database insight resource OCIDs",
              args: { name: "database-insight-id" },
              isRepeatable: true,
            },
            {
              name: "--host-insight-id",
              description: "Optional list of host insight resource OCIDs",
              args: { name: "host-insight-id" },
              isRepeatable: true,
            },
            {
              name: "--storage-server-name",
              description: "Optional storage server name on an exadata system",
              args: { name: "storage-server-name" },
              isRepeatable: true,
            },
            optExadataType,
            optStatistic,
            optForecastStartDay,
            optForecastDays,
            optForecastModel,
            optCdbName,
            optHostName2,
            optLimit,
            optConfidence,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The order in which resource Forecast trend records are listed",
              args: { suggestions: ["id", "name", "daysToReachCapacity"] },
            },
            optPage,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-forecast-trend-aggregated",
          description:
            "Get aggregated historical usage and forecast predictions for resources",
          options: [
            optResourceType,
            optResourceMetric,
            optCompartmentId2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optExadataInsightId,
            optExadataType,
            optStatistic,
            optForecastStartDay,
            optForecastDays,
            optForecastModel,
            optCdbName,
            optHostName2,
            optConfidence,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-statistics",
          description:
            "Lists the Resource statistics (usage, capacity, usage change percent",
          options: [
            optExadataInsightId3,
            optResourceType,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optExadataType,
            optCdbName,
            optHostName2,
            optPercentile,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The order in which resource statistics records are listed",
              args: {
                suggestions: [
                  "utilizationPercent",
                  "usage",
                  "usageChangePercent",
                ],
              },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-usage",
          description:
            "A cumulative distribution function is used to rank the usage data points per resource within the specified",
          options: [
            optCompartmentId,
            optResourceType,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optExadataInsightId,
            optExadataType,
            optCdbName,
            optHostName2,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The order in which resource usage summary records are listed",
              args: {
                suggestions: [
                  "utilizationPercent",
                  "usage",
                  "capacity",
                  "usageChangePercent",
                ],
              },
            },
            optPage,
            optLimit,
            optPercentile,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-usage-aggregated",
          description:
            "A cumulative distribution function is used to rank the usage data points per database within the specified",
          options: [
            optCompartmentId,
            optResourceType,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optExadataInsightId,
            optExadataType,
            optCdbName,
            optHostName2,
            optPage,
            optPercentile,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-insight-resource-utilization-insight",
          description:
            "Gets current utilization, projected utilization and days to reach projectedUtilization for an exadata system",
          options: [
            optCompartmentId,
            optResourceType,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optExadataInsightId,
            optExadataType,
            optForecastStartDay,
            optForecastDays,
            optCdbName,
            optHostName2,
            optLimit,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optFromJson,
          ],
        },
        {
          name: "summarize-exadata-members",
          description:
            "Lists the software and hardware inventory of the Exadata System",
          options: [
            optExadataInsightId3,
            optExadataType,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The order in which exadata member records are listed",
              args: { suggestions: ["name", "displayName", "entityType"] },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "add-em-external-exadata-members",
          description:
            "Add new members (e.g. databases and hosts) to an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            {
              name: "--member-entity-details",
              description:
                "This option is a JSON list with items of type CreateEmManagedExternalExadataMemberEntityDetails",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-em-external-exadata",
          description:
            "Create an External EM Exadata insight resource for an Exadata system in Operations Insights",
          options: [
            optCompartmentId5,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--member-entity-details",
              description:
                "This option is a JSON list with items of type CreateEmManagedExternalExadataMemberEntityDetails",
              args: { name: "json" },
            },
            {
              name: "--is-auto-sync-enabled",
              description:
                "Set to true to enable automatic enablement and disablement of related targets from Enterprise Manager",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEmId,
            optEmEntityId,
            optEmBridgeId2,
            optFromJson,
          ],
        },
        {
          name: "enable-em-external-exadata",
          description: "Enables an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-em-external-exadata",
          description: "Updates configuration of an Exadata insight",
          options: [
            optExadataInsightId2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-auto-sync-enabled",
              description:
                "Set to true to enable automatic enablement and disablement of related targets from Enterprise Manager",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-pe-comanaged-exadata-members",
          description:
            "Add new members (e.g. databases and hosts) to an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            {
              name: "--member-entity-details",
              description:
                "This option is a JSON list with items of type CreatePeComanagedExadataVmclusterDetails",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-pe-comanaged-exadata",
          description:
            "Create an Exadata insight resource for an Exadata system in Operations Insights",
          options: [
            optCompartmentId5,
            {
              name: "--exadata-infra-id",
              description: "The OCID of the Exadata Infrastructure",
              args: { name: "exadata-infra-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--member-vm-cluster-details",
              description:
                "This option is a JSON list with items of type CreatePeComanagedExadataVmclusterDetails",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-pe-comanaged-exadata",
          description: "Enables an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-pe-comanaged-exadata",
          description: "Updates configuration of an Exadata insight",
          options: [
            optExadataInsightId2,
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
          name: "add-macs-managed-cloud-exadata-insight-members",
          description:
            "Add new members (e.g. databases and hosts) to an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            {
              name: "--member-entity-details",
              description:
                "This option is a JSON list with items of type CreateMacsManagedCloudExadataVmclusterDetails",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-macs-managed-cloud-exadata-insight",
          description:
            "Create an Exadata insight resource for an Exadata system in Operations Insights",
          options: [
            optCompartmentId5,
            {
              name: "--exadata-infra-id",
              description: "The OCID of the Exadata Infrastructure",
              args: { name: "exadata-infra-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--member-vm-cluster-details",
              description:
                "This option is a JSON list with items of type CreateMacsManagedCloudExadataVmclusterDetails",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-macs-managed-cloud-exadata-insight",
          description: "Enables an Exadata system in Operations Insights",
          options: [
            optExadataInsightId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-macs-managed-cloud-exadata-insight",
          description: "Updates configuration of an Exadata insight",
          options: [
            optExadataInsightId2,
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
      name: "chargeback-plan",
      description:
        "A chargeback plan that allows Ops Insights services to compute chargeback costs",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Chargeback Plan insight resource from one compartment identifier to another",
          options: [
            optChargebackplanId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-chargeback-plan-report",
          description:
            "Creates a chargeback plan report for a resource in Ops Insights",
          options: [
            {
              name: "--report-name",
              description: "The chargeback plan report name",
              args: { name: "report-name" },
              isRequired: true,
            },
            {
              name: "--report-properties",
              args: { name: "json" },
              isRequired: true,
            },
            optId5,
            optResourceType2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a chargeback plan if it's not assigned to any resource",
          options: [
            optChargebackplanId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-chargeback-plan-report",
          description:
            "Deletes a chargeback plan report if it's not assigned to any resource",
          options: [
            optChargebackPlanReportId,
            optId5,
            optResourceType2,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified chargeback plan",
          options: [optChargebackplanId, optFromJson],
        },
        {
          name: "get-chargeback-plan-report",
          description:
            "Gets the details of the specified chargeback plan report",
          options: [
            optChargebackPlanReportId,
            optId5,
            optResourceType2,
            optFromJson,
          ],
        },
        {
          name: "get-chargeback-plan-report-content",
          description:
            "Generates the chargeback report in csv format for a specified time interval",
          options: [
            optChargebackPlanReportId,
            optId5,
            optResourceType2,
            optFile,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            {
              name: "--relative-time-interval",
              description:
                "Specify relative time period with respect to current time",
              args: { name: "relative-time-interval" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-chargeback-plan-reports",
          description:
            "Gets a list of Ops Insights chargeback plan reports for a resource",
          options: [
            optId5,
            optResourceType2,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort chargeback plan reports",
              args: { suggestions: ["timeCreated", "id"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of Ops Insights chargeback plans",
          options: [
            optCompartmentId2,
            {
              name: "--chargebackplan-id",
              description: "The OCID of the Ops Insights chargeback plan",
              args: { name: "chargebackplan-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort chargeback plans",
              args: { suggestions: ["timeCreated", "id", "lifecycleState"] },
            },
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified chargeback plan",
          options: [
            optChargebackplanId,
            {
              name: "--plan-description",
              description: "Description of OPSI Chargeback Plan",
              args: { name: "plan-description" },
            },
            {
              name: "--plan-name",
              description: "Name for the OPSI Chargeback plan",
              args: { name: "plan-name" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--plan-custom-items",
              description: "List of chargeback plan customizations",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-chargeback-plan-report",
          description:
            "Updates one or more attributes of the specified chargeback plan report",
          options: [
            optChargebackPlanReportId,
            optId5,
            optResourceType2,
            {
              name: "--report-name",
              description: "The chargeback plan report name",
              args: { name: "report-name" },
              isRequired: true,
            },
            {
              name: "--report-properties",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-chargeback-plan-exadata",
          description:
            "Create a chargeback plan resource for the resource in Ops Insights",
          options: [
            optCompartmentId,
            {
              name: "--plan-name",
              description: "Name for the OPSI Chargeback plan",
              args: { name: "plan-name" },
              isRequired: true,
            },
            {
              name: "--plan-type",
              description: "Chargeback Plan type of the chargeback entity",
              args: { name: "plan-type" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--plan-description",
              description: "Description of OPSI Chargeback Plan",
              args: { name: "plan-description" },
            },
            {
              name: "--plan-custom-items",
              description: "List of chargeback plan customizations",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "awr-hubs",
      description: "Logical grouping used for Awr Hub operations",
      subcommands: [
        {
          name: "create",
          description:
            "Create a AWR hub resource for the tenant in Operations Insights",
          options: [
            {
              name: "--operations-insights-warehouse-id",
              description: "OPSI Warehouse OCID",
              args: { name: "operations-insights-warehouse-id" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "User-friedly name of AWR Hub that does not have to be unique",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--object-storage-bucket-name",
              description: "Object Storage Bucket Name",
              args: { name: "object-storage-bucket-name" },
            },
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
          description: "Deletes an AWR hub",
          options: [
            optAwrHubId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-awr-database-report",
          description: "Gets the AWR report for the specified database",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            {
              name: "--report-type",
              description: "The query parameter to filter the AWR report types",
              args: { suggestions: ["AWR", "ASH"] },
            },
            optReportFormat,
            optFromJson,
          ],
        },
        {
          name: "get-awr-database-sql-report",
          description:
            "Gets the SQL health check report for one SQL of the specified database",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            {
              name: "--sql-id",
              description: "The parameter to filter SQL by ID",
              args: { name: "sql-id" },
              isRequired: true,
            },
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optReportFormat,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of an AWR hub",
          options: [optAwrHubId, optFromJson],
        },
        {
          name: "get-awr-report",
          description:
            "Gets the AWR report for the specified source database in the AWR hub",
          options: [
            optAwrHubId,
            {
              name: "--awr-source-database-identifier",
              description: "AWR source database identifier",
              args: { name: "awr-source-database-identifier" },
              isRequired: true,
            },
            optReportFormat,
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optFromJson,
          ],
        },
        {
          name: "list-awr-database-snapshots",
          description:
            "Lists AWR snapshots for the specified database in the AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the AWR snapshot summary data",
              args: { suggestions: ["TIME_BEGIN", "SNAPSHOT_ID"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-awr-databases",
          description:
            "Gets the list of databases and their snapshot summary details available in the AWRHub",
          options: [
            optAwrHubId,
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
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of AWR hubs",
          options: [
            {
              name: "--operations-insights-warehouse-id",
              description: "Unique Operations Insights Warehouse identifier",
              args: { name: "operations-insights-warehouse-id" },
              isRequired: true,
            },
            optCompartmentId2,
            optDisplayName,
            {
              name: "--id",
              description: "Unique Awr Hub identifier",
              args: { name: "id" },
            },
            optLifecycleState2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-awr-snapshots",
          description:
            "Lists AWR snapshots for the specified source database in the AWR hub",
          options: [
            optAwrHubId,
            {
              name: "--awr-source-database-identifier",
              description: "AWR source database identifier",
              args: { name: "awr-source-database-identifier" },
              isRequired: true,
            },
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The option to sort the AWR snapshot summary data",
              args: { suggestions: ["timeBegin", "snapshotId"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-cpu-usages",
          description:
            "Summarizes the AWR CPU resource limits and metrics for the specified database in AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optSessionType,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the AWR CPU usage summary data",
              args: { suggestions: ["TIME_SAMPLED", "AVG_VALUE"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-metrics",
          description:
            "Summarizes the metric samples for the specified database in the AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            {
              name: "--name",
              description:
                "The required multiple value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
              isRepeatable: true,
            },
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description:
                "The option to sort the AWR time series summary data",
              args: { suggestions: ["TIMESTAMP", "NAME"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-parameter-changes",
          description:
            "Summarizes the database parameter change history for one database parameter of the specified database in AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            {
              name: "--name",
              description:
                "The required single value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
            },
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description:
                "The option to sort the AWR database parameter change history data",
              args: { suggestions: ["IS_CHANGED", "NAME"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-parameters",
          description:
            "Summarizes the database parameter history for the specified database in AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
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
            optLimit,
            {
              name: "--sort-by",
              description:
                "The option to sort the AWR database parameter change history data",
              args: { suggestions: ["IS_CHANGED", "NAME"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-snapshot-ranges",
          description:
            "Summarizes the AWR snapshot ranges that contain continuous snapshots, for the specified AWRHub",
          options: [
            optAwrHubId,
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
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-sysstats",
          description:
            "Summarizes the AWR SYSSTAT sample data for the specified database in AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            {
              name: "--name",
              description:
                "The required multiple value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
              isRepeatable: true,
            },
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the data within a time period",
              args: { suggestions: ["TIME_BEGIN", "NAME"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-top-wait-events",
          description: "Summarizes the AWR top wait events",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
            optTimeGreaterThanOrEqualTo,
            optTimeLessThanOrEqualTo,
            optSessionType,
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
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-wait-event-buckets",
          description:
            "Summarizes AWR wait event data into value buckets and frequency, for the specified database in the AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            {
              name: "--name",
              description:
                "The required single value query parameter to filter the entity name",
              args: { name: "name" },
              isRequired: true,
            },
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
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
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort distribution data",
              args: { suggestions: ["CATEGORY", "PERCENTAGE"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-database-wait-events",
          description:
            "Summarizes the AWR wait event sample data for the specified database in the AWR",
          options: [
            optAwrHubId,
            optAwrSourceDatabaseIdentifier,
            optInstanceNumber,
            optBeginSnapshotIdentifierGreaterThanOrEqualTo,
            optEndSnapshotIdentifierLessThanOrEqualTo,
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
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The option to sort the data within a time period",
              args: { suggestions: ["TIME_BEGIN", "NAME"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "summarize-awr-sources-summaries",
          description: "Gets a list of summary of AWR Sources",
          options: [
            optAwrHubId,
            optCompartmentId2,
            {
              name: "--name",
              description: "Name for an Awr source database",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The order in which Awr sources summary records are listed",
              args: { suggestions: ["snapshotsUploaded", "name"] },
            },
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the configuration of a hub",
          options: [
            optAwrHubId,
            {
              name: "--display-name",
              description:
                "User-friedly name of AWR Hub that does not have to be unique",
              args: { name: "display-name" },
            },
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
      name: "news-reports",
      description:
        "Logical grouping used for Operations Insights news reports related operations",
      subcommands: [
        {
          name: "change",
          description:
            "Moves a news report resource from one compartment identifier to another",
          options: [
            optNewsReportId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource will be moved",
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
          description: "Create a news report in Ops Insights",
          options: [
            {
              name: "--name",
              description: "The news report name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--news-frequency",
              description: "News report frequency",
              args: { suggestions: ["WEEKLY", "DAILY", "HOURLY"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the news report",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--ons-topic-id",
              description: "The OCID of the ONS topic",
              args: { name: "ons-topic-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "Compartment Identifier where the news report will be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--content-types",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--locale",
              description: "Language of the news report",
              args: { suggestions: ["EN"] },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--status",
              description:
                "Defines if the news report will be enabled or disabled",
              args: { suggestions: ["DISABLED", "ENABLED", "TERMINATED"] },
            },
            {
              name: "--day-of-week",
              description:
                "Day of the week in which the news report will be sent if the frequency is set to WEEKLY",
              args: {
                suggestions: [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY",
                ],
              },
            },
            {
              name: "--are-child-compartments-included",
              description:
                "A flag to consider the resources within a given compartment and all sub-compartments",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tag-filters",
              description:
                "List of tag filters; each filter composed by a namespace, key, and value",
              args: { name: "json" },
            },
            {
              name: "--match-rule",
              description: "Match rule used for tag filters",
              args: { suggestions: ["MATCH_ANY", "MATCH_ALL", "MATCH_NONE"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a news report",
          options: [
            optNewsReportId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of a news report",
          options: [optNewsReportId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of news reports based on the query parameters specified",
          options: [
            optCompartmentId2,
            {
              name: "--news-report-id",
              description: "Unique Ops Insights news report identifier",
              args: { name: "news-report-id" },
            },
            optStatus,
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "News report list sort options",
              args: { suggestions: ["name", "newsFrequency"] },
            },
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the configuration of a news report",
          options: [
            optNewsReportId,
            {
              name: "--status",
              description:
                "Defines if the news report will be enabled or disabled",
              args: { suggestions: ["DISABLED", "ENABLED", "TERMINATED"] },
            },
            {
              name: "--news-frequency",
              description: "News report frequency",
              args: { suggestions: ["WEEKLY", "DAILY", "HOURLY"] },
            },
            {
              name: "--locale",
              description: "Language of the news report",
              args: { suggestions: ["EN"] },
            },
            { name: "--content-types", args: { name: "json" } },
            {
              name: "--ons-topic-id",
              description: "The OCID of the ONS topic",
              args: { name: "ons-topic-id" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--name",
              description: "The news report name",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "The description of the news report",
              args: { name: "description" },
            },
            {
              name: "--day-of-week",
              description:
                "Day of the week in which the news report will be sent if the frequency is set to WEEKLY",
              args: {
                suggestions: [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY",
                ],
              },
            },
            {
              name: "--are-child-compartments-included",
              description:
                "A flag to consider the resources within a given compartment and all sub-compartments",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tag-filters",
              description:
                "List of tag filters; each filter composed by a namespace, key, and value",
              args: { name: "json" },
            },
            {
              name: "--match-rule",
              description: "Match rule used for tag filters",
              args: { suggestions: ["MATCH_ANY", "MATCH_ALL", "MATCH_NONE"] },
            },
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
      name: "operations-insights-warehouse-users",
      description:
        "Logical grouping used for Operations Insights Warehouse User operations",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Operations Insights Warehouse user resource for the tenant in Operations Insights",
          options: [
            {
              name: "--operations-insights-warehouse-id",
              description: "OPSI Warehouse OCID",
              args: { name: "operations-insights-warehouse-id" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--name",
              description:
                "Username for schema which would have access to AWR Data, Enterprise Manager Data and Ops Insights OPSI Hub",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--connection-password",
              description:
                "User provided connection password for the AWR Data, Enterprise Manager Data and Ops Insights OPSI Hub",
              args: { name: "connection-password" },
              isRequired: true,
            },
            {
              name: "--is-awr-data-access",
              description: "Indicate whether user has access to AWR data",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--is-em-data-access",
              description: "Indicate whether user has access to EM data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-opsi-data-access",
              description: "Indicate whether user has access to OPSI data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
          description: "Deletes an Operations Insights Warehouse User",
          options: [
            optOperationsInsightsWarehouseUserId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of an Operations Insights Warehouse User",
          options: [optOperationsInsightsWarehouseUserId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Operations Insights Warehouse users",
          options: [
            {
              name: "--operations-insights-warehouse-id",
              description: "Unique Operations Insights Warehouse identifier",
              args: { name: "operations-insights-warehouse-id" },
              isRequired: true,
            },
            optCompartmentId2,
            optDisplayName,
            {
              name: "--id",
              description:
                "Unique Operations Insights Warehouse User identifier",
              args: { name: "id" },
            },
            optLifecycleState2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the configuration of an Operations Insights Warehouse User",
          options: [
            optOperationsInsightsWarehouseUserId,
            {
              name: "--connection-password",
              description:
                "User provided connection password for the AWR Data, Enterprise Manager Data and Ops Insights OPSI Hub",
              args: { name: "connection-password" },
            },
            {
              name: "--is-awr-data-access",
              description: "Indicate whether user has access to AWR data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-em-data-access",
              description: "Indicate whether user has access to EM data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-opsi-data-access",
              description: "Indicate whether user has access to OPSI data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
      name: "opsi-warehouse-data-objects",
      description:
        "Logical grouping used for Operations Insights Warehouse data objects operations",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of Warehouse data objects (e.g: views, tables), based on the query parameters specified",
          options: [
            optWarehouseType,
            optWarehouseId,
            {
              name: "--data-object-type",
              description:
                "A filter to return only data objects that match the data object type",
              args: { suggestions: ["VIEW", "TABLE"] },
              isRepeatable: true,
            },
            {
              name: "--name",
              description:
                "A filter to return only data objects that match the entire data object name",
              args: { name: "name" },
            },
            {
              name: "--owner",
              description:
                "A filter to return only data objects that match the entire data object owner name",
              args: { name: "owner" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sort options for Warehouse data objects list",
              args: { suggestions: ["dataObjectType", "name", "owner"] },
            },
            {
              name: "--summary-field",
              description:
                "Specifies the optional fields to return in a WarehouseDataObjectSummary",
              args: { suggestions: ["details"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "query-warehouse-data-standard-query",
          description:
            "Queries Warehouse data objects (e.g: views, tables) with the inputs provided and sends the result set back",
          options: [
            optWarehouseType,
            optWarehouseId,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQueryStatement,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
        {
          name: "query-warehouse-data-templatized-query",
          description:
            "Queries Warehouse data objects (e.g: views, tables) with the inputs provided and sends the result set back",
          options: [
            optWarehouseType,
            optWarehouseId,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQuerySelectList,
            optQueryFromClause,
            optQueryWhereConditionsList,
            optQueryGroupByList,
            optQueryHavingConditionsList,
            optQueryOrderByList,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
        {
          name: "query-warehouse-data-object-data-data-object-templatized-query",
          description:
            "Queries Warehouse data objects (e.g: views, tables) with the inputs provided and sends the result set back",
          options: [
            optWarehouseType,
            optWarehouseId,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQuerySelectList,
            optQueryFromClause,
            optQueryWhereConditionsList,
            optQueryGroupByList,
            optQueryHavingConditionsList,
            optQueryOrderByList,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
        {
          name: "query-warehouse-data-object-data-data-object-standard-query",
          description:
            "Queries Warehouse data objects (e.g: views, tables) with the inputs provided and sends the result set back",
          options: [
            optWarehouseType,
            optWarehouseId,
            optLimit,
            optPage,
            optQueryBindParams,
            optQueryQueryExecutionTimeoutInSeconds,
            optQueryStatement,
            optQueryTimeFilters,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "awr-hub-sources",
      description: "Logical grouping used for Awr Hub Source operations",
      subcommands: [
        {
          name: "change",
          description:
            "Moves an AwrHubSource resource from one compartment to another",
          options: [
            optAwrHubSourceId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Register Awr Hub source",
          options: [
            {
              name: "--name",
              description: "The name of the Awr Hub source database",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--awr-hub-id",
              description: "AWR Hub OCID",
              args: { name: "awr-hub-id" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--type",
              description: "Source type of the database",
              args: {
                suggestions: [
                  "ADW_S",
                  "ATP_S",
                  "ADW_D",
                  "ATP_D",
                  "EXTERNAL_PDB",
                  "EXTERNAL_NONCDB",
                  "COMANAGED_VM_CDB",
                  "COMANAGED_VM_PDB",
                  "COMANAGED_VM_NONCDB",
                  "COMANAGED_BM_CDB",
                  "COMANAGED_BM_PDB",
                  "COMANAGED_BM_NONCDB",
                  "COMANAGED_EXACS_CDB",
                  "COMANAGED_EXACS_PDB",
                  "COMANAGED_EXACS_NONCDB",
                  "LH_S",
                  "APEX_S",
                  "AJD_S",
                  "AVD_S",
                  "LH_D",
                  "APEX_D",
                  "AJD_D",
                  "AVD_D",
                  "UNDEFINED",
                ],
              },
              isRequired: true,
            },
            {
              name: "--associated-resource-id",
              description: "The OCID of the database id",
              args: { name: "associated-resource-id" },
            },
            {
              name: "--associated-opsi-id",
              description: "The OCID of the database id",
              args: { name: "associated-opsi-id" },
            },
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
          description: "Deletes an Awr Hub source object",
          options: [
            optAwrHubSourceId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable",
          description:
            "Disables a Awr Hub source database in Operations Insights",
          options: [
            optAwrHubSourceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable",
          description:
            "Enables a Awr Hub source database in Operations Insights",
          options: [
            optAwrHubSourceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the Awr Hub source object",
          options: [optAwrHubSourceId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Awr Hub source objects",
          options: [
            optAwrHubId,
            optCompartmentId2,
            {
              name: "--awr-hub-source-id",
              description: "Awr Hub source identifier",
              args: { name: "awr-hub-source-id" },
            },
            {
              name: "--source-type",
              description: "Filter by one or more database type",
              args: {
                suggestions: [
                  "ADW_S",
                  "ATP_S",
                  "ADW_D",
                  "ATP_D",
                  "EXTERNAL_PDB",
                  "EXTERNAL_NONCDB",
                  "COMANAGED_VM_CDB",
                  "COMANAGED_VM_PDB",
                  "COMANAGED_VM_NONCDB",
                  "COMANAGED_BM_CDB",
                  "COMANAGED_BM_PDB",
                  "COMANAGED_BM_NONCDB",
                  "COMANAGED_EXACS_CDB",
                  "COMANAGED_EXACS_PDB",
                  "COMANAGED_EXACS_NONCDB",
                  "LH_S",
                  "APEX_S",
                  "AJD_S",
                  "AVD_S",
                  "LH_D",
                  "APEX_D",
                  "AJD_D",
                  "AVD_D",
                  "UNDEFINED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--name",
              description: "Awr Hub source database name",
              args: { name: "name" },
            },
            {
              name: "--status",
              description: "Resource Status",
              args: {
                suggestions: [
                  "ACCEPTING",
                  "NOT_ACCEPTING",
                  "NOT_REGISTERED",
                  "TERMINATED",
                ],
              },
              isRepeatable: true,
            },
            optLifecycleState2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update Awr Hub Source object",
          options: [
            optAwrHubSourceId,
            {
              name: "--type",
              description: "Source type of the database",
              args: {
                suggestions: [
                  "ADW_S",
                  "ATP_S",
                  "ADW_D",
                  "ATP_D",
                  "EXTERNAL_PDB",
                  "EXTERNAL_NONCDB",
                  "COMANAGED_VM_CDB",
                  "COMANAGED_VM_PDB",
                  "COMANAGED_VM_NONCDB",
                  "COMANAGED_BM_CDB",
                  "COMANAGED_BM_PDB",
                  "COMANAGED_BM_NONCDB",
                  "COMANAGED_EXACS_CDB",
                  "COMANAGED_EXACS_PDB",
                  "COMANAGED_EXACS_NONCDB",
                  "LH_S",
                  "APEX_S",
                  "AJD_S",
                  "AVD_S",
                  "LH_D",
                  "APEX_D",
                  "AJD_D",
                  "AVD_D",
                  "UNDEFINED",
                ],
              },
            },
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
      name: "operations-insights-warehouses",
      description:
        "Logical grouping used for Ops Insights Warehouse operations",
      subcommands: [
        {
          name: "change",
          description:
            "Moves a Operations Insights Warehouse resource from one compartment to another",
          options: [
            optOperationsInsightsWarehouseId,
            optCompartmentId,
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
            "Create a Ops Insights Warehouse resource for the tenant in Ops Insights",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "User-friedly name of Ops Insights Warehouse that does not have to be unique",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--cpu-allocated",
              description: "Number of CPUs allocated to OPSI Warehouse ADW",
              args: { name: "cpu-allocated" },
              isRequired: true,
            },
            {
              name: "--compute-model",
              description:
                "The compute model for the OPSI warehouse ADW (OCPU or ECPU)",
              args: { name: "compute-model" },
            },
            {
              name: "--storage-allocated-in-gbs",
              description: "Storage allocated to OPSI Warehouse ADW",
              args: { name: "storage-allocated-in-gbs" },
            },
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
          description: "Deletes an Operations Insights Warehouse",
          options: [
            optOperationsInsightsWarehouseId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of an Ops Insights Warehouse",
          options: [optOperationsInsightsWarehouseId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Ops Insights warehouses",
          options: [
            optCompartmentId2,
            optDisplayName,
            {
              name: "--id",
              description: "Unique Ops Insights Warehouse identifier",
              args: { name: "id" },
            },
            optLifecycleState2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-operations-insights-warehouse-resource-usage",
          description:
            "Gets the details of resources used by an Operations Insights Warehouse",
          options: [optOperationsInsightsWarehouseId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the configuration of an Ops Insights Warehouse",
          options: [
            optOperationsInsightsWarehouseId,
            {
              name: "--display-name",
              description:
                "User-friedly name of Ops Insights Warehouse that does not have to be unique",
              args: { name: "display-name" },
            },
            {
              name: "--cpu-allocated",
              description: "Number of CPUs allocated to OPSI Warehouse ADW",
              args: { name: "cpu-allocated" },
            },
            {
              name: "--compute-model",
              description:
                "The compute model for the OPSI warehouse ADW (OCPU or ECPU)",
              args: { name: "compute-model" },
            },
            {
              name: "--storage-allocated-in-gbs",
              description: "Storage allocated to OPSI Warehouse ADW",
              args: { name: "storage-allocated-in-gbs" },
            },
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
          name: "download-warehouse-wallet",
          description:
            "Download the ADW wallet for Operations Insights Warehouse using which the Hub data is exposed",
          options: [
            optOperationsInsightsWarehouseId,
            {
              name: "--operations-insights-warehouse-wallet-password",
              description:
                "User provided ADW wallet password for the Ops Insights Warehouse",
              args: { name: "operations-insights-warehouse-wallet-password" },
              isRequired: true,
            },
            optFile,
            optFromJson,
          ],
        },
        {
          name: "rotate-warehouse-wallet",
          description:
            "Rotate the ADW wallet for Operations Insights Warehouse using which the Hub data is exposed",
          options: [
            optOperationsInsightsWarehouseId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "awr-hub-objects",
      description: "Logical grouping used for Awr Hub Object operations",
      subcommands: [
        {
          name: "delete",
          description: "Deletes an Awr Hub object",
          options: [
            optAwrHubSourceId,
            optIfMatch,
            optForce2,
            optName,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the Awr Hub object metadata and body",
          options: [optAwrHubSourceId, optFile, optName, optFromJson],
        },
        {
          name: "head",
          description:
            "Gets the Awr Hub object's user-defined metadata and entity tag (ETag)",
          options: [optAwrHubSourceId, optName, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Awr Hub objects",
          options: [
            optAwrHubSourceId,
            {
              name: "--prefix",
              description:
                "The string to use for matching against the start of object names in a Awr Hub list objects query",
              args: { name: "prefix" },
            },
            {
              name: "--start",
              description:
                "Object names returned by Awr Hub list objects query must be greater or equal to this parameter",
              args: { name: "start" },
            },
            {
              name: "--end",
              description:
                "Object names returned by Awr Hub list objects query must be strictly less than this parameter",
              args: { name: "end" },
            },
            {
              name: "--delimiter",
              description:
                "When this parameter is set, only objects whose names do not contain the delimiter character",
              args: { name: "delimiter" },
            },
            {
              name: "--start-after",
              description:
                "Awr Hub Object name after which remaining objects are listed",
              args: { name: "start-after" },
            },
            optPage,
            optLimit,
            {
              name: "--fields",
              description: "By default all the fields are returned",
              args: {
                suggestions: [
                  "name",
                  "size",
                  "etag",
                  "timeCreated",
                  "md5",
                  "archivalState",
                  "timeModified",
                  "storageTier",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "put",
          description:
            "Creates a new object or overwrites an existing object with the same name to the Awr Hub",
          options: [
            optAwrHubSourceId,
            optIfMatch,
            {
              name: "--name",
              description: "The name of the object",
              args: { name: "name" },
            },
            {
              name: "--file",
              description:
                "The file to load as the content of the object, or '-' to read from STDIN",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "opsi-configurations",
      description:
        "An OPSI configuration resource is a container for storing custom values for customizable configuration items",
      subcommands: [
        {
          name: "change",
          description:
            "Moves an OpsiConfiguration resource from one compartment to another",
          options: [
            optOpsiConfigurationId,
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment into which the resource should be moved",
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
          name: "delete",
          description: "Deletes an OPSI configuration resource",
          options: [
            optOpsiConfigurationId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of an OPSI configuration resource",
          options: [
            optOpsiConfigurationId,
            {
              name: "--opsi-config-field",
              description:
                "Optional fields to return as part of OpsiConfiguration object",
              args: { suggestions: ["configItems"] },
              isRepeatable: true,
            },
            {
              name: "--config-item-custom-status",
              description:
                "Specifies whether only customized configuration items or only non-customized configuration items or both have",
              args: { suggestions: ["customized", "nonCustomized"] },
              isRepeatable: true,
            },
            optConfigItemsApplicableContext,
            {
              name: "--config-item-field",
              description:
                "Specifies the fields to return in a config item summary",
              args: {
                suggestions: [
                  "name",
                  "value",
                  "defaultValue",
                  "metadata",
                  "applicableContexts",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of OPSI configuration resources based on the query parameters specified",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "Filter to return based on resources that match the entire display name",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "Filter to return based on Lifecycle state of OPSI configuration",
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
            },
            {
              name: "--opsi-config-type",
              description:
                "Filter to return based on configuration type of OPSI configuration",
              args: { suggestions: ["UX_CONFIGURATION"] },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "OPSI configurations list sort options",
              args: { suggestions: ["displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-configuration-items",
          description:
            "Gets the applicable configuration items based on the query parameters specified",
          options: [
            optCompartmentId2,
            {
              name: "--opsi-config-type",
              description:
                "Filter to return configuration items based on configuration type of OPSI configuration",
              args: { suggestions: ["UX_CONFIGURATION"] },
            },
            optLimit,
            optPage,
            optConfigItemsApplicableContext,
            {
              name: "--config-item-field",
              description:
                "Specifies the fields to return in a config item summary",
              args: {
                suggestions: [
                  "name",
                  "value",
                  "defaultValue",
                  "valueSourceConfig",
                  "metadata",
                  "applicableContexts",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--name",
              description:
                "A filter to return only configuration items that match the entire name",
              args: { name: "name" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-opsi-ux-configuration-details",
          description: "Create an OPSI configuration resource",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "User-friendly display name for the OPSI configuration",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of OPSI configuration",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            {
              name: "--config-items",
              description: "Array of configuration items with custom values",
              args: { name: "json" },
            },
            {
              name: "--opsi-config-field",
              description:
                "Optional fields to return as part of OpsiConfiguration object",
              args: { suggestions: ["configItems"] },
              isRepeatable: true,
            },
            {
              name: "--config-item-custom-status",
              description:
                "Specifies whether only customized configuration items or only non-customized configuration items or both have",
              args: { suggestions: ["customized", "nonCustomized"] },
              isRepeatable: true,
            },
            optConfigItemsApplicableContext,
            {
              name: "--config-item-field",
              description:
                "Specifies the fields to return in a config item summary",
              args: {
                suggestions: [
                  "name",
                  "value",
                  "defaultValue",
                  "metadata",
                  "applicableContexts",
                ],
              },
              isRepeatable: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-opsi-ux-configuration-details",
          description:
            "Updates an OPSI configuration resource with the given ID",
          options: [
            optOpsiConfigurationId,
            {
              name: "--display-name",
              description:
                "User-friendly display name for the OPSI configuration",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of OPSI configuration",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            {
              name: "--config-items",
              description: "Array of configuration items with custom values",
              args: { name: "json" },
            },
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
      name: "database-insights",
      description:
        "Logical grouping used for Operations Insights database-targeted operations",
      subcommands: [
        {
          name: "change-autonomous-database-insight-advanced-features-credential-by-vault",
          description:
            "Update connection detail for advanced features of Autonomous Database in Operations Insights",
          options: [
            optConnectionDetails,
            optDatabaseInsightId,
            optOpsiPrivateEndpointId,
            optIfMatch,
            optCredentialDetailsWalletSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPasswordSecretId,
            optRole,
            optUserName,
            optFromJson,
          ],
        },
        {
          name: "change-autonomous-database-insight-advanced-features-credential-by-iam",
          description:
            "Update connection detail for advanced features of Autonomous Database in Operations Insights",
          options: [
            optConnectionDetails,
            optDatabaseInsightId,
            optOpsiPrivateEndpointId,
            optIfMatch,
            optCredentialDetailsCredentialSourceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change",
          description:
            "Moves a DatabaseInsight resource from one compartment identifier to another",
          options: [
            optDatabaseInsightId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-external-mysql",
          description:
            "MySQL support within the OCI Ops Insights service has been deprecated as of January 29, 2026",
          options: [
            optDatabaseInsightId,
            optDatabaseConnectorId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-macs-managed-autonomous-database-insight-connection-credential-by-named-credentials",
          description:
            "Change the connection details of a MACS-managed autonomous database insight",
          options: [
            optDatabaseInsightId,
            optManagementAgentId,
            optConnectionDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--named-credential-id",
              description: "The credential OCID stored in management agent",
              args: { name: "named-credential-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "change-macs-managed-autonomous-database-insight-connection-credentials-by-source",
          description:
            "Change the connection details of a MACS-managed autonomous database insight",
          options: [
            optDatabaseInsightId,
            optManagementAgentId,
            optConnectionDetails,
            optIfMatch,
            optConnectionCredentialDetailsCredentialSourceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-macs-managed-autonomous-database-insight-connection-credential-by-vault",
          description:
            "Change the connection details of a MACS-managed autonomous database insight",
          options: [
            optDatabaseInsightId,
            optManagementAgentId,
            optConnectionDetails,
            optIfMatch,
            optConnectionCredentialDetailsCredentialSourceName,
            {
              name: "--connection-credential-details-user-name",
              description: "Database user name",
              args: { name: "connection-credential-details-user-name" },
            },
            {
              name: "--connection-credential-details-password-secret-id",
              description:
                "The secret OCID mapping to the database credentials",
              args: {
                name: "connection-credential-details-password-secret-id",
              },
            },
            {
              name: "--connection-credential-details-wallet-secret-id",
              description:
                "The OCID of the Secret where the database keystore contents are stored",
              args: { name: "connection-credential-details-wallet-secret-id" },
            },
            {
              name: "--connection-credential-details-role",
              description: "Database user role",
              args: { suggestions: ["NORMAL"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-macs-managed-cloud-database-insight-connection-credential-by-named-credentials",
          description:
            "Change the connection details of a Cloud MACS-managed database insight",
          options: [
            optDatabaseInsightId,
            optManagementAgentId,
            optConnectionDetails,
            optIfMatch,
            optConnectionCredentialDetailsCredentialSourceName,
            {
              name: "--connection-credential-details-named-credential-id",
              description: "The credential OCID stored in management agent",
              args: {
                name: "connection-credential-details-named-credential-id",
              },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-macs-managed-cloud-database-insight-connection-credential-by-vault",
          description:
            "Change the connection details of a Cloud MACS-managed database insight",
          options: [
            optDatabaseInsightId,
            optManagementAgentId,
            optConnectionDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--credential-source-name",
              description:
                "Credential source name that had been added in Management Agent wallet",
              args: { name: "credential-source-name" },
              isRequired: true,
            },
            optPasswordSecretId,
            optRole,
            optUserName,
            {
              name: "--wallet-secret-id",
              description:
                "The OCID of the Secret where the database keystore contents are stored",
              args: { name: "wallet-secret-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "change-macs-managed-cloud-database-insight-connection-credential-by-iam",
          description:
            "Change the connection details of a Cloud MACS-managed database insight",
          options: [
            optDatabaseInsightId,
            optManagementAgentId,
            optConnectionDetails,
            optIfMatch,
            optConnectionCredentialDetailsCredentialSourceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a database insight",
          options: [
            optDatabaseInsightId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-autonomous-database-insight-advanced-features",
          description:
            "Disable advanced features for an Autonomous Database in Operations Insights",
          options: [
            optDatabaseInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable",
          description: "Disables a database in Operations Insights",
          options: [
            optDatabaseInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-autonomous-database-insight-advanced-features-credential-by-vault",
          description:
            "Enables advanced features for an Autonomous Database in Operations Insights",
          options: [
            optConnectionDetails,
            optDatabaseInsightId,
            optOpsiPrivateEndpointId,
            optIfMatch,
            optCredentialDetailsWalletSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPasswordSecretId,
            optRole,
            optUserName,
            optFromJson,
          ],
        },
        {
          name: "enable-autonomous-database-insight-advanced-features-credential-by-iam",
          description:
            "Enables advanced features for an Autonomous Database in Operations Insights",
          options: [
            optConnectionDetails,
            optDatabaseInsightId,
            optOpsiPrivateEndpointId,
            optIfMatch,
            optCredentialDetailsCredentialSourceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of a database insight",
          options: [optDatabaseInsightId, optFromJson],
        },
        {
          name: "ingest-addm-reports",
          description:
            "This endpoint takes in a JSON payload, persists it in Operation Insights ingest pipeline",
          options: [
            {
              name: "--items",
              description: "List of Addm reports",
              args: { name: "json" },
              isRequired: true,
            },
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-database-configuration",
          description:
            "This is a generic ingest endpoint for all database configuration metrics",
          options: [
            {
              name: "--items",
              description:
                "Array of one or more database configuration metrics objects",
              args: { name: "json" },
              isRequired: true,
            },
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-my-sql-sql-stats",
          description:
            "The MySql SQL Stats endpoint takes in a JSON payload, persists it in Ops Insights ingest pipeline",
          options: [
            {
              name: "--items",
              description: "List of MySql SQL Stats Metric Entries",
              args: { name: "json" },
            },
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-my-sql-sql-text",
          description:
            "The SqlText endpoint takes in a JSON payload, persists it in Operation Insights ingest pipeline",
          options: [
            {
              name: "--items",
              description: "List of SQL Text Entries",
              args: { name: "json" },
            },
            optCompartmentId2,
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-sql-bucket",
          description:
            "The sqlbucket endpoint takes in a JSON payload, persists it in Ops Insights ingest pipeline",
          options: [
            {
              name: "--items",
              description: "List of SQL Bucket Metric Entries",
              args: { name: "json" },
            },
            optCompartmentId2,
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-sql-plan-lines",
          description:
            "The SqlPlanLines endpoint takes in a JSON payload, persists it in Operation Insights ingest pipeline",
          options: [
            {
              name: "--items",
              description: "List of SQL Plan Line Entries",
              args: { name: "json" },
            },
            optCompartmentId2,
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-sql-stats",
          description:
            "The SQL Stats endpoint takes in a JSON payload, persists it in Ops Insights ingest pipeline",
          options: [
            {
              name: "--items",
              description: "List of SQL Stats Metric Entries",
              args: { name: "json" },
            },
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-sql-text",
          description:
            "The SqlText endpoint takes in a JSON payload, persists it in Operation Insights ingest pipeline",
          options: [
            {
              name: "--items",
              description: "List of SQL Text Entries",
              args: { name: "json" },
            },
            optCompartmentId2,
            optDatabaseId2,
            optId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list-addm-db-finding-categories",
          description: "Gets list of ADDM finding categories",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Field name for sorting the finding categories",
              args: { suggestions: ["name"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-addm-db-findings-time-series",
          description:
            "Get the ADDM findings time series for the specified databases for a given time period",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optInstanceNumber,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optCategoryName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Field name for sorting the ADDM finding time series summary data",
              args: { suggestions: ["timestamp"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-addm-db-parameter-categories",
          description:
            "Gets list of ADDM database parameter categories for the specified databases",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Field name for sorting the database parameter categories",
              args: { suggestions: ["name"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-addm-db-recommendation-categories",
          description:
            "Gets list of ADDM recommendation categories for the specified databases",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Field name for sorting the recommendation categories",
              args: { suggestions: ["name"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-addm-db-recommendations-time-series",
          description:
            "Gets time series data for ADDM recommendations for the specified databases",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optInstanceNumber,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optCategoryName,
            {
              name: "--sql-identifier",
              description:
                "Optional filter to return only resources whose sql id matches the value given",
              args: { name: "sql-identifier" },
            },
            {
              name: "--owner-or-name-contains",
              description:
                "Optional filter to return only resources whose owner or name contains the substring given",
              args: { name: "owner-or-name-contains" },
            },
            {
              name: "--name-contains",
              description:
                "Optional filter to return only resources whose name contains the substring given",
              args: { name: "name-contains" },
            },
            {
              name: "--name",
              description:
                "Optional filter to return only resources whose name exactly matches the substring given",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Field name for sorting the ADDM recommendation time series summary data",
              args: { suggestions: ["timestamp"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-addm-dbs",
          description: "Gets a list of ADDM database information",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Field name for sorting ADDM database data",
              args: { suggestions: ["databaseName", "numberOfFindings"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-database-configurations",
          description:
            "Gets a list of database insight configurations based on the query parameters specified",
          options: [
            optCompartmentId2,
            optId,
            optDatabaseId,
            optExadataInsightId,
            optCdbName,
            optDatabaseType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Database configuration list sort options",
              args: {
                suggestions: [
                  "databaseName",
                  "databaseDisplayName",
                  "databaseType",
                ],
              },
            },
            optHostName,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optAll,
            optPageSize,
            optEmBridgeId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of database insights based on the query parameters specified",
          options: [
            optCompartmentId2,
            optId,
            optStatus,
            optLifecycleState,
            optDatabaseType,
            optDatabaseId,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a database summary response",
              args: {
                suggestions: [
                  "compartmentId",
                  "databaseName",
                  "databaseDisplayName",
                  "databaseType",
                  "databaseVersion",
                  "databaseHostNames",
                  "freeformTags",
                  "definedTags",
                ],
              },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Database insight list sort options",
              args: {
                suggestions: [
                  "databaseName",
                  "databaseDisplayName",
                  "databaseType",
                ],
              },
            },
            optExadataInsightId4,
            optCompartmentIdInSubtree,
            {
              name: "--opsi-private-endpoint-id",
              description:
                "Unique Operations Insights PrivateEndpoint identifier",
              args: { name: "opsi-private-endpoint-id" },
            },
            optAll,
            optPageSize,
            optEmBridgeId,
            optFromJson,
          ],
        },
        {
          name: "list-sql-plans",
          description:
            "Query SQL Warehouse to list the plan xml for a given SQL execution plan",
          options: [
            optCompartmentId,
            optSqlIdentifier,
            {
              name: "--plan-hash",
              description:
                "Unique plan hash for a SQL Plan of a particular SQL Statement",
              args: { name: "plan-hash" },
              isRequired: true,
              isRepeatable: true,
            },
            optDatabaseId2,
            optId2,
            optPage,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-sql-searches",
          description:
            "This API was deprecated May 2024 and is no longer functional as of May 31st, 2025",
          options: [
            optCompartmentId,
            optSqlIdentifier,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-sql-texts",
          description:
            "Query SQL Warehouse to get the full SQL Text for a SQL in a compartment and in all sub-compartments if",
          options: [
            optCompartmentId,
            {
              name: "--sql-identifier",
              description: "One or more unique SQL_IDs for a SQL Statement",
              args: { name: "sql-identifier" },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--database-id",
              description:
                "Optional list of database OCIDs of the assosicated DBaaS entity",
              args: { name: "database-id" },
              isRepeatable: true,
            },
            {
              name: "--id",
              description:
                "Optional list of database OCIDs of the database insight resource",
              args: { name: "id" },
              isRepeatable: true,
            },
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "summarize-addm-db-findings",
          description: "Summarizes ADDM findings for the specified databases",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optInstanceNumber,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optCategoryName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Field name for sorting the ADDM finding summary data",
              args: {
                suggestions: [
                  "impactOverallPercent",
                  "impactMaxPercent",
                  "impactAvgActiveSessions",
                  "frequencyCount",
                ],
              },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-addm-db-parameter-changes",
          description:
            "Summarizes the AWR database parameter change history for the specified parameter",
          options: [
            optCompartmentId,
            {
              name: "--name",
              description:
                "Required filter to return only changes for the specified parameter",
              args: { name: "name" },
              isRequired: true,
            },
            optDatabaseId,
            optId,
            optInstanceNumber,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            {
              name: "--value-contains",
              description:
                "Optional filter to return only resources whose value contains the substring given",
              args: { name: "value-contains" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Field name for sorting the database parameter change data",
              args: { suggestions: ["isChanged", "beginSnapId"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-addm-db-parameters",
          description:
            "Summarizes database parameter history information for the specified databases",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optInstanceNumber,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            {
              name: "--category-name",
              description:
                "Optional value filter to match the parameter category exactly",
              args: { name: "category-name" },
            },
            {
              name: "--name-or-value-contains",
              description:
                "Optional filter to return only resources whose name or value contains the substring given",
              args: { name: "name-or-value-contains" },
            },
            {
              name: "--is-changed",
              description:
                "Optional filter to return only parameters whose value changed in the specified time period",
              args: { suggestions: ["TRUE", "FALSE"] },
            },
            {
              name: "--is-default",
              description:
                "Optional filter to return only parameters whose end value was set to the default value",
              args: { suggestions: ["TRUE", "FALSE"] },
            },
            {
              name: "--has-recommendations",
              description:
                "Optional filter to return only parameters which have recommendations in the specified time period",
              args: { suggestions: ["TRUE", "FALSE"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Field name for sorting the database parameter data",
              args: { suggestions: ["isChanged", "name"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-addm-db-recommendations",
          description:
            "Summarizes ADDM recommendations for the specified databases",
          options: [
            optCompartmentId,
            optDatabaseId,
            optId,
            optInstanceNumber,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optCategoryName,
            {
              name: "--finding-identifier",
              description: "Unique finding ID",
              args: { name: "finding-identifier" },
            },
            {
              name: "--sql-identifier",
              description:
                "Optional filter to return only resources whose sql id matches the value given",
              args: { name: "sql-identifier" },
            },
            {
              name: "--owner-or-name-contains",
              description:
                "Optional filter to return only resources whose owner or name contains the substring given",
              args: { name: "owner-or-name-contains" },
            },
            {
              name: "--name-contains",
              description:
                "Optional filter to return only resources whose name contains the substring given",
              args: { name: "name-contains" },
            },
            {
              name: "--name",
              description:
                "Optional filter to return only resources whose name exactly matches the substring given",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Field name for sorting the recommendation data",
              args: {
                suggestions: [
                  "maxBenefitPercent",
                  "maxBenefitAvgActiveSessions",
                  "frequencyCount",
                ],
              },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-addm-db-schema-objects",
          description:
            "Summarizes Schema objects for the specified databases for the specified objectIdentifiers",
          options: [
            optCompartmentId,
            {
              name: "--object-identifier",
              description: "One or more unique Object id (from RDBMS)",
              args: { name: "object-identifier" },
              isRequired: true,
              isRepeatable: true,
            },
            optDatabaseId,
            optId,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optLimit,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-addm-db-sql-statements",
          description:
            "Summarizes SQL Statements for the specified databases for the specified sqlIdentifiers",
          options: [
            optCompartmentId,
            {
              name: "--sql-identifier",
              description: "One or more unique SQL_IDs for a SQL Statement",
              args: { name: "sql-identifier" },
              isRequired: true,
              isRepeatable: true,
            },
            optDatabaseId,
            optId,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optLimit,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "summarize-database-insight-resource-capacity-trend",
          description:
            "Returns response with time series data (endTimestamp, capacity, baseCapacity) for the time period specified",
          options: [
            optCompartmentId,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optCdbName,
            optUtilizationLevel,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Sorts using end timestamp , capacity or baseCapacity",
              args: {
                suggestions: ["endTimestamp", "capacity", "baseCapacity"],
              },
            },
            {
              name: "--tablespace-name",
              description: "Tablespace name for a database",
              args: { name: "tablespace-name" },
            },
            optHostName,
            optIsDatabaseInstanceLevelMetrics,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optFromJson,
          ],
        },
        {
          name: "summarize-database-insight-resource-forecast-trend",
          description:
            "Get Forecast predictions for CPU and Storage resources since a time in the past",
          options: [
            optCompartmentId,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optCdbName,
            optStatistic,
            optForecastDays,
            optForecastModel,
            optUtilizationLevel,
            optConfidence,
            optPage,
            optHostName,
            {
              name: "--tablespace-name",
              description: "Tablespace name for a database",
              args: { name: "tablespace-name" },
            },
            optIsDatabaseInstanceLevelMetrics,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optFromJson,
          ],
        },
        {
          name: "summarize-database-insight-resource-statistics",
          description:
            "Lists the Resource statistics (usage,capacity, usage change percent, utilization percent, base capacity",
          options: [
            optCompartmentId,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optCdbName,
            optPercentile,
            {
              name: "--insight-by",
              description:
                "Return data of a specific insight Possible values are High Utilization, Low Utilization",
              args: { name: "insight-by" },
            },
            optForecastDays,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The order in which resource statistics records are listed",
              args: {
                suggestions: [
                  "utilizationPercent",
                  "usage",
                  "usageChangePercent",
                  "databaseName",
                  "databaseType",
                ],
              },
            },
            optHostName,
            optIsDatabaseInstanceLevelMetrics,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optFromJson,
          ],
        },
        {
          name: "summarize-database-insight-resource-usage",
          description:
            "A cumulative distribution function is used to rank the usage data points per database within the specified",
          options: [
            optCompartmentId,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optHostName,
            optIsDatabaseInstanceLevelMetrics,
            optPage,
            optPercentile,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optCdbName,
            optFromJson,
          ],
        },
        {
          name: "summarize-database-insight-resource-usage-trend",
          description:
            "Returns response with time series data (endTimestamp, usage, capacity) for the time period specified",
          options: [
            optCompartmentId,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sorts using end timestamp, usage or capacity",
              args: { suggestions: ["endTimestamp", "usage", "capacity"] },
            },
            optHostName,
            optIsDatabaseInstanceLevelMetrics,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optCdbName,
            optFromJson,
          ],
        },
        {
          name: "summarize-database-insight-resource-utilization-insight",
          description:
            "Gets resources with current utilization (high and low) and projected utilization",
          options: [
            optCompartmentId,
            optResourceMetric,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optForecastDays,
            optHostName,
            optIsDatabaseInstanceLevelMetrics,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optCdbName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optFromJson,
          ],
        },
        {
          name: "summarize-database-insight-tablespace-usage-trend",
          description:
            "Returns response with usage time series data (endTimestamp, usage",
          options: [
            optCompartmentId,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optDatabaseId2,
            optId2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-insights",
          description:
            "This API was deprecated May 2024 and is no longer functional as of May 31st, 2025",
          options: [
            optCompartmentId,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optCdbName,
            optHostName,
            {
              name: "--database-time-pct-greater-than",
              description: "Filter sqls by percentage of db time",
              args: { name: "database-time-pct-greater-than" },
            },
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-plan-insights",
          description:
            "This API was deprecated May 2024 and is no longer functional as of May 31st, 2025",
          options: [
            optCompartmentId,
            optSqlIdentifier,
            optDatabaseId2,
            optId2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-response-time-distributions",
          description:
            "This API was deprecated May 2024 and is no longer functional as of May 31st, 2025",
          options: [
            optCompartmentId,
            optSqlIdentifier,
            optDatabaseId2,
            optId2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-statistics",
          description:
            "This API was deprecated May 2024 and is no longer functional as of May 31st, 2025",
          options: [
            optCompartmentId,
            optDatabaseType,
            optDatabaseId,
            optId,
            optExadataInsightId,
            optCdbName,
            optHostName,
            {
              name: "--database-time-pct-greater-than",
              description: "Filter sqls by percentage of db time",
              args: { name: "database-time-pct-greater-than" },
            },
            {
              name: "--sql-identifier",
              description: "One or more unique SQL_IDs for a SQL Statement",
              args: { name: "sql-identifier" },
              isRepeatable: true,
            },
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to use when sorting SQL statistics",
              args: {
                suggestions: [
                  "databaseTimeInSec",
                  "executionsPerHour",
                  "executionsCount",
                  "cpuTimeInSec",
                  "ioTimeInSec",
                  "inefficientWaitTimeInSec",
                  "responseTimeInSec",
                  "planCount",
                  "variability",
                  "averageActiveSessions",
                  "databaseTimePct",
                  "inefficiencyInPct",
                  "changeInCpuTimeInPct",
                  "changeInIoTimeInPct",
                  "changeInInefficientWaitTimeInPct",
                  "changeInResponseTimeInPct",
                  "changeInAverageActiveSessionsInPct",
                  "changeInExecutionsPerHourInPct",
                  "changeInInefficiencyInPct",
                ],
              },
            },
            {
              name: "--category",
              description: "Filter sqls by one or more performance categories",
              args: {
                suggestions: [
                  "DEGRADING",
                  "VARIANT",
                  "INEFFICIENT",
                  "CHANGING_PLANS",
                  "IMPROVING",
                  "DEGRADING_VARIANT",
                  "DEGRADING_INEFFICIENT",
                  "DEGRADING_CHANGING_PLANS",
                  "DEGRADING_INCREASING_IO",
                  "DEGRADING_INCREASING_CPU",
                  "DEGRADING_INCREASING_INEFFICIENT_WAIT",
                  "DEGRADING_CHANGING_PLANS_AND_INCREASING_IO",
                  "DEGRADING_CHANGING_PLANS_AND_INCREASING_CPU",
                  "DEGRADING_CHANGING_PLANS_AND_INCREASING_INEFFICIENT_WAIT",
                  "VARIANT_INEFFICIENT",
                  "VARIANT_CHANGING_PLANS",
                  "VARIANT_INCREASING_IO",
                  "VARIANT_INCREASING_CPU",
                  "VARIANT_INCREASING_INEFFICIENT_WAIT",
                  "VARIANT_CHANGING_PLANS_AND_INCREASING_IO",
                  "VARIANT_CHANGING_PLANS_AND_INCREASING_CPU",
                  "VARIANT_CHANGING_PLANS_AND_INCREASING_INEFFICIENT_WAIT",
                  "INEFFICIENT_CHANGING_PLANS",
                  "INEFFICIENT_INCREASING_INEFFICIENT_WAIT",
                  "INEFFICIENT_CHANGING_PLANS_AND_INCREASING_INEFFICIENT_WAIT",
                ],
              },
              isRepeatable: true,
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-statistics-time-series",
          description:
            "This API was deprecated May 2024 and is no longer functional as of May 31st, 2025",
          options: [
            optCompartmentId,
            optSqlIdentifier,
            optDatabaseId,
            {
              name: "--id",
              description:
                "Optional list of database OCIDs of the database insight resource",
              args: { name: "id" },
              isRepeatable: true,
            },
            optExadataInsightId,
            optCdbName,
            optHostName,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optVmclusterName,
            optFromJson,
          ],
        },
        {
          name: "summarize-sql-statistics-time-series-by-plan",
          description:
            "This API was deprecated May 2024 and is no longer functional as of May 31st, 2025",
          options: [
            optCompartmentId,
            optSqlIdentifier,
            optDatabaseId2,
            optId2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "synchronize-autonomous-database-to-exadata",
          description:
            "Synchronize infrastructure details that has been missing when autonomous database onboarded in Ops Insights",
          options: [
            {
              name: "--entity-source",
              description: "Source of the database entity",
              args: {
                suggestions: [
                  "AUTONOMOUS_DATABASE",
                  "EM_MANAGED_EXTERNAL_DATABASE",
                  "MACS_MANAGED_EXTERNAL_DATABASE",
                  "PE_COMANAGED_DATABASE",
                  "MDS_MYSQL_DATABASE_SYSTEM",
                  "EXTERNAL_MYSQL_DATABASE_SYSTEM",
                  "MACS_MANAGED_CLOUD_DATABASE",
                  "MACS_MANAGED_AUTONOMOUS_DATABASE",
                ],
              },
              isRequired: true,
            },
            optCompartmentId2,
            optDatabaseId2,
            optId2,
            optExadataInsightId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "test-macs-managed-autonomous-database-insight-connection-credential-by-named-credentials",
          description:
            "Test the connection details of a MACS-managed autonomous database",
          options: [
            optManagementAgentId,
            optConnectionDetails,
            optDatabaseId2,
            optId2,
            optConnectionCredentialDetailsCredentialSourceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--named-credential-id",
              description: "The credential OCID stored in management agent",
              args: { name: "named-credential-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "test-macs-managed-cloud-database-insight-connection-credential-by-vault",
          description:
            "Test the connection details of a Cloud MACS-managed database",
          options: [
            optManagementAgentId,
            optConnectionDetails,
            optDatabaseId2,
            optId2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--credential-source-name",
              description:
                "Credential source name that had been added in Management Agent wallet",
              args: { name: "credential-source-name" },
              isRequired: true,
            },
            optPasswordSecretId,
            optRole,
            optUserName,
            {
              name: "--wallet-secret-id",
              description:
                "The OCID of the Secret where the database keystore contents are stored",
              args: { name: "wallet-secret-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "test-macs-managed-cloud-database-insight-connection-credential-by-iam",
          description:
            "Test the connection details of a Cloud MACS-managed database",
          options: [
            optManagementAgentId,
            optConnectionDetails,
            optDatabaseId2,
            optId2,
            optConnectionCredentialDetailsCredentialSourceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-em-external-db",
          description:
            "Create an Enterprise Mananger External Database Insight resource for a database in Operations Insights",
          options: [
            optCompartmentId3,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--exadata-insight-id",
              description: "The OCID of the Exadata insight",
              args: { name: "exadata-insight-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEmId,
            optEmEntityId,
            optEmBridgeId2,
            optFromJson,
          ],
        },
        {
          name: "enable-em-external-db",
          description:
            "Enable an Enterprise Manager External Database in Operations Insights",
          options: [
            optDatabaseInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-autonomous-db",
          description:
            "Update tags for an Autonomous Database Insight resource in Operations Insights",
          options: [
            optDatabaseInsightId,
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
          name: "update-em-external-db",
          description:
            "Update tags for an Enterprise Manager External Database Insight resource in Operations Insights",
          options: [
            optDatabaseInsightId,
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
          name: "update-macs-external-db",
          description:
            "Update tags for a MACS Agent Managed External Database Insight resource in Operations Insights",
          options: [
            optDatabaseInsightId,
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
          name: "create-pe-comanged-database",
          description:
            "Create a Database Insight resource for a database in Operations Insights",
          options: [
            optCompartmentId3,
            optDatabaseId3,
            optDatabaseResourceType,
            optServiceName,
            {
              name: "--credential-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--deployment-type",
              description: "Database Deployment Type",
              args: { suggestions: ["VIRTUAL_MACHINE", "BARE_METAL", "EXACS"] },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optOpsiPrivateEndpointId,
            {
              name: "--dbm-private-endpoint-id",
              description:
                "The OCID of the Database Management private endpoint",
              args: { name: "dbm-private-endpoint-id" },
            },
            optConnectionDetails2,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-pe-comanaged-database",
          description: "Enables a database in Operations Insights",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID of the Private service accessed database",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--opsi-private-endpoint-id",
              description: "The OCID of the OPSI private endpoint",
              args: { name: "opsi-private-endpoint-id" },
              isRequired: true,
            },
            optServiceName,
            {
              name: "--credential-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDatabaseInsightId,
            optConnectionDetails2,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-pe-comanaged-database",
          description: "Updates configuration of a database insight",
          options: [
            optDatabaseInsightId,
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
          name: "change-pe-comanaged-database-detail",
          description:
            "Change the connection details of a co-managed database insight",
          options: [
            optDatabaseInsightId,
            optServiceName,
            {
              name: "--opsi-private-endpoint-id",
              description: "The OCID of the OPSI private endpoint",
              args: { name: "opsi-private-endpoint-id" },
              isRequired: true,
            },
            optConnectionDetails2,
            optIfMatch,
            optCredentialDetailsCredentialSourceName,
            {
              name: "--credential-details-user-name",
              description: "Database user name",
              args: { name: "credential-details-user-name" },
            },
            {
              name: "--credential-details-password-secret-id",
              description:
                "The secret OCID mapping to the database credentials",
              args: { name: "credential-details-password-secret-id" },
            },
            optCredentialDetailsWalletSecretId,
            {
              name: "--credential-details-role",
              description: "Database user role",
              args: { suggestions: ["NORMAL"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-mds-my-sql-database",
          description:
            "Create a Database Insight resource for a database in Operations Insights",
          options: [
            optCompartmentId3,
            optDatabaseId3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-mds-my-sql-database",
          description: "Enables a database in Operations Insights",
          options: [
            optDatabaseInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mds-my-sql-database",
          description: "Updates configuration of a database insight",
          options: [
            optDatabaseInsightId,
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
          name: "create-macs-managed-cloud-database-insight",
          description:
            "Create a Database Insight resource for a database in Operations Insights",
          options: [
            optCompartmentId3,
            optDatabaseId3,
            optManagementAgentId,
            optConnectionDetails,
            optConnectionCredentialDetails,
            optDatabaseResourceType,
            {
              name: "--deployment-type",
              description:
                "Database Deployment Type (EXACS will be supported in the future)",
              args: {
                suggestions: [
                  "VIRTUAL_MACHINE",
                  "BARE_METAL",
                  "EXACC",
                  "EXACS",
                ],
              },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-macs-managed-cloud-database-insight",
          description: "Enables a database in Operations Insights",
          options: [
            {
              name: "--compartment-id",
              description: "The compartment OCID of the External Database",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optManagementAgentId,
            optConnectionDetails,
            optConnectionCredentialDetails,
            optDatabaseInsightId,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-macs-managed-cloud-database-insight",
          description: "Updates configuration of a database insight",
          options: [
            optDatabaseInsightId,
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
          name: "create-autonomous-database",
          description:
            "Create a Database Insight resource for a database in Operations Insights",
          options: [
            optCompartmentId3,
            optDatabaseId3,
            optDatabaseResourceType,
            {
              name: "--is-advanced-features-enabled",
              description:
                "Flag is to identify if advanced features for autonomous database is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optConnectionDetails2,
            { name: "--credential-details", args: { name: "json" } },
            optOpsiPrivateEndpointId,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-autonomous-database",
          description: "Enables a database in Operations Insights",
          options: [
            {
              name: "--is-advanced-features-enabled",
              description:
                "Flag is to identify if advanced features for autonomous database is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDatabaseInsightId,
            {
              name: "--database-resource-type",
              description: "OCI database resource type",
              args: { name: "database-resource-type" },
            },
            optConnectionDetails2,
            { name: "--credential-details", args: { name: "json" } },
            optOpsiPrivateEndpointId,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-external-mysql-database-insight",
          description:
            "Create a Database Insight resource for a database in Operations Insights",
          options: [
            optCompartmentId3,
            optDatabaseId3,
            optDatabaseConnectorId,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-external-mysql-database-insight",
          description: "Enables a database in Operations Insights",
          options: [
            optDatabaseConnectorId,
            optDatabaseInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-external-mysql-database-insight",
          description: "Updates configuration of a database insight",
          options: [
            optDatabaseInsightId,
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
          name: "create-macs-managed-autonomous-database-insight",
          description:
            "Create a Database Insight resource for a database in Operations Insights",
          options: [
            optCompartmentId3,
            optDatabaseId3,
            optManagementAgentId,
            optConnectionDetails,
            optConnectionCredentialDetails,
            optDatabaseResourceType,
            {
              name: "--deployment-type",
              description: "Database Deployment Type",
              args: { suggestions: ["EXACC"] },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-macs-managed-autonomous-database-insight",
          description: "Enables a database in Operations Insights",
          options: [
            {
              name: "--compartment-id",
              description: "The compartment OCID of the Autonomous Database",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optManagementAgentId,
            optConnectionDetails,
            optConnectionCredentialDetails,
            optDatabaseInsightId,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-macs-managed-autonomous-database-insight",
          description: "Updates configuration of a database insight",
          options: [
            optDatabaseInsightId,
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
      name: "host-insights",
      description:
        "Logical grouping used for Operations Insights host related operations",
      subcommands: [
        {
          name: "change",
          description:
            "Moves a HostInsight resource from one compartment identifier to another",
          options: [
            optHostInsightId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a host insight",
          options: [
            optHostInsightId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable",
          description: "Disables a host in Ops Insights",
          options: [
            optHostInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of a host insight",
          options: [optHostInsightId, optFromJson],
        },
        {
          name: "ingest-host-configuration",
          description:
            "This is a generic ingest endpoint for all the host configuration metrics",
          options: [
            optId3,
            {
              name: "--items",
              description:
                "Collection of one or more host configuration metric data points",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "ingest-host-metrics",
          description:
            "This is a generic ingest endpoint for all the host performance metrics",
          options: [
            optId3,
            {
              name: "--items",
              description:
                "Collection of one or more host performance metric data points",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list-host-configurations",
          description:
            "Gets a list of host insight configurations based on the query parameters specified",
          options: [
            optCompartmentId2,
            optId4,
            optExadataInsightId,
            optPlatformType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Host configuration list sort options",
              args: { suggestions: ["hostName", "platformType"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHostType,
            optHostId,
            optVmclusterName,
            optStatus,
            optAll,
            optPageSize,
            {
              name: "--em-bridge-id",
              description: "Unique Enterprise Manager bridge identifier",
              args: { name: "em-bridge-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of host insights based on the query parameters specified",
          options: [
            optCompartmentId2,
            optId4,
            optStatus,
            optLifecycleState,
            optHostType,
            optPlatformType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Host insight list sort options",
              args: { suggestions: ["hostName", "hostType"] },
            },
            optExadataInsightId4,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optEmBridgeId,
            optFromJson,
          ],
        },
        {
          name: "list-hosted-entities",
          description: "Get a list of hosted entities details",
          options: [
            optCompartmentId,
            optId3,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPlatformType,
            optExadataInsightId4,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Hosted entity list sort options",
              args: { suggestions: ["entityName", "entityType"] },
            },
            optHostType,
            optHostId,
            optStatus,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-importable-agent-entities",
          description:
            "Gets a list of agent entities available to add a new hostInsight",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Hosted entity list sort options",
              args: { suggestions: ["entityName", "entityType"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-host-insight-resource-capacity-trend",
          description:
            "Returns response with time series data (endTimestamp, capacity) for the time period specified",
          options: [
            optCompartmentId,
            optResourceMetric2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPlatformType,
            optId4,
            optExadataInsightId,
            optUtilizationLevel,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sorts using end timestamp or capacity",
              args: { suggestions: ["endTimestamp", "capacity"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHostType,
            optHostId,
            optVmclusterName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-host-insight-resource-forecast-trend",
          description:
            "Get Forecast predictions for CPU or memory resources since a time in the past",
          options: [
            optCompartmentId,
            optResourceMetric2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPlatformType,
            optId4,
            optExadataInsightId,
            optStatistic,
            optForecastDays,
            optForecastModel,
            optUtilizationLevel,
            optConfidence,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHostType,
            optHostId,
            optVmclusterName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            {
              name: "--mount-point",
              description:
                "Mount points are specialized NTFS filesystem objects",
              args: { name: "mount-point" },
            },
            {
              name: "--interface-name",
              description: "Name of the network interface",
              args: { name: "interface-name" },
            },
            {
              name: "--gpu-id",
              description: "GPU identifier",
              args: { name: "integer" },
            },
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-host-insight-resource-statistics",
          description:
            "Lists the resource statistics (usage, capacity, usage change percent, utilization percent",
          options: [
            optCompartmentId,
            optResourceMetric2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPlatformType,
            optId4,
            optExadataInsightId,
            optPercentile,
            {
              name: "--insight-by",
              description:
                "Return data of a specific insight Possible values are High Utilization, Low Utilization",
              args: { name: "insight-by" },
            },
            optForecastDays,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The order in which resource statistics records are listed",
              args: {
                suggestions: [
                  "utilizationPercent",
                  "usage",
                  "usageChangePercent",
                  "hostName",
                  "platformType",
                ],
              },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHostType,
            optHostId,
            optVmclusterName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-host-insight-resource-usage",
          description:
            "A cumulative distribution function is used to rank the usage data points per host within the specified time",
          options: [
            optCompartmentId,
            optResourceMetric2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPlatformType,
            optId4,
            optExadataInsightId,
            optPage,
            optPercentile,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHostType,
            optHostId,
            optVmclusterName,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-host-insight-resource-usage-trend",
          description:
            "Returns response with time series data (endTimestamp, usage, capacity) for the time period specified",
          options: [
            optCompartmentId,
            optResourceMetric2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPlatformType,
            optId4,
            optExadataInsightId,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sorts using end timestamp, usage or capacity",
              args: { suggestions: ["endTimestamp", "usage", "capacity"] },
            },
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHostType,
            optHostId,
            optVmclusterName,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-host-insight-resource-utilization-insight",
          description:
            "Gets resources with current utilization (high and low) and projected utilization",
          options: [
            optCompartmentId,
            optResourceMetric2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPlatformType,
            optId4,
            optExadataInsightId,
            optForecastDays,
            optPage,
            optDefinedTagEquals,
            optFreeformTagEquals,
            optDefinedTagExists,
            optFreeformTagExists,
            optCompartmentIdInSubtree,
            optHostType,
            optHostId,
            optVmclusterName,
            optHighUtilizationThreshold,
            optLowUtilizationThreshold,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "update-host-insight-update-pe-comanaged-host-insight-details",
          description: "Updates configuration of a host insight",
          options: [
            optHostInsightId,
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
          name: "create-em-external-host",
          description:
            "Create an Enterprise Mananger External Host Insight resource for a host in Operations Insights",
          options: [
            optCompartmentId6,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--exadata-insight-id",
              description: "The OCID of the Exadata insight",
              args: { name: "exadata-insight-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEmId,
            optEmEntityId,
            optEmBridgeId2,
            optFromJson,
          ],
        },
        {
          name: "create-macs-external-host",
          description:
            "Create an MACS Managed External Host Insight resource for a host in Operations Insights",
          options: [
            optCompartmentId6,
            optManagementAgentId,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-em-external-host",
          description:
            "Enable an Enterprise Manager External Host in Operations Insights",
          options: [
            optHostInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-macs-external-host",
          description:
            "Enable a MACS Managed External Host in Operations Insights",
          options: [
            optHostInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-em-external-host",
          description:
            "Update tags for an EM Managed External Host Insight resource in Operations Insights",
          options: [
            optHostInsightId,
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
          name: "update-macs-external-host",
          description:
            "Update tags for a MACS Managed External Host Insight resource in Operations Insights",
          options: [
            optHostInsightId,
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
          name: "summarize-io-usage-trend",
          description:
            "Returns response with usage time series data with breakdown by IO interface for the time period specified",
          options: [
            optCompartmentId,
            optId3,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optHostId,
            optPage,
            optLimit,
            optStatistic,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-top-processes-usage-trend",
          description:
            "Returns response with aggregated time series data (timeIntervalstart, timeIntervalEnd, commandArgs",
          options: [
            optCompartmentId,
            optId3,
            {
              name: "--resource-metric",
              description: "Host top processes resource metric sort options",
              args: { name: "resource-metric" },
              isRequired: true,
            },
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optPage,
            optLimit,
            optHostType,
            optHostId,
            optStatistic,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "create-macs-cloud-host",
          description:
            "Create a Host Insight resource for a host in Ops Insights",
          options: [
            optCompartmentId6,
            {
              name: "--compute-id",
              description: "The OCID of the Compute Instance",
              args: { name: "compute-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-macs-cloud-host",
          description: "Enables a host in Ops Insights",
          options: [
            optHostInsightId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-macs-cloud-host",
          description: "Updates configuration of a host insight",
          options: [
            optHostInsightId,
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
          name: "list-macs-cloud-hosts",
          description:
            "Gets a list of available compute intances running cloud agent to add a new hostInsight",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Compute entity list sort options",
              args: {
                suggestions: [
                  "computeId",
                  "computeDisplayName",
                  "platformType",
                  "hostName",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-network-usage-trend",
          description:
            "Returns response with usage time series data with breakdown by network interface for the time period",
          options: [
            optCompartmentId,
            optId3,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optHostId,
            optPage,
            optLimit,
            optStatistic,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-storage-usage-trend",
          description:
            "Returns response with usage time series data with breakdown by filesystem for the time period specified",
          options: [
            optCompartmentId,
            optId3,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optHostId,
            optPage,
            optLimit,
            optStatistic,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-disk-statistics",
          description: "Returns response with disk(s) statistics for a host",
          options: [
            optCompartmentId,
            optId3,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optHostId,
            optStatistic,
            optStatus,
            optFromJson,
          ],
        },
        {
          name: "summarize-host-recommendation",
          description:
            "Returns response with some recommendations if apply for a host",
          options: [
            optCompartmentId,
            optId3,
            optResourceMetric2,
            optAnalysisTimeInterval,
            optTimeIntervalStart,
            optTimeIntervalEnd,
            optHostId,
            optLimit,
            optStatistic,
            optFromJson,
          ],
        },
        {
          name: "update-macs-managed-database-host-insight",
          description: "Updates configuration of a host insight",
          options: [
            optHostInsightId,
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
      name: "work-requests",
      description:
        "Logical grouping used for Ops Insights Work Request operations",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous request",
              args: { name: "work-request-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optPage,
            optLimit,
            optCompartmentId2,
            {
              name: "--id",
              description: "The ID of the asynchronous work request",
              args: { name: "id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given OperationStatus",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The ID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            {
              name: "--related-resource-id",
              description:
                "The ID of the related resource for the resource affected by the work request",
              args: { name: "related-resource-id" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "opsi-private-endpoint",
      description:
        "A private endpoint that allows Operation Insights services to connect to databases in a customer's virtual",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a private endpoint from one compartment to another",
          options: [
            {
              name: "--compartment-id",
              description:
                "The new compartment OCID of the Private service accessed database",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optOpsiPrivateEndpointId2,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Create a private endpoint resource for the tenant in Ops Insights",
          options: [
            {
              name: "--display-name",
              description: "The display name for the private endpoint",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The compartment OCID of the Private service accessed database",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description:
                "The VCN OCID of the Private service accessed database",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The Subnet OCID of the Private service accessed database",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--is-used-for-rac-dbs",
              description:
                "This flag was previously used to create a private endpoint with scan proxy",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the private endpoint",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCID of the network security groups that the private endpoint belongs to",
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
          description: "Deletes a private endpoint",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optOpsiPrivateEndpointId2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified private endpoint",
          options: [optOpsiPrivateEndpointId2, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Operation Insights private endpoints",
          options: [
            optCompartmentId2,
            optDisplayName,
            {
              name: "--opsi-private-endpoint-id",
              description:
                "Unique Operations Insights PrivateEndpoint identifier",
              args: { name: "opsi-private-endpoint-id" },
            },
            {
              name: "--is-used-for-rac-dbs",
              description:
                "The option to filter OPSI private endpoints that can used for RAC",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN",
              args: { name: "vcn-id" },
            },
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort private endpoints",
              args: { suggestions: ["timeCreated", "id", "displayName"] },
            },
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified private endpoint",
          options: [
            {
              name: "--display-name",
              description: "The display name of the private endpoint",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the private endpoint",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCID of the network security groups that the Private service accessed the database",
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
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optOpsiPrivateEndpointId2,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
