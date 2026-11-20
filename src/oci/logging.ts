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
      "CANCELLING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optLogGroupId: Fig.Option = {
  name: "--log-group-id",
  description: "OCID of a log group to work with",
  args: { name: "log-group-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly display name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description for this resource",
  args: { name: "description" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "When setting the page limit, specifies the maximum number of unfiltered records that can be fetched from",
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
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optGroupAssociation: Fig.Option = {
  name: "--group-association",
  args: { name: "json" },
};
const optIsEnabled: Fig.Option = {
  name: "--is-enabled",
  description: "Whether or not this resource is currently enabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment that the resource belongs to",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConfigId: Fig.Option = {
  name: "--config-id",
  description: "The OCID of the unified agent configuration",
  args: { name: "config-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, whether 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment OCID to list resources in",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLogId: Fig.Option = {
  name: "--log-id",
  description: "OCID of a log to work with",
  args: { name: "log-id" },
  isRequired: true,
};
const optLogSavedSearchId: Fig.Option = {
  name: "--log-saved-search-id",
  description: "OCID of the logSavedSearch",
  args: { name: "log-saved-search-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by (one column only)",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The asynchronous request ID",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "Description for this resource",
  args: { name: "description" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Resource name",
  args: { name: "display-name" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "INACTIVE",
      "DELETING",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "logging",
  description: "Logging Management",
  subcommands: [
    {
      name: "work-request-log",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description: "Return a list of logs for a given work request",
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
      name: "log-group",
      description: "Represents a LogGroup object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a log group into a different compartment within the same tenancy",
          options: [
            optLogGroupId,
            {
              name: "--compartment-id",
              description:
                "The compartment into which the resource should be moved",
              args: { name: "compartment-id" },
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
          description: "Create a new log group with a unique display name",
          options: [
            optCompartmentId,
            optDisplayName,
            optDescription,
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
          description: "Deletes the specified log group",
          options: [
            optLogGroupId,
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
          description: "Get the specified log group's information",
          options: [optLogGroupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all log groups for the specified compartment or tenancy",
          options: [
            optCompartmentId2,
            optDisplayName2,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            {
              name: "--compartmentidinsubtree",
              description:
                "Specifies whether or not nested compartments should be traversed",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the existing log group with the associated configuration",
          options: [
            optLogGroupId,
            {
              name: "--display-name",
              description: "The user-friendly display name",
              args: { name: "display-name" },
            },
            optDescription,
            optDefinedTags,
            optFreeformTags,
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
      name: "log",
      description: "Represents a log object",
      subcommands: [
        {
          name: "create",
          description: "Creates a log within the specified log group",
          options: [
            optLogGroupId,
            optDisplayName,
            {
              name: "--log-type",
              description:
                "The logType that the log object is for, whether custom or service",
              args: { suggestions: ["CUSTOM", "SERVICE"] },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "Whether or not this resource is currently enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDefinedTags,
            optFreeformTags,
            { name: "--configuration", args: { name: "json" } },
            {
              name: "--retention-duration",
              description:
                "Log retention duration in 30-day increments (30, 60, 90 and so on until 180)",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the log object in a log group",
          options: [
            optLogGroupId,
            optLogId,
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
            "Gets the log object configuration for the log object OCID",
          options: [optLogGroupId, optLogId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the specified log group's log objects",
          options: [
            optLogGroupId,
            {
              name: "--log-type",
              description:
                "The logType that the log object is for, whether custom or service",
              args: { suggestions: ["CUSTOM", "SERVICE"] },
            },
            {
              name: "--source-service",
              description:
                "Service that created the log object, which is a field of LogSummary.Configuration.Source",
              args: { name: "source-service" },
            },
            {
              name: "--source-resource",
              description:
                "Log object resource, which is a field of LogSummary.Configuration.Source",
              args: { name: "source-resource" },
            },
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "Lifecycle state of the log object",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "INACTIVE",
                  "DELETING",
                  "FAILED",
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
          name: "update",
          description:
            "Updates the existing log object with the associated configuration",
          options: [
            optLogGroupId,
            optLogId,
            {
              name: "--display-name",
              description: "The user-friendly display name",
              args: { name: "display-name" },
            },
            {
              name: "--is-enabled",
              description: "Whether or not this resource is currently enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDefinedTags,
            optFreeformTags,
            {
              name: "--retention-duration",
              description:
                "Log retention duration in 30-day increments (30, 60, 90 and so on until 180)",
              args: { name: "integer" },
            },
            { name: "--configuration", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-log-group",
          description:
            "Moves a log into a different log group within the same tenancy",
          options: [
            optLogGroupId,
            optLogId,
            {
              name: "--target-log-group-id",
              description: "Log group OCID",
              args: { name: "target-log-group-id" },
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
      name: "service",
      description:
        "Summary of services that are integrated with public logging",
      subcommands: [
        {
          name: "list",
          description: "Lists all services that support logging",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment OCID to list resources in",
              args: { name: "compartment-id" },
            },
            optAll,
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
          description: "Return a list of errors for a given work request",
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
      name: "work-request",
      description: "A work request",
      subcommands: [
        {
          name: "delete",
          description: "Cancel a work request that has not started yet",
          options: [
            optWorkRequestId,
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
          description: "Gets the details of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--status",
              description: "Filter results by work request status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELLING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--id",
              description: "<b>Filter</b> results by OCID",
              args: { name: "id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Specifies the field to sort by",
              args: {
                suggestions: ["operationType", "status", "timeAccepted"],
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
      name: "log-saved-search",
      description:
        "A LogSavedSearch that can be used to save and share a given search result",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a saved search into a different compartment within the same tenancy",
          options: [
            optLogSavedSearchId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new LogSavedSearch",
          options: [
            optCompartmentId,
            {
              name: "--name",
              description: "The user-friendly display name",
              args: { name: "name" },
              isRequired: true,
            },
            optDescription,
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--log-query",
              description: "The search query that is saved",
              args: { name: "log-query" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified LogSavedSearch",
          options: [
            optLogSavedSearchId,
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
          description: "Retrieves a LogSavedSearch",
          options: [optLogSavedSearchId, optFromJson],
        },
        {
          name: "list",
          description: "Lists LogSavedSearches for this compartment",
          options: [
            optCompartmentId2,
            {
              name: "--log-saved-search-id",
              description: "OCID of the LogSavedSearch",
              args: { name: "log-saved-search-id" },
            },
            {
              name: "--name",
              description: "Resource name",
              args: { name: "name" },
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
          name: "update",
          description: "Updates an existing LogSavedSearch",
          options: [
            optLogSavedSearchId,
            {
              name: "--name",
              description: "The user-friendly display name",
              args: { name: "name" },
            },
            optDescription,
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--log-query",
              description: "The search query that is saved",
              args: { name: "log-query" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "agent-configuration",
      description: "Top Unified Agent configuration object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the unified agent configuration into a different compartment within the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConfigId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create unified agent configuration registration",
          options: [
            optDisplayName,
            optIsEnabled,
            {
              name: "--service-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId,
            optDescription2,
            optDefinedTags,
            optFreeformTags,
            optGroupAssociation,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-unified-agent-configuration-unified-agent-monitoring-configuration-details",
          description: "Create unified agent configuration registration",
          options: [
            optDisplayName,
            optIsEnabled,
            optCompartmentId,
            optDescription2,
            {
              name: "--service-configuration-application-configurations",
              description:
                "Unified Agent monitoring application configuration details",
              args: { name: "json" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optGroupAssociation,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete unified agent configuration",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConfigId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the unified agent configuration for an ID",
          options: [optConfigId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all unified agent configurations in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--log-id",
              description:
                "Custom log OCID to list resources with the log as destination",
              args: { name: "log-id" },
            },
            {
              name: "--group-id",
              description: "The OCID of a group or a dynamic group",
              args: { name: "group-id" },
            },
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "Lifecycle state of the log object",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "INACTIVE",
                  "DELETING",
                  "FAILED",
                ],
              },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            {
              name: "--compartmentidinsubtree",
              description:
                "Specifies whether or not nested compartments should be traversed",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update an existing unified agent configuration",
          options: [
            optDisplayName,
            optIsEnabled,
            {
              name: "--service-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optDescription,
            optGroupAssociation,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConfigId,
            optFromJson,
          ],
        },
        {
          name: "update-unified-agent-configuration-unified-agent-monitoring-configuration-details",
          description: "Update an existing unified agent configuration",
          options: [
            {
              name: "--unified-agent-configuration-id",
              description: "The OCID of the Unified Agent configuration",
              args: { name: "unified-agent-configuration-id" },
              isRequired: true,
            },
            optDisplayName,
            optIsEnabled,
            {
              name: "--service-configuration-application-configurations",
              description:
                "Unified Agent monitoring application configuration details",
              args: { name: "json" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optDescription,
            optGroupAssociation,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-log-configuration",
          description: "Create unified agent configuration registration",
          options: [
            optDisplayName,
            optIsEnabled,
            optCompartmentId,
            optDescription2,
            optDefinedTags,
            optFreeformTags,
            optGroupAssociation,
            {
              name: "--service-configuration-filter",
              description: "Logging filter object",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            { name: "--service-conf-destination", args: { name: "json" } },
            {
              name: "--service-conf-sources",
              description:
                "This option is a JSON list with items of type UnifiedAgentLoggingSource",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-log-configuration",
          description: "Update an existing unified agent configuration",
          options: [
            optDisplayName,
            optIsEnabled,
            optDefinedTags,
            optFreeformTags,
            optDescription,
            optGroupAssociation,
            optIfMatch,
            {
              name: "--service-configuration-filter",
              description: "Logging filter object",
              args: { name: "json" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            { name: "--service-conf-destination", args: { name: "json" } },
            {
              name: "--service-conf-sources",
              description:
                "This option is a JSON list with items of type UnifiedAgentLoggingSource",
              args: { name: "json" },
            },
            optConfigId,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
