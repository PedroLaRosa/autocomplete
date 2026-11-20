// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optStackId: Fig.Option = {
  name: "--stack-id",
  description: "The OCID of the Stack",
  args: { name: "stack-id" },
  isRequired: true,
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
      "CANCELLING",
      "CANCELLED",
    ],
  },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "dif",
  description: "DataIntelligences Control Plane",
  subcommands: [
    {
      name: "stack",
      description: "A Stack is a collection of a templates and services",
      subcommands: [
        {
          name: "add",
          description: "Add new service or update existing service",
          options: [
            optStackId,
            {
              name: "--adb",
              description:
                "ADB details if adb is included in the services to be added",
              args: { name: "json" },
            },
            {
              name: "--ggcs",
              description:
                "GGCS details if ggcs is included in the services to be added",
              args: { name: "json" },
            },
            {
              name: "--dataflow",
              description:
                "DATAFLOW details if dataflow is included in the services to be added",
              args: { name: "json" },
            },
            {
              name: "--objectstorage",
              description:
                "Object Storage Details if object storage is included in services to be added",
              args: { name: "json" },
            },
            {
              name: "--genai",
              description:
                "GenAI Details if genai is included in services to be added",
              args: { name: "json" },
            },
            {
              name: "--aidataplatform",
              description:
                "AI Data Platform Details if aidataplatform is included in services to be added",
              args: { name: "json" },
            },
            {
              name: "--omk",
              description:
                "OMK Details if omk is included in services to be added",
              args: { name: "json" },
            },
            {
              name: "--oke",
              description:
                "OKE Details if oke is included in services to be added",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stack-templates",
              description: "List of templates to be added for the stack",
              args: {
                suggestions: [
                  "DATALAKE",
                  "DATAPIPELINE",
                  "AISERVICES",
                  "DATATRANSFORMATION",
                  "DEVOPSTOOLKIT",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--services",
              description: "List of services to be added for the stack",
              args: {
                suggestions: [
                  "ADB",
                  "GGCS",
                  "OBJECTSTORAGE",
                  "GENAI",
                  "DATAFLOW",
                  "AIDATAPLATFORM",
                  "OMK",
                  "OKE",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a Stack into a different compartment within the same tenancy",
          options: [
            optStackId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the Stack to",
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
          description: "Creates a Stack",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to create the Stack in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--notification-email",
              description:
                "Email id to which the stack notifications would be sent",
              args: { name: "notification-email" },
            },
            {
              name: "--adb",
              description: "ADB details if adb is included in the services",
              args: { name: "json" },
            },
            {
              name: "--ggcs",
              description: "GGCS details if ggcs is included in the services",
              args: { name: "json" },
            },
            {
              name: "--dataflow",
              description:
                "DATAFLOW details if dataflow is included in the services",
              args: { name: "json" },
            },
            {
              name: "--objectstorage",
              description:
                "Object Storage Details if object storage is included in services",
              args: { name: "json" },
            },
            {
              name: "--genai",
              description: "GenAi Details if genai is included in services",
              args: { name: "json" },
            },
            {
              name: "--aidataplatform",
              description:
                "AI Data Platform Details if aidataplatform is included in services",
              args: { name: "json" },
            },
            {
              name: "--omk",
              description: "OMK Details if omk is included in services",
              args: { name: "json" },
            },
            {
              name: "--oke",
              description: "OKE Details if oke is included in services",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stack-templates",
              description: "List of templates to be onboarded for the stack",
              args: {
                suggestions: [
                  "DATALAKE",
                  "DATAPIPELINE",
                  "AISERVICES",
                  "DATATRANSFORMATION",
                  "DEVOPSTOOLKIT",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--services",
              description: "List of services to be onboarded for the stack",
              args: {
                suggestions: [
                  "ADB",
                  "GGCS",
                  "OBJECTSTORAGE",
                  "GENAI",
                  "DATAFLOW",
                  "AIDATAPLATFORM",
                  "OMK",
                  "OKE",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Stack",
          options: [
            optStackId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deploy-artifacts",
          description: "DeployArtifacts",
          options: [
            optStackId,
            {
              name: "--subnet-id",
              description:
                "Subnet id for the Private Endpoint creation for artifact deployment",
              args: { name: "subnet-id" },
            },
            {
              name: "--adb",
              description:
                "ADB artifact details if adb is included in the services",
              args: { name: "json" },
            },
            {
              name: "--ggcs",
              description:
                "GGCS artifact details if ggcs is included in the services",
              args: { name: "json" },
            },
            {
              name: "--dataflow",
              description:
                "Dataflow artifact details if dataflow is included in the services",
              args: { name: "json" },
            },
            {
              name: "--omk",
              description:
                "Omk artifact details if omk is included in the services",
              args: { name: "json" },
            },
            {
              name: "--oke",
              description:
                "Oke artifact details if oke is included in the services",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stack-templates",
              description:
                "List of templates where artifacts are to be deployed for the stack",
              args: {
                suggestions: [
                  "DATALAKE",
                  "DATAPIPELINE",
                  "AISERVICES",
                  "DATATRANSFORMATION",
                  "DEVOPSTOOLKIT",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--services",
              description:
                "List of services where artifacts are to be deployed for the stack",
              args: {
                suggestions: [
                  "ADB",
                  "GGCS",
                  "OBJECTSTORAGE",
                  "GENAI",
                  "DATAFLOW",
                  "AIDATAPLATFORM",
                  "OMK",
                  "OKE",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a Stack",
          options: [optStackId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a Stack",
          options: [
            optStackId,
            {
              name: "--notification-email",
              description:
                "Email id to which the stack notifications would be sent",
              args: { name: "notification-email" },
            },
            {
              name: "--adb",
              description:
                "ADB details if adb is included in the services to be updated",
              args: { name: "json" },
            },
            {
              name: "--ggcs",
              description:
                "GGCS details if ggcs is included in the services to be updated",
              args: { name: "json" },
            },
            {
              name: "--dataflow",
              description:
                "DATAFLOW details if dataflow is included in the services to be updated",
              args: { name: "json" },
            },
            {
              name: "--objectstorage",
              description:
                "Object Storage Details if object storage is included in services to be updated",
              args: { name: "json" },
            },
            {
              name: "--genai",
              description:
                "GenAI Details if genai is included in services to be updated",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stack-templates",
              description: "List of templates to be updated for the stack",
              args: {
                suggestions: [
                  "DATALAKE",
                  "DATAPIPELINE",
                  "AISERVICES",
                  "DATATRANSFORMATION",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--services",
              description: "List of services to be updated for the stack",
              args: {
                suggestions: [
                  "ADB",
                  "GGCS",
                  "OBJECTSTORAGE",
                  "GENAI",
                  "DATAFLOW",
                ],
              },
              isRepeatable: true,
            },
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
          name: "cancel",
          description: "Cancels a work request",
          options: [
            optWorkRequestId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
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
                  "CANCELLING",
                  "CANCELLED",
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
      name: "stack-collection",
      description: "Results of a Stack search",
      subcommands: [
        {
          name: "list-stacks",
          description: "Gets a list of Stacks",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the Stack",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
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
