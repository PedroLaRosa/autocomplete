// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in",
  args: { name: "boolean", suggestions: ["true", "false"] },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["NAME", "TIMECREATED"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "Optional",
  args: { name: "name" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter that returns results that match the lifecycle state specified",
  args: {
    suggestions: [
      "ACTIVE",
      "FAILED",
      "INACTIVE",
      "ATTACHING",
      "DETACHING",
      "DELETING",
      "DELETED",
      "UPDATING",
      "CREATING",
    ],
  },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACTIVE",
      "FAILED",
      "INACTIVE",
      "ATTACHING",
      "DETACHING",
      "DELETING",
      "DELETED",
      "UPDATING",
      "CREATING",
    ],
  },
  isRepeatable: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optRecommendationName: Fig.Option = {
  name: "--recommendation-name",
  description: "Optional",
  args: { name: "recommendation-name" },
};
const optChildTenancyIds: Fig.Option = {
  name: "--child-tenancy-ids",
  description:
    "A list of child tenancies for which the respective data will be returned",
  args: { name: "child-tenancy-ids" },
  isRepeatable: true,
};
const optIncludeOrganization: Fig.Option = {
  name: "--include-organization",
  description:
    "When set to true, the data for all child tenancies including the parent is returned",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIncludeResourceMetadata: Fig.Option = {
  name: "--include-resource-metadata",
  description:
    "Supplement additional resource information in extended metadata response",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optProfileId: Fig.Option = {
  name: "--profile-id",
  description: "The unique OCID of the profile",
  args: { name: "profile-id" },
  isRequired: true,
};
const optRecommendationId: Fig.Option = {
  name: "--recommendation-id",
  description: "The unique OCID associated with the recommendation",
  args: { name: "recommendation-id" },
  isRequired: true,
};
const optRecommendationId2: Fig.Option = {
  name: "--recommendation-id",
  description: "The unique OCID associated with the recommendation",
  args: { name: "recommendation-id" },
};
const optStatus: Fig.Option = {
  name: "--status",
  description:
    "A filter that returns recommendations that match the status specified",
  args: { suggestions: ["PENDING", "DISMISSED", "POSTPONED", "IMPLEMENTED"] },
};
const optTimeStatusEnd: Fig.Option = {
  name: "--time-status-end",
  description: "The date and time the current status will change",
  args: { name: "datetime" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "optimizer",
  description: "Cloud Advisor",
  subcommands: [
    {
      name: "queryable-field-summary",
      description:
        "An individual field that can be used as part of a query filter",
      subcommands: [
        {
          name: "list-resource-action-queryable-fields",
          description:
            "Lists the fields that are indexed for querying and their associated value types",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
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
      name: "category-summary",
      description: "The metadata associated with the category summary",
      subcommands: [
        {
          name: "list",
          description: "Lists the supported Cloud Advisor categories",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optChildTenancyIds,
            optIncludeOrganization,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "profile",
      description: "The metadata associated with the profile",
      subcommands: [
        {
          name: "create",
          description: "Creates a new profile",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name assigned to the profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Text describing the profile",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--levels-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--aggregation-interval-in-days",
              description:
                "The time period over which to collect data for the recommendations, measured in number of days",
              args: { name: "integer" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair applied without any predefined name, type, or namespace",
              args: { name: "json" },
            },
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
              args: { name: "json" },
            },
            { name: "--target-compartments", args: { name: "json" } },
            { name: "--target-tags", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified profile",
          options: [
            optProfileId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified profile's information",
          options: [optProfileId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified profile",
          options: [
            optProfileId,
            {
              name: "--description",
              description: "Text describing the profile",
              args: { name: "description" },
            },
            {
              name: "--aggregation-interval-in-days",
              description:
                "The time period over which to collect data for the recommendations, measured in number of days",
              args: { name: "integer" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair applied without any predefined name, type, or namespace",
              args: { name: "json" },
            },
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
              args: { name: "json" },
            },
            { name: "--levels-configuration", args: { name: "json" } },
            { name: "--target-compartments", args: { name: "json" } },
            { name: "--target-tags", args: { name: "json" } },
            {
              name: "--name",
              description: "The name assigned to the profile",
              args: { name: "name" },
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
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
      name: "profile-summary",
      description: "The metadata associated with the profile summary",
      subcommands: [
        {
          name: "list",
          description: "Lists the existing profiles",
          options: [
            optCompartmentId,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "recommendation",
      description: "The metadata associated with the recommendation",
      subcommands: [
        {
          name: "bulk-apply",
          description: "Applies the specified recommendations to the resources",
          options: [
            optRecommendationId,
            {
              name: "--status",
              description: "The current status of the recommendation",
              args: {
                suggestions: [
                  "PENDING",
                  "DISMISSED",
                  "POSTPONED",
                  "IMPLEMENTED",
                ],
              },
              isRequired: true,
            },
            {
              name: "--resource-action-ids",
              description:
                "The unique OCIDs of the resource actions that recommendations are applied to",
              args: { name: "json" },
            },
            {
              name: "--actions",
              description:
                "The unique resource actions that recommendations are applied to",
              args: { name: "json" },
            },
            optTimeStatusEnd,
            {
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
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the recommendation for the specified OCID",
          options: [optRecommendationId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the recommendation that corresponds to the specified OCID",
          options: [
            optRecommendationId,
            {
              name: "--status",
              description: "The status of the recommendation",
              args: {
                suggestions: [
                  "PENDING",
                  "DISMISSED",
                  "POSTPONED",
                  "IMPLEMENTED",
                ],
              },
              isRequired: true,
            },
            optTimeStatusEnd,
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
      name: "work-request-log-entry",
      description: "Details about the log entity",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the logs associated with the specified work request",
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
      name: "recommendation-summary",
      description: "The metadata associated with the recommendation summary",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the Cloud Advisor recommendations that are currently supported",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            {
              name: "--category-id",
              description: "The unique OCID associated with the category",
              args: { name: "category-id" },
            },
            {
              name: "--category-name",
              description: "Optional",
              args: { name: "category-name" },
            },
            optChildTenancyIds,
            optIncludeOrganization,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optStatus,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description:
        "The asynchronous API request does not take effect immediately",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the status of the work request associated with the specified ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in the tenancy",
          options: [
            optCompartmentId,
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
      name: "profile-level-summary",
      description: "The metadata associated with the profile level summary",
      subcommands: [
        {
          name: "list-profile-levels",
          description: "Lists the existing profile levels",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optName,
            optRecommendationName,
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
      name: "work-request-error",
      description:
        "Details about errors encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Lists errors associated with the specified work request",
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
      name: "enrollment-status-summary",
      description: "The metadata associated with the enrollment status summary",
      subcommands: [
        {
          name: "list",
          description: "Lists the Cloud Advisor enrollment statuses",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            {
              name: "--status",
              description:
                "A filter that returns results that match the Cloud Advisor enrollment status specified",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-action",
      description: "The metadata associated with the resource action",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the resource action that corresponds to the specified OCID",
          options: [
            {
              name: "--resource-action-id",
              description:
                "The unique OCID associated with the resource action",
              args: { name: "resource-action-id" },
              isRequired: true,
            },
            optIncludeResourceMetadata,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the resource action that corresponds to the specified OCID",
          options: [
            {
              name: "--resource-action-id",
              description:
                "The unique OCID associated with the resource action",
              args: { name: "resource-action-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "The status of the resource action",
              args: {
                suggestions: [
                  "PENDING",
                  "DISMISSED",
                  "POSTPONED",
                  "IMPLEMENTED",
                ],
              },
              isRequired: true,
            },
            optTimeStatusEnd,
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
      name: "history-summary",
      description:
        "The metadata associated with the recommendation history and its related resources",
      subcommands: [
        {
          name: "list",
          description:
            "Lists changes to the recommendations based on user activity",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optName,
            optRecommendationName,
            optRecommendationId2,
            {
              name: "--resource-type",
              description: "Optional",
              args: { name: "resource-type" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optStatus,
            optIncludeResourceMetadata,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "category",
      description: "The metadata associated with the category",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the category that corresponds to the specified OCID",
          options: [
            {
              name: "--category-id",
              description: "The unique OCID associated with the category",
              args: { name: "category-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "enrollment-status",
      description: "The metadata associated with the enrollment status",
      subcommands: [
        {
          name: "get",
          description: "Gets the Cloud Advisor enrollment status",
          options: [
            {
              name: "--enrollment-status-id",
              description:
                "The unique OCID associated with the enrollment status",
              args: { name: "enrollment-status-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the enrollment status of the tenancy",
          options: [
            {
              name: "--enrollment-status-id",
              description:
                "The unique OCID associated with the enrollment status",
              args: { name: "enrollment-status-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "The Cloud Advisor enrollment status",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
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
      name: "recommendation-strategy-summary",
      description: "The metadata associated with the recommendation strategy",
      subcommands: [
        {
          name: "list-recommendation-strategies",
          description: "Lists the existing strategies",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optName,
            optRecommendationName,
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
      name: "resource-action-summary",
      description: "The metadata associated with the resource action summary",
      subcommands: [
        {
          name: "filter-resource-actions",
          description:
            "Queries the Cloud Advisor resource actions that are supported",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optRecommendationId2,
            optRecommendationName,
            optChildTenancyIds,
            optIncludeOrganization,
            optIncludeResourceMetadata,
            optLimit,
            optPage,
            {
              name: "--filter-query",
              description: "The query describing which resources to search for",
              args: { name: "filter-query" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the Cloud Advisor resource actions that are supported",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optRecommendationId2,
            optRecommendationName,
            optChildTenancyIds,
            optIncludeOrganization,
            optName,
            {
              name: "--resource-type",
              description: "Optional",
              args: { name: "resource-type" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optStatus,
            optIncludeResourceMetadata,
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
