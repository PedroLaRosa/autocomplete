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
  description:
    "A simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
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
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optStreamJobId: Fig.Option = {
  name: "--stream-job-id",
  description: "Stream job id",
  args: { name: "stream-job-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment that calls the API",
  args: { name: "compartment-id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optOutputLocation: Fig.Option = {
  name: "--output-location",
  args: { name: "json" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
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
const optStreamSourceId: Fig.Option = {
  name: "--stream-source-id",
  description: "StreamSource Id",
  args: { name: "stream-source-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment identifier from the requester",
  args: { name: "compartment-id" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Stream job display name",
  args: { name: "display-name" },
};
const optIsZipOutputEnabled: Fig.Option = {
  name: "--is-zip-output-enabled",
  description: "Whether or not to generate a ZIP file containing the results",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optModelId: Fig.Option = {
  name: "--model-id",
  description: "A unique model identifier",
  args: { name: "model-id" },
  isRequired: true,
};
const optProjectId: Fig.Option = {
  name: "--project-id",
  description: "A unique project identifier",
  args: { name: "project-id" },
  isRequired: true,
};
const optStreamGroupId: Fig.Option = {
  name: "--stream-group-id",
  description: "StreamGroup Id",
  args: { name: "stream-group-id" },
  isRequired: true,
};
const optVisionPrivateEndpointId: Fig.Option = {
  name: "--vision-private-endpoint-id",
  description: "Vision private endpoint Id",
  args: { name: "vision-private-endpoint-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "OCID of compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment identifier",
  args: { name: "compartment-id" },
  isRequired: true,
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
    ],
  },
};
const optFeatures: Fig.Option = {
  name: "--features",
  description: "The types of document analysis requested",
  args: { name: "json" },
  isRequired: true,
};
const optFeatures2: Fig.Option = {
  name: "--features",
  description: "The types of image analysis",
  args: { name: "json" },
  isRequired: true,
};
const optId: Fig.Option = {
  name: "--id",
  description: "The filter to find the device with the given identifier",
  args: { name: "id" },
};
const optInputLocation: Fig.Option = {
  name: "--input-location",
  args: { name: "json" },
  isRequired: true,
};
const optInputLocationObjectLocations: Fig.Option = {
  name: "--input-location-object-locations",
  description: "The list of ObjectLocations",
  args: { name: "json" },
  isRequired: true,
};
const optLanguage: Fig.Option = {
  name: "--language",
  description: "The document language, abbreviated according to ISO 639-2",
  args: {
    suggestions: [
      "ENG",
      "CES",
      "DAN",
      "NLD",
      "FIN",
      "FRA",
      "DEU",
      "ELL",
      "HUN",
      "ITA",
      "NOR",
      "POL",
      "POR",
      "RON",
      "RUS",
      "SLK",
      "SPA",
      "SWE",
      "TUR",
      "ARA",
      "CHI_SIM",
      "HIN",
      "JPN",
      "KOR",
      "OTHERS",
    ],
  },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The filter to match projects with the given lifecycleState",
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
const optOutputLocation2: Fig.Option = {
  name: "--output-location",
  args: { name: "json" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const completionSpec: Fig.Spec = {
  name: "ai-vision",
  description: "Vision",
  subcommands: [
    {
      name: "stream-source",
      description: "Stream source information",
      subcommands: [
        {
          name: "change-compartment",
          description: "Move a streamSource from one compartment to another",
          options: [
            optStreamSourceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the streamSource should be moved",
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
          description: "Registration of new streamSource",
          options: [
            {
              name: "--stream-source-details",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId4,
            {
              name: "--display-name",
              description: "A human-friendly name for the streamSource",
              args: { name: "display-name" },
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
          name: "create-stream-source-rtsp-source-details",
          description: "Registration of new streamSource",
          options: [
            optCompartmentId4,
            {
              name: "--stream-source-details-stream-network-access-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--stream-source-details-camera-url",
              description: "Url of camera",
              args: { name: "stream-source-details-camera-url" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A human-friendly name for the streamSource",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--stream-source-details-secret-id",
              description:
                "OCID of secret where credentials are stored in username:password format",
              args: { name: "stream-source-details-secret-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a streamSource",
          options: [
            optStreamSourceId,
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
          description: "Get a streamSource",
          options: [optStreamSourceId, optFromJson],
        },
        {
          name: "update",
          description: "Update a streamSource",
          options: [
            optStreamSourceId,
            { name: "--stream-source-details", args: { name: "json" } },
            {
              name: "--display-name",
              description:
                "A human-friendly name for the streamSource, that can be changed",
              args: { name: "display-name" },
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
          name: "update-stream-source-rtsp-source-details",
          description: "Update a streamSource",
          options: [
            optStreamSourceId,
            {
              name: "--stream-source-details-stream-network-access-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--stream-source-details-camera-url",
              description: "Url of camera",
              args: { name: "stream-source-details-camera-url" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A human-friendly name for the streamSource, that can be changed",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--stream-source-details-secret-id",
              description:
                "OCID of secret where credentials are stored in username:password format",
              args: { name: "stream-source-details-secret-id" },
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
      name: "stream-source-collection",
      description: "The results of a streamSource search",
      subcommands: [
        {
          name: "list-stream-sources",
          description:
            "Gets a list of the streamSources in the specified compartment",
          options: [
            optCompartmentId,
            optLifecycleState,
            optId,
            optDisplayName,
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
      name: "video-job",
      description: "Job details for a video analysis",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a video analysis job",
          options: [
            {
              name: "--video-job-id",
              description: "Video job id",
              args: { name: "video-job-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Create a video analysis job with given inputs and features",
          options: [
            optInputLocation,
            {
              name: "--features",
              description: "A list of video analysis features",
              args: { name: "json" },
              isRequired: true,
            },
            optOutputLocation,
            {
              name: "--compartment-id",
              description: "Compartment identifier from the requester",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "Video job display name",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-video-job-object-list-inline-input-location",
          description:
            "Create a video analysis job with given inputs and features",
          options: [
            {
              name: "--features",
              description: "A list of video analysis features",
              args: { name: "json" },
              isRequired: true,
            },
            optOutputLocation,
            optInputLocationObjectLocations,
            {
              name: "--compartment-id",
              description: "Compartment identifier from the requester",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "Video job display name",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get details of a video analysis job",
          options: [
            {
              name: "--video-job-id",
              description: "Video job id",
              args: { name: "video-job-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "stream-job-collection",
      description: "The results of a stream job search",
      subcommands: [
        {
          name: "list-stream-jobs",
          description: "Get list of stream jobs",
          options: [
            optCompartmentId,
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
                  "INACTIVE",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--id",
              description:
                "The filter to find the streamjob with the given identifier",
              args: { name: "id" },
            },
            optDisplayName,
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
      name: "vision-private-endpoint",
      description: "Vision private endpoint",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move a visionPrivateEndpoint from one compartment to another",
          options: [
            optVisionPrivateEndpointId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the visionPrivateEndpoint should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new visionPrivateEndpoint",
          options: [
            {
              name: "--subnet-id",
              description: "OCID of subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optCompartmentId5,
            {
              name: "--display-name",
              description:
                "A human-friendly name for the visionPrivateEndpoint, that can be changed",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "An optional description of the visionPrivateEndpoint",
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
          description: "Delete a visionPrivateEndpoint by identifier",
          options: [
            optVisionPrivateEndpointId,
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
          description: "Get a visionPrivateEndpoint by identifier",
          options: [optVisionPrivateEndpointId, optFromJson],
        },
        {
          name: "update",
          description: "Update the visionPrivateEndpoint metadata",
          options: [
            optVisionPrivateEndpointId,
            {
              name: "--display-name",
              description:
                "A human-friendly name for the visionPrivateEndpoint, that can be changed",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "An optional description of the visionPrivateEndpoint",
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
      ],
    },
    {
      name: "project",
      description: "A Vision Project containing models",
      subcommands: [
        {
          name: "change-compartment",
          description: "Move a project from one compartment to another",
          options: [
            optProjectId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the project should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new project",
          options: [
            optCompartmentId5,
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
            optForce2,
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
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "project-collection",
      description: "The results of a project search",
      subcommands: [
        {
          name: "list-projects",
          description: "Returns a list of projects",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description:
                "The filter to find the project with the given identifier",
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
      name: "work-request",
      description: "The workrequest status details",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel the work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
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
            optCompartmentId,
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
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "document-job",
      description: "The job details for a batch document analysis",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a document batch job",
          options: [
            {
              name: "--document-job-id",
              description: "The document job ID",
              args: { name: "document-job-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a document analysis batch job",
          options: [
            optInputLocation,
            {
              name: "--features",
              description: "The list of requested document analysis types",
              args: { name: "json" },
              isRequired: true,
            },
            optOutputLocation,
            optCompartmentId3,
            {
              name: "--display-name",
              description: "The document job display name",
              args: { name: "display-name" },
            },
            {
              name: "--language",
              description:
                "The language of the document, abbreviated according to ISO 639-2",
              args: {
                suggestions: [
                  "ENG",
                  "CES",
                  "DAN",
                  "NLD",
                  "FIN",
                  "FRA",
                  "DEU",
                  "ELL",
                  "HUN",
                  "ITA",
                  "NOR",
                  "POL",
                  "POR",
                  "RON",
                  "RUS",
                  "SLK",
                  "SPA",
                  "SWE",
                  "TUR",
                  "ARA",
                  "CHI_SIM",
                  "HIN",
                  "JPN",
                  "KOR",
                  "OTHERS",
                ],
              },
            },
            {
              name: "--document-type",
              description: "The type of documents",
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
                ],
              },
            },
            optIsZipOutputEnabled,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-document-job-object-list-inline-input-location",
          description: "Create a document analysis batch job",
          options: [
            {
              name: "--features",
              description: "The list of requested document analysis types",
              args: { name: "json" },
              isRequired: true,
            },
            optOutputLocation,
            optInputLocationObjectLocations,
            optCompartmentId3,
            {
              name: "--display-name",
              description: "The document job display name",
              args: { name: "display-name" },
            },
            {
              name: "--language",
              description:
                "The language of the document, abbreviated according to ISO 639-2",
              args: {
                suggestions: [
                  "ENG",
                  "CES",
                  "DAN",
                  "NLD",
                  "FIN",
                  "FRA",
                  "DEU",
                  "ELL",
                  "HUN",
                  "ITA",
                  "NOR",
                  "POL",
                  "POR",
                  "RON",
                  "RUS",
                  "SLK",
                  "SPA",
                  "SWE",
                  "TUR",
                  "ARA",
                  "CHI_SIM",
                  "HIN",
                  "JPN",
                  "KOR",
                  "OTHERS",
                ],
              },
            },
            {
              name: "--document-type",
              description: "The type of documents",
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
                ],
              },
            },
            optIsZipOutputEnabled,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get details of a document batch job",
          options: [
            {
              name: "--document-job-id",
              description: "The document job ID",
              args: { name: "document-job-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "model-collection",
      description: "The results of a model search",
      subcommands: [
        {
          name: "list-models",
          description: "Returns a list of models in a compartment",
          options: [
            optCompartmentId,
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
            optDisplayName,
            {
              name: "--id",
              description:
                "The filter to find the model with the given identifier",
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
      name: "stream-job",
      description: "Job details for a stream analysis",
      subcommands: [
        {
          name: "change-compartment",
          description: "Move a streamJob from one compartment to another",
          options: [
            optStreamJobId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the streamJob should be moved",
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
          description:
            "Create a stream analysis job with given inputs and features",
          options: [
            {
              name: "--stream-source-id",
              description: "OCID of streamSource",
              args: { name: "stream-source-id" },
              isRequired: true,
            },
            {
              name: "--features",
              description: "A list of stream analysis features",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--stream-output-location",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-stream-job-object-storage-output-location",
          description:
            "Create a stream analysis job with given inputs and features",
          options: [
            {
              name: "--stream-source-id",
              description: "OCID of streamSource",
              args: { name: "stream-source-id" },
              isRequired: true,
            },
            {
              name: "--features",
              description: "A list of stream analysis features",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--stream-output-location-namespace-name",
              description: "The Object Storage namespace",
              args: { name: "stream-output-location-namespace-name" },
              isRequired: true,
            },
            {
              name: "--stream-output-location-bucket-name",
              description: "The Object Storage bucket name",
              args: { name: "stream-output-location-bucket-name" },
              isRequired: true,
            },
            {
              name: "--stream-output-location-prefix",
              description: "The Object Storage folder name",
              args: { name: "stream-output-location-prefix" },
              isRequired: true,
            },
            optDisplayName2,
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
          description: "Get details of a stream analysis job",
          options: [
            optStreamJobId,
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
          description: "Get details of a stream analysis job",
          options: [optStreamJobId, optFromJson],
        },
        {
          name: "start",
          description: "End a stream analysis Run",
          options: [
            optStreamJobId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "End a stream analysis Run",
          options: [
            optStreamJobId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Create a stream analysis job with given inputs and features",
          options: [
            optStreamJobId,
            {
              name: "--stream-source-id",
              description: "OCID of streamSource",
              args: { name: "stream-source-id" },
            },
            {
              name: "--features",
              description: "List of stream analysis features",
              args: { name: "json" },
            },
            { name: "--stream-output-location", args: { name: "json" } },
            optDisplayName2,
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
          name: "update-stream-job-object-storage-output-location",
          description:
            "Create a stream analysis job with given inputs and features",
          options: [
            optStreamJobId,
            {
              name: "--stream-output-location-namespace-name",
              description: "The Object Storage namespace",
              args: { name: "stream-output-location-namespace-name" },
              isRequired: true,
            },
            {
              name: "--stream-output-location-bucket-name",
              description: "The Object Storage bucket name",
              args: { name: "stream-output-location-bucket-name" },
              isRequired: true,
            },
            {
              name: "--stream-output-location-prefix",
              description: "The Object Storage folder name",
              args: { name: "stream-output-location-prefix" },
              isRequired: true,
            },
            {
              name: "--stream-source-id",
              description: "OCID of streamSource",
              args: { name: "stream-source-id" },
            },
            {
              name: "--features",
              description: "List of stream analysis features",
              args: { name: "json" },
            },
            optDisplayName2,
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
      name: "image-job",
      description: "The job details for a batch image analysis",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an image batch job",
          options: [
            {
              name: "--image-job-id",
              description: "The image job ID",
              args: { name: "image-job-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create an image analysis batch job",
          options: [
            optInputLocation,
            {
              name: "--features",
              description: "The list of requested image analysis types",
              args: { name: "json" },
              isRequired: true,
            },
            optOutputLocation,
            optCompartmentId3,
            {
              name: "--display-name",
              description: "The image job display name",
              args: { name: "display-name" },
            },
            optIsZipOutputEnabled,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-image-job-object-list-inline-input-location",
          description: "Create an image analysis batch job",
          options: [
            {
              name: "--features",
              description: "The list of requested image analysis types",
              args: { name: "json" },
              isRequired: true,
            },
            optOutputLocation,
            optInputLocationObjectLocations,
            optCompartmentId3,
            {
              name: "--display-name",
              description: "The image job display name",
              args: { name: "display-name" },
            },
            optIsZipOutputEnabled,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get details of an image batch job",
          options: [
            {
              name: "--image-job-id",
              description: "The image job ID",
              args: { name: "image-job-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "stream-group-collection",
      description: "The results of a streamGroup search",
      subcommands: [
        {
          name: "list-stream-groups",
          description:
            "Gets a list of the streamGroups in the specified compartment",
          options: [
            optCompartmentId,
            optId,
            optDisplayName,
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
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "stream-group",
      description: "Details for a Stream Group",
      subcommands: [
        {
          name: "change-compartment",
          description: "Move a streamGroup from one compartment to another",
          options: [
            optStreamGroupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the streamGroup should be moved",
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
          description: "Registration of new streamGroup",
          options: [
            optCompartmentId4,
            {
              name: "--display-name",
              description: "A human-friendly name for the streamGroup",
              args: { name: "display-name" },
            },
            {
              name: "--is-enabled",
              description: "Stream",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--stream-source-ids",
              description:
                "List of streamSource OCIDs associated with the stream group",
              args: { name: "json" },
            },
            {
              name: "--stream-overlaps",
              description:
                "List of streamSource OCIDs where the streamSource overlaps in field of view",
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
          name: "delete",
          description: "Delete a streamGroup",
          options: [
            optStreamGroupId,
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
          description: "Get a streamGroup",
          options: [optStreamGroupId, optFromJson],
        },
        {
          name: "update",
          description: "Update a streamGroup",
          options: [
            optStreamGroupId,
            {
              name: "--display-name",
              description: "A human-friendly name for the streamGroup",
              args: { name: "display-name" },
            },
            {
              name: "--is-enabled",
              description: "Stream",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--stream-source-ids",
              description:
                "List of streamSource OCIDs associated with the stream group",
              args: { name: "json" },
            },
            {
              name: "--stream-overlaps",
              description:
                "List of streamSource OCIDs where the streamSource overlaps in field of view",
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
      name: "model",
      description: "Machine-learned Model",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a model from one compartment to another",
          options: [
            optModelId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the model should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new model",
          options: [
            {
              name: "--model-type",
              description: "Which type of Vision model this is",
              args: { name: "model-type" },
              isRequired: true,
            },
            optCompartmentId5,
            {
              name: "--training-dataset",
              args: { name: "json" },
              isRequired: true,
            },
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
              name: "--is-quick-mode",
              description:
                "Set to true when experimenting with a new model type or dataset, so the model training is quick",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--max-training-duration-in-hours",
              description:
                "The maximum model training duration in hours, expressed as a decimal fraction",
              args: { name: "max-training-duration-in-hours" },
            },
            { name: "--testing-dataset", args: { name: "json" } },
            { name: "--validation-dataset", args: { name: "json" } },
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
            optForce2,
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
      name: "vision-private-endpoint-collection",
      description: "The results of a visionPrivateEndpoint search",
      subcommands: [
        {
          name: "list-vision-private-endpoints",
          description: "Returns a list of visionPrivateEndpoints",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            optId,
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
      name: "analyze-document",
      description: "Perform different types of image analysis",
      options: [
        optFeatures,
        { name: "--document", args: { name: "json" }, isRequired: true },
        optCompartmentId2,
        optOutputLocation2,
        optLanguage,
        optDocumentType,
        optFromJson,
      ],
    },
    {
      name: "analyze-document-object-storage-document-details",
      description: "Perform different types of image analysis",
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
        optCompartmentId2,
        optOutputLocation2,
        optLanguage,
        optDocumentType,
        optFromJson,
      ],
    },
    {
      name: "analyze-document-inline-document-details",
      description: "Perform different types of image analysis",
      options: [
        optFeatures,
        {
          name: "--document-data",
          description: "Raw document data",
          args: { name: "document-data" },
          isRequired: true,
        },
        optCompartmentId2,
        optOutputLocation2,
        optLanguage,
        optDocumentType,
        optFromJson,
      ],
    },
    {
      name: "analyze-image",
      description: "Perform different types of image analysis",
      options: [
        optFeatures2,
        { name: "--image", args: { name: "json" }, isRequired: true },
        optCompartmentId2,
        optFromJson,
      ],
    },
    {
      name: "analyze-image-object-storage-image-details",
      description: "Perform different types of image analysis",
      options: [
        optFeatures2,
        {
          name: "--image-namespace-name",
          description: "The Object Storage namespace",
          args: { name: "image-namespace-name" },
          isRequired: true,
        },
        {
          name: "--image-bucket-name",
          description: "The Object Storage bucket name",
          args: { name: "image-bucket-name" },
          isRequired: true,
        },
        {
          name: "--image-object-name",
          description: "The Object Storage object name",
          args: { name: "image-object-name" },
          isRequired: true,
        },
        optCompartmentId2,
        optFromJson,
      ],
    },
    {
      name: "analyze-image-inline-image-details",
      description: "Perform different types of image analysis",
      options: [
        optFeatures2,
        {
          name: "--image-data",
          description: "Raw image data",
          args: { name: "image-data" },
          isRequired: true,
        },
        optCompartmentId2,
        optFromJson,
      ],
    },
  ],
};

export default completionSpec;
