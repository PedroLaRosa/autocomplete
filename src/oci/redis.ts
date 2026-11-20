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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "NEEDS_ATTENTION",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
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
const optRedisClusterId: Fig.Option = {
  name: "--redis-cluster-id",
  description: "The OCID of the cluster",
  args: { name: "redis-cluster-id" },
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
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optOciCacheUserId: Fig.Option = {
  name: "--oci-cache-user-id",
  description:
    "A filter to return only resources, that match with the given OCI cache user ID (OCID)",
  args: { name: "oci-cache-user-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "OCI cache user status",
  args: { name: "status" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optOciCacheBackupId: Fig.Option = {
  name: "--oci-cache-backup-id",
  description: "Unique OCI Cache Backup identifier",
  args: { name: "oci-cache-backup-id" },
  isRequired: true,
};
const optOciCacheConfigSetId: Fig.Option = {
  name: "--oci-cache-config-set-id",
  description: "Unique OCI Cache Config Set identifier",
  args: { name: "oci-cache-config-set-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The the asynchronous request ID",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAclString: Fig.Option = {
  name: "--acl-string",
  description: "ACL string of OCI cache user",
  args: { name: "acl-string" },
  isRequired: true,
};
const optAclString2: Fig.Option = {
  name: "--acl-string",
  description: "ACL string of OCI cache user",
  args: { name: "acl-string" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "OCI cache user compartment ID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The unique identifier for the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description of OCI cache user",
  args: { name: "description" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "Description of OCI cache user",
  args: { name: "description" },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "OCI cache user name is required to connect to an OCI cache cluster",
  args: { name: "name" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const completionSpec: Fig.Spec = {
  name: "redis",
  description: "OCI Cache",
  subcommands: [
    {
      name: "oci-cache-backup",
      description: "Use the OCI Cache CLI to create and manage clusters",
      subcommands: [
        {
          name: "oci-cache-backup-summary",
          description: "Summary of the OCI Cache Backup",
          subcommands: [
            {
              name: "list-oci-cache-backups",
              description: "Returns a list of OCI Cache Backups",
              options: [
                optCompartmentId,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return the OCI Cache Backup resources, whose lifecycle state matches with the given lifecycle",
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
                optDisplayName,
                {
                  name: "--oci-cache-backup-id",
                  description: "Unique OCI Cache Backup identifier",
                  args: { name: "oci-cache-backup-id" },
                },
                {
                  name: "--source-cluster-id",
                  description:
                    "A filter to return the OCI Cache Backup resources, whose source cluster ID matches with the given source",
                  args: { name: "source-cluster-id" },
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
          name: "oci-cache-backup",
          description: "OCI Cache cluster backup information",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves an OCI Cache Backup resource from one compartment identifier to another",
              options: [
                optOciCacheBackupId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment into which the backup should be moved",
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
              description: "Creates a new OCI Cache Backup",
              options: [
                {
                  name: "--display-name",
                  description: "Backup display name",
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
                  name: "--source-cluster-id",
                  description: "OCI Cache cluster identifier",
                  args: { name: "source-cluster-id" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Backup description",
                  args: { name: "description" },
                },
                {
                  name: "--retention-period-in-days",
                  description: "Backup retention period in days",
                  args: { name: "integer" },
                },
                {
                  name: "--backup-source",
                  description:
                    "Specifies whether the backup was created from a replica or primary node",
                  args: { name: "backup-source" },
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
              description: "Deletes an OCI Cache Backup resource by identifier",
              options: [
                optOciCacheBackupId,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export-oci-cache-backup-to-object-storage",
              description:
                "Initiates an asynchronous export of the backup’s RDB file(s) to the specified Object Storage bucket",
              options: [
                optOciCacheBackupId,
                {
                  name: "--namespace-name",
                  description: "The Object Storage namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--bucket-name",
                  description: "The target Object Storage bucket name",
                  args: { name: "bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--prefix",
                  description:
                    "Optional prefix under which the service will place the exported object(s)",
                  args: { name: "prefix" },
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
              description: "Gets an OCI Cache Backup by identifier",
              options: [optOciCacheBackupId, optFromJson],
            },
            {
              name: "update",
              description: "Updates the OCI Cache Backup",
              options: [
                optOciCacheBackupId,
                {
                  name: "--display-name",
                  description: "Backup display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description: "Backup description",
                  args: { name: "description" },
                },
                {
                  name: "--retention-period-in-days",
                  description: "Backup retention period in days",
                  args: { name: "integer" },
                },
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
      ],
    },
    {
      name: "oci-cache-config-set",
      description: "Use the OCI Cache CLI to create and manage clusters",
      subcommands: [
        {
          name: "oci-cache-config-set-summary",
          description: "Summary of information about the OCI Cache Config Set",
          subcommands: [
            {
              name: "list-oci-cache-config-sets",
              description:
                "Lists the OCI Cache Config Sets in the specified compartment",
              options: [
                optCompartmentId,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return the OCI Cache Config Set resources",
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
                {
                  name: "--software-version",
                  description:
                    "A filter to return the OCI Cache Config Set resources",
                  args: {
                    suggestions: [
                      "V7_0_5",
                      "REDIS_7_0",
                      "VALKEY_7_2",
                      "VALKEY_8_1",
                    ],
                  },
                },
                optDisplayName,
                {
                  name: "--id",
                  description: "Unique OCI Cache Config Set identifier",
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
          name: "oci-cache-config-set",
          description:
            "Configurations for OCI Cache to manage the behavior, performance",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves an OCI Cache Config Set into a different compartment within the same tenancy",
              options: [
                optOciCacheConfigSetId,
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
              description:
                "Create a new OCI Cache Config Set for the given OCI cache engine version",
              options: [
                {
                  name: "--display-name",
                  description: "A user-friendly name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that contains the OCI Cache Config Set",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--software-version",
                  description:
                    "The OCI Cache engine version that the cluster is running",
                  args: { name: "software-version" },
                  isRequired: true,
                },
                {
                  name: "--configuration-details",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description:
                    "Description for the custom OCI Cache Config Set",
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
              description: "Deletes the specified OCI Cache Config Set",
              options: [
                optOciCacheConfigSetId,
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
              description: "Retrieves the specified OCI Cache Config Set",
              options: [optOciCacheConfigSetId, optFromJson],
            },
            {
              name: "update",
              description: "Updates the specified OCI Cache Config Set",
              options: [
                optOciCacheConfigSetId,
                {
                  name: "--display-name",
                  description: "A user-friendly name",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description:
                    "Description for the custom OCI Cache Config Set",
                  args: { name: "description" },
                },
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
          name: "associated-oci-cache-cluster-summary",
          description:
            "Summary of the Clusters associated with an OCI Cache Config Set",
          subcommands: [
            {
              name: "list-associated-oci-cache-clusters",
              description:
                "Gets a list of associated OCI Cache clusters for an OCI Cache Config Set",
              options: [
                optOciCacheConfigSetId,
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
    },
    {
      name: "oci-cache-default-config-set",
      description: "Use the OCI Cache CLI to create and manage clusters",
      subcommands: [
        {
          name: "oci-cache-default-config-set",
          description:
            "Default configurations for OCI Cache to manage the behavior, performance",
          subcommands: [
            {
              name: "get",
              description:
                "Retrieves the specified OCI Cache Default Config Set",
              options: [
                optCompartmentId3,
                {
                  name: "--oci-cache-default-config-set-id",
                  description: "Unique OCI Cache Default Config Set identifier",
                  args: { name: "oci-cache-default-config-set-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "oci-cache-default-config-set-summary",
          description:
            "Summary of information about an OCI Cache Default Config Set",
          subcommands: [
            {
              name: "list-oci-cache-default-config-sets",
              description:
                "Lists the OCI Cache Default Config Sets in the specified compartment",
              options: [
                optCompartmentId3,
                {
                  name: "--id",
                  description: "Unique OCI Cache Default Config Set identifier",
                  args: { name: "id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return the OCI Cache Default Config Set resources",
                  args: { suggestions: ["ACTIVE", "INACTIVE"] },
                },
                {
                  name: "--software-version",
                  description:
                    "A filter to return the OCI Cache Config Set resources",
                  args: {
                    suggestions: [
                      "V7_0_5",
                      "REDIS_7_0",
                      "VALKEY_7_2",
                      "VALKEY_8_1",
                    ],
                  },
                },
                optDisplayName,
                optSortBy,
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
    },
    {
      name: "oci-cache-engine-options",
      description: "Use the OCI Cache CLI to create and manage clusters",
      subcommands: [
        {
          name: "oci-cache-engine-option-summary",
          description:
            "Available engine options for creating a OCI Cache cluster",
          subcommands: [
            {
              name: "list-oci-cache-engine-options",
              description: "Lists OCI Cache Engine options",
              options: [
                optCompartmentId3,
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
    },
    {
      name: "oci-cache-user",
      description: "Use the OCI Cache CLI to create and manage clusters",
      subcommands: [
        {
          name: "attached-oci-cache-cluster",
          description: "OciCacheCluster to which the OciCacheUser is attached",
          subcommands: [
            {
              name: "list-attached-redis-clusters",
              description:
                "Gets a list of associated redis cluster for an OCI cache user",
              options: [
                optOciCacheUserId,
                optCompartmentId,
                optDisplayName,
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
          name: "create-oci-cache-user-details",
          description: "Details required to create a new OCI cache user",
          subcommands: [
            {
              name: "create-oci-cache-user",
              description: "Creates a new OCI Cache user",
              options: [
                optName,
                optDescription,
                optCompartmentId2,
                {
                  name: "--authentication-mode",
                  args: { name: "json" },
                  isRequired: true,
                },
                optAclString,
                optStatus,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-oci-cache-user-iam-authentication-mode",
              description: "Creates a new OCI Cache user",
              options: [
                optName,
                optDescription,
                optCompartmentId2,
                optAclString,
                optStatus,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-oci-cache-user-password-authentication-mode",
              description: "Creates a new OCI Cache user",
              options: [
                optName,
                optDescription,
                optCompartmentId2,
                optAclString,
                {
                  name: "--authentication-mode-hashed-passwords",
                  description:
                    "SHA-256 hashed passwords for OCI Cache user,required if authenticationType is set to PASSWORD",
                  args: { name: "json" },
                  isRequired: true,
                },
                optStatus,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "oci-cache-user-summary",
          description: "OCI Cache user summary",
          subcommands: [
            {
              name: "list-oci-cache-users",
              description:
                "Lists the OCI Cache users based on the supplied parameters",
              options: [
                optCompartmentId,
                {
                  name: "--name",
                  description:
                    "A filter to return the resources that match with the given OCI cache user name",
                  args: { name: "name" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return the resources, whose lifecycleState matches with the given lifecycleState",
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
          name: "oci-cache-user",
          description:
            "An OCI cache user is required to connect to an OCI cache cluster",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves an OCI Cache User from one compartment to another within the same tenancy",
              options: [
                optOciCacheUserId,
                {
                  name: "--compartment-id",
                  description:
                    "OCID of the compartment into which the OCI cache user will be moved",
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
              name: "delete",
              description:
                "Deletes an existing OCI Cache User based on the OCI cache user unique ID (OCID)",
              options: [
                optOciCacheUserId,
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
                "Get an existing OCI Cache users based on the ID (OCID)",
              options: [optOciCacheUserId, optFromJson],
            },
            {
              name: "update",
              description: "Update an existing OCI Cache User with new details",
              options: [
                optOciCacheUserId,
                optDescription2,
                { name: "--authentication-mode", args: { name: "json" } },
                optAclString2,
                optStatus,
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
              name: "update-oci-cache-user-iam-authentication-mode",
              description: "Update an existing OCI Cache User with new details",
              options: [
                optOciCacheUserId,
                optDescription2,
                optAclString2,
                optStatus,
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
              name: "update-oci-cache-user-password-authentication-mode",
              description: "Update an existing OCI Cache User with new details",
              options: [
                optOciCacheUserId,
                {
                  name: "--authentication-mode-hashed-passwords",
                  description:
                    "SHA-256 hashed passwords for OCI Cache user,required if authenticationType is set to PASSWORD",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription2,
                optAclString2,
                optStatus,
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
      ],
    },
    {
      name: "redis-cluster",
      description: "Use the OCI Cache CLI to create and manage clusters",
      subcommands: [
        {
          name: "redis-cluster-summary",
          description: "Summary of information about a cluster",
          subcommands: [
            {
              name: "list-redis-clusters",
              description:
                "Lists the OCI Cache clusters in the specified compartment",
              options: [
                optCompartmentId,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources their lifecycleState matches the given lifecycleState",
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
                optDisplayName,
                {
                  name: "--id",
                  description: "The OCID of the cluster",
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
          name: "work-request-error",
          description:
            "An error encountered while executing an operation that is tracked by a work request",
          subcommands: [
            {
              name: "list",
              description: "Returns a list of errors for a given work request",
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
          name: "attached-oci-cache-user",
          description: "OciCacheUser attached to the OciCacheCluster",
          subcommands: [
            {
              name: "list",
              description:
                "Gets a list of associated OCI cache users for a redis cluster",
              options: [
                optRedisClusterId,
                optCompartmentId,
                optDisplayName,
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
          name: "redis-cluster",
          description:
            "An OCI Cache cluster is a memory-based storage solution",
          subcommands: [
            {
              name: "attach",
              description: "Attach existing OCI cache users to a redis cluster",
              options: [
                optRedisClusterId,
                {
                  name: "--oci-cache-users",
                  description: "List of OCI cache user unique IDs (OCIDs)",
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
              name: "change-compartment",
              description:
                "Moves an OCI Cache cluster into a different compartment within the same tenancy",
              options: [
                optRedisClusterId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment into which the cluster should be moved",
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
              name: "convert-to-secondary-cluster",
              description:
                "Converts an existing cluster into a secondary cluster by transforming it into a replica cache that replicates",
              options: [
                {
                  name: "--primary-cluster-id",
                  description: "The OCID of the primary cluster",
                  args: { name: "primary-cluster-id" },
                  isRequired: true,
                },
                optRedisClusterId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "convert-to-standalone-cluster",
              description:
                "Converts a secondary cluster into a standalone cluster so that it operates as an independent cluster",
              options: [
                optRedisClusterId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a new OCI Cache cluster",
              options: [
                {
                  name: "--display-name",
                  description: "A user-friendly name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that contains the cluster",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--node-count",
                  description:
                    "The number of nodes per shard in the cluster when clusterMode is SHARDED",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--software-version",
                  description:
                    "The OCI Cache engine version that the cluster is running",
                  args: { name: "software-version" },
                  isRequired: true,
                },
                {
                  name: "--node-memory-in-gbs",
                  description:
                    "The amount of memory allocated to the cluster's nodes, in gigabytes",
                  args: { name: "number" },
                  isRequired: true,
                },
                {
                  name: "--subnet-id",
                  description: "The OCID of the cluster's subnet",
                  args: { name: "subnet-id" },
                  isRequired: true,
                },
                {
                  name: "--oci-cache-config-set-id",
                  description:
                    "The ID of the corresponding OCI Cache Config Set for the cluster",
                  args: { name: "oci-cache-config-set-id" },
                },
                {
                  name: "--cluster-mode",
                  description:
                    "Specifies whether the cluster is sharded or non-sharded",
                  args: { name: "cluster-mode" },
                },
                {
                  name: "--shard-count",
                  description: "The number of shards in sharded cluster",
                  args: { name: "integer" },
                },
                {
                  name: "--nsg-ids",
                  description:
                    "A list of Network Security Group (NSG) OCIDs associated with this cluster",
                  args: { name: "json" },
                },
                {
                  name: "--security-attributes",
                  description: "Security attributes for redis cluster resource",
                  args: { name: "json" },
                },
                {
                  name: "--backup-id",
                  description:
                    "The ID of the OCI Cache Backup from which this cluster was created.Mutually exclusive",
                  args: { name: "backup-id" },
                },
                {
                  name: "--import-from-object-storage-details",
                  args: { name: "json" },
                },
                {
                  name: "--primary-cluster-id",
                  description:
                    "The OCID of the primary cluster from which data will be replicated",
                  args: { name: "primary-cluster-id" },
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
              description: "Deletes the specified OCI Cache cluster",
              options: [
                optRedisClusterId,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "detach",
              description: "Detach existing OCI cache users to a redis cluster",
              options: [
                optRedisClusterId,
                {
                  name: "--oci-cache-users",
                  description: "List of OCI cache user unique IDs (OCIDs)",
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
              name: "get",
              description: "Retrieves the specified OCI Cache cluster",
              options: [optRedisClusterId, optFromJson],
            },
            {
              name: "switchover",
              description:
                "Switchover the roles between a secondary cluster and its primary cluster",
              options: [
                optRedisClusterId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the specified OCI Cache cluster",
              options: [
                optRedisClusterId,
                {
                  name: "--oci-cache-config-set-id",
                  description:
                    "The ID of the corresponding OCI Cache Config Set for the cluster",
                  args: { name: "oci-cache-config-set-id" },
                },
                {
                  name: "--shard-count",
                  description: "The number of shards in sharded cluster",
                  args: { name: "integer" },
                },
                {
                  name: "--display-name",
                  description: "A user-friendly name",
                  args: { name: "display-name" },
                },
                {
                  name: "--node-count",
                  description:
                    "The number of nodes per shard in the cluster when clusterMode is SHARDED",
                  args: { name: "integer" },
                },
                {
                  name: "--node-memory-in-gbs",
                  description:
                    "The amount of memory allocated to the cluster's nodes, in gigabytes",
                  args: { name: "number" },
                },
                {
                  name: "--software-version",
                  description:
                    "The OCI Cache engine version that the cluster is running",
                  args: { name: "software-version" },
                },
                {
                  name: "--nsg-ids",
                  description:
                    "A list of Network Security Group (NSG) OCIDs associated with this cluster",
                  args: { name: "json" },
                },
                {
                  name: "--security-attributes",
                  description: "Security attributes for redis cluster resource",
                  args: { name: "json" },
                },
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
          name: "work-request-log-entry",
          description:
            "A log message from executing an operation that is tracked by a work request",
          subcommands: [
            {
              name: "list-work-request-logs",
              description: "Returns a list of logs for a given work request",
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
          description: "An asynchronous work request",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels the specified work request",
              options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
            },
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
                optCompartmentId,
                {
                  name: "--work-request-id",
                  description: "The ID of the asynchronous work request",
                  args: { name: "work-request-id" },
                },
                {
                  name: "--status",
                  description:
                    "A filter to return only resources their lifecycleState matches the given OperationStatus",
                  args: {
                    suggestions: [
                      "ACCEPTED",
                      "IN_PROGRESS",
                      "WAITING",
                      "NEEDS_ATTENTION",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELING",
                      "CANCELED",
                    ],
                  },
                },
                {
                  name: "--resource-id",
                  description:
                    "The OCID of the resource affected by the work request",
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
          name: "node-summary",
          description: "The details of each node in the cluster",
          subcommands: [
            {
              name: "list-redis-cluster-nodes",
              description: "Gets the list of all nodes in a cluster",
              options: [
                optRedisClusterId,
                optDisplayName,
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
    },
    {
      name: "redis-identity",
      description: "Use the OCI Cache CLI to create and manage clusters",
      subcommands: [
        {
          name: "create-identity-token-details",
          description: "Generate an Identity token for Redis cluster",
          subcommands: [
            {
              name: "create-identity-token",
              description:
                "Generates an identity token to sign in with the specified redis user for the redis cluster",
              options: [
                {
                  name: "--public-key",
                  description: "User public key pair",
                  args: { name: "public-key" },
                  isRequired: true,
                },
                {
                  name: "--redis-user",
                  description: "Redis User generating identity token",
                  args: { name: "redis-user" },
                  isRequired: true,
                },
                optRedisClusterId,
                optIfMatch,
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
