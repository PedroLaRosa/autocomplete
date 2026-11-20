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
const optDistributedAutonomousDatabaseId: Fig.Option = {
  name: "--distributed-autonomous-database-id",
  description: "Globally distributed autonomous database identifier",
  args: { name: "distributed-autonomous-database-id" },
  isRequired: true,
};
const optDistributedDatabaseId: Fig.Option = {
  name: "--distributed-database-id",
  description: "Globally distributed database identifier",
  args: { name: "distributed-database-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDistributedDatabasePrivateEndpointId: Fig.Option = {
  name: "--distributed-database-private-endpoint-id",
  description: "Distributed Database PrivateEndpoint identifier",
  args: { name: "distributed-database-private-endpoint-id" },
  isRequired: true,
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optMetadata: Fig.Option = {
  name: "--metadata",
  description:
    "Comma-separated argument names for which metadata should be retrieved",
  args: { name: "metadata" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment to move the resource to",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "When set to true, returns resources in the specified compartment and in all of its child compartments",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optIfNoneMatch: Fig.Option = {
  name: "--if-none-match",
  description: "For conditional requests",
  args: { name: "if-none-match" },
};
const optItems: Fig.Option = {
  name: "--items",
  description: "List of patch instructions",
  args: { name: "json" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "timeUpdated"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "distributed-database",
  description: "Globally Distributed Database",
  subcommands: [
    {
      name: "distributed-autonomous-db-service",
      description:
        "Use the Globally Distributed Database service CLI to create and manage the Globally distributed databases",
      subcommands: [
        {
          name: "distributed-autonomous-database-collection",
          description:
            "Collection of Globally distributed autonomous databases",
          subcommands: [
            {
              name: "list-distributed-autonomous-databases",
              description: "List of Globally distributed autonomous databases",
              options: [
                optCompartmentId,
                optCompartmentIdInSubtree,
                {
                  name: "--private-endpoint-id",
                  description:
                    "A filter to return only resources that are associated with the given privateEndpointId",
                  args: { name: "private-endpoint-id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the specified value",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "FAILED",
                      "NEEDS_ATTENTION",
                      "INACTIVE",
                      "DELETING",
                      "DELETED",
                      "UPDATING",
                      "CREATING",
                    ],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                {
                  name: "--is-auto-resource-management-enabled",
                  description:
                    "A filter to return only resources where autoResourceManagement is enabled when set to true",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--display-name",
                  description:
                    "A filter to return only Globally distributed autonomous databases that match the entire name given",
                  args: { name: "display-name" },
                },
                {
                  name: "--db-deployment-type",
                  description:
                    "A filter to return only resources whose dbDeploymentType matches the specified value",
                  args: { name: "db-deployment-type" },
                },
                optMetadata,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "distributed-autonomous-database",
          description: "Globally distributed autonomous database",
          subcommands: [
            {
              name: "add",
              description:
                "Add new Global database services control(GDS CTL) node for the Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--public-ssh-key",
                  description:
                    "The public sshKey for Global database services control(GDS CTL) node",
                  args: { name: "public-ssh-key" },
                  isRequired: true,
                },
                {
                  name: "--subnet-id",
                  description:
                    "The OCID of the subnet on which the Global database services control(GDS CTL) node should be created",
                  args: { name: "subnet-id" },
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
                "Move the Globally distributed autonomous database and its dependent resources to the specified compartment",
              options: [
                optCompartmentId2,
                optDistributedAutonomousDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "change-distributed-autonomous-db-backup-config",
              description:
                "Change the DbBackupConfig for the Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--db-backup-config",
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
              name: "configure-distributed-autonomous-database-auto-resource-management",
              description:
                "Configure autoResourceManagement options for the Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--is-enabled",
                  description:
                    "Flag indicating if autoResourceManagement is enabled or disabled",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                  isRequired: true,
                },
                {
                  name: "--cool-off-period-in-minutes",
                  description:
                    "Time period to wait for the database to get stable after autoResourceManagement event",
                  args: { name: "integer" },
                },
                {
                  name: "--max-move-ru-attempts",
                  description:
                    "Maximum number of move replication unit attempts allowed within the configured period per database",
                  args: { name: "integer" },
                },
                {
                  name: "--max-move-ru-unit",
                  description: "Time unit applicable to maxMoveRuAttempts",
                  args: { suggestions: ["HOUR", "DAY"] },
                },
                {
                  name: "--mode",
                  description: "Mode of autoResourceManagement execution",
                  args: { suggestions: ["AUTOMATIC", "RECOMMENDATION"] },
                },
                {
                  name: "--action-type",
                  description:
                    "The action that will be taken when autoResourceManagement is triggered",
                  args: { suggestions: ["MOVE"] },
                },
                {
                  name: "--notification-topic-ids",
                  description:
                    "The list of notification topic ids OCIDs to receive autoResourceManagement events",
                  args: { name: "json" },
                },
                {
                  name: "--stream-ids",
                  description:
                    "The list of stream ids OCIDs that receive shard-related telemetry",
                  args: { name: "json" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "configure-distributed-autonomous-database-gsm-wallet",
              description:
                "Configure wallets on Global Service Manager(GSM) instances for a Globally distributed autonomous database",
              options: [
                {
                  name: "--certificate-id",
                  description: "The OCID of the cluster certificate",
                  args: { name: "certificate-id" },
                  isRequired: true,
                },
                {
                  name: "--ca-bundle-id",
                  description: "The OCID of the ca bundle id",
                  args: { name: "ca-bundle-id" },
                  isRequired: true,
                },
                optDistributedAutonomousDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "configure-distributed-autonomous-database-gsms",
              description:
                "Configure new Global Service Manager(GSM aka shard manager) instances for the Globally distributed autonomous",
              options: [
                {
                  name: "--old-gsm-names",
                  description:
                    "Names of old global service manager(GSM) instances corresponding to which new GSM instances need to",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--is-latest-gsm-image",
                  description:
                    "Flag to indicate if new global service manager(GSM) instances shall use latest image or re-use image used",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                  isRequired: true,
                },
                optDistributedAutonomousDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "configure-distributed-autonomous-database-sharding",
              description:
                "Once all components of Globally distributed autonomous database are provisioned",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--is-rebalance-required",
                  description:
                    "The flag to indicate whether chunks need to be re-balanced",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--certificate-id",
                  description: "The ID of the cluster certificate",
                  args: { name: "certificate-id" },
                },
                {
                  name: "--ca-bundle-id",
                  description: "The ID of the Ca Bundle",
                  args: { name: "ca-bundle-id" },
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
              description: "Creates a Globally distributed autonomous database",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the Globally distributed autonomous database compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description:
                    "The display name of the Globally distributed autonomous database",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--database-version",
                  description:
                    "Oracle Database version for the shards and catalog used in Globally distributed autonomous database",
                  args: { name: "database-version" },
                  isRequired: true,
                },
                {
                  name: "--prefix",
                  description:
                    "Unique name prefix for the Globally distributed autonomous databases",
                  args: { name: "prefix" },
                  isRequired: true,
                },
                {
                  name: "--private-endpoint-ids",
                  description:
                    "The collection of OCID of the private endpoint associated with Globally distributed autonomous database",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--db-workload-type",
                  description: "Possible workload types",
                  args: { suggestions: ["OLTP", "DW"] },
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
                  name: "--listener-port",
                  description:
                    "The listener port number for the Globally distributed autonomous database",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--ons-port-local",
                  description:
                    "Ons local port number for Globally distributed autonomous database",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--ons-port-remote",
                  description:
                    "Ons remote port number for Globally distributed autonomous database",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--catalog-details",
                  description:
                    "Collection of catalog for the Globally distributed autonomous database",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--notification-topic-ids",
                  description:
                    "The collection of OCID for the notification topics associated with the globally distributed autonomous",
                  args: { name: "json" },
                },
                {
                  name: "--listener-port-tls",
                  description:
                    "The TLS listener port number for Globally distributed autonomous database",
                  args: { name: "integer" },
                },
                {
                  name: "--system-chunk-count",
                  description:
                    "Count of chunks associated with system raft clusters or system data guard databases",
                  args: { name: "integer" },
                },
                {
                  name: "--system-raft-replication-unit-count",
                  description:
                    "Number of replication units associated with system raft clusters",
                  args: { name: "integer" },
                },
                {
                  name: "--composite-raft-shard-spaces",
                  description: "Collection of composite raft shards",
                  args: { name: "json" },
                },
                {
                  name: "--composite-data-guard-shard-spaces",
                  description:
                    "Collection of composite data guard shard spaces",
                  args: { name: "json" },
                },
                {
                  name: "--system-raft-clusters",
                  description: "Collection of system raft clusters",
                  args: { name: "json" },
                },
                {
                  name: "--system-data-guard-databases",
                  args: { name: "json" },
                },
                {
                  name: "--user-shard-spaces",
                  description: "Collection of user defined shard spaces",
                  args: { name: "json" },
                },
                { name: "--db-backup-config", args: { name: "json" } },
                {
                  name: "--vcn-nsg-ids",
                  description:
                    "The list of network security group (NSG) details to be associated with the distributed autonomous database",
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
              description:
                "Terminate the given Globally distributed autonomous databases",
              options: [
                optDistributedAutonomousDatabaseId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "generate-distributed-autonomous-database-wallet",
              description:
                "Generate the wallet associated with Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--password",
                  description:
                    "The password to encrypt the keys inside the wallet",
                  args: { name: "password" },
                  isRequired: true,
                },
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets the details of the Globally distributed autonomous database identified by given id",
              options: [
                optDistributedAutonomousDatabaseId,
                optMetadata,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "move-distributed-autonomous-database-replication-unit",
              description:
                "Move the replication units for RAFT based globally distributed autonomous database from source shard",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--source-shard-name",
                  description:
                    "The name of the source shard from which to move the chunks out to other shards",
                  args: { name: "source-shard-name" },
                  isRequired: true,
                },
                {
                  name: "--destination-shard-name",
                  description:
                    "The name of the destination shard to which the chunks moved out from source shard should be relocate to",
                  args: { name: "destination-shard-name" },
                },
                {
                  name: "--replication-units",
                  description:
                    "For RAFT databases please provide replication unit numbers to be moved from source shard to destination shard",
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
              name: "patch",
              description:
                "Patch operation to add, remove or update shards to the Globally distributed autonomous database topology",
              options: [
                optDistributedAutonomousDatabaseId,
                optItems,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "recreate-failed-distributed-autonomous-database-resource",
              description:
                "Recreate the failed resource for the Globally Distributed Autonomous Database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--resource-name",
                  description: "Specify the name of the shard, catalog, or GSM",
                  args: { name: "resource-name" },
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
              name: "rotate-distributed-autonomous-database-passwords",
              description:
                "Rotate the gsmuser and gsmcatuser passwords for shards and catalog of the Globally distributed autonomous",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--database-details",
                  description:
                    "Collection of shard or catalog password rotation details",
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
              name: "scale-distributed-autonomous-database-gsms",
              description:
                "Scale global service manager(GSM aka shard director) instances for the Globally distributed autonomous",
              options: [
                optDistributedAutonomousDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "start",
              description:
                "Start the shards, catalog, GSMs and GDSCTL instances of Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
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
                "Stop the shards, catalog, GSMs and GDSCTL instances for the Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
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
                "Updates the configuration of the Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--display-name",
                  description:
                    "Display name of the Globally distributed autonomous database",
                  args: { name: "display-name" },
                },
                {
                  name: "--notification-topic-ids",
                  description:
                    "The collection of OCID for the notification topics associated with the globally distributed autonomous",
                  args: { name: "json" },
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
                      "ACTIVE",
                      "FAILED",
                      "NEEDS_ATTENTION",
                      "INACTIVE",
                      "DELETING",
                      "DELETED",
                      "UPDATING",
                      "CREATING",
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
              name: "validate-distributed-autonomous-database-ca-bundle",
              description:
                "Validate the CA Bundles consistency of the globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "validate-distributed-autonomous-database-network",
              description:
                "Validate the network connectivity between components of the globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--is-surrogate",
                  description: "Determines the surrogates check",
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
          name: "distributed-database",
          description: "Globally distributed database",
          subcommands: [
            {
              name: "get-distributed-autonomous-database-raft-metric",
              description:
                "Operation to retrieve RAFT metrics for the Globally distributed autonomous database",
              options: [optDistributedAutonomousDatabaseId, optFromJson],
            },
            {
              name: "get-distributed-autonomous-database-ru-change-log",
              description:
                "Operation to retrieve move RU invocation history and status for the Globally distributed autonomous database",
              options: [
                optDistributedAutonomousDatabaseId,
                {
                  name: "--source-shard-name",
                  description:
                    "The source shard name to filter RU change log entries",
                  args: { name: "source-shard-name" },
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "distributed-db-private-endpoint-service",
      description:
        "Use the Globally Distributed Database service CLI to create and manage the Globally distributed databases",
      subcommands: [
        {
          name: "distributed-database-private-endpoint-collection",
          description: "Collection of private endpoints",
          subcommands: [
            {
              name: "list-distributed-database-private-endpoints",
              description: "List of DistributedDatabasePrivateEndpoints",
              options: [
                optCompartmentId,
                optCompartmentIdInSubtree,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "FAILED",
                      "INACTIVE",
                      "DELETING",
                      "DELETED",
                      "UPDATING",
                      "CREATING",
                    ],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                {
                  name: "--display-name",
                  description:
                    "A filter to return only private endpoint that match the entire name given",
                  args: { name: "display-name" },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "distributed-database-private-endpoint",
          description: "DistributedDatabasePrivateEndpoint resource",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves the DistributedDatabasePrivateEndpoint to the specified compartment",
              options: [
                optCompartmentId2,
                optDistributedDatabasePrivateEndpointId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a DistributedDatabasePrivateEndpoint",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "Identifier of the compartment where private endpoint is to be created",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--subnet-id",
                  description:
                    "Identifier of the customer subnet against which private endpoint is to be created",
                  args: { name: "subnet-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Private endpoint display name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "DistributedDatabasePrivateEndpoint description",
                  args: { name: "description" },
                },
                {
                  name: "--vcn-nsg-ids",
                  description:
                    "The list of network security group (NSG) details to be associated with the private endpoint",
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
              description:
                "Deletes the given DistributedDatabasePrivateEndpoint",
              options: [
                optDistributedDatabasePrivateEndpointId,
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
                "Get the DistributedDatabasePrivateEndpoint resource",
              options: [
                optDistributedDatabasePrivateEndpointId,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "patch",
              description:
                "Patch operation to update VCN network security group",
              options: [
                optDistributedDatabasePrivateEndpointId,
                optItems,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "reinstate-proxy-instance",
              description:
                "Reinstates the proxy instance associated with the DistributedDatabasePrivateEndpoint",
              options: [
                optDistributedDatabasePrivateEndpointId,
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
                "Updates the configuration of DistributedDatabasePrivateEndpoint",
              options: [
                optDistributedDatabasePrivateEndpointId,
                {
                  name: "--display-name",
                  description:
                    "Display name for DistributedDatabasePrivateEndpoint",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description: "DistributedDatabasePrivateEndpoint description",
                  args: { name: "description" },
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
                      "ACTIVE",
                      "FAILED",
                      "INACTIVE",
                      "DELETING",
                      "DELETED",
                      "UPDATING",
                      "CREATING",
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
      ],
    },
    {
      name: "distributed-db-service",
      description:
        "Use the Globally Distributed Database service CLI to create and manage the Globally distributed databases",
      subcommands: [
        {
          name: "distributed-database-collection",
          description: "Collection of Globally distributed databases",
          subcommands: [
            {
              name: "list-distributed-databases",
              description: "List of Globally distributed databases",
              options: [
                optCompartmentId,
                optCompartmentIdInSubtree,
                {
                  name: "--private-endpoint-id",
                  description:
                    "A filter to return only resources that are associated with the given privateEndpointId",
                  args: { name: "private-endpoint-id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the specified value",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "FAILED",
                      "NEEDS_ATTENTION",
                      "INACTIVE",
                      "DELETING",
                      "DELETED",
                      "UPDATING",
                      "CREATING",
                    ],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                {
                  name: "--is-auto-resource-management-enabled",
                  description:
                    "A filter to return only resources where autoResourceManagement is enabled when set to true",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--display-name",
                  description:
                    "A filter to return only Globally distributed databases that match the entire name given",
                  args: { name: "display-name" },
                },
                {
                  name: "--db-deployment-type",
                  description:
                    "A filter to return only resources whose dbDeploymentType matches the specified value",
                  args: { name: "db-deployment-type" },
                },
                optMetadata,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "distributed-database",
          description: "Globally distributed database",
          subcommands: [
            {
              name: "add",
              description:
                "Add new Global database services control(GDS CTL) node for the Globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--public-ssh-key",
                  description:
                    "The public sshKey for Global database services control(GDS CTL) node",
                  args: { name: "public-ssh-key" },
                  isRequired: true,
                },
                {
                  name: "--subnet-id",
                  description:
                    "The OCID of the subnet on which the Global database services control(GDS CTL) node should be created",
                  args: { name: "subnet-id" },
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
                "Move the Globally distributed database and its dependent resources to the specified compartment",
              options: [
                optCompartmentId2,
                optDistributedDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "change-distributed-db-backup-config",
              description:
                "Change the DbBackupConfig for the Globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--db-backup-config",
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
              name: "configure-distributed-database-auto-resource-management",
              description:
                "Configure autoResourceManagement options for the Globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--is-enabled",
                  description:
                    "Flag indicating if autoResourceManagement is enabled or disabled",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                  isRequired: true,
                },
                {
                  name: "--cool-off-period-in-minutes",
                  description:
                    "Time period to wait for the database to get stable after autoResourceManagement event",
                  args: { name: "integer" },
                },
                {
                  name: "--max-move-ru-attempts",
                  description:
                    "Maximum number of move replication unit attempts allowed within the configured period per database",
                  args: { name: "integer" },
                },
                {
                  name: "--max-move-ru-unit",
                  description: "Time unit applicable to maxMoveRuAttempts",
                  args: { suggestions: ["HOUR", "DAY"] },
                },
                {
                  name: "--mode",
                  description: "Mode of autoResourceManagement execution",
                  args: { suggestions: ["AUTOMATIC", "RECOMMENDATION"] },
                },
                {
                  name: "--action-type",
                  description:
                    "The action that will be taken when autoResourceManagement is triggered",
                  args: { suggestions: ["MOVE"] },
                },
                {
                  name: "--notification-topic-ids",
                  description:
                    "The list of notification topic ids OCIDs to receive autoResourceManagement events",
                  args: { name: "json" },
                },
                {
                  name: "--stream-ids",
                  description:
                    "The list of stream ids OCIDs that receive shard-related telemetry",
                  args: { name: "json" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "configure-distributed-database-gsms",
              description:
                "Configure new Global Service Manager(GSM aka shard manager) instances for the Globally distributed database",
              options: [
                {
                  name: "--old-gsm-names",
                  description:
                    "Names of old global service manager(GSM) instances corresponding to which new GSM instances need to",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--is-latest-gsm-image",
                  description:
                    "Flag to indicate if new global service manager(GSM) instances shall use latest image or re-use image used",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                  isRequired: true,
                },
                optDistributedDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "configure-distributed-database-sharding",
              description:
                "Once all components of Globally distributed database are provisioned",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--is-rebalance-required",
                  description:
                    "The flag to indicate whether chunks need to be re-balanced",
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
              name: "create",
              description: "Creates a Globally distributed database",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the Globally distributed database compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description:
                    "The display name of the Globally distributed database",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--database-version",
                  description:
                    "Oracle Database version for the shards and catalog used in Globally distributed database",
                  args: { name: "database-version" },
                  isRequired: true,
                },
                {
                  name: "--prefix",
                  description:
                    "Unique name prefix for the Globally distributed databases",
                  args: { name: "prefix" },
                  isRequired: true,
                },
                {
                  name: "--private-endpoint-ids",
                  description:
                    "The collection of OCID of the private endpoints associated with the Globally distributed database",
                  args: { name: "json" },
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
                  name: "--listener-port",
                  description:
                    "The listener port number for the Globally distributed database",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--ons-port-local",
                  description:
                    "The ons local port number for the Globally distributed database",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--ons-port-remote",
                  description:
                    "The ons remote port number for the Globally distributed database",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--catalog-details",
                  description:
                    "Collection of catalog details for the Globally distributed database",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--notification-topic-ids",
                  description:
                    "The collection of OCID for the notification topics associated with the globally distributed database",
                  args: { name: "json" },
                },
                {
                  name: "--listener-port-tls",
                  description:
                    "The TLS listener port number for the Globally distributed database",
                  args: { name: "integer" },
                },
                {
                  name: "--scan-listener-port",
                  description:
                    "TCP SCAN listener port for new clusters to be created",
                  args: { name: "integer" },
                },
                {
                  name: "--system-chunk-count",
                  description:
                    "Count of chunks associated with system raft clusters or system data guard databases",
                  args: { name: "integer" },
                },
                {
                  name: "--system-raft-replication-unit-count",
                  description:
                    "Number of replication units associated with system raft clusters",
                  args: { name: "integer" },
                },
                {
                  name: "--composite-raft-shard-spaces",
                  description: "Collection of composite raft shards",
                  args: { name: "json" },
                },
                {
                  name: "--composite-data-guard-shard-spaces",
                  description:
                    "Collection of composite data guard shard spaces",
                  args: { name: "json" },
                },
                {
                  name: "--system-raft-clusters",
                  description: "Collection of system raft clusters",
                  args: { name: "json" },
                },
                {
                  name: "--system-data-guard-databases",
                  args: { name: "json" },
                },
                {
                  name: "--user-shard-spaces",
                  description: "Collection of user defined shard spaces",
                  args: { name: "json" },
                },
                {
                  name: "--gsm-ssh-public-key",
                  description:
                    "The SSH public key for Global service manager instances",
                  args: { name: "gsm-ssh-public-key" },
                },
                { name: "--db-backup-config", args: { name: "json" } },
                {
                  name: "--vcn-nsg-ids",
                  description:
                    "The list of network security group (NSG) details to be associated with the distributed database",
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
              description: "Terminate the given Globally distributed database",
              options: [
                optDistributedDatabaseId,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "generate-distributed-database-wallet",
              description:
                "Generate the wallet associated with Globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--password",
                  description:
                    "The password to encrypt the keys inside the wallet",
                  args: { name: "password" },
                  isRequired: true,
                },
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets the details of the Globally distributed database identified by given id",
              options: [
                optDistributedDatabaseId,
                optMetadata,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "get-distributed-database-raft-metric",
              description:
                "Operation to retrieve RAFT metrics for the Globally distributed database",
              options: [optDistributedDatabaseId, optFromJson],
            },
            {
              name: "get-distributed-database-ru-change-log",
              description:
                "Operation to retrieve move RU invocation history and status for the Globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--source-shard-name",
                  description:
                    "The source shard name to filter RU change log entries",
                  args: { name: "source-shard-name" },
                },
                optFromJson,
              ],
            },
            {
              name: "move-distributed-database-replication-unit",
              description:
                "Move the replication units for RAFT based globally distributed database from source shard to destination",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--source-shard-name",
                  description:
                    "The name of the source shard from which to move the chunks out to other shards",
                  args: { name: "source-shard-name" },
                  isRequired: true,
                },
                {
                  name: "--destination-shard-name",
                  description:
                    "The name of the destination shard to which the chunks moved out from source shard should be relocate to",
                  args: { name: "destination-shard-name" },
                },
                {
                  name: "--replication-units",
                  description:
                    "For RAFT databases please provide replication unit numbers to be moved from source shard to destination shard",
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
              name: "patch",
              description:
                "Patch operation to add, remove or update shards to the Globally distributed database topology",
              options: [
                optDistributedDatabaseId,
                optItems,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "recreate-failed-distributed-database-resource",
              description:
                "Recreate the failed resource for the Globally Distributed Database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--resource-name",
                  description: "Specify the name of the shard, catalog, or GSM",
                  args: { name: "resource-name" },
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
              name: "rotate-distributed-database-passwords",
              description:
                "Rotate the gsmuser and gsmcatuser passwords for shards and catalog of the Globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--database-details",
                  description:
                    "Collection of shard or catalog password rotation details",
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
              name: "scale-distributed-database-gsms",
              description:
                "Scale global service manager(GSM aka shard manager) instances for the Globally distributed database",
              options: [
                optDistributedDatabaseId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "start",
              description:
                "Start the shards, catalog, GSMs and GDSCTL instances of Globally distributed database",
              options: [
                optDistributedDatabaseId,
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
                "Stop the shards, catalog, GSMs and GDSCTL instances for the Globally distributed database",
              options: [
                optDistributedDatabaseId,
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
                "Updates the configuration of the Globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--display-name",
                  description:
                    "Display name of the Globally distributed database",
                  args: { name: "display-name" },
                },
                {
                  name: "--notification-topic-ids",
                  description:
                    "The collection of OCID for the notification topics associated with the globally distributed database",
                  args: { name: "json" },
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
                      "ACTIVE",
                      "FAILED",
                      "NEEDS_ATTENTION",
                      "INACTIVE",
                      "DELETING",
                      "DELETED",
                      "UPDATING",
                      "CREATING",
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
              name: "validate-distributed-database-network",
              description:
                "Validate the network connectivity between components of the globally distributed database",
              options: [
                optDistributedDatabaseId,
                {
                  name: "--is-surrogate",
                  description: "Determines the surrogates check",
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
      ],
    },
    {
      name: "distributed-db-work-request-service",
      description:
        "Use the Globally Distributed Database service CLI to create and manage the Globally distributed databases",
      subcommands: [
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
          description: "A description of workrequest status",
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
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELING",
                      "CANCELED",
                      "NEEDS_ATTENTION",
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
      ],
    },
  ],
};

export default completionSpec;
