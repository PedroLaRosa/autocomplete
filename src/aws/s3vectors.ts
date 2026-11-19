const completionSpec: Fig.Spec = {
  name: "s3vectors",
  description:
    "Amazon S3 vector buckets are a bucket type to store and search vectors with sub-second search times. They are designed to provide dedicated API operations for you to interact with vectors to do similarity search. Within a vector bucket, you use a vector index to organize and logically group your vector data. When you make a write or read request, you direct it to a single vector index. You store your vector data as vectors. A vector contains a key (a name that you assign), a multi-dimensional vector, and, optionally, metadata that describes a vector. The key uniquely identifies the vector in a vector index",
  subcommands: [
    {
      name: "create-index",
      description:
        "Creates a vector index within a vector bucket. To specify the vector bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).  Permissions  You must have the s3vectors:CreateIndex permission to use this operation. You must have the s3vectors:TagResource permission in addition to s3vectors:CreateIndex permission to create a vector index with tags",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket to create the vector index in",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the vector bucket to create the vector index in",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-type",
          description:
            "The data type of the vectors to be inserted into the vector index",
          args: {
            name: "string",
            suggestions: ["float32"],
          },
        },
        {
          name: "--dimension",
          description:
            "The dimensions of the vectors to be inserted into the vector index",
          args: {
            name: "integer",
          },
        },
        {
          name: "--distance-metric",
          description: "The distance metric to be used for similarity search",
          args: {
            name: "string",
            suggestions: ["euclidean", "cosine"],
          },
        },
        {
          name: "--metadata-configuration",
          description: "The metadata configuration for the vector index",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration for a vector index. By default, if you don't specify, all new vectors in the vector index will use the encryption configuration of the vector bucket",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of user-defined tags that you would like to apply to the vector index that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize, track costs, and control access to resources. For more information, see Tagging for cost allocation or attribute-based access control (ABAC).  You must have the s3vectors:TagResource permission in addition to s3vectors:CreateIndex permission to create a vector index with tags",
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
      name: "create-vector-bucket",
      description:
        "Creates a vector bucket in the Amazon Web Services Region that you want your bucket to be in.   Permissions  You must have the s3vectors:CreateVectorBucket permission to use this operation.  You must have the s3vectors:TagResource permission in addition to s3vectors:CreateVectorBucket permission to create a vector bucket with tags",
      options: [
        {
          name: "--vector-bucket-name",
          description: "The name of the vector bucket to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration for the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically AES256",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of user-defined tags that you would like to apply to the vector bucket that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize and control access to resources. For more information, see Tagging for cost allocation or attribute-based access control (ABAC).  You must have the s3vectors:TagResource permission in addition to s3vectors:CreateVectorBucket permission to create a vector bucket with tags",
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
      name: "delete-index",
      description:
        "Deletes a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:DeleteIndex permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description: "The ARN of the vector index to delete",
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
      name: "delete-vector-bucket",
      description:
        "Deletes a vector bucket. All vector indexes in the vector bucket must be deleted before the vector bucket can be deleted. To perform this operation, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:DeleteVectorBucket permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description: "The name of the vector bucket to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description: "The ARN of the vector bucket to delete",
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
      name: "delete-vector-bucket-policy",
      description:
        "Deletes a vector bucket policy. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).  Permissions  You must have the s3vectors:DeleteVectorBucketPolicy permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket to delete the policy from",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description: "The ARN of the vector bucket to delete the policy from",
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
      name: "delete-vectors",
      description:
        "Deletes one or more vectors in a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:DeleteVectors permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description:
            "The name of the vector index that contains a vector you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description:
            "The ARN of the vector index that contains a vector you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--keys",
          description: "The keys of the vectors to delete",
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
      name: "get-index",
      description:
        "Returns vector index attributes. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:GetIndex permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description: "The ARN of the vector index",
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
      name: "get-vector-bucket",
      description:
        "Returns vector bucket attributes. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:GetVectorBucket permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket to retrieve information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description:
            "The ARN of the vector bucket to retrieve information about",
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
      name: "get-vector-bucket-policy",
      description:
        "Gets details about a vector bucket policy. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:GetVectorBucketPolicy permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description: "The name of the vector bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description: "The ARN of the vector bucket",
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
      name: "get-vectors",
      description:
        "Returns vector attributes. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:GetVectors permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description: "The ARN of the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--keys",
          description:
            "The names of the vectors you want to return attributes for",
          args: {
            name: "list",
          },
        },
        {
          name: "--return-data",
          description:
            "Indicates whether to include the vector data in the response. The default value is false",
        },
        {
          name: "--no-return-data",
          description:
            "Indicates whether to include the vector data in the response. The default value is false",
        },
        {
          name: "--return-metadata",
          description:
            "Indicates whether to include metadata in the response. The default value is false",
        },
        {
          name: "--no-return-metadata",
          description:
            "Indicates whether to include metadata in the response. The default value is false",
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
      name: "list-indexes",
      description:
        "Returns a list of all the vector indexes within the specified vector bucket. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:ListIndexes permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector indexes",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description:
            "The ARN of the vector bucket that contains the vector indexes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to be returned in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The previous pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "Limits the response to vector indexes that begin with the specified prefix",
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
      name: "list-tags-for-resource",
      description:
        "Lists all of the tags applied to a specified Amazon S3 Vectors resource. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to resources.   For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.   Permissions  For vector buckets and vector indexes, you must have the s3vectors:ListTagsForResource permission to use this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you want to list tags for. The tagged resource can be a vector bucket or a vector index",
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
      name: "list-vector-buckets",
      description:
        "Returns a list of all the vector buckets that are owned by the authenticated sender of the request.  Permissions  You must have the s3vectors:ListVectorBuckets permission to use this operation",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of vector buckets to be returned in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The previous pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "Limits the response to vector buckets that begin with the specified prefix",
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
      name: "list-vectors",
      description:
        "List vectors in the specified vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).   ListVectors operations proceed sequentially; however, for faster performance on a large number of vectors in a vector index, applications can request a parallel ListVectors operation by providing the segmentCount and segmentIndex parameters.  Permissions  You must have the s3vectors:ListVectors permission to use this operation. Additional permissions are required based on the request parameters you specify:   With only s3vectors:ListVectors permission, you can list vector keys when returnData and returnMetadata are both set to false or not specified..   If you set returnData or returnMetadata to true, you must have both s3vectors:ListVectors and s3vectors:GetVectors permissions. The request fails with a 403 Forbidden error if you request vector data or metadata without the s3vectors:GetVectors permission",
      options: [
        {
          name: "--vector-bucket-name",
          description: "The name of the vector bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description: "The Amazon resource Name (ARN) of the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of vectors to return on a page. If you don't specify maxResults, the ListVectors operation uses a default value of 500. If the processed dataset size exceeds 1 MB before reaching the maxResults value, the operation stops and returns the vectors that are retrieved up to that point, along with a nextToken that you can use in a subsequent request to retrieve the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Pagination token from a previous request. The value of this field is empty for an initial request",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-count",
          description:
            "For a parallel ListVectors request, segmentCount represents the total number of vector segments into which the ListVectors operation will be divided. The value of segmentCount corresponds to the number of application workers that will perform the parallel ListVectors operation. For example, if you want to use four application threads to list vectors in a vector index, specify a segmentCount value of 4.  If you specify a segmentCount value of 1, the ListVectors operation will be sequential rather than parallel. If you specify segmentCount, you must also specify segmentIndex",
          args: {
            name: "integer",
          },
        },
        {
          name: "--segment-index",
          description:
            "For a parallel ListVectors request, segmentIndex is the index of the segment from which to list vectors in the current request. It identifies an individual segment to be listed by an application worker.  Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to list vectors in a vector index, then the first thread specifies a segmentIndex value of 0, the second thread specifies 1, and so on.  The value of segmentIndex must be less than the value provided for segmentCount.  If you provide segmentIndex, you must also provide segmentCount",
          args: {
            name: "integer",
          },
        },
        {
          name: "--return-data",
          description:
            "If true, the vector data of each vector will be included in the response. The default value is false",
        },
        {
          name: "--no-return-data",
          description:
            "If true, the vector data of each vector will be included in the response. The default value is false",
        },
        {
          name: "--return-metadata",
          description:
            "If true, the metadata associated with each vector will be included in the response. The default value is false",
        },
        {
          name: "--no-return-metadata",
          description:
            "If true, the metadata associated with each vector will be included in the response. The default value is false",
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
      name: "put-vector-bucket-default-index-mode",
      description:
        "Updates the default index mode for a vector bucket. The updated default applies to vector indexes that you create after the request succeeds. The operation doesn't change existing vector indexes. To specify the vector bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).  Permissions  You must have the s3vectors:PutVectorBucketDefaultIndexMode permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description: "The name of the vector bucket to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the vector bucket to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-index-mode",
          description:
            "The default mode to assign to new vector indexes in the vector bucket. This change doesn't affect existing vector indexes",
          args: {
            name: "string",
            suggestions: ["CLASSIC", "ENHANCED"],
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
      name: "put-vector-bucket-policy",
      description:
        "Creates a bucket policy for a vector bucket. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:PutVectorBucketPolicy permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description: "The name of the vector bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the vector bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON that defines the policy. For more information about bucket policies for S3 Vectors, see Managing vector bucket policies in the Amazon S3 User Guide",
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
      name: "put-vectors",
      description:
        "Adds one or more vectors to a vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).  For more information about limits, see Limitations and restrictions in the Amazon S3 User Guide.  When inserting vector data into your vector index, you must provide the vector data as float32 (32-bit floating point) values. If you pass higher-precision values to an Amazon Web Services SDK, S3 Vectors converts the values to 32-bit floating point before storing them, and GetVectors, ListVectors, and QueryVectors operations return the float32 values. Different Amazon Web Services SDKs may have different default numeric types, so ensure your vectors are properly formatted as float32 values regardless of which SDK you're using. For example, in Python, use numpy.float32 or explicitly cast your values.   Permissions  You must have the s3vectors:PutVectors permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description:
            "The name of the vector index where you want to write vectors",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description:
            "The ARN of the vector index where you want to write vectors",
          args: {
            name: "string",
          },
        },
        {
          name: "--vectors",
          description:
            'The vectors to add to a vector index. The number of vectors in a single request must not exceed the resource capacity, otherwise the request will be rejected with the error ServiceUnavailableException with the error message "Currently unable to handle the request"',
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
      name: "query-vectors",
      description:
        "Returns matching vector keys from a vector index ranked by vector similarity, full-text relevance, or both. Specify queryVector to perform a vector search, specify queryTexts to perform a full-text search, or specify both to perform a hybrid search. Full-text search ranks results using BM25. Hybrid search combines the vector and full-text rankings using Reciprocal Rank Fusion (RRF). Amazon S3 Vectors ranks results by distance for a vector-only search, by BM25 score for a full-text-only search, and by RRF score for a hybrid search. You can optionally include computed distances, relevance scores, and vector metadata in the response. Full-text and hybrid searches require a vector index in ENHANCED mode. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).   Permissions  You must have the s3vectors:QueryVectors permission to use this operation. Additional permissions are required based on the request parameters you specify:   With only s3vectors:QueryVectors permission, you can retrieve vector keys of approximate nearest neighbors and computed distances between these vectors. This permission is sufficient only when you don't set queryTexts, don't set any metadata filters, and don't request metadata (by keeping the returnMetadata parameter set to false or not specified).   To use queryTexts, a metadata filter, or returnMetadata set to true with this operation, you must have both the s3vectors:QueryVectors and s3vectors:GetVectors permissions. If you use any of these options without the s3vectors:GetVectors permission, Amazon S3 Vectors returns an AccessDeniedException",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index that you want to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description: "The ARN of the vector index that you want to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--top-k",
          description: "The number of results to return for each query",
          args: {
            name: "integer",
          },
        },
        {
          name: "--query-vector",
          description:
            "The query vector for vector similarity search. The query vector must have the same dimension as the vector index. For example, if the vector index has 384 dimensions, the query vector must also have 384 dimensions. You can omit this parameter when you supply queryTexts to perform a full-text-only search. A request must include queryVector, queryTexts, or both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filter",
          description:
            "Metadata filter to apply during the query. For more information about metadata keys, see Metadata filtering in the Amazon S3 User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--query-mode",
          description:
            "The mode to use to process the query. If you don't specify a query mode, the operation uses the mode that's currently configured for the vector index. Valid values:    CLASSIC - Applies metadata filters during the vector search. You can't specify CLASSIC for an ENHANCED index.    ENHANCED - Applies metadata filters before the vector search",
          args: {
            name: "string",
            suggestions: ["CLASSIC", "ENHANCED"],
          },
        },
        {
          name: "--return-metadata",
          description:
            "Indicates whether to include metadata in the response. The default value is false",
        },
        {
          name: "--no-return-metadata",
          description:
            "Indicates whether to include metadata in the response. The default value is false",
        },
        {
          name: "--return-distance",
          description:
            "Indicates whether to include the computed distance in the response. The default value is false",
        },
        {
          name: "--no-return-distance",
          description:
            "Indicates whether to include the computed distance in the response. The default value is false",
        },
        {
          name: "--query-texts",
          description:
            "Full-text queries for searchable metadata keys. Omit queryVector to run a full-text-only search, or provide both fields to run a hybrid search. Each entry must target a distinct searchable metadata key",
          args: {
            name: "list",
          },
        },
        {
          name: "--return-scores",
          description:
            "Indicates whether to include relevance scores in the response. Full-text-only results can include BM25 scores. Hybrid results can also include a Reciprocal Rank Fusion (RRF) score and vector distance. This setting doesn't add scores to vector-only requests. The default value is false",
        },
        {
          name: "--no-return-scores",
          description:
            "Indicates whether to include relevance scores in the response. Full-text-only results can include BM25 scores. Hybrid results can also include a Reciprocal Rank Fusion (RRF) score and vector distance. This setting doesn't add scores to vector-only requests. The default value is false",
        },
        {
          name: "--next-token",
          description:
            "Pagination token from a previous request. The value of this field is empty for an initial request",
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
      name: "tag-resource",
      description:
        "Applies one or more user-defined tags to an Amazon S3 Vectors resource or updates existing tags. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 tags for each resource.  For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.   Permissions  For vector buckets and vector indexes, you must have the s3vectors:TagResource permission to use this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you're applying tags to. The tagged resource can be a vector bucket or a vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The user-defined tag that you want to add to the specified S3 Vectors resource. For more information, see Tagging for cost allocation or attribute-based access control (ABAC)",
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
      description:
        "Removes the specified user-defined tags from an Amazon S3 Vectors resource. You can pass one or more tag keys.   For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.   Permissions  For vector buckets and vector indexes, you must have the s3vectors:UntagResource permission to use this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 Vectors resource that you're removing tags from. The tagged resource can be a vector bucket or a vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The array of tag keys that you're removing from the S3 Vectors resource. For more information, see Tagging for cost allocation or attribute-based access control (ABAC)",
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
      name: "update-index-mode",
      description:
        "Updates the mode for an existing vector index. You can set the mode to ENHANCED for any vector index. You can set the mode to CLASSIC only for a vector index in a vector bucket created before September 30, 2026. This operation doesn't change the default index mode of the vector bucket or the mode of other vector indexes. Specify the vector index by using its Amazon Resource Name (ARN) or both the vector bucket name and vector index name.  Permissions  You must have the s3vectors:UpdateIndexMode permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description:
            "The Amazon Resource Name (ARN) of the vector index to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-mode",
          description:
            "The new mode for the vector index. Valid values:    CLASSIC - Applies metadata filters during the vector search. You can specify CLASSIC only for a vector index in a vector bucket created before September 30, 2026.    ENHANCED - Applies metadata filters before the vector search",
          args: {
            name: "string",
            suggestions: ["CLASSIC", "ENHANCED"],
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
      name: "update-metadata-configuration",
      description:
        "Adds or deletes text search configurations on a vector index. Specify either add or delete, but not both. The vector index must be in ENHANCED mode.  Permissions  You must have the s3vectors:UpdateMetadataConfiguration permission to use this operation",
      options: [
        {
          name: "--vector-bucket-name",
          description:
            "The name of the vector bucket that contains the vector index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the vector index to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-arn",
          description:
            "The Amazon Resource Name (ARN) of the vector index to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--add",
          description: "Text search configurations to add to the vector index",
          args: {
            name: "structure",
          },
        },
        {
          name: "--delete",
          description:
            "Text search configurations to delete from the vector index",
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
  ],
};

export default completionSpec;
