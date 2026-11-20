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
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["CREATING", "ACTIVE", "DELETING", "DELETED"] },
  isRepeatable: true,
};
const optFileSystemId: Fig.Option = {
  name: "--file-system-id",
  description: "The OCID of the file system",
  args: { name: "file-system-id" },
  isRequired: true,
};
const optMessage: Fig.Option = {
  name: "--message",
  description: "A message added by the creator of the lock",
  args: { name: "message" },
};
const optRelatedResourceId: Fig.Option = {
  name: "--related-resource-id",
  description: "The ID of the resource that is locking this resource",
  args: { name: "related-resource-id" },
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
  description:
    "The sort order to use, either 'asc' or 'desc', where 'asc' is ascending and 'desc' is descending",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optId: Fig.Option = {
  name: "--id",
  description: "Filter results by OCID",
  args: { name: "id" },
};
const optMountTargetId: Fig.Option = {
  name: "--mount-target-id",
  description: "The OCID of the mount target",
  args: { name: "mount-target-id" },
  isRequired: true,
};
const optFilesystemSnapshotPolicyId: Fig.Option = {
  name: "--filesystem-snapshot-policy-id",
  description: "The OCID of the file system snapshot policy",
  args: { name: "filesystem-snapshot-policy-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "Filter results by the specified lifecycle state",
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
const optWaitForState2: Fig.Option = {
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
      "UPDATING",
    ],
  },
  isRepeatable: true,
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description: "The name of the availability domain",
  args: { name: "availability-domain" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLocks: Fig.Option = {
  name: "--locks",
  description: "Locks associated with this resource",
  args: { name: "json" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "INACTIVE",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optOutboundConnectorId: Fig.Option = {
  name: "--outbound-connector-id",
  description: "The OCID of the outbound connector",
  args: { name: "outbound-connector-id" },
  isRequired: true,
};
const optReplicationId: Fig.Option = {
  name: "--replication-id",
  description: "The OCID of the replication",
  args: { name: "replication-id" },
  isRequired: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "DELETING", "DELETED", "FAILED"],
  },
  isRepeatable: true,
};
const optExportId: Fig.Option = {
  name: "--export-id",
  description: "The OCID of the export",
  args: { name: "export-id" },
  isRequired: true,
};
const optSnapshotId: Fig.Option = {
  name: "--snapshot-id",
  description: "The OCID of the snapshot",
  args: { name: "snapshot-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
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
  isRepeatable: true,
};
const optQuotaRuleId: Fig.Option = {
  name: "--quota-rule-id",
  description: "The identifier of the quota rule",
  args: { name: "quota-rule-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "fs",
  description: "File Storage",
  subcommands: [
    {
      name: "filesystem-snapshot-policy",
      description:
        "A file system snapshot policy is used to automate snapshot creation and deletion",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optFilesystemSnapshotPolicyId,
            optType,
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
            "Moves a file system snapshot policy into a different compartment within the same tenancy",
          options: [
            optFilesystemSnapshotPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the file system snapshot policy to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new file system snapshot policy in the specified compartment and availability domain",
          options: [
            {
              name: "--availability-domain",
              description:
                "The availability domain that the file system snapshot policy is in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the file system snapshot policy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--policy-prefix",
              description:
                "The prefix to apply to all snapshots created by this policy",
              args: { name: "policy-prefix" },
            },
            {
              name: "--schedules",
              description: "The list of associated snapshot schedules",
              args: { name: "json" },
            },
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
          description: "Deletes the specified file system snapshot policy",
          options: [
            optFilesystemSnapshotPolicyId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the specified file system snapshot policy's information",
          options: [optFilesystemSnapshotPolicyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists file system snapshot policies in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description: "Filter results by the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                ],
              },
            },
            optId,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "pause",
          description:
            "This operation pauses the scheduled snapshot creation and snapshot deletion of the policy and updates",
          options: [
            optFilesystemSnapshotPolicyId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock to a resource",
          options: [
            optFilesystemSnapshotPolicyId,
            optType,
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
          name: "unpause",
          description:
            "This operation unpauses a paused file system snapshot policy and updates the lifecycle state of the file",
          options: [
            optFilesystemSnapshotPolicyId,
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
          description:
            "Updates the specified file system snapshot policy's information",
          options: [
            optFilesystemSnapshotPolicyId,
            optDisplayName,
            {
              name: "--policy-prefix",
              description:
                "The prefix to apply to all snapshots created by this policy",
              args: { name: "policy-prefix" },
            },
            {
              name: "--schedules",
              description: "The list of associated snapshot schedules",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
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
      name: "replication",
      description:
        "Replications are the primary resource that governs the policy of cross-region replication between source",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optReplicationId,
            optType,
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
            "Moves a replication and its replication target into a different compartment within the same tenancy",
          options: [
            optReplicationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the replication to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new replication in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the replication",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--source-id",
              description: "The OCID of the source file system",
              args: { name: "source-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "The OCID of the target file system",
              args: { name: "target-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--replication-interval",
              description: "Duration in minutes between replication snapshots",
              args: { name: "integer" },
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
          description:
            "Deletes the specified replication and the associated replication target",
          options: [
            optReplicationId,
            optIfMatch,
            {
              name: "--delete-mode",
              description:
                "You can choose a mode for deleting the replication resource",
              args: {
                suggestions: [
                  "FINISH_CYCLE_IF_CAPTURING_OR_APPLYING",
                  "ONE_MORE_CYCLE",
                  "FINISH_CYCLE_IF_APPLYING",
                ],
              },
            },
            optIsLockOverride,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified replication's information",
          options: [optReplicationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the replication resources in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optLifecycleState,
            optDisplayName,
            optId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optSortOrder,
            {
              name: "--file-system-id",
              description: "The OCID of the source file system",
              args: { name: "file-system-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock to a resource",
          options: [
            optReplicationId,
            optType,
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
          name: "update",
          description:
            "Updates the information for the specified replication and its associated replication target",
          options: [
            optReplicationId,
            optDisplayName,
            {
              name: "--replication-interval",
              description: "Duration in minutes between replication snapshots",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
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
      name: "file-system",
      description: "An NFS file system",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optFileSystemId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a file system and its associated snapshots into a different compartment within the same tenancy",
          options: [
            optFileSystemId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the file system to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new file system in the specified compartment and availability domain",
          options: [
            {
              name: "--availability-domain",
              description:
                "The availability domain to create the file system in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the file system in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the KMS key used to encrypt the encryption keys associated with this file system",
              args: { name: "kms-key-id" },
            },
            {
              name: "--source-snapshot-id",
              description:
                "The OCID of the snapshot used to create a cloned file system",
              args: { name: "source-snapshot-id" },
            },
            {
              name: "--clone-attach-status",
              description:
                "Specifies whether the clone file system is attached to its parent file system",
              args: { suggestions: ["DETACH", "ATTACH"] },
            },
            {
              name: "--filesystem-snapshot-policy-id",
              description:
                "The OCID of the associated file system snapshot policy",
              args: { name: "filesystem-snapshot-policy-id" },
            },
            {
              name: "--are-quota-rules-enabled",
              description:
                "Specifies the enforcement of quota rules on the file system",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-quota-rule",
          description:
            "Create a file system, user, or group quota rule given the fileSystemId, principalId",
          options: [
            {
              name: "--principal-type",
              description: "The type of the owner of this quota rule and usage",
              args: {
                suggestions: [
                  "FILE_SYSTEM_LEVEL",
                  "DEFAULT_GROUP",
                  "DEFAULT_USER",
                  "INDIVIDUAL_GROUP",
                  "INDIVIDUAL_USER",
                ],
              },
              isRequired: true,
            },
            {
              name: "--is-hard-quota",
              description: "Whether the quota rule will be enforced",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--quota-limit-in-gigabytes",
              description: "The value of the quota rule in gigabytes",
              args: { name: "integer" },
              isRequired: true,
            },
            optFileSystemId,
            {
              name: "--principal-id",
              description:
                "An identifier for the user or the group associated with quota rule and usage",
              args: { name: "integer" },
            },
            optDisplayName,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified file system",
          options: [
            optFileSystemId,
            optIfMatch,
            optIsLockOverride,
            {
              name: "--can-detach-child-file-system",
              description:
                "If the value is set to true, then the file system will be deleted by detaching its child file system",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-quota-rule",
          description:
            "Remove a file system, user, or group quota rule given the fileSystemId and quotaRuleId parameters",
          options: [
            optFileSystemId,
            optQuotaRuleId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "detach",
          description: "Detaches the file system from its parent file system",
          options: [optFileSystemId, optIfMatch, optFromJson],
        },
        {
          name: "estimate-replication",
          description:
            "Provides estimates for replication created using specific file system",
          options: [
            optFileSystemId,
            optIfMatch,
            {
              name: "--change-rate-in-m-bps",
              description:
                "The rate of change of data on source file system in MegaBytes per second",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified file system's information",
          options: [optFileSystemId, optFromJson],
        },
        {
          name: "get-quota-rule",
          description:
            "Get a file system, user, or group quota rule given the fileSystemId and quotaRuleId parameters",
          options: [optFileSystemId, optQuotaRuleId, optIfMatch, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the file system resources in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optDisplayName,
            optLifecycleState,
            optId,
            {
              name: "--source-snapshot-id",
              description:
                "The OCID of the snapshot used to create a cloned file system",
              args: { name: "source-snapshot-id" },
            },
            {
              name: "--parent-file-system-id",
              description:
                "The OCID of the file system that contains the source snapshot of a cloned file system",
              args: { name: "parent-file-system-id" },
            },
            {
              name: "--filesystem-snapshot-policy-id",
              description:
                "The OCID of the file system snapshot policy that is associated with the file systems",
              args: { name: "filesystem-snapshot-policy-id" },
            },
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-quota-rules",
          description:
            "List user or group usages and their quota rules by certain principal type",
          options: [
            optFileSystemId,
            {
              name: "--principal-type",
              description: "The type of the owner of this quota rule and usage",
              args: {
                suggestions: [
                  "FILE_SYSTEM_LEVEL",
                  "DEFAULT_GROUP",
                  "DEFAULT_USER",
                  "INDIVIDUAL_GROUP",
                  "INDIVIDUAL_USER",
                ],
              },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--principal-id",
              description:
                "An identifier for the user or the group associated with quota rule and usage",
              args: { name: "integer" },
            },
            {
              name: "--are-violators-only",
              description:
                "An option to display only the users or groups that violate their quota rules",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortOrder,
            optIfMatch,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock to a resource",
          options: [
            optFileSystemId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "toggle-quota-rules",
          description:
            "Enable or disable quota enforcement for the file system",
          options: [
            optFileSystemId,
            {
              name: "--are-quota-rules-enabled",
              description:
                "Specifies the enforcement of quota rules on the file system",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified file system's information",
          options: [
            optFileSystemId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the Key Management master encryption key to associate with the specified file system",
              args: { name: "kms-key-id" },
            },
            {
              name: "--filesystem-snapshot-policy-id",
              description:
                "The OCID of the associated file system snapshot policy",
              args: { name: "filesystem-snapshot-policy-id" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-quota-rule",
          description:
            "Edit a file system, user, or group quota rule given the fileSystemId and quotaRuleId parameters",
          options: [
            optFileSystemId,
            optQuotaRuleId,
            {
              name: "--display-name",
              description:
                "A user-friendly name that the quota rule will be renamed to",
              args: { name: "display-name" },
            },
            {
              name: "--quota-limit-in-gigabytes",
              description: "An updated value of the quota rule in gigabytes",
              args: { name: "integer" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "outbound-connector",
      description:
        "Outbound connectors are used to help File Storage communicate with an external server, such as an LDAP server",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optOutboundConnectorId,
            optType,
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
            "Moves an outbound connector into a different compartment within the same tenancy",
          options: [
            optOutboundConnectorId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the outbound connector to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified outbound connector",
          options: [
            optOutboundConnectorId,
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
          description: "Gets the specified outbound connector's information",
          options: [optOutboundConnectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the outbound connector resources in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optLifecycleState,
            optDisplayName,
            optId,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock to a resource",
          options: [
            optOutboundConnectorId,
            optType,
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
          name: "update",
          description: "Updates the specified outbound connector's information",
          options: [
            optOutboundConnectorId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create_ldap_bind_connector",
          description:
            "Creates a new outbound connector in the specified compartment",
          options: [
            {
              name: "--availability-domain",
              description:
                "The availability domain the outbound connector is in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the outbound connector",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--endpoints",
              description:
                "Array of server endpoints to use when connecting with the LDAP bind account",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--bind-distinguished-name",
              description: "The LDAP Distinguished Name of the bind account",
              args: { name: "bind-distinguished-name" },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--password-secret-id",
              description:
                "The OCID of the password for the LDAP bind account in the Vault",
              args: { name: "password-secret-id" },
            },
            {
              name: "--password-secret-version",
              description: "Version of the password secret in the Vault to use",
              args: { name: "integer" },
            },
            {
              name: "--trusted-certificate-secret-id",
              description:
                "The OCID of the trusted certificate for the LDAP server in the Vault",
              args: { name: "trusted-certificate-secret-id" },
            },
            {
              name: "--trusted-certificate-secret-version",
              description:
                "Version of the trusted certificate secret in the Vault to use",
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
      name: "replication-target",
      description:
        "Replication targets are associated with a primary resource called a Replication located in another",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified replication target",
          options: [
            {
              name: "--replication-target-id",
              description: "The OCID of the replication target",
              args: { name: "replication-target-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified replication target's information",
          options: [
            {
              name: "--replication-target-id",
              description: "The OCID of the replication target",
              args: { name: "replication-target-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the replication target resources in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optLifecycleState,
            optDisplayName,
            optId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
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
      name: "export-set",
      description:
        "A set of file systems to export through one or more mount targets",
      subcommands: [
        {
          name: "get",
          description: "Gets the specified export set's information",
          options: [
            {
              name: "--export-set-id",
              description: "The OCID of the export set",
              args: { name: "export-set-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the export set resources in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optDisplayName,
            optLifecycleState,
            optId,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified export set's information",
          options: [
            {
              name: "--export-set-id",
              description: "The OCID of the export set",
              args: { name: "export-set-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--max-fs-stat-bytes",
              description:
                "Controls the maximum tbytes, fbytes, and abytes values reported by NFS FSSTAT calls through any associated",
              args: { name: "integer" },
            },
            {
              name: "--max-fs-stat-files",
              description:
                "Controls the maximum ffiles, ffiles, and afiles values reported by NFS FSSTAT calls through any associated",
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
      name: "mount-target",
      description:
        "Provides access to a collection of file systems through one or more VNICs on a specified subnet",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optMountTargetId,
            optType,
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
          name: "cancel-downgrade-shape",
          description:
            "Cancel scheduled downgrade shape request for mount target",
          options: [
            optMountTargetId,
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
            "Moves a mount target and its associated export set or share set into a different compartment within the same",
          options: [
            optMountTargetId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the mount target to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new mount target in the specified compartment and subnet",
          options: [
            {
              name: "--availability-domain",
              description:
                "The availability domain in which to create the mount target",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the mount target",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet in which to create the mount target",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--hostname-label",
              description:
                "The hostname for the mount target's IP address, used for DNS resolution",
              args: { name: "hostname-label" },
            },
            {
              name: "--ip-address",
              description: "A private IP address of your choice",
              args: { name: "ip-address" },
            },
            {
              name: "--idmap-type",
              description:
                "The method used to map a Unix UID to secondary groups, if any",
              args: { name: "idmap-type" },
            },
            { name: "--ldap-idmap", args: { name: "json" } },
            {
              name: "--nsg-ids",
              description:
                "A list of Network Security Group OCIDs associated with this mount target",
              args: { name: "json" },
            },
            { name: "--kerberos", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
              args: { name: "json" },
            },
            optLocks,
            {
              name: "--requested-throughput",
              description: "Throughput for mount target in Gbps",
              args: { name: "integer" },
            },
            optIsLockOverride,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified mount target",
          options: [
            optMountTargetId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified mount target's information",
          options: [optMountTargetId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the mount target resources in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optDisplayName,
            {
              name: "--export-set-id",
              description: "The OCID of the export set",
              args: { name: "export-set-id" },
            },
            optLifecycleState,
            optId,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock to a resource",
          options: [
            optMountTargetId,
            optType,
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
          name: "schedule-downgrade-shape",
          description: "Schedule a downgrade shape of the mount target",
          options: [
            optMountTargetId,
            {
              name: "--requested-throughput",
              description: "New throughput for mount target in Gbps",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified mount target's information",
          options: [
            optMountTargetId,
            optDisplayName,
            {
              name: "--idmap-type",
              description:
                "The method used to map a Unix UID to secondary groups, if any",
              args: { name: "idmap-type" },
            },
            { name: "--ldap-idmap", args: { name: "json" } },
            {
              name: "--nsg-ids",
              description:
                "A list of Network Security Group OCIDs associated with this mount target",
              args: { name: "json" },
            },
            { name: "--kerberos", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upgrade-shape",
          description: "Upgrade shape request for mount target",
          options: [
            optMountTargetId,
            {
              name: "--requested-throughput",
              description: "New throughput for mount target in Gbps",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate-key-tabs",
          description:
            "Validates keytab contents for the secret details passed on the request or validte keytab contents associated",
          options: [
            {
              name: "--mount-target-id",
              description:
                "The OCID of the mount target whose keytabs are to be validated",
              args: { name: "mount-target-id" },
            },
            { name: "--key-tab-secret-details", args: { name: "json" } },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "export",
      description: "A file system and the path that you can use to mount it",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optExportId,
            optType,
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
          name: "create",
          description:
            "Creates a new export in the specified export set, path, and file system",
          options: [
            {
              name: "--export-set-id",
              description: "The OCID of this export's export set",
              args: { name: "export-set-id" },
              isRequired: true,
            },
            {
              name: "--file-system-id",
              description: "The OCID of this export's file system",
              args: { name: "file-system-id" },
              isRequired: true,
            },
            {
              name: "--path",
              description: "Path used to access the associated file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: "--export-options",
              description: "Export options for the new export",
              args: { name: "json" },
            },
            optLocks,
            {
              name: "--is-idmap-groups-for-sys-auth",
              description:
                "Whether or not the export should use ID mapping for Unix groups rather than the group list provided within",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified export",
          options: [
            optExportId,
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
          description: "Gets the specified export's information",
          options: [optExportId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists export resources by compartment, file system, or export set",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            optLimit,
            optPage,
            {
              name: "--export-set-id",
              description: "The OCID of the export set",
              args: { name: "export-set-id" },
            },
            {
              name: "--file-system-id",
              description: "The OCID of the file system",
              args: { name: "file-system-id" },
            },
            optLifecycleState,
            optId,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "PATH"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock to a resource",
          options: [
            optExportId,
            optType,
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
          name: "update",
          description: "Updates the specified export's information",
          options: [
            optExportId,
            {
              name: "--is-idmap-groups-for-sys-auth",
              description:
                "Whether or not the export should use ID mapping for Unix groups rather than the group list provided within",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--export-options",
              description: "New export options for the export",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
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
      name: "snapshot",
      description: "A point-in-time snapshot of a specified file system",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optSnapshotId,
            optType,
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
          name: "create",
          description: "Creates a new snapshot of the specified file system",
          options: [
            {
              name: "--file-system-id",
              description: "The OCID of the file system to take a snapshot of",
              args: { name: "file-system-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the snapshot",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expiration-time",
              description: "The time when this snapshot will be deleted",
              args: { name: "datetime" },
            },
            { name: "--lock-duration-details", args: { name: "json" } },
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
          description: "Deletes the specified snapshot",
          options: [
            optSnapshotId,
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
          description: "Gets the specified snapshot's information",
          options: [optSnapshotId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists snapshots of the specified file system, or by file system snapshot policy and compartment",
          options: [
            optLimit,
            optPage,
            optLifecycleState,
            optId,
            {
              name: "--filesystem-snapshot-policy-id",
              description:
                "The OCID of the file system snapshot policy that is used to create the snapshots",
              args: { name: "filesystem-snapshot-policy-id" },
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--file-system-id",
              description: "The OCID of the file system",
              args: { name: "file-system-id" },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock to a resource",
          options: [
            optSnapshotId,
            optType,
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
          name: "update",
          description: "Updates the specified snapshot's information",
          options: [
            optSnapshotId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--expiration-time",
              description: "The UTC time when this snapshot will be deleted",
              args: { name: "datetime" },
            },
            { name: "--lock-duration-details", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
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
