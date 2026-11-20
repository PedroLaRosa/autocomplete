// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optGdpPipelineId: Fig.Option = {
  name: "--gdp-pipeline-id",
  description: "Unique pipeline identifier",
  args: { name: "gdp-pipeline-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "gdp",
  description: "Guarded Data Pipelines",
  subcommands: [
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of errors for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of logs for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      description: "A description of work request status",
      subcommands: [
        {
          name: "get",
          description: "Gets details of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources with a lifecycleState that matches the given OperationStatus",
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
                "The ID of the resource affected by the work request",
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
      name: "pipeline",
      description: "Retrieves pipeline configuration information by identifier",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a pipeline resource from one compartment to another",
          options: [
            optGdpPipelineId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new pipeline",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Pipeline short name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--pipeline-type",
              description: "Type of pipeline",
              args: { name: "pipeline-type" },
              isRequired: true,
            },
            {
              name: "--bucket-details",
              description:
                "Information about the bucket in the pipeline being configured",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--peering-region",
              description:
                "Public region name where the peered pipeline exists",
              args: { name: "peering-region" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "Short field input by customer for a description of the data pipeline use-case",
              args: { name: "description" },
            },
            {
              name: "--service-log-group-id",
              description: "The OCID of the service log group",
              args: { name: "service-log-group-id" },
            },
            {
              name: "--file-types",
              description:
                "List of file types allowed to be transferred in the pipeline according to the authorization details",
              args: { name: "json" },
            },
            {
              name: "--authorization-details",
              description:
                "Authorization information about the pipeline being configured",
              args: { name: "authorization-details" },
            },
            {
              name: "--is-scanning-enabled",
              description:
                "Determines whether GDP Scanning should be enabled for the pipeline",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-approval-needed",
              description:
                "Determines whether file transfers need to go through an approval workflow",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--approval-key-vault-id",
              description:
                "The KMS vault OCID for the key to be used for file transfer approvals",
              args: { name: "approval-key-vault-id" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--is-fileoverride-enabled",
              description: "Enable file override feature in destination bucket",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-chunking-enabled",
              description:
                "Specifies whether the file should be chunked during transfer",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a pipeline by identifier",
          options: [
            optGdpPipelineId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--max-wait-seconds",
              description:
                "Maximum time to wait for the --wait-for-state state (default 1200)",
              args: { name: "integer" },
            },
            {
              name: "--wait-interval-seconds",
              description:
                "Check interval for --wait-for-state in seconds (default 30)",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a pipeline by identifier",
          options: [optGdpPipelineId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of pipelines",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--gdp-pipeline-id",
              description: "Unique pipeline identifier",
              args: { name: "gdp-pipeline-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources with a lifecycleState that matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
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
        {
          name: "peer",
          description: "Peers the pipeline",
          options: [
            {
              name: "--peering-gdp-pipeline-id",
              description: "OCID of the peering pipeline",
              args: { name: "peering-gdp-pipeline-id" },
              isRequired: true,
            },
            optGdpPipelineId,
            {
              name: "--peer-validation-nonce",
              description:
                "Unique one-time-token generated to validate the identity of the sender and prevent the peer request from",
              args: { name: "peer-validation-nonce" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts the pipeline",
          options: [optGdpPipelineId, optIfMatch, optFromJson],
        },
        {
          name: "stop",
          description: "Stops the pipeline",
          options: [optGdpPipelineId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description: "Updates the pipeline",
          options: [
            optGdpPipelineId,
            {
              name: "--display-name",
              description: "Pipeline name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "Short field input by customer for a description of the data pipeline use-case",
              args: { name: "description" },
            },
            {
              name: "--service-log-group-id",
              description: "The OCID of the service log group",
              args: { name: "service-log-group-id" },
            },
            {
              name: "--file-types",
              description:
                "List of file types allowed to be transferred in the data pipeline according to the authorization details",
              args: { name: "json" },
            },
            {
              name: "--authorization-details",
              description:
                "Authorization information about the pipeline being configured",
              args: { name: "authorization-details" },
            },
            {
              name: "--is-scanning-enabled",
              description:
                "Determines whether GDP Scanning should be enabled for the pipeline",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-approval-needed",
              description:
                "Determines whether file transfers need to go through an approval workflow",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--approval-key-vault-id",
              description:
                "The KMS vault OCID for the key to be used for file transfer approvals",
              args: { name: "approval-key-vault-id" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
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
            {
              name: "--is-fileoverride-enabled",
              description: "Enable file override feature in destination bucket",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-chunking-enabled",
              description:
                "Specifies whether the file should be chunked during transfer",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
