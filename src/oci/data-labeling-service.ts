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
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optDatasetId: Fig.Option = {
  name: "--dataset-id",
  description: "Unique Dataset OCID",
  args: { name: "dataset-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "The defined tags for this resource",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A user provided description of the dataset",
  args: { name: "description" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name for the resource",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "A simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optLabelingInstructions: Fig.Option = {
  name: "--labeling-instructions",
  description:
    "The labeling instructions for human labelers in rich text format",
  args: { name: "labeling-instructions" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optAnnotationFormat: Fig.Option = {
  name: "--annotation-format",
  description: "The annotation format name required for labeling records",
  args: { name: "annotation-format" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment of the resource",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optInitialImportDatasetConfiguration: Fig.Option = {
  name: "--initial-import-dataset-configuration",
  args: { name: "json" },
};
const optInitialRecordGenerationConfiguration: Fig.Option = {
  name: "--initial-record-generation-configuration",
  args: { name: "json" },
};
const optLabelSet: Fig.Option = {
  name: "--label-set",
  args: { name: "json" },
  isRequired: true,
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optDatasetSourceDetails: Fig.Option = {
  name: "--dataset-source-details",
  args: { name: "json" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "data-labeling-service",
  description: "Data Labeling Management",
  subcommands: [
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-work-request-errors",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
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
            optPage,
            optLimit,
            optAll,
            optPageSize,
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
          name: "add",
          description:
            "Add Labels to the Dataset LabelSet until the maximum number of Labels has been reached",
          options: [
            optDatasetId,
            { name: "--label-set", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a Dataset resource from one compartment identifier to another",
          options: [
            optDatasetId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the resource should be moved",
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
          description: "Creates a new Dataset",
          options: [
            optCompartmentId,
            optAnnotationFormat,
            optDatasetSourceDetails,
            {
              name: "--dataset-format-details",
              args: { name: "json" },
              isRequired: true,
            },
            optLabelSet,
            optDisplayName,
            optDescription,
            optInitialRecordGenerationConfiguration,
            optInitialImportDatasetConfiguration,
            optLabelingInstructions,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-dataset-object-storage-source-details",
          description: "Creates a new Dataset",
          options: [
            optCompartmentId,
            optAnnotationFormat,
            {
              name: "--dataset-format-details",
              args: { name: "json" },
              isRequired: true,
            },
            optLabelSet,
            {
              name: "--dataset-source-details-namespace",
              description:
                "The namespace of the bucket that contains the dataset data source",
              args: { name: "dataset-source-details-namespace" },
              isRequired: true,
            },
            {
              name: "--dataset-source-details-bucket",
              description:
                "The object storage bucket that contains the dataset data source",
              args: { name: "dataset-source-details-bucket" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optInitialRecordGenerationConfiguration,
            optInitialImportDatasetConfiguration,
            optLabelingInstructions,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--dataset-source-details-prefix",
              description:
                "A common path prefix shared by the objects that make up the dataset",
              args: { name: "dataset-source-details-prefix" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-dataset-image-dataset-format-details",
          description: "Creates a new Dataset",
          options: [
            optCompartmentId,
            optAnnotationFormat,
            optDatasetSourceDetails,
            optLabelSet,
            optDisplayName,
            optDescription,
            optInitialRecordGenerationConfiguration,
            optInitialImportDatasetConfiguration,
            optLabelingInstructions,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-dataset-document-dataset-format-details",
          description: "Creates a new Dataset",
          options: [
            optCompartmentId,
            optAnnotationFormat,
            optDatasetSourceDetails,
            optLabelSet,
            optDisplayName,
            optDescription,
            optInitialRecordGenerationConfiguration,
            optInitialImportDatasetConfiguration,
            optLabelingInstructions,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-dataset-text-dataset-format-details",
          description: "Creates a new Dataset",
          options: [
            optCompartmentId,
            optAnnotationFormat,
            optDatasetSourceDetails,
            optLabelSet,
            optDisplayName,
            optDescription,
            optInitialRecordGenerationConfiguration,
            optInitialImportDatasetConfiguration,
            optLabelingInstructions,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--dataset-format-details-text-file-type-metadata",
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
          description: "Deletes a Dataset resource by identifier",
          options: [
            optDatasetId,
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
          name: "generate-dataset-records",
          description:
            "Generates Record resources from the Dataset's data source",
          options: [
            optDatasetId,
            {
              name: "--limit",
              description: "The maximum number of records to generate",
              args: { name: "number" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Dataset by identifier",
          options: [optDatasetId, optFromJson],
        },
        {
          name: "import-pre-annotated-data",
          description:
            "Imports records and annotations from dataset files into existing Dataset",
          options: [
            optDatasetId,
            { name: "--import-format", args: { name: "json" } },
            { name: "--import-metadata-path", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "import-pre-annotated-data-object-storage-import-metadata-path",
          description:
            "Imports records and annotations from dataset files into existing Dataset",
          options: [
            optDatasetId,
            {
              name: "--import-metadata-path-namespace",
              description: "Bucket namespace name",
              args: { name: "import-metadata-path-namespace" },
              isRequired: true,
            },
            {
              name: "--import-metadata-path-bucket",
              description: "Bucket name",
              args: { name: "import-metadata-path-bucket" },
              isRequired: true,
            },
            {
              name: "--import-metadata-path-path",
              description: "Path for the metadata file",
              args: { name: "import-metadata-path-path" },
              isRequired: true,
            },
            { name: "--import-format", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes the labels from the Dataset Labelset",
          options: [
            optDatasetId,
            { name: "--label-set", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rename-dataset-labels",
          description: "Renames the labels from the Dataset Labelset",
          options: [
            optDatasetId,
            { name: "--source-label-set", args: { name: "json" } },
            { name: "--target-label-set", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "snapshot",
          description:
            "Writes the dataset records and annotations in a consolidated format out to an object storage reference",
          options: [
            optDatasetId,
            {
              name: "--are-annotations-included",
              description:
                "Whether annotations are to be included in the export dataset digest",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--are-unannotated-records-included",
              description:
                "Whether to include records that have yet to be annotated in the export dataset digest",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--export-details",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--export-format", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Dataset",
          options: [
            optDatasetId,
            optDisplayName,
            optDescription,
            optLabelingInstructions,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
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
                  "NEEDS_ATTENTION",
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
      name: "dataset-collection",
      description: "Results of a dataset list operation",
      subcommands: [
        {
          name: "list-datasets",
          description: "Returns a list of Datasets",
          options: [
            optCompartmentId2,
            {
              name: "--id",
              description: "Unique Dataset OCID",
              args: { name: "id" },
            },
            {
              name: "--annotation-format",
              description:
                "A filter to return only resources that match the entire annotation format given",
              args: { name: "annotation-format" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches this query param",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
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
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'asc' or 'desc'",
              args: { suggestions: ["ASC", "DESC"] },
            },
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
    {
      name: "annotation-format",
      description: "Annotation format",
      subcommands: [
        {
          name: "list",
          description: "These are a static list in a given region",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'asc' or 'desc'",
              args: { suggestions: ["ASC", "DESC"] },
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
