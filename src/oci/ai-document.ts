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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment identifier",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optModelId: Fig.Option = {
  name: "--model-id",
  description: "A unique model identifier",
  args: { name: "model-id" },
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
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optProjectId: Fig.Option = {
  name: "--project-id",
  description: "A unique project identifier",
  args: { name: "project-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The display name of the processor job",
  args: { name: "display-name" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optOutputLocation: Fig.Option = {
  name: "--output-location",
  args: { name: "json" },
  isRequired: true,
};
const optPage: Fig.Option = {
  name: "--page",
  description: "The position at which to start retrieving results",
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
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "SUCCEEDED",
      "FAILED",
      "ACCEPTED",
      "CANCELED",
      "IN_PROGRESS",
      "CANCELING",
    ],
  },
  isRepeatable: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "A simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optType: Fig.Option = {
  name: "--type",
  description: "Type of the lock",
  args: { suggestions: ["FULL", "DELETE"] },
  isRequired: true,
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
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
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment identifier",
  args: { name: "compartment-id" },
};
const optDocumentType: Fig.Option = {
  name: "--document-type",
  description: "The document type",
  args: {
    suggestions: [
      "INVOICE",
      "RECEIPT",
      "RESUME",
      "TAX_FORM",
      "DRIVER_LICENSE",
      "PASSPORT",
      "BANK_STATEMENT",
      "CHECK",
      "PAYSLIP",
      "OTHERS",
      "HEALTH_INSURANCE_ID",
    ],
  },
};
const optFeatures: Fig.Option = {
  name: "--features",
  description: "The types of document analysis requested",
  args: { name: "json" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optInputLocation: Fig.Option = {
  name: "--input-location",
  args: { name: "json" },
  isRequired: true,
};
const optLanguage: Fig.Option = {
  name: "--language",
  description:
    "The document language, abbreviated according to the BCP 47 syntax",
  args: { name: "language" },
};
const optOcrData: Fig.Option = { name: "--ocr-data", args: { name: "json" } };
const optOutputLocation2: Fig.Option = {
  name: "--output-location",
  args: { name: "json" },
};
const optProcessorConfig: Fig.Option = {
  name: "--processor-config",
  args: { name: "json" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const completionSpec: Fig.Spec = {
  name: "ai-document",
  description: "Document Understanding",
  subcommands: [
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "project",
      description: "A Document Project containing models",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optProjectId,
            optType,
            {
              name: "--related-resource-id",
              description:
                "The ID of the resource that is locking this resource",
              args: { name: "related-resource-id" },
            },
            {
              name: "--message",
              description: "A message added by the creator of the lock",
              args: { name: "message" },
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Move a project from one compartment to another",
          options: [
            optProjectId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new project",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A human-friendly name for the project, that can be changed",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "An optional description of the project",
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
          description: "Delete a project by identifier",
          options: [
            optProjectId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a project by identifier",
          options: [optProjectId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of projects",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "The filter to match projects with the given lifecycleState",
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
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description:
                "The filter to find the project with the given identifier",
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
        {
          name: "remove",
          description: "Remove a lock from a resource",
          options: [
            optProjectId,
            optType,
            optIfMatch,
            optIsLockOverride,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the project metadata",
          options: [
            optProjectId,
            {
              name: "--display-name",
              description:
                "A human-friendly name for the project, that can be changed",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "An optional description of the project",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "analyze-document-result",
      description: "The document analysis results",
      subcommands: [
        {
          name: "analyze-document",
          description: "Perform different types of document analysis",
          options: [
            optFeatures,
            { name: "--document", args: { name: "json" }, isRequired: true },
            optCompartmentId3,
            optOutputLocation2,
            optLanguage,
            optDocumentType,
            optOcrData,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "analyze-document-object-storage-document-details",
          description: "Perform different types of document analysis",
          options: [
            optFeatures,
            {
              name: "--document-namespace-name",
              description: "The Object Storage namespace",
              args: { name: "document-namespace-name" },
              isRequired: true,
            },
            {
              name: "--document-bucket-name",
              description: "The Object Storage bucket name",
              args: { name: "document-bucket-name" },
              isRequired: true,
            },
            {
              name: "--document-object-name",
              description: "The Object Storage object name",
              args: { name: "document-object-name" },
              isRequired: true,
            },
            optCompartmentId3,
            optOutputLocation2,
            optLanguage,
            optDocumentType,
            optOcrData,
            optIfMatch,
            {
              name: "--document-page-range",
              description: "The page ranges to be analysed",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "analyze-document-inline-document-details",
          description: "Perform different types of document analysis",
          options: [
            optFeatures,
            {
              name: "--document-data",
              description: "Raw document data with Base64 encoding",
              args: { name: "document-data" },
              isRequired: true,
            },
            optCompartmentId3,
            optOutputLocation2,
            optLanguage,
            optDocumentType,
            optOcrData,
            optIfMatch,
            {
              name: "--document-page-range",
              description: "The page ranges to be analysed",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "model-type-info",
      description: "Model information like versions and capabilities",
      subcommands: [
        {
          name: "get-model-type",
          description: "Gets model capabilities",
          options: [
            {
              name: "--model-type",
              description: "The type of the Document model",
              args: { name: "model-type" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--model-sub-type",
              description: "The sub type based upon model selected",
              args: { name: "model-sub-type" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "model",
      description: "Machine-learned Model",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optModelId,
            optType,
            {
              name: "--related-resource-id",
              description:
                "The ID of the resource that is locking this resource",
              args: { name: "related-resource-id" },
            },
            {
              name: "--message",
              description: "A message added by the creator of the lock",
              args: { name: "message" },
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a model from one compartment to another",
          options: [
            optModelId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new model",
          options: [
            {
              name: "--model-type",
              description: "The type of the Document model",
              args: { name: "model-type" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--project-id",
              description: "The OCID of the project that contains the model",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A human-friendly name for the model, which can be changed",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "An optional description of the model",
              args: { name: "description" },
            },
            {
              name: "--model-version",
              description: "The model version",
              args: { name: "model-version" },
            },
            {
              name: "--model-sub-type",
              description:
                "Applicable to only PRE_TRAINED_KEY_VALUE_EXTRACTION, PRE_TRAINED_DOCUMENT_ELEMENTS_EXTRACTION",
              args: { name: "json" },
            },
            {
              name: "--inference-units",
              description: "Number of replicas required for this model",
              args: { name: "integer" },
            },
            {
              name: "--is-quick-mode",
              description:
                "Set to true when experimenting with a new model type or dataset, so the model training is quick",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--max-training-time-in-hours",
              description:
                "The maximum model training time in hours, expressed as a decimal fraction",
              args: { name: "max-training-time-in-hours" },
            },
            {
              name: "--language",
              description:
                "The document language for model training, abbreviated according to the BCP 47 syntax",
              args: { name: "language" },
            },
            { name: "--training-dataset", args: { name: "json" } },
            { name: "--testing-dataset", args: { name: "json" } },
            { name: "--validation-dataset", args: { name: "json" } },
            {
              name: "--component-models",
              description:
                "The OCID list of active custom Key Value models that need to be composed",
              args: { name: "json" },
            },
            {
              name: "--alias-name",
              description: "The alias name of the model",
              args: { name: "alias-name" },
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
          description: "Delete a model by identifier",
          options: [
            optModelId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a model by identifier",
          options: [optModelId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of models in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--project-id",
              description:
                "The ID of the project for which to list the objects",
              args: { name: "project-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "The filter to match models with the given lifecycleState",
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
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description:
                "The filter to find the model with the given identifier",
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
        {
          name: "patch",
          description:
            "Updates the model metadata only selected path parameter",
          options: [
            optModelId,
            {
              name: "--operations",
              description: "A list of patch operations for model",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock from a resource",
          options: [
            optModelId,
            optType,
            optIfMatch,
            optIsLockOverride,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the model metadata",
          options: [
            optModelId,
            {
              name: "--display-name",
              description:
                "A human-friendly name of the model, which can be changed",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "An optional description of the model",
              args: { name: "description" },
            },
            {
              name: "--inference-units",
              description: "Number of replicas required for this model",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
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
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
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
      description: "The workrequest status details",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel the work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources whose lifecycleState matches the given OperationStatus",
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
                "The ID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
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
      name: "processor-job",
      description: "Details of a processor job",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a processor job",
          options: [
            {
              name: "--processor-job-id",
              description: "Processor job id",
              args: { name: "processor-job-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a processor job for document analysis",
          options: [
            optInputLocation,
            optOutputLocation,
            optCompartmentId,
            optProcessorConfig,
            optDisplayName,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-processor-job-inline-document-content",
          description: "Create a processor job for document analysis",
          options: [
            optOutputLocation,
            optCompartmentId,
            optProcessorConfig,
            {
              name: "--input-location-data",
              description: "Raw document data with Base64 encoding",
              args: { name: "input-location-data" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--input-location-page-range",
              description: "The page ranges to be analysed",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-processor-job-object-storage-locations",
          description: "Create a processor job for document analysis",
          options: [
            optOutputLocation,
            optCompartmentId,
            optProcessorConfig,
            {
              name: "--input-location-object-locations",
              description: "The list of ObjectLocations",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-processor-job-invoice-processor-config",
          description: "Create a processor job for document analysis",
          options: [
            optInputLocation,
            optOutputLocation,
            optCompartmentId,
            {
              name: "--processor-config-normalization-fields",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--processor-config-model-id",
              description:
                "Unique identifier custom model OCID that should be used for inference",
              args: { name: "processor-config-model-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-processor-job-general-processor-config",
          description: "Create a processor job for document analysis",
          options: [
            optInputLocation,
            optOutputLocation,
            optCompartmentId,
            {
              name: "--processor-config-features",
              description: "The types of document analysis requested",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--processor-config-document-type",
              description: "The document type",
              args: {
                suggestions: [
                  "INVOICE",
                  "RECEIPT",
                  "RESUME",
                  "TAX_FORM",
                  "DRIVER_LICENSE",
                  "PASSPORT",
                  "BANK_STATEMENT",
                  "CHECK",
                  "PAYSLIP",
                  "OTHERS",
                  "HEALTH_INSURANCE_ID",
                ],
              },
            },
            {
              name: "--processor-config-is-zip-output-enabled",
              description:
                "Whether or not to generate a ZIP file containing the results",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--processor-config-language",
              description:
                "The document language, abbreviated according to the BCP 47 Language-Tag syntax",
              args: { name: "processor-config-language" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the details of a processor job",
          options: [
            {
              name: "--processor-job-id",
              description: "Processor job id",
              args: { name: "processor-job-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
