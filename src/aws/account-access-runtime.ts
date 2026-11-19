const completionSpec: Fig.Spec = {
  name: "account-access-runtime",
  description:
    "Use the Account Access Runtime API to list the roles that you can access and retrieve temporary Amazon Web Services credentials for those roles. You authenticate with a bearer token from IAM Identity Center. Each request is scoped to a tenant",
  subcommands: [
    {
      name: "get-role-credentials",
      description:
        "Returns temporary Amazon Web Services credentials for a role that you are entitled to assume within a tenant. You can use these credentials for programmatic access with the CLI or an Amazon Web Services SDK. If you aren't entitled to the role, the request fails with an AccessDeniedException error",
      options: [
        {
          name: "--tenant-id",
          description:
            "The identifier of the tenant that the request applies to. A tenant ID begins with aa- and is 3 to 24 characters long. It can contain lowercase letters, numbers, and hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the role to retrieve credentials for. You must be entitled to assume this role",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-type",
          description:
            "The type of access to request for the role. Specify PROGRAMMATIC_ACCESS to receive access key credentials for use with the CLI or an Amazon Web Services SDK",
          args: {
            name: "string",
            suggestions: ["PROGRAMMATIC_ACCESS"],
          },
        },
        {
          name: "--session-name",
          description:
            "An optional name for the role session. The name can be 2 to 64 characters and can contain alphanumeric characters and the following symbols: plus (+), equal (=), comma (,), period (.), at (@), and hyphen (-). The session name appears in CloudTrail logs for the assumed role session",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-duration",
          description:
            "The duration, in seconds, that the returned credentials remain valid. If you don't specify a value, the service uses the default session duration. The maximum value can't exceed the maximum session duration configured for the role",
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
      name: "list-roles",
      description:
        "Returns the roles that you are entitled to access within a tenant. The results are paginated. Use a returned role with GetRoleCredentials to obtain temporary credentials",
      options: [
        {
          name: "--tenant-id",
          description:
            "The identifier of the tenant whose roles you want to list. A tenant ID begins with aa- and is 3 to 24 characters long. It can contain lowercase letters, numbers, and hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of roles to return in a single response. If more roles are available than the specified value, the response includes a nextToken value that you can use to retrieve the next page of results. If you don't specify a value, the service uses a default page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from a previous ListRoles response. Use it to retrieve the next page of results. Omit this parameter on the first call",
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
  ],
};

export default completionSpec;
