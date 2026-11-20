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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optMetadata: Fig.Option = {
  name: "--metadata",
  description: "Key-value pairs to allow additional configurations",
  args: { name: "json" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optToolId: Fig.Option = {
  name: "--tool-id",
  description: "The OCID of the Tool",
  args: { name: "tool-id" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optAgentId: Fig.Option = {
  name: "--agent-id",
  description: "The OCID of the agent that this Tool is attached to",
  args: { name: "agent-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description about the Tool",
  args: { name: "description" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "Description about the Tool",
  args: { name: "description" },
};
const optKnowledgeBaseId: Fig.Option = {
  name: "--knowledge-base-id",
  description: "The OCID of the knowledge base",
  args: { name: "knowledge-base-id" },
  isRequired: true,
};
const optAgentEndpointId: Fig.Option = {
  name: "--agent-endpoint-id",
  description: "The OCID of the endpoint",
  args: { name: "agent-endpoint-id" },
  isRequired: true,
};
const optAgentId2: Fig.Option = {
  name: "--agent-id",
  description: "The OCID of the agent",
  args: { name: "agent-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment to create the knowledge base in",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDataSourceId: Fig.Option = {
  name: "--data-source-id",
  description: "The OCID of the data source",
  args: { name: "data-source-id" },
  isRequired: true,
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "A user-friendly description of the knowledge base",
  args: { name: "description" },
};
const optLifecycleState: Fig.Option = {
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
    ],
  },
};
const optProvisionedCapacityId: Fig.Option = {
  name: "--provisioned-capacity-id",
  description: "The OCID of the provisioned capacity",
  args: { name: "provisioned-capacity-id" },
  isRequired: true,
};
const optToolConfigGenerationLlmCustomization: Fig.Option = {
  name: "--tool-config-generation-llm-customization",
  args: { name: "json" },
};
const optToolConfigRuntimeVersion: Fig.Option = {
  name: "--tool-config-runtime-version",
  description: "The runtimeVersion of the system prompt",
  args: { name: "tool-config-runtime-version" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optDataIngestionJobId: Fig.Option = {
  name: "--data-ingestion-job-id",
  description: "The OCID of the data ingestion job",
  args: { name: "data-ingestion-job-id" },
  isRequired: true,
};
const optDescription4: Fig.Option = {
  name: "--description",
  description: "A description of the knowledge base",
  args: { name: "description" },
};
const completionSpec: Fig.Spec = {
  name: "generative-ai-agent",
  description: "Generative AI Agents Management",
  subcommands: [
    {
      name: "agent-endpoint",
      description: "The endpoint to access a deployed agent",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an endpoint into a different compartment within the same tenancy",
          options: [
            optAgentEndpointId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the endpoint to",
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
          description: "Creates an endpoint",
          options: [
            {
              name: "--agent-id",
              description:
                "The OCID of the agent that this endpoint is associated with",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the endpoint in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "An optional description of the endpoint",
              args: { name: "description" },
            },
            { name: "--content-moderation-config", args: { name: "json" } },
            { name: "--guardrail-config", args: { name: "json" } },
            optMetadata,
            { name: "--human-input-config", args: { name: "json" } },
            { name: "--output-config", args: { name: "json" } },
            {
              name: "--should-enable-trace",
              description: "Whether to show traces in the chat result",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-enable-citation",
              description: "Whether to show citations in the chat result",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-enable-session",
              description: "Whether or not to enable Session-based chat",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-enable-multi-language",
              description: "Whether to enable multi-language for chat",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--session-config", args: { name: "json" } },
            { name: "--provisioned-capacity-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an endpoint",
          options: [
            optAgentEndpointId,
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
          description: "Gets information about an endpoint",
          options: [optAgentEndpointId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of endpoints",
          options: [
            optCompartmentId,
            {
              name: "--agent-id",
              description: "The OCID of the agent",
              args: { name: "agent-id" },
            },
            optLifecycleState,
            optDisplayName2,
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
          name: "update",
          description: "Updates an endpoint",
          options: [
            optAgentEndpointId,
            optDisplayName,
            {
              name: "--description",
              description: "An optional description of the AgentEndpoint",
              args: { name: "description" },
            },
            { name: "--content-moderation-config", args: { name: "json" } },
            { name: "--guardrail-config", args: { name: "json" } },
            optMetadata,
            { name: "--human-input-config", args: { name: "json" } },
            { name: "--output-config", args: { name: "json" } },
            {
              name: "--should-enable-trace",
              description: "Whether to show traces in the chat result",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-enable-citation",
              description: "Whether to show citations in the chat result",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-enable-multi-language",
              description: "Whether to enable multi-language for chat",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--session-config", args: { name: "json" } },
            { name: "--provisioned-capacity-config", args: { name: "json" } },
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
      ],
    },
    {
      name: "data-ingestion-job",
      description:
        "When you create a data source, you specify the location of the data files",
      subcommands: [
        {
          name: "create",
          description: "Creates a data ingestion job",
          options: [
            {
              name: "--data-source-id",
              description: "The OCID of the parent DataSource",
              args: { name: "data-source-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the data ingestion job in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description:
                "A user-friendly description of the data ingestion job",
              args: { name: "description" },
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
          name: "delete",
          description: "Deletes a data ingestion job",
          options: [
            optDataIngestionJobId,
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
          description: "Gets information about a data ingestion job",
          options: [optDataIngestionJobId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of data ingestion jobs",
          options: [
            optCompartmentId,
            {
              name: "--data-source-id",
              description: "The OCID of the data source",
              args: { name: "data-source-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optDisplayName2,
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
          name: "get-log-content",
          description:
            "Returns the raw log file for the specified data ingestion job in text format",
          options: [
            optDataIngestionJobId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "agent",
      description:
        "An agent is an LLM-based autonomous system that understands and generates human-like text",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an agent into a different compartment within the same tenancy",
          options: [
            optAgentId2,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the agent to",
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
          description: "Creates an agent",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to create the agent in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "Description about the agent",
              args: { name: "description" },
            },
            {
              name: "--knowledge-base-ids",
              description:
                "List of OCID of the knowledgeBases associated with agent",
              args: { name: "json" },
            },
            {
              name: "--welcome-message",
              description:
                "Details about purpose and responsibility of the agent",
              args: { name: "welcome-message" },
            },
            { name: "--llm-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an agent",
          options: [
            optAgentId2,
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
          description: "Gets information about an agent",
          options: [optAgentId2, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of agents",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName2,
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
          name: "update",
          description: "Updates an agent",
          options: [
            optAgentId2,
            optDisplayName,
            {
              name: "--description",
              description: "Description about the agent",
              args: { name: "description" },
            },
            {
              name: "--knowledge-base-ids",
              description:
                "List of OCID of the knowledgeBases associated with agent",
              args: { name: "json" },
            },
            {
              name: "--welcome-message",
              description:
                "Details about purpose and responsibility of the agent",
              args: { name: "welcome-message" },
            },
            { name: "--llm-config", args: { name: "json" } },
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
      ],
    },
    {
      name: "provisioned-capacity",
      description:
        "A provisioned capacity is a resource pool of Genrative AI DACs with properties like AgentRuntimeVersion",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a provisioned capacity into a different compartment within the same tenancy",
          options: [
            optProvisionedCapacityId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the ProvisionedCapacity to",
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
          description: "Creates a provisioned capacity",
          options: [
            {
              name: "--display-name",
              description: "The name of the provisioned capacity",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--number-of-units",
              description:
                "Provisioned Capacity Unit corresponds to the amount of characters processed per minute",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the endpoint in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "An optional description of the provisioned capacity",
              args: { name: "description" },
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
          name: "delete",
          description: "Deletes a provisioned capacity",
          options: [
            optProvisionedCapacityId,
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
          description: "Gets information about a provisioned capacity",
          options: [optProvisionedCapacityId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of provisioned capacities",
          options: [
            optCompartmentId,
            {
              name: "--provisioned-capacity-id",
              description: "The OCID of the provisioned capacity",
              args: { name: "provisioned-capacity-id" },
            },
            optLifecycleState,
            optDisplayName2,
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
          name: "update",
          description: "Updates a provisioned capacity",
          options: [
            optProvisionedCapacityId,
            {
              name: "--display-name",
              description: "The name of the provisioned capacity",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "An optional description of the provisioned capacity",
              args: { name: "description" },
            },
            {
              name: "--number-of-units",
              description:
                "Provisioned Capacity Unit corresponds to the amount of characters processed per minute",
              args: { name: "integer" },
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
      name: "knowledge-base",
      description:
        "A knowledge base is the base for all the data sources that an agent can use to retrieve information for its",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a knowledge base into a different compartment within the same tenancy",
          options: [
            optKnowledgeBaseId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the KnowledgeBase to",
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
          description: "Creates a knowledge base",
          options: [
            {
              name: "--index-config",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId3,
            optDisplayName,
            optDescription3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a knowledge base",
          options: [
            optKnowledgeBaseId,
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
          description: "Gets information about a knowledge base",
          options: [optKnowledgeBaseId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of knowledge bases",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
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
          name: "update",
          description: "Updates a knowledge base",
          options: [
            optKnowledgeBaseId,
            optDisplayName,
            optDescription4,
            { name: "--index-config", args: { name: "json" } },
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
          name: "create-default-kb",
          description: "Creates a knowledge base",
          options: [
            optCompartmentId3,
            optDisplayName,
            optDescription3,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--index-config-should-enable-hybrid-search",
              description:
                "Whether to enable Hybrid search in service managed OpenSearch",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oci-database-kb",
          description: "Creates a knowledge base",
          options: [
            optCompartmentId3,
            {
              name: "--index-config-database-connection",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--index-config-database-functions",
              description: "Array of Database functions to be used",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oci-open-search-kb",
          description: "Creates a knowledge base",
          options: [
            optCompartmentId3,
            {
              name: "--index-config-cluster-id",
              description: "The OCID of the OpenSearch Cluster",
              args: { name: "index-config-cluster-id" },
              isRequired: true,
            },
            {
              name: "--index-config-secret-detail",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--index-config-indexes",
              description: "Index configuration for open search",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-oci-database-kb",
          description: "Updates a knowledge base",
          options: [
            optKnowledgeBaseId,
            {
              name: "--index-config-database-connection",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--index-config-database-functions",
              description: "Array of Database functions to be used",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription4,
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
          name: "update-oci-open-search-kb",
          description: "Updates a knowledge base",
          options: [
            optKnowledgeBaseId,
            {
              name: "--index-config-cluster-id",
              description: "The OCID of the OpenSearch Cluster",
              args: { name: "index-config-cluster-id" },
              isRequired: true,
            },
            {
              name: "--index-config-secret-detail",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--index-config-indexes",
              description: "Index configuration for open search",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription4,
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
      ],
    },
    {
      name: "work-request-log-entry",
      description:
        "A log message from performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list-logs",
          description: "Lists the logs for a work request",
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
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
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
            optCompartmentId,
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
      name: "data-source",
      description: "A data source points to the source of your data",
      subcommands: [
        {
          name: "create",
          description: "Creates a data source",
          options: [
            {
              name: "--knowledge-base-id",
              description: "The OCID of the parent KnowledgeBase",
              args: { name: "knowledge-base-id" },
              isRequired: true,
            },
            {
              name: "--data-source-config",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the data source in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "A description of the data source",
              args: { name: "description" },
            },
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a data source",
          options: [
            optDataSourceId,
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
          description: "Gets information about a data source",
          options: [optDataSourceId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of data sources",
          options: [
            optCompartmentId,
            {
              name: "--knowledge-base-id",
              description: "The OCID of the knowledge base",
              args: { name: "knowledge-base-id" },
            },
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
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
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
          name: "update",
          description: "Updates a data source",
          options: [
            optDataSourceId,
            optDisplayName,
            {
              name: "--description",
              description: "A user-friendly description of the data source",
              args: { name: "description" },
            },
            { name: "--data-source-config", args: { name: "json" } },
            optMetadata,
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
          name: "create-object-storage-ds",
          description: "Creates a data source",
          options: [
            {
              name: "--knowledge-base-id",
              description: "The OCID of the parent KnowledgeBase",
              args: { name: "knowledge-base-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the data source in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "A description of the data source",
              args: { name: "description" },
            },
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--data-source-config-should-enable-multi-modality",
              description:
                "Flag to enable or disable multi modality such as image processing while ingestion of data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--data-source-config-object-storage-prefixes",
              description:
                "The locations of data items in Object Storage, can either be an object (File) or a prefix (folder)",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-object-storage-ds",
          description: "Updates a data source",
          options: [
            optDataSourceId,
            optDisplayName,
            {
              name: "--description",
              description: "A user-friendly description of the data source",
              args: { name: "description" },
            },
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--data-source-config-should-enable-multi-modality",
              description:
                "Flag to enable or disable multi modality such as image processing while ingestion of data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--data-source-config-object-storage-prefixes",
              description:
                "The locations of data items in Object Storage, can either be an object (File) or a prefix (folder)",
              args: { name: "json" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tool",
      description: "The description of Tool",
      subcommands: [
        {
          name: "create",
          description: "Creates a tool",
          options: [
            optDescription,
            optAgentId,
            optCompartmentId2,
            { name: "--tool-config", args: { name: "json" }, isRequired: true },
            optDisplayName,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-tool-sql-tool-config",
          description: "Creates a tool",
          options: [
            optDescription,
            optAgentId,
            optCompartmentId2,
            {
              name: "--tool-config-dialect",
              description: "Dialect to be used for SQL generation",
              args: { suggestions: ["SQL_LITE", "ORACLE_SQL"] },
              isRequired: true,
            },
            optDisplayName,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            { name: "--tool-config-icl-examples", args: { name: "json" } },
            { name: "--tool-config-database-schema", args: { name: "json" } },
            {
              name: "--tool-config-should-enable-sql-execution",
              description: "To enable/disable SQL execution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tool-config-model-size",
              description: "Size of the model",
              args: { suggestions: ["SMALL", "LARGE"] },
            },
            {
              name: "--tool-config-should-enable-self-correction",
              description: "To enable/disable self correction",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tool-config-table-and-column-description",
              args: { name: "json" },
            },
            optToolConfigGenerationLlmCustomization,
            {
              name: "--tool-config-database-connection",
              args: { name: "json" },
            },
            optToolConfigRuntimeVersion,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-tool-function-calling-tool-config",
          description: "Creates a tool",
          options: [
            optDescription,
            optAgentId,
            optCompartmentId2,
            {
              name: "--tool-config-function",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-tool-http-endpoint-tool-config",
          description: "Creates a tool",
          options: [
            optDescription,
            optAgentId,
            optCompartmentId2,
            {
              name: "--tool-config-api-schema",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--tool-config-subnet-id",
              description:
                "The subnet ID from agent developer tenancy through which the egress is going to be routed",
              args: { name: "tool-config-subnet-id" },
              isRequired: true,
            },
            {
              name: "--tool-config-http-endpoint-auth-config",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-tool-agent-tool-config",
          description: "Creates a tool",
          options: [
            optDescription,
            optAgentId,
            optCompartmentId2,
            {
              name: "--tool-config-agent-endpoint-id",
              description:
                "The AgentEndpoint OCID to be used as a tool in this agent",
              args: { name: "tool-config-agent-endpoint-id" },
              isRequired: true,
            },
            optDisplayName,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-tool-rag-tool-config",
          description: "Creates a tool",
          options: [
            optDescription,
            optAgentId,
            optCompartmentId2,
            {
              name: "--tool-config-knowledge-base-configs",
              description:
                "The KnowledgeBase configurations that this RAG Tool uses",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optToolConfigGenerationLlmCustomization,
            optToolConfigRuntimeVersion,
            {
              name: "--tool-config-embedding-llm-customization",
              args: { name: "json" },
            },
            {
              name: "--tool-config-reranking-llm-customization",
              args: { name: "json" },
            },
            {
              name: "--tool-config-reasoning-llm-customization",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a tool",
          options: [
            optToolId,
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
          description: "Gets information about a tool",
          options: [optToolId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of tools",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName2,
            {
              name: "--agent-id",
              description: "The OCID of the agent",
              args: { name: "agent-id" },
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
          name: "update",
          description: "Updates a tool",
          options: [
            optToolId,
            optDisplayName,
            optDescription2,
            { name: "--tool-config", args: { name: "json" } },
            optMetadata,
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
          name: "update-tool-sql-tool-config",
          description: "Updates a tool",
          options: [
            optToolId,
            {
              name: "--tool-config-dialect",
              description: "Dialect to be used for SQL generation",
              args: { suggestions: ["SQL_LITE", "ORACLE_SQL"] },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            { name: "--tool-config-icl-examples", args: { name: "json" } },
            { name: "--tool-config-database-schema", args: { name: "json" } },
            {
              name: "--tool-config-should-enable-sql-execution",
              description: "To enable/disable SQL execution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tool-config-model-size",
              description: "Size of the model",
              args: { suggestions: ["SMALL", "LARGE"] },
            },
            {
              name: "--tool-config-should-enable-self-correction",
              description: "To enable/disable self correction",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tool-config-table-and-column-description",
              args: { name: "json" },
            },
            optToolConfigGenerationLlmCustomization,
            {
              name: "--tool-config-database-connection",
              args: { name: "json" },
            },
            optToolConfigRuntimeVersion,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-tool-function-calling-tool-config",
          description: "Updates a tool",
          options: [
            optToolId,
            {
              name: "--tool-config-function",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optMetadata,
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
          name: "update-tool-http-endpoint-tool-config",
          description: "Updates a tool",
          options: [
            optToolId,
            {
              name: "--tool-config-api-schema",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--tool-config-subnet-id",
              description:
                "The subnet ID from agent developer tenancy through which the egress is going to be routed",
              args: { name: "tool-config-subnet-id" },
              isRequired: true,
            },
            {
              name: "--tool-config-http-endpoint-auth-config",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optMetadata,
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
          name: "update-tool-agent-tool-config",
          description: "Updates a tool",
          options: [
            optToolId,
            {
              name: "--tool-config-agent-endpoint-id",
              description:
                "The AgentEndpoint OCID to be used as a tool in this agent",
              args: { name: "tool-config-agent-endpoint-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optMetadata,
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
          name: "update-tool-rag-tool-config",
          description: "Updates a tool",
          options: [
            optToolId,
            {
              name: "--tool-config-knowledge-base-configs",
              description:
                "The KnowledgeBase configurations that this RAG Tool uses",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optToolConfigGenerationLlmCustomization,
            optToolConfigRuntimeVersion,
            {
              name: "--tool-config-embedding-llm-customization",
              args: { name: "json" },
            },
            {
              name: "--tool-config-reranking-llm-customization",
              args: { name: "json" },
            },
            {
              name: "--tool-config-reasoning-llm-customization",
              args: { name: "json" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
