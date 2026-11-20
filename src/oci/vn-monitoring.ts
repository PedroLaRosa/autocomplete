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
const optPathAnalyzerTestId: Fig.Option = {
  name: "--path-analyzer-test-id",
  description: "The OCID of the PathAnalyzerTest resource",
  args: { name: "path-analyzer-test-id" },
  isRequired: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
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
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optProtocolParameters: Fig.Option = {
  name: "--protocol-parameters",
  args: { name: "json" },
};
const optQueryOptions: Fig.Option = {
  name: "--query-options",
  args: { name: "json" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "vn-monitoring",
  description: "Network Monitoring",
  subcommands: [
    {
      name: "work-request-error",
      description:
        "An error encountered while executing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of errors for the work request with the given ID",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
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
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources whose lifecycleState matches the given OperationStatus",
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
            },
            {
              name: "--resource-id",
              description:
                "The ID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-result",
      description: "Ephemeral data resulting from an asynchronous operation",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of results for a successful work request",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            {
              name: "--result-type",
              description: "The type of results to return",
              args: { suggestions: ["PATH_ANALYSIS"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "path-analyzer-test",
      description: "Defines the details saved in a PathAnalyzerTest resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a PathAnalyzerTest resource from one compartment to another based on the identifier",
          options: [
            optPathAnalyzerTestId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the PathAnalyzerTest resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new PathAnalyzerTest resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID for the PathAnalyzerTest resource's compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--protocol",
              description:
                "The IP protocol to use in the PathAnalyzerTest resource",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--source-endpoint",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--destination-endpoint",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            optProtocolParameters,
            optQueryOptions,
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
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a PathAnalyzerTest resource using its identifier",
          options: [
            optPathAnalyzerTestId,
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
          description: "Gets a PathAnalyzerTest using its identifier",
          options: [optPathAnalyzerTestId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a PathAnalyzerTest using its identifier",
          options: [
            optPathAnalyzerTestId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--protocol",
              description:
                "The IP protocol to use in the PathAnalyzerTest resource",
              args: { name: "integer" },
            },
            { name: "--source-endpoint", args: { name: "json" } },
            { name: "--destination-endpoint", args: { name: "json" } },
            optProtocolParameters,
            optQueryOptions,
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
        {
          name: "list",
          description:
            "Returns a list of all PathAnalyzerTests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns only resources whose lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--display-name",
              description:
                "A filter that returns only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "path-analysis",
      description: "Defines the configuration of the path analysis result",
      subcommands: [
        {
          name: "get-path-analysis-adhoc",
          description:
            "Use this method to initiate a Network Path Analyzer analysis",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID for the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--protocol",
              description: "The IP protocol to used for the path analysis",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--source-endpoint",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--destination-endpoint",
              args: { name: "json" },
              isRequired: true,
            },
            optProtocolParameters,
            optQueryOptions,
            {
              name: "--cache-control",
              description:
                "The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses",
              args: { name: "cache-control" },
            },
            {
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
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-path-analysis-persisted",
          description:
            "Use this method to initiate a Network Path Analyzer analysis",
          options: [
            optPathAnalyzerTestId,
            {
              name: "--cache-control",
              description:
                "The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses",
              args: { name: "cache-control" },
            },
            {
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
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log",
      description:
        "A log message from executing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of logs for the work request with the given ID",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
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
