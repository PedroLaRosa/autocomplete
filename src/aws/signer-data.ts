const completionSpec: Fig.Spec = {
  name: "signer-data",
  description:
    "AWS Signer Data Plane service provides APIs for checking revocation status of signed artifacts",
  subcommands: [
    {
      name: "get-revocation-status",
      description:
        "Retrieves the revocation status for a signed artifact by checking if the signing profile, job, or certificate has been revoked",
      options: [
        {
          name: "--signature-timestamp",
          description:
            "The timestamp when the artifact was signed, in ISO 8601 format",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--platform-id",
          description: "The platform identifier for the signing platform used",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-version-arn",
          description:
            "The ARN of the signing profile version used to sign the artifact",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-arn",
          description: "The ARN of the signing job that produced the signature",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-hashes",
          description: "List of certificate hashes to check for revocation",
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
  ],
};

export default completionSpec;
