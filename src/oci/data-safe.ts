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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
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
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "SUSPENDING",
      "SUSPENDED",
    ],
  },
  isRepeatable: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "For list pagination",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description: "Default is false",
  args: { name: "boolean", suggestions: ["true", "false"] },
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
const optAccessLevel: Fig.Option = {
  name: "--access-level",
  description: "Valid values are RESTRICTED and ACCESSIBLE",
  args: { suggestions: ["RESTRICTED", "ACCESSIBLE"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "A filter to return only resources that match the specified compartment OCID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSubsettingPolicyId: Fig.Option = {
  name: "--subsetting-policy-id",
  description: "The OCID of the subsetting policy",
  args: { name: "subsetting-policy-id" },
  isRequired: true,
};
const optTargetId: Fig.Option = {
  name: "--target-id",
  description:
    "A filter to return only items related to a specific target OCID",
  args: { name: "target-id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the specified display name",
  args: { name: "display-name" },
};
const optMaskingPolicyId: Fig.Option = {
  name: "--masking-policy-id",
  description: "The OCID of the masking policy",
  args: { name: "masking-policy-id" },
  isRequired: true,
};
const optSensitiveDataModelId: Fig.Option = {
  name: "--sensitive-data-model-id",
  description: "The OCID of the sensitive data model",
  args: { name: "sensitive-data-model-id" },
  isRequired: true,
};
const optTargetDatabaseGroupId: Fig.Option = {
  name: "--target-database-group-id",
  description:
    "A filter to return the target database group that matches the specified OCID",
  args: { name: "target-database-group-id" },
};
const optSchemaName: Fig.Option = {
  name: "--schema-name",
  description: "A filter to return only items related to specific schema name",
  args: { name: "schema-name" },
  isRepeatable: true,
};
const optSecurityAssessmentId: Fig.Option = {
  name: "--security-assessment-id",
  description: "The OCID of the security assessment",
  args: { name: "security-assessment-id" },
  isRequired: true,
};
const optTimeCreatedLessThan: Fig.Option = {
  name: "--time-created-less-than",
  description: "Search for resources that were created before a specific date",
  args: { name: "datetime" },
};
const optTimeCreatedGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-created-greater-than-or-equal-to",
  description:
    "A filter to return only the resources that were created after the specified date and time",
  args: { name: "datetime" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field used for sorting",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optTargetDatabaseId: Fig.Option = {
  name: "--target-database-id",
  description: "The OCID of the Data Safe target database",
  args: { name: "target-database-id" },
  isRequired: true,
};
const optUserAssessmentId: Fig.Option = {
  name: "--user-assessment-id",
  description: "The OCID of the user assessment",
  args: { name: "user-assessment-id" },
  isRequired: true,
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optObjectName: Fig.Option = {
  name: "--object-name",
  description:
    "A filter to return only items related to a specific object name",
  args: { name: "object-name" },
  isRepeatable: true,
};
const optIsRefreshStatsEnabled: Fig.Option = {
  name: "--is-refresh-stats-enabled",
  description: "Indicates if statistics gathering is enabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optScimQuery: Fig.Option = {
  name: "--scim-query",
  description:
    "The scimQuery query parameter accepts filter expressions that use the syntax described in Section 3.2.2.2",
  args: { name: "scim-query" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "The description of the subset rule",
  args: { name: "description" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "The display name of the subset rule",
  args: { name: "display-name" },
};
const optPeerTablesAction: Fig.Option = {
  name: "--peer-tables-action",
  description: "Strategy to be applied while processing peer tables",
  args: { suggestions: ["MINIMUM_ROWS", "SUBSET", "MAXIMUM_ROWS"] },
};
const optRelatedTablesPropagation: Fig.Option = {
  name: "--related-tables-propagation",
  description:
    "Strategy to be applied while propagating subsetting rule to related tables",
  args: {
    suggestions: [
      "ANCESTORS_AND_DESCENDANTS",
      "ANCESTORS",
      "DESCENDANTS",
      "NONE",
    ],
  },
};
const optRuleCombinationMode: Fig.Option = {
  name: "--rule-combination-mode",
  description: "Specifies how this rule combines with other rules",
  args: { suggestions: ["UNION", "SERIAL"] },
};
const optAuditProfileId: Fig.Option = {
  name: "--audit-profile-id",
  description: "The OCID of the audit",
  args: { name: "audit-profile-id" },
  isRequired: true,
};
const optCryptoAssessmentId: Fig.Option = {
  name: "--crypto-assessment-id",
  description: "The OCID of the crypto assessment",
  args: { name: "crypto-assessment-id" },
  isRequired: true,
};
const optSqlCollectionId: Fig.Option = {
  name: "--sql-collection-id",
  description: "The OCID of the SQL collection resource",
  args: { name: "sql-collection-id" },
  isRequired: true,
};
const optSubsettingRuleKey: Fig.Option = {
  name: "--subsetting-rule-key",
  description: "The unique key that identifies the subsetting rule",
  args: { name: "subsetting-rule-key" },
  isRequired: true,
};
const optAlertPolicyId: Fig.Option = {
  name: "--alert-policy-id",
  description: "The OCID of the alert policy",
  args: { name: "alert-policy-id" },
  isRequired: true,
};
const optColumnName: Fig.Option = {
  name: "--column-name",
  description: "A filter to return only a specific column based on column name",
  args: { name: "column-name" },
  isRepeatable: true,
};
const optDiscoveryJobId: Fig.Option = {
  name: "--discovery-job-id",
  description: "The OCID of the discovery job",
  args: { name: "discovery-job-id" },
  isRequired: true,
};
const optItems: Fig.Option = {
  name: "--items",
  description: "An array of patch instructions",
  args: { name: "json" },
};
const optReportDefinitionId: Fig.Option = {
  name: "--report-definition-id",
  description: "Unique report definition identifier",
  args: { name: "report-definition-id" },
  isRequired: true,
};
const optSdmMaskingPolicyDifferenceId: Fig.Option = {
  name: "--sdm-masking-policy-difference-id",
  description: "The OCID of the SDM masking policy difference",
  args: { name: "sdm-masking-policy-difference-id" },
  isRequired: true,
};
const optSecurityPolicyDeploymentId: Fig.Option = {
  name: "--security-policy-deployment-id",
  description: "The OCID of the security policy deployment resource",
  args: { name: "security-policy-deployment-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optIsDropTempTablesEnabled: Fig.Option = {
  name: "--is-drop-temp-tables-enabled",
  description:
    "Indicates if the temporary tables created during a masking operation should be dropped after masking",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsRedoLoggingEnabled: Fig.Option = {
  name: "--is-redo-logging-enabled",
  description:
    "Indicates if redo logging is enabled during a masking operation",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsRedoLoggingEnabled2: Fig.Option = {
  name: "--is-redo-logging-enabled",
  description:
    "Indicates if redo logging is enabled during a subsetting operation",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optParallelDegree: Fig.Option = {
  name: "--parallel-degree",
  description:
    "Specifies options to enable parallel execution when running data masking",
  args: { name: "parallel-degree" },
};
const optParallelDegree2: Fig.Option = {
  name: "--parallel-degree",
  description:
    "Specifies options to enable parallel execution when running data subsetting",
  args: { name: "parallel-degree" },
};
const optRecompile: Fig.Option = {
  name: "--recompile",
  description: "Specifies how to recompile invalid objects post data masking",
  args: { name: "recompile" },
};
const optRecompile2: Fig.Option = {
  name: "--recompile",
  description:
    "Specifies how to recompile invalid objects post data subsetting",
  args: { name: "recompile" },
};
const optSensitiveDataModelId2: Fig.Option = {
  name: "--sensitive-data-model-id",
  description:
    "A filter to return only the resources that match the specified sensitive data model OCID",
  args: { name: "sensitive-data-model-id" },
};
const optSensitiveTypeId: Fig.Option = {
  name: "--sensitive-type-id",
  description:
    "A filter to return only items related to a specific sensitive type OCID",
  args: { name: "sensitive-type-id" },
};
const optTargetIds: Fig.Option = {
  name: "--target-ids",
  description:
    "A filter to return only resources associated with any of the specified target OCIDs",
  args: { name: "target-ids" },
  isRepeatable: true,
};
const optAssessmentId: Fig.Option = {
  name: "--assessment-id",
  description:
    "A filter to return only resources associated with the specified crypto assessment OCID",
  args: { name: "assessment-id" },
};
const optAssessmentType: Fig.Option = {
  name: "--assessment-type",
  description:
    "A filter to return targets from assessments of the specified type",
  args: { suggestions: ["LATEST", "SAVED"] },
};
const optAuditTrailId: Fig.Option = {
  name: "--audit-trail-id",
  description: "The OCID of the audit trail",
  args: { name: "audit-trail-id" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "The description of the masking policy",
  args: { name: "description" },
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "The description of the sensitive type",
  args: { name: "description" },
};
const optDescription4: Fig.Option = {
  name: "--description",
  description: "The description of the subsetting policy",
  args: { name: "description" },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "The display name of the masking policy",
  args: { name: "display-name" },
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "The display name of the sensitive type",
  args: { name: "display-name" },
};
const optDisplayName5: Fig.Option = {
  name: "--display-name",
  description: "The display name of the subsetting policy",
  args: { name: "display-name" },
};
const optMaskingPolicyId2: Fig.Option = {
  name: "--masking-policy-id",
  description:
    "A filter to return only the resources that match the specified masking policy OCID",
  args: { name: "masking-policy-id" },
};
const optMaskingPolicyId3: Fig.Option = {
  name: "--masking-policy-id",
  description:
    "The OCID of the masking policy to associate with this subsetting policy",
  args: { name: "masking-policy-id" },
};
const optOnPremConnectorId: Fig.Option = {
  name: "--on-prem-connector-id",
  description: "The OCID of the on-premises connector",
  args: { name: "on-prem-connector-id" },
  isRequired: true,
};
const optParentCategoryId: Fig.Option = {
  name: "--parent-category-id",
  description: "The OCID of the parent sensitive category",
  args: { name: "parent-category-id" },
};
const optPostMaskingScript: Fig.Option = {
  name: "--post-masking-script",
  description:
    "A post-masking script, which can contain SQL and PL/SQL statements",
  args: { name: "post-masking-script" },
};
const optPostSubsettingScript: Fig.Option = {
  name: "--post-subsetting-script",
  description:
    "A post-subsetting script, which can contain SQL and PL/SQL statements",
  args: { name: "post-subsetting-script" },
};
const optPreMaskingScript: Fig.Option = {
  name: "--pre-masking-script",
  description:
    "A pre-masking script, which can contain SQL and PL/SQL statements",
  args: { name: "pre-masking-script" },
};
const optPreSubsettingScript: Fig.Option = {
  name: "--pre-subsetting-script",
  description:
    "A pre-subsetting script, which can contain SQL and PL/SQL statements",
  args: { name: "pre-subsetting-script" },
};
const optSecurityPolicyId: Fig.Option = {
  name: "--security-policy-id",
  description:
    "An optional filter to return only resources that match the specified OCID of the security policy resource",
  args: { name: "security-policy-id" },
};
const optSecurityPolicyReportId: Fig.Option = {
  name: "--security-policy-report-id",
  description: "The OCID of the security policy report resource",
  args: { name: "security-policy-report-id" },
  isRequired: true,
};
const optSensitiveTypeGroupId: Fig.Option = {
  name: "--sensitive-type-group-id",
  description: "The OCID of the sensitive type group",
  args: { name: "sensitive-type-group-id" },
  isRequired: true,
};
const optSensitiveTypeId2: Fig.Option = {
  name: "--sensitive-type-id",
  description: "The OCID of the sensitive type",
  args: { name: "sensitive-type-id" },
  isRequired: true,
};
const optShortName: Fig.Option = {
  name: "--short-name",
  description: "The short name of the sensitive type",
  args: { name: "short-name" },
};
const optTlsConfig: Fig.Option = {
  name: "--tls-config",
  args: { name: "json" },
};
const optUnrelatedTablesAction: Fig.Option = {
  name: "--unrelated-tables-action",
  description:
    "Strategy to be applied for tables which are not impacted by any of the subsetting rules",
  args: { name: "unrelated-tables-action" },
};
const optAttributeSetId: Fig.Option = {
  name: "--attribute-set-id",
  description: "OCID of an attribute set",
  args: { name: "attribute-set-id" },
  isRequired: true,
};
const optAuditPolicyId: Fig.Option = {
  name: "--audit-policy-id",
  description: "Unique audit policy identifier",
  args: { name: "audit-policy-id" },
  isRequired: true,
};
const optDescription5: Fig.Option = {
  name: "--description",
  description: "The description of the security policy",
  args: { name: "description" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only the resources that match the specified lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optLifecycleState2: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only the resources that match the specified lifecycle states",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "NEEDS_ATTENTION",
      "FAILED",
    ],
  },
};
const optObjectType: Fig.Option = {
  name: "--object-type",
  description:
    "A filter to return only items related to a specific object type",
  args: { suggestions: ["ALL", "TABLE", "EDITIONING_VIEW"] },
  isRepeatable: true,
};
const optRegistrationPolicyId: Fig.Option = {
  name: "--registration-policy-id",
  description:
    "The OCID of the registration policy to be used for identification",
  args: { name: "registration-policy-id" },
  isRequired: true,
};
const optReportFormat: Fig.Option = {
  name: "--report-format",
  description: "Format of the report",
  args: { suggestions: ["PDF", "XLS"] },
  isRequired: true,
};
const optSensitiveTypesExportId: Fig.Option = {
  name: "--sensitive-types-export-id",
  description: "The OCID of the sensitive types export",
  args: { name: "sensitive-types-export-id" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["displayName", "timeCreated"] },
};
const optTargetAlertPolicyAssociationId: Fig.Option = {
  name: "--target-alert-policy-association-id",
  description: "The OCID of the target-alert policy association",
  args: { name: "target-alert-policy-association-id" },
  isRequired: true,
};
const optTargetDatabaseGroupId2: Fig.Option = {
  name: "--target-database-group-id",
  description: "The OCID of the specified target database group",
  args: { name: "target-database-group-id" },
  isRequired: true,
};
const optTargetId2: Fig.Option = {
  name: "--target-id",
  description:
    "A filter to return only inventory rows associated with the specified target OCID",
  args: { name: "target-id" },
};
const optAuditArchiveRetrievalId: Fig.Option = {
  name: "--audit-archive-retrieval-id",
  description: "OCID of the archive retrieval",
  args: { name: "audit-archive-retrieval-id" },
  isRequired: true,
};
const optConnectionOption: Fig.Option = {
  name: "--connection-option",
  args: { name: "json" },
};
const optDatabaseSecurityConfigId: Fig.Option = {
  name: "--database-security-config-id",
  description: "The OCID of the database security configuration resource",
  args: { name: "database-security-config-id" },
  isRequired: true,
};
const optDescription6: Fig.Option = {
  name: "--description",
  description: "The description of the peer target database in Data Safe",
  args: { name: "description" },
};
const optDisplayName6: Fig.Option = {
  name: "--display-name",
  description: "The display name of the peer target database in Data Safe",
  args: { name: "display-name" },
};
const optIsAssessmentScheduled: Fig.Option = {
  name: "--is-assessment-scheduled",
  description: "Indicates whether the assessment is scheduled to run",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLibraryMaskingFormatId: Fig.Option = {
  name: "--library-masking-format-id",
  description: "The OCID of the library masking format",
  args: { name: "library-masking-format-id" },
  isRequired: true,
};
const optMaskingPolicyHealthReportId: Fig.Option = {
  name: "--masking-policy-health-report-id",
  description: "The OCID of the masking health report",
  args: { name: "masking-policy-health-report-id" },
  isRequired: true,
};
const optMaskingReportId: Fig.Option = {
  name: "--masking-report-id",
  description: "The OCID of the masking report",
  args: { name: "masking-report-id" },
  isRequired: true,
};
const optPeerTargetDatabaseId: Fig.Option = {
  name: "--peer-target-database-id",
  description: "The unique id of the peer target database",
  args: { name: "integer" },
  isRequired: true,
};
const optPrivateEndpointId: Fig.Option = {
  name: "--private-endpoint-id",
  description: "Unique data safe private endpoint identifier",
  args: { name: "private-endpoint-id" },
  isRequired: true,
};
const optQueryTimeZone: Fig.Option = {
  name: "--query-time-zone",
  description: "Default time zone is UTC if no time zone provided",
  args: { name: "query-time-zone" },
};
const optReportId: Fig.Option = {
  name: "--report-id",
  description: "Unique report identifier",
  args: { name: "report-id" },
  isRequired: true,
};
const optScope: Fig.Option = {
  name: "--scope",
  args: { name: "json" },
  isRequired: true,
};
const optScope2: Fig.Option = { name: "--scope", args: { name: "json" } };
const optSecurityPolicyConfigId: Fig.Option = {
  name: "--security-policy-config-id",
  description: "The OCID of the security policy configuration resource",
  args: { name: "security-policy-config-id" },
  isRequired: true,
};
const optSecurityPolicyId2: Fig.Option = {
  name: "--security-policy-id",
  description: "The OCID of the security policy resource",
  args: { name: "security-policy-id" },
  isRequired: true,
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optSqlFirewallPolicyId: Fig.Option = {
  name: "--sql-firewall-policy-id",
  description: "The OCID of the SQL Firewall policy resource",
  args: { name: "sql-firewall-policy-id" },
  isRequired: true,
};
const optSubsettingPolicyHealthReportId: Fig.Option = {
  name: "--subsetting-policy-health-report-id",
  description: "The OCID of the subsetting health report",
  args: { name: "subsetting-policy-health-report-id" },
  isRequired: true,
};
const optSubsettingPolicyId2: Fig.Option = {
  name: "--subsetting-policy-id",
  description:
    "A filter to return only the resources that match the specified subsetting policy OCID",
  args: { name: "subsetting-policy-id" },
};
const optSubsettingReportId: Fig.Option = {
  name: "--subsetting-report-id",
  description: "The OCID of the subsetting report",
  args: { name: "subsetting-report-id" },
  isRequired: true,
};
const optTimeEnded: Fig.Option = {
  name: "--time-ended",
  description:
    "An optional filter to return audit events whose creation time in the database is less than and equal to",
  args: { name: "datetime" },
};
const optTimeStarted: Fig.Option = {
  name: "--time-started",
  description:
    "An optional filter to return audit events whose creation time in the database is greater than and equal",
  args: { name: "datetime" },
};
const optUnifiedAuditPolicyDefinitionId: Fig.Option = {
  name: "--unified-audit-policy-definition-id",
  description: "The OCID of the unified audit policy definition resource",
  args: { name: "unified-audit-policy-definition-id" },
  isRequired: true,
};
const optUnifiedAuditPolicyId: Fig.Option = {
  name: "--unified-audit-policy-id",
  description: "The OCID of the Unified Audit policy resource",
  args: { name: "unified-audit-policy-id" },
  isRequired: true,
};
const optAlertId: Fig.Option = {
  name: "--alert-id",
  description: "The OCID of alert",
  args: { name: "alert-id" },
  isRequired: true,
};
const optCategory: Fig.Option = {
  name: "--category",
  description: "The category of the finding",
  args: { name: "category" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "A filter to return only resources that match the specified compartment OCID",
  args: { name: "compartment-id" },
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment in which to create the unified audit policy",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment that contains the alerts",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId6: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment where the masking policy should be created",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId7: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment where the sensitive type should be created",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId8: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment where the subsetting policy should be created",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optContainsReferences: Fig.Option = {
  name: "--contains-references",
  description:
    "An optional filter to return only findings that match the specified references",
  args: { suggestions: ["STIG", "CIS", "GDPR"] },
  isRepeatable: true,
};
const optContainsSeverity: Fig.Option = {
  name: "--contains-severity",
  description:
    "A filter to return only findings that match the specified risk level(s)",
  args: {
    suggestions: [
      "HIGH",
      "MEDIUM",
      "LOW",
      "EVALUATE",
      "ADVISORY",
      "PASS",
      "DEFERRED",
    ],
  },
  isRepeatable: true,
};
const optCredentials: Fig.Option = {
  name: "--credentials",
  args: { name: "json" },
};
const optDescription7: Fig.Option = {
  name: "--description",
  description: "The description of the user assessment",
  args: { name: "description" },
};
const optDisplayName7: Fig.Option = {
  name: "--display-name",
  description: "The display name of the security assessment",
  args: { name: "display-name" },
};
const optDisplayName8: Fig.Option = {
  name: "--display-name",
  description: "The display name of the user assessment",
  args: { name: "display-name" },
};
const optFindingKey: Fig.Option = {
  name: "--finding-key",
  description: "The unique key that identifies the finding",
  args: { name: "finding-key" },
};
const optIsQuantumReadinessCheck: Fig.Option = {
  name: "--is-quantum-readiness-check",
  description:
    "A filter to return only findings that are or are not part of quantum-readiness checks",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optMaskingColumnKey: Fig.Option = {
  name: "--masking-column-key",
  description: "The unique key that identifies the masking column",
  args: { name: "masking-column-key" },
  isRequired: true,
};
const optRuleKey: Fig.Option = {
  name: "--rule-key",
  description: "The key of the alert policy rule",
  args: { name: "rule-key" },
  isRequired: true,
};
const optSchemaNameContains: Fig.Option = {
  name: "--schema-name-contains",
  description:
    "A filter to return only items if schema name contains a specific string",
  args: { name: "schema-name-contains" },
};
const optSensitiveColumnKey: Fig.Option = {
  name: "--sensitive-column-key",
  description: "The unique key that identifies the sensitive column",
  args: { name: "sensitive-column-key" },
  isRequired: true,
};
const optSensitiveTypeGroupId2: Fig.Option = {
  name: "--sensitive-type-group-id",
  description:
    "An optional filter to return only resources that match the specified OCID of the sensitive type group",
  args: { name: "sensitive-type-group-id" },
};
const optSeverity: Fig.Option = {
  name: "--severity",
  description: "A filter to return only findings of a particular risk level",
  args: {
    suggestions: [
      "HIGH",
      "MEDIUM",
      "LOW",
      "EVALUATE",
      "ADVISORY",
      "PASS",
      "DEFERRED",
    ],
  },
};
const optSortBy4: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["schemaName"] },
};
const optSubsetRuleEntry: Fig.Option = {
  name: "--subset-rule-entry",
  args: { name: "json" },
  isRequired: true,
};
const optSubsetRuleEntry2: Fig.Option = {
  name: "--subset-rule-entry",
  args: { name: "json" },
};
const optTablesForDiscovery: Fig.Option = {
  name: "--tables-for-discovery",
  description:
    "The data discovery jobs will scan the tables specified here, including both schemas and tables",
  args: { name: "json" },
};
const optTargetCredentials: Fig.Option = {
  name: "--target-credentials",
  args: { name: "json" },
  isRequired: true,
};
const optTemplateAssessmentId: Fig.Option = {
  name: "--template-assessment-id",
  description: "The OCID of the security assessment of type TEMPLATE",
  args: { name: "template-assessment-id" },
};
const optTimePasswordExpiryLessThan: Fig.Option = {
  name: "--time-password-expiry-less-than",
  description:
    "A filter to return users whose password expiry date in the database is less than the date and time specified",
  args: { name: "datetime" },
};
const optTimeUpdatedGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-updated-greater-than-or-equal-to",
  description: "Search for resources that were updated after a specific date",
  args: { name: "datetime" },
};
const optTimeUpdatedLessThan: Fig.Option = {
  name: "--time-updated-less-than",
  description: "Search for resources that were updated before a specific date",
  args: { name: "datetime" },
};
const optUserCategory: Fig.Option = {
  name: "--user-category",
  description:
    "A filter to return only items that match the specified user category",
  args: { name: "user-category" },
};
const completionSpec: Fig.Spec = {
  name: "data-safe",
  description: "Data Safe",
  subcommands: [
    {
      name: "masked-column-summary",
      description: "Summary of a masked column",
      subcommands: [
        {
          name: "list-masked-columns",
          description:
            "Gets a list of masked columns present in the specified masking report and based on the specified query",
          options: [
            optMaskingReportId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "schemaName",
                  "objectName",
                  "sensitiveTypeId",
                  "maskingColumnGroupId",
                ],
              },
            },
            optSchemaName,
            optObjectName,
            optColumnName,
            optObjectType,
            {
              name: "--masking-column-group",
              description:
                "A filter to return only the resources that match the specified masking column group",
              args: { name: "masking-column-group" },
              isRepeatable: true,
            },
            optSensitiveTypeId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sdm-masking-policy-difference",
      description:
        "A resource that tracks the differences between sensitive columns in the sensitive data model and masking",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified SDM masking policy difference into a different compartment",
          options: [
            optSdmMaskingPolicyDifferenceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the SDM masking policy difference should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates SDM masking policy difference for the specified masking policy",
          options: [
            optMaskingPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the SDM masking policy difference resource should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--difference-type",
              description: "The type of the SDM masking policy difference",
              args: { name: "difference-type" },
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the SDM masking policy difference",
              args: { name: "display-name" },
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
          description: "Deletes the specified SDM Masking policy difference",
          options: [
            optSdmMaskingPolicyDifferenceId,
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
            "Gets the details of the specified SDM Masking policy difference",
          options: [optSdmMaskingPolicyDifferenceId, optFromJson],
        },
        {
          name: "list-difference-columns",
          description:
            "Gets a list of columns of a SDM masking policy difference resource based on the specified query parameters",
          options: [
            optSdmMaskingPolicyDifferenceId,
            {
              name: "--difference-type",
              description:
                "A filter to return only the SDM masking policy difference columns that match the specified difference type",
              args: { suggestions: ["ALL", "NEW", "MODIFIED", "DELETED"] },
            },
            {
              name: "--planned-action",
              description:
                "A filter to return only the SDM masking policy difference columns that match the specified planned action",
              args: { suggestions: ["SYNC", "NO_SYNC"] },
            },
            {
              name: "--sync-status",
              description:
                "A filter to return the SDM masking policy difference columns based on the value of their syncStatus attribute",
              args: { suggestions: ["SYNCED", "NOT_SYNCED"] },
            },
            optSchemaName,
            optObjectName,
            optColumnName,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "differenceType",
                  "schemaName",
                  "objectName",
                  "columnName",
                  "plannedAction",
                ],
              },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of SDM and masking policy difference resources based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            {
              name: "--difference-access-level",
              description: "Valid value is ACCESSIBLE",
              args: { suggestions: ["ACCESSIBLE"] },
            },
            optDisplayName,
            optSensitiveDataModelId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the resources that match the specified lifecycle states",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optMaskingPolicyId2,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreationStarted", "displayName"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch-sdm-masking-policy-difference-columns",
          description:
            "Patches one or more SDM masking policy difference columns",
          options: [
            optSdmMaskingPolicyDifferenceId,
            optItems,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified sdm masking policy difference",
          options: [
            optSdmMaskingPolicyDifferenceId,
            {
              name: "--display-name",
              description:
                "The display name of the sdm masking policy difference",
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
      name: "sensitive-type-group-summary",
      description: "Summary of the sensitive type group",
      subcommands: [
        {
          name: "list-sensitive-type-groups",
          description:
            "Gets a list of sensitive type groups based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState,
            optSensitiveTypeGroupId2,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-policy-config-collection",
      description: "Collection of security policy configuration summaries",
      subcommands: [
        {
          name: "list-security-policy-configs",
          description:
            "Retrieves a list of all security policy configurations in Data Safe",
          options: [
            optCompartmentId,
            {
              name: "--security-policy-config-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the security policy",
              args: { name: "security-policy-config-id" },
            },
            optSecurityPolicyId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "The current state of the security policy configuration resource",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subsetting-report",
      description:
        "Summary information for a report generated from a data subsetting operation",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified subsetting report",
          options: [
            optSubsettingReportId,
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
          description: "Gets the details of the specified subsetting report",
          options: [optSubsettingReportId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of subsetting reports based on the specified query parameters",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSubsettingPolicyId2,
            optTargetId,
            optTargetDatabaseGroupId,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeSubsettingFinished"] },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sensitive-data-model-sensitive-type-collection",
      description:
        "A collection of sensitive types summary objects present in a sensitive data model",
      subcommands: [
        {
          name: "list-sensitive-data-model-sensitive-types",
          description:
            "Gets a list of sensitive type Ids present in the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            optSensitiveTypeId,
            {
              name: "--sort-by",
              description: "- The field to sort by",
              args: { suggestions: ["count"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "referential-relation",
      description:
        "A referential relation is a resource corresponding to database columns",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new referential relation in the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            {
              name: "--relation-type",
              description:
                "The type of referential relationship the sensitive column has with its parent",
              args: { suggestions: ["APP_DEFINED", "DB_DEFINED"] },
              isRequired: true,
            },
            { name: "--parent", args: { name: "json" }, isRequired: true },
            { name: "--child", args: { name: "json" }, isRequired: true },
            {
              name: "--is-sensitive",
              description: "Add to sensitive data model if passed true",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified referential relation",
          options: [
            optSensitiveDataModelId,
            {
              name: "--referential-relation-key",
              description:
                "The unique key that identifies the referential relation",
              args: { name: "referential-relation-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified referential relation",
          options: [
            optSensitiveDataModelId,
            {
              name: "--referential-relation-key",
              description:
                "The unique key that identifies the referential relation",
              args: { name: "referential-relation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of referential relations present in the specified sensitive data model based on the specified",
          options: [
            optSensitiveDataModelId,
            optSchemaName,
            optObjectName,
            optColumnName,
            {
              name: "--is-sensitive",
              description:
                "Returns referential relations containing sensitive columns when true",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--relation-type",
              description:
                "A filter to return sensitive columns based on their relationship with their parent columns",
              args: { suggestions: ["NONE", "APP_DEFINED", "DB_DEFINED"] },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["key", "relationType", "schemaName", "tableName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "difference-column",
      description: "A SDM masking policy difference column",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details of the specified SDM Masking policy difference column",
          options: [
            optSdmMaskingPolicyDifferenceId,
            {
              name: "--difference-column-key",
              description:
                "The unique key that identifies the difference column",
              args: { name: "difference-column-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-policy-report",
      description: "The resource represents the security policy report",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a security policy report by the specified OCID of the security policy report resource",
          options: [optSecurityPolicyReportId, optFromJson],
        },
      ],
    },
    {
      name: "sql-firewall-violation-summary",
      description:
        "The resource represents the SQL violations collected from the target database by Oracle Data Safe",
      subcommands: [
        {
          name: "list-sql-firewall-violation-analytics",
          description:
            "Returns the aggregation details of the SQL Firewall violations",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optTimeStarted,
            optTimeEnded,
            optQueryTimeZone,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "If this query parameter is specified, the result is sorted by this query parameter value",
              args: {
                suggestions: [
                  "dbUserName",
                  "targetId",
                  "targetName",
                  "operationTime",
                  "timeCollected",
                  "clientOsUserName",
                  "operation",
                  "currentDbUserName",
                  "sqlLevel",
                  "clientIp",
                  "clientProgram",
                  "violationCause",
                  "violationAction",
                  "violationCount",
                ],
              },
            },
            optScimQuery,
            {
              name: "--summary-field",
              description:
                "Specifies a subset of summarized fields to be returned in the response",
              args: {
                suggestions: [
                  "dbUserName",
                  "targetName",
                  "clientOsUserName",
                  "operation",
                  "sqlText",
                  "currentDbUserName",
                  "sqlLevel",
                  "clientIp",
                  "clientProgram",
                  "violationCause",
                  "violationAction",
                  "selects",
                  "creates",
                  "alters",
                  "drops",
                  "grants",
                  "revokes",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--group-by",
              description:
                "A groupBy can only be used in combination with summaryField parameter",
              args: {
                suggestions: [
                  "dbUserName",
                  "targetName",
                  "operationTime",
                  "timeCollected",
                  "clientOsUserName",
                  "operation",
                  "sqlText",
                  "currentDbUserName",
                  "sqlLevel",
                  "clientIp",
                  "clientProgram",
                  "violationCause",
                  "violationAction",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-sql-firewall-violations",
          description:
            "Gets a list of all the SQL Firewall violations captured by the firewall",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optLimit,
            optPage,
            optAccessLevel,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "If this query parameter is specified, the result is sorted by this query parameter value",
              args: {
                suggestions: [
                  "dbUserName",
                  "targetId",
                  "targetName",
                  "operationTime",
                  "timeCollected",
                  "clientOsUserName",
                  "operation",
                  "currentDbUserName",
                  "sqlLevel",
                  "clientIp",
                  "clientProgram",
                  "violationCause",
                  "violationAction",
                ],
              },
            },
            optScimQuery,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-policy-config",
      description:
        "The Data Safe resource represents the common configurations corresponding to the associated security policy",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified security policy configuration and its dependent resources into a different compartment",
          options: [
            optSecurityPolicyConfigId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the security policy configuration",
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
          description: "Creates a new security policy configuration resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the security policy configuration",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--security-policy-id",
              description:
                "The OCID of the security policy corresponding to the security policy configuration",
              args: { name: "security-policy-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The display name of the security policy configuration",
              args: { name: "display-name" },
            },
            optDescription5,
            { name: "--firewall-config", args: { name: "json" } },
            { name: "--unified-audit-policy-config", args: { name: "json" } },
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
          description: "Deletes the specified Security policy configuration",
          options: [
            optSecurityPolicyConfigId,
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
          description: "Gets a security policy configuration by identifier",
          options: [optSecurityPolicyConfigId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the security policy configuration",
          options: [
            optSecurityPolicyConfigId,
            {
              name: "--display-name",
              description:
                "The display name of the security policy configuration",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "The description of the security policy configuration",
              args: { name: "description" },
            },
            { name: "--firewall-config", args: { name: "json" } },
            { name: "--unified-audit-policy-config", args: { name: "json" } },
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
      name: "work-request-error",
      description: "An error related to a work request",
      subcommands: [
        {
          name: "list",
          description: "Gets a list of errors for the specified work request",
          options: [
            optWorkRequestId,
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
      name: "target-database-group",
      description:
        "The details of the target database group including matching criteria",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the target database group to the specified compartment",
          options: [
            optTargetDatabaseGroupId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the target database group should be moved",
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
          description: "Creates a new target database group",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the target database group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the target database group",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--matching-criteria",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "Description of the target database group (optional)",
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
          description: "Deletes the specified target database group",
          options: [
            optTargetDatabaseGroupId2,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-group-members",
          description:
            "Retrieves the members of the target database group with the specified OCID",
          options: [
            optTargetDatabaseGroupId2,
            {
              name: "--target-database-id",
              description:
                "A filter to return the target database only if it is a member of the target database group",
              args: { name: "target-database-id" },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns the details of the specified target database group",
          options: [optTargetDatabaseGroupId2, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified target database group",
          options: [
            optTargetDatabaseGroupId2,
            {
              name: "--display-name",
              description: "The name of the target database group",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the target database group",
              args: { name: "description" },
            },
            { name: "--matching-criteria", args: { name: "json" } },
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
      name: "alert-policy-rule",
      description: "A rule associated with a alert policy",
      subcommands: [
        {
          name: "create",
          description: "Creates a new rule for the alert policy",
          options: [
            {
              name: "--expression",
              description:
                "The conditional expression of the alert policy rule which evaluates to boolean value",
              args: { name: "expression" },
              isRequired: true,
            },
            optAlertPolicyId,
            {
              name: "--description",
              description: "Describes the alert policy rule",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the alert policy rule",
              args: { name: "display-name" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified user-defined alert policy rule",
          options: [
            optAlertPolicyId,
            optRuleKey,
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
          description: "Gets the details of a policy rule by its key",
          options: [optAlertPolicyId, optRuleKey, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified alert policy rule",
          options: [
            optAlertPolicyId,
            optRuleKey,
            {
              name: "--description",
              description: "Describes the alert policy rule",
              args: { name: "description" },
            },
            {
              name: "--expression",
              description:
                "The conditional expression of the alert policy rule which evaluates to boolean value",
              args: { name: "expression" },
            },
            {
              name: "--display-name",
              description: "The display name of the alert policy rule",
              args: { name: "display-name" },
            },
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
      name: "database-view-access-entry-collection",
      description: "A collection of database view access summary objects",
      subcommands: [
        {
          name: "list-database-view-access-entries",
          description:
            "Retrieves a list of all database view access entries in Data Safe",
          options: [
            optSecurityPolicyReportId,
            optLimit,
            optPage,
            optScimQuery,
            optTargetId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "key",
                  "grantee",
                  "accessType",
                  "tableSchema",
                  "tableName",
                  "viewSchema",
                  "viewName",
                  "privilegeType",
                  "privilege",
                  "privilegeGrantable",
                  "grantFromRole",
                  "accessThroughObject",
                  "columnName",
                  "grantor",
                  "isAccessConstrainedByDatabaseVault",
                  "isAccessConstrainedByVirtualPrivateDatabase",
                  "isAccessConstrainedByRedaction",
                  "isAccessConstrainedByRealApplicationSecurity",
                  "isAccessConstrainedBySqlFirewall",
                ],
              },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-policy",
      description:
        "The resource represents as a container for all the security policies in Data Safe",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified security policy and its dependent resources into a different compartment",
          options: [
            optSecurityPolicyId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the security policy",
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
          description: "Creates a Data Safe security policy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the security policy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the security policy",
              args: { name: "display-name" },
            },
            optDescription5,
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
          description: "Deletes the specified security policy",
          options: [
            optSecurityPolicyId2,
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
            "Gets a security policy by the specified OCID of the security policy resource",
          options: [optSecurityPolicyId2, optFromJson],
        },
        {
          name: "update",
          description: "Updates the security policy",
          options: [
            optSecurityPolicyId2,
            {
              name: "--display-name",
              description: "The display name of the security policy",
              args: { name: "display-name" },
            },
            optDescription5,
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
          name: "list",
          description: "Retrieves a list of all security policies in Data Safe",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the security policy",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            {
              name: "--security-policy-type",
              description: "The type of the security policy",
              args: { suggestions: ["DATASAFE_MANAGED", "SEEDED_POLICY"] },
            },
            optSecurityPolicyId,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "registration-policy",
      description: "A registration policy",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the registration policy to the specified compartment",
          options: [
            optRegistrationPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the registration policy should be moved",
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
          description: "Creates a new OptIn/Registration Policy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the registration policy will be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description:
                "The OCID of the resource used in the registration policy",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the registration policy",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description of the registration policy",
              args: { name: "description" },
            },
            {
              name: "--can-override-features",
              description:
                "Indicates whether features will be overridden for all targets",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optConnectionOption,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--opc-dry-run",
              description:
                'Indicates that the request is a dry run, if set to "true"',
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--x-cluster-id",
              description:
                "Identifier of the cluster of the CDB associated to the registration policy being created",
              args: { name: "x-cluster-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--features",
              description:
                "The Data Safe features granted to the databases registering under the registration policy",
              args: {
                suggestions: [
                  "ASSESSMENT",
                  "AUDIT_COLLECTION",
                  "AUDIT_SETTING",
                  "DATA_DISCOVERY",
                  "MASKING",
                  "SQL_FIREWALL",
                  "ALL",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified registration policy",
          options: [
            optRegistrationPolicyId,
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
            "Returns the details of the specified Registration Policy",
          options: [optRegistrationPolicyId, optFromJson],
        },
        {
          name: "list-registration-policy-target-databases",
          description:
            "Retrieves the OCIDs of target databases registered via the specified registration policy",
          options: [
            optRegistrationPolicyId,
            optCompartmentId,
            {
              name: "--target-database-id",
              description:
                "A filter to return the target database only if it is registered via the registration policy",
              args: { name: "target-database-id" },
            },
            {
              name: "--membership-status",
              description:
                "Filters registered targets associated with this registration policy by membership status. - OPTIN",
              args: { suggestions: ["OPTIN", "OPTOUT"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified registration policy",
          options: [
            optRegistrationPolicyId,
            {
              name: "--display-name",
              description: "The display name of the registration policy",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description of the registration policy",
              args: { name: "description" },
            },
            {
              name: "--can-override-features",
              description:
                "Indicates whether features will be overridden for all targets",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optConnectionOption,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--features",
              description:
                "The Data Safe features granted to the databases registering under the registration policy",
              args: {
                suggestions: [
                  "ASSESSMENT",
                  "AUDIT_COLLECTION",
                  "AUDIT_SETTING",
                  "DATA_DISCOVERY",
                  "MASKING",
                  "SQL_FIREWALL",
                  "ALL",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "profile",
      description:
        "The comprehensive information about the user profiles available on a given target",
      subcommands: [
        {
          name: "list-profile-analytics",
          description:
            "Gets a list of aggregated user profile details in the specified compartment",
          options: [
            optUserAssessmentId,
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTargetId,
            optLimit,
            optPage,
            {
              name: "--profile-name",
              description:
                "A filter to return only items that match the specified profile name",
              args: { name: "profile-name" },
            },
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
      name: "subsetting-schema-object-summary",
      description:
        "Summary of a table included in the schema for a subsetting policy",
      subcommands: [
        {
          name: "list-subsetting-schema-objects",
          description:
            "Gets a list of objects/tables present in the specified subsetting policy schemas based on the specified query",
          options: [
            optSubsettingPolicyId,
            optSchemaName,
            optObjectName,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeCreated", "schemaName", "objectName"],
              },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subsetting-policy",
      description:
        "A subsetting policy defines the approach to subset data in a target database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified subsetting policy and its dependent resources into a different compartment",
          options: [
            optSubsettingPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the subsetting policy should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new subsetting policy and associates it with a sensitive data model or a target database",
          options: [
            optCompartmentId8,
            {
              name: "--schema-source",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName5,
            optDescription4,
            optIsRedoLoggingEnabled2,
            optIsRefreshStatsEnabled,
            optParallelDegree2,
            optRecompile2,
            optUnrelatedTablesAction,
            optPreSubsettingScript,
            optPostSubsettingScript,
            optMaskingPolicyId3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-subsetting-policy-create-schema-source-from-sdm-details",
          description:
            "Creates a new subsetting policy and associates it with a sensitive data model or a target database",
          options: [
            optCompartmentId8,
            {
              name: "--schema-source-sensitive-data-model-id",
              description:
                "The OCID of the sensitive data model that's used as the source of subsetting schemas",
              args: { name: "schema-source-sensitive-data-model-id" },
              isRequired: true,
            },
            optDisplayName5,
            optDescription4,
            optIsRedoLoggingEnabled2,
            optIsRefreshStatsEnabled,
            optParallelDegree2,
            optRecompile2,
            optUnrelatedTablesAction,
            optPreSubsettingScript,
            optPostSubsettingScript,
            optMaskingPolicyId3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-subsetting-policy-create-schema-source-from-target-details",
          description:
            "Creates a new subsetting policy and associates it with a sensitive data model or a target database",
          options: [
            optCompartmentId8,
            {
              name: "--schema-source-target-id",
              description:
                "The OCID of the target database that's used as the source of subsetting schemas",
              args: { name: "schema-source-target-id" },
              isRequired: true,
            },
            optDisplayName5,
            optDescription4,
            optIsRedoLoggingEnabled2,
            optIsRefreshStatsEnabled,
            optParallelDegree2,
            optRecompile2,
            optUnrelatedTablesAction,
            optPreSubsettingScript,
            optPostSubsettingScript,
            optMaskingPolicyId3,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--schema-source-schemas-for-subsetting",
              description: "The schemas to be subsetted",
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
          description: "Deletes the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-subsetting-log",
          description:
            "Downloads the subsetting log generated by the last subsetting operation on a target database using",
          options: [
            optSubsettingPolicyId,
            optFile,
            {
              name: "--target-id",
              description:
                "The OCID of the target database for which the subsetting log is to be downloaded",
              args: { name: "target-id" },
            },
            {
              name: "--subsetting-work-request-id",
              description:
                "The OCID of the subsetting work request that resulted in this subsetting log",
              args: { name: "subsetting-work-request-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "download",
          description:
            "Downloads an already-generated file corresponding to the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            optFile,
            {
              name: "--policy-format",
              description: "The format of the subsetting policy file",
              args: { suggestions: ["XML"] },
            },
            optFromJson,
          ],
        },
        {
          name: "download-subsetting-report",
          description: "Downloads an already-generated subsetting report",
          options: [
            optSubsettingPolicyId,
            {
              name: "--report-id",
              description: "The OCID of the subsetting report to be downloaded",
              args: { name: "report-id" },
              isRequired: true,
            },
            optReportFormat,
            optFile,
            optFromJson,
          ],
        },
        {
          name: "estimate-table-sizes",
          description:
            "Estimates table sizes for the specified subsetting policy and target database",
          options: [
            optSubsettingPolicyId,
            optTargetCredentials,
            {
              name: "--target-id",
              description:
                "The OCID of the target database to use for estimating table sizes",
              args: { name: "target-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-subsetting-policy-for-download",
          description:
            "Generates a downloadable file corresponding to the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            {
              name: "--policy-format",
              description: "The format of the subsetting policy file",
              args: { suggestions: ["XML"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-subsetting-report-for-download",
          description: "Generates a downloadable subsetting report",
          options: [
            optSubsettingPolicyId,
            {
              name: "--report-id",
              description:
                "The OCID of the subsetting report for which a downloadable file is to be generated",
              args: { name: "report-id" },
              isRequired: true,
            },
            optReportFormat,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified subsetting policy",
          options: [optSubsettingPolicyId, optFromJson],
        },
        {
          name: "list-subsetting-analytics",
          description:
            "Gets consolidated subsetting analytics data based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            {
              name: "--group-by",
              description:
                "Attribute by which the subsetting analytics data should be grouped",
              args: {
                suggestions: ["targetId", "policyId", "targetIdAndPolicyId"],
              },
            },
            optTargetId,
            optSubsettingPolicyId2,
            optTargetDatabaseGroupId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeLastSubsetted"] },
            },
            optSortOrder,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of subsetting policies based on the specified query parameters",
          options: [
            optCompartmentId,
            optSubsettingPolicyId2,
            optMaskingPolicyId2,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState2,
            optSortOrder,
            optSortBy2,
            optSensitiveDataModelId2,
            optTargetId,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "subset-data",
          description: "Subsets data using the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            optTargetCredentials,
            {
              name: "--target-id",
              description: "The OCID of the target database to be subsetted",
              args: { name: "target-id" },
            },
            {
              name: "--masking",
              description:
                "Indicates whether masking should be triggered after successful subsetting",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--is-rerun",
              description:
                "Indicates if the request is to rerun the previously failed subsetting job",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--re-run-from-step",
              description:
                "Specifies the step from which subsetting needs to be rerun",
              args: {
                suggestions: [
                  "PRE_SUBSETTING_SCRIPT",
                  "POST_SUBSETTING_SCRIPT",
                ],
              },
            },
            {
              name: "--tablespace",
              description:
                "The tablespace that should be used to create the temporary tables for data subsetting",
              args: { name: "tablespace" },
            },
            optIsRedoLoggingEnabled2,
            optIsRefreshStatsEnabled,
            optParallelDegree2,
            optRecompile2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            optDisplayName5,
            optDescription4,
            optIsRedoLoggingEnabled2,
            optIsRefreshStatsEnabled,
            optParallelDegree2,
            optRecompile2,
            optUnrelatedTablesAction,
            optPreSubsettingScript,
            optPostSubsettingScript,
            { name: "--schema-source", args: { name: "json" } },
            optMaskingPolicyId3,
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
          name: "update-subsetting-policy-update-schema-source-from-target-details",
          description:
            "Updates one or more attributes of the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            optDisplayName5,
            optDescription4,
            optIsRedoLoggingEnabled2,
            optIsRefreshStatsEnabled,
            optParallelDegree2,
            optRecompile2,
            optUnrelatedTablesAction,
            optPreSubsettingScript,
            optPostSubsettingScript,
            optMaskingPolicyId3,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--schema-source-target-id",
              description:
                "The OCID of the target database that's used as the source of subsetting schemas",
              args: { name: "schema-source-target-id" },
            },
            {
              name: "--schema-source-schemas-for-subsetting",
              description: "The schemas to be subsetted",
              args: { name: "json" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-subsetting-policy-update-schema-source-from-sdm-details",
          description:
            "Updates one or more attributes of the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            {
              name: "--schema-source-sensitive-data-model-id",
              description:
                "The OCID of the sensitive data model that's used as the source of subsetting schemas",
              args: { name: "schema-source-sensitive-data-model-id" },
              isRequired: true,
            },
            optDisplayName5,
            optDescription4,
            optIsRedoLoggingEnabled2,
            optIsRefreshStatsEnabled,
            optParallelDegree2,
            optRecompile2,
            optUnrelatedTablesAction,
            optPreSubsettingScript,
            optPostSubsettingScript,
            optMaskingPolicyId3,
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
          name: "upload",
          description:
            "Uploads a subsetting policy file (also called template) to update the specified subsetting policy",
          options: [
            {
              name: "--upload-subsetting-policy-details",
              description: "Details to upload a subsetting policy file",
              args: { name: "upload-subsetting-policy-details" },
              isRequired: true,
            },
            optSubsettingPolicyId,
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
      name: "audit-profile",
      description:
        "The resource represents audit profile settings and audit configurations for the database target",
      subcommands: [
        {
          name: "calculate-audit-volume-available",
          description:
            "Calculates the volume of audit events available on the target database to be collected",
          options: [
            optAuditProfileId,
            {
              name: "--audit-collection-start-time",
              description:
                "The date from which the audit trail must start collecting data in UTC, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            {
              name: "--trail-locations",
              description:
                "The trail locations for which the audit data volume has to be calculated",
              args: { name: "json" },
            },
            {
              name: "--database-unique-name",
              description:
                "Unique name of the database associated to the peer target database",
              args: { name: "database-unique-name" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "calculate-audit-volume-collected",
          description:
            "Calculates the volume of audit events collected by data safe",
          options: [
            optAuditProfileId,
            {
              name: "--time-from-month",
              description:
                "The date from which the audit volume collected by data safe has to be calculated",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-to-month",
              description:
                "The date from which the audit volume collected by data safe has to be calculated",
              args: { name: "datetime" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the specified audit profile and its dependent resources into a different compartment",
          options: [
            optAuditProfileId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the audit profile",
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
          name: "change-retention",
          description: "Change the online and offline months",
          options: [
            optAuditProfileId,
            {
              name: "--online-months",
              description:
                "Number of months the audit records will be stored online in the audit repository for immediate reporting",
              args: { name: "integer" },
            },
            {
              name: "--offline-months",
              description:
                "Number of months the audit records will be stored offline in the offline archive",
              args: { name: "integer" },
            },
            {
              name: "--is-override-global-retention-setting",
              description:
                "Indicates whether audit retention settings like online and offline months set at the target level override",
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
          name: "create",
          description: "Create a new audit profile resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the audit profile",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target database or target database group for which the audit profile is created",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--target-type",
              description:
                "The resource type that is represented by the audit profile",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the audit profile",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the audit profile",
              args: { name: "description" },
            },
            {
              name: "--is-paid-usage-enabled",
              description:
                "Indicates if you want to continue collecting audit records beyond the free limit of one million audit records",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--online-months",
              description:
                "Number of months the audit records will be stored online in the audit repository for immediate reporting",
              args: { name: "integer" },
            },
            {
              name: "--offline-months",
              description:
                "Number of months the audit records will be stored offline in the offline archive",
              args: { name: "integer" },
            },
            {
              name: "--is-override-global-paid-usage",
              description:
                "Indicates whether audit paid usage settings specified at the target database level override both the global",
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
          description: "Deletes the specified audit profile",
          options: [
            optAuditProfileId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "discover-audit-trails",
          description:
            "Updates the list of audit trails created under audit profile.The operation can be used to create new audit",
          options: [
            optAuditProfileId,
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
            "Gets the details of audit profile resource and associated audit trails of the audit profile",
          options: [optAuditProfileId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of all audit profiles",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--audit-profile-id",
              description:
                "A optional filter to return only resources that match the specified id",
              args: { name: "audit-profile-id" },
            },
            optTargetId,
            optTargetDatabaseGroupId,
            {
              name: "--target-type",
              description:
                "A optional filter to return only resources that belong to the specified audit profile type",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            optDisplayName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A optional filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "DELETED",
                ],
              },
            },
            {
              name: "--is-override-global-retention-setting",
              description:
                "A optional filter to return only resources that match the specified retention configured value",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-paid-usage-enabled",
              description:
                "Indicates if you want to continue audit record collection beyond the free limit of one million audit records",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--audit-collected-volume-greater-than-or-equal-to",
              description:
                "A filter to return only items that have count of audit records collected greater than or equal to",
              args: { name: "integer" },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-available-audit-volumes",
          description:
            "Retrieves a list of audit trails, and associated audit event volume for each trail up to defined start date",
          options: [
            optAuditProfileId,
            optWorkRequestId,
            {
              name: "--trail-location",
              description: "The audit trail location",
              args: { name: "trail-location" },
            },
            {
              name: "--month-in-consideration-greater-than",
              description:
                "Specifying monthInConsiderationGreaterThan parameter will retrieve all items for which the event month",
              args: { name: "datetime" },
            },
            {
              name: "--month-in-consideration-less-than",
              description:
                "Specifying monthInConsiderationLessThan parameter will retrieve all items for which the event month is less",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "monthInConsideration",
                  "volume",
                  "trailLocation",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-collected-audit-volumes",
          description: "Gets a list of all collected audit volume data points",
          options: [
            optAuditProfileId,
            optWorkRequestId,
            {
              name: "--month-in-consideration-greater-than",
              description:
                "Specifying monthInConsiderationGreaterThan parameter will retrieve all items for which the event month",
              args: { name: "datetime" },
            },
            {
              name: "--month-in-consideration-less-than",
              description:
                "Specifying monthInConsiderationLessThan parameter will retrieve all items for which the event month is less",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "monthInConsideration",
                  "onlineVolume",
                  "archivedVolume",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-target-overrides",
          description:
            "Gets a list of all targets whose audit settings override the target group setting",
          options: [
            optAuditProfileId,
            optLimit,
            optPage,
            optDisplayName,
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
            "Updates one or more attributes of the specified audit profile",
          options: [
            optAuditProfileId,
            {
              name: "--description",
              description: "The description of the audit profile",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the audit profile",
              args: { name: "display-name" },
            },
            {
              name: "--is-paid-usage-enabled",
              description:
                "Indicates if you want to continue collecting audit records beyond the free limit of one million audit records",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-override-global-paid-usage",
              description:
                "Indicates whether audit paid usage settings specified at the target database level override both the global",
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
      name: "subsetting-rule",
      description:
        "Defines a rule for subsetting data in specific tables or schemas, including scope and processing strategies",
      subcommands: [
        {
          name: "create",
          description: "Details to create a new subsetting rule",
          options: [
            optScope,
            optSubsetRuleEntry,
            optSubsettingPolicyId,
            optDisplayName2,
            optDescription,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-subsetting-rule-subset-scope-for-all-objects",
          description: "Details to create a new subsetting rule",
          options: [
            optSubsetRuleEntry,
            optSubsettingPolicyId,
            optDisplayName2,
            optDescription,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            {
              name: "--scope-schema-name",
              description:
                "The name of the schema containing the objects to be subsetted",
              args: { name: "scope-schema-name" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-subsetting-rule-subset-scope-for-specific-objects",
          description: "Details to create a new subsetting rule",
          options: [
            optSubsetRuleEntry,
            optSubsettingPolicyId,
            {
              name: "--scope-schema-name",
              description:
                "The name of the schema containing the specific object to be subsetted",
              args: { name: "scope-schema-name" },
              isRequired: true,
            },
            {
              name: "--scope-object-name",
              description:
                "The name of the specific object (e.g., table) to be subsetted",
              args: { name: "scope-object-name" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-subsetting-rule-partition-subset-rule-entry",
          description: "Details to create a new subsetting rule",
          options: [
            optScope,
            optSubsettingPolicyId,
            optDisplayName2,
            optDescription,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            {
              name: "--subset-rule-entry-partitions-list",
              description:
                "A list of partition names which are to be part of the subset data",
              args: { name: "json" },
            },
            {
              name: "--subset-rule-entry-sub-partitions-list",
              description:
                "A list of sub-partition names which are to be part of the subset data",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-subsetting-rule-percent-subset-rule-entry",
          description: "Details to create a new subsetting rule",
          options: [
            optScope,
            optSubsettingPolicyId,
            {
              name: "--subset-rule-entry-percent",
              description:
                "The percentage of rows to retain in the subset (between 0 and 100)",
              args: { name: "integer" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-subsetting-rule-condition-subset-rule-entry",
          description: "Details to create a new subsetting rule",
          options: [
            optScope,
            optSubsettingPolicyId,
            {
              name: "--subset-rule-entry-condition",
              description:
                "The SQL WHERE clause condition used to filter rows for the subset",
              args: { name: "subset-rule-entry-condition" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified subsetting rule",
          options: [
            optSubsettingRuleKey,
            optSubsettingPolicyId,
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
          description: "Gets the details of the specified subsetting rule",
          options: [optSubsettingPolicyId, optSubsettingRuleKey, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of subsetting rules present in the specified subsetting policy and based on the specified query",
          options: [
            optSubsettingPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeCreated", "schemaName", "objectName"],
              },
            },
            optSchemaName,
            optObjectName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Patches one or more subsetting rules in the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            optItems,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified subsetting rule",
          options: [
            optSubsettingRuleKey,
            optSubsettingPolicyId,
            optDisplayName2,
            optDescription,
            optScope2,
            optSubsetRuleEntry2,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-subsetting-rule-subset-scope-for-all-objects",
          description:
            "Updates one or more attributes of the specified subsetting rule",
          options: [
            optSubsettingRuleKey,
            optSubsettingPolicyId,
            optDisplayName2,
            optDescription,
            optSubsetRuleEntry2,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optIfMatch,
            {
              name: "--scope-schema-name",
              description:
                "The name of the schema containing the objects to be subsetted",
              args: { name: "scope-schema-name" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-subsetting-rule-subset-scope-for-specific-objects",
          description:
            "Updates one or more attributes of the specified subsetting rule",
          options: [
            optSubsettingRuleKey,
            optSubsettingPolicyId,
            {
              name: "--scope-schema-name",
              description:
                "The name of the schema containing the specific object to be subsetted",
              args: { name: "scope-schema-name" },
              isRequired: true,
            },
            {
              name: "--scope-object-name",
              description:
                "The name of the specific object (e.g., table) to be subsetted",
              args: { name: "scope-object-name" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription,
            optSubsetRuleEntry2,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-subsetting-rule-partition-subset-rule-entry",
          description:
            "Updates one or more attributes of the specified subsetting rule",
          options: [
            optSubsettingRuleKey,
            optSubsettingPolicyId,
            optDisplayName2,
            optDescription,
            optScope2,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optIfMatch,
            {
              name: "--subset-rule-entry-partitions-list",
              description:
                "A list of partition names which are to be part of the subset data",
              args: { name: "json" },
            },
            {
              name: "--subset-rule-entry-sub-partitions-list",
              description:
                "A list of sub-partition names which are to be part of the subset data",
              args: { name: "json" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-subsetting-rule-percent-subset-rule-entry",
          description:
            "Updates one or more attributes of the specified subsetting rule",
          options: [
            optSubsettingRuleKey,
            optSubsettingPolicyId,
            {
              name: "--subset-rule-entry-percent",
              description:
                "The percentage of rows to retain in the subset (between 0 and 100)",
              args: { name: "integer" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription,
            optScope2,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-subsetting-rule-condition-subset-rule-entry",
          description:
            "Updates one or more attributes of the specified subsetting rule",
          options: [
            optSubsettingRuleKey,
            optSubsettingPolicyId,
            {
              name: "--subset-rule-entry-condition",
              description:
                "The SQL WHERE clause condition used to filter rows for the subset",
              args: { name: "subset-rule-entry-condition" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription,
            optScope2,
            optRuleCombinationMode,
            optRelatedTablesPropagation,
            optPeerTablesAction,
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
      name: "sensitive-data-model",
      description:
        "A sensitive data model is a collection of sensitive columns and their referential relationships",
      subcommands: [
        {
          name: "apply-discovery-job-results",
          description:
            "Applies the results of a discovery job to the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            optDiscoveryJobId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the specified sensitive data model and its dependent resources into a different compartment",
          options: [
            optSensitiveDataModelId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the sensitive data model should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new sensitive data model",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the sensitive data model should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description:
                "The OCID of the reference target database to be associated with the sensitive data model",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the sensitive data model",
              args: { name: "display-name" },
            },
            {
              name: "--app-suite-name",
              description:
                "The application suite name identifying a collection of applications",
              args: { name: "app-suite-name" },
            },
            {
              name: "--description",
              description: "The description of the sensitive data model",
              args: { name: "description" },
            },
            {
              name: "--schemas-for-discovery",
              description: "The schemas to be scanned by data discovery jobs",
              args: { name: "json" },
            },
            optTablesForDiscovery,
            {
              name: "--sensitive-type-ids-for-discovery",
              description:
                "The OCIDs of the sensitive types to be used by data discovery jobs",
              args: { name: "json" },
            },
            {
              name: "--sensitive-type-group-ids-for-discovery",
              description:
                "The OCIDs of the sensitive type groups to be used by data discovery jobs",
              args: { name: "json" },
            },
            {
              name: "--is-sample-data-collection-enabled",
              description:
                "Indicates if data discovery jobs should collect and store sample data values for the discovered columns",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-app-defined-relation-discovery-enabled",
              description:
                "Indicates if data discovery jobs should identify potential application-level",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-include-all-schemas",
              description:
                "Indicates if all the schemas in the associated target database should be scanned by data discovery jobs",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-include-all-sensitive-types",
              description:
                "Indicates if all the existing sensitive types should be used by data discovery jobs",
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
          description: "Deletes the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-discovery-report",
          description: "Downloads an already-generated discovery report",
          options: [
            optSensitiveDataModelId,
            optFile,
            {
              name: "--discovery-job-id",
              description: "The OCID of the discovery job",
              args: { name: "discovery-job-id" },
            },
            {
              name: "--report-format",
              description: "Format of the report",
              args: { suggestions: ["PDF", "XLS"] },
            },
            optFromJson,
          ],
        },
        {
          name: "download",
          description:
            "Downloads an already-generated file corresponding to the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            optFile,
            {
              name: "--data-model-format",
              description: "The format of the sensitive data model file",
              args: { suggestions: ["XML"] },
            },
            optFromJson,
          ],
        },
        {
          name: "generate-discovery-report-for-download",
          description: "Generates a downloadable discovery report",
          options: [
            optSensitiveDataModelId,
            optReportFormat,
            {
              name: "--discovery-job-id",
              description: "The OCID of the discovery job",
              args: { name: "discovery-job-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-sensitive-data-model-for-download",
          description:
            "Generates a downloadable file corresponding to the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            {
              name: "--data-model-format",
              description: "The format of the sensitive data model file",
              args: { suggestions: ["XML"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified sensitive data model",
          options: [optSensitiveDataModelId, optFromJson],
        },
        {
          name: "list-discovery-analytics",
          description:
            "Gets consolidated discovery analytics data based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            {
              name: "--group-by",
              description:
                "Attribute by which the discovery analytics data should be grouped",
              args: {
                suggestions: [
                  "targetId",
                  "sensitiveDataModelId",
                  "sensitiveTypeId",
                  "targetIdAndSensitiveDataModelId",
                  "sensitiveTypeIdAndTargetId",
                  "sensitiveTypeIdAndSensitiveDataModelId",
                ],
              },
            },
            optTargetId,
            optTargetDatabaseGroupId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeLastDiscovered"] },
            },
            optSortOrder,
            optSensitiveDataModelId2,
            optSensitiveTypeId,
            optLimit,
            optPage,
            {
              name: "--is-common",
              description:
                "A filter to return only the common sensitive type resources",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSensitiveTypeGroupId2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-sensitive-column-analytics",
          description:
            "Gets consolidated sensitive columns analytics data based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTargetId,
            optTargetDatabaseGroupId,
            {
              name: "--sensitive-type-id",
              description:
                "A filter to return only the sensitive columns that are associated with one of the sensitive types identified",
              args: { name: "sensitive-type-id" },
              isRepeatable: true,
            },
            optSensitiveTypeGroupId2,
            optSensitiveDataModelId2,
            {
              name: "--group-by",
              description:
                "The group by parameter to summarize the sensitive columns",
              args: {
                suggestions: [
                  "targetId",
                  "sensitiveTypeId",
                  "sensitiveDataModelId",
                ],
              },
              isRepeatable: true,
            },
            optSchemaName,
            optObjectName,
            optColumnName,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of sensitive data models based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optSensitiveDataModelId2,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optTargetId,
            optSortOrder,
            optSortBy3,
            optLimit,
            optPage,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            {
              name: "--display-name",
              description: "The display name of the sensitive data model",
              args: { name: "display-name" },
            },
            {
              name: "--target-id",
              description:
                "The OCID of the reference target database to be associated with the sensitive data model",
              args: { name: "target-id" },
            },
            {
              name: "--app-suite-name",
              description:
                "The application suite name identifying a collection of applications",
              args: { name: "app-suite-name" },
            },
            {
              name: "--description",
              description: "The description of the sensitive data model",
              args: { name: "description" },
            },
            {
              name: "--schemas-for-discovery",
              description:
                "The schemas to be used for future data discovery jobs",
              args: { name: "json" },
            },
            optTablesForDiscovery,
            {
              name: "--sensitive-type-ids-for-discovery",
              description:
                "The OCIDs of the sensitive types to be used for future data discovery jobs",
              args: { name: "json" },
            },
            {
              name: "--sensitive-type-group-ids-for-discovery",
              description:
                "The OCIDs of the sensitive type groups to be used by data discovery jobs",
              args: { name: "json" },
            },
            {
              name: "--is-sample-data-collection-enabled",
              description:
                "Indicates if data discovery jobs should collect and store sample data values for the discovered columns",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-app-defined-relation-discovery-enabled",
              description:
                "Indicates if data discovery jobs should identify potential application-level",
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
        {
          name: "upload",
          description:
            "Uploads a sensitive data model file (also called template) to update the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            {
              name: "--upload-sensitive-data-model-details",
              description: "Details to upload a sensitive data model file",
              args: { name: "upload-sensitive-data-model-details" },
              isRequired: true,
            },
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
      name: "unified-audit-policy-definition-collection",
      description: "Collection of audit policy summary",
      subcommands: [
        {
          name: "list-unified-audit-policy-definitions",
          description:
            "Retrieves a list of all unified audit policy definitions in Data Safe",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "The current state of the unified audit policy definition",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--unified-audit-policy-definition-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the unified audit policy",
              args: { name: "unified-audit-policy-definition-id" },
            },
            optAccessLevel,
            optDisplayName,
            {
              name: "--is-seeded",
              description:
                "A boolean flag indicating to list seeded unified audit policy definitions",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--unified-audit-policy-category",
              description:
                "The category to which the unified audit policy definition belongs to",
              args: {
                suggestions: [
                  "BASIC_ACTIVITY",
                  "ADMIN_USER_ACTIVITY",
                  "USER_ACTIVITY",
                  "ORACLE_PREDEFINED",
                  "COMPLIANCE_STANDARD",
                  "SQL_FIREWALL_AUDITING",
                  "CUSTOM",
                ],
              },
            },
            {
              name: "--unified-audit-policy-name",
              description: "The name of the unified audit policy",
              args: { name: "unified-audit-policy-name" },
            },
            optLimit,
            optPage,
            optCompartmentIdInSubtree,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "library-masking-format",
      description:
        "A library masking format is a masking format stored in an Oracle Cloud Infrastructure compartment and can",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified library masking format into a different compartment",
          options: [
            optLibraryMaskingFormatId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the library masking format should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new library masking format",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the library masking format should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--format-entries",
              description: "An array of format entries",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the library masking format",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the library masking format",
              args: { name: "description" },
            },
            {
              name: "--sensitive-type-ids",
              description:
                "An array of OCIDs of the sensitive types compatible with the library masking format",
              args: { name: "json" },
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
          description: "Deletes the specified library masking format",
          options: [
            optLibraryMaskingFormatId,
            optIfMatch,
            optForce2,
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
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the specified library masking format",
          options: [optLibraryMaskingFormatId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified library masking format",
          options: [
            optLibraryMaskingFormatId,
            {
              name: "--display-name",
              description: "The display name of the library masking format",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the library masking format",
              args: { name: "description" },
            },
            {
              name: "--sensitive-type-ids",
              description:
                "An array of OCIDs of the sensitive types compatible with the library masking format",
              args: { name: "json" },
            },
            {
              name: "--format-entries",
              description: "An array of format entries",
              args: { name: "json" },
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
      name: "masking-report",
      description:
        "A masking report contains information about a completed masking request",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified masking report",
          options: [
            optMaskingReportId,
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
          description: "Gets the details of the specified masking report",
          options: [optMaskingReportId, optFromJson],
        },
      ],
    },
    {
      name: "alert-policy",
      description:
        "An Alert Policy is a set of alerting rules evaluated against a target",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified alert policy into a different compartment",
          options: [
            optAlertPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the alert policy has to be moved",
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
          description: "Creates a new user-defined alert policy",
          options: [
            {
              name: "--alert-policy-type",
              description:
                "Indicates the Data Safe feature the alert policy belongs",
              args: {
                suggestions: [
                  "AUDITING",
                  "SECURITY_ASSESSMENT",
                  "USER_ASSESSMENT",
                ],
              },
              isRequired: true,
            },
            {
              name: "--severity",
              description: "Severity level of the alert raised by this policy",
              args: {
                suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW", "EVALUATE"],
              },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the alert policy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the alert policy",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the alert policy",
              args: { name: "description" },
            },
            {
              name: "--alert-policy-rule-details",
              description: "The details of the alert policy rule",
              args: { name: "json" },
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
          description: "Deletes the specified user-defined alert policy",
          options: [
            optAlertPolicyId,
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
          description: "Gets the details of alert policy by its ID",
          options: [optAlertPolicyId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of all alert policies",
          options: [
            optCompartmentId,
            {
              name: "--alert-policy-id",
              description: "A filter to return policy by it's OCID",
              args: { name: "alert-policy-id" },
            },
            {
              name: "--type",
              description:
                "An optional filter to return only alert policies of a certain type",
              args: {
                suggestions: [
                  "AUDITING",
                  "SECURITY_ASSESSMENT",
                  "USER_ASSESSMENT",
                ],
              },
            },
            {
              name: "--is-user-defined",
              description:
                "An optional filter to return only alert policies that are user-defined or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "An optional filter to return only alert policies that have the given life-cycle state",
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
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-alert-policy-rules",
          description: "Lists the rules of the specified alert policy",
          options: [
            optAlertPolicyId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified alert policy",
          options: [
            optAlertPolicyId,
            {
              name: "--display-name",
              description: "The display name of the alert policy",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the alert policy",
              args: { name: "description" },
            },
            {
              name: "--severity",
              description: "Severity level of the alert raised by this policy",
              args: {
                suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW", "EVALUATE"],
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
      name: "user-assessment",
      description:
        "The details of the user assessment, which includes statistics related to target database users",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified saved user assessment or future scheduled assessments into a different compartment",
          options: [
            optUserAssessmentId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the user assessment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "compare",
          description: "Compares two user assessments",
          options: [
            optUserAssessmentId,
            {
              name: "--comparison-user-assessment-id",
              description: "The OCID of the user assessment to be compared",
              args: { name: "comparison-user-assessment-id" },
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
            "Creates a new saved user assessment for a target database or target database group in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the user assessment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target database or target database group on which user assessment is to be run",
              args: { name: "target-id" },
              isRequired: true,
            },
            optDescription7,
            optDisplayName8,
            optIsAssessmentScheduled,
            {
              name: "--schedule",
              description:
                "To schedule the assessment for saving periodically, specify the schedule in this attribute",
              args: { name: "schedule" },
            },
            {
              name: "--target-type",
              description:
                "The type of user assessment resource whether it is individual or group resource",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
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
            "Deletes the specified saved user assessment or schedule",
          options: [
            optUserAssessmentId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-user-assessment-report",
          description: "Downloads the report of the specified user assessment",
          options: [
            optUserAssessmentId,
            {
              name: "--format",
              description: "Format of the report",
              args: { suggestions: ["PDF", "XLS"] },
              isRequired: true,
            },
            optFile,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "generate-user-assessment-report",
          description: "Generates the report of the specified user assessment",
          options: [
            optUserAssessmentId,
            {
              name: "--format",
              description: "Format of the report",
              args: { suggestions: ["PDF", "XLS"] },
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
          name: "get-profile",
          description:
            "Lists the details of given profile available on the target",
          options: [
            optUserAssessmentId,
            {
              name: "--profile-name",
              description: "Profile name to get detailed information",
              args: { name: "profile-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a user assessment by identifier",
          options: [optUserAssessmentId, optFromJson],
        },
        {
          name: "get-user-assessment-comparison",
          description:
            "Gets the details of the comparison report for the user assessments submitted for comparison",
          options: [
            optUserAssessmentId,
            {
              name: "--comparison-user-assessment-id",
              description: "The OCID of the baseline user assessment",
              args: { name: "comparison-user-assessment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-grants",
          description:
            "Gets a list of grants for a particular user in the specified user assessment",
          options: [
            optUserAssessmentId,
            {
              name: "--user-key",
              description: "The unique user key",
              args: { name: "user-key" },
              isRequired: true,
            },
            {
              name: "--grant-key",
              description:
                "A filter to return only items that match the specified user grant key",
              args: { name: "grant-key" },
            },
            {
              name: "--grant-name",
              description:
                "A filter to return only items that match the specified user grant name",
              args: { name: "grant-name" },
            },
            {
              name: "--privilege-type",
              description:
                "A filter to return only items that match the specified privilege grant type",
              args: { name: "privilege-type" },
            },
            {
              name: "--privilege-category",
              description:
                "A filter to return only items that match the specified user privilege category",
              args: { name: "privilege-category" },
            },
            {
              name: "--depth-level",
              description:
                "A filter to return only items that match the specified user grant depth level",
              args: { name: "integer" },
            },
            {
              name: "--depth-level-greater-than-or-equal-to",
              description:
                "A filter to return only items that are at a level greater than or equal to the specified user grant depth",
              args: { name: "integer" },
            },
            {
              name: "--depth-level-less-than",
              description:
                "A filter to return only items that are at a level less than the specified user grant depth level",
              args: { name: "integer" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "grantName",
                  "grantType",
                  "privilegeCategory",
                  "depthLevel",
                  "key",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-password-expiry-date-analytics",
          description:
            "Gets a list of count of the users with password expiry dates in next 30 days, between next 30-90 days",
          options: [
            optUserAssessmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optUserCategory,
            optTimePasswordExpiryLessThan,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-profile-summaries",
          description:
            "Gets a list of user profiles containing the profile details along with the target id and user counts",
          options: [
            optUserAssessmentId,
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTargetId,
            optLimit,
            optPage,
            {
              name: "--profile-name",
              description:
                "A filter to return only items that match the specified profile name",
              args: { name: "profile-name" },
            },
            {
              name: "--is-user-created",
              description:
                "An optional filter to return the user created profiles",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--password-verification-function",
              description:
                "An optional filter to filter the profiles based on password verification function",
              args: { name: "password-verification-function" },
            },
            {
              name: "--user-count-greater-than-or-equal",
              description:
                "An optional filter to return the profiles having user count greater than or equal to the provided value",
              args: { name: "user-count-greater-than-or-equal" },
            },
            {
              name: "--user-count-less-than",
              description:
                "An optional filter to return the profiles having user count less than the provided value",
              args: { name: "user-count-less-than" },
            },
            {
              name: "--failed-login-attempts-greater-than-or-equal",
              description:
                "An optional filter to return the profiles having allow failed login attempts number greater than or equal",
              args: { name: "failed-login-attempts-greater-than-or-equal" },
            },
            {
              name: "--failed-login-attempts-less-than",
              description:
                "An optional filter to return the profiles having failed login attempts number less than the provided value",
              args: { name: "failed-login-attempts-less-than" },
            },
            {
              name: "--sessions-per-user-greater-than-or-equal",
              description:
                "An optional filter to return the profiles permitting the user to spawn multiple sessions having count",
              args: { name: "sessions-per-user-greater-than-or-equal" },
            },
            {
              name: "--sessions-per-user-less-than",
              description:
                "An optional filter to return the profiles permitting the user to spawn multiple sessions having count less",
              args: { name: "sessions-per-user-less-than" },
            },
            {
              name: "--inactive-account-time-greater-than-or-equal",
              description:
                "An optional filter to return the profiles allowing inactive account time in days greater than or equal to",
              args: { name: "inactive-account-time-greater-than-or-equal" },
            },
            {
              name: "--inactive-account-time-less-than",
              description:
                "An optional filter to return the profiles allowing inactive account time in days less than the provided value",
              args: { name: "inactive-account-time-less-than" },
            },
            {
              name: "--password-lock-time-greater-than-or-equal",
              description:
                "An optional filter to return the profiles having password lock number greater than or equal to the provided",
              args: { name: "password-lock-time-greater-than-or-equal" },
            },
            {
              name: "--password-lock-time-less-than",
              description:
                "An optional filter to return the profiles having password lock number less than the provided value",
              args: { name: "password-lock-time-less-than" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "profileName",
                  "targetId",
                  "isUserCreated",
                  "passwordVerificationFunction",
                  "userCount",
                  "sessionsPerUser",
                  "inactiveAccountTime",
                  "passwordLockTime",
                  "failedLoginAttempts",
                ],
              },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-user-access-analytics",
          description:
            "Gets a list of aggregated user access analytics in the specified target in a compartment",
          options: [
            optUserAssessmentId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["USERNAME", "COUNT"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-user-analytics",
          description:
            "Gets a list of aggregated user details from the specified user assessment",
          options: [
            optUserAssessmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optUserCategory,
            {
              name: "--user-key",
              description:
                "A filter to return only items that match the specified user key",
              args: { name: "user-key" },
            },
            {
              name: "--account-status",
              description:
                "A filter to return only items that match the specified account status",
              args: { name: "account-status" },
            },
            {
              name: "--authentication-type",
              description:
                "A filter to return only items that match the specified authentication type",
              args: { name: "authentication-type" },
            },
            {
              name: "--user-name",
              description:
                "A filter to return only items that match the specified user name",
              args: { name: "user-name" },
            },
            optTargetId,
            {
              name: "--time-last-login-greater-than-or-equal-to",
              description:
                "A filter to return users whose last login time in the database is greater than or equal to the date and time",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-login-less-than",
              description:
                "A filter to return users whose last login time in the database is less than the date and time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-user-created-greater-than-or-equal-to",
              description:
                "A filter to return users whose creation time in the database is greater than or equal to the date and time",
              args: { name: "datetime" },
            },
            {
              name: "--time-user-created-less-than",
              description:
                "A filter to return users whose creation time in the database is less than the date and time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-password-last-changed-greater-than-or-equal-to",
              description:
                "A filter to return users whose last password change in the database is greater than or equal to the date",
              args: { name: "datetime" },
            },
            {
              name: "--time-password-last-changed-less-than",
              description:
                "A filter to return users whose last password change in the database is less than the date and time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-password-expiry-greater-than-or-equal-to",
              description:
                "A filter to return users whose password expiry date in the database is greater than or equal to the date",
              args: { name: "datetime" },
            },
            optTimePasswordExpiryLessThan,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "userName",
                  "userCategory",
                  "accountStatus",
                  "timeLastLogin",
                  "targetId",
                  "timeUserCreated",
                  "authenticationType",
                  "timePasswordChanged",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of user assessments",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            {
              name: "--schedule-user-assessment-id",
              description:
                "The OCID of the user assessment of type SAVE_SCHEDULE",
              args: { name: "schedule-user-assessment-id" },
            },
            {
              name: "--is-schedule-assessment",
              description:
                "A filter to return only user assessments of type SAVE_SCHEDULE",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-baseline",
              description:
                "A filter to return only user assessments that are set as baseline",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optTargetId,
            {
              name: "--type",
              description:
                "A filter to return only items that match the specified assessment type",
              args: {
                suggestions: [
                  "LATEST",
                  "SAVED",
                  "COMPARTMENT",
                  "SAVE_SCHEDULE",
                ],
              },
            },
            {
              name: "--triggered-by",
              description:
                "A filter to return user assessments that were created by either the system or by a user only",
              args: { suggestions: ["USER", "SYSTEM"] },
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "A filter to return only user assessments that were created after the specified date and time",
              args: { name: "datetime" },
            },
            optTimeCreatedLessThan,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the user assessment",
              args: {
                suggestions: [
                  "CREATING",
                  "SUCCEEDED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optSortOrder,
            optSortBy3,
            {
              name: "--target-type",
              description:
                "A filter to return only target database resources or target database group resources",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            optTargetDatabaseGroupId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-users",
          description: "Gets a list of users of the specified user assessment",
          options: [
            optUserAssessmentId,
            optLimit,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optUserCategory,
            {
              name: "--user-role",
              description:
                "A filter to return only items that match the specified user role",
              args: { name: "user-role" },
            },
            {
              name: "--user-profile",
              description:
                "A filter to return only items that match the specified user profile",
              args: { name: "user-profile" },
            },
            {
              name: "--user-type",
              description:
                "A filter to return only items that match the specified user type",
              args: { name: "user-type" },
            },
            {
              name: "--user-key",
              description:
                "A filter to return only items that match the specified user key",
              args: { name: "user-key" },
            },
            {
              name: "--account-status",
              description:
                "A filter to return only items that match the specified account status",
              args: { name: "account-status" },
            },
            {
              name: "--authentication-type",
              description:
                "A filter to return only items that match the specified authentication type",
              args: { name: "authentication-type" },
            },
            {
              name: "--user-name",
              description:
                "A filter to return only items that match the specified user name",
              args: { name: "user-name" },
            },
            optTargetId,
            {
              name: "--time-last-login-greater-than-or-equal-to",
              description:
                "A filter to return users whose last login time in the database is greater than or equal to the date and time",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-login-less-than",
              description:
                "A filter to return users whose last login time in the database is less than the date and time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-user-created-greater-than-or-equal-to",
              description:
                "A filter to return users whose creation time in the database is greater than or equal to the date and time",
              args: { name: "datetime" },
            },
            {
              name: "--time-user-created-less-than",
              description:
                "A filter to return users whose creation time in the database is less than the date and time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-password-last-changed-greater-than-or-equal-to",
              description:
                "A filter to return users whose last password change in the database is greater than or equal to the date",
              args: { name: "datetime" },
            },
            {
              name: "--time-password-last-changed-less-than",
              description:
                "A filter to return users whose last password change in the database is less than the date and time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-password-expiry-greater-than-or-equal-to",
              description:
                "A filter to return users whose password expiry date in the database is greater than or equal to the date",
              args: { name: "datetime" },
            },
            optTimePasswordExpiryLessThan,
            optPage,
            optCompartmentId2,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "userName",
                  "userCategory",
                  "accountStatus",
                  "timeLastLogin",
                  "targetId",
                  "timeUserCreated",
                  "authenticationType",
                  "timePasswordChanged",
                ],
              },
            },
            {
              name: "--schema-list",
              description:
                "A filter to return items that contain the specified schema list",
              args: { name: "schema-list" },
              isRepeatable: true,
            },
            {
              name: "--are-all-schemas-accessible",
              description:
                "A filter to return only items that match the criteria that all schemas can be accessed by a user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "refresh",
          description:
            "Refreshes the latest assessment and saves it for future reference",
          options: [
            optUserAssessmentId,
            {
              name: "--compartment-id",
              description:
                "This field is ignored when refreshing a user assessment",
              args: { name: "compartment-id" },
            },
            optDescription7,
            optDisplayName8,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "set-user-assessment-baseline",
          description:
            "Sets the saved user assessment as the baseline in the compartment where the specified assessment resides",
          options: [
            optUserAssessmentId,
            optIfMatch,
            {
              name: "--assessment-ids",
              description:
                "The list of OCIDs for the user assessments that need to be updated while setting the baseline",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unset-user-assessment-baseline",
          description:
            "Removes the baseline setting for the saved user assessment associated with the targetId passed via body",
          options: [
            optUserAssessmentId,
            optIfMatch,
            {
              name: "--target-ids",
              description:
                "The list of database target OCIDs for which the user intends to unset the baseline",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified user assessment",
          options: [
            optUserAssessmentId,
            optDescription7,
            optDisplayName8,
            optIsAssessmentScheduled,
            {
              name: "--schedule",
              description:
                "The schedule for periodically saving the assessment",
              args: { name: "schedule" },
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
      name: "audit-policy-collection",
      description: "Collection of audit policy summary",
      subcommands: [
        {
          name: "list-audit-policies",
          description:
            "Retrieves a list of all audited targets with their corresponding provisioned audit policies",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            optTargetId,
            optTargetDatabaseGroupId,
            {
              name: "--lifecycle-state",
              description: "The current state of the audit policy",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            {
              name: "--audit-policy-id",
              description:
                "An optional filter to return only resources that match the specified id",
              args: { name: "audit-policy-id" },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "table-estimate-summary",
      description:
        "Estimated row count and size details for a table in a subsetting policy",
      subcommands: [
        {
          name: "list-table-estimates",
          description:
            "Gets table size estimates for the specified subsetting policy",
          options: [
            optSubsettingPolicyId,
            optSchemaName,
            optObjectName,
            optTargetId,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["schemaName", "tableName"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "database-table-access-entry",
      description:
        "A DatabaseTableAccess is a resource corresponding to a row in database table access report",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a database table access entry object by identifier",
          options: [
            optSecurityPolicyReportId,
            {
              name: "--database-table-access-entry-key",
              description:
                "The unique key that identifies the table access object",
              args: { name: "database-table-access-entry-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "audit-policy",
      description:
        "The resource represents all available audit policies relevant for the target database with their",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified audit policy and its dependent resources into a different compartment",
          options: [
            optAuditPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the audit policy",
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
          name: "get",
          description: "Gets a audit policy by identifier",
          options: [optAuditPolicyId, optFromJson],
        },
        {
          name: "provision",
          description: "Provision audit policy",
          options: [
            {
              name: "--provision-audit-conditions",
              description: "The audit policy details for provisioning",
              args: { name: "json" },
              isRequired: true,
            },
            optAuditPolicyId,
            {
              name: "--is-data-safe-service-account-excluded",
              description:
                "Option provided to users at the target to indicate whether the Data Safe service account has to be excluded",
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
          name: "retrieve",
          description:
            "Retrieves the audit policy details from the source target database",
          options: [
            optAuditPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the audit policy",
          options: [
            optAuditPolicyId,
            {
              name: "--display-name",
              description: "The display name of the audit policy",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the audit policy",
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
      name: "audit-trail-analytic-collection",
      description: "Details of audit trail analytic summary",
      subcommands: [
        {
          name: "list-audit-trail-analytics",
          description: "Gets a list of audit trail aggregated details",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            {
              name: "--group-by",
              description:
                "The group by parameter for summarize operation on audit trail",
              args: {
                suggestions: [
                  "location",
                  "lifecycleState",
                  "status",
                  "targetId",
                ],
              },
              isRepeatable: true,
            },
            optTargetId,
            optTimeStarted,
            optTimeEnded,
            optQueryTimeZone,
            optTargetDatabaseGroupId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "masking-policy",
      description:
        "A masking policy defines the approach to mask data in a target database",
      subcommands: [
        {
          name: "add",
          description:
            "Adds columns to the specified masking policy from the associated sensitive data model",
          options: [
            optMaskingPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "apply-sdm-masking-policy-difference",
          description:
            "Applies the difference of a SDM Masking policy difference resource to the specified masking policy",
          options: [
            optMaskingPolicyId,
            optSdmMaskingPolicyDifferenceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the specified masking policy and its dependent resources into a different compartment",
          options: [
            optMaskingPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the masking policy should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new masking policy and associates it with a sensitive data model or a target database",
          options: [
            optCompartmentId6,
            {
              name: "--column-source",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription2,
            optIsDropTempTablesEnabled,
            optIsRedoLoggingEnabled,
            optIsRefreshStatsEnabled,
            optParallelDegree,
            optRecompile,
            optPreMaskingScript,
            optPostMaskingScript,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-masking-policy-create-column-source-from-target-details",
          description:
            "Creates a new masking policy and associates it with a sensitive data model or a target database",
          options: [
            optCompartmentId6,
            {
              name: "--column-source-target-id",
              description:
                "The OCID of the target database to be associated as the column source with the masking policy",
              args: { name: "column-source-target-id" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription2,
            optIsDropTempTablesEnabled,
            optIsRedoLoggingEnabled,
            optIsRefreshStatsEnabled,
            optParallelDegree,
            optRecompile,
            optPreMaskingScript,
            optPostMaskingScript,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-masking-policy-create-column-source-from-sdm-details",
          description:
            "Creates a new masking policy and associates it with a sensitive data model or a target database",
          options: [
            optCompartmentId6,
            {
              name: "--column-source-sensitive-data-model-id",
              description:
                "The OCID of the sensitive data model to be associated as the column source with the masking policy",
              args: { name: "column-source-sensitive-data-model-id" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription2,
            optIsDropTempTablesEnabled,
            optIsRedoLoggingEnabled,
            optIsRefreshStatsEnabled,
            optParallelDegree,
            optRecompile,
            optPreMaskingScript,
            optPostMaskingScript,
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
          description: "Deletes the specified masking policy",
          options: [
            optMaskingPolicyId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-masking-log",
          description:
            "Downloads the masking log generated by the last masking operation on a target database using the specified",
          options: [
            optMaskingPolicyId,
            optFile,
            {
              name: "--target-id",
              description:
                "The OCID of the target database for which the masking log is to be downloaded",
              args: { name: "target-id" },
            },
            {
              name: "--masking-work-request-id",
              description:
                "The OCID of the masking work request that resulted in this masking log",
              args: { name: "masking-work-request-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "download",
          description:
            "Downloads an already-generated file corresponding to the specified masking policy",
          options: [
            optMaskingPolicyId,
            optFile,
            {
              name: "--policy-format",
              description: "The format of the masking policy file",
              args: { suggestions: ["XML"] },
            },
            optFromJson,
          ],
        },
        {
          name: "download-masking-report",
          description: "Downloads an already-generated masking report",
          options: [
            optMaskingPolicyId,
            {
              name: "--report-id",
              description: "The OCID of the masking report to be downloaded",
              args: { name: "report-id" },
              isRequired: true,
            },
            optReportFormat,
            optFile,
            optFromJson,
          ],
        },
        {
          name: "generate-masking-policy-for-download",
          description:
            "Generates a downloadable file corresponding to the specified masking policy",
          options: [
            optMaskingPolicyId,
            {
              name: "--policy-format",
              description: "The format of the masking policy file",
              args: { suggestions: ["XML"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-masking-report-for-download",
          description: "Generates a downloadable masking report",
          options: [
            optMaskingPolicyId,
            {
              name: "--report-id",
              description:
                "The OCID of the masking report for which a downloadable file is to be generated",
              args: { name: "report-id" },
              isRequired: true,
            },
            optReportFormat,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified masking policy",
          options: [optMaskingPolicyId, optFromJson],
        },
        {
          name: "list-masking-analytics",
          description:
            "Gets consolidated masking analytics data based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            {
              name: "--group-by",
              description:
                "Attribute by which the masking analytics data should be grouped",
              args: {
                suggestions: [
                  "targetId",
                  "policyId",
                  "targetIdAndPolicyId",
                  "sensitiveTypeId",
                ],
              },
            },
            optTargetId,
            optMaskingPolicyId2,
            optSensitiveTypeId,
            optTargetDatabaseGroupId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeLastMasked"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of masking policies based on the specified query parameters",
          options: [
            optCompartmentId,
            optMaskingPolicyId2,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState2,
            optSortOrder,
            optSortBy2,
            optSensitiveDataModelId2,
            optTargetId,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-masking-reports",
          description:
            "Gets a list of masking reports based on the specified query parameters",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optMaskingPolicyId2,
            optTargetId,
            optTargetDatabaseGroupId,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeMaskingFinished"] },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "mask-data",
          description: "Masks data using the specified masking policy",
          options: [
            optMaskingPolicyId,
            {
              name: "--target-id",
              description: "The OCID of the target database to be masked",
              args: { name: "target-id" },
            },
            {
              name: "--is-decrypt",
              description:
                "Indicates if the masking request is to decrypt the data values previously encrypted using Deterministic",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-rerun",
              description:
                "Indicates if the masking request is to rerun the previously failed masking steps",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--re-run-from-step",
              description:
                "Specifies the step from which masking needs to be rerun",
              args: {
                suggestions: ["PRE_MASKING_SCRIPT", "POST_MASKING_SCRIPT"],
              },
            },
            {
              name: "--tablespace",
              description:
                "The tablespace that should be used to create the mapping tables, DMASK objects",
              args: { name: "tablespace" },
            },
            {
              name: "--is-ignore-errors-enabled",
              description:
                "Indicates if the masking process should continue on hitting an error",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--seed",
              description:
                "The seed value to be used in case of Deterministic Encryption and Deterministic Substitution masking formats",
              args: { name: "seed" },
            },
            {
              name: "--user-defined-function-seed",
              description:
                "The seed value to be used in case of User Defined Function masking format",
              args: { name: "user-defined-function-seed" },
            },
            {
              name: "--is-move-interim-tables-enabled",
              description:
                "Indicates if the interim DMASK tables should be moved to the user-specified tablespace",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-execute-saved-script-enabled",
              description:
                "Indicates if data masking should be performed using a saved masking script",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsDropTempTablesEnabled,
            optIsRedoLoggingEnabled,
            optIsRefreshStatsEnabled,
            optParallelDegree,
            optRecompile,
            { name: "--target-credentials", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified masking policy",
          options: [
            optMaskingPolicyId,
            optDisplayName3,
            optDescription2,
            optIsDropTempTablesEnabled,
            optIsRedoLoggingEnabled,
            optIsRefreshStatsEnabled,
            optParallelDegree,
            optRecompile,
            optPreMaskingScript,
            optPostMaskingScript,
            { name: "--column-source", args: { name: "json" } },
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
          name: "update-masking-policy-update-column-source-sdm-details",
          description:
            "Updates one or more attributes of the specified masking policy",
          options: [
            optMaskingPolicyId,
            {
              name: "--column-source-sensitive-data-model-id",
              description:
                "The OCID of the sensitive data model to be associated as the column source with the masking policy",
              args: { name: "column-source-sensitive-data-model-id" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription2,
            optIsDropTempTablesEnabled,
            optIsRedoLoggingEnabled,
            optIsRefreshStatsEnabled,
            optParallelDegree,
            optRecompile,
            optPreMaskingScript,
            optPostMaskingScript,
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
          name: "update-masking-policy-update-column-source-target-details",
          description:
            "Updates one or more attributes of the specified masking policy",
          options: [
            optMaskingPolicyId,
            {
              name: "--column-source-target-id",
              description:
                "The OCID of the target database to be associated as the column source with the masking policy",
              args: { name: "column-source-target-id" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription2,
            optIsDropTempTablesEnabled,
            optIsRedoLoggingEnabled,
            optIsRefreshStatsEnabled,
            optParallelDegree,
            optRecompile,
            optPreMaskingScript,
            optPostMaskingScript,
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
          name: "upload",
          description:
            "Uploads a masking policy file (also called template) to update the specified masking policy",
          options: [
            {
              name: "--upload-masking-policy-details",
              description: "Details to upload a masking policy file",
              args: { name: "upload-masking-policy-details" },
              isRequired: true,
            },
            optMaskingPolicyId,
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
      name: "audit-archive-retrieval",
      description: "Represents the archive retrieve request for the audit data",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the archive retreival to the specified compartment",
          options: [
            optAuditArchiveRetrievalId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment were achieve retrieval resource would move",
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
          description: "Creates a work request to retrieve archived audit data",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the archival retrieval",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target associated with the archive retrieval",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--start-date",
              description:
                "Start month of the archive retrieval, in the format defined by RFC3339",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--end-date",
              description:
                "End month of the archive retrieval, in the format defined by RFC3339",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the archive retrieval",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the archive retrieval",
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
            "To unload retrieved archive data, call the operation ListAuditArchiveRetrieval first",
          options: [
            optAuditArchiveRetrievalId,
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
          description: "Gets the details of the specified archive retreival",
          options: [optAuditArchiveRetrievalId, optIfMatch, optFromJson],
        },
        {
          name: "list",
          description: "Returns the list of audit archive retrieval",
          options: [
            optCompartmentId,
            optDisplayName,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--audit-archive-retrieval-id",
              description: "OCID of the archive retrieval",
              args: { name: "audit-archive-retrieval-id" },
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target associated with the archive retrieval",
              args: { name: "target-id" },
            },
            optTargetDatabaseGroupId,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that matches the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--time-of-expiry",
              description:
                "The date time when retrieved archive data will be deleted from Data Safe and unloaded back into archival",
              args: { name: "datetime" },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the audit archive retrieval",
          options: [
            optAuditArchiveRetrievalId,
            {
              name: "--display-name",
              description: "The display name of the archive retrieval",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the archive retrieval",
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
      name: "discovery-job",
      description: "A data discovery job",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified discovery job and its dependent resources into a different compartment",
          options: [
            optDiscoveryJobId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the discovery job should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Performs incremental data discovery for the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the discovery job resource should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--discovery-type",
              description: "The type of the discovery job",
              args: { name: "discovery-type" },
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the discovery job",
              args: { name: "display-name" },
            },
            {
              name: "--schemas-for-discovery",
              description: "The schemas to be scanned by the discovery job",
              args: { name: "json" },
            },
            optTablesForDiscovery,
            {
              name: "--sensitive-type-ids-for-discovery",
              description:
                "The OCIDs of the sensitive types to be used by the discovery job",
              args: { name: "json" },
            },
            {
              name: "--sensitive-type-group-ids-for-discovery",
              description:
                "The OCIDs of the sensitive type groups to be used by the discovery job",
              args: { name: "json" },
            },
            {
              name: "--is-sample-data-collection-enabled",
              description:
                "Indicates if the discovery job should collect and store sample data values for the discovered columns",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-app-defined-relation-discovery-enabled",
              description:
                "Indicates if the discovery job should identify potential application-level",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-include-all-schemas",
              description:
                "Indicates if all the schemas should be scanned by the discovery job",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-include-all-sensitive-types",
              description:
                "Indicates if all the existing sensitive types should be used by the discovery job",
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
          description: "Deletes the specified discovery job",
          options: [
            optDiscoveryJobId,
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
          description: "Gets the details of the specified discovery job",
          options: [optDiscoveryJobId, optFromJson],
        },
        {
          name: "list-discovery-job-results",
          description:
            "Gets a list of discovery results based on the specified query parameters",
          options: [
            optDiscoveryJobId,
            {
              name: "--discovery-type",
              description:
                "A filter to return only the resources that match the specified discovery type",
              args: { suggestions: ["ALL", "NEW", "MODIFIED", "DELETED"] },
            },
            {
              name: "--planned-action",
              description:
                "A filter to return only the resources that match the specified planned action",
              args: { suggestions: ["NONE", "ACCEPT", "INVALIDATE", "REJECT"] },
            },
            {
              name: "--is-result-applied",
              description:
                "A filter to return the discovery result resources based on the value of their isResultApplied attribute",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSchemaName,
            optObjectName,
            optColumnName,
            optSortOrder,
            {
              name: "--confidence-level",
              description:
                "A filter to return the discovery job results with the specified confidence level",
              args: { suggestions: ["NONE", "HIGH", "MEDIUM", "LOW"] },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "discoveryType",
                  "timeFinished",
                  "schemaName",
                  "objectName",
                  "columnName",
                  "plannedAction",
                  "confidenceLevel",
                ],
              },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of incremental discovery jobs based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            {
              name: "--discovery-job-id",
              description:
                "A filter to return only the resources that match the specified discovery job OCID",
              args: { name: "discovery-job-id" },
            },
            optTargetId,
            optLifecycleState,
            optSensitiveDataModelId2,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeStarted", "displayName"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch-discovery-job-results",
          description: "Patches one or more discovery results",
          options: [
            optDiscoveryJobId,
            optItems,
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
      name: "unified-audit-policy",
      description:
        "Resource represents a single unified audit policy on the target database",
      subcommands: [
        {
          name: "bulk-create",
          description: "Bulk create unified audit policies",
          options: [
            {
              name: "--security-policy-id",
              description:
                "The OCID of the security policy corresponding to the unified audit policy",
              args: { name: "security-policy-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "The OCID of the target database",
              args: { name: "target-id" },
              isRequired: true,
            },
            optCompartmentId3,
            {
              name: "--unified-audit-policy-definition-ids",
              description: "The list of unified audit policy definition ocids",
              args: { name: "json" },
            },
            {
              name: "--policy-names",
              description:
                "The list of unified audit policy names to be imported",
              args: { name: "json" },
            },
            {
              name: "--should-preserve-casing",
              description:
                "Indicates whether the casing of the policy names provided in the request payload should be preserved during",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the specified Unified Audit policy and its dependent resources into a different compartment",
          options: [
            optUnifiedAuditPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the unified audit policy",
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
          description: "Creates the specified unified audit policy",
          options: [
            {
              name: "--security-policy-id",
              description:
                "The OCID of the security policy corresponding to the unified audit policy",
              args: { name: "security-policy-id" },
              isRequired: true,
            },
            {
              name: "--unified-audit-policy-definition-id",
              description:
                "The OCID of the associated unified audit policy definition",
              args: { name: "unified-audit-policy-definition-id" },
              isRequired: true,
            },
            optCompartmentId3,
            {
              name: "--status",
              description:
                "Indicates whether the unified audit policy has been enabled or disabled",
              args: { name: "status" },
              isRequired: true,
            },
            {
              name: "--conditions",
              description: "Lists the audit policy provisioning conditions",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The display name of the unified audit policy in Data Safe",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "The description of the unified audit policy in Data Safe",
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
          description: "Deletes the Unified Audit policy resource",
          options: [
            optUnifiedAuditPolicyId,
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
          description: "Gets a Unified Audit policy by identifier",
          options: [optUnifiedAuditPolicyId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the Unified Audit policy",
          options: [
            optUnifiedAuditPolicyId,
            {
              name: "--display-name",
              description:
                "The display name of the unified audit policy in Data Safe",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "The description of the unified audit policy in Data Safe",
              args: { name: "description" },
            },
            {
              name: "--status",
              description:
                "Indicates whether the policy has been enabled or disabled",
              args: { name: "status" },
            },
            {
              name: "--conditions",
              description: "Lists the audit policy provisioning conditions",
              args: { name: "json" },
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
      name: "database-security-config",
      description:
        "Database Security Configurations resource represents the target database configurations",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified database security configuration and its dependent resources into a different compartment",
          options: [
            optDatabaseSecurityConfigId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the database security config",
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
          name: "get",
          description: "Gets a database security configuration by identifier",
          options: [optDatabaseSecurityConfigId, optFromJson],
        },
        {
          name: "refresh",
          description:
            "Refreshes the specified database security configuration",
          options: [
            optDatabaseSecurityConfigId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the database security configuration",
          options: [
            optDatabaseSecurityConfigId,
            {
              name: "--display-name",
              description: "The display name of the database security config",
              args: { name: "display-name" },
            },
            optDescription5,
            { name: "--sql-firewall-config", args: { name: "json" } },
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
          name: "list",
          description:
            "Retrieves a list of all database security configurations in Data Safe",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "The current state of the database security configuration",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            {
              name: "--database-security-config-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the database security",
              args: { name: "database-security-config-id" },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optTargetId,
            optTargetDatabaseGroupId,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "masking-column",
      description:
        "A masking column is a resource corresponding to a database column that you want to mask",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new masking column in the specified masking policy",
          options: [
            {
              name: "--schema-name",
              description:
                "The name of the schema that contains the database column",
              args: { name: "schema-name" },
              isRequired: true,
            },
            {
              name: "--object-name",
              description:
                "The name of the object (table or editioning view) that contains the database column",
              args: { name: "object-name" },
              isRequired: true,
            },
            {
              name: "--column-name",
              description: "The name of the database column",
              args: { name: "column-name" },
              isRequired: true,
            },
            optMaskingPolicyId,
            {
              name: "--object-type",
              description:
                "The type of the object that contains the database column",
              args: { suggestions: ["TABLE", "EDITIONING_VIEW"] },
            },
            {
              name: "--masking-column-group",
              description: "The group of the masking column",
              args: { name: "masking-column-group" },
            },
            {
              name: "--sensitive-type-id",
              description:
                "The OCID of the sensitive type to be associated with the masking column",
              args: { name: "sensitive-type-id" },
            },
            {
              name: "--is-masking-enabled",
              description:
                "Indicates whether data masking is enabled for the masking column",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--masking-formats",
              description:
                "The masking formats to be assigned to the masking column",
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
          description: "Deletes the specified masking column",
          options: [
            optMaskingColumnKey,
            optMaskingPolicyId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get-compatible-formats-for-data-types",
          description:
            "Gets a list of basic masking formats compatible with the supported data types",
          options: [optLimit, optPage, optFromJson],
        },
        {
          name: "get-compatible-formats-for-sensitive-types",
          description:
            "Gets a list of library masking formats compatible with the existing sensitive types",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified masking column",
          options: [optMaskingPolicyId, optMaskingColumnKey, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of masking columns present in the specified masking policy and based on the specified query",
          options: [
            optMaskingPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "schemaName",
                  "objectName",
                  "columnName",
                  "dataType",
                ],
              },
            },
            {
              name: "--masking-column-lifecycle-state",
              description:
                "A filter to return only the resources that match the specified lifecycle states",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
            },
            {
              name: "--data-type",
              description:
                "A filter to return only resources that match the specified data types",
              args: { suggestions: ["CHARACTER", "DATE", "LOB", "NUMERIC"] },
              isRepeatable: true,
            },
            optSchemaName,
            optObjectName,
            optColumnName,
            optObjectType,
            {
              name: "--masking-column-group",
              description:
                "A filter to return only the resources that match the specified masking column group",
              args: { name: "masking-column-group" },
              isRepeatable: true,
            },
            optSensitiveTypeId,
            {
              name: "--is-masking-enabled",
              description:
                "A filter to return the masking column resources based on the value of their isMaskingEnabled attribute",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-seed-required",
              description:
                "A filter to return masking columns based on whether the assigned masking formats need a seed value",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optTimeUpdatedGreaterThanOrEqualTo,
            optTimeUpdatedLessThan,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Patches one or more columns in the specified masking policy",
          options: [
            optMaskingPolicyId,
            optItems,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified masking column",
          options: [
            optMaskingColumnKey,
            optMaskingPolicyId,
            {
              name: "--object-type",
              description:
                "The type of the object that contains the database column",
              args: { suggestions: ["TABLE", "EDITIONING_VIEW"] },
            },
            {
              name: "--masking-column-group",
              description: "The group of the masking column",
              args: { name: "masking-column-group" },
            },
            {
              name: "--sensitive-type-id",
              description:
                "The OCID of the sensitive type to be associated with the masking column",
              args: { name: "sensitive-type-id" },
            },
            {
              name: "--is-masking-enabled",
              description:
                "Indicates whether data masking is enabled for the masking column",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--masking-formats",
              description:
                "The masking formats to be assigned to the masking column",
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
      name: "report",
      description: "The description of the report",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            optReportId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a report by identifier",
          options: [optReportId, optFromJson],
        },
        {
          name: "get-report-content",
          description:
            "Downloads the specified report in the form of .xls or .pdf",
          options: [optReportId, optFile, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified report",
          options: [
            optReportId,
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
      name: "report-summary",
      description: "Description of report",
      subcommands: [
        {
          name: "list-reports",
          description: "Gets a list of all the reports in the compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--display-name",
              description: "The name of the report definition to query",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeGenerated", "displayName"] },
            },
            {
              name: "--mime-type",
              description:
                "An optional filter to return only resources that match the specified mime type",
              args: { suggestions: ["PDF", "XLS", "JSON"] },
            },
            {
              name: "--report-definition-id",
              description:
                "The ID of the report definition to filter the list of reports",
              args: { name: "report-definition-id" },
            },
            {
              name: "--time-generated-greater-than-or-equal-to",
              description:
                "A filter to return only the resources that were generated after the specified date and time",
              args: { name: "datetime" },
            },
            {
              name: "--time-generated-less-than",
              description:
                "Search for resources that were generated before a specific date",
              args: { name: "datetime" },
            },
            {
              name: "--lifecycle-state",
              description:
                "An optional filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: ["UPDATING", "ACTIVE", "CREATING", "FAILED"],
              },
            },
            {
              name: "--type",
              description:
                "An optional filter to return only resources that match the specified type",
              args: { suggestions: ["GENERATED", "SCHEDULED"] },
            },
            {
              name: "--data-source",
              description:
                "Specifies the name of a resource that provides data for the report",
              args: {
                suggestions: [
                  "EVENTS",
                  "ALERTS",
                  "SECURITY_ASSESSMENT",
                  "CRYPTO_ASSESSMENT",
                  "VIOLATIONS",
                  "ALLOWED_SQL",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "target-alert-policy-association-summary",
      description: "A summary of target to alert policy association",
      subcommands: [
        {
          name: "list-target-alert-policy-associations",
          description: "Gets a list of all target-alert policy associations",
          options: [
            optCompartmentId,
            {
              name: "--target-alert-policy-association-id",
              description:
                "A filter to return only items related to a specific target-alert policy association ID",
              args: { name: "target-alert-policy-association-id" },
            },
            {
              name: "--alert-policy-id",
              description: "A filter to return policy by it's OCID",
              args: { name: "alert-policy-id" },
            },
            optTargetId,
            {
              name: "--lifecycle-state",
              description:
                "An optional filter to return only alert policies that have the given life-cycle state",
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
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["DISPLAYNAME", "TIMECREATED", "TIMEUPDATED"],
              },
            },
            {
              name: "--target-type",
              description:
                "A optional filter to return only resources that belong to the specified alert policy association type",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subsetting-rule-processing-chain-object-summary",
      description:
        "Summary of a subsetting schema relation processed while extracting rows for processing a subsetting rule",
      subcommands: [
        {
          name: "list-subsetting-rule-processing-chain-objects",
          description:
            "Gets a list of objects of processing chain based on the specified query parameters generated for a subsetting",
          options: [
            optSubsettingPolicyId,
            optSubsettingRuleKey,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["key"] },
            },
            {
              name: "--is-enabled-for-processing",
              description:
                "A filter to return the processing chain objects which are enabled for processing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update-processing-chain-object",
          description:
            "Updates one or more attributes of the specified processing chain object",
          options: [
            {
              name: "--processing-chain-object-key",
              description:
                "The unique key that identifies the processing chain object",
              args: { name: "processing-chain-object-key" },
              isRequired: true,
            },
            optSubsettingRuleKey,
            optSubsettingPolicyId,
            {
              name: "--is-enabled-for-processing",
              description:
                "Indicates if this object/edge is enabled for processing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
      name: "database-view-access-entry",
      description:
        "A DatabaseViewAccessEntry object is a resource corresponding to a row in view authorization report",
      subcommands: [
        {
          name: "get",
          description: "Gets a database view access object by identifier",
          options: [
            optSecurityPolicyReportId,
            {
              name: "--database-view-access-entry-key",
              description:
                "The unique key that identifies the view access object",
              args: { name: "database-view-access-entry-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sensitive-type",
      description:
        "A sensitive type defines a particular type or class of sensitive data",
      subcommands: [
        {
          name: "bulk-create",
          description:
            "Uploads a sensitive types xml file (also called template) to create new sensitive types",
          options: [
            {
              name: "--bulk-create-sensitive-types-details",
              description:
                "Details to upload a sensitive types file and create all",
              args: { name: "bulk-create-sensitive-types-details" },
              isRequired: true,
            },
            {
              name: "--opc-compartment-id",
              description:
                "A header param to create bulk resources in the specified compartment OCID",
              args: { name: "opc-compartment-id" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the specified sensitive type into a different compartment",
          options: [
            optSensitiveTypeId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the sensitive type should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new sensitive type, which can be a basic sensitive type with regular expressions or a sensitive",
          options: [
            {
              name: "--entity-type",
              description: "The entity type",
              args: { suggestions: ["SENSITIVE_TYPE", "SENSITIVE_CATEGORY"] },
              isRequired: true,
            },
            optCompartmentId7,
            optDisplayName4,
            optShortName,
            optDescription3,
            optParentCategoryId,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-sensitive-type-create-sensitive-category-details",
          description:
            "Creates a new sensitive type, which can be a basic sensitive type with regular expressions or a sensitive",
          options: [
            optCompartmentId7,
            optDisplayName4,
            optShortName,
            optDescription3,
            optParentCategoryId,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-sensitive-type-create-sensitive-type-pattern-details",
          description:
            "Creates a new sensitive type, which can be a basic sensitive type with regular expressions or a sensitive",
          options: [
            optCompartmentId7,
            optDisplayName4,
            optShortName,
            optDescription3,
            optParentCategoryId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--name-pattern",
              description:
                "A regular expression to be used by data discovery for matching column names",
              args: { name: "name-pattern" },
            },
            {
              name: "--comment-pattern",
              description:
                "A regular expression to be used by data discovery for matching column comments",
              args: { name: "comment-pattern" },
            },
            {
              name: "--data-pattern",
              description:
                "A regular expression to be used by data discovery for matching column data values",
              args: { name: "data-pattern" },
            },
            {
              name: "--search-type",
              description:
                "The search type indicating how the column name, comment and data patterns should be used by data discovery",
              args: { name: "search-type" },
            },
            {
              name: "--default-masking-format-id",
              description:
                "The OCID of the library masking format that should be used to mask the sensitive columns associated with",
              args: { name: "default-masking-format-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified sensitive type",
          options: [
            optSensitiveTypeId2,
            optIfMatch,
            optForce2,
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
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified sensitive type",
          options: [optSensitiveTypeId2, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of sensitive types based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optSensitiveTypeId,
            {
              name: "--sensitive-type-source",
              description:
                "A filter to return the sensitive type resources based on the value of their source attribute",
              args: { suggestions: ["ORACLE", "USER"] },
            },
            {
              name: "--entity-type",
              description:
                "A filter to return the sensitive type resources based on the value of their entityType attribute",
              args: { suggestions: ["SENSITIVE_TYPE", "SENSITIVE_CATEGORY"] },
            },
            {
              name: "--parent-category-id",
              description:
                "A filter to return only the sensitive types that are children of the sensitive category identified by",
              args: { name: "parent-category-id" },
            },
            {
              name: "--default-masking-format-id",
              description:
                "A filter to return only the sensitive types that have the default masking format identified by the specified",
              args: { name: "default-masking-format-id" },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optSortOrder,
            optSortBy3,
            optLimit,
            optPage,
            optLifecycleState,
            {
              name: "--is-common",
              description:
                "A filter to return only the common sensitive type resources",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified sensitive type",
          options: [
            optSensitiveTypeId2,
            {
              name: "--entity-type",
              description: "The entity type",
              args: { suggestions: ["SENSITIVE_TYPE", "SENSITIVE_CATEGORY"] },
              isRequired: true,
            },
            optDisplayName4,
            optShortName,
            optDescription3,
            optParentCategoryId,
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
          name: "update-sensitive-type-update-sensitive-category-details",
          description:
            "Updates one or more attributes of the specified sensitive type",
          options: [
            optSensitiveTypeId2,
            optDisplayName4,
            optShortName,
            optDescription3,
            optParentCategoryId,
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
          name: "update-sensitive-type-update-sensitive-type-pattern-details",
          description:
            "Updates one or more attributes of the specified sensitive type",
          options: [
            optSensitiveTypeId2,
            optDisplayName4,
            optShortName,
            optDescription3,
            optParentCategoryId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--name-pattern",
              description:
                "A regular expression to be used by data discovery for matching column names",
              args: { name: "name-pattern" },
            },
            {
              name: "--comment-pattern",
              description:
                "A regular expression to be used by data discovery for matching column comments",
              args: { name: "comment-pattern" },
            },
            {
              name: "--data-pattern",
              description:
                "A regular expression to be used by data discovery for matching column data values",
              args: { name: "data-pattern" },
            },
            {
              name: "--search-type",
              description:
                "The search type indicating how the column name, comment and data patterns should be used by data discovery",
              args: { name: "search-type" },
            },
            {
              name: "--default-masking-format-id",
              description:
                "The OCID of the library masking format that should be used to mask the sensitive columns associated with",
              args: { name: "default-masking-format-id" },
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
      name: "security-assessment",
      description:
        "A security assessment that provides an overall insight into your database security posture",
      subcommands: [
        {
          name: "apply-security-assessment-template",
          description:
            "Apply the checks from the template to the specified security assessment.The security assessment provided",
          options: [
            optSecurityAssessmentId,
            {
              name: "--template-assessment-id",
              description:
                "The OCID of the template type security assessment containing the check details",
              args: { name: "template-assessment-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the specified saved security assessment or future scheduled assessments into a different compartment",
          options: [
            optSecurityAssessmentId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the security assessment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "compare",
          description: "Compares two security assessments",
          options: [
            optSecurityAssessmentId,
            {
              name: "--comparison-security-assessment-id",
              description: "The OCID of the security assessment",
              args: { name: "comparison-security-assessment-id" },
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
          name: "compare-to-template-baseline",
          description: "Compares two security assessments",
          options: [
            optSecurityAssessmentId,
            {
              name: "--comparison-security-assessment-id",
              description: "The OCID of the security assessment",
              args: { name: "comparison-security-assessment-id" },
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
            "Creates a new saved security assessment for a target database or target database group in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the security assessment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName7,
            {
              name: "--description",
              description: "Description of the security assessment",
              args: { name: "description" },
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target database or target database group on which security assessment is to be run",
              args: { name: "target-id" },
            },
            {
              name: "--target-type",
              description:
                "The type of security assessment resource whether it is individual or group resource",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            {
              name: "--type",
              description: "The type of the security assessment",
              args: {
                suggestions: [
                  "LATEST",
                  "SAVED",
                  "SAVE_SCHEDULE",
                  "COMPARTMENT",
                  "TEMPLATE",
                  "TEMPLATE_BASELINE",
                ],
              },
            },
            {
              name: "--template-assessment-id",
              description: "The OCID of the template assessment",
              args: { name: "template-assessment-id" },
            },
            {
              name: "--base-security-assessment-id",
              description: "The OCID of the security assessment",
              args: { name: "base-security-assessment-id" },
            },
            optIsAssessmentScheduled,
            {
              name: "--schedule",
              description:
                "To schedule the assessment for running periodically, specify the schedule in this attribute",
              args: { name: "schedule" },
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
            "Deletes the specified saved security assessment or schedule",
          options: [
            optSecurityAssessmentId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-security-assessment-report",
          description:
            "Downloads the report of the specified security assessment",
          options: [
            optSecurityAssessmentId,
            {
              name: "--format",
              description: "Format of the Security Assessment report",
              args: { suggestions: ["PDF", "XLS", "STIGXLS"] },
              isRequired: true,
            },
            optFile,
            {
              name: "--is-single-report",
              description:
                "Optional flag controlling the output format of a target group report: - true",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "generate-security-assessment-report",
          description:
            "Generates the report of the specified security assessment",
          options: [
            optSecurityAssessmentId,
            {
              name: "--format",
              description: "Format of the Security Assessment report",
              args: { suggestions: ["PDF", "XLS", "STIGXLS"] },
              isRequired: true,
            },
            {
              name: "--is-single-report",
              description:
                "Optional flag controlling the output format of a target group report: - true",
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
          name: "get",
          description: "Gets the details of the specified security assessment",
          options: [optSecurityAssessmentId, optFromJson],
        },
        {
          name: "get-security-assessment-comparison",
          description:
            "Gets the details of the comparison report for the security assessments submitted for comparison",
          options: [
            optSecurityAssessmentId,
            {
              name: "--comparison-security-assessment-id",
              description: "The OCID of the security assessment baseline",
              args: { name: "comparison-security-assessment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-template-baseline-comparison",
          description:
            "Gets the details of the comparison report for the security assessments submitted for comparison",
          options: [
            optSecurityAssessmentId,
            {
              name: "--comparison-security-assessment-id",
              description: "The OCID of the security assessment baseline",
              args: { name: "comparison-security-assessment-id" },
              isRequired: true,
            },
            optTargetId,
            optCategory,
            optFindingKey,
            optFromJson,
          ],
        },
        {
          name: "list-checks",
          description:
            "Lists all the security checks in the specified compartment for security assessment of type TEMPLATE",
          options: [
            optSecurityAssessmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["title", "category", "key"] },
            },
            {
              name: "--suggested-severity",
              description:
                "A filter to return only checks of a particular risk level",
              args: {
                suggestions: [
                  "HIGH",
                  "MEDIUM",
                  "LOW",
                  "EVALUATE",
                  "ADVISORY",
                  "PASS",
                  "DEFERRED",
                ],
              },
            },
            optContainsSeverity,
            optContainsReferences,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--key",
              description:
                "Each check in security assessment has an associated key (think of key as a check's name)",
              args: { name: "key" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-finding-analytics",
          description:
            "Gets a list of findings aggregated details in the specified compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--is-top-finding",
              description:
                "A filter to return only the findings that are marked as top findings",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--group-by",
              description:
                "Attribute by which the finding analytics data should be grouped",
              args: {
                suggestions: [
                  "findingKeyAndTopFindingStatus",
                  "findingKeyAndSeverity",
                  "severity",
                ],
              },
            },
            {
              name: "--top-finding-status",
              description:
                "An optional filter to return only the top finding that match the specified status",
              args: {
                suggestions: [
                  "RISK",
                  "EVALUATE",
                  "ADVISORY",
                  "PASS",
                  "DEFERRED",
                ],
              },
            },
            optSeverity,
            optFindingKey,
            optLimit,
            optPage,
            optTargetDatabaseGroupId,
            optContainsReferences,
            {
              name: "--target-ids",
              description:
                "An optional filter to return only findings that match the specified target ids",
              args: { name: "target-ids" },
              isRepeatable: true,
            },
            optCategory,
            optContainsSeverity,
            optScimQuery,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-findings",
          description:
            "Lists all the findings for the specified assessment except for type TEMPLATE",
          options: [
            optSecurityAssessmentId,
            {
              name: "--is-top-finding",
              description:
                "A filter to return only the findings that are marked as top findings",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSeverity,
            optContainsSeverity,
            optCategory,
            {
              name: "--contains-oracle-defined-severity",
              description:
                "A filter to return only findings that match the specified risk level(s)",
              args: {
                suggestions: [
                  "HIGH",
                  "MEDIUM",
                  "LOW",
                  "EVALUATE",
                  "ADVISORY",
                  "PASS",
                  "DEFERRED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the findings that match the specified lifecycle states",
              args: {
                suggestions: [
                  "ACTIVE",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
            },
            {
              name: "--references",
              description:
                "An optional filter to return only findings that match the specified reference",
              args: { suggestions: ["STIG", "CIS", "GDPR"] },
            },
            optContainsReferences,
            optLimit,
            optPage,
            optCompartmentId2,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTargetId,
            {
              name: "--target-ids",
              description:
                "An optional filter to return only findings that match the specified target ids",
              args: { name: "target-ids" },
              isRepeatable: true,
            },
            optScimQuery,
            {
              name: "--field",
              description:
                "Specifies a subset of fields to be returned in the response",
              args: {
                suggestions: [
                  "severity",
                  "findingKey",
                  "reference",
                  "targetId",
                  "isTopFinding",
                  "title",
                  "category",
                  "remarks",
                  "details",
                  "summary",
                  "isRiskModified",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["category", "findingKey", "severity"] },
            },
            optSortOrder,
            {
              name: "--finding-key",
              description:
                "Each finding in security assessment has an associated key (think of key as a finding's name)",
              args: { name: "finding-key" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-findings-change-audit-logs",
          description:
            "List all changes made by user to risk level of findings of the specified assessment",
          options: [
            optSecurityAssessmentId,
            optSeverity,
            optFindingKey,
            {
              name: "--finding-title",
              description: "The unique title that identifies the finding",
              args: { name: "finding-title" },
            },
            {
              name: "--is-risk-deferred",
              description:
                "A filter to check findings whose risks were deferred by the user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--modified-by",
              description:
                "A filter to check which user modified the risk level of the finding",
              args: { name: "modified-by" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeUpdated",
                  "modifiedBy",
                  "isRiskDeferred",
                  "timeValidUntil",
                ],
              },
            },
            {
              name: "--time-valid-until-greater-than-or-equal-to",
              description:
                "Specifying TimeValidUntilGreaterThanOrEqualToQueryParam parameter will retrieve all items for which the risk",
              args: { name: "datetime" },
            },
            {
              name: "--time-valid-until-less-than",
              description:
                "Specifying TimeValidUntilLessThanQueryParam parameter will retrieve all items for which the risk level",
              args: { name: "datetime" },
            },
            optTimeUpdatedGreaterThanOrEqualTo,
            optTimeUpdatedLessThan,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of security assessments",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            {
              name: "--type",
              description:
                "A filter to return only items that match the specified security assessment type",
              args: {
                suggestions: [
                  "LATEST",
                  "SAVED",
                  "SAVE_SCHEDULE",
                  "COMPARTMENT",
                  "TEMPLATE",
                  "TEMPLATE_BASELINE",
                ],
              },
            },
            {
              name: "--schedule-assessment-id",
              description:
                "The OCID of the security assessment of type SAVE_SCHEDULE",
              args: { name: "schedule-assessment-id" },
            },
            {
              name: "--is-schedule-assessment",
              description:
                "A filter to return only security assessments of type save schedule",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--triggered-by",
              description:
                "A filter to return only security assessments that were created by either user or system",
              args: { suggestions: ["USER", "SYSTEM"] },
            },
            optTargetId,
            optSortOrder,
            {
              name: "--is-baseline",
              description:
                "A filter to return only the security assessments that are set as a baseline",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "timeLastAssessed",
                  "timeUpdated",
                ],
              },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "SUCCEEDED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--target-type",
              description:
                "A filter to return only target database resources or target database group resources",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            optTargetDatabaseGroupId,
            optTemplateAssessmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-security-feature-analytics",
          description:
            "Gets a list of Database security feature usage aggregated details in the specified compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTargetId,
            optTargetDatabaseGroupId,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-security-features",
          description:
            "Lists the usage of Database security features for a given compartment or a target level",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTargetId,
            {
              name: "--targets-with-unified-audit",
              description:
                "A filter to return only the targets with the DB security feature - Unified Audit enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-fine-grained-audit",
              description:
                "A filter to return only the targets with the DB security feature - Fine Grained Audit enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-traditional-audit",
              description:
                "A filter to return only the targets with the DB security feature - Traditional Audit enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-database-vault",
              description:
                "A filter to return only the targets with the DB security feature - Database Vault enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-privilege-analysis",
              description:
                "A filter to return only the targets with the DB security feature - Privilege Analysis enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-tablespace-encryption",
              description:
                "A filter to return only the targets with the DB security feature - Tablespace Encryption enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-column-encryption",
              description:
                "A filter to return only the targets that enable the DB security feature - Column Encryption enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-network-encryption",
              description:
                "A filter to return only the targets with the DB security feature - Network Encryption enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-password-authentication",
              description:
                "A filter to return only the targets with the DB security feature - Password Authentication enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-global-authentication",
              description:
                "A filter to return only the targets with the DB security feature - Global Authentication enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            {
              name: "--targets-with-external-authentication",
              description:
                "A filter to return only the targets with the DB security feature - External Authentication enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED", "NONE"] },
            },
            optLimit,
            optPage,
            optTargetDatabaseGroupId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-template-analytics",
          description:
            "Gets a list of template aggregated details in the specified compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTemplateAssessmentId,
            {
              name: "--template-baseline-assessment-id",
              description:
                "The OCID of the security assessment of type TEMPLATE_BASELINE",
              args: { name: "template-baseline-assessment-id" },
            },
            {
              name: "--is-group",
              description:
                "A filter to return only the target group related information if the OCID belongs to a target group",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-compared",
              description:
                "A filter to return only the statistics where the comparison between the latest assessment and the template",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-compliant",
              description:
                "A filter to return only the statistics where the latest assessment is compliant with the template baseline",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optTargetId,
            optTargetDatabaseGroupId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-template-association-analytics",
          description:
            "Gets a list of template association details in the specified compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optTemplateAssessmentId,
            {
              name: "--template-baseline-assessment-id",
              description:
                "The OCID of the security assessment of type TEMPLATE_BASELINE",
              args: { name: "template-baseline-assessment-id" },
            },
            optTargetId,
            optTargetDatabaseGroupId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch-checks",
          description:
            "Patches one or more checks in the specified template type security assessment",
          options: [
            optSecurityAssessmentId,
            optItems,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "patch-findings",
          description:
            "Patches one or more findings in the specified template baseline type security assessment",
          options: [
            optSecurityAssessmentId,
            optItems,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "refresh",
          description:
            "Runs a security assessment, refreshes the latest assessment, and saves it for future reference",
          options: [
            optSecurityAssessmentId,
            {
              name: "--compartment-id",
              description:
                "This field is ignored when refreshing a security assessment",
              args: { name: "compartment-id" },
            },
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Remove the checks from the template to the specified security assessment.The security assessment provided",
          options: [
            optSecurityAssessmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "set-security-assessment-baseline",
          description:
            "Sets the saved security assessment as the baseline in the compartment where the specified assessment resides",
          options: [
            optSecurityAssessmentId,
            optIfMatch,
            {
              name: "--assessment-ids",
              description:
                "The list of OCIDs for the security assessments that need to be updated while setting the baseline",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unset-security-assessment-baseline",
          description:
            "Removes the baseline setting for the saved security assessment associated with the targetId passed via body",
          options: [
            optSecurityAssessmentId,
            optIfMatch,
            {
              name: "--target-ids",
              description:
                "The list of database target OCIDs for which the user intends to unset the baseline",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified security assessment",
          options: [
            optSecurityAssessmentId,
            optDisplayName7,
            {
              name: "--description",
              description: "The description of the security assessment",
              args: { name: "description" },
            },
            optIsAssessmentScheduled,
            {
              name: "--schedule",
              description:
                "This is applicable only for save schedule and latest assessment",
              args: { name: "schedule" },
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
      name: "on-prem-connector",
      description:
        "A Data Safe on-premises connector that enables Data Safe to connect to on-premises databases",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified on-premises connector into a different compartment",
          options: [
            optOnPremConnectorId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment where you want to move the on-premises connector",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new on-premises connector",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the on-premises connector",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the on-premises connector",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the on-premises connector",
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
          description: "Deletes the specified on-premises connector",
          options: [
            optOnPremConnectorId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-on-prem-connector-configuration",
          description:
            "Creates and downloads the configuration of the specified on-premises connector",
          options: [
            {
              name: "--password",
              description:
                "The password to encrypt the keys inside the wallet included as part of the configuration",
              args: { name: "password" },
              isRequired: true,
            },
            optOnPremConnectorId,
            optFile,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the specified on-premises connector",
          options: [optOnPremConnectorId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of on-premises connectors",
          options: [
            optCompartmentId,
            {
              name: "--on-prem-connector-id",
              description:
                "A filter to return only the on-premises connector that matches the specified id",
              args: { name: "on-prem-connector-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only on-premises connector resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified on-premises connector",
          options: [
            optOnPremConnectorId,
            {
              name: "--display-name",
              description: "The display name of the on-premises connector",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the on-premises connector",
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
        {
          name: "update-on-prem-connector-wallet",
          description:
            "Updates the wallet for the specified on-premises connector to a new version",
          options: [
            optOnPremConnectorId,
            {
              name: "--is-update",
              description: "Indicates whether to update or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
      name: "sql-firewall-policy",
      description:
        "The SQL Firewall policy resource contains the firewall policy metadata for a single user",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified SQL Firewall policy and its dependent resources into a different compartment",
          options: [
            optSqlFirewallPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the SQL Firewall policy",
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
          description: "Deletes the SQL Firewall policy resource",
          options: [
            optSqlFirewallPolicyId,
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
          description: "Gets a SQL Firewall policy by identifier",
          options: [optSqlFirewallPolicyId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the SQL Firewall policy",
          options: [
            optSqlFirewallPolicyId,
            {
              name: "--display-name",
              description: "The display name of the SQL Firewall policy",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the SQL Firewall policy",
              args: { name: "description" },
            },
            {
              name: "--status",
              description:
                "Specifies whether the SQL Firewall policy is enabled or disabled",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--enforcement-scope",
              description:
                "Specifies the SQL Firewall policy enforcement option",
              args: {
                suggestions: ["ENFORCE_CONTEXT", "ENFORCE_SQL", "ENFORCE_ALL"],
              },
            },
            {
              name: "--violation-action",
              description:
                "Specifies the SQL Firewall action based on detection of SQL Firewall violations",
              args: { suggestions: ["BLOCK", "OBSERVE"] },
            },
            {
              name: "--violation-audit",
              description:
                "Specifies whether a unified audit policy should be enabled for auditing the SQL Firewall policy violations",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--allowed-client-ips",
              description:
                "List of allowed ip addresses for the SQL Firewall policy",
              args: { name: "json" },
            },
            {
              name: "--allowed-client-os-usernames",
              description:
                "List of allowed operating system user names for the SQL Firewall policy",
              args: { name: "json" },
            },
            {
              name: "--allowed-client-programs",
              description:
                "List of allowed client programs for the SQL Firewall policy",
              args: { name: "json" },
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
          name: "list",
          description: "Retrieves a list of all SQL Firewall policies",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            optSecurityPolicyId,
            {
              name: "--lifecycle-state",
              description: "The current state of the SQL Firewall policy",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--sql-firewall-policy-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the SQL Firewall policy resource",
              args: { name: "sql-firewall-policy-id" },
            },
            {
              name: "--db-user-name",
              description:
                "A filter to return only items that match the specified user name",
              args: { name: "db-user-name" },
            },
            {
              name: "--violation-action",
              description:
                "An optional filter to return only resources that match the specified violation action",
              args: { suggestions: ["block", "observe"] },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subsetting-schema-collection",
      description: "A collection of subsetting schema summary objects",
      subcommands: [
        {
          name: "list-subsetting-schemas",
          description:
            "Gets a list of subsetting schemas present in the specified subsetting policy and based on the specified query",
          options: [
            optSubsettingPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy4,
            optSchemaName,
            {
              name: "--is-derived-schema",
              description: "A filter to return the schemas which are derived",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel the specified work request",
          options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description: "Gets the details of the specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of work requests",
          options: [
            optCompartmentId,
            {
              name: "--operation-type",
              description:
                "A filter to return only work requests that match the specific operation type",
              args: { name: "operation-type" },
            },
            {
              name: "--sort-by",
              description: "The field used for sorting",
              args: {
                suggestions: ["STARTTIME", "FINISHTIME", "ACCEPTEDTIME"],
              },
            },
            {
              name: "--sort-order",
              description:
                "The sorting order for the work requests, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--resource-id",
              description:
                "A filter to return only work requests that match the specified resource OCID",
              args: { name: "resource-id" },
            },
            {
              name: "--target-database-id",
              description:
                "A filter to return only work requests that are associated to the specified target database OCID",
              args: { name: "target-database-id" },
            },
            optPage,
            optLimit,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "resume",
          description: "Resume the given work request",
          options: [optWorkRequestId, optIfMatch, optFromJson],
        },
        {
          name: "suspend",
          description: "Suspend the given work request",
          options: [optWorkRequestId, optIfMatch, optFromJson],
        },
      ],
    },
    {
      name: "subsetting-schema-relation",
      description:
        "Summary of a relationship between tables in the subsetting for a subsetting policy",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified referential relation",
          options: [
            {
              name: "--subsetting-schema-relation-key",
              description:
                "The unique key that identifies the subsetting relation",
              args: { name: "subsetting-schema-relation-key" },
              isRequired: true,
            },
            optSubsettingPolicyId,
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
            "Gets the details of the specified referential relation in the subsetting policy",
          options: [
            optSubsettingPolicyId,
            {
              name: "--subsetting-schema-relation-key",
              description:
                "The unique key that identifies the subsetting relation",
              args: { name: "subsetting-schema-relation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "attribute-set",
      description: "Represents an attribute set",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves the attribute set to the specified compartment",
          options: [
            optAttributeSetId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment were attribute set resource would move",
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
          description: "Creates an attribute set",
          options: [
            {
              name: "--display-name",
              description: "The display name of the attribute set",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the attribute set",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--attribute-set-type",
              description: "The type of attribute set",
              args: { name: "attribute-set-type" },
              isRequired: true,
            },
            {
              name: "--attribute-set-values",
              description: "The list of values in an attribute set",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the attribute set",
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
          description: "Submits a work request to delete an attribute set",
          options: [
            optAttributeSetId,
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
          description: "Gets the details of the specified attribute set",
          options: [optAttributeSetId, optIfMatch, optFromJson],
        },
        {
          name: "list-associated-resources",
          description: "Returns list of all associated resources",
          options: [
            optAttributeSetId,
            optIfMatch,
            optLimit,
            optPage,
            {
              name: "--associated-resource-type",
              description:
                "A filter to return attribute set associated resources that matches the specified resource type query param",
              args: { suggestions: ["AUDIT_POLICY", "AUDIT_REPORT"] },
            },
            {
              name: "--associated-resource-id",
              description:
                "A filter to return attribute set associated resource that matches the specified associated resource id query",
              args: { name: "associated-resource-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Retrieves the list of attribute sets",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optDisplayName,
            {
              name: "--attribute-set-id",
              description:
                "A filter to return only attribute set resources that matches the specified attribute set OCID query param",
              args: { name: "attribute-set-id" },
            },
            {
              name: "--attribute-set-type",
              description:
                "A filter to return only attribute set resources that matches the specified attribute set type query param",
              args: {
                suggestions: [
                  "IP_ADDRESS",
                  "CLIENT_PROGRAM",
                  "OS_USER",
                  "DATABASE_USER",
                  "DATABASE_OBJECT",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description: "The current state of an attribute set",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "UPDATING",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            {
              name: "--is-user-defined",
              description:
                "A filter to return user defined or seeded attribute set resources that matches the specified is user defined",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--in-use",
              description:
                "A filter to return attribute set resources that are in use by other associated resources",
              args: { suggestions: ["YES", "NO"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates an attribute set",
          options: [
            optAttributeSetId,
            {
              name: "--display-name",
              description: "The display name of an attribute set",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of an attribute set",
              args: { name: "description" },
            },
            {
              name: "--attribute-set-values",
              description:
                "The list of attribute set values that will replace existing values",
              args: { name: "json" },
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
      name: "library-masking-format-summary",
      description: "Summary of a library masking format",
      subcommands: [
        {
          name: "list-library-masking-formats",
          description:
            "Gets a list of library masking formats based on the specified query parameters",
          options: [
            optCompartmentId,
            {
              name: "--library-masking-format-id",
              description:
                "A filter to return only the resources that match the specified library masking format OCID",
              args: { name: "library-masking-format-id" },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState2,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            {
              name: "--library-masking-format-source",
              description:
                "A filter to return the library masking format resources based on the value of their source attribute",
              args: { suggestions: ["ORACLE", "USER"] },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "timeCreated",
                  "timeUpdated",
                  "lifecycleState",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subsetting-schema-relation-summary",
      description:
        "Summary of a relationship between tables in the subsetting for a subsetting policy",
      subcommands: [
        {
          name: "create-subsetting-schema-relation",
          description: "Details to create a new referential relation",
          options: [
            {
              name: "--parent-schema-name",
              description:
                "The database schema that contains the parent subsetting table",
              args: { name: "parent-schema-name" },
              isRequired: true,
            },
            {
              name: "--parent-object-name",
              description: "The name of the parent subsetting table",
              args: { name: "parent-object-name" },
              isRequired: true,
            },
            {
              name: "--parent-columns",
              description:
                "Unique identifiers identifying the parents columns in the relation",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--child-schema-name",
              description:
                "The database schema that contains the child subsetting table",
              args: { name: "child-schema-name" },
              isRequired: true,
            },
            {
              name: "--child-object-name",
              description: "The name of the child subsetting table",
              args: { name: "child-object-name" },
              isRequired: true,
            },
            {
              name: "--child-columns",
              description:
                "Unique identifiers identifying the child columns in the relation",
              args: { name: "json" },
              isRequired: true,
            },
            optSubsettingPolicyId,
            {
              name: "--parent-object-key",
              description:
                "The key that identifies the parent subsetting table in this relation",
              args: { name: "parent-object-key" },
            },
            {
              name: "--child-object-key",
              description:
                "The key that identifies the child subsetting table in this relation",
              args: { name: "child-object-key" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-subsetting-schema-relations",
          description:
            "Gets a list of referential relations present in the specified subsetting policy schemas based on",
          options: [
            optSubsettingPolicyId,
            optSchemaName,
            optObjectName,
            {
              name: "--relation-type",
              description:
                "A filter to return columns based on their relationship with their parent columns",
              args: { suggestions: ["APP_DEFINED", "DB_DEFINED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["relationType", "schemaName", "objectName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "alert-summary",
      description: "Summary of a Data Safe Alert",
      subcommands: [
        {
          name: "list-alert-analytics",
          description: "Returns the aggregation details of the alerts",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optLimit,
            optPage,
            optIfMatch,
            optTimeStarted,
            optTimeEnded,
            optQueryTimeZone,
            optSortOrder,
            optSortBy2,
            optAccessLevel,
            optScimQuery,
            {
              name: "--summary-field",
              description:
                "Specifies a subset of summarized fields to be returned in the response",
              args: {
                suggestions: [
                  "alertType",
                  "targetIds",
                  "targetNames",
                  "alertSeverity",
                  "alertStatus",
                  "timeCreated",
                  "policyId",
                  "open",
                  "closed",
                  "critical",
                  "high",
                  "medium",
                  "low",
                  "alertcount",
                  "alertPolicyRuleKey",
                  "alertPolicyRuleName",
                  "throttled",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--group-by",
              description:
                "A groupBy can only be used in combination with summaryField parameter",
              args: {
                suggestions: [
                  "alertType",
                  "targetIds",
                  "targetNames",
                  "alertSeverity",
                  "alertStatus",
                  "timeCreated",
                  "policyId",
                  "alertPolicyRuleKey",
                  "alertPolicyRuleName",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-alerts",
          description: "Gets a list of all alerts",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "A filter to return alert by it's OCID",
              args: { name: "id" },
            },
            optCompartmentIdInSubtree,
            optLimit,
            optPage,
            optAccessLevel,
            optSortOrder,
            optSortBy2,
            optScimQuery,
            {
              name: "--field",
              description:
                "Specifies a subset of fields to be returned in the response",
              args: {
                suggestions: [
                  "id",
                  "displayName",
                  "alertType",
                  "targetIds",
                  "targetNames",
                  "severity",
                  "status",
                  "operationTime",
                  "operation",
                  "operationStatus",
                  "timeCreated",
                  "timeUpdated",
                  "policyId",
                  "lifecycleState",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sensitive-types-export",
      description:
        "The resource represents sensitive types to be exported in Data Safe",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified sensitive types export into a different compartment",
          options: [
            optSensitiveTypesExportId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the sensitive types export",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Generates a downloadable file corresponding to the specified list of sensitive types",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the sensitive types export should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the sensitive types export",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the sensitive types export",
              args: { name: "description" },
            },
            {
              name: "--sensitive-type-ids-for-export",
              description:
                "The OCIDs of the sensitive types used to create sensitive types export",
              args: { name: "json" },
            },
            {
              name: "--is-include-all-sensitive-types",
              description:
                "Indicates if all the existing user-defined sensitive types are used for export",
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
          description: "Deletes the specified sensitive types export",
          options: [
            optSensitiveTypesExportId,
            optIfMatch,
            optForce2,
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
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download",
          description:
            "Downloads an already-generated file corresponding to the specified sensitive types export",
          options: [
            optSensitiveTypesExportId,
            optFile,
            {
              name: "--data-model-format",
              description: "The format of the sensitive types export file",
              args: { suggestions: ["XML"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the specified sensitive types export by identifier",
          options: [optSensitiveTypesExportId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified sensitive types export",
          options: [
            optSensitiveTypesExportId,
            {
              name: "--display-name",
              description: "The display name of the sensitive types export",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the sensitive types export",
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
      name: "discovery-job-result",
      description: "A discovery job result representing a sensitive column",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified discovery result",
          options: [
            optDiscoveryJobId,
            {
              name: "--result-key",
              description:
                "The unique key that identifies the discovery result",
              args: { name: "result-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified discovery result",
          options: [
            optDiscoveryJobId,
            {
              name: "--result-key",
              description:
                "The unique key that identifies the discovery result",
              args: { name: "result-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "report-definition",
      description: "Description of report definition",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            optReportDefinitionId,
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
            "Creates a new report definition with parameters specified in the body",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the report definition",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Specifies the name of the report definition",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--parent-id",
              description: "The OCID of the parent report definition",
              args: { name: "parent-id" },
              isRequired: true,
            },
            {
              name: "--column-info",
              description:
                "An array of column objects in the order (left to right) displayed in the report",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--column-filters",
              description: "An array of column filter objects",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--column-sortings",
              description: "An array of column sorting objects",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--summary",
              description:
                "An array of report summary objects in the order (left to right) displayed in the report",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the report definition",
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
          description: "Deletes the specified report definition",
          options: [
            optReportDefinitionId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-report",
          description:
            "Generates a .xls or .pdf report based on parameters and report definition",
          options: [
            optReportDefinitionId,
            {
              name: "--display-name",
              description: "The name of the report to be generated",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId4,
            {
              name: "--mime-type",
              description:
                "Specifies the format of report to be .xls or .pdf or .json",
              args: { suggestions: ["PDF", "XLS", "JSON"] },
              isRequired: true,
            },
            {
              name: "--target-ids",
              description: "Array of database target OCIDs",
              args: { name: "json" },
            },
            {
              name: "--target-group-ids",
              description: "Array of target group OCIDs",
              args: { name: "json" },
            },
            {
              name: "--description",
              description: "The description of the report to be generated",
              args: { name: "description" },
            },
            {
              name: "--time-less-than",
              description:
                "Specifies the time until which the data needs to be reported",
              args: { name: "datetime" },
            },
            {
              name: "--time-greater-than",
              description:
                "Specifies the time after which the data needs to be reported",
              args: { name: "datetime" },
            },
            {
              name: "--row-limit",
              description:
                "Specifies the limit on the number of rows in the report",
              args: { name: "integer" },
            },
            {
              name: "--is-pagination-enabled",
              description:
                "Indicates if the reports being generated should be pagination enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optScimQuery,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of report definition specified by the identifier",
          options: [optReportDefinitionId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of report definitions",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--display-name",
              description: "The name of the report definition to query",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used for sorting",
              args: {
                suggestions: ["TIMECREATED", "DISPLAYNAME", "DISPLAYORDER"],
              },
            },
            {
              name: "--is-seeded",
              description:
                "A boolean flag indicating to list seeded report definitions",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--data-source",
              description:
                "Specifies the name of a resource that provides data for the report",
              args: {
                suggestions: [
                  "EVENTS",
                  "ALERTS",
                  "SECURITY_ASSESSMENT",
                  "CRYPTO_ASSESSMENT",
                  "VIOLATIONS",
                  "ALLOWED_SQL",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "An optional filter to return only resources that match the specified lifecycle state",
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
            {
              name: "--category",
              description:
                "An optional filter to return only resources that match the specified category",
              args: {
                suggestions: [
                  "CUSTOM_REPORTS",
                  "SUMMARY",
                  "ACTIVITY_AUDITING",
                  "CRYPTO_ASSESSMENT",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Deletes the schedule of a .xls or .pdf report",
          options: [
            optReportDefinitionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "schedule-report",
          description:
            "Schedules a .xls or .pdf report based on parameters and report definition",
          options: [
            optReportDefinitionId,
            {
              name: "--schedule",
              description:
                "The schedule to generate the report periodically in the specified format",
              args: { name: "schedule" },
              isRequired: true,
            },
            {
              name: "--mime-type",
              description:
                "Specifies if the report will be in .xls or .pdf or .json format",
              args: { suggestions: ["PDF", "XLS", "JSON"] },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the resource should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--report-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the report to be scheduled",
              args: { name: "display-name" },
            },
            {
              name: "--is-pagination-enabled",
              description:
                "Indicates if the reports being generated should be paginated",
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
          name: "schedule-report-schedule-audit-report-details",
          description:
            "Schedules a .xls or .pdf report based on parameters and report definition",
          options: [
            optReportDefinitionId,
            {
              name: "--schedule",
              description:
                "The schedule to generate the report periodically in the specified format",
              args: { name: "schedule" },
              isRequired: true,
            },
            {
              name: "--mime-type",
              description:
                "Specifies if the report will be in .xls or .pdf or .json format",
              args: { suggestions: ["PDF", "XLS", "JSON"] },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the resource should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--report-details-record-time-span",
              description:
                "The time span of records in report to be scheduled. <period-value><period> Allowed period strings",
              args: { name: "report-details-record-time-span" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the report to be scheduled",
              args: { name: "display-name" },
            },
            {
              name: "--is-pagination-enabled",
              description:
                "Indicates if the reports being generated should be paginated",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            {
              name: "--report-details-row-limit",
              description:
                "Specifies the limit on the number of rows in the report",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified report definition",
          options: [
            optReportDefinitionId,
            {
              name: "--display-name",
              description: "Specifies the name of the report definition",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--column-info",
              description:
                "An array of column objects in the order (left to right) displayed in the report",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--column-filters",
              description: "An array of column filter objects",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--column-sortings",
              description: "An array of column sorting objects",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--summary",
              description:
                "An array of report summary objects in the order (left to right) displayed in the report",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the report definition",
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
      name: "subsetting-error-summary",
      description: "Summary of a subsetting error",
      subcommands: [
        {
          name: "list-subsetting-errors",
          description:
            "Gets a list of subsetting errors in a subsetting run based on the specified query parameters",
          options: [
            optSubsettingReportId,
            {
              name: "--step-name",
              description:
                "A filter to return only subsetting errors that match the specified step name",
              args: {
                suggestions: [
                  "VALIDATE",
                  "IDENTIFY_ROWS_FOR_SUBSET",
                  "GENERATE_SCRIPT",
                  "EXECUTE_SUBSETTING",
                  "PRE_SUBSETTING",
                  "POST_SUBSETTING",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["stepName", "timeCreated"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-policy-report-collection",
      description: "Collection of security policy report summary",
      subcommands: [
        {
          name: "list-security-policy-reports",
          description:
            "Retrieves a list of all security policy reports in Data Safe",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the security policy report",
              args: {
                suggestions: [
                  "CREATING",
                  "SUCCEEDED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--security-policy-report-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the security policy report",
              args: { name: "security-policy-report-id" },
            },
            optTargetId,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subsetting-policy-health-report",
      description: "The subsetting policy health report",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified subsetting policy health report and its dependent resources into a different compartment",
          options: [
            optSubsettingPolicyHealthReportId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the subsetting policy should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified subsetting policy health report",
          options: [
            optSubsettingPolicyHealthReportId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-subsetting-health-report",
          description: "Performs health check on the subsetting policy",
          options: [
            optSubsettingPolicyId,
            optTargetCredentials,
            {
              name: "--check-type",
              description: "The type of health check",
              args: { suggestions: ["ALL", "TABLESPACE_CHECK"] },
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target database to use for the subsetting policy health check",
              args: { name: "target-id" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the health report resource should be created",
              args: { name: "compartment-id" },
            },
            {
              name: "--tablespace",
              description:
                "The tablespace that should be used to estimate space",
              args: { name: "tablespace" },
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
          name: "get",
          description:
            "Gets the details of the specified subsetting policy health report",
          options: [optSubsettingPolicyHealthReportId, optFromJson],
        },
        {
          name: "list-subsetting-policy-health-report-logs",
          description:
            "Gets a list of errors and warnings from a subsetting policy health check",
          options: [
            optSubsettingPolicyHealthReportId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["messageType"] },
            },
            {
              name: "--message-type",
              description:
                "A filter to return only the resources that match the specified log message type",
              args: { suggestions: ["PASS", "WARNING", "ERROR"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of subsetting policy health reports based on the specified query parameters",
          options: [
            optCompartmentId,
            {
              name: "--subsetting-policy-health-report-id",
              description:
                "A filter to return only the resources that match the specified subsetting policy health report OCID",
              args: { name: "subsetting-policy-health-report-id" },
            },
            optLimit,
            optPage,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--sort-by",
              description: "Sort",
              args: { suggestions: ["displayName", "timeCreated"] },
            },
            optSortOrder,
            optDisplayName,
            optTargetId,
            optSubsettingPolicyId2,
            optLifecycleState2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "finding",
      description: "The particular finding reported by the security assessment",
      subcommands: [
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified finding",
          options: [
            optSecurityAssessmentId,
            {
              name: "--finding-key",
              description: "The unique key that identifies the finding",
              args: { name: "finding-key" },
              isRequired: true,
            },
            {
              name: "--severity",
              description:
                "The severity of the finding as defined or changed by the user",
              args: { name: "severity" },
            },
            {
              name: "--justification",
              description:
                "User provided reason for accepting or modifying this finding if they choose to do so",
              args: { name: "justification" },
            },
            {
              name: "--time-valid-until",
              description:
                "The time until which the change in severity (deferred / modified) got the given finding is valid",
              args: { name: "datetime" },
            },
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
      name: "target-database",
      description: "The details of the Data Safe target database",
      subcommands: [
        {
          name: "activate",
          description:
            "Reactivates a previously deactivated Data Safe target database",
          options: [
            optTargetDatabaseId,
            optCredentials,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the Data Safe target database to the specified compartment",
          options: [
            optTargetDatabaseId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment you want to move the Data Safe target database to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Registers the specified database with Data Safe and creates a Data Safe target database in the Data Safe",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the Data Safe target database",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--database-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The display name of the target database in Data Safe",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "The description of the target database in Data Safe",
              args: { name: "description" },
            },
            optCredentials,
            optTlsConfig,
            optConnectionOption,
            {
              name: "--peer-target-database-details",
              description:
                "The details of the database to be registered as a peer target database",
              args: { name: "json" },
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
          name: "deactivate",
          description: "Deactivates a target database in Data Safe",
          options: [
            optTargetDatabaseId,
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
            "Deregisters the specified database from Data Safe and removes the target database from the Data Safe Console",
          options: [
            optTargetDatabaseId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-privilege-script",
          description:
            "Downloads the privilege script to grant/revoke required roles from the Data Safe account on the target",
          options: [optFile, optIfMatch, optFromJson],
        },
        {
          name: "get",
          description:
            "Returns the details of the specified Data Safe target database",
          options: [optTargetDatabaseId, optFromJson],
        },
        {
          name: "list-columns",
          description: "Returns a list of column metadata objects",
          options: [
            optTargetDatabaseId,
            optLimit,
            optPage,
            optSchemaName,
            {
              name: "--table-name",
              description:
                "A filter to return only items related to specific table name",
              args: { name: "table-name" },
              isRepeatable: true,
            },
            optColumnName,
            {
              name: "--datatype",
              description:
                "A filter to return only items related to specific datatype",
              args: { name: "datatype" },
              isRepeatable: true,
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used for sorting",
              args: {
                suggestions: [
                  "SCHEMANAME",
                  "TABLENAME",
                  "COLUMNNAME",
                  "DATATYPE",
                ],
              },
            },
            optSchemaNameContains,
            {
              name: "--table-name-contains",
              description:
                "A filter to return only items if table name contains a specific string",
              args: { name: "table-name-contains" },
            },
            {
              name: "--column-name-contains",
              description:
                "A filter to return only items if column name contains a specific string",
              args: { name: "column-name-contains" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-roles",
          description: "Returns a list of role metadata objects",
          options: [
            optTargetDatabaseId,
            optLimit,
            optPage,
            {
              name: "--role-name",
              description:
                "A filter to return only a specific role based on role name",
              args: { name: "role-name" },
              isRepeatable: true,
            },
            {
              name: "--is-oracle-maintained",
              description:
                "A filter to return roles based on whether they are maintained by oracle or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--authentication-type",
              description:
                "A filter to return roles based on authentication type",
              args: { name: "authentication-type" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used for sorting",
              args: { suggestions: ["ROLENAME"] },
            },
            {
              name: "--role-name-contains",
              description:
                "A filter to return only items if role name contains a specific string",
              args: { name: "role-name-contains" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-schemas",
          description: "Returns list of schema",
          options: [
            optTargetDatabaseId,
            optLimit,
            optPage,
            optSchemaName,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used for sorting",
              args: { suggestions: ["SCHEMANAME"] },
            },
            {
              name: "--is-oracle-maintained",
              description:
                "A filter to return only items related to specific type of schema",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSchemaNameContains,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-tables",
          description: "Returns a list of table metadata objects",
          options: [
            optTargetDatabaseId,
            optLimit,
            optPage,
            optSchemaName,
            {
              name: "--table-name",
              description:
                "A filter to return only items related to specific table name",
              args: { name: "table-name" },
              isRepeatable: true,
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used for sorting",
              args: { suggestions: ["SCHEMANAME", "TABLENAME"] },
            },
            {
              name: "--table-name-contains",
              description:
                "A filter to return only items if table name contains a specific string",
              args: { name: "table-name-contains" },
            },
            optSchemaNameContains,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns the list of registered target databases in Data Safe",
          options: [
            optCompartmentId,
            {
              name: "--associated-resource-id",
              description:
                "A filter to return the target databases that are associated to the resource id passed in as a parameter value",
              args: { name: "associated-resource-id" },
            },
            {
              name: "--enablement-resource-ocid",
              description:
                "A filter to return target databases filtered by the enablementResourceOcid column",
              args: { name: "enablement-resource-ocid" },
            },
            {
              name: "--target-database-id",
              description:
                "A filter to return the target database that matches the specified OCID",
              args: { name: "target-database-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only target databases that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
            },
            {
              name: "--database-type",
              description:
                "A filter to return only target databases that match the specified database type",
              args: {
                suggestions: [
                  "DATABASE_CLOUD_SERVICE",
                  "AUTONOMOUS_DATABASE",
                  "INSTALLED_DATABASE",
                ],
              },
            },
            {
              name: "--infrastructure-type",
              description:
                "A filter to return only target databases that match the specified infrastructure type",
              args: {
                suggestions: [
                  "ORACLE_CLOUD",
                  "CLOUD_AT_CUSTOMER",
                  "ON_PREMISES",
                  "NON_ORACLE_CLOUD",
                ],
              },
            },
            optLimit,
            optPage,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "manage-privileges",
          description: "Updates the Data Safe target database Privileges",
          options: [
            optTargetDatabaseId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--features",
              description:
                "The Data Safe features granted to the databases registering under the registration policy",
              args: {
                suggestions: [
                  "ASSESSMENT",
                  "AUDIT_COLLECTION",
                  "AUDIT_SETTING",
                  "DATA_DISCOVERY",
                  "MASKING",
                  "SQL_FIREWALL",
                  "ALL",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "refresh",
          description:
            "Refreshes the Data Safe target database to update it's state",
          options: [
            optTargetDatabaseId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified Data Safe target database",
          options: [
            optTargetDatabaseId,
            {
              name: "--display-name",
              description:
                "The display name of the target database in Data Safe",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "The description of the target database in Data Safe",
              args: { name: "description" },
            },
            { name: "--database-details", args: { name: "json" } },
            optCredentials,
            optTlsConfig,
            optConnectionOption,
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
      name: "target-database-group-summary",
      description:
        "Summary of the target database group used in list operations",
      subcommands: [
        {
          name: "list-target-database-groups",
          description:
            "Retrieves a list of target database groups according to the specified query parameters",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--filter",
              description:
                "The scim query filter parameter accepts filter expressions that use the syntax described in Section 3.2.2.2",
              args: { name: "filter" },
            },
            {
              name: "--sort-by",
              description: "The sorting field for your request",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "lifecycleState",
                  "membershipUpdateTime",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to retrieve resources that exclusively align with the designated lifecycle state",
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
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optSortOrder,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optLimit,
            optPage,
            optTargetDatabaseGroupId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sensitive-types-export-collection",
      description: "A collection of sensitive types export summary objects",
      subcommands: [
        {
          name: "list-sensitive-types-exports",
          description:
            "Retrieves a list of all sensitive types export in Data Safe based on the specified query parameters",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState,
            {
              name: "--sensitive-types-export-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the sensitive types export",
              args: { name: "sensitive-types-export-id" },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "audit-profile-analytic-collection",
      description: "Details of audit profile analytic summary",
      subcommands: [
        {
          name: "list-audit-profile-analytics",
          description: "Gets a list of audit profile aggregated details",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            {
              name: "--group-by",
              description:
                "The group by parameter for summarize operation on audit",
              args: {
                suggestions: [
                  "isPaidUsageEnabled",
                  "targetType",
                  "paidUsageSource",
                  "onlineMonthsSource",
                  "offlineMonthsSource",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--target-type",
              description:
                "A optional filter to return only resources that belong to the specified audit profile type",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "peer-target-database",
      description: "The details of the peer target database in Data Safe",
      subcommands: [
        {
          name: "create",
          description:
            "Creates the peer target database under the primary target database in Data Safe",
          options: [
            optTargetDatabaseId,
            {
              name: "--database-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName6,
            optDescription6,
            {
              name: "--dataguard-association-id",
              description:
                "The OCID of the Data Guard Association resource in which the database being registered is considered as peer",
              args: { name: "dataguard-association-id" },
            },
            optTlsConfig,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-peer-target-database-database-cloud-service-details",
          description:
            "Creates the peer target database under the primary target database in Data Safe",
          options: [
            optTargetDatabaseId,
            {
              name: "--database-details-infrastructure-type",
              description: "The infrastructure type the database is running on",
              args: {
                suggestions: [
                  "ORACLE_CLOUD",
                  "CLOUD_AT_CUSTOMER",
                  "ON_PREMISES",
                  "NON_ORACLE_CLOUD",
                ],
              },
              isRequired: true,
            },
            optDisplayName6,
            optDescription6,
            {
              name: "--dataguard-association-id",
              description:
                "The OCID of the Data Guard Association resource in which the database being registered is considered as peer",
              args: { name: "dataguard-association-id" },
            },
            optTlsConfig,
            optIfMatch,
            {
              name: "--database-details-vm-cluster-id",
              description:
                "The OCID of the VM cluster in which the database is running",
              args: { name: "database-details-vm-cluster-id" },
            },
            {
              name: "--database-details-db-system-id",
              description:
                "The OCID of the cloud database registered as a target database in Data Safe",
              args: { name: "database-details-db-system-id" },
            },
            {
              name: "--database-details-pluggable-database-id",
              description:
                "The OCID of the pluggable database registered as a target database in Data Safe",
              args: { name: "database-details-pluggable-database-id" },
            },
            {
              name: "--database-details-listener-port",
              description: "The port number of the database listener",
              args: { name: "integer" },
            },
            {
              name: "--database-details-service-name",
              description: "The database service name",
              args: { name: "database-details-service-name" },
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
            "Removes the specified peer target database from Data Safe",
          options: [
            optTargetDatabaseId,
            optPeerTargetDatabaseId,
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
            "Returns the details of the specified Data Safe peer target database",
          options: [optTargetDatabaseId, optPeerTargetDatabaseId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all the peer target databases under the primary target database identified by the OCID passed as path",
          options: [
            optTargetDatabaseId,
            optIfMatch,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified Data Safe peer target database",
          options: [
            optTargetDatabaseId,
            optPeerTargetDatabaseId,
            optDisplayName6,
            optDescription6,
            { name: "--database-details", args: { name: "json" } },
            optTlsConfig,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-peer-target-database-database-cloud-service-details",
          description:
            "Updates one or more attributes of the specified Data Safe peer target database",
          options: [
            optTargetDatabaseId,
            optPeerTargetDatabaseId,
            {
              name: "--database-details-infrastructure-type",
              description: "The infrastructure type the database is running on",
              args: {
                suggestions: [
                  "ORACLE_CLOUD",
                  "CLOUD_AT_CUSTOMER",
                  "ON_PREMISES",
                  "NON_ORACLE_CLOUD",
                ],
              },
              isRequired: true,
            },
            optDisplayName6,
            optDescription6,
            optTlsConfig,
            optIfMatch,
            {
              name: "--database-details-vm-cluster-id",
              description:
                "The OCID of the VM cluster in which the database is running",
              args: { name: "database-details-vm-cluster-id" },
            },
            {
              name: "--database-details-db-system-id",
              description:
                "The OCID of the cloud database registered as a target database in Data Safe",
              args: { name: "database-details-db-system-id" },
            },
            {
              name: "--database-details-pluggable-database-id",
              description:
                "The OCID of the pluggable database registered as a target database in Data Safe",
              args: { name: "database-details-pluggable-database-id" },
            },
            {
              name: "--database-details-listener-port",
              description: "The port number of the database listener",
              args: { name: "integer" },
            },
            {
              name: "--database-details-service-name",
              description: "The database service name",
              args: { name: "database-details-service-name" },
            },
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
      name: "security-policy-deployment",
      description:
        "The resource represents the state of the deployment of a security policy on a target",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified security policy deployment and its dependent resources into a different compartment",
          options: [
            optSecurityPolicyDeploymentId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the security policy deployment",
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
            "Creates a Data Safe security policy deployment in the Data Safe Console",
          options: [
            optCompartmentId3,
            {
              name: "--target-id",
              description:
                "The OCID of the target where the security policy is deployed",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--target-type",
              description:
                "Indicates whether the security policy deployment is for a target database or a target database group",
              args: { name: "target-type" },
              isRequired: true,
            },
            {
              name: "--security-policy-id",
              description:
                "The OCID of the security policy corresponding to the security policy deployment",
              args: { name: "security-policy-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the security policy deployment",
              args: { name: "display-name" },
            },
            optDescription5,
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
          description: "Deletes the specified Security policy deployment",
          options: [
            optSecurityPolicyDeploymentId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deploy",
          description:
            "Deploy the security policy to the specified target or target groups",
          options: [
            optSecurityPolicyDeploymentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a security policy deployment by identifier",
          options: [optSecurityPolicyDeploymentId, optFromJson],
        },
        {
          name: "refresh",
          description:
            "Retrieve all the security policies from the associated target or target group and refresh the same on Data",
          options: [
            optSecurityPolicyDeploymentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the security policy deployment",
          options: [
            optSecurityPolicyDeploymentId,
            {
              name: "--display-name",
              description: "The display name of the security policy deployment",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the security policy deployment",
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
        {
          name: "list",
          description:
            "Retrieves a list of all security policy deployments in Data Safe",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "The current state of the security policy deployment",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "DEPLOYED",
                  "PENDING_DEPLOYMENT",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            {
              name: "--security-policy-deployment-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the security policy deployment",
              args: { name: "security-policy-deployment-id" },
            },
            optTargetId,
            {
              name: "--target-type",
              description:
                "A optional filter to return only resources that belong to the specified target type",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            optSecurityPolicyId,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subsetted-object-summary",
      description: "Summary of a subsetted object",
      subcommands: [
        {
          name: "list-subsetted-objects",
          description:
            "Gets a list of subsetted tables present in the specified subsetting report and based on the specified query",
          options: [
            optSubsettingReportId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["schemaName", "objectName"] },
            },
            optSchemaName,
            optObjectName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "audit-event-summary",
      description:
        "The resource represents the audit events collected from the target database by Oracle Data Safe",
      subcommands: [
        {
          name: "list-audit-event-analytics",
          description:
            "By default the ListAuditEventAnalytics operation will return all of the summary columns",
          options: [
            optCompartmentId,
            optIfMatch,
            {
              name: "--limit",
              description:
                "For details about how pagination works, see List Pagination",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'It is usually retrieved from a previous "List" call',
              args: { name: "page" },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optScimQuery,
            {
              name: "--summary-field",
              description:
                "Specifies a subset of summarized fields to be returned in the response",
              args: {
                suggestions: [
                  "auditEventTime",
                  "dbUserName",
                  "targetId",
                  "targetName",
                  "targetClass",
                  "objectType",
                  "clientHostname",
                  "clientProgram",
                  "clientId",
                  "auditType",
                  "eventName",
                  "allRecord",
                  "auditSettingsChange",
                  "dbSchemaChange",
                  "entitlementChange",
                  "loginFailure",
                  "loginSuccess",
                  "allViolations",
                  "realmViolations",
                  "ruleViolations",
                  "dvconfigActivities",
                  "ddls",
                  "dmls",
                  "privilegeChanges",
                  "auditSettingsEnables",
                  "auditSettingsDisables",
                  "selects",
                  "creates",
                  "alters",
                  "drops",
                  "grants",
                  "revokes",
                  "objectOwner",
                  "auditPolicies",
                  "objectName",
                  "osUserName",
                  "errorCode",
                  "clientIp",
                  "externalUserId",
                ],
              },
              isRepeatable: true,
            },
            optTimeStarted,
            optTimeEnded,
            optQueryTimeZone,
            {
              name: "--group-by",
              description:
                "A groupBy can only be used in combination with summaryField parameter",
              args: {
                suggestions: [
                  "auditEventTime",
                  "dbUserName",
                  "targetId",
                  "targetName",
                  "targetClass",
                  "objectType",
                  "clientHostname",
                  "clientProgram",
                  "clientId",
                  "auditType",
                  "eventName",
                  "objectOwner",
                  "auditPolicies",
                  "objectName",
                  "osUserName",
                  "errorCode",
                  "clientIp",
                  "externalUserId",
                ],
              },
              isRepeatable: true,
            },
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "If this query parameter is specified, the result is ordered based on this query parameter value",
              args: {
                suggestions: [
                  "targetId",
                  "targetClass",
                  "targetName",
                  "objectType",
                  "dbUserName",
                  "eventName",
                  "auditEventTime",
                  "clientHostname",
                  "clientProgram",
                  "clientId",
                  "auditType",
                  "objectOwner",
                  "auditPolicies",
                  "objectName",
                  "osUserName",
                  "errorCode",
                  "clientIp",
                  "externalUserId",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-audit-events",
          description:
            "The ListAuditEvents operation returns specified compartmentId audit Events only",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--limit",
              description:
                "For details about how pagination works, see List Pagination",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'It is usually retrieved from a previous "List" call',
              args: { name: "page" },
            },
            optScimQuery,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "If this query parameter is specified, the result is sorted by this query parameter value",
              args: {
                suggestions: [
                  "dbUserName",
                  "targetName",
                  "databaseType",
                  "targetClass",
                  "auditEventTime",
                  "timeCollected",
                  "osUserName",
                  "operation",
                  "operationStatus",
                  "eventName",
                  "errorCode",
                  "errorMessage",
                  "objectType",
                  "objectName",
                  "objectOwner",
                  "clientHostname",
                  "clientIp",
                  "isAlerted",
                  "actionTaken",
                  "clientProgram",
                  "commandText",
                  "commandParam",
                  "extendedEventAttributes",
                  "auditLocation",
                  "osTerminal",
                  "clientId",
                  "auditPolicies",
                  "auditType",
                  "externalUserId",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-firewall-allowed-sql",
      description: "Collection of SQL Firewall allowed SQL statements",
      subcommands: [
        {
          name: "list",
          description:
            "Retrieves a list of all SQL Firewall allowed SQL statements",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optScimQuery,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["displayName", "timeCollected"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-collection",
      description:
        "The resource represents SQL collection for a specific database user in a target",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified SQL collection and its dependent resources into a different compartment",
          options: [
            optSqlCollectionId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the SQL collection",
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
          description: "Creates a new SQL collection resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the SQL collection",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target corresponding to the security policy deployment",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--db-user-name",
              description: "The database user name",
              args: { name: "db-user-name" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the SQL collection",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the SQL collection",
              args: { name: "description" },
            },
            {
              name: "--status",
              description:
                "Specifies if the SqlCollection has to be started after creation",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--sql-level",
              description: "Specifies the level of SQL that will be collected",
              args: { suggestions: ["USER_ISSUED_SQL", "ALL_SQL"] },
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
          description: "Deletes the specified SQL collection",
          options: [
            optSqlCollectionId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-sql-firewall-policy",
          description:
            "Generates or appends to the SQL Firewall policy using the specified SQL collection",
          options: [
            optSqlCollectionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a SQL collection by identifier",
          options: [optSqlCollectionId, optFromJson],
        },
        {
          name: "purge-sql-collection-logs",
          description:
            "Purge the SQL collection logs for the specified SqlCollection",
          options: [
            optSqlCollectionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "refresh-sql-collection-log-insights",
          description: "Refresh the specified SQL collection Log Insights",
          options: [
            optSqlCollectionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Start the specified SQL collection",
          options: [
            optSqlCollectionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the specified SQL collection",
          options: [
            optSqlCollectionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the SQL collection",
          options: [
            optSqlCollectionId,
            {
              name: "--display-name",
              description: "The display name of the SQL collection",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the SQL collection",
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
        {
          name: "list",
          description: "Retrieves a list of all SQL collections in Data Safe",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the SQL collection",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "COLLECTING",
                  "COMPLETED",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--sql-collection-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the SQL collection resource",
              args: { name: "sql-collection-id" },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optTargetId,
            optTargetDatabaseGroupId,
            {
              name: "--db-user-name",
              description:
                "A filter to return only items that match the specified user name",
              args: { name: "db-user-name" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used for sorting",
              args: {
                suggestions: ["TIMECREATED", "DISPLAYNAME", "TIMELASTSTARTED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "alert",
      description:
        "The details of a Data Safe Alert, that shows alerts generated by a Data Safe feature",
      subcommands: [
        {
          name: "alerts-update",
          description: "Updates alerts in the specified compartment",
          options: [
            {
              name: "--status",
              description: "The status of the alert",
              args: { suggestions: ["OPEN", "CLOSED"] },
              isRequired: true,
            },
            optCompartmentId5,
            {
              name: "--target-id",
              description:
                "The OCID of the target database associated with the alerts",
              args: { name: "target-id" },
            },
            optIfMatch,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves the specified alert into a different compartment",
          options: [
            optAlertId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to move the alert to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified alerts",
          options: [optAlertId, optFromJson],
        },
        {
          name: "patch",
          description:
            "Updates the status of one or more alert specified by the alert IDs",
          options: [
            {
              name: "--items",
              description:
                "Array of alert detail to update the status of the alert specified by the alert ID",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId5,
            optIfMatch,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the status of the specified alert",
          options: [
            optAlertId,
            {
              name: "--comment",
              description:
                "A comment can be entered to track the alert changes done by the user",
              args: { name: "comment" },
            },
            {
              name: "--status",
              description: "The status of the alert",
              args: { suggestions: ["OPEN", "CLOSED"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["UPDATING", "SUCCEEDED", "FAILED"] },
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
      name: "masking-error-summary",
      description: "Summary of a masking error",
      subcommands: [
        {
          name: "list-masking-errors",
          description:
            "Gets a list of masking errors in a masking run based on the specified query parameters",
          options: [
            optMaskingReportId,
            {
              name: "--step-name",
              description:
                "A filter to return only masking errors that match the specified step name",
              args: {
                suggestions: [
                  "VALIDATE",
                  "GENERATE_SCRIPT",
                  "EXECUTE_MASKING",
                  "PRE_MASKING",
                  "POST_MASKING",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["stepName", "timeCreated"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "masking-policy-health-report",
      description: "The masking policy health report",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified masking policy health report and its dependent resources into a different compartment",
          options: [
            optMaskingPolicyHealthReportId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the masking policy should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified masking policy health report",
          options: [
            optMaskingPolicyHealthReportId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-health-report",
          description: "Performs health check on the masking policy",
          options: [
            optMaskingPolicyId,
            {
              name: "--check-type",
              description: "The type of health check",
              args: { suggestions: ["ALL"] },
            },
            {
              name: "--target-id",
              description:
                "The OCID of the target database to use for the masking policy health check",
              args: { name: "target-id" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the health report resource should be created",
              args: { name: "compartment-id" },
            },
            {
              name: "--tablespace",
              description:
                "The tablespace that should be used to estimate space",
              args: { name: "tablespace" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--target-credentials", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the specified masking policy health report",
          options: [optMaskingPolicyHealthReportId, optFromJson],
        },
        {
          name: "list-masking-policy-health-report-logs",
          description:
            "Gets a list of errors and warnings from a masking policy health check",
          options: [
            optMaskingPolicyHealthReportId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sort",
              args: { suggestions: ["logType"] },
            },
            {
              name: "--message-type",
              description:
                "A filter to return only the resources that match the specified log message type",
              args: { suggestions: ["PASS", "WARNING", "ERROR"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of masking policy health reports based on the specified query parameters",
          options: [
            optCompartmentId,
            {
              name: "--masking-policy-health-report-id",
              description:
                "A filter to return only the resources that match the specified masking policy health report OCID",
              args: { name: "masking-policy-health-report-id" },
            },
            optLimit,
            optPage,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--sort-by",
              description: "Sort",
              args: { suggestions: ["displayName", "timeCreated"] },
            },
            optSortOrder,
            optDisplayName,
            optTargetId,
            optMaskingPolicyId2,
            optLifecycleState2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "role-grant-path-collection",
      description: "A collection of role grant path summary objects",
      subcommands: [
        {
          name: "list-role-grant-paths",
          description:
            "Retrieves a list of all role grant paths for a particular user",
          options: [
            optSecurityPolicyReportId,
            {
              name: "--grantee",
              description:
                "A filter to return only items that match the specified grantee",
              args: { name: "grantee" },
              isRequired: true,
            },
            {
              name: "--granted-role",
              description:
                "A filter to return only items that match the specified role",
              args: { name: "granted-role" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "masking-policy-referential-relation-summary",
      description:
        "A referential relation is a resource corresponding to database columns",
      subcommands: [
        {
          name: "list-masking-policy-referential-relations",
          description:
            "Gets a list of referential relations present in the specified masking policy based on the specified query",
          options: [
            optMaskingPolicyId,
            optSchemaName,
            optObjectName,
            optColumnName,
            {
              name: "--relation-type",
              description:
                "A filter to return columns based on their relationship with their parent columns",
              args: { suggestions: ["NONE", "APP_DEFINED", "DB_DEFINED"] },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["relationType", "schemaName", "objectName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-policy-entry-state",
      description:
        "The resource represents the state of a specific entry type deployment on a target",
      subcommands: [
        {
          name: "get",
          description: "Gets a security policy entity states by identifier",
          options: [
            optSecurityPolicyDeploymentId,
            {
              name: "--security-policy-entry-state-id",
              description: "Unique security policy entry state identifier",
              args: { name: "security-policy-entry-state-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of all security policy entry states in Data Safe",
          options: [
            optSecurityPolicyDeploymentId,
            optLimit,
            optPage,
            {
              name: "--deployment-status",
              description:
                "The current state of the security policy deployment",
              args: {
                suggestions: [
                  "CREATED",
                  "MODIFIED",
                  "CONFLICT",
                  "CONNECTIVITY_ISSUE",
                  "UNSUPPORTED_SYNTAX",
                  "UNKNOWN_ERROR",
                  "UNAUTHORIZED",
                  "DELETED",
                ],
              },
            },
            {
              name: "--security-policy-entry-id",
              description:
                "An optional filter to return only resources that match the specified security policy entry OCID",
              args: { name: "security-policy-entry-id" },
            },
            {
              name: "--security-policy-entry-type",
              description: "The type of the security policy deployment",
              args: {
                suggestions: ["FIREWALL_POLICY", "AUDIT_POLICY", "CONFIG"],
              },
            },
            {
              name: "--target-id",
              description:
                "An optional filter to return only resources that match the specified target id",
              args: { name: "target-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "database-table-access-entry-collection",
      description: "A collection of database table access summary objects",
      subcommands: [
        {
          name: "list-database-table-access-entries",
          description:
            "Retrieves a list of all database table access entries in Data Safe",
          options: [
            optSecurityPolicyReportId,
            optLimit,
            optPage,
            optScimQuery,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "key",
                  "grantee",
                  "accessType",
                  "tableSchema",
                  "tableName",
                  "privilegeType",
                  "privilege",
                  "privilegeGrantable",
                  "grantFromRole",
                  "accessThroughObject",
                  "columnName",
                  "grantor",
                  "areAllTablesAccessible",
                  "isAccessConstrainedByView",
                  "isAccessConstrainedByLabelSecurity",
                  "isAccessConstrainedByDatabaseVault",
                  "isAccessConstrainedByVirtualPrivateDatabase",
                  "isAccessConstrainedByRedaction",
                  "isAccessConstrainedByRealApplicationSecurity",
                  "isAccessConstrainedBySqlFirewall",
                  "isSensitive",
                ],
              },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      description: "A log entry related to a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of log entries for the specified work request",
          options: [
            optWorkRequestId,
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
      name: "registration-policy-summary",
      description: "A summary of a registration policy",
      subcommands: [
        {
          name: "list-registration-policies",
          description:
            "Retrieves a list of registration policies according to the specified query parameters",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--sort-by",
              description: "Field to sort the registration policies by",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "enablementLevel",
                  "lifecycleState",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "Filter registration policies by their lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "DELETING",
                ],
              },
            },
            {
              name: "--enablement-level",
              description: "Filter registration policies by resource type",
              args: { suggestions: ["DATABASE"] },
            },
            {
              name: "--resource-id",
              description:
                "Filter to return the registration policy matching the specified resource OCID",
              args: { name: "resource-id" },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optSortOrder,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optLimit,
            optPage,
            {
              name: "--registration-policy-id",
              description:
                "Filter to return the registration policy matching the specified OCID",
              args: { name: "registration-policy-id" },
            },
            {
              name: "--connection-type",
              description:
                "Filter to return the registration policies matching the specified connectionType i.e ONPREM_CONNECTOR",
              args: { suggestions: ["PRIVATE_ENDPOINT", "ONPREM_CONNECTOR"] },
            },
            {
              name: "--connection-id",
              description:
                "Filter to return the registration policies matching the specified connection ID",
              args: { name: "connection-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "target-alert-policy-association",
      description: "The association of the target database to an alert policy",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified target-alert policy Association into a different compartment",
          options: [
            optTargetAlertPolicyAssociationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the target-alert policy association to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new target-alert policy association to track a alert policy applied on target",
          options: [
            {
              name: "--policy-id",
              description: "The OCID of the alert policy",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "The OCID of the target or target database group",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the target-alert policy association is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description:
                "Indicates if the target-alert policy association is enabled or disabled by user",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The display name of the target-alert policy association",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Describes the target-alert policy association",
              args: { name: "description" },
            },
            {
              name: "--target-type",
              description:
                "The resource type that is represented by the alert policy association",
              args: { name: "target-type" },
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
          description: "Deletes the specified target-alert policy Association",
          options: [
            optTargetAlertPolicyAssociationId,
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
            "Gets the details of target-alert policy association by its ID",
          options: [optTargetAlertPolicyAssociationId, optFromJson],
        },
        {
          name: "list-target-alert-policy-unassociated-members",
          description:
            "Gets the details of target-alert policy association and its unassociated members by its ID",
          options: [
            optTargetAlertPolicyAssociationId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["targetId", "notAppliedReason"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Creates new target-alert policy associations that will be applied on the target database",
          options: [
            {
              name: "--items",
              description: "An array of patch instructions",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId5,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified target-alert policy association",
          options: [
            optTargetAlertPolicyAssociationId,
            {
              name: "--is-enabled",
              description:
                "Indicates if the target-alert policy association is enabled or disabled by user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--display-name",
              description:
                "The display name of the target-alert policy association",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Describes the target-alert policy association",
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
      name: "sensitive-column",
      description:
        "A sensitive column is a resource corresponding to a database column that is considered sensitive",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new sensitive column in the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            {
              name: "--schema-name",
              description:
                "The database schema that contains the sensitive column",
              args: { name: "schema-name" },
              isRequired: true,
            },
            {
              name: "--object-name",
              description:
                "The database object that contains the sensitive column",
              args: { name: "object-name" },
              isRequired: true,
            },
            {
              name: "--column-name",
              description: "The name of the sensitive column",
              args: { name: "column-name" },
              isRequired: true,
            },
            {
              name: "--app-name",
              description:
                "The name of the application associated with the sensitive column",
              args: { name: "app-name" },
            },
            {
              name: "--object-type",
              description:
                "The type of the database object that contains the sensitive column",
              args: { suggestions: ["TABLE", "EDITIONING_VIEW"] },
            },
            {
              name: "--data-type",
              description: "The data type of the sensitive column",
              args: { name: "data-type" },
            },
            {
              name: "--status",
              description: "The status of the sensitive column",
              args: { suggestions: ["VALID", "INVALID"] },
            },
            {
              name: "--sensitive-type-id",
              description:
                "The OCID of the sensitive type to be associated with the sensitive column",
              args: { name: "sensitive-type-id" },
            },
            {
              name: "--parent-column-keys",
              description:
                "Unique keys identifying the columns that are parents of the sensitive column",
              args: { name: "json" },
            },
            {
              name: "--relation-type",
              description:
                "The type of referential relationship the sensitive column has with its parent",
              args: { suggestions: ["NONE", "APP_DEFINED", "DB_DEFINED"] },
            },
            {
              name: "--app-defined-child-column-keys",
              description:
                "Unique keys identifying the columns that are application-level",
              args: { name: "json" },
            },
            {
              name: "--db-defined-child-column-keys",
              description:
                "Unique keys identifying the columns that are database-level",
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
          description: "Deletes the specified sensitive column",
          options: [
            optSensitiveDataModelId,
            optSensitiveColumnKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified sensitive column",
          options: [
            optSensitiveDataModelId,
            optSensitiveColumnKey,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of sensitive columns present in the specified sensitive data model based on the specified query",
          options: [
            optSensitiveDataModelId,
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optTimeUpdatedGreaterThanOrEqualTo,
            optTimeUpdatedLessThan,
            {
              name: "--sensitive-column-lifecycle-state",
              description:
                "Filters the sensitive column resources with the given lifecycle state values",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "FAILED",
                ],
              },
            },
            {
              name: "--column-data-count-filter",
              description:
                "Filters the sensitive columns with respect to the estimated row count",
              args: {
                suggestions: [
                  "SHOW_ALL_COLUMNS",
                  "SHOW_COLUMNS_WITH_DATA",
                  "SHOW_COLUMNS_WITHOUT_DATA",
                ],
              },
            },
            {
              name: "--confidence-level",
              description:
                "A filter to return the sensitive columns with the specified confidence level",
              args: { suggestions: ["NONE", "HIGH", "MEDIUM", "LOW"] },
              isRepeatable: true,
            },
            optSchemaName,
            optObjectName,
            optColumnName,
            optObjectType,
            {
              name: "--data-type",
              description:
                "A filter to return only the resources that match the specified data types",
              args: { name: "data-type" },
              isRepeatable: true,
            },
            {
              name: "--status",
              description:
                "A filter to return only the sensitive columns that match the specified status",
              args: { suggestions: ["VALID", "INVALID"] },
              isRepeatable: true,
            },
            {
              name: "--sensitive-type-id",
              description:
                "A filter to return only the sensitive columns that are associated with one of the sensitive types identified",
              args: { name: "sensitive-type-id" },
              isRepeatable: true,
            },
            {
              name: "--parent-column-key",
              description:
                "A filter to return only the sensitive columns that are children of one of the columns identified by",
              args: { name: "parent-column-key" },
              isRepeatable: true,
            },
            {
              name: "--relation-type",
              description:
                "A filter to return sensitive columns based on their relationship with their parent columns",
              args: { suggestions: ["NONE", "APP_DEFINED", "DB_DEFINED"] },
              isRepeatable: true,
            },
            {
              name: "--column-group",
              description:
                "A filter to return only the sensitive columns that belong to the specified column group",
              args: { name: "column-group" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "schemaName",
                  "objectName",
                  "columnName",
                  "dataType",
                  "confidenceLevel",
                ],
              },
            },
            {
              name: "--is-case-in-sensitive",
              description:
                "A boolean flag indicating whether the search should be case-insensitive",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Patches one or more columns in the specified sensitive data model",
          options: [
            optSensitiveDataModelId,
            optItems,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified sensitive column",
          options: [
            optSensitiveDataModelId,
            optSensitiveColumnKey,
            {
              name: "--data-type",
              description: "The data type of the sensitive column",
              args: { name: "data-type" },
            },
            {
              name: "--status",
              description: "The status of the sensitive column",
              args: { suggestions: ["VALID", "INVALID"] },
            },
            {
              name: "--sensitive-type-id",
              description:
                "The OCID of the sensitive type to be associated with the sensitive column",
              args: { name: "sensitive-type-id" },
            },
            {
              name: "--parent-column-keys",
              description:
                "Unique keys identifying the columns that are parents of the sensitive column",
              args: { name: "json" },
            },
            {
              name: "--relation-type",
              description:
                "The type of referential relationship the sensitive column has with its parent",
              args: { suggestions: ["NONE", "APP_DEFINED", "DB_DEFINED"] },
            },
            {
              name: "--app-defined-child-column-keys",
              description:
                "Unique keys identifying the columns that are application-level",
              args: { name: "json" },
            },
            {
              name: "--db-defined-child-column-keys",
              description:
                "Unique keys identifying the columns that are database-level",
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
      name: "sensitive-type-group",
      description: "The details of the sensitive type group",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the sensitive type group to the specified compartment",
          options: [
            optSensitiveTypeGroupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the sensitive type group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new sensitive type group",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the sensitive type group should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the sensitive type group",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the sensitive type group",
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
          description: "Deletes the specified sensitive type group",
          options: [
            optSensitiveTypeGroupId,
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
          description: "Gets the details of the specified sensitive type group",
          options: [optSensitiveTypeGroupId, optFromJson],
        },
        {
          name: "list-grouped-sensitive-types",
          description:
            "Gets the list of sensitive type Ids present in the specified sensitive type group",
          options: [
            optSensitiveTypeGroupId,
            optSensitiveTypeId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch-grouped-sensitive-types",
          description:
            "Patches one or more sensitive types in a sensitive type group",
          options: [
            optSensitiveTypeGroupId,
            optItems,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified sensitive type group",
          options: [
            optSensitiveTypeGroupId,
            {
              name: "--display-name",
              description: "The display name of the sensitive type group",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the sensitive type group",
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
      name: "audit-trail",
      description:
        "An audit trail represents the source of audit records that provides documentary evidence of the sequence",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified audit trail",
          options: [
            optAuditTrailId,
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
          description: "Gets the details of audit trail",
          options: [optAuditTrailId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of all audit trails",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--audit-trail-id",
              description:
                "A optional filter to return only resources that match the specified id",
              args: { name: "audit-trail-id" },
            },
            optDisplayName,
            optTargetId,
            optTargetDatabaseGroupId,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A optional filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "INACTIVE",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--status",
              description:
                "A optional filter to return only resources that match the specified sub-state of audit trail",
              args: {
                suggestions: [
                  "STARTING",
                  "COLLECTING",
                  "RECOVERING",
                  "IDLE",
                  "STOPPING",
                  "STOPPED",
                  "RESUMING",
                  "RETRYING",
                  "NOT_STARTED",
                  "STOPPED_NEEDS_ATTN",
                  "STOPPED_FAILED",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "resume",
          description: "Resumes the specified audit trail once it got stopped",
          options: [
            optAuditTrailId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description:
            "Starts collection of audit records on the specified audit trail",
          options: [
            {
              name: "--audit-collection-start-time",
              description:
                "The date from which the audit trail must start collecting data, in the format defined by RFC3339",
              args: { name: "datetime" },
              isRequired: true,
            },
            optAuditTrailId,
            {
              name: "--is-auto-purge-enabled",
              description:
                "Indicates if auto purge is enabled on the target database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-update-last-archive-time-on-target",
              description:
                "Indicates if the Datasafe updates last archive time on target database",
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
          name: "stop",
          description: "Stops the specified audit trail",
          options: [
            optAuditTrailId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified audit trail",
          options: [
            optAuditTrailId,
            {
              name: "--description",
              description: "The description of the audit trail",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the audit trail",
              args: { name: "display-name" },
            },
            {
              name: "--is-auto-purge-enabled",
              description:
                "Indicates if auto purge is enabled on the target database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-update-last-archive-time-on-target",
              description:
                "Indicates if the Datasafe updates last archive time on target database",
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
      name: "unified-audit-policy-definition",
      description:
        "Resource represents a single unified audit policy definition",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified unified audit policy definition and its dependent resources into a different compartment",
          options: [
            optUnifiedAuditPolicyDefinitionId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the unified audit policy definition",
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
          description: "Deletes the specified Unified audit policy definition",
          options: [
            optUnifiedAuditPolicyDefinitionId,
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
            "Gets a unified audit policy definition by the specified OCID of the unified audit policy definition resource",
          options: [optUnifiedAuditPolicyDefinitionId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the unified audit policy definition",
          options: [
            optUnifiedAuditPolicyDefinitionId,
            {
              name: "--display-name",
              description: "The display name of the audit policy",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the audit policy",
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
      name: "unified-audit-policy-collection",
      description: "Collection of audit policy summaries",
      subcommands: [
        {
          name: "list-unified-audit-policies",
          description: "Retrieves a list of all Unified Audit policies",
          options: [
            optCompartmentId,
            optSecurityPolicyId,
            {
              name: "--lifecycle-state",
              description: "The current state of the Unified Audit policy",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "NEEDS_ATTENTION",
                  "DELETED",
                ],
              },
            },
            optAccessLevel,
            optDisplayName,
            {
              name: "--is-seeded",
              description:
                "A boolean flag indicating to list seeded unified audit policies",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optLimit,
            optPage,
            {
              name: "--unified-audit-policy-definition-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the unified audit policy",
              args: { name: "unified-audit-policy-definition-id" },
            },
            {
              name: "--unified-audit-policy-id",
              description:
                "An optional filter to return only resources that match the specified OCID of the Unified Audit policy",
              args: { name: "unified-audit-policy-id" },
            },
            optSortOrder,
            optSortBy,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "crypto-assessment",
      description:
        "A crypto assessment that provides insight into database cryptographic posture",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified saved crypto assessment into a different compartment",
          options: [
            optCryptoAssessmentId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the crypto assessment",
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
          description: "Deletes the specified saved crypto assessment",
          options: [
            optCryptoAssessmentId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-crypto-assessment-report",
          description:
            "Downloads the report of the specified crypto assessment",
          options: [
            optCryptoAssessmentId,
            {
              name: "--format",
              description: "Format of the crypto assessment report",
              args: { suggestions: ["PDF", "XLS"] },
              isRequired: true,
            },
            optFile,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "generate-crypto-assessment-report",
          description:
            "Generates the report of the specified crypto assessment",
          options: [
            optCryptoAssessmentId,
            {
              name: "--format",
              description: "Format of the crypto assessment report",
              args: { suggestions: ["PDF", "XLS"] },
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
          description: "Gets the details of the specified crypto assessment",
          options: [optCryptoAssessmentId, optFromJson],
        },
        {
          name: "get-crypto-assessment-sqlnet-parameters",
          description:
            "Gets SQLNET.ORA parameter values and quantum-readiness evaluation for the specified crypto assessment",
          options: [
            optCryptoAssessmentId,
            {
              name: "--parameter",
              description:
                "A filter to return only the SQLNET parameter with the specified name",
              args: { name: "parameter" },
            },
            {
              name: "--quantum-readiness",
              description:
                "Filters SQLNET parameters by quantum-readiness category",
              args: {
                suggestions: [
                  "RESISTANT",
                  "NOT_RESISTANT",
                  "NOT_AVAILABLE",
                  "NOT_APPLICABLE",
                  "NOT_SUPPORTED",
                ],
              },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-backup-sets",
          description:
            "Gets backup set summaries across targets in a compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAssessmentId,
            optAssessmentType,
            optTargetId2,
            optTargetIds,
            {
              name: "--backup-set-key",
              description:
                "Filters backup set summary rows to an exact matching backupSetKey",
              args: { name: "backup-set-key" },
            },
            {
              name: "--is-encrypted",
              description:
                "Filters backup set summary rows by whether the backup set is encrypted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sort-by",
              description: "The field used to sort backup set results",
              args: {
                suggestions: [
                  "setStamp",
                  "backupSetKey",
                  "sizeInGBs",
                  "timeCreated",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-cbom-items",
          description:
            "Lists the CBOM items for the specified crypto assessment",
          options: [optCryptoAssessmentId, optAll, optFromJson],
        },
        {
          name: "list-crypto-assessment-certificates",
          description:
            "Lists certificates discovered across targets in a compartment, including target, wallet location, issuer",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAssessmentId,
            optAssessmentType,
            optTargetId2,
            optTargetIds,
            {
              name: "--certificate-type",
              description:
                "A filter to return only certificates of any of the specified types",
              args: { suggestions: ["SERVER", "USER", "TRUSTED"] },
              isRepeatable: true,
            },
            {
              name: "--status",
              description:
                "A filter to return only certificates with any of the specified statuses",
              args: {
                suggestions: [
                  "VALID",
                  "EXPIRING_SOON",
                  "EXPIRED",
                  "INVALID",
                  "IN_USE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--public-key-type",
              description:
                "A filter to return only certificates with any of the specified public key types",
              args: { name: "public-key-type" },
              isRepeatable: true,
            },
            {
              name: "--signature-algorithm",
              description:
                "A filter to return only certificates whose signature algorithm contains any of the specified values",
              args: { name: "signature-algorithm" },
              isRepeatable: true,
            },
            {
              name: "--expiry-bucket",
              description:
                "A filter to return only certificates in the specified expiry bucket",
              args: { name: "expiry-bucket" },
            },
            {
              name: "--days-to-expiry",
              description:
                "A filter to return certificates whose validTill timestamp is on or before the current time plus the specified",
              args: { name: "integer" },
            },
            {
              name: "--sort-by",
              description: "The field used to sort certificate results",
              args: { suggestions: ["timeValidUntil", "subject"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-finding-analytics",
          description:
            "Lists findings in a compartment with the number of affected targets",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--category",
              description:
                "A filter to return only findings in the specified category key",
              args: {
                suggestions: [
                  "NETWORK_ENCRYPTION",
                  "DATA_ENCRYPTION",
                  "CERTIFICATES_AND_KEY_MANAGEMENT",
                  "BACKUP_AND_EXPORT_ENCRYPTION",
                  "POST_QUANTUM_READINESS",
                  "NOT_SUPPORTED",
                ],
              },
            },
            {
              name: "--finding-key",
              description:
                "A filter to return only findings with any of the specified finding keys",
              args: { name: "finding-key" },
              isRepeatable: true,
            },
            optIsQuantumReadinessCheck,
            {
              name: "--sort-by",
              description: "The field used to sort finding analytics results",
              args: { suggestions: ["targetCount", "priority"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-finding-targets",
          description:
            "For a selected finding, lists targets where it occurs in assessments",
          options: [
            optCompartmentId,
            {
              name: "--finding-key",
              description:
                "The finding keys for which target occurrences are listed",
              args: { name: "finding-key" },
              isRequired: true,
              isRepeatable: true,
            },
            optAssessmentType,
            {
              name: "--target-id",
              description:
                "Filters results to targets with an exact matching target OCID",
              args: { name: "target-id" },
            },
            optTargetIds,
            {
              name: "--status",
              description:
                "A filter to return only finding target rows with the specified status",
              args: {
                suggestions: [
                  "PASS",
                  "FAIL",
                  "ERROR",
                  "EVALUATE",
                  "NOT_AVAILABLE",
                  "NOT_APPLICABLE",
                  "NOT_SUPPORTED",
                ],
              },
            },
            optIsQuantumReadinessCheck,
            {
              name: "--sort-by",
              description: "The field used to sort finding target results",
              args: { suggestions: ["targetId", "databaseVersion"] },
            },
            optSortOrder,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-findings",
          description:
            "Lists crypto deviation findings for the specified crypto assessment",
          options: [
            optCryptoAssessmentId,
            {
              name: "--finding-key",
              description:
                "A filter to return only findings with the specified finding key",
              args: { name: "finding-key" },
            },
            {
              name: "--title",
              description:
                "A filter to return only findings with the specified title",
              args: { name: "title" },
            },
            {
              name: "--category",
              description:
                "A filter to return only findings in the specified category key",
              args: {
                suggestions: [
                  "NETWORK_ENCRYPTION",
                  "DATA_ENCRYPTION",
                  "CERTIFICATES_AND_KEY_MANAGEMENT",
                  "BACKUP_AND_EXPORT_ENCRYPTION",
                  "POST_QUANTUM_READINESS",
                  "NOT_SUPPORTED",
                ],
              },
            },
            {
              name: "--status",
              description:
                "A filter to return only findings with the specified status",
              args: {
                suggestions: [
                  "PASS",
                  "FAIL",
                  "ERROR",
                  "EVALUATE",
                  "NOT_AVAILABLE",
                  "NOT_APPLICABLE",
                  "NOT_SUPPORTED",
                ],
              },
            },
            optIsQuantumReadinessCheck,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-keys",
          description:
            "Gets a paginated list of cryptographic keys across targets in a compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAssessmentId,
            optAssessmentType,
            optTargetId2,
            optTargetIds,
            {
              name: "--feature",
              description:
                "A filter to return only records for the specified feature",
              args: { suggestions: ["TDE", "TLS", "NNE"] },
            },
            {
              name: "--key-id",
              description:
                "Filters key results to rows with an exact matching keyId",
              args: { name: "key-id" },
            },
            {
              name: "--key-type",
              description:
                "Filters key results to rows with the specified key type",
              args: { suggestions: ["MASTER_KEY", "ENCRYPTION_KEY"] },
            },
            {
              name: "--key-manager-type",
              description:
                "Filters key results to rows whose primary or secondary keystore type matches any of the specified key manager",
              args: {
                suggestions: [
                  "FILE",
                  "OKV",
                  "HSM",
                  "NOT_CONFIGURED",
                  "NOT_APPLICABLE",
                  "NOT_AVAILABLE",
                  "UNKNOWN",
                  "NOT_SUPPORTED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field used to sort key results",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-tde-objects",
          description:
            "Lists TDE object encryption summaries across targets in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--object-type",
              description:
                "A required filter to return only TDE objects of the specified type",
              args: { suggestions: ["TABLESPACE", "COLUMN"] },
              isRequired: true,
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAssessmentId,
            optAssessmentType,
            optTargetId2,
            optTargetIds,
            {
              name: "--quantum-readiness",
              description:
                "Filters TDE object summary rows by quantum-readiness category",
              args: {
                suggestions: [
                  "RESISTANT",
                  "NOT_RESISTANT",
                  "NOT_AVAILABLE",
                  "NOT_APPLICABLE",
                  "NOT_SUPPORTED",
                ],
              },
            },
            {
              name: "--encryption-observed",
              description:
                "Filters TDE object summary rows by any of the specified observed encryption algorithms",
              args: { name: "encryption-observed" },
              isRepeatable: true,
            },
            {
              name: "--encryption-status",
              description:
                "Filters TDE object summary rows by derived encryption status",
              args: {
                suggestions: ["ENCRYPTED", "UNENCRYPTED", "NOT_SUPPORTED"],
              },
            },
            {
              name: "--sort-by",
              description: "The field used to sort TDE object summary results",
              args: {
                suggestions: [
                  "tablespaceName",
                  "columnName",
                  "quantumReadiness",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-crypto-assessment-wallets",
          description: "Gets wallet details across targets in a compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAssessmentId,
            optAssessmentType,
            optTargetId2,
            optTargetIds,
            {
              name: "--feature",
              description:
                "A filter to return only wallets for the specified feature",
              args: { suggestions: ["TDE", "TLS", "NNE", "ZDLRA"] },
            },
            {
              name: "--wallet-encryption-algorithm",
              description:
                "A filter to return only wallets whose encryption algorithm exactly matches any of the specified values",
              args: { name: "wallet-encryption-algorithm" },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field used to sort wallet results",
              args: { suggestions: ["feature", "timeCreated"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of crypto assessments with filtering and pagination support",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optDisplayName,
            {
              name: "--type",
              description:
                "A filter to return only crypto assessments that match the specified type",
              args: { suggestions: ["LATEST", "SAVED"] },
            },
            optAssessmentId,
            {
              name: "--target-id",
              description:
                "A filter to return only crypto assessments associated with the specified target OCID",
              args: { name: "target-id" },
            },
            optTargetIds,
            optTargetDatabaseGroupId,
            {
              name: "--target-type",
              description:
                "A filter to return crypto assessments belonging to the specified target type",
              args: {
                suggestions: ["TARGET_DATABASE", "TARGET_DATABASE_GROUP"],
              },
            },
            {
              name: "--posture-category",
              description:
                "A filter to return only crypto assessments that match any of the specified posture categories",
              args: {
                suggestions: [
                  "QUANTUM_RESISTANT",
                  "QUANTUM_CAPABLE",
                  "UPGRADE_RECOMMENDED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--is-assessment-scheduled",
              description:
                "A filter to return only crypto assessments whose scheduled execution state matches the specified value",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field used to sort crypto assessments",
              args: {
                suggestions: ["issueCount", "timeCreated", "timeUpdated"],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "refresh",
          description:
            "Runs a crypto assessment, refreshes the latest assessment, and saves it for future reference",
          options: [
            optCryptoAssessmentId,
            {
              name: "--compartment-id",
              description:
                "This field is ignored when refreshing a crypto assessment",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "The display name of the crypto assessment",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the crypto assessment",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified crypto assessment",
          options: [
            optCryptoAssessmentId,
            {
              name: "--display-name",
              description: "The display name of the crypto assessment",
              args: { name: "display-name" },
            },
            {
              name: "--schedule",
              description:
                "Updates the schedule associated with this latest crypto assessment",
              args: { name: "schedule" },
            },
            {
              name: "--is-assessment-scheduled",
              description:
                "Indicates whether scheduled execution is active for this latest crypto assessment",
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
      name: "private-endpoint",
      description:
        "A Data Safe private endpoint that allows Data Safe to connect to databases in a customer's virtual cloud",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Data Safe private endpoint and its dependent resources to the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the new compartment",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Data Safe private endpoint",
          options: [
            {
              name: "--display-name",
              description: "The display name for the private endpoint",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description: "The OCID of the subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--private-endpoint-ip",
              description: "The private IP address of the private endpoint",
              args: { name: "private-endpoint-ip" },
            },
            {
              name: "--description",
              description: "The description of the private endpoint",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCIDs of the network security groups that the private endpoint belongs to",
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
          description: "Deletes the specified Data Safe private endpoint",
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
            "Gets the details of the specified Data Safe private endpoint",
          options: [optPrivateEndpointId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Data Safe private endpoints",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--vcn-id",
              description:
                "A filter to return only resources that match the specified VCN OCID",
              args: { name: "vcn-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NA",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified Data Safe private endpoint",
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
                "The OCIDs of the network security groups that the private endpoint belongs to",
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
            optPrivateEndpointId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "service",
      description: "A Data Safe configuration for a tenancy and region",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of the Data Safe configuration",
          options: [
            {
              name: "--compartment-id",
              description:
                "A filter to return the Data Safe configuration for the specified tenancy OCID",
              args: { name: "compartment-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "modify-global-settings",
          description:
            "Modifies Global Settings in Data Safe in the tenancy and region",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-paid-usage",
              description: "The paid usage option chosen by the customer admin",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--online-retention-period",
              description: "The online retention period in months",
              args: { name: "integer" },
            },
            {
              name: "--offline-retention-period",
              description: "The offline retention period in months",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable",
          description: "Enables Data Safe in the tenancy and region",
          options: [
            {
              name: "--is-enabled",
              description: "Indicates if Data Safe is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optCompartmentId2,
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
      name: "masking-schema",
      description: "A collection of masking schema summary objects",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of masking schemas present in the specified masking policy and based on the specified query",
          options: [
            optMaskingPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy4,
            optSchemaName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "masking-object",
      description: "A collection of masking object summary objects",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of masking objects present in the specified masking policy and based on the specified query",
          options: [
            optMaskingPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["schemaName", "objectName", "objectType"] },
            },
            optSchemaName,
            optObjectName,
            optObjectType,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sensitive-schema",
      description: "A collection of sensitive schema summary objects",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of sensitive schemas present in the specified sensitive data model based on the specified query",
          options: [
            optSensitiveDataModelId,
            optSchemaName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy4,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sensitive-object",
      description: "A collection of sensitive object summary objects",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of sensitive objects present in the specified sensitive data model based on the specified query",
          options: [
            optSensitiveDataModelId,
            optSchemaName,
            optObjectName,
            optObjectType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["schemaName", "objectName", "objectType"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "audit-policy-analytics",
      description: "Details of audit policy aggregation",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of aggregated audit policy details on the target databases",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            {
              name: "--group-by",
              description:
                "The group by parameter to summarize audit policy aggregation",
              args: {
                suggestions: [
                  "auditPolicyCategory",
                  "auditPolicyName",
                  "targetId",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--audit-policy-category",
              description: "The category to which the audit policy belongs to",
              args: {
                suggestions: [
                  "BASIC_ACTIVITY",
                  "ADMIN_USER_ACTIVITY",
                  "USER_ACTIVITY",
                  "ORACLE_PREDEFINED",
                  "COMPLIANCE_STANDARD",
                  "CUSTOM",
                  "SQL_FIREWALL_AUDITING",
                ],
              },
            },
            {
              name: "--audit-policy-name",
              description:
                "In case of seeded policies, it is the policy name defined by Data Safe",
              args: { name: "audit-policy-name" },
            },
            optTargetId,
            optTargetDatabaseGroupId,
            {
              name: "--lifecycle-state",
              description: "The current state of the audit policy",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-collection-analytics",
      description: "SQL collection analytics collection",
      subcommands: [
        {
          name: "list",
          description:
            "Retrieves a list of all SQL collection analytics in Data Safe",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the SQL collection",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "COLLECTING",
                  "COMPLETED",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optTargetId,
            optTargetDatabaseGroupId,
            {
              name: "--group-by",
              description:
                "The group by parameter to summarize SQL collection aggregation",
              args: { suggestions: ["targetId", "lifecycleState"] },
              isRepeatable: true,
            },
            {
              name: "--time-started",
              description:
                "An optional filter to return the stats of the SQL collection logs collected after the date-time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-ended",
              description:
                "An optional filter to return the stats of the SQL collection logs collected before the date-time specified",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-collection-log-insights",
      description: "SQL collection log analytics collection",
      subcommands: [
        {
          name: "list",
          description: "Retrieves a list of the SQL collection log analytics",
          options: [
            {
              name: "--time-started",
              description:
                "An optional filter to return the stats of the SQL collection logs collected after the date-time specified",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-ended",
              description:
                "An optional filter to return the stats of the SQL collection logs collected before the date-time specified",
              args: { name: "datetime" },
              isRequired: true,
            },
            optSqlCollectionId,
            optLimit,
            optPage,
            {
              name: "--group-by",
              description:
                "The group by parameter to summarize SQL collection log insights aggregation",
              args: {
                suggestions: ["clientIp", "clientProgram", "clientOsUserName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-firewall-allowed-sql-analytics",
      description: "SQL Firewall allowed SQL analytics collection",
      subcommands: [
        {
          name: "list",
          description:
            "Returns the aggregation details of all SQL Firewall allowed SQL statements",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optScimQuery,
            {
              name: "--group-by",
              description:
                "The group by parameter to summarize the allowed SQL aggregation",
              args: {
                suggestions: [
                  "dbUserName",
                  "sqlLevel",
                  "sqlFirewallPolicyId",
                  "lifecycleState",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-firewall-policy-analytics",
      description: "SQL Firewall policy analytics collection",
      subcommands: [
        {
          name: "list",
          description: "Gets a list of aggregated SQL Firewall policy details",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            {
              name: "--group-by",
              description:
                "The group by parameter to summarize SQL Firewall policy aggregation",
              args: {
                suggestions: [
                  "violationAction",
                  "enforcementScope",
                  "securityPolicyId",
                  "lifecycleState",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description: "The current state of the SQL Firewall policy",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optSecurityPolicyId,
            {
              name: "--time-started",
              description:
                "An optional filter to return the summary of the SQL Firewall policies created after the date-time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-ended",
              description:
                "An optional filter to return the summary of the SQL Firewall policies created before the date-time specified",
              args: { name: "datetime" },
            },
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
