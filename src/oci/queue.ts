// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optQueueId: Fig.Option = {
  name: "--queue-id",
  description: "The unique queue identifier",
  args: { name: "queue-id" },
  isRequired: true,
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
const optConsumerGroupId: Fig.Option = {
  name: "--consumer-group-id",
  description: "Optional parameter to specify a consumer group",
  args: { name: "consumer-group-id" },
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
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDlqDeliveryCount: Fig.Option = {
  name: "--dlq-delivery-count",
  description:
    "The number of times a message can be delivered to a consumer before being moved to the dead letter queue",
  args: { name: "integer" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optConsumerGroupId2: Fig.Option = {
  name: "--consumer-group-id",
  description: "The unique consumer group identifier",
  args: { name: "consumer-group-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "queue",
  description: "Queue",
  subcommands: [
    {
      name: "messages",
      description: "A message consumed from a queue",
      subcommands: [
        {
          name: "delete-message",
          description:
            "Deletes the message represented by the receipt from the queue",
          options: [
            optQueueId,
            {
              name: "--message-receipt",
              description:
                "The receipt of the message retrieved from a GetMessages call",
              args: { name: "message-receipt" },
              isRequired: true,
            },
            optConsumerGroupId,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "delete-messages",
          description:
            "Deletes multiple messages from the queue or the consumer group",
          options: [
            optQueueId,
            {
              name: "--entries",
              description: "The array of messages to delete from a queue",
              args: { name: "json" },
              isRequired: true,
            },
            optConsumerGroupId,
            optFromJson,
          ],
        },
        {
          name: "get-messages",
          description: "Consumes messages from the queue",
          options: [
            optQueueId,
            {
              name: "--visibility-in-seconds",
              description:
                "If the visibilityInSeconds parameter is set, messages will be hidden for visibilityInSeconds seconds",
              args: { name: "integer" },
            },
            {
              name: "--timeout-in-seconds",
              description:
                "If the timeoutInSeconds parameter isn't set or it is set to a value greater than 0",
              args: { name: "integer" },
            },
            {
              name: "--limit",
              description:
                "The limit parameter controls how many messages is returned at-most",
              args: { name: "integer" },
            },
            {
              name: "--channel-filter",
              description: "Optional parameter to filter the channels",
              args: { name: "channel-filter" },
            },
            optConsumerGroupId,
            optFromJson,
          ],
        },
        {
          name: "update-messages",
          description:
            "Updates multiple messages in the queue or the consumer group",
          options: [
            optQueueId,
            {
              name: "--entries",
              description: "The array of messages to update in a queue",
              args: { name: "json" },
              isRequired: true,
            },
            optConsumerGroupId,
            optFromJson,
          ],
        },
        {
          name: "put-messages",
          description: "Puts messages into the queue",
          options: [
            optQueueId,
            {
              name: "--messages",
              description: "The array of messages to put into a queue",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-stats",
          description:
            "Gets the statistics for the queue and its dead letter queue",
          options: [
            optQueueId,
            {
              name: "--channel-id",
              description: "Id to specify channel",
              args: { name: "channel-id" },
            },
            optConsumerGroupId,
            optFromJson,
          ],
        },
        {
          name: "update-message",
          description:
            "Updates the visibility of the message represented by the receipt",
          options: [
            optQueueId,
            {
              name: "--message-receipt",
              description:
                "The receipt of the message retrieved from a GetMessages call",
              args: { name: "message-receipt" },
              isRequired: true,
            },
            {
              name: "--visibility-in-seconds",
              description:
                "The new visibility of the message relative to the current time",
              args: { name: "integer" },
              isRequired: true,
            },
            optConsumerGroupId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "channels",
      description: "List of IDs of non-empty channels",
      subcommands: [
        {
          name: "list-channels",
          description: "Gets the list of IDs of non-empty channels",
          options: [
            optQueueId,
            optConsumerGroupId,
            optLimit,
            optPage,
            {
              name: "--channel-filter",
              description: "Optional parameter to filter the channels",
              args: { name: "channel-filter" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "queue-admin",
      description:
        "Use the Queue CLI to produce and consume messages, create queues, and manage related items",
      subcommands: [
        {
          name: "consumer-group",
          description: "A detailed representation of a consumer group",
          subcommands: [
            {
              name: "create",
              description: "Creates a new consumer group",
              options: [
                {
                  name: "--display-name",
                  description: "The user-friendly name of the consumer group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--queue-id",
                  description: "The OCID of the associated queue",
                  args: { name: "queue-id" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description: "The filter used by the consumer group",
                  args: { name: "filter" },
                },
                {
                  name: "--is-enabled",
                  description: "Used to enable or disable the consumer group",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optDlqDeliveryCount,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes a consumer group resource by identifier",
              options: [
                optConsumerGroupId2,
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
              description: "Gets a consumer group by identifier",
              options: [optConsumerGroupId2, optFromJson],
            },
            {
              name: "update",
              description: "Updates the specified consumer group",
              options: [
                optConsumerGroupId2,
                {
                  name: "--display-name",
                  description: "The OCID of the consumer group",
                  args: { name: "display-name" },
                },
                {
                  name: "--filter",
                  description: "The filter used by the consumer group",
                  args: { name: "filter" },
                },
                {
                  name: "--is-enabled",
                  description: "Used to enable or disable the consumer group",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform update without prompting for confirmation",
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optDlqDeliveryCount,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "consumer-group-collection",
          description: "Results of a consumer group search",
          subcommands: [
            {
              name: "list-consumer-groups",
              description: "Returns a list of consumer groups",
              options: [
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "CREATING",
                      "UPDATING",
                      "ACTIVE",
                      "DELETING",
                      "DELETED",
                      "FAILED",
                      "INACTIVE",
                    ],
                  },
                },
                {
                  name: "--display-name",
                  description:
                    "A filter to return only resources that match the entire display name given",
                  args: { name: "display-name" },
                },
                {
                  name: "--id",
                  description: "The unique consumer group identifier",
                  args: { name: "id" },
                },
                {
                  name: "--queue-id",
                  description: "The unique queue identifier",
                  args: { name: "queue-id" },
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
          ],
        },
        {
          name: "work-request",
          description: "A description of workrequest status",
          subcommands: [
            {
              name: "get",
              description:
                "Gets the status of the work request with the given ID",
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
                  description: "The ID of the asynchronous work request",
                  args: { name: "work-request-id" },
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
          name: "queue",
          description:
            "A detailed representation of a queue and its configuration",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a queue from one compartment to another",
              options: [
                optQueueId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment into which the resource should be moved",
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
              description: "Creates a new queue",
              options: [
                {
                  name: "--display-name",
                  description: "The user-friendly name of the queue",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment containing the queue",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--retention-in-seconds",
                  description:
                    "The retention period of messages in the queue, in seconds",
                  args: { name: "integer" },
                },
                {
                  name: "--visibility-in-seconds",
                  description:
                    "The default visibility timeout of the messages consumed from the queue, in seconds",
                  args: { name: "integer" },
                },
                {
                  name: "--timeout-in-seconds",
                  description:
                    "The default polling timeout of the messages in the queue, in seconds",
                  args: { name: "integer" },
                },
                {
                  name: "--channel-consumption-limit",
                  description:
                    "The percentage of allocated queue resources that can be consumed by a single channel",
                  args: { name: "integer" },
                },
                {
                  name: "--capabilities",
                  description: "The capability to add on the queue",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--custom-key",
                  description:
                    "The OCID of the custom encryption key to be used to encrypt messages content",
                  args: { name: "custom-key" },
                },
                optDlqDeliveryCount,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes a queue resource by identifier",
              options: [
                optQueueId,
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
              description: "Gets a queue by identifier",
              options: [optQueueId, optFromJson],
            },
            {
              name: "purge",
              description:
                "Deletes all messages present in the queue or in the specified consumer group",
              options: [
                optQueueId,
                {
                  name: "--purge-type",
                  description:
                    "Type of the purge to perform: - NORMAL - purge only the normal queue - DLQ",
                  args: { suggestions: ["NORMAL", "DLQ", "BOTH"] },
                  isRequired: true,
                },
                {
                  name: "--channel-ids",
                  description:
                    "Optional parameter to specify the destination of purge operation",
                  args: { name: "json" },
                },
                {
                  name: "--consumer-group-id",
                  description: "The consumer group ID to purge",
                  args: { name: "consumer-group-id" },
                },
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the specified queue",
              options: [
                optQueueId,
                {
                  name: "--display-name",
                  description: "The OCID of the queue",
                  args: { name: "display-name" },
                },
                {
                  name: "--visibility-in-seconds",
                  description:
                    "The default visibility timeout of the messages consumed from the queue, in seconds",
                  args: { name: "integer" },
                },
                {
                  name: "--timeout-in-seconds",
                  description:
                    "The default polling timeout of the messages in the queue, in seconds",
                  args: { name: "integer" },
                },
                {
                  name: "--channel-consumption-limit",
                  description:
                    "The percentage of allocated queue resources that can be consumed by a single channel",
                  args: { name: "integer" },
                },
                {
                  name: "--capabilities",
                  description: "The list of capabilities enabled on the queue",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform update without prompting for confirmation",
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--custom-key",
                  description:
                    "Id of the custom master encryption key which will be used to encrypt messages content",
                  args: { name: "custom-key" },
                },
                optDlqDeliveryCount,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Returns a list of queues",
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
                    "A filter to return only resources their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "CREATING",
                      "UPDATING",
                      "ACTIVE",
                      "DELETING",
                      "DELETED",
                      "FAILED",
                      "INACTIVE",
                    ],
                  },
                },
                {
                  name: "--display-name",
                  description:
                    "A filter to return only resources that match the entire display name given",
                  args: { name: "display-name" },
                },
                {
                  name: "--id",
                  description: "The unique queue identifier",
                  args: { name: "id" },
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
          ],
        },
        {
          name: "work-request-error",
          description: "Results of a workRequestError search",
          subcommands: [
            {
              name: "list",
              description:
                "Return a (paginated) list of errors for a given work request",
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
          name: "work-request-log",
          description: "Results of a workRequestLog search",
          subcommands: [
            {
              name: "list",
              description:
                "Return a (paginated) list of logs for a given work request",
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
    },
  ],
};

export default completionSpec;
