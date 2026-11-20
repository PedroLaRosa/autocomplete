// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optBdsInstanceId: Fig.Option = {
  name: "--bds-instance-id",
  description: "The OCID of the cluster",
  args: { name: "bds-instance-id" },
  isRequired: true,
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
const optSecretId: Fig.Option = {
  name: "--secret-id",
  description: "The secretId for the clusterAdminPassword",
  args: { name: "secret-id" },
};
const optClusterAdminPassword: Fig.Option = {
  name: "--cluster-admin-password",
  description: "Base-64 encoded password for the cluster admin user",
  args: { name: "cluster-admin-password" },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optClusterAdminPassword2: Fig.Option = {
  name: "--cluster-admin-password",
  description:
    "Base-64 encoded password for the cluster (and Cloudera Manager) admin user",
  args: { name: "cluster-admin-password" },
};
const optBackupType: Fig.Option = {
  name: "--backup-type",
  description:
    "Incremental backup type includes only the changes since the last backup",
  args: { name: "backup-type" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optIdentityConfigurationId: Fig.Option = {
  name: "--identity-configuration-id",
  description: "The OCID of the identity configuration",
  args: { name: "identity-configuration-id" },
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
const optNumberOfBackupsToRetain: Fig.Option = {
  name: "--number-of-backups-to-retain",
  description: "Number of backup copies to retain",
  args: { name: "integer" },
};
const optTimezone: Fig.Option = {
  name: "--timezone",
  description:
    "The time zone of the execution schedule, in IANA time zone database name format",
  args: { name: "timezone" },
};
const optBdsCapacityReservationConfigurationId: Fig.Option = {
  name: "--bds-capacity-reservation-configuration-id",
  description: "The OCID of the BDS capacity reservation configuration",
  args: { name: "bds-capacity-reservation-configuration-id" },
  isRequired: true,
};
const optBdsCapacityReservationId: Fig.Option = {
  name: "--bds-capacity-reservation-id",
  description: "The OCID of the BDS capacity reservation",
  args: { name: "bds-capacity-reservation-id" },
  isRequired: true,
};
const optClusterAdminPassword3: Fig.Option = {
  name: "--cluster-admin-password",
  description: "Base-64 encoded Cluster Admin Password for cluster admin user",
  args: { name: "cluster-admin-password" },
};
const optLevelTypeDetailsNodeHostName: Fig.Option = {
  name: "--level-type-details-node-host-name",
  description: "Host name of the node to create backup configuration",
  args: { name: "level-type-details-node-host-name" },
  isRequired: true,
};
const optLevelTypeDetailsNodeType: Fig.Option = {
  name: "--level-type-details-node-type",
  description:
    "Type of the node or nodes of the node backup configuration or node replacement configuration which are going",
  args: { name: "level-type-details-node-type" },
  isRequired: true,
};
const optMetastoreConfigId: Fig.Option = {
  name: "--metastore-config-id",
  description: "The metastore configuration ID",
  args: { name: "metastore-config-id" },
  isRequired: true,
};
const optNodeBackupConfigurationId: Fig.Option = {
  name: "--node-backup-configuration-id",
  description:
    "Unique Oracle-assigned identifier of the NodeBackupConfiguration",
  args: { name: "node-backup-configuration-id" },
  isRequired: true,
};
const optNodeReplaceConfigurationId: Fig.Option = {
  name: "--node-replace-configuration-id",
  description:
    "Unique Oracle-assigned identifier of the NodeReplaceConfiguration",
  args: { name: "node-replace-configuration-id" },
  isRequired: true,
};
const optShapeConfig: Fig.Option = {
  name: "--shape-config",
  args: { name: "json" },
};
const optBlockVolumeSizeInGbs: Fig.Option = {
  name: "--block-volume-size-in-gbs",
  description:
    "The size of block volume in GB to be attached to the given node",
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
    "Simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optIsDryRun: Fig.Option = {
  name: "--is-dry-run",
  description: "Perform dry run for the patch and stop",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optOsPatchVersion: Fig.Option = {
  name: "--os-patch-version",
  description: "The target os patch version",
  args: { name: "os-patch-version" },
  isRequired: true,
};
const optPatchVersion: Fig.Option = {
  name: "--patch-version",
  description: "The version of the patch to be installed. required",
  args: { name: "patch-version" },
  isRequired: true,
};
const optResourcePrincipalConfigurationId: Fig.Option = {
  name: "--resource-principal-configuration-id",
  description:
    "Unique Oracle-assigned identifier of the ResourcePrincipalConfiguration",
  args: { name: "resource-principal-configuration-id" },
  isRequired: true,
};
const optApiKeyId: Fig.Option = {
  name: "--api-key-id",
  description: "The API key identifier",
  args: { name: "api-key-id" },
  isRequired: true,
};
const optAutoScalingConfigurationId: Fig.Option = {
  name: "--auto-scaling-configuration-id",
  description:
    "Unique Oracle-assigned identifier of the autoscale configuration",
  args: { name: "auto-scaling-configuration-id" },
  isRequired: true,
};
const optBdsCertificateConfigurationId: Fig.Option = {
  name: "--bds-certificate-configuration-id",
  description:
    "Unique Oracle-assigned identifier of the BdsCertificateConfiguration",
  args: { name: "bds-certificate-configuration-id" },
  isRequired: true,
};
const optDurationInMinutes: Fig.Option = {
  name: "--duration-in-minutes",
  description:
    "This value is the minimum period of time to wait before triggering node replacement",
  args: { name: "integer" },
  isRequired: true,
};
const optDurationInMinutes2: Fig.Option = {
  name: "--duration-in-minutes",
  description:
    "This value is the pending duration time to wait for metric emission before triggering node replacement",
  args: { name: "integer" },
};
const optLevelTypeDetails: Fig.Option = {
  name: "--level-type-details",
  args: { name: "json" },
  isRequired: true,
};
const optMetricType: Fig.Option = {
  name: "--metric-type",
  description:
    "Type of compute instance health metric to use for node replacement",
  args: { name: "metric-type" },
  isRequired: true,
};
const optMetricType2: Fig.Option = {
  name: "--metric-type",
  description:
    "Type of compute instance health metric to use for node replacement",
  args: { name: "metric-type" },
};
const optSchedule: Fig.Option = {
  name: "--schedule",
  description:
    "Day/time recurrence (specified following RFC 5545) at which to trigger the backup process",
  args: { name: "schedule" },
  isRequired: true,
};
const optSchedule2: Fig.Option = {
  name: "--schedule",
  description:
    "Day/time recurrence (specified following RFC 5545) at which to trigger the backup process",
  args: { name: "schedule" },
};
const optShape: Fig.Option = {
  name: "--shape",
  description: "Shape of the node",
  args: { name: "shape" },
};
const optWaitForState2: Fig.Option = {
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
    ],
  },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "bds",
  description: "Big Data Service",
  subcommands: [
    {
      name: "node-backup",
      description: "The information about the Node's backup",
      subcommands: [
        {
          name: "delete",
          description: "Delete the NodeBackup represented by the provided ID",
          options: [
            optBdsInstanceId,
            {
              name: "--node-backup-id",
              description: "Unique assigned identifier of the nodeBackupId",
              args: { name: "node-backup-id" },
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
      ],
    },
    {
      name: "bds-capacity-report",
      description:
        "A report of the host capacity within an availability domain that is available for you to create bds clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a detailed capacity report for BDS service",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID for the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--shape-availabilities",
              description:
                "Information about the shapes in the capacity report",
              args: { name: "json" },
              isRequired: true,
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
          name: "list",
          description:
            "Returns a paginated list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-configuration",
      description: "Details about the identity configuration",
      subcommands: [
        {
          name: "activate-iam-user-sync-configuration",
          description:
            "Activate IAM user sync configuration for the given identity configuration",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            optClusterAdminPassword,
            optSecretId,
            {
              name: "--is-posix-attributes-addition-required",
              description:
                "Whether posix attribute needs to be appended to users",
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
          name: "activate-upst-configuration",
          description:
            "Activate UPST configuration for the given identity configuration",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            {
              name: "--vault-id",
              description:
                "OCID of the vault to store token exchange service principal keyta, required for creating UPST configb",
              args: { name: "vault-id" },
              isRequired: true,
            },
            {
              name: "--master-encryption-key-id",
              description:
                "OCID of the master encryption key in vault for encrypting token exchange service principal keytab",
              args: { name: "master-encryption-key-id" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create an identity configuration for the cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--display-name",
              description:
                "Display name of the identity configuration, required for creating identity configuration",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--identity-domain-id",
              description:
                "Identity domain OCID to use for identity config, required for creating identity configuration",
              args: { name: "identity-domain-id" },
              isRequired: true,
            },
            {
              name: "--confidential-application-id",
              description:
                "Identity domain confidential application ID for the identity config",
              args: { name: "confidential-application-id" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            { name: "--upst-configuration-details", args: { name: "json" } },
            {
              name: "--iam-user-sync-configuration-details",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deactivate-iam-user-sync-configuration",
          description: "Deactivate the IAM user sync configuration",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deactivate-upst-configuration",
          description:
            "Deactivate the UPST configuration represented by the provided ID",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            optClusterAdminPassword,
            optSecretId,
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
            "Delete the identity configuration represented by the provided ID",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
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
          description: "Get details of one identity config on the cluster",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of all identity configurations associated with this Big Data Service cluster",
          options: [
            optBdsInstanceId,
            optCompartmentId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "The state of the identity config",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "refresh-confidential-application",
          description:
            "Refresh confidential application for the given identity configuration in case of any update to",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "refresh-upst-token-exchange-keytab",
          description:
            "Refresh token exchange kerberos principal keytab for the UPST enabled identity configuration",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            optClusterAdminPassword,
            optSecretId,
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
            "Update the IAM user sync and UPST configuration for the specified identity configuration",
          options: [
            optBdsInstanceId,
            optIdentityConfigurationId,
            optClusterAdminPassword,
            optSecretId,
            { name: "--upst-configuration-details", args: { name: "json" } },
            {
              name: "--iam-user-sync-configuration-details",
              args: { name: "json" },
            },
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
      name: "node-replace-configuration",
      description: "The information about the NodeReplaceConfiguration",
      subcommands: [
        {
          name: "remove",
          description: "Deletes a nodeReplaceConfiguration",
          options: [
            optBdsInstanceId,
            optNodeReplaceConfigurationId,
            optClusterAdminPassword,
            optSecretId,
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
      name: "work-request",
      description: "Description of the work request status",
      subcommands: [
        {
          name: "get",
          description:
            "Returns the status of the work request identified by the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "bds-capacity-reservation",
      description: "A reusable BDS capacity reservation resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a BDS capacity reservation into a different compartment",
          options: [
            optBdsCapacityReservationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the BDS capacity reservation to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a reusable BDS capacity reservation resource",
          options: [
            {
              name: "--display-name",
              description:
                "A user-friendly name for the BDS capacity reservation",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the BDS capacity reservation",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--compute-capacity-reservations",
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
            "Deletes the BDS capacity reservation identified by the given ID",
          options: [
            optBdsCapacityReservationId,
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
                  "UPDATING",
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
          name: "get",
          description:
            "Returns information about the BDS capacity reservation identified by the given ID",
          options: [optBdsCapacityReservationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of BDS capacity reservations in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "The lifecycle state of the BDS capacity reservation",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the BDS capacity reservation identified by the given ID",
          options: [
            optBdsCapacityReservationId,
            {
              name: "--display-name",
              description:
                "A user-friendly name for the BDS capacity reservation",
              args: { name: "display-name" },
            },
            { name: "--compute-capacity-reservations", args: { name: "json" } },
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
                  "UPDATING",
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
      name: "bds-metastore-configuration",
      description: "The metastore configuration information",
      subcommands: [
        {
          name: "activate",
          description: "Activate specified metastore configuration",
          options: [
            optBdsInstanceId,
            optMetastoreConfigId,
            {
              name: "--bds-api-key-passphrase",
              description: "Base-64 encoded passphrase of the BDS Api Key",
              args: { name: "bds-api-key-passphrase" },
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create and activate external metastore configuration",
          options: [
            optBdsInstanceId,
            {
              name: "--metastore-id",
              description: "The OCID of the Data Catalog metastore",
              args: { name: "metastore-id" },
              isRequired: true,
            },
            {
              name: "--bds-api-key-id",
              description:
                "The ID of BDS Api Key used for Data Catalog metastore integration",
              args: { name: "bds-api-key-id" },
              isRequired: true,
            },
            {
              name: "--bds-api-key-passphrase",
              description: "Base-64 encoded passphrase of the BDS Api Key",
              args: { name: "bds-api-key-passphrase" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the metastore configuration",
              args: { name: "display-name" },
            },
            optClusterAdminPassword,
            optSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Delete the BDS metastore configuration represented by the provided ID",
          options: [
            optBdsInstanceId,
            optMetastoreConfigId,
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
            "Returns the BDS Metastore configuration information for the given ID",
          options: [optBdsInstanceId, optMetastoreConfigId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of metastore configurations ssociated with this Big Data Service cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--metastore-type",
              description:
                "The type of the metastore in the metastore configuration",
              args: { suggestions: ["LOCAL", "EXTERNAL"] },
            },
            {
              name: "--metastore-id",
              description:
                "The OCID of the Data Catalog metastore in the metastore configuration",
              args: { name: "metastore-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "The lifecycle state of the metastore in the metastore configuration",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            {
              name: "--bds-api-key-id",
              description:
                "The ID of the API key that is associated with the external metastore in the metastore configuration",
              args: { name: "bds-api-key-id" },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "test",
          description: "Test specified metastore configuration",
          options: [
            optBdsInstanceId,
            optMetastoreConfigId,
            optClusterAdminPassword,
            optSecretId,
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
            "Update the BDS metastore configuration represented by the provided ID",
          options: [
            optBdsInstanceId,
            optMetastoreConfigId,
            {
              name: "--display-name",
              description: "The display name of the metastore configuration",
              args: { name: "display-name" },
            },
            {
              name: "--bds-api-key-id",
              description:
                "The ID of BDS Api Key used for Data Catalog metastore integration",
              args: { name: "bds-api-key-id" },
            },
            {
              name: "--bds-api-key-passphrase",
              description: "Base-64 encoded passphrase of the BDS Api Key",
              args: { name: "bds-api-key-passphrase" },
            },
            optClusterAdminPassword,
            optSecretId,
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
      name: "bds-certificate-configuration",
      description: "The BDS certificate configuration information",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the BDS certificate configuration for the given ID",
          options: [
            optBdsInstanceId,
            optBdsCertificateConfigurationId,
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
            "Returns details of the BdsCertificateConfiguration identified by the given ID",
          options: [
            optBdsInstanceId,
            optBdsCertificateConfigurationId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of BDS certificate configurations associated with this Big Data Service cluster",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "The state of the BdsCertificateConfiguration",
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
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "set-default",
          description:
            "Set specified BDS certificate configuration as default configuration",
          options: [
            optBdsInstanceId,
            optBdsCertificateConfigurationId,
            optClusterAdminPassword,
            optSecretId,
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
      name: "resource-principal-configuration",
      description: "Resource Principal Session Token Details",
      subcommands: [
        {
          name: "remove",
          description:
            "Delete the resource principal configuration for the cluster",
          options: [
            optBdsInstanceId,
            optResourcePrincipalConfigurationId,
            optClusterAdminPassword3,
            optSecretId,
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
      name: "bds-api-key",
      description: "The API key information",
      subcommands: [
        {
          name: "create",
          description: "Create an API key on behalf of the specified user",
          options: [
            optBdsInstanceId,
            {
              name: "--user-id",
              description:
                "The OCID of the user for whom this new generated API key pair will be created",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--passphrase",
              description:
                "Base64 passphrase used to secure the private key which will be created on user behalf",
              args: { name: "passphrase" },
              isRequired: true,
            },
            {
              name: "--key-alias",
              description:
                "User friendly identifier used to uniquely differentiate between different API keys associated with this Big",
              args: { name: "key-alias" },
              isRequired: true,
            },
            {
              name: "--default-region",
              description:
                "The name of the region to establish the Object Storage endpoint",
              args: { name: "default-region" },
            },
            {
              name: "--domain-ocid",
              description: "Identity domain OCID , where user is present",
              args: { name: "domain-ocid" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the user's API key represented by the provided ID",
          options: [
            optBdsInstanceId,
            optApiKeyId,
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
            "Returns the user's API key information for the given ID",
          options: [optBdsInstanceId, optApiKeyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all API keys associated with this Big Data Service cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--lifecycle-state",
              description: "The state of the API key",
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
            {
              name: "--user-id",
              description: "The OCID of the user for whom the API key belongs",
              args: { name: "user-id" },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "test-bds-object-storage-connection",
          description:
            "Test access to specified Object Storage bucket using the API key",
          options: [
            optBdsInstanceId,
            optApiKeyId,
            {
              name: "--object-storage-uri",
              description:
                "An Oracle Cloud Infrastructure URI to which this connection must be attempted",
              args: { name: "object-storage-uri" },
              isRequired: true,
            },
            {
              name: "--passphrase",
              description:
                "Base64 passphrase used to secure the private key which will be created on user behalf",
              args: { name: "passphrase" },
              isRequired: true,
            },
            {
              name: "--object-storage-region",
              description:
                "The name of the region to establish the Object Storage endpoint",
              args: { name: "object-storage-region" },
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
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a paginated list of errors for a work request identified by the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "bds-cluster-version",
      description:
        "Cluster version details including bds and odh version information",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of cluster versions with associated odh and bds versions",
          options: [
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["bdsVersion"] },
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
      name: "node-backup-configuration",
      description: "The information about the NodeBackupConfiguration",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the NodeBackupConfiguration represented by the provided ID",
          options: [
            optBdsInstanceId,
            optNodeBackupConfigurationId,
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
      name: "bds-capacity-reservation-configuration",
      description:
        "A configuration between a BDS cluster and a BDS capacity reservation",
      subcommands: [
        {
          name: "activate",
          description:
            "Activates the BDS capacity reservation configuration identified by the given ID",
          options: [
            optBdsInstanceId,
            optBdsCapacityReservationConfigurationId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a configuration between the specified BDS cluster and a BDS capacity reservation",
          options: [
            optBdsInstanceId,
            {
              name: "--display-name",
              description:
                "A user-friendly name for the BDS capacity reservation configuration",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--bds-capacity-reservation-id",
              description:
                "The OCID of the BDS capacity reservation to associate with the BDS cluster",
              args: { name: "bds-capacity-reservation-id" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description:
            "Deactivates the BDS capacity reservation configuration identified by the given ID",
          options: [
            optBdsInstanceId,
            optBdsCapacityReservationConfigurationId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the BDS capacity reservation configuration identified by the given ID",
          options: [
            optBdsInstanceId,
            optBdsCapacityReservationConfigurationId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns information about the BDS capacity reservation configuration identified by the given ID",
          options: [
            optBdsInstanceId,
            optBdsCapacityReservationConfigurationId,
            optFromJson,
          ],
        },
        {
          name: "list-bds-capacity-reservation-associated-configurations",
          description:
            "Returns a list of BDS capacity reservation configurations associated with the specified BDS capacity",
          options: [
            optBdsCapacityReservationId,
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "The lifecycle state of the BDS capacity reservation configuration",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of BDS capacity reservation configurations for the specified BDS cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--lifecycle-state",
              description:
                "The lifecycle state of the BDS capacity reservation configuration",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the BDS capacity reservation configuration identified by the given ID",
          options: [
            optBdsInstanceId,
            optBdsCapacityReservationConfigurationId,
            {
              name: "--bds-capacity-reservation-id",
              description:
                "The OCID of the BDS capacity reservation to associate with the BDS cluster",
              args: { name: "bds-capacity-reservation-id" },
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the BDS capacity reservation configuration",
              args: { name: "display-name" },
            },
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
      name: "instance",
      description: "Description of the cluster",
      subcommands: [
        {
          name: "backup-node",
          description: "Takes a backup of given nodes",
          options: [
            optBdsInstanceId,
            optLevelTypeDetails,
            optBackupType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "backup-node-node-type-level-details",
          description: "Takes a backup of given nodes",
          options: [
            optBdsInstanceId,
            optLevelTypeDetailsNodeType,
            optBackupType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "backup-node-node-level-details",
          description: "Takes a backup of given nodes",
          options: [
            optBdsInstanceId,
            optLevelTypeDetailsNodeHostName,
            optBackupType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "certificate-service-info",
          description: "A list of services and their certificate details",
          options: [
            optBdsInstanceId,
            {
              name: "--services",
              description:
                "List of services for which TLS/SSL needs to be enabled",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a Big Data Service cluster into a different compartment",
          options: [
            optBdsInstanceId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-shape",
          description:
            "Changes the size of a cluster by scaling up or scaling down the nodes",
          options: [
            optBdsInstanceId,
            { name: "--nodes", args: { name: "json" }, isRequired: true },
            optClusterAdminPassword2,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-bds-certificate-configuration",
          description: "Create a BDS certificate configuration for the cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--display-name",
              description:
                "The display name of the BDS certificate configuration",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--certificate-type",
              description:
                "The type of the BDS certificate configuration, also the type of the BDS certificates which will be generated",
              args: { name: "certificate-type" },
              isRequired: true,
            },
            {
              name: "--certificate-authority-id",
              description:
                "The OCID of the certificate authority which is associated with this certificate configuration",
              args: { name: "certificate-authority-id" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment of the certificate authority connecting to this certificate configuration",
              args: { name: "compartment-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a Big Data Service cluster",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description: "Name of the Big Data Service cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--cluster-version",
              description: "Version of the Hadoop distribution",
              args: { name: "cluster-version" },
              isRequired: true,
            },
            {
              name: "--cluster-public-key",
              description:
                "The SSH public key used to authenticate the cluster connection",
              args: { name: "cluster-public-key" },
              isRequired: true,
            },
            {
              name: "--is-high-availability",
              description:
                "Boolean flag specifying whether or not the cluster is highly available (HA)",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--is-secure",
              description:
                "Boolean flag specifying whether or not the cluster should be set up as secure",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--nodes",
              description: "The list of nodes in the Big Data Service cluster",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword2,
            optSecretId,
            {
              name: "--is-secret-reused",
              description:
                "Boolean flag specifying whether or not to persist the provided secret OCID and reuse it for future operations",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--network-config", args: { name: "json" } },
            {
              name: "--bootstrap-script-url",
              description:
                "Pre-authenticated URL of the script in Object Store that is downloaded and executed",
              args: { name: "bootstrap-script-url" },
            },
            {
              name: "--bds-capacity-reservation-configurations",
              description:
                "Optional BDS capacity reservation configurations to associate with the cluster during creation",
              args: { name: "json" },
            },
            {
              name: "--kerberos-realm-name",
              description: "The user-defined kerberos realm name",
              args: { name: "kerberos-realm-name" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the Key Management master encryption key",
              args: { name: "kms-key-id" },
            },
            {
              name: "--cluster-profile",
              description: "Profile of the Big Data Service cluster",
              args: { name: "cluster-profile" },
            },
            { name: "--bds-cluster-version-summary", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-node-backup-configuration",
          description:
            "Add a node volume backup configuration to the cluster for an indicated node type or node",
          options: [
            optBdsInstanceId,
            optLevelTypeDetails,
            optSchedule,
            optDisplayName,
            optTimezone,
            optNumberOfBackupsToRetain,
            optBackupType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-node-backup-configuration-node-type-level-details",
          description:
            "Add a node volume backup configuration to the cluster for an indicated node type or node",
          options: [
            optBdsInstanceId,
            optSchedule,
            optLevelTypeDetailsNodeType,
            optDisplayName,
            optTimezone,
            optNumberOfBackupsToRetain,
            optBackupType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-node-backup-configuration-node-level-details",
          description:
            "Add a node volume backup configuration to the cluster for an indicated node type or node",
          options: [
            optBdsInstanceId,
            optSchedule,
            optLevelTypeDetailsNodeHostName,
            optDisplayName,
            optTimezone,
            optNumberOfBackupsToRetain,
            optBackupType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-node-replace-configuration",
          description: "Add a nodeReplaceConfigurations to the cluster",
          options: [
            optBdsInstanceId,
            optLevelTypeDetails,
            optMetricType,
            optDurationInMinutes,
            optDisplayName,
            optClusterAdminPassword,
            optSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-node-replace-configuration-node-type-level-details",
          description: "Add a nodeReplaceConfigurations to the cluster",
          options: [
            optBdsInstanceId,
            optMetricType,
            optDurationInMinutes,
            optLevelTypeDetailsNodeType,
            optDisplayName,
            optClusterAdminPassword,
            optSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-node-replace-configuration-node-level-details",
          description: "Add a nodeReplaceConfigurations to the cluster",
          options: [
            optBdsInstanceId,
            optMetricType,
            optDurationInMinutes,
            optLevelTypeDetailsNodeHostName,
            optDisplayName,
            optClusterAdminPassword,
            optSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-resource-principal-configuration",
          description:
            "Create a resource principal session token configuration",
          options: [
            optBdsInstanceId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optClusterAdminPassword3,
            optSecretId,
            {
              name: "--session-token-life-span-duration-in-hours",
              description:
                "Life span in hours for the resource principal session token",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the cluster identified by the given ID",
          options: [
            optBdsInstanceId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-certificate",
          description:
            "Disabling TLS/SSL for various ODH services running on the BDS cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--services",
              description:
                "List of services for which certificate needs to be disabled",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-certificate",
          description:
            "Configuring TLS/SSL for various ODH services running on the BDS cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--services",
              description:
                "List of services for which certificate needs to be enabled",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            {
              name: "--root-certificate",
              description:
                "Plain text certificate/s in order, separated by new line character",
              args: { name: "root-certificate" },
            },
            {
              name: "--host-cert-details",
              description:
                "List of leaf certificates to use for services on each host",
              args: { name: "json" },
            },
            {
              name: "--server-key-password",
              description:
                "Base-64 encoded password for CA certificate's private key",
              args: { name: "server-key-password" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "execute-bootstrap-script",
          description: "Execute bootstrap script",
          options: [
            optBdsInstanceId,
            optClusterAdminPassword,
            optSecretId,
            {
              name: "--bootstrap-script-url",
              description:
                "Pre-authenticated URL of the bootstrap script in Object Store that can be downloaded and executed",
              args: { name: "bootstrap-script-url" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "force-refresh-resource-principal",
          description: "Force Refresh Resource Principal for the cluster",
          options: [
            optBdsInstanceId,
            optResourcePrincipalConfigurationId,
            optClusterAdminPassword3,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-bds-certificate",
          description: "Generating certificates under BDS cluster nodes",
          options: [
            optBdsInstanceId,
            {
              name: "--manage-certificate-level-type-details",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-bds-certificate-node-level-manage-bds-certificate-details",
          description: "Generating certificates under BDS cluster nodes",
          options: [
            optBdsInstanceId,
            {
              name: "--manage-certificate-level-type-details-node-host-names",
              description:
                "Host name(s) of the specified node(s) to generate or renew BDS certificate(s)",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-bds-certificate-config-level-manage-bds-certificate-details",
          description: "Generating certificates under BDS cluster nodes",
          options: [
            optBdsInstanceId,
            {
              name: "--manage-certificate-level-type-details-certificate-configuration-id",
              description:
                "The id of the BDS certificate configuration used to generate or renew BDS certificate(s)",
              args: {
                name: "manage-certificate-level-type-details-certificate-configuration-id",
              },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            {
              name: "--manage-certificate-level-type-details-is-missing-nodes-only",
              description:
                "Boolean flag specifying whether the request will only generate certificates for nodes which do not have",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
            "Returns information about the Big Data Service cluster identified by the given ID",
          options: [optBdsInstanceId, optFromJson],
        },
        {
          name: "get-node-backup",
          description:
            "Returns details of NodeBackup identified by the given ID",
          options: [
            optBdsInstanceId,
            {
              name: "--node-backup-id",
              description: "Unique assigned identifier of the nodeBackupId",
              args: { name: "node-backup-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-node-backup-configuration",
          description:
            "Returns details of the NodeBackupConfiguration identified by the given ID",
          options: [
            optBdsInstanceId,
            optNodeBackupConfigurationId,
            optFromJson,
          ],
        },
        {
          name: "get-node-replace-configuration",
          description:
            "Returns details of the nodeReplaceConfiguration identified by the given ID",
          options: [
            optBdsInstanceId,
            optNodeReplaceConfigurationId,
            optFromJson,
          ],
        },
        {
          name: "get-os-patch-details",
          description: "Get the details of an os patch",
          options: [
            optBdsInstanceId,
            {
              name: "--os-patch-version",
              description: "The version of the OS patch",
              args: { name: "os-patch-version" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get-resource-principal-configuration",
          description:
            "Returns details of the resourcePrincipalConfiguration identified by the given ID",
          options: [
            optBdsInstanceId,
            optResourcePrincipalConfigurationId,
            optFromJson,
          ],
        },
        {
          name: "get-software-update",
          description:
            "Get the details of the software update of the given SoftwareUpdateId",
          options: [
            optBdsInstanceId,
            {
              name: "--software-update-key",
              description: "The unique identifier of the software update",
              args: { name: "software-update-key" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "install-os-patch",
          description: "Install an os patch on a cluster",
          options: [
            optBdsInstanceId,
            optOsPatchVersion,
            optClusterAdminPassword,
            optSecretId,
            { name: "--patching-configs", args: { name: "json" } },
            optIsDryRun,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "install-os-patch-batching-based-patching-configs",
          description: "Install an os patch on a cluster",
          options: [
            optBdsInstanceId,
            optOsPatchVersion,
            {
              name: "--patching-configs-batch-size",
              description:
                "How many nodes to be patched and rebooted in each iteration",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--patching-configs-wait-time-between-batch-in-seconds",
              description: "The wait time between batches in seconds",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--patching-configs-tolerance-threshold-per-batch",
              description:
                "Acceptable number of failed-to-be-patched nodes in each batch",
              args: { name: "integer" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIsDryRun,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "install-os-patch-downtime-based-patching-configs",
          description: "Install an os patch on a cluster",
          options: [
            optBdsInstanceId,
            optOsPatchVersion,
            optClusterAdminPassword,
            optSecretId,
            optIsDryRun,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "install-os-patch-domain-based-patching-configs",
          description: "Install an os patch on a cluster",
          options: [
            optBdsInstanceId,
            optOsPatchVersion,
            {
              name: "--patching-configs-wait-time-between-domain-in-seconds",
              description: "The wait time between AD/FD in seconds",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--patching-configs-tolerance-threshold-per-domain",
              description:
                "Acceptable number of failed-to-be-patched nodes in each domain",
              args: { name: "integer" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIsDryRun,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "install-patch",
          description: "Install the specified patch to this cluster",
          options: [
            optBdsInstanceId,
            optClusterAdminPassword,
            optSecretId,
            { name: "--patching-config", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPatchVersion,
            optFromJson,
          ],
        },
        {
          name: "install-patch-downtime-based-odh-patching-config",
          description: "Install the specified patch to this cluster",
          options: [
            optBdsInstanceId,
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPatchVersion,
            optFromJson,
          ],
        },
        {
          name: "install-patch-domain-based-odh-patching-config",
          description: "Install the specified patch to this cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--patching-config-wait-time-between-domain-in-seconds",
              description: "The wait time between AD/FD in seconds",
              args: { name: "integer" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            {
              name: "--patching-config-tolerance-threshold-per-domain",
              description:
                "Acceptable number of failed-to-be-patched nodes in each domain",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPatchVersion,
            optFromJson,
          ],
        },
        {
          name: "install-patch-batching-based-odh-patching-config",
          description: "Install the specified patch to this cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--patching-config-batch-size",
              description: "How many nodes to be patched in each iteration",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--patching-config-wait-time-between-batch-in-seconds",
              description: "The wait time between batches in seconds",
              args: { name: "integer" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            {
              name: "--patching-config-tolerance-threshold-per-batch",
              description:
                "Acceptable number of failed-to-be-patched nodes in each batch",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPatchVersion,
            optFromJson,
          ],
        },
        {
          name: "install-software-updates",
          description: "Install the specified software update to this cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--software-update-keys",
              description:
                "A list of unique identifiers of target software updates",
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
          name: "list",
          description:
            "Returns a list of all Big Data Service clusters in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description: "The state of the cluster",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "SUSPENDING",
                  "SUSPENDED",
                  "RESUMING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                ],
              },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-node-backup-configurations",
          description: "Returns information about the NodeBackupConfigurations",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "The state of the NodeBackupConfiguration configuration",
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
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-node-backups",
          description: "Returns information about the node Backups",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            {
              name: "--node-host-name",
              description:
                "The node host name belonged to a node that has a node backup",
              args: { name: "node-host-name" },
            },
            {
              name: "--lifecycle-state",
              description: "The state of the Node's Backup",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "PARTIAL",
                ],
              },
            },
            {
              name: "--display-name",
              description: "The display name belonged to the node backup",
              args: { name: "display-name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-node-replace-configurations",
          description: "Returns information about the NodeReplaceConfiguration",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "The state of the NodeReplaceConfiguration",
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
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-os-patches",
          description: "List all available os patches for a given cluster",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optIfMatch,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-patch-histories",
          description: "List the patch history of this cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--lifecycle-state",
              description: "The status of the patch",
              args: { suggestions: ["INSTALLING", "INSTALLED", "FAILED"] },
            },
            {
              name: "--patch-version",
              description: "The version of the patch",
              args: { name: "patch-version" },
            },
            optSortBy,
            optSortOrder,
            optPage,
            optLimit,
            {
              name: "--patch-type",
              description: "The type of a BDS patch history entity",
              args: { suggestions: ["ODH", "OS", "BDS"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-patches",
          description: "List all the available patches for this cluster",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-resource-principal-configurations",
          description:
            "Returns information about the ResourcePrincipalConfiguration",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "The state of the ResourcePrincipalConfiguration",
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
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-software-updates",
          description:
            "List all the available software updates for current cluster",
          options: [
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optIfMatch,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "renew-bds-certificate",
          description: "Renewing certificates under BDS cluster nodes",
          options: [
            optBdsInstanceId,
            {
              name: "--manage-certificate-level-type-details",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "renew-bds-certificate-node-level-manage-bds-certificate-details",
          description: "Renewing certificates under BDS cluster nodes",
          options: [
            optBdsInstanceId,
            {
              name: "--manage-certificate-level-type-details-node-host-names",
              description:
                "Host name(s) of the specified node(s) to generate or renew BDS certificate(s)",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "renew-bds-certificate-config-level-manage-bds-certificate-details",
          description: "Renewing certificates under BDS cluster nodes",
          options: [
            optBdsInstanceId,
            {
              name: "--manage-certificate-level-type-details-certificate-configuration-id",
              description:
                "The id of the BDS certificate configuration used to generate or renew BDS certificate(s)",
              args: {
                name: "manage-certificate-level-type-details-certificate-configuration-id",
              },
              isRequired: true,
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            {
              name: "--manage-certificate-level-type-details-is-missing-nodes-only",
              description:
                "Boolean flag specifying whether the request will only generate certificates for nodes which do not have",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "renew-certificate",
          description:
            "Renewing TLS/SSL for various ODH services running on the BDS cluster",
          options: [
            optBdsInstanceId,
            optClusterAdminPassword,
            optSecretId,
            {
              name: "--services",
              description:
                "List of services for which certificate needs to be renewed",
              args: { name: "json" },
            },
            {
              name: "--root-certificate",
              description:
                "Plain text certificate/s in order, separated by new line character",
              args: { name: "root-certificate" },
            },
            {
              name: "--host-cert-details",
              description:
                "List of leaf certificates to use for services on each host",
              args: { name: "json" },
            },
            {
              name: "--server-key-password",
              description:
                "Base-64 encoded password for CA certificate's private key",
              args: { name: "server-key-password" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "replace-node",
          description:
            "Replaces a node of a Big Data Service cluster from backup",
          options: [
            optBdsInstanceId,
            {
              name: "--node-host-name",
              description: "Host name of the node to replace",
              args: { name: "node-host-name" },
              isRequired: true,
            },
            {
              name: "--node-backup-id",
              description:
                "The id of the nodeBackup to use for replacing the node",
              args: { name: "node-backup-id" },
            },
            optClusterAdminPassword,
            {
              name: "--heterogeneous-shapes",
              description:
                "Heterogeneous shape of the node if the default shape is not available",
              args: { name: "json" },
            },
            optSecretId,
            {
              name: "--shape",
              description: "Shape of the new vm when replacing the node",
              args: { name: "shape" },
            },
            {
              name: "--if-match",
              description: "This if-match is for the BdsInstance",
              args: { name: "if-match" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "restart-node",
          description: "Restarts a single node of a Big Data Service cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--node-id",
              description: "OCID of the node to be restarted",
              args: { name: "node-id" },
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
          description: "Starts the BDS cluster that was stopped earlier",
          options: [
            optBdsInstanceId,
            optClusterAdminPassword,
            optSecretId,
            { name: "--start-cluster-shape-configs", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description:
            "Stops the BDS cluster that can be started at later point of time",
          options: [
            optBdsInstanceId,
            {
              name: "--is-force-stop-jobs",
              description:
                "Boolean indicating whether to force stop jobs while stopping cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optClusterAdminPassword,
            optSecretId,
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
            "Updates the Big Data Service cluster identified by the given ID",
          options: [
            optBdsInstanceId,
            optSecretId,
            {
              name: "--is-secret-reused",
              description:
                "Boolean flag specifying whether or not to persist the provided secret OCID and reuse it for future operations",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--display-name",
              description: "Name of the cluster",
              args: { name: "display-name" },
            },
            {
              name: "--bootstrap-script-url",
              description:
                "Pre-authenticated URL of the bootstrap script in Object Store that can be downloaded and executed",
              args: { name: "bootstrap-script-url" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the Key Management master encryption key",
              args: { name: "kms-key-id" },
            },
            { name: "--network-config", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-node-backup-configuration",
          description:
            "Updates fields on NodeBackupConfiguration, including the name, the schedule",
          options: [
            optBdsInstanceId,
            optNodeBackupConfigurationId,
            { name: "--level-type-details", args: { name: "json" } },
            optDisplayName,
            optTimezone,
            optSchedule2,
            optNumberOfBackupsToRetain,
            optBackupType,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-node-backup-configuration-node-type-level-details",
          description:
            "Updates fields on NodeBackupConfiguration, including the name, the schedule",
          options: [
            optBdsInstanceId,
            optNodeBackupConfigurationId,
            optLevelTypeDetailsNodeType,
            optDisplayName,
            optTimezone,
            optSchedule2,
            optNumberOfBackupsToRetain,
            optBackupType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-node-backup-configuration-node-level-details",
          description:
            "Updates fields on NodeBackupConfiguration, including the name, the schedule",
          options: [
            optBdsInstanceId,
            optNodeBackupConfigurationId,
            optLevelTypeDetailsNodeHostName,
            optDisplayName,
            optTimezone,
            optSchedule2,
            optNumberOfBackupsToRetain,
            optBackupType,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-node-replace-configuration",
          description:
            "Updates fields on nodeReplaceConfigurations, including the name, the schedule",
          options: [
            optBdsInstanceId,
            optNodeReplaceConfigurationId,
            { name: "--level-type-details", args: { name: "json" } },
            optDisplayName,
            optMetricType2,
            optDurationInMinutes2,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-node-replace-configuration-node-type-level-details",
          description:
            "Updates fields on nodeReplaceConfigurations, including the name, the schedule",
          options: [
            optBdsInstanceId,
            optNodeReplaceConfigurationId,
            optLevelTypeDetailsNodeType,
            optDisplayName,
            optMetricType2,
            optDurationInMinutes2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-node-replace-configuration-node-level-details",
          description:
            "Updates fields on nodeReplaceConfigurations, including the name, the schedule",
          options: [
            optBdsInstanceId,
            optNodeReplaceConfigurationId,
            optLevelTypeDetailsNodeHostName,
            optDisplayName,
            optMetricType2,
            optDurationInMinutes2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-resource-principal-configuration",
          description:
            "Updates fields on resourcePrincipalConfiguration, including the name, the lifeSpanInHours of the token",
          options: [
            optBdsInstanceId,
            optResourcePrincipalConfigurationId,
            optDisplayName,
            {
              name: "--session-token-life-span-duration-in-hours",
              description:
                "Life span in hours for the resource principal session token",
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
          name: "remove-nodes",
          description: "Removes list of nodes from a Big Data Service cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--instance-ids",
              description: "List of instance IDs to be removed",
              args: { name: "json" },
              isRequired: true,
            },
            optClusterAdminPassword2,
            optSecretId,
            {
              name: "--is-force-remove-enabled",
              description:
                "Boolean flag specifying whether or not to force remove nodes if graceful removal fails",
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
          name: "remove",
          description: "Remove a single node of a Big Data Service cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--node-id",
              description: "OCID of the node to be removed",
              args: { name: "node-id" },
              isRequired: true,
            },
            optClusterAdminPassword2,
            optSecretId,
            {
              name: "--is-force-remove-enabled",
              description:
                "Boolean flag specifying whether or not to force remove node if graceful removal fails",
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
          name: "reset-password",
          description:
            "Admin function which allows the password reset of indicated service",
          options: [
            optBdsInstanceId,
            {
              name: "--service",
              description: "Target service to which this operation applies",
              args: { suggestions: ["AMBARI", "HUE", "RANGER", "JUPYTERHUB"] },
              isRequired: true,
            },
            optClusterAdminPassword,
            {
              name: "--secret-id",
              description: "The secretId for the cluster admin user",
              args: { name: "secret-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "worker-nodes",
          description:
            "Increases the size (scales out) of a cluster by adding worker nodes (data/compute/edge)",
          subcommands: [
            {
              name: "add",
              description:
                "Increases the size (scales out) of a cluster by adding worker nodes (data/compute/edge)",
              options: [
                optBdsInstanceId,
                {
                  name: "--number-of-worker-nodes",
                  description:
                    "Number of additional worker nodes for the cluster",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--node-type",
                  description:
                    "Worker node types, can either be Worker Data node or Compute only worker node",
                  args: {
                    suggestions: [
                      "WORKER",
                      "COMPUTE_ONLY_WORKER",
                      "EDGE",
                      "KAFKA_BROKER",
                    ],
                  },
                  isRequired: true,
                },
                optClusterAdminPassword2,
                optSecretId,
                optShape,
                optBlockVolumeSizeInGbs,
                optShapeConfig,
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
          name: "master-nodes",
          description:
            "Increases the size (scales out) of a cluster by adding master nodes",
          subcommands: [
            {
              name: "add",
              description:
                "Increases the size (scales out) of a cluster by adding master nodes",
              options: [
                optBdsInstanceId,
                {
                  name: "--number-of-master-nodes",
                  description:
                    "Number of additional master nodes for the cluster",
                  args: { name: "integer" },
                  isRequired: true,
                },
                optClusterAdminPassword3,
                optSecretId,
                optShape,
                optBlockVolumeSizeInGbs,
                optShapeConfig,
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
          name: "utility-nodes",
          description:
            "Increases the size (scales out) of a cluster by adding utility nodes",
          subcommands: [
            {
              name: "add",
              description:
                "Increases the size (scales out) of a cluster by adding utility nodes",
              options: [
                optBdsInstanceId,
                {
                  name: "--number-of-utility-nodes",
                  description:
                    "Number of additional utility nodes for the cluster",
                  args: { name: "integer" },
                  isRequired: true,
                },
                optClusterAdminPassword3,
                optSecretId,
                optShape,
                optBlockVolumeSizeInGbs,
                optShapeConfig,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "kafka",
      description: "Kafka",
      subcommands: [
        {
          name: "add",
          description: "Adds Kafka to a cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--shape",
              description: "Shape of the Kafka broker node",
              args: { name: "shape" },
              isRequired: true,
            },
            {
              name: "--number-of-kafka-nodes",
              description: "Number of Kafka nodes for the cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            optShapeConfig,
            {
              name: "--block-volume-size-in-gbs",
              description:
                "The size of block volme in GB to be attached to the given node",
              args: { name: "integer" },
            },
            optClusterAdminPassword,
            optSecretId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove Kafka from the cluster",
          options: [
            optBdsInstanceId,
            optClusterAdminPassword,
            optSecretId,
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
      name: "block-storage",
      description:
        "Adds block storage to existing worker/compute only worker nodes",
      subcommands: [
        {
          name: "add",
          description:
            "Adds block storage to existing worker/compute only worker nodes",
          options: [
            optBdsInstanceId,
            {
              name: "--block-volume-size-in-gbs",
              description: "The size of block volume in GB to be added",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--node-type",
              description: "Worker node types",
              args: {
                suggestions: [
                  "WORKER",
                  "COMPUTE_ONLY_WORKER",
                  "KAFKA_BROKER",
                  "EDGE",
                ],
              },
              isRequired: true,
            },
            optClusterAdminPassword2,
            optSecretId,
            {
              name: "--node-ids",
              description: "Optional",
              args: { name: "json" },
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
      name: "cloudsql",
      description: "Adds Cloud SQL to your cluster",
      subcommands: [
        {
          name: "add",
          description: "Adds Cloud SQL to your cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--shape",
              description: "Shape of the node",
              args: { name: "shape" },
              isRequired: true,
            },
            optShapeConfig,
            optBlockVolumeSizeInGbs,
            optClusterAdminPassword2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes Cloud SQL from the cluster",
          options: [
            optBdsInstanceId,
            optClusterAdminPassword2,
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
      name: "auto-scale-config",
      description: "Add an autoscale configuration to the cluster",
      subcommands: [
        {
          name: "create",
          description: "Add an autoscale configuration to the cluster",
          options: [
            optBdsInstanceId,
            {
              name: "--node-type",
              description:
                "A node type that is managed by an autoscale configuration",
              args: { name: "node-type" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "Whether the autoscale configuration is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName,
            optClusterAdminPassword2,
            optSecretId,
            { name: "--policy", args: { name: "json" } },
            { name: "--policy-details", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an autoscale configuration",
          options: [
            optBdsInstanceId,
            optAutoScalingConfigurationId,
            optClusterAdminPassword2,
            optSecretId,
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
            "Returns details of the autoscale configuration identified by the given ID",
          options: [
            optBdsInstanceId,
            optAutoScalingConfigurationId,
            optFromJson,
          ],
        },
        {
          name: "edit",
          description:
            "Updates fields on an autoscale configuration, including the name, the threshold value",
          options: [
            optBdsInstanceId,
            optAutoScalingConfigurationId,
            optDisplayName,
            {
              name: "--is-enabled",
              description: "Whether the autoscale configuration is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optClusterAdminPassword2,
            optSecretId,
            { name: "--policy", args: { name: "json" } },
            { name: "--policy-details", args: { name: "json" } },
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
          description:
            "Returns information about the autoscaling configurations for a cluster",
          options: [
            optCompartmentId,
            optBdsInstanceId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description: "The state of the autoscale configuration",
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
