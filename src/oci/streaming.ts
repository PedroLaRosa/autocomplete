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
const optStreamId: Fig.Option = {
  name: "--stream-id",
  description: "The OCID of the stream",
  args: { name: "stream-id" },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "The page at which to start retrieving results",
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
const optConnectHarnessId: Fig.Option = {
  name: "--connect-harness-id",
  description: "The OCID of the connect harness",
  args: { name: "connect-harness-id" },
  isRequired: true,
};
const optStreamPoolId: Fig.Option = {
  name: "--stream-pool-id",
  description: "The OCID of the stream pool",
  args: { name: "stream-pool-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optId: Fig.Option = {
  name: "--id",
  description:
    "A filter to return only resources that match the given ID exactly",
  args: { name: "id" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to only return resources that match the given lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
      "UPDATING",
    ],
  },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only resources that match the given name exactly",
  args: { name: "name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["NAME", "TIMECREATED"] },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMEACCEPTED"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "streaming",
  description: "Streaming",
  subcommands: [
    {
      name: "stream",
      description:
        "Use the Streaming CLI to produce and consume messages, create streams and stream pools",
      subcommands: [
        {
          name: "cursor",
          description:
            "A cursor that indicates the position in the stream from which you want to begin consuming messages and",
          subcommands: [
            {
              name: "create-cursor",
              description: "Creates a cursor",
              options: [
                optStreamId,
                {
                  name: "--partition",
                  description: "The partition to get messages from",
                  args: { name: "partition" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description:
                    "The type of cursor, which determines the starting point from which the stream will be consumed",
                  args: {
                    suggestions: [
                      "AFTER_OFFSET",
                      "AT_OFFSET",
                      "AT_TIME",
                      "LATEST",
                      "TRIM_HORIZON",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--offset",
                  description:
                    "The offset to consume from if the cursor type is AT_OFFSET or AFTER_OFFSET",
                  args: { name: "integer" },
                },
                {
                  name: "--time",
                  description:
                    "The time to consume from if the cursor type is AT_TIME, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                },
                optFromJson,
              ],
            },
            {
              name: "create-group-cursor",
              description: "Creates a group-cursor",
              options: [
                optStreamId,
                {
                  name: "--type",
                  description: "The type of the cursor",
                  args: { suggestions: ["AT_TIME", "LATEST", "TRIM_HORIZON"] },
                  isRequired: true,
                },
                {
                  name: "--group-name",
                  description: "Name of the consumer group",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--time",
                  description: "The time to consume from if type is AT_TIME",
                  args: { name: "datetime" },
                },
                {
                  name: "--instance-name",
                  description:
                    "A unique identifier for the instance joining the consumer group",
                  args: { name: "instance-name" },
                },
                {
                  name: "--timeout-in-ms",
                  description:
                    "The amount of a consumer instance inactivity time, before partition reservations are released",
                  args: { name: "integer" },
                },
                {
                  name: "--commit-on-get",
                  description:
                    "When using consumer-groups, the default commit-on-get behaviour can be overriden by setting this value",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "message",
          description: "A message in a stream",
          subcommands: [
            {
              name: "get",
              description:
                "Returns messages from the specified stream using the specified cursor as the starting point for consumption",
              options: [
                optStreamId,
                {
                  name: "--cursor",
                  description: "The cursor used to consume the stream",
                  args: { name: "cursor" },
                  isRequired: true,
                },
                {
                  name: "--limit",
                  description: "The maximum number of messages to return",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
            {
              name: "put",
              description: "Emits messages to a stream",
              options: [
                optStreamId,
                {
                  name: "--messages",
                  description: "The array of messages to put into a stream",
                  args: { name: "json" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "group",
          description:
            "Represents the current state of a consumer group, including partition reservations and committed offsets",
          subcommands: [
            {
              name: "get",
              description: "Returns the current state of a consumer group",
              options: [
                optStreamId,
                {
                  name: "--group-name",
                  description: "The name of the consumer group",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Forcefully changes the current location of a group as a whole",
              options: [
                optStreamId,
                {
                  name: "--group-name",
                  description: "The name of the consumer group",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "The type of the cursor",
                  args: { suggestions: ["AT_TIME", "LATEST", "TRIM_HORIZON"] },
                },
                {
                  name: "--time",
                  description: "The time to consume from if type is AT_TIME",
                  args: { name: "datetime" },
                },
                optFromJson,
              ],
            },
            {
              name: "heartbeat",
              description:
                "Allows long-running processes to extend the timeout on partitions reserved by a consumer instance",
              options: [
                optStreamId,
                {
                  name: "--cursor",
                  description:
                    "The group-cursor representing the offsets of the group",
                  args: { name: "cursor" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "commit",
              description:
                "Provides a mechanism to manually commit offsets, if not using commit-on-get consumer semantics",
              options: [
                optStreamId,
                {
                  name: "--cursor",
                  description:
                    "The group-cursor representing the offsets of the group",
                  args: { name: "cursor" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "admin",
      description:
        "Use the Streaming CLI to produce and consume messages, create streams and stream pools",
      subcommands: [
        {
          name: "work-request-error-collection",
          description: "A list of work request errors",
          subcommands: [
            {
              name: "list-work-request-errors",
              description: "Lists the errors for a work request",
              options: [
                optWorkRequestId,
                optPage,
                optLimit,
                optSortOrder,
                optSortBy2,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "stream-pool",
          description: "The details of a stream pool",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a resource into a different compartment",
              options: [
                optStreamPoolId,
                optCompartmentId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Starts the provisioning of a new stream pool",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that contains the stream",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "The name of the stream pool",
                  args: { name: "name" },
                  isRequired: true,
                },
                { name: "--kafka-settings", args: { name: "json" } },
                {
                  name: "--custom-encryption-key-details",
                  args: { name: "json" },
                },
                { name: "--private-endpoint-details", args: { name: "json" } },
                optFreeformTags,
                {
                  name: "--security-attributes",
                  description: "Security attributes for this resource",
                  args: { name: "json" },
                },
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes a stream pool",
              options: [
                optStreamPoolId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets detailed information about the stream pool, such as Kafka settings",
              options: [optStreamPoolId, optFromJson],
            },
            {
              name: "list",
              description: "List the stream pools for a given compartment ID",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optId,
                optName,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optLifecycleState,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the specified stream pool",
              options: [
                optStreamPoolId,
                {
                  name: "--name",
                  description: "The name of the stream pool",
                  args: { name: "name" },
                },
                { name: "--kafka-settings", args: { name: "json" } },
                {
                  name: "--custom-encryption-key-details",
                  args: { name: "json" },
                },
                optFreeformTags,
                {
                  name: "--security-attributes",
                  description: "Security attributes for this resource",
                  args: { name: "json" },
                },
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "stream",
          description:
            "Detailed representation of a stream, including all its partitions",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a resource into a different compartment",
              options: [
                optStreamId,
                optCompartmentId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Starts the provisioning of a new stream",
              options: [
                {
                  name: "--name",
                  description: "The name of the stream",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--partitions",
                  description: "The number of partitions in the stream",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that contains the stream",
                  args: { name: "compartment-id" },
                },
                {
                  name: "--stream-pool-id",
                  description:
                    "The OCID of the stream pool that contains the stream",
                  args: { name: "stream-pool-id" },
                },
                {
                  name: "--retention-in-hours",
                  description: "The retention period of the stream, in hours",
                  args: { name: "integer" },
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes a stream and its content",
              options: [
                optStreamId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets detailed information about a stream, including the number of partitions",
              options: [optStreamId, optFromJson],
            },
            {
              name: "list",
              description: "Lists the streams in the given compartment id",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  args: { name: "compartment-id" },
                },
                {
                  name: "--stream-pool-id",
                  description: "The OCID of the stream pool",
                  args: { name: "stream-pool-id" },
                },
                optId,
                optName,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optLifecycleState,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the stream",
              options: [
                optStreamId,
                {
                  name: "--stream-pool-id",
                  description:
                    "The OCID of the stream pool where the stream should be moved",
                  args: { name: "stream-pool-id" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "work-request-summary-collection",
          description: "A list of work requests",
          subcommands: [
            {
              name: "list-work-requests",
              description: "Lists the work requests in a compartment",
              options: [
                {
                  name: "--work-request-id",
                  description: "The OCID of the asynchronous work request",
                  args: { name: "work-request-id" },
                },
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  args: { name: "compartment-id" },
                },
                optPage,
                optLimit,
                optSortOrder,
                optSortBy2,
                {
                  name: "--resource-id",
                  description:
                    "The OCID of the resource affected by the work request",
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
          name: "connect-harness",
          description: "Detailed representation of a connect harness",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a resource into a different compartment",
              options: [
                optConnectHarnessId,
                optCompartmentId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Starts the provisioning of a new connect harness",
              options: [
                {
                  name: "--name",
                  description: "The name of the connect harness",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that contains the connect harness",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes a connect harness and its content",
              options: [
                optConnectHarnessId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets detailed information about a connect harness",
              options: [optConnectHarnessId, optFromJson],
            },
            {
              name: "list",
              description: "Lists the connectharness",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optId,
                optName,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optLifecycleState,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the tags applied to the connect harness",
              options: [
                optConnectHarnessId,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
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
                optSortOrder,
                optSortBy2,
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
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
