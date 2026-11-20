// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optApmDomainId: Fig.Option = {
  name: "--apm-domain-id",
  description: "The APM Domain ID for the intended request",
  args: { name: "apm-domain-id" },
  isRequired: true,
};
const optTraceKey: Fig.Option = {
  name: "--trace-key",
  description:
    "Unique Application Performance Monitoring trace identifier (traceId)",
  args: { name: "trace-key" },
  isRequired: true,
};
const optId: Fig.Option = {
  name: "--id",
  description: "Id of the scheduled query. required",
  args: { name: "id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
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
    "The page token representing the page where to start retrieving results",
  args: { name: "page" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
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
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const completionSpec: Fig.Spec = {
  name: "apm-traces",
  description: "Application Performance Monitoring Trace Explorer",
  subcommands: [
    {
      name: "trace",
      description:
        "Use the Application Performance Monitoring Trace Explorer CLI to query traces and associated spans in Trace",
      subcommands: [
        {
          name: "trace",
          description: "Definition of a trace object",
          subcommands: [
            {
              name: "get",
              description: "Gets the trace details identified by traceId",
              options: [
                optApmDomainId,
                optTraceKey,
                {
                  name: "--trace-namespace",
                  description:
                    "Name space from which the trace details need to be retrieved",
                  args: { suggestions: ["TRACES", "SYNTHETIC"] },
                },
                {
                  name: "--time-trace-started-gte",
                  description:
                    "Include traces that have a minTraceStartTime equal to or greater than this value",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-trace-started-lt",
                  description:
                    "Include traces that have a minTraceStartTime less than this value",
                  args: { name: "datetime" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "aggregated-snapshot",
          description: "Aggregated snapshots of all spans",
          subcommands: [
            {
              name: "get",
              description:
                "Gets the aggregated snapshot identified by trace ID",
              options: [
                optApmDomainId,
                optTraceKey,
                {
                  name: "--service-name",
                  description: "Name associated with the service",
                  args: { name: "service-name" },
                },
                {
                  name: "--server-name",
                  description: "Name of the server",
                  args: { name: "server-name" },
                },
                {
                  name: "--span-key",
                  description:
                    "Unique Application Performance Monitoring span identifier (spanId)",
                  args: { name: "span-key" },
                },
                {
                  name: "--span-name",
                  description: "Name of the span associated with the trace",
                  args: { name: "span-name" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "log",
          description: "Definition of a log object",
          subcommands: [
            {
              name: "get",
              description: "Retrieve a log in the APM Domain",
              options: [
                optApmDomainId,
                {
                  name: "--log-key",
                  description: "Log key",
                  args: { name: "log-key" },
                  isRequired: true,
                },
                {
                  name: "--start-time-lt",
                  description:
                    "Include logs with log time less than this value",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--start-time-gte",
                  description:
                    "Include logs with log time greater than or equal to this value",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "trace-snapshot",
          description: "Definition of a trace snapshot object",
          subcommands: [
            {
              name: "get",
              description:
                "Gets the trace snapshots data identified by trace ID",
              options: [
                optApmDomainId,
                optTraceKey,
                {
                  name: "--is-summarized",
                  description: "If enabled, only span level details are sent",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--thread-id",
                  description:
                    "Thread ID for which snapshots need to be retrieved",
                  args: { name: "thread-id" },
                },
                {
                  name: "--snapshot-time",
                  description: "Epoch time of snapshot",
                  args: { name: "snapshot-time" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "span",
          description: "Definition of a span object",
          subcommands: [
            {
              name: "get",
              description: "Gets the span details identified by spanId",
              options: [
                optApmDomainId,
                {
                  name: "--span-key",
                  description:
                    "Unique Application Performance Monitoring span identifier (spanId)",
                  args: { name: "span-key" },
                  isRequired: true,
                },
                optTraceKey,
                {
                  name: "--span-namespace",
                  description:
                    "Name space from which the span details need to be retrieved",
                  args: { suggestions: ["TRACES", "SYNTHETIC"] },
                },
                {
                  name: "--time-span-started-gte",
                  description:
                    "Include spans that have a spanStartTime equal to or greater than this value",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-span-started-lt",
                  description:
                    "Include spans that have a spanStartTimeless than this value",
                  args: { name: "datetime" },
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "attributes",
      description:
        "Use the Application Performance Monitoring Trace Explorer CLI to query traces and associated spans in Trace",
      subcommands: [
        {
          name: "auto-activate-status",
          description:
            "Get autoactivation status for a private data key or public data key in the APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--data-key-type",
              description:
                "Data key type for which auto-activate needs to be turned on or off",
              args: { suggestions: ["PRIVATE_DATA_KEY", "PUBLIC_DATA_KEY"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-auto-activate",
          description:
            "Turn on or off autoactivate for private data key or public data key traffic a given APM Domain",
          options: [
            {
              name: "--apm-domain-id",
              description:
                "The APM Domain ID for the intended request. required",
              args: { name: "apm-domain-id" },
              isRequired: true,
            },
            {
              name: "--data-key-type",
              description:
                "Data key type for which auto-activate needs to be turned on or off. required",
              args: { suggestions: ["PRIVATE_DATA_KEY", "PUBLIC_DATA_KEY"] },
              isRequired: true,
            },
            {
              name: "--auto-activate-value",
              description: "Auto activate toggle switch",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "activate",
          description: "Activates a set of attributes for the given APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--attribute-details",
              description:
                "Collection of objects containing the details about individual attribute to be activated",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description:
            "Deactivates a set of attributes for the given APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--attribute-details",
              description:
                "Collection of objects containing the details about individual attribute to be de-activated",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "pin",
          description: "Pin a set of attributes in the APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--attribute-details",
              description:
                "Collection of objects containing the details about individual attribute to be pinned",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "unpin",
          description: "Unpin a set of attributes in the APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--attribute-details",
              description:
                "Collection of objects containing the details about individual attribute to be un-pinned",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-notes",
          description:
            "Add or edit notes to a set of attributes in the APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--attribute-details",
              description:
                "Collection of objects containing the details about individual attribute for which notes are to be updated",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-attribute",
          description: "Update a set of attribute properties in the APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--attribute-details",
              description:
                "Collection of objects containing the details about individual attribute for which unit is to be updated",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "query",
      description:
        "Use the Application Performance Monitoring Trace Explorer CLI to query traces and associated spans in Trace",
      subcommands: [
        {
          name: "query-response",
          description:
            "A response containing a collection of query rows (selected attributes and aggregations) filtered",
          subcommands: [
            {
              name: "run-query",
              description:
                "Retrieves the results (selected attributes and aggregations) of a query constructed according to",
              options: [
                optApmDomainId,
                {
                  name: "--query-text",
                  description:
                    "Application Performance Monitoring defined query string that filters and retrieves trace data results",
                  args: { name: "query-text" },
                },
                optLimit,
                optPage,
                {
                  name: "--start-time-gte",
                  description:
                    "Include spans that have a spanStartTime equal to or greater this value",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--start-time-lt",
                  description:
                    "Include spans that have a spanStartTimeless than this value",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "quick-picks",
          description: "Summary of the Quick Pick query objects",
          subcommands: [
            {
              name: "list",
              description:
                "Returns a list of predefined Quick Pick queries intended to assist the user to choose a query to run",
              options: [
                optApmDomainId,
                optLimit,
                optPage,
                { name: "--all", description: "Fetches all pages of results" },
                {
                  name: "--page-size",
                  description:
                    "When fetching results, the number of results to fetch per call",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "scheduled-query",
      description:
        "Use the Application Performance Monitoring Trace Explorer CLI to query traces and associated spans in Trace",
      subcommands: [
        {
          name: "create",
          description: "Create a scheduled query in the APM Domain",
          options: [
            optApmDomainId,
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
              name: "--opc-dry-run",
              description:
                'Indicates that the request is a dry run, if set to "true"',
              args: { name: "opc-dry-run" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--text",
              description: "Scheduled query to be run",
              args: { name: "text" },
            },
            {
              name: "--schedule",
              description: "Schedule for the scheduled query",
              args: { name: "schedule" },
            },
            {
              name: "--retention-period-in-ms",
              description:
                "Retention period for the scheduled query in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--retention-criteria",
              description: "Retention criteria for the scheduled query",
              args: {
                suggestions: ["KEEP_DATA_UNTIL_RETENTION_PERIOD", "UPDATE"],
              },
            },
            {
              name: "--processing-type",
              description: "Type of the scheduled query",
              args: { suggestions: ["EXPORT", "QUERY", "ALERT"] },
            },
            {
              name: "--processing-sub-type",
              description: "Processing sub type of the scheduled query",
              args: {
                suggestions: [
                  "OBJECT_STORAGE",
                  "STREAMING",
                  "CUSTOM_METRIC",
                  "NONE",
                ],
              },
            },
            {
              name: "--processing-configuration",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--name",
              description: "Name of the scheduled query",
              args: { name: "name" },
            },
            {
              name: "--maximum-runtime-in-seconds",
              description: "Maximum runtime for the scheduled query in seconds",
              args: { name: "integer" },
            },
            {
              name: "--description",
              description: "Description for the scheduled query",
              args: { name: "description" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a scheduled query in the APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieve a scheduled query in the APM Domain",
          options: [optApmDomainId, optId, optFromJson],
        },
        {
          name: "update",
          description: "Update a scheduled query in the APM Domain",
          options: [
            optApmDomainId,
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
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            {
              name: "--opc-dry-run",
              description:
                'Indicates that the request is a dry run, if set to "true"',
              args: { name: "opc-dry-run" },
            },
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--processing-type",
              description: "Type of the scheduled query",
              args: { suggestions: ["EXPORT", "QUERY", "ALERT"] },
            },
            {
              name: "--processing-sub-type",
              description: "Processing sub type of the scheduled query",
              args: {
                suggestions: [
                  "OBJECT_STORAGE",
                  "STREAMING",
                  "CUSTOM_METRIC",
                  "NONE",
                ],
              },
            },
            {
              name: "--processing-configuration",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--name",
              description: "Name of the scheduled query",
              args: { name: "name" },
            },
            {
              name: "--maximum-runtime-in-seconds",
              description: "Maximum runtime for the scheduled query in seconds",
              args: { name: "integer" },
            },
            {
              name: "--description",
              description: "Description for the scheduled query",
              args: { name: "description" },
            },
            optId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of all scheduled queries in the APM Domain",
          options: [
            optApmDomainId,
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "SCHEDULED_QUERY_NAME",
                  "SCHEDULED_QUERY_TYPE",
                  "SCHEDULED_QUERY_SUB_TYPE",
                  "SCHEDULED_QUERY_NEXT_RUN",
                  "SCHEDULED_QUERY_SCHEDULE",
                ],
              },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            {
              name: "--name",
              description:
                "A filter to return resources that match the given display name",
              args: { name: "name" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
