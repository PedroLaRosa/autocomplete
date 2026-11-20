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
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optId: Fig.Option = {
  name: "--id",
  description: "Unique Vb Instance identifier. required",
  args: { name: "id" },
  isRequired: true,
};
const optIdcsOpenId: Fig.Option = {
  name: "--idcs-open-id",
  description: "Encrypted IDCS Open ID token",
  args: { name: "idcs-open-id" },
};
const optAlternateCustomEndpoints: Fig.Option = {
  name: "--alternate-custom-endpoints",
  description:
    "A list of alternate custom endpoints to be used for the vb instance URL",
  args: { name: "json" },
};
const optCustomEndpoint: Fig.Option = {
  name: "--custom-endpoint",
  args: { name: "json" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Usage of predefined tag keys",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
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
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optConsumptionModel: Fig.Option = {
  name: "--consumption-model",
  description:
    "Optional parameter specifying which entitlement to use for billing purposes",
  args: { suggestions: ["UCM", "GOV", "VB4SAAS"] },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Vb Instance Identifier",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Vb Instance Identifier",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optIsVisualBuilderEnabled: Fig.Option = {
  name: "--is-visual-builder-enabled",
  description: "Enable Visual Builder",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsVisualBuilderEnabled2: Fig.Option = {
  name: "--is-visual-builder-enabled",
  description: "Visual Builder is enabled or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optNodeCount: Fig.Option = {
  name: "--node-count",
  description: "The number of Nodes",
  args: { name: "integer" },
  isRequired: true,
};
const optNodeCount2: Fig.Option = {
  name: "--node-count",
  description: "The number of Nodes",
  args: { name: "integer" },
};
const optVbInstanceId: Fig.Option = {
  name: "--vb-instance-id",
  description: "Unique Vb Instance identifier",
  args: { name: "vb-instance-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "visual-builder",
  description: "Visual Builder",
  subcommands: [
    {
      name: "vb-instance",
      description: "Description of Vb Instance",
      subcommands: [
        {
          name: "change-compartment",
          description: "Change the compartment for an vb instance",
          options: [
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Vb Instance",
          options: [
            optDisplayName,
            optCompartmentId,
            optNodeCount,
            optFreeformTags,
            optDefinedTags,
            optIdcsOpenId,
            optIsVisualBuilderEnabled2,
            optCustomEndpoint,
            optAlternateCustomEndpoints,
            optConsumptionModel,
            { name: "--network-endpoint-details", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-vb-instance-private-endpoint-details",
          description: "Creates a new Vb Instance",
          options: [
            optDisplayName,
            optCompartmentId,
            optNodeCount,
            {
              name: "--network-endpoint-details-subnet-id",
              description: "The subnet OCID for the private endpoint",
              args: { name: "network-endpoint-details-subnet-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIdcsOpenId,
            optIsVisualBuilderEnabled2,
            optCustomEndpoint,
            optAlternateCustomEndpoints,
            optConsumptionModel,
            {
              name: "--network-endpoint-details-network-security-group-ids",
              description:
                "Network Security Group OCIDs for the Private Endpoint",
              args: { name: "json" },
            },
            {
              name: "--network-endpoint-details-private-endpoint-ip",
              description: "The IP address to be assigned to Private Endpoint",
              args: { name: "network-endpoint-details-private-endpoint-ip" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-vb-instance-public-endpoint-details",
          description: "Creates a new Vb Instance",
          options: [
            optDisplayName,
            optCompartmentId,
            optNodeCount,
            optFreeformTags,
            optDefinedTags,
            optIdcsOpenId,
            optIsVisualBuilderEnabled2,
            optCustomEndpoint,
            optAlternateCustomEndpoints,
            optConsumptionModel,
            {
              name: "--network-endpoint-details-allowlisted-http-ips",
              description:
                'Source IP addresses or IP address ranges ingress rules. (ex: "168.122.59.5/32"',
              args: { name: "json" },
            },
            {
              name: "--network-endpoint-details-allowlisted-http-vcns",
              description:
                "Virtual Cloud Networks allowed to access this network endpoint",
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
          description: "Deletes an Vb Instance resource by identifier",
          options: [
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a VbInstance by identifier",
          options: [optId, optFromJson],
        },
        {
          name: "reconfigure-private-endpoint",
          description:
            "Reconfigures the Private Endpoint associated with the private visual builder instance",
          options: [
            optVbInstanceId,
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
            "Start an vb instance that was previously in an INACTIVE state",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description:
            "Stop an vb instance that was previously in an ACTIVE state",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Vb Instance",
          options: [
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optIdcsOpenId,
            optNodeCount2,
            optIsVisualBuilderEnabled,
            optCustomEndpoint,
            optAlternateCustomEndpoints,
            { name: "--network-endpoint-details", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "update-vb-instance-update-public-endpoint-details",
          description: "Updates the Vb Instance",
          options: [
            optVbInstanceId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optIdcsOpenId,
            optNodeCount2,
            optIsVisualBuilderEnabled,
            optCustomEndpoint,
            optAlternateCustomEndpoints,
            optIfMatch,
            {
              name: "--network-endpoint-details-allowlisted-http-ips",
              description:
                'Source IP addresses or IP address ranges ingress rules. (ex: "168.122.59.5/32"',
              args: { name: "json" },
            },
            {
              name: "--network-endpoint-details-allowlisted-http-vcns",
              description:
                "Virtual Cloud Networks allowed to access this network endpoint",
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
          name: "update-vb-instance-update-private-endpoint-details",
          description: "Updates the Vb Instance",
          options: [
            optVbInstanceId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optIdcsOpenId,
            optNodeCount2,
            optIsVisualBuilderEnabled,
            optCustomEndpoint,
            optAlternateCustomEndpoints,
            optIfMatch,
            {
              name: "--network-endpoint-details-subnet-id",
              description: "The subnet OCID for the private endpoint",
              args: { name: "network-endpoint-details-subnet-id" },
            },
            {
              name: "--network-endpoint-details-network-security-group-ids",
              description:
                "Network Security Group OCIDs for the Private Endpoint",
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
          name: "list",
          description: "Returns a list of Vb Instances",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description: "Life cycle state to query on",
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
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'asc' or 'desc'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
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
      description: "A description of work request status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            {
              name: "--id",
              description:
                "The Vb Instance identifier to use to filter results",
              args: { name: "id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application",
      description: "Result of listing VbInstance's applications",
      subcommands: [
        {
          name: "list",
          description: "Summarizes the applications for a vb instance",
          options: [optIdcsOpenId, optIfMatch, optId, optFromJson],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "Result of a WorkRequest Error request",
      subcommands: [
        {
          name: "list",
          description: "Get the errors of a work request",
          options: [
            optCompartmentId2,
            optWorkRequestId,
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
      name: "work-request-log-entry",
      description: "Result of a WorkRequest Log request",
      subcommands: [
        {
          name: "list",
          description: "Get the logs of a work request",
          options: [
            optCompartmentId2,
            optWorkRequestId,
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
