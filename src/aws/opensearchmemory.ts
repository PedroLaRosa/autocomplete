const completionSpec: Fig.Spec = {
  name: "opensearchmemory",
  description:
    "Amazon OpenSearch Memory lets your AI agents and applications recall facts and summaries across sessions. Your agents send events, such as conversation turns, and search the memories derived from them. A space groups related events and memories, and holds the memory strategies that you configure for them. Use the space operations to create, get, list, update, and delete spaces. Use the event and memory operations to write, read, list, search, update, and delete a space's events and memories",
  subcommands: [
    {
      name: "batch-get-event",
      description:
        "Gets up to 10 events by ID, each as GetEvent returns it, including its payload. If you supply actorId or sessionId, every requested event must match it. Each event has its own outcome. The operation reports an event that it can't return in errors instead of failing, with an error code named for the exception that GetEvent would return for it. The operation reports both an event that doesn't exist and an event outside the supplied scope as RESOURCE_NOT_FOUND. The exception is the space's customer managed AWS KMS key: if it is disabled, pending deletion, can't be used for decryption, or was deleted, the whole call fails with ValidationException, as GetEvent does",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description:
            "The actor that every requested event must belong to. Omit it to skip this check. The operation reports an event that doesn't match in errors as RESOURCE_NOT_FOUND",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The session that every requested event must belong to. Omit it to skip this check. The operation reports an event that doesn't match in errors as RESOURCE_NOT_FOUND",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-ids",
          description:
            "The IDs of the events to get: 1 to 10, without duplicates",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-event",
      description:
        "Submits an event (conversation turns, structured data, or a PDF document stored in Amazon S3) to a session in a space. The operation returns as soon as the event is saved. GetEvent and ListEvents return it immediately. SearchEvents returns it after it's indexed. SearchMemories returns memories extracted from it only after a strategy's extraction trigger fires and the memories are indexed. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description:
            "The ID of the space that owns the event, for example sp-02864597b164",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description:
            "The ID of the actor (end user or agent) that the event belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The session the event belongs to. Send every event of one conversation with the same session ID, so that SUMMARY strategies summarize the conversation as one session. If you omit it, the service generates a session ID and returns it",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-timestamp",
          description:
            "When the event occurred. The default is the time that the service receives the request",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--payload",
          description: "The event content. Set exactly one union member",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metadata",
          description:
            "Metadata tags to store with the event. Memories derived from the event carry the same tags. Keys that begin with x-amz-, the keys documentS3Source and documentS3Url, and other keys that the service uses internally are reserved: a request that sets one fails with ValidationException, and the message names the key. A space can use at most 50 distinct metadata keys across all of its events and memories. A request that would add a key beyond that fails with ValidationException. Reuse an existing key instead",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that makes the request idempotent. Within 2 hours of the first request, a retry with the same token and the same request, including the same sessionId, returns the same event. If you omit sessionId, the service generates a new one on each attempt, so a retry fails with ConflictException. Reusing the token with different request content also fails with ConflictException. eventTimestamp isn't compared. After 2 hours, the token starts a new event",
          args: {
            name: "string",
          },
        },
        {
          name: "--infer",
          description:
            "Specifies whether to extract memories from this event. The default is true. Set it to false to store the event without extraction: the service skips strategies that infer memories, and still indexes the event's turns for SearchEvents. A document submitted as a blob is still extracted",
        },
        {
          name: "--no-infer",
          description:
            "Specifies whether to extract memories from this event. The default is true. Set it to false to store the event without extraction: the service skips strategies that infer memories, and still indexes the event's turns for SearchEvents. A document submitted as a blob is still extracted",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-memory",
      description:
        "Writes a memory that you have already formed, without extracting it from events. The service embeds the text as given and stores it as a memory of the named strategy. To have the service extract memories from conversation turns, use CreateEvent instead. The operation returns before the memory is searchable. The returned memoryId is final, but until the memory is indexed, GetMemory, UpdateMemory, and DeleteMemory return ResourceNotFoundException for it. If the request would exceed the service's rate for embedding requests, it fails with ThrottlingException. Retry with exponential backoff. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description:
            "The ID of the space that owns the memory, for example sp-02864597b164",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the strategy that the memory belongs to. The space must already declare the strategy, and the memory's type comes from that strategy. The name must be 1 to 64 characters: letters, digits, periods, hyphens, and underscores, starting with a letter or digit",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description: "The memory text, stored and embedded as provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description: "The actor (end user or agent) that owns the memory",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The session that the memory belongs to. If you omit it, the service generates a session ID and returns it",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description:
            "Metadata tags to store with the memory. Keys that begin with x-amz-, the key documentS3Source, and other keys that the service uses internally are reserved: a request that sets one fails with ValidationException, and the message names the key. A space can use at most 50 distinct metadata keys across all of its events and memories. A request that would add a key beyond that fails with ValidationException. Reuse an existing key instead",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that makes the request idempotent. Within 2 hours of the first request, a retry with the same token returns the same memoryId instead of creating a second memory. Reusing the token with a different name, content, metadata, actorId, or sessionId fails with ConflictException. If you omit sessionId, a retry with the same token gets the same session. If you omit the token, each call creates a new memory",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-space",
      description:
        "Creates a space. A space is an AWS resource that stores the events you send and the memories extracted from them, and defines the memory strategies that extract those memories. The operation returns before provisioning finishes, with status CREATING. Call GetSpace until the status is ACTIVE, and then use the space. If provisioning fails, the status becomes FAILED and statusReason says why",
      options: [
        {
          name: "--name",
          description:
            "A name for the space, unique within your account in the Region. If another space already has the name, the request fails with ConflictException",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-strategies",
          description:
            "The memory strategies that extract memories from the space's events: up to 10 strategies, each with a name that is unique within the space. Optional. Omit it, or send an empty list, to create a space with no memory strategies. Such a space stores the conversation events you send it and returns them through SearchEvents and ListEvents, but extracts no memories and has none to search. You can add strategies later with UpdateSpace. The serialized list can be at most 384 KiB",
          args: {
            name: "list",
          },
        },
        {
          name: "--event-expiry-days",
          description:
            "How many days the space keeps each event, from 1 to 365. The default is 90",
          args: {
            name: "integer",
          },
        },
        {
          name: "--memory-expiry-days",
          description:
            "How many days the space keeps each memory, from 0 to 3650, counted from when the service writes the memory. Updating a memory with UpdateMemory doesn't restart the count. 0 means memories never expire. If you omit it, memories never expire. Searches and lists leave out a memory past its expiry, and reading, updating, or deleting it returns ResourceNotFoundException",
          args: {
            name: "integer",
          },
        },
        {
          name: "--extraction-model-id",
          description:
            "The model that extracts and consolidates memories for every strategy in the space, as an Amazon Bedrock model ID without an inference-profile prefix: anthropic.claude-opus-5-5 or anthropic.claude-haiku-5-5. Another value fails with ValidationException, and the message lists the supported IDs. Omit it to use the service default, which can change over time and isn't returned by GetSpace. Setting a value pins the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The AWS KMS key that encrypts the space's data. Omit it, or omit its kmsKeyArn, to use an AWS owned key. You can't change the key after you create the space",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags to add to the space",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that makes the request idempotent. A retry with the same token and the same parameters within 2 hours returns the space that the first request created, instead of creating another. Reusing the token with different parameters, or while the first request is still in progress, fails with ConflictException",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-event",
      description:
        "Deletes an event. Deletion can't be undone. The event stops appearing in SearchEvents results shortly after you delete it. Deleting an event that doesn't exist returns ResourceNotFoundException. Deleting an event doesn't delete the memories derived from it, because a memory can combine content from several events. To remove them, use DeleteMemory. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description: "The ID of the event to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description:
            "The actor that the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with ResourceNotFoundException, as if the event did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The session that the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with ResourceNotFoundException, as if the event did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-memory",
      description:
        "Deletes a memory, including its content and embedding. Deletion can't be undone. Searches stop returning the memory shortly after you delete it. Deleting a memory that no longer exists returns ResourceNotFoundException, so the operation is not idempotent. If you retry deletes, treat that error as success. A memory past its expiry (set from the space's memoryExpiryDays when the memory is written) reads as not found: the operation returns ResourceNotFoundException, as for a memory that was already deleted. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space that owns the memory",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-id",
          description: "The ID of the memory to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description:
            "The ID of the actor that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with ResourceNotFoundException, as if the memory did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--strategy-name",
          description:
            "The name of the strategy that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with ResourceNotFoundException, as if the memory did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-space",
      description:
        "Deletes a space and its memories. Deletion can't be undone. After you delete the space, you can't retrieve its events, and the service removes them when they reach their expiry. The operation returns with status DELETING. When deletion finishes, GetSpace returns ResourceNotFoundException. If deletion fails, the status becomes FAILED. A space that is CREATING or UPDATING can't be deleted until that finishes: the request fails with ConflictException. Deleting a space that is already DELETING returns DELETING again",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-event",
      description:
        "Gets an event by ID, including its payload. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description:
            "The event's ID, as returned by CreateEvent, ListEvents, or SearchEvents",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description:
            "The actor the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with ResourceNotFoundException, as if the event did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The session the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with ResourceNotFoundException, as if the event did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-memory",
      description:
        "Gets a memory by ID, as returned by SearchMemories or ListMemories. A memory that doesn't exist returns ResourceNotFoundException. Unlike SearchMemories, this operation also returns memories that consolidation has superseded. A memory past its expiry (set from the space's memoryExpiryDays when the memory is written) reads as not found: ResourceNotFoundException, the same answer as for an ID that does not exist. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space that holds the memory",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-id",
          description:
            "The memory's ID, as returned by SearchMemories or ListMemories",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description:
            "The ID of the actor the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with ResourceNotFoundException, as if the memory did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--strategy-name",
          description:
            "The name of the strategy the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with ResourceNotFoundException, as if the memory did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-space",
      description: "Returns a space's configuration and status",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-events",
      description:
        "Lists the events in a session, sorted by time. Optionally limit the results to events whose eventTimestamp falls between eventTimestampAfter and eventTimestampBefore. Returns event metadata only. Call GetEvent for the payload. For full-text or relevance search, use SearchEvents. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description: "The actor whose events to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The session whose events to list. To find events across sessions, use SearchEvents",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-timestamp-before",
          description:
            "Inclusive upper bound on eventTimestamp: only events at or before this time are returned. Omit for no upper bound",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--event-timestamp-after",
          description:
            "Inclusive lower bound on eventTimestamp: only events at or after this time are returned. Omit for no lower bound. If it's later than eventTimestampBefore, the request fails with ValidationException",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order of the results by eventTimestamp: ASC or DESC. The default is DESC, most recent first",
          args: {
            name: "string",
            suggestions: ["ASC", "DESC"],
          },
        },
        {
          name: "--metadata-filters",
          description:
            "Returns only events whose metadata contains every one of these key-value pairs. Omit, or leave empty, for no metadata filter. The service applies the filter after it reads events, so a page can hold fewer than maxResults events, or none, and still return a nextToken. Keep paging until nextToken is absent",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of events to return, from 1 to 100. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-memories",
      description:
        "Lists a space's memories without a query, for example the most recent memories or the memories of one strategy. Filter by strategy and optionally by owning actor or session, sort by creation or update time, and page through the results. Results have no relevance score. To query or filter by metadata, use SearchMemories. If memories are written or deleted while you page, the results can skip a memory or return it twice. You can page through only a limited number of results. A request past that limit fails with ValidationException (reason invalidNextToken), and the message gives the limit. Memories past their expiry (set from the space's memoryExpiryDays when each memory is written) are left out. Unlike SearchMemories, this operation also returns memories that consolidation has superseded. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description: "The space whose memories to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-strategies",
          description:
            "The strategies to list, as selectors. A selector without memoryStrategyNames lists every strategy of its type, and omitting memoryStrategies lists every strategy in the space. A name that is not a declared strategy of that type fails with ValidationException",
          args: {
            name: "list",
          },
        },
        {
          name: "--actor-ids",
          description:
            "Lists only memories owned by one of these actors. Combined with sessionIds by AND: a memory must match both filters when both are given. Omit for no actor filter. An empty list fails validation. A memory stored without an actor never matches an actor filter",
          args: {
            name: "list",
          },
        },
        {
          name: "--session-ids",
          description:
            "Lists only memories from one of these sessions. Combined with actorIds by AND. Omit for no session filter. An empty list fails validation. A memory stored without a session never matches a session filter",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort-by",
          description:
            "The timestamp to sort by, as returned in systemMetadata: CREATED_AT (the default) or UPDATED_AT",
          args: {
            name: "string",
            suggestions: ["CREATED_AT", "UPDATED_AT"],
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order: ASC or DESC. The default is DESC, most recent first",
          args: {
            name: "string",
            suggestions: ["ASC", "DESC"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of memories to return, from 1 to 100. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-spaces",
      description: "Lists the spaces in your account in the current Region",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of spaces to return, from 1 to 100. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "Lists the tags for the specified space",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "search-events",
      description:
        "Searches a space's events by relevance. It works like SearchMemories without the memory type and strategy selector. The query is a subset of the OpenSearch Query DSL. The service validates it, limits the search to the actor in actorId and the sessions in sessionIds, and returns ranked results. Each result is the matching chunk of an event, not the whole event. You can page through only a limited number of results. A request past that limit fails with ValidationException (reason invalidNextToken), and the message gives the limit. If the results are larger than 5 MiB, the request fails with ValidationException (reason queryBodyTooLarge). Lower maxResults. If the request would exceed the service's rate for embedding requests, it fails with ThrottlingException. Retry with exponential backoff. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description:
            "The space whose events to search. Use actorId and sessionIds to narrow the search within it",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-id",
          description:
            "The actor whose events to search (exact match). Required: every search covers exactly one actor, and an event stored without an actor is never returned. Narrow the search further with sessionIds, combined by AND. This is the only way to filter by actor: a query that references system_metadata.actor_id fails with ValidationException (reason nonFilterableField)",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-ids",
          description:
            "Returns only events from one of these sessions (exact match). Combined with actorId by AND. Omit for no session filter. An empty list fails validation. An event stored without a session never matches a session filter. This is the only way to filter by session: a query that references system_metadata.session_id fails with ValidationException (reason nonFilterableField)",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort",
          description:
            "The sort order (see SearchSort). Omit to return the most relevant events first",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of events to return, from 1 to 100. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-query",
          description:
            "The query: a subset of the OpenSearch Query DSL (see SearchQuery), validated by the same rules as on SearchMemories. Query event text as text and embeddings as vector. A search covers both conversation turns and chunks of documents submitted as a blob. You can't use actor and session fields here. Use the top-level actorId and sessionIds. To search only the content of particular events, filter on event_ids with term or terms, for example with the sourceEventIds that a SearchMemories result returns. A terms clause on event_ids can list up to 10 event IDs. More IDs fail with ValidationException (reason queryBodyTooLarge). You can use event_ids only in term, terms, and exists queries",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "search-memories",
      description:
        "Searches a space's memories by relevance. The query is a subset of the OpenSearch Query DSL. The service validates it, limits the search to the requested strategies and to the actor in actorId, and returns one ranked list of memories. You can page through only a limited number of results. A request past that limit fails with ValidationException (reason invalidNextToken), and the message gives the limit. Memories past their expiry (set from the space's memoryExpiryDays when each memory is written) are left out of the results. Only current memories are returned: a memory that consolidation has superseded (an older version of a fact that a newer memory replaced) is left out. If the results are larger than 5 MiB, the request fails with ValidationException (reason queryBodyTooLarge). Lower maxResults. If the request would exceed the service's rate for embedding requests, it fails with ThrottlingException. Retry with exponential backoff. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description:
            "The space to search. Use actorId to narrow the search within it",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-strategies",
          description:
            "The strategies to search, as a list of selectors. Each selector names a memory type and, optionally, specific strategy names of that type. A space can hold several strategies of the same type. A selector without memoryStrategyNames searches every strategy of its type, and omitting memoryStrategies searches every strategy in the space. A name that is not a declared strategy of that type fails with ValidationException",
          args: {
            name: "list",
          },
        },
        {
          name: "--actor-id",
          description:
            "The actor whose memories to search (exact match). Required: every search covers exactly one actor, and a memory stored without an actor is never returned. This is the only way to filter by actor: a query that references system_metadata.actor_id fails with ValidationException (reason nonFilterableField)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description:
            "The sort order (see SearchSort). Omit to return the most relevant memories first",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of memories to return, from 1 to 100. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-query",
          description:
            "The query: a subset of the OpenSearch Query DSL (see SearchQuery). You can't use the actor and session fields system_metadata.actor_id and system_metadata.session_id here. Use the top-level actorId to filter by actor. Searching memories doesn't filter by session",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description: "Adds the specified tags to the specified space",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to add to the space",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Removes the specified tags from the specified space",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove from the space",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-memory",
      description:
        "Updates a memory in place. Supply only the fields to change. Omitted fields keep their stored values. A request must supply content or metadata, or it fails with ValidationException. Supplying content re-embeds the memory. A change to metadata alone doesn't. The memory keeps its memoryId across updates. Shortly after an update, searches stop returning the previous content.  memoryType can't be changed. To change it, delete the memory and create a new one. A memory past its expiry (set from the space's memoryExpiryDays when the memory is written) reads as not found: the operation fails with ResourceNotFoundException and changes nothing. An update does not move the expiry. Concurrent updates to one memory are last-writer-wins. There is no version check. To avoid lost updates, serialize your updates to a memory. If you supply content and the request would exceed the service's rate for embedding requests, it fails with ThrottlingException. Retry with exponential backoff. If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with AccessDeniedException if you aren't allowed to use the key, and with ThrottlingException if AWS KMS throttles the request. It fails with ValidationException if the key is disabled, pending deletion, or deleted",
      options: [
        {
          name: "--space-id",
          description:
            "The ID of the space that owns the memory, for example sp-02864597b164",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-id",
          description: "The ID of the memory to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "Replacement memory text. Supplying it re-embeds the memory. Omit to leave the text unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description:
            "The metadata tags to apply. By default this map replaces the stored metadata, and any key not present is removed. Set metadataMode to MERGE to keep the keys you don't supply. Limits apply to the resulting metadata, not to the request. Keys that begin with x-amz- and the key documentS3Source are reserved: a request that sets one fails with ValidationException. A space can use at most 50 distinct metadata keys across all of its events and memories. A request that would add a key beyond that fails with ValidationException. Reuse an existing key instead",
          args: {
            name: "map",
          },
        },
        {
          name: "--metadata-mode",
          description:
            "How metadata combines with what is stored. The default is REPLACE",
          args: {
            name: "string",
            suggestions: ["REPLACE", "MERGE"],
          },
        },
        {
          name: "--actor-id",
          description:
            "The ID of the actor that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with ResourceNotFoundException, as if the memory did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--strategy-name",
          description:
            "The name of the strategy that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with ResourceNotFoundException, as if the memory did not exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-space",
      description:
        "Updates a space's memory strategies, retention settings, or extraction model. Supply only the fields to change. Omitted fields keep their current values. If the request changes the set of strategies, a strategy's configuration, a retention setting, or the extraction model, the space moves to UPDATING. When the change is complete, the space returns to ACTIVE, or moves to FAILED if the change can't be applied. While the space is UPDATING, GetSpace returns the previous configuration. A request that only changes strategy descriptions or repeats the values the space has stored is applied immediately and doesn't change the status. Sending a retention value that the space never set also moves the space to UPDATING, even one that matches the behavior without it, such as 90 for eventExpiryDays or 0 for memoryExpiryDays. A space that is CREATING, UPDATING, or DELETING can't be updated: the request fails with ConflictException",
      options: [
        {
          name: "--space-id",
          description: "The ID of the space to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-strategies",
          description:
            "The complete new list of memory strategies. The service removes strategies that aren't in the list from the space. Removing a strategy stops extraction for it but doesn't delete its memories: they're kept, until they expire if the space sets memoryExpiryDays, and they're available again if you later add a strategy with the same type and name. To delete them, use DeleteMemory before you remove the strategy, or delete the space. To keep a strategy, include it with the same type and name that GetSpace returns. For a kept strategy, any configuration member you omit keeps its current value. It doesn't return to the default, and you can't clear a member once it's set. Omit this field to leave the strategies unchanged. The list must name at least one strategy. You can't remove every strategy from a space with UpdateSpace. The serialized list can be at most 384 KiB",
          args: {
            name: "list",
          },
        },
        {
          name: "--event-expiry-days",
          description:
            "How many days the space keeps each event, from 1 to 365. Omit it to leave the current value unchanged. Events already stored keep the expiry they were written with",
          args: {
            name: "integer",
          },
        },
        {
          name: "--memory-expiry-days",
          description:
            "How many days the space keeps each memory, from 0 to 3650. 0 means memories never expire. Omit it to leave the current value unchanged. You can't clear the setting. To make memories written from then on never expire, send 0. GetSpace then returns 0. A change applies to memories written after it. Memories already stored keep the expiry they were written with. A memory the service rewrites later, such as a summary it keeps up to date, takes the setting in force at that rewrite. A change moves the space to UPDATING. Sending the value that the space has stored doesn't",
          args: {
            name: "integer",
          },
        },
        {
          name: "--extraction-model-id",
          description:
            "The model that extracts and consolidates memories for every strategy in the space: anthropic.claude-opus-5-5 or anthropic.claude-haiku-5-5. Omit it to leave the current value unchanged. Once set, it can't be cleared back to the service default",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "space-active",
          description:
            "Waits until the space is `ACTIVE`. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--space-id",
              description: "The ID of the space",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "space-deleted",
          description:
            "Waits until the space is deleted. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--space-id",
              description: "The ID of the space",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
