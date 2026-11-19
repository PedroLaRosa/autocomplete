const completionSpec: Fig.Spec = {
  name: "synthetics",
  description:
    "Amazon CloudWatch Synthetics You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage canaries, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see Using ServiceLens to Monitor the Health of Your Applications in the Amazon CloudWatch User Guide. Before you create and manage canaries, be aware of the security considerations. For more information, see Security Considerations for Synthetics Canaries",
  subcommands: [
    {
      name: "associate-resource",
      description:
        "Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group.  You must run this operation in the Region where the canary exists",
      options: [
        {
          name: "--group-identifier",
          description:
            "Specifies the group. You can specify the group name, the ARN, or the group ID as the GroupIdentifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The ARN of the canary that you want to associate with the specified group",
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
      name: "create-canary",
      description:
        "Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once.  Do not use CreateCanary to modify an existing canary. Use UpdateCanary instead. To create canaries, you must have the CloudWatchSyntheticsFullAccess policy. If you are creating a new IAM role for the canary, you also need the iam:CreateRole, iam:CreatePolicy and iam:AttachRolePolicy permissions. For more information, see Necessary Roles and Permissions. Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see Security Considerations for Synthetics Canaries",
      options: [
        {
          name: "--name",
          description:
            "The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account. Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see Security Considerations for Synthetics Canaries",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "A structure that includes the entry point from which the canary should start running your script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included",
          args: {
            name: "structure",
          },
        },
        {
          name: "--artifact-s3-location",
          description:
            "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the Amazon S3 bucket can't include a period (.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The ARN of the IAM role to be used to run the canary. This role must already exist, and must include lambda.amazonaws.com as a principal in the trust policy. The role must also have the following permissions:    s3:PutObject     s3:GetBucketLocation     s3:ListAllMyBuckets     cloudwatch:PutMetricData     logs:CreateLogGroup     logs:CreateLogStream     logs:PutLogEvents",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "A structure that contains information about how often the canary is to run and when these test runs are to stop",
          args: {
            name: "structure",
          },
        },
        {
          name: "--run-config",
          description:
            "A structure that contains the configuration for individual canary runs, such as timeout value and environment variables.  Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables are not encrypted on the client side. Do not store sensitive information in them",
          args: {
            name: "structure",
          },
        },
        {
          name: "--success-retention-period-in-days",
          description:
            "The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console",
          args: {
            name: "integer",
          },
        },
        {
          name: "--failure-retention-period-in-days",
          description:
            "The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console",
          args: {
            name: "integer",
          },
        },
        {
          name: "--runtime-version",
          description:
            "Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see  Canary Runtime Versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see  Running a Canary in a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resources-to-replicate-tags",
          description:
            "To have the tags that you apply to this canary also be applied to the Lambda function that the canary uses, specify this parameter with the value lambda-function. If you specify this parameter and don't specify any tags in the Tags parameter, the canary creation fails",
          args: {
            name: "list",
          },
        },
        {
          name: "--provisioned-resource-cleanup",
          description:
            "Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted. If you omit this parameter, the default of AUTOMATIC is used, which means that the Lambda functions and layers will be deleted when the canary is deleted. If the value of this parameter is OFF, then the value of the DeleteLambda parameter of the DeleteCanary operation determines whether the Lambda functions and layers will be deleted",
          args: {
            name: "string",
            suggestions: ["AUTOMATIC", "OFF"],
          },
        },
        {
          name: "--browser-configs",
          description:
            "CloudWatch Synthetics now supports multibrowser canaries for syn-nodejs-puppeteer-11.0 and syn-nodejs-playwright-3.0 runtimes. This feature allows you to run your canaries on both Firefox and Chrome browsers. To create a multibrowser canary, you need to specify the BrowserConfigs with a list of browsers you want to use.  If not specified, browserConfigs defaults to Chrome",
          args: {
            name: "list",
          },
        },
        {
          name: "--add-replica-locations",
          description:
            "A list of locations (Amazon Web Services Regions) to add as replicas for the canary. Each location specifies a Region and optional VPC configuration for the replica. You can add up to 50 replica locations",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values. To have the tags that you apply to this canary also be applied to the Lambda function that the canary uses, specify this parameter with the value lambda-function",
          args: {
            name: "map",
          },
        },
        {
          name: "--artifact-config",
          description:
            "A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the customer-managed AWS Key Management Service (AWS KMS) key used to encrypt the canary's AWS Lambda function environment variables at rest. If you don't specify a value, the service uses an AWS-managed key",
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
      name: "create-group",
      description:
        "Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group.  Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view. Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see Enabling a Region. Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups",
      options: [
        {
          name: "--name",
          description:
            "The name for the group. It can include any Unicode characters. The names for all groups in your account, across all Regions, must be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to associate with the group. You can associate as many as 50 tags with a group. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values",
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
      name: "delete-canary",
      description:
        "Permanently deletes the specified canary. If the canary's ProvisionedResourceCleanup field is set to AUTOMATIC or you specify DeleteLambda in this operation as true, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary. Other resources used and created by the canary are not automatically deleted. After you delete a canary, you should also delete the following:   The CloudWatch alarms created for this canary. These alarms have a name of Synthetics-Alarm-first-198-characters-of-canary-name-canaryId-alarm number     Amazon S3 objects and buckets, such as the canary's artifact location.   IAM roles created for the canary. If they were created in the console, these roles have the name  role/service-role/CloudWatchSyntheticsRole-First-21-Characters-of-CanaryName     CloudWatch Logs log groups created for the canary. These logs groups have the name /aws/lambda/cwsyn-First-21-Characters-of-CanaryName     Before you delete a canary, you might want to use GetCanary to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary",
      options: [
        {
          name: "--name",
          description:
            "The name of the canary that you want to delete. To find the names of your canaries, use DescribeCanaries",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-lambda",
          description:
            "Specifies whether to also delete the Lambda functions and layers used by this canary. The default is false. Your setting for this parameter is used only if the canary doesn't have AUTOMATIC for its ProvisionedResourceCleanup field. If that field is set to AUTOMATIC, then the Lambda functions and layers will be deleted when this canary is deleted.  Type: Boolean",
        },
        {
          name: "--no-delete-lambda",
          description:
            "Specifies whether to also delete the Lambda functions and layers used by this canary. The default is false. Your setting for this parameter is used only if the canary doesn't have AUTOMATIC for its ProvisionedResourceCleanup field. If that field is set to AUTOMATIC, then the Lambda functions and layers will be deleted when this canary is deleted.  Type: Boolean",
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
      name: "delete-group",
      description:
        "Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group.  Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN",
      options: [
        {
          name: "--group-identifier",
          description:
            "Specifies which group to delete. You can specify the group name, the ARN, or the group ID as the GroupIdentifier",
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
      name: "describe-canaries",
      description:
        "This operation returns a list of the canaries in your account, along with full details about each canary. This operation supports resource-level authorization using an IAM policy and the Names parameter. If you specify the Names parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use the Names parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see  Limiting a user to viewing specific canaries",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify this parameter to limit how many canaries are returned each time you use the DescribeCanaries operation. If you omit this parameter, the default of 20 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--names",
          description:
            "Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names. If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use this parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see  Limiting a user to viewing specific canaries",
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
      name: "describe-canaries-last-run",
      description:
        "Use this operation to see information from the most recent run of each canary that you have created. This operation supports resource-level authorization using an IAM policy and the Names parameter. If you specify the Names parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use the Names parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see  Limiting a user to viewing specific canaries",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates that there is more data available. You can use this token in a subsequent DescribeCanariesLastRun operation to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify this parameter to limit how many runs are returned each time you use the DescribeLastRun operation. If you omit this parameter, the default of 100 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--names",
          description:
            "Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names. If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use the Names parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see  Limiting a user to viewing specific canaries",
          args: {
            name: "list",
          },
        },
        {
          name: "--browser-type",
          description: "The type of browser to use for the canary run",
          args: {
            name: "string",
            suggestions: ["CHROME", "FIREFOX"],
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
      name: "describe-runtime-versions",
      description:
        "Returns a list of Synthetics canary runtime versions. For more information, see  Canary Runtime Versions",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates that there is more data available. You can use this token in a subsequent DescribeRuntimeVersions operation to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify this parameter to limit how many runs are returned each time you use the DescribeRuntimeVersions operation. If you omit this parameter, the default of 100 is used",
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
      name: "disassociate-resource",
      description:
        "Removes a canary from a group. You must run this operation in the Region where the canary exists",
      options: [
        {
          name: "--group-identifier",
          description:
            "Specifies the group. You can specify the group name, the ARN, or the group ID as the GroupIdentifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The ARN of the canary that you want to remove from the specified group",
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
      name: "get-canary",
      description:
        "Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use DescribeCanaries",
      options: [
        {
          name: "--name",
          description: "The name of the canary that you want details for",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run-id",
          description:
            "The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run",
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
      name: "get-canary-runs",
      description: "Retrieves a list of runs for a specified canary",
      options: [
        {
          name: "--name",
          description: "The name of the canary that you want to see runs for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates that there is more data available. You can use this token in a subsequent GetCanaryRuns operation to retrieve the next set of results.  When auto retry is enabled for the canary, the first subsequent retry is suffixed with *1 indicating its the first retry and the next subsequent try is suffixed with *2",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify this parameter to limit how many runs are returned each time you use the GetCanaryRuns operation. If you omit this parameter, the default of 100 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--dry-run-id",
          description:
            "The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-type",
          description:
            "When you provide RunType=CANARY_RUN and dryRunId, you will get an exception    When a value is not provided for RunType, the default value is CANARY_RUN    When CANARY_RUN is provided, all canary runs excluding dry runs are returned   When DRY_RUN is provided, all dry runs excluding canary runs are returned",
          args: {
            name: "string",
            suggestions: ["CANARY_RUN", "DRY_RUN"],
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
      name: "get-group",
      description:
        "Returns information about one group. Groups are a global resource, so you can use this operation from any Region",
      options: [
        {
          name: "--group-identifier",
          description:
            "Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the GroupIdentifier",
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
      name: "list-associated-groups",
      description:
        "Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify this parameter to limit how many groups are returned each time you use the ListAssociatedGroups operation. If you omit this parameter, the default of 20 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-arn",
          description: "The ARN of the canary that you want to view groups for",
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
      name: "list-group-resources",
      description:
        "This operation returns a list of the ARNs of the canaries that are associated with the specified group",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify this parameter to limit how many canary ARNs are returned each time you use the ListGroupResources operation. If you omit this parameter, the default of 20 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--group-identifier",
          description:
            "Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the GroupIdentifier",
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
      name: "list-groups",
      description:
        "Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify this parameter to limit how many groups are returned each time you use the ListGroups operation. If you omit this parameter, the default of 20 is used",
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
      name: "list-tags-for-resource",
      description: "Displays the tags associated with a canary or group",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the canary or group that you want to view tags for. The ARN format of a canary is arn:aws:synthetics:Region:account-id:canary:canary-name . The ARN format of a group is arn:aws:synthetics:Region:account-id:group:group-name",
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
      name: "start-canary",
      description:
        "Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's Schedule. To see a canary's schedule, use GetCanary",
      options: [
        {
          name: "--name",
          description:
            "The name of the canary that you want to run. To find canary names, use DescribeCanaries",
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
      name: "start-canary-dry-run",
      description:
        "Use this operation to start a dry run for a canary that has already been created",
      options: [
        {
          name: "--name",
          description:
            "The name of the canary that you want to dry run. To find canary names, use DescribeCanaries",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of Zipfile.  If you are uploading your canary scripts with an Amazon S3 bucket, your zip file should include your script in a certain folder structure.   For Node.js canaries, the folder structure must be nodejs/node_modules/myCanaryFilename.js  For more information, see Packaging your Node.js canary files    For Python canaries, the folder structure must be python/myCanaryFilename.py  or python/myFolder/myCanaryFilename.py  For more information, see Packaging your Python canary files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--runtime-version",
          description:
            "Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see  Canary Runtime Versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-config",
          description:
            "A structure that contains input information for a canary run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-config",
          description:
            "If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see  Running a Canary in a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The ARN of the IAM role to be used to run the canary. This role must already exist, and must include lambda.amazonaws.com as a principal in the trust policy. The role must also have the following permissions:",
          args: {
            name: "string",
          },
        },
        {
          name: "--success-retention-period-in-days",
          description:
            "The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console",
          args: {
            name: "integer",
          },
        },
        {
          name: "--failure-retention-period-in-days",
          description:
            "The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console",
          args: {
            name: "integer",
          },
        },
        {
          name: "--visual-reference",
          description:
            "An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison. Visual monitoring is supported only on canaries running the syn-puppeteer-node-3.2 runtime or later. For more information, see  Visual monitoring and  Visual monitoring blueprint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--artifact-s3-location",
          description:
            "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the Amazon S3 bucket can't include a period (.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--artifact-config",
          description:
            "A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--provisioned-resource-cleanup",
          description:
            "Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted. If you omit this parameter, the default of AUTOMATIC is used, which means that the Lambda functions and layers will be deleted when the canary is deleted. If the value of this parameter is OFF, then the value of the DeleteLambda parameter of the DeleteCanary operation determines whether the Lambda functions and layers will be deleted",
          args: {
            name: "string",
            suggestions: ["AUTOMATIC", "OFF"],
          },
        },
        {
          name: "--browser-configs",
          description:
            "A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both CHROME and FIREFOX browsers.  If not specified, browserConfigs defaults to Chrome",
          args: {
            name: "list",
          },
        },
        {
          name: "--visual-references",
          description:
            "A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.  syn-nodejs-puppeteer-11.0 and above, and syn-nodejs-playwright-3.0 and above, only supports visualReferences. visualReference field is not supported. Versions older than syn-nodejs-puppeteer-11.0 supports both visualReference and visualReferences for backward compatibility. It is recommended to use visualReferences for consistency and future compatibility",
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
      name: "stop-canary",
      description:
        "Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run. You can use StartCanary to start it running again with the canary’s current schedule at any point in the future",
      options: [
        {
          name: "--name",
          description:
            "The name of the canary that you want to stop. To find the names of your canaries, use ListCanaries",
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
        "Assigns one or more tags (key-value pairs) to the specified canary or group.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a canary or group",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the canary or group that you're adding tags to. The ARN format of a canary is arn:aws:synthetics:Region:account-id:canary:canary-name . The ARN format of a group is arn:aws:synthetics:Region:account-id:group:group-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the resource",
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
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the canary or group that you're removing tags from. The ARN format of a canary is arn:aws:synthetics:Region:account-id:canary:canary-name . The ARN format of a group is arn:aws:synthetics:Region:account-id:group:group-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tag keys to remove from the resource",
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
      name: "update-canary",
      description:
        "Updates the configuration of a canary that has already been created. For multibrowser canaries, you can add or remove browsers by updating the browserConfig list in the update call. For example:   To add Firefox to a canary that currently uses Chrome, specify browserConfigs as [CHROME, FIREFOX]   To remove Firefox and keep only Chrome, specify browserConfigs as [CHROME]   You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use TagResource.  When you use the dryRunId field when updating a canary, the only other field you can provide is the Schedule. Adding any other field will thrown an exception",
      options: [
        {
          name: "--name",
          description:
            "The name of the canary that you want to update. To find the names of your canaries, use DescribeCanaries. You cannot change the name of a canary that has already been created",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "A structure that includes the entry point from which the canary should start running your script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The ARN of the IAM role to be used to run the canary. This role must already exist, and must include lambda.amazonaws.com as a principal in the trust policy. The role must also have the following permissions:    s3:PutObject     s3:GetBucketLocation     s3:ListAllMyBuckets     cloudwatch:PutMetricData     logs:CreateLogGroup     logs:CreateLogStream     logs:CreateLogStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--runtime-version",
          description:
            "Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see  Canary Runtime Versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "A structure that contains information about how often the canary is to run, and when these runs are to stop",
          args: {
            name: "structure",
          },
        },
        {
          name: "--run-config",
          description:
            "A structure that contains the timeout value that is used for each individual run of the canary.  Environment variable keys and values are encrypted at rest using Amazon Web Services owned KMS keys. However, the environment variables are not encrypted on the client side. Do not store sensitive information in them",
          args: {
            name: "structure",
          },
        },
        {
          name: "--success-retention-period-in-days",
          description:
            "The number of days to retain data about successful runs of this canary. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console",
          args: {
            name: "integer",
          },
        },
        {
          name: "--failure-retention-period-in-days",
          description:
            "The number of days to retain data about failed runs of this canary. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console",
          args: {
            name: "integer",
          },
        },
        {
          name: "--vpc-config",
          description:
            "If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see  Running a Canary in a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--visual-reference",
          description:
            "Defines the screenshots to use as the baseline for comparisons during visual monitoring comparisons during future runs of this canary. If you omit this parameter, no changes are made to any baseline screenshots that the canary might be using already. Visual monitoring is supported only on canaries running the syn-puppeteer-node-3.2 runtime or later. For more information, see  Visual monitoring and  Visual monitoring blueprint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--artifact-s3-location",
          description:
            "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the Amazon S3 bucket can't include a period (.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--artifact-config",
          description:
            "A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--provisioned-resource-cleanup",
          description:
            "Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted. If the value of this parameter is OFF, then the value of the DeleteLambda parameter of the DeleteCanary operation determines whether the Lambda functions and layers will be deleted",
          args: {
            name: "string",
            suggestions: ["AUTOMATIC", "OFF"],
          },
        },
        {
          name: "--dry-run-id",
          description:
            "Update the existing canary using the updated configurations from the DryRun associated with the DryRunId.  When you use the dryRunId field when updating a canary, the only other field you can provide is the Schedule. Adding any other field will thrown an exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--visual-references",
          description:
            "A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons.  syn-nodejs-puppeteer-11.0 and above, and syn-nodejs-playwright-3.0 and above, only supports visualReferences. visualReference field is not supported. Versions older than syn-nodejs-puppeteer-11.0 supports both visualReference and visualReferences for backward compatibility. It is recommended to use visualReferences for consistency and future compatibility. For multibrowser visual monitoring, you can update the baseline for all configured browsers in a single update call by specifying a list of VisualReference objects, one per browser. Each VisualReference object maps to a specific browser configuration, allowing you to manage visual baselines for multiple browsers simultaneously. For single configuration canaries using Chrome browser (default browser), use visualReferences for syn-nodejs-puppeteer-11.0 and above, and syn-nodejs-playwright-3.0 and above canaries. The browserType in the visualReference object is not mandatory",
          args: {
            name: "list",
          },
        },
        {
          name: "--browser-configs",
          description:
            "A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both CHROME and FIREFOX browsers.  If not specified, browserConfigs defaults to Chrome",
          args: {
            name: "list",
          },
        },
        {
          name: "--add-replica-locations",
          description:
            "A list of locations (Amazon Web Services Regions) to add as replicas for the canary. Each location specifies a Region and optional VPC configuration for the replica. You can add up to 50 replica locations",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-replica-locations",
          description:
            "A list of locations (Amazon Web Services Regions) to remove as replicas for the canary. You must specify at least one location to remove. All replicas can be removed in a single API call and you cannot remove the primary location",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the customer-managed AWS Key Management Service (AWS KMS) key used to encrypt the canary's AWS Lambda function environment variables at rest. If you don't specify a value, the service uses an AWS-managed key. If you omit this parameter, the service retains the existing value. To revert to the AWS-managed key, set this parameter to an empty string",
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
