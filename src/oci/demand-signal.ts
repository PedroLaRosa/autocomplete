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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
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
const optDescription: Fig.Option = {
  name: "--description",
  description: "Optional description for the alarm",
  args: { name: "description" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The current lifecycle state of the resource",
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
};
const optSubscribers: Fig.Option = {
  name: "--subscribers",
  description: "List of topic OCIDs for notifications",
  args: { name: "json" },
};
const optThresholdType: Fig.Option = {
  name: "--threshold-type",
  description: "Units in which threshold is being stored",
  args: { suggestions: ["PERCENTAGE", "UNITS"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment OCID in which the alarm is created",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Human-readable name for the alarm",
  args: { name: "display-name" },
  isRequired: true,
};
const optFrequency: Fig.Option = {
  name: "--frequency",
  description: "Frequency at which notifications should be sent",
  args: { name: "frequency" },
  isRequired: true,
};
const optIsActive: Fig.Option = {
  name: "--is-active",
  description: "Alarm active status",
  args: { name: "boolean", suggestions: ["true", "false"] },
  isRequired: true,
};
const optOccDemandSignalId: Fig.Option = {
  name: "--occ-demand-signal-id",
  description: "The OCID of the OccDemandSignal",
  args: { name: "occ-demand-signal-id" },
  isRequired: true,
};
const optThreshold: Fig.Option = {
  name: "--threshold",
  description: "Threshold at which alarm must be triggered",
  args: { name: "integer" },
  isRequired: true,
};
const optResourceConfigurationUsageType: Fig.Option = {
  name: "--resource-configuration-usage-type",
  description: "The type of usage for the resource",
  args: { name: "resource-configuration-usage-type" },
  isRequired: true,
};
const optOccMetricAlarmId: Fig.Option = {
  name: "--occ-metric-alarm-id",
  description: "The OCID of the OccMetricAlarm",
  args: { name: "occ-metric-alarm-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "demand-signal",
  description: "OCI Control Center Demand Signal",
  subcommands: [
    {
      name: "occ-demand-signal",
      description:
        "Use the OCI Control Center Demand Signal CLI to manage Demand Signals",
      subcommands: [
        {
          name: "occ-demand-signal-collection",
          description: "Results of a occDemandSignal search",
          subcommands: [
            {
              name: "list-occ-demand-signals",
              description: "Gets a list of OccDemandSignals",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment in which to list resources",
                  args: { name: "compartment-id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources that match the given lifecycle state",
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
                  name: "--display-name",
                  description:
                    "A filter to return only resources that match the given display name exactly",
                  args: { name: "display-name" },
                },
                {
                  name: "--id",
                  description: "The OCID of the OccDemandSignal",
                  args: { name: "id" },
                },
                {
                  name: "--limit",
                  description: "For list pagination",
                  args: { name: "integer" },
                },
                {
                  name: "--page",
                  description: "For list pagination",
                  args: { name: "page" },
                },
                {
                  name: "--sort-order",
                  description:
                    "The sort order to use, either ascending (ASC) or descending (DESC)",
                  args: { suggestions: ["ASC", "DESC"] },
                },
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated", "displayName"] },
                },
                { name: "--all", description: "Fetches all pages of results" },
                {
                  name: "--page-size",
                  description:
                    "When fetching results, the number of results to fetch per call",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a OccDemandSignal into a different compartment within the same tenancy",
          options: [
            optOccDemandSignalId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the OccDemandSignal to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a OccDemandSignal",
          options: [
            {
              name: "--occ-demand-signals",
              description: "The OccDemandSignal data",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-active",
              description: "Indicator of whether to share the data with Oracle",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the OccDemandSignal in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
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
          description: "Deletes a OccDemandSignal",
          options: [
            optOccDemandSignalId,
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
          description: "Gets information about a OccDemandSignal",
          options: [optOccDemandSignalId, optFromJson],
        },
        {
          name: "patch",
          description: "Updates the data of an OccDemandSignal",
          options: [
            optOccDemandSignalId,
            {
              name: "--items",
              description: "List of patch instructions",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a OccDemandSignal",
          options: [
            optOccDemandSignalId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--is-active",
              description: "Indicator of whether to share the data with Oracle",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
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
      name: "occ-metric-alarm",
      description:
        "Use the OCI Control Center Demand Signal CLI to manage Demand Signals",
      subcommands: [
        {
          name: "occ-metric-alarm-collection",
          description: "Results of an OccMetricAlarm list operation",
          subcommands: [
            {
              name: "list-occ-metric-alarms",
              description: "Gets a list of OccMetricAlarms",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment in which to list resources",
                  args: { name: "compartment-id" },
                },
                {
                  name: "--display-name",
                  description:
                    "A filter to return only resources that match the given display name exactly",
                  args: { name: "display-name" },
                },
                {
                  name: "--is-active",
                  description: "Filter to list only active or inactive alarms",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--limit",
                  description: "For list pagination",
                  args: { name: "integer" },
                },
                {
                  name: "--page",
                  description: "For list pagination",
                  args: { name: "page" },
                },
                {
                  name: "--sort-order",
                  description:
                    "The sort order to use, either ascending (ASC) or descending (DESC)",
                  args: { suggestions: ["ASC", "DESC"] },
                },
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated", "displayName"] },
                },
                { name: "--all", description: "Fetches all pages of results" },
                {
                  name: "--page-size",
                  description:
                    "When fetching results, the number of results to fetch per call",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "create",
          description:
            "Creates a new OccMetricAlarm resource in the specified compartment with the provided configuration details",
          options: [
            optDisplayName,
            optCompartmentId,
            optIsActive,
            optFrequency,
            optThreshold,
            {
              name: "--resource-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optLifecycleState,
            optSubscribers,
            optThresholdType,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-occ-metric-alarm-exadata-resource-configuration",
          description:
            "Creates a new OccMetricAlarm resource in the specified compartment with the provided configuration details",
          options: [
            optDisplayName,
            optCompartmentId,
            optIsActive,
            optFrequency,
            optThreshold,
            {
              name: "--resource-configuration-node-type",
              description: "The type of node in the Exadata system",
              args: { name: "resource-configuration-node-type" },
              isRequired: true,
            },
            optResourceConfigurationUsageType,
            optDescription,
            optLifecycleState,
            optSubscribers,
            optThresholdType,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--resource-configuration-hw-generation",
              description: "The hardware generation of the Exadata system",
              args: { name: "resource-configuration-hw-generation" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-occ-metric-alarm-network-resource-configuration",
          description:
            "Creates a new OccMetricAlarm resource in the specified compartment with the provided configuration details",
          options: [
            optDisplayName,
            optCompartmentId,
            optIsActive,
            optFrequency,
            optThreshold,
            optResourceConfigurationUsageType,
            {
              name: "--resource-configuration-provider",
              description: "The provider of the network service",
              args: { name: "resource-configuration-provider" },
              isRequired: true,
            },
            optDescription,
            optLifecycleState,
            optSubscribers,
            optThresholdType,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--resource-configuration-link-role",
              description: "The role of the link in the network",
              args: { name: "resource-configuration-link-role" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-occ-metric-alarm-storage-resource-configuration",
          description:
            "Creates a new OccMetricAlarm resource in the specified compartment with the provided configuration details",
          options: [
            optDisplayName,
            optCompartmentId,
            optIsActive,
            optFrequency,
            optThreshold,
            {
              name: "--resource-configuration-storage-type",
              description: "The type of storage resource",
              args: { name: "resource-configuration-storage-type" },
              isRequired: true,
            },
            optResourceConfigurationUsageType,
            optDescription,
            optLifecycleState,
            optSubscribers,
            optThresholdType,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-occ-metric-alarm-compute-resource-configuration",
          description:
            "Creates a new OccMetricAlarm resource in the specified compartment with the provided configuration details",
          options: [
            optDisplayName,
            optCompartmentId,
            optIsActive,
            optFrequency,
            optThreshold,
            {
              name: "--resource-configuration-shape",
              description: "The shape of the compute instance",
              args: { name: "resource-configuration-shape" },
              isRequired: true,
            },
            optResourceConfigurationUsageType,
            optDescription,
            optLifecycleState,
            optSubscribers,
            optThresholdType,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--resource-configuration-compute-hw-generation",
              description: "The hardware generation of the compute resource",
              args: { name: "resource-configuration-compute-hw-generation" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified OccMetricAlarm resource",
          options: [
            optOccMetricAlarmId,
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
          description:
            "Retrieves the specified OccMetricAlarm resource based on its identifier",
          options: [optOccMetricAlarmId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates an existing OccMetricAlarm resource with new or modified configuration details",
          options: [
            optOccMetricAlarmId,
            {
              name: "--display-name",
              description: "Human-readable name for the alarm",
              args: { name: "display-name" },
            },
            optDescription,
            optLifecycleState,
            {
              name: "--is-active",
              description: "Alarm active status",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSubscribers,
            {
              name: "--frequency",
              description: "Frequency at which notifications should be sent",
              args: { name: "frequency" },
            },
            {
              name: "--threshold",
              description: "Threshold at which alarm must be triggered",
              args: { name: "integer" },
            },
            optThresholdType,
            optFreeformTags,
            optDefinedTags,
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
  ],
};

export default completionSpec;
