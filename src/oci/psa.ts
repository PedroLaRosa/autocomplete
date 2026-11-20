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
const optPrivateServiceAccessId: Fig.Option = {
  name: "--private-service-access-id",
  description: "The OCID of the PrivateServiceAccess",
  args: { name: "private-service-access-id" },
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
      "CANCELLING",
      "CANCELLED",
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
  name: "psa",
  description: "PrivateServiceAccess Control Plane",
  subcommands: [
    {
      name: "private-service-access",
      description:
        "Private Service Access (PSA) is a new way to create private accesss for a service",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a PrivateServiceAccess into a different compartment within the same tenancy",
          options: [
            optPrivateServiceAccessId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the private service access should be moved",
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
            "Creates a private service access in the specified subnet",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the private service access",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the VCN's subnet where the private service access's VNIC will reside",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--service-id",
              description:
                "A unique service identifier for which the private service access was created",
              args: { name: "service-id" },
              isRequired: true,
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
              args: { name: "json" },
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description of this private service accesss",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the private service access's VNIC to",
              args: { name: "json" },
            },
            {
              name: "--ipv4-ip",
              description:
                "The private IPv4 address (in the consumer's VCN) that represents the access point for the associated service",
              args: { name: "ipv4-ip" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a PrivateServiceAccess",
          options: [
            optPrivateServiceAccessId,
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
          description: "Gets information about a PrivateServiceAccess",
          options: [optPrivateServiceAccessId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a PrivateServiceAccess",
          options: [
            optPrivateServiceAccessId,
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
              args: { name: "json" },
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description of this private service",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the private service access's VNIC to",
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
            "List the private service accesses in the specified compartment",
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
              description: "The OCID of the resource",
              args: { name: "id" },
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN",
              args: { name: "vcn-id" },
            },
            {
              name: "--service-id",
              description: "The unique identifier of the OCI service",
              args: { name: "service-id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
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
      name: "work-request-error",
      description:
        "An error encountered while performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the errors for a PrivateServiceAccess work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
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
          name: "list",
          description:
            "Lists the PrivateServiceAccess work requests in a compartment",
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
                "A filter to return only the resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELLING",
                  "CANCELLED",
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
          name: "get",
          description:
            "Gets the details of a PrivateServiceAccess work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "cancel",
          description: "Cancels a PrivateServiceAccess work request",
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
      ],
    },
    {
      name: "psa-services",
      description: "Results of a privateServiceAccess search",
      subcommands: [
        {
          name: "list",
          description:
            "List the OCI services available for Private Service Access catalog in the region, sorted by service name",
          options: [
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--service-id",
              description: "The unique identifier of the OCI service",
              args: { name: "service-id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["displayName"] },
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
      name: "work-request-log",
      description:
        "A log message from performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the logs for a PrivateServiceAccess work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
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
