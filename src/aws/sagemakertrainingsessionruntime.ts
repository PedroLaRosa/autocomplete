const completionSpec: Fig.Spec = {
  name: "sagemakertrainingsessionruntime",
  description:
    "Amazon SageMaker Training Session Runtime provides APIs for executing training operations and sampling operations against a running training session. Use these APIs to submit asynchronous training steps (such as forward-backward passes, optimizer steps, and checkpoint saves) and to generate text samples from the model being trained",
  subcommands: [
    {
      name: "execute-sampling-operation",
      description:
        "Submits an asynchronous sampling operation to generate text or compute log-probabilities from the model associated with the specified training session. The session must be in Running or Blocked state. Use GetSamplingOperationResult to poll for the result",
      options: [
        {
          name: "--training-session-name",
          description: "The name of the training session to sample from",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation-config",
          description:
            "The configuration for the sample operation. Specify either a sample configuration to generate text or a computeLogprobs configuration to compute token log-probabilities",
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
      name: "execute-training-operation",
      description:
        "Submits an asynchronous training operation to the specified training session. The service executes operations in sequence number order. The session must be in Running or Blocked state. Use GetTrainingOperationResult to poll for the result. Supported operation types: forward, forwardBackward, optimizerStep, saveWeights, saveState, and loadState",
      options: [
        {
          name: "--training-session-name",
          description:
            "The name of the training session to submit the operation to",
          args: {
            name: "string",
          },
        },
        {
          name: "--sequence-number",
          description:
            "The monotonically increasing sequence number that determines execution order. The training session processes operations strictly in sequence number order. If a gap exists, the session blocks until the missing operation arrives or times out. Must be at least 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service ignores the request but does not return an error",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation-config",
          description:
            "The configuration that specifies the type and parameters of the training operation. Exactly one member of the union must be set",
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
      name: "get-sampling-operation-result",
      description:
        "Retrieves the current status and result of a previously submitted sampling operation. Poll this operation until the status reaches a terminal state (Completed or Failed)",
      options: [
        {
          name: "--training-session-name",
          description:
            "The name of the training session that owns the sample operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique identifier of the sample operation to retrieve, returned by ExecuteSamplingOperation",
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
      name: "get-training-operation-result",
      description:
        "Retrieves the current status and result of a previously submitted training operation. Poll this operation until the status reaches a terminal state (Completed, Failed, or Skipped)",
      options: [
        {
          name: "--training-session-name",
          description:
            "The name of the training session that owns the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique identifier of the operation to retrieve, returned by ExecuteTrainingOperation",
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
      name: "sample-training-session",
      description:
        "Sends an inference request to the model associated with the specified training session and returns the response synchronously. The service passes the request and response bodies to and from the model without modification",
      options: [
        {
          name: "--training-session-name",
          description: "The name of the training session whose model to invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description: "The MIME type of the input data in the request body",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept",
          description:
            "The desired MIME type of the inference body in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-arn",
          description:
            "The ARN of the model package whose checkpoint to invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description: "The raw inference request body",
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
