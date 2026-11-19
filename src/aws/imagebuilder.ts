const completionSpec: Fig.Spec = {
  name: "imagebuilder",
  description:
    "EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. You can build Amazon Machine Images (AMIs) and container images that are pre-installed and pre-configured with software and settings to meet specific IT standards. For an introduction to the service concepts that these API operations work with, see How Image Builder works in the EC2 Image Builder User Guide",
  subcommands: [
    {
      name: "cancel-image-creation",
      description:
        "Cancels the creation of an image. This operation can only be used on images in a non-terminal state. Cancellation is asynchronous: the request returns immediately, then Image Builder stops the running build and moves the image to the CANCELLED state. Output resources that the build already created, such as AMIs and snapshots, aren't removed",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image that you want to cancel creation for",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "cancel-lifecycle-execution",
      description:
        "Cancels a lifecycle execution – a single run of lifecycle actions that a lifecycle policy or a StartResourceStateUpdate request started. You can only cancel an execution that hasn't reached a terminal state. Cancellation is asynchronous and doesn't undo completed lifecycle actions",
      options: [
        {
          name: "--lifecycle-execution-id",
          description:
            "Identifies the specific runtime instance of the image lifecycle to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "create-component",
      description:
        "Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:   Inline, using the data property in the request body.   A URL that points to a YAML document file stored in Amazon S3, using the uri property in the request body.   Image Builder determines the component type from the document. If the document contains a single phase named test, the component type is TEST. Otherwise, the component type is BUILD",
      options: [
        {
          name: "--name",
          description:
            "The name of the component. Image Builder generates the component ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If a component with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the request creates a new build version for it. If the content is also identical to the latest build version, the request fails because the component already exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the component. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Describes the contents of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-description",
          description:
            "The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description: "The operating system platform of the component",
          args: {
            name: "string",
            suggestions: ["Windows", "Linux", "macOS"],
          },
        },
        {
          name: "--supported-os-versions",
          description:
            "The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation",
          args: {
            name: "list",
          },
        },
        {
          name: "--data",
          description:
            "Component data contains inline YAML document content for the component. Alternatively, you can specify the uri of a YAML document file stored in Amazon S3. However, you cannot specify both properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The uri of a YAML component document file. This must be an S3 URL (s3://bucket/key), and you must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota for component size, which is 64 KB by default. Alternatively, you can specify the YAML document inline, using the component data property. You cannot specify both properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt this component. This can be either the Key ARN or the Alias ARN. For more information, see Key identifiers (KeyId) in the Key Management Service Developer Guide. If you don't specify a key, Image Builder encrypts the component data with a KMS key that Image Builder owns",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags that apply to the component",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "create-container-recipe",
      description:
        "Creates a new container recipe. Container recipes define how images are configured, tested, and assessed",
      options: [
        {
          name: "--container-type",
          description: "The type of container to create",
          args: {
            name: "string",
            suggestions: ["DOCKER"],
          },
        },
        {
          name: "--name",
          description:
            "The name of the container recipe. The recipe name, combined with the semantic version, must be unique to your account in each Amazon Web Services Region. Image Builder generates the container recipe ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the container recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the container recipe. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--components",
          description:
            "The components included in the container recipe. You can specify each component only one time in a recipe",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-configuration",
          description:
            "A group of options that can be used to configure an instance for building and testing container images",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dockerfile-template-data",
          description:
            "The Dockerfile template used to build your image, as an inline data blob. You must specify exactly one of the dockerfileTemplateData or dockerfileTemplateUri properties. For the contextual variables that the template can include, see Create a new version of a container recipe in the EC2 Image Builder User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--dockerfile-template-uri",
          description:
            "The Amazon S3 URI for the Dockerfile template that is used to build your container image. You must have permission to read the object. Image Builder reads the object once, when it creates the recipe, and stores its content in the recipe. Later changes to the S3 object don't affect the recipe. You must specify exactly one of the dockerfileTemplateData or dockerfileTemplateUri properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform-override",
          description:
            "Specifies the operating system platform when you use a custom base image. Container recipes support only the Linux and Windows platforms",
          args: {
            name: "string",
            suggestions: ["Windows", "Linux", "macOS"],
          },
        },
        {
          name: "--image-os-version-override",
          description:
            "Specifies the operating system version for the base image. Use this property only when the base image is a container image from a registry. When the base image is an Image Builder image, the operating system version comes from the parent image",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-image",
          description:
            "The base image for the container recipe. This can be an Image Builder image resource ARN or a container image URI from a registry, for example amazonlinux:latest",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags that are attached to the container recipe",
          args: {
            name: "map",
          },
        },
        {
          name: "--working-directory",
          description:
            "The working directory for use during build and test workflows",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-repository",
          description:
            "The destination repository for the container image. The Amazon ECR repository must already exist in the Amazon Web Services Region where the build runs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies which KMS key is used to encrypt the Dockerfile template. This can be either the Key ARN or the Alias ARN. For more information, see Key identifiers (KeyId) in the Key Management Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "create-distribution-configuration",
      description:
        "Creates a new distribution configuration. Distribution configurations define and configure the outputs for your images, including the target Regions, accounts, and settings for each Region",
      options: [
        {
          name: "--name",
          description:
            "The name of the distribution configuration. Distribution configuration names must be unique to your account in each Amazon Web Services Region. Image Builder generates the distribution configuration ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the distribution configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--distributions",
          description:
            "The distribution settings for the configuration. Each entry defines how output images are distributed in one target Amazon Web Services Region. A Region can appear at most once in the list",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags of the distribution configuration",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "create-image",
      description:
        "Creates a new image along with all configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a containerRecipeArn or an imageRecipeArn. The response returns as soon as Image Builder creates the new image resource. The image build process runs asynchronously. To check its progress, call GetImage and check the image status",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. You must specify either this property or containerRecipeArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested. You must specify either this property or imageRecipeArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of the image build. If you don't specify a distribution configuration, Image Builder creates the output image only in the account and Amazon Web Services Region where the build runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tests-configuration",
          description:
            "Settings that determine whether Image Builder runs tests on the image after building it. Image tests are enabled by default",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enhanced-image-metadata-enabled",
          description:
            "Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to true",
        },
        {
          name: "--no-enhanced-image-metadata-enabled",
          description:
            "Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to true",
        },
        {
          name: "--tags",
          description: "The tags of the image",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description:
            "The settings that determine whether and how Amazon Inspector scans the image for vulnerabilities",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workflows",
          description:
            "The array of workflow configuration objects for the build. If you specify workflows, they replace the default workflows that Image Builder otherwise runs for the build, and you must also provide an executionRole",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions. This property is required if you specify workflows. If you don't provide a role, Image Builder uses the Image Builder service-linked role in your account, and creates it if it doesn't exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "The CloudWatch Logs log group where Image Builder sends the image build logs. If you specify a log group name outside of the /aws/imagebuilder/ namespace, you must also provide an executionRole that has permission to write to that log group",
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
      name: "create-image-pipeline",
      description:
        "Creates a new image pipeline. Use image pipelines to automate the creation and distribution of images. You must specify exactly one recipe for the pipeline, using either a containerRecipeArn or an imageRecipeArn",
      options: [
        {
          name: "--name",
          description:
            "The name of the image pipeline. Pipeline names must be unique to your account in each Amazon Web Services Region. Image Builder generates the pipeline ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that configures images created by this image pipeline. You must specify either this property or containerRecipeArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline. You must specify either this property or imageRecipeArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that builds images created by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that configures and distributes images created by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tests-configuration",
          description:
            "Specifies the test settings that Image Builder applies to images that this pipeline creates. If you don't provide test settings, Image Builder stores a default configuration with image tests enabled",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enhanced-image-metadata-enabled",
          description:
            "Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to true",
        },
        {
          name: "--no-enhanced-image-metadata-enabled",
          description:
            "Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to true",
        },
        {
          name: "--schedule",
          description:
            "The schedule of the image pipeline. If you don't provide a schedule, the pipeline runs only when you call StartImagePipelineExecution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description:
            "The status of the image pipeline. If you don't specify a status, it defaults to ENABLED. A disabled pipeline doesn't run on its schedule, but you can still start builds manually",
          args: {
            name: "string",
            suggestions: ["DISABLED", "ENABLED"],
          },
        },
        {
          name: "--tags",
          description: "The tags of the image pipeline",
          args: {
            name: "map",
          },
        },
        {
          name: "--image-tags",
          description:
            "The tags that Image Builder applies to the Image Builder image resource that this pipeline's scheduled executions create. These tags don't apply to the output AMI. To tag output AMIs, use amiTags in the pipeline's distribution configuration",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description:
            "The settings that determine whether and how Amazon Inspector scans the images that this pipeline creates",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workflows",
          description:
            "The array of workflow configuration objects for builds that this pipeline starts. If you specify workflows, they replace the default workflows that Image Builder otherwise runs for the pipeline's builds. For example, if your list doesn't include a test workflow, the pipeline's builds don't run one. You must also specify executionRole when you provide workflows",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "Specifies the logging configuration for the image pipeline. Use this to define custom CloudWatch Logs log groups for your pipeline execution logs and image build logs. The service manages log groups with names starting with /aws/imagebuilder/ using the service-linked role. For custom log group names outside of this prefix, you must also provide an executionRole",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "create-image-recipe",
      description:
        "Creates a new image recipe. Image recipes define how images are configured, tested, and assessed",
      options: [
        {
          name: "--name",
          description:
            "The name of the image recipe. The recipe name, combined with the semantic version, must be unique to your account in each Amazon Web Services Region. Image Builder generates the image recipe ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the image recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the image recipe. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--components",
          description:
            "The components included in the image recipe. Components are optional. A recipe with no components bakes the base image without additional customization. You can specify each component only one time in a recipe. Components with a status of DEPRECATED or DISABLED can't be added to new recipes",
          args: {
            name: "list",
          },
        },
        {
          name: "--parent-image",
          description:
            "The base image for customizations specified in the image recipe. You can specify the parent image using one of the following options:   AMI ID   Image Builder image Amazon Resource Name (ARN)   Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by ssm:, followed by the parameter name or ARN.   Amazon Web Services Marketplace product ID   If you enter an AMI ID or an SSM parameter that contains the AMI ID, you must have access to the AMI. The AMI must also be in the Region where you're creating the recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--block-device-mappings",
          description:
            "The block device mappings that Image Builder applies to the build instance and the output AMI. For example, you can override the size of the base image's root volume or attach additional EBS volumes",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags of the image recipe",
          args: {
            name: "map",
          },
        },
        {
          name: "--working-directory",
          description:
            "The working directory used during build and test workflows. If you don't specify a working directory, Image Builder uses /tmp for Linux and macOS build instances, and C:/ for Windows build instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-instance-configuration",
          description:
            "The additional settings and launch scripts for your build instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ami-tags",
          description:
            "Tags that are applied to the AMI that Image Builder creates during the Build phase prior to image distribution",
          args: {
            name: "map",
          },
        },
        {
          name: "--ami-watermarks",
          description:
            "The AMI watermark names to attach to the output AMI from this recipe. AMI watermarks are lineage markers. They automatically propagate to derivative AMIs when the source AMI is copied or distributed across Regions or accounts.  AMI watermarks are supported only for image recipes. AMIs with watermarks cannot be made public",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "create-infrastructure-configuration",
      description:
        "Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested",
      options: [
        {
          name: "--name",
          description:
            "The name of the infrastructure configuration. Infrastructure configuration names must be unique to your account in each Amazon Web Services Region. Image Builder generates the infrastructure configuration ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the infrastructure configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-types",
          description:
            "The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. Image Builder picks one of these instance types based on availability. If you don't specify instance types, Image Builder selects compatible instance types automatically. If you specify a Dedicated Host, Image Builder uses only instance types that the host supports",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-profile-name",
          description:
            "The instance profile to associate with the instance used to customize your Amazon EC2 AMI. The instance profile must exist in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The security group IDs to associate with the instance used to customize your Amazon EC2 AMI",
          args: {
            name: "list",
          },
        },
        {
          name: "--subnet-id",
          description:
            "The subnet ID in which to place the instance used to customize your Amazon EC2 AMI. If you specify subnetId, you must also specify one or more security group IDs in securityGroupIds. Otherwise, the request fails",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging",
          description:
            "The logging configuration of the infrastructure configuration. When you configure S3 logs, Image Builder writes logs from the build and test process to the specified bucket under the key prefix",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-pair",
          description:
            "The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminate-instance-on-failure",
          description:
            "Specifies whether to terminate the instance on failure. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. Defaults to true",
        },
        {
          name: "--no-terminate-instance-on-failure",
          description:
            "Specifies whether to terminate the instance on failure. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. Defaults to true",
        },
        {
          name: "--terminate-instance-on-completion",
          description:
            "Specifies whether Image Builder terminates build and test instances when image creation ends without a failure (success, cancellation, or expiration). Defaults to true",
        },
        {
          name: "--no-terminate-instance-on-completion",
          description:
            "Specifies whether Image Builder terminates build and test instances when image creation ends without a failure (success, cancellation, or expiration). Defaults to true",
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the SNS topic to which Image Builder sends image build event notifications. Specify a standard topic. Image Builder doesn't support FIFO topics. Image Builder validates the topic when you create or update the configuration. You must have permission to publish to the topic.  EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys from other accounts. If your SNS topic is encrypted, the key must be owned by the same account that owns your Image Builder resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description:
            "The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process. Tags are formatted as key value pairs. Tag keys can't begin with aws: or match one of the following reserved keys: CreatedBy, Ec2ImageBuilderArn, Name, or Tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--instance-metadata-options",
          description:
            "The instance metadata service (IMDS) settings that Image Builder applies to the EC2 build and test instances it launches during image creation. If you don't set these options, the EC2 launch defaults for the instance apply. For more information about instance metadata options, see one of the following links:    Configure the instance metadata options in the  Amazon EC2 User Guide  for Linux instances.    Configure the instance metadata options in the  Amazon EC2 Windows Guide  for Windows instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata tags to assign to the infrastructure configuration resource that Image Builder creates as output. Tags are formatted as key value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--placement",
          description:
            "The instance placement settings that define where the build and test instances that Image Builder launches during image creation run. These settings don't affect instances that you launch from the output image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-instance",
          description:
            "The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, instead of launching a new instance. This applies only to the build phase. To use this feature, the execution role for the build must have permissions to describe the Auto Scaling group, tag the instance while it's still in the group, and detach it from the group. For more information, see Build on an instance from an Auto Scaling group in the EC2 Image Builder User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "create-lifecycle-policy",
      description: "Creates a lifecycle policy resource",
      options: [
        {
          name: "--name",
          description:
            "The name of the lifecycle policy to create. Policy names must be unique to your account in each Amazon Web Services Region. Image Builder generates the policy ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. You can't change the name after creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Optional description for the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates whether the lifecycle policy resource is enabled. If you don't specify a status, it defaults to ENABLED. Only enabled policies run on their schedule",
          args: {
            name: "string",
            suggestions: ["DISABLED", "ENABLED"],
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions. You must have permission to pass the role, and the role's trust policy must allow the Image Builder service principal to assume it",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of Image Builder resource that the lifecycle policy applies to. The resource type determines the allowed rule actions: policies for AMI-based Image Builder images support DELETE, DEPRECATE, and DISABLE, and policies for container-based Image Builder images support only DELETE. You can't change the resource type after creation",
          args: {
            name: "string",
            suggestions: ["AMI_IMAGE", "CONTAINER_IMAGE"],
          },
        },
        {
          name: "--policy-details",
          description:
            "Configuration details for the lifecycle policy rules. A policy can contain at most one rule per action type: one DELETE, one DEPRECATE, and one DISABLE",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-selection",
          description:
            "Selection criteria for the resources that the lifecycle policy applies to. You must specify exactly one selection criteria: either recipes or a tag map, not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags to apply to the lifecycle policy resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "create-workflow",
      description:
        "Creates a new workflow or a new version of an existing workflow. If a workflow with the same name and semantic version already exists, and your request changes its configuration, Image Builder creates a new build version. If the configuration is identical to the latest build version, the request fails because that workflow configuration already exists",
      options: [
        {
          name: "--name",
          description:
            "The name of the workflow to create. Image Builder generates the workflow ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If a workflow with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the request creates a new build version for it. If the content is also identical to the latest build version, the request fails because the workflow already exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of this workflow resource. The semantic version syntax adheres to the following rules.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Describes the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-description",
          description:
            "Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "The UTF-8 encoded YAML document content for the workflow, up to 16,000 characters. For larger documents, store the document in Amazon S3 and specify the uri property instead. You must specify exactly one of the data or uri properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The uri of a YAML workflow document file stored in Amazon S3. This must be an S3 URL (s3://bucket/key), and you must have permission to access the S3 bucket it points to. A workflow document that you provide from Amazon S3 can be up to your service quota for workflow size. Alternatively, you can specify the YAML document inline, using the workflow data property. You must specify exactly one of the data or uri properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt this workflow resource. This can be either the Key ARN or the Alias ARN. For more information, see Key identifiers (KeyId) in the Key Management Service Developer Guide. If you don't specify a key, Image Builder encrypts the workflow document with a KMS key that Image Builder owns",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags that apply to the workflow resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The image creation stage that this workflow applies to. Image Builder validates the workflow document steps against the stage you specify",
          args: {
            name: "string",
            suggestions: ["BUILD", "TEST", "DISTRIBUTION"],
          },
        },
        {
          name: "--dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
        },
        {
          name: "--no-dry-run",
          description:
            "Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a DryRunOperationException error response",
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
      name: "delete-component",
      description:
        "Deletes a component build version. The request fails with ResourceDependencyException if an image recipe or container recipe references this component version. It also fails if the component build version is shared with other accounts",
      options: [
        {
          name: "--component-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the component build version to delete",
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
      name: "delete-container-recipe",
      description:
        "Deletes a container recipe. The request fails with ResourceDependencyException if the recipe is shared with other accounts, or if an image pipeline references it",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe to delete",
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
      name: "delete-distribution-configuration",
      description:
        "Deletes a distribution configuration. You can't delete a configuration that an image pipeline still references. The request fails with ResourceDependencyException. Update or delete the referencing pipelines first",
      options: [
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration to delete",
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
      name: "delete-image",
      description:
        "Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands. The request fails with ResourceDependencyException if the image is shared with other accounts, or if other resources depend on it. It also fails while the image build is still running. Cancel an in-progress build with CancelImageCreation before you delete the image.   To deregister an EC2 Linux AMI, see Deregister your Linux AMI in the  Amazon EC2 User Guide .   To deregister an EC2 Windows AMI, see Deregister your Windows AMI in the  Amazon EC2 Windows Guide .   To delete a container image from Amazon ECR, see Deleting an image in the Amazon ECR User Guide",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the Image Builder image resource to delete",
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
      name: "delete-image-pipeline",
      description:
        "Deletes an image pipeline. Images that the pipeline created aren't deleted - remove those separately with DeleteImage. You can delete a pipeline while a build that it started is still running. The build continues independently",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline to delete",
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
      name: "delete-image-recipe",
      description: "Deletes an image recipe",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe to delete",
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
      name: "delete-infrastructure-configuration",
      description:
        "Deletes an infrastructure configuration. You can't delete a configuration that an image pipeline still references. The request fails with ResourceDependencyException. Update or delete the referencing pipelines first",
      options: [
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration to delete",
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
      name: "delete-lifecycle-policy",
      description:
        "Deletes the specified lifecycle policy resource. Deleting the policy removes its schedule, so no further lifecycle runs occur for that policy. If a lifecycle execution is in progress for the policy, Image Builder cancels it. Deletion doesn't revert actions that the policy already applied to your resources",
      options: [
        {
          name: "--lifecycle-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the lifecycle policy resource to delete",
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
      name: "delete-workflow",
      description:
        "Deletes a specific workflow resource. You can't delete a workflow build version while an image pipeline references it. The request fails with ResourceDependencyException",
      options: [
        {
          name: "--workflow-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the workflow resource to delete",
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
      name: "distribute-image",
      description:
        "Distributes an existing AMI to target Regions and accounts without running the full image build process. This operation only runs the distribution phase on an image that has already been built",
      options: [
        {
          name: "--source-image",
          description:
            "The source image to distribute. You can specify the source in any of the following formats:   An AMI ID.   An Amazon Web Services Systems Manager Parameter Store reference, prefixed by ssm:, followed by the parameter name or ARN.   An Image Builder image Amazon Resource Name (ARN). An image version ARN resolves to the latest available build version.   Whichever format you use, the source must resolve to an AMI in the current Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration. The configuration defines target Regions, accounts, and AMI settings. The distribution configuration must be in the same Region as this operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role that Image Builder assumes to distribute the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to apply to the new Image Builder image resource that this operation creates. To tag the output AMIs, use amiTags in the distribution configuration",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description: "The logging configuration for the distribution",
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
      name: "get-component",
      description: "Retrieves a component object",
      options: [
        {
          name: "--component-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the component that you want to get. You can specify a build version ARN, or a component version ARN. The version can use the x wildcard in trailing positions, for example 1.0.x or 1.x.x. Version ARNs resolve to the latest available matching component build version",
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
      name: "get-component-policy",
      description: "Retrieves a component policy",
      options: [
        {
          name: "--component-arn",
          description:
            "The Amazon Resource Name (ARN) of the component whose policy you want to retrieve",
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
      name: "get-container-recipe",
      description: "Retrieves a container recipe",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe to retrieve",
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
      name: "get-container-recipe-policy",
      description: "Retrieves the policy for a container recipe",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe for the policy being requested",
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
      name: "get-distribution-configuration",
      description: "Retrieves a distribution configuration",
      options: [
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve",
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
      name: "get-image",
      description: "Retrieves an image",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image that you want to get. You can specify a full build version ARN, or a version ARN with or without wildcards (x.x.x, 1.x.x, or 1.0.x). A version or wildcard ARN resolves to the latest matching build version that has reached AVAILABLE status. Builds that were later deprecated, disabled, or deleted don't resolve. To get an image in any other state, such as a failed or in-progress build, specify the full build version ARN",
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
      name: "get-image-pipeline",
      description: "Retrieves an image pipeline",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve",
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
      name: "get-image-policy",
      description: "Retrieves an image policy",
      options: [
        {
          name: "--image-arn",
          description:
            "The Amazon Resource Name (ARN) of the image whose policy you want to retrieve",
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
      name: "get-image-recipe",
      description: "Retrieves an image recipe",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that you want to retrieve. You can use the x wildcard in trailing version positions to retrieve the latest matching version, for example x.x.x or 1.x.x",
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
      name: "get-image-recipe-policy",
      description: "Retrieves an image recipe policy",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve",
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
      name: "get-infrastructure-configuration",
      description: "Retrieves an infrastructure configuration",
      options: [
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve",
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
      name: "get-lifecycle-execution",
      description:
        "Retrieves runtime information for a lifecycle execution – a single run of lifecycle actions that a lifecycle policy or a StartResourceStateUpdate request started",
      options: [
        {
          name: "--lifecycle-execution-id",
          description:
            "The unique identifier for a runtime instance of the lifecycle policy",
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
      name: "get-lifecycle-policy",
      description: "Retrieves details for the specified image lifecycle policy",
      options: [
        {
          name: "--lifecycle-policy-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the image lifecycle policy resource to get",
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
      name: "get-marketplace-resource",
      description:
        "Verifies the subscription and performs resource dependency checks on the requested Amazon Web Services Marketplace resource. The caller must be entitled to the resource. For Amazon Web Services Marketplace components, the response contains fields to download the components and their artifacts",
      options: [
        {
          name: "--resource-type",
          description:
            "Specifies which type of Amazon Web Services Marketplace resource Image Builder retrieves",
          args: {
            name: "string",
            suggestions: ["COMPONENT_DATA", "COMPONENT_ARTIFACT"],
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an Amazon Web Services Marketplace resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-location",
          description:
            "The Amazon S3 location of the component artifact to retrieve, in s3://bucket/key form",
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
      name: "get-workflow",
      description: "Retrieves a workflow resource object",
      options: [
        {
          name: "--workflow-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the workflow resource that you want to get. You can specify a build version ARN, or a version ARN with or without wildcards (x) in its version segments. Image Builder resolves version and wildcard ARNs to the most recent matching build version",
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
      name: "get-workflow-execution",
      description:
        "Retrieves runtime information for a specific runtime instance of the workflow",
      options: [
        {
          name: "--workflow-execution-id",
          description:
            "Use the unique identifier for a runtime instance of the workflow to get runtime details",
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
      name: "get-workflow-step-execution",
      description:
        "Retrieves runtime information for a specific runtime instance of the workflow step",
      options: [
        {
          name: "--step-execution-id",
          description:
            "The unique identifier for the runtime instance of the workflow step that you want to get runtime details for. To get the identifiers for the steps that ran in a workflow, call ListWorkflowStepExecutions",
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
      name: "import-component",
      description:
        "Imports a component and transforms its data into a component document. For the SHELL format, Image Builder wraps your script in a component document with a single step that runs the script",
      options: [
        {
          name: "--name",
          description:
            "The name of the component. Image Builder generates the component ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If a component with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the request creates a new build version for it. If the content is also identical to the latest build version, the request fails because the component already exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the component. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the component. Describes the contents of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-description",
          description:
            "The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the component denotes whether the component is used to build the image, or only to test it",
          args: {
            name: "string",
            suggestions: ["BUILD", "TEST"],
          },
        },
        {
          name: "--format",
          description:
            "The format of the resource that you want to import as a component",
          args: {
            name: "string",
            suggestions: ["SHELL"],
          },
        },
        {
          name: "--platform",
          description: "The platform of the component",
          args: {
            name: "string",
            suggestions: ["Windows", "Linux", "macOS"],
          },
        },
        {
          name: "--data",
          description:
            "The data of the component. For the SHELL format, this is the plain script content. You must specify exactly one of the data or uri properties. For scripts that exceed the inline length constraint, use the uri property",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The uri of the component. Must be an Amazon S3 URL and you must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either data or uri can be used to specify the data within the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) of the KMS key that is used to encrypt this component. This can be either the Key ARN or the Alias ARN. For more information, see Key identifiers (KeyId) in the Key Management Service Developer Guide. If you don't specify a key, Image Builder encrypts the component data with a KMS key that Image Builder owns",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags of the component",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "import-disk-image",
      description:
        "Imports a Windows operating system image from a verified Microsoft ISO disk file. The following disk images are supported:   Windows 11 Enterprise   The response returns as soon as Image Builder creates the new image resource in the PENDING state. The conversion from ISO file to AMI then runs asynchronously on an EC2 instance that Image Builder launches with the specified infrastructure configuration",
      options: [
        {
          name: "--name",
          description:
            "The name of the image resource that's created from the import. Image Builder generates the image ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If an image with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the import creates a new build version for it",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version to attach to the image that's created during the import process. This version follows the semantic version syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for your disk image import",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description:
            "The operating system platform for the imported image. Allowed values include the following: Windows",
          args: {
            name: "string",
          },
        },
        {
          name: "--os-version",
          description:
            "The operating system version for the imported image. The only supported value is Microsoft Windows 11",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions to import an image from a Microsoft ISO file. If you don't provide a role, Image Builder uses the Image Builder service-linked role in your account, and creates it if it doesn't exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration resource that's used for launching the EC2 instance on which the ISO image is built",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The uri of the ISO disk file that's stored in Amazon S3, in s3://bucket/key format. The key must end with the .iso, .ISO, or .Iso extension, and the bucket must be owned by the account that makes the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "The CloudWatch Logs log group where Image Builder sends the import logs. If you specify a log group name outside of the /aws/imagebuilder/ namespace, you must also provide an executionRole that has permission to write to that log group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Tags that are attached to image resources created from the import",
          args: {
            name: "map",
          },
        },
        {
          name: "--register-image-options",
          description:
            "Configures Secure Boot and UEFI settings for the imported image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--windows-configuration",
          description: "Specifies Windows settings for ISO imports",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "import-vm-image",
      description:
        "Creates an Image Builder image resource from an Amazon EC2 VM import task. The response returns as soon as Image Builder creates the image resource in the PENDING state. Image Builder then monitors the import task asynchronously. When the task completes, Image Builder records the AMI that it produced as the new image's output resource and marks the image AVAILABLE. You can then use the imported image as the base image for your recipes. To create the VM import task, use the Amazon EC2 API ImportImage operation, or the import-image CLI command",
      options: [
        {
          name: "--name",
          description:
            "The name of the base image that is created by the import process. Image Builder generates the image ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If an image with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the import creates a new build version for it",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description for the base image that is created by the import process",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description: "The operating system platform for the imported VM",
          args: {
            name: "string",
            suggestions: ["Windows", "Linux", "macOS"],
          },
        },
        {
          name: "--os-version",
          description: "The operating system version for the imported VM",
          args: {
            name: "string",
          },
        },
        {
          name: "--vm-import-task-id",
          description:
            "The importTaskId (API) or ImportTaskId (CLI) from the Amazon EC2 VM import process. The import task doesn't need to be complete when you call ImportVmImage - Image Builder monitors the task and finishes creating the image when the task completes",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "The CloudWatch Logs log group where Image Builder sends the import logs. For ImportVmImage, the log group name must be within the /aws/imagebuilder/ namespace",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags that are attached to the import resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "list-component-build-versions",
      description:
        "Returns a list of component build versions for the specified component version ARN. You can only list build versions for components that your account owns. Deprecated build versions aren't included in the results",
      options: [
        {
          name: "--component-version-arn",
          description:
            "The component version ARN whose build versions you want to list. The ARN must specify an exact version, without a build number suffix. If you don't specify an ARN, Image Builder returns build versions for the components that your account owns. If the ARN that you specify doesn't exist, Image Builder returns an empty list rather than a ResourceNotFoundException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-components",
      description:
        "Returns the list of components that you have access to. By default, the response doesn't include components in the DEPRECATED state. To list deprecated components, use the status filter with the value DEPRECATED.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Filtering: You can use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards",
      options: [
        {
          name: "--owner",
          description:
            "Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, components from the Amazon Web Services Marketplace, third party components, or components that other accounts have shared with you",
          args: {
            name: "string",
            suggestions: [
              "Self",
              "Shared",
              "Amazon",
              "ThirdParty",
              "AWSMarketplace",
            ],
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    description     name     platform     productCodes     status     supportedOsVersion     type     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--by-name",
          description:
            "Specifies whether to return one entry per component name, with all versions of each component aggregated. Defaults to false, which returns one entry per component version. You can't combine this option with the version filter",
        },
        {
          name: "--no-by-name",
          description:
            "Specifies whether to return one entry per component name, with all versions of each component aggregated. Defaults to false, which returns one entry per component version. You can't combine this option with the version filter",
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-container-recipes",
      description: "Returns a list of container recipes",
      options: [
        {
          name: "--owner",
          description:
            "Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account. For container recipes, the valid owner values are Self, Shared, and Amazon",
          args: {
            name: "string",
            suggestions: [
              "Self",
              "Shared",
              "Amazon",
              "ThirdParty",
              "AWSMarketplace",
            ],
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    containerType     name     parentImage     platform",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-distribution-configurations",
      description: "Returns a list of distribution configurations",
      options: [
        {
          name: "--filters",
          description: "You can filter on name to streamline results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-image-build-versions",
      description: "Returns a list of image build versions",
      options: [
        {
          name: "--image-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image version whose build versions you want to retrieve. The ARN must specify an exact version (<major>.<minor>.<patch>) - wildcards aren't allowed. This parameter is optional. If you don't specify it, Image Builder returns build versions for all of the images in your account. If the ARN that you specify doesn't exist, Image Builder returns an empty list rather than a ResourceNotFoundException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     osVersion     platform     type     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-image-packages",
      description:
        "Lists the packages that are associated with an image build version, as determined by Amazon Web Services Systems Manager Inventory at build time",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image build version whose packages you want to list. The value must be a full build version ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-image-pipeline-images",
      description: "Returns a list of images created by the specified pipeline",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline whose images you want to view. If the ARN that you specify doesn't exist, Image Builder returns an empty list rather than a ResourceNotFoundException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-image-pipelines",
      description: "Returns a list of image pipelines",
      options: [
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    description     distributionConfigurationArn     imageRecipeArn     infrastructureConfigurationArn     name     status",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-image-recipes",
      description: "Returns a list of image recipes",
      options: [
        {
          name: "--owner",
          description:
            "You can specify the recipe owner to filter results by that owner. By default, this request will only show image recipes owned by your account. To filter by a different owner, specify one of the Valid Values that are listed for this parameter",
          args: {
            name: "string",
            suggestions: [
              "Self",
              "Shared",
              "Amazon",
              "ThirdParty",
              "AWSMarketplace",
            ],
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     parentImage     platform",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-image-scan-finding-aggregations",
      description:
        "Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the imagePipelineArn filter. If you don't specify a filter, Image Builder returns an aggregation for your account. To streamline results, you can use the following filters in your request:    imageBuildVersionArn     imagePipelineArn     vulnerabilityId",
      options: [
        {
          name: "--filter",
          description:
            "A filter name and value pair that determines the type of aggregation that Image Builder returns. Use one of the following filter names:    imageBuildVersionArn     imagePipelineArn     vulnerabilityId    If you don't specify a filter, Image Builder returns an aggregation for your account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-image-scan-findings",
      description:
        "Returns a list of image scan findings for your account. Amazon Inspector generates the findings when it scans images that have scanning enabled",
      options: [
        {
          name: "--filters",
          description:
            "An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:    imageBuildVersionArn – Filters findings by the image build version that was scanned.    imagePipelineArn – Filters findings by the pipeline that created the scanned image.    vulnerabilityId – Filters findings by vulnerability ID, for example a CVE ID.    severity – Filters findings by severity level.   If you don't request a filter, then all findings in your account are listed",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-images",
      description: "Returns the list of images that you have access to",
      options: [
        {
          name: "--owner",
          description:
            "Filters the list to images owned by you, by Amazon, or shared with you by other accounts. By default, only your account's images are returned",
          args: {
            name: "string",
            suggestions: [
              "Self",
              "Shared",
              "Amazon",
              "ThirdParty",
              "AWSMarketplace",
            ],
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     osVersion     platform     type     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--by-name",
          description:
            "Specifies whether to return one entry per image name, with all versions of each image aggregated. Defaults to false, which returns one entry per image version. You can't combine this option with the version filter",
        },
        {
          name: "--no-by-name",
          description:
            "Specifies whether to return one entry per image name, with all versions of each image aggregated. Defaults to false, which returns one entry per image version. You can't combine this option with the version filter",
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-deprecated",
          description:
            "Specifies whether to include deprecated Amazon-managed images in the results. Deprecated images that you own are always returned. Defaults to false",
        },
        {
          name: "--no-include-deprecated",
          description:
            "Specifies whether to include deprecated Amazon-managed images in the results. Deprecated images that you own are always returned. Defaults to false",
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
      name: "list-infrastructure-configurations",
      description: "Returns a list of infrastructure configurations",
      options: [
        {
          name: "--filters",
          description: "You can filter on name to streamline results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-lifecycle-execution-resources",
      description:
        "Lists resources that the runtime instance of the image lifecycle identified for lifecycle actions",
      options: [
        {
          name: "--lifecycle-execution-id",
          description:
            "The unique identifier for a runtime instance of the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-resource-id",
          description:
            "The Amazon Resource Name (ARN) of an image build version to get the output resources for, such as AMIs or container images in Amazon ECR. You can get this value from the resourceId in the top-level response. If you leave this property empty, the response lists the Image Builder resources that the lifecycle execution identified for lifecycle actions. If the image build version that you specify in parentResourceId wasn't part of this lifecycle execution, the response contains an empty list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-lifecycle-executions",
      description:
        "Retrieves the lifecycle runtime history for the specified resource",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which to list lifecycle executions. Specify a lifecycle policy ARN to list its executions, or an image build version ARN to list the executions that StartResourceStateUpdate started for that image. Other ARN types aren't valid for this request",
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
      name: "list-lifecycle-policies",
      description:
        "Retrieves a list of lifecycle policies in your Amazon Web Services account",
      options: [
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results: name, resourceType, and status. Filter names are matched exactly as shown",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      description: "Returns the list of tags for the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve",
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
      name: "list-waiting-workflow-steps",
      description:
        "Lists the workflow steps in your Amazon Web Services account that have paused at a WaitForAction step, and are waiting for you to respond. To send a response, call SendWorkflowStepAction",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-workflow-build-versions",
      description:
        "Returns a list of build versions for a specific workflow resource",
      options: [
        {
          name: "--workflow-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the workflow resource for which to get a list of build versions. The version segments can contain wildcards (x) to match multiple versions of the workflow. If you don't specify an ARN, the response lists build versions for all of the workflows in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "list-workflow-executions",
      description:
        "Returns a list of workflow runtime instance metadata objects for a specific image build version",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-build-version-arn",
          description:
            "List all workflow runtime instances for the specified image build version resource ARN",
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
      name: "list-workflow-step-executions",
      description:
        "Returns runtime data for each step in a runtime instance of the workflow that you specify in the request",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-execution-id",
          description:
            "The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow",
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
      name: "list-workflows",
      description:
        "Lists workflow versions based on filtering parameters. To list the build versions of a specific workflow version, call ListWorkflowBuildVersions",
      options: [
        {
          name: "--owner",
          description:
            "Filters results based on the workflow owner. By default, this request returns the workflows that your account owns (Self). Specify Amazon to list the workflows that Image Builder manages. Image Builder rejects the Shared and ThirdParty owner values for workflows, and AWSMarketplace returns no results",
          args: {
            name: "string",
            suggestions: [
              "Self",
              "Shared",
              "Amazon",
              "ThirdParty",
              "AWSMarketplace",
            ],
          },
        },
        {
          name: "--filters",
          description:
            "Filters to narrow the list of workflows. You can filter on name, version, description, and type",
          args: {
            name: "list",
          },
        },
        {
          name: "--by-name",
          description:
            "Specifies whether to return one entry per workflow name, with all versions of each workflow aggregated. Defaults to false, which returns one entry per workflow version. You can't combine this option with the version filter",
        },
        {
          name: "--no-by-name",
          description:
            "Specifies whether to return one entry per workflow name, with all versions of each workflow aggregated. Defaults to false, which returns one entry per workflow version. You can't combine this option with the version filter",
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in a single request. If you don't specify a value, Image Builder returns up to 25 items. The largest page size that you can request is 100 items. A page can contain fewer items than the maximum, with a nextToken to continue paging",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. Use the nextToken value from a previously truncated response",
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
      name: "put-component-policy",
      description:
        "Applies a policy to a component. The preferred way to share resources is with the RAM API CreateResourceShare. If you use the PutComponentPolicy operation instead, you must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource isn't visible to the principals that it's shared with",
      options: [
        {
          name: "--component-arn",
          description:
            "The Amazon Resource Name (ARN) of the component that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to apply",
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
      name: "put-container-recipe-policy",
      description:
        "Applies a policy to a container recipe. The preferred way to share resources is with the RAM API CreateResourceShare. If you use the PutContainerRecipePolicy operation instead, you must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource isn't visible to the principals that it's shared with",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to apply to the container recipe",
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
      name: "put-image-policy",
      description:
        "Applies a policy to an image. The preferred way to share resources is with the RAM API CreateResourceShare. If you use the PutImagePolicy operation instead, you must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource isn't visible to the principals that it's shared with",
      options: [
        {
          name: "--image-arn",
          description:
            "The Amazon Resource Name (ARN) of the image that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The resource policy to apply to the image, as a JSON policy document. Image Builder validates the policy with Amazon Web Services RAM before applying it, and rejects invalid policies with InvalidParameterValueException",
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
      name: "put-image-recipe-policy",
      description:
        "Applies a policy to an image recipe. The preferred way to share resources is with the RAM API CreateResourceShare. If you use the PutImageRecipePolicy operation instead, you must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource isn't visible to the principals that it's shared with",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to apply",
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
      name: "retry-image",
      description:
        "Retries a failed or canceled image build without rebuilding the phases that already completed. The image re-runs asynchronously in place: the same build version returns to the test or distribution phase where it failed and continues from there. No new image build version is created. Retry is only supported for AMI-based images",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image build version that you want to retry. The image must be in the FAILED or CANCELLED state",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "send-workflow-step-action",
      description:
        "Sends an action to a workflow step that has paused at a WaitForAction step, so that image creation can continue. To find the steps that are waiting for an action, call ListWaitingWorkflowSteps",
      options: [
        {
          name: "--step-execution-id",
          description:
            "Uniquely identifies the waiting workflow step that you send the action to. To get this identifier, call ListWaitingWorkflowSteps",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image build version associated with the workflow step execution. This value must match the image that owns the waiting step. If the ARN does not correspond to the image running the workflow, then the request fails with a validation error",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "The action to perform on the paused workflow step. RESUME completes the waiting step, and the workflow continues. STOP fails the step, and the step's onFailure setting determines whether the workflow continues or aborts. The workflow step must be in a waiting state to accept an action. The request fails if the step has already timed out or been actioned",
          args: {
            name: "string",
            suggestions: ["RESUME", "STOP"],
          },
        },
        {
          name: "--reason",
          description:
            "The reason for the action. This value is stored with the step execution record and is accessible in subsequent workflow steps via step output references",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "start-image-pipeline-execution",
      description:
        "Manually triggers a pipeline to create an image. You can start a build this way whether the pipeline is enabled or disabled. The response returns as soon as Image Builder creates the new image resource and queues the build. Use the returned imageBuildVersionArn with GetImage to track build progress",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags for Image Builder to apply to the image resource that's created when pipeline execution starts",
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
      name: "start-resource-state-update",
      description:
        "Begins an ad-hoc state change for the specified image build version. This is a one-time operation - if you schedule the update, it runs only once. If the request includes underlying resources, or schedules the update far enough in the future, Image Builder runs the update as an asynchronous lifecycle execution and returns its identifier. Otherwise, for target states other than DELETED, the state change applies immediately. If a request that starts a lifecycle execution arrives while the image already has one in progress, Image Builder rejects it",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the image build version to update. The image must be in one of these terminal states: AVAILABLE, DEPRECATED, DISABLED, FAILED, or CANCELLED. Images with FAILED or CANCELLED status can transition only to DELETED",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "Specifies the lifecycle action to take for this request. For AMI-based images, valid values are AVAILABLE, DEPRECATED, DISABLED, and DELETED. For container-based images, only DELETED is supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role that's used to update image state. You must provide this property together with includeResources. Neither is valid without the other",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-resources",
          description:
            "Specifies which underlying resources to update, in addition to the Image Builder image resource itself. Snapshots and containers are only valid for the DELETED state. To set an image to DELETED, you must include its underlying resources. To delete only the Image Builder image record, use the DeleteImage operation instead",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exclusion-rules",
          description:
            "Rules that Image Builder evaluates against each of the image's AMIs. Matching AMIs and their snapshots are skipped. Exclusion rules only take effect when the request includes AMIs. If the target state is DELETED and any resource was skipped, the Image Builder image resource itself is also retained. For the DEPRECATED and DISABLED target states, Image Builder updates the image resource's state regardless of exclusions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-at",
          description:
            "The timestamp that indicates when resources are updated by a lifecycle action. This property is valid only when the target status is DEPRECATED, and the value must be a future time. If you don't specify a value, Image Builder begins the state update right away. For a scheduled deprecation, included AMIs get their EC2 deprecation time set immediately, and Image Builder schedules the image resource to transition to DEPRECATED at that time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      description: "Adds a tag to a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to apply to the resource",
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
      description: "Removes a tag from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to remove from the resource",
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
      name: "update-distribution-configuration",
      description:
        "Updates a distribution configuration. Distribution configurations define and configure the outputs for your images, including the target Regions, accounts, and settings for each Region.  This operation doesn't support selective updates. The request replaces the entire distribution configuration, so include every setting that you want to keep. Any optional property that you omit is removed or reset to its default",
      options: [
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the distribution configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--distributions",
          description:
            "The distribution settings for the configuration. Each entry defines how output images are distributed in one target Amazon Web Services Region. A Region can appear at most once in the list. This list replaces the configuration's existing distributions entirely",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "update-image-pipeline",
      description:
        "Updates an image pipeline. Use image pipelines to automate the creation and distribution of images. You must specify exactly one recipe for your image, using either a containerRecipeArn or an imageRecipeArn. The recipe must be the same type, image or container, as the pipeline's current recipe.  This operation doesn't support selective updates. The request replaces the entire pipeline configuration, so include every setting that you want to keep. Any optional property that you omit is removed or reset to its default",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that configures images created by this image pipeline. You must specify either this property or containerRecipeArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline. You must specify either this property or imageRecipeArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images created by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images created by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tests-configuration",
          description:
            "Specifies the test settings that Image Builder applies to images that this pipeline creates. If you don't provide test settings, Image Builder stores a default configuration with image tests enabled",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enhanced-image-metadata-enabled",
          description:
            "Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to true",
        },
        {
          name: "--no-enhanced-image-metadata-enabled",
          description:
            "Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to true",
        },
        {
          name: "--schedule",
          description:
            "The schedule of the image pipeline. Because the update replaces the entire configuration, omitting this property removes any existing schedule. The pipeline then runs only when you call StartImagePipelineExecution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description:
            "The status of the image pipeline. Defaults to ENABLED when omitted. To keep a pipeline disabled, include this property set to DISABLED in your update request",
          args: {
            name: "string",
            suggestions: ["DISABLED", "ENABLED"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description:
            "The updated settings that determine whether and how Amazon Inspector scans the images that this pipeline creates",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workflows",
          description:
            "The array of workflow configuration objects for builds that this pipeline starts. If you specify workflows, they replace the default workflows that Image Builder otherwise runs for the pipeline's builds. For example, if your list doesn't include a test workflow, the pipeline's builds don't run one. You must also specify executionRole when you provide workflows",
          args: {
            name: "list",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "Specifies the logging configuration for the image pipeline. Use this to define custom CloudWatch Logs log groups for your pipeline execution logs and image build logs. The service manages log groups with names starting with /aws/imagebuilder/ using the service-linked role. For custom log group names outside of this prefix, you must also provide an executionRole",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions. If you omit this property, the pipeline reverts to the Image Builder service-linked role",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tags",
          description:
            "The tags that Image Builder applies to the Image Builder image resource that this pipeline's scheduled executions create. These tags don't apply to the output AMI. To tag output AMIs, use amiTags in the pipeline's distribution configuration",
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
      name: "update-infrastructure-configuration",
      description:
        "Updates an infrastructure configuration. An infrastructure configuration defines the environment in which Image Builder builds and tests your image.  This operation doesn't support selective updates. The request replaces the entire infrastructure configuration, so include every setting that you want to keep. Any optional property that you omit is removed or reset to its default",
      options: [
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the infrastructure configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-types",
          description:
            "The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. Image Builder picks one of these instance types based on availability. If you don't specify instance types, Image Builder selects compatible instance types automatically. If you specify a Dedicated Host, Image Builder uses only instance types that the host supports",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-profile-name",
          description:
            "The instance profile to associate with the instance used to customize your Amazon EC2 AMI. The instance profile must exist in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The security group IDs to associate with the instance used to customize your Amazon EC2 AMI",
          args: {
            name: "list",
          },
        },
        {
          name: "--subnet-id",
          description:
            "The subnet ID in which to place the instance used to customize your Amazon EC2 AMI. If you specify subnetId, you must also specify one or more security group IDs in securityGroupIds. Otherwise, the request fails",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging",
          description:
            "The logging configuration of the infrastructure configuration. When you configure S3 logs, Image Builder writes logs from the build and test process to the specified bucket under the key prefix",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-pair",
          description:
            "The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminate-instance-on-failure",
          description:
            "Specifies whether to terminate the instance on failure. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. Defaults to true",
        },
        {
          name: "--no-terminate-instance-on-failure",
          description:
            "Specifies whether to terminate the instance on failure. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. Defaults to true",
        },
        {
          name: "--terminate-instance-on-completion",
          description:
            "Specifies whether Image Builder terminates build and test instances when image creation ends without a failure (success, cancellation, or expiration). Defaults to true",
        },
        {
          name: "--no-terminate-instance-on-completion",
          description:
            "Specifies whether Image Builder terminates build and test instances when image creation ends without a failure (success, cancellation, or expiration). Defaults to true",
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the SNS topic to which Image Builder sends image build event notifications. Specify a standard topic. Image Builder doesn't support FIFO topics. Image Builder validates the topic when you create or update the configuration. You must have permission to publish to the topic.  EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys from other accounts. If your SNS topic is encrypted, the key must be owned by the same account that owns your Image Builder resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description:
            "The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process. Tags are formatted as key value pairs. Tag keys can't begin with aws: or match one of the following reserved keys: CreatedBy, Ec2ImageBuilderArn, Name, or Tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--instance-metadata-options",
          description:
            "The instance metadata service (IMDS) settings that Image Builder applies to the EC2 build and test instances it launches during image creation. If you don't set these options, the EC2 launch defaults for the instance apply. For more information about instance metadata options, see one of the following links:    Configure the instance metadata options in the  Amazon EC2 User Guide  for Linux instances.    Configure the instance metadata options in the  Amazon EC2 Windows Guide  for Windows instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--placement",
          description:
            "The instance placement settings that define where the build and test instances that Image Builder launches during image creation run. These settings don't affect instances that you launch from the output image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-instance",
          description:
            "The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, instead of launching a new instance. This applies only to the build phase. To use this feature, the execution role for the build must have permissions to describe the Auto Scaling group, tag the instance while it's still in the group, and detach it from the group. For more information, see Build on an instance from an Auto Scaling group in the EC2 Image Builder User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "update-lifecycle-policy",
      description:
        "Updates the specified lifecycle policy. The resourceType must match the existing policy's value.  This operation doesn't support selective updates. The request replaces the entire lifecycle policy configuration, so include every setting that you want to keep. Any optional property that you omit is removed or reset to its default",
      options: [
        {
          name: "--lifecycle-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the lifecycle policy resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Optional description for the lifecycle policy. Because the update replaces the entire configuration, omitting this property removes any existing description",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates whether the lifecycle policy resource is enabled. Defaults to ENABLED when omitted, so updating a disabled policy without setting this property re-enables it",
          args: {
            name: "string",
            suggestions: ["DISABLED", "ENABLED"],
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of image resource that the lifecycle policy applies to. The value must match the policy's existing resource type. You can't change the resource type of an existing lifecycle policy",
          args: {
            name: "string",
            suggestions: ["AMI_IMAGE", "CONTAINER_IMAGE"],
          },
        },
        {
          name: "--policy-details",
          description:
            "The configuration details for a lifecycle policy resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-selection",
          description:
            "Selection criteria for resources that the lifecycle policy applies to. You must specify exactly one selection criteria: either recipes or a tag map, not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "image-available",
          description:
            "Wait until an image build version reaches the AVAILABLE state, meaning the build completed, including distribution and integration of output resources. The waiter fails if the image reaches the FAILED or CANCELLED state. Specify the full image build version ARN; wildcard version ARNs only resolve to images that are already available. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 360 failed checks",
          options: [
            {
              name: "--image-build-version-arn",
              description:
                "The Amazon Resource Name (ARN) of the image that you want to get. You can specify a full build version ARN, or a version ARN with or without wildcards (x.x.x, 1.x.x, or 1.0.x). A version or wildcard ARN resolves to the latest matching build version that has reached AVAILABLE status. Builds that were later deprecated, disabled, or deleted don't resolve. To get an image in any other state, such as a failed or in-progress build, specify the full build version ARN",
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
