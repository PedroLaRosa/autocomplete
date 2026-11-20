// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optId: Fig.Option = {
  name: "--id",
  description: "The OCID of the limit increase request. required",
  args: { name: "id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description:
    "This value (etag) should be passed when you want to ensure that no-one else has changed the value while",
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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "SUCCEEDED",
      "CANCELED",
      "PARTIALLY_SUCCEEDED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the parent compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "Maximum number of items returned in a page",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "The next page token",
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
const completionSpec: Fig.Spec = {
  name: "limits-increase",
  description: "Limits Increase",
  subcommands: [
    {
      name: "limits-increase-request",
      description: "The properties that define a limit increase request",
      subcommands: [
        {
          name: "cancel",
          description: "Withdraws the specified limit increase request",
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
          name: "create",
          description:
            "Creates a limit increase request in the specified compartment",
          options: [
            {
              name: "--display-name",
              description:
                "The user-friendly name of the limit increase request",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment for the new limit increase request",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--justification",
              description: "Reason for the limit increase request",
              args: { name: "justification" },
              isRequired: true,
            },
            {
              name: "--subscription-id",
              description:
                "The OCID of the tenancy subscription for the limit increase request",
              args: { name: "subscription-id" },
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
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--items",
              description: "List of items in the limit increase request",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified limit increase request",
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
          description: "Gets the specified limit increase request",
          options: [optId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists limit increase requests in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description: "Lifecycle state of the limit increase request",
              args: { name: "lifecycle-state" },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only the resources that match the entire display name specified",
              args: { name: "display-name" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Adds one or more comments to the specified limit increase request",
          options: [
            {
              name: "--items",
              description: "List of patch instructions for adding comments",
              args: { name: "json" },
            },
            optIfMatch,
            optId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the limit increase request",
          options: [
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
            optId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "question",
      description: "Collection of questions to be asked for certain limits",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the fields for the specified service and limit name",
          options: [
            optCompartmentId,
            {
              name: "--service-name",
              description: "The name of the service",
              args: { name: "service-name" },
            },
            {
              name: "--limit-name",
              description: "The name of the limit",
              args: { name: "limit-name" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["serviceName", "limitName"] },
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
      name: "item",
      description:
        "The properties that define a limit increase item in a limit increase request",
      subcommands: [
        {
          name: "cancel",
          description:
            "Withdraws the specified item from the limit increase request",
          options: [
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "CANCELED",
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the specified item from the limit increase request",
          options: [optId, optFromJson],
        },
        {
          name: "list",
          description: "Lists items in the specified limit increase request",
          options: [
            optCompartmentId,
            {
              name: "--service",
              description: "Name of service that owns the limit",
              args: { name: "service" },
            },
            {
              name: "--lifecycle-state",
              description: "Lifecycle state of the limit increase request",
              args: { name: "lifecycle-state" },
            },
            {
              name: "--limits-increase-request-id",
              description: "The OCID of the limit increase request",
              args: { name: "limits-increase-request-id" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
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
  ],
};

export default completionSpec;
