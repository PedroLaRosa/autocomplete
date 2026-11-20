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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optInstanceId: Fig.Option = {
  name: "--instance-id",
  description: "The OCID of the Instance",
  args: { name: "instance-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
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
      "NEEDS_ATTENTION",
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
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "pss",
  description: "Public Safety and Security",
  subcommands: [
    {
      name: "instance",
      description: "A Public Safety and Security instance",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an Instance into a different compartment within the same tenancy",
          options: [
            optInstanceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Instance to",
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
          description: "Creates an Instance",
          options: [
            {
              name: "--identity-domain-url",
              description:
                "The URL of the identity domain associated with the instance",
              args: { name: "identity-domain-url" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the Instance in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
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
              name: "--admin-user-id",
              description:
                "The OCID of the identity-domain user that initially administers the PSS instance. required",
              args: { name: "admin-user-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an Instance",
          options: [
            optInstanceId,
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
          description: "Gets information about an Instance",
          options: [optInstanceId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Instances",
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
              description: "The OCID of the Instance",
              args: { name: "id" },
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
        {
          name: "update",
          description: "Updates an Instance",
          options: [
            optInstanceId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
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
      ],
    },
    {
      name: "work-request-error",
      description:
        "An error encountered while performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the errors for a work request",
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
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request",
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
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only work requests that match the given status",
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
              name: "--resource-identifier",
              description:
                "The OCID of the resource affected by the work request",
              args: { name: "resource-identifier" },
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
      name: "work-request-log",
      description:
        "A log message from performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the logs for a work request",
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
