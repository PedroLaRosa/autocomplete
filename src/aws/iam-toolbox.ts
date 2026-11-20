const completionSpec: Fig.Spec = {
  name: "iam-toolbox",
  description:
    "Contains APIs to work with AWS Identity and Access Management (IAM)",
  subcommands: [
    {
      name: "get-request-authorization-details",
      description:
        "Retrieves the authorization details for a specific access denied request. The details include the request context, the evaluations performed, and the policies that were evaluated. Use this operation to understand why a request was denied. Supported services include an authorization ID in the access denied error message. Pass that ID to this operation to retrieve the details. To retrieve the content for a policy in the policies list, call GetRequestAuthorizationPolicy. Authorization details are available for at least 24 hours after the denial. To use this operation, you must have the iam:GetRequestAuthorizationDetails permission",
      options: [
        {
          name: "--authorization-id",
          description:
            "The authorization ID received in the access denied error message. This ID identifies the specific request to retrieve details for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from a previous call, used to retrieve the next page of evaluations. Omit this value on the first call",
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
      name: "get-request-authorization-policy",
      description:
        "Retrieves a policy that was evaluated for a specific access denied request. The operation returns the structured JSON document of the policy that was captured with the original authorization request. It doesn't retrieve the current version of the policy. For some AWS services and policy types, the returned policy document includes all actions relevant to the service that processed the denied request, but might omit actions for other services. Specify the authorization ID from the access denied error message and the policy URI returned by GetRequestAuthorizationDetails for the same authorization ID. Access depends on the account and organization recorded for the principal that made the denied request. If an organization was recorded, the calling principal must belong to that organization. Otherwise, the calling principal must belong to the recorded account. To use this operation, you must have the iam:GetRequestAuthorizationPolicy permission",
      options: [
        {
          name: "--authorization-id",
          description:
            "The authorization ID received in the access denied error message. This ID identifies the request whose evaluated policy you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-uri",
          description:
            "The URI of the policy to retrieve. Use the uri value from the policies list returned by GetRequestAuthorizationDetails for the same authorization ID",
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
