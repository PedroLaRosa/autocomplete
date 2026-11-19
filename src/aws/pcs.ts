const completionSpec: Fig.Spec = {
  name: "pcs",
  description:
    "Parallel Computing Service (PCS) is a managed service that makes it easier for you to run and scale your high performance computing (HPC) workloads, and build scientific and engineering models on Amazon Web Services using Slurm. For more information, see the Parallel Computing Service User Guide. This reference describes the actions and data types of the service management API. You can use the Amazon Web Services SDKs to call the API actions in software, or use the Command Line Interface (CLI) to call the API actions manually. These API actions manage the service through an Amazon Web Services account. The API actions operate on PCS resources. A resource is an entity in Amazon Web Services that you can work with. Amazon Web Services services create resources when you use the features of the service. Examples of PCS resources include clusters, compute node groups, and queues. For more information about resources in Amazon Web Services, see Resource in the Resource Explorer User Guide.  An PCS compute node is an Amazon EC2 instance. You don't launch compute nodes directly. PCS uses configuration information that you provide to launch compute nodes in your Amazon Web Services account. You receive billing charges for your running compute nodes. PCS automatically terminates your compute nodes when you delete the PCS resources related to those compute nodes",
  subcommands: [
    {
      name: "create-cluster",
      description:
        "Creates a cluster in your account. PCS creates the cluster controller in a service-owned account. The cluster controller communicates with the cluster resources in your account. The subnets and security groups for the cluster must already exist before you use this API action.  It takes time for PCS to create the cluster. The cluster is in a Creating state until it is ready to use. There can only be 1 cluster in a Creating state per Amazon Web Services Region per Amazon Web Services account. CreateCluster fails with a ServiceQuotaExceededException if there is already a cluster in a Creating state",
      options: [
        {
          name: "--cluster-name",
          description: "A name to identify the cluster. Example: MyCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduler",
          description:
            "The cluster management and job scheduling software associated with the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--size",
          description:
            "A value that determines the maximum number of compute nodes in the cluster and the maximum number of jobs (active and queued).    SMALL: 32 compute nodes and 256 jobs    MEDIUM: 512 compute nodes and 8192 jobs    LARGE: 2048 compute nodes and 16,384 jobs",
          args: {
            name: "string",
            suggestions: ["SMALL", "MEDIUM", "LARGE"],
          },
        },
        {
          name: "--networking",
          description:
            "The networking configuration used to set up the cluster's control plane",
          args: {
            name: "structure",
          },
        },
        {
          name: "--slurm-configuration",
          description: "Additional options related to the Slurm scheduler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string",
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
      name: "create-compute-node-group",
      description:
        "Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that PCS launches in your account. You can configure common instance settings, such as the AMI, security groups, and SSH key pair, directly on the compute node group, or you can provide a custom EC2 launch template. To use a launch template that PCS manages, set launchTemplateMode to MANAGED and don't provide customLaunchTemplate. In this case, you must specify amiId and securityGroupIds. For more information, see Configuring instance settings for compute node groups in PCS in the PCS User Guide",
      options: [
        {
          name: "--ami-id",
          description:
            "The ID of the Amazon Machine Image (AMI) that PCS uses to launch compute nodes (Amazon EC2 instances). This value overrides the AMI ID in the custom launch template. If you don't provide this value, PCS uses the AMI ID specified in the custom launch template. You must provide this value if launchTemplateMode is MANAGED",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The IDs of the EC2 security groups to configure directly on the compute node group. The security groups must be in the same VPC as the cluster. PCS uses these security groups instead of the security groups in the custom launch template. You can't specify this value if the custom launch template defines network interfaces. If you don't provide this value, PCS uses the security groups in the custom launch template. You must provide this value if launchTemplateMode is MANAGED. For more information, see Configuring instance settings for compute node groups in PCS in the PCS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--ssh-key-name",
          description:
            "The name of the EC2 key pair to configure directly on the compute node group. The key pair must exist in your account and Amazon Web Services Region. PCS uses this key pair instead of the key pair in the custom launch template. If you don't provide this value, PCS uses the key pair in the custom launch template, if one is specified. You must have permission for ec2:DescribeKeyPairs. If you delete the key pair later, future instance launches can fail. For more information, see Configuring instance settings for compute node groups in PCS in the PCS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-identifier",
          description:
            "The name or ID of the cluster to create a compute node group in",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-node-group-name",
          description: "A name to identify the cluster. Example: MyCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "The list of subnet IDs where the compute node group launches instances. Subnets must be in the same VPC as the cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--purchase-option",
          description:
            "Specifies how EC2 instances are purchased on your behalf. PCS supports On-Demand Instances, Spot Instances, Interruptible Capacity Reservations, On-Demand Capacity Reservations, and Amazon EC2 Capacity Blocks for ML. For more information, see Amazon EC2 billing and purchasing options in the Amazon Elastic Compute Cloud User Guide. For more information about PCS support for Capacity Blocks, see Using Amazon EC2 Capacity Blocks for ML with PCS in the PCS User Guide. For more information about PCS support for interruptible capacity reservations, see Using I-ODCRs with PCS in the PCS User Guide. Choose On-Demand if you plan to use an On-Demand Capacity Reservation (ODCR). For more information, see Using ODCRs with PCS. If you don't provide this option, it defaults to On-Demand",
          args: {
            name: "string",
            suggestions: [
              "ONDEMAND",
              "SPOT",
              "CAPACITY_BLOCK",
              "INTERRUPTIBLE_CAPACITY_RESERVATION",
            ],
          },
        },
        {
          name: "--launch-template-mode",
          description:
            "Specifies whether the compute node group uses a custom launch template or a launch template that PCS manages. The default value is CUSTOM. If the value is CUSTOM, provide customLaunchTemplate. If the value is MANAGED, omit customLaunchTemplate and provide amiId and securityGroupIds",
          args: {
            name: "string",
            suggestions: ["CUSTOM", "MANAGED"],
          },
        },
        {
          name: "--custom-launch-template",
          description:
            "The custom Amazon EC2 launch template to associate with the compute node group. Specify the launch template id and version when launchTemplateMode is CUSTOM. Don't specify this value when launchTemplateMode is MANAGED",
          args: {
            name: "structure",
          },
        },
        {
          name: "--iam-instance-profile-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the pcs:RegisterComputeNodeGroupInstance permission and the role name must start with AWSPCS or must have the path /aws-pcs/. For more information, see IAM instance profiles for PCS in the PCS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "Specifies the boundaries of the compute node group auto scaling",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-configs",
          description:
            "A list of EC2 instance configurations that PCS can provision in the compute node group",
          args: {
            name: "list",
          },
        },
        {
          name: "--spot-options",
          description:
            "Additional configuration when you specify SPOT as the purchaseOption for the CreateComputeNodeGroup API action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--slurm-configuration",
          description: "Additional options related to the Slurm scheduler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-lifecycle-actions",
          description:
            "The lifecycle actions to run on compute nodes in the compute node group. Use lifecycle actions to run custom scripts at defined stages of a compute node's lifecycle, such as when a compute node finishes bootstrapping or becomes ready to accept jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string",
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
      name: "create-queue",
      description:
        "Creates a job queue. You must associate 1 or more compute node groups with the queue. You can associate 1 compute node group with multiple queues",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The name or ID of the cluster for which to create a queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-name",
          description: "A name to identify the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-node-group-configurations",
          description:
            "The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--slurm-configuration",
          description: "Additional options related to the Slurm scheduler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string",
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
      name: "delete-cluster",
      description:
        "Deletes a cluster and all its linked resources. You must delete all queues and compute node groups associated with the cluster before you can delete the cluster",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
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
      name: "delete-compute-node-group",
      description:
        "Deletes a compute node group. You must delete all queues associated with the compute node group first",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The name or ID of the cluster of the compute node group",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-node-group-identifier",
          description: "The name or ID of the compute node group to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
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
      name: "delete-queue",
      description:
        "Deletes a job queue. If the compute node group associated with this queue isn't associated with any other queues, PCS terminates all the compute nodes for this queue",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-identifier",
          description: "The name or ID of the queue to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
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
      name: "get-cluster",
      description:
        "Returns detailed information about a running cluster in your account. This API action provides networking information, endpoint information for communication with the scheduler, and provisioning status",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster",
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
      name: "get-compute-node-group",
      description:
        "Returns detailed information about a compute node group. This API action provides networking information, EC2 instance type, compute node group status, and scheduler (such as Slurm) configuration",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-node-group-identifier",
          description: "The name or ID of the compute node group",
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
      name: "get-queue",
      description:
        "Returns detailed information about a queue. The information includes the compute node groups that the queue uses to schedule jobs",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-identifier",
          description: "The name or ID of the queue",
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
      name: "list-clusters",
      description: "Returns a list of running clusters in your account",
      options: [
        {
          name: "--next-token",
          description:
            "The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default",
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
      name: "list-compute-node-groups",
      description:
        "Returns a list of all compute node groups associated with a cluster",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The name or ID of the cluster to list compute node groups for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default",
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
      name: "list-queues",
      description: "Returns a list of all queues associated with a cluster",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster to list queues for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default",
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
      description: "Returns a list of all tags on an PCS resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which to list tags",
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
      name: "register-compute-node-group-instance",
      description:
        "This API action isn't intended for you to use.  PCS uses this API action to register the compute nodes it launches in your account",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The name or ID of the cluster to register the compute node group instance in",
          args: {
            name: "string",
          },
        },
        {
          name: "--bootstrap-id",
          description: "The client-generated token to allow for retries",
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
        "Adds or edits tags on an PCS resource. Each tag consists of a tag key and a tag value. The tag key and tag value are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string",
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
        "Deletes tags from an PCS resource. To delete a tag, specify the tag key and the Amazon Resource Name (ARN) of the PCS resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "1 or more tag keys to remove from the resource. Specify only tag keys and not tag values",
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
      name: "update-cluster",
      description:
        "Updates a cluster configuration. You can update the scheduler version, modify scheduler settings, and update accounting configuration for an existing cluster. For more information about updating the scheduler version, see Updating the scheduler version on a cluster in the PCS User Guide.   You can only update clusters that are in ACTIVE, UPDATE_FAILED, or SUSPENDED state. All associated resources (queues and compute node groups) must be in ACTIVE state before you can update the cluster",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--slurm-configuration",
          description: "Additional options related to the Slurm scheduler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scheduler",
          description:
            "The scheduler configuration to update for the cluster. Use this to update the scheduler version. For more information, see Updating the scheduler version on a cluster in the PCS User Guide",
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
      name: "update-compute-node-group",
      description:
        "Updates a compute node group. You can update many of the fields related to your compute node group including the configurations for networking, compute nodes, and settings specific to your scheduler (such as Slurm)",
      options: [
        {
          name: "--ami-id",
          description:
            'The ID of the Amazon Machine Image (AMI) that PCS uses to launch instances. This value overrides the AMI ID in the custom launch template. Specify an empty string ("") to remove the AMI ID from the compute node group and use the AMI ID specified in the custom launch template. Omit this value to leave the current setting unchanged',
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The IDs of the EC2 security groups to configure directly on the compute node group. The security groups must be in the same VPC as the cluster. PCS uses these security groups instead of the security groups in the custom launch template. You can't specify this value if the custom launch template defines network interfaces. Specify an empty list ([]) to remove the security groups from the compute node group and use the security groups in the custom launch template. Omit this value to leave the current setting unchanged",
          args: {
            name: "list",
          },
        },
        {
          name: "--ssh-key-name",
          description:
            'The name of the EC2 key pair to configure directly on the compute node group. The key pair must exist in your account and Amazon Web Services Region. PCS uses this key pair instead of the key pair in the custom launch template. Specify an empty string ("") to remove the key pair from the compute node group and use the key pair in the custom launch template. Omit this value to leave the current setting unchanged. You must have permission for ec2:DescribeKeyPairs to specify a key pair. If you delete the key pair later, future instance launches can fail',
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-identifier",
          description:
            "The name or ID of the cluster of the compute node group",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-node-group-identifier",
          description: "The name or ID of the compute node group",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "The list of subnet IDs where the compute node group provisions instances. The subnets must be in the same VPC as the cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--launch-template-mode",
          description:
            "Specifies whether the compute node group uses a custom launch template or a launch template that PCS manages. Omit this value to keep the current mode. Valid values:    CUSTOM – Use a custom launch template. To switch from MANAGED, also provide customLaunchTemplate. If the compute node group already uses CUSTOM and you omit customLaunchTemplate, the existing launch template is unchanged.    MANAGED – Use a launch template created and managed by PCS. Omit customLaunchTemplate. Switching to this mode removes the custom launch template association but doesn't delete the launch template.   When switching to MANAGED, the compute node group must have amiId and securityGroupIds configured. You can set these values in the same request",
          args: {
            name: "string",
            suggestions: ["CUSTOM", "MANAGED"],
          },
        },
        {
          name: "--custom-launch-template",
          description:
            "The custom Amazon EC2 launch template to associate with the compute node group. To set or change the custom launch template, specify id and version. If you provide this value and omit launchTemplateMode, the compute node group must already use CUSTOM mode. To switch from MANAGED to CUSTOM, specify launchTemplateMode as CUSTOM and provide this value. If the compute node group already uses CUSTOM, omit this value while also omitting launchTemplateMode, or while specifying CUSTOM, to keep the existing custom launch template. For more information, see Migrating a compute node group from a custom launch template in the PCS User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--purchase-option",
          description:
            "Specifies how EC2 instances are purchased on your behalf. PCS supports On-Demand Instances, Spot Instances, Interruptible Capacity Reservations, On-Demand Capacity Reservations, and Amazon EC2 Capacity Blocks for ML. For more information, see Amazon EC2 billing and purchasing options in the Amazon Elastic Compute Cloud User Guide. For more information about PCS support for Capacity Blocks, see Using Amazon EC2 Capacity Blocks for ML with PCS in the PCS User Guide. For more information about PCS support for interruptible capacity reservations, see Using I-ODCRs with PCS in the PCS User Guide. Choose On-Demand if you plan to use an On-Demand Capacity Reservation (ODCR). For more information, see Using ODCRs with PCS. If you don't provide this option, it defaults to On-Demand",
          args: {
            name: "string",
            suggestions: [
              "ONDEMAND",
              "SPOT",
              "CAPACITY_BLOCK",
              "INTERRUPTIBLE_CAPACITY_RESERVATION",
            ],
          },
        },
        {
          name: "--spot-options",
          description:
            "Additional configuration when you specify SPOT as the purchaseOption for the CreateComputeNodeGroup API action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "Specifies the boundaries of the compute node group auto scaling",
          args: {
            name: "structure",
          },
        },
        {
          name: "--iam-instance-profile-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the pcs:RegisterComputeNodeGroupInstance permission and the role name must start with AWSPCS or must have the path /aws-pcs/. For more information, see IAM instance profiles for PCS in the PCS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--slurm-configuration",
          description: "Additional options related to the Slurm scheduler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-lifecycle-actions",
          description:
            "The lifecycle actions to run on compute nodes in the compute node group. Use lifecycle actions to run custom scripts at defined stages of a compute node's lifecycle, such as when a compute node finishes bootstrapping or becomes ready to accept jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
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
      name: "update-queue",
      description:
        "Updates the compute node group configuration of a queue. Use this API to change the compute node groups that the queue can send jobs to",
      options: [
        {
          name: "--cluster-identifier",
          description: "The name or ID of the cluster of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-identifier",
          description: "The name or ID of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-node-group-configurations",
          description:
            "The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--slurm-configuration",
          description: "Additional options related to the Slurm scheduler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate one for you",
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
