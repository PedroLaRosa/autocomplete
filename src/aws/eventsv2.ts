const completionSpec: Fig.Spec = {
  name: "eventsv2",
  description:
    "Amazon EventBridge event bus API. An event bus receives events published by your applications and AWS services, stores them for a configurable retention period, and delivers them to subscribers. A subscriber filters events, optionally transforms them, and invokes a target such as Lambda, SQS, SNS, Kinesis, Step Functions, or an HTTP endpoint. The API manages event buses, subscribers, event sources, resource policies, and tags, and publishes events through PutEvents and PutRawEvents",
  subcommands: [
    {
      name: "create-event-bus",
      description:
        "Creates an event bus. Provisioning is asynchronous: the bus is returned in the CREATING state and transitions to ACTIVE when ready (see the EventBusActive waiter). Retries carrying the same ClientToken are idempotent",
      options: [
        {
          name: "--name",
          description:
            "Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2//), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description: "Encryption configuration for an event bus",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-configuration",
          description: "Event storage configuration for an event bus",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags attached to a resource, as key-value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier that ensures the idempotency of the request. The SDK generates one automatically when the field is omitted",
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
      name: "create-event-source",
      description:
        "Creates an EventSource, which forwards events from an origin (an AWS service or another account) onto an event bus. The bus must be ACTIVE. Retries carrying the same ClientToken are idempotent",
      options: [
        {
          name: "--name",
          description:
            "EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved \"aws.\" prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2///), mirroring EventBusName, so a name the ARN cannot represent cannot be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Discriminated EventSource configuration. Exactly one variant must be set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags attached to a resource, as key-value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier that ensures the idempotency of the request. The SDK generates one automatically when the field is omitted",
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
      name: "create-subscriber",
      description:
        "Creates a subscriber on an event bus, which delivers matching events to the configured target. The bus must be ACTIVE. Retries carrying the same ClientToken are idempotent",
      options: [
        {
          name: "--name",
          description:
            "Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--invoke-configuration",
          description:
            "Configuration for how the subscriber invokes its target",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-configuration",
          description:
            "Configuration for filtering events delivered to a subscriber. On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern. On UpdateSubscriber, an empty FilterConfiguration:{} clears the existing filter. Any non-empty shape (including {Language:X} without Filters) must contain a valid Filters list — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted FilterConfiguration preserves existing state. All Filters are implicitly ANDed — an event must match every Filter to be delivered",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type",
          description:
            "Delivery ordering mode of a subscriber: FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee",
          args: {
            name: "string",
            suggestions: ["FIFO", "UNORDERED"],
          },
        },
        {
          name: "--starting-position",
          description: "Starting position for a subscriber",
          args: {
            name: "string",
            suggestions: ["LATEST", "POINT_IN_TIME"],
          },
        },
        {
          name: "--point-in-time-configuration",
          description:
            "Point-in-time configuration for a subscriber. Only applicable when StartingPosition is POINT_IN_TIME",
          args: {
            name: "structure",
          },
        },
        {
          name: "--batch-configuration",
          description: "Batching configuration for a subscriber",
          args: {
            name: "structure",
          },
        },
        {
          name: "--transformer",
          description:
            "Not applicable to universal (aws-sdk) targets, whose input transformation is UniversalTargetParameters.Input; a Transformer on such a target is rejected",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retry-policy",
          description: "Retry policy for a subscriber",
          args: {
            name: "structure",
          },
        },
        {
          name: "--on-failure-configuration",
          description:
            "On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the EventSource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--log-configuration",
          description: "Log configuration for a subscriber",
          args: {
            name: "structure",
          },
        },
        {
          name: "--state",
          description:
            'Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked',
          args: {
            name: "string",
            suggestions: ["RUNNING", "STOPPED"],
          },
        },
        {
          name: "--tags",
          description: "Tags attached to a resource, as key-value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier that ensures the idempotency of the request. The SDK generates one automatically when the field is omitted",
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
      name: "delete-event-bus",
      description:
        "Deletes an event bus. Deletion is asynchronous: the bus moves to DELETING and disappears when complete (see the EventBusDeleted waiter). A bus with subscribers or event sources cannot be deleted",
      options: [
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
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
      name: "delete-event-source",
      description: "Deletes an EventSource. Forwarding from its origin stops",
      options: [
        {
          name: "--event-source-arn",
          description:
            "EventSource ARN: event-sourcev2///. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service",
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
      name: "delete-resource-policy",
      description: "Deletes the named resource policy attached to an event bus",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description:
            'Which named policy to delete. Defaults to "default" when omitted (a delete AWS Resource Access Manager makes on the owner\'s behalf resolves to "AWS_RAM" instead). The two writers are exclusive in both directions — only Resource Access Manager can delete "AWS_RAM", and only the bus owner can delete "default" — so naming the other party\'s policy fails with AccessDeniedException. A well-formed name that is neither of the two fails with InvalidInputException',
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            'The delete succeeds only if the named policy\'s current revision ID matches this value; if it differs or the policy does not exist, the operation fails with ConflictException. The "NO_POLICY" sentinel is not valid here. When omitted, deleting an absent policy is an idempotent success. Supplying this value makes the delete non-idempotent: once it succeeds the expected revision no longer exists, so retrying an unanswered request fails with ConflictException even though the policy was deleted. To establish the outcome, read the policy back: ResourceNotFoundException means the delete took effect',
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
      name: "delete-subscriber",
      description:
        "Deletes a subscriber. Events are no longer delivered to its target",
      options: [
        {
          name: "--subscriber-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies a subscriber",
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
      name: "describe-event-bus",
      description:
        "Returns the full configuration and lifecycle state of an event bus",
      options: [
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
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
      name: "describe-event-source",
      description:
        "Returns the full configuration and lifecycle state of an EventSource",
      options: [
        {
          name: "--event-source-arn",
          description:
            "EventSource ARN: event-sourcev2///. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service",
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
      name: "describe-subscriber",
      description: "Returns the full configuration and state of a subscriber",
      options: [
        {
          name: "--subscriber-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies a subscriber",
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
      name: "get-resource-policy",
      description:
        "Returns the named resource policy attached to an event bus. Fails with ResourceNotFoundException when the event bus or the named policy does not exist",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description:
            'Which named policy to read. Defaults to "default" when omitted (a read AWS Resource Access Manager makes on the owner\'s behalf resolves to "AWS_RAM" instead). Unlike writing, neither name is reserved on a read: the bus owner can read both. There is no fallback between the two, so a bus shared only through Resource Access Manager fails with ResourceNotFoundException until "AWS_RAM" is named explicitly. A well-formed name that is neither of the two fails with InvalidInputException',
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
      name: "list-event-buses",
      description:
        "Lists the event buses visible to the caller: buses the account owns and buses shared with it through AWS RAM. Shared entries carry identity fields only (Name, EventBusArn, EventBusAccountId); owned entries carry every summary field. Set EventBusAccountId to scope the list to one owner account",
      options: [
        {
          name: "--name-prefix",
          description:
            "Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2//), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-account-id",
          description: "AWS Account Id",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to return in one page of a List operation",
          args: {
            name: "integer",
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
      name: "list-event-sources",
      description:
        "Lists EventSources as summaries. By default the list spans the EventSources the caller account owns; set EventBusArn to scope it to one bus. Use DescribeEventSource to retrieve full configuration",
      options: [
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-prefix",
          description:
            "EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved \"aws.\" prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2///), mirroring EventBusName, so a name the ARN cannot represent cannot be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to return in one page of a List operation",
          args: {
            name: "integer",
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
      name: "list-resource-policies",
      description:
        "Lists the resource policies attached to an event bus as summaries (policy name and revision ID). Use GetResourcePolicy to retrieve a policy document",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to return in one page of a List operation",
          args: {
            name: "integer",
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
      name: "list-subscribers",
      description:
        "Lists subscribers as summaries. By default the list spans the subscribers the caller account owns across all buses; set EventBusArn to scope it to one bus. Use DescribeSubscriber to retrieve full configuration",
      options: [
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-prefix",
          description:
            "Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to return in one page of a List operation",
          args: {
            name: "integer",
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
      description:
        "Lists the tags on an event bus, subscriber, or event source",
      options: [
        {
          name: "--resource-arn",
          description:
            "ARN for an EventBridge resource that supports tagging: event buses, subscribers, and event sources",
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
      name: "put-events",
      description: "Publishes events to an event bus",
      options: [
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "List of event entries to publish. Must contain at least one entry",
          args: {
            name: "list",
          },
        },
        {
          name: "--deduplication-configuration",
          description:
            "Request-level deduplication settings, applied to every entry in the batch",
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
      name: "put-raw-events",
      description: "Publishes pre-shaped events to an event bus",
      options: [
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "List of event entries to publish. Must contain at least one entry",
          args: {
            name: "list",
          },
        },
        {
          name: "--schema-registry-configuration",
          description:
            "Schema-registry settings for encoding open-format (Avro/Protobuf) events. Required for open-format entries; ignored for JSON entries. The registry is read with the caller's credentials, so the caller needs read access to the registry it references",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deduplication-configuration",
          description:
            "Request-level deduplication settings, applied to every entry in the batch",
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
      name: "put-resource-policy",
      description:
        'Attaches a named resource policy to an event bus — the only resource type that supports policies; other resource ARNs are rejected. Each bus holds two named policies: "default" (customer-managed, full IAM policy language including Deny) and "AWS_RAM" (written exclusively by AWS Resource Access Manager to reflect resource shares). Both policies are evaluated on cross-account authorization; an explicit Deny in either overrides an Allow in the other. Operations that omit PolicyName target "default". A "default" policy that would grant public access is rejected with PublicPolicyException and is not attached; this check is always on and cannot be disabled',
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-document",
          description:
            'A resource policy document, as a JSON string. The "default" policy can be up to 20 KB (20,480 bytes of UTF-8) by default. This quota is adjustable in Service Quotas. A "default" policy that exceeds the quota is rejected with PolicyLengthExceededException. No policy document can exceed 389,120 bytes of UTF-8, regardless of the quota',
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description:
            'Which named policy to write. Defaults to "default", the customer-managed policy, when omitted (a write AWS Resource Access Manager makes on the owner\'s behalf resolves to "AWS_RAM" instead). The two writers are exclusive in both directions — only Resource Access Manager can write "AWS_RAM", and only the bus owner can write "default" — so naming the other party\'s policy fails with AccessDeniedException. A well-formed name that is neither of the two fails with InvalidInputException',
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            "The write succeeds only if the named policy's current revision ID matches this value; a policy that does not exist yet matches only the sentinel \"NO_POLICY\" (create-only). On mismatch the operation fails with ConflictException. When omitted, the write is unconditional. Every attempt stores a newly generated revision ID, so retrying an unanswered request can conflict with the caller's own earlier attempt; read the policy back and compare it with the one you intended before treating a conflict as another writer's change",
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
      name: "revoke-resource",
      description:
        "Revokes a subscriber or an EventSource. The bus owner calls this to withdraw a misbehaving resource attached to their bus. Revocation is terminal: there is no operation that clears it. A revoked resource refuses mutating operations with InvalidStateException; delete stays available for cleanup",
      options: [
        {
          name: "--arn",
          description:
            "ARN of a resource a bus owner can revoke: a subscriber or an EventSource. The pattern is the revocable subset of TaggableResourceArn; buses are not revocable",
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
      name: "tag-resource",
      description:
        "Adds or replaces tags on an event bus, subscriber, or event source",
      options: [
        {
          name: "--resource-arn",
          description:
            "ARN for an EventBridge resource that supports tagging: event buses, subscribers, and event sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags attached to a resource, as key-value pairs",
          args: {
            name: "map",
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
      description:
        "Removes tags from an event bus, subscriber, or event source",
      options: [
        {
          name: "--resource-arn",
          description:
            "ARN for an EventBridge resource that supports tagging: event buses, subscribers, and event sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "List of tag keys",
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
      name: "update-event-bus",
      description:
        "Updates an event bus. The update is asynchronous: the bus moves to UPDATING and returns to ACTIVE when the change is applied. Fields omitted from the request are left unchanged",
      options: [
        {
          name: "--event-bus-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description: "Encryption configuration for an event bus",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-configuration",
          description: "Event storage configuration for an event bus",
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
      name: "update-event-source",
      description:
        "Updates an EventSource. Fields omitted from the request are left unchanged",
      options: [
        {
          name: "--event-source-arn",
          description:
            "EventSource ARN: event-sourcev2///. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Discriminated EventSource configuration. Exactly one variant must be set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources",
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
      name: "update-subscriber",
      description:
        "Updates a subscriber. Fields omitted from the request are left unchanged",
      options: [
        {
          name: "--subscriber-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies a subscriber",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            'Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked',
          args: {
            name: "string",
            suggestions: ["RUNNING", "STOPPED"],
          },
        },
        {
          name: "--resume-position",
          description:
            "Position from which delivery resumes when a subscriber is unpaused. Honored only on an UpdateSubscriber call that transitions State from STOPPED to RUNNING (unpause); ignored on any other call and not accepted on Create. Defaults to LAST_PROCESSED when omitted",
          args: {
            name: "string",
            suggestions: ["LAST_PROCESSED", "LATEST"],
          },
        },
        {
          name: "--invoke-configuration",
          description:
            "Update-able configuration for how the subscriber invokes its target",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filter-configuration",
          description:
            "Configuration for filtering events delivered to a subscriber. On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern. On UpdateSubscriber, an empty FilterConfiguration:{} clears the existing filter. Any non-empty shape (including {Language:X} without Filters) must contain a valid Filters list — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted FilterConfiguration preserves existing state. All Filters are implicitly ANDed — an event must match every Filter to be delivered",
          args: {
            name: "structure",
          },
        },
        {
          name: "--batch-configuration",
          description: "Batching configuration for a subscriber",
          args: {
            name: "structure",
          },
        },
        {
          name: "--transformer",
          description:
            "Not applicable to universal (aws-sdk) targets, whose input transformation is UniversalTargetParameters.Input; a Transformer on such a target is rejected",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retry-policy",
          description: "Retry policy for a subscriber",
          args: {
            name: "structure",
          },
        },
        {
          name: "--on-failure-configuration",
          description:
            "On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the EventSource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--log-configuration",
          description: "Log configuration for a subscriber",
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
          name: "event-bus-active",
          description:
            "Waits until the event bus reports ACTIVE. Use after CreateEventBus (bus starts in CREATING) or UpdateEventBus (bus moves to UPDATING) before invoking operations that require an ACTIVE bus. Fails fast on the terminal failure states CREATE_FAILED, UPDATE_FAILED, and DELETE_FAILED, surfacing StateReason. CREATING, UPDATING, and DELETING are intentionally unmodeled intermediate states that fall through to the implicit retry. It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--event-bus-arn",
              description:
                "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
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
          name: "event-bus-deleted",
          description:
            "Waits until the event bus is fully deleted, signaled by DescribeEventBus returning ResourceNotFoundException. Use after DeleteEventBus. Fails fast on the terminal DELETE_FAILED state, surfacing StateReason; retry DeleteEventBus after removing subscribers. It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--event-bus-arn",
              description:
                "The Amazon Resource Name (ARN) that uniquely identifies an event bus",
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
