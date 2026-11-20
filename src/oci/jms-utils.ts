// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const completionSpec: Fig.Spec = {
  name: "jms-utils",
  description: "Java Management Service Utilities",
  subcommands: [
    {
      name: "performance-tuning-analysis",
      description:
        "To use any of the API operations, you must be authorized by an IAM policy",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a Performance Tuning Analysis",
          options: [
            {
              name: "--performance-tuning-analysis-id",
              description: "The OCID of the Performance Tuning Analysis",
              args: { name: "performance-tuning-analysis-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a Performance Tuning Analysis",
          options: [
            {
              name: "--performance-tuning-analysis-id",
              description: "The OCID of the Performance Tuning Analysis",
              args: { name: "performance-tuning-analysis-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of Performance tuning Analysis",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The OCID of the Performance Tuning Analysis",
              args: { name: "id" },
            },
            {
              name: "--analysis-project-name",
              description:
                "The project name of the Performance Tuning Analysis to query for",
              args: { name: "analysis-project-name" },
            },
            {
              name: "--performance-tuning-analysis-result",
              description:
                "The result of the Performance Tuning Analysis to query for",
              args: { suggestions: ["ACTION_RECOMMENDED", "NO_WARNINGS"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort Performance Tuning Analysis",
              args: {
                suggestions: ["TIME_CREATED", "TIME_STARTED", "TIME_FINISHED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "request",
          description: "Requests Performance Tuning Analysis",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the Performance Tuning Analysis will be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--targets",
              description:
                "The list of targets for the Performance Tuning Analysis",
              args: { name: "json" },
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
            {
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
            },
            {
              name: "--max-wait-seconds",
              description:
                "Maximum time to wait for the --wait-for-state state (default 1200)",
              args: { name: "integer" },
            },
            {
              name: "--wait-interval-seconds",
              description:
                "Check interval for --wait-for-state in seconds (default 30)",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "analyze-applications-configuration",
      description: "The configuration for analyzing applications",
      subcommands: [
        {
          name: "get",
          description: "Returns the configuration for analyzing applications",
          options: [optCompartmentId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the configuration for analyze application",
          options: [
            {
              name: "--namespace-name",
              description:
                "The Object Storage namespace used for analyzing applications",
              args: { name: "namespace-name" },
            },
            {
              name: "--bucket-name",
              description:
                "The name of the bucket used for analyzing applications",
              args: { name: "bucket-name" },
            },
            optCompartmentId,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-item-summary",
      description: "Work item to complete a work request",
      subcommands: [
        {
          name: "list-work-items",
          description:
            "Retrieve a paginated list of work items for a specified work request",
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
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
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
      ],
    },
    {
      name: "java-migration-analysis",
      description:
        "To use any of the API operations, you must be authorized by an IAM policy",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a Java Migration Analysis",
          options: [
            {
              name: "--java-migration-analysis-id",
              description: "The OCID of the Java Migration Analysis",
              args: { name: "java-migration-analysis-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a Java Migration Analysis",
          options: [
            {
              name: "--java-migration-analysis-id",
              description: "The OCID of the Java Migration Analysis",
              args: { name: "java-migration-analysis-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of Java Migration Analysis",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The OCID of the Java Migration Analysis",
              args: { name: "id" },
            },
            {
              name: "--analysis-project-name",
              description:
                "The project name of the Performance Tuning Analysis to query for",
              args: { name: "analysis-project-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort Java Migration Analysis",
              args: {
                suggestions: ["TIME_CREATED", "TIME_STARTED", "TIME_FINISHED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "request",
          description: "Requests Java Migration Analysis",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the Java Migration Analysis will be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--targets",
              description:
                "The list of targets for the Java Migration Analysis",
              args: { name: "json" },
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
            {
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
            },
            {
              name: "--max-wait-seconds",
              description:
                "Maximum time to wait for the --wait-for-state state (default 1200)",
              args: { name: "integer" },
            },
            {
              name: "--wait-interval-seconds",
              description:
                "Check interval for --wait-for-state in seconds (default 30)",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subscription-acknowledgment-configuration",
      description: "The configuration for subscription acknowledgment",
      subcommands: [
        {
          name: "get",
          description:
            "Returns the configuration for subscription acknowledgment",
          options: [optCompartmentId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the configuration for subscription acknowledgment",
          options: [
            {
              name: "--is-acknowledged",
              description:
                "Flag to determine whether the subscription was acknowledged or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCompartmentId,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
