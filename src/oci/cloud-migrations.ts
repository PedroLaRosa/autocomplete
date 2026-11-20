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
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optMigrationPlanId: Fig.Option = {
  name: "--migration-plan-id",
  description: "Unique migration plan identifier",
  args: { name: "migration-plan-id" },
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optMigrationAssetId: Fig.Option = {
  name: "--migration-asset-id",
  description: "Unique migration asset identifier",
  args: { name: "migration-asset-id" },
  isRequired: true,
};
const optMigrationId: Fig.Option = {
  name: "--migration-id",
  description: "Unique migration identifier",
  args: { name: "migration-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire given display name",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optReplicationScheduleId: Fig.Option = {
  name: "--replication-schedule-id",
  description: "Replication schedule identifier",
  args: { name: "replication-schedule-id" },
};
const optReplicationScheduleId2: Fig.Option = {
  name: "--replication-schedule-id",
  description: "Unique replication schedule identifier in path",
  args: { name: "replication-schedule-id" },
  isRequired: true,
};
const optTargetAssetId: Fig.Option = {
  name: "--target-asset-id",
  description: "Unique target asset identifier",
  args: { name: "target-asset-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optMigrationId2: Fig.Option = {
  name: "--migration-id",
  description: "Unique migration identifier",
  args: { name: "migration-id" },
};
const optMsLicense: Fig.Option = {
  name: "--ms-license",
  description: "Microsoft license for the VM configuration",
  args: { name: "ms-license" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "NEEDS_ATTENTION",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "cloud-migrations",
  description: "Oracle Cloud Migrations",
  subcommands: [
    {
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a paginated list of logs for a given work request",
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
      name: "work-request",
      description: "A description of a work request status",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "List of work requests in a compartment",
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
                "A filter to return only resources where the resource's lifecycle state matches the given operation status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--operation-type",
              description:
                "A filter to return only resources where the resource's lifecycle state matches the given operation type",
              args: {
                suggestions: [
                  "CREATE_MIGRATION",
                  "UPDATE_MIGRATION",
                  "REFRESH_MIGRATION",
                  "DELETE_MIGRATION",
                  "MOVE_MIGRATION",
                  "START_ASSET_REPLICATION",
                  "START_MIGRATION_REPLICATION",
                  "CREATE_REPLICATION_SCHEDULE",
                  "UPDATE_REPLICATION_SCHEDULE",
                  "DELETE_REPLICATION_SCHEDULE",
                  "MOVE_REPLICATION_SCHEDULE",
                  "CREATE_MIGRATION_PLAN",
                  "UPDATE_MIGRATION_PLAN",
                  "DELETE_MIGRATION_PLAN",
                  "MOVE_MIGRATION_PLAN",
                  "REFRESH_MIGRATION_PLAN",
                  "EXECUTE_MIGRATION_PLAN",
                  "REFRESH_MIGRATION_ASSET",
                  "CREATE_MIGRATION_ASSET",
                  "DELETE_MIGRATION_ASSET",
                  "CREATE_TARGET_ASSET",
                  "UPDATE_TARGET_ASSET",
                  "DELETE_TARGET_ASSET",
                  "PREPARE_TARGET_ASSET",
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
      name: "migration-asset",
      description: "Description of the migration asset",
      subcommands: [
        {
          name: "create",
          description: "Creates a migration asset",
          options: [
            {
              name: "--inventory-asset-id",
              description: "OCID of an asset for an inventory",
              args: { name: "inventory-asset-id" },
              isRequired: true,
            },
            {
              name: "--migration-id",
              description: "OCID of the associated migration",
              args: { name: "migration-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description: "Availability domain",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--replication-compartment-id",
              description: "Replication compartment identifier",
              args: { name: "replication-compartment-id" },
              isRequired: true,
            },
            {
              name: "--snap-shot-bucket-name",
              description: "Name of snapshot bucket",
              args: { name: "snap-shot-bucket-name" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            optReplicationScheduleId,
            { name: "--replication-location-detail", args: { name: "json" } },
            {
              name: "--depends-on",
              description:
                "List of migration assets that depends on this asset",
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
          description: "Deletes a migration asset resource by an identifier",
          options: [
            optMigrationAssetId,
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
          description: "Gets a migration asset by identifier",
          options: [optMigrationAssetId, optFromJson],
        },
        {
          name: "get-replication-progress",
          description:
            "Gets the progress percentage of a migration asset's replication process",
          options: [optMigrationAssetId, optFromJson],
        },
        {
          name: "refresh",
          description:
            "Refreshes the migration asset with the migration asset ID",
          options: [
            optMigrationAssetId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the migration asset",
          options: [
            optMigrationAssetId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            optReplicationScheduleId,
            {
              name: "--depends-on",
              description:
                "List of migration assets that depends on this asset",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of migration assets",
          options: [
            optMigrationId2,
            optDisplayName,
            {
              name: "--migration-asset-id",
              description: "Unique migration asset identifier",
              args: { name: "migration-asset-id" },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the migration asset",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "start_replication",
          description:
            "Starts replication for the asset with the migration asset ID",
          options: [
            optMigrationAssetId,
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
      name: "target-asset",
      description: "Description of the target asset",
      subcommands: [
        {
          name: "create-target-asset-create-olvm-target-asset-details",
          description: "Creates a target asset",
          options: [
            {
              name: "--migration-plan-id",
              description: "OCID of the associated migration plan",
              args: { name: "migration-plan-id" },
              isRequired: true,
            },
            {
              name: "--is-excluded-from-execution",
              description:
                "A boolean indicating whether the asset should be migrated",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optMsLicense,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a target asset resource by identifier",
          options: [
            optTargetAssetId,
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
          description: "Gets a target asset by identifier",
          options: [optTargetAssetId, optFromJson],
        },
        {
          name: "update-target-asset-update-olvm-target-asset-details",
          description: "Updates the target asset",
          options: [
            optTargetAssetId,
            {
              name: "--is-excluded-from-execution",
              description:
                "A boolean indicating whether the asset should be migrated",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optMsLicense,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of target assets",
          options: [
            {
              name: "--migration-plan-id",
              description: "Unique migration plan identifier",
              args: { name: "migration-plan-id" },
            },
            optDisplayName,
            {
              name: "--target-asset-id",
              description: "Unique target asset identifier",
              args: { name: "target-asset-id" },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the target asset",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a target asset",
          options: [
            {
              name: "--migration-plan-id",
              description: "OCID of the associated migration plan",
              args: { name: "migration-plan-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "The type of target asset",
              args: { suggestions: ["INSTANCE", "OLVM_INSTANCE"] },
              isRequired: true,
            },
            {
              name: "--is-excluded-from-execution",
              description:
                "A boolean indicating whether the asset should be migrated",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--preferred-shape-type",
              description: "Preferred VM shape type that you provide",
              args: { name: "preferred-shape-type" },
              isRequired: true,
            },
            { name: "--user-spec", args: { name: "json" }, isRequired: true },
            {
              name: "--block-volumes-performance",
              description: "Performance of the block volumes",
              args: { name: "integer" },
            },
            optMsLicense,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the target asset",
          options: [
            optTargetAssetId,
            {
              name: "--type",
              description: "The type of target asset",
              args: { suggestions: ["INSTANCE", "OLVM_INSTANCE"] },
              isRequired: true,
            },
            {
              name: "--is-excluded-from-execution",
              description:
                "A boolean indicating whether the asset should be migrated",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--preferred-shape-type",
              description: "Preferred VM shape type that you provided",
              args: { name: "preferred-shape-type" },
            },
            {
              name: "--block-volumes-performance",
              description: "Performance of the block volumes",
              args: { name: "integer" },
            },
            {
              name: "--ms-license",
              description: "Microsoft license for VM configuration",
              args: { name: "ms-license" },
            },
            { name: "--user-spec", args: { name: "json" } },
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "replication-schedule",
      description: "Replication schedule",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            optReplicationScheduleId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the replication schedule should be moved",
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
          description: "Creates a replication schedule",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the replication schedule should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--execution-recurrences",
              description:
                "Recurrence specification for replication schedule execution",
              args: { name: "execution-recurrences" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for a replication schedule",
              args: { name: "display-name" },
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
          description: "Deletes a replication schedule resource by identifier",
          options: [
            optReplicationScheduleId2,
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
          description: "Gets a replication schedule by identifier",
          options: [optReplicationScheduleId2, optFromJson],
        },
        {
          name: "update",
          description: "Updates the replication schedule",
          options: [
            optReplicationScheduleId2,
            {
              name: "--display-name",
              description: "A user-friendly name for a replication schedule",
              args: { name: "display-name" },
            },
            {
              name: "--execution-recurrences",
              description:
                "Recurrence specification for replication schedule execution",
              args: { name: "execution-recurrences" },
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
        {
          name: "list",
          description: "Returns a list of replication schedules",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description: "The current state of the replication schedule",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            {
              name: "--replication-schedule-id",
              description: "Unique replication schedule identifier in query",
              args: { name: "replication-schedule-id" },
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
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a paginated list of errors for a given work request",
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
      name: "migration",
      description:
        "A top-level container to track all aspects of a long-running migration workflow to OCI",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a migration resource from one compartment identifier to another",
          options: [
            optMigrationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
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
          description: "Creates a migration",
          options: [
            {
              name: "--display-name",
              description: "Migration identifier",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--migration-type",
              description: "Type of migration project (OCI/OLVM)",
              args: { name: "migration-type" },
            },
            optReplicationScheduleId,
            {
              name: "--is-completed",
              description: "Indicates whether migration is marked as complete",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--migration-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a migration resource by identifier",
          options: [
            optMigrationId,
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
          description: "Gets a migration by identifier",
          options: [optMigrationId, optFromJson],
        },
        {
          name: "refresh",
          description: "Refreshes migration based on the migration ID",
          options: [
            optMigrationId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start-migration-replication",
          description: "Starts replication for a migration or for some asset",
          options: [
            optMigrationId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the migration",
          options: [
            optMigrationId,
            {
              name: "--display-name",
              description: "Migration identifier",
              args: { name: "display-name" },
            },
            optReplicationScheduleId,
            {
              name: "--is-completed",
              description: "Indicates whether migration is marked as complete",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--migration-type",
              description: "Type of migration project (OCI/OLVM)",
              args: { name: "migration-type" },
            },
            { name: "--migration-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of migrations",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources where the resource's lifecycle state matches the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            optMigrationId2,
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
      name: "migration-plan",
      description: "Description of the migration plan",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            optMigrationPlanId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
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
          description: "Creates a migration plan",
          options: [
            {
              name: "--display-name",
              description: "Migration plan identifier",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--migration-id",
              description: "The OCID of the associated migration",
              args: { name: "migration-id" },
              isRequired: true,
            },
            {
              name: "--source-migration-plan-id",
              description: "Source migraiton plan ID to be cloned",
              args: { name: "source-migration-plan-id" },
            },
            {
              name: "--strategies",
              description:
                "List of strategies for the resources to be migrated",
              args: { name: "json" },
            },
            {
              name: "--target-environments",
              description: "List of target environments",
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
          description: "Deletes a migration plan resource by an identifier",
          options: [
            optMigrationPlanId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "execute",
          description: "Executes the migration plan with the migration plan ID",
          options: [
            optMigrationPlanId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "export",
          description: "Exports the migration plan to a csv file",
          options: [
            optMigrationPlanId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a migration plan by identifier",
          options: [optMigrationPlanId, optFromJson],
        },
        {
          name: "import",
          description: "Imports a migration plan from a csv file",
          options: [
            optMigrationPlanId,
            {
              name: "--import-migration-plan-details",
              description: "The csv file to be uploaded",
              args: { name: "import-migration-plan-details" },
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
          name: "refresh",
          description:
            "Refreshes the migration plan with the migration plan ID",
          options: [
            optMigrationPlanId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the migration plan",
          options: [
            optMigrationPlanId,
            {
              name: "--display-name",
              description: "Migration plan identifier",
              args: { name: "display-name" },
            },
            {
              name: "--strategies",
              description:
                "List of strategies for the resources to be migrated",
              args: { name: "json" },
            },
            {
              name: "--target-environments",
              description: "List of target environments",
              args: { name: "json" },
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
        {
          name: "list",
          description: "Returns a list of migration plans",
          options: [
            optCompartmentId,
            optMigrationId2,
            optDisplayName,
            {
              name: "--migration-plan-id",
              description: "Unique migration plan identifier",
              args: { name: "migration-plan-id" },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the migration plan",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
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
      name: "available_shapes",
      description: "Results of an available shapes search",
      subcommands: [
        {
          name: "list",
          description: "List of shapes by parameters",
          options: [
            optMigrationPlanId,
            optCompartmentId,
            {
              name: "--dvh-host-id",
              description: "The ID of the Dvh in which to list resources",
              args: { name: "dvh-host-id" },
            },
            {
              name: "--availability-domain",
              description: "The availability domain in which to list resources",
              args: { name: "availability-domain" },
            },
            {
              name: "--reserved-capacity-id",
              description:
                "The reserved capacity ID for which to list resources",
              args: { name: "reserved-capacity-id" },
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
  ],
};

export default completionSpec;
