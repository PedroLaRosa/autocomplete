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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optCostAnomalyMonitorId: Fig.Option = {
  name: "--cost-anomaly-monitor-id",
  description: "The unique costAnomalyMonitor OCID",
  args: { name: "cost-anomaly-monitor-id" },
  isRequired: true,
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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "Unique, non-changeable resource name",
  args: { name: "name" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
  isRepeatable: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description: "The unique costAlertSubscription OCID",
  args: { name: "subscription-id" },
  isRequired: true,
};
const optTargetTenantId: Fig.Option = {
  name: "--target-tenant-id",
  description: "The target tenantId ocid filter param",
  args: { name: "target-tenant-id" },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "costad",
  description: "CostAd",
  subcommands: [
    {
      name: "cost-anomaly-event",
      description: "A CostAnomalyEvent",
      subcommands: [
        {
          name: "get",
          description: "Gets a CostAnomalyEvent by the identifier",
          options: [
            {
              name: "--cost-anomaly-event-id",
              description: "The unique costAnomalyEventId OCID",
              args: { name: "cost-anomaly-event-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "anomaly-events-stats",
          description:
            "Gets a list of Cost Anomaly Events analytics summary - aggregated metrics for a given time period",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeAnomalyEventDate", "costAnomalyName", "id"],
              },
            },
            optName,
            {
              name: "--cost-anomaly-monitor-id",
              description: "The cost monitor ocid",
              args: { name: "cost-anomaly-monitor-id" },
            },
            optTargetTenantId,
            {
              name: "--start-date",
              description: "StartDate for anomaly event date",
              args: { name: "datetime" },
            },
            {
              name: "--end-date",
              description: "EndDate for anomaly event date",
              args: { name: "datetime" },
            },
            {
              name: "--ad-event-region",
              description: "Region of the anomaly event",
              args: { name: "ad-event-region" },
              isRepeatable: true,
            },
            {
              name: "--cost-impact",
              description: "Cost impact (absolute) of the anomaly event",
              args: { name: "cost-impact" },
            },
            {
              name: "--cost-impact-percentage",
              description: "Cost impact (percentage) of the anomaly event",
              args: { name: "cost-impact-percentage" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update a CostAnomalyEvent identified by the OCID",
          options: [
            {
              name: "--cost-anomaly-event-id",
              description: "The unique costAnomalyEventId OCID",
              args: { name: "cost-anomaly-event-id" },
              isRequired: true,
            },
            {
              name: "--feedback-response",
              description: "The feedback response for the cost anomaly event",
              args: { name: "feedback-response" },
            },
            optDefinedTags,
            optFreeformTags,
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
      name: "cost-alert-subscription-collection",
      description: "Results of a costAlertSubscription search",
      subcommands: [
        {
          name: "list-subs",
          description:
            "Gets a list of Cost Alert Subscription in a compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name", "id"] },
            },
            optName,
            {
              name: "--lifecycle-state",
              description: "The current state of the cost alert subscription",
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
      name: "cost-anomaly-monitor",
      description: "A CostAnomalyMonitor",
      subcommands: [
        {
          name: "create",
          description: "Creates a new costAnomaly Monitor",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the cost anomaly monitor",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--target-resource-filter",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the cost anomaly monitor",
              args: { name: "description" },
            },
            { name: "--cost-alert-subscription-map", args: { name: "json" } },
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
          description: "Deletes a specified CostAnomalyMonitor resource",
          options: [
            optCostAnomalyMonitorId,
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
          name: "disable",
          description: "Disables the cost anomaly monitor",
          options: [
            optCostAnomalyMonitorId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable",
          description: "Enables the cost anomaly monitor",
          options: [
            optCostAnomalyMonitorId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a CostAnomalyMonitor by the identifier",
          options: [optCostAnomalyMonitorId, optFromJson],
        },
        {
          name: "update",
          description: "Update a CostAnomalyMonitor identified by the OCID",
          options: [
            optCostAnomalyMonitorId,
            {
              name: "--description",
              description: "The description of the cost anomaly monitor",
              args: { name: "description" },
            },
            { name: "--cost-alert-subscription-map", args: { name: "json" } },
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
      name: "cost-alert-subscription",
      description: "A CostAlertSubscription",
      subcommands: [
        {
          name: "create",
          description: "Creates a new CostAlert Subscription",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the cost alert subscription",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--channels",
              description: "The notification channels string",
              args: { name: "channels" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the cost alert subscription",
              args: { name: "description" },
            },
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specified CostAlertSubscription resource",
          options: [
            optSubscriptionId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a CostAlertSubscription by the identifier",
          options: [optSubscriptionId, optFromJson],
        },
        {
          name: "update",
          description: "Update a CostAlertSubscription identified by the OCID",
          options: [
            optSubscriptionId,
            {
              name: "--description",
              description: "The description of the cost alert subscription",
              args: { name: "description" },
            },
            {
              name: "--channels",
              description: "The notification channels string",
              args: { name: "channels" },
            },
            optDefinedTags,
            optFreeformTags,
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
      name: "cost-anomaly-monitor-collection",
      description: "Results of a costAnomalyMonitor search",
      subcommands: [
        {
          name: "list-monitors",
          description: "Gets a list of Cost Anomaly Monitors in a compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name", "id"] },
            },
            {
              name: "--lifecycle-state",
              description: "The current state of the cost monitor",
              args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
            },
            optName,
            optTargetTenantId,
            {
              name: "--target-region",
              description: "Cost Anomaly Monitor target resource filter region",
              args: { name: "target-region" },
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
      name: "cost-anomaly-event-collection",
      description: "Results of a costAnomalyEvent search",
      subcommands: [
        {
          name: "list-events",
          description: "Gets a list of Cost Anomaly Event in a compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeAnomalyEventDate", "costAnomalyName", "id"],
              },
            },
            optName,
            {
              name: "--cost-anomaly-monitor-id",
              description: "The cost monitor ocid",
              args: { name: "cost-anomaly-monitor-id" },
            },
            optTargetTenantId,
            {
              name: "--start-date",
              description: "StartDate for anomaly event date",
              args: { name: "datetime" },
            },
            {
              name: "--end-date",
              description: "EndDate for anomaly event date",
              args: { name: "datetime" },
            },
            {
              name: "--ad-event-region",
              description: "Region of the anomaly event",
              args: { name: "ad-event-region" },
              isRepeatable: true,
            },
            {
              name: "--cost-impact",
              description: "Cost impact (absolute) of the anomaly event",
              args: { name: "cost-impact" },
            },
            {
              name: "--cost-impact-percentage",
              description: "Cost impact (percentage) of the anomaly event",
              args: { name: "cost-impact-percentage" },
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
