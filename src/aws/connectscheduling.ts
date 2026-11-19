const completionSpec: Fig.Spec = {
  name: "connectscheduling",
  description:
    "Scheduling actions     Scheduling data types    Use the Amazon Connect Scheduling API to work programmatically with Connect Customer forecasting, capacity planning, and scheduling, and to integrate these capabilities with your own systems. In the Connect Customer admin website, you use them to forecast contact volume, plan capacity, and create and manage agent schedules. For more information, see Forecasting & agent scheduling in the Connect Customer Administrator Guide",
  subcommands: [
    {
      name: "approve-time-off",
      description:
        "Approves a time off request. Evaluates agent time off balances and group time off allowances before approving. RuleFailureAction controls what happens when these evaluations fail. The request is rejected with CONFLICTING_TIME_OFF_REQUEST if it overlaps another time off request for the user that is APPROVED or being approved. The time off request is processed asynchronously, so a successful call doesn't indicate the final status. Read the resulting status with GetTimeOff or from the time off state-change events. Approving an APPROVED request succeeds without a change. Approving a REJECTED request evaluates the rules again, so it can end APPROVED or REJECTED, and repeating the call can give a different result. Check the status with GetTimeOff before you retry. Returns ConflictException if the request is PENDING or CANCELLED. PENDING means Connect Customer is still processing the request asynchronously. Wait until GetTimeOff returns a status other than PENDING, and then retry.  When the approval succeeds, Connect Customer cancels any overtime or voluntary time off activity that overlaps the approved window.   Connect Customer doesn't check whether the principal that calls this operation supervises the user. The staffing group's approval settings also don't apply. IAM permissions are the only control. If you allow a principal to call this operation, that principal can send RuleFailureAction OVERRIDE and approve a request past failed rules. Grant permission for this operation only to principals that you trust to override time off rules",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-off-id",
          description:
            "The unique identifier of the time off request to approve. If the time off request doesn't belong to UserId, the operation returns ResourceNotFoundException",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description recorded with the approval. GetTimeOff doesn't return it",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-failure-action",
          description:
            "Controls what happens when a configured rule fails. REJECT, the default, records an ERROR and leaves the request REJECTED. OVERRIDE records a WARNING and approves the request, like the Override time off rules option in the Connect Customer admin website. OVERRIDE never waives CONFLICTING_TIME_OFF_REQUEST",
          args: {
            name: "string",
            suggestions: ["REJECT", "OVERRIDE"],
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
      name: "cancel-time-off",
      description:
        "Cancels a time off request. Cancelling a CANCELLED request succeeds without a change. Returns ConflictException if the request is PENDING, which means Connect Customer is still processing the request asynchronously. Wait until GetTimeOff returns a status other than PENDING, and then retry",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-off-id",
          description:
            "The unique identifier of the time off request to cancel. If the time off request doesn't belong to UserId, the operation returns ResourceNotFoundException",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description recorded with the cancellation. It replaces the description of the time off request. If you omit it, the request's description is removed",
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
      name: "create-time-off",
      description:
        "Creates a time off request for a user. You don't provide a status, because Connect Customer owns the request lifecycle. To get the decided status, call GetTimeOff or use the time off state-change events.  ApprovalType controls who approves the request. You can specify one of the following values:    AWAIT_APPROVAL: the request waits in AWAITING_APPROVAL until you call ApproveTimeOff or RejectTimeOff. Rule evaluation and the overlap check run at approval, not at creation. A waiting request doesn't reserve its window, so another request for the same window can be approved first.    AUTOMATIC: Connect Customer evaluates the rules (time off balances and group allowances) and decides the request. The request can be PENDING while Connect Customer decides, and then ends APPROVED or REJECTED. If it overlaps another time off request for the user, the requested time off ends REJECTED with CONFLICTING_TIME_OFF_REQUEST. It also ends REJECTED if it overlaps overtime or voluntary time off. If the whole window is in the past, Connect Customer records failed rules as WARNING and doesn't reject the request, whatever the RuleFailureAction.   The staffing group's Supervisor approval needed setting doesn't apply to this operation. ApprovalType alone decides whether the request waits for approval. The operation fails with ValidationException on UserId in the following cases:   The user isn't in a staffing group, or the staffing group isn't associated with a forecast group.   Time off isn't enabled for the user's staffing group, or the user's staff rules don't allow time off.   To change the dates of a request, cancel it with CancelTimeOff and create a new request. The new request has a new TimeOffId.  Connect Customer doesn't check whether the principal that calls this operation supervises the user. The staffing group's approval settings also don't apply. IAM permissions are the only control. If you allow a principal to call this operation, that principal can send ApprovalType AUTOMATIC with RuleFailureAction OVERRIDE and approve a request past failed rules. Grant permission for this operation only to principals that you trust to override time off rules.  For information about time off in the Connect Customer admin website, see Time off management in the Connect Customer Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user who the time off request is for. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--shift-activity-id",
          description:
            "The identifier of the shift activity that defines the type of time off being requested. This can be the ID or the ARN of the shift activity. It must be a time off activity. Activities that aren't set as Requestable are accepted",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-at",
          description:
            "The start of the time off window, inclusive. It must be no earlier than one year before the current date. Connect Customer stores the value as sent, to the millisecond",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-at",
          description:
            "The end of the time off window, exclusive. It must be after StartAt and no later than 24 months after the current date. Connect Customer stores the value as sent, to the millisecond",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--description",
          description:
            "A description recorded on the time off request. If you omit it, the request has no description",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-type",
          description:
            "Controls who approves the request. AWAIT_APPROVAL waits for an ApproveTimeOff or RejectTimeOff call. AUTOMATIC has Connect Customer decide the request. For details, see CreateTimeOff",
          args: {
            name: "string",
            suggestions: ["AWAIT_APPROVAL", "AUTOMATIC"],
          },
        },
        {
          name: "--rule-failure-action",
          description:
            "Controls what happens when a configured rule fails. REJECT, the default, records an ERROR and ends the request REJECTED, unless the whole window is in the past. OVERRIDE records a WARNING and ends the request APPROVED, like the Override time off rules option in the Connect Customer admin website. OVERRIDE requires AUTOMATIC. With AWAIT_APPROVAL, OVERRIDE fails with ValidationException. Set it on ApproveTimeOff instead. OVERRIDE never waives CONFLICTING_TIME_OFF_REQUEST",
          args: {
            name: "string",
            suggestions: ["REJECT", "OVERRIDE"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If this token matches a previous request, Connect Customer returns the result of that request and doesn't create another time off request. If you don't provide a token, the AWS SDK populates this field. If you reuse a client token with a different request body, the request fails with ValidationException. For more information about idempotency, see Making retries safe with idempotent APIs",
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
      name: "get-time-off",
      description:
        "Returns a time off request, including its current status and validation results",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-off-id",
          description:
            "The identifier of the time off request. If the time off request doesn't belong to UserId, the operation returns ResourceNotFoundException",
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
      name: "put-time-off-balance",
      description:
        "Sets the time off balance for one user and shift activity. The value replaces the existing balance rather than adjusting it, so you can safely retry the call. This operation can't remove a balance. To remove one, upload a blank balance in the Connect Customer admin website. For more information, see Import an agent's time off balance in the Connect Customer Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user whose balance is being updated. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--shift-activity-id",
          description:
            "The identifier of the shift activity that the balance applies to. This can be the ID or the ARN of the shift activity",
          args: {
            name: "string",
          },
        },
        {
          name: "--balance",
          description:
            "The new time off balance for the user and activity. It replaces the existing balance",
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
      name: "reject-time-off",
      description:
        "Rejects a time off request. Rejecting a REJECTED request succeeds without a change. Returns ConflictException if the request is PENDING or CANCELLED. PENDING means Connect Customer is still processing the request asynchronously. Wait until GetTimeOff returns a status other than PENDING, and then retry",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Connect Customer instance. This can be the ID or the ARN of the instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user who the time off request belongs to. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-off-id",
          description:
            "The unique identifier of the time off request to reject. If the time off request doesn't belong to UserId, the operation returns ResourceNotFoundException",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description recorded with the rejection, such as the reason. GetTimeOff doesn't return it",
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
};

export default completionSpec;
