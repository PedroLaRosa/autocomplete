// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optBlockchainPlatformId: Fig.Option = {
  name: "--blockchain-platform-id",
  description: "Unique service identifier",
  args: { name: "blockchain-platform-id" },
  isRequired: true,
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "The page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optOcpuAllocationParam: Fig.Option = {
  name: "--ocpu-allocation-param",
  args: { name: "json" },
  isRequired: true,
};
const optOsnId: Fig.Option = {
  name: "--osn-id",
  description: "OSN identifier",
  args: { name: "osn-id" },
  isRequired: true,
};
const optPeerId: Fig.Option = {
  name: "--peer-id",
  description: "Peer identifier",
  args: { name: "peer-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const completionSpec: Fig.Spec = {
  name: "blockchain",
  description: "Blockchain Platform Control Plane",
  subcommands: [
    {
      name: "blockchain-platform",
      description: "Blockchain Platform Instance Description",
      subcommands: [
        {
          name: "change-compartment",
          description: "Change Blockchain Platform Compartment",
          options: [
            optBlockchainPlatformId,
            {
              name: "--compartment-id",
              description: "The OCID of the new compartment",
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
          description: "Creates a new Blockchain Platform",
          options: [
            {
              name: "--display-name",
              description: "Platform Instance Display name, can be renamed",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--platform-role",
              description: "Role of platform - founder or participant",
              args: { name: "platform-role" },
              isRequired: true,
            },
            {
              name: "--compute-shape",
              description:
                "Compute shape - STANDARD or ENTERPRISE_SMALL or ENTERPRISE_MEDIUM or ENTERPRISE_LARGE",
              args: { name: "compute-shape" },
              isRequired: true,
            },
            {
              name: "--idcs-access-token",
              description:
                "IDCS access token with Identity Domain Administrator role",
              args: { name: "idcs-access-token" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Platform Instance Description",
              args: { name: "description" },
            },
            {
              name: "--is-byol",
              description: "Bring your own license",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--platform-version",
              description: "Platform version",
              args: { name: "platform-version" },
            },
            {
              name: "--federated-user-id",
              description: "Identifier for a federated user",
              args: { name: "federated-user-id" },
            },
            {
              name: "--ca-cert-archive-text",
              description:
                "Base64 encoded text in ASCII character set of a Thirdparty CA Certificates archive file",
              args: { name: "ca-cert-archive-text" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-osn",
          description: "Create Blockchain Platform Osn",
          options: [
            optBlockchainPlatformId,
            {
              name: "--ad",
              description: "Availability Domain to place new OSN",
              args: { name: "ad" },
              isRequired: true,
            },
            { name: "--ocpu-allocation-param", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-peer",
          description: "Create Blockchain Platform Peer",
          options: [
            optBlockchainPlatformId,
            {
              name: "--role",
              description: "Peer role",
              args: { name: "role" },
              isRequired: true,
            },
            optOcpuAllocationParam,
            {
              name: "--ad",
              description: "Availability Domain to place new peer",
              args: { name: "ad" },
              isRequired: true,
            },
            {
              name: "--alias",
              description: "Peer alias",
              args: { name: "alias" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a particular of a Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-osn",
          description: "Delete a particular OSN of a Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            optOsnId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-peer",
          description: "Delete a particular peer of a Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            optPeerId,
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
            "Gets information about a Blockchain Platform identified by the specific id",
          options: [optBlockchainPlatformId, optFromJson],
        },
        {
          name: "list-blockchain-platform-patches",
          description: "List Blockchain Platform Patches",
          options: [
            optBlockchainPlatformId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list Blockchain Platform Instances in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "SCALING",
                  "INACTIVE",
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
          name: "preview-scale",
          description: "Preview Scale Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            {
              name: "--add-osns",
              description: "New OSNs to add",
              args: { name: "json" },
            },
            { name: "--add-replicas", args: { name: "json" } },
            {
              name: "--add-peers",
              description: "New Peers to add",
              args: { name: "json" },
            },
            { name: "--add-storage", args: { name: "json" } },
            {
              name: "--modify-peers",
              description: "Modify ocpu allocation to existing Peers",
              args: { name: "json" },
            },
            { name: "--remove-replicas", args: { name: "json" } },
            {
              name: "--remove-osns",
              description: "OSN id list to remove",
              args: { name: "json" },
            },
            {
              name: "--remove-peers",
              description: "Peer id list to remove",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "scale",
          description: "Scale Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            {
              name: "--add-osns",
              description: "New OSNs to add",
              args: { name: "json" },
            },
            { name: "--add-replicas", args: { name: "json" } },
            {
              name: "--add-peers",
              description: "New Peers to add",
              args: { name: "json" },
            },
            { name: "--add-storage", args: { name: "json" } },
            {
              name: "--modify-peers",
              description: "Modify ocpu allocation to existing Peers",
              args: { name: "json" },
            },
            { name: "--remove-replicas", args: { name: "json" } },
            {
              name: "--remove-osns",
              description: "OSN id list to remove",
              args: { name: "json" },
            },
            {
              name: "--remove-peers",
              description: "Peer id list to remove",
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
          name: "start",
          description: "Start a Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stop a Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update a particular of a Blockchain Platform",
          options: [
            optBlockchainPlatformId,
            {
              name: "--description",
              description: "Platform Description",
              args: { name: "description" },
            },
            {
              name: "--storage-size-in-tbs",
              description: "Storage size in TBs",
              args: { name: "storage-size-in-tbs" },
            },
            { name: "--replicas", args: { name: "json" } },
            {
              name: "--total-ocpu-capacity",
              description: "Number of total OCPUs to allocate",
              args: { name: "integer" },
            },
            {
              name: "--load-balancer-shape",
              description:
                "Type of Load Balancer shape - LB_100_MBPS or LB_400_MBPS",
              args: { name: "load-balancer-shape" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-osn",
          description: "Update Blockchain Platform OSN",
          options: [
            optBlockchainPlatformId,
            optOsnId,
            optOcpuAllocationParam,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-peer",
          description: "Update Blockchain Platform Peer",
          options: [
            optBlockchainPlatformId,
            optPeerId,
            optOcpuAllocationParam,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade a Blockchain Platform version",
          options: [
            {
              name: "--patch-id",
              description:
                "The patch ID corresponding to the version to which platform will be upgraded",
              args: { name: "patch-id" },
              isRequired: true,
            },
            optBlockchainPlatformId,
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
      name: "peer",
      description: "A Peer details",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about a peer identified by the specific id",
          options: [optBlockchainPlatformId, optPeerId, optFromJson],
        },
        {
          name: "list",
          description: "List Blockchain Platform Peers",
          options: [
            optBlockchainPlatformId,
            optDisplayName,
            optSortOrder,
            optSortBy,
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
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of logs for a given work request",
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
      name: "osn",
      description: "An Ordering Service Node details",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about an OSN identified by the specific id",
          options: [optBlockchainPlatformId, optOsnId, optFromJson],
        },
        {
          name: "list",
          description: "List Blockchain Platform OSNs",
          options: [
            optBlockchainPlatformId,
            optDisplayName,
            optSortOrder,
            optSortBy,
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
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "delete",
          description: "Attempts to cancel the work request with the given ID",
          options: [
            optWorkRequestId,
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
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optBlockchainPlatformId,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeStarted", "workRequestId"] },
            },
            optPage,
            optLimit,
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
