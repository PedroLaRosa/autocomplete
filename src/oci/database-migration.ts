// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
      "WAITING",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optAssessmentId: Fig.Option = {
  name: "--assessment-id",
  description: "The OCID of the Assessment",
  args: { name: "assessment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optJobId: Fig.Option = {
  name: "--job-id",
  description: "The OCID of the job",
  args: { name: "job-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
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
const optMigrationId: Fig.Option = {
  name: "--migration-id",
  description: "The OCID of the migration",
  args: { name: "migration-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A user-friendly description",
  args: { name: "description" },
};
const optAssessorName: Fig.Option = {
  name: "--assessor-name",
  description: "The name of the Assessor",
  args: { name: "assessor-name" },
  isRequired: true,
};
const optBulkIncludeExcludeData: Fig.Option = {
  name: "--bulk-include-exclude-data",
  description:
    "Specifies the database objects to be excluded from the migration in bulk",
  args: { name: "bulk-include-exclude-data" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the resource being referenced",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optCheckName: Fig.Option = {
  name: "--check-name",
  description: "The Name of the assessor check",
  args: { name: "check-name" },
  isRequired: true,
};
const optConnectionId: Fig.Option = {
  name: "--connection-id",
  description: "The OCID of the database connection",
  args: { name: "connection-id" },
  isRequired: true,
};
const optCreationType: Fig.Option = {
  name: "--creation-type",
  description: "The type of assessment creation",
  args: { suggestions: ["CREATE_ONLY", "CREATE_AND_RUN_ASSESSORS"] },
};
const optSourceDatabaseConnection: Fig.Option = {
  name: "--source-database-connection",
  args: { name: "json" },
  isRequired: true,
};
const optTargetDatabaseConnection: Fig.Option = {
  name: "--target-database-connection",
  args: { name: "json" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "UNKNOWN",
      "TERMINATED",
      "FAILED",
      "SUCCEEDED",
      "WAITING",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optAdvisorReportCheckId: Fig.Option = {
  name: "--advisor-report-check-id",
  description: "The ID of the advisor check",
  args: { name: "advisor-report-check-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the resource being referenced",
  args: { name: "compartment-id" },
};
const optDatabaseCombination: Fig.Option = {
  name: "--database-combination",
  description:
    "The combination of source and target databases participating in a migration",
  args: { suggestions: ["MYSQL", "ORACLE"] },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optNsgIds: Fig.Option = {
  name: "--nsg-ids",
  description:
    "An array of Network Security Group OCIDs used to define network access for Connections",
  args: { name: "json" },
};
const optReplicationPassword: Fig.Option = {
  name: "--replication-password",
  description:
    "The password (credential) used when creating or updating this resource",
  args: { name: "replication-password" },
};
const optReplicationUsername: Fig.Option = {
  name: "--replication-username",
  description:
    "The username (credential) used when creating or updating this resource",
  args: { name: "replication-username" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["name"] },
};
const optSubnetId: Fig.Option = {
  name: "--subnet-id",
  description: "OCI resource ID",
  args: { name: "subnet-id" },
};
const optAdvisorSettings: Fig.Option = {
  name: "--advisor-settings",
  args: { name: "json" },
};
const optAssessmentId2: Fig.Option = {
  name: "--assessment-id",
  description: "The OCID of the resource being referenced",
  args: { name: "assessment-id" },
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDataTransferMediumDetails: Fig.Option = {
  name: "--data-transfer-medium-details",
  args: { name: "json" },
};
const optExcludeObjects: Fig.Option = {
  name: "--exclude-objects",
  description:
    "Database objects to exclude from migration, cannot be specified alongside 'includeObjects'",
  args: { name: "json" },
};
const optGgsDetails: Fig.Option = {
  name: "--ggs-details",
  args: { name: "json" },
};
const optHubDetails: Fig.Option = {
  name: "--hub-details",
  args: { name: "json" },
};
const optIncludeObjects: Fig.Option = {
  name: "--include-objects",
  description:
    "Database objects to include from migration, cannot be specified alongside 'excludeObjects'",
  args: { name: "json" },
};
const optInitialLoadSettings: Fig.Option = {
  name: "--initial-load-settings",
  args: { name: "json" },
};
const optSourceDatabaseConnectionId: Fig.Option = {
  name: "--source-database-connection-id",
  description: "The OCID of the resource being referenced",
  args: { name: "source-database-connection-id" },
};
const optTargetDatabaseConnectionId: Fig.Option = {
  name: "--target-database-connection-id",
  description: "The OCID of the resource being referenced",
  args: { name: "target-database-connection-id" },
};
const optAcceptableDowntime: Fig.Option = {
  name: "--acceptable-downtime",
  description: "Time allowed for the application downtime",
  args: {
    suggestions: [
      "LESS_THAN_10_MINUTES",
      "LESS_THAN_1_HOUR",
      "LESS_THAN_4_HOURS",
      "LESS_THAN_8_HOURS",
      "LESS_THAN_12_HOURS",
      "LESS_THAN_1_DAY",
      "LESS_THAN_2_DAYS",
      "MORE_THAN_2_DAYS",
    ],
  },
  isRequired: true,
};
const optAcceptableDowntime2: Fig.Option = {
  name: "--acceptable-downtime",
  description: "Time allowed for the application downtime",
  args: {
    suggestions: [
      "LESS_THAN_10_MINUTES",
      "LESS_THAN_1_HOUR",
      "LESS_THAN_4_HOURS",
      "LESS_THAN_8_HOURS",
      "LESS_THAN_12_HOURS",
      "LESS_THAN_1_DAY",
      "LESS_THAN_2_DAYS",
      "MORE_THAN_2_DAYS",
    ],
  },
};
const optConnectionString: Fig.Option = {
  name: "--connection-string",
  description:
    "Connect descriptor or Easy Connect Naming method used to connect to a database",
  args: { name: "connection-string" },
};
const optDatabaseDataSize: Fig.Option = {
  name: "--database-data-size",
  description: "The size of a source database",
  args: {
    suggestions: [
      "LESS_THAN_1GB",
      "GB_1_10",
      "GB_10_50",
      "GB_50_100",
      "GB_100_500",
      "GB_500_TB_1",
      "TB_1_3",
      "TB_3_10",
      "TB_10_50",
      "GREATER_THAN_50TB",
    ],
  },
  isRequired: true,
};
const optDatabaseDataSize2: Fig.Option = {
  name: "--database-data-size",
  description: "The size of a source database",
  args: {
    suggestions: [
      "LESS_THAN_1GB",
      "GB_1_10",
      "GB_10_50",
      "GB_50_100",
      "GB_100_500",
      "GB_500_TB_1",
      "TB_1_3",
      "TB_3_10",
      "TB_10_50",
      "GREATER_THAN_50TB",
    ],
  },
};
const optDatabaseId: Fig.Option = {
  name: "--database-id",
  description: "The OCID of the database being referenced",
  args: { name: "database-id" },
};
const optDdlExpectation: Fig.Option = {
  name: "--ddl-expectation",
  description: "DDL expectation values",
  args: { suggestions: ["DDL_EXPECTED", "DDL_NOT_EXPECTED"] },
  isRequired: true,
};
const optDdlExpectation2: Fig.Option = {
  name: "--ddl-expectation",
  description: "DDL expectation values",
  args: { suggestions: ["DDL_EXPECTED", "DDL_NOT_EXPECTED"] },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
  isRequired: true,
};
const optFilter: Fig.Option = {
  name: "--filter",
  description:
    "Free-text filter applied by the service to relevant fields for the report",
  args: { name: "filter" },
};
const optKeyId: Fig.Option = {
  name: "--key-id",
  description: "The OCID of the key used in cryptographic operations",
  args: { name: "key-id" },
  isRequired: true,
};
const optMigrationSettings: Fig.Option = {
  name: "--migration-settings",
  args: { name: "json" },
};
const optNetworkSpeedMegabitPerSecond: Fig.Option = {
  name: "--network-speed-megabit-per-second",
  description: "A network speed in Megabits per second",
  args: {
    suggestions: [
      "MBPS_10",
      "MBPS_100",
      "MBPS_1000",
      "MBPS_2500",
      "MBPS_5000",
      "MBPS_10000",
    ],
  },
  isRequired: true,
};
const optNetworkSpeedMegabitPerSecond2: Fig.Option = {
  name: "--network-speed-megabit-per-second",
  description: "A network speed in Megabits per second",
  args: {
    suggestions: [
      "MBPS_10",
      "MBPS_100",
      "MBPS_1000",
      "MBPS_2500",
      "MBPS_5000",
      "MBPS_10000",
    ],
  },
};
const optParameterFileName: Fig.Option = {
  name: "--parameter-file-name",
  description:
    "A unique name associated with the current migration/job and extract/replicat name",
  args: { name: "parameter-file-name" },
  isRequired: true,
};
const optPassword: Fig.Option = {
  name: "--password",
  description:
    "The password (credential) used when creating or updating this resource",
  args: { name: "password" },
  isRequired: true,
};
const optSourceDatabaseConnection2: Fig.Option = {
  name: "--source-database-connection",
  args: { name: "json" },
};
const optSshHost: Fig.Option = {
  name: "--ssh-host",
  description: "Name of the host the SSH key is valid for",
  args: { name: "ssh-host" },
};
const optSshKey: Fig.Option = {
  name: "--ssh-key",
  description: "Private SSH key string",
  args: { name: "ssh-key" },
};
const optSshSudoLocation: Fig.Option = {
  name: "--ssh-sudo-location",
  description: "Sudo location",
  args: { name: "ssh-sudo-location" },
};
const optSshUser: Fig.Option = {
  name: "--ssh-user",
  description:
    "The username (credential) used when creating or updating this resource",
  args: { name: "ssh-user" },
};
const optTargetDatabaseConnection2: Fig.Option = {
  name: "--target-database-connection",
  args: { name: "json" },
};
const optUsername: Fig.Option = {
  name: "--username",
  description:
    "The username (credential) used when creating or updating this resource",
  args: { name: "username" },
  isRequired: true,
};
const optVaultId: Fig.Option = {
  name: "--vault-id",
  description: "OCI resource ID",
  args: { name: "vault-id" },
  isRequired: true,
};
const optWallet: Fig.Option = {
  name: "--wallet",
  description: "The wallet contents used to make connections to a database",
  args: { name: "wallet" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "database-migration",
  description: "Database Migration",
  subcommands: [
    {
      name: "assessor-check",
      description: "Assessor Check",
      subcommands: [
        {
          name: "get",
          description: "Get Assessor Check details",
          options: [
            optAssessmentId,
            optCompartmentId,
            optAssessorName,
            optCheckName,
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list-affected-objects",
          description: "Display Check Affected objects",
          options: [
            optAssessmentId,
            optAssessorName,
            optCheckName,
            optIfMatch,
            optSortBy2,
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
      name: "assessment-summary",
      description: "Assessment Summary resource",
      subcommands: [
        {
          name: "list-assessments",
          description: "List all Assessments",
          options: [
            optCompartmentId,
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the Assessment",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "SUCCEEDED",
                  "IN_PROGRESS",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--lifecycle-details",
              description: "The lifecycle detailed status of the Migration",
              args: {
                suggestions: [
                  "READY",
                  "ABORTING",
                  "VALIDATING",
                  "VALIDATED",
                  "ASSESSED",
                  "WAITING",
                  "MIGRATING",
                  "DONE",
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
      name: "assessor",
      description: "Assessor resource",
      subcommands: [
        {
          name: "get",
          description: "Display Assessor details",
          options: [optAssessmentId, optAssessorName, optIfMatch, optFromJson],
        },
      ],
    },
    {
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the work requests in a compartment or for a specified resource",
          options: [
            optCompartmentId,
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
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
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
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
      name: "advisor-report-check-collection",
      description: "Pre-Migration extended advisor report result",
      subcommands: [
        {
          name: "update-advisor-report-check-objects",
          description:
            "Update the Pre-Migration extended Advisor report object list",
          options: [
            optJobId,
            optAdvisorReportCheckId,
            {
              name: "--kind",
              description: "Type of update advisor report check",
              args: { suggestions: ["ALL_OBJECTS", "LIST_OBJECTS"] },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-advisor-report-check-objects-all-update-advisor-report-check-objects-details",
          description:
            "Update the Pre-Migration extended Advisor report object list",
          options: [
            optJobId,
            optAdvisorReportCheckId,
            {
              name: "--is-exclude",
              description: "Flag showing the action on the object",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-advisor-report-check-objects-list-update-advisor-report-check-objects-details",
          description:
            "Update the Pre-Migration extended Advisor report object list",
          options: [
            optJobId,
            optAdvisorReportCheckId,
            {
              name: "--items",
              description: "Array of check objects",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-check-action-update-object",
          description: "Update the advisor report object list",
          options: [
            optAssessmentId,
            optAssessorName,
            optCheckName,
            {
              name: "--kind",
              description: "Type of update advisor report check",
              args: { suggestions: ["ALL_OBJECTS", "LIST_OBJECTS"] },
              isRequired: true,
            },
            optIfMatch,
            optSortBy2,
            optSortOrder,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "update-check-action-update-object-list-update-check-action-update-object-details",
          description: "Update the advisor report object list",
          options: [
            optAssessmentId,
            optAssessorName,
            optCheckName,
            {
              name: "--items",
              description: "Array of check objects",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optSortBy2,
            optSortOrder,
            optLimit,
            optPage,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update-check-action-update-object-all-update-check-action-update-object-details",
          description: "Update the advisor report object list",
          options: [
            optAssessmentId,
            optAssessorName,
            optCheckName,
            {
              name: "--is-exclude",
              description: "Flag showing the action on the object",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optSortBy2,
            optSortOrder,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "assessment",
      description: "Assessment resource",
      subcommands: [
        {
          name: "add",
          description: "Add excluded/included object to the list",
          options: [
            optAssessmentId,
            optDatabaseCombination,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "add-assessment-objects-oracle-assessment-object-collection",
          description: "Add excluded/included object to the list",
          options: [
            optAssessmentId,
            {
              name: "--items",
              description: "An array of database objects",
              args: { name: "json" },
              isRequired: true,
            },
            optBulkIncludeExcludeData,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "add-assessment-objects-my-sql-assessment-object-collection",
          description: "Add excluded/included object to the list",
          options: [
            optAssessmentId,
            {
              name: "--items",
              description: "An array of affected database objects",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Used to change the Assessment compartment",
          options: [
            optAssessmentId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "clone",
          description: "Clone a configuration from an existing Assessment",
          options: [
            optAssessmentId,
            optDatabaseCombination,
            optSourceDatabaseConnection,
            optTargetDatabaseConnection,
            optDisplayName,
            optCompartmentId3,
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
          name: "clone-assessment-my-sql-clone-assessment-details",
          description: "Clone a configuration from an existing Assessment",
          options: [
            optAssessmentId,
            optSourceDatabaseConnection,
            optTargetDatabaseConnection,
            optDisplayName,
            optCompartmentId3,
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
          name: "clone-assessment-oracle-clone-assessment-details",
          description: "Clone a configuration from an existing Assessment",
          options: [
            optAssessmentId,
            optSourceDatabaseConnection,
            optTargetDatabaseConnection,
            optDisplayName,
            optCompartmentId3,
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
          name: "create",
          description:
            "Create an Assessment resource that contains all the details to perform the database assessment operation",
          options: [
            optCompartmentId2,
            optDatabaseCombination,
            optNetworkSpeedMegabitPerSecond,
            optAcceptableDowntime,
            optDatabaseDataSize,
            optDdlExpectation,
            optSourceDatabaseConnection,
            optTargetDatabaseConnection,
            optDescription,
            optDisplayName,
            optCreationType,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-assessment-create-oracle-assessment-details",
          description:
            "Create an Assessment resource that contains all the details to perform the database assessment operation",
          options: [
            optCompartmentId2,
            optNetworkSpeedMegabitPerSecond,
            optAcceptableDowntime,
            optDatabaseDataSize,
            optDdlExpectation,
            optSourceDatabaseConnection,
            optTargetDatabaseConnection,
            {
              name: "--migration-scope",
              description: "Assessment migration scope",
              args: { suggestions: ["SCHEMA", "FULL"] },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optCreationType,
            optFreeformTags,
            optDefinedTags,
            optExcludeObjects,
            optIncludeObjects,
            optBulkIncludeExcludeData,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-assessment-create-my-sql-assessment-details",
          description:
            "Create an Assessment resource that contains all the details to perform the database assessment operation",
          options: [
            optCompartmentId2,
            optNetworkSpeedMegabitPerSecond,
            optAcceptableDowntime,
            optDatabaseDataSize,
            optDdlExpectation,
            optSourceDatabaseConnection,
            optTargetDatabaseConnection,
            {
              name: "--migration-scope",
              description: "Assessment migration scope",
              args: { suggestions: ["SCHEMA", "FULL"] },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optCreationType,
            optFreeformTags,
            optDefinedTags,
            optExcludeObjects,
            optIncludeObjects,
            optBulkIncludeExcludeData,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the Assessment represented by the specified assessment ID",
          options: [
            optAssessmentId,
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
          description: "Display Assessment details",
          options: [optAssessmentId, optIfMatch, optFromJson],
        },
        {
          name: "perform-assessor-action",
          description: "Assessor Action",
          options: [
            optAssessmentId,
            optAssessorName,
            {
              name: "--assessor-action",
              description: "The Accessor Action",
              args: { name: "assessor-action" },
              isRequired: true,
            },
            {
              name: "--items",
              description: "Array of name-value details for assessor action",
              args: { name: "json" },
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
          name: "perform-assessor-action-download-sql",
          description: "Download SQL script Assessor Action",
          options: [
            optAssessmentId,
            optAssessorName,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "perform-assessor-check-action",
          description: "Assessor Check Action",
          options: [
            optAssessmentId,
            optAssessorName,
            optCheckName,
            {
              name: "--assessor-check-action",
              description: "The Accessor Check Action",
              args: { name: "assessor-check-action" },
              isRequired: true,
            },
            {
              name: "--items",
              description: "Array of user defined details for check action",
              args: { name: "json" },
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
          name: "remove",
          description: "Remove excluded/included objects",
          options: [
            optAssessmentId,
            optDatabaseCombination,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "remove-assessment-objects-oracle-assessment-object-collection",
          description: "Remove excluded/included objects",
          options: [
            optAssessmentId,
            {
              name: "--items",
              description: "An array of database objects",
              args: { name: "json" },
              isRequired: true,
            },
            optBulkIncludeExcludeData,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "remove-assessment-objects-my-sql-assessment-object-collection",
          description: "Remove excluded/included objects",
          options: [
            optAssessmentId,
            {
              name: "--items",
              description: "An array of affected database objects",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update Assessment resource details",
          options: [
            optAssessmentId,
            optDatabaseCombination,
            optDescription,
            optDisplayName,
            optNetworkSpeedMegabitPerSecond2,
            optAcceptableDowntime2,
            optDatabaseDataSize2,
            optDdlExpectation2,
            optCreationType,
            optSourceDatabaseConnection2,
            optTargetDatabaseConnection2,
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
          name: "update-assessment-update-my-sql-assessment-details",
          description: "Update Assessment resource details",
          options: [
            optAssessmentId,
            optDescription,
            optDisplayName,
            optNetworkSpeedMegabitPerSecond2,
            optAcceptableDowntime2,
            optDatabaseDataSize2,
            optDdlExpectation2,
            optCreationType,
            optSourceDatabaseConnection2,
            optTargetDatabaseConnection2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--migration-scope",
              description: "Assessment migration scope",
              args: { suggestions: ["SCHEMA", "FULL"] },
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
          name: "update-assessment-update-oracle-assessment-details",
          description: "Update Assessment resource details",
          options: [
            optAssessmentId,
            optDescription,
            optDisplayName,
            optNetworkSpeedMegabitPerSecond2,
            optAcceptableDowntime2,
            optDatabaseDataSize2,
            optDdlExpectation2,
            optCreationType,
            optSourceDatabaseConnection2,
            optTargetDatabaseConnection2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--migration-scope",
              description: "Assessment migration scope",
              args: { suggestions: ["SCHEMA", "FULL"] },
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
      name: "migration-parameter-summary",
      description: "Migration parameter response object",
      subcommands: [
        {
          name: "list-migration-parameters",
          description:
            "List of parameters that can be used to customize migrations",
          options: [
            {
              name: "--migration-type",
              description:
                "A filter to return only resources that match a certain Migration Type",
              args: { suggestions: ["ONLINE", "OFFLINE"] },
            },
            {
              name: "--database-combination",
              description:
                "A filter to return only resources that match a certain Database Combination",
              args: { suggestions: ["MYSQL", "ORACLE"] },
            },
            optLimit,
            optPage,
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
      name: "database-connection-type-summary",
      description:
        "Connection type e.g. ORACLE and array of technology type objects",
      subcommands: [
        {
          name: "list-database-connection-type",
          description: "List supported Database Types, Sub-types and Versions",
          options: [
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The array of technology types",
              args: {
                suggestions: [
                  "OCI_AUTONOMOUS_DATABASE",
                  "OCI_MYSQL",
                  "ORACLE_DATABASE",
                  "ORACLE_EXADATA",
                  "AMAZON_RDS_ORACLE",
                  "AMAZON_AURORA_MYSQL",
                  "AMAZON_RDS_MYSQL",
                  "AZURE_MYSQL",
                  "GOOGLE_CLOUD_SQL_MYSQL",
                  "MYSQL_SERVER",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--connection-type",
              description: "The array of connection types",
              args: { suggestions: ["MYSQL", "ORACLE"] },
              isRepeatable: true,
            },
            {
              name: "--source-connection-id",
              description: "The OCID of the source connection",
              args: { name: "source-connection-id" },
            },
            optLimit,
            optPage,
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
      name: "work-request-error",
      description:
        "An error encountered while executing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Gets the errors for a work request",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      name: "connection",
      description:
        "Represents the common details required for creating a new connection",
      subcommands: [
        {
          name: "change-compartment",
          description: "Used to change the Database Connection compartment",
          options: [
            optConnectionId,
            optCompartmentId4,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "connection-diagnostics",
          description: "Perform connection test for a database connection",
          options: [
            optConnectionId,
            optIfMatch,
            {
              name: "--is-assessment-validation",
              description:
                "When true, run assessment validation checks (e.g., DMSROLE) and include database information",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the Database Connection represented by the specified connection ID",
          options: [
            optConnectionId,
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
          description: "Display Database Connection details",
          options: [optConnectionId, optFromJson],
        },
        {
          name: "list",
          description: "List all Database Connections",
          options: [
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The array of technology types",
              args: {
                suggestions: [
                  "OCI_AUTONOMOUS_DATABASE",
                  "OCI_MYSQL",
                  "ORACLE_DATABASE",
                  "ORACLE_EXADATA",
                  "AMAZON_RDS_ORACLE",
                  "AMAZON_AURORA_MYSQL",
                  "AMAZON_RDS_MYSQL",
                  "AZURE_MYSQL",
                  "GOOGLE_CLOUD_SQL_MYSQL",
                  "MYSQL_SERVER",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--technology-sub-type",
              description: "The database technology sub-type",
              args: { name: "technology-sub-type" },
            },
            {
              name: "--connection-type",
              description: "The array of connection types",
              args: { suggestions: ["MYSQL", "ORACLE"] },
              isRepeatable: true,
            },
            {
              name: "--source-connection-id",
              description: "The OCID of the source database connection",
              args: { name: "source-connection-id" },
            },
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "The current state of the Database Migration Deployment",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-mysql-connection",
          description:
            "Create a Database Connection resource that contains the details to connect to either a Source or Target",
          options: [
            optDisplayName3,
            optCompartmentId4,
            optVaultId,
            optKeyId,
            optUsername,
            optPassword,
            {
              name: "--technology-type",
              description: "The type of MySQL source or target connection",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--database-name",
              description: "The name of the database being referenced",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: "--security-protocol",
              description: "Security Type for MySQL",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optSubnetId,
            optNsgIds,
            optReplicationUsername,
            optReplicationPassword,
            {
              name: "--host",
              description: "The IP Address of the host",
              args: { name: "host" },
            },
            {
              name: "--port",
              description: "The port to be used for the connection",
              args: { name: "integer" },
            },
            {
              name: "--ssl-mode",
              description: "SSL modes for MySQL",
              args: { name: "ssl-mode" },
            },
            {
              name: "--ssl-ca",
              description:
                "Database Certificate - The base64 encoded content of mysql.pem file containing the server public key",
              args: { name: "ssl-ca" },
            },
            {
              name: "--ssl-crl",
              description:
                "Certificates revoked by certificate authorities (CA)",
              args: { name: "ssl-crl" },
            },
            {
              name: "--ssl-cert",
              description:
                "Client Certificate - The base64 encoded content of client-cert.pem file containing the client public key",
              args: { name: "ssl-cert" },
            },
            {
              name: "--ssl-key",
              description:
                "Client Key - The client-key.pem containing the client private key (for 2-way SSL)",
              args: { name: "ssl-key" },
            },
            {
              name: "--additional-attributes",
              description: "An array of name-value pair attribute entries",
              args: { name: "json" },
            },
            {
              name: "--db-system-id",
              description: "The OCID of the database system being referenced",
              args: { name: "db-system-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oracle-connection",
          description:
            "Create a Database Connection resource that contains the details to connect to either a Source or Target",
          options: [
            optDisplayName3,
            optCompartmentId4,
            optVaultId,
            optKeyId,
            optUsername,
            optPassword,
            {
              name: "--technology-type",
              description: "The Oracle technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optSubnetId,
            optNsgIds,
            optReplicationUsername,
            optReplicationPassword,
            optConnectionString,
            optWallet,
            optDatabaseId,
            optSshHost,
            optSshKey,
            optSshUser,
            optSshSudoLocation,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mysql-connection",
          description: "Update Database Connection resource details",
          options: [
            optConnectionId,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--vault-id",
              description: "OCI resource ID",
              args: { name: "vault-id" },
            },
            {
              name: "--key-id",
              description:
                "The OCID of the key used in cryptographic operations",
              args: { name: "key-id" },
            },
            optSubnetId,
            optNsgIds,
            {
              name: "--username",
              description:
                "The username (credential) used when creating or updating this resource",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password (credential) used when creating or updating this resource",
              args: { name: "password" },
            },
            optReplicationUsername,
            optReplicationPassword,
            {
              name: "--host",
              description: "The IP Address of the host",
              args: { name: "host" },
            },
            {
              name: "--port",
              description: "The port to be used for the connection",
              args: { name: "integer" },
            },
            {
              name: "--database-name",
              description: "The name of the database being referenced",
              args: { name: "database-name" },
            },
            {
              name: "--security-protocol",
              description: "Security Type for MySQL",
              args: { name: "security-protocol" },
            },
            {
              name: "--ssl-mode",
              description: "SSL modes for MySQL",
              args: { name: "ssl-mode" },
            },
            {
              name: "--ssl-ca",
              description:
                "Database Certificate - The base64 encoded content of mysql.pem file containing the server public key",
              args: { name: "ssl-ca" },
            },
            {
              name: "--ssl-crl",
              description:
                "Certificates revoked by certificate authorities (CA)",
              args: { name: "ssl-crl" },
            },
            {
              name: "--ssl-cert",
              description:
                "Client Certificate - The base64 encoded content of client-cert.pem file containing the client public key",
              args: { name: "ssl-cert" },
            },
            {
              name: "--ssl-key",
              description:
                "Client Key - The client-key.pem containing the client private key (for 2-way SSL)",
              args: { name: "ssl-key" },
            },
            {
              name: "--additional-attributes",
              description: "An array of name-value pair attribute entries",
              args: { name: "json" },
            },
            {
              name: "--db-system-id",
              description: "The OCID of the database system being referenced",
              args: { name: "db-system-id" },
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
          name: "update-oracle-connection",
          description: "Update Database Connection resource details",
          options: [
            optConnectionId,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--vault-id",
              description: "OCI resource ID",
              args: { name: "vault-id" },
            },
            {
              name: "--key-id",
              description:
                "The OCID of the key used in cryptographic operations",
              args: { name: "key-id" },
            },
            optSubnetId,
            optNsgIds,
            {
              name: "--username",
              description:
                "The username (credential) used when creating or updating this resource",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password (credential) used when creating or updating this resource",
              args: { name: "password" },
            },
            optReplicationUsername,
            optReplicationPassword,
            optConnectionString,
            optWallet,
            optDatabaseId,
            optSshHost,
            optSshKey,
            optSshUser,
            optSshSudoLocation,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-connection-create-oracle-connection-details",
          description:
            "Create a Database Connection resource that contains the details to connect to either a Source or Target",
          options: [
            optDisplayName3,
            optCompartmentId4,
            optVaultId,
            optKeyId,
            optUsername,
            optPassword,
            {
              name: "--technology-type",
              description: "The Oracle technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optSubnetId,
            optNsgIds,
            optReplicationUsername,
            optReplicationPassword,
            optConnectionString,
            optWallet,
            optDatabaseId,
            optSshHost,
            optSshKey,
            optSshUser,
            optSshSudoLocation,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--sshkey-file",
              description: "Private ssh key file",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "assessment-object-type-summary",
      description: "Assessment Object Type",
      subcommands: [
        {
          name: "list-assessment-object-types",
          description:
            "Display sample object types to exclude or include for an Assessment",
          options: [
            {
              name: "--connection-type",
              description: "The connection type for assessment objects",
              args: { suggestions: ["MYSQL", "ORACLE"] },
              isRequired: true,
            },
            optSortBy2,
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
      name: "assessor-check-summary",
      description: "Assessor Check Summary",
      subcommands: [
        {
          name: "list-assessor-checks",
          description: "List Assessor Check Summaries",
          options: [
            optAssessmentId,
            optCompartmentId,
            optAssessorName,
            optDisplayName2,
            optLimit,
            optPage,
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
      name: "assessment-object-collection",
      description: "Assessment Objects collection",
      subcommands: [
        {
          name: "list-assessment-objects",
          description: "Display excluded/included objects",
          options: [
            optAssessmentId,
            optIfMatch,
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
      name: "excluded-object-summary",
      description: "Excluded object summary line",
      subcommands: [
        {
          name: "list",
          description: "List the excluded database objects",
          options: [
            optJobId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["type", "reasonCategory"] },
            },
            {
              name: "--type",
              description: "Excluded object type",
              args: { name: "type" },
            },
            {
              name: "--owner",
              description: "Excluded object owner",
              args: { name: "owner" },
            },
            {
              name: "--object",
              description: "Excluded object name",
              args: { name: "object" },
            },
            {
              name: "--owner-contains",
              description:
                "Excluded object owner which contains provided value",
              args: { name: "owner-contains" },
            },
            {
              name: "--object-contains",
              description: "Excluded object name which contains provided value",
              args: { name: "object-contains" },
            },
            {
              name: "--reason-category",
              description: "Reason category for the excluded object",
              args: {
                suggestions: [
                  "ORACLE_MAINTAINED",
                  "GG_UNSUPPORTED",
                  "USER_EXCLUDED",
                  "MANDATORY_EXCLUDED",
                  "USER_EXCLUDED_TYPE",
                ],
              },
            },
            {
              name: "--source-rule",
              description:
                "Exclude object rule that matches the excluded object, if applicable",
              args: { name: "source-rule" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "assessor-summary",
      description: "Assessor Summary",
      subcommands: [
        {
          name: "list-assessors",
          description: "List all Assessors",
          options: [
            optAssessmentId,
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the Assessor",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "NEEDS_ATTENTION",
                  "FAILED",
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
      name: "migration",
      description: "Migration resource",
      subcommands: [
        {
          name: "change-compartment",
          description: "Used to change the Migration compartment",
          options: [optMigrationId, optCompartmentId2, optIfMatch, optFromJson],
        },
        {
          name: "delete",
          description:
            "Deletes the Migration represented by the specified migration ID",
          options: [
            optMigrationId,
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
          description: "Display Migration details",
          options: [optMigrationId, optIfMatch, optFromJson],
        },
        {
          name: "retrieve-supported-phases",
          description: "Display Migration Phases for a specified migration",
          options: [optMigrationId, optFromJson],
        },
        {
          name: "evaluate",
          description: "Start Validate Migration job",
          options: [
            optMigrationId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Start Migration job",
          options: [
            optMigrationId,
            optIfMatch,
            {
              name: "--wait-after",
              description: "Name of a migration phase",
              args: {
                suggestions: [
                  "ODMS_VALIDATE_TGT",
                  "ODMS_VALIDATE_SRC",
                  "ODMS_VALIDATE_PREMIGRATION_ADVISOR",
                  "ODMS_VALIDATE_GG_HUB",
                  "ODMS_VALIDATE_DATAPUMP_SETTINGS",
                  "ODMS_VALIDATE_DATAPUMP_SETTINGS_SRC",
                  "ODMS_VALIDATE_DATAPUMP_SETTINGS_TGT",
                  "ODMS_VALIDATE_DATAPUMP_SRC",
                  "ODMS_VALIDATE_DATAPUMP_ESTIMATE_SRC",
                  "ODMS_FETCH_METADATA_SRC",
                  "ODMS_FETCH_METADATA_TGT",
                  "ODMS_VALIDATE",
                  "ODMS_PREPARE",
                  "ODMS_INITIALIZE_REPLICATION_INFRASTRUCTURE",
                  "ODMS_INITIAL_LOAD_EXPORT",
                  "ODMS_DATA_UPLOAD",
                  "ODMS_METADATA_TRANSFER",
                  "ODMS_INITIAL_LOAD_EXPORT_DATA_UPLOAD",
                  "ODMS_INITIAL_LOAD_IMPORT",
                  "ODMS_POST_INITIAL_LOAD",
                  "ODMS_PREPARE_REPLICATION_TARGET",
                  "ODMS_MONITOR_REPLICATION_LAG",
                  "ODMS_SWITCHOVER",
                  "ODMS_CLEANUP",
                ],
              },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List all Migrations",
          options: [
            optCompartmentId,
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the Migration",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "IN_PROGRESS",
                  "ACCEPTED",
                  "SUCCEEDED",
                  "CANCELED",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--lifecycle-details",
              description: "The lifecycle detailed status of the Migration",
              args: {
                suggestions: [
                  "READY",
                  "ABORTING",
                  "VALIDATING",
                  "VALIDATED",
                  "ASSESSED",
                  "WAITING",
                  "MIGRATING",
                  "DONE",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "add-mysql-objects",
          description: "Add excluded/included object to the list",
          options: [
            optMigrationId,
            {
              name: "--items",
              description:
                "An array of database objects that are either included or excluded from the migration",
              args: { name: "json" },
              isRequired: true,
            },
            optBulkIncludeExcludeData,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "add-oracle-objects",
          description: "Add excluded/included object to the list",
          options: [
            optMigrationId,
            {
              name: "--items",
              description: "Database objects to exclude/include from migration",
              args: { name: "json" },
              isRequired: true,
            },
            optBulkIncludeExcludeData,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "clone-mysql-migration",
          description: "Clone a configuration from an existing Migration",
          options: [
            optMigrationId,
            {
              name: "--source-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "source-database-connection-id" },
              isRequired: true,
            },
            {
              name: "--target-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "target-database-connection-id" },
              isRequired: true,
            },
            optDisplayName,
            optCompartmentId3,
            optAssessmentId2,
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
          name: "clone-oracle-migration",
          description: "Clone a configuration from an existing Migration",
          options: [
            optMigrationId,
            {
              name: "--source-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "source-database-connection-id" },
              isRequired: true,
            },
            {
              name: "--target-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "target-database-connection-id" },
              isRequired: true,
            },
            optDisplayName,
            optCompartmentId3,
            optAssessmentId2,
            optFreeformTags,
            optDefinedTags,
            optMigrationSettings,
            {
              name: "--source-container-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "source-container-database-connection-id" },
            },
            {
              name: "--source-standby-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "source-standby-database-connection-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-mysql-migration",
          description:
            "Create a Migration resource that contains all the details to perform the database migration operation",
          options: [
            optCompartmentId2,
            {
              name: "--type",
              description: "The type of the migration to be performed",
              args: { suggestions: ["ONLINE", "OFFLINE"] },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optSourceDatabaseConnectionId,
            optTargetDatabaseConnectionId,
            optFreeformTags,
            optDefinedTags,
            optAssessmentId2,
            optDataTransferMediumDetails,
            optInitialLoadSettings,
            optAdvisorSettings,
            optExcludeObjects,
            optIncludeObjects,
            optBulkIncludeExcludeData,
            optHubDetails,
            optGgsDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oracle-migration",
          description:
            "Create a Migration resource that contains all the details to perform the database migration operation",
          options: [
            optCompartmentId2,
            {
              name: "--type",
              description: "The type of the migration to be performed",
              args: { suggestions: ["ONLINE", "OFFLINE"] },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optSourceDatabaseConnectionId,
            optTargetDatabaseConnectionId,
            optFreeformTags,
            optDefinedTags,
            optAssessmentId2,
            optMigrationSettings,
            optDataTransferMediumDetails,
            optInitialLoadSettings,
            optAdvisorSettings,
            optHubDetails,
            optGgsDetails,
            {
              name: "--advanced-parameters",
              description: "List of Migration Parameter objects",
              args: { name: "json" },
            },
            {
              name: "--source-container-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "source-container-database-connection-id" },
            },
            {
              name: "--source-standby-database-connection-id",
              description: "The OCID of the resource being referenced",
              args: { name: "source-standby-database-connection-id" },
            },
            optExcludeObjects,
            optIncludeObjects,
            optBulkIncludeExcludeData,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-mysql-objects",
          description: "Remove excluded/included objects",
          options: [
            optMigrationId,
            {
              name: "--items",
              description:
                "An array of database objects that are either included or excluded from the migration",
              args: { name: "json" },
              isRequired: true,
            },
            optBulkIncludeExcludeData,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "remove-oracle-objects",
          description: "Remove excluded/included objects",
          options: [
            optMigrationId,
            {
              name: "--items",
              description: "Database objects to exclude/include from migration",
              args: { name: "json" },
              isRequired: true,
            },
            optBulkIncludeExcludeData,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-mysql-migration",
          description: "Update Migration resource details",
          options: [
            optMigrationId,
            optDescription,
            {
              name: "--type",
              description: "The type of the migration to be performed",
              args: { suggestions: ["ONLINE", "OFFLINE"] },
            },
            optDisplayName,
            optSourceDatabaseConnectionId,
            optTargetDatabaseConnectionId,
            optFreeformTags,
            optDefinedTags,
            optDataTransferMediumDetails,
            optInitialLoadSettings,
            optAdvisorSettings,
            optHubDetails,
            optGgsDetails,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-oracle-migration",
          description: "Update Migration resource details",
          options: [
            optMigrationId,
            optDescription,
            {
              name: "--type",
              description: "The type of the migration to be performed",
              args: { suggestions: ["ONLINE", "OFFLINE"] },
            },
            optDisplayName,
            optSourceDatabaseConnectionId,
            optTargetDatabaseConnectionId,
            optFreeformTags,
            optDefinedTags,
            optMigrationSettings,
            optDataTransferMediumDetails,
            optInitialLoadSettings,
            optAdvisorSettings,
            optHubDetails,
            optGgsDetails,
            {
              name: "--advanced-parameters",
              description: "List of Migration Parameter objects",
              args: { name: "json" },
            },
            {
              name: "--source-container-database-connection-id",
              description: "The OCID of the resource being updated",
              args: { name: "source-container-database-connection-id" },
            },
            {
              name: "--source-standby-database-connection-id",
              description: "The OCID of the resource being updated",
              args: { name: "source-standby-database-connection-id" },
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
          name: "data-verification",
          description: "Data Verification commands for a migration",
          subcommands: [
            {
              name: "get-detail",
              description:
                "Returns availability and report status information used by the Data Verification UI",
              options: [optMigrationId, optIfMatch, optFromJson],
            },
            {
              name: "list-object-statuses",
              description:
                "Lists per-object status comparison results for a migration",
              options: [
                optMigrationId,
                optCompartmentId,
                optIfMatch,
                {
                  name: "--name",
                  description:
                    "A filter to return only resources that match the entire name given",
                  args: { name: "name" },
                },
                {
                  name: "--owner",
                  description:
                    "A filter to return only results for a specific owner",
                  args: { name: "owner" },
                },
                {
                  name: "--object-type",
                  description:
                    "A filter to return only results for a specific object type",
                  args: { name: "object-type" },
                },
                optFilter,
                {
                  name: "--is-match",
                  description: "Match filter for object status results",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optLimit,
                optPage,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "isMatch",
                      "owner",
                      "objectType",
                      "objectName",
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
              name: "list-object-type-counts",
              description:
                "Lists object type count comparison results for a migration",
              options: [
                optMigrationId,
                optCompartmentId,
                optIfMatch,
                {
                  name: "--schema-name",
                  description:
                    "A filter to return only results for a specific schema/owner",
                  args: { name: "schema-name" },
                },
                {
                  name: "--object-type",
                  description:
                    "A filter to return only results for a specific object type",
                  args: { name: "object-type" },
                },
                optFilter,
                {
                  name: "--min-abs-delta-percent",
                  description:
                    "Minimum absolute deltaPercent threshold (magnitude) to return",
                  args: { name: "min-abs-delta-percent" },
                },
                optLimit,
                optPage,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "deltaPercent",
                      "schemaName",
                      "objectType",
                      "sourceObjectCount",
                      "targetObjectCount",
                      "sourceInvalidCount",
                      "targetInvalidCount",
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
              name: "list-table-row-counts",
              description:
                "Lists table row count comparison results for a migration",
              options: [
                optMigrationId,
                optCompartmentId,
                optIfMatch,
                {
                  name: "--owner",
                  description:
                    "A filter to return only results for a specific owner",
                  args: { name: "owner" },
                },
                {
                  name: "--table-name",
                  description:
                    "A filter to return only results for a specific table",
                  args: { name: "table-name" },
                },
                optFilter,
                {
                  name: "--min-abs-delta-percent",
                  description:
                    "Minimum absolute deltaPercent threshold (magnitude) to return",
                  args: { name: "min-abs-delta-percent" },
                },
                optLimit,
                optPage,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "variancePercent",
                      "owner",
                      "tableName",
                      "timeLastSourceStatisticsCollection",
                      "timeLastTargetStatisticsCollection",
                      "sourceRowCount",
                      "targetRowCount",
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
              name: "run",
              description:
                "Runs Data Verification for a migration and returns the updated Data Verification summary",
              options: [
                optMigrationId,
                {
                  name: "--type",
                  description:
                    "The type discriminator for Run Data Verification details",
                  args: { suggestions: ["DEFAULT"] },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "run-default",
              description:
                "Runs Data Verification for a migration and returns the updated Data Verification summary",
              options: [optMigrationId, optIfMatch, optFromJson],
            },
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Results of a Database Connection search",
      subcommands: [
        {
          name: "abort",
          description:
            "Aborts a Migration Job (either Evaluation or Migration)",
          options: [
            optJobId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "collect-traces",
          description: "Collects the DB trace and alert logs",
          options: [
            optJobId,
            {
              name: "--bucket-name",
              description: "Name of the bucket containing the file",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Object Storage namespace",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--object-name-prefix",
              description: "Object name prefix",
              args: { name: "object-name-prefix" },
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
          name: "create-parameter-file-version",
          description:
            "Creates a new version of the current parameter file contents to the specified value",
          options: [
            optJobId,
            {
              name: "--kind",
              description:
                "Indicator of Parameter File 'kind' (for an EXTRACT or a REPLICAT)",
              args: { suggestions: ["EXTRACT", "REPLICAT"] },
              isRequired: true,
            },
            {
              name: "--content",
              description:
                "The content in base64 encoded character string containing the value of the parameter file",
              args: { name: "content" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Describes the current parameter file version",
              args: { name: "description" },
            },
            {
              name: "--name",
              description: "Customizable name for the paramenter file version",
              args: { name: "name" },
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
          description:
            "Deletes the migration job represented by the given job ID",
          options: [
            optJobId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-parameter-file-version",
          description: "Deletes the given parameter file version",
          options: [
            optJobId,
            optParameterFileName,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-advisor-report",
          description: "Get the Pre-Migration Advisor report details",
          options: [optJobId, optFromJson],
        },
        {
          name: "get",
          description: "Get a migration job",
          options: [optJobId, optFromJson],
        },
        {
          name: "get-job-output-content",
          description: "Get the migration Job Output content as a String",
          options: [
            optJobId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-parameter-file-version",
          description:
            "Obtain the parameter file version contents for the specified parameter file name and the associated job",
          options: [optParameterFileName, optJobId, optFromJson],
        },
        {
          name: "list-advisor-report-check-objects",
          description:
            "Get the Pre-Migration extended Advisor report object list",
          options: [
            optJobId,
            optAdvisorReportCheckId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-advisor-report-checks",
          description: "List of Pre-Migration checks from the advisor",
          options: [
            optJobId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-parameter-file-versions",
          description:
            "Return a list of the parameter file metadata of the migration execution of the specified job",
          options: [
            optJobId,
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire name given",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "make-current-parameter-file-version",
          description: "Make current the given parameter file version",
          options: [
            optJobId,
            optParameterFileName,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "resume",
          description: "Resume a migration Job",
          options: [
            optJobId,
            optIfMatch,
            {
              name: "--wait-after",
              description: "Name of a migration phase",
              args: {
                suggestions: [
                  "ODMS_VALIDATE_TGT",
                  "ODMS_VALIDATE_SRC",
                  "ODMS_VALIDATE_PREMIGRATION_ADVISOR",
                  "ODMS_VALIDATE_GG_HUB",
                  "ODMS_VALIDATE_DATAPUMP_SETTINGS",
                  "ODMS_VALIDATE_DATAPUMP_SETTINGS_SRC",
                  "ODMS_VALIDATE_DATAPUMP_SETTINGS_TGT",
                  "ODMS_VALIDATE_DATAPUMP_SRC",
                  "ODMS_VALIDATE_DATAPUMP_ESTIMATE_SRC",
                  "ODMS_FETCH_METADATA_SRC",
                  "ODMS_FETCH_METADATA_TGT",
                  "ODMS_VALIDATE",
                  "ODMS_PREPARE",
                  "ODMS_INITIALIZE_REPLICATION_INFRASTRUCTURE",
                  "ODMS_INITIAL_LOAD_EXPORT",
                  "ODMS_DATA_UPLOAD",
                  "ODMS_METADATA_TRANSFER",
                  "ODMS_INITIAL_LOAD_EXPORT_DATA_UPLOAD",
                  "ODMS_INITIAL_LOAD_IMPORT",
                  "ODMS_POST_INITIAL_LOAD",
                  "ODMS_PREPARE_REPLICATION_TARGET",
                  "ODMS_MONITOR_REPLICATION_LAG",
                  "ODMS_SWITCHOVER",
                  "ODMS_CLEANUP",
                ],
              },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "suspend",
          description:
            "Place the currently executing migration Job in a Suspended State",
          options: [
            optJobId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update Migration Job resource details",
          options: [
            optJobId,
            {
              name: "--display-name",
              description: "Name of the job",
              args: { name: "display-name" },
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
        {
          name: "list",
          description:
            "List all the names of the Migration jobs associated to the specified migration site",
          options: [
            {
              name: "--migration-id",
              description: "The ID of the migration in which to list resources",
              args: { name: "migration-id" },
              isRequired: true,
            },
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the Migration Job",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "UNKNOWN",
                  "TERMINATED",
                  "FAILED",
                  "SUCCEEDED",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--job-id-not-equal-to",
              description: "The ID of the Job to exclude from the list of jobs",
              args: { name: "job-id-not-equal-to" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "advisor-report-check",
      subcommands: [
        {
          name: "update",
          description: "Update the premigration extended Advisor report check",
          options: [
            optJobId,
            optAdvisorReportCheckId,
            {
              name: "--is-reviewed",
              description: "User flag for advisor report check",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "binary",
      subcommands: [
        {
          name: "get-script",
          description: "Download DMS script",
          options: [
            {
              name: "--script-id",
              description: "The ID of the script to download",
              args: { suggestions: ["USER_CREATION_SQL_SCRIPT"] },
              isRequired: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "job-output",
      description: "Job output summary line",
      subcommands: [
        {
          name: "list",
          description: "List the Job Outputs",
          options: [
            optJobId,
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
      name: "work-request-logs",
      description:
        "A log message from executing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Gets the logs for a work request",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      name: "migration-objects",
      description: "Common Migration Objects collection",
      subcommands: [
        {
          name: "list",
          description: "Display excluded/included objects",
          options: [
            optMigrationId,
            optIfMatch,
            optLimit,
            optPage,
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
