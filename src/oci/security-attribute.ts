// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optSecurityAttributeNamespaceId: Fig.Option = {
  name: "--security-attribute-namespace-id",
  description: "The OCID of the security attribute namespace",
  args: { name: "security-attribute-namespace-id" },
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
  description:
    'The maximum number of items to return in a paginated "List" call',
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
  description:
    'The value of the opc-next-page response header from the previous "List" call',
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETING", "DELETED"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optSecurityAttributeName: Fig.Option = {
  name: "--security-attribute-name",
  description: "The name of the security attribute",
  args: { name: "security-attribute-name" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "security-attribute",
  description: "Security Attribute",
  subcommands: [
    {
      name: "security-attribute-namespace",
      description: "A managed container for security attributes",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified security attribute namespace to the specified compartment within the same tenancy",
          options: [
            optSecurityAttributeNamespaceId,
            {
              name: "--compartment-id",
              description:
                "The Oracle Cloud ID (OCID) of the destination compartment",
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
            "Creates a new security attribute namespace in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the tenancy containing the security attribute namespace",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name you assign to the security attribute namespace during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the security attribute namespace during creation",
              args: { name: "description" },
              isRequired: true,
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
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified security attribute namespace",
          options: [
            optSecurityAttributeNamespaceId,
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
            "Gets the specified security attribute namespace's information",
          options: [optSecurityAttributeNamespaceId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the security attribute namespaces in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            optPage,
            optLimit,
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "NAME"] },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "name" },
            },
            {
              name: "--compartment-id-in-subtree",
              description:
                "An optional boolean parameter indicating whether to retrieve all security attribute namespaces",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: ["ACTIVE", "INACTIVE", "DELETING", "DELETED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified security attribute namespace",
          options: [
            optSecurityAttributeNamespaceId,
            {
              name: "--description",
              description:
                "The description you assign to the security attribute namespace to help you identify it",
              args: { name: "description" },
            },
            {
              name: "--is-retired",
              description:
                "Indicates whether the security attribute namespace is retired",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
        {
          name: "cascade-delete",
          description: "Deletes the specified security attribute namespace",
          options: [optSecurityAttributeNamespaceId, optIfMatch, optFromJson],
        },
      ],
    },
    {
      name: "security-attribute",
      description:
        "A security attribute that belongs to a specific security attribute namespace",
      subcommands: [
        {
          name: "bulk-delete",
          description: "Deletes the specified security attribute definitions",
          options: [
            {
              name: "--security-attribute-ids",
              description: "The OCIDs of the security attributes to delete",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "bulk-edit",
          description:
            "Edits the specified list of security attributes for the selected resources",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the bulk edit request is submitted",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resources",
              description: "The resources to be updated",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--bulk-edit-operations",
              description:
                "The operations associated with the request to bulk edit tags",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new security attribute in the specified security attribute namespace",
          options: [
            optSecurityAttributeNamespaceId,
            {
              name: "--name",
              description:
                "The name you assign to the security attribute during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the security attribute during creation",
              args: { name: "description" },
              isRequired: true,
            },
            { name: "--validator", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified security attribute",
          options: [
            optSecurityAttributeNamespaceId,
            optSecurityAttributeName,
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
          description: "Gets the specified security attribute's information",
          options: [
            optSecurityAttributeNamespaceId,
            optSecurityAttributeName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the security attributes in the specified namespace",
          options: [
            optSecurityAttributeNamespaceId,
            optPage,
            optLimit,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: ["ACTIVE", "INACTIVE", "DELETING", "DELETED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified security attribute",
          options: [
            optSecurityAttributeNamespaceId,
            optSecurityAttributeName,
            {
              name: "--description",
              description:
                "The description of the security attribute during creation",
              args: { name: "description" },
            },
            {
              name: "--is-retired",
              description: "Whether the security attribute is retired",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--validator", args: { name: "json" } },
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
      name: "work-request",
      description:
        "The asynchronous API request does not take effect immediately",
      subcommands: [
        {
          name: "get",
          description: "Gets details on a specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the security attribute work requests in compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            optPage,
            optLimit,
            {
              name: "--resource-identifier",
              description:
                "The identifier of the resource the work request affects",
              args: { name: "resource-identifier" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-errors",
          description: "Gets the errors for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-logs",
          description: "Gets the logs for a work request",
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
  ],
};

export default completionSpec;
