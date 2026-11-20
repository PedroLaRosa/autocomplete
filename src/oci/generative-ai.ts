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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "An optional description of the VectorStoreConnector",
  args: { name: "description" },
};
const optVectorStoreConnectorId: Fig.Option = {
  name: "--vector-store-connector-id",
  description: "The OCID of the VectorStoreConnector",
  args: { name: "vector-store-connector-id" },
  isRequired: true,
};
const optApiKeyId: Fig.Option = {
  name: "--api-key-id",
  description: "The OCID of the APIKey",
  args: { name: "api-key-id" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "An optional description of the SemanticStore",
  args: { name: "description" },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
  isRequired: true,
};
const optHostedDeploymentId: Fig.Option = {
  name: "--hosted-deployment-id",
  description: "The OCID of the hosted deployment",
  args: { name: "hosted-deployment-id" },
  isRequired: true,
};
const optIsUserDefinedSemanticsEnabled: Fig.Option = {
  name: "--is-user-defined-semantics-enabled",
  description:
    "Whether to include user-defined semantic inputs, such as annotations, comments, and synonyms",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optRefreshSchedule: Fig.Option = {
  name: "--refresh-schedule",
  args: { name: "json" },
};
const optSemanticStoreId: Fig.Option = {
  name: "--semantic-store-id",
  description: "The OCID of the SemanticStore",
  args: { name: "semantic-store-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["displayName", "timeCreated"] },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACTIVE",
      "CREATING",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optProjectId: Fig.Option = {
  name: "--project-id",
  description: "Owning Generative AI Project OCID",
  args: { name: "project-id" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName", "lifecycleState"] },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
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
  isRepeatable: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "Owning compartment OCID for a ConversationStore",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDedicatedAiClusterId: Fig.Option = {
  name: "--dedicated-ai-cluster-id",
  description: "The OCID of the dedicated AI cluster",
  args: { name: "dedicated-ai-cluster-id" },
  isRequired: true,
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name for the VectorStoreConnector",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName5: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name for the VectorStoreConnector",
  args: { name: "display-name" },
};
const optEndpointId: Fig.Option = {
  name: "--endpoint-id",
  description: "The OCID of the endpoint",
  args: { name: "endpoint-id" },
  isRequired: true,
};
const optEnvironmentVariables: Fig.Option = {
  name: "--environment-variables",
  description: "The list of environment variables for the Hosted Application",
  args: { name: "json" },
};
const optGenerativeAiPrivateEndpointId: Fig.Option = {
  name: "--generative-ai-private-endpoint-id",
  description: "The unique id for a Generative AI private endpoint",
  args: { name: "generative-ai-private-endpoint-id" },
  isRequired: true,
};
const optGenerativeAiProjectId: Fig.Option = {
  name: "--generative-ai-project-id",
  description: "The OCID of the generativeAiProject",
  args: { name: "generative-ai-project-id" },
  isRequired: true,
};
const optHostedApplicationIamId: Fig.Option = {
  name: "--hosted-application-iam-id",
  description: "The OCID of the hosted application",
  args: { name: "hosted-application-iam-id" },
  isRequired: true,
};
const optHostedApplicationId: Fig.Option = {
  name: "--hosted-application-id",
  description: "The OCID of the hosted application",
  args: { name: "hosted-application-id" },
  isRequired: true,
};
const optImportedModelId: Fig.Option = {
  name: "--imported-model-id",
  description: "The importedModel OCID",
  args: { name: "imported-model-id" },
  isRequired: true,
};
const optModelId: Fig.Option = {
  name: "--model-id",
  description: "The model OCID",
  args: { name: "model-id" },
  isRequired: true,
};
const optRoutingProfileId: Fig.Option = {
  name: "--routing-profile-id",
  description: "The OCID of the routing profile",
  args: { name: "routing-profile-id" },
  isRequired: true,
};
const optScalingConfig: Fig.Option = {
  name: "--scaling-config",
  args: { name: "json" },
};
const optScheduleConfig: Fig.Option = {
  name: "--schedule-config",
  args: { name: "json" },
};
const optScheduleConfigState: Fig.Option = {
  name: "--schedule-config-state",
  description: "The state of the schedule",
  args: { suggestions: ["ENABLED", "DISABLED"] },
};
const optScheduleConfigTimeEnd: Fig.Option = {
  name: "--schedule-config-time-end",
  description:
    "The schedule end date time, if null, the schedule will never expire",
  args: { name: "datetime" },
};
const optScheduleConfigTimeStart: Fig.Option = {
  name: "--schedule-config-time-start",
  description:
    "The schedule starting date time, if null, System set the time when schedule is created",
  args: { name: "datetime" },
};
const optVaultSecretId: Fig.Option = {
  name: "--vault-secret-id",
  description:
    "An optional customer Encryption Key stored in OCI Vault that can be used to decrypt the data downloaded from",
  args: { name: "vault-secret-id" },
};
const optVectorStoreId: Fig.Option = {
  name: "--vector-store-id",
  description:
    "An OCID that identifies the Vector Store to which this connector is connected",
  args: { name: "vector-store-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "Owning compartment OCID for a SemanticStore",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConfiguration: Fig.Option = {
  name: "--configuration",
  args: { name: "json" },
  isRequired: true,
};
const optConfiguration2: Fig.Option = {
  name: "--configuration",
  args: { name: "json" },
};
const optDataSource: Fig.Option = {
  name: "--data-source",
  args: { name: "json" },
  isRequired: true,
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "An optional description of the hosted application",
  args: { name: "description" },
};
const optDescription4: Fig.Option = {
  name: "--description",
  description: "An optional description of the imported model",
  args: { name: "description" },
};
const optHostedApplicationStorageId: Fig.Option = {
  name: "--hosted-application-storage-id",
  description: "The OCID of the hosted application storage",
  args: { name: "hosted-application-storage-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources whose lifecycle state matches the given value",
  args: {
    suggestions: [
      "ACTIVE",
      "CREATING",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optLifecycleState2: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only the hosted applications that their lifecycle state matches the given lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optName: Fig.Option = {
  name: "--name",
  description: "Immutable name within the Project",
  args: { name: "name" },
  isRequired: true,
};
const optSchemas: Fig.Option = {
  name: "--schemas",
  args: { name: "json" },
  isRequired: true,
};
const optSchemas2: Fig.Option = { name: "--schemas", args: { name: "json" } };
const optVectorStoreConnectorFileSyncId: Fig.Option = {
  name: "--vector-store-connector-file-sync-id",
  description: "The OCID of the vectorStoreConnectorFileSync",
  args: { name: "vector-store-connector-file-sync-id" },
  isRequired: true,
};
const optVendor: Fig.Option = {
  name: "--vendor",
  description: "The provider of the imported model",
  args: { name: "vendor" },
};
const optVersion: Fig.Option = {
  name: "--version",
  description: "The version of the imported model",
  args: { name: "version" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "generative-ai",
  description: "Generative AI Service Management",
  subcommands: [
    {
      name: "sandbox-warm-pool-collection",
      description: "Sandbox Warm Pool Collection",
      subcommands: [
        {
          name: "list-sandbox-warm-pools",
          description:
            "Lists named MANAGED and CUSTOM pools for Sandbox-enabled Projects",
          options: [
            optProjectId,
            optLimit,
            optPage,
            {
              name: "--name",
              description: "Exact name filter",
              args: { name: "name" },
            },
            {
              name: "--type",
              description: "Filter by type",
              args: { suggestions: ["MANAGED", "CUSTOM"] },
            },
            {
              name: "--shape",
              description: "Filter by shape",
              args: { suggestions: ["SMALL", "MEDIUM", "LARGE"] },
            },
            {
              name: "--sort-by",
              description: "Filter by sortBy",
              args: { suggestions: ["timeCreated", "name"] },
            },
            {
              name: "--sort-order",
              description: "Filter by sortOrder",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "hosted-application-storage-collection",
      description: "Results of a dedicate hosted application search",
      subcommands: [
        {
          name: "list-hosted-application-storages",
          description:
            "Lists the hosted application storage in a specific compartment",
          options: [
            optCompartmentId,
            optLifecycleState2,
            {
              name: "--hosted-application-storage-type",
              description: "The type of the hosted application storage",
              args: { suggestions: ["CACHE", "POSTGRESQL", "ADB"] },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the hosted application storage",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "hosted-application",
      description:
        "Hosted Application, defines shared configurations that apply across multiple deployments of the Agent or MCP",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a hosted application into a different compartment within the same tenancy",
          options: [
            optHostedApplicationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the hosted application to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a hosted application",
          options: [
            {
              name: "--inbound-auth-config",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly display name for the Hosted Application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The compartment OCID for the Hosted Application",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--public-access-path-patterns",
              description:
                "A list of hosted application path patterns that can be accessed without inbound authentication",
              args: { name: "json" },
            },
            {
              name: "--description",
              description: "The description for the Hosted Application",
              args: { name: "description" },
            },
            optScalingConfig,
            { name: "--networking-config", args: { name: "json" } },
            {
              name: "--storage-configs",
              description:
                "A list of managed storage configurations for the application",
              args: { name: "json" },
            },
            optEnvironmentVariables,
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
          description: "Deletes a hosted application",
          options: [
            optHostedApplicationId,
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
          description: "Gets information about a hosted application",
          options: [optHostedApplicationId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a hosted application",
          options: [
            optHostedApplicationId,
            { name: "--inbound-auth-config", args: { name: "json" } },
            {
              name: "--public-access-path-patterns",
              description:
                "A list of hosted application path patterns that can be accessed without inbound authentication",
              args: { name: "json" },
            },
            optDisplayName,
            optDescription3,
            optScalingConfig,
            optEnvironmentVariables,
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
      name: "endpoint-collection",
      description: "Results of an endpoint search",
      subcommands: [
        {
          name: "list-endpoints",
          description: "Lists the endpoints of a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that their lifecycle state matches the given lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the endpoint",
              args: { name: "id" },
            },
            {
              name: "--generative-ai-private-endpoint-id",
              description: "The OCID of the private endpoint",
              args: { name: "generative-ai-private-endpoint-id" },
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
      name: "vector-store-connector-file-sync",
      description:
        "The VectorStoreConnectorFileSync is an operation that carries out the data sync operation between",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a vectorStoreConnectorFileSync",
          options: [
            optVectorStoreConnectorFileSyncId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a File Sync operation for a VectorStoreConnector",
          options: [
            {
              name: "--vector-store-connector-id",
              description:
                "An OCID that identifies the VectorStoreConnector under which this FileSync operation is created",
              args: { name: "vector-store-connector-id" },
              isRequired: true,
            },
            optDisplayName,
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
          description: "Gets information about a vectorStoreConnectorFileSync",
          options: [optVectorStoreConnectorFileSyncId, optFromJson],
        },
      ],
    },
    {
      name: "vector-store-connector-collection",
      description: "Results of a VectorStoreConnector search",
      subcommands: [
        {
          name: "list-vector-store-connectors",
          description:
            "Lists the vectorStoreConnectors of a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--vector-store-id",
              description: "The openai compatible id of the VectorStore",
              args: { name: "vector-store-id" },
            },
            optLifecycleState,
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the VectorStoreConnector",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "timeCreated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "api-key-collection",
      description: "Results of a ApiKey search",
      subcommands: [
        {
          name: "list-api-keys",
          description: "Lists the ApiKeys of a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that their lifecycle state matches the given lifecycle state",
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
            {
              name: "--id",
              description: "The OCID of the APIKey",
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
      name: "semantic-store-collection",
      description: "Results of a SemanticStore list",
      subcommands: [
        {
          name: "list-semantic-stores",
          description: "Lists the SemanticStores given specific filter",
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
                "A filter to return only resources whose lifecycle state matches the given array",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the SemanticStore",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--data-source-querying-connection-id",
              description:
                "A filter to return only resources whose queryingConnectionId matches with this id",
              args: { name: "data-source-querying-connection-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vector-store-connector-file-sync-collection",
      description: "Results of a VectorStoreConnectorFileSync search",
      subcommands: [
        {
          name: "list-vector-store-connector-file-syncs",
          description:
            "Lists the vectorStoreConnectorFileSyncs of a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycle state matches the given value",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--id",
              description: "The OCID of the vectorStoreConnectorFileSync",
              args: { name: "id" },
            },
            {
              name: "--vector-store-connector-id",
              description: "The OCID of the VectorStoreConnector",
              args: { name: "vector-store-connector-id" },
            },
            optLimit,
            optPage,
            optDisplayName2,
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
      name: "vector-store-connector",
      description:
        "A VectorStore Connector offers a lightweight and configurable mechanism to continuously synchronize data from",
      subcommands: [
        {
          name: "create",
          description: "Creates a VectorStoreConnector",
          options: [
            optCompartmentId2,
            optVectorStoreId,
            optDisplayName4,
            optConfiguration,
            optDescription,
            optScheduleConfig,
            optVaultSecretId,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-vector-store-connector-oci-object-storage-configuration",
          description: "Creates a VectorStoreConnector",
          options: [
            optCompartmentId2,
            optVectorStoreId,
            optDisplayName4,
            {
              name: "--configuration-storage-config-list",
              description:
                "List of Object Storage Configurations for datasource",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optScheduleConfig,
            optVaultSecretId,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-vector-store-connector-schedule-cron-config",
          description: "Creates a VectorStoreConnector",
          options: [
            optCompartmentId2,
            optVectorStoreId,
            optDisplayName4,
            optConfiguration,
            {
              name: "--schedule-config-cron-expression",
              description: "Schedule cron expression",
              args: { name: "schedule-config-cron-expression" },
              isRequired: true,
            },
            optDescription,
            optVaultSecretId,
            optFreeformTags,
            optDefinedTags,
            optScheduleConfigState,
            optScheduleConfigTimeStart,
            optScheduleConfigTimeEnd,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-vector-store-connector-schedule-interval-config",
          description: "Creates a VectorStoreConnector",
          options: [
            optCompartmentId2,
            optVectorStoreId,
            optDisplayName4,
            optConfiguration,
            {
              name: "--schedule-config-frequency",
              description: "The type of frequency",
              args: { suggestions: ["HOURLY", "DAILY"] },
              isRequired: true,
            },
            {
              name: "--schedule-config-interval",
              description: "The interval of frequency",
              args: { name: "integer" },
              isRequired: true,
            },
            optDescription,
            optVaultSecretId,
            optFreeformTags,
            optDefinedTags,
            optScheduleConfigState,
            optScheduleConfigTimeStart,
            optScheduleConfigTimeEnd,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a vectorStoreConnector",
          options: [
            optVectorStoreConnectorId,
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
          description: "Gets information about a vectorStoreConnector",
          options: [optVectorStoreConnectorId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the properties of a vectorStoreConnector",
          options: [
            optVectorStoreConnectorId,
            optDescription,
            optDisplayName5,
            optScheduleConfig,
            optConfiguration2,
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
          name: "update-vector-store-connector-schedule-cron-config",
          description: "Updates the properties of a vectorStoreConnector",
          options: [
            optVectorStoreConnectorId,
            {
              name: "--schedule-config-cron-expression",
              description: "Schedule cron expression",
              args: { name: "schedule-config-cron-expression" },
              isRequired: true,
            },
            optDescription,
            optDisplayName5,
            optConfiguration2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optScheduleConfigState,
            optScheduleConfigTimeStart,
            optScheduleConfigTimeEnd,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-vector-store-connector-schedule-interval-config",
          description: "Updates the properties of a vectorStoreConnector",
          options: [
            optVectorStoreConnectorId,
            {
              name: "--schedule-config-frequency",
              description: "The type of frequency",
              args: { suggestions: ["HOURLY", "DAILY"] },
              isRequired: true,
            },
            {
              name: "--schedule-config-interval",
              description: "The interval of frequency",
              args: { name: "integer" },
              isRequired: true,
            },
            optDescription,
            optDisplayName5,
            optConfiguration2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optScheduleConfigState,
            optScheduleConfigTimeStart,
            optScheduleConfigTimeEnd,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-vector-store-connector-oci-object-storage-configuration",
          description: "Updates the properties of a vectorStoreConnector",
          options: [
            optVectorStoreConnectorId,
            {
              name: "--configuration-storage-config-list",
              description:
                "List of Object Storage Configurations for datasource",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName5,
            optScheduleConfig,
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
      name: "model-discovery-collection",
      description: "A paginated collection of model discovery results",
      subcommands: [
        {
          name: "list-model-discovery",
          description:
            "Retrieves a list of models along with their capabilities, supported features, and deployment availability",
          options: [
            optCompartmentId,
            {
              name: "--realm",
              description:
                "A filter to return only resources whose realm matches the given realm",
              args: { name: "realm" },
              isRepeatable: true,
            },
            {
              name: "--region-parameterconflict",
              description:
                "A filter to return only resources whose region matches the given region",
              args: { name: "region-parameterconflict" },
              isRepeatable: true,
            },
            {
              name: "--model-id",
              description:
                "A filter to return only resources whose model identifier matches the given modelId",
              args: { name: "model-id" },
            },
            {
              name: "--serving-mode",
              description:
                "A filter to return only resources whose serving modes match the given servingModes",
              args: { suggestions: ["ON_DEMAND", "DEDICATED"] },
              isRepeatable: true,
            },
            {
              name: "--api-capability",
              description:
                "Filter models that support any of the specified API capabilities",
              args: { name: "api-capability" },
              isRepeatable: true,
            },
            {
              name: "--capability",
              description:
                "A filter to return only resources their capability matches the given capability",
              args: {
                suggestions: [
                  "TEXT_GENERATION",
                  "TEXT_SUMMARIZATION",
                  "TEXT_EMBEDDINGS",
                  "FINE_TUNE",
                  "CHAT",
                  "TEXT_RERANK",
                  "TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_TEXT",
                  "IMAGE_TEXT_TO_VIDEO",
                  "IMAGE_TO_IMAGE",
                  "REALTIME",
                  "AUDIO_TO_AUDIO",
                  "AUDIO_TO_TEXT",
                  "TEXT_TO_AUDIO",
                  "TEXT_TO_VIDEO",
                  "AUDIO_TEXT_TO_TEXT",
                  "AUDIO_TRANSLATION",
                  "VIDEO_TEXT_TO_TEXT",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--model-access",
              description: "Filter models by access type",
              args: { suggestions: ["HOSTED", "PROXY"] },
              isRepeatable: true,
            },
            {
              name: "--is-deprecated",
              description:
                "If true, return only deprecated models; if false, exclude deprecated models",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-on-demand-retired",
              description: "Filter models based on-demand retirement status",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-dedicated-retired",
              description: "Filter models based on dedicated retirement status",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "endpoint",
      description:
        "To host a custom model for inference, create an endpoint for that model on a dedicated AI cluster of type",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an endpoint into a different compartment within the same tenancy",
          options: [
            optEndpointId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the endpoint to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an endpoint",
          options: [
            {
              name: "--compartment-id",
              description: "The compartment OCID to create the endpoint in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--model-id",
              description:
                "The OCID of the model that's used to create this endpoint",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: "--dedicated-ai-cluster-id",
              description:
                "The OCID of the dedicated AI cluster on which a model will be deployed to",
              args: { name: "dedicated-ai-cluster-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "An optional description of the endpoint",
              args: { name: "description" },
            },
            {
              name: "--generative-ai-private-endpoint-id",
              description:
                "The OCID of the Generative AI private endpoint to which this endpoint is attached to",
              args: { name: "generative-ai-private-endpoint-id" },
            },
            { name: "--content-moderation-config", args: { name: "json" } },
            { name: "--prompt-injection-config", args: { name: "json" } },
            { name: "--pii-detection-config", args: { name: "json" } },
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
            optEndpointId,
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
          options: [optEndpointId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the properties of an endpoint",
          options: [
            optEndpointId,
            optDisplayName,
            {
              name: "--description",
              description: "An optional description of the endpoint",
              args: { name: "description" },
            },
            {
              name: "--generative-ai-private-endpoint-id",
              description:
                "The OCID of the Generative AI private endpoint to which this endpoint will be attached",
              args: { name: "generative-ai-private-endpoint-id" },
            },
            { name: "--content-moderation-config", args: { name: "json" } },
            { name: "--prompt-injection-config", args: { name: "json" } },
            { name: "--pii-detection-config", args: { name: "json" } },
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
      name: "semantic-store",
      description:
        "A Semantic Store is a container resource of semantic records",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a SemanticStore into a different compartment within the same tenancy",
          options: [
            optSemanticStoreId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the SemanticStore to",
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
          description: "Creates a SemanticStore",
          options: [
            optCompartmentId3,
            optDisplayName3,
            optDataSource,
            optSchemas,
            optDescription2,
            optIsUserDefinedSemanticsEnabled,
            { name: "--model-selection", args: { name: "json" } },
            optRefreshSchedule,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-semantic-store-default-semantic-store-model-selection",
          description: "Creates a SemanticStore",
          options: [
            optCompartmentId3,
            optDisplayName3,
            optDataSource,
            optSchemas,
            optDescription2,
            optIsUserDefinedSemanticsEnabled,
            optRefreshSchedule,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-semantic-store-custom-semantic-store-model-selection",
          description: "Creates a SemanticStore",
          options: [
            optCompartmentId3,
            optDisplayName3,
            optDataSource,
            optSchemas,
            {
              name: "--model-selection-model-id",
              description:
                "The generative AI modelId to use for SemanticStore enrichment",
              args: { name: "model-selection-model-id" },
              isRequired: true,
            },
            optDescription2,
            optIsUserDefinedSemanticsEnabled,
            optRefreshSchedule,
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
          description: "Deletes a semanticStore",
          options: [
            optSemanticStoreId,
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
          description: "Gets information about a semanticStore",
          options: [optSemanticStoreId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the properties of a SemanticStore",
          options: [
            optSemanticStoreId,
            optDescription2,
            optDisplayName,
            { name: "--model-selection", args: { name: "json" } },
            optIsUserDefinedSemanticsEnabled,
            optRefreshSchedule,
            optSchemas2,
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
          name: "update-semantic-store-default-semantic-store-model-selection",
          description: "Updates the properties of a SemanticStore",
          options: [
            optSemanticStoreId,
            optDescription2,
            optDisplayName,
            optIsUserDefinedSemanticsEnabled,
            optRefreshSchedule,
            optSchemas2,
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
          name: "update-semantic-store-custom-semantic-store-model-selection",
          description: "Updates the properties of a SemanticStore",
          options: [
            optSemanticStoreId,
            {
              name: "--model-selection-model-id",
              description:
                "The generative AI modelId to use for SemanticStore enrichment",
              args: { name: "model-selection-model-id" },
              isRequired: true,
            },
            optDescription2,
            optDisplayName,
            optIsUserDefinedSemanticsEnabled,
            optRefreshSchedule,
            optSchemas2,
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
      ],
    },
    {
      name: "routing-profile-collection",
      description: "Results of a routing profile search",
      subcommands: [
        {
          name: "list-routing-profiles",
          description: "Lists the routing profiles of a specific compartment",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the routing profile",
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
      name: "vector-store-connector-ingestion-logs-collection",
      description: "Results of a VectorStoreConnector Ingestion Log search",
      subcommands: [
        {
          name: "list-vector-store-connector-ingestion-logs",
          description: "Gets Ingestion logs for a vectorStoreConnector",
          options: [
            optVectorStoreConnectorId,
            {
              name: "--status",
              description:
                "A filter to return only the Sync Logs whose status matches the given value",
              args: {
                suggestions: [
                  "COMPLETED",
                  "CANCELLED",
                  "FAILED",
                  "QUEUED",
                  "IN_PROGRESS",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["status", "fileSize", "filePath"] },
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
      name: "work-request-error",
      description:
        "An error encountered while performing an operation that is tracked by this work request",
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
      name: "file-sync-ingestion-logs-collection",
      description: "Results of a VectorStoreConnector Ingestion Log search",
      subcommands: [
        {
          name: "list-vector-store-connector-file-sync-ingestion-logs",
          description:
            "Gets Ingestion logs for a vectorStoreConnectorFileSync operation",
          options: [
            optVectorStoreConnectorFileSyncId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycle state matches the given value",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["status", "fileSize", "filePath"] },
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
      name: "model",
      description:
        "You can create a custom model by using your dataset to fine-tune an out-of-the-box text generation base model",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a custom model into a different compartment",
          options: [
            optModelId,
            {
              name: "--compartment-id",
              description: "The compartment OCID to create the model in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a custom model by fine-tuning a base model with your own dataset",
          options: [
            {
              name: "--compartment-id",
              description: "The compartment OCID for fine-tuned models",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--base-model-id",
              description:
                "The OCID of the base model that's used for fine-tuning",
              args: { name: "base-model-id" },
              isRequired: true,
            },
            {
              name: "--fine-tune-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--vendor",
              description: "The provider of the model",
              args: { name: "vendor" },
            },
            {
              name: "--version-parameterconflict",
              description: "The version of the model",
              args: { name: "version-parameterconflict" },
            },
            {
              name: "--description",
              description: "An optional description of the model",
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
          description: "Deletes a custom model",
          options: [
            optModelId,
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
          description: "Gets information about a custom model",
          options: [optModelId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the properties of a custom model such as name, description, version, freeform tags, and defined tags",
          options: [
            optModelId,
            optDisplayName,
            {
              name: "--description",
              description: "An optional description of the model",
              args: { name: "description" },
            },
            {
              name: "--vendor",
              description: "The provider of the base model",
              args: { name: "vendor" },
            },
            {
              name: "--version-parameterconflict",
              description: "The version of the model",
              args: { name: "version-parameterconflict" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dedicated-ai-cluster-collection",
      description: "Results of a dedicate AI cluster search",
      subcommands: [
        {
          name: "list-dedicated-ai-clusters",
          description:
            "Lists the dedicated AI clusters in a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the dedicated AI clusters that their lifecycle state matches the given lifecycle",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the dedicated AI cluster",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            {
              name: "--capacity-reservation-id",
              description: "The OCID of the capacity reservation",
              args: { name: "capacity-reservation-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vector-store-connector-stats",
      description: "File synchronization statistics for a VectorStoreConnector",
      subcommands: [
        {
          name: "get",
          description: "Gets Sync statistics from a vectorStoreConnector",
          options: [optVectorStoreConnectorId, optFromJson],
        },
      ],
    },
    {
      name: "generative-ai-private-endpoint-collection",
      description: "Collection of GenerativeAiPrivateEndpointSummary",
      subcommands: [
        {
          name: "list-generative-ai-private-endpoints",
          description:
            "Lists all Generative AI private endpoints in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The OCID of the private endpoint",
              args: { name: "id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "The lifecycle state of Generative AI private endpoints",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field used to sort the results",
              args: { suggestions: ["timeCreated"] },
            },
            {
              name: "--resource-type",
              description:
                "Query by the resource type of Generative AI private endpoints",
              args: { suggestions: ["APPLICATION", "ENDPOINT"] },
            },
            optDisplayName2,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "hosted-deployment",
      description:
        "Hosted deployment is designed to support the full spectrum of agent use cases from lightweight",
      subcommands: [
        {
          name: "add",
          description: "Add image with isAutoDeploy flag",
          options: [
            { name: "--artifact", args: { name: "json" }, isRequired: true },
            optHostedDeploymentId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-artifact-create-single-docker-artifact-details",
          description: "Add image with isAutoDeploy flag",
          options: [
            optHostedDeploymentId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--artifact-is-vulnerability-scan-required",
              description:
                "Optional flag that requires an OCI Vulnerability Scanning Service compliance report for this artifact before",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--artifact-container-uri",
              description: "Image url",
              args: { name: "artifact-container-uri" },
            },
            {
              name: "--artifact-tag",
              description: "Image tag",
              args: { name: "artifact-tag" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a hosted deployment",
          options: [
            {
              name: "--active-artifact",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--compartment-id",
              description:
                "The compartment OCID to create the hosted deployment in",
              args: { name: "compartment-id" },
            },
            {
              name: "--hosted-application-id",
              description: "The OCID of the HostedApplication parent",
              args: { name: "hosted-application-id" },
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
          name: "create-hosted-deployment-single-docker-artifact",
          description: "Creates a hosted deployment",
          options: [
            optDisplayName,
            {
              name: "--compartment-id",
              description:
                "The compartment OCID to create the hosted deployment in",
              args: { name: "compartment-id" },
            },
            {
              name: "--hosted-application-id",
              description: "The OCID of the HostedApplication parent",
              args: { name: "hosted-application-id" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--active-artifact-id",
              description: "If put artifact to a table, the id is needed",
              args: { name: "active-artifact-id" },
            },
            {
              name: "--active-artifact-time-created",
              description: "The date and time the artifact was created",
              args: { name: "datetime" },
            },
            {
              name: "--active-artifact-hosted-deployment-id",
              description: "The OCID of the application",
              args: { name: "active-artifact-hosted-deployment-id" },
            },
            {
              name: "--active-artifact-is-vulnerability-scan-required",
              description:
                "Optional flag that requires an OCI Vulnerability Scanning Service compliance report for this artifact before",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--active-artifact-status",
              description: "The current status of the artifact",
              args: {
                suggestions: ["ACTIVE", "INACTIVE", "UPDATING", "FAILED"],
              },
            },
            {
              name: "--active-artifact-container-uri",
              description: "Image url",
              args: { name: "active-artifact-container-uri" },
            },
            {
              name: "--active-artifact-tag",
              description: "Image tag",
              args: { name: "active-artifact-tag" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a hosted deployment",
          options: [
            optHostedDeploymentId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-hosted-deployment-artifact",
          description: "Delete artifact",
          options: [
            optHostedDeploymentId,
            {
              name: "--artifact-id",
              description: "The id of the artifact",
              args: { name: "artifact-id" },
              isRequired: true,
            },
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
          description: "Gets information about a hosted deployment",
          options: [optHostedDeploymentId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a hosted deployment",
          options: [
            optHostedDeploymentId,
            {
              name: "--active-artifact",
              args: { name: "json" },
              isRequired: true,
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
      name: "hosted-application-collection",
      description: "Results of a dedicate hosted application search",
      subcommands: [
        {
          name: "list-hosted-applications",
          description:
            "Lists the hosted applications in a specific compartment",
          options: [
            optCompartmentId,
            optLifecycleState2,
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the hosted application",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-hosted-applications-iam",
          description:
            "Lists the hosted applications in a specific compartment",
          options: [
            optCompartmentId,
            optLifecycleState2,
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the hosted application",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "imported-model",
      description:
        "Represents a model imported into the system based on an external data source",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves an imported model into a different compartment",
          options: [
            optImportedModelId,
            {
              name: "--compartment-id",
              description: "The destination compartment OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an imported model",
          options: [
            optImportedModelId,
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
          description: "Gets information about an imported model",
          options: [optImportedModelId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the properties of an imported model such as name, description, freeform tags, and defined tags",
          options: [
            optImportedModelId,
            optDisplayName,
            optDescription4,
            optVendor,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optVersion,
            optFromJson,
          ],
        },
        {
          name: "create-from-huggingface",
          description: "Import a model from ModelDataSource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID from which the model is imported",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the imported model",
              args: { name: "display-name" },
            },
            optDescription4,
            optVendor,
            {
              name: "--capabilities",
              description:
                "Specifies the intended use or supported capabilities of the imported model",
              args: {
                suggestions: [
                  "TEXT_TO_TEXT",
                  "IMAGE_TEXT_TO_TEXT",
                  "EMBEDDING",
                  "RERANK",
                  "TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_VIDEO",
                  "IMAGE_TO_IMAGE",
                  "REALTIME",
                  "AUDIO_TO_AUDIO",
                  "AUDIO_TO_TEXT",
                  "TEXT_TO_AUDIO",
                  "TEXT_TO_VIDEO",
                  "AUDIO_TEXT_TO_TEXT",
                  "AUDIO_TRANSLATION",
                  "VIDEO_TEXT_TO_TEXT",
                ],
              },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--model-id",
              description:
                'The full model OCID from Hugging Face, typically in the format "org/model-name" (e.g',
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: "--access-token",
              description:
                "Hugging Face access token to authenticate requests for restricted models",
              args: { name: "access-token" },
            },
            {
              name: "--branch",
              description:
                "The name of the branch in the Hugging Face repository to import the model from",
              args: { name: "branch" },
            },
            {
              name: "--commit",
              description:
                "The commit hash in the Hugging Face repository to import the model from",
              args: { name: "commit" },
            },
            optVersion,
            optFromJson,
          ],
        },
        {
          name: "create-from-objectstorage",
          description: "Import a model from ModelDataSource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID from which the model is imported",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the imported model",
              args: { name: "display-name" },
            },
            optDescription4,
            optVendor,
            {
              name: "--capabilities",
              description:
                "Specifies the intended use or supported capabilities of the imported model",
              args: {
                suggestions: [
                  "TEXT_TO_TEXT",
                  "IMAGE_TEXT_TO_TEXT",
                  "EMBEDDING",
                  "RERANK",
                  "TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_VIDEO",
                  "IMAGE_TO_IMAGE",
                  "REALTIME",
                  "AUDIO_TO_AUDIO",
                  "AUDIO_TO_TEXT",
                  "TEXT_TO_AUDIO",
                  "TEXT_TO_VIDEO",
                  "AUDIO_TEXT_TO_TEXT",
                  "AUDIO_TRANSLATION",
                  "VIDEO_TEXT_TO_TEXT",
                ],
              },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bucket-name",
              description: "The name of the Object Storage bucket. required",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description:
                "The namespace of the Object Storage where the files are stored. required",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--prefix-name",
              description:
                "The prefix path (or folder) within the bucket where files are located. required",
              args: { name: "prefix-name" },
              isRequired: true,
            },
            {
              name: "--region",
              description:
                "The full canonical Oracle Cloud region identifier (e.g",
              args: { name: "region" },
            },
            optVersion,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox-warm-pool",
      description:
        "CP-owned configuration and management lifecycle of a Project-owned Sandbox warm pool",
      subcommands: [
        {
          name: "create",
          description: "Creates a named MANAGED or CUSTOM pool",
          options: [
            optProjectId,
            {
              name: "--name",
              description: "Unique immutable name within the Project",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "MANAGED uses the service-provided python-3.11 runtime",
              args: { suggestions: ["MANAGED", "CUSTOM"] },
              isRequired: true,
            },
            {
              name: "--shape",
              description: "Compute shape for each idle Sandbox member",
              args: { suggestions: ["SMALL", "MEDIUM", "LARGE"] },
              isRequired: true,
            },
            {
              name: "--desired-capacity",
              description: "Desired number of idle members",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--container-image",
              description:
                "Required for CUSTOM and must be omitted for MANAGED",
              args: { name: "container-image" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a named MANAGED or CUSTOM pool through a CP Work Request",
          options: [
            optProjectId,
            optName,
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
          description:
            "Gets authoritative CP configuration and management lifecycle for the current pool incarnation",
          options: [optProjectId, optName, optFromJson],
        },
        {
          name: "update",
          description: "Only desiredCapacity may change",
          options: [
            optProjectId,
            optName,
            {
              name: "--desired-capacity",
              description: "Replacement idle target",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "hosted-deployment-collection",
      description: "Results of a dedicate hosted deployment search",
      subcommands: [
        {
          name: "list-hosted-deployments",
          description:
            "Lists the hosted applications in a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--application-id",
              description: "The OCID of the HostedApplication parent",
              args: { name: "application-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the hosted deployments that their lifecycle state matches the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "NEEDS_ATTENTION",
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
            {
              name: "--id",
              description: "The OCID of the hosted deployment",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
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
        "The log message from performing an operation that is tracked by this work request",
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
      name: "hosted-application-iam",
      description:
        "Hosted Application IAM, defines shared configurations that apply across multiple deployments of the Agent",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a hosted application into a different compartment within the same tenancy",
          options: [
            optHostedApplicationIamId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the hosted application to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a hosted application",
          options: [
            {
              name: "--display-name",
              description:
                "The user-friendly display name for the Hosted Application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The compartment OCID for the Hosted Application",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description for the Hosted Application",
              args: { name: "description" },
            },
            optScalingConfig,
            { name: "--networking-config", args: { name: "json" } },
            {
              name: "--storage-configs",
              description:
                "A list of managed storage configurations for the application",
              args: { name: "json" },
            },
            optEnvironmentVariables,
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
          description: "Deletes a hosted application",
          options: [
            optHostedApplicationIamId,
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
          description: "Gets information about a hosted application",
          options: [optHostedApplicationIamId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a hosted application",
          options: [
            optHostedApplicationIamId,
            optDisplayName,
            optDescription3,
            optScalingConfig,
            optEnvironmentVariables,
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
      name: "generative-ai-project",
      description:
        "A GenerativeAiProject is a logical container that stores conversation, file and containers",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a generativeAiProject into a different compartment within the same tenancy",
          options: [
            optGenerativeAiProjectId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the GenerativeAiProject to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a GenerativeAiProject",
          options: [
            {
              name: "--compartment-id",
              description: "Owning compartment OCID for a GenerativeAiProject",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "An optional description of the GenerativeAiProject",
              args: { name: "description" },
            },
            optDisplayName,
            { name: "--conversation-config", args: { name: "json" } },
            { name: "--long-term-memory-config", args: { name: "json" } },
            {
              name: "--short-term-memory-optimization-config",
              args: { name: "json" },
            },
            { name: "--sandbox-config", args: { name: "json" } },
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
          description: "Deletes a generativeAiProject",
          options: [
            optGenerativeAiProjectId,
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
          description: "Gets information about a generativeAiProject",
          options: [optGenerativeAiProjectId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the properties of a generativeAiProject",
          options: [
            optGenerativeAiProjectId,
            {
              name: "--description",
              description: "An optional description of the GenerativeAiProject",
              args: { name: "description" },
            },
            optDisplayName,
            { name: "--conversation-config", args: { name: "json" } },
            { name: "--long-term-memory-config", args: { name: "json" } },
            {
              name: "--short-term-memory-optimization-config",
              args: { name: "json" },
            },
            { name: "--sandbox-config", args: { name: "json" } },
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
      name: "model-collection",
      description: "Results of a model search",
      subcommands: [
        {
          name: "list-models",
          description: "Lists the models in a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--vendor",
              description:
                "A filter to return only resources that match the entire vendor given",
              args: { name: "vendor" },
            },
            {
              name: "--capability",
              description:
                "A filter to return only resources their capability matches the given capability",
              args: {
                suggestions: [
                  "TEXT_GENERATION",
                  "TEXT_SUMMARIZATION",
                  "TEXT_EMBEDDINGS",
                  "FINE_TUNE",
                  "CHAT",
                  "TEXT_RERANK",
                  "TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_TEXT",
                  "IMAGE_TEXT_TO_VIDEO",
                  "IMAGE_TO_IMAGE",
                  "REALTIME",
                  "AUDIO_TO_AUDIO",
                  "AUDIO_TO_TEXT",
                  "TEXT_TO_AUDIO",
                  "TEXT_TO_VIDEO",
                  "AUDIO_TEXT_TO_TEXT",
                  "AUDIO_TRANSLATION",
                  "VIDEO_TEXT_TO_TEXT",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The ID of the model",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["displayName", "lifecycleState", "timeCreated"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "generative-ai-private-endpoint",
      description: "Generative AI private endpoint",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Generative AI private endpoint into a different compartment",
          options: [
            optGenerativeAiPrivateEndpointId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the target compartment where the private endpoint is moved",
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
          description: "Creates a Generative AI private endpoint",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the private endpoint is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the customer's subnet where the private endpoint VNIC will reside",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--dns-prefix",
              description: "DnsPrefix of the private endpoint FQDN",
              args: { name: "dns-prefix" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description of this private endpoint",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "A user friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the private endpoint's VNIC to",
              args: { name: "json" },
            },
            {
              name: "--is-allow-on-demand",
              description:
                "Flag that allows access to on-demand models using this private endpoint",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--resource-type",
              description:
                "The resource type that Generative AI private endpoint can be used for",
              args: { name: "resource-type" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
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
          description:
            "Deletes a Generative AI private endpoint using privateEndpointId",
          options: [
            optGenerativeAiPrivateEndpointId,
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
          description:
            "Retrieves an Generative AI private endpoint using a privateEndpointId",
          options: [optGenerativeAiPrivateEndpointId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates a Generative AI private endpoint using a privateEndpointId",
          options: [
            optGenerativeAiPrivateEndpointId,
            {
              name: "--description",
              description: "A user friendly description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "A user friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--dns-prefix",
              description: "DnsPrefix of the private endpoint FQDN",
              args: { name: "dns-prefix" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the private endpoint's VNIC to",
              args: { name: "json" },
            },
            {
              name: "--is-allow-on-demand",
              description:
                "Flag that allows access to on-demand models using this private endpoint",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
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
      name: "allocatable-gpu-collection",
      description:
        "Results of an allocatable GPU search for launching dedicated AI clusters",
      subcommands: [
        {
          name: "list-dedicated-ai-clusters-allocatable-gpus",
          description:
            "Lists the allocatable GPUs for launching dedicated AI clusters tied to a specific capacity reservation id",
          options: [
            optCompartmentId,
            {
              name: "--capacity-reservation-id",
              description: "The OCID of the capacity reservation",
              args: { name: "capacity-reservation-id" },
              isRequired: true,
            },
            {
              name: "--compute-shape",
              description:
                "The compute shape to use to filter allocatable GPUs",
              args: { name: "compute-shape" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "generative-ai-project-collection",
      description: "Results of a GenerativeAiProject search",
      subcommands: [
        {
          name: "list-generative-ai-projects",
          description:
            "Lists the generativeAiProjects of a specific compartment",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName2,
            {
              name: "--id",
              description: "The OCID of the generativeAiProject",
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
      name: "routing-profile",
      description:
        "A routing profile is a reusable set of policies that controls how Smart Router selects a target region",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a routing profile into a different compartment within the same tenancy",
          options: [
            optRoutingProfileId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the routing profile to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a routing profile",
          options: [
            optDisplayName3,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the routing profile",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "An optional description of the routing profile",
              args: { name: "description" },
            },
            { name: "--region-routing-policy", args: { name: "json" } },
            { name: "--model-routing-policy", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a routing profile",
          options: [
            optRoutingProfileId,
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
          description: "Gets information about a routing profile",
          options: [optRoutingProfileId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the properties of a routing profile",
          options: [
            optRoutingProfileId,
            optDisplayName,
            {
              name: "--description",
              description: "An optional description of the routing profile",
              args: { name: "description" },
            },
            { name: "--region-routing-policy", args: { name: "json" } },
            { name: "--model-routing-policy", args: { name: "json" } },
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
      ],
    },
    {
      name: "api-key",
      description: "ApiKeys are resources used to access GenAI models",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an API key into a different compartment within the same tenancy",
          options: [
            optApiKeyId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the APIKey to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new API key in the specified compartment",
          options: [
            optDisplayName3,
            {
              name: "--compartment-id",
              description: "The compartment OCID to create the apiKey in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--key-details",
              description: "The list of key details for creation",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "An optional description of the Api key",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an API key",
          options: [
            optApiKeyId,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about an API key",
          options: [optApiKeyId, optFromJson],
        },
        {
          name: "renew",
          description: "Renew the primary or secondary key",
          options: [
            optApiKeyId,
            { name: "--details", args: { name: "json" }, isRequired: true },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "set-api-key-state",
          description: "Set state of the key",
          options: [
            optApiKeyId,
            {
              name: "--key-name",
              description: "The key to set state",
              args: { name: "key-name" },
              isRequired: true,
            },
            {
              name: "--state",
              description: "The target state of the API key item",
              args: { name: "state" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the properties of an apiKey",
          options: [
            optApiKeyId,
            optDisplayName,
            {
              name: "--description",
              description: "An optional description of the Api key",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dedicated-ai-cluster",
      description:
        "Dedicated AI clusters are compute resources that you can use for fine-tuning custom models or for hosting",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a dedicated AI cluster into a different compartment within the same tenancy",
          options: [
            optDedicatedAiClusterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the dedicated AI cluster to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a dedicated AI cluster",
          options: [
            {
              name: "--type",
              description:
                "The dedicated AI cluster type indicating whether this is a fine-tuning/training processor",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The compartment OCID to create the dedicated AI cluster in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--unit-count",
              description: "The number of dedicated units in this AI cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--unit-shape",
              description: "The shape of dedicated unit in this AI cluster",
              args: { name: "unit-shape" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description:
                "An optional description of the dedicated AI cluster",
              args: { name: "description" },
            },
            {
              name: "--capacity-reservation-id",
              description: "The OCID of the capacity reservation",
              args: { name: "capacity-reservation-id" },
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
          description: "Deletes a dedicated AI cluster",
          options: [
            optDedicatedAiClusterId,
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
          description: "Gets information about a dedicated AI cluster",
          options: [optDedicatedAiClusterId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a dedicated AI cluster",
          options: [
            optDedicatedAiClusterId,
            optDisplayName,
            {
              name: "--description",
              description:
                "An optional description of the dedicated AI cluster",
              args: { name: "description" },
            },
            {
              name: "--unit-count",
              description: "The number of dedicated units in this AI cluster",
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
      name: "hosted-application-storage",
      description: "Represents managed storage for an application",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a hosted application storage into a different compartment within the same tenancy",
          options: [
            optHostedApplicationStorageId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the hosted application storage to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a hosted application storage",
          options: [
            optDisplayName3,
            {
              name: "--compartment-id",
              description:
                "The compartment OCID to create the hosted application in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--storage-type",
              description: "The managed storage type for the application",
              args: { name: "storage-type" },
              isRequired: true,
            },
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
          description: "Deletes a hosted application",
          options: [
            optHostedApplicationStorageId,
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
          description: "Gets information about a hosted application storage",
          options: [optHostedApplicationStorageId, optFromJson],
        },
      ],
    },
    {
      name: "imported-model-collection",
      description:
        "Represents the result of a list operation for imported models",
      subcommands: [
        {
          name: "list-imported-models",
          description: "Lists imported models in a specific compartment",
          options: [
            optCompartmentId,
            {
              name: "--vendor",
              description:
                "A filter to return only resources that match the entire vendor given",
              args: { name: "vendor" },
            },
            {
              name: "--capability",
              description:
                "A filter to return only resources their capability matches the given capability",
              args: {
                suggestions: [
                  "TEXT_TO_TEXT",
                  "IMAGE_TEXT_TO_TEXT",
                  "EMBEDDING",
                  "RERANK",
                  "TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_IMAGE",
                  "IMAGE_TEXT_TO_VIDEO",
                  "IMAGE_TO_IMAGE",
                  "REALTIME",
                  "AUDIO_TO_AUDIO",
                  "AUDIO_TO_TEXT",
                  "TEXT_TO_AUDIO",
                  "TEXT_TO_VIDEO",
                  "AUDIO_TEXT_TO_TEXT",
                  "AUDIO_TRANSLATION",
                  "VIDEO_TEXT_TO_TEXT",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--id",
              description: "The ID of the importedModel",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["displayName", "lifecycleState", "timeCreated"],
              },
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
