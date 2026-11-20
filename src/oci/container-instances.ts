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
const optContainerInstanceId: Fig.Option = {
  name: "--container-instance-id",
  description: "The OCID of the container instance",
  args: { name: "container-instance-id" },
  isRequired: true,
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
  description: "For list pagination",
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
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description: "The name of the availability domain",
  args: { name: "availability-domain" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optContainerId: Fig.Option = {
  name: "--container-id",
  description: "The OCID of the container",
  args: { name: "container-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "container-instances",
  description: "Container Instance",
  subcommands: [
    {
      name: "container",
      description: "A single container on a container instance",
      subcommands: [
        {
          name: "get",
          description:
            "Get details about a single container by the container ID",
          options: [optContainerId, optFromJson],
        },
        {
          name: "retrieve-logs",
          description:
            "Returns the most recent 256 KB of logs from the specified container",
          options: [
            optContainerId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--is-previous",
              description:
                "Returns the logs for the previous run of the container in a pod",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a container",
          options: [
            optContainerId,
            optDisplayName,
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
        {
          name: "list",
          description: "Returns a list of containers in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
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
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--container-instance-id",
              description: "The OCID of the container instance",
              args: { name: "container-instance-id" },
            },
            optAvailabilityDomain,
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use (ASC) or (DESC)",
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
      name: "container-instance",
      description: "A container instance to host containers",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a container instance resource from one compartment identifier to another",
          options: [
            optContainerInstanceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the container instance to",
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
          description:
            "Creates a container instance and deploys the containers on it",
          options: [
            {
              name: "--compartment-id",
              description: "The compartment OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The availability domain where the container instance runs",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--shape",
              description: "The shape of the container instance",
              args: { name: "shape" },
              isRequired: true,
            },
            {
              name: "--shape-config",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--containers",
              description:
                "The containers to create on this container instance",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnics",
              description:
                "The networks available to containers on this container instance",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--fault-domain",
              description: "The fault domain where the container instance runs",
              args: { name: "fault-domain" },
            },
            {
              name: "--volumes",
              description:
                "A volume is a directory with data that is accessible across multiple containers in a container instance",
              args: { name: "json" },
            },
            { name: "--dns-config", args: { name: "json" } },
            {
              name: "--graceful-shutdown-timeout-in-seconds",
              description:
                "The amount of time that processes in a container have to gracefully end when the container must be stopped",
              args: { name: "integer" },
            },
            {
              name: "--image-pull-secrets",
              description:
                "The image pulls secrets so you can access private registry to pull container images",
              args: { name: "json" },
            },
            {
              name: "--container-restart-policy",
              description: "Container restart policy",
              args: { name: "container-restart-policy" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--security-context", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-container-instance-create-linux-container-instance-security-context-details",
          description:
            "Creates a container instance and deploys the containers on it",
          options: [
            {
              name: "--compartment-id",
              description: "The compartment OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The availability domain where the container instance runs",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--shape",
              description: "The shape of the container instance",
              args: { name: "shape" },
              isRequired: true,
            },
            {
              name: "--shape-config",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--containers",
              description:
                "The containers to create on this container instance",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnics",
              description:
                "The networks available to containers on this container instance",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--fault-domain",
              description: "The fault domain where the container instance runs",
              args: { name: "fault-domain" },
            },
            {
              name: "--volumes",
              description:
                "A volume is a directory with data that is accessible across multiple containers in a container instance",
              args: { name: "json" },
            },
            { name: "--dns-config", args: { name: "json" } },
            {
              name: "--graceful-shutdown-timeout-in-seconds",
              description:
                "The amount of time that processes in a container have to gracefully end when the container must be stopped",
              args: { name: "integer" },
            },
            {
              name: "--image-pull-secrets",
              description:
                "The image pulls secrets so you can access private registry to pull container images",
              args: { name: "json" },
            },
            {
              name: "--container-restart-policy",
              description: "Container restart policy",
              args: { name: "container-restart-policy" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-context-fs-group",
              description:
                "A special supplemental group that applies to all containers in the container instance",
              args: { name: "integer" },
            },
            {
              name: "--security-context-fs-group-change-policy",
              description:
                "Defines behavior of changing ownership and permission of the volume before being exposed inside",
              args: { suggestions: ["ALWAYS", "ON_ROOT_MISMATCH"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a container instance and its containers",
          options: [
            optContainerInstanceId,
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
            "Gets information about the specified container instance",
          options: [optContainerInstanceId, optFromJson],
        },
        {
          name: "restart",
          description: "Restarts a container instance",
          options: [
            optContainerInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: 'Starts a container instance if it is "inactive"',
          options: [
            optContainerInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: 'Stops a container instance if it is "active"',
          options: [
            optContainerInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a container instance",
          options: [
            optContainerInstanceId,
            optDisplayName,
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
        {
          name: "list",
          description: "Returns a list of container instances",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
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
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            optAvailabilityDomain,
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use (ASC) or (DESC)",
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
        {
          name: "list-shapes",
          description:
            "Lists the shapes that can be used to create container instances",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
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
      name: "work-request",
      description: "A description of the work request status",
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
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            optPage,
            optLimit,
            optAvailabilityDomain,
            {
              name: "--status",
              description:
                "A filter to return resources with a lifecycleState that matches the given OperationStatus",
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
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optSortOrder,
            {
              name: "--resource-id",
              description:
                "The OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-errors",
          description: "Returns a paginated list of errors for a work request",
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
        {
          name: "list-logs",
          description: "Returns a paginated list of logs for a work request",
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
  ],
};

export default completionSpec;
