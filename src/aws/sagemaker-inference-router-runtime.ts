const completionSpec: Fig.Spec = {
  name: "sagemaker-inference-router-runtime",
  description:
    "Amazon SageMaker Inference Router Runtime is the runtime API for Amazon SageMaker AI inference routers. An inference router sends each request that you make to one of the destinations of a routing target. A destination is a SageMaker AI endpoint or inference component, in your account or in another account, in the router's Amazon Web Services Region or in another Region in the same Amazon Web Services partition. The router chooses a healthy destination with capacity, and prefers destinations in its own Region. Use InvokeInferenceRouter to get an inference in real time. Use InvokeInferenceRouterAsync to submit a request whose input and response are stored in Amazon S3. The inference router runtime endpoint supports HTTP/1.1 only. HTTP/2 isn't supported. If you use the Amazon Web Services SDKs or the Amazon Web Services CLI, you don't need to change anything",
  subcommands: [
    {
      name: "invoke-inference-router",
      description:
        "Sends a real-time inference request to an inference router. In the request, you name the routing target, and the router sends the request to one of the routing target's destinations. The response includes the destination that served the request and the reason that the router chose it. The following limits apply:   The maximum request payload is 6 MB. A request with a larger body fails with HTTP status code 413.   Your model has up to 60 seconds for each attempt, the same limit as InvokeEndpoint. If your account has a higher model execution timeout for InvokeEndpoint, it doesn't apply through an inference router. For models that take longer, use InvokeInferenceRouterAsync.   If a destination returns an error that the router can retry, such as a throttling error, before your model produces a response, the router retries the request once on another destination. A request that times out on a destination isn't retried. Because a request can make two attempts, set your client read timeout to at least 170 seconds. The caller needs permission to invoke the inference router and every destination of the routing target. For information about permissions, see Route requests across Regions with inference routers",
      options: [
        {
          name: "--inference-router-name",
          description: "The name of the inference router to invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-target-name",
          description:
            "The name of the routing target in the inference router. The routing target lists the destinations that can serve the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "The MIME type of the input data in the request body. The router passes it to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept",
          description:
            "The MIME type that you want for the inference response. The router passes it to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--inference-id",
          description:
            "An identifier for the inference request. The router passes it to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix-aware-id",
          description:
            "An optional, stable identifier that serves as a routing hint for prefix-aware routing. The router passes it to the destination that serves the request. Within that destination, requests with the same prefix and the same identifier go to the same instance. If requests from different applications might have the same prompt prefix, set a different identifier for each application to differentiate their routing decisions. Applies only to destination endpoints configured with a RoutingStrategy of PREFIX_AWARE",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-attributes",
          description:
            "Provides additional information about the inference request. The value is an opaque string that the router passes, unchanged, to the model container of the destination that serves the request. The value can contain up to 1,024 visible US-ASCII characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "The input data for the inference, in the format that your model expects. The body can't be empty",
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
    {
      name: "invoke-inference-router-async",
      description:
        "Submits an asynchronous inference request to an inference router. Before you call this operation, upload the input data to Amazon S3 in the router's Amazon Web Services Region. The router returns as soon as it accepts the request, and sends the request to one of the destinations of the routing target. The destination reads the input from Amazon S3, and the inference response is written to the Amazon S3 output path that the routing target specifies. If a destination doesn't start the request within the routing target's MaxTimeInBacklogSeconds, the router moves the request to another destination. After your model starts processing the request, the request doesn't move. If no destination can take the request before RequestTTLSeconds runs out, or every destination has been tried, the router writes a failure object to the FailureLocation and publishes a notification to the routing target's error topic, if one is configured. For information about the permissions that the caller and each destination need, see Send asynchronous requests through an inference router",
      options: [
        {
          name: "--inference-router-name",
          description: "The name of the inference router to invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-target-name",
          description:
            "The name of the routing target in the inference router. The routing target must be configured for asynchronous inference",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "The MIME type of the input data in Amazon S3. The router passes it to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept",
          description:
            "The MIME type that you want for the inference response. The router passes it to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-attributes",
          description:
            "Provides additional information about the inference request. The value is an opaque string that the router passes, unchanged, to the model container of the destination that serves the request. The value can contain up to 1,024 visible US-ASCII characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--inference-id",
          description:
            "An identifier for the inference request. If you don't provide one, SageMaker AI generates one and returns it in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-location",
          description:
            "The Amazon S3 URI of the object that contains the input data for the inference. The bucket must be in the inference router's Amazon Web Services Region and owned by the router's account. The destination endpoint's execution role reads the object, and the destination's asynchronous inference limits apply to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-output-path-extension",
          description:
            "The path extension that is appended to the routing target's Amazon S3 output path where the inference response is stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--filename",
          description:
            "The file name of the inference response stored in Amazon S3. If you don't provide one, SageMaker AI generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-ttl-seconds",
          description:
            "The time to live of the request, in seconds, measured from when the router accepts it. If no destination starts the request in this time, the request fails. The default is 21,600 seconds (6 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--invocation-timeout-seconds",
          description:
            "The maximum time, in seconds, that a destination can spend processing the request before the request is marked as expired. The default is 900 seconds (15 minutes)",
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
  ],
};

export default completionSpec;
