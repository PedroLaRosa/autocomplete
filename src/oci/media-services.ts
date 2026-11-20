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
  args: { suggestions: ["ACTIVE", "NEEDS_ATTENTION", "DELETED"] },
  isRepeatable: true,
};
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment ID of the lock",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optMessage: Fig.Option = {
  name: "--message",
  description: "A message added by the creator of the lock",
  args: { name: "message" },
};
const optTimeCreated: Fig.Option = {
  name: "--time-created",
  description: "When the lock was created",
  args: { name: "datetime" },
};
const optType: Fig.Option = {
  name: "--type",
  description: "Type of the lock",
  args: { suggestions: ["FULL", "DELETE"] },
  isRequired: true,
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
const optLocks: Fig.Option = {
  name: "--locks",
  description: "Locks associated with this resource",
  args: { name: "json" },
};
const optMediaAssetId: Fig.Option = {
  name: "--media-asset-id",
  description: "Unique MediaAsset identifier",
  args: { name: "media-asset-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only the resources that match the entire display name given",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optRelatedResourceId: Fig.Option = {
  name: "--related-resource-id",
  description: "The ID of the Target that is locking this Target",
  args: { name: "related-resource-id" },
};
const optRelatedResourceId2: Fig.Option = {
  name: "--related-resource-id",
  description: "The ID of the resource that is locking this resource",
  args: { name: "related-resource-id" },
};
const optStreamDistributionChannelId: Fig.Option = {
  name: "--stream-distribution-channel-id",
  description: "Unique Stream Distribution Channel path identifier",
  args: { name: "stream-distribution-channel-id" },
  isRequired: true,
};
const optMediaWorkflowConfigurationId: Fig.Option = {
  name: "--media-workflow-configuration-id",
  description: "Unique MediaWorkflowConfiguration identifier",
  args: { name: "media-workflow-configuration-id" },
  isRequired: true,
};
const optMediaWorkflowId: Fig.Option = {
  name: "--media-workflow-id",
  description: "Unique MediaWorkflow identifier",
  args: { name: "media-workflow-id" },
  isRequired: true,
};
const optMediaWorkflowJobId: Fig.Option = {
  name: "--media-workflow-job-id",
  description: "Unique MediaWorkflowJob identifier",
  args: { name: "media-workflow-job-id" },
  isRequired: true,
};
const optStreamCdnConfigId: Fig.Option = {
  name: "--stream-cdn-config-id",
  description: "Unique StreamCdnConfig identifier",
  args: { name: "stream-cdn-config-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "REJECTED",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only the resources with lifecycleState matching the given lifecycleState",
  args: { suggestions: ["ACTIVE", "NEEDS_ATTENTION", "DELETED"] },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optStreamPackagingConfigId: Fig.Option = {
  name: "--stream-packaging-config-id",
  description: "Unique Stream Packaging Configuration path identifier",
  args: { name: "stream-packaging-config-id" },
  isRequired: true,
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optWaitForState4: Fig.Option = {
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
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only the resources with their system defined, unique name matching the given name",
  args: { name: "name" },
};
const completionSpec: Fig.Spec = {
  name: "media-services",
  description: "Media Services",
  subcommands: [
    {
      name: "stream-packaging-config",
      description:
        "A stream packaging configuration for a Distribution Channel",
      subcommands: [
        {
          name: "add",
          description: "Add a lock to a StreamPackagingConfig",
          options: [
            optType,
            optCompartmentId,
            optStreamPackagingConfigId,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "The Stream Packaging Configuration lifecycleState will change to DELETED",
          options: [
            optStreamPackagingConfigId,
            optIsLockOverride,
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
          description: "Gets a Stream Packaging Configuration by identifier",
          options: [optStreamPackagingConfigId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Stream Packaging Configurations",
          options: [
            {
              name: "--distribution-channel-id",
              description: "Unique Stream Distribution Channel identifier",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            {
              name: "--stream-packaging-config-id",
              description: "Unique Stream Packaging Configuration identifier",
              args: { name: "stream-packaging-config-id" },
            },
            optLifecycleState,
            optDisplayName,
            optSortOrder,
            optSortBy,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock from a StreamPackagingConfig",
          options: [
            optType,
            optCompartmentId,
            optStreamPackagingConfigId,
            optRelatedResourceId2,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Stream Packaging Configuration",
          options: [
            optStreamPackagingConfigId,
            {
              name: "--display-name",
              description: "The name of the stream Packaging Configuration",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-stream-packaging-config-encryption-aes128",
          description: "Creates a new Packaging Configuration",
          options: [
            {
              name: "--distribution-channel-id",
              description:
                "Unique identifier of the Distribution Channel that this stream packaging configuration belongs to",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the stream Packaging Configuration",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--stream-packaging-format",
              description: "The output format for the package",
              args: { suggestions: ["HLS", "DASH"] },
              isRequired: true,
            },
            {
              name: "--segment-time-in-seconds",
              description: "The duration in seconds for each fragment",
              args: { name: "integer" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--encryption-kms-key-id",
              description:
                "The identifier of the customer managed Vault KMS symmetric encryption key (null if Oracle managed)",
              args: { name: "encryption-kms-key-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-stream-packaging-config-encryption-none",
          description: "Creates a new Packaging Configuration",
          options: [
            {
              name: "--distribution-channel-id",
              description:
                "Unique identifier of the Distribution Channel that this stream packaging configuration belongs to",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the stream Packaging Configuration",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--stream-packaging-format",
              description: "The output format for the package",
              args: { suggestions: ["HLS", "DASH"] },
              isRequired: true,
            },
            {
              name: "--segment-time-in-seconds",
              description: "The duration in seconds for each fragment",
              args: { name: "integer" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "media-asset",
      description:
        "Represents the metadata associated with an asset that has been either produced by or registered with Media",
      subcommands: [
        {
          name: "add",
          description: "Add a lock to an MediaAsset",
          options: [
            optType,
            optCompartmentId,
            optMediaAssetId,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a MediaAsset resource from one compartment identifier to another",
          options: [
            optMediaAssetId,
            optCompartmentId3,
            optIsLockOverride,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new MediaAsset",
          options: [
            optCompartmentId3,
            {
              name: "--type",
              description: "The type of the media asset",
              args: {
                suggestions: [
                  "AUDIO",
                  "VIDEO",
                  "PLAYLIST",
                  "IMAGE",
                  "CAPTION_FILE",
                  "UNKNOWN",
                ],
              },
              isRequired: true,
            },
            {
              name: "--source-media-workflow-id",
              description:
                "The ID of the MediaWorkflow used to produce this asset",
              args: { name: "source-media-workflow-id" },
            },
            {
              name: "--media-workflow-job-id",
              description:
                "The ID of the MediaWorkflowJob used to produce this asset",
              args: { name: "media-workflow-job-id" },
            },
            {
              name: "--source-media-workflow-version",
              description:
                "The version of the MediaWorkflow used to produce this asset",
              args: { name: "integer" },
            },
            {
              name: "--display-name",
              description: "Display name for the Media Asset",
              args: { name: "display-name" },
            },
            {
              name: "--parent-media-asset-id",
              description:
                "The ID of the parent asset from which this asset is derived",
              args: { name: "parent-media-asset-id" },
            },
            {
              name: "--master-media-asset-id",
              description:
                "The ID of the senior most asset from which this asset is derived",
              args: { name: "master-media-asset-id" },
            },
            {
              name: "--bucket-name",
              description:
                "The name of the object storage bucket where this asset is located",
              args: { name: "bucket-name" },
            },
            {
              name: "--namespace-name",
              description:
                "The object storage namespace where this asset is located",
              args: { name: "namespace-name" },
            },
            {
              name: "--object-name",
              description:
                "The object storage object name that identifies this asset",
              args: { name: "object-name" },
            },
            {
              name: "--object-etag",
              description: "ETag of the underlying object storage object",
              args: { name: "object-etag" },
            },
            {
              name: "--metadata",
              description: "List of Metadata",
              args: { name: "json" },
            },
            {
              name: "--segment-range-start-index",
              description: "The start index for video segment files",
              args: { name: "integer" },
            },
            {
              name: "--segment-range-end-index",
              description: "The end index for video segment files",
              args: { name: "integer" },
            },
            {
              name: "--media-asset-tags",
              description: "List of tags for the MediaAsset",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a MediaAsset resource by identifier",
          options: [
            optMediaAssetId,
            optIsLockOverride,
            optIfMatch,
            {
              name: "--delete-mode",
              description:
                "DeleteMode decides whether to delete all the immediate children or all assets with the asset's ID as their",
              args: { suggestions: ["DELETE_CHILDREN", "DELETE_DERIVATIONS"] },
            },
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a MediaAsset by identifier",
          options: [optMediaAssetId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of MediaAssetSummary",
          options: [
            optCompartmentId2,
            optDisplayName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the resources with lifecycleState matching the given lifecycleState",
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
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "compartmentId",
                  "type",
                  "lifecycleState",
                  "parentMediaAssetId",
                  "masterMediaAssetId",
                  "displayName",
                  "timeCreated",
                  "timeUpdated",
                ],
              },
            },
            {
              name: "--distribution-channel-id",
              description: "Unique DistributionChannel identifier",
              args: { name: "distribution-channel-id" },
            },
            {
              name: "--parent-media-asset-id",
              description:
                "Unique MediaAsset identifier of the asset from which this asset is derived",
              args: { name: "parent-media-asset-id" },
            },
            {
              name: "--master-media-asset-id",
              description:
                "Unique MediaAsset identifier of the first asset upload",
              args: { name: "master-media-asset-id" },
            },
            {
              name: "--type",
              description: "Filter MediaAsset by the asset type",
              args: {
                suggestions: [
                  "AUDIO",
                  "VIDEO",
                  "PLAYLIST",
                  "IMAGE",
                  "CAPTION_FILE",
                  "UNKNOWN",
                ],
              },
            },
            {
              name: "--bucket-name",
              description:
                "Filter MediaAsset by the bucket where the object is stored",
              args: { name: "bucket-name" },
            },
            {
              name: "--object-name",
              description:
                "Filter MediaAsset by the name of the object in object storage",
              args: { name: "object-name" },
            },
            {
              name: "--media-workflow-job-id",
              description:
                "The ID of the MediaWorkflowJob used to produce this asset",
              args: { name: "media-workflow-job-id" },
            },
            {
              name: "--source-media-workflow-id",
              description:
                "The ID of the MediaWorkflow used to produce this asset",
              args: { name: "source-media-workflow-id" },
            },
            {
              name: "--source-media-workflow-version",
              description:
                "The version of the MediaWorkflow used to produce this asset",
              args: { name: "integer" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock to an MediaAsset",
          options: [
            optType,
            optCompartmentId,
            optMediaAssetId,
            optRelatedResourceId2,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MediaAsset",
          options: [
            optMediaAssetId,
            {
              name: "--display-name",
              description: "Display name for the Media Asset",
              args: { name: "display-name" },
            },
            {
              name: "--type",
              description: "The type of the media asset",
              args: {
                suggestions: [
                  "AUDIO",
                  "VIDEO",
                  "PLAYLIST",
                  "IMAGE",
                  "CAPTION_FILE",
                  "UNKNOWN",
                ],
              },
            },
            {
              name: "--parent-media-asset-id",
              description:
                "The ID of the parent asset from which this asset is derived",
              args: { name: "parent-media-asset-id" },
            },
            {
              name: "--master-media-asset-id",
              description:
                "The ID of the senior most asset from which this asset is derived",
              args: { name: "master-media-asset-id" },
            },
            {
              name: "--metadata",
              description: "List of Metadata",
              args: { name: "json" },
            },
            {
              name: "--media-asset-tags",
              description: "List of tags for the MediaAsset",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "media-workflow-job",
      description:
        "A MediaWorkflowJob represents a run of a MediaWorkflow for a specific set of parameters and configurations",
      subcommands: [
        {
          name: "add",
          description: "Add a lock to a MediaWorkflowJob",
          options: [
            optType,
            optCompartmentId,
            optMediaWorkflowJobId,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a MediaWorkflowJob resource from one compartment identifier to another",
          options: [
            optMediaWorkflowJobId,
            optCompartmentId4,
            optIsLockOverride,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "This is an asynchronous operation",
          options: [
            optMediaWorkflowJobId,
            optIsLockOverride,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the MediaWorkflowJob",
          options: [optMediaWorkflowJobId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the MediaWorkflowJobs",
          options: [
            optCompartmentId2,
            {
              name: "--id",
              description: "Unique MediaWorkflowJob identifier",
              args: { name: "id" },
            },
            {
              name: "--media-workflow-id",
              description: "Unique MediaWorkflow identifier",
              args: { name: "media-workflow-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the resources with lifecycleState matching the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "REJECTED",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The parameter sort by",
              args: {
                suggestions: ["timeCreated", "workflowId", "lifecycleState"],
              },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock from a MediaWorkflowJob",
          options: [
            optType,
            optCompartmentId,
            optMediaWorkflowJobId,
            optRelatedResourceId2,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MediaWorkflowJob",
          options: [
            optMediaWorkflowJobId,
            {
              name: "--display-name",
              description: "Name for the MediaWorkflowJob",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-media-workflow-job-by-name",
          description:
            "Run the MediaWorkflow according to the given mediaWorkflow definition and configuration",
          options: [
            {
              name: "--compartment-id",
              description:
                "ID of the compartment in which the job should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--media-workflow-configuration-ids",
              description:
                "Configurations to be applied to this run of the workflow",
              args: { name: "json" },
            },
            {
              name: "--display-name",
              description: "Name of the Media Workflow Job",
              args: { name: "display-name" },
            },
            {
              name: "--parameters",
              description:
                "Parameters that override parameters specified in MediaWorkflowTaskDeclarations, the MediaWorkflow",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--media-workflow-name",
              description:
                "Name of the system MediaWorkflow that should be run",
              args: { name: "media-workflow-name" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-media-workflow-job-by-id",
          description:
            "Run the MediaWorkflow according to the given mediaWorkflow definition and configuration",
          options: [
            {
              name: "--compartment-id",
              description:
                "ID of the compartment in which the job should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--media-workflow-configuration-ids",
              description:
                "Configurations to be applied to this run of the workflow",
              args: { name: "json" },
            },
            {
              name: "--display-name",
              description: "Name of the Media Workflow Job",
              args: { name: "display-name" },
            },
            {
              name: "--parameters",
              description:
                "Parameters that override parameters specified in MediaWorkflowTaskDeclarations, the MediaWorkflow",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--media-workflow-id",
              description: "OCID of the MediaWorkflow that should be run",
              args: { name: "media-workflow-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "stream-cdn-config",
      description: "Configuration used for integrating with a CDN",
      subcommands: [
        {
          name: "add",
          description: "Add a lock to a StreamCdnConfig",
          options: [
            optType,
            optCompartmentId,
            optStreamCdnConfigId,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "The StreamCdnConfig lifecycleState will change to DELETED",
          options: [
            optStreamCdnConfigId,
            optIsLockOverride,
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
          description: "Gets a StreamCdnConfig by identifier",
          options: [optStreamCdnConfigId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the StreamCdnConfig",
          options: [
            {
              name: "--distribution-channel-id",
              description:
                "The Stream Distribution Channel identifier this CdnConfig belongs to",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            {
              name: "--id",
              description: "Unique StreamCdnConfig identifier",
              args: { name: "id" },
            },
            optLifecycleState,
            optDisplayName,
            optSortOrder,
            optSortBy,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock from a StreamCdnConfig",
          options: [
            optType,
            optCompartmentId,
            optStreamCdnConfigId,
            optRelatedResourceId2,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-akamai-stream-cdn-config",
          description: "Creates a new CDN Configuration",
          options: [
            {
              name: "--display-name",
              description:
                "CDN Config display name, which can be renamed and is not necessarily unique",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--distribution-channel-id",
              description: "Distribution Channel Identifier",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "Whether publishing to CDN is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--config-origin-auth-sign-type",
              description: "The type of data used to compute the signature",
              args: { suggestions: ["ForwardURL"] },
            },
            {
              name: "--config-origin-auth-sign-encryption",
              description:
                "The type of encryption used to compute the signature",
              args: { suggestions: ["SHA256-HMAC"] },
            },
            {
              name: "--config-origin-auth-secret-key-a",
              description:
                "The shared secret key A, two for errorless key rotation",
              args: { name: "config-origin-auth-secret-key-a" },
            },
            {
              name: "--config-origin-auth-secret-key-nonce-a",
              description:
                "Nonce identifier for originAuthSecretKeyA (used to determine key used to sign)",
              args: { name: "config-origin-auth-secret-key-nonce-a" },
            },
            {
              name: "--config-origin-auth-secret-key-b",
              description:
                "The shared secret key B, two for errorless key rotation",
              args: { name: "config-origin-auth-secret-key-b" },
            },
            {
              name: "--config-origin-auth-secret-key-nonce-b",
              description:
                "Nonce identifier for originAuthSecretKeyB (used to determine key used to sign)",
              args: { name: "config-origin-auth-secret-key-nonce-b" },
            },
            {
              name: "--config-edge-hostname",
              description:
                "The hostname of the CDN edge server to use when building CDN URLs",
              args: { name: "config-edge-hostname" },
            },
            {
              name: "--config-edge-path-prefix",
              description: "The path to prepend when building CDN URLs",
              args: { name: "config-edge-path-prefix" },
            },
            {
              name: "--config-is-edge-token-auth",
              description:
                "Whether token authentication should be used at the CDN edge",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--config-edge-token-key",
              description:
                "The encryption key to use for edge token authentication",
              args: { name: "config-edge-token-key" },
            },
            {
              name: "--config-edge-token-salt",
              description: "Salt to use when encrypting authentication token",
              args: { name: "config-edge-token-salt" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-edge-stream-cdn-config",
          description: "Creates a new CDN Configuration",
          options: [
            {
              name: "--display-name",
              description:
                "CDN Config display name, which can be renamed and is not necessarily unique",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--distribution-channel-id",
              description: "Distribution Channel Identifier",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "Whether publishing to CDN is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-akamai-stream-cdn-config",
          description: "Updates the StreamCdnConfig",
          options: [
            optStreamCdnConfigId,
            {
              name: "--display-name",
              description: "CDN Config display name",
              args: { name: "display-name" },
            },
            {
              name: "--is-enabled",
              description: "Whether CDN is enabled for publishing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
            optIfMatch,
            {
              name: "--config-origin-auth-sign-type",
              description: "The type of data used to compute the signature",
              args: { suggestions: ["ForwardURL"] },
            },
            {
              name: "--config-origin-auth-sign-encryption",
              description:
                "The type of encryption used to compute the signature",
              args: { suggestions: ["SHA256-HMAC"] },
            },
            {
              name: "--config-origin-auth-secret-key-a",
              description:
                "The shared secret key A, two for errorless key rotation",
              args: { name: "config-origin-auth-secret-key-a" },
            },
            {
              name: "--config-origin-auth-secret-key-nonce-a",
              description:
                "Nonce identifier for originAuthSecretKeyA (used to determine key used to sign)",
              args: { name: "config-origin-auth-secret-key-nonce-a" },
            },
            {
              name: "--config-origin-auth-secret-key-b",
              description:
                "The shared secret key B, two for errorless key rotation",
              args: { name: "config-origin-auth-secret-key-b" },
            },
            {
              name: "--config-origin-auth-secret-key-nonce-b",
              description:
                "Nonce identifier for originAuthSecretKeyB (used to determine key used to sign)",
              args: { name: "config-origin-auth-secret-key-nonce-b" },
            },
            {
              name: "--config-edge-hostname",
              description:
                "The hostname of the CDN edge server to use when building CDN URLs",
              args: { name: "config-edge-hostname" },
            },
            {
              name: "--config-edge-path-prefix",
              description: "The path to prepend when building CDN URLs",
              args: { name: "config-edge-path-prefix" },
            },
            {
              name: "--config-is-edge-token-auth",
              description:
                "Whether token authentication should be used at the CDN edge",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--config-edge-token-key",
              description:
                "The encryption key to use for edge token authentication",
              args: { name: "config-edge-token-key" },
            },
            {
              name: "--config-edge-token-salt",
              description: "Salt to use when encrypting authentication token",
              args: { name: "config-edge-token-salt" },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-edge-stream-cdn-config",
          description: "Updates the StreamCdnConfig",
          options: [
            optStreamCdnConfigId,
            {
              name: "--display-name",
              description: "CDN Config display name",
              args: { name: "display-name" },
            },
            {
              name: "--is-enabled",
              description: "Whether CDN is enabled for publishing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
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
      name: "stream-distribution-channel",
      description: "Channel used for delivering video streams to the end-users",
      subcommands: [
        {
          name: "add",
          description: "Add a lock to a StreamDistributionChannel",
          options: [
            optType,
            optCompartmentId,
            optStreamDistributionChannelId,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
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
            "Moves a Stream Distribution Channel resource from one compartment identifier to another",
          options: [
            optStreamDistributionChannelId,
            optCompartmentId4,
            optIsLockOverride,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Stream Distribution Channel",
          options: [
            {
              name: "--display-name",
              description: "Stream Distribution Channel display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId3,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "The Stream Distribution Channel lifecycleState will change to DELETED",
          options: [
            optStreamDistributionChannelId,
            optIsLockOverride,
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
          description: "Gets a Stream Distribution Channel by identifier",
          options: [optStreamDistributionChannelId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Stream Distribution Channels",
          options: [
            optCompartmentId2,
            {
              name: "--id",
              description: "Unique Stream Distribution Channel identifier",
              args: { name: "id" },
            },
            optLifecycleState,
            optDisplayName,
            optSortOrder,
            optSortBy,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock to a StreamDistributionChannel",
          options: [
            optType,
            optCompartmentId,
            optStreamDistributionChannelId,
            optRelatedResourceId2,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Stream Distribution Channel",
          options: [
            optStreamDistributionChannelId,
            {
              name: "--display-name",
              description: "Stream Distribution channel display name",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "ingest",
          description: "Ingests an Asset into a Distribution Channel",
          options: [
            optStreamDistributionChannelId,
            {
              name: "--media-asset-id",
              description:
                "The Media Asset ID to ingest into the Distribution Channel",
              args: { name: "media-asset-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The compartment ID where the Ingest Workflow Job will be run",
              args: { name: "compartment-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "media-asset-distribution-channel-attachment",
      description:
        "Attachment between MediaAsset and streaming DistributionChannel",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes a MediaAsset from DistributionChannel by identifiers",
          options: [
            optMediaAssetId,
            {
              name: "--distribution-channel-id",
              description: "Unique DistributionChannel identifier",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            optIsLockOverride,
            optIfMatch,
            optForce,
            {
              name: "--madc-attachment-version",
              description: "Version of the attachment",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a MediaAssetDistributionChannelAttachment for a MediaAsset by identifiers",
          options: [
            optMediaAssetId,
            {
              name: "--distribution-channel-id",
              description: "Unique DistributionChannel identifier",
              args: { name: "distribution-channel-id" },
              isRequired: true,
            },
            {
              name: "--madc-attachment-version",
              description: "Version of the attachment",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the MediaAssetDistributionChannelAttachments for a MediaAsset by identifier",
          options: [
            optMediaAssetId,
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "mediaAssetId",
                  "distributionChannelId",
                  "displayName",
                  "version",
                ],
              },
            },
            {
              name: "--distribution-channel-id",
              description: "Unique DistributionChannel identifier",
              args: { name: "distribution-channel-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "media-workflow-configuration",
      description:
        "Resusable set of values that can be referenced either in a MediaWorkflow or when running a MediaWorkflowJob",
      subcommands: [
        {
          name: "add",
          description: "Add a lock to a MediaWorkflowConfiguration",
          options: [
            optType,
            optCompartmentId,
            optMediaWorkflowConfigurationId,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a MediaWorkflowConfiguration resource from one compartment identifier to another",
          options: [
            optMediaWorkflowConfigurationId,
            optCompartmentId4,
            optIsLockOverride,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new MediaWorkflowConfiguration",
          options: [
            {
              name: "--display-name",
              description: "MediaWorkflowConfiguration identifier",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--parameters",
              description:
                "Reuseable parameter values encoded as a JSON; the top and second level JSON elements are objects",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId3,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a MediaWorkflowConfiguration resource by identifier",
          options: [
            optMediaWorkflowConfigurationId,
            optIsLockOverride,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a MediaWorkflowConfiguration by identifier",
          options: [optMediaWorkflowConfigurationId, optFromJson],
        },
        {
          name: "remove",
          description: "Remove a lock from a MediaWorkflowConfiguration",
          options: [
            optType,
            optCompartmentId,
            optMediaWorkflowConfigurationId,
            optRelatedResourceId2,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MediaWorkflowConfiguration",
          options: [
            optMediaWorkflowConfigurationId,
            {
              name: "--display-name",
              description: "Name for the MediaWorkflowConfiguration",
              args: { name: "display-name" },
            },
            {
              name: "--parameters",
              description:
                "Reuseable parameter values encoded as a JSON; the top and second level JSON elements are objects",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of MediaWorkflowConfigurations",
          options: [
            optCompartmentId2,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description: "Unique MediaWorkflowConfiguration identifier",
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
      name: "media-workflow",
      description:
        "Configurable workflows that define the series of tasks that will be used to process video files",
      subcommands: [
        {
          name: "add",
          description: "Add a lock to a MediaWorkflow",
          options: [
            optType,
            optCompartmentId,
            optMediaWorkflowId,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
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
            "Moves a MediaWorkflow resource from one compartment identifier to another",
          options: [
            optMediaWorkflowId,
            optCompartmentId4,
            optIsLockOverride,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new MediaWorkflow",
          options: [
            {
              name: "--display-name",
              description: "Name for the MediaWorkflow",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId3,
            {
              name: "--tasks",
              description: "The processing to be done in this workflow",
              args: { name: "json" },
            },
            {
              name: "--media-workflow-configuration-ids",
              description:
                "Configurations to be applied to all the jobs for this workflow",
              args: { name: "json" },
            },
            {
              name: "--parameters",
              description:
                "JSON object representing named parameters and their default values that can be referenced throughout this",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "The MediaWorkflow lifecycleState will change to DELETED",
          options: [
            optMediaWorkflowId,
            optIsLockOverride,
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
          description: "Gets a MediaWorkflow by identifier",
          options: [optMediaWorkflowId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the MediaWorkflows",
          options: [
            optCompartmentId2,
            {
              name: "--id",
              description: "Unique MediaWorkflow identifier",
              args: { name: "id" },
            },
            optLifecycleState,
            optDisplayName,
            optSortOrder,
            optSortBy,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-system",
          description:
            "Lists the SystemMediaWorkflows that can be used to run a job by name or as a template to create",
          options: [
            optCompartmentId2,
            optName,
            optSortOrder,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock from a MediaWorkflow",
          options: [
            optType,
            optCompartmentId,
            optMediaWorkflowId,
            optRelatedResourceId2,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the MediaWorkflow",
          options: [
            optMediaWorkflowId,
            {
              name: "--display-name",
              description: "Name for the MediaWorkflow",
              args: { name: "display-name" },
            },
            {
              name: "--tasks",
              description: "The processing to be done in this workflow",
              args: { name: "json" },
            },
            {
              name: "--media-workflow-configuration-ids",
              description:
                "Configurations to be applied to all jobs for this workflow",
              args: { name: "json" },
            },
            {
              name: "--parameters",
              description:
                "JSON object representing named parameters and their default values that can be referenced throughout this",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
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
      name: "media-workflow-task-declaration",
      description:
        "Results of the ListMediaWorkflowTaskDeclaration operation, a list of MediaWorkflowTaskDeclarations",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of MediaWorkflowTaskDeclarations",
          options: [
            optCompartmentId2,
            optName,
            {
              name: "--version-parameterconflict",
              description:
                "A filter to select MediaWorkflowTaskDeclaration by version",
              args: { name: "integer" },
            },
            {
              name: "--is-current",
              description:
                "A filter to only select the newest version for each MediaWorkflowTaskDeclaration name",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "version"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-media-workflow-task-declarations",
          description: "Returns a list of MediaWorkflowTaskDeclarations",
          options: [
            optCompartmentId2,
            optName,
            {
              name: "--is-current",
              description:
                "A filter to only select the newest version for each MediaWorkflowTaskDeclaration name",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "version"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            {
              name: "--task-declaration-version",
              description:
                "A filter to select MediaWorkflowTaskDeclaration by version",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "media-stream",
      description:
        "Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media",
      subcommands: [
        {
          name: "stream-distribution-channel",
          description:
            "Channel used for delivering video streams to the end-users",
          subcommands: [
            {
              name: "generate-playlist",
              description:
                "Gets the playlist content for the specified Packaging Configuration and Media Asset combination",
              options: [
                {
                  name: "--stream-packaging-config-id",
                  description:
                    "Unique Stream Packaging Configuration identifier",
                  args: { name: "stream-packaging-config-id" },
                  isRequired: true,
                },
                optMediaAssetId,
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                {
                  name: "--token",
                  description: "Streaming session authentication token",
                  args: { name: "token" },
                },
                optFromJson,
              ],
            },
            {
              name: "generate-session-token",
              description: "Generate a new streaming session token",
              options: [
                {
                  name: "--scopes",
                  description: "Array of scopes the token can act upon",
                  args: { suggestions: ["PLAYLIST", "EDGE"] },
                  isRequired: true,
                  isRepeatable: true,
                },
                {
                  name: "--packaging-config-id",
                  description:
                    "The packaging config resource identifier used to limit the scope of the token",
                  args: { name: "packaging-config-id" },
                  isRequired: true,
                },
                {
                  name: "--time-expires",
                  description: "Token expiry time",
                  args: { name: "datetime" },
                },
                {
                  name: "--asset-ids",
                  description:
                    "Array of asset resource Ids used to limit the scope of the token",
                  args: { name: "json" },
                },
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
