// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optDiagnosisStoreId: Fig.Option = {
  name: "--diagnosis-store-id",
  description: "The OCID of the Diagnosis",
  args: { name: "diagnosis-store-id" },
  isRequired: true,
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
  name: "cluster-health",
  description: "ITV Control Plane - Diagnosis Store",
  subcommands: [
    {
      name: "diagnosis-store",
      description: "A DiagnosisStore is a description of a DiagnosisStore",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Diagnosis into a different compartment within the same tenancy",
          options: [
            optDiagnosisStoreId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Diagnosis to",
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
          description: "Creates a Diagnosis Store",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the Diagnosis in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--object-store-namespace",
              description: "A user-friendly name",
              args: { name: "object-store-namespace" },
            },
            {
              name: "--object-store-bucket",
              description: "A user-friendly name",
              args: { name: "object-store-bucket" },
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
          description: "Deletes a Diagnosis Store",
          options: [
            optDiagnosisStoreId,
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
          description: "Gets information about a Diagnosis Store",
          options: [optDiagnosisStoreId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of Diagnosis Stores",
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
              name: "--diagnosis-store-id",
              description: "The OCID of the Diagnosis",
              args: { name: "diagnosis-store-id" },
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
          description: "Updates a Diagnosis Store",
          options: [
            optDiagnosisStoreId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--object-store-namespace",
              description: "A user-friendly name",
              args: { name: "object-store-namespace" },
            },
            {
              name: "--object-store-bucket",
              description: "A user-friendly name",
              args: { name: "object-store-bucket" },
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
      name: "recommendation-report",
      description: "A recommendation report",
      subcommands: [
        {
          name: "query-diagnosis-by-health-check-key",
          description: "Query latest diagnosis result summaries",
          options: [
            optDiagnosisStoreId,
            {
              name: "--health-check-key",
              description: "Identifier of the health check",
              args: { name: "health-check-key" },
              isRequired: true,
            },
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
      name: "diagnosis-summary-collection",
      description: "A list of Diagnosis Summaries",
      subcommands: [
        {
          name: "query-diagnosis-summary",
          description: "Query latest diagnosis result summaries",
          options: [
            optDiagnosisStoreId,
            {
              name: "--instance-ids",
              description: "A list of instance OCIDs to match",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--test-type",
              description: "The test type, PASSIVE or ACTIVE",
              args: { suggestions: ["PASSIVE", "ACTIVE"] },
            },
            {
              name: "--time-test-run-interval-start",
              description:
                "Start of the time range for tests run, in RFC 3339 format",
              args: { name: "datetime" },
            },
            {
              name: "--time-test-run-interval-end",
              description:
                "End of the time range for tests run, in RFC 3339 format",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "diagnosis-results",
      description: "The results of requestDiagnosis",
      subcommands: [
        {
          name: "request-diagnosis",
          description: "Request a diagnosis to be analyzed",
          options: [
            optDiagnosisStoreId,
            {
              name: "--health-check-keys",
              description: "A list of health check IDs",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
