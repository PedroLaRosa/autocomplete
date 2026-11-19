const completionSpec: Fig.Spec = {
  name: "lambda-web",
  description:
    "AWS Lambda Web Functions is a capability of AWS Lambda that you can use to run web applications and API backends as serverless HTTP servers. Your code listens on a network port and handles requests directly. You can use familiar Node.js web frameworks such as Express, Hono, or React Router with no Lambda-specific adapters or wrappers. You develop and run your server locally like any other Node.js web app. Lambda creates an HTTPS endpoint, manages the execution environments, and scales your application with traffic, including to zero when it's idle. To reduce latency for globally distributed users, you can deploy across multiple AWS Regions behind a single endpoint. A Web Function has one or more immutable revisions (code and configuration) and one or more endpoints that expose it over HTTPS. Use Web Functions for workloads that receive and respond to HTTP traffic directly. Common use cases include:   Web applications – Deploy full-stack or front-end applications that serve HTML, assets, and API routes from a single deployment.   REST and GraphQL APIs – Build API backends that serve high request volumes.   Microservices – Run HTTP services that scale independently with traffic, including to zero when idle.   Server-side rendering (SSR) – Serve pages that are rendered on the server at request time rather than pre-built. A Web Function runs your framework's production server directly. This suits applications that render personalized or frequently changing content on each request.   Streaming responses – Stream output to the client as it is produced, such as responses from a large language model.   For event-driven processing, such as handling queue messages or file uploads, use Lambda Event Functions instead. For more information about Web Functions, see Lambda Web Functions in the AWS Lambda Developer Guide",
  subcommands: [
    {
      name: "create-web-function",
      description:
        "Creates a web function with an initial revision and endpoint. To create a web function, you provide the function name, revision configuration (code and service settings), and endpoint configuration. To use this operation, you must have the CreateWebFunction permission on the web function. You don't need separate permissions for the initial revision or endpoint",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the web function. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The name is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-config",
          description:
            "The configuration for the initial revision of the web function, including code and service settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--endpoint-config",
          description:
            "The configuration for the initial endpoint of the web function",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of tag keys and values to apply to the web function",
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
      name: "create-web-function-endpoint",
      description:
        "Creates an endpoint for a web function. An endpoint exposes the web function over HTTPS and routes traffic to one or more revisions. To use this operation, you must have the CreateWebFunctionEndpoint permission on the web function, not on the endpoint being created",
      options: [
        {
          name: "--function-name",
          description:
            "The web function to create the endpoint for. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "The name of the endpoint to create. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The name is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-type",
          description:
            "The type of endpoint to create. Determines how traffic is served and routed across Regions. Valid values:    HomeRegion – Serves traffic from the Region where you created the web function.    MultiRegion – Replicates across the Regions that you choose and routes each request to the nearest one.    PerRegion – Creates a separate endpoint in each Region that you choose",
          args: {
            name: "string",
            suggestions: ["HomeRegion", "MultiRegion", "PerRegion"],
          },
        },
        {
          name: "--auth-type",
          description:
            "The authorization type for the endpoint. Valid values:    ApplicationManaged – Your application handles authorization.    IamAuth – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4)",
          args: {
            name: "string",
            suggestions: ["ApplicationManaged", "IamAuth"],
          },
        },
        {
          name: "--auto-deployment-mode",
          description:
            "The auto-deployment mode for the endpoint. Controls whether the endpoint automatically serves the newest revision. If you don't specify a value, the default is Disabled, and this default is returned in the response. Valid values:    LatestRevision – The endpoint automatically serves the newest revision.    Disabled – Revision routing stays fixed until you change it",
          args: {
            name: "string",
            suggestions: ["LatestRevision", "Disabled"],
          },
        },
        {
          name: "--revision-weights",
          description:
            "A list of revision weights that determine how traffic is distributed across revisions. You can specify up to two revisions for canary or blue-green deployments",
          args: {
            name: "list",
          },
        },
        {
          name: "--regions",
          description:
            "The list of Regions for the endpoint. Required when the endpoint type is MultiRegion or PerRegion: specify at least one Region other than the Region where you create the endpoint (the home Region). The home Region is added automatically if you don't include it; specifying only the home Region isn't allowed. When the endpoint type is HomeRegion, omit this field or specify only the home Region",
          args: {
            name: "list",
          },
        },
        {
          name: "--scaling-config",
          description:
            "The scaling configuration for the endpoint. There is no default value. If you don't specify a scaling configuration, it is absent from the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--throttle-config",
          description:
            "The throttling configuration for the endpoint. There is no default value. If you don't specify a throttling configuration, it is absent from the response",
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
      name: "create-web-function-revision",
      description:
        "Creates an immutable revision for a web function. A revision represents a specific version of the function code and configuration. To use this operation, you must have the CreateWebFunctionRevision permission on the web function, not on the revision being created",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key used to encrypt the revision's code and environment variables",
          args: {
            name: "string",
          },
        },
        {
          name: "--build-config",
          description:
            "The build configuration for the revision, including code location and runtime settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-config",
          description:
            "The service configuration for the revision, including execution role, timeout, and concurrency settings",
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
      name: "delete-resource-policy",
      description: "Removes the resource-based policy from a web function",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the web function",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "The revision ID of the policy. Use this to prevent deleting a policy that has been updated since you last retrieved it. If you don't specify a value, the policy is deleted regardless of its current revision",
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
      name: "delete-web-function",
      description:
        "Deletes a web function and all of its associated revisions and endpoints. To use this operation, you must have the DeleteWebFunction permission on the web function. You don't need the DeleteWebFunctionRevision or DeleteWebFunctionEndpoint permission",
      options: [
        {
          name: "--function-name",
          description:
            "The web function to delete. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
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
      name: "delete-web-function-endpoint",
      description: "Deletes a web function endpoint",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "The endpoint to delete. You can specify either of the following:   The endpoint name, for example my-endpoint.   The endpoint ARN.   The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length",
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
      name: "delete-web-function-revision",
      description:
        "Deletes a web function revision. You cannot delete a revision that is currently serving traffic on an endpoint",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "The revision to delete. You can specify either of the following:   The revision identifier.   The revision ARN.   The length constraint applies only to the full ARN",
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
      name: "get-resource-policy",
      description:
        "Retrieves the resource-based policy attached to a web function",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the web function",
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
      name: "get-web-account-settings",
      description:
        "Retrieves details about your AWS Lambda Web Functions account settings for the current AWS Region, including the quotas that apply to web functions and your current usage",
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
      name: "get-web-function",
      description:
        "Retrieves details about a web function, including its current state and configuration",
      options: [
        {
          name: "--function-name",
          description:
            "The web function to retrieve. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
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
      name: "get-web-function-endpoint",
      description:
        "Retrieves details about a web function endpoint, including its current state, configuration, and domain name",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "The endpoint to retrieve. You can specify either of the following:   The endpoint name, for example my-endpoint.   The endpoint ARN.   The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length",
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
      name: "get-web-function-revision",
      description:
        "Retrieves details about a web function revision, including its state and configuration",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "The revision to retrieve. You can specify either of the following:   The revision identifier.   The revision ARN.   The length constraint applies only to the full ARN",
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
      name: "list-tags",
      description: "Returns a list of tags applied to a web function",
      options: [
        {
          name: "--resource",
          description: "The Amazon Resource Name (ARN) of the web function",
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
      name: "list-web-function-endpoints",
      description:
        "Lists endpoints for a web function. Use pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of filters to apply to the results. Supported filter names: authType, autoDeploymentMode, endpointType, state, and updateStatus. If you don't specify a filter, the operation returns all endpoints for the web function",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's returned by a previous request to retrieve the next page of results",
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
      name: "list-web-function-revisions",
      description:
        "Lists revisions for a web function. Use pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of filters to apply to the results. The only supported filter name is state. If you don't specify a filter, the operation returns all revisions for the web function",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's returned by a previous request to retrieve the next page of results",
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
      name: "list-web-functions",
      description:
        "Lists web functions in your account. Use pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--filters",
          description:
            "A list of filters to apply to the results. The only supported filter name is state. If you don't specify a filter, the operation returns all web functions",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's returned by a previous request to retrieve the next page of results",
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
      name: "put-resource-policy",
      description:
        "Adds or updates a resource-based policy on a web function. A resource-based policy grants permissions to other AWS accounts or services to perform actions on the web function",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the web function",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON-formatted resource-based policy to attach to the web function",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "The revision ID of the existing policy. Use this to prevent conflicts when updating a policy concurrently. If you don't specify a value, the update proceeds without checking the current revision",
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
        "Adds tags to a web function. If a tag key already exists, the existing value is overwritten with the new value",
      options: [
        {
          name: "--resource",
          description: "The Amazon Resource Name (ARN) of the web function",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of tag keys and values to add to the web function",
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
      description: "Removes tags from a web function",
      options: [
        {
          name: "--resource",
          description: "The Amazon Resource Name (ARN) of the web function",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of tag keys to remove from the web function",
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
      name: "update-web-function-endpoint",
      description:
        "Updates the configuration of a web function endpoint. You can modify the authorization type, auto-deployment mode, revision weights, scaling, and throttling settings",
      options: [
        {
          name: "--function-name",
          description:
            "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "The endpoint to update. You can specify either of the following:   The endpoint name, for example my-endpoint.   The endpoint ARN.   The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the endpoint. Omit this field to keep the current description",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-type",
          description:
            "The authorization type for the endpoint. Omit this field to keep the current authorization type. Valid values:    ApplicationManaged – Your application handles authorization.    IamAuth – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4)",
          args: {
            name: "string",
            suggestions: ["ApplicationManaged", "IamAuth"],
          },
        },
        {
          name: "--auto-deployment-mode",
          description:
            "The auto-deployment mode for the endpoint. Omit this field to keep the current auto-deployment mode. Valid values:    LatestRevision – The endpoint automatically serves the newest revision.    Disabled – Revision routing stays fixed until you change it",
          args: {
            name: "string",
            suggestions: ["LatestRevision", "Disabled"],
          },
        },
        {
          name: "--revision-weights",
          description:
            "A list of revision weights that determine how traffic is distributed across revisions",
          args: {
            name: "list",
          },
        },
        {
          name: "--scaling-config",
          description:
            "The scaling configuration for the endpoint. Omit this field to keep the current scaling configuration. To clear a previously set maxEnvironments value, specify an empty object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--throttle-config",
          description:
            "The throttling configuration for the endpoint. Omit this field to keep the current throttling configuration. To clear a previously set rateLimit value, specify an empty object",
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
      name: "deploy",
      description:
        "Deploys a local HTTP server to an AWS Lambda Web Function. The command creates a Web Function or deploys a new revision to an existing Web Function, applies the requested endpoint configuration, and returns the endpoint URL.\n\nThe ``deploy`` command coordinates API operations for common create and update workflows. For configuration that is not available through ``deploy``, such as weighted revision routing or connecting a Web Function to a VPC, use the ``aws lambda-web`` commands for specific API operations",
      options: [
        {
          name: "--name",
          description:
            "Name of the Web Function. The name must be between 2 and 64 characters long. It can contain letters, numbers, hyphens (-), and underscores (_). It cannot start or end with a hyphen or underscore",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "Path to the directory that contains the Web Function source code. This option is required when you create a Web Function unless you use ``--hello-world``. For an existing Web Function, omit this option to update configuration and reuse the deployed code. With ``--hello-world``, the default is ``./<name>``",
          args: {
            name: "string",
          },
        },
        {
          name: "--hello-world",
          description:
            "Create and deploy a minimal TypeScript starter that listens on port ``3000``. Set ``LOCAL_PORT`` to use a different port for local development. The starter uses ``nodejs24.x``. Only ``--name`` is required",
        },
        {
          name: "--create",
          description:
            "Confirm creation of a Web Function or endpoint without a prompt. If you omit this option in an interactive terminal, the command prompts for confirmation. In a non-interactive environment, you must specify this option when creation is required",
        },
        {
          name: "--runtime",
          description:
            "Runtime identifier for the Web Function. When you create a Web Function, the default is ``nodejs24.x``. When you update a Web Function, the command reuses its current runtime",
          args: {
            name: "string",
          },
        },
        {
          name: "--entry-point",
          description:
            "Path to the entry file, relative to ``--code``. The entry file must start the HTTP server. If you omit this option, the command checks the ``main`` and ``exports`` fields in ``package.json``, then checks common files such as ``index.js`` and ``server.js``. If the entry file is not ``index.js``, the command adds an ``index.js`` wrapper that imports it. To have the runtime load a file directly, set ``AWS_LAMBDA_NODEJS_ENTRYPOINT`` with ``--env`` instead. Do not use ``--entry-point`` and ``AWS_LAMBDA_NODEJS_ENTRYPOINT`` together",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "Amazon Resource Name (ARN) of an AWS Identity and Access Management (AWS IAM) execution role. When you create a Web Function and omit this option, the command creates a role named ``awscli-lambdaweb-<name>``. When you update a Web Function and omit this option, the command reuses its current role",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-name",
          description:
            "Name of an existing Amazon Simple Storage Service (Amazon S3) bucket for the deployment package. If you omit this option, the command uses a managed bucket named ``awscli-lambdaweb-<account-id>-<region>-an``",
          args: {
            name: "string",
          },
        },
        {
          name: "--env",
          description:
            "Environment variable in ``KEY=VALUE`` format. To specify multiple variables, repeat this option for each variable. For example, ``--env KEY1=VALUE1 --env KEY2=VALUE2``. For an existing Web Function, the command adds or replaces the specified keys and preserves other variables. To remove a variable, use ``--unset-env``. To select the file that the runtime loads, set ``AWS_LAMBDA_NODEJS_ENTRYPOINT`` with this option. Do not use ``AWS_LAMBDA_NODEJS_ENTRYPOINT`` with ``--entry-point``",
          args: {
            name: "string",
          },
        },
        {
          name: "--unset-env",
          description:
            "Name of an environment variable to remove from an existing Web Function. You can specify this option multiple times. The command applies this option after ``--env``, so removal takes precedence when you specify the same key with both options. This option has no effect when you create a Web Function",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout-seconds",
          description:
            "Maximum amount of time, in seconds, that the Web Function can run. When you update a Web Function and omit this option, the command reuses its current timeout",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-concurrency-per-environment",
          description:
            "Maximum number of concurrent requests that each execution environment can process. When you update a Web Function and omit this option, the command reuses its current value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "ARN of the AWS Key Management Service (AWS KMS) key that encrypts the Web Function revision's code and environment variables. This key doesn't encrypt the deployment package in Amazon S3. When you update a Web Function and omit this option, the command reuses its current AWS KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-log-level",
          description:
            "Minimum log level for application logs. When you update a Web Function and omit this option, the command reuses its current application log level",
          args: {
            name: "string",
          },
        },
        {
          name: "--system-log-level",
          description:
            "Minimum log level for system logs. When you update a Web Function and omit this option, the command reuses its current system log level",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-description",
          description: "Description for the revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-hidden-files",
        },
        {
          name: "--force-include",
          description:
            "Path to a regular file, relative to ``--code``, to include when the command would otherwise exclude it. To include multiple files, repeat this option. To include a file from a hidden directory, also use ``--include-hidden-files``. This option cannot include symlinks or files inside an excluded directory. Verify that each file does not contain credentials or other secrets. Use AWS Secrets Manager for runtime secrets",
          args: {
            name: "string",
          },
        },
        {
          name: "--no-wait",
          description:
            "Return without waiting for endpoint activation. When you create a Web Function, the initial endpoint is included in the request. When you update a Web Function and request an endpoint change, the command waits for the revision to become ``Active``, submits the endpoint change, and then returns",
        },
        {
          name: "--activation-timeout",
          description:
            "Maximum time, in seconds, to wait for activation. Default: 600",
          args: {
            name: "integer",
          },
        },
        {
          name: "--progress-frequency",
          description:
            "Interval, in seconds, between progress messages while the command waits for activation. Default: 5",
          args: {
            name: "integer",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "Name of the endpoint to deploy. When you create a Web Function, the default is ``dev``. For an existing Web Function, the command updates the named endpoint or creates it after confirmation",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-type",
          description:
            "Type of endpoint to create. When you create an endpoint and omit this option, the command uses ``HomeRegion``. After you create an endpoint, you cannot change its type. You can create another endpoint with a different type",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-type",
          description:
            "Authorization type for the endpoint. When you create an endpoint and omit this option, the command uses ``ApplicationManaged``. When you update an endpoint and omit this option, the command preserves its current authorization type",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-deployment-mode",
          description:
            "Automatic deployment mode for the endpoint. The default for a ``HomeRegion`` endpoint is ``LatestRevision``. ``MultiRegion`` and ``PerRegion`` endpoints use ``Disabled``. ``LatestRevision`` serves the newest revision. ``Disabled`` serves the configured revision weights. For an existing endpoint, omit this option to preserve its current mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--regions",
          description:
            "Comma-separated list of AWS Region codes for a ``MultiRegion`` or ``PerRegion`` endpoint. For example, ``--endpoint-type MultiRegion --regions us-east-1,us-west-2``. Include at least one AWS Region other than the home Region. For a ``HomeRegion`` endpoint, omit this option or specify only the home Region. The ``--region`` option or your AWS CLI configuration determines the home Region where the CLI sends the deploy request. You cannot change the AWS Regions after the endpoint is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tag in ``KEY=VALUE`` format to apply to the Web Function. To specify multiple tags, repeat this option for each tag. For example, ``--tags KEY1=VALUE1 --tags KEY2=VALUE2``. When you update a Web Function, the command adds or replaces the specified tags and preserves tags with other keys. To remove tags, use ``aws lambda-web untag-resource`` with the Web Function ARN and ``--tag-keys``",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-environments",
          description:
            "Maximum number of concurrent execution environments for the endpoint. When you update an existing endpoint, omit this option to preserve its current value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--rate-limit",
          description:
            "Maximum number of requests per second for the endpoint. The supported values and effective limit can vary by AWS account or AWS Region. When you update an existing endpoint, omit this option to preserve its current value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--description",
          description:
            "Description for the endpoint. For an existing endpoint, the command updates the description when this value differs from the current description",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "web-function-active",
          description:
            "Waits for the web function's state to be Active. This should be used after new function creation. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 300 failed checks",
          options: [
            {
              name: "--function-name",
              description:
                "The web function to retrieve. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
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
          name: "web-function-deleted",
          description:
            "Waits for the web function to be deleted. This should be used after function deletion. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 300 failed checks",
          options: [
            {
              name: "--function-name",
              description:
                "The web function to retrieve. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
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
          name: "web-function-endpoint-active",
          description:
            "Waits for the web function endpoint's state to be Active. This should be used after new endpoint creation. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 300 failed checks",
          options: [
            {
              name: "--function-name",
              description:
                "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
              args: {
                name: "string",
              },
            },
            {
              name: "--endpoint-name",
              description:
                "The endpoint to retrieve. You can specify either of the following:   The endpoint name, for example my-endpoint.   The endpoint ARN.   The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length",
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
          name: "web-function-endpoint-deleted",
          description:
            "Waits for the web function endpoint to be deleted. This should be used after endpoint deletion. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 300 failed checks",
          options: [
            {
              name: "--function-name",
              description:
                "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
              args: {
                name: "string",
              },
            },
            {
              name: "--endpoint-name",
              description:
                "The endpoint to retrieve. You can specify either of the following:   The endpoint name, for example my-endpoint.   The endpoint ARN.   The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length",
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
          name: "web-function-endpoint-updated",
          description:
            "Waits for the web function endpoint's update status to be Successful. This should be used after endpoint updates. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 300 failed checks",
          options: [
            {
              name: "--function-name",
              description:
                "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
              args: {
                name: "string",
              },
            },
            {
              name: "--endpoint-name",
              description:
                "The endpoint to retrieve. You can specify either of the following:   The endpoint name, for example my-endpoint.   The endpoint ARN.   The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length",
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
          name: "web-function-revision-active",
          description:
            "Waits for the web function revision's state to be Active. This should be used after new revision creation. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 300 failed checks",
          options: [
            {
              name: "--function-name",
              description:
                "The web function. You can specify either of the following:   The function name, for example my-function.   The function ARN.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length",
              args: {
                name: "string",
              },
            },
            {
              name: "--revision-id",
              description:
                "The revision to retrieve. You can specify either of the following:   The revision identifier.   The revision ARN.   The length constraint applies only to the full ARN",
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
    },
  ],
};

export default completionSpec;
