// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optInstanceId: Fig.Option = {
  name: "--instance-id",
  description: "Unique VbsInstance identifier required",
  args: { name: "instance-id" },
  isRequired: true,
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
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
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "vbstudio",
  description: "VbsControlplaneInstance",
  subcommands: [
    {
      name: "work-request",
      description: "A VBS Instance related work request",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "errors",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
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
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "instance",
      description: "Visual Builder Studio service instance",
      subcommands: [
        {
          name: "create",
          description: "Creates a new VbsInstance",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Service Instance Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Display Name",
              args: { name: "display-name" },
              isRequired: true,
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
            {
              name: "--idcs-access-token",
              description:
                "IDCS personal acceess token identifying IDCS user and stripe for the VBS service",
              args: { name: "idcs-access-token" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--is-cicd-authorized",
              description:
                "Whether VBS is authorized to create and use resources in the customer tenancy",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--cicd-compartment-id",
              description:
                "Compartment where VBS may create additional resources for the service instance",
              args: { name: "cicd-compartment-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a VbsInstance resource by identifier",
          options: [
            {
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optInstanceId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a VbsInstance by identifier",
          options: [optInstanceId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the VbsInstance",
          options: [
            {
              name: "--display-name",
              description: "Display Name",
              args: { name: "display-name" },
              isRequired: true,
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
            {
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optInstanceId,
            {
              name: "--is-cicd-authorized",
              description:
                "Whether VBS is authorized to create and use resources in the customer tenancy",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--cicd-compartment-id",
              description:
                "Compartment where VBS may create additional resources for the service instance",
              args: { name: "cicd-compartment-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of VbsInstances",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
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
            {
              name: "--id",
              description: "Unique VbsInstance identifier",
              args: { name: "id" },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire name given",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
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
  ],
};

export default completionSpec;
