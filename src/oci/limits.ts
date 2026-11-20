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
const optQuotaId: Fig.Option = {
  name: "--quota-id",
  description: "The OCID of the quota",
  args: { name: "quota-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE"] },
  isRepeatable: true,
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the parent compartment (remember that the tenancy is simply the root compartment)",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description: "The subscription OCID assigned to the tenant",
  args: { name: "subscription-id" },
};
const completionSpec: Fig.Spec = {
  name: "limits",
  description: "Service Limits",
  subcommands: [
    {
      name: "service",
      description: "A specific OCI service supported by resource limits",
      subcommands: [
        {
          name: "list",
          description: "Returns the list of supported services",
          options: [
            optCompartmentId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "description"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optSubscriptionId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-availability",
      description:
        "The availability of a given resource limit, based on the usage, tenant service limits",
      subcommands: [
        {
          name: "get",
          description:
            "For a given compartmentId, resource limit name, and scope, returns the following",
          options: [
            {
              name: "--service-name",
              description: "The service name of the target quota",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--limit-name",
              description: "The limit name for which to fetch the data",
              args: { name: "limit-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment for which data is being fetched",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "This field is mandatory if the scopeType of the target resource limit is AD",
              args: { name: "availability-domain" },
            },
            optSubscriptionId,
            {
              name: "--external-location",
              description: "External cloud provider location",
              args: { name: "external-location" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "definition",
      description: "The metadata specific to a resource limit definition",
      subcommands: [
        {
          name: "list",
          description:
            "Includes a list of resource limits that are currently supported",
          options: [
            optCompartmentId,
            optSubscriptionId,
            {
              name: "--service-name",
              description: "The target service name",
              args: { name: "service-name" },
            },
            {
              name: "--name",
              description:
                "Optional field, filter for a specific resource limit",
              args: { name: "name" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "description"] },
            },
            optSortOrder,
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
      name: "value",
      description: "The value of a specific resource limit",
      subcommands: [
        {
          name: "list",
          description:
            "Includes a full list of resource limits belonging to a given service",
          options: [
            optCompartmentId,
            {
              name: "--service-name",
              description: "The target service name",
              args: { name: "service-name" },
              isRequired: true,
            },
            optSubscriptionId,
            {
              name: "--external-location",
              description: "External cloud provider location",
              args: { name: "external-location" },
            },
            {
              name: "--scope-type",
              description: "Filter entries by scope type",
              args: { suggestions: ["GLOBAL", "REGION", "AD"] },
            },
            {
              name: "--availability-domain",
              description: "Filter entries by availability domain",
              args: { name: "availability-domain" },
            },
            {
              name: "--name",
              description:
                "Optional field, can be used to see a specific resource limit value",
              args: { name: "name" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name"] },
            },
            optSortOrder,
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
      name: "quota",
      description:
        "Quotas are applied on top of the service limits and inherited through the nested compartment hierarchy",
      subcommands: [
        {
          name: "create",
          description: "Creates a new quota with the details supplied",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the resource this quota applies to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description you assign to the quota",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name you assign to the quota during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--statements",
              description:
                "An array of quota statements written in the declarative quota statement language",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--locks",
              description: "Locks associated with this resource",
              args: { name: "json" },
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
          description: "Deletes the quota corresponding to the given OCID",
          options: [
            optQuotaId,
            optIfMatch,
            {
              name: "--is-lock-override",
              description: "Whether to override locks (if any exist)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
          description: "Gets the quota for the OCID specified",
          options: [optQuotaId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all quotas on resources from the given compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            { name: "--name", description: "Name", args: { name: "name" } },
            {
              name: "--lifecycle-state",
              description: "Filters returned quotas based on the given state",
              args: { suggestions: ["ACTIVE"] },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME", "TIMECREATED"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the quota corresponding to given OCID with the details supplied",
          options: [
            optQuotaId,
            {
              name: "--description",
              description: "The description you assign to the quota",
              args: { name: "description" },
            },
            {
              name: "--statements",
              description:
                "An array of quota statements written in the declarative quota statement language",
              args: { name: "json" },
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
              name: "--is-lock-override",
              description: "Whether to override locks (if any exist)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
          name: "addlock",
          description: "Adds a lock to a resource",
          options: [
            optQuotaId,
            {
              name: "--type",
              description: "Lock type",
              args: { suggestions: ["FULL", "DELETE"] },
              isRequired: true,
            },
            {
              name: "--related-resource-id",
              description: "The resource ID that is locking this resource",
              args: { name: "related-resource-id" },
            },
            {
              name: "--message",
              description: "A message added by the lock creator",
              args: { name: "message" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "removelock",
          description: "Remove a lock from a resource",
          options: [
            optQuotaId,
            {
              name: "--type",
              description: "Lock type",
              args: { suggestions: ["FULL", "DELETE"] },
              isRequired: true,
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
  ],
};

export default completionSpec;
