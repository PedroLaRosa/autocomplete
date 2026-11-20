// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "NEEDS_ATTENTION",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "For list pagination",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optBatchJobId: Fig.Option = {
  name: "--batch-job-id",
  description: "The OCID of the batch job",
  args: { name: "batch-job-id" },
  isRequired: true,
};
const optBatchContextId: Fig.Option = {
  name: "--batch-context-id",
  description: "The OCID of the batch context",
  args: { name: "batch-context-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optBatchJobPoolId: Fig.Option = {
  name: "--batch-job-pool-id",
  description: "The OCID of the batch job pool",
  args: { name: "batch-job-pool-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "The batch task profile description",
  args: { name: "description" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optBatchTaskEnvironmentId: Fig.Option = {
  name: "--batch-task-environment-id",
  description: "The OCID of the batch task environment",
  args: { name: "batch-task-environment-id" },
  isRequired: true,
};
const optBatchTaskProfileId: Fig.Option = {
  name: "--batch-task-profile-id",
  description: "The OCID of the batch task profile",
  args: { name: "batch-task-profile-id" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "Summarized information about the batch context",
  args: { name: "description" },
};
const optEntitlements: Fig.Option = {
  name: "--entitlements",
  description:
    "Mapping of concurrent/shared resources used in job tasks to their limits",
  args: { name: "json" },
};
const optJobPriorityConfigurations: Fig.Option = {
  name: "--job-priority-configurations",
  description:
    "List of job priority configurations related to the batch context",
  args: { name: "json" },
};
const optMinDiskSizeInGbs: Fig.Option = {
  name: "--min-disk-size-in-gbs",
  description: "The minimum required size of disk space in GBs",
  args: { name: "integer" },
};
const optMinMemoryInGbs: Fig.Option = {
  name: "--min-memory-in-gbs",
  description: "The minimum required memory",
  args: { name: "integer" },
};
const optMinOcpus: Fig.Option = {
  name: "--min-ocpus",
  description: "The minimum required OCPUs",
  args: { name: "integer" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "batch",
  description: "Batch",
  subcommands: [
    {
      name: "batch-context-shape-collection",
      description: "A collection of container instance shapes",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the shapes allowed to be specified during batch context creation",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description: "The name of the availability domain",
              args: { name: "availability-domain" },
            },
            optLimit,
            optPage,
            {
              name: "--shape-type",
              description: "The type of a shape",
              args: { suggestions: ["CPU", "GPU"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "batch-task-environment",
      description:
        "A batch task environment resource defines the software that is used to execute tasks",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a batch task environment into a different compartment within the same tenancy",
          options: [
            optBatchTaskEnvironmentId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the batch task environment to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a batch task environment",
          options: [
            optCompartmentId,
            {
              name: "--image-url",
              description: "The URL of the ocir image",
              args: { name: "image-url" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "The batch task environment description",
              args: { name: "description" },
            },
            { name: "--security-context", args: { name: "json" } },
            {
              name: "--working-directory",
              description: "Container's working directory",
              args: { name: "working-directory", template: "folders" },
            },
            {
              name: "--volumes",
              description: "List of volumes attached to the image",
              args: { name: "json" },
            },
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a batch task environment",
          options: [
            optBatchTaskEnvironmentId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a batch task environment",
          options: [optBatchTaskEnvironmentId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a batch task environment",
          options: [
            optBatchTaskEnvironmentId,
            optDisplayName,
            {
              name: "--description",
              description: "The batch task environment description",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the task environments by compartment or environment OCID",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the batch task environment",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "batch-task-profile",
      description:
        "A batch task profile resource describes the minimum hardware requirements requested for a task",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a batch task profile into a different compartment within the same tenancy",
          options: [
            optBatchTaskProfileId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the batch task profile to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a batch task profile",
          options: [
            optCompartmentId,
            optDisplayName,
            optDescription,
            optMinOcpus,
            optMinMemoryInGbs,
            optMinDiskSizeInGbs,
            { name: "--extended-information", args: { name: "json" } },
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a batch task profile",
          options: [
            optBatchTaskProfileId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a batch task profile",
          options: [optBatchTaskProfileId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a batch task profile",
          options: [
            optBatchTaskProfileId,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the task profiles by compartment or profile OCID",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the batch task profile",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-cpu-architecture",
          description: "Creates a batch task profile",
          options: [
            optCompartmentId,
            {
              name: "--extended-information-architecture",
              description: "Type of CPU architecture",
              args: { suggestions: ["GENERIC_X86", "GENERIC_ARM"] },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optMinOcpus,
            optMinMemoryInGbs,
            optMinDiskSizeInGbs,
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-cpu-shape",
          description: "Creates a batch task profile",
          options: [
            optCompartmentId,
            {
              name: "--extended-information-shape-name",
              description: "A name of the CPU shape",
              args: { name: "extended-information-shape-name" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optMinOcpus,
            optMinMemoryInGbs,
            optMinDiskSizeInGbs,
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-gpu-shape",
          description: "Creates a batch task profile",
          options: [
            optCompartmentId,
            {
              name: "--extended-information-shape-name",
              description: "A name of the GPU shape",
              args: { name: "extended-information-shape-name" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optMinOcpus,
            optMinMemoryInGbs,
            optMinDiskSizeInGbs,
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      description:
        "A log message from performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description: "Lists the logs for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only the resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "batch-task",
      description:
        "A batch task contains common properties for all types of job tasks",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a specific batch task associated with a batch job by its name",
          options: [
            optBatchJobId,
            {
              name: "--task-name",
              description: "The hierarchical name of the batch task",
              args: { name: "task-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the batch tasks by batch job OCID",
          options: [
            optBatchJobId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "WAITING",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--name",
              description: "The hierarchical name of the batch task",
              args: { name: "name" },
            },
            {
              name: "--task-id",
              description: "The UUID of the batch task",
              args: { name: "task-id" },
            },
            {
              name: "--group-task-name",
              description: "Hierarchical name of the group task",
              args: { name: "group-task-name" },
            },
            {
              name: "--type",
              description: "Filter tasks by type",
              args: { suggestions: ["COMPUTE", "GROUP"] },
            },
            {
              name: "--hierarchy-view",
              description:
                "Defines the hierarchical scope of the tasks to be returned",
              args: { suggestions: ["SHALLOW", "DEEP"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-batch-tasks",
          description: "Lists the batch tasks associated with batch jobs",
          options: [
            optCompartmentId2,
            {
              name: "--batch-job-id",
              description: "The OCID of the batch job",
              args: { name: "batch-job-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "WAITING",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--name",
              description: "The hierarchical name of the batch task",
              args: { name: "name" },
            },
            {
              name: "--task-id",
              description: "The UUID of the batch task",
              args: { name: "task-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "batch-job-pool",
      description: "A batch job pool represents an abstract group for jobs",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a batch job pool into a different compartment within the same tenancy",
          options: [
            optBatchJobPoolId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a batch job pool",
          options: [
            optCompartmentId,
            {
              name: "--batch-context-id",
              description: "The OCID of batch context",
              args: { name: "batch-context-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "Summarized information about the batch job pool",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a batch job pool",
          options: [
            optBatchJobPoolId,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a batch job pool",
          options: [optBatchJobPoolId, optFromJson],
        },
        {
          name: "start",
          description: "Activates the batch job pool",
          options: [
            optBatchJobPoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Deactivates the batch job pool",
          options: [
            optBatchJobPoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a batch job pool",
          options: [
            optBatchJobPoolId,
            optDisplayName,
            {
              name: "--description",
              description: "Summarized information about the batch job pool",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the batch job pools by compartment or job pool OCID",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "DELETED",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the batch job pool",
              args: { name: "id" },
            },
            {
              name: "--batch-context-id",
              description: "The OCID of the batch context",
              args: { name: "batch-context-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "batch-job",
      description:
        "A batch job represents the execution unit that is invoked on a batch's pools of compute resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a batch job",
          options: [
            optBatchJobId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a batch job into a different compartment within the same tenancy",
          options: [
            optBatchJobId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a batch job",
          options: [
            optCompartmentId,
            {
              name: "--batch-job-pool-id",
              description: "The OCID of the parent batch job pool",
              args: { name: "batch-job-pool-id" },
              isRequired: true,
            },
            {
              name: "--tasks",
              description: "A list of tasks to be executed within this job",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description:
                "An optional description that provides additional context next to the displayName",
              args: { name: "description" },
            },
            {
              name: "--environment-variables",
              description:
                "An environment variables to use for the job's tasks (can be overridden by task's environment variables)",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a batch job",
          options: [optBatchJobId, optFromJson],
        },
        {
          name: "pause",
          description: "Pauses the batch job and all its tasks",
          options: [
            optBatchJobId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unpause",
          description: "Resumes the batch job and all its tasks",
          options: [
            optBatchJobId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a batch job",
          options: [
            optBatchJobId,
            optDisplayName,
            {
              name: "--description",
              description:
                "An optional description that provides additional context next to the displayName",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the batch jobs by compartment or job OCID",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "WAITING",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the batch job",
              args: { name: "id" },
            },
            {
              name: "--batch-job-pool-id",
              description: "The OCID of the batch job pool",
              args: { name: "batch-job-pool-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description:
        "An error encountered while performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the errors for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "batch-context",
      description: "Representation of a batch context and its configurations",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a batch context into a different compartment within the same tenancy",
          options: [
            optBatchContextId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the batch context to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a batch context",
          options: [
            optCompartmentId,
            { name: "--network", args: { name: "json" }, isRequired: true },
            {
              name: "--fleets",
              description:
                "List of fleet configurations related to the batch context",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optJobPriorityConfigurations,
            optEntitlements,
            { name: "--logging-configuration", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a batch context",
          options: [
            optBatchContextId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a batch context",
          options: [optBatchContextId, optFromJson],
        },
        {
          name: "start",
          description: "Activates a batch context to accept new jobs",
          options: [
            optBatchContextId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops a batch context from accepting new jobs",
          options: [
            optBatchContextId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a batch context",
          options: [
            optBatchContextId,
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optJobPriorityConfigurations,
            optEntitlements,
            { name: "--logging-configuration", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oci-logging-configuration",
          description: "Creates a batch context",
          options: [
            optCompartmentId,
            { name: "--network", args: { name: "json" }, isRequired: true },
            {
              name: "--fleets",
              description:
                "List of fleet configurations related to the batch context",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optJobPriorityConfigurations,
            optEntitlements,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--is-job-task-events-propagation-enabled",
              description:
                "A switch to enable or disable propagation of job and task events to the customer's logs in OCI logging",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--log-group-id",
              description: "The OCID of the log group. required",
              args: { name: "log-group-id" },
              isRequired: true,
            },
            {
              name: "--log-id",
              description: "The OCID of the log. required",
              args: { name: "log-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-oci-logging-configuration",
          description: "Updates a batch context",
          options: [
            optBatchContextId,
            {
              name: "--logging-configuration-is-job-task-events-propagation-enabled",
              description:
                "A switch to enable or disable propagation of job and task events to the customer's logs in OCI logging",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optJobPriorityConfigurations,
            optEntitlements,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the batch contexts by compartment or context OCID",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the batch context",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
