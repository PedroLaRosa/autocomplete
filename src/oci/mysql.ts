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
  description: "The DB System OCID",
  args: { name: "db-system-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return in a paginated list call",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The value of the opc-next-page or opc-prev-page response header from the previous list call",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment OCID",
  args: { name: "compartment-id" },
  isRequired: true,
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
const optIfNoneMatch: Fig.Option = {
  name: "--if-none-match",
  description: "For conditional requests",
  args: { name: "if-none-match" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use (ASC or DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optBackupId: Fig.Option = {
  name: "--backup-id",
  description: "The OCID of the Backup",
  args: { name: "backup-id" },
  isRequired: true,
};
const optChannelId: Fig.Option = {
  name: "--channel-id",
  description: "The Channel OCID",
  args: { name: "channel-id" },
  isRequired: true,
};
const optDefinedTags2: Fig.Option = {
  name: "--defined-tags",
  description: "Usage of predefined tag keys",
  args: { name: "json" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optFreeformTags2: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optBlueGreenDeploymentId: Fig.Option = {
  name: "--blue-green-deployment-id",
  description: "The OCID of the blue/green deployment",
  args: { name: "blue-green-deployment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only the resource matching the given display name exactly",
  args: { name: "display-name" },
};
const optEncryptData: Fig.Option = {
  name: "--encrypt-data",
  args: { name: "json" },
};
const optAccessMode: Fig.Option = {
  name: "--access-mode",
  description:
    "The access mode indicating if the database access will be restricted only to administrators or not",
  args: { name: "access-mode" },
};
const optAdminPassword: Fig.Option = {
  name: "--admin-password",
  description: "The password for the administrative user",
  args: { name: "admin-password" },
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description:
    "The availability domain on which to deploy the Read/Write endpoint",
  args: { name: "availability-domain" },
};
const optBackupPolicy: Fig.Option = {
  name: "--backup-policy",
  args: { name: "json" },
};
const optCrashRecovery: Fig.Option = {
  name: "--crash-recovery",
  description:
    "Whether to run the DB System with InnoDB Redo Logs and the Double Write Buffer enabled or disabled",
  args: { suggestions: ["ENABLED", "DISABLED"] },
};
const optCustomerContacts: Fig.Option = {
  name: "--customer-contacts",
  description:
    "The list of customer email addresses that receive information from Oracle about the specified OCI DB System",
  args: { name: "json" },
};
const optDatabaseConsole: Fig.Option = {
  name: "--database-console",
  args: { name: "json" },
};
const optDatabaseManagement: Fig.Option = {
  name: "--database-management",
  description:
    "Whether to enable monitoring via the Database Management service",
  args: { suggestions: ["ENABLED", "DISABLED"] },
};
const optDatabaseMode: Fig.Option = {
  name: "--database-mode",
  description:
    "The database mode indicating the types of statements that will be allowed to run in the DB system",
  args: { name: "database-mode" },
};
const optDbSystemId2: Fig.Option = {
  name: "--db-system-id",
  description: "The DB System OCID",
  args: { name: "db-system-id" },
};
const optDeletionPolicy: Fig.Option = {
  name: "--deletion-policy",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "User-provided data about the DB System",
  args: { name: "description" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the DB System",
  args: { name: "display-name" },
};
const optFaultDomain: Fig.Option = {
  name: "--fault-domain",
  description: "The fault domain on which to deploy the Read/Write endpoint",
  args: { name: "fault-domain" },
};
const optHostnameLabel: Fig.Option = {
  name: "--hostname-label",
  description: "The hostname for the primary endpoint of the DB System",
  args: { name: "hostname-label" },
};
const optIpv6AddressSubnetCidrPair: Fig.Option = {
  name: "--ipv6-address-subnet-cidr-pair",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optIsAutoExpandStorageEnabled: Fig.Option = {
  name: "--is-auto-expand-storage-enabled",
  description:
    "Checks whether Automatic Storage Expansion should be enabled for the dbsystem",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsHighlyAvailable: Fig.Option = {
  name: "--is-highly-available",
  description: "Specifies if the DB System is highly available",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optMaintenance: Fig.Option = {
  name: "--maintenance",
  args: { name: "json" },
};
const optMaxStorageSizeInGbs: Fig.Option = {
  name: "--max-storage-size-in-gbs",
  description:
    "Sets the maximum storage size a db system can automatically be expanded to",
  args: { name: "integer" },
};
const optMysqlVersion: Fig.Option = {
  name: "--mysql-version",
  description: "The specific MySQL version identifier",
  args: { name: "mysql-version" },
};
const optNsgIds: Fig.Option = {
  name: "--nsg-ids",
  description: "Network Security Group OCIDs used for the VNIC attachment",
  args: { name: "json" },
};
const optPort: Fig.Option = {
  name: "--port",
  description: "The port for primary endpoint of the DB System to listen on",
  args: { name: "integer" },
};
const optPortX: Fig.Option = {
  name: "--port-x",
  description: "The TCP network port on which X Plugin listens for connections",
  args: { name: "integer" },
};
const optReadEndpoint: Fig.Option = {
  name: "--read-endpoint",
  args: { name: "json" },
};
const optRest: Fig.Option = { name: "--rest", args: { name: "json" } };
const optSecureConnections: Fig.Option = {
  name: "--secure-connections",
  args: { name: "json" },
};
const optSecurityAttributes: Fig.Option = {
  name: "--security-attributes",
  description: "Security Attributes for this resource",
  args: { name: "json" },
};
const optTelemetryConfiguration: Fig.Option = {
  name: "--telemetry-configuration",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the WorkRequest",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAdminUsername: Fig.Option = {
  name: "--admin-username",
  description: "The username for the administrative user",
  args: { name: "admin-username" },
};
const optConfigurationId: Fig.Option = {
  name: "--configuration-id",
  description: "The OCID of the Configuration to be used for this DB System",
  args: { name: "configuration-id" },
};
const optConfigurationId2: Fig.Option = {
  name: "--configuration-id",
  description: "The OCID of the Configuration",
  args: { name: "configuration-id" },
  isRequired: true,
};
const optConfigurationId3: Fig.Option = {
  name: "--configuration-id",
  description: "The requested Configuration instance",
  args: { name: "configuration-id" },
};
const optDataStorageSizeInGbs: Fig.Option = {
  name: "--data-storage-size-in-gbs",
  description:
    "Initial size of the data volume in GBs that will be created and attached",
  args: { name: "integer" },
};
const optIpAddress: Fig.Option = {
  name: "--ip-address",
  description: "The IP address the DB System is configured to listen on",
  args: { name: "ip-address" },
};
const optIsIpv6Enabled: Fig.Option = {
  name: "--is-ipv6-enabled",
  description:
    "Whether to allocate an IPv6 address at DB system creation from an IPv6 enabled subnet",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optReplicaId: Fig.Option = {
  name: "--replica-id",
  description: "The Replica OCID",
  args: { name: "replica-id" },
  isRequired: true,
};
const optShapeName: Fig.Option = {
  name: "--shape-name",
  description: "The name of the shape",
  args: { name: "shape-name" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["displayName", "timeCreated"] },
};
const optSubnetId: Fig.Option = {
  name: "--subnet-id",
  description: "The OCID of the subnet the DB System is associated with",
  args: { name: "subnet-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "mysql",
  description: "MySQL Database Service",
  subcommands: [
    {
      name: "channel",
      description: "A Channel connecting a DB System to an external entity",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified Channel",
          options: [
            optChannelId,
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
          description:
            "Gets the full details of the specified Channel, including the user-specified configuration parameters",
          options: [optChannelId, optIfNoneMatch, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all the Channels that match the specified filters",
          options: [
            optCompartmentId,
            optDbSystemId2,
            {
              name: "--channel-id",
              description: "The OCID of the Channel",
              args: { name: "channel-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description: "The LifecycleState of the Channel",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--is-enabled",
              description: "If true, returns only Channels that are enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reset",
          description:
            "Resets the specified Channel by purging its cached information",
          options: [
            optChannelId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "resume",
          description:
            "Resumes an enabled Channel that has become Inactive due to an error",
          options: [
            optChannelId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-from-mysql",
          description:
            "Creates a Channel to establish replication from a source to a target",
          options: [
            {
              name: "--source-hostname",
              description: "The network address of the MySQL instance",
              args: { name: "source-hostname" },
              isRequired: true,
            },
            {
              name: "--source-username",
              description:
                "The name of the replication user on the source MySQL instance",
              args: { name: "source-username" },
              isRequired: true,
            },
            {
              name: "--source-password",
              description: "The password for the replication user",
              args: { name: "source-password" },
              isRequired: true,
            },
            {
              name: "--source-ssl-mode",
              description: "The SSL mode of the Channel",
              args: { name: "source-ssl-mode" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the Channel",
              args: { name: "display-name" },
            },
            {
              name: "--is-enabled",
              description:
                "Whether the Channel should be enabled upon creation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--description",
              description: "User provided information about the Channel",
              args: { name: "description" },
            },
            optFreeformTags2,
            optDefinedTags2,
            {
              name: "--source-port",
              description: "The port the source MySQL instance listens on",
              args: { name: "integer" },
            },
            { name: "--source-ssl-ca-certificate", args: { name: "json" } },
            {
              name: "--source-anonymous-transactions-handling",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--use-ipv6-on-dual-stack",
              description:
                "Whether the connection of the channel will be requested using the IPv6 address of the dual stack DB system",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--target-db-system-id",
              args: { name: "target-db-system-id" },
              isRequired: true,
            },
            {
              name: "--target-applier-username",
              args: { name: "target-applier-username" },
            },
            {
              name: "--target-channel-name",
              args: { name: "target-channel-name" },
            },
            { name: "--target-filters", args: { name: "json" } },
            {
              name: "--target-tables-without-primary-key-handling",
              args: { name: "target-tables-without-primary-key-handling" },
            },
            { name: "--target-delay-in-seconds", args: { name: "integer" } },
            optFromJson,
          ],
        },
        {
          name: "update-from-mysql",
          description: "Updates the properties of the specified Channel",
          options: [
            optChannelId,
            {
              name: "--display-name",
              description: "The user-friendly name for the Channel",
              args: { name: "display-name" },
            },
            {
              name: "--is-enabled",
              description: "Whether the Channel should be enabled or disabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--description",
              description: "User provided description of the Channel",
              args: { name: "description" },
            },
            optFreeformTags2,
            optDefinedTags2,
            optIfMatch,
            {
              name: "--source-hostname",
              description: "The network address of the MySQL instance",
              args: { name: "source-hostname" },
            },
            {
              name: "--source-port",
              description: "The port the source MySQL instance listens on",
              args: { name: "integer" },
            },
            {
              name: "--source-username",
              description:
                "The name of the replication user on the source MySQL instance",
              args: { name: "source-username" },
            },
            {
              name: "--source-password",
              description: "The password for the replication user",
              args: { name: "source-password" },
            },
            {
              name: "--source-ssl-mode",
              description: "The SSL mode of the Channel",
              args: { name: "source-ssl-mode" },
            },
            { name: "--source-ssl-ca-certificate", args: { name: "json" } },
            {
              name: "--source-anonymous-transactions-handling",
              args: { name: "json" },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--use-ipv6-on-dual-stack",
              description:
                "Whether the connection of the channel will be requested using the IPv6 address of the dual stack DB system",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--target-applier-username",
              args: { name: "target-applier-username" },
            },
            {
              name: "--target-channel-name",
              args: { name: "target-channel-name" },
            },
            { name: "--target-filters", args: { name: "json" } },
            {
              name: "--target-tables-without-primary-key-handling",
              args: { name: "target-tables-without-primary-key-handling" },
            },
            { name: "--target-delay-in-seconds", args: { name: "integer" } },
            optFromJson,
          ],
        },
        {
          name: "status",
          description:
            "Runtime status summary of a Channel, aggregating information about health and operational indicators",
          subcommands: [
            {
              name: "generate",
              description:
                "Initiates an asynchronous request to collect the current status of the specified Channel",
              options: [
                optChannelId,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Returns the most up-to-date status of the specified Channel",
              options: [optChannelId, optFromJson],
            },
          ],
        },
      ],
    },
    {
      name: "backup",
      description:
        "A full or incremental copy of a DB System which can be used to create a new DB System or recover a DB System",
      subcommands: [
        {
          name: "cancel-backup-deletion",
          description:
            "Cancels the scheduled deletion of a backup and moves it to ACTIVE state",
          options: [
            optBackupId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a DB System Backup into a different compartment",
          options: [
            optBackupId,
            {
              name: "--compartment-id",
              description: "OCID of the target compartment",
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
          name: "copy",
          description:
            "Creates a copy of a DB system backup available in the specified source region",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment the DB system backup is to be copied to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--source-backup-id",
              description: "The OCID of DB system backup to be copied",
              args: { name: "source-backup-id" },
              isRequired: true,
            },
            {
              name: "--source-region",
              description:
                "The region identifier of the source region where the DB system backup exists",
              args: { name: "source-region" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "A user-supplied description for the DB system backup",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description:
                "A user-supplied display name for the DB system backup",
              args: { name: "display-name" },
            },
            {
              name: "--backup-copy-retention-in-days",
              description:
                "Number of days to retain the copied DB system backup",
              args: { name: "integer" },
            },
            optEncryptData,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a backup of a DB System",
          options: [
            {
              name: "--db-system-id",
              description:
                "The OCID of the DB System the Backup is associated with",
              args: { name: "db-system-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-supplied display name for the backup",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A user-supplied description for the backup",
              args: { name: "description" },
            },
            {
              name: "--soft-delete",
              description:
                "Retains the backup to be deleted due to the retention policy in DELETE SCHEDULED state for 7 days before",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--backup-type",
              description: "The type of backup",
              args: { suggestions: ["FULL", "INCREMENTAL"] },
            },
            {
              name: "--retention-in-days",
              description: "Number of days to retain this backup",
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
          description: "Delete a Backup",
          options: [
            optBackupId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "export",
          description:
            "Export logical data from a DB system backup to an Object Storage bucket",
          options: [
            optBackupId,
            {
              name: "--bucket-name",
              description: "The Object Storage bucket name",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "The Object Storage namespace",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            { name: "--export-options", args: { name: "json" } },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet which the temporary MySQL instance is associated with",
              args: { name: "subnet-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get information about the specified Backup",
          options: [optBackupId, optIfNoneMatch, optFromJson],
        },
        {
          name: "list",
          description: "Get a list of DB System backups",
          options: [
            optCompartmentId,
            {
              name: "--backup-id",
              description: "Backup OCID",
              args: { name: "backup-id" },
            },
            {
              name: "--lifecycle-state",
              description: "Backup Lifecycle State",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "DELETE_SCHEDULED",
                ],
              },
            },
            optDbSystemId2,
            optDisplayName,
            {
              name: "--soft-delete",
              description: "Backup Soft Delete",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--backup-preparation-status",
              description:
                "Indicates whether the backup has been prepared successfully",
              args: { suggestions: ["PREPARED", "NOT_PREPARED"] },
            },
            {
              name: "--validation-status",
              description: "Backup validation status",
              args: {
                suggestions: [
                  "NOT_VALIDATED",
                  "VALIDATED",
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
            },
            {
              name: "--creation-type",
              description: "Backup creationType",
              args: { suggestions: ["MANUAL", "AUTOMATIC", "OPERATOR"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeCreated", "timeUpdated", "displayName"],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the metadata of a Backup",
          options: [
            optBackupId,
            {
              name: "--display-name",
              description: "A user-supplied display name for the backup",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A user-supplied description for the backup",
              args: { name: "description" },
            },
            {
              name: "--soft-delete",
              description:
                "Retains the backup to be deleted due to the retention policy in DELETE SCHEDULED state for 7 days before",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--retention-in-days",
              description: "The number of days backups are retained",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "DELETE_SCHEDULED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate",
          description:
            "Request to validate the backup by checking the data consistency",
          options: [
            optBackupId,
            {
              name: "--is-prepared-backup-required",
              description:
                "Specifies whether the backup needs to be prepared for fast restore or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
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
      name: "db-system",
      description: "The CLI for the MySQL Database Service",
      subcommands: [
        {
          name: "maintenance-event",
          description: "The details of a maintenance event",
          subcommands: [
            {
              name: "list",
              description: "List all the maintenance events",
              options: [
                optDbSystemId,
                {
                  name: "--mysql-version-before-maintenance",
                  description: "The MySQL version before the maintenance event",
                  args: { name: "mysql-version-before-maintenance" },
                },
                {
                  name: "--mysql-version-after-maintenance",
                  description: "The MySQL version after the maintenance event",
                  args: { name: "mysql-version-after-maintenance" },
                },
                {
                  name: "--maintenance-type",
                  description: "How the maintenance event was triggered",
                  args: { suggestions: ["AUTOMATIC", "MANUAL", "SHAPE"] },
                },
                {
                  name: "--maintenance-action",
                  description: "The nature of the maintenance event",
                  args: {
                    suggestions: [
                      "DATABASE",
                      "OS_UPDATE",
                      "ONLINE_UPDATE",
                      "HARDWARE",
                    ],
                  },
                },
                {
                  name: "--maintenance-status",
                  description: "The last status of the maintenance event",
                  args: { suggestions: ["SUCCEEDED", "FAILED", "CANCELED"] },
                },
                optLimit,
                optPage,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "timeCreated",
                      "timeScheduled",
                      "timeStarted",
                      "timeEnded",
                    ],
                  },
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
          name: "create",
          description: "Creates and launches a DB System",
          options: [
            optCompartmentId2,
            optShapeName,
            optSubnetId,
            optDisplayName2,
            optDescription,
            optRest,
            optDatabaseConsole,
            optIsHighlyAvailable,
            optAvailabilityDomain,
            optFaultDomain,
            optConfigurationId,
            optMysqlVersion,
            optNsgIds,
            optSecurityAttributes,
            optAdminUsername,
            optAdminPassword,
            optDataStorageSizeInGbs,
            optHostnameLabel,
            optIpAddress,
            optIsIpv6Enabled,
            optPort,
            optPortX,
            optBackupPolicy,
            { name: "--source", args: { name: "json" } },
            optMaintenance,
            optFreeformTags2,
            optDefinedTags2,
            optDeletionPolicy,
            optCrashRecovery,
            optDatabaseManagement,
            optSecureConnections,
            optEncryptData,
            optDatabaseMode,
            optAccessMode,
            optCustomerContacts,
            optReadEndpoint,
            optTelemetryConfiguration,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIpv6AddressSubnetCidrPair,
            optIsAutoExpandStorageEnabled,
            optMaxStorageSizeInGbs,
            optFromJson,
          ],
        },
        {
          name: "clone",
          description: "Creates and launches a DB System",
          options: [
            optCompartmentId2,
            optShapeName,
            optSubnetId,
            {
              name: "--source-backup-id",
              description:
                "The OCID of the backup to be used as the source for the new DB System",
              args: { name: "source-backup-id" },
              isRequired: true,
            },
            optDisplayName2,
            optDescription,
            optRest,
            optDatabaseConsole,
            optIsHighlyAvailable,
            optAvailabilityDomain,
            optFaultDomain,
            optConfigurationId,
            optMysqlVersion,
            optNsgIds,
            optSecurityAttributes,
            optAdminUsername,
            optAdminPassword,
            optDataStorageSizeInGbs,
            optHostnameLabel,
            optIpAddress,
            optIsIpv6Enabled,
            optPort,
            optPortX,
            optBackupPolicy,
            optMaintenance,
            optFreeformTags2,
            optDefinedTags2,
            optDeletionPolicy,
            optCrashRecovery,
            optDatabaseManagement,
            optSecureConnections,
            optEncryptData,
            optDatabaseMode,
            optAccessMode,
            optCustomerContacts,
            optReadEndpoint,
            optTelemetryConfiguration,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsAutoExpandStorageEnabled,
            optMaxStorageSizeInGbs,
            optIpv6AddressSubnetCidrPair,
            optFromJson,
          ],
        },
        {
          name: "import",
          description: "Creates and launches a DB System",
          options: [
            optCompartmentId2,
            optShapeName,
            optSubnetId,
            optDisplayName2,
            optDescription,
            optRest,
            optDatabaseConsole,
            optIsHighlyAvailable,
            optAvailabilityDomain,
            optFaultDomain,
            optConfigurationId,
            optMysqlVersion,
            optNsgIds,
            optSecurityAttributes,
            optAdminUsername,
            optAdminPassword,
            optDataStorageSizeInGbs,
            optHostnameLabel,
            optIpAddress,
            optIsIpv6Enabled,
            optPort,
            optPortX,
            optBackupPolicy,
            optMaintenance,
            optFreeformTags2,
            optDefinedTags2,
            optDeletionPolicy,
            optCrashRecovery,
            optDatabaseManagement,
            optSecureConnections,
            optEncryptData,
            optDatabaseMode,
            optAccessMode,
            optCustomerContacts,
            optReadEndpoint,
            optTelemetryConfiguration,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--source-url",
              description:
                "The Pre-Authenticated Request (PAR) URL of the file you want to import from Object Storage",
              args: { name: "source-url" },
              isRequired: true,
            },
            optIsAutoExpandStorageEnabled,
            optMaxStorageSizeInGbs,
            optIpv6AddressSubnetCidrPair,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Delete a DB System, including terminating, detaching, removing",
          options: [
            optDbSystemId,
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
          description: "Get information about the specified DB System",
          options: [optDbSystemId, optIfNoneMatch, optFromJson],
        },
        {
          name: "list",
          description: "Get a list of DB Systems in the specified compartment",
          options: [
            optCompartmentId,
            optDbSystemId2,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description: "DbSystem Lifecycle State",
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
            optConfigurationId3,
            {
              name: "--is-up-to-date",
              description:
                "Filter instances if they are using the latest revision of the Configuration they are associated with",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--database-management",
              description:
                "Filter DB Systems by their Database Management configuration",
              args: { suggestions: ["ENABLED", "DISABLED"] },
              isRepeatable: true,
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            {
              name: "--is-heatwave-cluster-attached",
              description:
                "If true, return only DB Systems with a HeatWave cluster attached",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "restart",
          description: "Restarts the specified DB System",
          options: [
            optDbSystemId,
            {
              name: "--shutdown-type",
              description:
                'The InnoDB shutdown mode to use, following the option "innodb_fast_shutdown"',
              args: { suggestions: ["IMMEDIATE", "FAST", "SLOW"] },
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
          name: "start",
          description: "Start the specified DB System",
          options: [
            optDbSystemId,
            optIfMatch,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
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
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the specified DB System",
          options: [
            optDbSystemId,
            {
              name: "--shutdown-type",
              description:
                'The InnoDB shutdown mode to use, following the option "innodb_fast_shutdown"',
              args: { suggestions: ["IMMEDIATE", "FAST", "SLOW"] },
              isRequired: true,
            },
            optIfMatch,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
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
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the configuration of a DB System",
          options: [
            optDbSystemId,
            optDisplayName2,
            optDescription,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet the DB System is associated with",
              args: { name: "subnet-id" },
            },
            optNsgIds,
            optSecurityAttributes,
            optDatabaseMode,
            optAccessMode,
            optRest,
            optDatabaseConsole,
            optIsHighlyAvailable,
            optAvailabilityDomain,
            optFaultDomain,
            {
              name: "--shape-name",
              description: "The shape of the DB System",
              args: { name: "shape-name" },
            },
            optMysqlVersion,
            {
              name: "--configuration-id",
              description:
                "The OCID of the Configuration to be used for Instances in this DB System",
              args: { name: "configuration-id" },
            },
            {
              name: "--admin-username",
              description:
                "The username for the administrative user for the MySQL Instance",
              args: { name: "admin-username" },
            },
            optAdminPassword,
            {
              name: "--data-storage-size-in-gbs",
              description:
                "Expands the DB System's storage to the specified value",
              args: { name: "integer" },
            },
            optHostnameLabel,
            {
              name: "--ip-address",
              description:
                "The IP address the DB System should be configured to listen on the provided subnet",
              args: { name: "ip-address" },
            },
            {
              name: "--is-ipv6-enabled",
              description:
                "Whether to allocate an IPv6 address for the DB system in an IPv6 enabled subnet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optPort,
            optPortX,
            optBackupPolicy,
            optMaintenance,
            optFreeformTags2,
            optDefinedTags2,
            optDeletionPolicy,
            optCrashRecovery,
            optDatabaseManagement,
            optSecureConnections,
            optEncryptData,
            optCustomerContacts,
            optReadEndpoint,
            optTelemetryConfiguration,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsAutoExpandStorageEnabled,
            optMaxStorageSizeInGbs,
            optIpv6AddressSubnetCidrPair,
            optFromJson,
          ],
        },
        {
          name: "controlled-update",
          description:
            "Update the chosen subset of MySQL instances based on their role",
          options: [
            optDbSystemId,
            {
              name: "--target-mysql-version",
              description:
                "The MySQL version to be applied to the selected instances",
              args: { name: "target-mysql-version" },
            },
            {
              name: "--target-db-instances",
              description:
                "Defines the MySQL instances to be operated during a controlled update. - ALL_BUT_PRIMARY",
              args: { suggestions: ["ALL_BUT_PRIMARY", "PRIMARY_ONLY"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "status",
          description:
            "Runtime status summary of a DbSystem, aggregating information about availability and operational indicators",
          subcommands: [
            {
              name: "generate",
              description:
                "Initiates an asynchronous request to collect the current status of the specified DB System",
              options: [
                optDbSystemId,
                {
                  name: "--gtid-set-type",
                  description:
                    "Specifies whether to collect the full set of GTIDs executed on the DB System",
                  args: { suggestions: ["GTID_EXECUTED", "GTID_AVAILABLE"] },
                },
                {
                  name: "--gtid-set-to-apply",
                  description:
                    "Specifies the GTID set to be checked on the DB System to determine whether it has been applied",
                  args: { name: "gtid-set-to-apply" },
                },
                {
                  name: "--channel-ids",
                  description:
                    "List of Channel IDs for which to collect status information",
                  args: { name: "json" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Returns the most up-to-date status of the specified DB System, including the status of any requested Channels",
              options: [optDbSystemId, optFromJson],
            },
          ],
        },
        {
          name: "heatwave-cluster",
          description:
            "A HeatWave cluster is a database accelerator for a DB System",
          subcommands: [
            {
              name: "add",
              description: "Adds a HeatWave cluster to the DB System",
              options: [
                optDbSystemId,
                {
                  name: "--shape-name",
                  description:
                    "The shape determines resources to allocate to the HeatWave nodes - CPU cores, memory",
                  args: { name: "shape-name" },
                  isRequired: true,
                },
                {
                  name: "--cluster-size",
                  description:
                    "The number of analytics-processing nodes provisioned for the HeatWave cluster",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--is-lakehouse-enabled",
                  description:
                    "Enable/disable Lakehouse for the HeatWave cluster",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
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
                "Deletes the HeatWave cluster including terminating, detaching, removing",
              options: [
                optDbSystemId,
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
              description: "Gets information about the HeatWave cluster",
              options: [optDbSystemId, optIfNoneMatch, optFromJson],
            },
            {
              name: "restart",
              description: "Restarts the HeatWave cluster",
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
              name: "start",
              description: "Starts the HeatWave cluster",
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
              name: "stop",
              description: "Stops the HeatWave cluster",
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
              name: "update",
              description: "Updates the HeatWave cluster",
              options: [
                optDbSystemId,
                {
                  name: "--shape-name",
                  description:
                    "A change to the shape of the nodes in the HeatWave cluster will result in the entire cluster being torn down",
                  args: { name: "shape-name" },
                },
                {
                  name: "--cluster-size",
                  description:
                    "A change to the number of nodes in the HeatWave cluster will result in the entire cluster being torn down",
                  args: { name: "integer" },
                },
                {
                  name: "--is-lakehouse-enabled",
                  description:
                    "Enable/disable Lakehouse for the HeatWave cluster",
                  args: { name: "boolean", suggestions: ["true", "false"] },
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
          name: "heatwave-cluster-memory-estimate",
          description:
            "HeatWave cluster memory estimate that can be used to determine a suitable HeatWave cluster size",
          subcommands: [
            {
              name: "generate",
              description:
                "Sends a request to estimate the memory footprints of user tables when loaded to HeatWave cluster memory",
              options: [
                optDbSystemId,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets the most recent HeatWave cluster memory estimate that can be used to determine a suitable HeatWave",
              options: [optDbSystemId, optFromJson],
            },
          ],
        },
      ],
    },
    {
      name: "blue-green-deployment",
      description: "A blue/green deployment resource",
      subcommands: [
        {
          name: "list",
          description: "Lists blue/green deployments in a compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--source-db-system-id",
              description: "Source DB system OCID filter",
              args: { name: "source-db-system-id" },
            },
            {
              name: "--target-db-system-id",
              description: "Target DB system OCID filter",
              args: { name: "target-db-system-id" },
            },
            {
              name: "--display-name",
              description: "Filters deployments by display name",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description: "Filters deployments by lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves only the blue/green deployment wrapper resource into a different compartment",
          options: [
            optBlueGreenDeploymentId,
            {
              name: "--compartment-id",
              description: "The OCID of the target compartment",
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
            "Creates a blue/green deployment resource and its replication channel",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The display name of the blue/green deployment",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--source-db-system-id",
              description: "Source DB system OCID",
              args: { name: "source-db-system-id" },
              isRequired: true,
            },
            {
              name: "--target-db-system-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--channel-details",
              args: { name: "json" },
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
          description:
            "Deletes only the blue/green deployment wrapper resource",
          options: [
            optBlueGreenDeploymentId,
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
          description: "Gets a blue/green deployment by identifier",
          options: [optBlueGreenDeploymentId, optIfNoneMatch, optFromJson],
        },
        {
          name: "switchover",
          description: "Initiates switchover for a blue/green deployment",
          options: [
            optBlueGreenDeploymentId,
            {
              name: "--wait-time-in-seconds",
              description:
                "Upper bound guidance, in seconds, for waiting while the target DB System applies remaining replication",
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
          description: "Updates mutable metadata for a blue/green deployment",
          options: [
            optBlueGreenDeploymentId,
            {
              name: "--display-name",
              description:
                "A user-supplied display name for the blue/green deployment",
              args: { name: "display-name" },
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
      name: "shape",
      description: "The shape of the DB System",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of the shapes you can use to create a new MySQL DB System",
          options: [
            optCompartmentId,
            {
              name: "--is-supported-for",
              description:
                "Return shapes that are supported by the service feature",
              args: { suggestions: ["DBSYSTEM", "HEATWAVECLUSTER"] },
              isRepeatable: true,
            },
            {
              name: "--availability-domain",
              description: "The name of the Availability Domain",
              args: { name: "availability-domain" },
            },
            { name: "--name", description: "Name", args: { name: "name" } },
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "configuration",
      description:
        "The set of MySQL variables to be used when deploying a MySQL Database Service DB System",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Configuration",
          options: [
            optCompartmentId2,
            {
              name: "--shape-name",
              description: "The name of the associated Shape",
              args: { name: "shape-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "User-provided data about the Configuration",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the Configuration",
              args: { name: "display-name" },
            },
            { name: "--init-variables", args: { name: "json" } },
            { name: "--variables", args: { name: "json" } },
            {
              name: "--options",
              description: "The MySQL options defined in the Configuration",
              args: { name: "json" },
            },
            {
              name: "--parent-configuration-id",
              description:
                "The OCID of the Configuration from which the new Configuration is derived",
              args: { name: "parent-configuration-id" },
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
          description: "Deletes a Configuration",
          options: [
            optConfigurationId2,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get the full details of the specified Configuration, including the list of MySQL Variables and their values",
          options: [optConfigurationId2, optIfNoneMatch, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Configurations available when creating a DB System",
          options: [
            optCompartmentId,
            optConfigurationId3,
            {
              name: "--lifecycle-state",
              description: "Configuration Lifecycle State",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--type",
              description: "The requested Configuration types",
              args: { suggestions: ["DEFAULT", "CUSTOM"] },
              isRepeatable: true,
            },
            optDisplayName,
            {
              name: "--shape-name",
              description: "The requested Shape name",
              args: { name: "shape-name" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "shapeName",
                  "timeCreated",
                  "timeUpdated",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Configuration details",
          options: [
            optConfigurationId2,
            {
              name: "--description",
              description: "User-provided data about the Configuration",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "A new display name for the Configuration",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
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
      name: "version",
      description: "A supported MySQL Version",
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of supported and available MySQL database major versions",
          options: [optCompartmentId, optAll, optFromJson],
        },
      ],
    },
    {
      name: "replica",
      description: "A DB System read replica",
      subcommands: [
        {
          name: "create",
          description: "Creates a DB System read replica",
          options: [
            {
              name: "--db-system-id",
              description:
                "The OCID of the DB System the read replica is associated with",
              args: { name: "db-system-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the read replica",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User provided description of the read replica",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-delete-protected",
              description: "Specifies whether the read replica can be deleted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--replica-overrides", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified read replica",
          options: [
            optReplicaId,
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
          description: "Gets the full details of the specified read replica",
          options: [optReplicaId, optIfNoneMatch, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all the read replicas that match the specified filters",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName,
            optDbSystemId2,
            {
              name: "--lifecycle-state",
              description: "The LifecycleState of the read replica",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                  "FAILED",
                ],
              },
            },
            {
              name: "--replica-id",
              description: "The read replica OCID",
              args: { name: "replica-id" },
            },
            optConfigurationId3,
            {
              name: "--is-up-to-date",
              description:
                "Filter instances if they are using the latest revision of the Configuration they are associated with",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
        {
          name: "update",
          description: "Updates the properties of the specified read replica",
          options: [
            optReplicaId,
            {
              name: "--display-name",
              description: "The user-friendly name for the read replica",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User provided description of the read replica",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-delete-protected",
              description: "Specifies whether the read replica can be deleted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--replica-overrides", args: { name: "json" } },
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
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
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
      name: "work-request",
      description: "The status of an asynchronous task in the system",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optIfNoneMatch, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--sort-by",
              description: "The optional field to sort the results by",
              args: {
                suggestions: [
                  "ID",
                  "OPERATION_TYPE",
                  "STATUS",
                  "TIME_ACCEPTED",
                  "TIME_STARTED",
                  "TIME_FINISHED",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
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
