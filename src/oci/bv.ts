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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "RESTORING",
      "AVAILABLE",
      "TERMINATING",
      "TERMINATED",
      "FAULTY",
    ],
  },
  isRepeatable: true,
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
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optVpusPerGb: Fig.Option = {
  name: "--vpus-per-gb",
  description:
    "The number of volume performance units (VPUs) that will be applied to this volume per GB",
  args: { name: "integer" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "AVAILABLE",
      "TERMINATING",
      "TERMINATED",
      "FAULTY",
      "REQUEST_RECEIVED",
    ],
  },
  isRepeatable: true,
};
const optAutotunePolicies: Fig.Option = {
  name: "--autotune-policies",
  description: "The list of autotune policies to be enabled for this volume",
  args: { name: "json" },
};
const optBootVolumeId: Fig.Option = {
  name: "--boot-volume-id",
  description: "The OCID of the boot volume",
  args: { name: "boot-volume-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optVolumeId: Fig.Option = {
  name: "--volume-id",
  description: "The OCID of the volume",
  args: { name: "volume-id" },
  isRequired: true,
};
const optClusterPlacementGroupId: Fig.Option = {
  name: "--cluster-placement-group-id",
  description:
    "The clusterPlacementGroup Id of the volume for volume placement",
  args: { name: "cluster-placement-group-id" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optIsIndefiniteRetentionEnabled: Fig.Option = {
  name: "--is-indefinite-retention-enabled",
  description:
    "Feature that preserves backup data from modification or deletion to ensure it remains available for legal",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsPreventDeletionEnabled: Fig.Option = {
  name: "--is-prevent-deletion-enabled",
  description:
    "Prevent backups from being deleted during the configured retention period",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsRetentionLockEnabled: Fig.Option = {
  name: "--is-retention-lock-enabled",
  description:
    "Feature that prevents deletion or alteration of backup data for a specified period to ensure data protection",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optRetentionPeriod: Fig.Option = {
  name: "--retention-period",
  args: { name: "json" },
};
const optSizeInGbs: Fig.Option = {
  name: "--size-in-gbs",
  description: "The size of the volume in GBs",
  args: { name: "integer" },
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description: "The name of the availability domain",
  args: { name: "availability-domain" },
};
const optBootVolumeBackupId: Fig.Option = {
  name: "--boot-volume-backup-id",
  description: "The OCID of the boot volume backup",
  args: { name: "boot-volume-backup-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
};
const optVolumeBackupId: Fig.Option = {
  name: "--volume-backup-id",
  description: "The OCID of the volume backup",
  args: { name: "volume-backup-id" },
  isRequired: true,
};
const optVolumeGroupBackupId: Fig.Option = {
  name: "--volume-group-backup-id",
  description:
    "The Oracle Cloud ID (OCID) that uniquely identifies the volume group backup",
  args: { name: "volume-group-backup-id" },
  isRequired: true,
};
const optAvailabilityDomain2: Fig.Option = {
  name: "--availability-domain",
  description: "The availability domain of the volume",
  args: { name: "availability-domain" },
};
const optIsAutoTuneEnabled: Fig.Option = {
  name: "--is-auto-tune-enabled",
  description:
    "Specifies whether the auto-tune performance is enabled for this boot volume",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsAutoTuneEnabled2: Fig.Option = {
  name: "--is-auto-tune-enabled",
  description:
    "Specifies whether the auto-tune performance is enabled for this volume",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsReservationsEnabled: Fig.Option = {
  name: "--is-reservations-enabled",
  description:
    "When set to true, enables SCSI Persistent Reservation (SCSI PR) for the volume",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optKmsKeyId: Fig.Option = {
  name: "--kms-key-id",
  description:
    "The OCID of the Vault service key which is the master encryption key for the volume backup",
  args: { name: "kms-key-id" },
};
const optVolumeGroupId: Fig.Option = {
  name: "--volume-group-id",
  description:
    "The Oracle Cloud ID (OCID) that uniquely identifies the volume group",
  args: { name: "volume-group-id" },
  isRequired: true,
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "COMMITTED",
      "AVAILABLE",
      "TERMINATING",
      "TERMINATED",
      "FAULTY",
      "REQUEST_RECEIVED",
    ],
  },
  isRepeatable: true,
};
const optBackupPolicyId: Fig.Option = {
  name: "--backup-policy-id",
  description:
    "If provided, specifies the ID of the boot volume backup policy to assign to the newly created boot volume",
  args: { name: "backup-policy-id" },
};
const optBackupPolicyId2: Fig.Option = {
  name: "--backup-policy-id",
  description:
    "If provided, specifies the ID of the volume backup policy to assign to the newly created volume",
  args: { name: "backup-policy-id" },
};
const optBlockVolumeReplicas: Fig.Option = {
  name: "--block-volume-replicas",
  description:
    "The list of block volume replicas to be enabled for this volume in the specified destination availability",
  args: { name: "json" },
};
const optBootVolumeReplicas: Fig.Option = {
  name: "--boot-volume-replicas",
  description:
    "The list of boot volume replicas to be enabled for this boot volume in the specified destination availability",
  args: { name: "json" },
};
const optDestinationRegion: Fig.Option = {
  name: "--destination-region",
  description: "The name of the destination region",
  args: { name: "destination-region" },
  isRequired: true,
};
const optKmsKeyId2: Fig.Option = {
  name: "--kms-key-id",
  description:
    "The OCID of the Vault service key in the destination region which will be the master encryption key for",
  args: { name: "kms-key-id" },
};
const optKmsKeyId3: Fig.Option = {
  name: "--kms-key-id",
  description:
    "The OCID of the Vault service key to assign as the master encryption key for the boot volume",
  args: { name: "kms-key-id" },
};
const optKmsKeyId4: Fig.Option = {
  name: "--kms-key-id",
  description:
    "The OCID of the Vault service key to assign as the master encryption key for the volume",
  args: { name: "kms-key-id" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to only return resources that match the given lifecycle state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "ACTIVATING",
      "TERMINATING",
      "TERMINATED",
      "FAULTY",
    ],
  },
};
const optPolicyId: Fig.Option = {
  name: "--policy-id",
  description: "The OCID of the volume backup policy",
  args: { name: "policy-id" },
  isRequired: true,
};
const optSizeInMbs: Fig.Option = {
  name: "--size-in-mbs",
  description: "The size of the volume in MBs",
  args: { name: "integer" },
};
const optType: Fig.Option = {
  name: "--type",
  description: "The type of backup to create",
  args: { suggestions: ["FULL", "INCREMENTAL"] },
};
const optVolumeBackupId2: Fig.Option = {
  name: "--volume-backup-id",
  description:
    "The OCID of the volume backup from which the data should be restored on the newly created volume",
  args: { name: "volume-backup-id" },
};
const optVolumeGroupId2: Fig.Option = {
  name: "--volume-group-id",
  description: "The OCID of the volume group",
  args: { name: "volume-group-id" },
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "TERMINATING",
      "TERMINATED",
      "FAULTY",
      "UPDATE_PENDING",
    ],
  },
  isRepeatable: true,
};
const optXrcKmsKeyId: Fig.Option = {
  name: "--xrc-kms-key-id",
  description:
    "The OCID of the Vault service key which is the master encryption key for the block volume cross region",
  args: { name: "xrc-kms-key-id" },
};
const optXrcKmsKeyId2: Fig.Option = {
  name: "--xrc-kms-key-id",
  description:
    "The OCID of the Vault service key which is the master encryption key for the boot volume cross region",
  args: { name: "xrc-kms-key-id" },
};
const completionSpec: Fig.Spec = {
  name: "bv",
  description: "Block Volume Service",
  subcommands: [
    {
      name: "boot-volume-kms-key",
      description:
        "The Vault service master encryption key associated with this volume",
      subcommands: [
        {
          name: "delete",
          description:
            "Removes the specified boot volume's assigned Vault Service encryption key",
          options: [optBootVolumeId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description:
            "Gets the Vault service encryption key assigned to the specified boot volume",
          options: [optBootVolumeId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the specified volume with a new Vault service master encryption key",
          options: [
            optBootVolumeId,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the new Vault service key to assign to protect the specified volume",
              args: { name: "kms-key-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "boot-volume-backup",
      description:
        "A point-in-time copy of a boot volume that can then be used to create a new boot volume or recover a boot",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a boot volume backup into a different compartment within the same tenancy",
          options: [
            optBootVolumeBackupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the boot volume backup to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "copy",
          description: "Creates a boot volume backup copy in specified region",
          options: [
            optBootVolumeBackupId,
            optDestinationRegion,
            optDisplayName,
            optKmsKeyId2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new boot volume backup of the specified boot volume",
          options: [
            {
              name: "--boot-volume-id",
              description:
                "The OCID of the boot volume that needs to be backed up",
              args: { name: "boot-volume-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optType,
            optKmsKeyId,
            optRetentionPeriod,
            optIsPreventDeletionEnabled,
            optIsRetentionLockEnabled,
            optIsIndefiniteRetentionEnabled,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a boot volume backup",
          options: [
            optBootVolumeBackupId,
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
          description: "Gets information for the specified boot volume backup",
          options: [optBootVolumeBackupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the boot volume backups in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--boot-volume-id",
              description: "The OCID of the boot volume",
              args: { name: "boot-volume-id" },
            },
            optLimit,
            optPage,
            optDisplayName2,
            {
              name: "--source-boot-volume-backup-id",
              description:
                "A filter to return only resources that originated from the given source boot volume backup",
              args: { name: "source-boot-volume-backup-id" },
            },
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAULTY",
                  "REQUEST_RECEIVED",
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
          description:
            "Updates the display name for the specified boot volume backup",
          options: [
            optBootVolumeBackupId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId,
            optRetentionPeriod,
            optIsPreventDeletionEnabled,
            optIsRetentionLockEnabled,
            optIsIndefiniteRetentionEnabled,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "volume-group-backup",
      description:
        "A point-in-time copy of a volume group that can then be used to create a new volume group or restore a volume",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a volume group backup into a different compartment within the same tenancy",
          options: [
            optVolumeGroupBackupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the volume group backup to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "copy",
          description: "Creates a volume group backup copy in specified region",
          options: [
            optVolumeGroupBackupId,
            optDestinationRegion,
            optDisplayName,
            optKmsKeyId2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new backup volume group of the specified volume group",
          options: [
            {
              name: "--volume-group-id",
              description:
                "The OCID of the volume group that needs to be backed up",
              args: { name: "volume-group-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that will contain the volume group backup",
              args: { name: "compartment-id" },
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optType,
            optRetentionPeriod,
            optIsPreventDeletionEnabled,
            optIsRetentionLockEnabled,
            optIsIndefiniteRetentionEnabled,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a volume group backup",
          options: [
            optVolumeGroupBackupId,
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
          description: "Gets information for the specified volume group backup",
          options: [optVolumeGroupBackupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the volume group backups in the specified compartment",
          options: [
            optCompartmentId,
            optVolumeGroupId2,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the display name for the specified volume group backup",
          options: [
            optVolumeGroupBackupId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optRetentionPeriod,
            optIsPreventDeletionEnabled,
            optIsRetentionLockEnabled,
            optIsIndefiniteRetentionEnabled,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "volume-backup-policy-assignment",
      description:
        "Specifies the volume that the volume backup policy is assigned to",
      subcommands: [
        {
          name: "create",
          description: "Assigns a volume backup policy to the specified volume",
          options: [
            {
              name: "--asset-id",
              description: "The OCID of the volume to assign the policy to",
              args: { name: "asset-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description:
                "The OCID of the volume backup policy to assign to the volume",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--xrc-kms-key-id",
              description:
                "The OCID of the Vault service key which is the master encryption key for the block / boot volume cross region",
              args: { name: "xrc-kms-key-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a volume backup policy assignment",
          options: [
            {
              name: "--policy-assignment-id",
              description: "The OCID of the volume backup policy assignment",
              args: { name: "policy-assignment-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get-volume-backup-policy-asset-assignment",
          description:
            "Gets the volume backup policy assignment for the specified volume",
          options: [
            {
              name: "--asset-id",
              description: "The OCID of an asset (e.g. a volume)",
              args: { name: "asset-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information for the specified volume backup policy assignment",
          options: [
            {
              name: "--policy-assignment-id",
              description: "The OCID of the volume backup policy assignment",
              args: { name: "policy-assignment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "volume-backup-policy",
      description:
        "A policy for automatically creating volume backups according to a recurring schedule",
      subcommands: [
        {
          name: "create",
          description: "Creates a new user defined backup policy",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--destination-region",
              description:
                "The paired destination region for copying scheduled backups to",
              args: { name: "destination-region" },
            },
            {
              name: "--schedules",
              description:
                "The collection of schedules for the volume backup policy",
              args: { name: "json" },
            },
            optDefinedTags,
            optFreeformTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a user defined backup policy",
          options: [optPolicyId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description:
            "Gets information for the specified volume backup policy",
          options: [optPolicyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all the volume backup policies available in the specified compartment",
          options: [
            optLimit,
            optPage,
            optCompartmentId2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a user defined backup policy",
          options: [
            optPolicyId,
            optDisplayName,
            {
              name: "--destination-region",
              description:
                "The paired destination region for copying scheduled backups to",
              args: { name: "destination-region" },
            },
            {
              name: "--schedules",
              description:
                "The collection of schedules for the volume backup policy",
              args: { name: "json" },
            },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "volume",
      description:
        "A detachable block volume device that allows you to dynamically expand the storage capacity of an instance",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a volume into a different compartment within the same tenancy",
          options: [
            optVolumeId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the volume to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-volume-volume-source-from-block-volume-replica-details",
          description: "Creates a new volume in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the volume",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--source-details-id",
              description: "The OCID of the block volume replica",
              args: { name: "source-details-id" },
              isRequired: true,
            },
            optAvailabilityDomain2,
            optBackupPolicyId2,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId4,
            optVpusPerGb,
            optClusterPlacementGroupId,
            optSizeInGbs,
            optSizeInMbs,
            optVolumeBackupId2,
            optIsAutoTuneEnabled2,
            optBlockVolumeReplicas,
            optAutotunePolicies,
            optXrcKmsKeyId,
            optIsReservationsEnabled,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified volume",
          options: [
            optVolumeId,
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
          description: "Gets information for the specified volume",
          options: [optVolumeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the volumes in the specified compartment and availability domain",
          options: [
            optAvailabilityDomain,
            optCompartmentId2,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optVolumeGroupId2,
            {
              name: "--cluster-placement-group-id",
              description:
                "A filter to return only resources that match the given cluster placement group Id exactly",
              args: { name: "cluster-placement-group-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "RESTORING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAULTY",
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
          description: "Updates the specified volume's display name",
          options: [
            optVolumeId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optVpusPerGb,
            {
              name: "--size-in-gbs",
              description: "The size to resize the volume to in GBs",
              args: { name: "integer" },
            },
            optIsAutoTuneEnabled2,
            {
              name: "--block-volume-replicas",
              description:
                "The list of block volume replicas that this volume will be updated to have in the specified destination",
              args: { name: "json" },
            },
            {
              name: "--autotune-policies",
              description:
                "The list of autotune policies enabled for this volume",
              args: { name: "json" },
            },
            optIsReservationsEnabled,
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
          description: "Creates a new volume in the specified compartment",
          options: [
            optBackupPolicyId2,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId4,
            optVpusPerGb,
            optClusterPlacementGroupId,
            optSizeInGbs,
            optSizeInMbs,
            optIsAutoTuneEnabled2,
            optBlockVolumeReplicas,
            optAutotunePolicies,
            optXrcKmsKeyId,
            optIsReservationsEnabled,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--availability-domain",
              description: "The Availability Domain of the volume",
              args: { name: "availability-domain" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the volume",
              args: { name: "compartment-id" },
            },
            {
              name: "--source-volume-id",
              description:
                "The OCID of a Block volume in the same Availability Domain from which the data should be cloned to the newly",
              args: { name: "source-volume-id" },
            },
            optVolumeBackupId2,
            {
              name: "--source-volume-replica-id",
              description:
                "The OCID of the block volume replica from which the data should be restored on the newly created volume",
              args: { name: "source-volume-replica-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-volume-source-from-volume-backup-delta",
          description: "Creates a new volume in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the volume",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--source-details-first-backup-id",
              description: "The OCID of the first volume backup",
              args: { name: "source-details-first-backup-id" },
              isRequired: true,
            },
            {
              name: "--source-details-second-backup-id",
              description: "The OCID of the second volume backup",
              args: { name: "source-details-second-backup-id" },
              isRequired: true,
            },
            optAvailabilityDomain2,
            optBackupPolicyId2,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId4,
            optVpusPerGb,
            optClusterPlacementGroupId,
            optSizeInGbs,
            optSizeInMbs,
            optVolumeBackupId2,
            optIsAutoTuneEnabled2,
            optBlockVolumeReplicas,
            optAutotunePolicies,
            optXrcKmsKeyId,
            optIsReservationsEnabled,
            {
              name: "--source-details-change-block-size-in-bytes",
              description:
                "Block size in bytes to be considered while performing volume restore",
              args: { name: "integer" },
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
      name: "boot-volume",
      description:
        "A detachable boot volume device that contains the image used to boot a Compute instance",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a boot volume into a different compartment within the same tenancy",
          options: [
            optBootVolumeId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the boot volume to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-boot-volume-boot-volume-source-from-boot-volume-replica-details",
          description:
            "Creates a new boot volume in the specified compartment from an existing boot volume or a boot volume backup",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the boot volume",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--source-details-id",
              description: "The OCID of the boot volume replica",
              args: { name: "source-details-id" },
              isRequired: true,
            },
            optAvailabilityDomain2,
            optBackupPolicyId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId3,
            optSizeInGbs,
            optClusterPlacementGroupId,
            optVpusPerGb,
            optIsAutoTuneEnabled,
            optBootVolumeReplicas,
            optAutotunePolicies,
            optXrcKmsKeyId2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified boot volume",
          options: [
            optBootVolumeId,
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
          description: "Gets information for the specified boot volume",
          options: [optBootVolumeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the boot volumes in the specified compartment and availability domain",
          options: [
            optAvailabilityDomain,
            optCompartmentId2,
            optLimit,
            optPage,
            optVolumeGroupId2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified boot volume's display name, defined tags, and free-form tags",
          options: [
            optBootVolumeId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--size-in-gbs",
              description: "The size to resize the volume to in GBs",
              args: { name: "integer" },
            },
            optVpusPerGb,
            optIsAutoTuneEnabled,
            {
              name: "--boot-volume-replicas",
              description:
                "The list of boot volume replicas that this boot volume will be updated to have in the specified destination",
              args: { name: "json" },
            },
            optAutotunePolicies,
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
            "Creates a new boot volume in the specified compartment from an existing boot volume or a boot volume backup",
          options: [
            optBackupPolicyId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId3,
            optSizeInGbs,
            optClusterPlacementGroupId,
            optVpusPerGb,
            optIsAutoTuneEnabled,
            optBootVolumeReplicas,
            optAutotunePolicies,
            optXrcKmsKeyId2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--availability-domain",
              description: "The Availability Domain of the boot volume",
              args: { name: "availability-domain" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the boot volume",
              args: { name: "compartment-id" },
            },
            {
              name: "--source-boot-volume-id",
              description:
                "The OCID of a boot volume in the same Availability Domain from which the data should be cloned to the newly",
              args: { name: "source-boot-volume-id" },
            },
            {
              name: "--boot-volume-backup-id",
              description:
                "The OCID of the boot volume backup from which the data should be restored on the newly created boot volume",
              args: { name: "boot-volume-backup-id" },
            },
            {
              name: "--source-volume-replica-id",
              description:
                "The OCID of the boot volume replica from which the data should be restored on the newly created boot volume",
              args: { name: "source-volume-replica-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-boot-volume-source-from-boot-volume-backup-delta",
          description:
            "Creates a new boot volume in the specified compartment from an existing boot volume or a boot volume backup",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the boot volume",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--source-details-first-backup-id",
              description: "The OCID of the first boot volume backup",
              args: { name: "source-details-first-backup-id" },
              isRequired: true,
            },
            {
              name: "--source-details-second-backup-id",
              description: "The OCID of the second boot volume backup",
              args: { name: "source-details-second-backup-id" },
              isRequired: true,
            },
            optAvailabilityDomain2,
            optBackupPolicyId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId3,
            optSizeInGbs,
            optClusterPlacementGroupId,
            optVpusPerGb,
            optIsAutoTuneEnabled,
            optBootVolumeReplicas,
            optAutotunePolicies,
            optXrcKmsKeyId2,
            {
              name: "--source-details-change-block-size-in-bytes",
              description:
                "Block size in bytes to be considered while performing volume restore",
              args: { name: "integer" },
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
      name: "volume-group-replica",
      description:
        "An asynchronous replica of a volume group that can then be used to create a new volume group or recover",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information for the specified volume group replica",
          options: [
            {
              name: "--volume-group-replica-id",
              description: "The OCID of the volume replica group",
              args: { name: "volume-group-replica-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the volume group replicas in the specified compartment",
          options: [
            {
              name: "--availability-domain",
              description: "The name of the availability domain",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "block-volume-replica",
      description:
        "An asynchronous replica of a block volume that can then be used to create a new block volume or recover",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information for the specified block volume replica",
          options: [
            {
              name: "--block-volume-replica-id",
              description: "The OCID of the block volume replica",
              args: { name: "block-volume-replica-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the block volume replicas in the specified compartment and availability domain",
          options: [
            optAvailabilityDomain,
            optCompartmentId2,
            {
              name: "--volume-group-replica-id",
              description: "The OCID of the volume group replica",
              args: { name: "volume-group-replica-id" },
            },
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "boot-volume-replica",
      description:
        "An asynchronous replica of a boot volume that can then be used to create a new boot volume or recover a boot",
      subcommands: [
        {
          name: "get",
          description: "Gets information for the specified boot volume replica",
          options: [
            {
              name: "--boot-volume-replica-id",
              description: "The OCID of the boot volume replica",
              args: { name: "boot-volume-replica-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the boot volume replicas in the specified compartment and availability domain",
          options: [
            optAvailabilityDomain,
            optCompartmentId2,
            {
              name: "--volume-group-replica-id",
              description: "The OCID of the volume group replica",
              args: { name: "volume-group-replica-id" },
            },
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "volume-group",
      description: "Specifies a volume group which is a collection of volumes",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a volume group into a different compartment within the same tenancy",
          options: [
            optVolumeGroupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the volume group to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new volume group in the specified compartment",
          options: [
            {
              name: "--availability-domain",
              description: "The availability domain of the volume group",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the volume group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--source-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--backup-policy-id",
              description:
                "If provided, specifies the ID of the volume backup policy to assign to the newly created volume group",
              args: { name: "backup-policy-id" },
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--volume-group-replicas",
              description:
                "The list of volume group replicas that this volume group will be enabled to have in the specified destination",
              args: { name: "json" },
            },
            {
              name: "--cluster-placement-group-id",
              description:
                "The clusterPlacementGroup Id of the volume group for volume group placement",
              args: { name: "cluster-placement-group-id" },
            },
            {
              name: "--xrc-kms-key-id",
              description:
                "The OCID of the Vault service key which is the master encryption key for the volume's cross region backups",
              args: { name: "xrc-kms-key-id" },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified volume group",
          options: [
            optVolumeGroupId,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information for the specified volume group",
          options: [optVolumeGroupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the volume groups in the specified compartment and availability domain",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAULTY",
                  "UPDATE_PENDING",
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
          description:
            "Updates the set of volumes in a volume group along with the display name",
          options: [
            optVolumeGroupId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--volume-ids",
              description: "OCIDs for the volumes in this volume group",
              args: { name: "json" },
            },
            {
              name: "--volume-group-replicas",
              description:
                "The list of volume group replicas that this volume group will be updated to have in the specified destination",
              args: { name: "json" },
            },
            optIfMatch,
            {
              name: "--preserve-volume-replica",
              description:
                "Specifies whether to disable or preserve the individual volume replication when removing a volume from",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
      name: "volume-kms-key",
      description:
        "The Vault service master encryption key associated with this volume",
      subcommands: [
        {
          name: "delete",
          description:
            "Removes the specified volume's assigned Vault service encryption key",
          options: [optVolumeId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description:
            "Gets the Vault service encryption key assigned to the specified volume",
          options: [optVolumeId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the specified volume with a new Key Management master encryption key",
          options: [
            optVolumeId,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the new Vault service key to assign to protect the specified volume",
              args: { name: "kms-key-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "backup",
      description:
        "A point-in-time copy of a volume that can then be used to create a new block volume or recover a block volume",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a volume backup into a different compartment within the same tenancy",
          options: [
            optVolumeBackupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the volume backup to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new backup of the specified volume",
          options: [
            {
              name: "--volume-id",
              description: "The OCID of the volume that needs to be backed up",
              args: { name: "volume-id" },
              isRequired: true,
            },
            optKmsKeyId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optType,
            optRetentionPeriod,
            optIsPreventDeletionEnabled,
            optIsRetentionLockEnabled,
            optIsIndefiniteRetentionEnabled,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a volume backup",
          options: [
            optVolumeBackupId,
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
          description: "Gets information for the specified volume backup",
          options: [optVolumeBackupId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the volume backups in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--volume-id",
              description: "The OCID of the volume",
              args: { name: "volume-id" },
            },
            optLimit,
            optPage,
            optDisplayName2,
            {
              name: "--source-volume-backup-id",
              description:
                "A filter to return only resources that originated from the given source volume backup",
              args: { name: "source-volume-backup-id" },
            },
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAULTY",
                  "REQUEST_RECEIVED",
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
          description:
            "Updates the display name for the specified volume backup",
          options: [
            optVolumeBackupId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optKmsKeyId,
            optRetentionPeriod,
            optIsPreventDeletionEnabled,
            optIsRetentionLockEnabled,
            optIsIndefiniteRetentionEnabled,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "copy",
          description: "Creates a volume backup copy in specified region",
          options: [
            optVolumeBackupId,
            optDestinationRegion,
            optDisplayName,
            optKmsKeyId2,
            optWaitForState2,
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
