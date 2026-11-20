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
  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "The defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "A simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optRecordId: Fig.Option = {
  name: "--record-id",
  description: "The OCID of the record annotated",
  args: { name: "record-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment for the record",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDatasetId: Fig.Option = {
  name: "--dataset-id",
  description: "The OCID of the dataset to associate the record with",
  args: { name: "dataset-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optName: Fig.Option = {
  name: "--name",
  description: "The name is automatically assigned by the service",
  args: { name: "name" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDatasetId2: Fig.Option = {
  name: "--dataset-id",
  description: "Filter the results by the OCID of the dataset",
  args: { name: "dataset-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources whose lifecycleState matches the given lifecycleState",
  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSourceDetails: Fig.Option = {
  name: "--source-details",
  args: { name: "json" },
  isRequired: true,
};
const optAnnotationId: Fig.Option = {
  name: "--annotation-id",
  description: "A unique annotation identifier",
  args: { name: "annotation-id" },
  isRequired: true,
};
const optRecordMetadata: Fig.Option = {
  name: "--record-metadata",
  args: { name: "json" },
};
const completionSpec: Fig.Spec = {
  name: "data-labeling-service-dataplane",
  description: "Data Labeling",
  subcommands: [
    {
      name: "annotation",
      description:
        "An annotation represents a user- or machine-generated annotation for a given record",
      subcommands: [
        {
          name: "create",
          description: "Creates an annotation",
          options: [
            optRecordId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for the annotation",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--entities",
              description:
                "The entity types are validated against the dataset to ensure consistency",
              args: { name: "json" },
              isRequired: true,
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
          description: "It deletes an annotation resource by identifier",
          options: [
            optAnnotationId,
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
          name: "get",
          description: "Gets an annotation",
          options: [optAnnotationId, optFromJson],
        },
        {
          name: "update",
          description: "Updates an annotation",
          options: [
            optAnnotationId,
            {
              name: "--entities",
              description:
                "The entity types are validated against the dataset to ensure consistency",
              args: { name: "json" },
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
      name: "record-analytics-aggregation-collection",
      description: "Collection of records aggregated",
      subcommands: [
        {
          name: "summarize-record-analytics",
          description: "Summarize the records created for a given dataset",
          options: [
            optCompartmentId2,
            optDatasetId2,
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--record-group-by",
              description: "The field to group by",
              args: { suggestions: ["isLabeled", "annotationLabelContains"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["count", "isLabeled"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "record",
      description:
        "A record represents an entry in a dataset that needs labeling",
      subcommands: [
        {
          name: "create",
          description: "Creates a record",
          options: [
            optName,
            optDatasetId,
            optCompartmentId,
            optSourceDetails,
            optRecordMetadata,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-record-create-object-storage-source-details",
          description: "Creates a record",
          options: [
            optName,
            optDatasetId,
            optCompartmentId,
            {
              name: "--source-details-relative-path",
              description:
                "The path relative to the prefix specified in the dataset source details (file name)",
              args: { name: "source-details-relative-path" },
              isRequired: true,
            },
            optRecordMetadata,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source-details-offset",
              description: "The offset into the file containing the content",
              args: { name: "number" },
            },
            {
              name: "--source-details-length",
              description:
                "The length from offset into the file containing the content",
              args: { name: "number" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-record-document-metadata",
          description: "Creates a record",
          options: [
            optName,
            optDatasetId,
            optCompartmentId,
            optSourceDetails,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--record-metadata-job-id",
              description: "Job id ocid of OCR batch call",
              args: { name: "record-metadata-job-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-record-image-metadata",
          description: "Creates a record",
          options: [
            optName,
            optDatasetId,
            optCompartmentId,
            optSourceDetails,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--record-metadata-height",
              description: "Height of the image record",
              args: { name: "integer" },
            },
            {
              name: "--record-metadata-width",
              description: "Width of the image record",
              args: { name: "integer" },
            },
            {
              name: "--record-metadata-depth",
              description: "Depth of the image record",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-record-text-metadata",
          description: "Creates a record",
          options: [
            optName,
            optDatasetId,
            optCompartmentId,
            optSourceDetails,
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
          description: "Deletes a record resource by identifier",
          options: [
            optRecordId,
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
          name: "get",
          description: "Gets a record",
          options: [optRecordId, optFromJson],
        },
        {
          name: "get-record-content",
          description:
            "Retrieves the content of the record from the dataset source",
          options: [
            optRecordId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--if-none-match",
              description: "For optimistic concurrency control",
              args: { name: "if-none-match" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-record-preview-content",
          description:
            "Retrieves the preview of the record content from the dataset source",
          options: [
            optRecordId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--if-none-match",
              description: "For optimistic concurrency control",
              args: { name: "if-none-match" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a record",
          options: [
            optRecordId,
            optFreeformTags,
            optDefinedTags,
            optRecordMetadata,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-record-document-metadata",
          description: "Updates a record",
          options: [
            optRecordId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--record-metadata-job-id",
              description: "Job id ocid of OCR batch call",
              args: { name: "record-metadata-job-id" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-record-image-metadata",
          description: "Updates a record",
          options: [
            optRecordId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--record-metadata-height",
              description: "Height of the image record",
              args: { name: "integer" },
            },
            {
              name: "--record-metadata-width",
              description: "Width of the image record",
              args: { name: "integer" },
            },
            {
              name: "--record-metadata-depth",
              description: "Depth of the image record",
              args: { name: "integer" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-record-text-metadata",
          description: "Updates a record",
          options: [
            optRecordId,
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
      name: "annotation-analytics-aggregation-collection",
      description:
        "Aggregation entities are required by the API consistency guidelines for API Consistency",
      subcommands: [
        {
          name: "summarize-annotation-analytics",
          description: "Summarize the annotations created for a given dataset",
          options: [
            optCompartmentId2,
            optDatasetId2,
            optLifecycleState,
            {
              name: "--label",
              description: "It summarizes annotations with the specified label",
              args: { name: "label" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["count", "label", "updatedBy"] },
            },
            {
              name: "--annotation-group-by",
              description: "The field to group by",
              args: { suggestions: ["updatedBy", "label"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "record-collection",
      description: "The results of a record search",
      subcommands: [
        {
          name: "list-records",
          description: "The list of records in the specified compartment",
          options: [
            optCompartmentId2,
            optDatasetId2,
            optLifecycleState,
            {
              name: "--name",
              description: "The name of the record",
              args: { name: "name" },
            },
            {
              name: "--id",
              description: "The unique OCID identifier",
              args: { name: "id" },
            },
            {
              name: "--is-labeled",
              description:
                "Whether the record has been labeled and has associated annotations",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--annotation-labels-contains",
              description:
                "Lets the user filter records based on the related annotations",
              args: { name: "annotation-labels-contains" },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name"] },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dataset",
      description: "A dataset is a logical collection of records",
      subcommands: [
        {
          name: "get",
          description: "Gets a dataset by identifier",
          options: [
            {
              name: "--dataset-id",
              description: "A unique dataset OCID",
              args: { name: "dataset-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "annotation-collection",
      description: "The results of an annotations search",
      subcommands: [
        {
          name: "list-annotations",
          description: "Returns a list of annotations",
          options: [
            optCompartmentId2,
            optDatasetId2,
            optLifecycleState,
            {
              name: "--id",
              description: "The unique OCID identifier",
              args: { name: "id" },
            },
            {
              name: "--updated-by",
              description:
                "The OCID of the principal which updated the annotation",
              args: { name: "updated-by" },
            },
            {
              name: "--record-id",
              description: "The OCID of the record annotated",
              args: { name: "record-id" },
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "The date and time the resource was created, in the timestamp format defined by RFC3339",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than-or-equal-to",
              description:
                "The date and time the resource was created, in the timestamp format defined by RFC3339",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "label"] },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
