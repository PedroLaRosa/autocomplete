// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optMacOrderId: Fig.Option = {
  name: "--mac-order-id",
  description: "The OCID of the MacOrder",
  args: { name: "mac-order-id" },
  isRequired: true,
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const completionSpec: Fig.Spec = {
  name: "mngdmac",
  description: "OCI Managed Services for Mac",
  subcommands: [
    {
      name: "mac-device",
      description:
        "Use the OCI Managed Services for Mac CLI to create and manage orders for dedicated",
      subcommands: [
        {
          name: "mac-device",
          description: "Represents a MacDevice resource",
          subcommands: [
            {
              name: "get",
              description: "Gets information about a MacDevice",
              options: [
                {
                  name: "--mac-device-id",
                  description: "The UUID of the MacDevice",
                  args: { name: "mac-device-id" },
                  isRequired: true,
                },
                optMacOrderId,
                optFromJson,
              ],
            },
            {
              name: "terminate",
              description: "Terminates a MacDevice",
              options: [
                {
                  name: "--mac-device-id",
                  description: "The UUID of the MacDevice",
                  args: { name: "mac-device-id" },
                  isRequired: true,
                },
                optMacOrderId,
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
          name: "mac-device-collection",
          description: "Results of a MacDevice search",
          subcommands: [
            {
              name: "list-mac-devices",
              description: "Gets a list of MacDevices assigned to this order",
              options: [
                optMacOrderId,
                optCompartmentId,
                {
                  name: "--id",
                  description: "The UUID of the MacDevice",
                  args: { name: "id" },
                },
                {
                  name: "--serial-number",
                  description: "The serial number of the MacDevice",
                  args: { name: "serial-number" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources that match the given lifecycle state",
                  args: {
                    suggestions: [
                      "CREATING",
                      "ACTIVE",
                      "NEEDS_ATTENTION",
                      "DELETING",
                      "DELETED",
                    ],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated", "SerialNumber"] },
                },
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
      name: "mac-order",
      description:
        "Use the OCI Managed Services for Mac CLI to create and manage orders for dedicated",
      subcommands: [
        {
          name: "mac-order",
          description: "A description of a MacOrder resource",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels a MacOrder",
              options: [
                optMacOrderId,
                {
                  name: "--cancel-reason",
                  description: "The reason for the MacOrder cancellation",
                  args: { name: "cancel-reason" },
                },
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "change-compartment",
              description:
                "Moves a MacOrder into a different compartment within the same tenancy",
              options: [
                optMacOrderId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the MacOrder to",
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
              description: "Creates a MacOrder",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "OCID of the compartment to which the resource belongs to",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--order-description",
                  description: "A user-friendly description",
                  args: { name: "order-description" },
                  isRequired: true,
                },
                {
                  name: "--order-size",
                  description: "Number of macs requested in this MacOrder",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--shape",
                  description:
                    "The requested shape of the MacDevices in the MacOrder",
                  args: { name: "shape" },
                  isRequired: true,
                },
                {
                  name: "--commitment-term",
                  description:
                    "Enum that indicates the agreed commitment term for the MacDevices",
                  args: { name: "commitment-term" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "A user-friendly name",
                  args: { name: "display-name" },
                },
                {
                  name: "--ip-range",
                  description:
                    "The IP Range specified by the customer for this order",
                  args: { name: "ip-range" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets information about a MacOrder",
              options: [optMacOrderId, optFromJson],
            },
            {
              name: "update",
              description: "Updates a MacOrder",
              options: [
                optMacOrderId,
                {
                  name: "--display-name",
                  description: "A user-friendly name",
                  args: { name: "display-name" },
                },
                {
                  name: "--order-description",
                  description: "A user-friendly description",
                  args: { name: "order-description" },
                },
                {
                  name: "--order-size",
                  description: "Number of macs requested in this MacOrder",
                  args: { name: "integer" },
                },
                {
                  name: "--shape",
                  description: "The shape of the Mac",
                  args: { name: "shape" },
                },
                {
                  name: "--ip-range",
                  description:
                    "The IP Range specified by the customer for this order",
                  args: { name: "ip-range" },
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
          name: "work-request-log-entry",
          description:
            "A log message from performing an operation that is tracked by a work request",
          subcommands: [
            {
              name: "list-work-request-logs",
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
          ],
        },
        {
          name: "mac-order-collection",
          description: "Results of a MacOrder search",
          subcommands: [
            {
              name: "list-mac-orders",
              description: "Gets a list of MacOrders",
              options: [
                optCompartmentId,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources that match the given lifecycle state",
                  args: {
                    suggestions: [
                      "CREATING",
                      "UPDATING",
                      "ACTIVE",
                      "NEEDS_ATTENTION",
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
                  description: "The OCID of the MacOrder",
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
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
