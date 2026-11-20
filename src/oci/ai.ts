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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "WAITING",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optAlias: Fig.Option = {
  name: "--alias",
  description:
    "Unique name across user tenancy in a region to identify an endpoint to be used for inferencing",
  args: { name: "alias" },
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
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment that calls the API, inference will be served from pre trained model",
  args: { name: "compartment-id" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name for the resource",
  args: { name: "display-name" },
};
const optEndpointId: Fig.Option = {
  name: "--endpoint-id",
  description: "The endpoint which have to be used for inferencing",
  args: { name: "endpoint-id" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optModelId: Fig.Option = {
  name: "--model-id",
  description: "Unique model OCID",
  args: { name: "model-id" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optEndpointId2: Fig.Option = {
  name: "--endpoint-id",
  description: "The OCID of the endpoint",
  args: { name: "endpoint-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optJobId: Fig.Option = {
  name: "--job-id",
  description: "Unique Transcription Job identifier",
  args: { name: "job-id" },
  isRequired: true,
};
const optProjectId: Fig.Option = {
  name: "--project-id",
  description: "The OCID of the project",
  args: { name: "project-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "<b>Filter</b> results by the specified lifecycle state",
  args: {
    suggestions: [
      "DELETING",
      "DELETED",
      "FAILED",
      "CREATING",
      "ACTIVE",
      "UPDATING",
    ],
  },
};
const optProjectId2: Fig.Option = {
  name: "--project-id",
  description: "The ID of the project for which to list the objects",
  args: { name: "project-id" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "Specifies the field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "ai",
  description: "OCI Language",
  subcommands: [
    {
      name: "language",
      description: "Language group",
      subcommands: [
        {
          name: "batch-detect-language",
          description:
            "The API returns the detected language and a related confidence score (between 0 and 1)",
          options: [
            {
              name: "--documents",
              description: "List of Documents for detect language",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            {
              name: "--should-ignore-transliteration",
              description:
                "Specifies whether to consider or ignore transliteration",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chars-to-consider",
              description: "Default value is None",
              args: { name: "integer" },
            },
            optEndpointId,
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "batch-detect-entities",
          description: "The API extracts entities in text records",
          options: [
            {
              name: "--documents",
              description: "List of Documents for detect entities",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optCompartmentId,
            optEndpointId,
            optFromJson,
          ],
        },
        {
          name: "batch-detect-key-phrases",
          description: "The API extracts key-phrases in text records",
          options: [
            {
              name: "--documents",
              description: "List of Documents for detect keyPhrases",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optEndpointId,
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "batch-detect-sentiments",
          description:
            "The API extracts aspect-based and sentence level sentiment in text records",
          options: [
            {
              name: "--documents",
              description: "List of Documents for detect sentiments",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optEndpointId,
            optCompartmentId,
            {
              name: "--level",
              description:
                "Set this parameter for sentence and aspect level sentiment analysis",
              args: { suggestions: ["ASPECT", "SENTENCE"] },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "batch-detect-text-classification",
          description:
            "The API automatically classifies text into a set of pre-determined classes and sub-classes",
          options: [
            {
              name: "--documents",
              description: "List of Documents for detect text classification",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optCompartmentId,
            optEndpointId,
            optFromJson,
          ],
        },
        {
          name: "batch-detect-pii-entities",
          description: "The API extracts pii entities in text records",
          options: [
            {
              name: "--documents",
              description:
                "List of documents to detect personal identification information",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            optEndpointId,
            optCompartmentId,
            {
              name: "--masking",
              description: "Mask recognized PII entities with different modes",
              args: { name: "json" },
            },
            { name: "--profile-parameterconflict", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "batch-detect-health-entities",
          description: "The API extracts health entities in text records",
          options: [
            {
              name: "--endpoint-id",
              description: "The endpoint which have to be used for inferencing",
              args: { name: "endpoint-id" },
              isRequired: true,
            },
            {
              name: "--documents",
              description: "List of Documents for detect health entities",
              args: { name: "json" },
              isRequired: true,
            },
            optAlias,
            {
              name: "--link-ontologies",
              description: "List of NLP health ontologies to be linked",
              args: { name: "json" },
            },
            {
              name: "--is-detect-assertions",
              description:
                "Is assertion on input text required. default value true",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-detect-relationships",
              description:
                "Is relationship on input text required. default value true",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--profile-parameterconflict", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "detect-language",
          description:
            "Deprecated: This API will be retired Tuesday, 10 Oct 2023 00:00:00 GMT",
          deprecated: true,
          options: [
            {
              name: "--text",
              description: "Document text for detect language",
              args: { name: "text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "detect-entities",
          description:
            "Deprecated: This API will be retired Tuesday, 10 Oct 2023 00:00:00 GMT",
          deprecated: true,
          options: [
            {
              name: "--text",
              description: "Document text for detect entities",
              args: { name: "text" },
              isRequired: true,
            },
            {
              name: "--model-version",
              description: "Named Entity Recognition model versions",
              args: { suggestions: ["V2_1", "V1_1"] },
            },
            {
              name: "--is-pii",
              description: "If this parameter is set to true, you only get PII",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "detect-key-phrases",
          description:
            "Deprecated: This API will be retired Tuesday, 10 Oct 2023 00:00:00 GMT",
          deprecated: true,
          options: [
            {
              name: "--text",
              description: "Document text for detect keyPhrases",
              args: { name: "text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "detect-sentiments",
          description:
            "Deprecated: This API will be retired Tuesday, 10 Oct 2023 00:00:00 GMT",
          deprecated: true,
          options: [
            {
              name: "--text",
              description: "Document text for detect sentiments",
              args: { name: "text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "detect-text-classification",
          description:
            "Deprecated: This API will be retired Tuesday, 10 Oct 2023 00:00:00 GMT",
          deprecated: true,
          options: [
            {
              name: "--text",
              description: "Document text for detect text classes",
              args: { name: "text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "project",
          description:
            "Project enable users to organize their project resources",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a Project into a different compartment",
              options: [
                optProjectId,
                optCompartmentId3,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a new Project",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID for the project's compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optDisplayName,
                {
                  name: "--description",
                  description: "A short description of the project",
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
              description: "Deletes a Project resource by identifier",
              options: [
                optProjectId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets a Project by identifier",
              options: [optProjectId, optFromJson],
            },
            {
              name: "list",
              description: "Returns a list of Projects",
              options: [
                optCompartmentId2,
                optLifecycleState,
                optDisplayName2,
                optLimit,
                optPage,
                optProjectId2,
                optSortOrder,
                optSortBy2,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the Project",
              options: [
                optProjectId,
                optDisplayName,
                {
                  name: "--description",
                  description: "A short description of the project",
                  args: { name: "description" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
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
          description: "Description of the a Model",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a Model into a different compartment",
              options: [optModelId, optCompartmentId3, optIfMatch, optFromJson],
            },
            {
              name: "create",
              description:
                "Creates a new model for training and train the model with date provided",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID for the models compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--project-id",
                  description:
                    "The OCID of the project to associate with the model",
                  args: { name: "project-id" },
                  isRequired: true,
                },
                {
                  name: "--model-details",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDisplayName,
                {
                  name: "--description",
                  description: "A short description of the a model",
                  args: { name: "description" },
                },
                { name: "--training-dataset", args: { name: "json" } },
                { name: "--test-strategy", args: { name: "json" } },
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
              description: "Deletes a provisioned model resource by identifier",
              options: [
                optModelId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets a model by identifier",
              options: [optModelId, optFromJson],
            },
            {
              name: "list",
              description: "Returns a list of models",
              options: [
                optCompartmentId2,
                {
                  name: "--model-id",
                  description: "Unique model OCID",
                  args: { name: "model-id" },
                },
                optProjectId2,
                optLifecycleState,
                optDisplayName2,
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
              name: "update",
              description: "Updates the model",
              options: [
                optModelId,
                optDisplayName,
                {
                  name: "--description",
                  description: "A short description of the a model",
                  args: { name: "description" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "endpoint",
          description: "Description of the endpoint",
          subcommands: [
            {
              name: "change-compartment",
              description: "Moves a Endpoint into a different compartment",
              options: [
                optEndpointId2,
                optCompartmentId3,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description:
                "Creates a new endpoint and deploy the trained model",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID compartment identifier for the endpoint",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--model-id",
                  description:
                    "The OCID of the model to associate with the endpoint",
                  args: { name: "model-id" },
                  isRequired: true,
                },
                optDisplayName,
                optAlias,
                {
                  name: "--description",
                  description: "A short description of the an endpoint",
                  args: { name: "description" },
                },
                {
                  name: "--inference-units",
                  description: "Number of replicas required for this endpoint",
                  args: { name: "integer" },
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
              description:
                "Deletes a provisioned endpoint resource by identifier",
              options: [
                optEndpointId2,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets an endpoint by identifier",
              options: [optEndpointId2, optFromJson],
            },
            {
              name: "list",
              description: "Returns a list of Endpoints",
              options: [
                optCompartmentId2,
                {
                  name: "--endpoint-id",
                  description: "The OCID of the endpoint",
                  args: { name: "endpoint-id" },
                },
                optProjectId2,
                optDisplayName2,
                {
                  name: "--model-id",
                  description:
                    "The ID of the trained model for which to list the endpoints",
                  args: { name: "model-id" },
                },
                optLifecycleState,
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
              name: "update",
              description: "Update the Endpoint identified by the id",
              options: [
                optEndpointId2,
                optDisplayName,
                optAlias,
                {
                  name: "--description",
                  description: "A short description of the endpoint",
                  args: { name: "description" },
                },
                {
                  name: "--model-id",
                  description:
                    "The OCID of the model to associate with the endpoint",
                  args: { name: "model-id" },
                },
                {
                  name: "--inference-units",
                  description: "Number of replicas required for this endpoint",
                  args: { name: "integer" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "work-request",
          description: "A description of workrequest status",
          subcommands: [
            {
              name: "get",
              description:
                "Gets the status of the work request with the given ID",
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
                optPage,
                optLimit,
                {
                  name: "--resource-id",
                  description:
                    "The ID of the resource for which list workrequests",
                  args: { name: "resource-id" },
                },
                optSortOrder,
                optSortBy,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "error",
              description:
                "An error encountered while executing a work request",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Return a (paginated) list of errors for a given work request",
                  options: [
                    optWorkRequestId,
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
              name: "log",
              description: "A log message from the execution of a work request",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Return a (paginated) list of logs for a given work request",
                  options: [
                    optWorkRequestId,
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
          ],
        },
        {
          name: "batch-language-translation",
          description:
            "Translates a batch of text documents from source to target language",
          options: [
            {
              name: "--documents",
              description: "List of documents for translation",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--alias",
              description:
                "Unique name to identify an endpoint to be used for inferencing",
              args: { name: "alias" },
            },
            {
              name: "--endpoint-id",
              description: "The endpoint that has to be used for inferencing",
              args: { name: "endpoint-id" },
            },
            {
              name: "--no-translate",
              description: "List of words not to be translated",
              args: { name: "json" },
            },
            optCompartmentId,
            {
              name: "--target-language-code",
              description:
                "Language code supported Arabic - ar Brazilian Portuguese - pt-BR Canadian French - fr-CA Croatian",
              args: { name: "target-language-code" },
            },
            optFromJson,
          ],
        },
        {
          name: "evaluation-result",
          description: "Results of a model evaluation analysis search",
          subcommands: [
            {
              name: "list",
              description:
                "Get a (paginated) list of evaluation results for a given model",
              options: [
                optModelId,
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
          name: "model-type-info",
          description: "Model information like versions and capabilities",
          subcommands: [
            {
              name: "get",
              description: "Gets model capabilities",
              options: [
                {
                  name: "--model-type",
                  description:
                    "Results like version and model supported info by specifying model type",
                  args: { name: "model-type" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "job",
          description:
            "Job details which contain input document details on which prediction need to run, features",
          subcommands: [
            {
              name: "cancel",
              description: "Canceling the job cancels all the tasks under it",
              options: [optJobId, optIfMatch, optFromJson],
            },
            {
              name: "change-compartment",
              description: "Moves a Job into a different compartment",
              options: [
                {
                  name: "--job-id",
                  description: "Unique job OCID",
                  args: { name: "job-id" },
                  isRequired: true,
                },
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
              description: "Creates a new language service async job",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment where you want to create the job",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--input-location",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--model-metadata-details",
                  description:
                    "Training model details For this release only one model is allowed to be input here",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--output-location",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "A user-friendly display name for the job",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description: "A short description of the job",
                  args: { name: "description" },
                },
                { name: "--input-configuration", args: { name: "json" } },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes the language service async Job",
              options: [
                optJobId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets a language service async job",
              options: [optJobId, optFromJson],
            },
            {
              name: "list",
              description: "Returns a list of language service async Jobs",
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
                      "DELETING",
                      "DELETED",
                    ],
                  },
                },
                optDisplayName2,
                {
                  name: "--id",
                  description: "Unique identifier(OCID)",
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
              name: "update",
              description: "Updates the language service async Job",
              options: [
                optJobId,
                {
                  name: "--display-name",
                  description: "A user-friendly display name for the job",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description: "A short description of the job",
                  args: { name: "description" },
                },
                optIfMatch,
                {
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
                      "DELETING",
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
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
