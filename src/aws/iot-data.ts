const completionSpec: Fig.Spec = {
  name: "iot-data",
  description:
    "IoT data IoT data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the Amazon Web Services cloud. Find the endpoint address for actions in IoT data by running this CLI command:  aws iot describe-endpoint --endpoint-type iot:Data-ATS  The service name used by Amazon Web ServicesSignature Version 4 to sign requests is: iotdevicegateway",
  subcommands: [
    {
      name: "delete-connection",
      description:
        "Disconnects a connected MQTT client from Amazon Web Services IoT Core. When you disconnect a client, Amazon Web Services IoT Core closes the client's network connection and optionally cleans the session state. Requires permission to access the DeleteConnection action",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier of the MQTT client to disconnect. The client ID can't start with a dollar sign ($). MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--clean-session",
          description:
            "Specifies whether to remove the client's persistent session state when disconnecting. Set to TRUE to delete all session information, including subscriptions and queued messages. Set to FALSE to preserve the session state for persistent sessions. For clean sessions this parameter will be ignored. By default, this is set to FALSE (preserves the session state)",
        },
        {
          name: "--no-clean-session",
          description:
            "Specifies whether to remove the client's persistent session state when disconnecting. Set to TRUE to delete all session information, including subscriptions and queued messages. Set to FALSE to preserve the session state for persistent sessions. For clean sessions this parameter will be ignored. By default, this is set to FALSE (preserves the session state)",
        },
        {
          name: "--prevent-will-message",
          description:
            "Controls if Amazon Web Services IoT Core publishes the client's Last Will and Testament (LWT) message upon disconnection. Set to TRUE to prevent publishing the LWT message. Set to FALSE to ensure that LWT is published. By default, this is set to FALSE (LWT message is published)",
        },
        {
          name: "--no-prevent-will-message",
          description:
            "Controls if Amazon Web Services IoT Core publishes the client's Last Will and Testament (LWT) message upon disconnection. Set to TRUE to prevent publishing the LWT message. Set to FALSE to ensure that LWT is published. By default, this is set to FALSE (LWT message is published)",
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
      name: "delete-thing-shadow",
      description:
        "Deletes the shadow for the specified thing. Requires permission to access the DeleteThingShadow action. For more information, see DeleteThingShadow in the IoT Developer Guide",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing",
          args: {
            name: "string",
          },
        },
        {
          name: "--shadow-name",
          description: "The name of the shadow",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "get-connection",
      description:
        "Retrieves connection information for the specified MQTT client. Requires permission to access the GetConnection action",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier of the MQTT client to retrieve connection information. The client ID can't start with a dollar sign ($). MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-socket-information",
          description:
            "Specifies if socket information (sourcePort, targetPort, sourceIp, targetIp) should be included in the GetConnection response. Set to TRUE to include socket information. Set to FALSE to omit socket information. By default, this is set to FALSE. See the developer guide for how to authorize this parameter",
        },
        {
          name: "--no-include-socket-information",
          description:
            "Specifies if socket information (sourcePort, targetPort, sourceIp, targetIp) should be included in the GetConnection response. Set to TRUE to include socket information. Set to FALSE to omit socket information. By default, this is set to FALSE. See the developer guide for how to authorize this parameter",
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
      name: "get-retained-message",
      description:
        "Gets the details of a single retained message for the specified topic. This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call ListRetainedMessages. Requires permission to access the GetRetainedMessage action. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging",
      options: [
        {
          name: "--topic",
          description: "The topic name of the retained message to retrieve",
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
      name: "get-thing-shadow",
      description:
        "Gets the shadow for the specified thing. Requires permission to access the GetThingShadow action. For more information, see GetThingShadow in the IoT Developer Guide",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing",
          args: {
            name: "string",
          },
        },
        {
          name: "--shadow-name",
          description: "The name of the shadow",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "list-named-shadows-for-thing",
      description:
        "Lists the shadows for the specified thing. Requires permission to access the ListNamedShadowsForThing action",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The result page size",
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
      name: "list-retained-messages",
      description:
        "Lists summary information about the retained messages stored for the account. This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs. To get the message payload of a retained message, call GetRetainedMessage with the topic name of the retained message. Requires permission to access the ListRetainedMessages action. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging",
      options: [
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return at one time",
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
      name: "list-subscriptions",
      description:
        "Returns a list of all subscriptions for MQTT clients with active sessions, including offline clients with persistent sessions. Requires permission to access the ListSubscriptions action",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier of the MQTT client to list subscriptions for. The client ID can't start with a dollar sign ($). MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscriptions to return in a single request. By default, this is set to 20",
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
      name: "publish",
      description:
        "Publishes an MQTT message. Requires permission to access the Publish action. For more information about MQTT messages, see MQTT Protocol in the IoT Developer Guide. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging",
      options: [
        {
          name: "--topic",
          description: "The name of the MQTT topic",
          args: {
            name: "string",
          },
        },
        {
          name: "--qos",
          description:
            "The Quality of Service (QoS) level. The default QoS level is 0",
          args: {
            name: "integer",
          },
        },
        {
          name: "--retain",
          description:
            "A Boolean value that determines whether to set the RETAIN flag when the message is published. Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic. Valid values: true | false  Default value: false",
        },
        {
          name: "--no-retain",
          description:
            "A Boolean value that determines whether to set the RETAIN flag when the message is published. Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic. Valid values: true | false  Default value: false",
        },
        {
          name: "--payload",
          description:
            "The message body. MQTT accepts text, binary, and empty (null) message payloads. Publishing an empty (null) payload with retain = true deletes the retained message identified by topic from Amazon Web Services IoT Core",
          args: {
            name: "blob",
          },
        },
        {
          name: "--user-properties",
          description:
            'A JSON string that contains an array of JSON objects. If you don’t use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. userProperties is an HTTP header value in the API. The following example userProperties parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded:  [{"deviceName": "alpha"}, {"deviceCnt": "45"}]',
          args: {
            name: "string",
          },
        },
        {
          name: "--payload-format-indicator",
          description:
            "An Enum string value that indicates whether the payload is formatted as UTF-8. payloadFormatIndicator is an HTTP header value in the API",
          args: {
            name: "string",
            suggestions: ["UNSPECIFIED_BYTES", "UTF8_DATA"],
          },
        },
        {
          name: "--content-type",
          description:
            "A UTF-8 encoded string that describes the content of the publishing message",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-topic",
          description:
            "A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--correlation-data",
          description:
            "The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received. correlationData is an HTTP header value in the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-expiry",
          description:
            "A user-defined integer value that represents the message expiry interval in seconds. If absent, the message doesn't expire. For more information about the limits of messageExpiry, see Amazon Web Services IoT Core message broker and protocol limits and quotas  from the Amazon Web Services Reference Guide",
          args: {
            name: "long",
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
      name: "send-direct-message",
      description:
        "Sends an MQTT message directly to a specific client identified by its client ID.  SendDirectMessage targets a single client ID. The receiving client does not need to subscribe to the topic, but the receiver's policy must allow iot:Receive on the specified topic. Requires permission to access the SendDirectMessage action. For more information about messaging costs, see Amazon Web Services IoT Core pricing",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier of the MQTT client to send the message to. Client IDs must not exceed 128 characters and can't start with a dollar sign ($). MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters. For more information, see Amazon Web Services IoT Core message broker and protocol limits and quotas",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic",
          description:
            "The topic of the outbound MQTT Publish message to the receiving client. For more information, see Amazon Web Services IoT Core message broker and protocol limits and quotas",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "The MQTT5 content type property forwarded to the receiving client (for example, application/json)",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-topic",
          description:
            "A UTF-8 encoded string that's used as the topic name for a response message. The response topic describes the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters. For more information, see Amazon Web Services IoT Core message broker and protocol limits and quotas",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation",
          description:
            "A Boolean value that specifies whether to wait for delivery confirmation from the receiving client. When set to true, the API delivers the message at QoS 1 and waits for the client to send a delivery confirmation (PUBACK) before returning a successful response. If delivery confirmation is not received within the specified timeout period, the API returns HTTP 504. When set to false, the API delivers the message at QoS 0 and returns after Amazon Web Services IoT Core attempts to deliver the message. Valid values: true | false  Default value: false",
        },
        {
          name: "--no-confirmation",
          description:
            "A Boolean value that specifies whether to wait for delivery confirmation from the receiving client. When set to true, the API delivers the message at QoS 1 and waits for the client to send a delivery confirmation (PUBACK) before returning a successful response. If delivery confirmation is not received within the specified timeout period, the API returns HTTP 504. When set to false, the API delivers the message at QoS 0 and returns after Amazon Web Services IoT Core attempts to deliver the message. Valid values: true | false  Default value: false",
        },
        {
          name: "--timeout",
          description:
            "An integer that represents the maximum time, in seconds, to wait for a delivery confirmation (PUBACK) from the receiving client after the message has been delivered. This parameter is only used when confirmation is set to true. If confirmation is false, this parameter is ignored. The total API response time may be higher than this value due to internal processing. Set your HTTP client timeout to a value greater than this parameter. Valid range: 1 to 15 seconds. Default value: 5 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--payload",
          description:
            "The message body. MQTT accepts text, binary, and empty (null) message payloads",
          args: {
            name: "blob",
          },
        },
        {
          name: "--user-properties",
          description:
            'A JSON string that contains an array of JSON objects. If you don\'t use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. userProperties is an HTTP header value in the API. For MQTT 3.1.1 clients, user properties are silently dropped. The following example userProperties parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded:  [{"deviceName": "alpha"}, {"deviceCnt": "45"}]',
          args: {
            name: "string",
          },
        },
        {
          name: "--payload-format-indicator",
          description:
            "An Enum string value that indicates whether the payload is formatted as UTF-8. payloadFormatIndicator is an HTTP header value in the API",
          args: {
            name: "string",
            suggestions: ["UNSPECIFIED_BYTES", "UTF8_DATA"],
          },
        },
        {
          name: "--correlation-data",
          description:
            "The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received. correlationData is an HTTP header value in the API",
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
      name: "update-thing-shadow",
      description:
        "Updates the shadow for the specified thing. Requires permission to access the UpdateThingShadow action. For more information, see UpdateThingShadow in the IoT Developer Guide",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing",
          args: {
            name: "string",
          },
        },
        {
          name: "--shadow-name",
          description: "The name of the shadow",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload",
          description: "The state information, in JSON format",
          args: {
            name: "blob",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
  ],
};

export default completionSpec;
