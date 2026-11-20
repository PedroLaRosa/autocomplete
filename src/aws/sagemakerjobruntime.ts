const completionSpec: Fig.Spec = {
  name: "sagemakerjobruntime",
  description:
    "Agentic RFT Runtime Service - manages trajectory and transition data for reinforcement fine-tuning jobs",
  subcommands: [
    {
      name: "complete-rollout",
      description:
        "Marks a rollout as complete, indicating that no further turns will be appended to the trajectory. After calling this operation, the trajectory is sealed and eligible for reward submission via the UpdateReward operation",
      options: [
        {
          name: "--job-arn",
          description: "The job ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--trajectory-id",
          description: "The trajectory ID to mark as complete",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The target status for the trajectory. Defaults to READY if not specified. Set to FAILED if the rollout encountered an error and the trajectory should not be used for processing",
          args: {
            name: "string",
            suggestions: ["ready", "failed"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
      name: "sample",
      description:
        "Sends an inference request to the model during a job execution. The request and response bodies are forwarded to and from the model without modification. Each turn (prompt and response) is captured for later use",
      options: [
        {
          name: "--job-arn",
          description:
            "The job ARN that identifies which model session to route the inference request to",
          args: {
            name: "string",
          },
        },
        {
          name: "--trajectory-id",
          description:
            "The trajectory ID for grouping turns into a single rollout. Each turn (prompt and response) is captured for later use",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "The raw inference request body in OpenAI-compatible JSON format",
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
      name: "sample-with-response-stream",
      description:
        "Sends a streaming inference request to the model during a job execution. Returns the response as a stream of payload chunks. Each turn is captured for later use",
      options: [
        {
          name: "--job-arn",
          description:
            "The job ARN that identifies which model session to route the inference request to",
          args: {
            name: "string",
          },
        },
        {
          name: "--trajectory-id",
          description:
            "The trajectory ID for grouping turns into a single rollout. Each turn is captured for later use",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "The raw inference request body in OpenAI-compatible JSON format",
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
      name: "update-reward",
      description:
        "Updates the reward values for a trajectory and transitions it to reward-received status, signaling that it is eligible for processing. Call this operation after CompleteRollout to provide the computed reward scores",
      options: [
        {
          name: "--job-arn",
          description: "The job ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--trajectory-id",
          description: "The trajectory ID to update with reward values",
          args: {
            name: "string",
          },
        },
        {
          name: "--rewards",
          description:
            "The list of reward values to assign to this trajectory. Provide one reward value per turn in the trajectory",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
