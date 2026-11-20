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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optOpcDryRun: Fig.Option = {
  name: "--opc-dry-run",
  description: 'Indicates that the request is a dry run, if set to "true"',
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timestamp"] },
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
const optZprPolicyId: Fig.Option = {
  name: "--zpr-policy-id",
  description: "The OCID of the ZprPolicy",
  args: { name: "zpr-policy-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "zpr",
  description: "Zero Trust Packet Routing Control Plane",
  subcommands: [
    {
      name: "zpr-policy",
      description:
        "A ZprPolicy is a rule that governs the communication between specific endpoints identified by their security",
      subcommands: [
        {
          name: "create",
          description: "Creates a ZprPolicy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the ZprPolicy in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the ZprPolicy during creation",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name you assign to the ZprPolicy during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--statements",
              description:
                "An array of ZprPolicy statements(up to 25 statements per ZprPolicy) written in the Zero Trust Packet Routing",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a ZprPolicy",
          options: [
            optZprPolicyId,
            {
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            optOpcDryRun,
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
          description: "Gets information about a ZprPolicy",
          options: [optZprPolicyId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a specific ZprPolicy",
          options: [
            optZprPolicyId,
            {
              name: "--description",
              description:
                "The description you assign to the ZprPolicy during creation",
              args: { name: "description" },
            },
            {
              name: "--statements",
              description:
                "An array of ZprPolicy statements(up to 25 statements per ZprPolicy) written in the Zero Trust Packet Routing",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            optOpcDryRun,
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
          description: "Gets a list of ZprPolicies",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "name" },
            },
            {
              name: "--id",
              description: "The OCID of the ZprPolicy",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "configuration",
      description:
        "The configuration details of ZPR in the root compartment (the root compartment is the tenancy)",
      subcommands: [
        {
          name: "create",
          description:
            "Initiates the process to onboard ZPR in a root compartment (the root compartment is the tenancy)",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the tenancy into which ZPR resources will be bootstrapped",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--zpr-status",
              description:
                "The enabled or disabled status of ZPR in the tenancy",
              args: { name: "zpr-status" },
            },
            optFreeformTags,
            optDefinedTags,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the ZPR configuration details for the root compartment (the root compartment is the tenancy)",
          options: [optCompartmentId, optFromJson],
        },
      ],
    },
    {
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "get-zpr-configuration",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "get-zpr-policy",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-zpr-configuration",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only the resources that match the given lifecycle state",
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
                "The OCID of the resource affected by the work request",
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
        {
          name: "list-zpr-policy",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only the resources that match the given lifecycle state",
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
                "The OCID of the resource affected by the work request",
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
        {
          name: "list-zpr-configuration-errors",
          description: "Lists the errors for a work request",
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
          name: "list-zpr-policy-errors",
          description: "Lists the errors for a work request",
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
          name: "list-zpr-configuration-logs",
          description: "Lists the logs for a work request",
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
          name: "list-zpr-policy-logs",
          description: "Lists the logs for a work request",
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
  ],
};

export default completionSpec;
