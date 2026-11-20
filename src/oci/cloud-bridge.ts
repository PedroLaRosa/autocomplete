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
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "The defined tags associated with this resource, if any",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "The freeform tags associated with this resource, if any",
  args: { name: "json" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "A token representing the position at which to start retrieving results",
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
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
      "WAITING",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optAssetId: Fig.Option = {
  name: "--asset-id",
  description: "Unique asset identifier",
  args: { name: "asset-id" },
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
  description: "Perform update without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "timeUpdated", "displayName"] },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optAgentId: Fig.Option = {
  name: "--agent-id",
  description: "Unique Agent identifier path parameter",
  args: { name: "agent-id" },
  isRequired: true,
};
const optAssetSourceId: Fig.Option = {
  name: "--asset-source-id",
  description: "The OCID of the asset source",
  args: { name: "asset-source-id" },
  isRequired: true,
};
const optEnvironmentId: Fig.Option = {
  name: "--environment-id",
  description: "Unique environment identifier",
  args: { name: "environment-id" },
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
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optInventoryId: Fig.Option = {
  name: "--inventory-id",
  description: "Inventory OCID",
  args: { name: "inventory-id" },
  isRequired: true,
};
const optAgentDependencyId: Fig.Option = {
  name: "--agent-dependency-id",
  description: "A unique AgentDependency identifier",
  args: { name: "agent-dependency-id" },
  isRequired: true,
};
const optAssetClassName: Fig.Option = {
  name: "--asset-class-name",
  description: "The name of the asset class",
  args: { name: "asset-class-name" },
};
const optAssetClassVersion: Fig.Option = {
  name: "--asset-class-version",
  description: "The version of the asset class",
  args: { name: "asset-class-version" },
};
const optDiscoveryScheduleId: Fig.Option = {
  name: "--discovery-schedule-id",
  description: "The OCID of the discovery schedule",
  args: { name: "discovery-schedule-id" },
  isRequired: true,
};
const optEnvironmentType: Fig.Option = {
  name: "--environment-type",
  description:
    "Specifies if this is the Source or Destination point for migration",
  args: { suggestions: ["SOURCE", "DESTINATION"] },
};
const optSystemTags: Fig.Option = {
  name: "--system-tags",
  description: "The system tags associated with this resource, if any",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment identifier",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optEnvironmentId2: Fig.Option = {
  name: "--environment-id",
  description:
    "A filter to return only resources that match the given environment ID",
  args: { name: "environment-id" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "INACTIVE", "DELETED", "FAILED"],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "cloud-bridge",
  description: "Oracle Cloud Bridge",
  subcommands: [
    {
      name: "common",
      description: "CLI for Oracle Cloud Bridge service",
      subcommands: [
        {
          name: "work-request-error",
          description: "An error encountered while executing a work request",
          subcommands: [
            {
              name: "list",
              description:
                "Returns a (paginated) list of errors for the work request with the given ID",
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
          name: "work-request-log-entry",
          description: "A log message from the execution of a work request",
          subcommands: [
            {
              name: "list",
              description:
                "Returns a (paginated) list of logs for the work request with the given ID",
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
          name: "work-request",
          description: "A description of work request status",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels the work request with the given ID",
              options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
            },
            {
              name: "get",
              description: "Gets details of the work request with the given ID",
              options: [optWorkRequestId, optFromJson],
            },
            {
              name: "list",
              description: "Lists the work requests in a compartment",
              options: [
                optCompartmentId,
                {
                  name: "--work-request-id",
                  description: "The ID of the asynchronous work request",
                  args: { name: "work-request-id" },
                },
                {
                  name: "--status",
                  description:
                    "A filter to return only resources for which the lifecycleState matches the given OperationStatus",
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
                optSortBy2,
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
      name: "discovery",
      description: "CLI for Oracle Cloud Bridge service",
      subcommands: [
        {
          name: "asset-source",
          description: "Asset source",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a resource into a different compartment",
              options: [
                optAssetSourceId,
                optCompartmentId2,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes the asset source by ID",
              options: [
                optAssetSourceId,
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
              description: "Gets the asset source by ID",
              options: [optAssetSourceId, optFromJson],
            },
            {
              name: "list-asset-source-connections",
              description:
                "Gets known connections to the asset source by the asset source ID",
              options: [
                optAssetSourceId,
                optLimit,
                optPage,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Returns a list of asset sources",
              options: [
                optCompartmentId,
                {
                  name: "--asset-source-id",
                  description: "The OCID of the asset source",
                  args: { name: "asset-source-id" },
                },
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated", "displayName"] },
                },
                {
                  name: "--lifecycle-state",
                  description: "The current state of the asset source",
                  args: {
                    suggestions: [
                      "CREATING",
                      "ACTIVE",
                      "DELETING",
                      "DELETED",
                      "FAILED",
                      "UPDATING",
                      "NEEDS_ATTENTION",
                    ],
                  },
                },
                optSortOrder,
                optDisplayName,
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
                "Initiates the process of asset metadata synchronization with the related asset source",
              options: [
                optAssetSourceId,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates an asset source",
              options: [
                {
                  name: "--type",
                  description: "Asset source type",
                  args: { suggestions: ["VMWARE", "AWS", "OLVM"] },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment for the resource",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--environment-id",
                  description: "The OCID of the environment",
                  args: { name: "environment-id" },
                  isRequired: true,
                },
                {
                  name: "--inventory-id",
                  description:
                    "The OCID of the inventory that will contain created assets",
                  args: { name: "inventory-id" },
                  isRequired: true,
                },
                {
                  name: "--assets-compartment-id",
                  description:
                    "The OCID of the compartment that is going to be used to create assets",
                  args: { name: "assets-compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "A user-friendly name for the asset source",
                  args: { name: "display-name" },
                },
                {
                  name: "--discovery-schedule-id",
                  description:
                    "The OCID of the discovery schedule that is going to be attached to the created asset",
                  args: { name: "discovery-schedule-id" },
                },
                optFreeformTags,
                optDefinedTags,
                optSystemTags,
                optEnvironmentType,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--vcenter-endpoint",
                  description:
                    "Endpoint for VMware asset discovery and replication in the form of https://<host>:<port>/sdk",
                  args: { name: "vcenter-endpoint" },
                },
                { name: "--discovery-credentials", args: { name: "json" } },
                { name: "--replication-credentials", args: { name: "json" } },
                {
                  name: "--are-historical-metrics-collected",
                  description:
                    "Flag indicating whether historical metrics are collected for assets, originating from this asset source",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--are-realtime-metrics-collected",
                  description:
                    "Flag indicating whether real-time metrics are collected for assets, originating from this asset source",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-cost-information-collected",
                  description:
                    "Flag indicating whether cost data collection is enabled for assets, originating from this asset source",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--aws-region",
                  description:
                    "AWS region information, from where the resources are discovered",
                  args: { name: "aws-region" },
                },
                {
                  name: "--aws-account-key",
                  description:
                    "The key of customer's aws account to be discovered/migrated",
                  args: { name: "aws-account-key" },
                },
                {
                  name: "--olvm-endpoint",
                  description:
                    "Endpoint for OLVM asset discovery and replication in the form of https://<host>:<port>",
                  args: { name: "olvm-endpoint" },
                },
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the asset source",
              options: [
                optAssetSourceId,
                {
                  name: "--type",
                  description: "Source type",
                  args: { suggestions: ["VMWARE", "AWS", "OLVM"] },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "A user-friendly name for the asset source",
                  args: { name: "display-name" },
                },
                {
                  name: "--assets-compartment-id",
                  description:
                    "The OCID of the compartment that is going to be used to create assets",
                  args: { name: "assets-compartment-id" },
                },
                {
                  name: "--discovery-schedule-id",
                  description:
                    "The OCID of the discovery schedule that is going to be assigned to an asset source",
                  args: { name: "discovery-schedule-id" },
                },
                optFreeformTags,
                optDefinedTags,
                optSystemTags,
                optEnvironmentType,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--vcenter-endpoint",
                  description:
                    "Endpoint for VMware asset discovery and replication in the form of https://<host>:<port>/sdk",
                  args: { name: "vcenter-endpoint" },
                },
                { name: "--discovery-credentials", args: { name: "json" } },
                { name: "--replication-credentials", args: { name: "json" } },
                {
                  name: "--are-historical-metrics-collected",
                  description:
                    "Flag indicating whether historical metrics are collected for assets, originating from this asset source",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--are-realtime-metrics-collected",
                  description:
                    "Flag indicating whether real-time metrics are collected for assets, originating from this asset source",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-cost-information-collected",
                  description:
                    "Flag indicating whether cost data collection is enabled for assets, originating from this asset source",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
                {
                  name: "--olvm-endpoint",
                  description:
                    "Endpoint for OLVM asset discovery and replication in the form of https://<host>:<port>",
                  args: { name: "olvm-endpoint" },
                },
              ],
            },
          ],
        },
        {
          name: "discovery-schedule",
          description: "Discovery schedule",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves the specified discovery schedule into a different compartment",
              options: [
                optDiscoveryScheduleId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment into which the discovery schedule should be moved",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates the discovery schedule",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment in which the discovery schedule is created",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--execution-recurrences",
                  description:
                    "Recurrence specification for the discovery schedule execution",
                  args: { name: "execution-recurrences" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description:
                    "A user-friendly name for the discovery schedule",
                  args: { name: "display-name" },
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
              description: "Deletes the specified discovery schedule",
              options: [
                optDiscoveryScheduleId,
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
              description:
                "Reads information about the specified discovery schedule",
              options: [optDiscoveryScheduleId, optFromJson],
            },
            {
              name: "list",
              description: "Lists discovery schedules",
              options: [
                optCompartmentId,
                {
                  name: "--discovery-schedule-id",
                  description: "The OCID of the discovery schedule",
                  args: { name: "discovery-schedule-id" },
                },
                {
                  name: "--lifecycle-state",
                  description: "The current state of the discovery schedule",
                  args: { suggestions: ["ACTIVE", "DELETED"] },
                },
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated", "displayName"] },
                },
                optSortOrder,
                optDisplayName,
                optLimit,
                optPage,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the specified discovery schedule",
              options: [
                optDiscoveryScheduleId,
                {
                  name: "--display-name",
                  description:
                    "A user-friendly name for the discovery schedule",
                  args: { name: "display-name" },
                },
                {
                  name: "--execution-recurrences",
                  description:
                    "Recurrence specification for the discovery schedule execution",
                  args: { name: "execution-recurrences" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "supported-cloud-regions",
          description: "Summary of the supported cloud region",
          subcommands: [
            {
              name: "list",
              description:
                "Returns a list of supported cloud regions related to AssetSourceTypeParam",
              options: [
                {
                  name: "--asset-source-type",
                  description: "The asset source type",
                  args: { suggestions: ["VMWARE", "AWS", "OLVM"] },
                },
                {
                  name: "--name-contains",
                  description:
                    "A filter to return only supported cloud regions which name contains given nameContains as sub-string",
                  args: { name: "name-contains" },
                },
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["name"] },
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
      ],
    },
    {
      name: "inventory",
      description: "CLI for Oracle Cloud Bridge service",
      subcommands: [
        {
          name: "asset-aggregation",
          description:
            "The result of an analytics aggregation on a set of assets",
          subcommands: [
            {
              name: "analyze-assets",
              description: "Returns an aggregation of assets",
              options: [
                optCompartmentId,
                {
                  name: "--aggregation-properties",
                  description: "An array of properties on which to aggregate",
                  args: { name: "aggregation-properties" },
                  isRequired: true,
                  isRepeatable: true,
                },
                optLimit,
                optPage,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only assets whose lifecycleState matches the given lifecycleState",
                  args: { suggestions: ["ACTIVE", "DELETED"] },
                },
                {
                  name: "--source-key",
                  description: "Source key from where the assets originate",
                  args: { name: "source-key" },
                },
                {
                  name: "--external-asset-key",
                  description: "External asset key",
                  args: { name: "external-asset-key" },
                },
                {
                  name: "--asset-type",
                  description: "The type of asset",
                  args: {
                    suggestions: [
                      "VMWARE_VM",
                      "VM",
                      "INVENTORY_ASSET",
                      "AWS_EC2",
                      "AWS_EBS",
                    ],
                  },
                },
                optSortOrder,
                {
                  name: "--group-by",
                  description:
                    "The dimensions in which to group the aggregations",
                  args: { name: "group-by" },
                  isRepeatable: true,
                },
                {
                  name: "--inventory-id",
                  description: "Unique Inventory identifier",
                  args: { name: "inventory-id" },
                },
                optAssetClassName,
                optAssetClassVersion,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "asset",
          description: "Description of an asset",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves an asset resource from one compartment to another",
              options: [optAssetId, optCompartmentId2, optIfMatch, optFromJson],
            },
            {
              name: "delete",
              description: "Deletes an asset resource by identifier",
              options: [
                optAssetId,
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
              description: "Gets an asset by identifier",
              options: [optAssetId, optFromJson],
            },
            {
              name: "list",
              description: "Returns a list of assets",
              options: [
                optCompartmentId,
                optLimit,
                optPage,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only assets whose lifecycleState matches the given lifecycleState",
                  args: { suggestions: ["ACTIVE", "DELETED"] },
                },
                {
                  name: "--source-key",
                  description: "Source key from where the assets originate",
                  args: { name: "source-key" },
                },
                {
                  name: "--external-asset-key",
                  description: "External asset key",
                  args: { name: "external-asset-key" },
                },
                {
                  name: "--asset-type",
                  description: "The type of asset",
                  args: {
                    suggestions: [
                      "VMWARE_VM",
                      "VM",
                      "INVENTORY_ASSET",
                      "AWS_EC2",
                      "AWS_EBS",
                    ],
                  },
                },
                {
                  name: "--asset-id",
                  description: "Unique asset identifier",
                  args: { name: "asset-id" },
                },
                optDisplayName,
                optSortOrder,
                optSortBy,
                {
                  name: "--inventory-id",
                  description: "Unique Inventory identifier",
                  args: { name: "inventory-id" },
                },
                optAssetClassName,
                optAssetClassVersion,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "change-tags",
              description: "Change an asset's tag",
              options: [
                optAssetId,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates an asset",
              options: [
                {
                  name: "--inventory-id",
                  description: "Inventory ID to which an asset belongs",
                  args: { name: "inventory-id" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that the asset belongs to",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--source-key",
                  description: "The source key to which the asset belongs",
                  args: { name: "source-key" },
                  isRequired: true,
                },
                {
                  name: "--external-asset-key",
                  description:
                    "The key of the asset from the external environment",
                  args: { name: "external-asset-key" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Asset display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--asset-source-ids",
                  description: "List of asset source OCID",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--asset-type",
                  description: "The type of asset",
                  args: {
                    suggestions: [
                      "VMWARE_VM",
                      "VM",
                      "AWS_EC2",
                      "AWS_EBS",
                      "INVENTORY_ASSET",
                    ],
                  },
                  isRequired: true,
                },
                optEnvironmentType,
                optAssetClassName,
                optAssetClassVersion,
                {
                  name: "--asset-details",
                  description: "The details of the asset",
                  args: { name: "json" },
                },
                { name: "--compute", args: { name: "json" } },
                { name: "--vm", args: { name: "json" } },
                { name: "--vmware-vm", args: { name: "json" } },
                { name: "--vmware-v-center", args: { name: "json" } },
                { name: "--aws-ebs", args: { name: "json" } },
                { name: "--aws-ec2", args: { name: "json" } },
                { name: "--aws-ec2-cost", args: { name: "json" } },
                { name: "--attached-ebs-volumes-cost", args: { name: "json" } },
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the asset",
              options: [
                optAssetId,
                {
                  name: "--display-name",
                  description: "Asset display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--asset-source-ids",
                  description: "List of asset source OCID",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--asset-type",
                  description: "The type of asset",
                  args: {
                    suggestions: [
                      "VMWARE_VM",
                      "VM",
                      "AWS_EC2",
                      "AWS_EBS",
                      "INVENTORY_ASSET",
                    ],
                  },
                  isRequired: true,
                },
                optEnvironmentType,
                optAssetClassName,
                optAssetClassVersion,
                { name: "--asset-details", args: { name: "json" } },
                { name: "--compute", args: { name: "json" } },
                { name: "--vm", args: { name: "json" } },
                { name: "--vmware-vm", args: { name: "json" } },
                { name: "--vmware-v-center", args: { name: "json" } },
                { name: "--aws-ebs", args: { name: "json" } },
                { name: "--aws-ec2", args: { name: "json" } },
                { name: "--aws-ec2-cost", args: { name: "json" } },
                { name: "--attached-ebs-volumes-cost", args: { name: "json" } },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "inventory",
          description: "Description of inventory",
          subcommands: [
            {
              name: "create",
              description: "Creates an inventory",
              options: [
                {
                  name: "--display-name",
                  description: "Inventory displayName",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description: "The OCID of the tenantId",
                  args: { name: "compartment-id" },
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
              description: "Deletes an inventory resource by identifier",
              options: [
                optInventoryId,
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
              description: "Gets an inventory by identifier",
              options: [
                optInventoryId,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "import",
              description: "Import resources in inventory",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartmentId that resources import",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optInventoryId,
                {
                  name: "--resource-type",
                  description: "Import inventory resource type",
                  args: { suggestions: ["ASSET"] },
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
              name: "list",
              description: "Returns a list of inventories",
              options: [
                optCompartmentId,
                optSortOrder,
                optSortBy,
                optLimit,
                optPage,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return inventory if the lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "DELETED",
                      "DELETING",
                      "CREATING",
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
              name: "update",
              description: "Updates an inventory",
              options: [
                optInventoryId,
                {
                  name: "--display-name",
                  description: "Inventory displayName",
                  args: { name: "display-name" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "DELETED",
                      "DELETING",
                      "CREATING",
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
              name: "import-via-assets",
              description: "Import resources in inventory",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartmentId that resources import",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--data",
                  description: "The file body to be sent in the request",
                  args: { name: "data" },
                  isRequired: true,
                },
                {
                  name: "--asset-type",
                  description: "The type of asset",
                  args: {
                    suggestions: [
                      "VMWARE_VM",
                      "VM",
                      "INVENTORY_ASSET",
                      "AWS_EC2",
                      "AWS_EBS",
                    ],
                  },
                  isRequired: true,
                },
                optInventoryId,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "historical-metric",
          description: "Metric details",
          subcommands: [
            {
              name: "list",
              description: "List asset historical metrics",
              options: [
                optAssetId,
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
              name: "submit",
              description:
                "Creates or updates all metrics related to the asset",
              options: [
                {
                  name: "--historical-metrics",
                  description: "List of asset historical metrics",
                  args: { name: "json" },
                  isRequired: true,
                },
                optAssetId,
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ocb-agent-svc",
      description: "CLI for Oracle Cloud Bridge service",
      subcommands: [
        {
          name: "agent",
          description: "Description of Agent",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves an Agent resource from one compartment identifier to another",
              options: [
                optAgentId,
                optCompartmentId2,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates an Agent",
              options: [
                {
                  name: "--display-name",
                  description: "Agent identifier",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--agent-type",
                  description: "Agent identifier",
                  args: { name: "agent-type" },
                  isRequired: true,
                },
                {
                  name: "--agent-version",
                  description: "Agent identifier",
                  args: { name: "agent-version" },
                  isRequired: true,
                },
                optCompartmentId3,
                {
                  name: "--environment-id",
                  description: "Environment identifier",
                  args: { name: "environment-id" },
                  isRequired: true,
                },
                {
                  name: "--os-version",
                  description: "OS version",
                  args: { name: "os-version" },
                  isRequired: true,
                },
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
                "Deletes an Agent resource identified by an identifier",
              options: [
                optAgentId,
                optIfMatch,
                optForce,
                optWaitForState4,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets an Agent by identifier",
              options: [optAgentId, optFromJson],
            },
            {
              name: "update",
              description: "Updates the Agent",
              options: [
                optAgentId,
                {
                  name: "--display-name",
                  description: "Agent identifier",
                  args: { name: "display-name" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState4,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Returns a list of Agents",
              options: [
                optCompartmentId,
                optEnvironmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "CREATING",
                      "ACTIVE",
                      "INACTIVE",
                      "DELETED",
                      "FAILED",
                    ],
                  },
                },
                optDisplayName,
                {
                  name: "--agent-id",
                  description:
                    "A filter to return only resources that match the given Agent ID",
                  args: { name: "agent-id" },
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
          name: "environment",
          description: "Description of the source environment",
          subcommands: [
            {
              name: "add",
              description: "Add a dependency to the environment",
              options: [
                optEnvironmentId,
                {
                  name: "--agent-dependency-id",
                  description:
                    "The OCID of the agentDependency, which is added to the source environment",
                  args: { name: "agent-dependency-id" },
                  isRequired: true,
                },
                optIfMatch,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "change-compartment",
              description:
                "Moves a source environment resource from one compartment identifier to another",
              options: [
                optEnvironmentId,
                optCompartmentId2,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a source environment",
              options: [
                optCompartmentId3,
                {
                  name: "--display-name",
                  description: "Environment identifier",
                  args: { name: "display-name" },
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
                "Deletes a the source environment resource identified by an identifier",
              options: [
                optEnvironmentId,
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
              description: "Gets a source environment by identifier",
              options: [optEnvironmentId, optFromJson],
            },
            {
              name: "remove",
              description: "Adds a dependency to the source environment",
              options: [
                optEnvironmentId,
                {
                  name: "--agent-dependency-id",
                  description:
                    "The OCID of the agentDependency that should be removed from the source environment",
                  args: { name: "agent-dependency-id" },
                  isRequired: true,
                },
                optIfMatch,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the source environment",
              options: [
                optEnvironmentId,
                {
                  name: "--display-name",
                  description: "Environment identifier",
                  args: { name: "display-name" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Returns a list of source environments",
              options: [
                optCompartmentId,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources where their lifecycleState matches the given lifecycleState",
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
                optDisplayName,
                optEnvironmentId2,
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
          name: "agent-dependency",
          description:
            "Description of the AgentDependency, which is a sub-resource of the external environment",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a AgentDependency resource from one compartment identifier to another",
              options: [
                optAgentDependencyId,
                optCompartmentId2,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates an AgentDependency",
              options: [
                {
                  name: "--display-name",
                  description: "Display name of the Agent dependency",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--dependency-name",
                  description: "Name of the dependency type",
                  args: { name: "dependency-name" },
                  isRequired: true,
                },
                optCompartmentId3,
                {
                  name: "--namespace",
                  description:
                    "Object storage namespace associated with the customer's tenancy",
                  args: { name: "namespace" },
                  isRequired: true,
                },
                {
                  name: "--bucket",
                  description:
                    "Object storage bucket where the dependency is uploaded",
                  args: { name: "bucket" },
                  isRequired: true,
                },
                {
                  name: "--object-name",
                  description:
                    "Name of the dependency object uploaded by the customer",
                  args: { name: "object-name" },
                  isRequired: true,
                },
                {
                  name: "--dependency-version",
                  description: "Version of the Agent dependency",
                  args: { name: "dependency-version" },
                },
                {
                  name: "--description",
                  description: "Description about the Agent dependency",
                  args: { name: "description" },
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
              name: "delete",
              description:
                "Deletes the AgentDependency resource based on an identifier",
              options: [
                optAgentDependencyId,
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
              description: "Gets an AgentDependency by identifier",
              options: [optAgentDependencyId, optFromJson],
            },
            {
              name: "update",
              description: "Updates the AgentDependency",
              options: [
                optAgentDependencyId,
                {
                  name: "--display-name",
                  description: "Display name of the Agent dependency",
                  args: { name: "display-name" },
                },
                {
                  name: "--dependency-name",
                  description: "Name of the dependency type",
                  args: { name: "dependency-name" },
                },
                {
                  name: "--dependency-version",
                  description: "Version of the Agent dependency",
                  args: { name: "dependency-version" },
                },
                {
                  name: "--description",
                  description: "Description about the Agent dependency",
                  args: { name: "description" },
                },
                {
                  name: "--namespace",
                  description:
                    "Object storage namespace associated with the customer's tenancy",
                  args: { name: "namespace" },
                },
                {
                  name: "--bucket",
                  description:
                    "Object storage bucket where the dependency is uploaded",
                  args: { name: "bucket" },
                },
                {
                  name: "--object-name",
                  description:
                    "Name of the dependency object uploaded by the customer",
                  args: { name: "object-name" },
                },
                optFreeformTags,
                optDefinedTags,
                optSystemTags,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a list of AgentDependencies such as AgentDependencyCollection",
              options: [
                optCompartmentId,
                {
                  name: "--agent-id",
                  description:
                    "A filter to return only resources that match the given Agent ID",
                  args: { name: "agent-id" },
                },
                optEnvironmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources their lifecycleState matches the given lifecycleState",
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
                optDisplayName,
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
          name: "plugin",
          description: "Description of plugin",
          subcommands: [
            {
              name: "get",
              description: "Gets a plugin by identifier",
              options: [
                optAgentId,
                {
                  name: "--plugin-name",
                  description: "Unique plugin identifier path parameter",
                  args: { name: "plugin-name" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the plugin",
              options: [
                optAgentId,
                {
                  name: "--plugin-name",
                  description: "Unique plugin identifier path parameter",
                  args: { name: "plugin-name" },
                  isRequired: true,
                },
                {
                  name: "--desired-state",
                  description:
                    "State to which the customer wants the plugin to move to",
                  args: { name: "desired-state" },
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
          name: "appliance-image",
          description: "Results of an ApplianceImage search",
          subcommands: [
            {
              name: "list-appliance-images",
              description: "Returns a list of Appliance Images",
              options: [
                optCompartmentId,
                optDisplayName,
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
      ],
    },
  ],
};

export default completionSpec;
