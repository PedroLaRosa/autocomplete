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
const optDbSystemId: Fig.Option = {
  name: "--db-system-id",
  description: "A unique identifier for the database system",
  args: { name: "db-system-id" },
  isRequired: true,
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
const optManagementPolicy: Fig.Option = {
  name: "--management-policy",
  args: { name: "json" },
};
const optReplicationConfig: Fig.Option = {
  name: "--replication-config",
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
  description:
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optOdspInsightDetails: Fig.Option = {
  name: "--odsp-insight-details",
  args: { name: "json" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment that contains the database system",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConfigId: Fig.Option = {
  name: "--config-id",
  description:
    "The OCID of the configuration associated with the database system",
  args: { name: "config-id" },
};
const optCredentials: Fig.Option = {
  name: "--credentials",
  args: { name: "json" },
};
const optDbVersion: Fig.Option = {
  name: "--db-version",
  description: "Version of database system software",
  args: { name: "db-version" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A user-provided description of a database system",
  args: { name: "description" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name for the database system",
  args: { name: "display-name" },
  isRequired: true,
};
const optInstanceCount: Fig.Option = {
  name: "--instance-count",
  description:
    "Count of database instances nodes to be created in the database system",
  args: { name: "integer" },
};
const optInstanceMemorySizeInGbs: Fig.Option = {
  name: "--instance-memory-size-in-gbs",
  description:
    "The total amount of memory available to each database instance node, in gigabytes",
  args: { name: "integer" },
};
const optInstanceOcpuCount: Fig.Option = {
  name: "--instance-ocpu-count",
  description:
    "The total number of OCPUs available to each database instance node",
  args: { name: "integer" },
};
const optInstancesDetails: Fig.Option = {
  name: "--instances-details",
  description: "Details of database instances nodes to be created",
  args: { name: "json" },
};
const optNetworkDetails: Fig.Option = {
  name: "--network-details",
  args: { name: "json" },
  isRequired: true,
};
const optShape: Fig.Option = {
  name: "--shape",
  description: "The name of the shape for the database instance node",
  args: { name: "shape" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSystemType: Fig.Option = {
  name: "--system-type",
  description: "Type of the database system",
  args: { name: "system-type" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optStorageDetails: Fig.Option = {
  name: "--storage-details",
  args: { name: "json" },
  isRequired: true,
};
const optInstanceMemorySizeInGbs2: Fig.Option = {
  name: "--instance-memory-size-in-gbs",
  description:
    "The total amount of memory available to each database system node, in gigabytes",
  args: { name: "integer" },
};
const optInstanceOcpuCount2: Fig.Option = {
  name: "--instance-ocpu-count",
  description:
    "The total number of OCPUs available to each database system node",
  args: { name: "integer" },
};
const optShape2: Fig.Option = {
  name: "--shape",
  description: "The name of the shape for the database system nodes",
  args: { name: "shape" },
};
const optBackupId: Fig.Option = {
  name: "--backup-id",
  description: "A unique identifier for the backup",
  args: { name: "backup-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optDbConfigurationParams: Fig.Option = {
  name: "--db-configuration-params",
  args: { name: "json" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "A user-provided description of the database system",
  args: { name: "description" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name for the database system",
  args: { name: "display-name" },
};
const optNetworkDetails2: Fig.Option = {
  name: "--network-details",
  args: { name: "json" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optStorageDetails2: Fig.Option = {
  name: "--storage-details",
  args: { name: "json" },
};
const optConfigurationId: Fig.Option = {
  name: "--configuration-id",
  description: "A unique identifier for the configuration",
  args: { name: "configuration-id" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optSource: Fig.Option = { name: "--source", args: { name: "json" } };
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optKerberosAuthDetails: Fig.Option = {
  name: "--kerberos-auth-details",
  args: { name: "json" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETING", "DELETED", "FAILED"] },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "psql",
  description: "PGSQL Control Plane",
  subcommands: [
    {
      name: "db-system-collection",
      description: "Results of a database system search",
      subcommands: [
        {
          name: "list-db-systems",
          description: "Returns a list of database systems",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources if their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optDisplayName3,
            {
              name: "--id",
              description: "A unique identifier for the database system",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--system-role",
              description:
                "A filter to return only DbSystem resources if their systemRole matches the given value",
              args: {
                suggestions: [
                  "STANDALONE_DB_SYSTEM",
                  "PRIMARY_DB_SYSTEM",
                  "WARM_STANDBY_DB_SYSTEM",
                  "PILOT_LIGHT_DB_SYSTEM",
                ],
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
      name: "insight-capability-summary",
      description: "Describes supported insight types and their capabilities",
      subcommands: [
        {
          name: "list-insight-capabilities",
          description:
            "Returns the supported insight types and their capabilities",
          options: [optLimit, optPage, optAll, optPageSize, optFromJson],
        },
      ],
    },
    {
      name: "backup",
      description: "Database system backup information",
      subcommands: [
        {
          name: "backup-copy",
          description: "Backup Copy Request to copy back up in remote region",
          options: [
            optBackupId,
            {
              name: "--compartment-id",
              description: "Target compartment to place a new backup",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--regions",
              description: "List of region names of the remote regions",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--retention-period",
              description: "Retention period in days of the backup copy",
              args: { name: "integer" },
            },
            {
              name: "--kms-key-ids",
              description: "List of key ids of the remote regions",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a backup from one compartment to another",
          options: [
            optBackupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the backup will be moved",
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
          description: "Creates a new backup",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly display name for the backup",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the backup",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--db-system-id",
              description: "The ID of the database system",
              args: { name: "db-system-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the backup",
              args: { name: "description" },
            },
            {
              name: "--retention-period",
              description: "Backup retention period in days",
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
          description: "Deletes a backup by identifier",
          options: [
            optBackupId,
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
          description: "Gets a backup by identifier",
          options: [optBackupId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the backup",
          options: [
            optBackupId,
            {
              name: "--display-name",
              description: "A user-friendly display name for the backup",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description for the backup",
              args: { name: "description" },
            },
            {
              name: "--retention-period",
              description: "Backup retention period in days",
              args: { name: "integer" },
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
                suggestions: [
                  "CREATING",
                  "ACTIVE",
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
      name: "configuration-collection",
      description: "Results of a configuration search",
      subcommands: [
        {
          name: "list-configurations",
          description: "Returns a list of configurations",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources if their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: ["ACTIVE", "DELETING", "DELETED", "FAILED"],
              },
            },
            {
              name: "--config-type",
              description:
                "A filter to return only resources if their configType matches the given configType",
              args: { suggestions: ["DEFAULT", "CUSTOM", "COPIED"] },
            },
            optDisplayName3,
            {
              name: "--db-version",
              description: "Version of the PostgreSQL database, such as 14.9",
              args: { name: "db-version" },
            },
            {
              name: "--shape",
              description:
                "The compute name of the shape for the configuration",
              args: { name: "shape" },
            },
            {
              name: "--configuration-id",
              description: "A unique identifier for the configuration",
              args: { name: "configuration-id" },
            },
            {
              name: "--instance-ocpu-count",
              description: "The instance ocpu count for the configuration",
              args: { name: "integer" },
            },
            {
              name: "--instance-memory-size-in-gbs",
              description:
                "The instance memory size in GBs for the configuration",
              args: { name: "integer" },
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
      name: "default-configuration",
      description: "Default configurations for PostgreSQL database systems",
      subcommands: [
        {
          name: "get",
          description: "Gets a default configuration by identifier",
          options: [
            {
              name: "--default-configuration-id",
              description: "A unique identifier for the configuration",
              args: { name: "default-configuration-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "configuration",
      description: "PostgreSQL configuration for a database system",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a configuration from one compartment to another",
          options: [
            optConfigurationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the configuration will be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new configuration",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly display name for the configuration",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the configuration",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--db-version",
              description: "Version of the PostgreSQL database",
              args: { name: "db-version" },
              isRequired: true,
            },
            {
              name: "--db-configuration-overrides",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Details about the configuration set",
              args: { name: "description" },
            },
            {
              name: "--shape",
              description: "The name of the shape for the configuration",
              args: { name: "shape" },
            },
            {
              name: "--is-flexible",
              description: "Whether the configuration supports flexible shapes",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--instance-ocpu-count",
              description: "CPU core count",
              args: { name: "integer" },
            },
            {
              name: "--instance-memory-size-in-gbs",
              description: "Memory size in gigabytes with 1GB increment",
              args: { name: "integer" },
            },
            {
              name: "--compatible-shapes",
              description:
                "Indicates the collection of compatible shapes for this configuration",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--system-tags",
              description: "System tags for this resource",
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
          description: "Deletes a configuration by identifier",
          options: [
            optConfigurationId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a configuration by identifier",
          options: [optConfigurationId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates a display name or description of the configuration",
          options: [
            optConfigurationId,
            {
              name: "--display-name",
              description: "A user-friendly display name for the configuration",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Details about the configuration set",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--compatible-shapes",
              description:
                "Indicates the collection of compatible shapes for this configuration",
              args: { name: "json" },
            },
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
      name: "connection-details",
      description: "Database system connection information",
      subcommands: [
        {
          name: "get",
          description: "Gets the database system connection details",
          options: [optDbSystemId, optFromJson],
        },
      ],
    },
    {
      name: "db-system",
      description: "Information about a database system",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a database system from one compartment to another",
          options: [
            optDbSystemId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the database system should be moved",
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
          name: "change-role-to-replica",
          description:
            "Changes a standalone database system's role to warm-standby replica",
          options: [
            {
              name: "--primary-db-system-id",
              description: "The OCID of the primary database system",
              args: { name: "primary-db-system-id" },
              isRequired: true,
            },
            optDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-role-to-standalone",
          description:
            "Convert a replica database system into a standalone database system",
          options: [
            {
              name: "--change-mode",
              description:
                "Type of the mode choose during change role operation",
              args: { suggestions: ["REPLAY_PENDING_UPDATES", "IMMEDIATELY"] },
              isRequired: true,
            },
            optDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optStorageDetails,
            optShape,
            optNetworkDetails,
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optSource,
            optReplicationConfig,
            optOdspInsightDetails,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-system-oci-optimized-storage-details",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optShape,
            optNetworkDetails,
            {
              name: "--storage-details-is-regionally-durable",
              description:
                "Specifies if the block volume used for the database system is regional or AD-local",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optSource,
            optReplicationConfig,
            optOdspInsightDetails,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--storage-details-availability-domain",
              description:
                "Specifies the availability domain of AD-local storage",
              args: { name: "storage-details-availability-domain" },
            },
            {
              name: "--storage-details-kms-key-id",
              description:
                "The OCID of the Vault service key to assign as the master encryption key for the database system",
              args: { name: "storage-details-kms-key-id" },
            },
            {
              name: "--storage-details-iops",
              description:
                "Guaranteed input/output storage requests per second (IOPS) available to the database system",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-system-backup-source-details",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optStorageDetails,
            optShape,
            optNetworkDetails,
            {
              name: "--source-backup-id",
              description: "The OCID of the database system backup",
              args: { name: "source-backup-id" },
              isRequired: true,
            },
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optReplicationConfig,
            optOdspInsightDetails,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source-is-having-restore-config-overrides",
              description: "Deprecated",
              args: { name: "boolean", suggestions: ["true", "false"] },
              deprecated: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-system-primary-db-system-source-details",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optStorageDetails,
            optShape,
            optNetworkDetails,
            {
              name: "--source-primary-db-system-id",
              description: "The OCID of the primary database system",
              args: { name: "source-primary-db-system-id" },
              isRequired: true,
            },
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optReplicationConfig,
            optOdspInsightDetails,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-system-none-source-details",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optStorageDetails,
            optShape,
            optNetworkDetails,
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optReplicationConfig,
            optOdspInsightDetails,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-system-point-in-time-db-system-source-details",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optStorageDetails,
            optShape,
            optNetworkDetails,
            {
              name: "--source-db-system-id",
              description:
                "The OCID of the source database system which will be used to perform point-in-time recovery",
              args: { name: "source-db-system-id" },
              isRequired: true,
            },
            {
              name: "--source-time-to-restore",
              description:
                "The target point-in-time of the source database system that will be restored",
              args: { name: "datetime" },
              isRequired: true,
            },
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optReplicationConfig,
            optOdspInsightDetails,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-system-disabled-insight-details",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optStorageDetails,
            optShape,
            optNetworkDetails,
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optSource,
            optReplicationConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-system-enabled-insight-details",
          description: "Creates a new database system",
          options: [
            optDisplayName,
            optCompartmentId,
            optDbVersion,
            optStorageDetails,
            optShape,
            optNetworkDetails,
            {
              name: "--odsp-insight-details-odsp-insight-list",
              description: "List of ODSP Insight and their configurations",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optSystemType,
            optConfigId,
            optInstanceOcpuCount,
            optInstanceMemorySizeInGbs,
            optInstanceCount,
            optInstancesDetails,
            optCredentials,
            optManagementPolicy,
            optSource,
            optReplicationConfig,
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
          description: "Deletes a database system by identifier",
          options: [
            optDbSystemId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "failover",
          description: "Runs a failover operation",
          options: [
            optDbSystemId,
            {
              name: "--ad",
              description:
                "The preferred AD for regions with three availability domains",
              args: { name: "ad" },
            },
            {
              name: "--db-instance-id",
              description: "The OCID of the database instance node",
              args: { name: "db-instance-id" },
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
          description: "Gets a database system by identifier",
          options: [
            optDbSystemId,
            {
              name: "--excluded-fields",
              description:
                "A filter to exclude database configuration when this query parameter is set to OverrideDbConfig",
              args: { suggestions: ["dbConfigurationParams"] },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-primary-db-instance",
          description: "Gets the primary database instance node details",
          options: [optDbSystemId, optFromJson],
        },
        {
          name: "patch",
          description:
            "Modifies the database system by adding or removing database instance nodes",
          options: [
            optDbSystemId,
            {
              name: "--items",
              description: "List of patch instructions",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "reset-master-user-password",
          description: "Resets the database system's master password",
          options: [
            optDbSystemId,
            {
              name: "--password-details",
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
          name: "reset-master-user-password-plain-text-password-details",
          description: "Resets the database system's master password",
          options: [
            optDbSystemId,
            {
              name: "--password-details-password",
              description: "The database system password",
              args: { name: "password-details-password" },
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
          name: "reset-master-user-password-vault-secret-password-details",
          description: "Resets the database system's master password",
          options: [
            optDbSystemId,
            {
              name: "--password-details-secret-id",
              description:
                "The OCID of the secret where the password is stored",
              args: { name: "password-details-secret-id" },
              isRequired: true,
            },
            {
              name: "--password-details-secret-version",
              description: "The secret version of the stored password",
              args: { name: "password-details-secret-version" },
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
          name: "restart-db-instance-in",
          description: "Restarts the running database instance node",
          options: [
            optDbSystemId,
            {
              name: "--db-instance-id",
              description:
                "A unique identifier for the database instance, or node",
              args: { name: "db-instance-id" },
              isRequired: true,
            },
            {
              name: "--restart-type",
              description: "The restart type for the database instance",
              args: { suggestions: ["NORMAL", "NODE_REBOOT"] },
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
          name: "restore",
          description: "Restore the database system",
          options: [
            optDbSystemId,
            {
              name: "--backup-id",
              description: "The OCID of the database system backup",
              args: { name: "backup-id" },
            },
            {
              name: "--ad",
              description: "The desired AD for regions with three ADs",
              args: { name: "ad" },
            },
            {
              name: "--time-to-restore",
              description:
                "The target point-in-time that the database system restore can get started from",
              args: { name: "datetime" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Start the DB System",
          options: [
            optDbSystemId,
            optInstanceOcpuCount2,
            optInstanceMemorySizeInGbs2,
            optShape2,
            {
              name: "--config-id",
              description: "The updated configId for the database system",
              args: { name: "config-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stop the DB System",
          options: [
            optDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switch-over",
          description:
            "Switchover the roles between a primary database system and its replica",
          options: [
            {
              name: "--replica-db-system-id",
              description:
                "The OCID of the replica database system that will get the primary role after switchover",
              args: { name: "replica-db-system-id" },
              isRequired: true,
            },
            optDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the database system",
          options: [
            optDbSystemId,
            optDisplayName2,
            optDescription2,
            optShape2,
            optInstanceOcpuCount2,
            optInstanceMemorySizeInGbs2,
            optDbConfigurationParams,
            optManagementPolicy,
            optStorageDetails2,
            optReplicationConfig,
            optNetworkDetails2,
            optKerberosAuthDetails,
            optOdspInsightDetails,
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
          name: "update-db-system-disabled-kerberos-auth-details",
          description: "Updates the database system",
          options: [
            optDbSystemId,
            optDisplayName2,
            optDescription2,
            optShape2,
            optInstanceOcpuCount2,
            optInstanceMemorySizeInGbs2,
            optDbConfigurationParams,
            optManagementPolicy,
            optStorageDetails2,
            optReplicationConfig,
            optNetworkDetails2,
            optOdspInsightDetails,
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
          name: "update-db-system-enabled-kerberos-auth-details",
          description: "Updates the database system",
          options: [
            optDbSystemId,
            {
              name: "--kerberos-auth-details-credentials",
              description:
                "List of Kerberos Credentials to be configured for the dbsystem",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription2,
            optShape2,
            optInstanceOcpuCount2,
            optInstanceMemorySizeInGbs2,
            optDbConfigurationParams,
            optManagementPolicy,
            optStorageDetails2,
            optReplicationConfig,
            optNetworkDetails2,
            optOdspInsightDetails,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--kerberos-auth-details-backup-credentials",
              description: "Optional",
              args: { name: "json" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-db-system-disabled-insight-details",
          description: "Updates the database system",
          options: [
            optDbSystemId,
            optDisplayName2,
            optDescription2,
            optShape2,
            optInstanceOcpuCount2,
            optInstanceMemorySizeInGbs2,
            optDbConfigurationParams,
            optManagementPolicy,
            optStorageDetails2,
            optReplicationConfig,
            optNetworkDetails2,
            optKerberosAuthDetails,
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
          name: "update-db-system-enabled-insight-details",
          description: "Updates the database system",
          options: [
            optDbSystemId,
            {
              name: "--odsp-insight-details-odsp-insight-list",
              description: "List of ODSP Insight and their configurations",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription2,
            optShape2,
            optInstanceOcpuCount2,
            optInstanceMemorySizeInGbs2,
            optDbConfigurationParams,
            optManagementPolicy,
            optStorageDetails2,
            optReplicationConfig,
            optNetworkDetails2,
            optKerberosAuthDetails,
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
          name: "update-db-system-db-instance",
          description: "Updates the database instance node",
          options: [
            optDbSystemId,
            {
              name: "--db-instance-id",
              description: "A unique identifier for the database instance node",
              args: { name: "db-instance-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A user-friendly display name of the database instance node",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A user-provided description of the database instance node",
              args: { name: "description" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade db version of the database system",
          options: [
            optDbSystemId,
            {
              name: "--db-version",
              description:
                "The target major version of the database system software",
              args: { name: "db-version" },
              isRequired: true,
            },
            {
              name: "--config-id",
              description:
                "The OCID of the configuration for target database version to be associated with database system",
              args: { name: "config-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--options",
              description: "Optional post-upgrade operations to run",
              args: {
                suggestions: [
                  "RUN_POST_UPGRADE_VERIFICATION",
                  "RUN_POST_UPGRADE_VACUUM",
                ],
              },
              isRepeatable: true,
            },
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
            "Returns a (paginated) list of logs for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "get",
          description: "Gets details of the work request with the given ID",
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
            {
              name: "--status",
              description:
                "A filter to return only resources if their lifecycleState matches the given OperationStatus",
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
              description: "The ID of the resource affected by the request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "default-configuration-collection",
      description: "Results of a configuration search",
      subcommands: [
        {
          name: "list-default-configurations",
          description: "Returns a list of default configurations",
          options: [
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources if their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: ["ACTIVE", "DELETING", "DELETED", "FAILED"],
              },
            },
            optDisplayName3,
            {
              name: "--db-version",
              description: "Version of the PostgreSQL database, such as 14.9",
              args: { name: "db-version" },
            },
            {
              name: "--shape",
              description:
                "The compute name of the shape for the configuration",
              args: { name: "shape" },
            },
            {
              name: "--instance-ocpu-count",
              description: "The instance ocpu count for the configuration",
              args: { name: "integer" },
            },
            {
              name: "--instance-memory-size-in-gbs",
              description:
                "The instance memory size in GBs for the configuration",
              args: { name: "integer" },
            },
            {
              name: "--configuration-id",
              description: "A unique identifier for the configuration",
              args: { name: "configuration-id" },
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
      name: "shape-summary",
      description: "Summary of the database system shape",
      subcommands: [
        {
          name: "list-shapes",
          description: "Returns the list of shapes allowed in the region",
          options: [
            optCompartmentId2,
            {
              name: "--id",
              description: "A filter to return the feature by the shape name",
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
      name: "db-system-replica-collection",
      description: "Results of replica database system search",
      subcommands: [
        {
          name: "list-db-system-replicas",
          description: "Returns a list of replica database systems",
          options: [
            optDbSystemId,
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
      name: "pitr-details",
      description: "Point-in-time recovery details",
      subcommands: [
        {
          name: "get",
          description: "Gets the database system PITR details",
          options: [optDbSystemId, optFromJson],
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
            "Returns a (paginated) list of errors for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      name: "backup-collection",
      description: "Results of a backup search",
      subcommands: [
        {
          name: "list-backups",
          description: "Returns a list of backups",
          options: [
            optCompartmentId2,
            {
              name: "--time-started",
              description: "The start date for getting backups",
              args: { name: "datetime" },
            },
            {
              name: "--time-ended",
              description: "The end date for getting backups",
              args: { name: "datetime" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources if their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName3,
            {
              name: "--backup-id",
              description: "A unique identifier for the backup",
              args: { name: "backup-id" },
            },
            {
              name: "--id",
              description: "A unique identifier for the database system",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--backup-source-type",
              description:
                "A filter to return only backups whose backupSourceType matches the given backupSourceType",
              args: { name: "backup-source-type" },
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
