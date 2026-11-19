const completionSpec: Fig.Spec = {
  name: "arc-zonal-shift",
  description:
    "Welcome to the API Reference Guide for zonal shift and zonal autoshift in Amazon Application Recovery Controller (ARC). You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to help your application recover quickly from an impairment in an Availability Zone. For example, you can recover your application from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone. You can also configure zonal autoshift for supported load balancer resources. Zonal autoshift is a capability in ARC where you authorize Amazon Web Services to shift away application resource traffic from an Availability Zone during events, on your behalf, to help reduce your time to recovery. Amazon Web Services starts an autoshift when internal telemetry indicates that there is an Availability Zone impairment that could potentially impact customers. For more information about using zonal shift and zonal autoshift, see the Amazon Application Recovery Controller Developer Guide",
  subcommands: [
    {
      name: "cancel-practice-run",
      description:
        "Cancel an in-progress practice run zonal shift in Amazon Application Recovery Controller",
      options: [
        {
          name: "--zonal-shift-id",
          description:
            "The identifier of a practice run zonal shift in Amazon Application Recovery Controller that you want to cancel",
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
      name: "cancel-zonal-shift",
      description:
        "Cancel a zonal shift in Amazon Application Recovery Controller. To cancel the zonal shift, specify the zonal shift ID. A zonal shift can be one that you've started for a resource in your Amazon Web Services account in an Amazon Web Services Region, or it can be a zonal shift started by a practice run with zonal autoshift",
      options: [
        {
          name: "--zonal-shift-id",
          description: "The internally-generated identifier of a zonal shift",
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
      name: "create-practice-run-configuration",
      description:
        "A practice run configuration for zonal autoshift is required when you enable zonal autoshift. A practice run configuration includes specifications for blocked dates and blocked time windows, and for Amazon CloudWatch alarms that you create to use with practice runs. The alarms that you specify are an outcome alarm, to monitor application health during practice runs and, optionally, a blocking alarm, to block practice runs from starting. When a resource has a practice run configuration, ARC starts zonal shifts for the resource weekly, to shift traffic for practice runs. Practice runs help you to ensure that shifting away traffic from an Availability Zone during an autoshift is safe for your application. For more information, see  Considerations when you configure zonal autoshift in the Amazon Application Recovery Controller Developer Guide",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier of the resource that Amazon Web Services shifts traffic for with a practice run zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource. Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:    Amazon EC2 Auto Scaling groups     Amazon Elastic Kubernetes Service     Application Load Balancer     Network Load Balancer",
          args: {
            name: "string",
          },
        },
        {
          name: "--blocked-windows",
          description:
            "Optionally, you can block ARC from starting practice runs for specific windows of days and times.  The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple blocked windows with spaces. For example, say you run business report summaries three days a week. For this scenario, you could set the following recurring days and times as blocked windows, for example: Mon:00:00-Mon:10:00 Wed-20:30-Wed:21:30 Fri-20:30-Fri:21:30.  The blockedWindows have to start and end on the same day. Windows that span multiple days aren't supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--blocked-dates",
          description:
            "Optionally, you can block ARC from starting practice runs for a resource on specific calendar dates. The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Separate multiple blocked dates with spaces. For example, if you have an application update scheduled to launch on May 1, 2024, and you don't want practice runs to shift traffic away at that time, you could set a blocked date for 2024-05-01",
          args: {
            name: "list",
          },
        },
        {
          name: "--blocking-alarms",
          description:
            "Blocking alarms for practice runs are optional alarms that you can specify that block practice runs when one or more of the alarms is in an ALARM state",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-windows",
          description:
            "Optionally, you can allow ARC to start practice runs for specific windows of days and times.  The format for allowed windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple allowed windows with spaces. For example, say you want to allow practice runs only on Wednesdays and Fridays from noon to 5 p.m. For this scenario, you could set the following recurring days and times as allowed windows, for example: Wed-12:00-Wed:17:00 Fri-12:00-Fri:17:00.  The allowedWindows have to start and end on the same day. Windows that span multiple days aren't supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--outcome-alarms",
          description:
            "Outcome alarms for practice runs are alarms that you specify that end a practice run when one or more of the alarms is in an ALARM state. Configure one or more of these alarms to monitor the health of your application when traffic is shifted away from an Availability Zone during each practice run. You should configure these alarms to go into an ALARM state if you want to stop a zonal shift, to let traffic for the resource return to the original Availability Zone",
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
      name: "delete-practice-run-configuration",
      description:
        "Deletes the practice run configuration for a resource. Before you can delete a practice run configuration for a resource., you must disable zonal autoshift for the resource. Practice runs must be configured for zonal autoshift to be enabled",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier for the resource that you want to delete the practice run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource",
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
      name: "get-autoshift-observer-notification-status",
      description:
        "Returns the status of the autoshift observer notification. Autoshift observer notifications notify you through Amazon EventBridge when there is an autoshift event for zonal autoshift. The status can be ENABLED or DISABLED. When ENABLED, a notification is sent when an autoshift is triggered. When DISABLED, notifications are not sent",
      options: [
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
      name: "get-managed-resource",
      description:
        "Get information about a resource that's been registered for zonal shifts with Amazon Application Recovery Controller in this Amazon Web Services Region. Resources that are registered for zonal shifts are managed resources in ARC. You can start zonal shifts and configure zonal autoshift for managed resources",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier for the resource that Amazon Web Services shifts traffic for. The identifier is the Amazon Resource Name (ARN) for the resource. Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:    Amazon EC2 Auto Scaling groups     Amazon Elastic Kubernetes Service     Application Load Balancer     Network Load Balancer",
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
      name: "list-autoshifts",
      description:
        "Returns the autoshifts for an Amazon Web Services Region. By default, the call returns only ACTIVE autoshifts. Optionally, you can specify the status parameter to return COMPLETED autoshifts",
      options: [
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a nextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's nextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the autoshift",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "COMPLETED"],
          },
        },
        {
          name: "--max-results",
          description:
            "The number of objects that you want to return with this call",
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
      name: "list-managed-resources",
      description:
        "Lists all the resources in your Amazon Web Services account in this Amazon Web Services Region that are managed for zonal shifts in Amazon Application Recovery Controller, and information about them. The information includes the zonal autoshift status for the resource, as well as the Amazon Resource Name (ARN), the Availability Zones that each resource is deployed in, and the resource name",
      options: [
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a nextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's nextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of objects that you want to return with this call",
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
      name: "list-zonal-shifts",
      description:
        'Lists all active and completed zonal shifts in Amazon Application Recovery Controller in your Amazon Web Services account in this Amazon Web Services Region. ListZonalShifts returns customer-initiated zonal shifts, as well as practice run zonal shifts that ARC started on your behalf for zonal autoshift. For more information about listing autoshifts, see ">ListAutoshifts',
      options: [
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a nextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's nextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "A status for a zonal shift. The Status for a zonal shift can have one of the following values:    ACTIVE: The zonal shift has been started and is active.    EXPIRED: The zonal shift has expired (the expiry time was exceeded).    CANCELED: The zonal shift was canceled",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "EXPIRED", "CANCELED"],
          },
        },
        {
          name: "--max-results",
          description:
            "The number of objects that you want to return with this call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "The identifier for the resource that you want to list zonal shifts for. The identifier is the Amazon Resource Name (ARN) for the resource",
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
      name: "start-practice-run",
      description:
        "Start an on-demand practice run zonal shift in Amazon Application Recovery Controller. With zonal autoshift enabled, you can start an on-demand practice run to verify preparedness at any time. Amazon Web Services also runs automated practice runs about weekly when you have enabled zonal autoshift. For more information, see  Considerations when you configure zonal autoshift in the Amazon Application Recovery Controller Developer Guide",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier for the resource that you want to start a practice run zonal shift for. The identifier is the Amazon Resource Name (ARN) for the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--away-from",
          description:
            "The Availability Zone (for example, use1-az1) that traffic is shifted away from for the resource that you specify for the practice run",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "The initial comment that you enter about the practice run. Be aware that this comment can be overwritten by Amazon Web Services if the automatic check for balanced capacity fails. For more information, see  Capacity checks for practice runs in the Amazon Application Recovery Controller Developer Guide",
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
      name: "start-zonal-shift",
      description:
        "You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in an Amazon Web Services Region, to help your application recover immediately, for example, from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone. You can start a zonal shift in ARC only for managed resources in your Amazon Web Services account in an Amazon Web Services Region. Resources are automatically registered with ARC by Amazon Web Services services. Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:    Amazon EC2 Auto Scaling groups     Amazon Elastic Kubernetes Service     Application Load Balancer     Network Load Balancer    When you start a zonal shift, traffic for the resource is no longer routed to the Availability Zone. The zonal shift is created immediately in ARC. However, it can take a short time, typically up to a few minutes, for existing, in-progress connections in the Availability Zone to complete. For more information, see Zonal shift in the Amazon Application Recovery Controller Developer Guide",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier for the resource that Amazon Web Services shifts traffic for. The identifier is the Amazon Resource Name (ARN) for the resource. Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:    Amazon EC2 Auto Scaling groups     Amazon Elastic Kubernetes Service     Application Load Balancer     Network Load Balancer",
          args: {
            name: "string",
          },
        },
        {
          name: "--away-from",
          description:
            "The Availability Zone (for example, use1-az1) that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires-in",
          description:
            "The length of time that you want a zonal shift to be active, which ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours). If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone. To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:    A lowercase letter m: To specify that the value is in minutes.    A lowercase letter h: To specify that the value is in hours.   For example: 20h means the zonal shift expires in 20 hours. 120m means the zonal shift expires in 120 minutes (2 hours)",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string",
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
      name: "update-autoshift-observer-notification-status",
      description:
        "Update the status of autoshift observer notification. Autoshift observer notification enables you to be notified, through Amazon EventBridge, when there is an autoshift event for zonal autoshift. If the status is ENABLED, ARC includes all autoshift events when you use the EventBridge pattern Autoshift In Progress. When the status is DISABLED, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift. For more information, see  Notifications for practice runs and autoshifts in the Amazon Application Recovery Controller Developer Guide",
      options: [
        {
          name: "--status",
          description:
            "The status to set for autoshift observer notification. If the status is ENABLED, ARC includes all autoshift events when you use the Amazon EventBridge pattern Autoshift In Progress. When the status is DISABLED, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
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
      name: "update-practice-run-configuration",
      description:
        "Update a practice run configuration to change one or more of the following: add, change, or remove the blocking alarm; change the outcome alarm; or add, change, or remove blocking dates or time windows",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier for the resource that you want to update the practice run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--blocked-windows",
          description:
            "Add, change, or remove windows of days and times for when you can, optionally, block ARC from starting a practice run for a resource. The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple blocked windows with spaces. For example, say you run business report summaries three days a week. For this scenario, you might set the following recurring days and times as blocked windows, for example: MON-20:30-21:30 WED-20:30-21:30 FRI-20:30-21:30",
          args: {
            name: "list",
          },
        },
        {
          name: "--blocked-dates",
          description:
            "Add, change, or remove blocked dates for a practice run in zonal autoshift. Optionally, you can block practice runs for specific calendar dates. The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Separate multiple blocked dates with spaces. For example, if you have an application update scheduled to launch on May 1, 2024, and you don't want practice runs to shift traffic away at that time, you could set a blocked date for 2024-05-01",
          args: {
            name: "list",
          },
        },
        {
          name: "--blocking-alarms",
          description:
            "Add, change, or remove the Amazon CloudWatch alarms that you optionally specify as the blocking alarms for practice runs",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-windows",
          description:
            "Add, change, or remove windows of days and times for when you can, optionally, allow ARC to start a practice run for a resource. The format for allowed windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple allowed windows with spaces. For example, say you want to allow practice runs only on Wednesdays and Fridays from noon to 5 p.m. For this scenario, you could set the following recurring days and times as allowed windows, for example: Wed-12:00-Wed:17:00 Fri-12:00-Fri:17:00.  The allowedWindows have to start and end on the same day. Windows that span multiple days aren't supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--outcome-alarms",
          description:
            "Specify one or more Amazon CloudWatch alarms as the outcome alarms for practice runs",
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
      name: "update-zonal-autoshift-configuration",
      description:
        "The zonal autoshift configuration for a resource includes the practice run configuration and the status for running autoshifts, zonal autoshift status. When a resource has a practice run configuration, ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone. You can update the zonal autoshift status to enable or disable zonal autoshift. When zonal autoshift is ENABLED, you authorize Amazon Web Services to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery. Traffic is also shifted away for the required weekly practice runs",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier for the resource that you want to update the zonal autoshift configuration for. The identifier is the Amazon Resource Name (ARN) for the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--zonal-autoshift-status",
          description:
            "The zonal autoshift status for the resource that you want to update the zonal autoshift configuration for. Choose ENABLED to authorize Amazon Web Services to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
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
      name: "update-zonal-shift",
      description:
        "Update an active zonal shift in Amazon Application Recovery Controller in your Amazon Web Services account. You can update a zonal shift to set a new expiration, or edit or replace the comment for the zonal shift",
      options: [
        {
          name: "--zonal-shift-id",
          description: "The identifier of a zonal shift",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires-in",
          description:
            "The length of time that you want a zonal shift to be active, which ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours). If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone. To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:    A lowercase letter m: To specify that the value is in minutes.    A lowercase letter h: To specify that the value is in hours.   For example: 20h means the zonal shift expires in 20 hours. 120m means the zonal shift expires in 120 minutes (2 hours)",
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
