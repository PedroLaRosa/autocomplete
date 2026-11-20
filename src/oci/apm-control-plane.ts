// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optApmDomainId: Fig.Option = {
  name: "--apm-domain-id",
  description: "The OCID of the APM domain",
  args: { name: "apm-domain-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "apm-control-plane",
  description: "Application Performance Monitoring Control Plane",
  subcommands: [
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of errors for a given work request",
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
    {
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Returns a (paginated) list of logs for a given work request",
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
    {
      name: "work-request",
      description: "A description of work request",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-apm-domain",
          description:
            "Returns a (paginated) list of work requests related to a specific APM domain",
          options: [
            optApmDomainId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a (paginated) list of work requests in a given compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "apm-domain",
      description: "Details of an APM domain",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves an APM domain into a different compartment",
          options: [
            optApmDomainId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the destination compartment for the APM domain",
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
          description: "Creates a new APM domain",
          options: [
            {
              name: "--display-name",
              description: "Display name of the APM domain",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment corresponding to the APM domain",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the APM domain",
              args: { name: "description" },
            },
            {
              name: "--log-group-id",
              description:
                "The OCID of the Log Analytics log group to which the data uploaded to this APM domain will be mapped to",
              args: { name: "log-group-id" },
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
              name: "--is-free-tier",
              description:
                'Indicates whether this is an "Always Free" resource',
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified APM domain asynchronously",
          options: [
            optApmDomainId,
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
          description: "Gets the details of the APM domain specified by OCID",
          options: [optApmDomainId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all APM domains for the specified tenant compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given life-cycle state",
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
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'asc' or 'desc'",
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
          name: "update",
          description: "Updates the APM domain",
          options: [
            optApmDomainId,
            {
              name: "--display-name",
              description: "Display name of the APM domain",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the APM domain",
              args: { name: "description" },
            },
            {
              name: "--log-group-id",
              description:
                "The OCID of the Log Analytics log group to which the data uploaded to this APM domain will be mapped to",
              args: { name: "log-group-id" },
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
      name: "data-key",
      description:
        "The information about a Data Key, including the Data Key's value",
      subcommands: [
        {
          name: "generate",
          description:
            "Generates a set of new Data Keys for the specified APM domain with the specified names and types",
          options: [
            {
              name: "--generate-data-keys-list-details",
              description: "List of new Data Keys to be generated",
              args: { name: "json" },
              isRequired: true,
            },
            optApmDomainId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all Data Keys for the specified APM domain",
          options: [
            optApmDomainId,
            {
              name: "--data-key-type",
              description: "Data key type",
              args: { suggestions: ["PRIVATE", "PUBLIC"] },
            },
            optAll,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Removes the set of specified Data Keys from the specified APM domain",
          options: [
            optApmDomainId,
            {
              name: "--remove-data-keys-list-details",
              description: "List of Data Keys to be removed",
              args: { name: "json" },
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
