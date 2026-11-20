// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optFleetId: Fig.Option = {
  name: "--fleet-id",
  description: "The OCID of the Fleet",
  args: { name: "fleet-id" },
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
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
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
const optTimeEnd: Fig.Option = {
  name: "--time-end",
  description:
    "The end of the time period during which resources are searched (formatted according to RFC3339)",
  args: { name: "datetime" },
};
const optTimeStart: Fig.Option = {
  name: "--time-start",
  description:
    "The start of the time period during which resources are searched (formatted according to RFC3339)",
  args: { name: "datetime" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "CANCELED",
      "CANCELING",
      "FAILED",
      "IN_PROGRESS",
      "SUCCEEDED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
  isRepeatable: true,
};
const optExecutionRecurrences: Fig.Option = {
  name: "--execution-recurrences",
  description:
    "Recurrence specification for the task schedule execution (formatted according to RFC-5545)",
  args: { name: "execution-recurrences" },
  isRequired: true,
};
const optManagedInstanceId: Fig.Option = {
  name: "--managed-instance-id",
  description: "The Fleet-unique identifier of the managed instance",
  args: { name: "managed-instance-id" },
};
const optTaskScheduleId: Fig.Option = {
  name: "--task-schedule-id",
  description: "The OCID to identify this task schedule",
  args: { name: "task-schedule-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optManagedInstanceId2: Fig.Option = {
  name: "--managed-instance-id",
  description: "The Fleet-unique identifier of the related managed instance",
  args: { name: "managed-instance-id" },
};
const optApplicationId: Fig.Option = {
  name: "--application-id",
  description: "The Fleet-unique identifier of the application",
  args: { name: "application-id" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optLibraryKey: Fig.Option = {
  name: "--library-key",
  description: "The library key",
  args: { name: "library-key" },
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "Flag to determine whether the info should be gathered only in the compartment or in the compartment and its",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optFleetId2: Fig.Option = {
  name: "--fleet-id",
  description: "The ID of the Fleet",
  args: { name: "fleet-id" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optJreVersion: Fig.Option = {
  name: "--jre-version",
  description: "The version of the related Java Runtime",
  args: { name: "jre-version" },
};
const optOsFamily: Fig.Option = {
  name: "--os-family",
  description: "The operating system type",
  args: { suggestions: ["LINUX", "WINDOWS", "MACOS", "UNKNOWN"] },
  isRepeatable: true,
};
const optApplicationId2: Fig.Option = {
  name: "--application-id",
  description: "The Fleet-unique identifier of the related application",
  args: { name: "application-id" },
};
const optApplicationName: Fig.Option = {
  name: "--application-name",
  description: "The name of the application",
  args: { name: "application-name" },
};
const optJreDistribution: Fig.Option = {
  name: "--jre-distribution",
  description: "The distribution of the related Java Runtime",
  args: { name: "jre-distribution" },
};
const optJreSecurityStatus: Fig.Option = {
  name: "--jre-security-status",
  description: "The security status of the Java Runtime",
  args: {
    suggestions: [
      "EARLY_ACCESS",
      "UNKNOWN",
      "UP_TO_DATE",
      "UPDATE_REQUIRED",
      "UPGRADE_REQUIRED",
    ],
  },
};
const optJreVendor: Fig.Option = {
  name: "--jre-vendor",
  description: "The vendor of the related Java Runtime",
  args: { name: "jre-vendor" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optApplicationKey: Fig.Option = {
  name: "--application-key",
  description: "The deployed application key",
  args: { name: "application-key" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The display name",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optHostName: Fig.Option = {
  name: "--host-name",
  description: "The host OCID of the managed instance",
  args: { name: "host-name" },
};
const optServerInstanceKey: Fig.Option = {
  name: "--server-instance-key",
  description: "The Java Server instance key",
  args: { name: "server-instance-key" },
};
const optServerKey: Fig.Option = {
  name: "--server-key",
  description: "The server key",
  args: { name: "server-key" },
};
const optDisplayNameContains: Fig.Option = {
  name: "--display-name-contains",
  description: "Filter the list with displayName contains the given value",
  args: { name: "display-name-contains" },
};
const optDrsFileKey: Fig.Option = {
  name: "--drs-file-key",
  description: "The unique identifier of the DRS File in Object Storage",
  args: { name: "drs-file-key" },
  isRequired: true,
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optFleetId3: Fig.Option = {
  name: "--fleet-id",
  description: "The OCID of the fleet",
  args: { name: "fleet-id" },
};
const optHostnameContains: Fig.Option = {
  name: "--hostname-contains",
  description: "Filter the list with hostname contains the given value",
  args: { name: "hostname-contains" },
};
const optInstallationPath: Fig.Option = {
  name: "--installation-path",
  description: "The file system path of the Java Runtime installation",
  args: { name: "installation-path" },
};
const optJmsPluginId: Fig.Option = {
  name: "--jms-plugin-id",
  description: "The OCID of the JmsPlugin",
  args: { name: "jms-plugin-id" },
  isRequired: true,
};
const optTargets: Fig.Option = {
  name: "--targets",
  description: "The attachment targets to start JFR",
  args: { name: "json" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE", "NEEDS_ATTENTION", "DELETED"] },
  isRepeatable: true,
};
const optWaitingPeriodInMinutes: Fig.Option = {
  name: "--waiting-period-in-minutes",
  description: "Period to looking for JVMs",
  args: { name: "integer" },
};
const completionSpec: Fig.Spec = {
  name: "jms",
  description: "Java Management Service Fleets",
  subcommands: [
    {
      name: "fleet",
      description:
        "A Fleet is the primary collection with which users interact when using Java Management Service",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move a specified Fleet into the compartment identified in the POST form",
          options: [
            optFleetId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the Fleet should be moved",
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
          name: "create-drs-file",
          description:
            "Request to perform validation of the DRS file and create the file to the Object Storage",
          options: [
            optFleetId,
            {
              name: "--bucket-name",
              description:
                "The Object Storage bucket name where the DRS file is located",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The namespace for Object Storage",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--drs-file-name",
              description: "The name of the DRS file in Object Store",
              args: { name: "drs-file-name" },
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
          description: "Create a new Fleet using the information provided",
          options: [
            {
              name: "--display-name",
              description: "The name of the Fleet",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment of the Fleet",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--inventory-log",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The Fleet's description",
              args: { name: "description" },
            },
            { name: "--operation-log", args: { name: "json" } },
            {
              name: "--is-advanced-features-enabled",
              description:
                "Whether or not advanced features are enabled in this Fleet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDefinedTags,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the Fleet specified by an identifier",
          options: [
            optFleetId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-drs",
          description:
            "Request to disable the DRS in the selected target in the Fleet",
          options: [
            optFleetId,
            { name: "--manage-drs-details", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-drs",
          description:
            "Request to enable the DRS in the selected target in the Fleet",
          options: [
            optFleetId,
            { name: "--manage-drs-details", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-agent-deploy-script",
          description:
            "Generates Agent Deploy Script for Fleet using the information provided",
          options: [
            optFleetId,
            {
              name: "--install-key-id",
              description:
                "The OCID of the install key for which to generate the script",
              args: { name: "install-key-id" },
              isRequired: true,
            },
            {
              name: "--os-family",
              description: "The operating system type for the script",
              args: { suggestions: ["LINUX", "WINDOWS", "MACOS", "UNKNOWN"] },
              isRequired: true,
            },
            {
              name: "--is-user-name-enabled",
              description: "Enable/disable user name collection on agent",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optFile,
            optFromJson,
          ],
        },
        {
          name: "generate-load-pipeline-script",
          description: "Generates Load Pipeline Script",
          options: [
            optFleetId,
            {
              name: "--target-bucket-name",
              description: "The name of the bucket where data will be exported",
              args: { name: "target-bucket-name" },
              isRequired: true,
            },
            {
              name: "--target-bucket-namespace",
              description:
                "The namespace of the bucket where data will be exported",
              args: { name: "target-bucket-namespace" },
              isRequired: true,
            },
            {
              name: "--target-bucket-region",
              description: "The id of the region of the target bucket",
              args: { name: "target-bucket-region" },
              isRequired: true,
            },
            optFile,
            {
              name: "--interval-minutes",
              description:
                "The time internal in minutes between consecutive executions of scheduled pipeline job",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieve a Fleet with the specified identifier",
          options: [optFleetId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all the Fleets contained by a compartment",
          options: [
            optCompartmentId,
            { name: "--id", description: "The ID", args: { name: "id" } },
            {
              name: "--lifecycle-state",
              description: "The state of the lifecycle",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "UPDATING",
                ],
              },
            },
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort Fleets",
              args: { suggestions: ["displayName", "timeCreated"] },
            },
            optDisplayNameContains,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "request-crypto-analyses",
          description:
            "Request to perform crypto analysis on one or more selected targets in the Fleet",
          options: [
            optFleetId,
            optTargets,
            {
              name: "--recording-duration-in-minutes",
              description: "Duration of the JFR recording in minutes",
              args: { name: "integer" },
            },
            optWaitingPeriodInMinutes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "request-deployed-application-migration-analyses",
          description: "Request to perform a deployed Java migration analyses",
          options: [
            optFleetId,
            {
              name: "--targets",
              description: "An array of migration analyses requests",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "request-java-migration-analyses",
          description: "Request to perform a Java migration analysis",
          options: [
            optFleetId,
            {
              name: "--targets",
              description: "An array of migration analysis requests",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "request-jfr-recordings",
          description:
            "Request to collect the JFR recordings on the selected target in the Fleet",
          options: [
            optFleetId,
            {
              name: "--jfc-profile-name",
              description: "The profile used for JFR events selection",
              args: { name: "jfc-profile-name" },
              isRequired: true,
            },
            optTargets,
            {
              name: "--jfc-v1",
              description:
                "The BASE64 encoded string of JFR settings XML with schema used by JDK 8",
              args: { name: "jfc-v1" },
            },
            {
              name: "--jfc-v2",
              description:
                "The BASE64 encoded string of JFR settings XML with schema used by JDK 9 and after",
              args: { name: "jfc-v2" },
            },
            {
              name: "--recording-duration-in-minutes",
              description: "Duration of the JFR recording in minutes",
              args: { name: "integer" },
            },
            {
              name: "--recording-size-in-mb",
              description: "The maximum size limit for the JFR file collected",
              args: { name: "integer" },
            },
            optWaitingPeriodInMinutes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "request-performance-tuning-analyses",
          description: "Request to perform performance tuning analyses",
          options: [
            optFleetId,
            {
              name: "--recording-duration-in-minutes",
              description: "Duration of the JFR recording in minutes",
              args: { name: "integer" },
              isRequired: true,
            },
            optTargets,
            optWaitingPeriodInMinutes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "summarize-resource-inventory",
          description:
            "Retrieve the inventory of JMS resources in the specified compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optTimeStart,
            optTimeEnd,
            optFromJson,
          ],
        },
        {
          name: "update-drs-file",
          description:
            "Request to perform validation of the DRS file and update the existing file in the Object Storage",
          options: [
            optFleetId,
            {
              name: "--bucket-name",
              description:
                "The Object Storage bucket name where the DRS file is located",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The namespace for Object Storage",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--drs-file-name",
              description: "The name of the DRS file in Object Store",
              args: { name: "drs-file-name" },
              isRequired: true,
            },
            optDrsFileKey,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the Fleet specified by an identifier",
          options: [
            optFleetId,
            {
              name: "--display-name",
              description: "The name of the Fleet",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The Fleet's description",
              args: { name: "description" },
            },
            { name: "--inventory-log", args: { name: "json" } },
            { name: "--operation-log", args: { name: "json" } },
            {
              name: "--is-advanced-features-enabled",
              description:
                "Whether or not advanced features are enabled in this Fleet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "installation-site-summary",
      description: "Installation site of a Java Runtime",
      subcommands: [
        {
          name: "add",
          description: "Add Java installation sites in a Fleet",
          options: [
            optFleetId,
            {
              name: "--installation-sites",
              description: "The list of installation sites to add",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--post-installation-actions",
              description: "Optional list of post java installation actions",
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
          name: "list-installation-sites",
          description:
            "List Java installation sites in a Fleet filtered by query parameters",
          options: [
            optFleetId,
            optJreVendor,
            optJreDistribution,
            optJreVersion,
            {
              name: "--installation-path",
              description: "The file system path of the installation",
              args: { name: "installation-path" },
            },
            optApplicationId2,
            optManagedInstanceId2,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort installation sites",
              args: {
                suggestions: [
                  "managedInstanceId",
                  "jreDistribution",
                  "jreVendor",
                  "jreVersion",
                  "path",
                  "approximateApplicationCount",
                  "osName",
                  "securityStatus",
                ],
              },
            },
            optOsFamily,
            optJreSecurityStatus,
            {
              name: "--path-contains",
              description: "Filter the list with path contains the given value",
              args: { name: "path-contains" },
            },
            optTimeStart,
            optTimeEnd,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove Java installation sites in a Fleet",
          options: [
            optFleetId,
            {
              name: "--installation-sites",
              description: "The list of installation sites to remove",
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
      ],
    },
    {
      name: "export-status",
      description: "Attributes of fleet's export status",
      subcommands: [
        {
          name: "get",
          description: "Returns last export status for the specified fleet",
          options: [optFleetId, optFromJson],
        },
      ],
    },
    {
      name: "java-migration-analysis-result",
      description: "Result of the Java migration analysis",
      subcommands: [
        {
          name: "delete",
          description: "Delete the Java migration analysis result",
          options: [
            optFleetId,
            {
              name: "--java-migration-analysis-result-id",
              description: "The OCID of the analysis result",
              args: { name: "java-migration-analysis-result-id" },
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
          name: "get",
          description: "Retrieve Java Migration Analysis result",
          options: [
            optFleetId,
            {
              name: "--java-migration-analysis-result-id",
              description: "The OCID of the analysis result",
              args: { name: "java-migration-analysis-result-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the results of a Java migration analysis",
          options: [
            optFleetId,
            optManagedInstanceId2,
            optHostName,
            optApplicationName,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The field that sorts the Java migration analysis results",
              args: {
                suggestions: [
                  "timeCreated",
                  "managedInstanceId",
                  "workRequestId",
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
      name: "fleet-error-aggregation",
      description: "Aggregation of FleetErrors",
      subcommands: [
        {
          name: "summarize-fleet-errors",
          description: "Returns a high level summary of FleetErrors",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application-installation-usage-summary",
      description:
        "Summarizes application installation usage information during a specified time period",
      subcommands: [
        {
          name: "summarize-application-installation-usage",
          description:
            "Summarizes the application installation usage in a Fleet filtered by query parameters",
          options: [
            optFleetId,
            {
              name: "--application-installation-key",
              description:
                "The Fleet-unique identifier of the application installation",
              args: { name: "application-installation-key" },
            },
            optApplicationId,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--application-type",
              description: "The type of the application",
              args: { name: "application-type" },
            },
            {
              name: "--app-installation-path-contains",
              description:
                "Filter the list with the application installation path that contains the given value",
              args: { name: "app-installation-path-contains" },
            },
            optJreVendor,
            optJreDistribution,
            optJreVersion,
            optInstallationPath,
            optLibraryKey,
            optManagedInstanceId2,
            optOsFamily,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort application installation views",
              args: {
                suggestions: [
                  "timeFirstSeen",
                  "timeLastSeen",
                  "displayName",
                  "installationPath",
                  "osName",
                  "approximateJreCount",
                  "approximateInstallationCount",
                  "approximateManagedInstanceCount",
                  "approximateLibraryCount",
                ],
              },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "uncorrelated-package-usage-summary",
      description: "Summary of an uncorrelated package",
      subcommands: [
        {
          name: "list-uncorrelated-package-usage",
          description:
            "List uncorrelated package summaries in a fleet, filtered by query parameters",
          options: [
            optFleetId,
            {
              name: "--package-name",
              description: "The unique identifier of a Java package",
              args: { name: "package-name" },
            },
            optManagedInstanceId,
            optApplicationId,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort Java packages",
              args: {
                suggestions: [
                  "packageName",
                  "managedInstanceCount",
                  "applicationCount",
                  "lastDetectedDynamically",
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
      name: "work-item-summary",
      description: "Work item to complete a work request",
      subcommands: [
        {
          name: "list-work-items",
          description:
            "Retrieve a paginated list of work items for a specified work request",
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
      name: "installation-usage",
      description: "Installation usage during a specified time period",
      subcommands: [
        {
          name: "summarize",
          description:
            "List Java installation usage in a Fleet filtered by query parameters",
          options: [
            optFleetId,
            optJreVendor,
            optJreDistribution,
            optJreVersion,
            {
              name: "--installation-path",
              description: "The file system path of the installation",
              args: { name: "installation-path" },
            },
            optApplicationId2,
            optManagedInstanceId2,
            {
              name: "--fields",
              description:
                "Additional fields to include into the returned model on top of the required ones",
              args: {
                suggestions: [
                  "approximateApplicationCount",
                  "approximateManagedInstanceCount",
                ],
              },
              isRepeatable: true,
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort installation views",
              args: {
                suggestions: [
                  "jreDistribution",
                  "jreVendor",
                  "jreVersion",
                  "path",
                  "timeFirstSeen",
                  "timeLastSeen",
                  "approximateApplicationCount",
                  "approximateManagedInstanceCount",
                  "osName",
                  "securityStatus",
                ],
              },
            },
            optOsFamily,
            {
              name: "--path-contains",
              description: "Filter the list with path contains the given value",
              args: { name: "path-contains" },
            },
            optJreSecurityStatus,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "java-family",
      description: "Metadata associated with a specific Java release family",
      subcommands: [
        {
          name: "get",
          description:
            "Returns metadata associated with a specific Java release family",
          options: [
            {
              name: "--family-version",
              description: "Unique Java family version identifier",
              args: { name: "family-version" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of the Java release family information",
          options: [
            {
              name: "--family-version",
              description: "The version identifier for the Java family",
              args: { name: "family-version" },
            },
            {
              name: "--display-name",
              description: "The display name for the Java family",
              args: { name: "display-name" },
            },
            {
              name: "--is-supported-version",
              description:
                "Filter the Java Release Family versions by support status",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "If no value is specified _familyVersion_ is default",
              args: {
                suggestions: [
                  "familyVersion",
                  "endOfSupportLifeDate",
                  "supportType",
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
      name: "plugin-error-summary",
      description: "Entity that represents an error identified in a plugin",
      subcommands: [
        {
          name: "list-plugin-errors",
          description:
            "Returns a list of plugin errors that describe all detected errors",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optManagedInstanceId,
            {
              name: "--time-first-seen-less-than-or-equal-to",
              description:
                "If specified, only errors with a first seen time earlier than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            {
              name: "--time-first-seen-greater-than-or-equal-to",
              description:
                "If specified, only errors with a first seen time later than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-less-than-or-equal-to",
              description:
                "If specified, only errors with a last seen time earlier than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-greater-than-or-equal-to",
              description:
                "If specified, only errors with a last seen time later than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort PluginError",
              args: { suggestions: ["TIME_FIRST_SEEN", "TIME_LAST_SEEN"] },
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
      name: "jre-usage",
      description: "Java Runtime usage during a specified time period",
      subcommands: [
        {
          name: "list",
          description:
            "List Java Runtime usage in a specified host filtered by query parameters",
          options: [
            optCompartmentId,
            {
              name: "--host-id",
              description: "The host OCID of the managed instance",
              args: { name: "host-id" },
            },
            optApplicationId,
            optApplicationName,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort JRE usages",
              args: {
                suggestions: [
                  "distribution",
                  "timeFirstSeen",
                  "timeLastSeen",
                  "vendor",
                  "version",
                  "approximateInstallationCount",
                  "approximateApplicationCount",
                  "approximateManagedInstanceCount",
                  "osName",
                  "securityStatus",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize",
          description:
            "List Java Runtime usage in a specified Fleet filtered by query parameters",
          options: [
            optFleetId,
            {
              name: "--jre-id",
              description:
                "The Fleet-unique identifier of the related Java Runtime",
              args: { name: "jre-id" },
            },
            {
              name: "--jre-vendor",
              description: "The vendor of the Java Runtime",
              args: { name: "jre-vendor" },
            },
            {
              name: "--jre-distribution",
              description: "The distribution of the Java Runtime",
              args: { name: "jre-distribution" },
            },
            {
              name: "--jre-version",
              description: "The version of the Java Runtime",
              args: { name: "jre-version" },
            },
            optApplicationId2,
            optManagedInstanceId2,
            {
              name: "--fields",
              description:
                "Additional fields to include into the returned model on top of the required ones",
              args: {
                suggestions: [
                  "approximateInstallationCount",
                  "approximateApplicationCount",
                  "approximateManagedInstanceCount",
                ],
              },
              isRepeatable: true,
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort JRE usages",
              args: {
                suggestions: [
                  "distribution",
                  "timeFirstSeen",
                  "timeLastSeen",
                  "vendor",
                  "version",
                  "approximateInstallationCount",
                  "approximateApplicationCount",
                  "approximateManagedInstanceCount",
                  "osName",
                  "securityStatus",
                ],
              },
            },
            optOsFamily,
            optJreSecurityStatus,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "library-managed-instance-usage-summary",
      description:
        "Summary of a managed instance where a given library was detected statically and/or dynamically",
      subcommands: [
        {
          name: "list-library-managed-instance-usage",
          description:
            "List managed instances where a library has been detected, filtered by query parameters",
          options: [
            optFleetId,
            {
              name: "--library-key",
              description: "The unique identifier of a Java library",
              args: { name: "library-key" },
              isRequired: true,
            },
            optApplicationId,
            optManagedInstanceId,
            optHostName,
            optHostnameContains,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The field to sort library application usage summaries",
              args: {
                suggestions: [
                  "hostname",
                  "applicationCount",
                  "lastDetectedDynamically",
                  "firstSeenInClasspath",
                  "lastSeenInClasspath",
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
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Deletes the work request specified by an identifier",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description:
            "Retrieve the details of a work request with the specified ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "List the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The ID of an asynchronous work request",
              args: { name: "id" },
            },
            optFleetId3,
            optPage,
            optLimit,
            optManagedInstanceId,
            {
              name: "--operation-type",
              description: "The operation type of the work request",
              args: {
                suggestions: [
                  "CREATE_FLEET",
                  "DELETE_FLEET",
                  "MOVE_FLEET",
                  "UPDATE_FLEET",
                  "UPDATE_FLEET_AGENT_CONFIGURATION",
                  "DELETE_JAVA_INSTALLATION",
                  "CREATE_JAVA_INSTALLATION",
                  "COLLECT_JFR",
                  "REQUEST_CRYPTO_EVENT_ANALYSIS",
                  "REQUEST_PERFORMANCE_TUNING_ANALYSIS",
                  "REQUEST_JAVA_MIGRATION_ANALYSIS",
                  "DELETE_JMS_REPORT",
                  "SCAN_JAVA_SERVER_USAGE",
                  "SCAN_LIBRARY_USAGE",
                  "SCAN_LIBRARY_DYNAMIC_USAGE",
                  "EXPORT_DATA_CSV",
                  "CREATE_DRS_FILE",
                  "UPDATE_DRS_FILE",
                  "DELETE_DRS_FILE",
                  "ENABLE_DRS",
                  "DISABLE_DRS",
                ],
              },
            },
            {
              name: "--status",
              description: "The status of the work request",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "CANCELED",
                  "CANCELING",
                  "FAILED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
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
      name: "java-server-instance-usage",
      description: "Java Server instance usage during a specified time period",
      subcommands: [
        {
          name: "summarize",
          description:
            "List Java Server instances in a fleet filtered by query parameters",
          options: [
            optFleetId,
            optServerKey,
            optServerInstanceKey,
            optManagedInstanceId,
            optApplicationKey,
            optLibraryKey,
            {
              name: "--server-instance-name-contains",
              description:
                "Filter the list with the Java Server instance name contains the given value",
              args: { name: "server-instance-name-contains" },
            },
            {
              name: "--server-instance-name",
              description: "The Java Server instance name",
              args: { name: "server-instance-name" },
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort the Java Server instances",
              args: {
                suggestions: [
                  "serverInstanceName",
                  "managedInstanceName",
                  "approximateDeployedApplicationCount",
                  "timeFirstSeen",
                  "timeLastSeen",
                ],
              },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "uncorrelated-package-application-usage-summary",
      description:
        "Summary of an application where a given libary was detected",
      subcommands: [
        {
          name: "list-uncorrelated-package-application-usage",
          description:
            "List applications where an uncorrelated package has been detected, filtered by query parameters",
          options: [
            optFleetId,
            {
              name: "--package-name",
              description: "The unique identifier of a Java package",
              args: { name: "package-name" },
              isRequired: true,
            },
            optApplicationId,
            optManagedInstanceId,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort detection events",
              args: {
                suggestions: [
                  "applicationName",
                  "managedInstanceCount",
                  "lastDetectedDynamically",
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
      name: "deployed-application-installation-usage-summary",
      description:
        "Summarize usage information about an application deployed on Java servers including installation information",
      subcommands: [
        {
          name: "summarize-deployed-application-installation-usage",
          description:
            "Summarize installation usage of an application deployed on Java servers in a fleet filtered by query",
          options: [
            optFleetId,
            optServerKey,
            optServerInstanceKey,
            optManagedInstanceId,
            {
              name: "--application-installation-key",
              description: "The deployed application installation key",
              args: { name: "application-installation-key" },
            },
            optApplicationKey,
            {
              name: "--application-name-contains",
              description:
                "Filter the list with deployed application name contains the given value",
              args: { name: "application-name-contains" },
            },
            {
              name: "--application-name",
              description: "The deployed application name",
              args: { name: "application-name" },
            },
            {
              name: "--application-source-path-contains",
              description:
                "Filter the list with application source path contains the given value",
              args: { name: "application-source-path-contains" },
            },
            optLibraryKey,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The field to sort the deployed application installations",
              args: {
                suggestions: [
                  "applicationName",
                  "applicationType",
                  "applicationSourcePath",
                  "isClustered",
                  "javaServerInstanceCount",
                  "approximateJavaServerInstanceCount",
                  "approximateLibraryCount",
                  "timeFirstSeen",
                  "timeLastSeen",
                ],
              },
            },
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
          description:
            "Retrieve a (paginated) list of errors for a specified work request",
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
      name: "plugin-error-aggregation",
      description: "Aggregation of PluginErrors",
      subcommands: [
        {
          name: "summarize-plugin-errors",
          description: "Returns a high level summary of PluginErrors",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "deployed-application-usage",
      description: "Deployed application usage during a specified time period",
      subcommands: [
        {
          name: "summarize",
          description:
            "List of deployed applications in a Fleet filtered by query parameters",
          options: [
            optFleetId,
            optServerKey,
            optServerInstanceKey,
            optManagedInstanceId,
            optLibraryKey,
            optApplicationKey,
            {
              name: "--application-name-contains",
              description:
                "Filter the list with deployed application name contains the given value",
              args: { name: "application-name-contains" },
            },
            {
              name: "--application-name",
              description: "The deployed application name",
              args: { name: "application-name" },
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort the deployed applications",
              args: {
                suggestions: [
                  "applicationName",
                  "applicationType",
                  "isClustered",
                  "javaServerInstanceCount",
                  "approximateJavaServerInstanceCount",
                  "approximateLibraryCount",
                  "timeFirstSeen",
                  "timeLastSeen",
                ],
              },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "managed-instance-usage",
      description: "Managed instance usage during a specified time period",
      subcommands: [
        {
          name: "summarize",
          description:
            "List managed instance usage in a Fleet filtered by query parameters",
          options: [
            optFleetId,
            optManagedInstanceId,
            {
              name: "--managed-instance-type",
              description: "The type of the managed instance",
              args: {
                suggestions: [
                  "ORACLE_MANAGEMENT_AGENT",
                  "ORACLE_CLOUD_AGENT",
                  "ORACLE_CONTAINER_MANAGEMENT_AGENT",
                ],
              },
            },
            optJreVendor,
            optJreDistribution,
            optJreVersion,
            optInstallationPath,
            optApplicationId2,
            {
              name: "--fields",
              description:
                "Additional fields to include into the returned model on top of the required ones",
              args: {
                suggestions: [
                  "approximateJreCount",
                  "approximateInstallationCount",
                  "approximateApplicationCount",
                ],
              },
              isRepeatable: true,
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort managed instance views",
              args: {
                suggestions: [
                  "timeFirstSeen",
                  "timeLastSeen",
                  "approximateJreCount",
                  "approximateInstallationCount",
                  "approximateApplicationCount",
                  "osName",
                ],
              },
            },
            optOsFamily,
            optHostnameContains,
            optLibraryKey,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "blocklist",
      description:
        "The blocklist record to prevent a target resource from certain operation with reason",
      subcommands: [
        {
          name: "create",
          description: "Add a new record to the fleet blocklist",
          options: [
            optFleetId,
            { name: "--target", args: { name: "json" }, isRequired: true },
            {
              name: "--operation",
              description: "The operation type",
              args: {
                suggestions: [
                  "CREATE_FLEET",
                  "DELETE_FLEET",
                  "MOVE_FLEET",
                  "UPDATE_FLEET",
                  "UPDATE_FLEET_AGENT_CONFIGURATION",
                  "DELETE_JAVA_INSTALLATION",
                  "CREATE_JAVA_INSTALLATION",
                  "COLLECT_JFR",
                  "REQUEST_CRYPTO_EVENT_ANALYSIS",
                  "REQUEST_PERFORMANCE_TUNING_ANALYSIS",
                  "REQUEST_JAVA_MIGRATION_ANALYSIS",
                  "DELETE_JMS_REPORT",
                  "SCAN_JAVA_SERVER_USAGE",
                  "SCAN_LIBRARY_USAGE",
                  "SCAN_LIBRARY_DYNAMIC_USAGE",
                  "EXPORT_DATA_CSV",
                  "CREATE_DRS_FILE",
                  "UPDATE_DRS_FILE",
                  "DELETE_DRS_FILE",
                  "ENABLE_DRS",
                  "DISABLE_DRS",
                ],
              },
              isRequired: true,
            },
            {
              name: "--reason",
              description: "The reason why the operation is blocklisted",
              args: { name: "reason" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the blocklist record specified by an identifier",
          options: [
            optFleetId,
            {
              name: "--blocklist-key",
              description: "The unique identifier of the blocklist record",
              args: { name: "blocklist-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of blocklist entities contained by a fleet",
          options: [
            optFleetId,
            {
              name: "--operation",
              description: "The operation type",
              args: {
                suggestions: [
                  "CREATE_FLEET",
                  "DELETE_FLEET",
                  "MOVE_FLEET",
                  "UPDATE_FLEET",
                  "UPDATE_FLEET_AGENT_CONFIGURATION",
                  "DELETE_JAVA_INSTALLATION",
                  "CREATE_JAVA_INSTALLATION",
                  "COLLECT_JFR",
                  "REQUEST_CRYPTO_EVENT_ANALYSIS",
                  "REQUEST_PERFORMANCE_TUNING_ANALYSIS",
                  "REQUEST_JAVA_MIGRATION_ANALYSIS",
                  "DELETE_JMS_REPORT",
                  "SCAN_JAVA_SERVER_USAGE",
                  "SCAN_LIBRARY_USAGE",
                  "SCAN_LIBRARY_DYNAMIC_USAGE",
                  "EXPORT_DATA_CSV",
                  "CREATE_DRS_FILE",
                  "UPDATE_DRS_FILE",
                  "DELETE_DRS_FILE",
                  "ENABLE_DRS",
                  "DISABLE_DRS",
                ],
              },
            },
            optManagedInstanceId2,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used to sort blocklist records",
              args: { suggestions: ["operation"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "performance-tuning-analysis-result",
      description: "Metadata of a Performance Tuning Analysis result",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes only the metadata of the Performance Tuning Analysis result",
          options: [
            optFleetId,
            {
              name: "--performance-tuning-analysis-result-id",
              description: "The OCID of the performance tuning analysis result",
              args: { name: "performance-tuning-analysis-result-id" },
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
          name: "get",
          description:
            "Retrieve metadata of the Performance Tuning Analysis result",
          options: [
            optFleetId,
            {
              name: "--performance-tuning-analysis-result-id",
              description: "The OCID of the performance tuning analysis result",
              args: { name: "performance-tuning-analysis-result-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List Performance Tuning Analysis results",
          options: [
            optFleetId,
            optManagedInstanceId2,
            optApplicationId2,
            optApplicationName,
            optHostName,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The field to sort performance tuning analysis results",
              args: {
                suggestions: [
                  "timeCreated",
                  "managedInstanceId",
                  "workRequestId",
                  "warningCount",
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
      name: "uncorrelated-package-managed-instance-usage-summary",
      description:
        "Summary of a managed instance where a given uncorrelated package was detected",
      subcommands: [
        {
          name: "list-uncorrelated-package-managed-instance-usage",
          description:
            "List managed instances where an uncorrelated package has been detected, filtered by query parameters",
          options: [
            optFleetId,
            {
              name: "--package-name",
              description: "The unique identifier of a Java package",
              args: { name: "package-name" },
              isRequired: true,
            },
            optApplicationId,
            optManagedInstanceId,
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort detection events",
              args: {
                suggestions: [
                  "hostname",
                  "applicationCount",
                  "lastDetectedDynamically",
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
      name: "fleet-advanced-feature-configuration",
      description: "Metadata for the advanced features in the Fleet",
      subcommands: [
        {
          name: "get",
          description: "Returns Fleet level advanced feature configuration",
          options: [optFleetId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description: "Update advanced feature configurations for the Fleet",
          options: [
            optFleetId,
            {
              name: "--analytic-namespace",
              description: "Namespace for the Fleet advanced feature",
              args: { name: "analytic-namespace" },
            },
            {
              name: "--analytic-bucket-name",
              description: "Bucket name required to store JFR and related data",
              args: { name: "analytic-bucket-name" },
            },
            { name: "--lcm", args: { name: "json" } },
            { name: "--crypto-event-analysis", args: { name: "json" } },
            { name: "--advanced-usage-tracking", args: { name: "json" } },
            { name: "--jfr-recording", args: { name: "json" } },
            { name: "--performance-tuning-analysis", args: { name: "json" } },
            { name: "--java-migration-analysis", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "library-application-usage-summary",
      description:
        "Summary of an application where a given library was detected statically and/or dynamically",
      subcommands: [
        {
          name: "list-library-application-usage",
          description:
            "List applications where a library has been detected filtered by query parameters",
          options: [
            optFleetId,
            {
              name: "--library-key",
              description: "The unique identifier of a Java library",
              args: { name: "library-key" },
              isRequired: true,
            },
            optApplicationId,
            optManagedInstanceId,
            optApplicationName,
            {
              name: "--application-name-contains",
              description:
                "Filter the list with application name contains the given value",
              args: { name: "application-name-contains" },
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The field to sort library application usage summaries",
              args: {
                suggestions: [
                  "applicationName",
                  "managedInstanceCount",
                  "lastDetectedDynamically",
                  "firstSeenInClasspath",
                  "lastSeenInClasspath",
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
      name: "java-release",
      description: "Metadata associated with a specific release of Java",
      subcommands: [
        {
          name: "get",
          description: "Returns detail of a Java release",
          options: [
            {
              name: "--release-version",
              description: "Unique Java release version identifier",
              args: { name: "release-version" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of Java releases",
          options: [
            {
              name: "--release-version",
              description: "Unique Java release version identifier",
              args: { name: "release-version" },
            },
            {
              name: "--family-version",
              description: "The version identifier for the Java family",
              args: { name: "family-version" },
            },
            {
              name: "--release-type",
              description: "Java release type",
              args: { suggestions: ["CPU", "FEATURE", "BPR", "PATCH_RELEASE"] },
            },
            optJreSecurityStatus,
            {
              name: "--license-type",
              description: "Java license type",
              args: { suggestions: ["OTN", "NFTC", "RESTRICTED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "If no value is specified _releaseDate_ is default",
              args: {
                suggestions: [
                  "releaseDate",
                  "releaseVersion",
                  "familyVersion",
                  "licenseType",
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
      name: "announcement-collection",
      description: "Results of list announcements call",
      subcommands: [
        {
          name: "list-announcements",
          description: "Return a list of AnnouncementSummary items",
          options: [
            {
              name: "--summary-contains",
              description:
                "Filter the list with summary contains the given value",
              args: { name: "summary-contains" },
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort AnnouncementSummary by",
              args: { suggestions: ["timeReleased", "summary"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "jms-plugin",
      description: "Information about a JmsPlugin that has been registered",
      subcommands: [
        {
          name: "create",
          description:
            "Registers an agent's JmsPlugin, optionally attaching to an existing fleet of the tenancy",
          options: [
            {
              name: "--agent-id",
              description:
                "The OCID of the Management Agent (OMA), the Oracle Cloud Agent (OCA)",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OMA/OCA/OCMA agent's compartment OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--agent-type",
              description: "The agent type",
              args: { suggestions: ["OMA", "OCA", "OCMA"] },
            },
            optFleetId3,
            optDefinedTags,
            optFreeformTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a JmsPlugin",
          options: [
            optJmsPluginId,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Returns the JmsPlugin",
          options: [optJmsPluginId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the JmsPlugins",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            {
              name: "--id",
              description: "The OCID of the JmsPlugin",
              args: { name: "id" },
            },
            optFleetId2,
            {
              name: "--agent-id",
              description:
                "The ManagementAgent (OMA), Oracle Cloud Agent (OCA), or the Oracle Container Management Agent",
              args: { name: "agent-id" },
            },
            {
              name: "--lifecycle-state",
              description: "Filter JmsPlugin with its lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "INACTIVE",
                  "NEEDS_ATTENTION",
                  "DELETED",
                ],
              },
            },
            {
              name: "--availability-status",
              description: "Filter JmsPlugin with its availability status",
              args: { suggestions: ["ACTIVE", "SILENT", "NOT_AVAILABLE"] },
            },
            {
              name: "--agent-type",
              description: "Filter JmsPlugin with agent type",
              args: { suggestions: ["OMA", "OCA", "OCMA"] },
            },
            {
              name: "--time-registered-less-than-or-equal-to",
              description:
                "If present, only plugins with a registration time before this parameter are searched",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-less-than-or-equal-to",
              description:
                "If present, only plugins with a last seen time before this parameter are searched",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort JmsPlugin",
              args: {
                suggestions: [
                  "id",
                  "timeLastSeen",
                  "timeRegistered",
                  "hostname",
                  "agentId",
                  "agentType",
                  "lifecycleState",
                  "availabilityStatus",
                  "fleetId",
                  "compartmentId",
                  "osFamily",
                  "osArchitecture",
                  "osDistribution",
                  "pluginVersion",
                ],
              },
            },
            optHostnameContains,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Fleet of a JmsPlugin",
          options: [
            optJmsPluginId,
            optFleetId3,
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      description:
        "A log message from executing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Retrieve a paginated list of logs for a specified work request",
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
      name: "java-server-usage",
      description: "Java Server usage during a specified time period",
      subcommands: [
        {
          name: "scan",
          description: "Scan Java Server usage in a fleet",
          options: [
            optFleetId,
            {
              name: "--managed-instance-ids",
              description: "The list of OCIDs of managed instances to scan",
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
          name: "summarize",
          description:
            "List of Java servers in a Fleet filtered by query parameters",
          options: [
            optFleetId,
            optServerKey,
            {
              name: "--server-name-contains",
              description:
                "Filter the list with server name contains the given value",
              args: { name: "server-name-contains" },
            },
            {
              name: "--server-name",
              description: "The server name",
              args: { name: "server-name" },
            },
            {
              name: "--server-version",
              description: "The server version",
              args: { name: "server-version" },
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort a Java Server",
              args: {
                suggestions: [
                  "serverName",
                  "serverVersion",
                  "serverInstanceCount",
                  "approximateDeployedApplicationCount",
                  "timeFirstSeen",
                  "timeLastSeen",
                ],
              },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "agent-installer-summary",
      description: "Supported agent installer downloads",
      subcommands: [
        {
          name: "generate-agent-installer-configuration",
          description:
            "Generates the agent installer configuration using the information provided",
          options: [
            {
              name: "--install-key-id",
              description:
                "The OCID of the management agent install key for which to generate the configuration file",
              args: { name: "install-key-id" },
              isRequired: true,
            },
            {
              name: "--fleet-id",
              description:
                "The OCID of the fleet for which to generate the configuration file",
              args: { name: "fleet-id" },
              isRequired: true,
            },
            optFile,
            {
              name: "--agent-type",
              description: "The JMS plugin type",
              args: { suggestions: ["OMA", "OCA", "OCMA"] },
            },
            optFromJson,
          ],
        },
        {
          name: "list-agent-installers",
          description: "Returns a list of the agent installer information",
          options: [
            optCompartmentId,
            optFleetId2,
            {
              name: "--platform-architecture",
              description: "The platform architecture for the agent installer",
              args: { suggestions: ["X86_64", "X86", "AARCH64"] },
            },
            {
              name: "--os-family",
              description: "The OS family for the agent installer",
              args: { suggestions: ["LINUX", "WINDOWS", "MACOS", "UNKNOWN"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort the agent installer",
              args: {
                suggestions: [
                  "agentInstallerId",
                  "osFamily",
                  "platformArchitecture",
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
      name: "drs-file-collection",
      description: "List of DRS details",
      subcommands: [
        {
          name: "list-drs-files",
          description:
            "List the details about the created DRS files in the Fleet",
          options: [
            optFleetId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field that sorts the DRS details results",
              args: {
                suggestions: [
                  "bucketName",
                  "namespace",
                  "drsFileKey",
                  "drsFileName",
                  "checksumType",
                  "isDefault",
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
      name: "container-summary",
      description: "Information about a container in the cluster",
      subcommands: [
        {
          name: "list-containers",
          description:
            "List containers in a fleet filtered by query parameters",
          options: [
            optFleetId,
            optManagedInstanceId,
            optDisplayName,
            optApplicationName,
            optJreVersion,
            optJreSecurityStatus,
            {
              name: "--time-started-greater-than-or-equal-to",
              description:
                "If specified, only containers with a start time later than or equal to this parameter will be included in",
              args: { name: "datetime" },
            },
            {
              name: "--time-started-less-than-or-equal-to",
              description:
                "If specified, only containers with a start time earlier than or equal to this parameter will be included",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort the containers",
              args: {
                suggestions: [
                  "displayName",
                  "namespace",
                  "podName",
                  "applicationName",
                  "jreVersion",
                  "jreSecurityStatus",
                  "timeStarted",
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
      name: "fleet-diagnosis-summary",
      description: "Diagnosis of a resource needed by the fleet",
      subcommands: [
        {
          name: "list-fleet-diagnoses",
          description:
            "List potential diagnoses that would put a fleet into FAILED or NEEDS_ATTENTION lifecycle state",
          options: [
            optFleetId,
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
      name: "library-usage",
      description: "Library usage during a specified time period",
      subcommands: [
        {
          name: "scan",
          description: "Scan library usage in a fleet",
          options: [
            optFleetId,
            {
              name: "--managed-instance-ids",
              description: "The list of OCIDs of managed instances to scan",
              args: { name: "json" },
            },
            {
              name: "--is-dynamic-scan",
              description: "Indicates whether the scan is dynamic or static",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--dynamic-scan-duration-in-minutes",
              description: "The duration of the dynamic scan in minutes",
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
          name: "summarize",
          description: "List libraries in a fleet filtered by query parameters",
          options: [
            optFleetId,
            optServerInstanceKey,
            optManagedInstanceId,
            optApplicationKey,
            optLibraryKey,
            {
              name: "--library-name-contains",
              description:
                "Filter the list with library name contains the given value",
              args: { name: "library-name-contains" },
            },
            {
              name: "--library-name",
              description: "The library name",
              args: { name: "library-name" },
            },
            {
              name: "--cvss-score-greater-than",
              description:
                "Total Common Vulnerability Scoring System (CVSS) Score reported by the analysis",
              args: { name: "number" },
            },
            {
              name: "--cvss-score-less-than",
              description:
                "Total Common Vulnerability Scoring System (CVSS) Score reported by the analysis",
              args: { name: "number" },
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort libraries",
              args: {
                suggestions: [
                  "applicationCount",
                  "javaServerInstanceCount",
                  "cvssScore",
                  "deployedApplicationCount",
                  "libraryName",
                  "libraryVersion",
                  "managedInstanceCount",
                  "timeFirstSeen",
                  "timeLastSeen",
                  "highestVulnerabilityScore",
                  "confidenceLevel",
                ],
              },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fleet-agent-configuration",
      description: "Management Agent Configuration for a Fleet",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieve a Fleet Agent Configuration for the specified Fleet",
          options: [optFleetId, optFromJson],
        },
        {
          name: "update",
          description:
            "Update the Fleet Agent Configuration for the specified Fleet",
          options: [
            optFleetId,
            {
              name: "--work-request-validity-period-in-days",
              description: "The validity period in days for work requests",
              args: { name: "integer" },
            },
            {
              name: "--agent-polling-interval-in-minutes",
              description: "Agent polling interval in minutes",
              args: { name: "integer" },
            },
            {
              name: "--is-collecting-managed-instance-metrics-enabled",
              description:
                "Collect JMS agent metrics on all managed instances in the fleet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-collecting-usernames-enabled",
              description:
                "Collect username for application invocations for all managed instances in the fleet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-capturing-ip-address-and-fqdn-enabled",
              description:
                "Collect network addresses of managed instances in the fleet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-libraries-scan-enabled",
              description:
                "Enable libraries scan on all managed instances in the fleet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--linux-configuration", args: { name: "json" } },
            { name: "--windows-configuration", args: { name: "json" } },
            { name: "--mac-os-configuration", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--jut-processing-frequency",
              description:
                "The frequency (in minutes) of Java Usage Tracker processing. (That",
              args: { name: "integer" },
            },
            {
              name: "--jre-scan-frequency",
              description:
                "The frequency (in minutes) of JRE scanning. (That is, how often should JMS scan for JRE installations.)",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "library-inventory",
      description:
        "Inventory of libraries in a fleet during a specified time period",
      subcommands: [
        {
          name: "summarize",
          description:
            "Retrieve the inventory of libraries in the specified fleet: Statically detected library count",
          options: [
            optFleetId,
            optManagedInstanceId,
            optApplicationId,
            optTimeStart,
            optTimeEnd,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application-usage",
      description: "Application usage during a specified time period",
      subcommands: [
        {
          name: "summarize",
          description:
            "List application usage in a Fleet filtered by query parameters",
          options: [
            optFleetId,
            optApplicationId,
            optDisplayName,
            {
              name: "--application-type",
              description: "The type of the application",
              args: { name: "application-type" },
            },
            optJreVendor,
            optJreDistribution,
            optJreVersion,
            optInstallationPath,
            optManagedInstanceId2,
            {
              name: "--fields",
              description:
                "Additional fields to include into the returned model on top of the required ones",
              args: {
                suggestions: [
                  "approximateJreCount",
                  "approximateInstallationCount",
                  "approximateManagedInstanceCount",
                ],
              },
              isRepeatable: true,
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort application views",
              args: {
                suggestions: [
                  "timeFirstSeen",
                  "timeLastSeen",
                  "displayName",
                  "approximateJreCount",
                  "approximateInstallationCount",
                  "approximateManagedInstanceCount",
                  "approximateLibraryCount",
                  "osName",
                ],
              },
            },
            optOsFamily,
            optDisplayNameContains,
            optLibraryKey,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "drs-file",
      description:
        "A Deployment Rule Set(DRS) is a JAR (Java ARchive) file used in Java applications to enforce security",
      subcommands: [
        {
          name: "delete",
          description: "Request to delete the DRS file from the Object Storage",
          options: [
            optFleetId,
            optDrsFileKey,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the detail about the created DRS file in the Fleet",
          options: [optFleetId, optDrsFileKey, optPage, optFromJson],
        },
      ],
    },
    {
      name: "crypto-analysis-result",
      description: "Metadata for the result of a crypto event analysis",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes the metadata for the result of a Crypto event analysis",
          options: [
            optFleetId,
            {
              name: "--crypto-analysis-result-id",
              description: "The OCID of the analysis result",
              args: { name: "crypto-analysis-result-id" },
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
          name: "get",
          description:
            "Retrieve the metadata for the result of a Crypto event analysis",
          options: [
            optFleetId,
            {
              name: "--crypto-analysis-result-id",
              description: "The OCID of the analysis result",
              args: { name: "crypto-analysis-result-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the results of a Crypto event analysis",
          options: [
            optFleetId,
            {
              name: "--aggregation-mode",
              description:
                "The aggregation mode of the crypto event analysis result",
              args: { suggestions: ["JFR", "MANAGED_INSTANCE"] },
            },
            optManagedInstanceId2,
            optHostName,
            {
              name: "--non-compliant-finding-count",
              description:
                "Non Compliant Finding Count of CryptoAnalysis Report",
              args: { name: "integer" },
            },
            {
              name: "--non-compliant-finding-count-greater-than",
              description:
                "Non Compliant Finding Count of CryptoAnalysis Report",
              args: { name: "integer" },
            },
            {
              name: "--finding-count",
              description: "FindingCount of CryptoAnalysis Report",
              args: { name: "integer" },
            },
            {
              name: "--finding-count-greater-than",
              description: "FindingCount of CryptoAnalysis Report",
              args: { name: "integer" },
            },
            optTimeStart,
            optTimeEnd,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort crypto event analysis results",
              args: {
                suggestions: [
                  "timeCreated",
                  "managedInstanceId",
                  "workRequestId",
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
      name: "export-setting",
      description: "Export settings of a fleet",
      subcommands: [
        {
          name: "get",
          description: "Returns export setting for the specified fleet",
          options: [optFleetId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates existing export setting for the specified fleet",
          options: [
            optFleetId,
            {
              name: "--is-enabled",
              description:
                "ExportSetting flag to store enabled or disabled status",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--export-duration",
              description: "The duration of data to be exported for fleets",
              args: {
                suggestions: ["LAST_30_DAYS", "LAST_60_DAYS", "LAST_90_DAYS"],
              },
            },
            {
              name: "--export-resources",
              description: "Resource to export data associated from the fleets",
              args: {
                suggestions: [
                  "MANAGED_INSTANCE",
                  "MANAGED_INSTANCE_PLUS_JAVA_RUNTIME",
                  "MANAGED_INSTANCE_PLUS_JAVA_RUNTIME_PLUS_APPLICATION",
                ],
              },
            },
            {
              name: "--is-cross-region-acknowledged",
              description:
                "Acknowledgement for cross region target bucket configuration",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--target-bucket-name",
              description: "The name of the bucket where data will be exported",
              args: { name: "target-bucket-name" },
            },
            {
              name: "--target-bucket-namespace",
              description:
                "The namespace of the bucket where data will be exported",
              args: { name: "target-bucket-namespace" },
            },
            {
              name: "--target-bucket-region",
              description: "The id of the region of the target bucket",
              args: { name: "target-bucket-region" },
            },
            {
              name: "--export-frequency",
              description: "Schedule at which data will be exported",
              args: { suggestions: ["DAILY", "WEEKLY", "MONTHLY"] },
            },
            { name: "--export-data-filters", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fleet-error-summary",
      description: "The summary of a fleet error",
      subcommands: [
        {
          name: "list-fleet-errors",
          description:
            "Returns a list of fleet errors that describe all detected errors",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optFleetId2,
            {
              name: "--time-first-seen-less-than-or-equal-to",
              description:
                "If specified, only errors with a first seen time earlier than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            {
              name: "--time-first-seen-greater-than-or-equal-to",
              description:
                "If specified, only errors with a first seen time later than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-less-than-or-equal-to",
              description:
                "If specified, only errors with a last seen time earlier than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-greater-than-or-equal-to",
              description:
                "If specified, only errors with a last seen time later than this parameter will be included in the search",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort FleetError",
              args: { suggestions: ["TIME_FIRST_SEEN", "TIME_LAST_SEEN"] },
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
      name: "task-schedule",
      description: "The properties of a task schedule",
      subcommands: [
        {
          name: "create",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-deployed-application-migration-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-deployed-application-migration-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-remove-installation-site-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-remove-installation-site-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-crypto-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-crypto-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-java-migration-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-java-migration-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-scan-library-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-scan-library-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-performance-tuning-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-performance-tuning-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-scan-java-server-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-scan-java-server-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-jfr-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            { name: "--task-details-jfr-task-request", args: { name: "json" } },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-task-schedule-add-installation-site-task-details",
          description: "Create a task schedule using the information provided",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details-add-installation-site-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the task schedule record specified by an identifier",
          options: [
            optTaskScheduleId,
            optFleetId2,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Returns a task schedule",
          options: [optTaskScheduleId, optFleetId2, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of task schedules",
          options: [
            optFleetId2,
            {
              name: "--id",
              description: "The OCID to identify this task schedule",
              args: { name: "id" },
            },
            optManagedInstanceId2,
            {
              name: "--name",
              description: "The task name",
              args: { name: "name" },
            },
            {
              name: "--task-schedule-name-contains",
              description:
                "Filter the list with task schedule name contains the given value",
              args: { name: "task-schedule-name-contains" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used to sort task schedule records",
              args: {
                suggestions: [
                  "name",
                  "lifecycleState",
                  "timeCreated",
                  "timeNextRun",
                  "timeLastRun",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            {
              name: "--task-details",
              args: { name: "json" },
              isRequired: true,
            },
            optTaskScheduleId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-deployed-application-migration-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-deployed-application-migration-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-remove-installation-site-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-remove-installation-site-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-crypto-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-crypto-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-java-migration-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-java-migration-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-scan-library-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-scan-library-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-performance-tuning-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-performance-tuning-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-scan-java-server-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-scan-java-server-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-jfr-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            { name: "--task-details-jfr-task-request", args: { name: "json" } },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-task-schedule-add-installation-site-task-details",
          description: "Update the task schedule for the given task type",
          options: [
            optFleetId,
            optExecutionRecurrences,
            optTaskScheduleId,
            optIfMatch,
            {
              name: "--task-details-add-installation-site-task-request",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
