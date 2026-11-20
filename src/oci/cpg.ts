// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optClusterPlacementGroupId: Fig.Option = {
  name: "--cluster-placement-group-id",
  description: "A unique cluster placement group identifier",
  args: { name: "cluster-placement-group-id" },
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
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
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
      "NEEDS_ATTENTION",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "cpg",
  description: "Cluster Placement Groups",
  subcommands: [
    {
      name: "cluster-placement-group",
      description:
        "A cluster placement group, which is a logical grouping of resources that offer low latency within",
      subcommands: [
        {
          name: "activate",
          description:
            "Activates the specified, previously deactivated cluster placement group to let resources be created in it",
          options: [
            optClusterPlacementGroupId,
            optIfMatch,
            {
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
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a cluster placement group resource from one compartment to another in the same tenancy",
          options: [
            optClusterPlacementGroupId,
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
            "Creates a new cluster placement group in the specified compartment",
          options: [
            {
              name: "--name",
              description: "The friendly name of the cluster placement group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description of the cluster placement group",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The availability domain where you want to create the cluster placement group",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the cluster placement group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            { name: "--placement-instruction", args: { name: "json" } },
            { name: "--capabilities", args: { name: "json" } },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type, or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--opc-dry-run",
              description:
                "When set to true, the request performs validation on the submitted data without modifying configuration item",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--type",
              description: "ClusterPlacementGroup Identifier. required",
              args: { suggestions: ["STANDARD"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description:
            "Deactivates the specified cluster placement group to prevent new resources from being created in it",
          options: [
            optClusterPlacementGroupId,
            optIfMatch,
            {
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
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified cluster placement group",
          options: [
            optClusterPlacementGroupId,
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
          description: "Gets the specified cluster placement group",
          options: [optClusterPlacementGroupId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified cluster placement group",
          options: [
            optClusterPlacementGroupId,
            {
              name: "--description",
              description: "The description of the cluster placement group",
              args: { name: "description" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type, or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
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
        {
          name: "list",
          description:
            "Gets a list of all cluster placement groups in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "A filter to return only the resources that match the specified compartment OCID",
              args: { name: "compartment-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the resources that match the specified lifecycle state",
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
              name: "--name",
              description:
                "A filter to return only the resources that match the entire display name specified",
              args: { name: "name" },
            },
            {
              name: "--ad",
              description:
                "A filter to return only the resources that match the specified availability domain",
              args: { name: "ad" },
            },
            {
              name: "--id",
              description:
                "A filter to return only the resources that match the specified unique cluster placement group identifier",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name", "id"] },
            },
            {
              name: "--compartment-id-in-subtree",
              description:
                "When set to true, cluster placement groups in all compartments under the specified compartment are returned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
            "Returns a (paginated) list of errors for the work request with the specified ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of logs for the work request with the specified ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
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
      name: "work-request",
      description: "The status of a work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels the work request with the specified ID",
          options: [
            optWorkRequestId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of the work request with the specified ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists all work requests in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "A filter to return only the resources that match the specified compartment OCID",
              args: { name: "compartment-id" },
            },
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources with a lifecycle state that matches the specified operation status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
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
  ],
};

export default completionSpec;
