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
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optTranscriptionJobId: Fig.Option = {
  name: "--transcription-job-id",
  description: "Unique Transcription Job identifier",
  args: { name: "transcription-job-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "DELETING",
      "DELETED",
      "FAILED",
      "UPDATING",
      "ACTIVE",
      "CREATING",
    ],
  },
  isRepeatable: true,
};
const optAlias: Fig.Option = {
  name: "--alias",
  description: "Customization Details Alias",
  args: { name: "alias" },
};
const optCustomizationId: Fig.Option = {
  name: "--customization-id",
  description: "Unique Customization training Job identifier",
  args: { name: "customization-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment where you want to create the job",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A short description of the job",
  args: { name: "description" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name for the job",
  args: { name: "display-name" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optModelDetails: Fig.Option = {
  name: "--model-details",
  args: { name: "json" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "A short description of the customization",
  args: { name: "description" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name for the customization",
  args: { name: "display-name" },
};
const optId: Fig.Option = {
  name: "--id",
  description: "Unique identifier(OCID)",
  args: { name: "id" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optModelDetails2: Fig.Option = {
  name: "--model-details",
  args: { name: "json" },
  isRequired: true,
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
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
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
      "ACCEPTED",
      "IN_PROGRESS",
      "SUCCEEDED",
      "FAILED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "speech",
  description: "Speech",
  subcommands: [
    {
      name: "customization",
      description: "Description of a Customization",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Customization resource into a different compartment",
          options: [
            optCustomizationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Customization",
          options: [
            optCompartmentId,
            optModelDetails2,
            {
              name: "--training-dataset",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-customization-object-storage-dataset",
          description: "Creates a new Customization",
          options: [
            optCompartmentId,
            optModelDetails2,
            {
              name: "--training-dataset-location-details",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--training-dataset-entity-type",
              description:
                "Entity Type categorizing the following list of words",
              args: { name: "training-dataset-entity-type" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-customization-entity-list-dataset",
          description: "Creates a new Customization",
          options: [
            optCompartmentId,
            optModelDetails2,
            optAlias,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--training-dataset-reference-examples",
              description:
                "List of sentences referencing 1 or more entityType matching those defined in the linked entityLists",
              args: { name: "json" },
            },
            {
              name: "--training-dataset-entity-list",
              description: "Array of entityLists",
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
          description: "Delete Customization and its metadata from tenancy",
          options: [
            optCustomizationId,
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
          description: "Gets a Customization by identifier",
          options: [optCustomizationId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Customizations",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "UPDATING",
                  "ACTIVE",
                  "CREATING",
                ],
              },
            },
            optDisplayName2,
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
        {
          name: "update",
          description: "Updates a Customization by identifier",
          options: [
            optCustomizationId,
            optAlias,
            optDisplayName3,
            optDescription2,
            optModelDetails,
            { name: "--training-dataset", args: { name: "json" } },
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
          name: "update-customization-object-storage-dataset",
          description: "Updates a Customization by identifier",
          options: [
            optCustomizationId,
            {
              name: "--training-dataset-location-details",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optDisplayName3,
            optDescription2,
            optModelDetails,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--training-dataset-entity-type",
              description:
                "Entity Type categorizing the following list of words",
              args: { name: "training-dataset-entity-type" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-customization-entity-list-dataset",
          description: "Updates a Customization by identifier",
          options: [
            optCustomizationId,
            optAlias,
            optDisplayName3,
            optDescription2,
            optModelDetails,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--training-dataset-reference-examples",
              description:
                "List of sentences referencing 1 or more entityType matching those defined in the linked entityLists",
              args: { name: "json" },
            },
            {
              name: "--training-dataset-entity-list",
              description: "Array of entityLists",
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
      name: "realtime-session-token",
      description:
        "The response from the realtime session token endpoint that creates the auth token to be used with",
      subcommands: [
        {
          name: "create",
          description: "Returns an authentication token to the user",
          options: [
            optCompartmentId,
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "transcription-task",
      description: "Description of Transcription Task",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel Transcription Task",
          options: [
            optTranscriptionJobId,
            {
              name: "--transcription-task-id",
              description: "Unique Transcription Task identifier",
              args: { name: "transcription-task-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Transcription Task by identifier",
          options: [
            optTranscriptionJobId,
            {
              name: "--transcription-task-id",
              description: "Unique Transcription Task identifier",
              args: { name: "transcription-task-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of Transcription Tasks",
          options: [
            optTranscriptionJobId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                  "CANCELED",
                ],
              },
            },
            optDisplayName2,
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
      name: "transcription-job",
      description: "Description of Transcription Job",
      subcommands: [
        {
          name: "cancel",
          description: "Canceling the job cancels all the tasks under it",
          options: [optTranscriptionJobId, optIfMatch, optFromJson],
        },
        {
          name: "change-compartment",
          description:
            "Moves a transcription Job resource into a different compartment",
          options: [
            optTranscriptionJobId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Transcription Job",
          options: [
            optCompartmentId,
            {
              name: "--input-location",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--output-location",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            {
              name: "--additional-transcription-formats",
              description: "Transcription Format",
              args: { suggestions: ["SRT"] },
            },
            optModelDetails,
            { name: "--normalization", args: { name: "json" } },
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
          description: "Delete API cleans job, tasks and the related metadata",
          options: [
            optTranscriptionJobId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Transcription Job by identifier",
          options: [optTranscriptionJobId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Transcription Jobs",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optDisplayName2,
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
        {
          name: "update",
          description: "Updates the Transcription Job",
          options: [
            optTranscriptionJobId,
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
      ],
    },
    {
      name: "voice",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of speakers available to the user to choose from based on language code and voice type",
          options: [
            optCompartmentId2,
            {
              name: "--model-name",
              description:
                "The model name to filter voices for given model name",
              args: { suggestions: ["TTS_1_STANDARD", "TTS_2_NATURAL"] },
            },
            {
              name: "--language-code",
              description:
                "The Code or Id of the language to filter voices for given language code",
              args: { name: "language-code" },
            },
            {
              name: "--display-name",
              description:
                "The name of the speaker voice in which the user wants tts inference to be",
              args: { name: "display-name" },
            },
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "synthesize-speech",
      description:
        "Creates an audio for the given input text based on other input parameters like language, voice type, etc",
      options: [
        {
          name: "--text",
          description:
            "The text input to get the inference audio from TTS Service",
          args: { name: "text" },
          isRequired: true,
        },
        {
          name: "--file",
          description:
            "The name of the file that will receive the response data, or '-' to write to STDOUT",
          args: { name: "file", template: "filepaths" },
          isRequired: true,
        },
        {
          name: "--is-stream-enabled",
          description:
            "If set to true, response will be sent in the chunked transfer-encoding and audio chunks are sent back as",
          args: { name: "boolean", suggestions: ["true", "false"] },
        },
        {
          name: "--compartment-id",
          description:
            "The OCID of the compartment where the user has access to call SpeechSynthesize api",
          args: { name: "compartment-id" },
        },
        { name: "--configuration", args: { name: "json" } },
        { name: "--audio-config", args: { name: "json" } },
        optFromJson,
      ],
    },
  ],
};

export default completionSpec;
