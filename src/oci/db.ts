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
  args: { suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"] },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return per page",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "The pagination token to continue listing from",
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
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optOpcDryRun: Fig.Option = {
  name: "--opc-dry-run",
  description: 'Indicates that the request is a dry run, if set to "true"',
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optDatabaseId: Fig.Option = {
  name: "--database-id",
  description: "The database OCID",
  args: { name: "database-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment OCID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optKmsKeyId: Fig.Option = {
  name: "--kms-key-id",
  description:
    "The OCID of the key container that is used as the master encryption key in database transparent data",
  args: { name: "kms-key-id" },
};
const optAutonomousDatabaseId: Fig.Option = {
  name: "--autonomous-database-id",
  description: "The database OCID",
  args: { name: "autonomous-database-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "BACKUP_IN_PROGRESS",
      "UPGRADING",
      "CONVERTING",
      "TERMINATING",
      "TERMINATED",
      "RESTORE_FAILED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optIsOlderVersionAcknowledged: Fig.Option = {
  name: "--is-older-version-acknowledged",
  description:
    "If true, the caller acknowledges selecting or applying an older DB, Grid Infrastructure",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description:
    "The OCID of the subscription with which resource needs to be associated with",
  args: { name: "subscription-id" },
};
const optKmsKeyVersionId: Fig.Option = {
  name: "--kms-key-version-id",
  description:
    "The OCID of the key container version that is used in database transparent data encryption",
  args: { name: "kms-key-version-id" },
};
const optNsgIds: Fig.Option = {
  name: "--nsg-ids",
  description:
    "The list of OCIDs for the network security groups (NSGs) to which this resource belongs",
  args: { name: "json" },
};
const optAutonomousContainerDatabaseId: Fig.Option = {
  name: "--autonomous-container-database-id",
  description: "The Autonomous Container Database OCID",
  args: { name: "autonomous-container-database-id" },
  isRequired: true,
};
const optSecurityAttributes: Fig.Option = {
  name: "--security-attributes",
  description: "Security Attributes for this resource",
  args: { name: "json" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "STOPPING",
      "STOPPED",
      "STARTING",
      "TERMINATING",
      "TERMINATED",
      "UNAVAILABLE",
      "RESTORE_IN_PROGRESS",
      "RESTORE_FAILED",
      "BACKUP_IN_PROGRESS",
      "SCALE_IN_PROGRESS",
      "AVAILABLE_NEEDS_ATTENTION",
      "UPDATING",
      "MAINTENANCE_IN_PROGRESS",
      "RESTARTING",
      "RECREATING",
      "ROLE_CHANGE_IN_PROGRESS",
      "UPGRADING",
      "INACCESSIBLE",
      "STANDBY",
      "TRANSPORTING",
    ],
  },
  isRepeatable: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
      "MAINTENANCE_IN_PROGRESS",
    ],
  },
  isRepeatable: true,
};
const optVaultId: Fig.Option = {
  name: "--vault-id",
  description: "The OCID of the Oracle Cloud Infrastructure vault",
  args: { name: "vault-id" },
};
const optCustomerContacts: Fig.Option = {
  name: "--customer-contacts",
  description: "Customer Contacts",
  args: { name: "json" },
};
const optDbNodeId: Fig.Option = {
  name: "--db-node-id",
  description: "The database node OCID",
  args: { name: "db-node-id" },
  isRequired: true,
};
const optDbSystemId: Fig.Option = {
  name: "--db-system-id",
  description: "The DB system OCID",
  args: { name: "db-system-id" },
  isRequired: true,
};
const optExadataInfrastructureId: Fig.Option = {
  name: "--exadata-infrastructure-id",
  description: "The Exadata infrastructure OCID",
  args: { name: "exadata-infrastructure-id" },
  isRequired: true,
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
      "BACKUP_IN_PROGRESS",
      "RESTORING",
      "RESTORE_FAILED",
      "RESTARTING",
      "MAINTENANCE_IN_PROGRESS",
      "ROLE_CHANGE_IN_PROGRESS",
      "ENABLING_AUTONOMOUS_DATA_GUARD",
      "UNAVAILABLE",
    ],
  },
  isRepeatable: true,
};
const optMaintenanceWindowDetails: Fig.Option = {
  name: "--maintenance-window-details",
  args: { name: "json" },
};
const optCloudVmClusterId: Fig.Option = {
  name: "--cloud-vm-cluster-id",
  description: "The cloud VM cluster OCID",
  args: { name: "cloud-vm-cluster-id" },
  isRequired: true,
};
const optWaitForState6: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "TERMINATING",
      "TERMINATED",
      "UPDATING",
      "FAILED",
      "RELOCATING",
      "RELOCATED",
      "REFRESHING",
      "RESTORE_IN_PROGRESS",
      "RESTORE_FAILED",
      "BACKUP_IN_PROGRESS",
      "DISABLED",
    ],
  },
  isRepeatable: true,
};
const optVmClusterId: Fig.Option = {
  name: "--vm-cluster-id",
  description: "The VM cluster OCID",
  args: { name: "vm-cluster-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment OCID",
  args: { name: "compartment-id" },
};
const optExadbVmClusterId: Fig.Option = {
  name: "--exadb-vm-cluster-id",
  description: "The Exadata VM cluster OCID on Exascale Infrastructure",
  args: { name: "exadb-vm-cluster-id" },
  isRequired: true,
};
const optLicenseModel: Fig.Option = {
  name: "--license-model",
  description:
    "The Oracle license model that applies to the Oracle Autonomous AI Database",
  args: { suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"] },
};
const optAutonomousContainerDatabaseId2: Fig.Option = {
  name: "--autonomous-container-database-id",
  description: "The Autonomous Container Database OCID",
  args: { name: "autonomous-container-database-id" },
};
const optCloudAutonomousVmClusterId: Fig.Option = {
  name: "--cloud-autonomous-vm-cluster-id",
  description: "The Cloud VM cluster OCID",
  args: { name: "cloud-autonomous-vm-cluster-id" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment to move the resource to",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDatabaseSoftwareImageId: Fig.Option = {
  name: "--database-software-image-id",
  description: "The database software image OCID",
  args: { name: "database-software-image-id" },
};
const optFastStartFailOverLagLimitInSeconds: Fig.Option = {
  name: "--fast-start-fail-over-lag-limit-in-seconds",
  description:
    "The lag time for my preference based on data loss tolerance in seconds",
  args: { name: "integer" },
};
const optIsAutomaticFailoverEnabled: Fig.Option = {
  name: "--is-automatic-failover-enabled",
  description:
    "Indicates whether Automatic Failover is enabled for Autonomous Container Database Dataguard Association",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optPluggableDatabaseId: Fig.Option = {
  name: "--pluggable-database-id",
  description: "The database OCID",
  args: { name: "pluggable-database-id" },
  isRequired: true,
};
const optSecretVersionNumber: Fig.Option = {
  name: "--secret-version-number",
  description: "The version of the vault secret",
  args: { name: "integer" },
};
const optArePrimaryWhitelistedIpsUsed: Fig.Option = {
  name: "--are-primary-whitelisted-ips-used",
  description:
    "This field will be null if the Autonomous AI Database is not Data Guard enabled or Access Control is disabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optAutonomousDatabaseMaintenanceWindow: Fig.Option = {
  name: "--autonomous-database-maintenance-window",
  args: { name: "json" },
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description:
    "The Autonomous Database Serverless instance's availability domain",
  args: { name: "availability-domain" },
};
const optBackupRetentionPeriodInDays: Fig.Option = {
  name: "--backup-retention-period-in-days",
  description: "Retention period, in days, for long-term backups",
  args: { name: "integer" },
};
const optByolComputeCountLimit: Fig.Option = {
  name: "--byol-compute-count-limit",
  description:
    "The maximum number of CPUs allowed with a Bring Your Own License (BYOL)",
  args: { name: "number" },
};
const optComputeCount: Fig.Option = {
  name: "--compute-count",
  description: "The compute amount (CPUs) available to the database",
  args: { name: "number" },
};
const optComputeModel: Fig.Option = {
  name: "--compute-model",
  description: "The compute model of the Autonomous AI Database",
  args: { suggestions: ["ECPU", "OCPU"] },
};
const optDataStorageSizeInTbs: Fig.Option = {
  name: "--data-storage-size-in-tbs",
  description:
    "The size, in terabytes, of the data volume that will be created and attached to the database",
  args: { name: "integer" },
};
const optDatabaseEdition: Fig.Option = {
  name: "--database-edition",
  description:
    "The Oracle AI Database Edition that applies to the Autonomous AI Databases",
  args: { name: "database-edition" },
};
const optDbToolsDetails: Fig.Option = {
  name: "--db-tools-details",
  description: "The list of database tools details",
  args: { name: "json" },
};
const optDbVersion: Fig.Option = {
  name: "--db-version",
  description: "A valid Oracle AI Database version for Autonomous AI Database",
  args: { name: "db-version" },
};
const optDbWorkload: Fig.Option = {
  name: "--db-workload",
  description: "The Autonomous AI Database workload type",
  args: { suggestions: ["OLTP", "DW", "AJD", "APEX", "LH"] },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the Autonomous AI Database",
  args: { name: "display-name" },
};
const optInMemoryPercentage: Fig.Option = {
  name: "--in-memory-percentage",
  description:
    "The percentage of the System Global Area(SGA) assigned to In-Memory tables in Autonomous AI Database",
  args: { name: "integer" },
};
const optIsActiveDataGuardEnabled: Fig.Option = {
  name: "--is-active-data-guard-enabled",
  description: "True if active Data Guard is enabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsAutoScalingForStorageEnabled: Fig.Option = {
  name: "--is-auto-scaling-for-storage-enabled",
  description:
    "Indicates if auto scaling is enabled for the Autonomous AI Database storage",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsBackupRetentionLocked: Fig.Option = {
  name: "--is-backup-retention-locked",
  description: "True if the Autonomous AI Database is backup retention locked",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsDevTier: Fig.Option = {
  name: "--is-dev-tier",
  description:
    "Autonomous AI Database for Developers are fixed-shape Autonomous AI Databases that developers can use",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsFreeTier: Fig.Option = {
  name: "--is-free-tier",
  description: "Indicates if this is an Always Free resource",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsMtlsConnectionRequired: Fig.Option = {
  name: "--is-mtls-connection-required",
  description:
    "Specifies if the Autonomous AI Database requires mTLS connections",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optPrivateEndpointIp: Fig.Option = {
  name: "--private-endpoint-ip",
  description: "The private endpoint Ip address for the resource",
  args: { name: "private-endpoint-ip" },
};
const optPrivateEndpointLabel: Fig.Option = {
  name: "--private-endpoint-label",
  description:
    "The resource's private endpoint label. - Setting the endpoint label to a non-empty string creates a private",
  args: { name: "private-endpoint-label" },
};
const optProtectionMode: Fig.Option = {
  name: "--protection-mode",
  description: "The protection mode of this Autonomous Data Guard association",
  args: { suggestions: ["MAXIMUM_AVAILABILITY", "MAXIMUM_PERFORMANCE"] },
};
const optResourcePoolLeaderId: Fig.Option = {
  name: "--resource-pool-leader-id",
  description: "The unique identifier for leader Autonomous AI Database OCID",
  args: { name: "resource-pool-leader-id" },
};
const optResourcePoolSummary: Fig.Option = {
  name: "--resource-pool-summary",
  args: { name: "json" },
};
const optScheduledOperations: Fig.Option = {
  name: "--scheduled-operations",
  description: "The list of scheduled operations",
  args: { name: "json" },
};
const optSecretId: Fig.Option = {
  name: "--secret-id",
  description:
    "The OCI vault secret /Content/General/Concepts/identifiers.htmOCID",
  args: { name: "secret-id" },
};
const optStandbyMaintenanceBufferInDays: Fig.Option = {
  name: "--standby-maintenance-buffer-in-days",
  description:
    "The scheduling detail for the quarterly maintenance window of the standby Autonomous Container Database",
  args: { name: "integer" },
};
const optStandbyWhitelistedIps: Fig.Option = {
  name: "--standby-whitelisted-ips",
  description: "The client IP access control list (ACL)",
  args: { name: "json" },
};
const optSubnetId: Fig.Option = {
  name: "--subnet-id",
  description: "The OCID of the subnet the resource is associated with",
  args: { name: "subnet-id" },
};
const optWaitForState7: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optWhitelistedIps: Fig.Option = {
  name: "--whitelisted-ips",
  description: "The client IP access control list (ACL)",
  args: { name: "json" },
};
const optAdminPassword: Fig.Option = {
  name: "--admin-password",
  description:
    "Important The adminPassword or secretId must be specified for all Autonomous AI Databases except",
  args: { name: "admin-password" },
};
const optBackupNetworkNsgIds: Fig.Option = {
  name: "--backup-network-nsg-ids",
  description: "A list of the OCIDs of the network security groups",
  args: { name: "json" },
};
const optCharacterSet: Fig.Option = {
  name: "--character-set",
  description: "The character set for the Autonomous AI Database",
  args: { name: "character-set" },
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment of the Autonomous AI Database",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCpuCoreCount: Fig.Option = {
  name: "--cpu-core-count",
  description: "The number of CPU cores to be made available to the database",
  args: { name: "integer" },
};
const optDataStorageSizeInGbs: Fig.Option = {
  name: "--data-storage-size-in-gbs",
  description:
    "The size, in gigabytes, of the data volume that will be created and attached to the database",
  args: { name: "integer" },
};
const optEncryptionKey: Fig.Option = {
  name: "--encryption-key",
  args: { name: "json" },
};
const optIsAutoScalingEnabled: Fig.Option = {
  name: "--is-auto-scaling-enabled",
  description:
    "Indicates if auto scaling is enabled for the Autonomous AI Database CPU core count",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsDataGuardEnabled: Fig.Option = {
  name: "--is-data-guard-enabled",
  description: "Deprecated",
  args: { name: "boolean", suggestions: ["true", "false"] },
  deprecated: true,
};
const optIsDedicated: Fig.Option = {
  name: "--is-dedicated",
  description: "True if the database is on dedicated Exadata infrastructure",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsDstFileUpdateEnabled: Fig.Option = {
  name: "--is-dst-file-update-enabled",
  description:
    "Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsLocalDataGuardEnabled: Fig.Option = {
  name: "--is-local-data-guard-enabled",
  description:
    "Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsPreviewVersionWithServiceTermsAccepted: Fig.Option = {
  name: "--is-preview-version-with-service-terms-accepted",
  description:
    "If set to TRUE, indicates that an Autonomous AI Database preview version is being provisioned",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optNcharacterSet: Fig.Option = {
  name: "--ncharacter-set",
  description: "The character set for the Autonomous AI Database",
  args: { name: "ncharacter-set" },
};
const optOcpuCount: Fig.Option = {
  name: "--ocpu-count",
  description: "The number of OCPU cores to be made available to the database",
  args: { name: "number" },
};
const optPeerAutonomousContainerDatabaseBackupConfig: Fig.Option = {
  name: "--peer-autonomous-container-database-backup-config",
  args: { name: "json" },
};
const optPeerAutonomousContainerDatabaseCompartmentId: Fig.Option = {
  name: "--peer-autonomous-container-database-compartment-id",
  description:
    "The OCID of the compartment where the standby Autonomous Container Database will be created",
  args: { name: "peer-autonomous-container-database-compartment-id" },
};
const optPeerCloudAutonomousVmClusterId: Fig.Option = {
  name: "--peer-cloud-autonomous-vm-cluster-id",
  description: "The OCID of the peer cloud Autonomous Exadata VM Cluster",
  args: { name: "peer-cloud-autonomous-vm-cluster-id" },
};
const optSchedulingPolicyId: Fig.Option = {
  name: "--scheduling-policy-id",
  description: "The Scheduling Policy OCID",
  args: { name: "scheduling-policy-id" },
  isRequired: true,
};
const optTransportableTablespace: Fig.Option = {
  name: "--transportable-tablespace",
  args: { name: "json" },
};
const optAutonomousVmClusterId: Fig.Option = {
  name: "--autonomous-vm-cluster-id",
  description: "The autonomous VM cluster OCID",
  args: { name: "autonomous-vm-cluster-id" },
  isRequired: true,
};
const optBackupConfig: Fig.Option = {
  name: "--backup-config",
  args: { name: "json" },
};
const optDataStoragePercentage: Fig.Option = {
  name: "--data-storage-percentage",
  description:
    "The percentage assigned to DATA storage (user data and database files)",
  args: { name: "integer" },
};
const optDatabaseSoftwareImageId2: Fig.Option = {
  name: "--database-software-image-id",
  description: "The Autonomous AI Database Software Image OCID",
  args: { name: "database-software-image-id" },
};
const optDbSplitThreshold: Fig.Option = {
  name: "--db-split-threshold",
  description:
    "The CPU value beyond which an Autonomous AI Database will be opened across multiple nodes",
  args: { name: "integer" },
};
const optDistributionAffinity: Fig.Option = {
  name: "--distribution-affinity",
  description:
    "Determines whether an Autonomous AI Database must be opened across a minimum or maximum of nodes",
  args: { suggestions: ["MINIMUM_DISTRIBUTION", "MAXIMUM_DISTRIBUTION"] },
};
const optNetServicesArchitecture: Fig.Option = {
  name: "--net-services-architecture",
  description:
    "Enabling SHARED server architecture enables a database server to allow many client processes to share very",
  args: { suggestions: ["DEDICATED", "SHARED", "DRCP"] },
};
const optOkvEndPointGroupName: Fig.Option = {
  name: "--okv-end-point-group-name",
  description:
    "The OKV End Point Group name for the Autonomous Container Database",
  args: { name: "okv-end-point-group-name" },
};
const optPeerAutonomousContainerDatabaseDisplayName: Fig.Option = {
  name: "--peer-autonomous-container-database-display-name",
  description: "The display name for the peer Autonomous Container Database",
  args: { name: "peer-autonomous-container-database-display-name" },
};
const optVersionPreference: Fig.Option = {
  name: "--version-preference",
  description: "The next maintenance version preference",
  args: { suggestions: ["NEXT_RELEASE_UPDATE", "LATEST_RELEASE_UPDATE"] },
};
const optVmFailoverReservation: Fig.Option = {
  name: "--vm-failover-reservation",
  description:
    "The percentage of CPUs reserved across nodes to support node failover",
  args: { name: "integer" },
};
const optAutonomousExadataInfrastructureId: Fig.Option = {
  name: "--autonomous-exadata-infrastructure-id",
  description: "No longer used",
  args: { name: "autonomous-exadata-infrastructure-id" },
};
const optAutonomousVmClusterId2: Fig.Option = {
  name: "--autonomous-vm-cluster-id",
  description: "The OCID of the Autonomous VM Cluster",
  args: { name: "autonomous-vm-cluster-id" },
};
const optBackupId: Fig.Option = {
  name: "--backup-id",
  description: "The backup OCID",
  args: { name: "backup-id" },
  isRequired: true,
};
const optBaseccVmClusterId: Fig.Option = {
  name: "--basecc-vm-cluster-id",
  description: "The BaseDB-C@C VM cluster OCID",
  args: { name: "basecc-vm-cluster-id" },
  isRequired: true,
};
const optCloudAutonomousVmClusterId2: Fig.Option = {
  name: "--cloud-autonomous-vm-cluster-id",
  description: "The OCID of the cloud Autonomous Exadata VM Cluster",
  args: { name: "cloud-autonomous-vm-cluster-id" },
};
const optCompartmentId6: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment containing the Autonomous Container Database",
  args: { name: "compartment-id" },
};
const optDbHomeId: Fig.Option = {
  name: "--db-home-id",
  description: "The OCID of the Database Home",
  args: { name: "db-home-id" },
};
const optDbName: Fig.Option = {
  name: "--db-name",
  description: "The Database name for the Autonomous Container Database",
  args: { name: "db-name" },
};
const optDbUniqueName: Fig.Option = {
  name: "--db-unique-name",
  description: "Deprecated",
  args: { name: "db-unique-name" },
  deprecated: true,
};
const optDbVersion2: Fig.Option = {
  name: "--db-version",
  description: "The base version for the Autonomous Container Database",
  args: { name: "db-version" },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "The display name for the Autonomous Container Database",
  args: { name: "display-name" },
  isRequired: true,
};
const optKeyStoreId: Fig.Option = {
  name: "--key-store-id",
  description: "The OCID of the key store of Oracle Vault",
  args: { name: "key-store-id" },
};
const optPatchModel: Fig.Option = {
  name: "--patch-model",
  description: "Database Patch model preference",
  args: { suggestions: ["RELEASE_UPDATES", "RELEASE_UPDATE_REVISIONS"] },
  isRequired: true,
};
const optPeerAutonomousExadataInfrastructureId: Fig.Option = {
  name: "--peer-autonomous-exadata-infrastructure-id",
  description: "No longer used",
  args: { name: "peer-autonomous-exadata-infrastructure-id" },
};
const optPeerAutonomousVmClusterId: Fig.Option = {
  name: "--peer-autonomous-vm-cluster-id",
  description:
    "The OCID of the peer Autonomous VM cluster for Autonomous Data Guard",
  args: { name: "peer-autonomous-vm-cluster-id" },
};
const optPeerDbUniqueName: Fig.Option = {
  name: "--peer-db-unique-name",
  description: "Deprecated",
  args: { name: "peer-db-unique-name" },
  deprecated: true,
};
const optPeerDbUniqueName2: Fig.Option = {
  name: "--peer-db-unique-name",
  description:
    "Specifies the DB_UNIQUE_NAME of the peer database to be created",
  args: { name: "peer-db-unique-name" },
};
const optServiceLevelAgreementType: Fig.Option = {
  name: "--service-level-agreement-type",
  description:
    "The service level agreement type of the Autonomous Container Database",
  args: { suggestions: ["STANDARD", "AUTONOMOUS_DATAGUARD"] },
};
const optUpdateType: Fig.Option = {
  name: "--update-type",
  description:
    "A filter to return only resources that match the given update type exactly",
  args: { suggestions: ["GI_UPGRADE", "GI_PATCH", "OS_UPDATE"] },
};
const optWaitForState8: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
      "UPGRADING",
    ],
  },
  isRepeatable: true,
};
const optAutonomousContainerDatabaseDataguardAssociationId: Fig.Option = {
  name: "--autonomous-container-database-dataguard-association-id",
  description:
    "The Autonomous Container Database-Autonomous Data Guard association OCID",
  args: { name: "autonomous-container-database-dataguard-association-id" },
  isRequired: true,
};
const optAutonomousExadataInfrastructureId2: Fig.Option = {
  name: "--autonomous-exadata-infrastructure-id",
  description: "The Autonomous Exadata Infrastructure OCID",
  args: { name: "autonomous-exadata-infrastructure-id" },
  isRequired: true,
};
const optAvailabilityDomain2: Fig.Option = {
  name: "--availability-domain",
  description:
    "A filter to return only resources that match the given availability domain exactly",
  args: { name: "availability-domain" },
};
const optCloudExaInfraId: Fig.Option = {
  name: "--cloud-exa-infra-id",
  description: "The OCID of the cloud Exadata infrastructure",
  args: { name: "cloud-exa-infra-id" },
  isRequired: true,
};
const optClusterPlacementGroupId: Fig.Option = {
  name: "--cluster-placement-group-id",
  description:
    "The OCID of the cluster placement group of the Exadata Infrastructure or Db System",
  args: { name: "cluster-placement-group-id" },
};
const optComputeCount2: Fig.Option = {
  name: "--compute-count",
  description: "The number of compute servers for the DB system",
  args: { name: "integer" },
};
const optComputeModel2: Fig.Option = {
  name: "--compute-model",
  description: "The compute model for Base Database Service",
  args: { suggestions: ["ECPU", "OCPU"] },
};
const optDatabaseAdminPassword: Fig.Option = {
  name: "--database-admin-password",
  description:
    "A strong password for the SYS, SYSTEM, and PDB Admin users to apply during standby creation",
  args: { name: "database-admin-password" },
  isRequired: true,
};
const optDbHomeId2: Fig.Option = {
  name: "--db-home-id",
  description: "The Database Home OCID",
  args: { name: "db-home-id" },
  isRequired: true,
};
const optDbName2: Fig.Option = {
  name: "--db-name",
  description: "The database name",
  args: { name: "db-name" },
  isRequired: true,
};
const optDbVersion3: Fig.Option = {
  name: "--db-version",
  description: "A valid Oracle Database version",
  args: { name: "db-version" },
};
const optExternalCdbId: Fig.Option = {
  name: "--external-cdb-id",
  description: "The ExternalContainerDatabase OCID. required",
  args: { name: "external-cdb-id" },
  isRequired: true,
};
const optExternalNonCdbId: Fig.Option = {
  name: "--external-non-cdb-id",
  description: "The external non-container database OCID. required",
  args: { name: "external-non-cdb-id" },
  isRequired: true,
};
const optExternalPdbId: Fig.Option = {
  name: "--external-pdb-id",
  description: "The ExternalPluggableDatabaseId OCID. required",
  args: { name: "external-pdb-id" },
  isRequired: true,
};
const optIsDefault: Fig.Option = {
  name: "--is-default",
  description: "Indicates if the subscription is UCM or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the given lifecycle state exactly",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
      "MAINTENANCE_IN_PROGRESS",
    ],
  },
};
const optProtectionMode2: Fig.Option = {
  name: "--protection-mode",
  description:
    "The protection mode to set up between the primary and standby databases",
  args: {
    suggestions: [
      "MAXIMUM_AVAILABILITY",
      "MAXIMUM_PERFORMANCE",
      "MAXIMUM_PROTECTION",
    ],
  },
  isRequired: true,
};
const optTransportType: Fig.Option = {
  name: "--transport-type",
  description: "The redo transport type to use for this Data Guard association",
  args: { suggestions: ["SYNC", "ASYNC", "FASTSYNC"] },
  isRequired: true,
};
const optVmClusterNetworkId: Fig.Option = {
  name: "--vm-cluster-network-id",
  description: "The VM cluster network OCID",
  args: { name: "vm-cluster-network-id" },
  isRequired: true,
};
const optWaitForState9: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "NEEDS_ATTENTION",
      "AVAILABLE",
      "UPDATING",
      "FAILED",
      "DELETING",
      "DELETED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState10: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "STOPPING",
      "STOPPED",
      "STARTING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState11: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
      "MIGRATED",
      "MAINTENANCE_IN_PROGRESS",
      "NEEDS_ATTENTION",
      "UPGRADING",
    ],
  },
  isRepeatable: true,
};
const optAdminPassword2: Fig.Option = {
  name: "--admin-password",
  description: "A strong password for SYS, SYSTEM, and PDB Admin",
  args: { name: "admin-password" },
  isRequired: true,
};
const optCloudAutomationUpdateDetails: Fig.Option = {
  name: "--cloud-automation-update-details",
  args: { name: "json" },
};
const optDataGuardAssociationId: Fig.Option = {
  name: "--data-guard-association-id",
  description: "The Data Guard association's OCID",
  args: { name: "data-guard-association-id" },
  isRequired: true,
};
const optDatabase: Fig.Option = {
  name: "--database",
  args: { name: "json" },
  isRequired: true,
};
const optDatabaseAdminPassword2: Fig.Option = {
  name: "--database-admin-password",
  description:
    "The administrator password of the primary database in this Data Guard association",
  args: { name: "database-admin-password" },
  isRequired: true,
};
const optDomain: Fig.Option = {
  name: "--domain",
  description: "A domain name used for the DB system",
  args: { name: "domain" },
};
const optExternalDbConnectorId: Fig.Option = {
  name: "--external-db-connector-id",
  description:
    "The OCID of the external database connector resource (ExternalDatabaseConnectorId). required",
  args: { name: "external-db-connector-id" },
  isRequired: true,
};
const optFaultDomains: Fig.Option = {
  name: "--fault-domains",
  description:
    "A Fault Domain is a grouping of hardware and infrastructure within an availability domain",
  args: { name: "json" },
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optIsDiagnosticsEventsEnabled: Fig.Option = {
  name: "--is-diagnostics-events-enabled",
  description:
    "Enables customer to receive Events service notifications for guest VM issues",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsHealthMonitoringEnabled: Fig.Option = {
  name: "--is-health-monitoring-enabled",
  description:
    "Enables Oracle to receive diagnostic data and share it with its operations and support personnel",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsIncidentLogsEnabled: Fig.Option = {
  name: "--is-incident-logs-enabled",
  description:
    "Enables Oracle to receive Events service notifications for guest VM issues, collect incident logs and traces",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optKeyStoreId2: Fig.Option = {
  name: "--key-store-id",
  description: "The OCID of the key store",
  args: { name: "key-store-id" },
  isRequired: true,
};
const optMaintenanceScheduleType: Fig.Option = {
  name: "--maintenance-schedule-type",
  description:
    "The maintenance schedule type of the Autonomous Database on shared Exadata infrastructure",
  args: { suggestions: ["EARLY", "REGULAR"] },
};
const optPeerSidPrefix: Fig.Option = {
  name: "--peer-sid-prefix",
  description:
    "Specifies a prefix for the Oracle SID of the database to be created",
  args: { name: "peer-sid-prefix" },
};
const optTdeKeyStoreType: Fig.Option = {
  name: "--tde-key-store-type",
  description: "TDE keystore type",
  args: { suggestions: ["AZURE", "OCI", "GCP", "AWS"] },
  isRequired: true,
};
const optWaitForState12: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "ROLE_CHANGE_IN_PROGRESS",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
      "UNAVAILABLE",
      "UPDATING",
    ],
  },
  isRepeatable: true,
};
const optWaitForState13: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "NOT_CONNECTED",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optAdvancedClusterFileSystemId: Fig.Option = {
  name: "--advanced-cluster-file-system-id",
  description: "The advanced cluster file system Id OCID",
  args: { name: "advanced-cluster-file-system-id" },
  isRequired: true,
};
const optAutonomousMaintenanceScheduleType: Fig.Option = {
  name: "--autonomous-maintenance-schedule-type",
  description:
    "The maintenance schedule type of the Autonomous AI Database Serverless",
  args: { suggestions: ["EARLY", "REGULAR"] },
};
const optAvailabilityDomain3: Fig.Option = {
  name: "--availability-domain",
  description: "The availability domain where the DB system is located",
  args: { name: "availability-domain" },
  isRequired: true,
};
const optBackupSubnetId: Fig.Option = {
  name: "--backup-subnet-id",
  description:
    "The OCID of the backup network subnet the DB system is associated with",
  args: { name: "backup-subnet-id" },
};
const optCdbAdminPassword: Fig.Option = {
  name: "--cdb-admin-password",
  description: "The DB system administrator password of the Container Database",
  args: { name: "cdb-admin-password" },
};
const optClusterName: Fig.Option = {
  name: "--cluster-name",
  description:
    "The cluster name for Exadata and 2-node RAC virtual machine DB systems",
  args: { name: "cluster-name" },
};
const optCompartmentId7: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment the DB system belongs in",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCpuCoreCount2: Fig.Option = {
  name: "--cpu-core-count",
  description:
    "The number of CPU cores to enable for a bare metal or Exadata DB system or AMD VMDB Systems",
  args: { name: "integer" },
};
const optCreatePdbBackup: Fig.Option = {
  name: "--create-pdb-backup",
  description:
    "Indicates whether to take Pluggable Database Backup after the operation",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optDataCollectionOptions: Fig.Option = {
  name: "--data-collection-options",
  args: { name: "json" },
};
const optDatasafeRegistrationDetails: Fig.Option = {
  name: "--datasafe-registration-details",
  description:
    "The requested Data Safe registration action details for the database",
  args: { name: "json" },
};
const optDbName3: Fig.Option = {
  name: "--db-name",
  description: "The database name",
  args: { name: "db-name" },
};
const optDbSystemId2: Fig.Option = {
  name: "--db-system-id",
  description: "The DB system OCID",
  args: { name: "db-system-id" },
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the DB system",
  args: { name: "display-name" },
};
const optExascaleDbStorageVaultId: Fig.Option = {
  name: "--exascale-db-storage-vault-id",
  description: "The Exadata Database Storage Vault OCID",
  args: { name: "exascale-db-storage-vault-id" },
  isRequired: true,
};
const optExecutionWindowId: Fig.Option = {
  name: "--execution-window-id",
  description: "The execution window OCID",
  args: { name: "execution-window-id" },
  isRequired: true,
};
const optExternalDbConnectorId2: Fig.Option = {
  name: "--external-db-connector-id",
  description: "The OCID of the external database connector. required",
  args: { name: "external-db-connector-id" },
  isRequired: true,
};
const optHostname: Fig.Option = {
  name: "--hostname",
  description: "The hostname for the DB system",
  args: { name: "hostname" },
  isRequired: true,
};
const optInitialDataStorageSizeInGb: Fig.Option = {
  name: "--initial-data-storage-size-in-gb",
  description:
    "Size (in GB) of the initial data volume that will be created and attached to a virtual machine DB system",
  args: { name: "integer" },
};
const optIsAccessControlEnabled: Fig.Option = {
  name: "--is-access-control-enabled",
  description: "Indicates if the database-level access control is enabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsDesupportedVersion: Fig.Option = {
  name: "--is-desupported-version",
  description:
    "If true, the customer acknowledges that the specified Oracle Database software is an older release that",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsUnifiedAuditingEnabled: Fig.Option = {
  name: "--is-unified-auditing-enabled",
  description: "Indicates whether unified autiding is enabled or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLicenseModel2: Fig.Option = {
  name: "--license-model",
  description:
    "The Oracle license model that applies to all the databases on the DB system",
  args: { suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"] },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only resources that match the entire name given",
  args: { name: "name" },
};
const optNodeCount: Fig.Option = {
  name: "--node-count",
  description: "The number of nodes to launch for a virtual machine DB system",
  args: { name: "integer" },
};
const optOneoffPatchId: Fig.Option = {
  name: "--oneoff-patch-id",
  description: "The one-off patch OCID",
  args: { name: "oneoff-patch-id" },
  isRequired: true,
};
const optPatchId: Fig.Option = {
  name: "--patch-id",
  description: "The OCID of the patch",
  args: { name: "patch-id" },
  isRequired: true,
};
const optPrivateIp: Fig.Option = {
  name: "--private-ip",
  description: "A private IP address of your choice",
  args: { name: "private-ip" },
};
const optPrivateIpV6: Fig.Option = {
  name: "--private-ip-v6",
  description: "A private IPv6 address of your choice",
  args: { name: "private-ip-v6" },
};
const optSchedulingPlanId: Fig.Option = {
  name: "--scheduling-plan-id",
  description: "The Schedule Plan OCID",
  args: { name: "scheduling-plan-id" },
  isRequired: true,
};
const optShape: Fig.Option = {
  name: "--shape",
  description: "The shape of the DB system",
  args: { name: "shape" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["DISPLAYNAME", "TIMECREATED"] },
};
const optSparseDiskgroup: Fig.Option = {
  name: "--sparse-diskgroup",
  description: "If true, Sparse Diskgroup is configured for Exadata dbsystem",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optStoragePerformance: Fig.Option = {
  name: "--storage-performance",
  description: "The block storage volume performance level",
  args: { suggestions: ["BALANCED", "HIGH_PERFORMANCE"] },
};
const optSubnetId2: Fig.Option = {
  name: "--subnet-id",
  description: "The OCID of the subnet the DB system is associated with",
  args: { name: "subnet-id" },
  isRequired: true,
};
const optTimeZone: Fig.Option = {
  name: "--time-zone",
  description: "The time zone to use for the DB system",
  args: { name: "time-zone" },
};
const optWaitForState14: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATED",
      "SCHEDULED",
      "IN_PROGRESS",
      "FAILED",
      "CANCELED",
      "UPDATING",
      "DELETED",
      "SUCCEEDED",
      "PARTIAL_SUCCESS",
      "CREATING",
      "DELETING",
    ],
  },
  isRepeatable: true,
};
const optWaitForState15: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "REQUIRES_ACTIVATION",
      "ACTIVATING",
      "ACTIVE",
      "ACTIVATION_FAILED",
      "FAILED",
      "UPDATING",
      "DELETING",
      "DELETED",
      "DISCONNECTED",
      "MAINTENANCE_IN_PROGRESS",
      "WAITING_FOR_CONNECTIVITY",
    ],
  },
  isRepeatable: true,
};
const optAction: Fig.Option = {
  name: "--action",
  description: "The database upgrade action",
  args: { suggestions: ["PRECHECK", "UPGRADE", "ROLLBACK"] },
  isRequired: true,
};
const optActionParams: Fig.Option = {
  name: "--action-params",
  description:
    "Map<ParamName, ParamValue> where a key value pair describes the specific action parameter",
  args: { name: "json" },
};
const optAutonomousDatabaseSoftwareImageId: Fig.Option = {
  name: "--autonomous-database-software-image-id",
  description: "The Autonomous AI Database Software Image OCID",
  args: { name: "autonomous-database-software-image-id" },
  isRequired: true,
};
const optBackupDestinationId: Fig.Option = {
  name: "--backup-destination-id",
  description: "The OCID of the backup destination",
  args: { name: "backup-destination-id" },
  isRequired: true,
};
const optBackupTdePassword: Fig.Option = {
  name: "--backup-tde-password",
  description: "The password to open the TDE wallet",
  args: { name: "backup-tde-password" },
};
const optCaBundleId: Fig.Option = {
  name: "--ca-bundle-id",
  description: "The OCID of the certificate bundle",
  args: { name: "ca-bundle-id" },
};
const optCertificateAuthorityId: Fig.Option = {
  name: "--certificate-authority-id",
  description: "The OCID of the certificate authority",
  args: { name: "certificate-authority-id" },
};
const optCertificateGenerationType: Fig.Option = {
  name: "--certificate-generation-type",
  description: "Specify SYSTEM to use Oracle-managed certificates",
  args: { suggestions: ["SYSTEM", "BYOC"] },
  isRequired: true,
};
const optCertificateId: Fig.Option = {
  name: "--certificate-id",
  description: "The OCID of the certificate to use",
  args: { name: "certificate-id" },
};
const optCloneType: Fig.Option = {
  name: "--clone-type",
  description: "The Autonomous AI Database clone type",
  args: { suggestions: ["FULL", "METADATA", "PARTIAL"] },
  isRequired: true,
};
const optConsoleHistoryId: Fig.Option = {
  name: "--console-history-id",
  description: "The OCID of the console history",
  args: { name: "console-history-id" },
  isRequired: true,
};
const optDataCollectionOptions2: Fig.Option = {
  name: "--data-collection-options",
  description:
    'Available options are "isDiagnosticsEventsEnabled", "isHealthMonitoringEnabled" and "isIncidentLogsEnabled"',
  args: { name: "json" },
};
const optDataStorageSizeInTbs2: Fig.Option = {
  name: "--data-storage-size-in-tbs",
  description: "The data disk group size to be allocated in TBs",
  args: { name: "data-storage-size-in-tbs" },
};
const optDatabaseEdition2: Fig.Option = {
  name: "--database-edition",
  description:
    "The Oracle Database Edition that applies to all the databases on the DB system",
  args: {
    suggestions: [
      "STANDARD_EDITION",
      "ENTERPRISE_EDITION",
      "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
      "ENTERPRISE_EDITION_EXTREME_PERFORMANCE",
      "ENTERPRISE_EDITION_DEVELOPER",
    ],
  },
  isRequired: true,
};
const optDatabaseSoftwareImageId3: Fig.Option = {
  name: "--database-software-image-id",
  description: "The DB system OCID",
  args: { name: "database-software-image-id" },
  isRequired: true,
};
const optDbNodeStorageSizeInGbs: Fig.Option = {
  name: "--db-node-storage-size-in-gbs",
  description: "The local node storage to be allocated in GBs",
  args: { name: "integer" },
};
const optDbUniqueName2: Fig.Option = {
  name: "--db-unique-name",
  description: "The database unique name",
  args: { name: "db-unique-name" },
};
const optDbnodeSnapshotId: Fig.Option = {
  name: "--dbnode-snapshot-id",
  description: "The Exadata Database Node Snapshot OCID",
  args: { name: "dbnode-snapshot-id" },
  isRequired: true,
};
const optDistributionAlgorithm: Fig.Option = {
  name: "--distribution-algorithm",
  description: "The distribution algorithm used for the Autonomous VM cluster",
  args: { suggestions: ["RESOURCE_OPTIMIZED", "DISTRIBUTION_OPTIMIZED"] },
};
const optEncryptionKeyLocationDetails: Fig.Option = {
  name: "--encryption-key-location-details",
  args: { name: "json" },
};
const optExecutionActionId: Fig.Option = {
  name: "--execution-action-id",
  description: "The execution action OCID",
  args: { name: "execution-action-id" },
  isRequired: true,
};
const optFileSystemConfigurationDetails: Fig.Option = {
  name: "--file-system-configuration-details",
  description: "Details of the file system configuration of the VM cluster",
  args: { name: "json" },
};
const optInfrastructureType: Fig.Option = {
  name: "--infrastructure-type",
  description:
    "A filter to return only resources that match the given Infrastructure Type",
  args: { suggestions: ["CLOUD", "CLOUD_AT_CUSTOMER"] },
};
const optMaintenanceVersionPreferences: Fig.Option = {
  name: "--maintenance-version-preferences",
  args: { name: "json" },
};
const optMaintenanceWindow: Fig.Option = {
  name: "--maintenance-window",
  args: { name: "json" },
};
const optMemoryPerOracleComputeUnitInGbs: Fig.Option = {
  name: "--memory-per-oracle-compute-unit-in-gbs",
  description: "The amount of memory (in GBs) to be enabled per OCPU or ECPU",
  args: { name: "integer" },
};
const optMemorySizeInGbs: Fig.Option = {
  name: "--memory-size-in-gbs",
  description: "The memory to be allocated in GBs",
  args: { name: "integer" },
};
const optPatchHistoryEntryId: Fig.Option = {
  name: "--patch-history-entry-id",
  description: "The OCID of the patch history entry",
  args: { name: "patch-history-entry-id" },
  isRequired: true,
};
const optPdbAdminPassword: Fig.Option = {
  name: "--pdb-admin-password",
  description: "A strong password for PDB Admin",
  args: { name: "pdb-admin-password" },
};
const optPdbName: Fig.Option = {
  name: "--pdb-name",
  description: "The name for the pluggable database (PDB)",
  args: { name: "pdb-name" },
  isRequired: true,
};
const optProtocol: Fig.Option = {
  name: "--protocol",
  description: "Protocol used by the database connection",
  args: { suggestions: ["TCP", "TCPS"] },
};
const optRecoStoragePercentage: Fig.Option = {
  name: "--reco-storage-percentage",
  description:
    "The percentage assigned to RECO storage (database redo logs, archive logs, and recovery manager backups)",
  args: { name: "integer" },
};
const optResourceId: Fig.Option = {
  name: "--resource-id",
  description: "If provided, filters the results for the specified resource Id",
  args: { name: "resource-id" },
};
const optShape2: Fig.Option = {
  name: "--shape",
  description: "If provided, filters the results for the given shape",
  args: { name: "shape" },
};
const optSidPrefix: Fig.Option = {
  name: "--sid-prefix",
  description:
    "Specifies a prefix for the Oracle SID of the database to be created",
  args: { name: "sid-prefix" },
};
const optSparseStoragePercentage: Fig.Option = {
  name: "--sparse-storage-percentage",
  description: "The percentage assigned to SPARSE storage (Exadata snapshots)",
  args: { name: "integer" },
};
const optSslSecretId: Fig.Option = {
  name: "--ssl-secret-id",
  description: "The OCID of the Oracle Cloud Infrastructure secret",
  args: { name: "ssl-secret-id" },
};
const optSystemVersion: Fig.Option = {
  name: "--system-version",
  description: "Operating system version of the image",
  args: { name: "system-version" },
};
const optTdeWalletPassword: Fig.Option = {
  name: "--tde-wallet-password",
  description: "The existing TDE wallet password of the CDB",
  args: { name: "tde-wallet-password" },
};
const optUpdateHistoryEntryId: Fig.Option = {
  name: "--update-history-entry-id",
  description: "The OCID of the maintenance update history entry",
  args: { name: "update-history-entry-id" },
  isRequired: true,
};
const optUpdateId: Fig.Option = {
  name: "--update-id",
  description: "The OCID of the maintenance update",
  args: { name: "update-id" },
  isRequired: true,
};
const optVmBackupStorageType: Fig.Option = {
  name: "--vm-backup-storage-type",
  description:
    "Specifies the type of VM Backups Storage and supported values are LOCAL and EXASCALE",
  args: { suggestions: ["LOCAL", "EXASCALE"] },
};
const optVmClusterId2: Fig.Option = {
  name: "--vm-cluster-id",
  description: "The OCID of the VM cluster",
  args: { name: "vm-cluster-id" },
};
const optWaitForState16: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "FAILED", "DELETED"] },
  isRepeatable: true,
};
const optWaitForState17: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "AVAILABLE",
      "CREATING",
      "FAILED",
      "UPDATING",
      "DELETED",
      "DELETING",
    ],
  },
  isRepeatable: true,
};
const optWaitForState18: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "REQUIRES_VALIDATION",
      "VALIDATING",
      "VALIDATED",
      "VALIDATION_FAILED",
      "UPDATING",
      "ALLOCATED",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optAutoBackupEnabled: Fig.Option = {
  name: "--auto-backup-enabled",
  description: "If set to true, schedules backups automatically",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optAutoBackupWindow: Fig.Option = {
  name: "--auto-backup-window",
  description:
    "Specifying a two hour slot when the backup should kick in eg:- SLOT_ONE,SLOT_TWO",
  args: { name: "auto-backup-window" },
};
const optAutoFullBackupDay: Fig.Option = {
  name: "--auto-full-backup-day",
  description:
    "Day of the week the full backup should be applied on the database system",
  args: { name: "auto-full-backup-day" },
};
const optAutoFullBackupWindow: Fig.Option = {
  name: "--auto-full-backup-window",
  description:
    "Specifying a two hour slot when the full backup should kick in eg:- SLOT_ONE,SLOT_TWO",
  args: { name: "auto-full-backup-window" },
};
const optAutonomousDatabaseBackupId: Fig.Option = {
  name: "--autonomous-database-backup-id",
  description: "The OCID of the Autonomous AI Database backup",
  args: { name: "autonomous-database-backup-id" },
  isRequired: true,
};
const optBackupId2: Fig.Option = {
  name: "--backup-id",
  description: "The OCID of the backup",
  args: { name: "backup-id" },
};
const optCdbId: Fig.Option = {
  name: "--cdb-id",
  description: "The OCID of the CDB required",
  args: { name: "cdb-id" },
  isRequired: true,
};
const optClusterPlacementGroupId2: Fig.Option = {
  name: "--cluster-placement-group-id",
  description:
    "A filter to return only resources that match the given cluster placement group ID exactly",
  args: { name: "cluster-placement-group-id" },
};
const optCompartmentId8: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
};
const optConsoleConnectionId: Fig.Option = {
  name: "--console-connection-id",
  description: "The OCID of the console connection",
  args: { name: "console-connection-id" },
  isRequired: true,
};
const optDataStorageSizeInGbs2: Fig.Option = {
  name: "--data-storage-size-in-gbs",
  description:
    "Provide the DATA storage size, in gigabytes, that is applicable for the database",
  args: { name: "integer" },
};
const optDatabaseAdminPassword3: Fig.Option = {
  name: "--database-admin-password",
  description: "The DB system administrator password",
  args: { name: "database-admin-password" },
  isRequired: true,
};
const optDatabaseSnapshotId: Fig.Option = {
  name: "--database-snapshot-id",
  description: "The Exadata Database Snapshot OCID",
  args: { name: "database-snapshot-id" },
  isRequired: true,
};
const optDbHome: Fig.Option = {
  name: "--db-home",
  args: { name: "json" },
  isRequired: true,
};
const optDbSystemOptions: Fig.Option = {
  name: "--db-system-options",
  args: { name: "json" },
};
const optDbVersion4: Fig.Option = {
  name: "--db-version",
  description: "A valid Oracle Database version",
  args: { name: "db-version" },
  isRequired: true,
};
const optDiskRedundancy: Fig.Option = {
  name: "--disk-redundancy",
  description: "The type of redundancy configured for the DB system",
  args: { suggestions: ["HIGH", "NORMAL"] },
};
const optDisplayName5: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the external database",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName6: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the external database",
  args: { name: "display-name" },
};
const optDns: Fig.Option = {
  name: "--dns",
  description: "The list of DNS server IP addresses",
  args: { name: "json" },
};
const optExadataInfrastructureId2: Fig.Option = {
  name: "--exadata-infrastructure-id",
  description:
    "If provided, filters the results for the given Exadata Infrastructure",
  args: { name: "exadata-infrastructure-id" },
};
const optExternalDatabaseConnectorId: Fig.Option = {
  name: "--external-database-connector-id",
  description: "The OCID of the external database connector",
  args: { name: "external-database-connector-id" },
  isRequired: true,
};
const optGiHomeId: Fig.Option = {
  name: "--gi-home-id",
  description: "The Grid Infrastructure Home OCID",
  args: { name: "gi-home-id" },
  isRequired: true,
};
const optHsmPassword: Fig.Option = {
  name: "--hsm-password",
  description:
    "Provide the HSM password as you would in RDBMS for External HSM",
  args: { name: "hsm-password" },
};
const optIsAclEnabled: Fig.Option = {
  name: "--is-acl-enabled",
  description: "Indicates if the database-level access control is enabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsPdbAdminAccLocked: Fig.Option = {
  name: "--is-pdb-admin-acc-locked",
  description: "The locked mode of the pluggable database admin account",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsReplicateAutomaticBackups: Fig.Option = {
  name: "--is-replicate-automatic-backups",
  description:
    "If true, 7 days worth of backups are replicated across regions for Cross-Region ADB or Backup-Based DR",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLifecycleState2: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the given lifecycle state exactly",
  args: {
    suggestions: [
      "CREATING",
      "NEEDS_ATTENTION",
      "AVAILABLE",
      "UPDATING",
      "FAILED",
      "DELETING",
      "DELETED",
    ],
  },
};
const optLifecycleState3: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the specified lifecycle state",
  args: {
    suggestions: [
      "PROVISIONING",
      "NOT_CONNECTED",
      "AVAILABLE",
      "UPDATING",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
    ],
  },
};
const optLockPdbAdminAccount: Fig.Option = {
  name: "--lock-pdb-admin-account",
  description: "The locked mode of the pluggable database admin account",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optMsuDetails: Fig.Option = {
  name: "--msu-details",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optNtp: Fig.Option = {
  name: "--ntp",
  description: "The list of NTP server IP addresses",
  args: { name: "json" },
};
const optOptions: Fig.Option = {
  name: "--options",
  description:
    "Additional upgrade options supported by DBUA(Database Upgrade Assistant)",
  args: { name: "options" },
};
const optPatchAction: Fig.Option = {
  name: "--patch-action",
  description: "The action to perform on the patch",
  args: { name: "patch-action" },
};
const optPatchId2: Fig.Option = {
  name: "--patch-id",
  description: "The OCID of the patch",
  args: { name: "patch-id" },
};
const optPeerDbId: Fig.Option = {
  name: "--peer-db-id",
  description:
    "The database OCID(/Content/General/Concepts/identifiers.htm) of the Disaster Recovery peer",
  args: { name: "peer-db-id" },
};
const optPort: Fig.Option = {
  name: "--port",
  description: "The port used to connect to the database",
  args: { name: "integer" },
};
const optRecoStorageSizeInGbs: Fig.Option = {
  name: "--reco-storage-size-in-gbs",
  description:
    "Provide the RECO storage size, in gigabytes, that is applicable for the database",
  args: { name: "integer" },
};
const optRecoveryWindowInDays: Fig.Option = {
  name: "--recovery-window-in-days",
  description:
    "The number of days between the current and the earliest point of recoverability covered by automatic backups",
  args: { name: "integer" },
};
const optRole: Fig.Option = {
  name: "--role",
  description: "The role of the user that will be connecting to the database",
  args: { suggestions: ["SYSDBA", "NORMAL", "SYSDG"] },
};
const optScheduledActionId: Fig.Option = {
  name: "--scheduled-action-id",
  description: "The Scheduled Action OCID",
  args: { name: "scheduled-action-id" },
  isRequired: true,
};
const optSchedulingWindowId: Fig.Option = {
  name: "--scheduling-window-id",
  description: "The Scheduling Window OCID",
  args: { name: "scheduling-window-id" },
  isRequired: true,
};
const optShapeAttribute: Fig.Option = {
  name: "--shape-attribute",
  description:
    "If provided and applicable, return DB System shape parameters based on the shapeAttribute provided",
  args: { name: "shape-attribute" },
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "NAME"] },
};
const optSortBy4: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMESTARTED"] },
};
const optSourcePdbId: Fig.Option = {
  name: "--source-pdb-id",
  description: "The OCID of the Source Pluggable Database. required",
  args: { name: "source-pdb-id" },
  isRequired: true,
};
const optSshPublicKeys: Fig.Option = {
  name: "--ssh-public-keys",
  description:
    "The public key portion of the key pair to use for SSH access to the DB system",
  args: { name: "json" },
};
const optTargetResourceId: Fig.Option = {
  name: "--target-resource-id",
  description: "The target resource ID",
  args: { name: "target-resource-id" },
};
const optTargetResourceType: Fig.Option = {
  name: "--target-resource-type",
  description: "The type of the target resource",
  args: {
    suggestions: [
      "AUTONOMOUS_EXADATA_INFRASTRUCTURE",
      "AUTONOMOUS_CONTAINER_DATABASE",
      "EXADATA_DB_SYSTEM",
      "CLOUD_EXADATA_INFRASTRUCTURE",
      "EXACC_INFRASTRUCTURE",
      "AUTONOMOUS_VM_CLUSTER",
      "AUTONOMOUS_DATABASE",
      "CLOUD_AUTONOMOUS_VM_CLUSTER",
    ],
  },
};
const optTransportType2: Fig.Option = {
  name: "--transport-type",
  description: "The redo transport type to use for this Data Guard association",
  args: { suggestions: ["SYNC", "ASYNC", "FASTSYNC"] },
};
const optVmClusterId3: Fig.Option = {
  name: "--vm-cluster-id",
  description: "The Vm Cluster Id to create this database under",
  args: { name: "vm-cluster-id" },
};
const optWaitForState19: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED", "NEEDS_ATTENTION"] },
  isRepeatable: true,
};
const optWaitForState20: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "AVAILABLE",
      "TERMINATING",
      "TERMINATED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState21: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "SCHEDULED",
      "IN_PROGRESS",
      "FAILED",
      "CANCELED",
      "UPDATING",
      "DELETED",
      "SUCCEEDED",
      "PARTIAL_SUCCESS",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "db",
  description: "Database Service",
  subcommands: [
    {
      name: "backup",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel automatic/standalone full/incremental create backup workrequests specified by the backup Id",
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
          name: "create",
          description:
            "Creates a new backup in the specified database based on the request parameters you provide",
          options: [
            {
              name: "--database-id",
              description: "The OCID of the database",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the backup",
              args: { name: "display-name" },
              isRequired: true,
            },
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
                  "RESTORING",
                  "UPDATING",
                  "CANCELING",
                  "CANCELED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--retention-days",
              description:
                "The retention period of the long term backup in days",
              args: { name: "integer" },
            },
            {
              name: "--retention-years",
              description:
                "The retention period of the long term backup in years",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a full backup",
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
          name: "get",
          description: "Gets information about the specified backup",
          options: [optBackupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of backups based on the databaseId or compartmentId specified",
          options: [
            {
              name: "--database-id",
              description: "The OCID of the database",
              args: { name: "database-id" },
            },
            optCompartmentId3,
            optLimit,
            optPage,
            {
              name: "--shape-family",
              description:
                "If provided, filters the results to the set of database versions which are supported for the given shape",
              args: {
                suggestions: [
                  "SINGLENODE",
                  "YODA",
                  "VIRTUALMACHINE",
                  "EXADATA",
                  "EXACC",
                  "EXADB_XS",
                ],
              },
            },
            {
              name: "--type",
              description:
                "A filter to return only backups that matches with the given type of Backup",
              args: { name: "type" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "RESTORING",
                  "UPDATING",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--backup-destination-type",
              description:
                "A filter to return only resources that match the given backup destination type",
              args: { name: "backup-destination-type" },
            },
            optAll,
            optPageSize,
            {
              name: "--time-expiry-start",
              description:
                "The start of date-time range of expiration for the long term backups to be fetched",
              args: { name: "datetime" },
            },
            {
              name: "--time-expiry-end",
              description:
                "The end of date-time range of expiration for the long term backups to be fetched",
              args: { name: "datetime" },
            },
            {
              name: "--db-version",
              description:
                "A filter to return only resources that match the given database version",
              args: { name: "db-version" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates database backup details",
          options: [
            optBackupId,
            optIfMatch,
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
                  "RESTORING",
                  "UPDATING",
                  "CANCELING",
                  "CANCELED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--retention-days",
              description:
                "The retention period of the long term backup in days",
              args: { name: "integer" },
            },
            {
              name: "--retention-years",
              description:
                "The retention period of the long term backup in years",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application-vip",
      description: "Details of an application virtual IP (VIP) address",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new application virtual IP (VIP) address in the specified cloud VM cluster based on the request",
          options: [
            {
              name: "--hostname-label",
              description:
                "The hostname of the application virtual IP (VIP) address",
              args: { name: "hostname-label" },
              isRequired: true,
            },
            {
              name: "--cloud-vm-cluster-id",
              description:
                "The OCID of the cloud VM cluster associated with the application virtual IP (VIP) address",
              args: { name: "cloud-vm-cluster-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet associated with the application virtual IP (VIP) address",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--db-node-id",
              description:
                "The OCID of the DB node associated with the application virtual IP (VIP) address",
              args: { name: "db-node-id" },
            },
            {
              name: "--ip-address",
              description: "The application virtual IP (VIP) IPv4 address",
              args: { name: "ip-address" },
            },
            {
              name: "--ipv6-address",
              description: "The application virtual IP (VIP) IPv6 address",
              args: { name: "ipv6-address" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
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
        {
          name: "delete",
          description:
            "Deletes and deregisters the specified application virtual IP (VIP) address",
          options: [
            {
              name: "--application-vip-id",
              description:
                "The OCID of the application virtual IP (VIP) address",
              args: { name: "application-vip-id" },
              isRequired: true,
            },
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
            "Gets information about a specified application virtual IP (VIP) address",
          options: [
            {
              name: "--application-vip-id",
              description:
                "The OCID of the application virtual IP (VIP) address",
              args: { name: "application-vip-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of application virtual IP (VIP) addresses on a cloud VM cluster",
          options: [
            optCompartmentId,
            {
              name: "--cloud-vm-cluster-id",
              description:
                "The OCID of the cloud VM cluster associated with the application virtual IP (VIP) address",
              args: { name: "cloud-vm-cluster-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
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
      name: "exadb-vm-cluster",
      description:
        "Details of the Exadata VM cluster on Exascale Infrastructure",
      subcommands: [
        {
          name: "add",
          description: "Add a database node snapshots to the Exadb VM cluster",
          options: [
            {
              name: "--name",
              description:
                "The user-friendly name for the Database Node Snapshot",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--source-dbnode-ids",
              description: "The OCID of the Exadata Database Node",
              args: { name: "json" },
              isRequired: true,
            },
            optExadbVmClusterId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a Exadata VM cluster on Exascale Infrastructure and its dependent resources to another compartment",
          options: [
            optCompartmentId2,
            optExadbVmClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-exadb-vm-cluster-subscription",
          description:
            "Associate a Exadata VM cluster on Exascale Infrastructure with a different subscription",
          options: [
            optExadbVmClusterId,
            optSubscriptionId,
            optIsDefault,
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
            "Creates an Exadata VM cluster on Exascale Infrastructure",
          options: [
            optCompartmentId2,
            {
              name: "--availability-domain",
              description:
                "The name of the availability domain in which the Exadata VM cluster on Exascale Infrastructure is located",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet associated with the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--backup-subnet-id",
              description:
                "The OCID of the backup network subnet associated with the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "backup-subnet-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description:
                "The hostname for the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: "--shape",
              description:
                "The shape of the Exadata VM cluster on Exascale Infrastructure resource",
              args: { name: "shape" },
              isRequired: true,
            },
            {
              name: "--node-count",
              description:
                "The number of nodes in the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--total-e-cpu-count",
              description:
                "The number of Total ECPUs for an Exadata VM cluster on Exascale Infrastructure",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--enabled-e-cpu-count",
              description:
                "The number of ECPUs to enable for an Exadata VM cluster on Exascale Infrastructure",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--vm-file-system-storage",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--grid-image-id",
              description: "Grid Setup will be done using this grid image id",
              args: { name: "grid-image-id" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description:
                "The cluster name for Exadata VM cluster on Exascale Infrastructure",
              args: { name: "cluster-name" },
            },
            {
              name: "--domain",
              description:
                "A domain name used for the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "domain" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the Exadata VM cluster on Exascale Infrastructure",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--time-zone",
              description:
                "The time zone to use for the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "time-zone" },
            },
            {
              name: "--scan-listener-port-tcp",
              description: "The TCP Single Client Access Name (SCAN) port",
              args: { name: "integer" },
            },
            {
              name: "--private-zone-id",
              description:
                "The private zone ID in which you want DNS records to be created",
              args: { name: "private-zone-id" },
            },
            optNsgIds,
            optBackupNetworkNsgIds,
            optSystemVersion,
            optIsOlderVersionAcknowledged,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optDataCollectionOptions,
            optSubscriptionId,
            {
              name: "--shape-attribute",
              description:
                "The type of Exascale storage used for Exadata VM cluster",
              args: { suggestions: ["SMART_STORAGE", "BLOCK_STORAGE"] },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--scan-listener-port-tcps",
              description:
                "The Secured Communication (TCPS) protocol Single Client Access Name (SCAN) port",
              args: { name: "integer" },
            },
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to use for SSH access to the Exadb VM Cluster",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--vault-id",
              description: "The OCID of the Exadata Database Storage Vault",
              args: { name: "vault-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Exadata VM cluster on Exascale Infrastructure",
          options: [
            optExadbVmClusterId,
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
            "Gets information about the specified Exadata VM cluster on Exascale Infrastructure",
          options: [optExadbVmClusterId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the Exadata VM clusters on Exascale Infrastructure in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Exadata VM clusters on Exascale Infrastructure that match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "MAINTENANCE_IN_PROGRESS",
                ],
              },
            },
            optClusterPlacementGroupId2,
            optDisplayName,
            optAll,
            optPageSize,
            {
              name: "--vault-id",
              description:
                "A filter to return only Exadata VM clusters on Exascale Infrastructure that match the given Exascale Database",
              args: { name: "vault-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "register-exadb-vm-cluster-pkcs",
          description: "Install the PKCS11 driver for given keystore type",
          options: [
            optExadbVmClusterId,
            optTdeKeyStoreType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Remove Virtual Machines from the Exadata VM cluster on Exascale Infrastructure",
          options: [
            {
              name: "--db-nodes",
              description:
                "The list of ExaCS DB nodes for the Exadata VM cluster on Exascale Infrastructure to be removed",
              args: { name: "json" },
              isRequired: true,
            },
            optExadbVmClusterId,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unregister-exadb-vm-cluster-pkcs",
          description: "Uninstall the PKCS11 driver for given keystore type",
          options: [
            optExadbVmClusterId,
            optTdeKeyStoreType,
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
            "Updates the specified Exadata VM cluster on Exascale Infrastructure",
          options: [
            optExadbVmClusterId,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "display-name" },
            },
            {
              name: "--total-e-cpu-count",
              description:
                "The number of Total ECPUs for an Exadata VM cluster on Exascale Infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--enabled-e-cpu-count",
              description:
                "The number of ECPUs to enable for an Exadata VM cluster on Exascale Infrastructure",
              args: { name: "integer" },
            },
            { name: "--vm-file-system-storage", args: { name: "json" } },
            {
              name: "--node-count",
              description:
                "The number of nodes to be added in the Exadata VM cluster on Exascale Infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the Exadata VM cluster on Exascale Infrastructure",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            optNsgIds,
            optBackupNetworkNsgIds,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optDataCollectionOptions,
            optSystemVersion,
            {
              name: "--grid-image-id",
              description: "Grid Setup will be done using this grid image id",
              args: { name: "grid-image-id" },
            },
            {
              name: "--update-action",
              description: "The update action",
              args: {
                suggestions: [
                  "ROLLING_APPLY",
                  "NON_ROLLING_APPLY",
                  "PRECHECK",
                  "ROLLBACK",
                ],
              },
            },
            optIsOlderVersionAcknowledged,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to use for SSH access to the Exadb VM Cluster",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-update",
          description:
            "Gets information about a specified maintenance update package for a Exadata VM cluster on Exascale",
          options: [optExadbVmClusterId, optUpdateId, optFromJson],
        },
        {
          name: "list-updates",
          description:
            "Lists the maintenance updates that can be applied to the specified Exadata VM cluster on Exascale",
          options: [
            optExadbVmClusterId,
            optUpdateType,
            {
              name: "--version-parameterconflict",
              description:
                "A filter to return only resources that match the given update version exactly",
              args: { name: "version-parameterconflict" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-update-history",
          description:
            "Gets the maintenance update history details for the specified update history entry",
          options: [optExadbVmClusterId, optUpdateHistoryEntryId, optFromJson],
        },
        {
          name: "list-update-histories",
          description:
            "Gets the history of the maintenance update actions performed on the specified Exadata VM cluster on Exascale",
          options: [
            optExadbVmClusterId,
            optUpdateType,
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
      name: "oneoff-patch",
      description:
        "One-off patches are created by specifying a database version, releaseUpdate and one-off patch number",
      subcommands: [
        {
          name: "change-compartment",
          description: "Move the one-off patch to the specified compartment",
          options: [
            optCompartmentId4,
            optOneoffPatchId,
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
            "Creates one-off patch for specified database version to download",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "One-off patch name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optDbVersion4,
            {
              name: "--release-update",
              description: "The PSU or PBP or Release Updates",
              args: { name: "release-update" },
              isRequired: true,
            },
            {
              name: "--one-off-patches",
              description: "List of one-off patches for Database Homes",
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
                  "AVAILABLE",
                  "UPDATING",
                  "INACTIVE",
                  "FAILED",
                  "EXPIRED",
                  "DELETING",
                  "DELETED",
                  "TERMINATING",
                  "TERMINATED",
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
          name: "delete",
          description: "Deletes a one-off patch",
          options: [
            optOneoffPatchId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download",
          description: "Download one-off patch",
          options: [optOneoffPatchId, optIfMatch, optFromJson],
        },
        {
          name: "get",
          description: "Gets information about the specified one-off patch",
          options: [optOneoffPatchId, optFromJson],
        },
        {
          name: "list",
          description: "Lists one-off patches in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "UPDATING",
                  "INACTIVE",
                  "FAILED",
                  "EXPIRED",
                  "DELETING",
                  "DELETED",
                  "TERMINATING",
                  "TERMINATED",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the properties of the specified one-off patch",
          options: [
            optOneoffPatchId,
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
                  "AVAILABLE",
                  "UPDATING",
                  "INACTIVE",
                  "FAILED",
                  "EXPIRED",
                  "DELETING",
                  "DELETED",
                  "TERMINATING",
                  "TERMINATED",
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
      name: "autonomous-container-database-version",
      description: "The supported Autonomous AI Database version",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of supported Autonomous Container Database versions",
          options: [
            optCompartmentId,
            {
              name: "--service-component",
              description: "The service component to use, either ADBD or EXACC",
              args: { suggestions: ["ADBD", "EXACC"] },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "scheduling-policy",
      description: "Details of a Scheduling Policy",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an scheduling policy resource to another compartment",
          options: [
            optCompartmentId2,
            optSchedulingPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a Scheduling Policy resource",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The user-friendly name for the Scheduling Policy",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--cadence",
              description: "The cadence period",
              args: { suggestions: ["HALFYEARLY", "QUARTERLY", "MONTHLY"] },
              isRequired: true,
            },
            {
              name: "--cadence-start-month",
              description:
                "Start of the month to be followed during the cadence period",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the scheduling policy",
          options: [
            optSchedulingPolicyId,
            optIfMatch,
            optForce,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified Scheduling Policy",
          options: [optSchedulingPolicyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Scheduling Policy resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState2,
            optDisplayName,
            {
              name: "--cadence",
              description:
                "A filter to return only resources that match the given cadence period exactly",
              args: { suggestions: ["HALFYEARLY", "QUARTERLY", "MONTHLY"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Scheduling Policy resource",
          options: [
            optSchedulingPolicyId,
            {
              name: "--display-name",
              description: "The user-friendly name for the Scheduling Policy",
              args: { name: "display-name" },
            },
            {
              name: "--cadence",
              description: "The cadence period",
              args: { suggestions: ["HALFYEARLY", "QUARTERLY", "MONTHLY"] },
            },
            {
              name: "--cadence-start-month",
              description:
                "Start of the month to be followed during the cadence period",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "patch",
      subcommands: [
        {
          name: "get-db-home",
          description: "Gets information about a specified patch package",
          options: [optDbHomeId2, optPatchId, optFromJson],
        },
        {
          name: "get-vm-cluster",
          description: "Gets information about a specified patch package",
          options: [optVmClusterId, optPatchId, optFromJson],
        },
        {
          name: "list-db-home",
          description:
            "Lists patches applicable to the requested Database Home",
          options: [
            optDbHomeId2,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-vm-cluster",
          description:
            "Lists the patches applicable to the specified VM cluster in an Exadata Cloud@Customer system",
          options: [
            optVmClusterId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a specified patch package",
          subcommands: [
            {
              name: "by-database",
              description: "Get patch for a given database",
              options: [optPatchId, optDatabaseId, optFromJson],
            },
            {
              name: "by-db-system",
              description: "Gets information the specified patch",
              options: [optDbSystemId, optPatchId, optFromJson],
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists patches applicable to the requested Database Home",
          subcommands: [
            {
              name: "by-database",
              description: "List patches for a given database",
              options: [
                optLimit,
                optPage,
                optAll,
                optPageSize,
                optDatabaseId,
                optFromJson,
              ],
            },
            {
              name: "by-db-system",
              description:
                "Lists the patches applicable to the specified DB system",
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
      ],
    },
    {
      name: "exadata-infrastructure",
      description: "ExadataInfrastructure",
      subcommands: [
        {
          name: "activate",
          description:
            "Activates the specified Exadata infrastructure resource",
          options: [
            optExadataInfrastructureId,
            {
              name: "--activation-file",
              description: "The activation zip file",
              args: { name: "activation-file", template: "filepaths" },
              isRequired: true,
            },
            optWaitForState15,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves an Exadata infrastructure resource and its dependent resources to another compartment",
          options: [
            optCompartmentId4,
            optExadataInfrastructureId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "configure-exascale",
          description: "Configures Exascale on Exadata infrastructure resource",
          options: [
            optExadataInfrastructureId,
            {
              name: "--total-storage-in-gbs",
              description: "Storage size needed for Exascale in GBs",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--total-vm-storage-in-gbs",
              description:
                "Storage size needed for VM storage on Exascale in GBs",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState15,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an Exadata infrastructure resource",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata infrastructure",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--shape",
              description: "The shape of the Exadata infrastructure",
              args: { name: "shape" },
              isRequired: true,
            },
            {
              name: "--time-zone",
              description: "The time zone of the Exadata infrastructure",
              args: { name: "time-zone" },
              isRequired: true,
            },
            {
              name: "--cloud-control-plane-server1",
              description: "The IP address for the first control plane server",
              args: { name: "cloud-control-plane-server1" },
              isRequired: true,
            },
            {
              name: "--cloud-control-plane-server2",
              description: "The IP address for the second control plane server",
              args: { name: "cloud-control-plane-server2" },
              isRequired: true,
            },
            {
              name: "--netmask",
              description: "The netmask for the control plane network",
              args: { name: "netmask" },
              isRequired: true,
            },
            {
              name: "--gateway",
              description: "The gateway for the control plane network",
              args: { name: "gateway" },
              isRequired: true,
            },
            {
              name: "--admin-network-cidr",
              description:
                "The CIDR block for the Exadata administration network",
              args: { name: "admin-network-cidr" },
              isRequired: true,
            },
            {
              name: "--infini-band-network-cidr",
              description:
                "The CIDR block for the Exadata InfiniBand interconnect",
              args: { name: "infini-band-network-cidr" },
              isRequired: true,
            },
            {
              name: "--dns-server",
              description: "The list of DNS server IP addresses",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--ntp-server",
              description: "The list of NTP server IP addresses",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--corporate-proxy",
              description:
                "The corporate network proxy for access to the control plane network",
              args: { name: "corporate-proxy" },
            },
            {
              name: "--contacts",
              description:
                "The list of contacts for the Exadata infrastructure",
              args: { name: "json" },
            },
            optMaintenanceWindow,
            optMaintenanceVersionPreferences,
            {
              name: "--storage-count",
              description:
                "The number of storage servers for the Exadata infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--compute-count",
              description:
                "The number of compute servers for the Exadata infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--is-multi-rack-deployment",
              description: "Indicates if deployment is Multi-Rack or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--multi-rack-configuration-file",
              description:
                "The base64 encoded Multi-Rack configuration json file",
              args: {
                name: "multi-rack-configuration-file",
                template: "filepaths",
              },
            },
            {
              name: "--is-cps-offline-report-enabled",
              description:
                "Indicates whether cps offline diagnostic report is enabled for this Exadata infrastructure",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--network-bonding-mode-details", args: { name: "json" } },
            {
              name: "--database-server-type",
              description:
                "The database server type of the Exadata infrastructure",
              args: { name: "database-server-type" },
            },
            {
              name: "--storage-server-type",
              description:
                "The storage server type of the Exadata infrastructure",
              args: { name: "storage-server-type" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--ssl-inspection-configuration", args: { name: "json" } },
            optWaitForState15,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the Exadata Cloud@Customer infrastructure",
          options: [
            optExadataInfrastructureId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-recommended-vm-cluster-network",
          description:
            "Generates a recommended Cloud@Customer VM cluster network configuration",
          options: [
            optExadataInfrastructureId,
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The user-friendly name for the VM cluster network",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--networks",
              description:
                "List of parameters for generation of the client and backup networks",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--db-servers",
              description: "The list of Db server Ids to configure network",
              args: { name: "json" },
            },
            {
              name: "--scan-listener-port-tcp",
              description: "The SCAN TCPIP port",
              args: { name: "integer" },
            },
            {
              name: "--scan-listener-port-tcp-ssl",
              description: "The SCAN TCPIP SSL port",
              args: { name: "integer" },
            },
            {
              name: "--dr-scan-listener-port-tcp",
              description: "The DR SCAN TCPIP port",
              args: { name: "integer" },
            },
            {
              name: "--dr-scan-listener-port-tcp-ssl",
              description: "The DR SCAN TCPIP SSL port",
              args: { name: "integer" },
            },
            optDns,
            optNtp,
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified Exadata infrastructure",
          options: [
            optExadataInfrastructureId,
            {
              name: "--excluded-fields",
              description:
                "If provided, the specified fields will be excluded in the response",
              args: { suggestions: ["multiRackConfigurationFile"] },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the Exadata infrastructure resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "REQUIRES_ACTIVATION",
                  "ACTIVATING",
                  "ACTIVE",
                  "ACTIVATION_FAILED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "DISCONNECTED",
                  "MAINTENANCE_IN_PROGRESS",
                  "WAITING_FOR_CONNECTIVITY",
                ],
              },
            },
            optDisplayName,
            {
              name: "--excluded-fields",
              description:
                "If provided, the specified fields will be excluded in the response",
              args: { suggestions: ["multiRackConfigurationFile"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Exadata infrastructure resource",
          options: [
            optExadataInfrastructureId,
            {
              name: "--cloud-control-plane-server1",
              description: "The IP address for the first control plane server",
              args: { name: "cloud-control-plane-server1" },
            },
            {
              name: "--cloud-control-plane-server2",
              description: "The IP address for the second control plane server",
              args: { name: "cloud-control-plane-server2" },
            },
            {
              name: "--netmask",
              description: "The netmask for the control plane network",
              args: { name: "netmask" },
            },
            {
              name: "--gateway",
              description: "The gateway for the control plane network",
              args: { name: "gateway" },
            },
            {
              name: "--admin-network-cidr",
              description:
                "The CIDR block for the Exadata administration network",
              args: { name: "admin-network-cidr" },
            },
            {
              name: "--infini-band-network-cidr",
              description:
                "The CIDR block for the Exadata InfiniBand interconnect",
              args: { name: "infini-band-network-cidr" },
            },
            {
              name: "--corporate-proxy",
              description:
                "The corporate network proxy for access to the control plane network",
              args: { name: "corporate-proxy" },
            },
            {
              name: "--contacts",
              description:
                "The list of contacts for the Exadata infrastructure",
              args: { name: "json" },
            },
            optMaintenanceWindow,
            optMaintenanceVersionPreferences,
            {
              name: "--additional-storage-count",
              description:
                "The requested number of additional storage servers for the Exadata infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--is-multi-rack-deployment",
              description: "Indicates if deployment is Multi-Rack or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--multi-rack-configuration-file",
              description:
                "The base64 encoded Multi-Rack configuration json file",
              args: {
                name: "multi-rack-configuration-file",
                template: "filepaths",
              },
            },
            {
              name: "--additional-compute-count",
              description:
                "The requested number of additional compute servers for the Exadata infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--additional-compute-system-model",
              description: "Oracle Exadata System Model specification",
              args: { suggestions: ["X7", "X8", "X8M", "X9M", "X10M", "X11M"] },
            },
            {
              name: "--dns-server",
              description: "The list of DNS server IP addresses",
              args: { name: "json" },
            },
            {
              name: "--ntp-server",
              description: "The list of NTP server IP addresses",
              args: { name: "json" },
            },
            {
              name: "--time-zone",
              description: "The time zone of the Exadata infrastructure",
              args: { name: "time-zone" },
            },
            {
              name: "--is-cps-offline-report-enabled",
              description:
                "Indicates whether cps offline diagnostic report is enabled for this Exadata infrastructure",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--network-bonding-mode-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState15,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-config-file",
          description:
            "Downloads the configuration file for the specified Exadata Cloud@Customer infrastructure",
          options: [optExadataInfrastructureId, optFile, optFromJson],
        },
        {
          name: "get-compute-units",
          description:
            "Gets details of the available and consumed OCPUs for the specified Autonomous Exadata Infrastructure resource",
          options: [optAutonomousExadataInfrastructureId2, optFromJson],
        },
        {
          name: "add-storage-capacity",
          description:
            "Makes the storage capacity from additional storage servers available for VM Cluster consumption",
          options: [
            optExadataInfrastructureId,
            optIfMatch,
            optWaitForState15,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pluggable-database",
      description:
        "A pluggable database (PDB) is portable collection of schemas, schema objects",
      subcommands: [
        {
          name: "convert-to-regular",
          description:
            "Converts a Refreshable clone to Regular pluggable database (PDB)",
          options: [
            {
              name: "--tde-wallet-password",
              description:
                "The existing TDE wallet password of the Container Database",
              args: { name: "tde-wallet-password" },
            },
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--pdb-id",
              description: "The database OCID. required",
              args: { name: "pdb-id" },
              isRequired: true,
            },
            optCreatePdbBackup,
            optCdbAdminPassword,
            optFromJson,
          ],
        },
        {
          name: "create",
          options: [
            optPdbName,
            {
              name: "--container-database-id",
              description: "The OCID of the CDB",
              args: { name: "container-database-id" },
              isRequired: true,
            },
            optPdbAdminPassword,
            optTdeWalletPassword,
            optFreeformTags,
            optDefinedTags,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCreatePdbBackup,
            optCdbAdminPassword,
            optIsPdbAdminAccLocked,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified pluggable database",
          options: [
            optPluggableDatabaseId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-pluggable-database-management",
          description:
            "Disables the Database Management service for the pluggable database",
          options: [
            optPluggableDatabaseId,
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-pluggable-database-management",
          description:
            "Enables the Database Management service for an Oracle Pluggable Database located in Oracle Cloud",
          options: [
            optPluggableDatabaseId,
            {
              name: "--private-end-point-id",
              description: "The OCID of the private endpoint",
              args: { name: "private-end-point-id" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description:
                "The name of the Oracle Database service that will be used to connect to the database",
              args: { name: "service-name" },
              isRequired: true,
            },
            optProtocol,
            {
              name: "--port",
              description: "The port used to connect to the pluggable database",
              args: { name: "integer" },
            },
            optSslSecretId,
            {
              name: "--role",
              description:
                "The role of the user that will be connecting to the pluggable database",
              args: { suggestions: ["SYSDBA", "NORMAL", "SYSDG"] },
            },
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--user-name",
              description:
                "The name of the Oracle Database user that will be used to connect to the database",
              args: { name: "user-name" },
              isRequired: true,
            },
            {
              name: "--password-secret-id",
              description: "The OCID of the Oracle Cloud Infrastructure secret",
              args: { name: "password-secret-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified pluggable database",
          options: [optPluggableDatabaseId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the pluggable databases in a database or compartment",
          options: [
            optCompartmentId3,
            {
              name: "--database-id",
              description: "The OCID of the database",
              args: { name: "database-id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["PDBNAME", "TIMECREATED"] },
            },
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "UPDATING",
                  "FAILED",
                  "RELOCATING",
                  "RELOCATED",
                  "REFRESHING",
                  "RESTORE_IN_PROGRESS",
                  "RESTORE_FAILED",
                  "BACKUP_IN_PROGRESS",
                  "DISABLED",
                ],
              },
            },
            {
              name: "--pdb-name",
              description:
                "A filter to return only pluggable databases that match the entire name given",
              args: { name: "pdb-name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "local-clone",
          options: [
            {
              name: "--cloned-pdb-name",
              description: "The name for the pluggable database (PDB)",
              args: { name: "cloned-pdb-name" },
              isRequired: true,
            },
            optPluggableDatabaseId,
            {
              name: "--pdb-admin-password",
              description:
                "A strong password for PDB Admin of the newly cloned PDB",
              args: { name: "pdb-admin-password" },
            },
            {
              name: "--target-tde-wallet-password",
              description: "The existing TDE wallet password of the target CDB",
              args: { name: "target-tde-wallet-password" },
            },
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsPdbAdminAccLocked,
            optFromJson,
          ],
        },
        {
          name: "modify-pluggable-database-management",
          description:
            "Updates one or more attributes of the Database Management service for the pluggable database",
          options: [
            optPluggableDatabaseId,
            {
              name: "--private-end-point-id",
              description: "The OCID of the private endpoint",
              args: { name: "private-end-point-id" },
            },
            {
              name: "--service-name",
              description:
                "The name of the Oracle Database service that will be used to connect to the database",
              args: { name: "service-name" },
            },
            optProtocol,
            optPort,
            optSslSecretId,
            optRole,
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--user-name",
              description:
                "The name of the Oracle Database user that will be used to connect to the database",
              args: { name: "user-name" },
            },
            {
              name: "--password-secret-id",
              description: "The OCID of the Oracle Cloud Infrastructure secret",
              args: { name: "password-secret-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "refresh",
          description: "Refreshes a pluggable database (PDB) Refreshable clone",
          options: [
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--pdb-id",
              description: "The database OCID. required",
              args: { name: "pdb-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "remote-clone",
          options: [
            {
              name: "--target-container-database-id",
              description: "The OCID of the target CDB",
              args: { name: "target-container-database-id" },
              isRequired: true,
            },
            {
              name: "--source-container-db-admin-password",
              description:
                "The DB system administrator password of the source CDB",
              args: { name: "source-container-db-admin-password" },
              isRequired: true,
            },
            {
              name: "--cloned-pdb-name",
              description: "The name for the pluggable database (PDB)",
              args: { name: "cloned-pdb-name" },
              isRequired: true,
            },
            optPluggableDatabaseId,
            {
              name: "--pdb-admin-password",
              description:
                "A strong password for PDB Admin of the newly cloned PDB",
              args: { name: "pdb-admin-password" },
            },
            {
              name: "--target-tde-wallet-password",
              description: "The existing TDE wallet password of the target CDB",
              args: { name: "target-tde-wallet-password" },
            },
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsPdbAdminAccLocked,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts a stopped pluggable database",
          options: [
            optPluggableDatabaseId,
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops a pluggable database",
          options: [
            optPluggableDatabaseId,
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified pluggable database",
          options: [
            optPluggableDatabaseId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rotate-encryption-key",
          description: "Create a new version of the existing encryption key",
          options: [
            optPluggableDatabaseId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-local-clone",
          description:
            "Creates and starts a pluggable database in the specified container database",
          options: [
            optPdbName,
            optPdbAdminPassword,
            optTdeWalletPassword,
            optFreeformTags,
            optDefinedTags,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCdbId,
            optSourcePdbId,
            optCreatePdbBackup,
            optLockPdbAdminAccount,
            optCdbAdminPassword,
            {
              name: "--is-thin-clone",
              description:
                "True if Pluggable Database needs to be thin cloned and false if Pluggable Database needs to be thick cloned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--source-pdb-snapshot-id",
              description:
                "The OCID of the Source Pluggable Database Snapshot id",
              args: { name: "source-pdb-snapshot-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "relocate-pdb",
          description:
            "Creates and starts a pluggable database in the specified container database",
          options: [
            optPdbName,
            optPdbAdminPassword,
            optTdeWalletPassword,
            optFreeformTags,
            optDefinedTags,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCdbId,
            {
              name: "--source-cdb-admin-password",
              description:
                "The DB system administrator password of the source Container Database. required",
              args: { name: "source-cdb-admin-password" },
              isRequired: true,
            },
            optSourcePdbId,
            {
              name: "--dblink-user-password",
              description: "The DB link user password",
              args: { name: "dblink-user-password" },
            },
            {
              name: "--dblink-username",
              description: "The name of the DB link user",
              args: { name: "dblink-username" },
            },
            optCreatePdbBackup,
            optLockPdbAdminAccount,
            optCdbAdminPassword,
            optFromJson,
          ],
        },
        {
          name: "create-remote-clone",
          description:
            "Creates and starts a pluggable database in the specified container database",
          options: [
            optPdbName,
            optPdbAdminPassword,
            optTdeWalletPassword,
            optFreeformTags,
            optDefinedTags,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCdbId,
            {
              name: "--source-cdb-admin-password",
              description:
                "The DB system administrator password of the source Container Database. required",
              args: { name: "source-cdb-admin-password" },
              isRequired: true,
            },
            optSourcePdbId,
            {
              name: "--dblink-user-password",
              description: "The DB link user password",
              args: { name: "dblink-user-password" },
            },
            {
              name: "--dblink-username",
              description: "The name of the DB link user",
              args: { name: "dblink-username" },
            },
            {
              name: "--is-refreshable-clone",
              description:
                "Indicates whether Pluggable Database will be refreshable",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCreatePdbBackup,
            optLockPdbAdminAccount,
            optCdbAdminPassword,
            {
              name: "--is-thin-clone",
              description:
                "True if Pluggable Database needs to be thin cloned and false if Pluggable Database needs to be thick cloned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--source-pdb-snapshot-id",
              description:
                "The OCID of the Source Pluggable Database Snapshot id",
              args: { name: "source-pdb-snapshot-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "set-oci-pdb-key-version",
          description: "Sets a new version of an existing Vault service key",
          options: [
            optPluggableDatabaseId,
            {
              name: "--kms-key-version-id",
              description:
                "The OCID of the key container version that is used in database transparent data encryption",
              args: { name: "kms-key-version-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-snapshot",
          description: "Creates a Pluggable Database Snapshot",
          options: [
            {
              name: "--name",
              description: "The user-friendly name for the Database Snapshot",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--pluggable-database-id",
              description: "The OCID of the Exadata Pluggable Database",
              args: { name: "pluggable-database-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState20,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-snapshot",
          description:
            "Deletes the specified Exadata Pluggable Database Snapshot",
          options: [
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--pdb-snapshot-id",
              description: "The Exadata Pluggable Database Snapshot OCID",
              args: { name: "pdb-snapshot-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-snapshot",
          description:
            "Gets information about the specified Exadata Pluggable Database Snapshot in the specified compartment",
          options: [
            {
              name: "--pdb-snapshot-id",
              description: "The Exadata Pluggable Database Snapshot OCID",
              args: { name: "pdb-snapshot-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-snapshots",
          description:
            "Gets a list of the Exadata Pluggable Database Snapshots in the specified compartment",
          options: [
            optCompartmentId3,
            optLimit,
            optPage,
            optSortBy3,
            optName,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Exadata Pluggable Database Snapshots that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--cluster-id",
              description:
                "A filter to return only Exadata Database Node Snapshots that match the given VM cluster",
              args: { name: "cluster-id" },
            },
            {
              name: "--pluggable-database-id",
              description:
                "A filter to return only Exadata Pluggable Database Snapshots that match the given database OCID",
              args: { name: "pluggable-database-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "scheduling-plan",
      description: "Details of a Scheduling Plan",
      subcommands: [
        {
          name: "cascading-delete",
          description:
            "Delete the scheduling plan resource along with all the scheduled actions associated with this resource",
          options: [
            optSchedulingPlanId,
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
            "Moves an scheduling plan resource to another compartment",
          options: [
            optCompartmentId2,
            optSchedulingPlanId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a Scheduling Plan resource",
          options: [
            optCompartmentId2,
            {
              name: "--scheduling-policy-id",
              description: "The OCID of the Scheduling Policy",
              args: { name: "scheduling-policy-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--service-type",
              description: "The service type of the Scheduling Plan",
              args: { suggestions: ["EXACC", "EXACS", "FPPPCS"] },
              isRequired: true,
            },
            {
              name: "--is-using-recommended-scheduled-actions",
              description:
                "If true, recommended scheduled actions will be generated for the scheduling plan",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--plan-intent",
              description: "The current intent of the Scheduling Plan",
              args: {
                suggestions: [
                  "EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE",
                  "EXADATA_INFRASTRUCTURE_SECURITY_UPDATE",
                ],
              },
            },
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the scheduling plan",
          options: [
            optSchedulingPlanId,
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
          description: "Gets information about the specified Scheduling Plan",
          options: [optSchedulingPlanId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Scheduling Plan resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState2,
            {
              name: "--scheduling-policy-id",
              description:
                "A filter to return only resources that match the given scheduling policy id exactly",
              args: { name: "scheduling-policy-id" },
            },
            optDisplayName,
            {
              name: "--resource-id",
              description:
                "A filter to return only resources that match the given resource id exactly",
              args: { name: "resource-id" },
            },
            {
              name: "--id",
              description:
                "A filter to return only resources that match the given Schedule Plan id exactly",
              args: { name: "id" },
            },
            {
              name: "--plan-intent",
              description:
                "A filter to return only resources that match the given plan intent exactly",
              args: {
                suggestions: [
                  "EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE",
                  "EXADATA_INFRASTRUCTURE_SECURITY_UPDATE",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reorder-scheduled-actions",
          description:
            "Re-order the scheduled actions under this scheduling plan resource",
          options: [
            {
              name: "--scheduling-window-id",
              description: "The OCID of the Scheduling Window",
              args: { name: "scheduling-window-id" },
              isRequired: true,
            },
            {
              name: "--scheduled-action-id-orders",
              description: "List of action resources in a specific order",
              args: { name: "json" },
              isRequired: true,
            },
            optSchedulingPlanId,
            optIfMatch,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "recommended-scheduled-action-summary",
      description:
        "Details of the scheduled action that is used in getRecommendedScheduledActions",
      subcommands: [
        {
          name: "list-recommended-scheduled-actions",
          description:
            "Returns a recommended Scheduled Actions configuration for a given resource, plan intent and scheduling policy",
          options: [
            optSchedulingPolicyId,
            {
              name: "--scheduling-policy-target-resource-id",
              description:
                "The target resource OCID the scheduled actions will be for",
              args: { name: "scheduling-policy-target-resource-id" },
              isRequired: true,
            },
            {
              name: "--plan-intent",
              description:
                "The scheduling plan intent the scheduled actions will be for",
              args: {
                suggestions: [
                  "EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE",
                  "EXADATA_INFRASTRUCTURE_SECURITY_UPDATE",
                ],
              },
              isRequired: true,
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
      name: "database-software-image",
      description:
        "Database software images are created by specifying a patch set",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the Database Software Image and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optDatabaseSoftwareImageId3,
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
            "Create database software image in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment the database software image belongs in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the database software image",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--database-version",
              description:
                "The database version with which the database software image is to be built",
              args: { name: "database-version" },
            },
            {
              name: "--image-shape-family",
              description: "To what shape the image is meant for",
              args: {
                suggestions: [
                  "VM_BM_SHAPE",
                  "EXADATA_SHAPE",
                  "EXACC_SHAPE",
                  "EXADBXS_SHAPE",
                  "BDBCC_SHAPE",
                ],
              },
            },
            {
              name: "--image-type",
              description: "The type of software image",
              args: { suggestions: ["GRID_IMAGE", "DATABASE_IMAGE"] },
            },
            {
              name: "--patch-set",
              description: "The PSU or PBP or Release Updates",
              args: { name: "patch-set" },
            },
            optIsOlderVersionAcknowledged,
            {
              name: "--database-software-image-one-off-patches",
              description: "List of one-off patches for Database Homes",
              args: { name: "json" },
            },
            {
              name: "--ls-inventory",
              description:
                "The output from the OPatch lsInventory command, which is passed as a string",
              args: { name: "ls-inventory" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source-db-home-id",
              description: "The OCID of the Database Home",
              args: { name: "source-db-home-id" },
            },
            {
              name: "--source-gi-home-id",
              description: "The OCID of the Grid Infrastructure Home",
              args: { name: "source-gi-home-id" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "TERMINATING",
                  "TERMINATED",
                  "UPDATING",
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
          name: "delete",
          description: "Delete a database software image",
          options: [
            optDatabaseSoftwareImageId3,
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
            "Gets information about the specified database software image",
          options: [optDatabaseSoftwareImageId3, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the database software images in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "DISPLAYNAME", "PATCHSET"] },
            },
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "TERMINATING",
                  "TERMINATED",
                  "UPDATING",
                ],
              },
            },
            optDisplayName,
            {
              name: "--image-type",
              description:
                "A filter to return only resources that match the given image type exactly",
              args: { suggestions: ["GRID_IMAGE", "DATABASE_IMAGE"] },
            },
            {
              name: "--image-shape-family",
              description:
                "A filter to return only resources that match the given image shape family exactly",
              args: {
                suggestions: [
                  "VM_BM_SHAPE",
                  "EXADATA_SHAPE",
                  "EXACC_SHAPE",
                  "EXADBXS_SHAPE",
                  "BDBCC_SHAPE",
                ],
              },
            },
            {
              name: "--patch-set-greater-than-or-equal-to",
              description:
                "A filter to return only resources with patchSet greater than or equal to given value",
              args: { name: "patch-set-greater-than-or-equal-to" },
            },
            optDbSystemId2,
            {
              name: "--is-upgrade-supported",
              description:
                "If provided, filters the results to the set of database versions which are supported for Upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the properties of a Database Software Image, like Display Nmae",
          options: [
            optDatabaseSoftwareImageId3,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the database software image",
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
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "TERMINATING",
                  "TERMINATED",
                  "UPDATING",
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
      name: "data-guard-association",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Data Guard association",
          subcommands: [
            {
              name: "from-existing-db-system",
              description:
                "Creates a new Data Guard association using an existing DB System",
              options: [
                optDatabaseId,
                optDatabaseAdminPassword,
                optProtectionMode2,
                optTransportType,
                {
                  name: "--creation-type",
                  description:
                    "Specifies whether to create the peer database in an existing DB system or in a new DB system",
                  args: { name: "creation-type" },
                  isRequired: true,
                },
                optDatabaseSoftwareImageId,
                optIsOlderVersionAcknowledged,
                optIsActiveDataGuardEnabled,
                optPeerDbUniqueName2,
                optPeerSidPrefix,
                {
                  name: "--peer-db-system-id",
                  description:
                    "The OCID of the DB System to create the standby database on",
                  args: { name: "peer-db-system-id" },
                  isRequired: true,
                },
                {
                  name: "--peer-db-home-id",
                  description:
                    "The OCID of the DB Home to create the standby database on",
                  args: { name: "peer-db-home-id" },
                },
                optFromJson,
              ],
            },
            {
              name: "with-new-db-system",
              description:
                "Creates a new Data Guard association with a new DB System",
              options: [
                optDatabaseId,
                optDatabaseAdminPassword,
                optProtectionMode2,
                optTransportType,
                {
                  name: "--creation-type",
                  description:
                    "Specifies whether to create the peer database in an existing DB system or in a new DB system",
                  args: { name: "creation-type" },
                  isRequired: true,
                },
                optDatabaseSoftwareImageId,
                optIsOlderVersionAcknowledged,
                optIsActiveDataGuardEnabled,
                {
                  name: "--display-name",
                  description:
                    "The user-friendly name for the DB System to create the standby database on",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--hostname",
                  description: "The host name for the DB Node",
                  args: { name: "hostname" },
                  isRequired: true,
                },
                {
                  name: "--availability-domain",
                  description:
                    "The name of the Availability Domain that the standby database DB System will be located in",
                  args: { name: "availability-domain" },
                  isRequired: true,
                },
                optStoragePerformance,
                {
                  name: "--cpu-core-count",
                  description:
                    "The number of OCPU cores available for AMD-based virtual machine DB systems",
                  args: { name: "integer" },
                },
                optComputeModel2,
                optComputeCount2,
                {
                  name: "--shape",
                  description:
                    "The shape of the DB system to launch to set up the Data Guard association",
                  args: { name: "shape" },
                },
                {
                  name: "--subnet-id",
                  description:
                    "The OCID of the subnet the DB System is associated with",
                  args: { name: "subnet-id" },
                  isRequired: true,
                },
                {
                  name: "--node-count",
                  description:
                    "The number of nodes to launch for the DB system of the standby in the Data Guard association",
                  args: { name: "integer" },
                },
                {
                  name: "--time-zone",
                  description:
                    "The time zone of the dataguard standby DB system",
                  args: { name: "time-zone" },
                },
                optFaultDomains,
                {
                  name: "--private-ip",
                  description:
                    "The IPv4 address from the provided OCI subnet which needs to be assigned to the VNIC",
                  args: { name: "private-ip" },
                },
                {
                  name: "--license-model",
                  description:
                    "The Oracle license model that applies to all the databases on the dataguard standby DB system",
                  args: {
                    suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
                  },
                },
                {
                  name: "--db-system-freeform-tags",
                  description: "Free-form tags for this resource",
                  args: { name: "json" },
                },
                {
                  name: "--db-system-defined-tags",
                  description: "Defined tags for this resource",
                  args: { name: "json" },
                },
                {
                  name: "--database-freeform-tags",
                  description: "Free-form tags for this resource",
                  args: { name: "json" },
                },
                {
                  name: "--database-defined-tags",
                  description: "Defined tags for this resource",
                  args: { name: "json" },
                },
                optIsDiagnosticsEventsEnabled,
                optIsHealthMonitoringEnabled,
                optIsIncidentLogsEnabled,
                optDomain,
                optFromJson,
              ],
            },
            {
              name: "from-existing-vm-cluster",
              description: "Creates a new Data Guard association",
              options: [
                optDatabaseId,
                optDatabaseAdminPassword,
                optProtectionMode2,
                optTransportType,
                optDatabaseSoftwareImageId,
                optIsOlderVersionAcknowledged,
                optIsActiveDataGuardEnabled,
                optPeerDbUniqueName2,
                optPeerSidPrefix,
                {
                  name: "--peer-vm-cluster-id",
                  description:
                    "The OCID of the VM Cluster in which to create the standby database",
                  args: { name: "peer-vm-cluster-id" },
                  isRequired: true,
                },
                {
                  name: "--peer-db-home-id",
                  description:
                    "The OCID of the DB Home to create the standby database on",
                  args: { name: "peer-db-home-id" },
                },
                optHsmPassword,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "create-data-guard-association-external-hsm-encryption-details",
          description: "Creates a new Data Guard association",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword,
            optProtectionMode2,
            optTransportType,
            {
              name: "--source-encryption-key-location-details-hsm-password",
              description:
                "Provide the HSM password as you would in RDBMS for External HSM",
              args: {
                name: "source-encryption-key-location-details-hsm-password",
              },
              isRequired: true,
            },
            optDatabaseSoftwareImageId,
            optIsOlderVersionAcknowledged,
            optIsActiveDataGuardEnabled,
            optPeerDbUniqueName2,
            optPeerSidPrefix,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-data-guard-association-google-cloud-provider-encryption-key-details",
          description: "Creates a new Data Guard association",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword,
            optProtectionMode2,
            optTransportType,
            {
              name: "--source-encryption-key-location-details-google-cloud-provider-encryption-key-id",
              description:
                "Provide the key OCID of a registered Google Cloud Provider key",
              args: {
                name: "source-encryption-key-location-details-google-cloud-provider-encryption-key-id",
              },
              isRequired: true,
            },
            optDatabaseSoftwareImageId,
            optIsOlderVersionAcknowledged,
            optIsActiveDataGuardEnabled,
            optPeerDbUniqueName2,
            optPeerSidPrefix,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-data-guard-association-azure-encryption-key-details",
          description: "Creates a new Data Guard association",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword,
            optProtectionMode2,
            optTransportType,
            {
              name: "--source-encryption-key-location-details-azure-encryption-key-id",
              description: "Provide the key OCID of a registered Azure key",
              args: {
                name: "source-encryption-key-location-details-azure-encryption-key-id",
              },
              isRequired: true,
            },
            optDatabaseSoftwareImageId,
            optIsOlderVersionAcknowledged,
            optIsActiveDataGuardEnabled,
            optPeerDbUniqueName2,
            optPeerSidPrefix,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-data-guard-association-aws-encryption-key-details",
          description: "Creates a new Data Guard association",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword,
            optProtectionMode2,
            optTransportType,
            {
              name: "--source-encryption-key-location-details-aws-encryption-key-id",
              description: "Provide the key OCID of a registered AWS key",
              args: {
                name: "source-encryption-key-location-details-aws-encryption-key-id",
              },
              isRequired: true,
            },
            optDatabaseSoftwareImageId,
            optIsOlderVersionAcknowledged,
            optIsActiveDataGuardEnabled,
            optPeerDbUniqueName2,
            optPeerSidPrefix,
            {
              name: "--source-encryption-key-location-details-aws-encryption-key-pool-id",
              description: "Provide the key pool OCID of a registered AWS key",
              args: {
                name: "source-encryption-key-location-details-aws-encryption-key-pool-id",
              },
            },
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "failover",
          description:
            "Performs a failover to transition the standby database identified by the databaseId parameter into",
          options: [
            optDatabaseId,
            optDataGuardAssociationId,
            optDatabaseAdminPassword3,
            optIfMatch,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the specified Data Guard association's configuration information",
          options: [optDatabaseId, optDataGuardAssociationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all Data Guard associations for the specified database",
          options: [
            optDatabaseId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reinstate",
          description:
            "Reinstates the database identified by the databaseId parameter into the standby role in a Data Guard",
          options: [
            optDatabaseId,
            optDataGuardAssociationId,
            optDatabaseAdminPassword3,
            optIfMatch,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switchover",
          description:
            "Performs a switchover to transition the primary database of a Data Guard association into a standby role",
          options: [
            optDatabaseId,
            optDataGuardAssociationId,
            optDatabaseAdminPassword3,
            optIfMatch,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Data Guard association the specified database",
          options: [
            optDatabaseId,
            optDataGuardAssociationId,
            {
              name: "--database-admin-password",
              description:
                "A strong password for the 'SYS', 'SYSTEM', and 'PDB Admin' users to apply during standby creation",
              args: { name: "database-admin-password" },
            },
            {
              name: "--protection-mode",
              description:
                "The protection mode for the Data Guard association's primary and standby database",
              args: {
                suggestions: [
                  "MAXIMUM_AVAILABILITY",
                  "MAXIMUM_PERFORMANCE",
                  "MAXIMUM_PROTECTION",
                ],
              },
            },
            optTransportType2,
            optIsActiveDataGuardEnabled,
            optIfMatch,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "migrate-to-multiple-standby-model",
          description:
            "Migrates the existing Data Guard association to new Data Guard model to support multiple standby databases",
          options: [
            optDatabaseId,
            optDataGuardAssociationId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "db-home",
      subcommands: [
        {
          name: "create-db-home-create-db-home-with-vm-cluster-id-from-database-details",
          description:
            "Creates a new Database Home in the specified database system based on the request parameters you provide",
          options: [
            {
              name: "--vm-cluster-id",
              description: "The OCID of the VM cluster",
              args: { name: "vm-cluster-id" },
              isRequired: true,
            },
            optDatabase,
            {
              name: "--display-name",
              description: "The user-provided name of the Database Home",
              args: { name: "display-name" },
            },
            optKmsKeyId,
            optKmsKeyVersionId,
            optDatabaseSoftwareImageId,
            optFreeformTags,
            optDefinedTags,
            optIsDesupportedVersion,
            optIsOlderVersionAcknowledged,
            optIsUnifiedAuditingEnabled,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Database Home",
          options: [
            optDbHomeId2,
            optIfMatch,
            {
              name: "--perform-final-backup",
              description:
                "Whether to perform a final backup of the database or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified Database Home",
          options: [optDbHomeId2, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Database Homes in the specified DB system and compartment",
          options: [
            optCompartmentId,
            optDbSystemId2,
            optVmClusterId2,
            optBackupId2,
            {
              name: "--db-version",
              description:
                "A filter to return only DB Homes that match the specified dbVersion",
              args: { name: "db-version" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Patches the specified Database Home",
          options: [
            optDbHomeId2,
            { name: "--db-version", args: { name: "json" } },
            {
              name: "--one-off-patches",
              description: "List of one-off patches for Database Homes",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new database in the given DB System or VM Cluster",
          options: [
            {
              name: "--display-name",
              description: "The user-provided name of the Database Home",
              args: { name: "display-name" },
            },
            optKmsKeyId,
            optKmsKeyVersionId,
            optDatabaseSoftwareImageId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source",
              description:
                "The source of database: NONE for creating a new database",
              args: {
                suggestions: [
                  "NONE",
                  "DB_BACKUP",
                  "DATABASE",
                  "VM_CLUSTER_BACKUP",
                  "VM_CLUSTER_NEW",
                  "VM_CLUSTER_DATABASE",
                ],
              },
            },
            optIsDesupportedVersion,
            optIsOlderVersionAcknowledged,
            optIsUnifiedAuditingEnabled,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--vm-cluster-id",
              description: "The Vm Cluster Id to create this Db Home under",
              args: { name: "vm-cluster-id" },
            },
            {
              name: "--db-system-id",
              description: "The Db System Id to restore this Db Home under",
              args: { name: "db-system-id" },
            },
            {
              name: "--db-version",
              description: "A valid Oracle database version",
              args: { name: "db-version" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-database-in-backup",
      description:
        "Details of Autonomous AI Database in Autonomous Container Database",
      subcommands: [
        {
          name: "list-autonomous-databases-in-autonomous-container-database-backup",
          description:
            "Gets a list of Autonomous Databases associated with backups at the given timestamp for the specified",
          options: [
            optAutonomousContainerDatabaseId,
            {
              name: "--time-stamp-requested",
              description:
                "The timestamp at which the list of autonomous databases present to be returned (ISO-8601 format, e.g",
              args: { name: "datetime" },
              isRequired: true,
            },
            optCompartmentId3,
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
      name: "execution-window",
      description: "Details of an execution window",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancels the in progress maintenance activity under this execution window",
          options: [
            optExecutionWindowId,
            {
              name: "--time-scheduled-of-new-window",
              description:
                "New scheduled date and time of the execution window",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--window-duration-in-mins-of-new-window",
              description:
                "Duration window allows user to set a duration they plan to allocate for Scheduling window",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--is-enforced-duration-of-new-window",
              description:
                "Indicates if duration the user plans to allocate for scheduling window is strictly enforced",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState14,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an execution window resource",
          options: [
            optCompartmentId2,
            {
              name: "--execution-resource-id",
              description:
                "The OCID of the execution resource the execution window belongs to",
              args: { name: "execution-resource-id" },
              isRequired: true,
            },
            {
              name: "--time-scheduled",
              description:
                "The scheduled start date and time of the execution window",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--window-duration-in-mins",
              description:
                "Duration window allows user to set a duration they plan to allocate for Scheduling window",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--is-enforced-duration",
              description:
                "Indicates if duration the user plans to allocate for scheduling window is strictly enforced",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState14,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the execution window",
          options: [
            optExecutionWindowId,
            optIfMatch,
            optForce,
            optWaitForState14,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified execution window",
          options: [optExecutionWindowId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the execution window resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            {
              name: "--execution-resource-id",
              description:
                "A filter to return only resources that match the given resource id exactly",
              args: { name: "execution-resource-id" },
            },
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATED",
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "FAILED",
                  "CANCELED",
                  "UPDATING",
                  "DELETED",
                  "SUCCEEDED",
                  "PARTIAL_SUCCESS",
                  "CREATING",
                  "DELETING",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reorder-execution-actions",
          description:
            "Reorders the execution actions under this execution window resource",
          options: [
            optExecutionWindowId,
            {
              name: "--execution-action-order-list",
              description: "List of action resources in a specific order",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState14,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the execution window resource",
          options: [
            optExecutionWindowId,
            {
              name: "--time-scheduled",
              description:
                "The scheduled start date and time of the execution window",
              args: { name: "datetime" },
            },
            {
              name: "--window-duration-in-mins",
              description:
                "Duration window allows user to set a duration they plan to allocate for Scheduling window",
              args: { name: "integer" },
            },
            {
              name: "--is-enforced-duration",
              description:
                "Indicates if duration the user plans to allocate for scheduling window is strictly enforced",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState14,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "basecc-vm-cluster-update-history-entry",
      description:
        "The record of a maintenance update action on a specified BaseDB-C@C VM cluster",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the maintenance update history details for the specified update history entry",
          options: [optBaseccVmClusterId, optUpdateHistoryEntryId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets the history of the maintenance update actions performed on the specified BaseDB-C@C VM cluster",
          options: [
            optBaseccVmClusterId,
            optUpdateType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: { suggestions: ["IN_PROGRESS", "SUCCEEDED", "FAILED"] },
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
      name: "gi-minor-version-summary",
      description: "The Oracle Grid Infrastructure (GI) minor version",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of supported Oracle Grid Infrastructure minor versions for the given major version and shape",
          options: [
            {
              name: "--availability-domain",
              description: "The target availability domain",
              args: { name: "availability-domain" },
            },
            optCompartmentId3,
            optExadataInfrastructureId2,
            {
              name: "--shape-family",
              description:
                "If provided, filters the results to the set of database versions which are supported for the given shape",
              args: {
                suggestions: [
                  "SINGLENODE",
                  "YODA",
                  "VIRTUALMACHINE",
                  "EXADATA",
                  "EXACC",
                  "EXADB_XS",
                ],
              },
            },
            {
              name: "--is-gi-version-for-provisioning",
              description:
                "If true, returns the Grid Infrastructure versions that can be used for provisioning a cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optShape2,
            {
              name: "--sort-by",
              description: "Sort by VERSION",
              args: { suggestions: ["VERSION"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            {
              name: "--gi-version",
              description:
                "The Oracle Grid Infrastructure major version. required",
              args: { name: "gi-version" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-exadata-infrastructure",
      subcommands: [
        {
          name: "change-compartment",
          description: "Deprecated",
          deprecated: true,
          options: [
            optCompartmentId4,
            optAutonomousExadataInfrastructureId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Deprecated",
          deprecated: true,
          options: [optAutonomousExadataInfrastructureId2, optFromJson],
        },
        {
          name: "launch",
          description:
            "Deprecated To create a new Autonomous AI Database system on dedicated Exadata Infrastructure",
          deprecated: true,
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment the Autonomous Exadata Infrastructure belongs in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The availability domain where the Autonomous Exadata Infrastructure is located",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet the Autonomous Exadata Infrastructure is associated with",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--shape",
              description: "The shape of the Autonomous Exadata Infrastructure",
              args: { name: "shape" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Autonomous Exadata Infrastructure",
              args: { name: "display-name" },
            },
            optNsgIds,
            {
              name: "--domain",
              description:
                "A domain name used for the Autonomous Exadata Infrastructure",
              args: { name: "domain" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to all the databases in the Autonomous Exadata Infrastructure",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            optMaintenanceWindowDetails,
            optFreeformTags,
            optDefinedTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Deprecated",
          deprecated: true,
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAvailabilityDomain2,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "rotate-ords-certs",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousExadataInfrastructureId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rotate-ssl-certs",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousExadataInfrastructureId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "terminate",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousExadataInfrastructureId2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousExadataInfrastructureId2,
            {
              name: "--display-name",
              description:
                "The display name is a user-friendly name for the Autonomous Exadata Infrastructure",
              args: { name: "display-name" },
            },
            optMaintenanceWindowDetails,
            optNsgIds,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "shape",
          description: "The shape of the Autonomous Exadata Infrastructure",
          subcommands: [
            {
              name: "list",
              description: "Deprecated",
              deprecated: true,
              options: [
                {
                  name: "--availability-domain",
                  description: "The name of the Availability Domain",
                  args: { name: "availability-domain" },
                  isRequired: true,
                },
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
      ],
    },
    {
      name: "basecc-vm-cluster",
      description: "Details of the BaseDB-C@C VM cluster resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a BaseDB-C@C VM cluster and its dependent resources to another compartment",
          options: [
            optCompartmentId2,
            optBaseccVmClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a BaseDB-C@C VM cluster",
          options: [
            optCompartmentId2,
            {
              name: "--cpu-core-count",
              description:
                "The number of ECPUs to enable per VM for the BaseDB C@C VM cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--base-infrastructure-id",
              description:
                "The OCID of Oracle Data Cloud@Customer Infrastructure",
              args: { name: "base-infrastructure-id" },
              isRequired: true,
            },
            {
              name: "--base-vm-cluster-network-id",
              description: "The OCID of BaseDB-C@C VM Cluster Network",
              args: { name: "base-vm-cluster-network-id" },
              isRequired: true,
            },
            {
              name: "--gi-version",
              description:
                "A valid Oracle Grid Infrastructure (GI) software version",
              args: { name: "gi-version" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--ssh-public-keys",
              description:
                "The public key portion of one or more key pairs used for SSH access to the VMs of Base Database Service",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--database-edition",
              description:
                "The Oracle Database Edition that applies to all the databases on the DB system",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
                  "ENTERPRISE_EDITION_EXTREME_PERFORMANCE",
                  "ENTERPRISE_EDITION_DEVELOPER",
                ],
              },
            },
            {
              name: "--node-count",
              description:
                "The number of nodes in the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--db-server-id",
              description:
                "The OCID of the compute node of the Oracle Data Cloud@Customer Infrastructure",
              args: { name: "db-server-id" },
            },
            optDataCollectionOptions,
            {
              name: "--description",
              description:
                "The description for Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "description" },
            },
            {
              name: "--time-zone",
              description:
                "The time zone to use for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "time-zone" },
            },
            {
              name: "--additional-vm-storage-size-in-gbs",
              description:
                "Total /u01 partition size (GB) for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--data-storage-size-in-gbs",
              description:
                "The DATA Disk Group size in GB for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--reco-storage-size-in-gbs",
              description:
                "The RECO Disk Group size in GB for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--memory-size-in-gbs",
              description:
                "The total memory to be allocated, in GBs, for the Base Database Service on Cloud@Customer",
              args: { name: "integer" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--vm-cluster-type",
              description:
                "The cluster type for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { suggestions: ["REGULAR", "DEVELOPER"] },
            },
            optCloudAutomationUpdateDetails,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified BaseDB-C@C VM cluster",
          options: [
            optBaseccVmClusterId,
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
          description: "Gets information about the BaseDB-C@C VM cluster",
          options: [optBaseccVmClusterId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the BaseDB-C@C VM clusters in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--base-infrastructure-id",
              description:
                "If provided, filters the results for the given Oracle Data Cloud@Customer Infrastructure",
              args: { name: "base-infrastructure-id" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAvailabilityDomain2,
            optDisplayName,
            {
              name: "--vm-cluster-type",
              description:
                "A filter to return only BaseDB-C@C VM clusters that match the given VM Cluster type exactly",
              args: { suggestions: ["REGULAR", "DEVELOPER"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified BaseDB-C@C VM cluster",
          options: [
            optBaseccVmClusterId,
            {
              name: "--cpu-core-count",
              description:
                "The number of ECPUs to enable per VM for the BaseDB C@C VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--memory-size-in-gbs",
              description:
                "The total memory to be allocated, in GBs, for the Base Database Service on Cloud@Customer",
              args: { name: "integer" },
            },
            {
              name: "--data-storage-size-in-gbs",
              description:
                "The DATA Disk Group size in GB for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--reco-storage-size-in-gbs",
              description:
                "The RECO Disk Group size in GB for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--ssh-public-keys",
              description:
                "The public key portion of one or more key pairs used for SSH access to the VMs of Base Database Service",
              args: { name: "json" },
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "display-name" },
            },
            {
              name: "--additional-vm-storage-size-in-gbs",
              description:
                "Total /u01 partition size (GB) for the Base Database Service on Cloud@Customer (BaseDB-C@C) VM cluster",
              args: { name: "integer" },
            },
            { name: "--update-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optDataCollectionOptions,
            optCloudAutomationUpdateDetails,
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
      name: "gi-home",
      description: "Details of the Grid Infrastructure Home",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new Grid Infrastructure Home in the specified database system based on the request parameters you",
          options: [
            {
              name: "--gi-image-id",
              description: "The grid infrastructure home image OCID",
              args: { name: "gi-image-id" },
              isRequired: true,
            },
            {
              name: "--db-system-id",
              description: "The OCID of the DB system",
              args: { name: "db-system-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-provided name for the Grid Infrastructure Home",
              args: { name: "display-name" },
            },
            optIsOlderVersionAcknowledged,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "INACTIVE",
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
          name: "delete",
          description: "Deletes a Grid Infrastructure Home",
          options: [
            optGiHomeId,
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
            "Gets information about the specified Grid Infrastructure Home",
          options: [optGiHomeId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Grid Infrastructure Homes",
          options: [
            optCompartmentId,
            optDbSystemId2,
            {
              name: "--gi-version",
              description: "The Grid Infrastructure version",
              args: { name: "gi-version" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "INACTIVE",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the tags and display name of a specified Grid Infrastructure Home",
          options: [
            optGiHomeId,
            {
              name: "--display-name",
              description:
                "The user-provided name for the Grid Infrastructure Home",
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
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "INACTIVE",
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
      name: "backup-destination",
      description: "Backup destination details",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the backup destination and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optBackupDestinationId,
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
            "Deletes a backup destination in an Exadata Cloud@Customer system",
          options: [
            optBackupDestinationId,
            optIfMatch,
            optForce,
            optWaitForState16,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified backup destination in an Exadata Cloud@Customer system",
          options: [optBackupDestinationId, optFromJson],
        },
        {
          name: "update",
          description:
            "If no database is associated with the backup destination: - For a RECOVERY_APPLIANCE backup destination",
          options: [
            optBackupDestinationId,
            {
              name: "--vpc-users",
              description:
                "For a RECOVERY_APPLIANCE backup destination, the Virtual Private Catalog",
              args: { name: "json" },
            },
            {
              name: "--connection-string",
              description:
                "For a RECOVERY_APPLIANCE backup destination, the connection string for connecting to the Recovery Appliance",
              args: { name: "connection-string" },
            },
            {
              name: "--local-mount-point-path",
              description:
                "The local directory path on each VM cluster node where the NFS server location is mounted",
              args: { name: "local-mount-point-path" },
            },
            {
              name: "--nfs-mount-type",
              description: "NFS Mount type for backup destination",
              args: { suggestions: ["SELF_MOUNT", "AUTOMATED_MOUNT"] },
            },
            {
              name: "--nfs-server",
              description: "IP addresses for NFS Auto mount",
              args: { name: "json" },
            },
            {
              name: "--nfs-server-export",
              description:
                "Specifies the directory on which to mount the file system",
              args: { name: "nfs-server-export" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState16,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-nfs-details",
          description:
            "Creates a backup destination in an Exadata Cloud@Customer system",
          options: [
            {
              name: "--display-name",
              description: "The user-provided name of the backup destination",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--local-mount-point-path",
              description: "Deprecated",
              args: { name: "local-mount-point-path" },
              deprecated: true,
            },
            { name: "--mount-type-details", args: { name: "json" } },
            optWaitForState16,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-recovery-appliance-details",
          description:
            "Creates a backup destination in an Exadata Cloud@Customer system",
          options: [
            {
              name: "--display-name",
              description: "The user-provided name of the backup destination",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--connection-string",
              description:
                "The connection string for connecting to the Recovery Appliance",
              args: { name: "connection-string" },
              isRequired: true,
            },
            {
              name: "--vpc-users",
              description:
                "The Virtual Private Catalog (VPC) users that are used to access the Recovery Appliance",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState16,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "maintenance-run",
      description: "Details of a maintenance run",
      subcommands: [
        {
          name: "create",
          description: "Creates a maintenance run with one of the following: 1",
          options: [
            {
              name: "--target-resource-id",
              description:
                "The ID of the target resource for which the maintenance run should be created",
              args: { name: "target-resource-id" },
              isRequired: true,
            },
            {
              name: "--time-scheduled",
              description: "The date and time that update should be scheduled",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--patch-type",
              description:
                'Patch type, either "QUARTERLY", "TIMEZONE" or "CUSTOM_DATABASE_SOFTWARE_IMAGE"',
              args: {
                suggestions: [
                  "QUARTERLY",
                  "TIMEZONE",
                  "CUSTOM_DATABASE_SOFTWARE_IMAGE",
                ],
              },
              isRequired: true,
            },
            optIsDstFileUpdateEnabled,
            {
              name: "--patching-mode",
              description:
                'Cloud Exadata infrastructure node patching method, either "ROLLING" or "NONROLLING"',
              args: { suggestions: ["ROLLING", "NONROLLING"] },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the Maintenance Run",
              args: { name: "compartment-id" },
            },
            optDatabaseSoftwareImageId2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "SKIPPED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "CANCELED",
                  "PARTIAL_SUCCESS",
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
          name: "get",
          description: "Gets information about the specified maintenance run",
          options: [
            {
              name: "--maintenance-run-id",
              description: "The maintenance run OCID",
              args: { name: "maintenance-run-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of the maintenance runs in the specified compartment",
          options: [
            optCompartmentId,
            optTargetResourceId,
            optTargetResourceType,
            {
              name: "--maintenance-type",
              description: "The maintenance type",
              args: { suggestions: ["PLANNED", "UNPLANNED"] },
            },
            optLimit,
            optPage,
            {
              name: "--is-local-adg",
              description:
                "A filter to return the maintenance history results for the local standby Autonomous AI Database Serverless",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["TIME_SCHEDULED", "TIME_ENDED", "DISPLAYNAME"],
              },
            },
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "SKIPPED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "CANCELED",
                  "PARTIAL_SUCCESS",
                ],
              },
            },
            optAvailabilityDomain2,
            {
              name: "--maintenance-subtype",
              description: "The sub-type of the maintenance run",
              args: {
                suggestions: [
                  "QUARTERLY",
                  "HARDWARE",
                  "CRITICAL",
                  "INFRASTRUCTURE",
                  "DATABASE",
                  "ONEOFF",
                  "SECURITY_MONTHLY",
                  "TIMEZONE",
                  "CUSTOM_DATABASE_SOFTWARE_IMAGE",
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
            "Updates the properties of a maintenance run, such as the state of a maintenance run",
          options: [
            {
              name: "--maintenance-run-id",
              description: "The maintenance run OCID",
              args: { name: "maintenance-run-id" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "If FALSE, skips the maintenance run",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--time-scheduled",
              description:
                "The scheduled date and time of the maintenance run to update",
              args: { name: "datetime" },
            },
            {
              name: "--is-patch-now-enabled",
              description: "If set to TRUE, starts patching immediately",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--patch-id",
              description:
                "The OCID of the patch to be applied in the maintenance run",
              args: { name: "patch-id" },
            },
            {
              name: "--patching-mode",
              description:
                'Cloud Exadata infrastructure node patching method, either "ROLLING" or "NONROLLING"',
              args: { suggestions: ["ROLLING", "NONROLLING"] },
            },
            {
              name: "--is-custom-action-timeout-enabled",
              description:
                "If true, enables the configuration of a custom action timeout",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--custom-action-timeout-in-mins",
              description:
                "Determines the amount of time the system will wait before the start of each database server patching",
              args: { name: "integer" },
            },
            {
              name: "--current-custom-action-timeout-in-mins",
              description:
                "The current custom action timeout between the current database servers during waiting state in addition",
              args: { name: "integer" },
            },
            {
              name: "--is-resume-patching",
              description:
                "If true, then the patching is resumed and the next component will be patched immediately",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--target-db-server-version",
              description:
                "The target database server system software version for the patching operation",
              args: { name: "target-db-server-version" },
            },
            {
              name: "--target-storage-server-version",
              description:
                "The target storage cell system software version for the patching operation",
              args: { name: "target-storage-server-version" },
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "SKIPPED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "CANCELED",
                  "PARTIAL_SUCCESS",
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
      name: "scheduling-window",
      description: "Details of a Scheduling Window",
      subcommands: [
        {
          name: "create",
          description: "Creates a Scheduling Window resource",
          options: [
            optSchedulingPolicyId,
            {
              name: "--window-preference",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId8,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "UPDATING",
                  "FAILED",
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
        {
          name: "delete",
          description: "Deletes the scheduling window",
          options: [
            optSchedulingPolicyId,
            optSchedulingWindowId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified Scheduling Window",
          options: [optSchedulingPolicyId, optSchedulingWindowId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Scheduling Window resources in the specified compartment",
          options: [
            optSchedulingPolicyId,
            optCompartmentId3,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "UPDATING",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Scheduling Window resource",
          options: [
            optSchedulingPolicyId,
            optSchedulingWindowId,
            { name: "--window-preference", args: { name: "json" } },
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
                  "AVAILABLE",
                  "UPDATING",
                  "FAILED",
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
    {
      name: "autonomous-container-database-backup",
      description: "An Autonomous AI Database backup",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about the specified Autonomous Container Database backup",
          options: [
            {
              name: "--autonomous-container-database-backup-id",
              description: "The Autonomous Container Database backup OCID",
              args: { name: "autonomous-container-database-backup-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of Autonomous Container Database backups by using either the 'autonomousDatabaseId'",
          options: [
            optCompartmentId3,
            optAutonomousContainerDatabaseId2,
            {
              name: "--is-remote",
              description: "Call for all remote backups",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optInfrastructureType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
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
            optSortBy,
            optLimit,
            optPage,
            optSortOrder,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-database",
      description: "An Oracle Autonomous AI Database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the Autonomous AI Database and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optAutonomousDatabaseId,
            optIfMatch,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-autonomous-database-subscription",
          description:
            "Associate an Autonomous AI Database with a different subscription",
          options: [
            optAutonomousDatabaseId,
            optSubscriptionId,
            optIsDefault,
            optIfMatch,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-disaster-recovery-configuration",
          description:
            "This operation updates the cross-region disaster recovery",
          options: [
            optAutonomousDatabaseId,
            {
              name: "--disaster-recovery-type",
              description:
                "Indicates the disaster recovery (DR) type of the Autonomous AI Database Serverless instance",
              args: { suggestions: ["ADG", "BACKUP_BASED"] },
            },
            {
              name: "--is-snapshot-standby",
              description:
                "Indicates if user wants to convert to a snapshot standby",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsReplicateAutomaticBackups,
            optIfMatch,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "configure-saas-admin-user",
          description:
            "This operation updates SaaS administrative user configuration of the Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            {
              name: "--password",
              description: "A strong password for SaaS administrative user",
              args: { name: "password" },
            },
            {
              name: "--secret-id",
              description: "The OCID of the Oracle Cloud Infrastructure secret",
              args: { name: "secret-id" },
            },
            optSecretVersionNumber,
            {
              name: "--duration",
              description:
                "How long, in hours, the SaaS administrative user will stay enabled",
              args: { name: "integer" },
            },
            {
              name: "--is-enabled",
              description:
                "Indicates if the SaaS administrative user is enabled for the Autonomous AI Database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--access-type",
              description: "The access type for the SaaS administrative user",
              args: { suggestions: ["READ_ONLY", "READ_WRITE", "ADMIN"] },
            },
            {
              name: "--time-saas-admin-user-enabled",
              description:
                "The date and time the SaaS administrative user was enabled at, for the Autonomous AI Database",
              args: { name: "datetime" },
            },
            optIfMatch,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-database-undelete-autonomous-database-details",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--source-id",
              description:
                "The OCID of the Autonomous AI Database that you want to undelete",
              args: { name: "source-id" },
              isRequired: true,
            },
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optDbName3,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optIsAccessControlEnabled,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousMaintenanceScheduleType,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-database-create-cross-region-disaster-recovery-details",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--source-id",
              description:
                "The OCID of the source Autonomous AI Database that will be used to create a new peer database for the DR",
              args: { name: "source-id" },
              isRequired: true,
            },
            {
              name: "--remote-disaster-recovery-type",
              description:
                "Indicates the cross-region disaster recovery (DR) type of the standby Autonomous AI Database Serverless",
              args: { name: "remote-disaster-recovery-type" },
              isRequired: true,
            },
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optDbName3,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optIsAccessControlEnabled,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousMaintenanceScheduleType,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            optIsReplicateAutomaticBackups,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-database-gcp-key-details",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--encryption-key-key-name",
              description: "GCP key name",
              args: { name: "encryption-key-key-name" },
              isRequired: true,
            },
            {
              name: "--encryption-key-project",
              description: "GCP project name",
              args: { name: "encryption-key-project" },
              isRequired: true,
            },
            {
              name: "--encryption-key-location",
              description: "GCP key ring location",
              args: { name: "encryption-key-location" },
              isRequired: true,
            },
            {
              name: "--encryption-key-key-ring",
              description: "GCP key ring",
              args: { name: "encryption-key-key-ring" },
              isRequired: true,
            },
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optDbName3,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optIsAccessControlEnabled,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousMaintenanceScheduleType,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            optOpcDryRun,
            {
              name: "--encryption-key-kms-rest-endpoint",
              description: "GCP kms REST API endpoint",
              args: { name: "encryption-key-kms-rest-endpoint" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            {
              name: "--must-delete-associated-long-term-backups",
              description:
                "If set to true, terminating the Autonomous AI Database also deletes its associated long-term backups if",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optOpcDryRun,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-autonomous-database-management",
          description:
            "Disables Database Management for the Autonomous AI Database resource",
          options: [
            optAutonomousDatabaseId,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-autonomous-database-management",
          description: "Enables Database Management for Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "fail-over",
          description:
            "Initiates a failover of the specified Autonomous AI Database to the associated peer database",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            optPeerDbId,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the specified Autonomous AI Database",
          options: [optAutonomousDatabaseId, optFromJson],
        },
        {
          name: "import-transportable-tablespace",
          description:
            "Imports transportable tablespace for the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            {
              name: "--tts-bundle-url",
              description:
                "URL for OCI Storage location for a Transportable Tablespace (TTS) bundle",
              args: { name: "tts-bundle-url" },
              isRequired: true,
            },
            optIfMatch,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-autonomous-database-peers",
          description:
            "Lists the Autonomous AI Database peers for the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of Autonomous AI Databases based on the query parameters specified",
          options: [
            optCompartmentId,
            optAutonomousContainerDatabaseId2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optInfrastructureType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "STOPPING",
                  "STOPPED",
                  "STARTING",
                  "TERMINATING",
                  "TERMINATED",
                  "UNAVAILABLE",
                  "RESTORE_IN_PROGRESS",
                  "RESTORE_FAILED",
                  "BACKUP_IN_PROGRESS",
                  "SCALE_IN_PROGRESS",
                  "AVAILABLE_NEEDS_ATTENTION",
                  "UPDATING",
                  "MAINTENANCE_IN_PROGRESS",
                  "RESTARTING",
                  "RECREATING",
                  "ROLE_CHANGE_IN_PROGRESS",
                  "UPGRADING",
                  "INACCESSIBLE",
                  "STANDBY",
                  "TRANSPORTING",
                ],
              },
            },
            {
              name: "--lifecycle-state-not-equal-to",
              description:
                "A filter to return only resources that not match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "STOPPING",
                  "STOPPED",
                  "STARTING",
                  "TERMINATING",
                  "TERMINATED",
                  "UNAVAILABLE",
                  "RESTORE_IN_PROGRESS",
                  "RESTORE_FAILED",
                  "BACKUP_IN_PROGRESS",
                  "SCALE_IN_PROGRESS",
                  "AVAILABLE_NEEDS_ATTENTION",
                  "UPDATING",
                  "MAINTENANCE_IN_PROGRESS",
                  "RESTARTING",
                  "RECREATING",
                  "ROLE_CHANGE_IN_PROGRESS",
                  "UPGRADING",
                  "INACCESSIBLE",
                  "STANDBY",
                  "TRANSPORTING",
                ],
              },
            },
            {
              name: "--db-workload",
              description:
                "A filter to return only Autonomous AI Database resources that match the specified workload type",
              args: { suggestions: ["OLTP", "DW", "AJD", "APEX", "LH"] },
            },
            {
              name: "--db-version",
              description:
                "A filter to return only Autonomous AI Database resources that match the specified dbVersion",
              args: { name: "db-version" },
            },
            {
              name: "--is-free-tier",
              description:
                "Filter on the value of the resource's 'isFreeTier' property",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDisplayName,
            {
              name: "--is-refreshable-clone",
              description:
                "Filter on the value of the resource's 'isRefreshableClone' property",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-data-guard-enabled",
              description:
                "A filter to return only resources that have Data Guard enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-resource-pool-leader",
              description: "Filter if the resource is the resource pool leader",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--resource-pool-leader-id",
              description:
                "The database OCID of the resourcepool Leader Autonomous AI Database",
              args: { name: "resource-pool-leader-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-available-maintenance-windows",
          description:
            "Retrieves the list of available maintenance window options for the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-resource-pool-members",
          description:
            "Lists the OCIDs of the Autonomous AI Database resource pool members for the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "resource-pool-shapes",
          description: "Lists available resource pools shapes",
          options: [optIfMatch, optLimit, optPage, optFromJson],
        },
        {
          name: "restart",
          description: "Restarts the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            {
              name: "--is-online-restart",
              description: "If provided, an online restart will be triggered",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-force-restart",
              description:
                "If set to true, restarts the Autonomous Database with force option",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "restore",
          description:
            "Restores an Autonomous AI Database based on the provided request parameters",
          options: [
            optAutonomousDatabaseId,
            {
              name: "--timestamp",
              description: "The time to restore the database to",
              args: { name: "datetime" },
            },
            {
              name: "--database-scn",
              description:
                "Restores using the backup with the System Change Number (SCN) specified",
              args: { name: "database-scn" },
            },
            {
              name: "--latest",
              description:
                "Restores to the last known good state with the least possible data loss",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "saas-admin-user-status",
          description:
            "This operation gets SaaS administrative user status of the Autonomous AI Database",
          options: [optAutonomousDatabaseId, optFromJson],
        },
        {
          name: "shrink",
          description:
            "This operation shrinks the current allocated storage down to the current actual used data storage",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            {
              name: "--is-force-stop",
              description:
                "If set to true, stops the Autonomous Database with force option",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switchover",
          description:
            "Initiates a switchover of the specified Autonomous AI Database to the associated peer database",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            optPeerDbId,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optInMemoryPercentage,
            {
              name: "--local-adg-auto-failover-max-data-loss-limit",
              description:
                "Parameter that allows users to select an acceptable maximum data loss limit in seconds",
              args: { name: "integer" },
            },
            {
              name: "--cpu-core-count",
              description:
                "The number of CPUs to be made available to the Autonomous AI Database.<br> For Autonomous AI Databases",
              args: { name: "integer" },
            },
            { name: "--long-term-backup-schedule", args: { name: "json" } },
            optIsDevTier,
            optComputeCount,
            {
              name: "--ocpu-count",
              description:
                "The number of OCPU cores to be made available to the Autonomous AI Database",
              args: { name: "number" },
            },
            optDataStorageSizeInTbs,
            {
              name: "--data-storage-size-in-gbs",
              description: "Applies to dedicated Exadata infrastructure only",
              args: { name: "integer" },
            },
            optDisplayName2,
            optIsFreeTier,
            optAvailabilityDomain,
            {
              name: "--time-scheduled-ad-update",
              description:
                "The date and time when the Autonomous Database availability domain is to be updated",
              args: { name: "datetime" },
            },
            {
              name: "--is-disable-ad-update-schedule",
              description:
                "True, if you want to disable Autonomous Database availability domain scheduled update",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-schedule-ad-update-to-earliest",
              description:
                "True, if you want to schedule Autonomous Database availability domain update to the earliest available time",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--admin-password",
              description:
                "The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase",
              args: { name: "admin-password" },
            },
            {
              name: "--db-name",
              description: "New name for this Autonomous AI Database",
              args: { name: "db-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optDbWorkload,
            optLicenseModel,
            optByolComputeCountLimit,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            {
              name: "--is-auto-scaling-enabled",
              description:
                "Indicates whether auto scaling is enabled for the Autonomous AI Database CPU core count",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-refreshable-clone",
              description:
                "Indicates if the Autonomous AI Database is a refreshable clone",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--refreshable-mode",
              description: "The refresh mode of the clone",
              args: { suggestions: ["AUTOMATIC", "MANUAL"] },
            },
            {
              name: "--is-local-data-guard-enabled",
              description:
                "Indicates whether the Autonomous AI Database has a local (in-region) standby database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-data-guard-enabled",
              description: "Deprecated",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optPeerDbId,
            optDbVersion,
            {
              name: "--open-mode",
              description: "Indicates the Autonomous AI Database mode",
              args: { suggestions: ["READ_ONLY", "READ_WRITE"] },
            },
            {
              name: "--permission-level",
              description: "The Autonomous AI Database permission level",
              args: { suggestions: ["RESTRICTED", "UNRESTRICTED"] },
            },
            optSubnetId,
            optPrivateEndpointLabel,
            optPrivateEndpointIp,
            optNsgIds,
            {
              name: "--auto-refresh-frequency-in-seconds",
              description:
                "The frequency a refreshable clone is refreshed after auto-refresh is enabled",
              args: { name: "integer" },
            },
            {
              name: "--auto-refresh-point-lag-in-seconds",
              description:
                "The time, in seconds, the data of the refreshable clone lags the primary database at the point of refresh",
              args: { name: "integer" },
            },
            {
              name: "--time-of-auto-refresh-start",
              description:
                "The the date and time that auto-refreshing will begin for an Autonomous AI Database refreshable clone",
              args: { name: "datetime" },
            },
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousMaintenanceScheduleType,
            optAutonomousDatabaseMaintenanceWindow,
            {
              name: "--time-maintenance-pause-until",
              description:
                "The date until which Autonomous AI Database maintenance is temporarily paused",
              args: { name: "datetime" },
            },
            { name: "--scheduled-maintenance-window", args: { name: "json" } },
            {
              name: "--time-scheduled-maintenance-window-update",
              description:
                "The date and time at which operation to change Maintenance Window is scheduled to take place",
              args: { name: "datetime" },
            },
            optIsBackupRetentionLocked,
            {
              name: "--time-scheduled-db-version-upgrade",
              description:
                "The date and time the Autonomous AI Database scheduled to upgrade to 26ai",
              args: { name: "datetime" },
            },
            {
              name: "--is-disable-db-version-upgrade-schedule",
              description:
                "True if user wants to disable Autonomous AI Database scheduled upgrade to 26ai",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-schedule-db-version-upgrade-to-earliest",
              description:
                "True if user wants to schedule Autonomous AI Database upgrade to the earliest available time",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            { name: "--vanity-url-details", args: { name: "json" } },
            optSecretId,
            optSecretVersionNumber,
            optEncryptionKey,
            {
              name: "--is-disconnect-peer",
              description:
                "If true, this disconnects the Autonomous AI Database from its peer",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--local-adg-resource-pool-leader-id",
              description:
                "The OCID of a dedicated resource pool leader Autonomous AI Database in the same region",
              args: { name: "local-adg-resource-pool-leader-id" },
            },
            optIfMatch,
            optOpcDryRun,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsAclEnabled,
            optFromJson,
          ],
        },
        {
          name: "generate-wallet",
          description:
            "Creates and downloads a wallet for the specified Autonomous AI Database",
          options: [
            optAutonomousDatabaseId,
            {
              name: "--password",
              description: "The password to encrypt the keys inside the wallet",
              args: { name: "password" },
              isRequired: true,
            },
            optFile,
            {
              name: "--generate-type",
              description: "The type of wallet to generate",
              args: { suggestions: ["ALL", "SINGLE"] },
            },
            {
              name: "--is-regional",
              description:
                "True when requesting regional connection strings in PDB connect info, applicable to cross-region DG only",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optOpcDryRun,
            optFromJson,
          ],
        },
        {
          name: "create-from-clone",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--source-id",
              description:
                "The OCID of the source Autonomous AI Database that you will clone to create a new Autonomous AI Database",
              args: { name: "source-id" },
              isRequired: true,
            },
            optCloneType,
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDbName2,
            optMaintenanceScheduleType,
            optIsAclEnabled,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDbName2,
            optMaintenanceScheduleType,
            optIsAclEnabled,
            optFromJson,
          ],
        },
        {
          name: "create-from-backup-id",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--autonomous-database-backup-id",
              description:
                "The OCID of the source Autonomous AI Database Backup that you will clone to create a new Autonomous AI",
              args: { name: "autonomous-database-backup-id" },
              isRequired: true,
            },
            optCloneType,
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            {
              name: "--clone-table-space-list",
              description:
                "A list of the source Autonomous AI Database's table space number(s) used to create this partial clone from",
              args: { name: "json" },
            },
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDbName2,
            optMaintenanceScheduleType,
            optFromJson,
          ],
        },
        {
          name: "create-from-backup-timestamp",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--autonomous-database-id",
              description:
                "The OCID of the source Autonomous AI Database that you will clone to create a new Autonomous AI Database",
              args: { name: "autonomous-database-id" },
              isRequired: true,
            },
            optCloneType,
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            {
              name: "--timestamp",
              description:
                "The timestamp specified for the point-in-time clone of the source Autonomous AI Database",
              args: { name: "datetime" },
            },
            {
              name: "--use-latest-available-backup-time-stamp",
              description: "Clone from latest available backup timestamp",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--clone-table-space-list",
              description:
                "A list of the source Autonomous AI Database's table space number(s) used to create this partial clone from",
              args: { name: "json" },
            },
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDbName2,
            optMaintenanceScheduleType,
            optFromJson,
          ],
        },
        {
          name: "rotate-key",
          description: "Rotate existing AutonomousDatabase Vault service key",
          options: [
            optAutonomousDatabaseId,
            optIfMatch,
            {
              name: "--key-version-id",
              description:
                "Key version ocid of the key provided by the user for rotate operation",
              args: { name: "key-version-id" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "manual-refresh",
          description:
            "Initiates a data refresh for an Autonomous AI Database refreshable clone",
          options: [
            optAutonomousDatabaseId,
            {
              name: "--time-refresh-cutoff",
              description:
                "The timestamp to which the Autonomous AI Database refreshable clone will be refreshed",
              args: { name: "datetime" },
            },
            optIfMatch,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-clones",
          description:
            "Lists the Autonomous AI Database clones for the specified Autonomous AI Database",
          options: [
            optCompartmentId,
            optAutonomousDatabaseId,
            optLimit,
            optPage,
            optSortOrder,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "STOPPING",
                  "STOPPED",
                  "STARTING",
                  "TERMINATING",
                  "TERMINATED",
                  "UNAVAILABLE",
                  "RESTORE_IN_PROGRESS",
                  "RESTORE_FAILED",
                  "BACKUP_IN_PROGRESS",
                  "SCALE_IN_PROGRESS",
                  "AVAILABLE_NEEDS_ATTENTION",
                  "UPDATING",
                  "MAINTENANCE_IN_PROGRESS",
                  "RESTARTING",
                  "RECREATING",
                  "ROLE_CHANGE_IN_PROGRESS",
                  "UPGRADING",
                  "INACCESSIBLE",
                  "STANDBY",
                  "TRANSPORTING",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NONE", "TIMECREATED", "DISPLAYNAME"] },
            },
            {
              name: "--clone-type",
              description:
                "A filter to return only resources that match the given clone type exactly",
              args: { suggestions: ["REFRESHABLE_CLONE"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-refreshable-clone",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--source-id",
              description:
                "The OCID of the source Autonomous AI Database that you will clone to create a new Autonomous AI Database",
              args: { name: "source-id" },
              isRequired: true,
            },
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            {
              name: "--refreshable-mode",
              description: "The refresh mode of the clone",
              args: { suggestions: ["AUTOMATIC", "MANUAL"] },
            },
            {
              name: "--auto-refresh-frequency-in-seconds",
              description:
                "The frequency a refreshable clone is refreshed after auto-refresh is enabled",
              args: { name: "integer" },
            },
            {
              name: "--auto-refresh-point-lag-in-seconds",
              description:
                "The time, in seconds, the data of the refreshable clone lags the primary database at the point of refresh",
              args: { name: "integer" },
            },
            {
              name: "--time-of-auto-refresh-start",
              description:
                "The the date and time that auto-refreshing will begin for an Autonomous AI Database refreshable clone",
              args: { name: "datetime" },
            },
            {
              name: "--open-mode",
              description: "Indicates the Autonomous AI Database mode",
              args: { suggestions: ["READ_ONLY", "READ_WRITE"] },
            },
            {
              name: "--clone-type",
              description: "The Autonomous AI Database clone type",
              args: { suggestions: ["FULL", "METADATA", "PARTIAL"] },
            },
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDbName2,
            optMaintenanceScheduleType,
            optFromJson,
          ],
        },
        {
          name: "data-safe",
          description: "The Data Safe to use with this Autonomous Database",
          subcommands: [
            {
              name: "register",
              description:
                "Asynchronously registers this Autonomous AI Database with Data Safe",
              options: [
                optAutonomousDatabaseId,
                {
                  name: "--pdb-admin-password",
                  description:
                    "The admin password provided during the creation of the database",
                  args: { name: "pdb-admin-password" },
                  isRequired: true,
                },
                optOpcDryRun,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "deregister",
              description:
                "Asynchronously deregisters this Autonomous AI Database with Data Safe",
              options: [
                optAutonomousDatabaseId,
                {
                  name: "--pdb-admin-password",
                  description:
                    "The admin password provided during the creation of the database",
                  args: { name: "pdb-admin-password" },
                  isRequired: true,
                },
                optOpcDryRun,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "enable-operations-insights",
          description:
            "Enables the specified Autonomous AI Database with Operations Insights",
          options: [
            optAutonomousDatabaseId,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-operations-insights",
          description:
            "Disables Operations Insights for the Autonomous AI Database resource",
          options: [
            optAutonomousDatabaseId,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "configure-key",
          description:
            "Configures the Autonomous AI Database Vault service key",
          options: [
            optAutonomousDatabaseId,
            optKmsKeyId,
            optVaultId,
            {
              name: "--is-using-oracle-managed-keys",
              description:
                "True if disable Customer Managed Keys and use Oracle Managed Keys",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-adb-cross-region-data-guard-details",
          description:
            "Details to create an Autonomous Data Guard association for an existing Autonomous Database where the standby",
          options: [
            optCompartmentId5,
            {
              name: "--source-id",
              description:
                "The OCID of the source Autonomous AI Database that will be used to create a new peer database for the Data",
              args: { name: "source-id" },
              isRequired: true,
            },
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optDbName3,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optIsAccessControlEnabled,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMaintenanceScheduleType,
            optFromJson,
          ],
        },
        {
          name: "list-refreshable-clones",
          description:
            "Lists the OCIDs of the Autonomous AI Database local and connected remote refreshable clones with the region",
          options: [
            optAutonomousDatabaseId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-cross-tenancy-disaster-recovery-details",
          description: "Creates a new Autonomous AI Database",
          options: [
            optCompartmentId5,
            {
              name: "--source-id",
              description:
                "The OCID of the source Autonomous AI Database that will be used to create a new peer database for the DR",
              args: { name: "source-id" },
              isRequired: true,
            },
            {
              name: "--disaster-recovery-type",
              description:
                "Indicates the disaster recovery (DR) type of the standby Autonomous AI Database Serverless instance",
              args: { name: "disaster-recovery-type" },
              isRequired: true,
            },
            optSubscriptionId,
            optAvailabilityDomain,
            optCharacterSet,
            optNcharacterSet,
            optDbName3,
            optCpuCoreCount,
            optBackupRetentionPeriodInDays,
            optComputeModel,
            optComputeCount,
            optOcpuCount,
            optDbWorkload,
            optDataStorageSizeInTbs,
            optDataStorageSizeInGbs,
            optIsFreeTier,
            optKmsKeyId,
            optVaultId,
            optEncryptionKey,
            optAdminPassword,
            optDisplayName2,
            optLicenseModel,
            optByolComputeCountLimit,
            optIsPreviewVersionWithServiceTermsAccepted,
            optIsAutoScalingEnabled,
            optIsDevTier,
            optIsDedicated,
            optAutonomousContainerDatabaseId2,
            optInMemoryPercentage,
            optIsAccessControlEnabled,
            optWhitelistedIps,
            optArePrimaryWhitelistedIpsUsed,
            optStandbyWhitelistedIps,
            optIsDataGuardEnabled,
            optIsLocalDataGuardEnabled,
            optSubnetId,
            optNsgIds,
            optPrivateEndpointLabel,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateEndpointIp,
            optDbVersion,
            optCustomerContacts,
            optIsMtlsConnectionRequired,
            optResourcePoolLeaderId,
            optResourcePoolSummary,
            optAutonomousMaintenanceScheduleType,
            optAutonomousDatabaseMaintenanceWindow,
            optScheduledOperations,
            optIsAutoScalingForStorageEnabled,
            optDatabaseEdition,
            optDbToolsDetails,
            optIsBackupRetentionLocked,
            optSecretId,
            optSecretVersionNumber,
            optTransportableTablespace,
            optIsReplicateAutomaticBackups,
            optOpcDryRun,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-elastic-pool-cost-savings",
          description:
            "Gets the estimate cost savings of the Autonomous AI Database",
          options: [
            {
              name: "--is-cpu-autoscale",
              description:
                "If provided as true, cost estimate with cpu autoscaling",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optAutonomousDatabaseId,
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
      name: "db-system-upgrade-summary",
      description:
        "It describes the various upgrade properties such as component, osversion, giversion for any VM DB system",
      subcommands: [
        {
          name: "list-db-system-upgrades",
          description:
            "Lists the applicable upgrade components for a DB systems",
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
      name: "execution-action",
      description: "Details of an execution action",
      subcommands: [
        {
          name: "create",
          description: "Creates an execution action resource",
          options: [
            {
              name: "--execution-window-id",
              description:
                "The OCID of the execution window resource the execution action belongs to",
              args: { name: "execution-window-id" },
              isRequired: true,
            },
            {
              name: "--action-type",
              description:
                "The action type of the execution action being performed",
              args: {
                suggestions: [
                  "DB_SERVER_FULL_SOFTWARE_UPDATE",
                  "STORAGE_SERVER_FULL_SOFTWARE_UPDATE",
                  "NETWORK_SWITCH_FULL_SOFTWARE_UPDATE",
                  "DB_SERVER_ONLINE_SOFTWARE_UPDATE",
                ],
              },
              isRequired: true,
            },
            optCompartmentId8,
            optActionParams,
            {
              name: "--action-members",
              description: "List of action members of this execution action",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState21,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the execution action",
          options: [
            optExecutionActionId,
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
          description: "Gets information about the specified execution action",
          options: [optExecutionActionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the execution action resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "FAILED",
                  "CANCELED",
                  "UPDATING",
                  "DELETED",
                  "SUCCEEDED",
                  "PARTIAL_SUCCESS",
                ],
              },
            },
            {
              name: "--execution-window-id",
              description:
                "A filter to return only resources that match the given execution wondow id",
              args: { name: "execution-window-id" },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "move-execution-action-member",
          description:
            "Moves an execution action member to this execution action resource from another",
          options: [
            optExecutionActionId,
            {
              name: "--source-execution-action-id",
              description: "The OCID of the source execution action resource",
              args: { name: "source-execution-action-id" },
            },
            {
              name: "--execution-action-member-id",
              description:
                "The OCID of the execution action member to be moved",
              args: { name: "execution-action-member-id" },
            },
            {
              name: "--execution-action-member-count",
              description:
                "The number of execution action member without ocids to be moved",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState21,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the execution action resource",
          options: [
            optExecutionActionId,
            {
              name: "--execution-window-id",
              description:
                "The OCID of the execution window resource the execution action belongs to",
              args: { name: "execution-window-id" },
            },
            optActionParams,
            {
              name: "--action-members",
              description: "List of action members of this execution action",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState21,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-patch",
      subcommands: [
        {
          name: "get",
          description: "Gets information about a specific autonomous patch",
          options: [
            {
              name: "--autonomous-patch-id",
              description: "The autonomous patch OCID",
              args: { name: "autonomous-patch-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-container-database-patches",
          description:
            "Lists the patches applicable to the requested container database",
          options: [
            optAutonomousContainerDatabaseId,
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--autonomous-patch-type",
              description:
                'Autonomous patch type, either "QUARTERLY" or "TIMEZONE"',
              args: { suggestions: ["QUARTERLY", "TIMEZONE"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-database-software-image",
      description:
        "Autonomous AI Database Software Images created from Autonomous Container Database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the Autonomous AI Database Software Image and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optAutonomousDatabaseSoftwareImageId,
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
            "Create Autonomous AI Database Software Image in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Autonomous AI Database Software Image",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--source-cdb-id",
              description:
                "The source Autonomous Container Database OCID from which to create Autonomous AI Database Software Image",
              args: { name: "source-cdb-id" },
              isRequired: true,
            },
            {
              name: "--image-shape-family",
              description: "To what shape the image is meant for",
              args: { suggestions: ["EXADATA_SHAPE", "EXACC_SHAPE"] },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "FAILED",
                  "PROVISIONING",
                  "EXPIRED",
                  "TERMINATED",
                  "TERMINATING",
                  "UPDATING",
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
          name: "delete",
          description: "Delete an Autonomous AI Database Software Image",
          options: [
            optAutonomousDatabaseSoftwareImageId,
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
            "Gets information about the specified Autonomous AI Database Software Image",
          options: [optAutonomousDatabaseSoftwareImageId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the Autonomous AI Database Software Images in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--image-shape-family",
              description:
                "A filter to return only resources that match the given image shape family exactly",
              args: { suggestions: ["EXACC_SHAPE", "EXADATA_SHAPE"] },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Parameter according to which Autonomous AI Database Software Images will be sorted",
              args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "FAILED",
                  "PROVISIONING",
                  "EXPIRED",
                  "TERMINATED",
                  "TERMINATING",
                  "UPDATING",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the properties of an Autonomous AI Database Software Image, like add tags",
          options: [
            optAutonomousDatabaseSoftwareImageId,
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
                  "AVAILABLE",
                  "FAILED",
                  "PROVISIONING",
                  "EXPIRED",
                  "TERMINATED",
                  "TERMINATING",
                  "UPDATING",
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
      name: "scheduled-action",
      description: "Details of a Scheduled Action",
      subcommands: [
        {
          name: "create",
          description: "Creates a Scheduled Action resource",
          options: [
            {
              name: "--action-type",
              description: "The type of the scheduled action being performed",
              args: {
                suggestions: [
                  "DB_SERVER_FULL_SOFTWARE_UPDATE",
                  "STORAGE_SERVER_FULL_SOFTWARE_UPDATE",
                  "NETWORK_SWITCH_FULL_SOFTWARE_UPDATE",
                  "FSU_VM_CLUSTER_OS_SOFTWARE_UPDATE",
                  "FSU_VM_CLUSTER_GI_SOFTWARE_UPDATE",
                  "FSU_VM_CLUSTER_GI_OS_SOFTWARE_UPDATE",
                  "DB_SERVER_ONLINE_SOFTWARE_UPDATE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--scheduling-plan-id",
              description: "The OCID of the Scheduling Plan",
              args: { name: "scheduling-plan-id" },
              isRequired: true,
            },
            {
              name: "--scheduling-window-id",
              description: "The OCID of the Scheduling Window",
              args: { name: "scheduling-window-id" },
              isRequired: true,
            },
            optCompartmentId2,
            optActionParams,
            {
              name: "--action-members",
              description: "The list of action members in a scheduled action",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the scheduled action",
          options: [
            optScheduledActionId,
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
          description: "Gets information about the specified Scheduled Action",
          options: [optScheduledActionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Scheduled Action resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--service-type",
              description:
                "A filter to return only resources that match the given service type exactly",
              args: { name: "service-type" },
            },
            {
              name: "--scheduling-plan-id",
              description:
                "A filter to return only resources that match the given scheduling policy id exactly",
              args: { name: "scheduling-plan-id" },
            },
            optDisplayName,
            optSortBy,
            {
              name: "--id",
              description:
                "A filter to return only resources that match the given Scheduled Action id exactly",
              args: { name: "id" },
            },
            optLifecycleState2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Scheduled Action resource",
          options: [
            optScheduledActionId,
            optActionParams,
            {
              name: "--action-members",
              description: "The list of action members in a scheduled action",
              args: { name: "json" },
            },
            {
              name: "--scheduling-window-id",
              description: "The OCID of the Scheduling Window",
              args: { name: "scheduling-window-id" },
            },
            optIfMatch,
            optForce2,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vm-cluster-network",
      description: "The VM cluster network",
      subcommands: [
        {
          name: "create",
          description: "Creates the VM cluster network",
          options: [
            optExadataInfrastructureId,
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata Cloud@Customer VM cluster network",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--scans",
              description: "The SCAN details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vm-networks",
              description: "Details of the client and backup networks",
              args: { name: "json" },
              isRequired: true,
            },
            optDns,
            optNtp,
            {
              name: "--dr-scans",
              description: "The SCAN details for DR network",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState18,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified VM cluster network",
          options: [
            optExadataInfrastructureId,
            optVmClusterNetworkId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-validation-report",
          description:
            "Downloads the network validation report file for the specified VM cluster network",
          options: [
            optExadataInfrastructureId,
            optVmClusterNetworkId,
            optFile,
            optFromJson,
          ],
        },
        {
          name: "download-vm-cluster-network-config-file",
          description:
            "Downloads the configuration file for the specified VM cluster network",
          options: [
            optExadataInfrastructureId,
            optVmClusterNetworkId,
            optFile,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified VM cluster network",
          options: [
            optExadataInfrastructureId,
            optVmClusterNetworkId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of the VM cluster networks in the specified compartment",
          options: [
            optExadataInfrastructureId,
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "REQUIRES_VALIDATION",
                  "VALIDATING",
                  "VALIDATED",
                  "VALIDATION_FAILED",
                  "UPDATING",
                  "ALLOCATED",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "resize",
          description:
            "Adds or removes Db server network nodes to extend or shrink the existing VM cluster network",
          options: [
            optExadataInfrastructureId,
            optVmClusterNetworkId,
            {
              name: "--action",
              description:
                "Actions that can be performed on the VM cluster network",
              args: {
                suggestions: [
                  "ADD_DBSERVER_NETWORK",
                  "REMOVE_DBSERVER_NETWORK",
                ],
              },
              isRequired: true,
            },
            {
              name: "--vm-networks",
              description: "Details of the client and backup networks",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState18,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified VM cluster network",
          options: [
            optExadataInfrastructureId,
            optVmClusterNetworkId,
            {
              name: "--scans",
              description: "The SCAN details",
              args: { name: "json" },
            },
            optDns,
            optNtp,
            {
              name: "--vm-networks",
              description: "Details of the client and backup networks",
              args: { name: "json" },
            },
            {
              name: "--dr-scans",
              description: "The SCAN details for DR network",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState18,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate",
          description: "Validates the specified VM cluster network",
          options: [
            optExadataInfrastructureId,
            optVmClusterNetworkId,
            optWaitForState18,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "infrastructure-target-version",
      description: "Infrastructure target version details",
      subcommands: [
        {
          name: "get",
          description:
            "Gets details of the Exadata Infrastructure target system software versions that can be applied to",
          options: [
            optCompartmentId,
            optTargetResourceId,
            optTargetResourceType,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "console-connection",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new console connection to the specified database node",
          options: [
            {
              name: "--public-key",
              description:
                "The SSH public key used to authenticate the console connection",
              args: { name: "public-key" },
              isRequired: true,
            },
            optDbNodeId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
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
        {
          name: "delete",
          description: "Deletes the specified database node console connection",
          options: [
            optDbNodeId,
            optConsoleConnectionId,
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
            "Gets the specified database node console connection's information",
          options: [optDbNodeId, optConsoleConnectionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the console connections for the specified database node",
          options: [optDbNodeId, optAll, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified database node console connection",
          options: [
            optDbNodeId,
            optConsoleConnectionId,
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
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
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
      name: "dbnode-snapshot",
      description: "Details of the Database Node Snapshot",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified Exadata Database Node Snapshot",
          options: [
            optDbnodeSnapshotId,
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
            "Gets information about the specified Exadata Database Node Snapshot in the specified compartment",
          options: [optDbnodeSnapshotId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the Exadata Database Node Snapshots in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy3,
            optName,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Exadata Database Snapshots that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "MOUNTED",
                  "MOUNTING",
                  "UNMOUNTING",
                ],
              },
            },
            {
              name: "--cluster-id",
              description:
                "A filter to return only Exadata Database Node Snapshots that match the given VM cluster",
              args: { name: "cluster-id" },
            },
            {
              name: "--source-dbnode-id",
              description:
                "A filter to return only Exadata Database Snapshots that match the given database node",
              args: { name: "source-dbnode-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "mount",
          description: "Mounts the snapshot for the provided dbNode",
          options: [
            {
              name: "--db-node-id",
              description:
                "The OCID of the Exadata Database Node where snapshot needs to be mounted",
              args: { name: "db-node-id" },
              isRequired: true,
            },
            optDbnodeSnapshotId,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "MOUNTED",
                  "MOUNTING",
                  "UNMOUNTING",
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
          name: "unmount",
          description: "Unmounts the snapshot for the provided dbNode",
          options: [
            {
              name: "--db-node-id",
              description:
                "The OCID of the Exadata Database Node where snapshot needs to be unmounted",
              args: { name: "db-node-id" },
              isRequired: true,
            },
            optDbnodeSnapshotId,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "MOUNTED",
                  "MOUNTING",
                  "UNMOUNTING",
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
      name: "console-history",
      description: "The details of the Db Node console history",
      subcommands: [
        {
          name: "create",
          description:
            "Captures the most recent serial console data (up to a megabyte) for the specified database node",
          options: [
            {
              name: "--display-name",
              description: "The user-friendly name for the console history",
              args: { name: "display-name" },
              isRequired: true,
            },
            optDbNodeId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "REQUESTED",
                  "GETTING_HISTORY",
                  "SUCCEEDED",
                  "FAILED",
                  "DELETED",
                  "DELETING",
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
          name: "delete",
          description: "Deletes the specified database node console history",
          options: [
            optDbNodeId,
            optConsoleHistoryId,
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
            "Gets information about the specified database node console history",
          options: [optDbNodeId, optConsoleHistoryId, optFromJson],
        },
        {
          name: "get-console-history-content",
          description:
            "Retrieves the specified database node console history contents upto a megabyte",
          options: [optDbNodeId, optConsoleHistoryId, optFile, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the console histories for the specified database node",
          options: [
            optDbNodeId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "REQUESTED",
                  "GETTING_HISTORY",
                  "SUCCEEDED",
                  "FAILED",
                  "DELETED",
                  "DELETING",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified database node console history",
          options: [
            optDbNodeId,
            optConsoleHistoryId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--display-name",
              description: "The user-friendly name for the console history",
              args: { name: "display-name" },
            },
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "REQUESTED",
                  "GETTING_HISTORY",
                  "SUCCEEDED",
                  "FAILED",
                  "DELETED",
                  "DELETING",
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
      name: "db-server",
      description: "Details of the Db server resource",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the Exadata Db server",
          options: [
            {
              name: "--exadata-infrastructure-id",
              description: "The OCID of the ExadataInfrastructure",
              args: { name: "exadata-infrastructure-id" },
              isRequired: true,
            },
            {
              name: "--db-server-id",
              description: "The DB server OCID",
              args: { name: "db-server-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the Exadata DB servers in the ExadataInfrastructureId and specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--exadata-infrastructure-id",
              description: "The OCID of the ExadataInfrastructure",
              args: { name: "exadata-infrastructure-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sort by TIMECREATED",
              args: { suggestions: ["TIMECREATED"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "UNAVAILABLE",
                  "DELETING",
                  "DELETED",
                  "MAINTENANCE_IN_PROGRESS",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "action-param-values-summary",
      description:
        "Details of the action parameter and its possible values that is used in listParamsForActionType",
      subcommands: [
        {
          name: "list-params-for-action-type",
          description:
            "List all the action params and their possible values for a given action type",
          options: [
            {
              name: "--type",
              description: "The type of the scheduled action",
              args: {
                suggestions: [
                  "DB_SERVER_FULL_SOFTWARE_UPDATE",
                  "STORAGE_SERVER_FULL_SOFTWARE_UPDATE",
                  "NETWORK_SWITCH_FULL_SOFTWARE_UPDATE",
                  "FSU_VM_CLUSTER_OS_SOFTWARE_UPDATE",
                  "FSU_VM_CLUSTER_GI_SOFTWARE_UPDATE",
                  "FSU_VM_CLUSTER_GI_OS_SOFTWARE_UPDATE",
                  "DB_SERVER_ONLINE_SOFTWARE_UPDATE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--plan-intent",
              description: "The plan intent the action will be used for",
              args: {
                suggestions: [
                  "EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE",
                  "EXADATA_INFRASTRUCTURE_SECURITY_UPDATE",
                ],
              },
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
      name: "autonomous-container-database",
      subcommands: [
        {
          name: "add",
          description: "Add a standby Autonomous Container Database",
          options: [
            optAutonomousContainerDatabaseId,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optPeerCloudAutonomousVmClusterId,
            {
              name: "--peer-autonomous-vm-cluster-id",
              description: "The OCID of the peer Autonomous Exadata VM Cluster",
              args: { name: "peer-autonomous-vm-cluster-id" },
            },
            optPeerDbUniqueName2,
            optProtectionMode,
            optStandbyMaintenanceBufferInDays,
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
            "Move the Autonomous Container Database and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optAutonomousContainerDatabaseId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-dataguard-role",
          description: "Deprecated",
          deprecated: true,
          options: [
            {
              name: "--role",
              description:
                "The Data Guard role of the Autonomous Container Database or Autonomous AI Database",
              args: {
                suggestions: [
                  "PRIMARY",
                  "STANDBY",
                  "DISABLED_STANDBY",
                  "BACKUP_COPY",
                  "SNAPSHOT_STANDBY",
                ],
              },
              isRequired: true,
            },
            optAutonomousContainerDatabaseDataguardAssociationId,
            optAutonomousContainerDatabaseId,
            {
              name: "--connection-strings-type",
              description:
                "Type of connection strings when converting database to snapshot mode",
              args: { suggestions: ["SNAPSHOT_SERVICES", "PRIMARY_SERVICES"] },
            },
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "convert-standby",
          description:
            "Convert the standby Autonomous Container Database (ACD) between physical standby and snapshot standby ACD",
          options: [
            {
              name: "--role",
              description:
                "The Data Guard role of the Autonomous Container Database or Autonomous AI Database",
              args: {
                suggestions: [
                  "PRIMARY",
                  "STANDBY",
                  "DISABLED_STANDBY",
                  "BACKUP_COPY",
                  "SNAPSHOT_STANDBY",
                ],
              },
              isRequired: true,
            },
            optAutonomousContainerDatabaseId,
            {
              name: "--connection-strings-type",
              description:
                "Type of connection strings when converting database to snapshot mode",
              args: { suggestions: ["SNAPSHOT_SERVICES", "PRIMARY_SERVICES"] },
            },
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            optCustomerContacts,
            optOkvEndPointGroupName,
            {
              name: "--source",
              description: "The source of the database",
              args: {
                suggestions: [
                  "NONE",
                  "BACKUP_FROM_ID",
                  "BACKUP_FROM_TIMESTAMP",
                ],
              },
            },
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optEncryptionKeyLocationDetails,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-container-database-create-autonomous-container-database-from-backup-timestamp-details",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            {
              name: "--source-autonomous-container-database-id",
              description:
                "The OCID of the source ACD that you will clone to create a new ACD",
              args: { name: "source-autonomous-container-database-id" },
              isRequired: true,
            },
            optCloneType,
            optCustomerContacts,
            optOkvEndPointGroupName,
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optEncryptionKeyLocationDetails,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            {
              name: "--time-stamp-to-use-for-cloning",
              description:
                "The time stamp representing the point in time to which the Autonomous Container Database should be cloned",
              args: { name: "datetime" },
            },
            {
              name: "--should-use-latest-available-backup-time-stamp",
              description:
                "If set to true, OCI shall attempt to create a point in time to the latest available backup of the source",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--autonomous-databases-to-clone",
              description:
                "A list of Autonomous Databases ( display name of the ADB in specific ) to be cloned from backup of the source",
              args: { name: "json" },
            },
            {
              name: "--clone-band-width",
              description:
                "The speed at which the Autonomous Container Database Clone from backup operation to be performed by OCI",
              args: { suggestions: ["SLOW", "MEDIUM", "FAST"] },
            },
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-container-database-create-autonomous-container-database-details",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            optCustomerContacts,
            optOkvEndPointGroupName,
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optEncryptionKeyLocationDetails,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-container-database-create-autonomous-container-database-from-backup-details",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            {
              name: "--autonomous-container-database-backup-id",
              description:
                "The OCID of the source ACD backup that you will clone to create a new ACD",
              args: { name: "autonomous-container-database-backup-id" },
              isRequired: true,
            },
            optCustomerContacts,
            optOkvEndPointGroupName,
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optEncryptionKeyLocationDetails,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            {
              name: "--clone-type",
              description: "The Autonomous AI Database clone type",
              args: { suggestions: ["FULL", "METADATA", "PARTIAL"] },
            },
            {
              name: "--autonomous-databases-to-clone",
              description:
                "A list of Autonomous Databases ( display name of the ADB in specific ) to be cloned from backup of the source",
              args: { name: "json" },
            },
            {
              name: "--clone-band-width",
              description:
                "The speed at which the Autonomous Container Database Clone from backup operation to be performed by OCI",
              args: { suggestions: ["SLOW", "MEDIUM", "FAST"] },
            },
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-container-database-external-hsm-encryption-details",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            {
              name: "--encryption-key-location-details-hsm-password",
              description:
                "Provide the HSM password as you would in RDBMS for External HSM",
              args: { name: "encryption-key-location-details-hsm-password" },
              isRequired: true,
            },
            optCustomerContacts,
            optOkvEndPointGroupName,
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-container-database-google-cloud-provider-encryption-key-details",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            {
              name: "--encryption-key-location-details-google-cloud-provider-encryption-key-id",
              description:
                "Provide the key OCID of a registered Google Cloud Provider key",
              args: {
                name: "encryption-key-location-details-google-cloud-provider-encryption-key-id",
              },
              isRequired: true,
            },
            optCustomerContacts,
            optOkvEndPointGroupName,
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-container-database-azure-encryption-key-details",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            {
              name: "--encryption-key-location-details-azure-encryption-key-id",
              description: "Provide the key OCID of a registered Azure key",
              args: {
                name: "encryption-key-location-details-azure-encryption-key-id",
              },
              isRequired: true,
            },
            optCustomerContacts,
            optOkvEndPointGroupName,
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-autonomous-container-database-aws-encryption-key-details",
          description:
            "Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure",
          options: [
            optDisplayName3,
            optPatchModel,
            {
              name: "--encryption-key-location-details-aws-encryption-key-id",
              description: "Provide the key OCID of a registered AWS key",
              args: {
                name: "encryption-key-location-details-aws-encryption-key-id",
              },
              isRequired: true,
            },
            optCustomerContacts,
            optOkvEndPointGroupName,
            optDbUniqueName,
            optDbName,
            optServiceLevelAgreementType,
            optAutonomousExadataInfrastructureId,
            optDbVersion2,
            optDatabaseSoftwareImageId2,
            optPeerAutonomousExadataInfrastructureId,
            optPeerAutonomousContainerDatabaseDisplayName,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIsAutomaticFailoverEnabled,
            optPeerCloudAutonomousVmClusterId,
            optPeerAutonomousVmClusterId,
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optPeerDbUniqueName,
            optAutonomousVmClusterId2,
            optCloudAutonomousVmClusterId2,
            optCompartmentId6,
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optKmsKeyId,
            optKmsKeyVersionId,
            optVaultId,
            optKeyStoreId,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            {
              name: "--encryption-key-location-details-aws-encryption-key-pool-id",
              description: "Provide the key pool OCID of a registered AWS key",
              args: {
                name: "encryption-key-location-details-aws-encryption-key-pool-id",
              },
            },
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "edit-autonomous-container-database-dataguard",
          description:
            "Modify Autonomous Container Database Data Guard settings such as protection mode, automatic failover",
          options: [
            optAutonomousContainerDatabaseId,
            optIsAutomaticFailoverEnabled,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "failover-autonomous-container-database-dataguard",
          description:
            "Performs failover to a standby Autonomous Container Database",
          options: [
            optAutonomousContainerDatabaseId,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified Autonomous Container Database",
          options: [optAutonomousContainerDatabaseId, optFromJson],
        },
        {
          name: "get-autonomous-container-database-resource-usage",
          description:
            "Get resource usage details for the specified Autonomous Container Database",
          options: [optAutonomousContainerDatabaseId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the Autonomous Container Databases in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--autonomous-exadata-infrastructure-id",
              description: "The Autonomous Exadata Infrastructure OCID",
              args: { name: "autonomous-exadata-infrastructure-id" },
            },
            {
              name: "--autonomous-vm-cluster-id",
              description: "The Autonomous VM Cluster OCID",
              args: { name: "autonomous-vm-cluster-id" },
            },
            optInfrastructureType,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "BACKUP_IN_PROGRESS",
                  "RESTORING",
                  "RESTORE_FAILED",
                  "RESTARTING",
                  "MAINTENANCE_IN_PROGRESS",
                  "ROLE_CHANGE_IN_PROGRESS",
                  "ENABLING_AUTONOMOUS_DATA_GUARD",
                  "UNAVAILABLE",
                ],
              },
            },
            optAvailabilityDomain2,
            optDisplayName,
            {
              name: "--service-level-agreement-type",
              description:
                "A filter to return only resources that match the given service-level agreement type exactly",
              args: { name: "service-level-agreement-type" },
            },
            {
              name: "--cloud-autonomous-vm-cluster-id",
              description: "The cloud Autonomous VM Cluster OCID",
              args: { name: "cloud-autonomous-vm-cluster-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reinstate-autonomous-container-database-dataguard",
          description:
            "Reinstates a disabled standby Autonomous Container Database (ACD)",
          options: [
            optAutonomousContainerDatabaseId,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "restart",
          description:
            "Rolling restarts the specified Autonomous Container Database",
          options: [
            optAutonomousContainerDatabaseId,
            optIfMatch,
            {
              name: "--is-force-restart",
              description:
                "If set to true, restarts the Autonomous Container Database with force option",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switchover-autonomous-container-database-dataguard",
          description:
            "Switchover an Autonomous Container Database (ACD), identified by the autonomousContainerDatabaseId parameter",
          options: [
            optAutonomousContainerDatabaseId,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "terminate",
          description:
            "Terminates an Autonomous Container Database, which permanently deletes the container database and any",
          options: [
            optAutonomousContainerDatabaseId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the properties of an Autonomous Container Database, such as display name, maintenance preference",
          options: [
            optAutonomousContainerDatabaseId,
            {
              name: "--display-name",
              description:
                "The display name for the Autonomous Container Database",
              args: { name: "display-name" },
            },
            optCustomerContacts,
            optOkvEndPointGroupName,
            {
              name: "--patch-model",
              description: "Database Patch model preference",
              args: {
                suggestions: ["RELEASE_UPDATES", "RELEASE_UPDATE_REVISIONS"],
              },
            },
            optMaintenanceWindowDetails,
            optStandbyMaintenanceBufferInDays,
            optVersionPreference,
            optIsDstFileUpdateEnabled,
            optFreeformTags,
            optDefinedTags,
            optBackupConfig,
            optDbSplitThreshold,
            optVmFailoverReservation,
            optDistributionAffinity,
            optNetServicesArchitecture,
            optIfMatch,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rotate-key",
          description: "Creates a new version of an existing Vault service key",
          options: [
            optAutonomousContainerDatabaseId,
            optIfMatch,
            {
              name: "--key-version-id",
              description:
                "Key version ocid of the key provided by the user for rotate operation",
              args: { name: "key-version-id" },
            },
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-database-wallet",
      description: "The Autonomous AI Database wallet details",
      subcommands: [
        {
          name: "get-metadata",
          description:
            "Gets the wallet details for the specified Autonomous AI Database",
          options: [
            {
              name: "--id",
              description:
                "The OCID of the Autonomous Database to get the wallet metadata for",
              args: { name: "id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-regional-wallet-metadata",
          description:
            "Gets the Autonomous AI Database regional wallet details",
          options: [optFromJson],
        },
        {
          name: "rotate",
          description:
            "Updates the wallet for the specified Autonomous AI Database",
          options: [
            {
              name: "--should-rotate",
              description: "Indicates whether to rotate the wallet or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--grace-period",
              description:
                "The number of hours that the old wallet can be used after it has been rotated",
              args: { name: "integer" },
            },
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--id",
              description:
                "The OCID of the Autonomous Database to rotate the wallet for",
              args: { name: "id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "rotate-regional-wallet",
          description: "Updates the Autonomous AI Database regional wallet",
          options: [
            {
              name: "--should-rotate",
              description: "Indicates whether to rotate the wallet or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--grace-period",
              description:
                "The number of hours that the old wallet can be used after it has been rotated",
              args: { name: "integer" },
            },
            optOpcDryRun,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "database",
      subcommands: [
        {
          name: "change-encryption-key-location-google-cloud-provider-encryption-key-details",
          description:
            "Update the encryption key management location for the database",
          options: [
            optDatabaseId,
            {
              name: "--google-cloud-provider-encryption-key-id",
              description:
                "Provide the key OCID of a registered Google Cloud Provider key",
              args: { name: "google-cloud-provider-encryption-key-id" },
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
          name: "change-encryption-key-location-azure-encryption-key-details",
          description:
            "Update the encryption key management location for the database",
          options: [
            optDatabaseId,
            {
              name: "--azure-encryption-key-id",
              description: "Provide the key OCID of a registered Azure key",
              args: { name: "azure-encryption-key-id" },
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
          name: "change-encryption-key-location-aws-encryption-key-details",
          description:
            "Update the encryption key management location for the database",
          options: [
            optDatabaseId,
            {
              name: "--aws-encryption-key-id",
              description: "Provide the key OCID of a registered AWS key",
              args: { name: "aws-encryption-key-id" },
              isRequired: true,
            },
            {
              name: "--aws-encryption-key-pool-id",
              description: "Provide the key pool OCID of a registered AWS key",
              args: { name: "aws-encryption-key-pool-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-key-store-type",
          description: "Changes encryption key management type",
          options: [
            optDatabaseId,
            optKeyStoreId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "convert-standby-database-type",
          description:
            "Performs transition from standby database into a snapshot standby and vice versa",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword2,
            {
              name: "--standby-conversion-type",
              description:
                "Defines the conversion type of the standby database",
              args: { suggestions: ["SNAPSHOT", "PHYSICAL"] },
              isRequired: true,
            },
            {
              name: "--snapshot-duration-in-days",
              description:
                "SnapshotDurationInDays is the duration in day(s) after which the Snapshot Standby Database will get converted",
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
          name: "convert-to-standalone",
          description:
            "Disassociate the standby database identified by the databaseId parameter from existing Data Guard group",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword2,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new database in the given DB System",
          options: [
            optKmsKeyId,
            optKmsKeyVersionId,
            optDatabaseSoftwareImageId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source",
              description:
                "The source of database: NONE for creating a new database",
              args: {
                suggestions: [
                  "NONE",
                  "DB_BACKUP",
                  "DATABASE",
                  "VM_CLUSTER_BACKUP",
                  "VM_CLUSTER_NEW",
                  "VM_CLUSTER_DATABASE",
                ],
              },
            },
            optIsDesupportedVersion,
            optIsOlderVersionAcknowledged,
            optIsUnifiedAuditingEnabled,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optAdminPassword2,
            {
              name: "--db-home-id",
              description: "The Db Home Id to create this database under",
              args: { name: "db-home-id" },
            },
            {
              name: "--db-system-id",
              description: "The Db System Id to create this database under",
              args: { name: "db-system-id" },
            },
            optVmClusterId3,
            {
              name: "--character-set",
              description: "The character set for the database",
              args: { name: "character-set" },
            },
            optDbName2,
            optDbUniqueName2,
            optSidPrefix,
            {
              name: "--tde-wallet-password",
              description: "The optional password to open the TDE wallet",
              args: { name: "tde-wallet-password" },
            },
            {
              name: "--db-workload",
              description: "Deprecated",
              args: { suggestions: ["OLTP", "DSS"] },
              deprecated: true,
            },
            {
              name: "--ncharacter-set",
              description: "National character set for the database",
              args: { name: "ncharacter-set" },
            },
            {
              name: "--pdb-name",
              description: "Pluggable database name",
              args: { name: "pdb-name" },
            },
            {
              name: "--db-version",
              description: "A valid Oracle database version",
              args: { name: "db-version" },
            },
            optAutoBackupEnabled,
            optRecoveryWindowInDays,
            optAutoBackupWindow,
            optAutoFullBackupDay,
            optAutoFullBackupWindow,
            {
              name: "--run-immediate-full-backup",
              description:
                "If set to true, configures automatic full backups in the local region",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--backup-destination",
              description: "Backup destination list",
              args: { name: "json" },
            },
            optVaultId,
            optHsmPassword,
            optDataStorageSizeInGbs2,
            optRecoStorageSizeInGbs,
            optMsuDetails,
            {
              name: "--zero-data-loss-enabled",
              description: "Enable Zero Data loss feature",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDatasafeRegistrationDetails,
            optFromJson,
          ],
        },
        {
          name: "create-database-create-stand-by-database-details",
          description: "Creates a new database in the specified Database Home",
          options: [
            optDatabase,
            optDbHomeId,
            optDbVersion3,
            optKmsKeyId,
            optKmsKeyVersionId,
            optOpcDryRun,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-database-create-database-from-database",
          description: "Creates a new database in the specified Database Home",
          options: [
            optDatabase,
            optDbHomeId,
            optDbVersion3,
            optKmsKeyId,
            optKmsKeyVersionId,
            optOpcDryRun,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a database",
          options: [
            {
              name: "--database-id",
              description: "The OCID of the database to delete",
              args: { name: "database-id" },
              isRequired: true,
            },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "disable-database-management",
          description:
            "Disables the Database Management service for the database",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-database-management",
          description:
            "Enables the Database Management service for an Oracle Database located in Oracle Cloud Infrastructure",
          options: [
            optDatabaseId,
            {
              name: "--private-end-point-id",
              description: "The OCID of the private endpoint",
              args: { name: "private-end-point-id" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description:
                "The name of the Oracle Database service that will be used to connect to the database",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--management-type",
              description: "The Database Management type",
              args: { suggestions: ["BASIC", "ADVANCED"] },
            },
            optProtocol,
            optPort,
            optSslSecretId,
            optRole,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--user-name",
              description:
                "The name of the Oracle Database user that will be used to connect to the database",
              args: { name: "user-name" },
              isRequired: true,
            },
            {
              name: "--password-secret-id",
              description: "The OCID of the Oracle Cloud Infrastructure secret",
              args: { name: "password-secret-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "failover-data-guard",
          description:
            "Performs a failover to transition the standby database identified by the databaseId path parameter into",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword2,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified database",
          options: [optDatabaseId, optFromJson],
        },
        {
          name: "migrate-vault-key",
          description:
            "Changes encryption key management from customer-managed, using the Vault service, to Oracle-managed",
          options: [
            optDatabaseId,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the key container that is used as the master encryption key in database transparent data",
              args: { name: "kms-key-id" },
              isRequired: true,
            },
            optKmsKeyVersionId,
            optVaultId,
            {
              name: "--tde-wallet-password",
              description: "The existing TDE wallet password of the database",
              args: { name: "tde-wallet-password" },
            },
            {
              name: "--admin-password",
              description: "The existing admin password of the database",
              args: { name: "admin-password" },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "modify-database-management",
          description:
            "Updates one or more attributes of the Database Management service for the database",
          options: [
            optDatabaseId,
            {
              name: "--private-end-point-id",
              description: "The OCID of the private endpoint",
              args: { name: "private-end-point-id" },
            },
            {
              name: "--management-type",
              description: "The Database Management type",
              args: { suggestions: ["BASIC", "ADVANCED"] },
            },
            {
              name: "--service-name",
              description:
                "The name of the Oracle Database service that will be used to connect to the database",
              args: { name: "service-name" },
            },
            optProtocol,
            optPort,
            optSslSecretId,
            optRole,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--user-name",
              description:
                "The name of the Oracle Database user that will be used to connect to the database",
              args: { name: "user-name" },
            },
            {
              name: "--password-secret-id",
              description: "The OCID of the Oracle Cloud Infrastructure secret",
              args: { name: "password-secret-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "reinstate-data-guard",
          description:
            "Reinstates the database identified by the databaseId parameter into the standby role in a Data Guard",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword2,
            {
              name: "--source-database-id",
              description:
                "The OCID of the source (primary) database in the Data Guard group",
              args: { name: "source-database-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "restore",
          description:
            "Restore a Database based on the request parameters you provide",
          options: [
            optDatabaseId,
            {
              name: "--database-scn",
              description:
                "Restores using the backup with the System Change Number (SCN) specified",
              args: { name: "database-scn" },
            },
            {
              name: "--timestamp",
              description: "Restores to the timestamp specified",
              args: { name: "datetime" },
            },
            {
              name: "--latest",
              description:
                "Restores to the last known good state with the least possible data loss",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--pdb-name",
              description:
                "Restores only the Pluggable Database (if specified) using the inputs provided in request",
              args: { name: "pdb-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "rotate-vault-key",
          description: "Creates a new version of an existing Vault service key",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "run-data-patch",
          description:
            "Run datapatch on the specified Oracle Database and optionally on the specified Pluggable databases",
          options: [
            optDatabaseId,
            {
              name: "--pluggable-databases",
              description:
                "List of Pluggable Database OCIDs to run datapatch on",
              args: { name: "json" },
            },
            { name: "--data-patch-options", args: { name: "json" } },
            {
              name: "--action",
              description:
                "The action to perform on run database dataPatch operation",
              args: { suggestions: ["APPLY", "PRECHECK"] },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switch-over-data-guard",
          description:
            "Performs a switchover to transition primary database of this Data Guard association into a standby role",
          options: [
            optDatabaseId,
            optDatabaseAdminPassword2,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-data-guard",
          description: "Update an existing Data Guard member",
          options: [
            optDatabaseId,
            {
              name: "--database-admin-password",
              description:
                "The administrator password of the primary database in this Data Guard association",
              args: { name: "database-admin-password" },
            },
            {
              name: "--protection-mode",
              description: "The protection mode of this Data Guard",
              args: {
                suggestions: [
                  "MAXIMUM_AVAILABILITY",
                  "MAXIMUM_PERFORMANCE",
                  "MAXIMUM_PROTECTION",
                ],
              },
            },
            optTransportType2,
            optIsActiveDataGuardEnabled,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update a Database based on the request parameters you provide",
          options: [
            optDatabaseId,
            optDbHomeId,
            {
              name: "--new-admin-password",
              description:
                "A new strong password for SYS, SYSTEM, and the plugbable database ADMIN user",
              args: { name: "new-admin-password" },
            },
            {
              name: "--old-tde-wallet-password",
              description: "The existing TDE wallet password",
              args: { name: "old-tde-wallet-password" },
            },
            {
              name: "--new-tde-wallet-password",
              description: "The new password to open the TDE wallet",
              args: { name: "new-tde-wallet-password" },
            },
            { name: "--storage-size-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--database-admin-password",
              description:
                "The administrator password of the primary database in this Data Guard association",
              args: { name: "database-admin-password" },
            },
            {
              name: "--protection-mode",
              description: "The protection mode of this Data Guard",
              args: {
                suggestions: [
                  "MAXIMUM_AVAILABILITY",
                  "MAXIMUM_PERFORMANCE",
                  "MAXIMUM_PROTECTION",
                ],
              },
            },
            optTransportType2,
            optIsActiveDataGuardEnabled,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMsuDetails,
            optAutoBackupEnabled,
            optRecoveryWindowInDays,
            optAutoBackupWindow,
            optAutoFullBackupDay,
            optAutoFullBackupWindow,
            {
              name: "--backup-destination",
              description: "Backup destination list",
              args: { name: "json" },
            },
            {
              name: "--zero-data-loss-enabled",
              description: "Enable Zero Data loss feature",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--manage-auto-failover",
              description:
                "The value to assign to the managed_auto_failover property of the standby to be created",
              args: { suggestions: ["ENABLE", "DISABLE"] },
            },
            {
              name: "--auto-failover-targets",
              description:
                "Defines auto failover targets for the current database",
              args: { name: "auto-failover-targets" },
            },
            optDatasafeRegistrationDetails,
            optFromJson,
          ],
        },
        {
          name: "upgrade",
          description: "Upgrades the specified Oracle Database instance",
          options: [
            optDatabaseId,
            optAction,
            {
              name: "--database-upgrade-source-details",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-database-from-backup",
          description: "Creates a new database in the specified Database Home",
          options: [
            optDatabase,
            optDbHomeId,
            optDbVersion3,
            optKmsKeyId,
            optKmsKeyVersionId,
            optOpcDryRun,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-upgrade-history",
          description:
            "Gets the upgrade history for a specified database in a bare metal or virtual machine DB system",
          options: [
            optDatabaseId,
            {
              name: "--upgrade-action",
              description:
                "A filter to return only upgradeHistoryEntries that match the specified Upgrade Action",
              args: { suggestions: ["PRECHECK", "UPGRADE", "ROLLBACK"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only upgradeHistoryEntries that match the given lifecycle state exactly",
              args: { suggestions: ["SUCCEEDED", "FAILED", "IN_PROGRESS"] },
            },
            optSortBy4,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "upgrade-with-database-software-image",
          options: [
            optDatabaseId,
            optAction,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsOlderVersionAcknowledged,
            {
              name: "--database-software-image-id",
              description:
                "The database software id used for upgrading the database",
              args: { name: "database-software-image-id" },
              isRequired: true,
            },
            optOptions,
            optFromJson,
          ],
        },
        {
          name: "upgrade-with-db-version",
          options: [
            optDatabaseId,
            optAction,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsOlderVersionAcknowledged,
            optDbVersion4,
            optOptions,
            optFromJson,
          ],
        },
        {
          name: "upgrade-with-db-home",
          options: [
            optDatabaseId,
            optAction,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIsOlderVersionAcknowledged,
            {
              name: "--db-home-id",
              description: "The OCID of the Database Home",
              args: { name: "db-home-id" },
              isRequired: true,
            },
            optOptions,
            optFromJson,
          ],
        },
        {
          name: "upgrade-rollback",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-from-backup",
          description:
            "Creates a new database in the given DB System from a backup",
          options: [
            optKmsKeyId,
            optKmsKeyVersionId,
            optDatabaseSoftwareImageId,
            optFreeformTags,
            optDefinedTags,
            optIsDesupportedVersion,
            optIsOlderVersionAcknowledged,
            optIsUnifiedAuditingEnabled,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optVmClusterId3,
            {
              name: "--db-system-id",
              description: "The Db System Id to restore this database under",
              args: { name: "db-system-id" },
            },
            optAdminPassword2,
            optBackupId,
            optBackupTdePassword,
            {
              name: "--db-name",
              description:
                "The display name of the database to be created from the backup",
              args: { name: "db-name" },
            },
            optDbUniqueName2,
            optSidPrefix,
            optDataStorageSizeInGbs2,
            optRecoStorageSizeInGbs,
            optMsuDetails,
            optDatasafeRegistrationDetails,
            optFromJson,
          ],
        },
        {
          name: "create-database-from-database",
          description:
            "Creates a new database in the specified Database Home from another database",
          options: [
            optDbHomeId,
            optDbVersion3,
            optKmsKeyId,
            optKmsKeyVersionId,
            optOpcDryRun,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optAdminPassword2,
            {
              name: "--database-id",
              description: "The OCID of the source database",
              args: { name: "database-id" },
              isRequired: true,
            },
            optBackupTdePassword,
            {
              name: "--db-name",
              description: "The display name of the database to be created",
              args: { name: "db-name" },
            },
            optSidPrefix,
            {
              name: "--recovery-appliance-vpc-password",
              description:
                "The password for the Recovery Appliance VPC administrator",
              args: { name: "recovery-appliance-vpc-password" },
            },
            {
              name: "--source-encryption-key-location-details",
              description:
                "The source encryption key location details for the database being created",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--point-in-time-recovery-timestamp",
              description:
                "The point in time of the original database from which the new database is created",
              args: { name: "point-in-time-recovery-timestamp" },
            },
            optDatasafeRegistrationDetails,
            optFromJson,
          ],
        },
        {
          name: "create-from-database",
          description:
            "Creates a new database in the given DB System or VM Cluster from another database",
          options: [
            optKmsKeyId,
            optKmsKeyVersionId,
            optDatabaseSoftwareImageId,
            optFreeformTags,
            optDefinedTags,
            optIsDesupportedVersion,
            optIsOlderVersionAcknowledged,
            optIsUnifiedAuditingEnabled,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optVmClusterId3,
            {
              name: "--db-system-id",
              description: "The Db System Id to clone this database under",
              args: { name: "db-system-id" },
            },
            optAdminPassword2,
            {
              name: "--database-id",
              description: "The OCID of the from-database",
              args: { name: "database-id" },
              isRequired: true,
            },
            optBackupTdePassword,
            {
              name: "--point-in-time-recovery-timestamp",
              description:
                "The point in time of the original database from which the new database is created",
              args: { name: "point-in-time-recovery-timestamp" },
            },
            {
              name: "--db-name",
              description: "The display name of the database to be created",
              args: { name: "db-name" },
            },
            optSidPrefix,
            {
              name: "--recovery-appliance-vpc-password",
              description:
                "The password for the Recovery Appliance VPC administrator",
              args: { name: "recovery-appliance-vpc-password" },
            },
            {
              name: "--source-encryption-key-location-details",
              description:
                "The source encryption key location details for the database being created",
              args: { name: "json" },
            },
            optDatasafeRegistrationDetails,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Perform a patch action for a given patch and database",
          options: [
            {
              name: "--database-id",
              description: "The OCID of the database",
              args: { name: "database-id" },
              isRequired: true,
            },
            optPatchAction,
            optPatchId2,
            {
              name: "--one-off-patches",
              description: "The list of one-off patches",
              args: { name: "json" },
            },
            {
              name: "--database-software-image-id",
              description: "The OCID of the database software image",
              args: { name: "database-software-image-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all databases in a given DB System",
          options: [
            optCompartmentId,
            optVmClusterId2,
            optBackupId2,
            optLimit,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            {
              name: "--db-system-id",
              description: "The OCID of the db system to list within",
              args: { name: "db-system-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-pdb-conversion-history",
          description:
            "Gets the pluggable database conversion history for a specified database in a bare metal or virtual machine DB",
          options: [
            optDatabaseId,
            {
              name: "--pdb-conversion-action",
              description:
                "A filter to return only the pluggable database conversion history entries that match the specified conversion",
              args: {
                suggestions: ["PRECHECK", "CONVERT", "SYNC", "SYNC_ROLLBACK"],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the pluggable database conversion history entries that match the specified lifecycle",
              args: { suggestions: ["SUCCEEDED", "FAILED", "IN_PROGRESS"] },
            },
            optSortBy4,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "convert-to-new-pdb-precheck",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--cdb-name",
              description: "The database name",
              args: { name: "cdb-name" },
              isRequired: true,
            },
            {
              name: "--cdb-admin-password",
              description:
                "A strong password for SYS, SYSTEM, and the plugbable database ADMIN user of the container database after",
              args: { name: "cdb-admin-password" },
              isRequired: true,
            },
            {
              name: "--non-cdb-tde-password",
              description:
                "The existing TDE wallet password of the non-container database",
              args: { name: "non-cdb-tde-password" },
              isRequired: true,
            },
            {
              name: "--additional-cdb-params",
              description: "Additional container database parameters",
              args: { name: "additional-cdb-params" },
            },
            {
              name: "--cdb-tde-password",
              description: "The database name",
              args: { name: "cdb-tde-password" },
            },
            {
              name: "--pdb-admin-password",
              description:
                "A strong password for plugbable database ADMIN user of the container database after conversion",
              args: { name: "pdb-admin-password" },
            },
            optFromJson,
          ],
        },
        {
          name: "convert-to-new-pdb",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--cdb-name",
              description: "The database name",
              args: { name: "cdb-name" },
              isRequired: true,
            },
            {
              name: "--cdb-admin-password",
              description:
                "A strong password for SYS, SYSTEM, and the plugbable database ADMIN user of the container database after",
              args: { name: "cdb-admin-password" },
              isRequired: true,
            },
            {
              name: "--non-cdb-tde-password",
              description:
                "The existing TDE wallet password of the non-container database",
              args: { name: "non-cdb-tde-password" },
              isRequired: true,
            },
            {
              name: "--additional-cdb-params",
              description: "Additional container database parameters",
              args: { name: "additional-cdb-params" },
            },
            {
              name: "--cdb-tde-password",
              description: "The database name",
              args: { name: "cdb-tde-password" },
            },
            {
              name: "--pdb-admin-password",
              description:
                "A strong password for plugbable database ADMIN user of the container database after conversion",
              args: { name: "pdb-admin-password" },
            },
            optFromJson,
          ],
        },
        {
          name: "convert-to-pdb-sync-rollback",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "convert-to-pdb-sync",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "set-oci-db-key-version",
          description: "Sets a new version of an existing Vault service key",
          options: [
            optDatabaseId,
            {
              name: "--kms-key-version-id",
              description:
                "The OCID of the key container version that is used in database transparent data encryption",
              args: { name: "kms-key-version-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-to-external-hsm-key-location",
          description:
            "Update the encryption key management location for the database",
          options: [
            optDatabaseId,
            {
              name: "--hsm-password",
              description:
                "Provide the HSM password as you would in RDBMS for External HSM",
              args: { name: "hsm-password" },
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
          name: "create-standby-database",
          description:
            "Creates a new standby database for the given source database id",
          options: [
            optDbHomeId,
            optDbVersion3,
            optKmsKeyId,
            optKmsKeyVersionId,
            optOpcDryRun,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDatabaseAdminPassword2,
            {
              name: "--db-unique-name",
              description:
                "Specifies the DB_UNIQUE_NAME of the standby database to be created",
              args: { name: "db-unique-name" },
            },
            {
              name: "--protection-mode",
              description:
                "The protection mode to set up between the primary and standby databases",
              args: {
                suggestions: ["MAXIMUM_AVAILABILITY", "MAXIMUM_PERFORMANCE"],
              },
            },
            {
              name: "--transport-type",
              description:
                "The redo transport type to use for the standby database to be created",
              args: { suggestions: ["SYNC", "ASYNC"] },
            },
            optIsActiveDataGuardEnabled,
            {
              name: "--source-database-id",
              description:
                "The OCID of the source (primary) database for the Data Guard group",
              args: { name: "source-database-id" },
              isRequired: true,
            },
            {
              name: "--source-tde-wallet-password",
              description:
                "The existing TDE wallet password of the source (primary) database",
              args: { name: "source-tde-wallet-password" },
            },
            {
              name: "--sid-prefix",
              description:
                "Specifies a prefix for the Oracle SID of the standby database to be created",
              args: { name: "sid-prefix" },
            },
            optFreeformTags,
            optDefinedTags,
            optHsmPassword,
            optDataStorageSizeInGbs2,
            optRecoStorageSizeInGbs,
            {
              name: "--manage-auto-failover",
              description:
                "The value to assign to the managed_auto_failover property of the standby to be created",
              args: { suggestions: ["ENABLE", "DISABLE"] },
            },
            {
              name: "--auto-failover-targets",
              description:
                "Defines auto failover targets for the current database",
              args: { name: "auto-failover-targets" },
            },
            optFromJson,
          ],
        },
        {
          name: "refresh-dataguard-health",
          description:
            "Refreshes the Data Guard health status for the specified database",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "reschedule-msu",
          description: "Reschedule the Managed Database Software Update",
          options: [
            optDatabaseId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-clone-db-from-db",
          description: "Creates a new database in the specified Database Home",
          options: [
            optDatabase,
            optDbHomeId,
            optDbVersion3,
            optKmsKeyId,
            optKmsKeyVersionId,
            optOpcDryRun,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-db-from-snapshot",
          description: "Creates a new database in the specified Database Home",
          options: [
            optDatabase,
            optDbHomeId,
            optDbVersion3,
            optKmsKeyId,
            optKmsKeyVersionId,
            optOpcDryRun,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-snapshot",
          description: "Creates a Database Snapshot",
          options: [
            {
              name: "--name",
              description: "The user-friendly name for the Database Snapshot",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--database-id",
              description: "The OCID of the Exadata Database",
              args: { name: "database-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState20,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-snapshot",
          description: "Deletes the specified Exadata Database Snapshot",
          options: [
            optDatabaseSnapshotId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-snapshot",
          description:
            "Gets information about the specified Exadata Database Snapshot",
          options: [optDatabaseSnapshotId, optFromJson],
        },
        {
          name: "list-snapshots",
          description:
            "Gets a list of the Exadata Database Snapshots in the specified compartment",
          options: [
            optCompartmentId3,
            optLimit,
            optPage,
            optSortBy3,
            optName,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Exadata Database Snapshots that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--database-id",
              description:
                "A filter to return only Exadata Database Snapshots that match the given Database Id",
              args: { name: "database-id" },
            },
            {
              name: "--cluster-id",
              description:
                "A filter to return only Exadata Database Snapshots that match the given VM cluster",
              args: { name: "cluster-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update-snapshot",
          description: "Updates a Database Snapshot",
          options: [
            optDatabaseSnapshotId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState20,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-database-backup",
      description: "An Autonomous AI Database backup",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new Autonomous AI Database backup for the specified database based on the provided request",
          options: [
            {
              name: "--autonomous-database-id",
              description: "The OCID of the Autonomous AI Database backup",
              args: { name: "autonomous-database-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the backup",
              args: { name: "display-name" },
            },
            {
              name: "--retention-period-in-days",
              description: "Retention period, in days, for long-term backups",
              args: { name: "integer" },
            },
            {
              name: "--is-long-term-backup",
              description: "Indicates whether the backup is long-term",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--backup-destination-details", args: { name: "json" } },
            optOpcDryRun,
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
                  "UPDATING",
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
          name: "delete",
          description: "Deletes a long-term backup",
          options: [
            optAutonomousDatabaseBackupId,
            optIfMatch,
            optOpcDryRun,
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
            "Gets information about the specified Autonomous AI Database backup",
          options: [optAutonomousDatabaseBackupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of Autonomous AI Database backups based on either the autonomousDatabaseId or compartmentId",
          options: [
            {
              name: "--autonomous-database-id",
              description: "The database OCID",
              args: { name: "autonomous-database-id" },
            },
            optCompartmentId3,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
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
            },
            optDisplayName,
            {
              name: "--type",
              description:
                "A filter to return only backups that matches with the given type of Backup",
              args: { name: "type" },
            },
            {
              name: "--backup-destination-id",
              description:
                "A filter to return only resources that have the given backup destination id",
              args: { name: "backup-destination-id" },
            },
            {
              name: "--key-store-id",
              description:
                "A filter to return only resources that have the given key store id",
              args: { name: "key-store-id" },
            },
            optInfrastructureType,
            {
              name: "--is-pitr-eligible",
              description:
                "Filters backups based on the current Autonomous AI Database configuration",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Autonomous AI Database backup of the specified database based on the request parameters",
          options: [
            optAutonomousDatabaseBackupId,
            {
              name: "--retention-period-in-days",
              description: "Retention period, in days, for long-term backups",
              args: { name: "integer" },
            },
            optIfMatch,
            optOpcDryRun,
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
                  "UPDATING",
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
      name: "gi-version",
      description: "The Oracle Grid Infrastructure (GI) version",
      subcommands: [
        {
          name: "list",
          description: "Gets a list of supported GI versions",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optShape2,
            {
              name: "--availability-domain",
              description: "The target availability domain",
              args: { name: "availability-domain" },
            },
            optResourceId,
            optShapeAttribute,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-backup-job",
      description:
        "Provides all the details that apply to an external backup job",
      subcommands: [
        {
          name: "complete",
          description:
            "Changes the status of the standalone backup resource to ACTIVE after the backup is created from",
          options: [
            optBackupId,
            {
              name: "--tde-wallet-path",
              description:
                "If the database being backed up is TDE enabled, this will be the path to the associated TDE wallet in Object",
              args: { name: "tde-wallet-path" },
            },
            {
              name: "--cf-backup-handle",
              description: "The handle of the control file backup",
              args: { name: "cf-backup-handle" },
            },
            {
              name: "--spf-backup-handle",
              description: "The handle of the spfile backup",
              args: { name: "spf-backup-handle" },
            },
            {
              name: "--sql-patches",
              description:
                "The list of SQL patches that need to be applied to the backup during the restore",
              args: { name: "json" },
            },
            {
              name: "--data-size",
              description: "The size of the data in the database, in megabytes",
              args: { name: "integer" },
            },
            {
              name: "--redo-size",
              description: "The size of the redo in the database, in megabytes",
              args: { name: "integer" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new backup resource and returns the information the caller needs to back up an on-premises Oracle",
          options: [
            {
              name: "--availability-domain",
              description: "The targeted availability domain for the backup",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where this backup should be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the backup",
              args: { name: "display-name" },
              isRequired: true,
            },
            optDbVersion4,
            {
              name: "--db-name",
              description:
                "The name of the database from which the backup is being taken",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--external-database-identifier",
              description: "The DBID of the Oracle Database being backed up",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--character-set",
              description: "The character set for the database",
              args: { name: "character-set" },
              isRequired: true,
            },
            {
              name: "--ncharacter-set",
              description: "The national character set for the database",
              args: { name: "ncharacter-set" },
              isRequired: true,
            },
            {
              name: "--database-mode",
              description:
                "The mode (single instance or RAC) of the database being backed up",
              args: { suggestions: ["SI", "RAC"] },
              isRequired: true,
            },
            optDatabaseEdition2,
            {
              name: "--db-unique-name",
              description:
                "The DB_UNIQUE_NAME of the Oracle Database being backed up",
              args: { name: "db-unique-name" },
            },
            {
              name: "--pdb-name",
              description: "The pluggable database name",
              args: { name: "pdb-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified external backup job",
          options: [optBackupId, optFromJson],
        },
      ],
    },
    {
      name: "autonomous-database-character-sets",
      description: "The Oracle Autonomous AI Database supported character sets",
      subcommands: [
        {
          name: "list",
          description: "Gets a list of supported character sets",
          options: [
            {
              name: "--is-shared",
              description:
                "Specifies whether this request is for an Autonomous AI Database Serverless instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-dedicated",
              description:
                "Specifies if the request is for an Autonomous AI Database Dedicated instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--character-set-type",
              description:
                "Specifies whether this request pertains to database character sets or national character sets",
              args: { suggestions: ["DATABASE", "NATIONAL"] },
            },
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "basecc-vm-cluster-update",
      description: "Maintenance update details for a BaseDB-C@C VM cluster",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about a specified maintenance update package for a BaseDB-C@C VM cluster",
          options: [optBaseccVmClusterId, optUpdateId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the maintenance updates that can be applied to the specified BaseDB-C@C VM cluster",
          options: [
            optBaseccVmClusterId,
            optUpdateType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: ["AVAILABLE", "SUCCESS", "IN_PROGRESS", "FAILED"],
              },
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
      name: "exadata-infrastructure-un-allocated-resources",
      description:
        "Displays details of unallocated resources for the Exadata Cloud@Customer infrastructure",
      subcommands: [
        {
          name: "get",
          description:
            "Gets un allocated resources information for the specified Exadata infrastructure",
          options: [
            optExadataInfrastructureId,
            {
              name: "--db-servers",
              description: "The list of OCIDs of the Db servers",
              args: { name: "db-servers" },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-vm-cluster",
      description: "Details of the Autonomous VM cluster",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an Autonomous VM cluster and its dependent resources to another compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Autonomous VM cluster to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optAutonomousVmClusterId,
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
            "Creates an Autonomous VM cluster for Exadata Cloud@Customer",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Autonomous VM cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--exadata-infrastructure-id",
              description: "The OCID of the Exadata infrastructure",
              args: { name: "exadata-infrastructure-id" },
              isRequired: true,
            },
            {
              name: "--vm-cluster-network-id",
              description: "The OCID of the VM cluster network",
              args: { name: "vm-cluster-network-id" },
              isRequired: true,
            },
            {
              name: "--time-zone",
              description: "The time zone to use for the Autonomous VM cluster",
              args: { name: "time-zone" },
            },
            {
              name: "--is-local-backup-enabled",
              description:
                "If true, database backup on local Exadata storage is configured for the Autonomous VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the Autonomous VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--total-container-databases",
              description:
                "The total number of Autonomous Container Databases that can be created",
              args: { name: "integer" },
            },
            {
              name: "--cpu-core-count-per-node",
              description:
                "The number of CPU cores to enable per VM cluster node",
              args: { name: "integer" },
            },
            {
              name: "--compute-model",
              description: "The compute model of the Autonomous VM Cluster",
              args: { suggestions: ["ECPU", "OCPU"] },
            },
            optMemoryPerOracleComputeUnitInGbs,
            {
              name: "--autonomous-data-storage-size-in-tbs",
              description:
                "The data disk group size to be allocated for Autonomous Databases, in TBs",
              args: { name: "autonomous-data-storage-size-in-tbs" },
            },
            optMaintenanceWindowDetails,
            {
              name: "--db-servers",
              description: "The list of OCIDs of the Db servers",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--scan-listener-port-tls",
              description: "The SCAN Listener TLS port number",
              args: { name: "integer" },
            },
            {
              name: "--scan-listener-port-non-tls",
              description: "The SCAN Listener Non TLS port number",
              args: { name: "integer" },
            },
            {
              name: "--is-mtls-enabled",
              description:
                "Enable mutual TLS(mTLS) authentication for database while provisioning a VMCluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDistributionAlgorithm,
            {
              name: "--sga-percentage",
              description:
                "Percentage of ECPU memory allocated for SGA(System Global Area)",
              args: { name: "number" },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Autonomous VM cluster in an Exadata Cloud@Customer system",
          options: [
            optAutonomousVmClusterId,
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
            "Gets information about the specified Autonomous VM cluster for an Exadata Cloud@Customer system",
          options: [optAutonomousVmClusterId, optFromJson],
        },
        {
          name: "get-autonomous-vm-cluster-resource-usage",
          description:
            "Get the resource usage details for the specified Autonomous Exadata VM cluster",
          options: [optAutonomousVmClusterId, optFromJson],
        },
        {
          name: "list-autonomous-vm-cluster-acd-resource-usage",
          description:
            "Gets the list of resource usage details for all the Autonomous Container Database in the specified Autonomous",
          options: [
            optAutonomousVmClusterId,
            optCompartmentId3,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of Exadata Cloud@Customer Autonomous VM clusters in the specified compartment",
          options: [
            optCompartmentId,
            optExadataInfrastructureId2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "restart-autonomous-vm-cluster-ords",
          description:
            "Restarts Oracle REST Data Services (ORDS) for Autonomous Exadata VM cluster",
          options: [
            optAutonomousVmClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rotate-autonomous-vm-cluster-ords-certs",
          description:
            "Rotates the Oracle REST Data Services (ORDS) certificates for Autonomous Exadata VM cluster",
          options: [
            optCertificateGenerationType,
            optAutonomousVmClusterId,
            optCertificateId,
            optCertificateAuthorityId,
            optCaBundleId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rotate-autonomous-vm-cluster-ssl-certs",
          description:
            "Rotates the SSL certificates for Autonomous Exadata VM cluster",
          options: [
            optCertificateGenerationType,
            optAutonomousVmClusterId,
            optCertificateId,
            optCertificateAuthorityId,
            optCaBundleId,
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
            "Updates the specified Autonomous VM cluster for the Exadata Cloud@Customer system.To update an Autonomous VM",
          options: [
            optAutonomousVmClusterId,
            optMaintenanceWindowDetails,
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the Autonomous VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--autonomous-data-storage-size-in-tbs",
              description:
                "The new value of autonomous data storage (in TBs) for the Autonomous VM cluster",
              args: { name: "autonomous-data-storage-size-in-tbs" },
            },
            {
              name: "--cpu-core-count-per-node",
              description:
                "The new value of cpus per Autonomous VM cluster per node for the Autonomous VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--total-container-databases",
              description:
                "The new value of maximum number of ACDs for the Autonomous VM cluster",
              args: { name: "integer" },
            },
            optMemoryPerOracleComputeUnitInGbs,
            {
              name: "--sga-percentage",
              description:
                "The new value of percentage of ECPU memory allocated for SGA(System Global Area)",
              args: { name: "number" },
            },
            {
              name: "--time-zone",
              description: "The time zone to use for the Autonomous VM cluster",
              args: { name: "time-zone" },
            },
            {
              name: "--scan-listener-port-tls",
              description: "The SCAN Listener TLS port number",
              args: { name: "integer" },
            },
            {
              name: "--scan-listener-port-non-tls",
              description: "The SCAN Listener Non TLS port number",
              args: { name: "integer" },
            },
            {
              name: "--is-mtls-enabled",
              description:
                "Enable mutual TLS(mTLS) authentication for database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDistributionAlgorithm,
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
      name: "key-store",
      description:
        "A key store to connect to an on-premise encryption key appliance like Oracle Key Vault",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the key store resource to the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the key store to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optKeyStoreId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "confirm-key-store-details-are-correct",
          description:
            "This is for user to confirm to DBaaS that the Oracle Key Valut (OKV) connection IPs",
          options: [
            optKeyStoreId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a key store",
          options: [
            optKeyStoreId2,
            optIfMatch,
            optForce,
            optWaitForState19,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified key store",
          options: [optKeyStoreId2, optFromJson],
        },
        {
          name: "create-oracle-key-vault-details",
          description: "Creates a Key Store",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The user-friendly name for the key store",
              args: { name: "display-name" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState19,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-ips",
              description:
                "The list of Oracle Key Vault connection IP addresses",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--admin-username",
              description:
                "The administrator username to connect to Oracle Key Vault",
              args: { name: "admin-username" },
              isRequired: true,
            },
            {
              name: "--vault-id",
              description: "The OCID of the Oracle Cloud Infrastructure vault",
              args: { name: "vault-id" },
              isRequired: true,
            },
            {
              name: "--secret-id",
              description: "The OCID of the Oracle Cloud Infrastructure secret",
              args: { name: "secret-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-oracle-key-vault-details",
          description: "Edit the key store",
          options: [
            optKeyStoreId2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState19,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-ips",
              description:
                "The list of Oracle Key Vault connection IP addresses",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--admin-username",
              description:
                "The administrator username to connect to Oracle Key Vault",
              args: { name: "admin-username" },
              isRequired: true,
            },
            {
              name: "--vault-id",
              description: "The OCID of the Oracle Cloud Infrastructure vault",
              args: { name: "vault-id" },
              isRequired: true,
            },
            {
              name: "--secret-id",
              description: "The OCID of the Oracle Cloud Infrastructure secret",
              args: { name: "secret-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of key stores in the specified compartment",
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
      name: "maintenance-run-history",
      description: "Details of a maintenance run history",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about the specified maintenance run history",
          options: [
            {
              name: "--maintenance-run-history-id",
              description: "The maintenance run history OCID",
              args: { name: "maintenance-run-history-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of the maintenance run histories in the specified compartment",
          options: [
            optCompartmentId,
            optTargetResourceId,
            optTargetResourceType,
            {
              name: "--maintenance-type",
              description: "The maintenance type",
              args: { suggestions: ["PLANNED", "UNPLANNED"] },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["TIME_SCHEDULED", "TIME_ENDED", "DISPLAYNAME"],
              },
            },
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "The state of the maintenance run history",
              args: {
                suggestions: [
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "SKIPPED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "CANCELED",
                  "PARTIAL_SUCCESS",
                ],
              },
            },
            optAvailabilityDomain2,
            {
              name: "--maintenance-subtype",
              description: "The sub-type of the maintenance run",
              args: {
                suggestions: [
                  "QUARTERLY",
                  "HARDWARE",
                  "CRITICAL",
                  "INFRASTRUCTURE",
                  "DATABASE",
                  "ONEOFF",
                  "SECURITY_MONTHLY",
                  "TIMEZONE",
                  "CUSTOM_DATABASE_SOFTWARE_IMAGE",
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
      name: "cloud-autonomous-vm-cluster",
      description: "Details of the cloud Autonomous VM cluster",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an Autonomous Exadata VM cluster in the Oracle cloud and its dependent resources to another compartment",
          options: [
            optCompartmentId2,
            optCloudAutonomousVmClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-cloud-autonomous-vm-cluster-subscription",
          description:
            "Associate a Cloud Autonomous VM cluster with a different subscription",
          options: [
            optCloudAutonomousVmClusterId,
            optSubscriptionId,
            optIsDefault,
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
            "Creates an Autonomous Exadata VM cluster in the Oracle cloud",
          options: [
            optCompartmentId2,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet the cloud Autonomous VM Cluster is associated with",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the cloud Autonomous VM cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--cloud-exadata-infrastructure-id",
              description: "The OCID of the cloud Exadata infrastructure",
              args: { name: "cloud-exadata-infrastructure-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "User defined description of the cloud Autonomous VM cluster",
              args: { name: "description" },
            },
            {
              name: "--total-container-databases",
              description:
                "The total number of Autonomous Container Databases that can be created",
              args: { name: "integer" },
            },
            {
              name: "--cpu-core-count-per-node",
              description:
                "The number of CPU cores to be enabled per VM cluster node",
              args: { name: "integer" },
            },
            optMemoryPerOracleComputeUnitInGbs,
            {
              name: "--autonomous-data-storage-size-in-tbs",
              description:
                "The data disk group size to be allocated for Autonomous AI Databases, in TBs",
              args: { name: "autonomous-data-storage-size-in-tbs" },
            },
            {
              name: "--cluster-time-zone",
              description:
                "The time zone to use for the Cloud Autonomous VM cluster",
              args: { name: "cluster-time-zone" },
            },
            {
              name: "--compute-model",
              description:
                "The compute model of the Cloud Autonomous VM Cluster",
              args: { suggestions: ["ECPU", "OCPU"] },
            },
            {
              name: "--is-mtls-enabled-vm-cluster",
              description:
                "Enable mutual TLS(mTLS) authentication for database at time of provisioning a VMCluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDistributionAlgorithm,
            {
              name: "--sga-percentage",
              description:
                "Percentage of ECPU memory allocated for SGA(System Global Area)",
              args: { name: "number" },
            },
            {
              name: "--db-servers",
              description: "The list of database servers",
              args: { name: "json" },
            },
            optMaintenanceWindowDetails,
            {
              name: "--scan-listener-port-tls",
              description: "The SCAN Listener TLS port",
              args: { name: "integer" },
            },
            {
              name: "--scan-listener-port-non-tls",
              description: "The SCAN Listener Non TLS port",
              args: { name: "integer" },
            },
            optLicenseModel,
            optNsgIds,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optSubscriptionId,
            optOpcDryRun,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Autonomous Exadata VM cluster in the Oracle cloud",
          options: [
            optCloudAutonomousVmClusterId,
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
            "Gets information about the specified Autonomous Exadata VM cluster in the Oracle cloud",
          options: [optCloudAutonomousVmClusterId, optFromJson],
        },
        {
          name: "get-cloud-autonomous-vm-cluster-resource-usage",
          description:
            "Get the resource usage details for the specified Cloud Autonomous Exadata VM cluster",
          options: [optCloudAutonomousVmClusterId, optFromJson],
        },
        {
          name: "list-cloud-autonomous-vm-cluster-acd-resource-usage",
          description:
            "Gets the list of resource usage details for all the Cloud Autonomous Container Database in the specified",
          options: [
            optCloudAutonomousVmClusterId,
            optCompartmentId3,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists Autonomous Exadata VM clusters in the Oracle cloud",
          options: [
            optCompartmentId,
            {
              name: "--cloud-exadata-infrastructure-id",
              description:
                "If provided, filters the results for the specified cloud Exadata infrastructure",
              args: { name: "cloud-exadata-infrastructure-id" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAvailabilityDomain2,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "register-cloud-autonomous-vm-cluster-pkcs",
          description: "Install the PKCS11 driver for given keystore type",
          options: [
            optCloudAutonomousVmClusterId,
            optTdeKeyStoreType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "restart-cloud-autonomous-vm-cluster-ords",
          description:
            "Restarts Oracle REST Data Services (ORDS) for a cloud Autonomous Exadata VM cluster",
          options: [
            optCloudAutonomousVmClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rotate-cloud-autonomous-vm-cluster-ords-certs",
          description:
            "Rotates the Oracle REST Data Services (ORDS) certificates for a cloud Autonomous Exadata VM cluster",
          options: [
            optCloudAutonomousVmClusterId,
            optCertificateGenerationType,
            optCertificateId,
            optCertificateAuthorityId,
            optCaBundleId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rotate-cloud-autonomous-vm-cluster-ssl-certs",
          description:
            "Rotates the SSL certficates for a cloud Autonomous Exadata VM cluster",
          options: [
            optCloudAutonomousVmClusterId,
            optCertificateGenerationType,
            optCertificateId,
            optCertificateAuthorityId,
            optCaBundleId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unregister-cloud-autonomous-vm-cluster-pkcs",
          description: "Uninstall the PKCS11 driver for given keystore type",
          options: [
            optCloudAutonomousVmClusterId,
            optTdeKeyStoreType,
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
            "Updates the specified Autonomous Exadata VM cluster in the Oracle cloud",
          options: [
            optCloudAutonomousVmClusterId,
            {
              name: "--description",
              description:
                "User defined description of the cloud Autonomous VM cluster",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the cloud Autonomous VM cluster",
              args: { name: "display-name" },
            },
            optMaintenanceWindowDetails,
            {
              name: "--autonomous-data-storage-size-in-tbs",
              description:
                "The new value of autonomous data storage (in TBs) for the Autonomous VM cluster",
              args: { name: "autonomous-data-storage-size-in-tbs" },
            },
            {
              name: "--cpu-core-count-per-node",
              description:
                "The new value of cpus per Autonomous VM cluster per node for the Autonomous VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--total-container-databases",
              description:
                "The new value of maximum number of ACDs for the Autonomous VM cluster",
              args: { name: "integer" },
            },
            optMemoryPerOracleComputeUnitInGbs,
            {
              name: "--sga-percentage",
              description:
                "The new value of percentage of ECPU memory allocated for SGA(System Global Area)",
              args: { name: "number" },
            },
            optLicenseModel,
            optNsgIds,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--cluster-time-zone",
              description: "The time zone to use for the Autonomous VM cluster",
              args: { name: "cluster-time-zone" },
            },
            {
              name: "--scan-listener-port-tls",
              description: "The SCAN Listener TLS port",
              args: { name: "integer" },
            },
            {
              name: "--scan-listener-port-non-tls",
              description: "The SCAN Listener Non TLS port",
              args: { name: "integer" },
            },
            {
              name: "--is-mtls-enabled-vm-cluster",
              description:
                "Enable mutual TLS(mTLS) authentication for database at time of provisioning a VMCluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDistributionAlgorithm,
            optSecurityAttributes,
            optIfMatch,
            optOpcDryRun,
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
      name: "cloud-vm-cluster",
      description: "Details of the cloud VM cluster",
      subcommands: [
        {
          name: "add",
          description: "Add Virtual Machines to the Cloud VM cluster",
          options: [
            {
              name: "--db-servers",
              description:
                "The list of ExaCS DB servers for the cluster to be added",
              args: { name: "json" },
              isRequired: true,
            },
            optCloudVmClusterId,
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
            "Moves a cloud VM cluster and its dependent resources to another compartment",
          options: [
            optCompartmentId2,
            optCloudVmClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-cloud-vm-cluster-subscription",
          description:
            "Associate a cloud VM cluster with a different subscription",
          options: [
            optCloudVmClusterId,
            optSubscriptionId,
            optIsDefault,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a cloud VM cluster",
          options: [
            optCompartmentId2,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet associated with the cloud VM cluster",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--backup-subnet-id",
              description:
                "The OCID of the backup network subnet associated with the cloud VM cluster",
              args: { name: "backup-subnet-id" },
              isRequired: true,
            },
            {
              name: "--cpu-core-count",
              description:
                "For fixed shapes, this is the total number of OCPUs to enable across the VM cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the cloud VM cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description: "The hostname for the cloud VM cluster",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: "--gi-version",
              description:
                "A valid Oracle Grid Infrastructure (GI) software version",
              args: { name: "gi-version" },
              isRequired: true,
            },
            optSubscriptionId,
            {
              name: "--ocpu-count",
              description:
                "The number of OCPU cores to enable for a cloud VM cluster",
              args: { name: "number" },
            },
            optMemorySizeInGbs,
            optDbNodeStorageSizeInGbs,
            optDataStorageSizeInTbs2,
            {
              name: "--db-servers",
              description: "The list of DB servers",
              args: { name: "json" },
            },
            {
              name: "--cluster-name",
              description: "The cluster name for cloud VM cluster",
              args: { name: "cluster-name" },
            },
            optDataStoragePercentage,
            optRecoStoragePercentage,
            optSparseStoragePercentage,
            {
              name: "--domain",
              description: "A domain name used for the cloud VM cluster",
              args: { name: "domain" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the cloud VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--time-zone",
              description: "The time zone to use for the cloud VM cluster",
              args: { name: "time-zone" },
            },
            {
              name: "--scan-listener-port-tcp",
              description: "The TCP Single Client Access Name (SCAN) port",
              args: { name: "integer" },
            },
            {
              name: "--scan-listener-port-tcp-ssl",
              description: "The TCPS Single Client Access Name (SCAN) port",
              args: { name: "integer" },
            },
            {
              name: "--private-zone-id",
              description:
                "The private zone id in which DNS records need to be created",
              args: { name: "private-zone-id" },
            },
            optNsgIds,
            optBackupNetworkNsgIds,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optSystemVersion,
            optIsOlderVersionAcknowledged,
            optFileSystemConfigurationDetails,
            optCloudAutomationUpdateDetails,
            {
              name: "--vm-cluster-type",
              description:
                "The vmcluster type for the VM cluster/Cloud VM cluster",
              args: { suggestions: ["REGULAR", "DEVELOPER"] },
            },
            {
              name: "--vm-file-system-storage-type",
              description:
                "Specifies the type of file system storage and supported values are LOCAL and EXASCALE",
              args: { suggestions: ["LOCAL", "EXASCALE"] },
            },
            optVmBackupStorageType,
            optOpcDryRun,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCloudExaInfraId,
            {
              name: "--is-sparse-diskgroup",
              description:
                "If true, the sparse disk group is configured for the cloud VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-local-backup",
              description:
                "If true, database backup on local Exadata storage is configured for the cloud VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to use for SSH access to the Cloud VM Cluster",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--vault-id",
              description: "The OCID of the Exadata Database Storage Vault",
              args: { name: "vault-id" },
            },
            optDataCollectionOptions2,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified cloud VM cluster",
          options: [
            optCloudVmClusterId,
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
          description: "Gets information about the specified cloud VM cluster",
          options: [optCloudVmClusterId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the cloud VM clusters in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only cloud VM clusters that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "MAINTENANCE_IN_PROGRESS",
                ],
              },
            },
            optDisplayName,
            {
              name: "--vm-cluster-type",
              description:
                "A filter to return only cloud vmclusters that match the given cloud vmcluster type exactly",
              args: { suggestions: ["REGULAR", "DEVELOPER"] },
            },
            optAll,
            optPageSize,
            {
              name: "--cloud-exa-infra-id",
              description:
                "If provided, filters the results for the given Cloud Exadata Infrastructure",
              args: { name: "cloud-exa-infra-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "register-cloud-vm-cluster-pkcs",
          description: "Install the PKCS11 driver for given keystore type",
          options: [
            optCloudVmClusterId,
            optTdeKeyStoreType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove Virtual Machines from the Cloud VM cluster",
          options: [
            {
              name: "--db-servers",
              description:
                "The list of ExaDB-D DB server for the cluster to be removed",
              args: { name: "json" },
              isRequired: true,
            },
            optCloudVmClusterId,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unregister-cloud-vm-cluster-pkcs",
          description: "Uninstall the PKCS11 driver for given keystore type",
          options: [
            optCloudVmClusterId,
            optTdeKeyStoreType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified cloud VM cluster",
          options: [
            optCloudVmClusterId,
            {
              name: "--display-name",
              description: "The user-friendly name for the cloud VM cluster",
              args: { name: "display-name" },
            },
            {
              name: "--cpu-core-count",
              description:
                "For fixed shapes, this is the total number of OCPUs to enable across the VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--ocpu-count",
              description:
                "The number of OCPU cores to enable for a cloud VM cluster",
              args: { name: "number" },
            },
            optMemorySizeInGbs,
            optDbNodeStorageSizeInGbs,
            optDataStorageSizeInTbs2,
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the cloud VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            optNsgIds,
            optBackupNetworkNsgIds,
            {
              name: "--compute-nodes",
              description:
                "The list of compute servers to be added to the cloud VM cluster",
              args: { name: "json" },
            },
            {
              name: "--storage-size-in-gbs",
              description: "The disk group size to be allocated in GBs",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optFileSystemConfigurationDetails,
            optCloudAutomationUpdateDetails,
            optVmBackupStorageType,
            optDataStoragePercentage,
            optRecoStoragePercentage,
            optSparseStoragePercentage,
            {
              name: "--is-local-backup-enabled",
              description:
                "If true, database backup on local Exadata storage is configured for the cloud VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-sparse-diskgroup-enabled",
              description:
                "If true, sparse disk group is configured for the cloud VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--update-action",
              description: "The action to perform on the update",
              args: { name: "update-action" },
            },
            {
              name: "--update-mode",
              description: "The update mode applicable to OS Update",
              args: { name: "update-mode" },
            },
            {
              name: "--update-id",
              description: "The OCID of the maintenance update",
              args: { name: "update-id" },
            },
            {
              name: "--gi-image-id",
              description: "The OCID of the grid infrastructure software image",
              args: { name: "gi-image-id" },
            },
            {
              name: "--gi-home-id",
              description: "The OCID of the grid infrastructure home",
              args: { name: "gi-home-id" },
            },
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to use for SSH access to the cloud VM cluster",
              args: { name: "file", template: "filepaths" },
            },
            optDataCollectionOptions2,
            optIsOlderVersionAcknowledged,
            optFromJson,
          ],
        },
        {
          name: "get-exadata-iorm-config",
          description:
            "Gets the IORM configuration for the specified cloud VM cluster in an Exadata Cloud Service instance",
          options: [optCloudVmClusterId, optFromJson],
        },
        {
          name: "update-exadata-iorm-config",
          description:
            "Updates the IORM settings for the specified cloud VM cluster in an Exadata Cloud Service instance",
          options: [
            optCloudVmClusterId,
            {
              name: "--objective",
              description: 'Value for the IORM objective Default is "Auto"',
              args: {
                suggestions: [
                  "LOW_LATENCY",
                  "HIGH_THROUGHPUT",
                  "BALANCED",
                  "AUTO",
                  "BASIC",
                ],
              },
            },
            {
              name: "--db-plans",
              description:
                "Array of IORM Setting for all the database in this Exadata DB System",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get-update",
          description:
            "Gets information about a specified maintenance update package for a cloud VM cluster",
          options: [optCloudVmClusterId, optUpdateId, optFromJson],
        },
        {
          name: "list-updates",
          description:
            "Lists the maintenance updates that can be applied to the specified cloud VM cluster",
          options: [
            optCloudVmClusterId,
            optUpdateType,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-update-history",
          description:
            "Gets the maintenance update history details for the specified update history entry",
          options: [optCloudVmClusterId, optUpdateHistoryEntryId, optFromJson],
        },
        {
          name: "list-update-histories",
          description:
            "Gets the history of the maintenance update actions performed on the specified cloud VM cluster",
          options: [
            optCloudVmClusterId,
            optUpdateType,
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
      name: "exascale-db-storage-vault",
      description: "Details of the Exadata Database Storage Vault",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Exadata Database Storage Vault to another compartment",
          options: [
            optCompartmentId2,
            optExascaleDbStorageVaultId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-exascale-db-storage-vault-subscription",
          description:
            "Associate a Exadata Database Storage Vault with a different subscription",
          options: [
            optExascaleDbStorageVaultId,
            optSubscriptionId,
            optIsDefault,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an Exadata Database Storage Vault",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata Database Storage Vault",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The name of the availability domain in which the Exadata Database Storage Vault is located",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Exadata Database Storage Vault description",
              args: { name: "description" },
            },
            {
              name: "--time-zone",
              description:
                "The time zone that you want to use for the Exadata Database Storage Vault",
              args: { name: "time-zone" },
            },
            optFreeformTags,
            optDefinedTags,
            optClusterPlacementGroupId,
            optSubscriptionId,
            {
              name: "--is-autoscale-enabled",
              description:
                "Indicates if autoscale feature is enabled for the Database Storage Vault",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--autoscale-limit-in-gbs",
              description:
                "The maximum limit, in gigabytes, to which the Vault storage size can automatically scale when auto scaling",
              args: { name: "integer" },
            },
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--high-capacity-storage-gb",
              description: "The size of High Capacity database storage (GB)",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--flash-cache-in-percent",
              description:
                "The size of additional Flash Cache in percentage of High Capacity database storage",
              args: { name: "integer" },
            },
            {
              name: "--exa-infra-id",
              description: "The OCID of the Exadata infrastructure",
              args: { name: "exa-infra-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Exadata Database Storage Vault",
          options: [
            optExascaleDbStorageVaultId,
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
            "Gets information about the specified Exadata Database Storage Vaults in the specified compartment",
          options: [optExascaleDbStorageVaultId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the Exadata Database Storage Vaults in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Exadata Database Storage Vaults that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            optClusterPlacementGroupId2,
            {
              name: "--attached-shape-attributes-not-equal-to",
              description:
                "A filter to return only Exadata Database Storage Vaults which do not match the given attachedShapeAttributes",
              args: { name: "attached-shape-attributes-not-equal-to" },
            },
            {
              name: "--attached-shape-attributes",
              description:
                "A filter to return only Exadata Database Storage Vaults which match the given attachedShapeAttributes or has",
              args: { name: "attached-shape-attributes" },
            },
            {
              name: "--vm-cluster-count-less-than-or-equal-to",
              description:
                "A filter to return only Exadata Database Storage Vaults with associated Exadata VM Clusters less than",
              args: { name: "integer" },
            },
            {
              name: "--vm-cluster-count-greater-than-or-equal-to",
              description:
                "A filter to return only Exadata Database Storage Vaults with associated Exadata VM Clusters greater than",
              args: { name: "integer" },
            },
            optDisplayName,
            optAll,
            optPageSize,
            {
              name: "--exa-infra-id",
              description:
                "A filter to return only list of Vaults that are linked to the exadata infrastructure Id",
              args: { name: "exa-infra-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified Exadata Database Storage Vault",
          options: [
            optExascaleDbStorageVaultId,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata Database Storage Vault",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Exadata Database Storage Vault description",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-autoscale-enabled",
              description:
                "Indicates if autoscale feature is enabled for the Database Storage Vault",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--autoscale-limit-in-gbs",
              description:
                "The maximum limit, in gigabytes, to which the Vault storage size can automatically scale when auto scaling",
              args: { name: "integer" },
            },
            optIfMatch,
            optForce2,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--high-capacity-storage-gb",
              description: "The size of High Capacity database storage (GB)",
              args: { name: "integer" },
            },
            {
              name: "--flash-cache-in-percent",
              description:
                "The size of additional Flash Cache in percentage of High Capacity database storage",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-db-version",
      description: "The supported Autonomous AI Database version",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of supported Autonomous AI Database versions",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--db-workload",
              description:
                "A filter to return only Autonomous AI Database resources that match the specified workload type",
              args: { suggestions: ["OLTP", "DW", "AJD", "APEX", "LH"] },
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
      name: "autonomous-db-preview-version",
      description: "The Autonomous AI Database preview version",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of supported Autonomous AI Database versions",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["DBWORKLOAD"] },
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
      name: "vm-cluster",
      description: "Details of the VM cluster resource",
      subcommands: [
        {
          name: "add",
          description: "Add Virtual Machines to the VM cluster",
          options: [
            {
              name: "--db-servers",
              description:
                "The list of Exacc DB servers for the cluster to be added",
              args: { name: "json" },
              isRequired: true,
            },
            optVmClusterId,
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
            "Moves a VM cluster and its dependent resources to another compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the VM cluster to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optVmClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an Exadata Cloud@Customer VM cluster",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The user-friendly name for the VM cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--exadata-infrastructure-id",
              description: "The OCID of the Exadata infrastructure",
              args: { name: "exadata-infrastructure-id" },
              isRequired: true,
            },
            {
              name: "--cpu-core-count",
              description:
                "The number of ECPUs (X11M and higher) or number of OCPUs (X10M and earlier) to enable for the VM cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--ssh-public-keys",
              description:
                "The public key portion of one or more key pairs used for SSH access to the VM cluster",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vm-cluster-network-id",
              description: "The OCID of the VM cluster network",
              args: { name: "vm-cluster-network-id" },
              isRequired: true,
            },
            {
              name: "--gi-version",
              description:
                "The Oracle Grid Infrastructure software version for the VM cluster",
              args: { name: "gi-version" },
              isRequired: true,
            },
            {
              name: "--ocpu-count",
              description:
                "The number of OCPU cores to enable for the VM cluster",
              args: { name: "number" },
            },
            optMemorySizeInGbs,
            optDbNodeStorageSizeInGbs,
            optDataStorageSizeInTbs2,
            {
              name: "--data-storage-size-in-gbs",
              description: "The data disk group size to be allocated in GBs",
              args: { name: "data-storage-size-in-gbs" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            optDataStoragePercentage,
            optRecoStoragePercentage,
            optSparseStoragePercentage,
            {
              name: "--is-sparse-diskgroup-enabled",
              description:
                "If true, the sparse disk group is configured for the VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-local-backup-enabled",
              description:
                "If true, database backup on local Exadata storage is configured for the VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--time-zone",
              description: "The time zone to use for the VM cluster",
              args: { name: "time-zone" },
            },
            optIsOlderVersionAcknowledged,
            {
              name: "--db-servers",
              description: "The list of Db server",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemVersion,
            optFileSystemConfigurationDetails,
            {
              name: "--vm-cluster-type",
              description:
                "The vmcluster type for the VM cluster/Cloud VM cluster",
              args: { suggestions: ["REGULAR", "DEVELOPER"] },
            },
            optCloudAutomationUpdateDetails,
            {
              name: "--exascale-db-storage-vault-id",
              description: "The OCID of the Exadata Database Storage Vault",
              args: { name: "exascale-db-storage-vault-id" },
            },
            {
              name: "--vm-file-system-storage-type",
              description:
                "Specifies the type of file system storage and supported values are LOCAL and EXASCALE",
              args: { suggestions: ["LOCAL", "EXASCALE"] },
            },
            optVmBackupStorageType,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optDataCollectionOptions2,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified VM cluster",
          options: [
            optVmClusterId,
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
          description: "Gets information about the VM cluster",
          options: [optVmClusterId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the VM clusters in the specified compartment",
          options: [
            optCompartmentId,
            optExadataInfrastructureId2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optDisplayName,
            {
              name: "--vm-cluster-type",
              description:
                "A filter to return only vmclusters that match the given vmcluster type exactly",
              args: { suggestions: ["REGULAR", "DEVELOPER"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove Virtual Machines from the VM cluster",
          options: [
            {
              name: "--db-servers",
              description:
                "The list of Exacc DB servers for the cluster to be removed",
              args: { name: "json" },
              isRequired: true,
            },
            optVmClusterId,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified VM cluster",
          options: [
            optVmClusterId,
            {
              name: "--cpu-core-count",
              description:
                "The number of CPU cores to enable for the VM cluster",
              args: { name: "integer" },
            },
            {
              name: "--ocpu-count",
              description:
                "The number of OCPU cores to enable for the VM cluster",
              args: { name: "number" },
            },
            optMemorySizeInGbs,
            optDbNodeStorageSizeInGbs,
            optDataStorageSizeInTbs2,
            {
              name: "--data-storage-size-in-gbs",
              description: "The data disk group size to be allocated in GBs",
              args: { name: "data-storage-size-in-gbs" },
            },
            optDataStoragePercentage,
            optRecoStoragePercentage,
            optSparseStoragePercentage,
            {
              name: "--is-local-backup-enabled",
              description:
                "If true, database backup on local Exadata storage is configured for the VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-sparse-diskgroup-enabled",
              description:
                "If true, sparse disk group is configured for the VM cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the VM cluster",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--ssh-public-keys",
              description:
                "The public key portion of one or more key pairs used for SSH access to the VM cluster",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optFileSystemConfigurationDetails,
            optCloudAutomationUpdateDetails,
            optVmBackupStorageType,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPatchAction,
            optPatchId2,
            {
              name: "--update-action",
              description: "The action to perform on the update",
              args: { name: "update-action" },
            },
            {
              name: "--update-mode",
              description: "The update mode applicable to OS Update",
              args: { name: "update-mode" },
            },
            {
              name: "--update-id",
              description: "The OCID of the maintenance update",
              args: { name: "update-id" },
            },
            {
              name: "--gi-image-id",
              description: "The OCID of the grid infrastructure software image",
              args: { name: "gi-image-id" },
            },
            {
              name: "--gi-home-id",
              description: "The OCID of the grid infrastructure home",
              args: { name: "gi-home-id" },
            },
            optDataCollectionOptions2,
            optIsOlderVersionAcknowledged,
            optFromJson,
          ],
        },
        {
          name: "get-update",
          description:
            "Gets information about a specified maintenance update package for a VM cluster",
          options: [optVmClusterId, optUpdateId, optFromJson],
        },
        {
          name: "list-updates",
          description:
            "Lists the maintenance updates that can be applied to the specified VM cluster",
          options: [
            optVmClusterId,
            optUpdateType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: ["AVAILABLE", "SUCCESS", "IN_PROGRESS", "FAILED"],
              },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-update-history",
          description:
            "Gets the maintenance update history details for the specified update history entry",
          options: [optVmClusterId, optUpdateHistoryEntryId, optFromJson],
        },
        {
          name: "list-update-histories",
          description:
            "Gets the history of the maintenance update actions performed on the specified VM cluster",
          options: [
            optVmClusterId,
            optUpdateType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: { suggestions: ["IN_PROGRESS", "SUCCEEDED", "FAILED"] },
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
      name: "db-connection-bundle",
      description: "Details of a database connection bundle",
      subcommands: [
        {
          name: "download",
          description:
            "Downloads the specified database connection bundle content",
          options: [
            {
              name: "--db-connection-bundle-id",
              description: "The OCID of the database connection bundle",
              args: { name: "db-connection-bundle-id" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "The password to encrypt the keys inside the bundle",
              args: { name: "password" },
              isRequired: true,
            },
            optFile,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified database connection bundle",
          options: [
            {
              name: "--db-connection-bundle-id",
              description: "The OCID of the database connection bundle",
              args: { name: "db-connection-bundle-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all database connection bundles that match the query parameters",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "TIMEREFRESHED"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns only resources that match the given lifecycle state",
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
            optDisplayName,
            {
              name: "--db-connection-bundle-type",
              description:
                "A filter that returns only resources that match the specified database connection bundle type",
              args: { suggestions: ["TLS", "MTLS"] },
            },
            {
              name: "--associated-resource-id",
              description:
                "The OCID of the VM cluster associated with the connection bundle",
              args: { name: "associated-resource-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "advanced-cluster-file-system",
      description: "Details of an advanced cluster file system",
      subcommands: [
        {
          name: "create",
          description: "Creates an advanced cluster file system resource",
          options: [
            {
              name: "--vm-cluster-id",
              description: "The OCID of the VM cluster",
              args: { name: "vm-cluster-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The user-friendly name for the Advanced cluster file system",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--storage-in-gbs",
              description:
                "The total storage needed for advanced cluster file system in GBs",
              args: { name: "integer" },
              isRequired: true,
            },
            optCompartmentId8,
            optFreeformTags,
            optDefinedTags,
            optWaitForState17,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the advanced cluster file system",
          options: [
            optAdvancedClusterFileSystemId,
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
            "Gets information about the specified advanced cluster file systems",
          options: [optAdvancedClusterFileSystemId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the advanced cluster file system resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--vm-cluster-id",
              description:
                "A filter to return only ACFS that match the given vm cluster id exactly",
              args: { name: "vm-cluster-id" },
            },
            optResourceId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "CREATING",
                  "FAILED",
                  "UPDATING",
                  "DELETED",
                  "DELETING",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "mount",
          description:
            "Mounts the advanced cluster file system to all the virtual machines within a vmcluster",
          options: [
            optAdvancedClusterFileSystemId,
            optIfMatch,
            optWaitForState17,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unmount",
          description:
            "Unmounts the advanced cluster file system from all the virtual machines within a vmcluster",
          options: [
            optAdvancedClusterFileSystemId,
            optIfMatch,
            optWaitForState17,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the advanced cluster file system resource",
          options: [
            optAdvancedClusterFileSystemId,
            {
              name: "--storage-in-gbs",
              description:
                "The total storage needed for advanced cluster file system in GBs",
              args: { name: "integer" },
            },
            optVmClusterId2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState17,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-virtual-machine",
      description: "Autonomous Virtual Machine details",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details of specific Autonomous Virtual Machine",
          options: [
            {
              name: "--autonomous-virtual-machine-id",
              description: "The Autonomous Virtual machine OCID",
              args: { name: "autonomous-virtual-machine-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the Autonomous Virtual Machines in the specified Autonomous VM Cluster and Compartment",
          options: [
            optCompartmentId,
            {
              name: "--autonomous-vm-cluster-id",
              description: "The Autonomous Virtual machine OCID",
              args: { name: "autonomous-vm-cluster-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "node",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the specified database node",
          options: [optDbNodeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the database nodes in the specified DB system and compartment",
          options: [
            optCompartmentId,
            optDbSystemId2,
            optVmClusterId2,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "Sort by TIMECREATED",
              args: { suggestions: ["TIMECREATED"] },
            },
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "STOPPING",
                  "STOPPED",
                  "STARTING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--db-server-id",
              description: "The OCID of the Exacc Db server",
              args: { name: "db-server-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified database node",
          options: [
            optDbNodeId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Powers on the specified DB node",
          options: [
            optDbNodeId,
            optIfMatch,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Powers off the specified DB node",
          options: [
            optDbNodeId,
            optIfMatch,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "force-stop",
          description: "Powers off the specified DB node forcefully",
          options: [
            optDbNodeId,
            optIfMatch,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "soft-reset",
          description:
            "Performs an ACPI shutdown and powers on the specified DB node",
          options: [
            optDbNodeId,
            optIfMatch,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "reset",
          description: "Powers off and powers on the specified DB node",
          options: [
            optDbNodeId,
            optIfMatch,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "force-reset",
          description:
            "Powers off and powers on the specified DB node forcefully",
          options: [
            optDbNodeId,
            optIfMatch,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "system",
      subcommands: [
        {
          name: "change-cloud-db-system-subscription",
          description:
            "Associate a cloud DB system with a different subscription",
          options: [
            optDbSystemId,
            optSubscriptionId,
            optIsDefault,
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
            "Moves the DB system and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optDbSystemId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "execute-db-system-os-patch",
          description:
            "Execute an operating system (OS) patch action on a DB system",
          options: [
            {
              name: "--action",
              description:
                "Operation system (OS) patch action to perform * PRECHECK: No changes applied",
              args: { suggestions: ["PRECHECK", "APPLY"] },
              isRequired: true,
            },
            optDbSystemId,
            {
              name: "--db-node-id",
              description:
                "The OCID of the DB node to target for this patch action",
              args: { name: "db-node-id" },
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
          description: "Gets information about the specified DB system",
          options: [optDbSystemId, optFromJson],
        },
        {
          name: "get-exadata-iorm-config",
          description:
            "Gets the IORM configuration settings for the specified cloud Exadata DB system",
          options: [optDbSystemId, optFromJson],
        },
        {
          name: "launch-db-system-launch-standby-db-system-details",
          description:
            "Creates a new DB system in the specified compartment and availability domain",
          options: [
            optCompartmentId7,
            optAvailabilityDomain3,
            optSubnetId2,
            optShape,
            optHostname,
            {
              name: "--primary-db-system-id",
              description: "The OCID of the DB system",
              args: { name: "primary-db-system-id" },
              isRequired: true,
            },
            optDbHome,
            optFaultDomains,
            optDisplayName4,
            optBackupSubnetId,
            optNsgIds,
            optBackupNetworkNsgIds,
            optTimeZone,
            optDbSystemOptions,
            {
              name: "--storage-volume-performance-mode",
              description: "The block storage volume performance level",
              args: { suggestions: ["BALANCED", "HIGH_PERFORMANCE"] },
            },
            optSparseDiskgroup,
            optSshPublicKeys,
            optDomain,
            optCpuCoreCount2,
            optClusterName,
            optDataStoragePercentage,
            optInitialDataStorageSizeInGb,
            optKmsKeyId,
            optKmsKeyVersionId,
            optNodeCount,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateIp,
            optPrivateIpV6,
            optClusterPlacementGroupId,
            optSubscriptionId,
            optDataCollectionOptions,
            optComputeModel2,
            optComputeCount2,
            optIsOlderVersionAcknowledged,
            optLicenseModel2,
            optOpcDryRun,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-db-system-compute-performances",
          description:
            "Gets a list of expected compute performance parameters for a virtual machine DB system based on system",
          options: [
            {
              name: "--db-system-shape",
              description:
                "If provided, filters the results to the set of database versions which are supported for the given shape",
              args: { name: "db-system-shape" },
            },
            optCompartmentId3,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-db-system-storage-performances",
          description:
            "Gets a list of possible expected storage performance parameters of a VMDB System based on Configuration",
          options: [
            {
              name: "--storage-management",
              description: "The DB system storage management option",
              args: { suggestions: ["ASM", "LVM"] },
              isRequired: true,
            },
            {
              name: "--shape-type",
              description: "Optional",
              args: { name: "shape-type" },
            },
            {
              name: "--database-edition",
              description:
                "The database edition of quota (STANDARD_EDITION/ENTERPRISE_EDITION/ENTERPRISE_EDITION_HIGH_PERFORMANCE/ENTERPR",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
                  "ENTERPRISE_EDITION_EXTREME_PERFORMANCE",
                  "ENTERPRISE_EDITION_DEVELOPER",
                ],
              },
            },
            optCompartmentId3,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the DB systems in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optBackupId2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "MIGRATED",
                  "MAINTENANCE_IN_PROGRESS",
                  "NEEDS_ATTENTION",
                  "UPGRADING",
                ],
              },
            },
            optAvailabilityDomain2,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "terminate",
          description:
            "Terminates a DB system and permanently deletes it and any databases running on it",
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
          name: "update-exadata-iorm-config",
          description:
            "Updates IORM settings for the specified Exadata DB system",
          options: [
            optDbSystemId,
            {
              name: "--objective",
              description: 'Value for the IORM objective Default is "Auto"',
              args: {
                suggestions: [
                  "LOW_LATENCY",
                  "HIGH_THROUGHPUT",
                  "BALANCED",
                  "AUTO",
                  "BASIC",
                ],
              },
            },
            {
              name: "--db-plans",
              description:
                "Array of IORM Setting for all the database in this Exadata DB System",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "BOOTSTRAPPING",
                  "ENABLED",
                  "DISABLED",
                  "UPDATING",
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
        {
          name: "upgrade",
          description:
            "Upgrades the operating system and grid infrastructure of the DB system",
          options: [
            optDbSystemId,
            {
              name: "--action",
              description: "The operating system upgrade action",
              args: {
                suggestions: [
                  "PRECHECK",
                  "ROLLBACK",
                  "UPDATE_SNAPSHOT_RETENTION_DAYS",
                  "UPGRADE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--new-gi-version",
              description:
                "A valid Oracle Grid Infrastructure (GI) software version",
              args: { name: "new-gi-version" },
            },
            {
              name: "--new-os-version",
              description: "A valid Oracle Software (OS) version eg",
              args: { name: "new-os-version" },
            },
            optIsOlderVersionAcknowledged,
            optIfMatch,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--snapshot-retention-period",
              description:
                "The retention period, in days, for the snapshot that allows you to perform a rollback of the upgrade",
              args: { name: "integer" },
            },
            {
              name: "--force",
              description:
                "If true, rollback time is updated even if operating system upgrade history contains errors",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "launch-from-db-system",
          description:
            "Creates a new DB system in the specified compartment and availability domain",
          options: [
            optCompartmentId7,
            optAvailabilityDomain3,
            optSubnetId2,
            optShape,
            optHostname,
            {
              name: "--source-db-system-id",
              description: "The OCID of the DB system",
              args: { name: "source-db-system-id" },
              isRequired: true,
            },
            optDbHome,
            optFaultDomains,
            optDisplayName4,
            optBackupSubnetId,
            optNsgIds,
            optBackupNetworkNsgIds,
            optTimeZone,
            optDbSystemOptions,
            optSparseDiskgroup,
            optSshPublicKeys,
            optDomain,
            optCpuCoreCount2,
            optClusterName,
            optDataStoragePercentage,
            optInitialDataStorageSizeInGb,
            optKmsKeyId,
            optKmsKeyVersionId,
            optNodeCount,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateIp,
            optPrivateIpV6,
            optClusterPlacementGroupId,
            optSubscriptionId,
            optComputeModel2,
            optComputeCount2,
            optIsOlderVersionAcknowledged,
            optLicenseModel2,
            optOpcDryRun,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStoragePerformance,
            optIsDiagnosticsEventsEnabled,
            optIsHealthMonitoringEnabled,
            optIsIncidentLogsEnabled,
            optFromJson,
          ],
        },
        {
          name: "launch-from-backup",
          description:
            "Creates a new DB system in the specified compartment and availability domain",
          options: [
            optCompartmentId7,
            optAvailabilityDomain3,
            optSubnetId2,
            optShape,
            optHostname,
            optDatabaseEdition2,
            optFaultDomains,
            optDisplayName4,
            optBackupSubnetId,
            optNsgIds,
            optBackupNetworkNsgIds,
            optTimeZone,
            optSparseDiskgroup,
            optDomain,
            optCpuCoreCount2,
            optClusterName,
            optDataStoragePercentage,
            optInitialDataStorageSizeInGb,
            optKmsKeyId,
            optKmsKeyVersionId,
            optNodeCount,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateIp,
            optPrivateIpV6,
            optClusterPlacementGroupId,
            optSubscriptionId,
            optComputeModel2,
            optComputeCount2,
            optIsOlderVersionAcknowledged,
            optDiskRedundancy,
            optLicenseModel2,
            optOpcDryRun,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optAdminPassword2,
            optBackupId,
            optBackupTdePassword,
            {
              name: "--db-name",
              description:
                "The display name of the database to be created from the backup",
              args: { name: "db-name" },
            },
            optDbUniqueName2,
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to use for SSH access to the DB System",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--storage-management",
              description:
                "Option for storage management for the database system",
              args: { suggestions: ["LVM", "ASM"] },
            },
            {
              name: "--database-software-image-id",
              description: "The OCID of database software image",
              args: { name: "database-software-image-id" },
            },
            optStoragePerformance,
            optIsDiagnosticsEventsEnabled,
            optIsHealthMonitoringEnabled,
            optIsIncidentLogsEnabled,
            {
              name: "--is-unified-auditing-enabled",
              description:
                "Indicates whether unified auditing is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "launch-from-database",
          description:
            "Creates a new DB system in the specified compartment and availability domain",
          options: [
            optCompartmentId7,
            optAvailabilityDomain3,
            optSubnetId2,
            optShape,
            optHostname,
            optDbHome,
            optDatabaseEdition2,
            optFaultDomains,
            optDisplayName4,
            optBackupSubnetId,
            optNsgIds,
            optBackupNetworkNsgIds,
            optTimeZone,
            optDbSystemOptions,
            optSparseDiskgroup,
            optSshPublicKeys,
            optDomain,
            optCpuCoreCount2,
            optClusterName,
            optDataStoragePercentage,
            optInitialDataStorageSizeInGb,
            optKmsKeyId,
            optKmsKeyVersionId,
            optNodeCount,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateIp,
            optPrivateIpV6,
            optClusterPlacementGroupId,
            optSubscriptionId,
            optComputeModel2,
            optComputeCount2,
            optIsOlderVersionAcknowledged,
            optDiskRedundancy,
            optLicenseModel2,
            optOpcDryRun,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStoragePerformance,
            optIsDiagnosticsEventsEnabled,
            optIsHealthMonitoringEnabled,
            optIsIncidentLogsEnabled,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Perform an action on a Patch for a DB System",
          options: [
            {
              name: "--db-system-id",
              description: "The OCID of the DB System",
              args: { name: "db-system-id" },
              isRequired: true,
            },
            {
              name: "--patch-action",
              description: "The action to perform on the patch",
              args: { suggestions: ["APPLY", "PRECHECK"] },
              isRequired: true,
            },
            optPatchId,
            optFromJson,
          ],
        },
        {
          name: "switch",
          description:
            "Migrates the Exadata DB system to the new Exadata resource model",
          options: [optDbSystemId, optIfMatch, optFromJson],
        },
        {
          name: "launch",
          description:
            "Creates a new DB system in the specified compartment and availability domain",
          options: [
            optCompartmentId7,
            optAvailabilityDomain3,
            optSubnetId2,
            optShape,
            optHostname,
            optDatabaseEdition2,
            optFaultDomains,
            optDisplayName4,
            optBackupSubnetId,
            optNsgIds,
            optBackupNetworkNsgIds,
            optTimeZone,
            optSparseDiskgroup,
            optDomain,
            optCpuCoreCount2,
            optClusterName,
            optDataStoragePercentage,
            optInitialDataStorageSizeInGb,
            optKmsKeyId,
            optKmsKeyVersionId,
            optNodeCount,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optPrivateIp,
            optPrivateIpV6,
            optClusterPlacementGroupId,
            optSubscriptionId,
            optComputeModel2,
            optComputeCount2,
            optIsOlderVersionAcknowledged,
            optDiskRedundancy,
            optLicenseModel2,
            optMaintenanceWindowDetails,
            optOpcDryRun,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optAdminPassword2,
            {
              name: "--character-set",
              description: "The character set for the database",
              args: { name: "character-set" },
            },
            optDbName2,
            optDbUniqueName2,
            {
              name: "--db-version",
              description: "A valid Oracle database version",
              args: { name: "db-version" },
              isRequired: true,
            },
            {
              name: "--tde-wallet-password",
              description: "The optional password to open the TDE wallet",
              args: { name: "tde-wallet-password" },
            },
            {
              name: "--db-workload",
              description: "Database workload type",
              args: { name: "db-workload" },
            },
            {
              name: "--ncharacter-set",
              description: "National character set for the database",
              args: { name: "ncharacter-set" },
            },
            {
              name: "--pdb-name",
              description: "Pluggable database name",
              args: { name: "pdb-name" },
            },
            optAutoBackupEnabled,
            optAutoBackupWindow,
            optAutoFullBackupDay,
            optAutoFullBackupWindow,
            {
              name: "--run-immediate-full-backup",
              description:
                "If set to true, configures automatic full backups in the local region",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optRecoveryWindowInDays,
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to use for SSH access to the DB System",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--storage-management",
              description:
                "Option for storage management for the database system",
              args: { suggestions: ["LVM", "ASM"] },
            },
            {
              name: "--database-software-image-id",
              description: "The OCID of database software image",
              args: { name: "database-software-image-id" },
            },
            optStoragePerformance,
            optVaultId,
            optIsDiagnosticsEventsEnabled,
            optIsHealthMonitoringEnabled,
            optIsIncidentLogsEnabled,
            {
              name: "--is-unified-auditing-enabled",
              description:
                "Indicates whether unified auditing is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the properties of the specified DB system",
          options: [
            optDbSystemId,
            {
              name: "--cpu-core-count",
              description:
                "The new number of CPU cores to set for the DB system",
              args: { name: "integer" },
            },
            {
              name: "--data-storage-size-in-gbs",
              description:
                "The size, in gigabytes, to scale the attached storage up to for this virtual machine DB system",
              args: { name: "integer" },
            },
            {
              name: "--reco-storage-size-in-gbs",
              description:
                "The size, in gigabytes, to scale the attached RECO storage up to for this virtual machine DB system",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            {
              name: "--shape",
              description: "The shape of the DB system",
              args: { name: "shape" },
            },
            optNsgIds,
            optBackupNetworkNsgIds,
            {
              name: "--license-model",
              description:
                "The Oracle Database license model that applies to all databases on the DB system",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            optMaintenanceWindowDetails,
            optComputeModel2,
            optComputeCount2,
            optIfMatch,
            optOpcDryRun,
            optForce2,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPatchAction,
            optPatchId2,
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to use for SSH access to the DB System",
              args: { name: "file", template: "filepaths" },
            },
            optIsDiagnosticsEventsEnabled,
            optIsHealthMonitoringEnabled,
            optIsIncidentLogsEnabled,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "system-shape",
      description: "The shape of the DB system",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of the shapes that can be used to launch a new DB system",
          options: [
            optCompartmentId,
            {
              name: "--availability-domain",
              description: "The name of the Availability Domain",
              args: { name: "availability-domain" },
            },
            optLimit,
            optPage,
            optShapeAttribute,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "version",
      description: "The Oracle Database software version",
      subcommands: [
        {
          name: "list",
          description: "Gets a list of supported Oracle Database versions",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--db-system-shape",
              description:
                "If provided, filters the results to the set of database versions which are supported for the given shape",
              args: { name: "db-system-shape" },
            },
            optDbSystemId2,
            {
              name: "--storage-management",
              description: "The DB system storage management option",
              args: { suggestions: ["ASM", "LVM"] },
            },
            optShapeAttribute,
            {
              name: "--is-upgrade-supported",
              description:
                "If provided, filters the results to the set of database versions which are supported for Upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-database-software-image-supported",
              description:
                "If true, filters the results to the set of Oracle Database versions that are supported for OCI database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "patch-history",
      subcommands: [
        {
          name: "get-db-home",
          description:
            "Gets the patch history details for the specified patchHistoryEntryId",
          options: [optDbHomeId2, optPatchHistoryEntryId, optFromJson],
        },
        {
          name: "get-vm-cluster",
          description:
            "Gets the patch history details for the specified patch history entry",
          options: [optVmClusterId, optPatchHistoryEntryId, optFromJson],
        },
        {
          name: "list-db-home",
          description:
            "Lists the history of patch operations on the specified Database Home",
          options: [
            optDbHomeId2,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-vm-cluster",
          description:
            "Gets the history of the patch actions performed on the specified VM cluster in an Exadata Cloud@Customer",
          options: [
            optVmClusterId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the patch history details for the specified patchHistoryEntryId",
          subcommands: [
            {
              name: "by-database",
              description: "Get patch history for a given database",
              options: [optPatchHistoryEntryId, optDatabaseId, optFromJson],
            },
            {
              name: "by-db-system",
              description:
                "Gets the details of the specified patch operation on the specified DB system",
              options: [optDbSystemId, optPatchHistoryEntryId, optFromJson],
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists the history of patch operations on the specified Database Home",
          subcommands: [
            {
              name: "by-database",
              description: "List patch history entries for a given database",
              options: [
                optLimit,
                optPage,
                optAll,
                optPageSize,
                optDatabaseId,
                optFromJson,
              ],
            },
            {
              name: "by-db-system",
              description:
                "Gets the history of the patch actions performed on the specified DB system",
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
      ],
    },
    {
      name: "autonomous-container-database-dataguard",
      description:
        "The properties that define Autonomous Data Guard association between two different Autonomous Container",
      subcommands: [
        {
          name: "create",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousContainerDatabaseId,
            {
              name: "--peer-autonomous-container-database-display-name",
              description:
                "The display name for the peer Autonomous Container Database",
              args: { name: "peer-autonomous-container-database-display-name" },
              isRequired: true,
            },
            {
              name: "--protection-mode",
              description:
                "The protection mode of this Autonomous Data Guard association",
              args: {
                suggestions: ["MAXIMUM_AVAILABILITY", "MAXIMUM_PERFORMANCE"],
              },
              isRequired: true,
            },
            optPeerAutonomousContainerDatabaseCompartmentId,
            optPeerCloudAutonomousVmClusterId,
            {
              name: "--peer-autonomous-vm-cluster-id",
              description: "The OCID of the peer Autonomous Exadata VM Cluster",
              args: { name: "peer-autonomous-vm-cluster-id" },
            },
            optPeerDbUniqueName2,
            optPeerAutonomousContainerDatabaseBackupConfig,
            optIsAutomaticFailoverEnabled,
            optFastStartFailOverLagLimitInSeconds,
            optStandbyMaintenanceBufferInDays,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "failover",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousContainerDatabaseId,
            optAutonomousContainerDatabaseDataguardAssociationId,
            optIfMatch,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousContainerDatabaseId,
            optAutonomousContainerDatabaseDataguardAssociationId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousContainerDatabaseId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "migrate",
          description:
            "Migrate Autonomous Container Database, identified by the autonomousContainerDatabaseId parameter",
          options: [
            optAutonomousContainerDatabaseId,
            optAutonomousContainerDatabaseDataguardAssociationId,
            optIfMatch,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "reinstate",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousContainerDatabaseId,
            optAutonomousContainerDatabaseDataguardAssociationId,
            optIfMatch,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switchover",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousContainerDatabaseId,
            optAutonomousContainerDatabaseDataguardAssociationId,
            optIfMatch,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousContainerDatabaseId,
            optAutonomousContainerDatabaseDataguardAssociationId,
            optIsAutomaticFailoverEnabled,
            optProtectionMode,
            optFastStartFailOverLagLimitInSeconds,
            optIfMatch,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "autonomous-database-dataguard",
      description:
        "The properties that define dataguard association between two different Autonomous AI Databases",
      subcommands: [
        {
          name: "get",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousDatabaseId,
            {
              name: "--autonomous-database-dataguard-association-id",
              description:
                "The Autonomous Container Database-Autonomous Data Guard association OCID",
              args: { name: "autonomous-database-dataguard-association-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Deprecated",
          deprecated: true,
          options: [
            optAutonomousDatabaseId,
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
      name: "db-system-upgrade-history",
      description: "The record of an OS upgrade action on a DB system",
      subcommands: [
        {
          name: "get",
          options: [
            optDbSystemId,
            {
              name: "--upgrade-history-id",
              description: "The database/db system upgrade History OCID",
              args: { name: "upgrade-history-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the history of the upgrade actions performed on the specified DB system",
          options: [
            optDbSystemId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy4,
            {
              name: "--upgrade-action",
              description:
                "A filter to return only upgradeHistoryEntries that match the specified Upgrade Action",
              args: {
                suggestions: [
                  "PRECHECK",
                  "ROLLBACK",
                  "UPDATE_SNAPSHOT_RETENTION_DAYS",
                  "UPGRADE",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only upgrade history entries that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                  "NEEDS_ATTENTION",
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
      name: "upgrade-history",
      description:
        "The Database service supports the upgrade history of databases",
      subcommands: [
        {
          name: "get",
          options: [
            optDatabaseId,
            {
              name: "--upgrade-history-id",
              description: "The database upgrade History OCID",
              args: { name: "upgrade-history-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-exa-infra",
      description: "Details of the cloud Exadata infrastructure resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a cloud Exadata infrastructure resource and its dependent resources to another compartment",
          options: [
            optCompartmentId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCloudExaInfraId,
            optFromJson,
          ],
        },
        {
          name: "change-cloud-exadata-infrastructure-subscription",
          description:
            "Associate a cloud Exadata infrastructure with a different subscription",
          options: [
            {
              name: "--cloud-exadata-infrastructure-id",
              description: "The cloud Exadata infrastructure OCID",
              args: { name: "cloud-exadata-infrastructure-id" },
              isRequired: true,
            },
            optSubscriptionId,
            optIsDefault,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "configure-exascale",
          description:
            "Configures Exascale on Cloud exadata infrastructure resource",
          options: [
            {
              name: "--total-storage-in-gbs",
              description: "Storage size needed for Exascale in GBs",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--total-vm-storage-in-gbs",
              description:
                "Storage size needed for VM storage on Exascale in GBs",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCloudExaInfraId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a cloud Exadata infrastructure resource",
          options: [
            {
              name: "--availability-domain",
              description:
                "The availability domain where the cloud Exadata infrastructure is located",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the cloud Exadata infrastructure resource",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--shape",
              description:
                "The shape of the cloud Exadata infrastructure resource",
              args: { name: "shape" },
              isRequired: true,
            },
            {
              name: "--compute-count",
              description:
                "The number of compute servers for the cloud Exadata infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--storage-count",
              description:
                "The number of storage servers for the cloud Exadata infrastructure",
              args: { name: "integer" },
            },
            optMaintenanceWindow,
            optMaintenanceVersionPreferences,
            optFreeformTags,
            optDefinedTags,
            optClusterPlacementGroupId,
            optSubscriptionId,
            {
              name: "--customer-contacts",
              description: "Customer contacts",
              args: { name: "json" },
            },
            {
              name: "--database-server-type",
              description:
                "The database server type of the Exadata infrastructure",
              args: { name: "database-server-type" },
            },
            {
              name: "--storage-server-type",
              description:
                "The storage server type of the Exadata infrastructure",
              args: { name: "storage-server-type" },
            },
            optOpcDryRun,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the cloud Exadata infrastructure resource",
          options: [
            optIfMatch,
            {
              name: "--is-delete-vm-clusters",
              description:
                "If true, forces the deletion the specified cloud Exadata infrastructure resource as well as all associated VM",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCloudExaInfraId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified cloud Exadata infrastructure resource",
          options: [optCloudExaInfraId, optFromJson],
        },
        {
          name: "get-cloud-exadata-infrastructure-unallocated-resources",
          description:
            "Gets unallocated resources information for the specified Cloud Exadata infrastructure",
          options: [
            {
              name: "--cloud-exadata-infrastructure-id",
              description: "The cloud Exadata infrastructure OCID",
              args: { name: "cloud-exadata-infrastructure-id" },
              isRequired: true,
            },
            {
              name: "--db-servers",
              description: "The list of OCIDs of the Db servers",
              args: { name: "db-servers" },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of the cloud Exadata infrastructure resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optDisplayName,
            optClusterPlacementGroupId2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Cloud Exadata infrastructure resource",
          options: [
            {
              name: "--display-name",
              description:
                "The user-friendly name for the cloud Exadata infrastructure",
              args: { name: "display-name" },
            },
            optMaintenanceWindow,
            optMaintenanceVersionPreferences,
            {
              name: "--compute-count",
              description:
                "The number of compute servers for the cloud Exadata infrastructure",
              args: { name: "integer" },
            },
            {
              name: "--storage-count",
              description:
                "The number of storage servers for the cloud Exadata infrastructure",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--customer-contacts",
              description: "Customer contacts",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCloudExaInfraId,
            optFromJson,
          ],
        },
        {
          name: "add-storage",
          description:
            "Makes the storage capacity from additional storage servers available for Cloud VM Cluster consumption",
          options: [
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCloudExaInfraId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "flex-component",
      description: "Results of a FlexComponent lists",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of the flex components that can be used to launch a new DB system",
          options: [
            optCompartmentId,
            optName,
            {
              name: "--shape",
              description:
                "A filter to return only resources that belong to the entire shape name given",
              args: { name: "shape" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME"] },
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
      name: "external-cdb",
      description:
        "An Oracle Cloud Infrastructure resource that allows you to manage an external container database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the external container database and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalCdbId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new external container database resource",
          options: [
            optCompartmentId2,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState13,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the external container database resource",
          options: [
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalCdbId,
            optFromJson,
          ],
        },
        {
          name: "disable-external-container-database-stack-monitoring",
          description:
            "Disable Stack Monitoring for the external container database",
          options: [
            {
              name: "--external-container-database-id",
              description: "The ExternalContainerDatabase OCID",
              args: { name: "external-container-database-id" },
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
          name: "enable-external-container-database-stack-monitoring",
          description:
            "Enable Stack Monitoring for the external container database",
          options: [
            {
              name: "--external-container-database-id",
              description: "The ExternalContainerDatabase OCID",
              args: { name: "external-container-database-id" },
              isRequired: true,
            },
            optExternalDatabaseConnectorId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified external container database",
          options: [optExternalCdbId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the external container databases in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy2,
            optSortOrder,
            optLifecycleState3,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the properties of an ExternalContainerDatabase resource, such as the display name",
          options: [
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState13,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalCdbId,
            optDisplayName6,
            optFromJson,
          ],
        },
        {
          name: "enable-db-management",
          description:
            "Enables Database Management Service for the external container database",
          options: [
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the external database",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalCdbId,
            optExternalDbConnectorId2,
            optFromJson,
          ],
        },
        {
          name: "disable-db-management",
          description:
            "Disable Database Management service for the external container database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalCdbId,
            optFromJson,
          ],
        },
        {
          name: "scan-pluggable-databases",
          description:
            "Scans for pluggable databases in the specified external container database",
          options: [
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalCdbId,
            optExternalDbConnectorId,
            optFromJson,
          ],
        },
        {
          name: "list-external-pdbs",
          description:
            "Gets a list of the ExternalPluggableDatabase resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy2,
            optSortOrder,
            optLifecycleState3,
            optDisplayName,
            optAll,
            optPageSize,
            {
              name: "--external-cdb-id",
              description: "The ExternalContainerDatabase OCID",
              args: { name: "external-cdb-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-pdb",
      description: "An external Oracle pluggable database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the external pluggable database and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalPdbId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Registers a new ExternalPluggableDatabase resource",
          options: [
            optCompartmentId2,
            optDisplayName5,
            {
              name: "--source-id",
              description:
                "The OCID of the non-container database that was converted to a pluggable database to create this resource",
              args: { name: "source-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState13,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--external-cdb-id",
              description:
                "The OCID of the external container database that contains the specified external pluggable database resource",
              args: { name: "external-cdb-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the external pluggable database. resource",
          options: [
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalPdbId,
            optFromJson,
          ],
        },
        {
          name: "disable-external-pluggable-database-stack-monitoring",
          description:
            "Disable Stack Monitoring for the external pluggable database",
          options: [
            {
              name: "--external-pluggable-database-id",
              description: "The ExternalPluggableDatabaseId OCID",
              args: { name: "external-pluggable-database-id" },
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
          name: "enable-external-pluggable-database-stack-monitoring",
          description:
            "Enable Stack Monitoring for the external pluggable database",
          options: [
            {
              name: "--external-pluggable-database-id",
              description: "The ExternalPluggableDatabaseId OCID",
              args: { name: "external-pluggable-database-id" },
              isRequired: true,
            },
            optExternalDatabaseConnectorId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about a specific external pluggable database resource",
          options: [optExternalPdbId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the properties of an external pluggable database resource, such as the display name",
          options: [
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState13,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalPdbId,
            optDisplayName6,
            optFromJson,
          ],
        },
        {
          name: "enable-db-management",
          description:
            "Enable Database Management Service for the external pluggable database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId2,
            optExternalPdbId,
            optFromJson,
          ],
        },
        {
          name: "disable-db-management",
          description:
            "Disable Database Management Service for the external pluggable database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalPdbId,
            optFromJson,
          ],
        },
        {
          name: "disable-operations-insights",
          description:
            "Disable Operations Insights for the external pluggable database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalPdbId,
            optFromJson,
          ],
        },
        {
          name: "enable-operations-insights",
          description:
            "Enable Operations Insights for the external pluggable database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId2,
            {
              name: "--external-pdb-id",
              description:
                "The OCID of the external pluggable database. required",
              args: { name: "external-pdb-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-non-cdb",
      description: "An external Oracle non-container database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the external non-container database and its dependent resources to the specified compartment",
          options: [
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalNonCdbId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new ExternalNonContainerDatabase resource",
          options: [
            optCompartmentId2,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState13,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the Oracle Cloud Infrastructure resource representing an external non-container database",
          options: [
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalNonCdbId,
            optFromJson,
          ],
        },
        {
          name: "disable-external-non-container-database-stack-monitoring",
          description:
            "Disable Stack Monitoring for the external non-container database",
          options: [
            {
              name: "--external-non-container-database-id",
              description: "The external non-container database OCID",
              args: { name: "external-non-container-database-id" },
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
          name: "enable-external-non-container-database-stack-monitoring",
          description:
            "Enable Stack Monitoring for the external non-container database",
          options: [
            {
              name: "--external-non-container-database-id",
              description: "The external non-container database OCID",
              args: { name: "external-non-container-database-id" },
              isRequired: true,
            },
            optExternalDatabaseConnectorId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about a specific external non-container database",
          options: [optExternalNonCdbId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the ExternalNonContainerDatabases in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy2,
            optSortOrder,
            optLifecycleState3,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the properties of an external non-container database, such as the display name",
          options: [
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState13,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalNonCdbId,
            optDisplayName6,
            optFromJson,
          ],
        },
        {
          name: "enable-db-management",
          description:
            "Enable Database Management Service for the external non-container database",
          options: [
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the external database",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId2,
            optExternalNonCdbId,
            optFromJson,
          ],
        },
        {
          name: "disable-db-management",
          description:
            "Disable Database Management Service for the external non-container database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalNonCdbId,
            optFromJson,
          ],
        },
        {
          name: "disable-operations-insights",
          description:
            "Disable Operations Insights for the external non-container database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalNonCdbId,
            optFromJson,
          ],
        },
        {
          name: "enable-operations-insights",
          description:
            "Enable Operations Insights for the external non-container database",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId2,
            {
              name: "--external-non-cdb-id",
              description:
                "The OCID of the external non-container database. required",
              args: { name: "external-non-cdb-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-db-connector",
      description:
        "An Oracle Cloud Infrastructure resource used to connect to an external Oracle Database",
      subcommands: [
        {
          name: "delete",
          description: "Deletes an external database connector",
          options: [
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified external database connector",
          options: [optExternalDbConnectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the external database connectors in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--external-database-id",
              description:
                "The OCID of the external database whose connectors will be listed",
              args: { name: "external-database-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortBy2,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-macs-connector",
          description: "Creates a new external database connector",
          options: [
            {
              name: "--display-name",
              description:
                "The user-friendly name for the external database connector",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--external-database-id",
              description: "The OCID of the external database resource",
              args: { name: "external-database-id" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--connection-credentials",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--connector-agent-id",
              description:
                "The ID of the agent used for the external database connector",
              args: { name: "connector-agent-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "check-connection-status",
          description:
            "Check the status of the external database connection specified in this connector",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId,
            optFromJson,
          ],
        },
        {
          name: "update-macs-connector",
          description:
            "Updates the properties of an external database connector, such as the display name",
          options: [
            optFreeformTags,
            optDefinedTags,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the external database connector",
              args: { name: "display-name" },
            },
            { name: "--connection-string", args: { name: "json" } },
            { name: "--connection-credentials", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the properties of an external database connector, such as the display name",
          options: [
            optFreeformTags,
            optDefinedTags,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the external database connector",
              args: { name: "display-name" },
            },
            {
              name: "--connector-type",
              description:
                "The type of connector used by the external database resource",
              args: { suggestions: ["MACS"] },
            },
            optIfMatch,
            optForce2,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optExternalDbConnectorId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pdb-conversion-history",
      description:
        "Details of operations performed to convert a non-container database to pluggable database",
      subcommands: [
        {
          name: "get",
          description:
            "Details of operations performed to convert a non-container database to pluggable database",
          options: [
            optDatabaseId,
            {
              name: "--history-id",
              description: "The database conversion history OCID",
              args: { name: "history-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "system-version",
      description: "Results of the System version lists",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of supported Exadata system versions for a given shape and GI version",
          options: [
            optCompartmentId,
            {
              name: "--gi-version",
              description: "Specifies gi version query parameter",
              args: { name: "gi-version" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            optShape2,
            {
              name: "--is-latest",
              description:
                "If provided, return highest versions from each major version family",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optResourceId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "system-minor-version",
      description: "Results of the System minor version lists",
      subcommands: [
        {
          name: "list",
          description:
            "Retrieves a list of supported minor versions for the specified Exadata System Software major version",
          options: [
            {
              name: "--major-version",
              description: "The System major version",
              args: { name: "major-version" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--gi-version",
              description: "Specifies gi version query parameter",
              args: { name: "gi-version" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            optShape2,
            optResourceId,
            {
              name: "--is-latest",
              description:
                "If provided, return highest versions from each major version family",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "db-system-os-patch-history",
      description: "The record of an OS patch action on a DB system",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details of the specified OS patch action for the specified DB system",
          options: [
            optDbSystemId,
            {
              name: "--os-patch-history-entry-id",
              description: "The OCID of the patch history entry",
              args: { name: "os-patch-history-entry-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the history of the OS patch actions performed on the specified DB system",
          options: [
            optDbSystemId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMESTARTED", "ACTION"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only OS patch history entries that match the given lifecycle state exactly",
              args: { suggestions: ["IN_PROGRESS", "SUCCEEDED", "FAILED"] },
            },
            {
              name: "--action",
              description:
                "A filter to return only OS patch history entries that match the specified OS patch action",
              args: { suggestions: ["PRECHECK", "APPLY"] },
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
