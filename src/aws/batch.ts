const completionSpec: Fig.Spec = {
  name: "batch",
  description:
    "Batch Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure. At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently provision resources, and work toward eliminating capacity constraints, reducing your overall compute costs, and delivering results more quickly. As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus on analyzing results and solving your specific problems instead",
  subcommands: [
    {
      name: "cancel-job",
      description:
        "Cancels a job in an Batch job queue. Jobs that are in a SUBMITTED, PENDING, or RUNNABLE state are cancelled and the job status is updated to FAILED.  A PENDING job is cancelled after all dependency jobs are completed. Therefore, it might take longer than expected to cancel a job in PENDING status. When you try to cancel an array parent job in PENDING, Batch attempts to cancel all child jobs. The array parent job is cancelled when all child jobs are completed.  Jobs that progressed to the STARTING or RUNNING state aren't cancelled. However, the API operation still succeeds, even if no job is cancelled. These jobs must be terminated with the TerminateJob or TerminateJobs operation",
      options: [
        {
          name: "--job-id",
          description: "The Batch job ID of the job to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the job that explains the reason for cancelling it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs. This parameter has a limit of 1024 characters",
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
      name: "cancel-jobs",
      description:
        "Cancels up to 50 jobs in an Batch job queue. This is a bulk version of CancelJob. Jobs that are in a SUBMITTED, PENDING, or RUNNABLE state are cancelled and the job status is updated to FAILED.  A PENDING job is cancelled after all dependency jobs are completed. Therefore, it might take longer than expected to cancel a job in PENDING status. When you try to cancel an array parent job in PENDING, Batch attempts to cancel all child jobs. The array parent job is cancelled when all child jobs are completed.  Jobs that progressed to the STARTING or RUNNING state aren't cancelled. These jobs must be terminated with the TerminateJob or TerminateJobs operation. Batch reports the result for each job individually in the response. Jobs that were processed successfully are reported in the successful list. Jobs that encountered errors are reported in the errors list. The response returns an HTTP status code of 200 even when some jobs encountered errors, so check the errors list. Jobs that can't be found are treated as successfully processed.  This operation requires batch:CancelJob permission for each job in the request. There is no separate batch:CancelJobs IAM action. If a caller's IAM policy grants batch:CancelJob, they can use both the singular CancelJob and bulk CancelJobs operations",
      options: [
        {
          name: "--jobs",
          description:
            "An array of up to 50 Batch job IDs of the jobs to cancel",
          args: {
            name: "list",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the job that explains the reason for cancelling it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs. This parameter has a limit of 1024 characters",
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
      name: "create-compute-environment",
      description:
        "Creates an Batch compute environment. You can create MANAGED or UNMANAGED compute environments. MANAGED compute environments can use Amazon EC2 or Fargate resources. UNMANAGED compute environments can only use EC2 resources. In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the launch template that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price. In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see container instance AMIs in the Amazon Elastic Container Service Developer Guide. After you created your unmanaged compute environment, you can use the DescribeComputeEnvironments operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see Launching an Amazon ECS container instance in the Amazon Elastic Container Service Developer Guide.  Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For more information on how to update a compute environment's AMI, see Updating compute environments in the Batch User Guide",
      options: [
        {
          name: "--compute-environment-name",
          description:
            "The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the compute environment: MANAGED or UNMANAGED. For more information, see Compute Environments in the Batch User Guide",
          args: {
            name: "string",
            suggestions: ["MANAGED", "UNMANAGED"],
          },
        },
        {
          name: "--state",
          description:
            "The state of the compute environment. A compute environment must be created in the ENABLED state. If the state is ENABLED, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. If the state is ENABLED, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand. If the state is DISABLED, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a STARTING or RUNNING state continue to progress normally. Managed compute environments in the DISABLED state don't scale out.   Compute environments in a DISABLED state may continue to incur billing charges, for example, if they have running instances due to jobs that are still executing or a non-zero minvCpus setting. To prevent additional charges, disable and delete the compute environment.  When an instance is idle, the instance scales down to the minvCpus value. However, the instance size doesn't change. For example, consider a c5.8xlarge instance with a minvCpus value of 4 and a desiredvCpus value of 36. This instance doesn't scale down to a c5.large instance",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--unmanagedv-cpus",
          description:
            "The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair-share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair-share job queue, no vCPU capacity is reserved.  This parameter is only supported when the type parameter is set to UNMANAGED",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-resources",
          description:
            "Details about the compute resources managed by the compute environment. This parameter is required for managed compute environments. For more information, see Compute Environments in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see Batch service IAM role in the Batch User Guide.  If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account. This automatic service-linked role creation only applies to MANAGED compute environments. For UNMANAGED compute environments, you must explicitly specify a serviceRole.  If your specified role has a path other than /, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name bar has a path of /foo/, specify /foo/bar as the role name. For more information, see Friendly names and paths in the IAM User Guide.  Depending on how you created your Batch service role, its ARN might contain the service-role path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the service-role path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference. These tags can be updated or removed using the TagResource and UntagResource API operations. These tags don't propagate to the underlying compute resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--eks-configuration",
          description:
            "The details for the Amazon EKS cluster that supports the compute environment.  To create a compute environment that uses EKS resources, the caller must have permissions to call eks:DescribeCluster. Additional Amazon EKS permissions are required for Batch to manage an access entry on the cluster; see Amazon EKS access entry authentication in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context",
          description: "Reserved",
          args: {
            name: "string",
          },
        },
        {
          name: "--ecs-settings",
          description:
            "The Amazon ECS settings for the compute environment. These settings control CloudWatch Container Insights collection for the compute environment",
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
      name: "create-consumable-resource",
      description: "Creates an Batch consumable resource",
      options: [
        {
          name: "--consumable-resource-name",
          description: "The name of the consumable resource. Must be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--total-quantity",
          description:
            "The total amount of the consumable resource that is available. Must be non-negative",
          args: {
            name: "long",
          },
        },
        {
          name: "--resource-type",
          description:
            "Indicates whether the resource is available to be re-used after a job completes. Can be one of:     REPLENISHABLE (default)    NON_REPLENISHABLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the consumable resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources",
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
      name: "create-job-queue",
      description:
        "Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments. You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment",
      options: [
        {
          name: "--job-queue-name",
          description:
            "The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The state of the job queue. If the job queue state is ENABLED, it is able to accept jobs. If the job queue state is DISABLED, new jobs can't be added to the queue, but jobs already in the queue can finish",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--scheduling-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the fair-share scheduling policy. Job queues that don't have a fair-share scheduling policy are scheduled in a first-in, first-out (FIFO) model. After a job queue has a fair-share scheduling policy, it can be replaced but can't be removed. The format is aws:Partition:batch:Region:Account:scheduling-policy/Name . An example is aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy. A job queue without a fair-share scheduling policy is scheduled as a FIFO job queue and can't have a fair-share scheduling policy added. Jobs queues with a fair-share scheduling policy can have a maximum of 500 active share identifiers. When the limit has been reached, submissions of any jobs that add a new share identifier fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the priority parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of 10 is given scheduling preference over a job queue with a priority value of 1. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT); EC2 and Fargate compute environments can't be mixed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-environment-order",
          description:
            "The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the VALID state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT); EC2 and Fargate compute environments can't be mixed.  All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-environment-order",
          description:
            "A list of service environments that this job queue can use to allocate jobs. All serviceEnvironments must have the same type. A job queue can't have both a serviceEnvironmentOrder and a computeEnvironmentOrder field",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-queue-type",
          description:
            "The type of job queue. For service jobs that run on SageMaker Training, this value is SAGEMAKER_TRAINING. For regular container jobs, this value is EKS, ECS, or ECS_FARGATE depending on the compute environment",
          args: {
            name: "string",
            suggestions: [
              "EKS",
              "ECS",
              "ECS_FARGATE",
              "SAGEMAKER_TRAINING",
              "ECS_MANAGED_INSTANCES",
            ],
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources in Batch User Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--job-state-time-limit-actions",
          description:
            "The set of actions that Batch performs on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after maxTimeSeconds has passed. (Note: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)",
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
      name: "create-quota-share",
      description:
        "Creates an Batch quota share. Each quota share operates as a virtual queue with a configured compute capacity, resource sharing strategy, and borrow limits",
      options: [
        {
          name: "--quota-share-name",
          description:
            "The name of the quota share. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-queue",
          description:
            "The Batch job queue associated with the quota share. This can be the job queue name or ARN. A job queue must be in the VALID state before you can associate it with a quota share",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity-limits",
          description:
            "A list that specifies the quantity and type of compute capacity allocated to the quota share",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-sharing-configuration",
          description:
            "Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--preemption-configuration",
          description:
            "Specifies the preemption behavior for jobs in a quota share",
          args: {
            name: "structure",
          },
        },
        {
          name: "--state",
          description:
            "The state of the quota share. If the quota share is ENABLED, it is able to accept jobs. If the quota share is DISABLED, new jobs won't be accepted but jobs already submitted can finish. The default state is ENABLED",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the quota share to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources in Batch User Guide",
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
      name: "create-scheduling-policy",
      description: "Creates an Batch scheduling policy",
      options: [
        {
          name: "--name",
          description:
            "The name of the fair-share scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--quota-share-policy",
          description:
            "The quota share scheduling policy details. Only one of fairsharePolicy or quotaSharePolicy can be set. Once set, this policy type cannot be removed or changed to a fairSharePolicy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fairshare-policy",
          description:
            "The fair-share scheduling policy details. Only one of fairsharePolicy or quotaSharePolicy can be set. Once set, this policy type cannot be removed or changed to a quotaSharePolicy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference. These tags can be updated or removed using the TagResource and UntagResource API operations",
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
      name: "create-service-environment",
      description:
        "Creates a service environment for running service jobs. Service environments define capacity limits for specific service types such as SageMaker Training jobs",
      options: [
        {
          name: "--service-environment-name",
          description:
            "The name for the service environment. It can be up to 128 characters long and can contain letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-environment-type",
          description:
            "The type of service environment. For SageMaker Training jobs, specify SAGEMAKER_TRAINING",
          args: {
            name: "string",
            suggestions: ["SAGEMAKER_TRAINING"],
          },
        },
        {
          name: "--state",
          description:
            "The state of the service environment. Valid values are ENABLED and DISABLED. The default value is ENABLED",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--capacity-limits",
          description:
            "The capacity limits for the service environment. The number of instances a job consumes is the total number of instances requested in the submit training job request resource configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the service environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources",
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
      name: "delete-compute-environment",
      description:
        "Deletes an Batch compute environment. Before you can delete a compute environment, you must set its state to DISABLED with the UpdateComputeEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state",
      options: [
        {
          name: "--compute-environment",
          description:
            "The name or Amazon Resource Name (ARN) of the compute environment to delete",
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
      name: "delete-consumable-resource",
      description: "Deletes the specified consumable resource",
      options: [
        {
          name: "--consumable-resource",
          description:
            "The name or ARN of the consumable resource that will be deleted",
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
      name: "delete-job-queue",
      description:
        "Deletes the specified job queue. You must first disable submissions for a queue with the UpdateJobQueue operation. All jobs in the queue are eventually terminated when you delete a job queue. It's not necessary to disassociate compute environments from a queue before submitting a DeleteJobQueue request",
      options: [
        {
          name: "--job-queue",
          description:
            "The short name or full Amazon Resource Name (ARN) of the queue to delete",
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
      name: "delete-quota-share",
      description:
        "Deletes the specified quota share. You must first disable submissions for the share by updating the state to DISABLED using the UpdateQuotaShare operation. All jobs in the share are eventually terminated when you delete a quota share",
      options: [
        {
          name: "--quota-share-arn",
          description: "The Amazon Resource Name (ARN) of the quota share",
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
      name: "delete-scheduling-policy",
      description:
        "Deletes the specified scheduling policy. You can't delete a scheduling policy that's used in any job queues",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the scheduling policy to delete",
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
      name: "delete-service-environment",
      description:
        "Deletes a Service environment. Before you can delete a service environment, you must first set its state to DISABLED with the UpdateServiceEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation",
      options: [
        {
          name: "--service-environment",
          description: "The name or ARN of the service environment to delete",
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
      name: "deregister-job-definition",
      description:
        "Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days",
      options: [
        {
          name: "--job-definition",
          description:
            "The name and revision (name:revision) or full Amazon Resource Name (ARN) of the job definition to deregister",
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
      name: "describe-compute-environments",
      description:
        "Describes one or more of your compute environments. If you're using an unmanaged compute environment, you can use the DescribeComputeEnvironment operation to determine the ecsClusterArn that you launch your Amazon ECS container instances into",
      options: [
        {
          name: "--compute-environments",
          description:
            "A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of cluster results returned by DescribeComputeEnvironments in paginated output. When this parameter is used, DescribeComputeEnvironments only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeComputeEnvironments request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then DescribeComputeEnvironments returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeComputeEnvironments request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "describe-consumable-resource",
      description: "Returns a description of the specified consumable resource",
      options: [
        {
          name: "--consumable-resource",
          description:
            "The name or ARN of the consumable resource whose description will be returned",
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
      name: "describe-job-definitions",
      description:
        "Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status",
      options: [
        {
          name: "--job-definitions",
          description:
            "A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format arn:aws:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision} or a short version using the form ${JobDefinitionName}:${Revision}. This parameter can't be used with other parameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by DescribeJobDefinitions in paginated output. When this parameter is used, DescribeJobDefinitions only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeJobDefinitions request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then DescribeJobDefinitions returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-definition-name",
          description: "The name of the job definition to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status used to filter job definitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeJobDefinitions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "describe-job-queues",
      description: "Describes one or more of your job queues",
      options: [
        {
          name: "--job-queues",
          description:
            "A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by DescribeJobQueues in paginated output. When this parameter is used, DescribeJobQueues only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeJobQueues request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then DescribeJobQueues returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeJobQueues request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "describe-jobs",
      description: "Describes a list of Batch jobs",
      options: [
        {
          name: "--jobs",
          description: "A list of up to 100 job IDs",
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
      name: "describe-quota-share",
      description: "Returns a description of the specified quota share",
      options: [
        {
          name: "--quota-share-arn",
          description: "The Amazon Resource Name (ARN) of the quota share",
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
      name: "describe-scheduling-policies",
      description: "Describes one or more of your scheduling policies",
      options: [
        {
          name: "--arns",
          description:
            "A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries",
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
      name: "describe-service-environments",
      description: "Describes one or more of your service environments",
      options: [
        {
          name: "--service-environments",
          description: "An array of service environment names or ARN entries",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by DescribeServiceEnvironments in paginated output. When this parameter is used, DescribeServiceEnvironments only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeServiceEnvironments request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then DescribeServiceEnvironments returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeServiceEnvironments request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "describe-service-job",
      description: "The details of a service job",
      options: [
        {
          name: "--job-id",
          description: "The job ID for the service job to describe",
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
      name: "get-job-queue-snapshot",
      description:
        "Provides a snapshot of job queue state, including ordering of RUNNABLE jobs, as well as capacity utilization for already dispatched jobs. The first 100 RUNNABLE jobs in the job queue are listed in order of dispatch. For job queues with an attached quota-share policy, the first RUNNABLE job in each quota share is also listed. Capacity utilization for the job queue is provided, as well as break downs by share for job queues with attached fair-share or quota-share scheduling policies",
      options: [
        {
          name: "--job-queue",
          description:
            "The job queue’s name or full queue Amazon Resource Name (ARN)",
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
      name: "list-consumable-resources",
      description: "Returns a list of Batch consumable resources",
      options: [
        {
          name: "--filters",
          description:
            "The filters to apply to the consumable resource list query. If used, only those consumable resources that match the filter are listed. Filter names and values can be:   name: CONSUMABLE_RESOURCE_NAME   values: case-insensitive matches for the consumable resource name. If a filter value ends with an asterisk (*), it matches any consumable resource name that begins with the string before the '*'",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListConsumableResources in paginated output. When this parameter is used, ListConsumableResources only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another ListConsumableResources request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListConsumableResources returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListConsumableResources request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "list-jobs",
      description:
        "Returns a list of Batch jobs. You must specify only one of the following items:   A job queue ID to return a list of jobs in that job queue   A multi-node parallel job ID to return a list of nodes for that job   An array job ID to return a list of the children for that job",
      options: [
        {
          name: "--job-queue",
          description:
            "The name or full Amazon Resource Name (ARN) of the job queue used to list jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--array-job-id",
          description:
            "The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-node-job-id",
          description:
            "The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-status",
          description:
            "The job status used to filter jobs in the specified queue. If the filters parameter is specified, the jobStatus parameter is ignored and jobs with any status are returned. The exception is the SHARE_IDENTIFIER filter and jobStatus can be used together. If you don't specify a status, only RUNNING jobs are returned.  Array job parents are updated to PENDING when any child job is updated to RUNNABLE and remain in PENDING status while child jobs are running. To view these jobs, filter by PENDING status until all child jobs reach a terminal state",
          args: {
            name: "string",
            suggestions: [
              "SUBMITTED",
              "PENDING",
              "RUNNABLE",
              "STARTING",
              "RUNNING",
              "SUCCEEDED",
              "FAILED",
            ],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListJobs in a paginated output. When this parameter is used, ListJobs returns up to maxResults results in a single page and a nextToken response element, if applicable. The remaining results of the initial request can be seen by sending another ListJobs request with the returned nextToken value. The following outlines key parameters and limitations:   The minimum value is 1.    When --job-status is used, Batch returns up to 1000 values.    When --filters is used, Batch returns up to 100 values.   If neither parameter is used, then ListJobs returns up to 1000 results (jobs that are in the RUNNING status) and a nextToken value, if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListJobs request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filter to apply to the query. Only one filter can be used at a time. When the filter is used, jobStatus is ignored with the exception that SHARE_IDENTIFIER and jobStatus can be used together. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP) jobs. The results are sorted by the createdAt field, with the most recent jobs being first.  The SHARE_IDENTIFIER filter and the jobStatus field can be used together to filter results.   JOB_NAME  The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the jobName value. For example, test1 matches both Test1 and test1, and test1* matches both test1 and Test10. When the JOB_NAME filter is used, the results are grouped by the job name and version.  JOB_DEFINITION  The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the jobDefinition value. The value is case sensitive. When the value for the filter is the job definition name, the results include all the jobs that used any revision of that job definition name. If the value ends with an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For example, jd1 matches only jd1, and jd1* matches both jd1 and jd1A. The version of the job definition that's used doesn't affect the sort order. When the JOB_DEFINITION filter is used and the ARN is used (which is in the form arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}), the results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the ARN is used.  BEFORE_CREATED_AT  The value for the filter is the time that's before the job was created. This corresponds to the createdAt value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.  AFTER_CREATED_AT  The value for the filter is the time that's after the job was created. This corresponds to the createdAt value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.  SHARE_IDENTIFIER  The value for the filter is the fairshare scheduling share identifier",
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
      name: "list-jobs-by-consumable-resource",
      description:
        "Returns a list of Batch jobs that require a specific consumable resource",
      options: [
        {
          name: "--consumable-resource",
          description: "The name or ARN of the consumable resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filters to apply to the job list query. If used, only those jobs requiring the specified consumable resource (consumableResource) and that match the value of the filters are listed. The filter names and values can be:   name: JOB_STATUS  values: SUBMITTED | PENDING | RUNNABLE | STARTING | RUNNING | SUCCEEDED | FAILED    name: JOB_NAME   The values are case-insensitive matches for the job name. If a filter value ends with an asterisk (*), it matches any job name that begins with the string before the '*'",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListJobsByConsumableResource in paginated output. When this parameter is used, ListJobsByConsumableResource only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another ListJobsByConsumableResource request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListJobsByConsumableResource returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListJobsByConsumableResource request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "list-quota-shares",
      description:
        "Returns a list of Batch quota shares associated with a job queue",
      options: [
        {
          name: "--job-queue",
          description:
            "The name or full Amazon Resource Name (ARN) of the job queue used to list quota shares",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListQuotaShares in paginated output. When this parameter is used, ListQuotaShares only returns maxResults results in a single page and a nextToken response element. You can see the remaining results of the initial request by sending another ListQuotaShares request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, ListQuotaShares returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value that's returned from a previous paginated ListQuotaShares request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "list-scheduling-policies",
      description: "Returns a list of Batch scheduling policies",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results that's returned by ListSchedulingPolicies in paginated output. When this parameter is used, ListSchedulingPolicies only returns maxResults results in a single page and a nextToken response element. You can see the remaining results of the initial request by sending another ListSchedulingPolicies request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, ListSchedulingPolicies returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value that's returned from a previous paginated ListSchedulingPolicies request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "list-service-jobs",
      description: "Returns a list of service jobs for a specified job queue",
      options: [
        {
          name: "--job-queue",
          description:
            "The name or ARN of the job queue with which to list service jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-status",
          description:
            "The job status used to filter service jobs in the specified queue. If the filters parameter is specified, the jobStatus parameter is ignored and jobs with any status are returned. The exceptions are the SHARE_IDENTIFIER filter and QUOTA_SHARE_NAME filter, which can be used with jobStatus. If you don't specify a status, only RUNNING jobs are returned.  The SHARE_IDENTIFIER filter or QUOTA_SHARE_NAME filter can be used with the jobStatus field to filter results",
          args: {
            name: "string",
            suggestions: [
              "SUBMITTED",
              "PENDING",
              "RUNNABLE",
              "SCHEDULED",
              "STARTING",
              "RUNNING",
              "SUCCEEDED",
              "FAILED",
            ],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListServiceJobs in paginated output. When this parameter is used, ListServiceJobs only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another ListServiceJobs request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListServiceJobs returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListServiceJobs request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filter to apply to the query. Only one filter can be used at a time. When the filter is used, jobStatus is ignored with the exception that SHARE_IDENTIFIER or QUOTA_SHARE_NAME and jobStatus can be used together. The results are sorted by the createdAt field, with the most recent jobs being first.  The SHARE_IDENTIFIER or QUOTA_SHARE_NAME filter and the jobStatus field can be used together to filter results.   JOB_NAME  The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the jobName value. For example, test1 matches both Test1 and test1, and test1* matches both test1 and Test10. When the JOB_NAME filter is used, the results are grouped by the job name and version.  BEFORE_CREATED_AT  The value for the filter is the time that's before the job was created. This corresponds to the createdAt value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.  AFTER_CREATED_AT  The value for the filter is the time that's after the job was created. This corresponds to the createdAt value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.  SHARE_IDENTIFIER  The value for the filter is the fairshare scheduling share identifier.  QUOTA_SHARE_NAME  The value for the filter is the quota management share name",
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
        "Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
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
      name: "register-job-definition",
      description: "Registers an Batch job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of job definition. For more information about multi-node parallel jobs, see Creating a multi-node parallel job definition in the Batch User Guide.   If the value is container, then one of the following is required: containerProperties, ecsProperties, or eksProperties.   If the value is multinode, then nodeProperties is required.    If the job is run on Fargate resources, then multinode isn't supported",
          args: {
            name: "string",
            suggestions: ["container", "multinode"],
          },
        },
        {
          name: "--parameters",
          description:
            "Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition",
          args: {
            name: "map",
          },
        },
        {
          name: "--scheduling-priority",
          description:
            "The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. The minimum supported value is 0 and the maximum supported value is 9999",
          args: {
            name: "integer",
          },
        },
        {
          name: "--container-properties",
          description:
            "An object with properties specific to Amazon ECS-based single-node container-based jobs. If the job definition's type parameter is container, then you must specify either containerProperties or nodeProperties. This must not be specified for Amazon EKS-based job definitions.  If the job runs on Fargate resources, then you must not specify nodeProperties. We recommend ecsProperties, which supports both single-container and multi-container jobs. containerProperties is also supported for single-container jobs. For more information, see Multi-container jobs in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-properties",
          description:
            "An object with properties specific to multi-node parallel jobs. If you specify node properties for a job, it becomes a multi-node parallel job. For more information, see Multi-node Parallel Jobs in the Batch User Guide.  If the job runs on Fargate resources, then you must not specify nodeProperties. We recommend ecsProperties, which supports both single-container and multi-container jobs. containerProperties is also supported for single-container jobs.   If the job runs on Amazon EKS resources, then you must not specify nodeProperties",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retry-strategy",
          description:
            "The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that's specified during a SubmitJob operation overrides the retry strategy defined here. If a job is terminated due to a timeout, it isn't retried",
          args: {
            name: "structure",
          },
        },
        {
          name: "--propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state.  If the job runs on Amazon EKS resources, then you must not specify propagateTags",
        },
        {
          name: "--no-propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state.  If the job runs on Amazon EKS resources, then you must not specify propagateTags",
        },
        {
          name: "--timeout",
          description:
            "The timeout configuration for jobs that are submitted with this job definition, after which Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for the timeout is 60 seconds. Any timeout configuration that's specified during a SubmitJob operation overrides the timeout configuration defined here. For more information, see Job Timeouts in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Batch User Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--platform-capabilities",
          description:
            "The platform capabilities required by the job definition. If no value is specified, it defaults to EC2. To run the job on Fargate resources, specify FARGATE. To run the job on Amazon ECS Managed Instances, specify MANAGED_INSTANCES. Jobs with the MANAGED_INSTANCES platform capability must use ecsProperties (not containerProperties) and do not support multi-node parallel jobs.  If the job runs on Amazon EKS resources, then you must not specify platformCapabilities",
          args: {
            name: "list",
          },
        },
        {
          name: "--eks-properties",
          description:
            "An object with properties that are specific to Amazon EKS-based jobs. This must not be specified for Amazon ECS based job definitions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ecs-properties",
          description:
            "An object with properties that are specific to Amazon ECS-based jobs. This must not be specified for Amazon EKS-based job definitions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--consumable-resource-properties",
          description:
            "Contains a list of consumable resources required by the job",
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
      name: "submit-job",
      description:
        "Submits an Batch job from a job definition. Parameters that are specified during SubmitJob override parameters defined in the job definition. vCPU and memory requirements that are specified in the resourceRequirements objects in the job definition are the exception. They can't be overridden this way using the memory and vcpus parameters. Rather, you must specify updates to job definition parameters in a resourceRequirements object that's included in the containerOverrides parameter.  Job queues with a scheduling policy are limited to 500 active share identifiers at a time.    Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-queue",
          description:
            "The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--share-identifier",
          description:
            "The share identifier for the job. Don't specify this parameter if the job queue doesn't have a fair-share scheduling policy. If the job queue has a fair-share scheduling policy, then this parameter must be specified. This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*)",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduling-priority-override",
          description:
            "The scheduling priority for the job. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition and works only within a single share identifier. The minimum supported value is 0 and the maximum supported value is 9999",
          args: {
            name: "integer",
          },
        },
        {
          name: "--array-properties",
          description:
            "The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. For more information, see Array Jobs in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depends-on",
          description:
            "A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a SEQUENTIAL type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an N_TO_N type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-definition",
          description:
            "The job definition used by this job. This value can be one of definition-name, definition-name:revision, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (arn:aws:batch:region:account:job-definition/definition-name:revision , or arn:aws:batch:region:account:job-definition/definition-name ). If the revision is not specified, then the latest active revision is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition",
          args: {
            name: "map",
          },
        },
        {
          name: "--container-overrides",
          description:
            "An object with properties that override the defaults for the job definition that specify the name of a container in the specified job definition and the overrides it should receive. You can override the default command for a container, which is specified in the job definition or the Docker image, with a command override. You can also override existing environment variables on a container or add new environment variables to it with an environment override",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-overrides",
          description:
            "A list of node overrides in JSON format that specify the node range to target and the container overrides for that node range.  This parameter isn't applicable to jobs that are running on Fargate resources; use containerOverrides instead",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retry-strategy",
          description:
            "The retry strategy to use for failed jobs from this SubmitJob operation. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition",
          args: {
            name: "structure",
          },
        },
        {
          name: "--propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state. When specified, this overrides the tag propagation setting in the job definition",
        },
        {
          name: "--no-propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state. When specified, this overrides the tag propagation setting in the job definition",
        },
        {
          name: "--timeout",
          description:
            "The timeout configuration for this SubmitJob operation. You can specify a timeout duration after which Batch terminates your jobs if they haven't finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job. For more information, see Job Timeouts in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference",
          args: {
            name: "map",
          },
        },
        {
          name: "--eks-properties-override",
          description:
            "An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon EKS resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ecs-properties-override",
          description:
            "An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon ECS resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--consumable-resource-properties-override",
          description:
            "An object that contains overrides for the consumable resources of a job",
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
      name: "submit-service-job",
      description:
        "Submits a service job to a specified job queue to run on SageMaker AI. A service job is a unit of work that you submit to Batch for execution on SageMaker AI",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the service job. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-queue",
          description:
            "The job queue into which the service job is submitted. You can specify either the name or the ARN of the queue. The job queue must have the type SAGEMAKER_TRAINING",
          args: {
            name: "string",
          },
        },
        {
          name: "--retry-strategy",
          description:
            "The retry strategy to use for failed service jobs that are submitted with this service job request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scheduling-priority",
          description:
            "The scheduling priority of the service job. Valid values are integers between 0 and 9999",
          args: {
            name: "integer",
          },
        },
        {
          name: "--service-request-payload",
          description:
            "The request, in JSON, for the service that the SubmitServiceJob operation is queueing",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-job-type",
          description:
            "The type of service job. For SageMaker Training jobs, specify SAGEMAKER_TRAINING",
          args: {
            name: "string",
            suggestions: ["SAGEMAKER_TRAINING"],
          },
        },
        {
          name: "--share-identifier",
          description:
            "The share identifier for the service job. Don't specify this parameter if the job queue doesn't have a fair-share scheduling policy. If the job queue has a fair-share scheduling policy, then this parameter must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--quota-share-name",
          description:
            "The quota share for the service job. Don't specify this parameter if the job queue doesn't have a quota share scheduling policy. If the job queue has a quota share scheduling policy, then this parameter must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--preemption-configuration",
          description: "Specifies the service job behavior when preempted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timeout-config",
          description:
            "The timeout configuration for the service job. If none is specified, Batch defers to the default timeout of the underlying service handling the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the service job request. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. This token is used to ensure idempotency of requests. If this parameter is specified and two submit requests with identical payloads and clientTokens are received, these requests are considered the same request and the second request is rejected",
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
        "Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference",
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
      name: "terminate-job",
      description:
        "Terminates a job in a job queue. Jobs that are in the STARTING or RUNNING state are terminated, which causes them to transition to FAILED. Jobs that have not progressed to the STARTING state are cancelled",
      options: [
        {
          name: "--job-id",
          description: "The Batch job ID of the job to terminate",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the job that explains the reason for terminating it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs. This parameter has a limit of 1024 characters",
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
      name: "terminate-jobs",
      description:
        "Terminates up to 50 jobs in a job queue. This is a bulk version of TerminateJob. Jobs that are in the STARTING or RUNNING state are terminated, which causes them to transition to FAILED. Jobs that have not progressed to the STARTING state are cancelled. Batch reports the result for each job individually in the response. Jobs that were processed successfully are reported in the successful list. Jobs that encountered errors are reported in the errors list. The response returns an HTTP status code of 200 even when some jobs encountered errors, so check the errors list. Jobs that can't be found are treated as successfully processed.  This operation requires batch:TerminateJob permission for each job in the request. There is no separate batch:TerminateJobs IAM action. If a caller's IAM policy grants batch:TerminateJob, they can use both the singular TerminateJob and bulk TerminateJobs operations",
      options: [
        {
          name: "--jobs",
          description:
            "An array of up to 50 Batch job IDs of the jobs to terminate",
          args: {
            name: "list",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the job that explains the reason for terminating it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs. This parameter has a limit of 1024 characters",
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
      name: "terminate-service-job",
      description: "Terminates a service job in a job queue",
      options: [
        {
          name: "--job-id",
          description: "The service job ID of the service job to terminate",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the service job that explains the reason for terminating it. This message is returned by DescribeServiceJob operations on the service job",
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
      name: "terminate-service-jobs",
      description:
        "Terminates up to 50 service jobs in a job queue. This is a bulk version of TerminateServiceJob. Batch reports the result for each service job individually in the response. Service jobs that were processed successfully are reported in the successful list. Service jobs that encountered errors are reported in the errors list. The response returns an HTTP status code of 200 even when some service jobs encountered errors, so check the errors list. Service jobs that can't be found are treated as successfully processed.  This operation requires batch:TerminateServiceJob permission for each service job in the request. There is no separate batch:TerminateServiceJobs IAM action. If a caller's IAM policy grants batch:TerminateServiceJob, they can use both the singular TerminateServiceJob and bulk TerminateServiceJobs operations",
      options: [
        {
          name: "--jobs",
          description:
            "An array of up to 50 service job IDs of the service jobs to terminate",
          args: {
            name: "list",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the service job that explains the reason for terminating it. This message is returned by DescribeServiceJob operations on the service job",
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
      name: "untag-resource",
      description: "Deletes specified tags from an Batch resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed",
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
      name: "update-compute-environment",
      description: "Updates an Batch compute environment",
      options: [
        {
          name: "--compute-environment",
          description:
            "The name or full Amazon Resource Name (ARN) of the compute environment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The state of the compute environment. Compute environments in the ENABLED state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues. If the state is ENABLED, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand. If the state is DISABLED, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a STARTING or RUNNING state continue to progress normally. Managed compute environments in the DISABLED state don't scale out.   Compute environments in a DISABLED state may continue to incur billing charges, for example, if they have running instances due to jobs that are still executing or a non-zero minvCpus setting. To prevent additional charges, disable and delete the compute environment.  When an instance is idle, the instance scales down to the minvCpus value. However, the instance size doesn't change. For example, consider a c5.8xlarge instance with a minvCpus value of 4 and a desiredvCpus value of 36. This instance doesn't scale down to a c5.large instance",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--unmanagedv-cpus",
          description:
            "The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair-share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair-share job queue, no vCPU capacity is reserved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-resources",
          description:
            "Details of the compute resources managed by the compute environment. Required for a managed compute environment. For more information, see Compute Environments in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see Batch service IAM role in the Batch User Guide.  If the compute environment has a service-linked role, it can't be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can't be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the AWSServiceRoleForBatch service-linked role must be used. For more information, see Updating compute environments in the Batch User Guide.  If your specified role has a path other than /, then you must either specify the full role ARN (recommended) or prefix the role name with the path.  Depending on how you created your Batch service role, its ARN might contain the service-role path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the service-role path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-policy",
          description:
            "Specifies the updated infrastructure update policy for the compute environment. For more information about infrastructure updates, see Updating compute environments in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context",
          description: "Reserved",
          args: {
            name: "string",
          },
        },
        {
          name: "--ecs-settings",
          description:
            "The Amazon ECS settings for the compute environment. These settings control CloudWatch Container Insights collection for the compute environment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--eks-configuration",
          description:
            "Updates the Amazon EKS configuration for the compute environment. Only specify this parameter if the compute environment's containerOrchestrationType is EKS. Currently, the accessEntry setting is the only Amazon EKS configuration that you can change after the compute environment is created. For more information, see Amazon EKS access entry authentication in the Batch User Guide",
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
      name: "update-consumable-resource",
      description: "Updates a consumable resource",
      options: [
        {
          name: "--consumable-resource",
          description:
            "The name or ARN of the consumable resource to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation",
          description:
            "Indicates how the quantity of the consumable resource will be updated. Must be one of:    SET  Sets the quantity of the resource to the value specified by the quantity parameter.    ADD  Increases the quantity of the resource by the value specified by the quantity parameter.    REMOVE  Reduces the quantity of the resource by the value specified by the quantity parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--quantity",
          description:
            "The change in the total quantity of the consumable resource. The operation parameter determines whether the value specified here will be the new total quantity, or the amount by which the total quantity will be increased or reduced. Must be a non-negative value",
          args: {
            name: "long",
          },
        },
        {
          name: "--client-token",
          description:
            "If this parameter is specified and two update requests with identical payloads and clientTokens are received, these requests are considered the same request. Both requests will succeed, but the update will only happen once. A clientToken is valid for 8 hours",
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
      name: "update-job-queue",
      description: "Updates a job queue",
      options: [
        {
          name: "--job-queue",
          description:
            "The name or the Amazon Resource Name (ARN) of the job queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "Describes the queue's ability to accept new jobs. If the job queue state is ENABLED, it can accept jobs. If the job queue state is DISABLED, new jobs can't be added to the queue, but jobs already in the queue can finish",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--scheduling-policy-arn",
          description:
            "Amazon Resource Name (ARN) of the fair-share scheduling policy. Once a job queue is created, the fair-share scheduling policy can be replaced but not removed. The format is aws:Partition:batch:Region:Account:scheduling-policy/Name . For example, aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the priority parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of 10 is given scheduling preference over a job queue with a priority value of 1. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT). EC2 and Fargate compute environments can't be mixed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-environment-order",
          description:
            "Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute environments must be in the VALID state before you can associate them with a job queue. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT). EC2 and Fargate compute environments can't be mixed.  All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-environment-order",
          description:
            "The order of the service environment associated with the job queue. Job queues with a higher priority are evaluated first when associated with the same service environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-state-time-limit-actions",
          description:
            "The set of actions that Batch perform on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after maxTimeSeconds has passed. (Note: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)",
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
      name: "update-quota-share",
      description: "Updates a quota share",
      options: [
        {
          name: "--quota-share-arn",
          description:
            "The Amazon Resource Name (ARN) of the quota share to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity-limits",
          description:
            "A list that specifies the quantity and type of compute capacity allocated to the quota share",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-sharing-configuration",
          description:
            "Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--preemption-configuration",
          description:
            "Specifies the preemption behavior for jobs in a quota share",
          args: {
            name: "structure",
          },
        },
        {
          name: "--state",
          description:
            "The state of the quota share. If the quota share is ENABLED, it is able to accept jobs. If the quota share is DISABLED, new jobs won't be accepted but jobs already submitted can finish",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
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
      name: "update-scheduling-policy",
      description: "Updates a scheduling policy",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the scheduling policy to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--quota-share-policy",
          description:
            "The quota share scheduling policy details. Once set during creation, a quotaSharePolicy cannot be removed or changed to a fairsharePolicy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fairshare-policy",
          description:
            "The fair-share policy scheduling details. Once set during creation, a fairsharePolicy cannot be removed or changed to a quotaSharePolicy",
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
      name: "update-service-environment",
      description:
        "Updates a service environment. You can update the state of a service environment from ENABLED to DISABLED to prevent new service jobs from being placed in the service environment",
      options: [
        {
          name: "--service-environment",
          description: "The name or ARN of the service environment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The state of the service environment",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--capacity-limits",
          description:
            "The capacity limits for the service environment. This defines the maximum resources that can be used by service jobs in this environment",
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
      name: "update-service-job",
      description:
        "Updates the priority of a specified service job in an Batch job queue",
      options: [
        {
          name: "--job-id",
          description: "The Batch job ID of the job to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduling-priority",
          description:
            "The scheduling priority for the job. This only affects jobs in job queues with a quota-share or fair-share scheduling policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority within a share. The minimum supported value is 0 and the maximum supported value is 9999",
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
  ],
};

export default completionSpec;
