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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
      "SUCCEEDED",
      "PARTIALLY_SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
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
const optModelId: Fig.Option = {
  name: "--model-id",
  description: "The OCID of the model",
  args: { name: "model-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name for the resource",
  args: { name: "display-name" },
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "<b>Filter</b> results by the OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "Specifies sort order to use, either ASC (ascending) or DESC (descending)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "<b>Filter</b> results by its user-friendly name",
  args: { name: "display-name" },
};
const optId: Fig.Option = {
  name: "--id",
  description: "<b>Filter</b> results by OCID",
  args: { name: "id" },
};
const optCreatedBy: Fig.Option = {
  name: "--created-by",
  description:
    "<b>Filter</b> results by the OCID of the user who created the resource",
  args: { name: "created-by" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment where the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optMetadatumKeyName: Fig.Option = {
  name: "--metadatum-key-name",
  description: "The name of the model metadatum in the metadata",
  args: { name: "metadatum-key-name" },
  isRequired: true,
};
const optModelGroupId: Fig.Option = {
  name: "--model-group-id",
  description: "The OCID of the modelGroup",
  args: { name: "model-group-id" },
  isRequired: true,
};
const optProjectId: Fig.Option = {
  name: "--project-id",
  description: "<b>Filter</b> results by the OCID of the project",
  args: { name: "project-id" },
};
const optContentLength: Fig.Option = {
  name: "--content-length",
  description: "The content length of the body",
  args: { name: "integer" },
};
const optModelDeploymentId: Fig.Option = {
  name: "--model-deployment-id",
  description: "The OCID of the model deployment",
  args: { name: "model-deployment-id" },
  isRequired: true,
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optJobId: Fig.Option = {
  name: "--job-id",
  description: "The OCID of the job",
  args: { name: "job-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "Specifies the field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optContentDisposition: Fig.Option = {
  name: "--content-disposition",
  description: "This header allows you to specify a filename during upload",
  args: { name: "content-disposition" },
};
const optMlAppInstanceViewId: Fig.Option = {
  name: "--ml-app-instance-view-id",
  description: "Unique MlApplicationInstanceView identifier",
  args: { name: "ml-app-instance-view-id" },
  isRequired: true,
};
const optPipelineId: Fig.Option = {
  name: "--pipeline-id",
  description: "The OCID of the pipeline",
  args: { name: "pipeline-id" },
  isRequired: true,
};
const optCategoryLogDetails: Fig.Option = {
  name: "--category-log-details",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A short description of the model deployment",
  args: { name: "description" },
};
const optMlAppImplementationId: Fig.Option = {
  name: "--ml-app-implementation-id",
  description: "Unique MlApplicationImplementation identifier",
  args: { name: "ml-app-implementation-id" },
  isRequired: true,
};
const optNotebookSessionId: Fig.Option = {
  name: "--notebook-session-id",
  description: "The OCID of the notebook session",
  args: { name: "notebook-session-id" },
  isRequired: true,
};
const optOpcParentRptUrl: Fig.Option = {
  name: "--opc-parent-rpt-url",
  description:
    "URL to fetch the Resource Principal Token from the parent resource",
  args: { name: "opc-parent-rpt-url" },
};
const optRange: Fig.Option = {
  name: "--range",
  description:
    "Optional byte range to fetch, as described in RFC 7233, section 2.1",
  args: { name: "range" },
};
const optScheduleId: Fig.Option = {
  name: "--schedule-id",
  description: "Unique Schedule identifier",
  args: { name: "schedule-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "DELETING", "FAILED", "DELETED"],
  },
  isRepeatable: true,
};
const optArtifactSignatureId: Fig.Option = {
  name: "--artifact-signature-id",
  description: "The OCID of the model artifact signature",
  args: { name: "artifact-signature-id" },
  isRequired: true,
};
const optComputeTargetId: Fig.Option = {
  name: "--compute-target-id",
  description: "The OCID of the compute target",
  args: { name: "compute-target-id" },
  isRequired: true,
};
const optJobRunId: Fig.Option = {
  name: "--job-run-id",
  description: "The OCID of the job run",
  args: { name: "job-run-id" },
  isRequired: true,
};
const optMlAppInstanceId: Fig.Option = {
  name: "--ml-app-instance-id",
  description: "Unique MlApplicationInstance identifier",
  args: { name: "ml-app-instance-id" },
  isRequired: true,
};
const optPipelineRunId: Fig.Option = {
  name: "--pipeline-run-id",
  description: "The OCID of the pipeline run",
  args: { name: "pipeline-run-id" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "Specifies the field to sort by",
  args: { suggestions: ["timeCreated", "displayName", "lifecycleState"] },
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "name"] },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED", "FAILED", "INACTIVE"] },
  isRepeatable: true,
};
const optConfigurationDetails: Fig.Option = {
  name: "--configuration-details",
  args: { name: "json" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "A short description of the compute target",
  args: { name: "description" },
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "A short description of the job",
  args: { name: "description" },
};
const optDsPrivateEndpointId: Fig.Option = {
  name: "--ds-private-endpoint-id",
  description: "The unique ID for a Data Science private endpoint. required",
  args: { name: "ds-private-endpoint-id" },
  isRequired: true,
};
const optInfrastructureConfigurationDetails: Fig.Option = {
  name: "--infrastructure-configuration-details",
  args: { name: "json" },
};
const optJobStorageMountConfigurationDetailsList: Fig.Option = {
  name: "--job-storage-mount-configuration-details-list",
  description: "Collection of JobStorageMountConfigurationDetails",
  args: { name: "json" },
};
const optMetadata: Fig.Option = {
  name: "--metadata",
  description: "Metadata for the compute target",
  args: { name: "json" },
};
const optMlAppId: Fig.Option = {
  name: "--ml-app-id",
  description: "Unique MlApplication identifier",
  args: { name: "ml-app-id" },
  isRequired: true,
};
const optMlAppId2: Fig.Option = {
  name: "--ml-app-id",
  description: "Unique MlApplication identifier",
  args: { name: "ml-app-id" },
};
const optModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails: Fig.Option =
  {
    name: "--model-deployment-configuration-details-environment-configuration-details",
    args: { name: "json" },
  };
const optModelGroupVersionHistoryId: Fig.Option = {
  name: "--model-group-version-history-id",
  description: "The OCID of the modelGroupVersionHistory",
  args: { name: "model-group-version-history-id" },
  isRequired: true,
};
const optModelVersionSetId: Fig.Option = {
  name: "--model-version-set-id",
  description: "The OCID of the model version set",
  args: { name: "model-version-set-id" },
  isRequired: true,
};
const optProjectId2: Fig.Option = {
  name: "--project-id",
  description: "The OCID of the project",
  args: { name: "project-id" },
  isRequired: true,
};
const optTriggerName: Fig.Option = {
  name: "--trigger-name",
  description: "Name of trigger",
  args: { name: "trigger-name" },
  isRequired: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "DELETED",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment to create the modelGroup in",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment where you want to create the model deployment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConfiguration: Fig.Option = {
  name: "--configuration",
  description:
    "Data that are used for provisioning of the given MlApplicationInstance",
  args: { name: "json" },
};
const optLogConfigurationDetails: Fig.Option = {
  name: "--log-configuration-details",
  args: { name: "json" },
};
const optMlAppImplementationId2: Fig.Option = {
  name: "--ml-app-implementation-id",
  description:
    "The OCID of ML Application Implementation selected as a certain solution for a given ML problem",
  args: { name: "ml-app-implementation-id" },
};
const optMlAppImplementationId3: Fig.Option = {
  name: "--ml-app-implementation-id",
  description: "Unique MlApplicationImplementation identifier",
  args: { name: "ml-app-implementation-id" },
};
const optMlAppImplementationVersionId: Fig.Option = {
  name: "--ml-app-implementation-version-id",
  description: "Unique MlApplicationImplementationVersion identifier",
  args: { name: "ml-app-implementation-version-id" },
  isRequired: true,
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only resources that match the entire name given",
  args: { name: "name" },
};
const optProjectId3: Fig.Option = {
  name: "--project-id",
  description: "The OCID of the project to associate with the model deployment",
  args: { name: "project-id" },
  isRequired: true,
};
const optProjectId4: Fig.Option = {
  name: "--project-id",
  description: "The OCID of the project to associate with the modelGroup",
  args: { name: "project-id" },
  isRequired: true,
};
const optStepName: Fig.Option = {
  name: "--step-name",
  description: "Unique Step identifier in a pipeline",
  args: { name: "step-name" },
  isRequired: true,
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "DELETING",
      "DELETED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState6: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "FAILED"] },
  isRepeatable: true,
};
const optWaitForState7: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "FAILED",
      "INACTIVE",
      "DELETING",
      "DELETED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState8: Fig.Option = {
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
      "NEEDS_ATTENTION",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "data-science",
  description: "Data Science",
  subcommands: [
    {
      name: "container",
      description: "Summary representation of a container",
      subcommands: [
        {
          name: "list",
          description: "List containers",
          options: [
            {
              name: "--is-latest",
              description: "If true, this returns latest version of container",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDisplayName2,
            {
              name: "--container-name",
              description: "<b>Filter</b> results by the container name",
              args: { name: "container-name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            {
              name: "--target-workload",
              description: "<b>Filter</b> results by the target workload",
              args: { suggestions: ["MODEL_DEPLOYMENT", "JOB_RUN"] },
            },
            {
              name: "--usage-query-param",
              description: "<b>Filter</b> results by the usage",
              args: {
                suggestions: [
                  "INFERENCE",
                  "FINE_TUNE",
                  "EVALUATION",
                  "BATCH_INFERENCE",
                  "OTHER",
                ],
              },
            },
            {
              name: "--tag-query-param",
              description: "<b>Filter</b> results by the container version tag",
              args: { name: "tag-query-param" },
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
      name: "register-model-artifact-reference-details",
      description:
        "Parameters that are required to register a model artifact reference collection",
      subcommands: [
        {
          name: "register-model-artifact-reference",
          description: "Registers model artifact reference metadata",
          options: [
            {
              name: "--model-artifact-references",
              description: "A list of model artifact references to register",
              args: { name: "json" },
              isRequired: true,
            },
            optModelId,
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
      name: "model-deployment-shape",
      description:
        "The compute shape used to launch a model deployment compute instance",
      subcommands: [
        {
          name: "list",
          description: "Lists the valid model deployment shapes",
          options: [
            optCompartmentId,
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
      name: "model-group",
      description: "Model group is a collection of the models",
      subcommands: [
        {
          name: "activate",
          description: "Activates the model group",
          options: [
            optModelGroupId,
            optIfMatch,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a model group resource into a different compartment",
          options: [
            optModelGroupId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new Model Group resource",
          options: [
            {
              name: "--create-type",
              description: "The type of the model group create operation",
              args: { suggestions: ["CREATE", "CLONE"] },
              isRequired: true,
            },
            optCompartmentId4,
            optProjectId4,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-model-group-clone-model-group-details",
          description: "Create a new Model Group resource",
          options: [
            optCompartmentId4,
            optProjectId4,
            {
              name: "--model-group-clone-source-details",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-model-group-create-model-group-details",
          description: "Create a new Model Group resource",
          options: [
            optCompartmentId4,
            optProjectId4,
            {
              name: "--model-group-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--member-model-entries",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the modelGroup",
              args: { name: "description" },
            },
            {
              name: "--model-group-version-history-id",
              description:
                "The OCID of the model group version history to which the modelGroup is associated",
              args: { name: "model-group-version-history-id" },
            },
            {
              name: "--version-label",
              description:
                "An additional description of the lifecycle state of the model group",
              args: { name: "version-label" },
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
          name: "create-model-group-artifact",
          description: "Creates artifact for the Model Group",
          options: [
            optModelGroupId,
            {
              name: "--model-group-artifact",
              description: "The model group artifact to upload",
              args: { name: "model-group-artifact" },
              isRequired: true,
            },
            optContentLength,
            optContentDisposition,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates the model group",
          options: [
            optModelGroupId,
            optIfMatch,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Model Group",
          options: [
            optModelGroupId,
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
            "Retrieves the Model Group resource based on the specified modelGroup id",
          options: [optModelGroupId, optFromJson],
        },
        {
          name: "get-model-group-artifact-content",
          description:
            "Downloads the model artifact for the specified model group",
          options: [optModelGroupId, optFile, optRange, optFromJson],
        },
        {
          name: "head-model-group-artifact",
          description:
            "Gets model group artifact metadata for a specified model group",
          options: [optModelGroupId, optFromJson],
        },
        {
          name: "list-model-group-models",
          description:
            "Lists all models associated with the modelGroup in the specified compartment",
          options: [
            optModelGroupId,
            optCompartmentId,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: ["ACTIVE", "DELETED", "FAILED", "INACTIVE"],
              },
            },
            optCreatedBy,
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
          name: "list",
          description: "Lists all the modelGroups in the specified compartment",
          options: [
            optCompartmentId,
            optProjectId,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources matching the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optCreatedBy,
            {
              name: "--model-group-version-history-id",
              description: "The OCID of the modelGroupVersionHistory",
              args: { name: "model-group-version-history-id" },
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
          name: "update",
          description: "Updates the properties of the Model Group",
          options: [
            optModelGroupId,
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the modelGroup",
              args: { name: "description" },
            },
            {
              name: "--version-label",
              description:
                "An additional description of the lifecycle state of the model group",
              args: { name: "version-label" },
            },
            {
              name: "--model-group-version-history-id",
              description:
                "The OCID of the model group version history to which the modelGroup will be associated",
              args: { name: "model-group-version-history-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "compute-target",
      description: "A compute target",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a compute target into a different compartment",
          options: [
            optComputeTargetId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new compute target resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the compute target",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--compute-configuration-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
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
          name: "create-compute-target-managed-compute-cluster-compute-configuration-details",
          description: "Creates a new compute target resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the compute target",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--compute-configuration-details-instance-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--compute-configuration-details-scaling-policy",
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
          description: "Deletes the specified compute target",
          options: [
            optComputeTargetId,
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
            "Retrieves the compute target for the specified computeTargetId",
          options: [optComputeTargetId, optFromJson],
        },
        {
          name: "list",
          description: "List all compute targets in the specified compartment",
          options: [
            optCompartmentId,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                ],
              },
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
          description: "Updates the compute target",
          options: [
            optComputeTargetId,
            optDisplayName,
            optDescription2,
            optMetadata,
            { name: "--compute-configuration-details", args: { name: "json" } },
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
          name: "update-compute-target-update-managed-compute-cluster-configuration-details",
          description: "Updates the compute target",
          options: [
            optComputeTargetId,
            optDisplayName,
            optDescription2,
            optMetadata,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--compute-configuration-details-instance-configuration",
              args: { name: "json" },
            },
            {
              name: "--compute-configuration-details-scaling-policy",
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
      name: "project",
      description: "Projects enable users to organize their data science work",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a project resource into a different compartment",
          options: [optProjectId2, optCompartmentId2, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description: "Creates a new project",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the project in",
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
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETING", "DELETED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified project",
          options: [
            optProjectId2,
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
          description: "Gets the specified project's information",
          options: [optProjectId2, optFromJson],
        },
        {
          name: "list",
          description: "Lists projects in the specified compartment",
          options: [
            optCompartmentId,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETING", "DELETED"] },
            },
            optCreatedBy,
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
          description: "Updates the properties of a project",
          options: [
            optProjectId2,
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the project",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETING", "DELETED"] },
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
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request that has not started",
          options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description: "Gets the specified work request's information",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-work-request-errors",
          description:
            "Lists work request errors for the specified work request",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-work-request-logs",
          description: "Lists work request logs for the specified work request",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists work requests in the specified compartment",
          options: [
            optCompartmentId,
            optId,
            {
              name: "--resource-id",
              description:
                "<b>Filter</b> results by the OCID of the resource associated with the work request",
              args: { name: "resource-id" },
            },
            {
              name: "--operation-type",
              description:
                "<b>Filter</b> results by the type of the operation associated with the work request",
              args: {
                suggestions: [
                  "NOTEBOOK_SESSION_CREATE",
                  "NOTEBOOK_SESSION_DELETE",
                  "NOTEBOOK_SESSION_ACTIVATE",
                  "NOTEBOOK_SESSION_DEACTIVATE",
                  "MODELVERSIONSET_DELETE",
                  "EXPORT_MODEL_ARTIFACT",
                  "IMPORT_MODEL_ARTIFACT",
                  "MODEL_DEPLOYMENT_CREATE",
                  "MODEL_DEPLOYMENT_DELETE",
                  "MODEL_DEPLOYMENT_ACTIVATE",
                  "MODEL_DEPLOYMENT_DEACTIVATE",
                  "MODEL_DEPLOYMENT_UPDATE",
                  "PROJECT_DELETE",
                  "WORKREQUEST_CANCEL",
                  "JOB_DELETE",
                  "PIPELINE_CREATE",
                  "PIPELINE_DELETE",
                  "PIPELINE_RUN_CREATE",
                  "PIPELINE_RUN_CANCEL",
                  "PIPELINE_RUN_DELETE",
                  "ML_APPLICATION_PACKAGE_UPLOAD",
                  "ML_APPLICATION_TRIGGER_START",
                  "ML_APPLICATION_IMPLEMENTATION_DELETE",
                  "ML_APPLICATION_IMPLEMENTATION_UPDATE",
                  "ML_APPLICATION_IMPLEMENTATION_MOVE",
                  "ML_APPLICATION_INSTANCE_CREATE",
                  "ML_APPLICATION_INSTANCE_UPDATE",
                  "ML_APPLICATION_INSTANCE_DELETE",
                  "ML_APPLICATION_INSTANCE_MOVE",
                  "ML_APPLICATION_INSTANCE_VIEW_CREATE",
                  "ML_APPLICATION_INSTANCE_VIEW_UPDATE",
                  "ML_APPLICATION_INSTANCE_VIEW_DELETE",
                  "ML_APPLICATION_INSTANCE_VIEW_UPGRADE",
                  "ML_APPLICATION_INSTANCE_VIEW_MOVE",
                  "PRIVATE_ENDPOINT_CREATE",
                  "PRIVATE_ENDPOINT_DELETE",
                  "PRIVATE_ENDPOINT_MOVE",
                  "PRIVATE_ENDPOINT_UPDATE",
                  "SCHEDULE_CREATE",
                  "SCHEDULE_UPDATE",
                  "SCHEDULE_DELETE",
                  "SCHEDULE_MOVE",
                  "SCHEDULE_ACTIVATE",
                  "SCHEDULE_DEACTIVATE",
                  "REGISTER_MODEL_ARTIFACT",
                  "RESTORE_ARCHIVED_MODEL",
                  "COMPUTE_TARGET_CREATE",
                  "COMPUTE_TARGET_UPDATE",
                  "COMPUTE_TARGET_DELETE",
                  "MODEL_GROUP_CREATE",
                  "MODEL_GROUP_UPDATE",
                  "MODEL_GROUP_DELETE",
                  "MODEL_GROUP_VERSION_HISTORY_DELETE",
                  "CREATE_MODEL_ARTIFACT_SIGNATURE",
                  "VERIFY_MODEL_ARTIFACT_SIGNATURE",
                ],
              },
            },
            {
              name: "--status",
              description: "<b>Filter</b> results by work request status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "PARTIALLY_SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Specifies the field to sort by",
              args: {
                suggestions: ["operationType", "status", "timeAccepted"],
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
      name: "notebook-session",
      description:
        "Notebook sessions are interactive coding environments for data scientists",
      subcommands: [
        {
          name: "activate",
          description: "Activates the notebook session",
          options: [
            optNotebookSessionId,
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
            "Moves a notebook session resource into a different compartment",
          options: [
            optNotebookSessionId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new notebook session",
          options: [
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate with the notebook session",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the notebook session",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--notebook-session-storage-mount-configuration-details-list",
              description:
                "Collection of NotebookSessionStorageMountConfigurationDetails",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--runtime-config-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--configuration-details",
              description: "Deprecated",
              args: { name: "json" },
              deprecated: true,
            },
            {
              name: "--config-details",
              description:
                "Used to configure the infrastructure details of a Data Science notebook",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates the notebook session",
          options: [
            optNotebookSessionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified notebook session",
          options: [
            optNotebookSessionId,
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
          description: "Gets the specified notebook session's information",
          options: [optNotebookSessionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the notebook sessions in the specified compartment",
          options: [
            optCompartmentId,
            optId,
            optProjectId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                  "UPDATING",
                ],
              },
            },
            optCreatedBy,
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
          description: "Updates the properties of a notebook session",
          options: [
            optNotebookSessionId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--notebook-session-storage-mount-configuration-details-list",
              description:
                "Collection of NotebookSessionStorageMountConfigurationDetails",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                  "UPDATING",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--runtime-config-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optConfigurationDetails,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "model-deployment-model-state",
      description: "Status of the model in a model group deployment",
      subcommands: [
        {
          name: "list",
          description: "Lists the status of models in a model group deployment",
          options: [
            optModelDeploymentId,
            optCompartmentId,
            optProjectId,
            optDisplayName2,
            {
              name: "--inference-key",
              description: "<b>Filter</b> results by the inference key",
              args: { name: "inference-key" },
            },
            {
              name: "--model-id",
              description: "<b>Filter</b> results by the model ocid",
              args: { name: "model-id" },
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
      name: "job-run",
      description: "A job run",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels an IN_PROGRESS job run",
          options: [optJobRunId, optIfMatch, optFromJson],
        },
        {
          name: "change-compartment",
          description: "Changes a job run's compartment",
          options: [optJobRunId, optCompartmentId2, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description: "Creates a job run",
          options: [
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate the job run with",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the job run",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--job-id",
              description: "The OCID of the job to create a run for",
              args: { name: "job-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--job-run-retention-period-in-days-override",
              description: "Retention period in days for job run",
              args: { name: "integer" },
            },
            {
              name: "--job-environment-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--job-infrastructure-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--job-node-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--job-storage-mount-configuration-override-details-list",
              description: "Collection of JobStorageMountConfigurationDetails",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optOpcParentRptUrl,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--log-configuration-override-details",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-job-run-managed-compute-cluster-job-infrastructure-configuration-details",
          description: "Creates a job run",
          options: [
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate the job run with",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the job run",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--job-id",
              description: "The OCID of the job to create a run for",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--job-infrastructure-configuration-override-details-compute-target-id",
              description: "The OCID of the compute target",
              args: {
                name: "job-infrastructure-configuration-override-details-compute-target-id",
              },
              isRequired: true,
            },
            {
              name: "--job-infrastructure-configuration-override-details-resource-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--job-run-retention-period-in-days-override",
              description: "Retention period in days for job run",
              args: { name: "integer" },
            },
            {
              name: "--job-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--job-log-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--job-environment-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--job-node-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--job-storage-mount-configuration-override-details-list",
              description: "Collection of JobStorageMountConfigurationDetails",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optOpcParentRptUrl,
            {
              name: "--job-infrastructure-configuration-override-details-network-configuration",
              args: { name: "json" },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a job run",
          options: [
            optJobRunId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a job run",
          options: [optJobRunId, optFromJson],
        },
        {
          name: "list",
          description: "List out job runs",
          options: [
            optCompartmentId,
            optId,
            {
              name: "--job-id",
              description: "The OCID of the job",
              args: { name: "job-id" },
            },
            optCreatedBy,
            optDisplayName2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a job run",
          options: [
            optJobRunId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fast-launch-job-config",
      description:
        "The shape config to launch a fast launch capable job instance",
      subcommands: [
        {
          name: "list",
          description:
            "List fast launch capable job configs in the specified compartment",
          options: [
            optCompartmentId,
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
      name: "model",
      description:
        "Models are mathematical representations of the relationships between data",
      subcommands: [
        {
          name: "activate",
          description: "Activates the model",
          options: [
            optModelId,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a model resource into a different compartment",
          options: [optModelId, optCompartmentId2, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description: "Creates a new model",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to create the model in",
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
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the model",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--custom-metadata-list",
              description: "An array of custom metadata details for the model",
              args: { name: "json" },
            },
            {
              name: "--defined-metadata-list",
              description: "An array of defined metadata details for the model",
              args: { name: "json" },
            },
            {
              name: "--input-schema",
              description: "Input schema file content in String format",
              args: { name: "input-schema" },
            },
            {
              name: "--output-schema",
              description: "Output schema file content in String format",
              args: { name: "output-schema" },
            },
            {
              name: "--model-version-set-id",
              description:
                "The OCID of the model version set that the model is associated to",
              args: { name: "model-version-set-id" },
            },
            {
              name: "--version-label",
              description:
                "The version label can add an additional description of the lifecycle state of the model or the application",
              args: { name: "version-label" },
            },
            { name: "--retention-setting", args: { name: "json" } },
            { name: "--backup-setting", args: { name: "json" } },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-model-artifact",
          description: "Creates model artifact for specified model",
          options: [
            optModelId,
            optContentLength,
            optContentDisposition,
            optIfMatch,
            {
              name: "--model-artifact-file",
              description: "The model artifact to upload",
              args: { name: "model-artifact-file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-model-custom-metadatum-artifact",
          description:
            "Creates model custom metadata artifact for specified model",
          options: [
            optModelId,
            optMetadatumKeyName,
            {
              name: "--model-custom-metadatum-artifact",
              description: "The model custom metadata artifact to upload",
              args: { name: "model-custom-metadatum-artifact" },
              isRequired: true,
            },
            optContentLength,
            optContentDisposition,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-model-defined-metadatum-artifact",
          description:
            "Creates model defined metadata artifact for specified model",
          options: [
            optModelId,
            optMetadatumKeyName,
            {
              name: "--model-defined-metadatum-artifact",
              description: "The model defined metadata artifact to upload",
              args: { name: "model-defined-metadatum-artifact" },
              isRequired: true,
            },
            optContentLength,
            optContentDisposition,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-model-provenance",
          description: "Creates provenance information for the specified model",
          options: [
            optModelId,
            {
              name: "--repository-url",
              description: "For model reproducibility purposes",
              args: { name: "repository-url" },
            },
            {
              name: "--git-branch",
              description: "For model reproducibility purposes",
              args: { name: "git-branch" },
            },
            {
              name: "--git-commit",
              description: "For model reproducibility purposes",
              args: { name: "git-commit" },
            },
            {
              name: "--script-dir",
              description: "For model reproducibility purposes",
              args: { name: "script-dir", template: "folders" },
            },
            {
              name: "--training-script",
              description: "For model reproducibility purposes",
              args: { name: "training-script" },
            },
            {
              name: "--training-id",
              description:
                "The OCID of a training session(Job or NotebookSession) in which the model was trained",
              args: { name: "training-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates the model",
          options: [
            optModelId,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified model",
          options: [
            optModelId,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-model-custom-metadatum-artifact",
          description:
            "Deletes model custom metadata artifact for specified model metadata key",
          options: [
            optModelId,
            optMetadatumKeyName,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete-model-defined-metadatum-artifact",
          description:
            "Deletes model defined metadata artifact for specified model metadata key",
          options: [
            optModelId,
            optMetadatumKeyName,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "export-model-artifact",
          description:
            "Export model artifact from source to the service bucket",
          options: [
            optModelId,
            {
              name: "--artifact-export-details",
              args: { name: "json" },
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
          name: "export-model-artifact-artifact-export-details-object-storage",
          description:
            "Export model artifact from source to the service bucket",
          options: [
            optModelId,
            optIfMatch,
            {
              name: "--artifact-export-details-namespace",
              description: "The Object Storage namespace used for the request",
              args: { name: "artifact-export-details-namespace" },
            },
            {
              name: "--artifact-export-details-source-bucket",
              description: "The name of the bucket",
              args: { name: "artifact-export-details-source-bucket" },
            },
            {
              name: "--artifact-export-details-source-object-name",
              description:
                "The name of the object resulting from the copy operation",
              args: { name: "artifact-export-details-source-object-name" },
            },
            {
              name: "--artifact-export-details-source-region",
              description: "Region in which OSS bucket is present",
              args: { name: "artifact-export-details-source-region" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified model's information",
          options: [optModelId, optFromJson],
        },
        {
          name: "get-model-custom-metadatum-artifact-content",
          description:
            "Downloads model custom metadata artifact content for specified model metadata key",
          options: [
            optModelId,
            optMetadatumKeyName,
            optFile,
            optRange,
            optFromJson,
          ],
        },
        {
          name: "get-model-defined-metadatum-artifact-content",
          description:
            "Downloads model defined metadata artifact content for specified model metadata key",
          options: [
            optModelId,
            optMetadatumKeyName,
            optFile,
            optRange,
            optFromJson,
          ],
        },
        {
          name: "get-model-provenance",
          description: "Gets provenance information for specified model",
          options: [optModelId, optFromJson],
        },
        {
          name: "head-model-artifact",
          description: "Gets model artifact metadata for specified model",
          options: [optModelId, optFromJson],
        },
        {
          name: "head-model-custom-metadatum-artifact",
          description:
            "Gets custom metadata artifact metadata for specified model metadata key",
          options: [optModelId, optMetadatumKeyName, optFromJson],
        },
        {
          name: "head-model-defined-metadatum-artifact",
          description:
            "Gets defined metadata artifact metadata for specified model metadata key",
          options: [optModelId, optMetadatumKeyName, optFromJson],
        },
        {
          name: "import-model-artifact",
          description: "Import model artifact from service bucket",
          options: [
            optModelId,
            {
              name: "--artifact-import-details",
              args: { name: "json" },
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
          name: "import-model-artifact-artifact-import-details-object-storage",
          description: "Import model artifact from service bucket",
          options: [
            optModelId,
            optIfMatch,
            {
              name: "--artifact-import-details-namespace",
              description: "The Object Storage namespace used for the request",
              args: { name: "artifact-import-details-namespace" },
            },
            {
              name: "--artifact-import-details-destination-bucket",
              description: "The name of the bucket",
              args: { name: "artifact-import-details-destination-bucket" },
            },
            {
              name: "--artifact-import-details-destination-object-name",
              description:
                "The name of the object resulting from the copy operation",
              args: { name: "artifact-import-details-destination-object-name" },
            },
            {
              name: "--artifact-import-details-destination-region",
              description: "Region in which OSS bucket is present",
              args: { name: "artifact-import-details-destination-region" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists models in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--model-version-set-name",
              description:
                "<b>Filter</b> results by the name of the model version set",
              args: { name: "model-version-set-name" },
            },
            {
              name: "--version-label",
              description: "<b>Filter</b> results by version label",
              args: { name: "version-label" },
            },
            {
              name: "--category",
              description: "Specifies the type of models to list",
              args: { suggestions: ["USER", "SERVICE"] },
            },
            optId,
            optProjectId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: ["ACTIVE", "DELETED", "FAILED", "INACTIVE"],
              },
            },
            optCreatedBy,
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
          name: "restore-archived-model-artifact",
          description: "Restore archived model artifact",
          options: [
            optModelId,
            {
              name: "--restore-model-for-hours-specified",
              description:
                "Duration in hours for which the archived model is available for access",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the properties of a model",
          options: [
            optModelId,
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the model",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--custom-metadata-list",
              description: "An array of custom metadata details for the model",
              args: { name: "json" },
            },
            {
              name: "--defined-metadata-list",
              description: "An array of defined metadata details for the model",
              args: { name: "json" },
            },
            {
              name: "--model-version-set-id",
              description:
                "The OCID of the model version set that the model is associated to",
              args: { name: "model-version-set-id" },
            },
            {
              name: "--version-label",
              description:
                "The version label can add an additional description of the lifecycle state of the model or the application",
              args: { name: "version-label" },
            },
            { name: "--retention-setting", args: { name: "json" } },
            { name: "--backup-setting", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-model-custom-metadatum-artifact",
          description:
            "Updates model custom metadata artifact for specified model metadata key",
          options: [
            optModelId,
            optMetadatumKeyName,
            {
              name: "--model-custom-metadatum-artifact",
              description: "The model custom metadata artifact to upload",
              args: { name: "model-custom-metadatum-artifact" },
              isRequired: true,
            },
            optContentLength,
            optContentDisposition,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-model-defined-metadatum-artifact",
          description:
            "Updates model defined metadata artifact for specified model metadata key",
          options: [
            optModelId,
            optMetadatumKeyName,
            {
              name: "--model-defined-metadatum-artifact",
              description: "The model defined metadata artifact to upload",
              args: { name: "model-defined-metadatum-artifact" },
              isRequired: true,
            },
            optContentLength,
            optContentDisposition,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-model-provenance",
          description:
            "Updates the provenance information for the specified model",
          options: [
            optModelId,
            {
              name: "--repository-url",
              description: "For model reproducibility purposes",
              args: { name: "repository-url" },
            },
            {
              name: "--git-branch",
              description: "For model reproducibility purposes",
              args: { name: "git-branch" },
            },
            {
              name: "--git-commit",
              description: "For model reproducibility purposes",
              args: { name: "git-commit" },
            },
            {
              name: "--script-dir",
              description: "For model reproducibility purposes",
              args: { name: "script-dir", template: "folders" },
            },
            {
              name: "--training-script",
              description: "For model reproducibility purposes",
              args: { name: "training-script" },
            },
            {
              name: "--training-id",
              description:
                "The OCID of a training session(Job or NotebookSession) in which the model was trained",
              args: { name: "training-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get-artifact-content",
          description: "Downloads model artifact content for specified model",
          options: [optModelId, optFile, optRange, optFromJson],
        },
      ],
    },
    {
      name: "notebook-session-shape",
      description:
        "The compute shape used to launch a notebook session compute instance",
      subcommands: [
        {
          name: "list",
          description: "Lists the valid notebook session shapes",
          options: [
            optCompartmentId,
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
      name: "model-group-version-history",
      description:
        "Model Group Version history to associate different versions of Model Group resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a model Group Version History resource into a different compartment",
          options: [
            optModelGroupVersionHistoryId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new modelGroupVersionHistory",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the model group version history in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate with the model group version history",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the resource",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A short description of the model version history",
              args: { name: "description" },
            },
            {
              name: "--latest-model-group-id",
              description:
                "The OCID of the latest version of the model group to be associated",
              args: { name: "latest-model-group-id" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACTIVE", "DELETED", "FAILED", "DELETING"],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified modelGroupVersionHistory",
          options: [
            optModelGroupVersionHistoryId,
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
            "Gets the specified modelGroupVersionHistory's information",
          options: [optModelGroupVersionHistoryId, optFromJson],
        },
        {
          name: "list",
          description:
            "List all modelGroupVersionHistories in the specified compartment",
          options: [
            optCompartmentId,
            optProjectId,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources matching the given lifecycleState",
              args: {
                suggestions: ["ACTIVE", "DELETED", "FAILED", "DELETING"],
              },
            },
            optCreatedBy,
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
          description: "Updates the properties of a modelGroupVersionHistory",
          options: [
            optModelGroupVersionHistoryId,
            optDisplayName,
            {
              name: "--description",
              description:
                "A short description of the model group version history",
              args: { name: "description" },
            },
            {
              name: "--latest-model-group-id",
              description:
                "The OCID of the latest version of the model group associated",
              args: { name: "latest-model-group-id" },
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
                suggestions: ["ACTIVE", "DELETED", "FAILED", "DELETING"],
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
      name: "job-shape",
      description: "The compute shape used to launch a job compute instance",
      subcommands: [
        {
          name: "list",
          description: "List job shapes available in the specified compartment",
          options: [
            optCompartmentId,
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
      name: "model-deployment",
      description:
        "Model deployments are used by data scientists to perform predictions from the model hosted on an HTTP server",
      subcommands: [
        {
          name: "activate",
          description: "Activates the model deployment",
          options: [
            optModelDeploymentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a model deployment into a different compartment",
          options: [
            optModelDeploymentId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new model deployment",
          options: [
            optProjectId3,
            optCompartmentId5,
            {
              name: "--model-deployment-configuration-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCategoryLogDetails,
            optFreeformTags,
            optDefinedTags,
            optOpcParentRptUrl,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-model-deployment-model-group-deployment-configuration-details",
          description: "Creates a new model deployment",
          options: [
            optProjectId3,
            optCompartmentId5,
            {
              name: "--model-deployment-configuration-details-model-group-configuration-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--model-deployment-configuration-details-infrastructure-configuration-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCategoryLogDetails,
            optFreeformTags,
            optDefinedTags,
            optOpcParentRptUrl,
            optModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-model-deployment-single-model-deployment-flex-configuration-details",
          description: "Creates a new model deployment",
          options: [
            optProjectId3,
            optCompartmentId5,
            {
              name: "--model-deployment-configuration-details-model-configuration-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--model-deployment-configuration-details-infrastructure-configuration-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCategoryLogDetails,
            optFreeformTags,
            optDefinedTags,
            optOpcParentRptUrl,
            optModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates the model deployment",
          options: [
            optModelDeploymentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified model deployment",
          options: [
            optModelDeploymentId,
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
            "Retrieves the model deployment for the specified modelDeploymentId",
          options: [optModelDeploymentId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all model deployments in the specified compartment",
          options: [
            optCompartmentId,
            optId,
            optProjectId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "FAILED",
                  "INACTIVE",
                  "UPDATING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optCreatedBy,
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
          description: "Updates the properties of a model deployment",
          options: [
            optModelDeploymentId,
            optDisplayName,
            optDescription,
            {
              name: "--model-deployment-configuration-details",
              args: { name: "json" },
            },
            optCategoryLogDetails,
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
          name: "update-model-deployment-update-model-group-deployment-configuration-details",
          description: "Updates the properties of a model deployment",
          options: [
            optModelDeploymentId,
            optDisplayName,
            optDescription,
            optCategoryLogDetails,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--model-deployment-configuration-details-update-type",
              description: "The type of update operation",
              args: { suggestions: ["ZDT", "LIVE"] },
            },
            {
              name: "--model-deployment-configuration-details-model-group-configuration-details",
              args: { name: "json" },
            },
            {
              name: "--model-deployment-configuration-details-infrastructure-configuration-details",
              args: { name: "json" },
            },
            optModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-model-deployment-update-single-model-deployment-flex-configuration-details",
          description: "Updates the properties of a model deployment",
          options: [
            optModelDeploymentId,
            optDisplayName,
            optDescription,
            optCategoryLogDetails,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--model-deployment-configuration-details-model-configuration-details",
              args: { name: "json" },
            },
            {
              name: "--model-deployment-configuration-details-infrastructure-configuration-details",
              args: { name: "json" },
            },
            optModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails,
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
      name: "pipeline-run",
      description: "Description of PipelineRun",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a PipelineRun",
          options: [
            optPipelineRunId,
            optIfMatch,
            {
              name: "--terminate-gracefully",
              description:
                "A boolean value to specify whether to terminate pipeline run gracefully",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            optPipelineRunId,
            optCompartmentId3,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new PipelineRun",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the pipeline run",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--pipeline-id",
              description:
                "The OCID of the pipeline for which pipeline run is created",
              args: { name: "pipeline-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate the pipeline run with",
              args: { name: "project-id" },
            },
            optDisplayName,
            {
              name: "--pipeline-run-retention-period-in-days-override",
              description: "Retention period in days for pipeline run",
              args: { name: "integer" },
            },
            {
              name: "--configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--log-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--infrastructure-configuration-override-details",
              args: { name: "json" },
            },
            {
              name: "--storage-mount-configuration-override-details-list",
              description:
                "The storage mount override details to mount to the instance running the pipeline step",
              args: { name: "json" },
            },
            {
              name: "--parameters-override",
              description: "Parameters override used in the pipeline run",
              args: { name: "json" },
            },
            {
              name: "--step-override-details",
              description: "Array of step override details",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
              args: { name: "json" },
            },
            optOpcParentRptUrl,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a PipelineRun resource by identifier",
          options: [
            optPipelineRunId,
            {
              name: "--delete-related-job-runs",
              description:
                "A boolean value to specify whether to delete related jobRuns or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a PipelineRun by identifier",
          options: [optPipelineRunId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of PipelineRuns",
          options: [
            {
              name: "--compartment-id",
              description:
                "<b>Filter</b> results by the OCID of the compartment",
              args: { name: "compartment-id" },
            },
            optId,
            {
              name: "--pipeline-id",
              description: "The OCID of the pipeline",
              args: { name: "pipeline-id" },
            },
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "The current state of the PipelineRun",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optCreatedBy,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Specifies the field to sort by",
              args: { suggestions: ["timeAccepted", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the PipelineRun",
          options: [
            optPipelineRunId,
            {
              name: "--display-name",
              description: "Name of the pipeline run",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pipeline",
      description:
        "A Pipeline to orchestrate and execute machine learning workflows",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [optPipelineId, optCompartmentId3, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description: "Creates a new Pipeline",
          options: [
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate the pipeline with",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the pipeline",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--step-details",
              description: "Array of step details for each step",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the pipeline",
              args: { name: "description" },
            },
            {
              name: "--pipeline-run-retention-period-in-days",
              description: "Retention period in days for pipeline runs",
              args: { name: "integer" },
            },
            optConfigurationDetails,
            optLogConfigurationDetails,
            optInfrastructureConfigurationDetails,
            {
              name: "--storage-mount-configuration-details-list",
              description:
                "The storage mount details to mount to the instance running the pipeline step",
              args: { name: "json" },
            },
            {
              name: "--parameters",
              description: "Parameters used in the pipeline",
              args: { name: "json" },
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
          name: "create-step-artifact",
          description: "Upload the artifact for a step in the pipeline",
          options: [
            optPipelineId,
            optStepName,
            optContentLength,
            {
              name: "--step-artifact",
              description: "The step artifact to upload",
              args: { name: "step-artifact" },
              isRequired: true,
            },
            {
              name: "--content-disposition",
              description:
                "This header is for specifying a filename during upload",
              args: { name: "content-disposition" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Pipeline resource by identifier",
          options: [
            optPipelineId,
            {
              name: "--delete-related-pipeline-runs",
              description:
                "A boolean value to specify whether to delete related PipelineRuns or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--delete-related-job-runs",
              description:
                "A boolean value to specify whether to delete related jobRuns or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
          description: "Gets a Pipeline by identifier",
          options: [optPipelineId, optFromJson],
        },
        {
          name: "get-step-artifact-content",
          description: "Download the artifact for a step in the pipeline",
          options: [optPipelineId, optStepName, optFile, optRange, optFromJson],
        },
        {
          name: "head-step-artifact",
          description: "Get the artifact metadata for a step in the pipeline",
          options: [optPipelineId, optStepName, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Pipelines",
          options: [
            {
              name: "--compartment-id",
              description:
                "<b>Filter</b> results by the OCID of the compartment",
              args: { name: "compartment-id" },
            },
            optProjectId,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "The current state of the Pipeline",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "FAILED",
                  "DELETED",
                ],
              },
            },
            optCreatedBy,
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
          description: "Updates the Pipeline",
          options: [
            optPipelineId,
            optDisplayName,
            {
              name: "--description",
              description: "A short description for the resource",
              args: { name: "description" },
            },
            optConfigurationDetails,
            optInfrastructureConfigurationDetails,
            optLogConfigurationDetails,
            {
              name: "--storage-mount-configuration-details-list",
              description:
                "The storage mount details to mount to the instance running the pipeline step",
              args: { name: "json" },
            },
            {
              name: "--step-details",
              description: "Array of update details for each step",
              args: { name: "json" },
            },
            {
              name: "--parameters",
              description: "Parameters used in the pipeline",
              args: { name: "json" },
            },
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
      name: "compute-target-shape",
      description: "The compute shape used to launch a compute target",
      subcommands: [
        {
          name: "list",
          description: "Lists the valid compute target shapes",
          options: [
            optCompartmentId,
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
      name: "schedule",
      description: "A repeating action",
      subcommands: [
        {
          name: "activate",
          description: "Activate schedule",
          options: [
            optScheduleId,
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
            "Moves a Schedule resource from one compartment identifier to another",
          options: [
            optScheduleId,
            optCompartmentId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Schedule",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate the schedule with",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the schedule",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            { name: "--trigger", args: { name: "json" }, isRequired: true },
            { name: "--action", args: { name: "json" }, isRequired: true },
            {
              name: "--description",
              description: "A short description of the schedule",
              args: { name: "description" },
            },
            { name: "--log-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description: "Deactivate schedule",
          options: [
            optScheduleId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Schedule resource by identifier",
          options: [
            optScheduleId,
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
          description: "Gets a Schedule by identifier",
          options: [optScheduleId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Schedules",
          options: [
            optCompartmentId,
            optProjectId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
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
              description: "Unique Schedule identifier",
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
          name: "update",
          description: "Updates the Schedule",
          options: [
            optScheduleId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A short description of the schedule",
              args: { name: "description" },
            },
            { name: "--trigger", args: { name: "json" } },
            { name: "--action", args: { name: "json" } },
            { name: "--log-details", args: { name: "json" } },
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
      name: "model-version-set",
      description:
        "A model version set to associate different versions of machine learning models",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a modelVersionSet resource into a different compartment",
          options: [
            optModelVersionSetId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the resource should be moved to",
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
          description: "Creates a new modelVersionSet",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the model version set in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description:
                "The OCID of the project to associate with the model version set",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "A user-friendly name for the resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A short description of the model version set",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACTIVE", "DELETING", "DELETED", "FAILED"],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified modelVersionSet",
          options: [
            optModelVersionSetId,
            {
              name: "--is-delete-related-models",
              description: "By default, this parameter is false",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
          description: "Gets the specified model version set information",
          options: [optModelVersionSetId, optFromJson],
        },
        {
          name: "list",
          description: "Lists model version sets in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--category",
              description: "Specifies the type of model version sets to list",
              args: { suggestions: ["USER", "SERVICE"] },
            },
            optId,
            optProjectId,
            optName,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: ["ACTIVE", "DELETING", "DELETED", "FAILED"],
              },
            },
            optCreatedBy,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Specifies the field to sort by",
              args: { suggestions: ["timeCreated", "name", "lifecycleState"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the properties of a model version set",
          options: [
            optModelVersionSetId,
            {
              name: "--description",
              description: "A short description of the model version set",
              args: { name: "description" },
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
                suggestions: ["ACTIVE", "DELETING", "DELETED", "FAILED"],
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
      name: "model-artifact-signature",
      description: "Metadata of the model artifact signature",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a model artifact signature into a different compartment",
          options: [
            optCompartmentId2,
            optModelId,
            optArtifactSignatureId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Create model artifact signature for the specified model",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--kms-key-id",
              description: "The OCID of the key from OCI KMS",
              args: { name: "kms-key-id" },
              isRequired: true,
            },
            {
              name: "--kms-key-version-id",
              description: "The OCID of the key version from OCI KMS",
              args: { name: "kms-key-version-id" },
              isRequired: true,
            },
            {
              name: "--signing-algorithm",
              description: "The algorithm used for signing",
              args: {
                suggestions: [
                  "SHA_224_RSA_PKCS_PSS",
                  "SHA_256_RSA_PKCS_PSS",
                  "SHA_384_RSA_PKCS_PSS",
                  "SHA_512_RSA_PKCS_PSS",
                ],
              },
              isRequired: true,
            },
            optModelId,
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
          name: "delete",
          description: "Deletes the specified artifact signature for a model",
          options: [
            optModelId,
            optArtifactSignatureId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified artifact signature for a model",
          options: [optModelId, optArtifactSignatureId, optFromJson],
        },
        {
          name: "update",
          description:
            "Update model artifact signature for the specified model",
          options: [
            optModelId,
            optArtifactSignatureId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACTIVE", "CREATING", "DELETED", "FAILED"],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "verify",
          description: "Verifies the specified artifact signature for a model",
          options: [
            optModelId,
            optArtifactSignatureId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "List model artifact signatures of a model in the specified compartment",
          options: [
            optModelId,
            optCompartmentId,
            optDisplayName2,
            {
              name: "--digest",
              description: "The digest of the model artifact",
              args: { name: "digest" },
            },
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: ["ACTIVE", "CREATING", "DELETED", "FAILED"],
              },
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
      name: "job",
      description: "A job for training models",
      subcommands: [
        {
          name: "change-compartment",
          description: "Changes a job's compartment",
          options: [optJobId, optCompartmentId2, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description: "Creates a job",
          options: [
            {
              name: "--project-id",
              description: "The OCID of the project to associate the job with",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the job",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription3,
            {
              name: "--job-run-retention-period-in-days",
              description: "Retention period in days for job runs",
              args: { name: "integer" },
            },
            {
              name: "--job-environment-configuration-details",
              args: { name: "json" },
            },
            optJobStorageMountConfigurationDetailsList,
            {
              name: "--job-node-configuration-details",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConfigurationDetails,
            optInfrastructureConfigurationDetails,
            optLogConfigurationDetails,
            optFromJson,
          ],
        },
        {
          name: "create-job-managed-compute-cluster-job-infrastructure-configuration-details",
          description: "Creates a job",
          options: [
            {
              name: "--project-id",
              description: "The OCID of the project to associate the job with",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the job",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--job-infrastructure-configuration-details-compute-target-id",
              description: "The OCID of the compute target",
              args: {
                name: "job-infrastructure-configuration-details-compute-target-id",
              },
              isRequired: true,
            },
            {
              name: "--job-infrastructure-configuration-details-resource-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription3,
            {
              name: "--job-run-retention-period-in-days",
              description: "Retention period in days for job runs",
              args: { name: "integer" },
            },
            { name: "--job-configuration-details", args: { name: "json" } },
            {
              name: "--job-environment-configuration-details",
              args: { name: "json" },
            },
            { name: "--job-log-configuration-details", args: { name: "json" } },
            optJobStorageMountConfigurationDetailsList,
            {
              name: "--job-node-configuration-details",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--job-infrastructure-configuration-details-network-configuration",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-job-artifact",
          description: "Uploads a job artifact",
          options: [
            optJobId,
            optContentLength,
            {
              name: "--job-artifact-file",
              description: "The job artifact to upload",
              args: { name: "job-artifact-file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--content-disposition",
              description:
                "This header is for specifying a filename during upload",
              args: { name: "content-disposition" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a job",
          options: [
            optJobId,
            optIfMatch,
            {
              name: "--delete-related-job-runs",
              description: "Delete all JobRuns associated with this job",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a job",
          options: [optJobId, optFromJson],
        },
        {
          name: "head-job-artifact",
          description: "Gets job artifact metadata",
          options: [optJobId, optFromJson],
        },
        {
          name: "list",
          description: "List jobs in the specified compartment",
          options: [
            optCompartmentId,
            optProjectId,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "<b>Filter</b> results by the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "FAILED",
                  "DELETED",
                ],
              },
            },
            optCreatedBy,
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
          description: "Updates a job",
          options: [
            optJobId,
            optDisplayName,
            optDescription3,
            optJobStorageMountConfigurationDetailsList,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optInfrastructureConfigurationDetails,
            optFromJson,
          ],
        },
        {
          name: "update-job-managed-compute-cluster-job-infrastructure-configuration-details",
          description: "Updates a job",
          options: [
            optJobId,
            {
              name: "--job-infrastructure-configuration-details-compute-target-id",
              description: "The OCID of the compute target",
              args: {
                name: "job-infrastructure-configuration-details-compute-target-id",
              },
              isRequired: true,
            },
            {
              name: "--job-infrastructure-configuration-details-resource-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription3,
            optJobStorageMountConfigurationDetailsList,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--job-infrastructure-configuration-details-network-configuration",
              args: { name: "json" },
            },
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-artifact-content",
          description: "Downloads job artifact content for specified job",
          options: [optJobId, optFile, optRange, optFromJson],
        },
      ],
    },
    {
      name: "ds-private-endpoint",
      description: "Data Science private endpoint",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a private endpoint into a different compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create private endpoint",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDsPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a Data Science private endpoint to be used by a Data Science resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the private endpoint",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description: "The OCID of the subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
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
            optFreeformTags,
            optDefinedTags,
            {
              name: "--nsg-ids",
              description: "An array of network security group OCIDs",
              args: { name: "json" },
            },
            {
              name: "--sub-domain",
              description: "Subdomain for a private endpoint FQDN",
              args: { name: "sub-domain" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ds-resource-type",
              description: "Data Science resource type. required",
              args: { suggestions: ["NOTEBOOK_SESSION", "MODEL_DEPLOYMENT"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a private endpoint using privateEndpointId",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDsPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves an private endpoint using a privateEndpointId",
          options: [optDsPrivateEndpointId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all Data Science private endpoints in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the private endpoint",
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
            {
              name: "--sort-by",
              description: "The field used to sort the results",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optDisplayName2,
            optCreatedBy,
            optAll,
            optPageSize,
            {
              name: "--ds-resource-type",
              description:
                "Resource types in the Data Science service such as notebooks",
              args: { suggestions: ["NOTEBOOK_SESSION", "MODEL_DEPLOYMENT"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a private endpoint using a privateEndpointId",
          options: [
            optFreeformTags,
            optDefinedTags,
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
              name: "--nsg-ids",
              description: "An array of network security group OCIDs",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDsPrivateEndpointId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ml-app",
      description: "Resource representing a definition of an AI/ML use-case",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a MlApplication resource from one compartment identifier to another",
          options: [optCompartmentId3, optIfMatch, optMlAppId, optFromJson],
        },
        {
          name: "create",
          description: "Creates a new MlApplication",
          options: [
            {
              name: "--name",
              description: "The name of MlApplication",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the MlApplication is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Optional description of the ML Application",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a MlApplication resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a MlApplication by identifier",
          options: [optMlAppId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of MlApplications",
          options: [
            optCompartmentId,
            {
              name: "--compartment-id-in-subtree",
              description:
                "If it is true search must include all results from descendant compartments",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources with lifecycleState matching the given lifecycleState",
              args: { suggestions: ["ACTIVE", "FAILED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optMlAppId2,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MlApplication",
          options: [
            {
              name: "--description",
              description: "Optional description of the ML Application",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ml-app-instance",
      description: "Resource representing instance of ML Application",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a MlApplicationInstance resource from one compartment identifier to another",
          options: [
            optCompartmentId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new MlApplicationInstance",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the MlApplicationInstance is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of MlApplicationInstance",
              args: { name: "display-name" },
            },
            { name: "--auth-configuration", args: { name: "json" } },
            optConfiguration,
            {
              name: "--is-enabled",
              description:
                "Defines whether the MlApplicationInstance will be created in ACTIVE (true value) or INACTIVE",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ml-app-id",
              description: "The OCID of ML Application",
              args: { name: "ml-app-id" },
              isRequired: true,
            },
            optMlAppImplementationId2,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a MlApplicationInstance resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a MlApplicationInstance by identifier",
          options: [optMlAppInstanceId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of MlApplicationsInstances",
          options: [
            optCompartmentId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources matching the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optMlAppId2,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MlApplicationInstance",
          options: [
            optConfiguration,
            {
              name: "--is-enabled",
              description:
                "Switches lifecycle state of MlApplicationInstance from INACTIVE to ACTIVE (true value) or vice versa",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceId,
            optMlAppImplementationId2,
            optFromJson,
          ],
        },
        {
          name: "trigger",
          description: "Trigger ML Application Instance flow if possible",
          options: [
            optTriggerName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceId,
            optFromJson,
          ],
        },
        {
          name: "create-with-iam-auth",
          description: "Creates a new MlApplicationInstance",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the MlApplicationInstance is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of MlApplicationInstance",
              args: { name: "display-name" },
            },
            optConfiguration,
            {
              name: "--is-enabled",
              description:
                "Defines whether the MlApplicationInstance will be created in ACTIVE (true value) or INACTIVE",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ml-app-id",
              description: "The OCID of ML Application",
              args: { name: "ml-app-id" },
              isRequired: true,
            },
            optMlAppImplementationId2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ml-app-implementation",
      description:
        "Resource representing solution for AI/ML use-case defined by ML Application",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a MlApplicationImplementation resource from one compartment identifier to another",
          options: [
            optCompartmentId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppImplementationId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new MlApplicationImplementation",
          options: [
            {
              name: "--name",
              description:
                "ML Application Implementation name which is unique for given ML Application",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where ML Application Implementation is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            { name: "--logging", args: { name: "json" } },
            {
              name: "--allowed-migration-destinations",
              description:
                "List of ML Application Implementation OCIDs for which migration from this implementation is allowed",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "DELETING",
                  "UPDATING",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ml-app-id",
              description:
                "The OCID of the ML Application implemented by this ML Application Implementation",
              args: { name: "ml-app-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a MlApplicationImplementation resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppImplementationId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a MlApplicationImplementation by identifier",
          options: [optMlAppImplementationId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of MlApplicationImplementations",
          options: [
            optCompartmentId,
            optName,
            {
              name: "--compartment-id-in-subtree",
              description:
                "If it is true search must include all results from descendant compartments",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources with lifecycleState matching the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "DELETING",
                  "UPDATING",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optMlAppImplementationId3,
            optMlAppId2,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MlApplicationImplementation",
          options: [
            {
              name: "--allowed-migration-destinations",
              description:
                "List of ML Application Implementation OCIDs for which migration from this implementation is allowed",
              args: { name: "json" },
            },
            { name: "--logging", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppImplementationId,
            optFromJson,
          ],
        },
        {
          name: "download-package",
          description:
            "Retrieves last ML Application package uploaded for given ML Application Implementation",
          options: [optFile, optMlAppImplementationId, optFromJson],
        },
        {
          name: "upload-package",
          description: "Upload ML Application Package",
          options: [
            optContentLength,
            optContentDisposition,
            {
              name: "--opc-ml-app-package-args",
              description:
                "List of arguments (Json map - argument name to argument value) for ML Application package",
              args: { name: "opc-ml-app-package-args" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ml-app-package-file",
              description: "The package artifact to upload",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optMlAppImplementationId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ml-app-instance-view",
      description:
        "Representation of ML Application Instance which providers use for instance observability",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a MlApplicationInstanceView resource from one compartment identifier to another",
          options: [
            optCompartmentId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceViewId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a MlApplicationInstanceView by identifier",
          options: [optMlAppInstanceViewId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of MlApplicationInstanceViews",
          options: [
            optCompartmentId,
            optDisplayName2,
            {
              name: "--ml-application-instance-id",
              description: "Unique MlApplicationInstance identifier",
              args: { name: "ml-application-instance-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources matching the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optMlAppId2,
            optMlAppImplementationId3,
            optFromJson,
          ],
        },
        {
          name: "recover",
          description:
            "Provider can initiate recovery of the resource only if MlApplicationInstanceView is in one of the recoverable",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceViewId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MlApplicationInstanceView",
          options: [
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceViewId,
            optFromJson,
          ],
        },
        {
          name: "trigger",
          description: "Trigger ML Application Instance View flow if possible",
          options: [
            optTriggerName,
            {
              name: "--parameters",
              description:
                "Parameters provided for given trigger invocation (they must match predefined schema)",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceViewId,
            optFromJson,
          ],
        },
        {
          name: "disable-trigger",
          description:
            "Disable trigger of given name for given ML Application Instance View flow",
          options: [
            optTriggerName,
            optIfMatch,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceViewId,
            optFromJson,
          ],
        },
        {
          name: "enable-trigger",
          description:
            "Enable trigger of given name for given ML Application Instance View flow",
          options: [
            optTriggerName,
            optIfMatch,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppInstanceViewId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ml-app-implementation-version",
      description:
        "Read-only fully managed snapshot of MlApplicationImplementation taken when MlApplicationImplementation was",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a MlApplicationImplementationVersion by identifier",
          options: [optMlAppImplementationVersionId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of MlApplicationImplementationVersions",
          options: [
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources matching the given lifecycleState",
              args: {
                suggestions: ["CREATING", "ACTIVE", "FAILED", "DELETING"],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optMlAppImplementationId3,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MlApplicationImplementationVersion",
          options: [
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["CREATING", "ACTIVE", "FAILED", "DELETING"],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMlAppImplementationVersionId,
            optFromJson,
          ],
        },
        {
          name: "download-package",
          description:
            "Retrieves ML Application package for MlApplicationImplementationVersion with given id",
          options: [optFile, optMlAppImplementationVersionId, optFromJson],
        },
      ],
    },
  ],
};

export default completionSpec;
