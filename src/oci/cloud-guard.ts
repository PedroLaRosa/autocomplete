// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
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
  isRepeatable: true,
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
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The field lifecycle state",
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
const optAccessLevel: Fig.Option = {
  name: "--access-level",
  description: "Valid values are RESTRICTED and ACCESSIBLE",
  args: { suggestions: ["RESTRICTED", "ACCESSIBLE"] },
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description: "Default is false",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optTargetId: Fig.Option = {
  name: "--target-id",
  description: "OCID of the target",
  args: { name: "target-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated"] },
};
const optDetectorRecipeId: Fig.Option = {
  name: "--detector-recipe-id",
  description: "Detector recipe OCID",
  args: { name: "detector-recipe-id" },
  isRequired: true,
};
const optDataSourceId: Fig.Option = {
  name: "--data-source-id",
  description: "Data source OCID",
  args: { name: "data-source-id" },
  isRequired: true,
};
const optProblemId: Fig.Option = {
  name: "--problem-id",
  description: "OCID of the problem",
  args: { name: "problem-id" },
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
      "WAITING",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optResponderRecipeId: Fig.Option = {
  name: "--responder-recipe-id",
  description: "OCID of the responder recipe",
  args: { name: "responder-recipe-id" },
  isRequired: true,
};
const optDataMaskRuleId: Fig.Option = {
  name: "--data-mask-rule-id",
  description: "OCID of the data mask rule",
  args: { name: "data-mask-rule-id" },
  isRequired: true,
};
const optSecurityZoneId: Fig.Option = {
  name: "--security-zone-id",
  description:
    "The unique identifier of the security zone (SecurityZone resource)",
  args: { name: "security-zone-id" },
  isRequired: true,
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["displayName", "riskLevel"] },
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "Enablement status of data source",
  args: { suggestions: ["ENABLED", "DISABLED"] },
};
const optTargetDetectorRecipeId: Fig.Option = {
  name: "--target-detector-recipe-id",
  description: "OCID of the target detector recipe",
  args: { name: "target-detector-recipe-id" },
  isRequired: true,
};
const optTargetResponderRecipeId: Fig.Option = {
  name: "--target-responder-recipe-id",
  description: "OCID of the target responder recipe",
  args: { name: "target-responder-recipe-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment OCID where the resource is created",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDataMaskRuleStatus: Fig.Option = {
  name: "--data-mask-rule-status",
  description: "The status of the data mask rule",
  args: { suggestions: ["ENABLED", "DISABLED"] },
};
const optDetectorRuleId: Fig.Option = {
  name: "--detector-rule-id",
  description: "The unique identifier of a detector rule",
  args: { name: "detector-rule-id" },
  isRequired: true,
};
const optResponderRuleId: Fig.Option = {
  name: "--responder-rule-id",
  description: "Unique identifier of the responder rule",
  args: { name: "responder-rule-id" },
  isRequired: true,
};
const optAdhocQueryId: Fig.Option = {
  name: "--adhoc-query-id",
  description: "Adhoc query OCID",
  args: { name: "adhoc-query-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment OCID where the resource is created",
  args: { name: "compartment-id" },
};
const optDataMaskCategories: Fig.Option = {
  name: "--data-mask-categories",
  description: "Data mask rule categories to apply",
  args: { name: "json" },
  isRequired: true,
};
const optDataMaskCategories2: Fig.Option = {
  name: "--data-mask-categories",
  description: "Data mask rule categories to update",
  args: { name: "json" },
};
const optDataMaskRuleStatus2: Fig.Option = {
  name: "--data-mask-rule-status",
  description: "The current status of the data mask rule",
  args: { suggestions: ["ENABLED", "DISABLED"] },
};
const optDescription: Fig.Option = {
  name: "--description",
  description:
    "The data mask rule description Avoid entering confidential information",
  args: { name: "description" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Data mask rule display name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "Data mask rule display name",
  args: { name: "display-name" },
};
const optIamGroupId: Fig.Option = {
  name: "--iam-group-id",
  description: "IAM group ID associated with the data mask rule",
  args: { name: "iam-group-id" },
  isRequired: true,
};
const optIamGroupId2: Fig.Option = {
  name: "--iam-group-id",
  description: "IAM group ID associated with the data mask rule",
  args: { name: "iam-group-id" },
};
const optLifecycleState2: Fig.Option = {
  name: "--lifecycle-state",
  description: "The current lifecycle state of the data mask rule",
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
};
const optManagedListId: Fig.Option = {
  name: "--managed-list-id",
  description: "The managed list OCID to be passed in the request",
  args: { name: "managed-list-id" },
  isRequired: true,
};
const optResourceId: Fig.Option = {
  name: "--resource-id",
  description: "CloudGuard resource OCID",
  args: { name: "resource-id" },
  isRequired: true,
};
const optSavedQueryId: Fig.Option = {
  name: "--saved-query-id",
  description: "Saved query OCID",
  args: { name: "saved-query-id" },
  isRequired: true,
};
const optSecurityRecipeId: Fig.Option = {
  name: "--security-recipe-id",
  description:
    "The unique identifier of the security zone recipe. (SecurityRecipe)",
  args: { name: "security-recipe-id" },
  isRequired: true,
};
const optTargetId2: Fig.Option = {
  name: "--target-id",
  description: "The ID of the target in which to list resources",
  args: { name: "target-id" },
};
const optTimeScoreComputedGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-score-computed-greater-than-or-equal-to",
  description: "Start time for a filter",
  args: { name: "datetime" },
};
const optTimeScoreComputedLessThanOrEqualTo: Fig.Option = {
  name: "--time-score-computed-less-than-or-equal-to",
  description: "End time for a filter",
  args: { name: "datetime" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment OCID of the data source",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment OCID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDataSourceFeedProvider: Fig.Option = {
  name: "--data-source-feed-provider",
  description: "Type of data source feed provider (LoggingQuery)",
  args: { suggestions: ["LOGGINGQUERY", "SCHEDULEDQUERY"] },
  isRequired: true,
};
const optDetails: Fig.Option = {
  name: "--details",
  args: { name: "json" },
  isRequired: true,
};
const optDetectorId: Fig.Option = {
  name: "--detector-id",
  description: "Detector name",
  args: { name: "detector-id" },
  isRequired: true,
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "Data source display name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName5: Fig.Option = {
  name: "--display-name",
  description: "Display name for data source",
  args: { name: "display-name" },
};
const optResourceMetadataOnly: Fig.Option = {
  name: "--resource-metadata-only",
  description: "Default is false",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optResourceProfileId: Fig.Option = {
  name: "--resource-profile-id",
  description: "OCID of the resource profile",
  args: { name: "resource-profile-id" },
  isRequired: true,
};
const optResponderExecutionId: Fig.Option = {
  name: "--responder-execution-id",
  description: "The unique identifier of the responder execution",
  args: { name: "responder-execution-id" },
  isRequired: true,
};
const optRiskLevel: Fig.Option = {
  name: "--risk-level",
  description: "Risk level of the problem",
  args: { name: "risk-level" },
};
const optSightingId: Fig.Option = {
  name: "--sighting-id",
  description: "OCID of the sighting",
  args: { name: "sighting-id" },
  isRequired: true,
};
const optTimeFirstDetectedGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-first-detected-greater-than-or-equal-to",
  description: "Start time for a filter",
  args: { name: "datetime" },
};
const optTimeFirstDetectedLessThanOrEqualTo: Fig.Option = {
  name: "--time-first-detected-less-than-or-equal-to",
  description: "End time for a filter",
  args: { name: "datetime" },
};
const optTimeLastDetectedGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-last-detected-greater-than-or-equal-to",
  description: "Start time for a filter",
  args: { name: "datetime" },
};
const optTimeLastDetectedLessThanOrEqualTo: Fig.Option = {
  name: "--time-last-detected-less-than-or-equal-to",
  description: "End time for a filter",
  args: { name: "datetime" },
};
const optWlpAgentId: Fig.Option = {
  name: "--wlp-agent-id",
  description: "WLP agent OCID",
  args: { name: "wlp-agent-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "cloud-guard",
  description: "Cloud Guard and Security Zones",
  subcommands: [
    {
      name: "security-policy-collection",
      description: "Results of a security policy search",
      subcommands: [
        {
          name: "list-security-policies",
          description:
            "Returns a list of security zone policies (SecurityPolicySummary resources), identified by compartmentId",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description:
                "The unique identifier of the security zone policy. (SecurityPolicy)",
              args: { name: "id" },
            },
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
      name: "data-mask-rule",
      description:
        "A data mask rule specifies the conditions in which the value for a sensitive data field in the UI is to",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes a DataMaskRule resource, identified by dataMaskRuleId",
          options: [
            optDataMaskRuleId,
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
            "Returns a DataMaskRule resource, identified by dataMaskRuleId",
          options: [optDataMaskRuleId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all DataMaskRule resources in the specified compartmentId (OCID) and its subcompartments",
          options: [
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
            optAccessLevel,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDataMaskRuleStatus,
            {
              name: "--target-id",
              description: "OCID of the target",
              args: { name: "target-id" },
            },
            {
              name: "--iam-group-id",
              description: "OCID of the IAM group",
              args: { name: "iam-group-id" },
            },
            {
              name: "--target-type",
              description: "Type of target",
              args: { name: "target-type" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new DataMaskRule resource definition",
          options: [
            optDisplayName2,
            optCompartmentId2,
            optIamGroupId,
            {
              name: "--target-selected",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDataMaskRuleStatus2,
            optLifecycleState2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories,
            optFromJson,
          ],
        },
        {
          name: "create-for-all-targets",
          description: "Creates a new DataMaskRule resource definition",
          options: [
            optDisplayName2,
            optCompartmentId2,
            optIamGroupId,
            optDescription,
            optDataMaskRuleStatus2,
            optLifecycleState2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories,
            optFromJson,
          ],
        },
        {
          name: "create-for-services",
          description: "Creates a new DataMaskRule resource definition",
          options: [
            optDisplayName2,
            optCompartmentId2,
            optIamGroupId,
            optDescription,
            optDataMaskRuleStatus2,
            optLifecycleState2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--target-selected-values",
              description: "Types of targets",
              args: {
                suggestions: [
                  "COMPARTMENT",
                  "ERPCLOUD",
                  "HCMCLOUD",
                  "SECURITY_ZONE",
                ],
              },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories,
            optFromJson,
          ],
        },
        {
          name: "create-for-targets",
          description: "Creates a new DataMaskRule resource definition",
          options: [
            optDisplayName2,
            optCompartmentId2,
            optIamGroupId,
            optDescription,
            optDataMaskRuleStatus2,
            optLifecycleState2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--target-selected-values",
              description: "IDs of targets",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a data mask rule (DataMaskRule resource) identified by dataMaskRuleId",
          options: [
            optDataMaskRuleId,
            optDisplayName3,
            optCompartmentId3,
            optIamGroupId2,
            { name: "--target-selected", args: { name: "json" } },
            optDataMaskRuleStatus,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories2,
            optFromJson,
          ],
        },
        {
          name: "update-for-all-targets",
          description:
            "Updates a data mask rule (DataMaskRule resource) identified by dataMaskRuleId",
          options: [
            optDataMaskRuleId,
            optDisplayName3,
            optCompartmentId3,
            optIamGroupId2,
            optDataMaskRuleStatus,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories2,
            optFromJson,
          ],
        },
        {
          name: "update-for-services",
          description:
            "Updates a data mask rule (DataMaskRule resource) identified by dataMaskRuleId",
          options: [
            optDataMaskRuleId,
            optDisplayName3,
            optCompartmentId3,
            optIamGroupId2,
            optDataMaskRuleStatus,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--target-selected-values",
              description: "Types of targets",
              args: {
                suggestions: [
                  "COMPARTMENT",
                  "ERPCLOUD",
                  "HCMCLOUD",
                  "SECURITY_ZONE",
                ],
              },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories2,
            optFromJson,
          ],
        },
        {
          name: "update-for-targets",
          description:
            "Updates a data mask rule (DataMaskRule resource) identified by dataMaskRuleId",
          options: [
            optDataMaskRuleId,
            optDisplayName3,
            optCompartmentId3,
            optIamGroupId2,
            optDataMaskRuleStatus,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--target-selected-values",
              description: "IDs of targets",
              args: { name: "json" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataMaskCategories2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "target-responder-recipe-responder-rule",
      description:
        "A TargetResponderRecipeResponderRule resource contains a specific instance of a single responder rule",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a responder rule (ResponderRule resource) identified by responderRuleId",
          options: [
            optTargetId,
            optTargetResponderRecipeId,
            optResponderRuleId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of responder rules (ResponderRule resources) associated with a responder recipe",
          options: [
            optTargetId,
            optTargetResponderRecipeId,
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a responder rule (ResponderRule resource) identified by responderRuleId",
          options: [
            optTargetId,
            optTargetResponderRecipeId,
            optResponderRuleId,
            optDetails,
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
      name: "problem-trend-aggregation",
      description:
        "Provides aggregated information on trends for counts of problems by specified parameters",
      subcommands: [
        {
          name: "request-summarized-trend-problems",
          description:
            "Returns a ProblemTrendAggregationCollection resource for a compartment, identified by compartmentId",
          options: [
            optCompartmentId,
            optTimeFirstDetectedGreaterThanOrEqualTo,
            optTimeFirstDetectedLessThanOrEqualTo,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-score-trend-aggregation",
      description:
        "Provides the dimensions and their corresponding time and security score",
      subcommands: [
        {
          name: "request-security-score-summarized-trend",
          description:
            "Returns a page of SecurityScoreTrendAggregation resources",
          options: [
            optCompartmentId,
            optTimeScoreComputedGreaterThanOrEqualTo,
            optTimeScoreComputedLessThanOrEqualTo,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "request-summarized-trend-security-scores",
          description: "DEPRECATED",
          options: [
            optCompartmentId,
            optTimeScoreComputedGreaterThanOrEqualTo,
            optTimeScoreComputedLessThanOrEqualTo,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-risk-score-aggregation",
      description: "Risk score of a resource",
      subcommands: [
        {
          name: "request-summarized-trend-resource-risk-scores",
          description:
            "Returns a summary of risk score trends in a ResourceRiskScoreAggregationCollection resource",
          options: [
            {
              name: "--filter",
              description: "The filter type",
              args: { suggestions: ["PROBLEM_ID", "RESOURCE_PROFILE_ID"] },
              isRequired: true,
            },
            {
              name: "--filter-id",
              description: "ID to be passed in to filter the risk scores",
              args: { name: "filter-id" },
              isRequired: true,
            },
            optCompartmentId,
            optTimeScoreComputedGreaterThanOrEqualTo,
            optTimeScoreComputedLessThanOrEqualTo,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description:
        "Detailed information about a work request (WorkRequest resource)",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request identified by workRequestId",
          options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description:
            "Returns details for a work request (WorkRequest resource) identified by workRequestId",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of work requests (WorkRequestSummaryCollection resource)",
          options: [
            optCompartmentId,
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given operation status",
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
            optPage,
            optLimit,
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
      name: "security-recipe-collection",
      description:
        "Collection of Security Zones recipes (SecurityRecipeSummary resources)",
      subcommands: [
        {
          name: "list-security-recipes",
          description:
            "Returns a list of security zone recipes (SecurityRecipeSummary resources) in a compartment",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description:
                "The unique identifier of the security zone recipe. (SecurityRecipe)",
              args: { name: "id" },
            },
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
      name: "problem",
      description: "Problems are at the core of Cloud Guard’s functionality",
      subcommands: [
        {
          name: "get",
          description: "Returns the Problem resource identified by problemId",
          options: [optProblemId, optFromJson],
        },
        {
          name: "list-problem-entities",
          description: "Returns a list of entities for a problem",
          options: [
            optProblemId,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-problem-histories",
          description: "Returns a list of actions taken on a problem",
          options: [
            optCompartmentId,
            optProblemId,
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
          name: "list",
          description:
            "Returns a list of all Problems identified by Cloud Guard which are currently in the database and meet",
          options: [
            optCompartmentId,
            optTimeLastDetectedGreaterThanOrEqualTo,
            optTimeLastDetectedLessThanOrEqualTo,
            optTimeFirstDetectedGreaterThanOrEqualTo,
            optTimeFirstDetectedLessThanOrEqualTo,
            {
              name: "--lifecycle-detail",
              description: "The field life cycle state",
              args: {
                suggestions: ["OPEN", "RESOLVED", "DISMISSED", "DELETED"],
              },
            },
            {
              name: "--lifecycle-state",
              description: "The field lifecycle state",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optRiskLevel,
            {
              name: "--resource-type",
              description: "Resource type associated with the resource",
              args: { name: "resource-type" },
            },
            {
              name: "--city",
              description: "City of the problem",
              args: { name: "city" },
            },
            {
              name: "--state",
              description: "State or province of the problem",
              args: { name: "state" },
            },
            {
              name: "--country",
              description: "Country of the problem",
              args: { name: "country" },
            },
            {
              name: "--label",
              description: "User-defined label associated with the problem",
              args: { name: "label" },
            },
            {
              name: "--detector-rule-id-list",
              description:
                "Comma seperated list of detector rule IDs to be passed in to match against Problems",
              args: { name: "detector-rule-id-list" },
              isRepeatable: true,
            },
            {
              name: "--detector-type",
              description: "The field to list the problems by detector type",
              args: {
                suggestions: [
                  "IAAS_ACTIVITY_DETECTOR",
                  "IAAS_CONFIGURATION_DETECTOR",
                  "IAAS_THREAT_DETECTOR",
                  "IAAS_LOG_INSIGHT_DETECTOR",
                  "IAAS_INSTANCE_SECURITY_DETECTOR",
                  "IAAS_CONTAINER_SECURITY_DETECTOR",
                ],
              },
            },
            optTargetId2,
            {
              name: "--problem-category",
              description:
                "Setting this to SECURITY_ZONE returns only security zone-related violations",
              args: { suggestions: ["SECURITY_ZONE"] },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--resource-id",
              description: "The ID of the resource associated with the problem",
              args: { name: "resource-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["riskLevel", "timeLastDetected", "resourceName"],
              },
            },
            optAll,
            optPageSize,
            {
              name: "--problem-region",
              description: "OCI Monitoring region",
              args: { name: "problem-region" },
            },
            optFromJson,
          ],
        },
        {
          name: "trigger-responder",
          description:
            "Sends the problem identified by problemId to the responder engine",
          options: [
            optProblemId,
            {
              name: "--responder-rule-id",
              description: "Unique identifier for the responder rule",
              args: { name: "responder-rule-id" },
              isRequired: true,
            },
            {
              name: "--configurations",
              description: "List of responder rule configurations",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-bulk-problem-status",
          description:
            "Changes the status for all problems listed in the problemIds array",
          options: [
            {
              name: "--status",
              description: "Action taken by user",
              args: {
                suggestions: ["OPEN", "RESOLVED", "DISMISSED", "DELETED"],
              },
              isRequired: true,
            },
            {
              name: "--problem-ids",
              description:
                "List of problem IDs to be passed in to update the problem status",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--comment",
              description:
                "User-defined comment to be passed in to update the problem",
              args: { name: "comment" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-problem-status",
          description:
            "Changes the current status of the problem, identified by problemId",
          options: [
            optProblemId,
            {
              name: "--status",
              description: "Action taken by user",
              args: {
                suggestions: ["OPEN", "RESOLVED", "DISMISSED", "DELETED"],
              },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "User comments",
              args: { name: "comment" },
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
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
      name: "sighting-endpoint-summary",
      description: "A summary of sighting endpoints",
      subcommands: [
        {
          name: "list-sighting-endpoints",
          description:
            "Returns sighting endpoints details in a SightingEndpointsCollection resource with a page",
          options: [
            optSightingId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
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
        "Summary information for an error (WorkRequestError resource) encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of errors for a work request identified by workRequestId",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
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
      name: "adhoc-query",
      description: "Details of a adhoc query",
      subcommands: [
        {
          name: "create",
          description: "Creates a AdhocQuery resource",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment OCID of adhoc query",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--adhoc-query-details",
              args: { name: "json" },
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
          name: "delete",
          description:
            "Deletes a AdhocQuery resource identified by adhocQueryId",
          options: [
            optAdhocQueryId,
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
          description: "Returns an adhoc query identified by adhocQueryId",
          options: [optAdhocQueryId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all adhoc queries (AdhocQuery resources) for a compartment identified by compartmentId",
          options: [
            optCompartmentId,
            {
              name: "--adhoc-query-status",
              description: "The status of the adhoc query created",
              args: {
                suggestions: [
                  "CREATING",
                  "CREATED",
                  "IN_PROGRESS",
                  "PARTIALLY_COMPLETED",
                  "EXPIRED",
                  "COMPLETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--time-started-filter-query-param",
              description: "Start time for a filter",
              args: { name: "datetime" },
            },
            {
              name: "--time-ended-filter-query-param",
              description: "End time for a filter",
              args: { name: "datetime" },
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
      ],
    },
    {
      name: "target-detector-recipe",
      description:
        "A TargetDetectorRecipe resource contains a specific instance of one of the supported detector types",
      subcommands: [
        {
          name: "create",
          description:
            "Attaches a DetectorRecipe to a target (Target resource) identified by targetId",
          options: [
            optTargetId,
            {
              name: "--detector-recipe-id",
              description: "Detector recipe unique identifier",
              args: { name: "detector-recipe-id" },
              isRequired: true,
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
            "Deletes the target detector recipe (TargetDetectorRecipe resource) identified by targetDetectorRecipeId",
          options: [
            optTargetId,
            optTargetDetectorRecipeId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns a target detector recipe (TargetDetectorRecipe resource) identified by targetDetectorRecipeId",
          options: [optTargetId, optTargetDetectorRecipeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all target detector recipes (TargetDetectorRecipe resources) associated with a target",
          options: [
            optTargetId,
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
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
            "Updates a target detector recipe (TargtetDetectorRecipe resource) identified by targetDetectorRecipeId",
          options: [
            optTargetId,
            optTargetDetectorRecipeId,
            {
              name: "--detector-recipe-id",
              description: "Unique identifier for the target detector recipe",
              args: { name: "detector-recipe-id" },
            },
            {
              name: "--is-validation-only-query",
              description:
                "Is validation to be performed for attaching the detector recipe?",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--detector-rules",
              description:
                "List of updates to be applied to detector rules in target detector recipe",
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
      name: "responder-recipe",
      description:
        "A ResponderRecipe resource contains a specific instance of one of the supported detector types (for example",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves the responder recipe (ResponderRecipe resource)",
          options: [
            optResponderRecipeId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the responder recipe is to be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a responder recipe (ResponderRecipe resource)",
          options: [
            {
              name: "--display-name",
              description: "Responder recipe display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--source-responder-recipe-id",
              description:
                "The unique identifier of the source responder recipe",
              args: { name: "source-responder-recipe-id" },
              isRequired: true,
            },
            optCompartmentId5,
            {
              name: "--description",
              description: "Responder recipe description",
              args: { name: "description" },
            },
            {
              name: "--responder-rules",
              description:
                "List of responder rules to override from source responder recipe",
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
          description:
            "Deletes a responder recipe (ResponderRecipe resource) identified by responderRecipeId",
          options: [
            optResponderRecipeId,
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
            "Returns a responder recipe (ResponderRecipe resource) identified by responderRecipeId",
          options: [optResponderRecipeId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list (ResponderRecipeCollection resource",
          options: [
            optCompartmentId,
            optResourceMetadataOnly,
            optDisplayName,
            optLifecycleState,
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
          name: "update",
          description:
            "Updates a responder recipe (ResponderRecipe resource) identified by responderRecipeId",
          options: [
            optResponderRecipeId,
            {
              name: "--display-name",
              description: "Responder recipe display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Responder recipe description",
              args: { name: "description" },
            },
            {
              name: "--responder-rules",
              description: "List of responder rules to update",
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
      name: "responder-execution-trend-aggregation",
      description:
        "Provides the timestamps and their corresponding number of remediations",
      subcommands: [
        {
          name: "request-summarized-trend-responder-executions",
          description:
            "Returns the number of remediations performed by Responders, for a given time period",
          options: [
            optCompartmentId,
            {
              name: "--time-completed-greater-than-or-equal-to",
              description: "Completion end time",
              args: { name: "datetime" },
            },
            {
              name: "--time-completed-less-than-or-equal-to",
              description: "Completion start time",
              args: { name: "datetime" },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-zone-collection",
      description: "A collection of security zones",
      subcommands: [
        {
          name: "list-security-zones",
          description:
            "Returns a list of security zones (SecurityZone resources) in a compartment identified by compartmentId",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description:
                "The unique identifier of the security zone (SecurityZone resource)",
              args: { name: "id" },
            },
            {
              name: "--security-recipe-id",
              description:
                "The unique identifier of the security zone recipe. (SecurityRecipe resource)",
              args: { name: "security-recipe-id" },
            },
            {
              name: "--is-required-security-zones-in-subtree",
              description: "Is security zones in the subtree?",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
      name: "security-policy",
      description:
        "A security policy (SecurityPolicy resource) defines security requirements for resources in a security zone",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a security zone policy (SecurityPolicy resource), identified by its unique ID (securityPolicyId)",
          options: [
            {
              name: "--security-policy-id",
              description:
                "The unique identifier of the security zone policy. (SecurityPolicy)",
              args: { name: "security-policy-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource",
      description: "Details of cloud guard resource",
      subcommands: [
        {
          name: "get",
          description: "Returns a resource identified by resourceId",
          options: [optResourceId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of all resources in a compartment",
          options: [
            optCompartmentId,
            optTargetId2,
            {
              name: "--region-parameterconflict",
              description: "OCI monitoring region",
              args: { name: "region-parameterconflict" },
            },
            {
              name: "--cvss-score",
              description: "Cvss score associated with the resource",
              args: { name: "integer" },
            },
            {
              name: "--cvss-score-greater-than",
              description:
                "Cvss score greater than associated with the resource",
              args: { name: "integer" },
            },
            {
              name: "--cvss-score-less-than",
              description: "Cvss score less than associated with the resource",
              args: { name: "integer" },
            },
            {
              name: "--cve-id",
              description: "CVE ID associated with the resource",
              args: { name: "cve-id" },
            },
            optRiskLevel,
            {
              name: "--risk-level-greater-than",
              description:
                "To filter risk level greater than the one mentioned in query param",
              args: { name: "risk-level-greater-than" },
            },
            {
              name: "--risk-level-less-than",
              description:
                "To filter risk level less than the one mentioned in query param",
              args: { name: "risk-level-less-than" },
            },
            {
              name: "--detector-rule-id-list",
              description:
                "Comma seperated list of detector rule IDs to be passed in to match against Problems",
              args: { name: "detector-rule-id-list" },
              isRepeatable: true,
            },
            {
              name: "--detector-type",
              description: "The field to list the problems by detector type",
              args: {
                suggestions: [
                  "IAAS_ACTIVITY_DETECTOR",
                  "IAAS_CONFIGURATION_DETECTOR",
                  "IAAS_THREAT_DETECTOR",
                  "IAAS_LOG_INSIGHT_DETECTOR",
                  "IAAS_INSTANCE_SECURITY_DETECTOR",
                  "IAAS_CONTAINER_SECURITY_DETECTOR",
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
      ],
    },
    {
      name: "adhoc-query-result-collection",
      description: "Aggregated results for an adhoc query request",
      subcommands: [
        {
          name: "get-adhoc-query-result-content",
          description:
            "Downloads the results for a given adhoc ID (from includes results from all monitoring regions)",
          options: [
            optAdhocQueryId,
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
          name: "list-adhoc-query-results",
          description:
            "Lists the results for a given adhoc ID (from includes results from all monitoring regions)",
          options: [
            optAdhocQueryId,
            optCompartmentId,
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
      name: "detector-recipe",
      description:
        "A detector recipe is a collection of rules that can be configured to trigger problems that appear on",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the detector recipe (DetectorRecipe resource), identified by detectorRecipeId",
          options: [
            optDetectorRecipeId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the detector recipe is to be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new DetectorRecipe resource",
          options: [
            {
              name: "--display-name",
              description: "Detector recipe display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId5,
            {
              name: "--description",
              description: "Detector recipe description",
              args: { name: "description" },
            },
            {
              name: "--detector",
              description: "Detector for the rule",
              args: {
                suggestions: [
                  "IAAS_ACTIVITY_DETECTOR",
                  "IAAS_CONFIGURATION_DETECTOR",
                  "IAAS_THREAT_DETECTOR",
                  "IAAS_LOG_INSIGHT_DETECTOR",
                  "IAAS_INSTANCE_SECURITY_DETECTOR",
                  "IAAS_CONTAINER_SECURITY_DETECTOR",
                ],
              },
            },
            {
              name: "--source-detector-recipe-id",
              description: "The ID of the source detector recipe",
              args: { name: "source-detector-recipe-id" },
            },
            {
              name: "--detector-rules",
              description:
                "Detector rules to override from source detector recipe",
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
          description:
            "Deletes a detector recipe (DetectorRecipe resource) identified by detectorRecipeId",
          options: [
            optDetectorRecipeId,
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
            "Returns a detector recipe (DetectorRecipe resource) identified by detectorRecipeId",
          options: [optDetectorRecipeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all detector recipes (DetectorRecipe resources) in a compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            optResourceMetadataOnly,
            optLifecycleState,
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
          name: "update",
          description:
            "Updates a detector recipe (DetectorRecipe resource) identified by detectorRecipeId",
          options: [
            optDetectorRecipeId,
            {
              name: "--display-name",
              description: "Display name of detector recipe",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Detector recipe description",
              args: { name: "description" },
            },
            {
              name: "--detector-rules",
              description: "List of detector rules to update",
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
      name: "detector-recipe-detector-rule",
      description:
        "A DetectorRecipeDetectorRule resource defines a single recipe rule in the collection for a DetectorRecipe",
      subcommands: [
        {
          name: "create",
          description: "Creates a detector rule",
          options: [
            optDetectorRecipeId,
            { name: "--details", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the DetectorRecipeDetectorRule resource identified by detectorRuleId",
          options: [
            optDetectorRecipeId,
            optDetectorRuleId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete-detector-recipe-detector-rule-data-source",
          description:
            "Deletes the DetectorRecipeDetectorRuleDataSource resource by identifier",
          options: [
            optDetectorRecipeId,
            optDetectorRuleId,
            optDataSourceId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns a detector rule (DetectorRule resource) identified by detectorRuleId",
          options: [optDetectorRecipeId, optDetectorRuleId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of detector rules (DetectorRule resources) for a detector recipe (DetectorRecipe resource)",
          options: [
            optDetectorRecipeId,
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a detector rule (DetectorRule resource) identified by detectorRuleId",
          options: [
            optDetectorRecipeId,
            optDetectorRuleId,
            { name: "--details", args: { name: "json" } },
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
      name: "problem-aggregation",
      description:
        "Provides aggregated information on counts of problems by specified parameters",
      subcommands: [
        {
          name: "request-summarized-problems",
          description:
            "Returns the number of problems matching the key-value pairs in dimensionMap",
          options: [
            {
              name: "--list-dimensions",
              description:
                "The possible attributes based on which the problems can be distinguished",
              args: {
                suggestions: [
                  "RESOURCE_TYPE",
                  "REGION",
                  "COMPARTMENT_ID",
                  "RISK_LEVEL",
                  "DETECTOR_ID",
                  "TARGET_ID",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "wlp-agent",
      description: "Details of WLP agent",
      subcommands: [
        {
          name: "create",
          description:
            "Creates and registers a WLP agent for an on-premise resource",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment OCID of the host",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--agent-version",
              description: "The version of the agent making the request",
              args: { name: "agent-version" },
              isRequired: true,
            },
            {
              name: "--certificate-signed-request",
              description:
                "The certificate signed request containing domain, organization names, organization units, city, state",
              args: { name: "certificate-signed-request" },
              isRequired: true,
            },
            {
              name: "--os-info",
              description:
                "Concatenated OS name, OS version and agent architecture; for example, ubuntu_22.0_amd64",
              args: { name: "os-info" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes and unregisters the WLP agent for an on-premise resource",
          options: [optWlpAgentId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description:
            "Returns a WlpAgent resource for an on-premise resource identified by wlpAgentId",
          options: [optWlpAgentId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of WLP agents in a compartment",
          options: [
            optCompartmentId,
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
            "Updates and renews the certificate for an on-premise WLP agent identified by wlpAgentId",
          options: [
            optWlpAgentId,
            {
              name: "--certificate-signed-request",
              description: "The updated certificate signing request",
              args: { name: "certificate-signed-request" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "data-source",
      description:
        "Detailed information for a data source (DataSource resource)",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a data source (DataSource resource), identified by parameters passed in",
          options: [
            optDataSourceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the data source is to be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a data source (DataSource resource), using parameters passed through a CreateDataSourceDetails",
          options: [
            optDisplayName4,
            optCompartmentId4,
            optDataSourceFeedProvider,
            optStatus,
            { name: "--data-source-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-data-source-scheduled-query-data-source-obj-details",
          description:
            "Creates a data source (DataSource resource), using parameters passed through a CreateDataSourceDetails",
          options: [
            optDisplayName4,
            optCompartmentId4,
            optDataSourceFeedProvider,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--data-source-details-query",
              description:
                "The continuous query expression that is run periodically",
              args: { name: "data-source-details-query" },
            },
            {
              name: "--data-source-details-description",
              description: "Description text for the query",
              args: { name: "data-source-details-description" },
            },
            {
              name: "--data-source-details-interval-in-seconds",
              description:
                "Interval in seconds which query is run periodically",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-scheduled-query-scope-details",
              description:
                "Target information in which scheduled query will be run",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-data-source-logging-query-data-source-details",
          description:
            "Creates a data source (DataSource resource), using parameters passed through a CreateDataSourceDetails",
          options: [
            optDisplayName4,
            optCompartmentId4,
            optDataSourceFeedProvider,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--data-source-details-regions",
              description: "List of logging query regions",
              args: { name: "json" },
            },
            {
              name: "--data-source-details-query",
              description:
                "The continuous query expression that is run periodicall",
              args: { name: "data-source-details-query" },
            },
            {
              name: "--data-source-details-interval-in-minutes",
              description: "Interval in minutes that query is run periodically",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-threshold",
              description:
                "DEPRECATED - The integer value that must be exceeded, fall below or equal to (depending on the operator)",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-query-start-time",
              args: { name: "json" },
            },
            {
              name: "--data-source-details-operator",
              description: "DEPRECATED - Operator used in data source",
              args: {
                suggestions: [
                  "EQUAL",
                  "GREATER",
                  "GREATERTHANEQUALTO",
                  "LESS",
                  "LESSTHANEQUALTO",
                ],
              },
            },
            {
              name: "--data-source-details-logging-query-type",
              description:
                "Type of logging query for data source (Sighting/Insight)",
              args: { suggestions: ["INSIGHT"] },
            },
            {
              name: "--data-source-details-additional-entities-count",
              description:
                "The additional entities count used for data source query",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-logging-query-details",
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
            "Deletes a data source (DataSource resource) identified by dataSourceId",
          options: [
            optDataSourceId,
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
            "Returns a data source (DataSource resource) identified by dataSourceId",
          options: [optDataSourceId, optFromJson],
        },
        {
          name: "list-data-source-events",
          description:
            "Returns a list of data source events (DataSourceEventCollection resource) from the data source",
          options: [
            optDataSourceId,
            {
              name: "--region-parameterconflict",
              description:
                "A filter to return only resource where their region matches the given region",
              args: { name: "region-parameterconflict" },
            },
            optPage,
            optLimit,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of all data sources (DataSource resources) for a compartment identified by compartmentId",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--data-source-feed-provider",
              description:
                "A filter to return only resources when their feed provider matches the given feed provider",
              args: { suggestions: ["LOGGINGQUERY", "SCHEDULEDQUERY"] },
            },
            optLifecycleState,
            optLimit,
            optPage,
            {
              name: "--logging-query-type",
              description:
                "A filter to return only resources where their query type matches the given LoggingQueryType",
              args: { suggestions: ["INSIGHT"] },
            },
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
          name: "update",
          description:
            "Updates a data source (DataSource resource) identified by dataSourceId",
          options: [
            optDataSourceId,
            optDisplayName5,
            optStatus,
            { name: "--data-source-details", args: { name: "json" } },
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
          name: "update-data-source-scheduled-query-data-source-obj-details",
          description:
            "Updates a data source (DataSource resource) identified by dataSourceId",
          options: [
            optDataSourceId,
            optDisplayName5,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--data-source-details-query",
              description:
                "The continuous query expression that is run periodically",
              args: { name: "data-source-details-query" },
            },
            {
              name: "--data-source-details-description",
              description: "Description text for the query",
              args: { name: "data-source-details-description" },
            },
            {
              name: "--data-source-details-interval-in-seconds",
              description:
                "Interval in seconds which query is run periodically",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-scheduled-query-scope-details",
              description:
                "Target information in which scheduled query will be run",
              args: { name: "json" },
            },
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-data-source-logging-query-data-source-details",
          description:
            "Updates a data source (DataSource resource) identified by dataSourceId",
          options: [
            optDataSourceId,
            optDisplayName5,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--data-source-details-regions",
              description: "List of logging query regions",
              args: { name: "json" },
            },
            {
              name: "--data-source-details-query",
              description:
                "The continuous query expression that is run periodicall",
              args: { name: "data-source-details-query" },
            },
            {
              name: "--data-source-details-interval-in-minutes",
              description: "Interval in minutes that query is run periodically",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-threshold",
              description:
                "DEPRECATED - The integer value that must be exceeded, fall below or equal to (depending on the operator)",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-query-start-time",
              args: { name: "json" },
            },
            {
              name: "--data-source-details-operator",
              description: "DEPRECATED - Operator used in data source",
              args: {
                suggestions: [
                  "EQUAL",
                  "GREATER",
                  "GREATERTHANEQUALTO",
                  "LESS",
                  "LESSTHANEQUALTO",
                ],
              },
            },
            {
              name: "--data-source-details-logging-query-type",
              description:
                "Type of logging query for data source (Sighting/Insight)",
              args: { suggestions: ["INSIGHT"] },
            },
            {
              name: "--data-source-details-additional-entities-count",
              description:
                "The additional entities count used for data source query",
              args: { name: "integer" },
            },
            {
              name: "--data-source-details-logging-query-details",
              args: { name: "json" },
            },
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
      name: "resource-vulnerability-collection",
      description: "List of CloudGuardResourceVulnerabilitySummary",
      subcommands: [
        {
          name: "list-resource-vulnerabilities",
          description:
            "Returns the list of vulnerabilities associated with the resourceId where resource is an instance",
          options: [
            optResourceId,
            {
              name: "--cve-id",
              description: "CVE ID associated with the resource",
              args: { name: "cve-id" },
            },
            optRiskLevel,
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
      name: "policy-summary",
      description:
        "A policy summary (PolicySummary object) contains a list of all current global policy statements",
      subcommands: [
        {
          name: "list-policies",
          description:
            "Returns the list of global policy statements (policy attributes) needed to fully enable Cloud Guard",
          options: [
            optCompartmentId,
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
      name: "sighting-summary",
      description: "Sighting summary definition",
      subcommands: [
        {
          name: "list-sightings",
          description: "For the parameters passed, returns a list of sightings",
          options: [
            optCompartmentId,
            {
              name: "--problem-id",
              description: "OCID of the problem",
              args: { name: "problem-id" },
            },
            {
              name: "--resource-profile-id",
              description: "OCID of the resource profile",
              args: { name: "resource-profile-id" },
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optTimeLastDetectedGreaterThanOrEqualTo,
            optTimeLastDetectedLessThanOrEqualTo,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "detector",
      description: "Information for a single detector category",
      subcommands: [
        {
          name: "get",
          description: "Returns a Detector resource, identified by detectorId",
          options: [optDetectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a detector catalog (DetectorCollection resource) with a list of DetectorSummary resources",
          options: [
            optCompartmentId,
            optLimit,
            optLifecycleState,
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
      name: "impacted-resource-summary",
      description:
        "Summary of information on a resource that’s been impacted by a detected problem",
      subcommands: [
        {
          name: "list-impacted-resources",
          description:
            "Returns a list of impacted resources for a problem identified by problemId",
          options: [
            optProblemId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-zone",
      description:
        "A security zone is associated with a security zone recipe and enforces all security zone policies in",
      subcommands: [
        {
          name: "add",
          description:
            "Adds a compartment to an existing security zone (SecurityZone resource), identified by securityZoneId",
          options: [
            optSecurityZoneId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to be added to the security zone",
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
          name: "change-compartment",
          description:
            "Moves a security zone, identified by securityZoneId, to a different compartment",
          options: [
            optSecurityZoneId,
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
          description:
            "Creates a security zone (SecurityZone resource) for a compartment",
          options: [
            {
              name: "--display-name",
              description: "The security zone's display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--security-zone-recipe-id",
              description:
                "The OCID of the security zone recipe (SecurityRecipe resource) for the security zone",
              args: { name: "security-zone-recipe-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for the security zone",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The security zone's description",
              args: { name: "description" },
            },
            {
              name: "--is-inheritance-after-delete-enabled",
              description:
                "Indicates if upon deletion of the security zone the comparment should inherit parent security zone",
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
          description: "Deletes a security zone, identified by securityZoneId",
          options: [
            optSecurityZoneId,
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
            "Returns a security zone (SecurityZone resource) identified by securityZoneId",
          options: [optSecurityZoneId, optFromJson],
        },
        {
          name: "remove",
          description:
            "Removes a compartment from a security zone (SecurityZone resource), identified by securityZoneId",
          options: [
            optSecurityZoneId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to be removed from SecurityZone",
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
          name: "update",
          description:
            "Updates a security zone (SecurityZone resource) identified by securityZoneId",
          options: [
            optSecurityZoneId,
            {
              name: "--display-name",
              description: "The security zone's display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The security zone's description",
              args: { name: "description" },
            },
            {
              name: "--security-zone-recipe-id",
              description:
                "The OCID of the security recipe (SecurityRecipe resource) for the security zone",
              args: { name: "security-zone-recipe-id" },
            },
            {
              name: "--is-inheritance-after-delete-enabled",
              description:
                "Indicates if upon deletion of the security zone the comparment should inherit parent security zone",
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
      name: "configuration",
      description:
        "Specifies several key settings for a Cloud Guard tenancy, identified by tenancy root compartment OCID",
      subcommands: [
        {
          name: "get",
          description:
            "Returns the configuration details for a Cloud Guard tenancy, identified by root compartment OCID",
          options: [optCompartmentId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates configuration details for a Cloud Guard tenancy, identified by root compartment OCID",
          options: [
            {
              name: "--reporting-region",
              description: "The reporting region",
              args: { name: "reporting-region" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Status of Cloud Guard tenant",
              args: { suggestions: ["ENABLED", "DISABLED"] },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--service-configurations",
              description: "List of service configurations for tenant",
              args: { name: "json" },
            },
            {
              name: "--self-manage-resources",
              description:
                "Identifies if Oracle managed resources will be created by customers",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "responder-recipe-responder-rule",
      description:
        "A ResponderRecipeRule resource contains a specific instance of a single responder rule",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a responder rule (ResponderRule resource) identified by responderRuleId",
          options: [optResponderRecipeId, optResponderRuleId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of responder rules (ResponderRule resources in a responderRecipeResponderRuleCollection",
          options: [
            optResponderRecipeId,
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a responder rule (ResponderRule resource) identified by responderRuleId",
          options: [
            optResponderRecipeId,
            optResponderRuleId,
            optDetails,
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
      name: "resource-port-collection",
      description: "List of CloudGuardResourcePortSummary",
      subcommands: [
        {
          name: "list-resource-ports",
          description:
            "Returns the list of open ports associated with the resourceId where resource is an instance",
          options: [
            optResourceId,
            {
              name: "--open-port",
              description: "Open port associated with the resource",
              args: { name: "open-port" },
            },
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
      name: "responder-execution-summary",
      description: "A summary of detailed information on responder execution",
      subcommands: [
        {
          name: "list-responder-executions",
          description: "Returns a list of responder executions",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--responder-rule-ids",
              description:
                "Responder rule unique identifier filter for the responder executions",
              args: { name: "responder-rule-ids" },
              isRepeatable: true,
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description: "Creation start time for filtering",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than-or-equal-to",
              description: "Creation end time for filtering",
              args: { name: "datetime" },
            },
            {
              name: "--time-completed-greater-than-or-equal-to",
              description: "Completion end time",
              args: { name: "datetime" },
            },
            {
              name: "--time-completed-less-than-or-equal-to",
              description: "Completion start time",
              args: { name: "datetime" },
            },
            optTargetId2,
            {
              name: "--resource-type",
              description: "Resource type associated with the resource",
              args: { name: "resource-type" },
            },
            {
              name: "--responder-type",
              description:
                "The field to list the responder executions by responder type",
              args: { suggestions: ["REMEDIATION", "NOTIFICATION"] },
            },
            {
              name: "--responder-execution-status",
              description:
                "The status of the responder execution in which to list responders",
              args: {
                suggestions: [
                  "STARTED",
                  "AWAITING_CONFIRMATION",
                  "AWAITING_INPUT",
                  "SUCCEEDED",
                  "FAILED",
                  "SKIPPED",
                  "ALL",
                ],
              },
            },
            {
              name: "--responder-execution-mode",
              description:
                "The mode of the responder execution in which to list responders",
              args: { suggestions: ["MANUAL", "AUTOMATED", "ALL"] },
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
                  "responderRuleName",
                  "resourceName",
                  "timeCompleted",
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
      name: "responder-execution",
      description:
        "Attributes for a responder execution (ResponderExecution resource)",
      subcommands: [
        {
          name: "execute",
          description: "Executes the responder execution",
          options: [
            optResponderExecutionId,
            optCompartmentId,
            optIfMatch,
            {
              name: "--configurations",
              description: "List of responder rule configurations",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns a responder execution identified by responderExecutionId",
          options: [optResponderExecutionId, optFromJson],
        },
        {
          name: "skip-bulk",
          description: "Skips the execution for a bulk of responder executions",
          options: [
            {
              name: "--responder-execution-ids",
              description: "List of responder execution IDs to skip execution",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "skip",
          description: "Skips the execution of the responder execution",
          options: [
            optResponderExecutionId,
            optCompartmentId,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "responder-execution-aggregation",
      description:
        "Provides the dimensions and their corresponding count value",
      subcommands: [
        {
          name: "request-summarized-responder-executions",
          description:
            "Returns the number of responder executions, identified by parameters specified",
          options: [
            {
              name: "--responder-executions-dimensions",
              description:
                "The possible attributes based on which the responder executions can be distinguished",
              args: {
                suggestions: [
                  "RESPONDER_RULE_TYPE",
                  "RESPONDER_EXECUTION_STATUS",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optCompartmentId,
            {
              name: "--responder-type-filter",
              description:
                "The possible filters for responder type dimension to distinguish responder executions",
              args: { suggestions: ["REMEDIATION", "NOTIFICATION"] },
              isRepeatable: true,
            },
            {
              name: "--responder-execution-status-filter",
              description:
                "The possible filters for responder type dimension to distinguish responder executions",
              args: {
                suggestions: [
                  "STARTED",
                  "AWAITING_CONFIRMATION",
                  "SUCCEEDED",
                  "FAILED",
                  "SKIPPED",
                ],
              },
              isRepeatable: true,
            },
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "technique-summary",
      description: "Summary information for a technique",
      subcommands: [
        {
          name: "list-techniques",
          description:
            "Returns a list of techniques associated with detector rules",
          options: [
            optCompartmentId,
            {
              name: "--tactics",
              description:
                "A filter to return only resources that match the list of tactics given",
              args: { name: "tactics" },
              isRepeatable: true,
            },
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "responder-rule",
      description:
        "A ResponderRule resource contains the default settings for a single responder rule that Cloud Guard provides",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a responder rule (ResponderRule resource) identified by resonderRuleId",
          options: [optResponderRuleId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of responder rules for the ResponderRecipe resource identified by responderId",
          options: [
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
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
      name: "resource-type-summary",
      description: "A summary of detailed information on a resource type",
      subcommands: [
        {
          name: "list-resource-types",
          description:
            "Returns a single ResourceTypeCollection resource, containing a list of resource types",
          options: [
            optCompartmentId,
            {
              name: "--detector-id",
              description: "Detector type",
              args: {
                suggestions: [
                  "IAAS_ACTIVITY_DETECTOR",
                  "IAAS_CONFIGURATION_DETECTOR",
                  "IAAS_THREAT_DETECTOR",
                  "IAAS_LOG_INSIGHT_DETECTOR",
                  "IAAS_INSTANCE_SECURITY_DETECTOR",
                  "IAAS_CONTAINER_SECURITY_DETECTOR",
                ],
              },
            },
            optLifecycleState,
            optLimit,
            optPage,
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
      name: "resource-profile-impacted-resource-summary",
      description:
        "Summary information on impacted resource in resource profile",
      subcommands: [
        {
          name: "list-resource-profile-impacted-resources",
          description:
            "Returns a list of impacted resources (ResourceProfileImpactedResourceCollection resource with a page",
          options: [
            optResourceProfileId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-score-aggregation",
      description:
        "Provides the dimensions and their corresponding count value",
      subcommands: [
        {
          name: "request-security-scores",
          description: "Returns a page of SecurityScoreAggregation resources",
          options: [optCompartmentId, optLimit, optPage, optFromJson],
        },
        {
          name: "request-summarized-security-scores",
          description: "DEPRECATED",
          options: [optCompartmentId, optLimit, optPage, optFromJson],
        },
      ],
    },
    {
      name: "resource-profile-summary",
      description: "Summary information for a resource profile",
      subcommands: [
        {
          name: "list-resource-profiles",
          description:
            "Returns a list of all resource profile summaries (ResourceProfileCollection resource with a page",
          options: [
            optCompartmentId,
            optTimeLastDetectedGreaterThanOrEqualTo,
            optTimeLastDetectedLessThanOrEqualTo,
            optTimeFirstDetectedGreaterThanOrEqualTo,
            optTimeFirstDetectedLessThanOrEqualTo,
            optCompartmentIdInSubtree,
            optAccessLevel,
            {
              name: "--resource-types",
              description:
                "A filter to return only resources that match the list of resource types given",
              args: { name: "resource-types" },
              isRepeatable: true,
            },
            {
              name: "--risk-score-greater-than-or-equal-to",
              description: "Risk score filter",
              args: { name: "risk-score-greater-than-or-equal-to" },
            },
            {
              name: "--risk-score-less-than-or-equal-to",
              description: "Risk score filter",
              args: { name: "risk-score-less-than-or-equal-to" },
            },
            {
              name: "--techniques",
              description:
                "A filter to return only resources that match the list of techniques given",
              args: { name: "techniques" },
              isRepeatable: true,
            },
            {
              name: "--tactics",
              description:
                "A filter to return only resources that match the list of tactics given",
              args: { name: "tactics" },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort resource profiles",
              args: {
                suggestions: [
                  "riskScore",
                  "riskScoreGrowth",
                  "timeFirstDetected",
                  "timeLastDetected",
                  "sightingsCount",
                  "displayName",
                  "type",
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
      name: "sighting-impacted-resource-summary",
      description: "Summary of resources impacted by a sighting",
      subcommands: [
        {
          name: "list-sighting-impacted-resources",
          description:
            "Returns a list of impacted resources for a sighting, identified by sightingId",
          options: [
            optSightingId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-profile-endpoint-summary",
      description: "Summary information for resource profile endpoints",
      subcommands: [
        {
          name: "list-resource-profile-endpoints",
          description:
            "Returns a list of endpoints (ResourceProfileEndpointCollection resource with a page",
          options: [
            optResourceProfileId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "activity-problem-aggregation",
      description: "Provides the parameters and their corresponding count",
      subcommands: [
        {
          name: "request-summarized-activity-problems",
          description:
            "Returns the summary of problems generated by OCI Activity Detector rules, identified by parameters specified",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLimit,
            {
              name: "--include-unknown-locations",
              description: "Default is false",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-vulnerability",
      description: "CG vulnerability object",
      subcommands: [
        {
          name: "get",
          description:
            "Returns the vulnerability details associated with the cveId where resource is an instance",
          options: [
            optResourceId,
            {
              name: "--vulnerability-key",
              description: "CloudGuard vulnerability id",
              args: { name: "vulnerability-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "condition-metadata-type",
      description: "The metadata definition of the requested condition type",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a ConditionMetatDataType resource with its details",
          options: [
            {
              name: "--condition-metadata-type-id",
              description: "The type of the condition metadata",
              args: {
                suggestions: [
                  "ActivityCondition",
                  "SecurityCondition",
                  "CloudGuardCondition",
                  "InstanceSecurityCondition",
                  "ThreatCondition",
                  "ContainerCondition",
                ],
              },
              isRequired: true,
            },
            {
              name: "--service-type",
              description: "Service type filter for the condition metadata",
              args: { name: "service-type" },
            },
            {
              name: "--resource-type",
              description: "Resource filter for the condition metadata",
              args: { name: "resource-type" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of ConditionMetadataType resources",
          options: [
            optCompartmentId,
            optLifecycleState,
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
      name: "problem-endpoint-summary",
      description:
        "Summary information for endpoints associated with a problem (Problem object)",
      subcommands: [
        {
          name: "list-problem-endpoints",
          description:
            "Returns a list of endpoints associated with a problem, identified by problemId",
          options: [
            optProblemId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-recipe",
      description:
        "A security zone recipe (SecurityRecipe resource) is a collection of security zone policies",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the security recipe (SecurityRecipe resource), identified by securityRecipeId",
          options: [
            optSecurityRecipeId,
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
          description:
            "Creates a security zone recipe (SecurityRecipe resource)",
          options: [
            {
              name: "--display-name",
              description: "The recipe's display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--security-policies",
              description:
                "The list of security policy IDs to include in the recipe",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the recipe",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The recipe's description",
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
            "Deletes a security zone recipe, identified by securityRecipeId",
          options: [
            optSecurityRecipeId,
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
            "Returns a security zone recipe (SecurityRecipe resource) identified by securityRecipeId",
          options: [optSecurityRecipeId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates a security zone recipe (SecurityRecipe resource), identified by securityRecipeId",
          options: [
            optSecurityRecipeId,
            {
              name: "--display-name",
              description: "The recipe's display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The recipe's description",
              args: { name: "description" },
            },
            {
              name: "--security-policies",
              description:
                "The list of security policy IDs to include in the recipe",
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
      name: "target-detector-recipe-detector-rule",
      description:
        "A TargetDetectorRecipeDetectorRule resource contains a specific instance of a single detector rule in one",
      subcommands: [
        {
          name: "get",
          description:
            "Returns DetectorRule resource by identified by targetDetectorRecipeId",
          options: [
            optTargetId,
            optTargetDetectorRecipeId,
            {
              name: "--detector-rule-id",
              description: "The unique identifier of the detector rule",
              args: { name: "detector-rule-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of DetectorRule associated with DetectorRecipe within a Target",
          options: [
            optTargetId,
            optTargetDetectorRecipeId,
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the DetectorRule resource identified by targetDetectorRecipeId",
          options: [
            optTargetId,
            optTargetDetectorRecipeId,
            {
              name: "--detector-rule-id",
              description: "The unique identifier of the detector rule",
              args: { name: "detector-rule-id" },
              isRequired: true,
            },
            optDetails,
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Returns a paginated list (WorkRequestLogEntryCollection resource) of log entries for a request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
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
      name: "recommendation-summary",
      description: "Recommendation definition",
      subcommands: [
        {
          name: "list-recommendations",
          description:
            "Returns a list of recommendations (RecommendationSummaryCollection resource with a page",
          options: [
            optCompartmentId,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["riskLevel", "timeCreated"] },
            },
            optTargetId2,
            optCompartmentIdInSubtree,
            optAccessLevel,
            optLifecycleState,
            {
              name: "--lifecycle-detail",
              description: "The field lifecycle state",
              args: { suggestions: ["OPEN", "RESOLVED", "DISMISSED"] },
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
      name: "resource-profile-risk-score-aggregation-summary",
      description: "Summary of resource profile risk score aggregations",
      subcommands: [
        {
          name: "request-summarized-top-trend-resource-profile-risk-scores",
          description:
            "Returns a list of resource profile risk score aggregation summaries",
          options: [
            optCompartmentId,
            optTimeScoreComputedGreaterThanOrEqualTo,
            optTimeScoreComputedLessThanOrEqualTo,
            optCompartmentIdInSubtree,
            {
              name: "--sort-by",
              description: "The field to sort trendlines for resource profiles",
              args: {
                suggestions: [
                  "riskScore",
                  "riskScoreGrowth",
                  "timeFirstDetected",
                  "timeLastDetected",
                ],
              },
            },
            {
              name: "--count",
              description:
                "Number of resource profile risk score trend-lines to be displayed",
              args: { name: "integer" },
            },
            optAccessLevel,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sighting",
      description: "Sighting details",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a single sighting (Sighting resource) identified by sightingId",
          options: [optSightingId, optFromJson],
        },
      ],
    },
    {
      name: "target",
      description:
        "A target defines the scope of resources that Cloud Guard monitors and the rules to be enforced in",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a target (Target resource), using parameters passed in a CreateTargetDetails resource",
          options: [
            {
              name: "--display-name",
              description: "Display name for the target",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--target-resource-type",
              description:
                "Type of resource that target support (COMPARTMENT/FACLOUD)",
              args: {
                suggestions: [
                  "COMPARTMENT",
                  "ERPCLOUD",
                  "HCMCLOUD",
                  "SECURITY_ZONE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--target-resource-id",
              description: "Resource ID which the target uses to monitor",
              args: { name: "target-resource-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The target description",
              args: { name: "description" },
            },
            {
              name: "--target-detector-recipes",
              description: "List of detector recipes to attach to target",
              args: { name: "json" },
            },
            {
              name: "--target-responder-recipes",
              description: "List of responder recipes to attach to target",
              args: { name: "json" },
            },
            {
              name: "--lifecycle-state",
              description: "The enablement state of the detector rule",
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
            "Deletes a target (Target resource) identified by targetId",
          options: [
            optTargetId,
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
            "Returns a target (Target resource) identified by targetId",
          options: [optTargetId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of targets (TargetCollection resource with page of TargetSummary resources) for the target",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--is-non-security-zone-targets-only-query",
              description: "Default is false",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLifecycleState,
            optCompartmentIdInSubtree,
            optAccessLevel,
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
            "Updates a target (Target resource) identified by targetId",
          options: [
            optTargetId,
            {
              name: "--display-name",
              description: "Display name of a target",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description: "The current lifecycle state of the Target",
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
            {
              name: "--target-detector-recipes",
              description:
                "The details of target detector recipes to be updated",
              args: { name: "json" },
            },
            {
              name: "--target-responder-recipes",
              description:
                "The details of target responder recipes to be updated",
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
      name: "responder-activity-summary",
      description: "Responder activity summary definition",
      subcommands: [
        {
          name: "list-responder-activities",
          description:
            "Returns a list of responder activities for a problem, identified by problemId",
          options: [
            optProblemId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "responderRuleName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "managed-list",
      description:
        "A managed list is a reusable list of parameters that makes it easier to set the scope for detector",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the managed list (ManagedList resource), identified by managedListId",
          options: [
            optManagedListId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the managed list is to be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new ManagedList resource",
          options: [
            {
              name: "--display-name",
              description: "Managed list display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId5,
            {
              name: "--source-managed-list-id",
              description: "OCID of the source managed list",
              args: { name: "source-managed-list-id" },
            },
            {
              name: "--description",
              description: "Managed list description",
              args: { name: "description" },
            },
            {
              name: "--list-type",
              description: "Type of information stored in the list",
              args: {
                suggestions: [
                  "CIDR_BLOCK",
                  "USERS",
                  "GROUPS",
                  "IPV4ADDRESS",
                  "IPV6ADDRESS",
                  "RESOURCE_OCID",
                  "REGION",
                  "COUNTRY",
                  "STATE",
                  "CITY",
                  "TAGS",
                  "GENERIC",
                  "FUSION_APPS_ROLE",
                  "FUSION_APPS_PERMISSION",
                  "NAMESPACE_SELECTOR",
                  "POD_RESOURCE_SELECTOR",
                ],
              },
            },
            {
              name: "--list-items",
              description: "List of items in the managed list",
              args: { name: "json" },
            },
            {
              name: "--group",
              description: "Managed list type group",
              args: { name: "group" },
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
          description: "Deletes a managed list identified by managedListId",
          options: [
            optManagedListId,
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
          description: "Returns a managed list identified by managedListId",
          options: [optManagedListId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all ManagedList resources in a compartment, identified by compartmentId",
          options: [
            optCompartmentId,
            optDisplayName,
            optResourceMetadataOnly,
            optLifecycleState,
            {
              name: "--list-type",
              description: "The type of managed list",
              args: {
                suggestions: [
                  "CIDR_BLOCK",
                  "USERS",
                  "GROUPS",
                  "IPV4ADDRESS",
                  "IPV6ADDRESS",
                  "RESOURCE_OCID",
                  "REGION",
                  "COUNTRY",
                  "STATE",
                  "CITY",
                  "TAGS",
                  "GENERIC",
                  "FUSION_APPS_ROLE",
                  "FUSION_APPS_PERMISSION",
                  "NAMESPACE_SELECTOR",
                  "POD_RESOURCE_SELECTOR",
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
          name: "update",
          description:
            "Updates a ManagedList resource, identified by managedList",
          options: [
            optManagedListId,
            {
              name: "--display-name",
              description: "Managed list display name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Managed list description",
              args: { name: "description" },
            },
            {
              name: "--list-items",
              description: "List of managed list items",
              args: { name: "json" },
            },
            {
              name: "--group",
              description: "Managed list type group",
              args: { name: "group" },
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
      name: "managed-list-type-summary",
      description:
        "A managed list type summary (ManagedListTypeSummary object) contains summary information for a managed list",
      subcommands: [
        {
          name: "list-managed-list-types",
          description:
            "Returns all managed list types (listType parameter) that Cloud Guard supports",
          options: [
            optCompartmentId,
            optLifecycleState,
            optLimit,
            optPage,
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
      name: "target-responder-recipe",
      description:
        "A TargetResponderRecipe resource contains a specific instance of one of the supported detector types",
      subcommands: [
        {
          name: "create",
          description: "Attaches a responder recipe to a target",
          options: [
            optTargetId,
            {
              name: "--responder-recipe-id",
              description: "Unique identifier for existing responder recipe",
              args: { name: "responder-recipe-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Detaches a target responder recipe (TargetResponderRecipe resource) identified by targetResponderRecipeId",
          options: [
            optTargetId,
            optTargetResponderRecipeId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns a target responder recipe (TargetResponderRecipe) identified by targetResponderRecipeId for a target",
          options: [optTargetId, optTargetResponderRecipeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of summary information for all responder recipes (TargetResponderRecipeCollection resource",
          options: [
            optTargetId,
            optCompartmentId,
            optDisplayName,
            optLifecycleState,
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
            "Updates the target responder recipe (TargetResponderRecipe resource) identified by targetResponderRecipeId",
          options: [
            optTargetId,
            optTargetResponderRecipeId,
            {
              name: "--responder-rules",
              description:
                "List of responder rules to be updated in a target responder recipe",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tactic-summary",
      description: "Summary information for a tactic",
      subcommands: [
        {
          name: "list-tactics",
          description:
            "Returns a list of TacticSummary resources for a compartment, identified by compartmentId",
          options: [
            optCompartmentId,
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-profile",
      description: "Resource profile details",
      subcommands: [
        {
          name: "get",
          description:
            "Returns details for a resource profile, identified by resourceProfileId",
          options: [optResourceProfileId, optFromJson],
        },
      ],
    },
    {
      name: "saved-query",
      description: "Details of a saved query",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the SavedQuery resource into a different compartment",
          options: [
            optSavedQueryId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the SavedQuery is to be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a SavedQuery resource",
          options: [
            {
              name: "--display-name",
              description: "Display name of the saved query",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment OCID of the saved query",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--query-parameterconflict",
              description: "The adhoc query expression that is run",
              args: { name: "query-parameterconflict" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the saved query",
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
            "Deletes a SavedQuery resource identified by savedQueryId",
          options: [
            optSavedQueryId,
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
            "Returns a SavedQuery resource identified by savedQueryId",
          options: [optSavedQueryId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of saved queries run in a tenancy",
          options: [
            optCompartmentId,
            optDisplayName,
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
          name: "update",
          description: "Updates a saved query identified by savedQueryId",
          options: [
            optSavedQueryId,
            {
              name: "--display-name",
              description: "Display name of the saved query",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the saved query",
              args: { name: "description" },
            },
            {
              name: "--query-parameterconflict",
              description: "The saved query expression",
              args: { name: "query-parameterconflict" },
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
      name: "detector-rule",
      description: "Information for a detector rule (DetectorRule object)",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a detector rule (DetectorRule resource) identified by detectorRuleId",
          options: [optDetectorId, optDetectorRuleId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of detector rules for the DetectorRecipe resource identified by detectorId",
          options: [
            optDetectorId,
            optCompartmentId,
            optDisplayName,
            optLimit,
            optLifecycleState,
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
      name: "risk-score-aggregation",
      description: "Provides the dimensions and their corresponding risk score",
      subcommands: [
        {
          name: "request-risk-scores",
          description:
            "Returns a page of RiskScoreAggregation resources for a compartment, identified by compartmentId",
          options: [optCompartmentId, optLimit, optPage, optFromJson],
        },
        {
          name: "request-summarized-risk-scores",
          description: "DEPRECATED",
          options: [optCompartmentId, optLimit, optPage, optFromJson],
        },
      ],
    },
  ],
};

export default completionSpec;
