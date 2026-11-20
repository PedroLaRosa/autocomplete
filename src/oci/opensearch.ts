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
const optOpensearchClusterId: Fig.Option = {
  name: "--opensearch-cluster-id",
  description: "Unique OpensearchCluster identifier",
  args: { name: "opensearch-cluster-id" },
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
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
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
const optOpensearchClusterBackupId: Fig.Option = {
  name: "--opensearch-cluster-backup-id",
  description: "Unique OpensearchClusterBackup identifier",
  args: { name: "opensearch-cluster-backup-id" },
  isRequired: true,
};
const optOpensearchClusterPipelineId: Fig.Option = {
  name: "--opensearch-cluster-pipeline-id",
  description: "Unique OpensearchClusterPipeline identifier",
  args: { name: "opensearch-cluster-pipeline-id" },
  isRequired: true,
};
const optSecurityAttributes: Fig.Option = {
  name: "--security-attributes",
  description: "Security attributes for this resource",
  args: { name: "json" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "opensearch",
  description: "OpenSearch Service",
  subcommands: [
    {
      name: "cluster",
      description:
        "The OpenSearch service CLI provides access to OCI Search Service with OpenSearch",
      subcommands: [
        {
          name: "work-request",
          description: "An asynchronous work request",
          subcommands: [
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
                  name: "--source-resource-id",
                  description:
                    "The ID of the source resource to list work requests",
                  args: { name: "source-resource-id" },
                },
                optPage,
                optLimit,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "shapes-details",
          description: "Shapes for OpenSearch Cluster",
          subcommands: [
            {
              name: "list",
              description: "Retrieves available OpenSearch Cluster node shapes",
              options: [optCompartmentId, optAll, optFromJson],
            },
          ],
        },
        {
          name: "backup",
          description: "Backup the opensearch cluster details",
          options: [
            optOpensearchClusterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the cluster backup is located",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the cluster backup",
              args: { name: "display-name" },
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
          description: "Creates a new OpensearchCluster",
          options: [
            {
              name: "--display-name",
              description: "The name of the cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the cluster in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--software-version",
              description: "The version of the software the cluster is running",
              args: { name: "software-version" },
              isRequired: true,
            },
            {
              name: "--master-node-count",
              description:
                "The number of master nodes to configure for the cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--master-node-host-type",
              description: "The instance type for the cluster's master nodes",
              args: { suggestions: ["FLEX", "BM"] },
              isRequired: true,
            },
            {
              name: "--master-node-host-ocpu-count",
              description:
                "The number of OCPUs to configure for the cluser's master nodes",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--master-node-host-memory-gb",
              description:
                "The amount of memory in GB, to configure per node for the cluster's master nodes",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--data-node-count",
              description:
                "The number of data nodes to configure for the cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--data-node-host-type",
              description: "TThe instance type for the cluster's data nodes",
              args: { suggestions: ["FLEX", "BM"] },
              isRequired: true,
            },
            {
              name: "--data-node-host-ocpu-count",
              description:
                "The number of OCPUs to configure for the cluster's data nodes",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--data-node-host-memory-gb",
              description:
                "The amount of memory in GB, to configure per node for the cluster's data nodes",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--data-node-storage-gb",
              description:
                "The amount of storage in GB, to configure per node for the cluster's data nodes",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--opendashboard-node-count",
              description:
                "The number of OpenSearch Dashboard nodes to configure for the cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--opendashboard-node-host-ocpu-count",
              description:
                "The number of OCPUs to configure for the cluster's OpenSearch Dashboard nodes",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--opendashboard-node-host-memory-gb",
              description:
                "The amount of memory in GB, to configure for the cluster's OpenSearch Dashboard nodes",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the cluster's VCN",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description: "The OCID of the cluster's subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--vcn-compartment-id",
              description:
                "The OCID for the compartment where the cluster's VCN is located",
              args: { name: "vcn-compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-compartment-id",
              description:
                "The OCID for the compartment where the cluster's subnet is located",
              args: { name: "subnet-compartment-id" },
              isRequired: true,
            },
            {
              name: "--master-node-host-bare-metal-shape",
              description:
                "The bare metal shape for the cluster's master nodes",
              args: { name: "master-node-host-bare-metal-shape" },
            },
            {
              name: "--master-node-host-shape",
              description: "The node shape for the cluster's master nodes",
              args: { name: "master-node-host-shape" },
            },
            {
              name: "--data-node-host-bare-metal-shape",
              description: "The bare metal shape for the cluster's data nodes",
              args: { name: "data-node-host-bare-metal-shape" },
            },
            {
              name: "--data-node-host-shape",
              description: "The node shape for the cluster's data nodes",
              args: { name: "data-node-host-shape" },
            },
            {
              name: "--opendashboard-node-host-shape",
              description:
                "The node shape for the cluster's OpenSearch Dashboard nodes",
              args: { name: "opendashboard-node-host-shape" },
            },
            {
              name: "--search-node-count",
              description:
                "The number of search nodes configured for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--search-node-host-type",
              description: "The instance type for the cluster's search nodes",
              args: { suggestions: ["FLEX"] },
            },
            {
              name: "--search-node-host-shape",
              description: "The node shape for the cluster's search nodes",
              args: { name: "search-node-host-shape" },
            },
            {
              name: "--search-node-host-ocpu-count",
              description:
                "The number of OCPUs configured for the cluster's search nodes",
              args: { name: "integer" },
            },
            {
              name: "--search-node-host-memory-gb",
              description:
                "The amount of memory in GB, for the cluster's search nodes",
              args: { name: "integer" },
            },
            {
              name: "--search-node-storage-gb",
              description:
                "The amount of storage in GB, to configure per node for the cluster's search nodes",
              args: { name: "integer" },
            },
            {
              name: "--coordinator-node-count",
              description:
                "The number of coordinator nodes configured for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--coordinator-node-host-type",
              description:
                "The instance type for the cluster's coordinator nodes",
              args: { suggestions: ["FLEX"] },
            },
            {
              name: "--coordinator-node-host-shape",
              description: "The node shape for the cluster's coordinator nodes",
              args: { name: "coordinator-node-host-shape" },
            },
            {
              name: "--coordinator-node-host-ocpu-count",
              description:
                "The number of OCPUs configured for the cluster's coordinator nodes",
              args: { name: "integer" },
            },
            {
              name: "--coordinator-node-host-memory-gb",
              description:
                "The amount of memory in GB, for the cluster's coordinator nodes",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-count",
              description: "The number of ML nodes configured for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-host-type",
              description: "The instance type for the cluster's ML nodes",
              args: { suggestions: ["FLEX"] },
            },
            {
              name: "--ml-node-host-shape",
              description: "The node shape for the cluster's ML nodes",
              args: { name: "ml-node-host-shape" },
            },
            {
              name: "--ml-node-host-ocpu-count",
              description:
                "The number of OCPUs configured for the cluster's ML nodes",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-host-memory-gb",
              description:
                "The amount of memory in GB, for the cluster's ML nodes",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-storage-gb",
              description:
                "The amount of storage in GB, to configure per node for the cluster's ML nodes",
              args: { name: "integer" },
            },
            {
              name: "--security-mode",
              description: "The security mode of the cluster",
              args: { suggestions: ["DISABLED", "PERMISSIVE", "ENFORCING"] },
            },
            {
              name: "--security-master-user-name",
              description:
                "The name of the master user that are used to manage security config",
              args: { name: "security-master-user-name" },
            },
            {
              name: "--security-master-user-password-hash",
              description:
                "The password hash of the master user that are used to manage security config",
              args: { name: "security-master-user-password-hash" },
            },
            {
              name: "--security-master-user-auth-details",
              args: { name: "json" },
            },
            { name: "--security-saml-config", args: { name: "json" } },
            { name: "--backup-policy", args: { name: "json" } },
            {
              name: "--nsg-id",
              description:
                "The OCID of the NSG where the private endpoint vnic will be attached",
              args: { name: "nsg-id" },
            },
            {
              name: "--reverse-connection-endpoint-customer-ips",
              description:
                "The customer IP addresses of the endpoint in customer VCN",
              args: { name: "json" },
            },
            {
              name: "--inbound-cluster-ids",
              description:
                "List of inbound clusters that will be queried using cross cluster search",
              args: { name: "json" },
            },
            { name: "--outbound-cluster-config", args: { name: "json" } },
            { name: "--maintenance-details", args: { name: "json" } },
            { name: "--load-balancer-config", args: { name: "json" } },
            { name: "--certificate-config", args: { name: "json" } },
            { name: "--remote-reindex-trust-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
              args: { name: "json" },
            },
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a OpensearchCluster resource by identifier",
          options: [
            optOpensearchClusterId,
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
          description: "Gets a OpensearchCluster by identifier",
          options: [optOpensearchClusterId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the OpensearchCluster",
          options: [
            optOpensearchClusterId,
            {
              name: "--display-name",
              description: "The name of the cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            { name: "--software-version", args: { name: "software-version" } },
            {
              name: "--security-mode",
              description: "The security mode of the cluster",
              args: { suggestions: ["DISABLED", "PERMISSIVE", "ENFORCING"] },
            },
            {
              name: "--security-master-user-name",
              description:
                "The name of the master user that are used to manage security config",
              args: { name: "security-master-user-name" },
            },
            {
              name: "--security-master-user-password-hash",
              description:
                "The password hash of the master user that are used to manage security config",
              args: { name: "security-master-user-password-hash" },
            },
            {
              name: "--security-master-user-auth-details",
              args: { name: "json" },
            },
            { name: "--security-saml-config", args: { name: "json" } },
            { name: "--backup-policy", args: { name: "json" } },
            {
              name: "--nsg-id",
              description:
                "The OCID of the NSG where the private endpoint vnic will be attached",
              args: { name: "nsg-id" },
            },
            {
              name: "--reverse-connection-endpoint-customer-ips",
              description:
                "The customer IP addresses of the endpoint in customer VCN",
              args: { name: "json" },
            },
            { name: "--outbound-cluster-config", args: { name: "json" } },
            { name: "--maintenance-details", args: { name: "json" } },
            { name: "--load-balancer-config", args: { name: "json" } },
            { name: "--certificate-config", args: { name: "json" } },
            { name: "--remote-reindex-trust-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "resizehorizontal",
          description: "Resize the opensearch cluster horizontal details",
          options: [
            optOpensearchClusterId,
            {
              name: "--master-node-count",
              description:
                "The number of master nodes to configure for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--data-node-count",
              description:
                "The number of data nodes to configure for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--opendashboard-node-count",
              description:
                "The number of OpenSearch Dashboard nodes to configure for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--search-node-count",
              description:
                "The number of search nodes configured for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--coordinator-node-count",
              description:
                "The number of coordinator nodes configured for the cluster",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-count",
              description: "The number of ML nodes configured for the cluster",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "resizevertical",
          description: "Resize the opensearch cluster vertical details",
          options: [
            optOpensearchClusterId,
            {
              name: "--master-node-host-ocpu-count",
              description:
                "The number of OCPUs to configure for the cluster's master nodes",
              args: { name: "integer" },
            },
            {
              name: "--master-node-host-memory-gb",
              description:
                "The amount of memory in GB, to configure for the cluster's master nodes",
              args: { name: "integer" },
            },
            {
              name: "--master-node-host-shape",
              description: "The node shape for the cluster's master nodes",
              args: { name: "master-node-host-shape" },
            },
            {
              name: "--data-node-host-ocpu-count",
              description:
                "The number of OCPUs to configure for the cluster's data nodes",
              args: { name: "integer" },
            },
            {
              name: "--data-node-host-memory-gb",
              description:
                "The amount of memory in GB, to configure for the cluster's data nodes",
              args: { name: "integer" },
            },
            {
              name: "--data-node-storage-gb",
              description:
                "The amount of storage in GB, to configure per node for the cluster's data nodes",
              args: { name: "integer" },
            },
            {
              name: "--data-node-host-shape",
              description: "The node shape for the cluster's data nodes",
              args: { name: "data-node-host-shape" },
            },
            {
              name: "--opendashboard-node-host-ocpu-count",
              description:
                "The number of OCPUs to configure for the cluster's OpenSearch Dashboard nodes",
              args: { name: "integer" },
            },
            {
              name: "--opendashboard-node-host-memory-gb",
              description:
                "The amount of memory in GB, to configure for the cluster's OpenSearch Dashboard nodes",
              args: { name: "integer" },
            },
            {
              name: "--opendashboard-node-host-shape",
              description:
                "The node shape for the cluster's OpenSearch Dashboard nodes",
              args: { name: "opendashboard-node-host-shape" },
            },
            {
              name: "--search-node-host-shape",
              description: "The node shape for the cluster's search nodes",
              args: { name: "search-node-host-shape" },
            },
            {
              name: "--search-node-host-ocpu-count",
              description:
                "The number of OCPUs configured for the cluster's search nodes",
              args: { name: "integer" },
            },
            {
              name: "--search-node-host-memory-gb",
              description:
                "The amount of memory in GB, for the cluster's search nodes",
              args: { name: "integer" },
            },
            {
              name: "--search-node-storage-gb",
              description:
                "The amount of storage in GB, to configure per node for the cluster's search nodes",
              args: { name: "integer" },
            },
            {
              name: "--coordinator-node-host-shape",
              description: "The node shape for the cluster's coordinator nodes",
              args: { name: "coordinator-node-host-shape" },
            },
            {
              name: "--coordinator-node-host-ocpu-count",
              description:
                "The number of OCPUs configured for the cluster's coordinator nodes",
              args: { name: "integer" },
            },
            {
              name: "--coordinator-node-host-memory-gb",
              description:
                "The amount of memory in GB, for the cluster's coordinator nodes",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-host-shape",
              description: "The node shape for the cluster's ML nodes",
              args: { name: "ml-node-host-shape" },
            },
            {
              name: "--ml-node-host-ocpu-count",
              description:
                "The number of OCPUs configured for the cluster's ML nodes",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-host-memory-gb",
              description:
                "The amount of memory in GB, for the cluster's ML nodes",
              args: { name: "integer" },
            },
            {
              name: "--ml-node-storage-gb",
              description:
                "The amount of storage in GB, to configure per node for the cluster's ML nodes",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "configureoutboundcluster",
          description:
            "Configure Outbound cluster for cross-cluster operations",
          options: [
            optOpensearchClusterId,
            {
              name: "--inbound-cluster-ids",
              description:
                "List of inbound clusters that will be queried using cross cluster search",
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
          name: "restore",
          description: "Restore the opensearch cluster details",
          options: [
            optOpensearchClusterId,
            {
              name: "--opensearch-cluster-backup-id",
              description: "The OCID of the cluster backup to restore",
              args: { name: "opensearch-cluster-backup-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the cluster backup is located",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--prefix",
              description: "The prefix for the indices in the cluster backup",
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
          name: "list",
          description: "Returns a list of OpensearchClusters",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only OpensearchClusters their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            {
              name: "--id",
              description: "Unique OpensearchCluster identifier",
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
        {
          name: "list-versions",
          description: "Lists the supported Opensearch versions",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade or clone the opensearch cluster",
          options: [
            optOpensearchClusterId,
            {
              name: "--original-cluster-display-name",
              description: "The display name of the original cluster",
              args: { name: "original-cluster-display-name" },
              isRequired: true,
            },
            {
              name: "--desired-software-version",
              description: "The software version the cluster is desired",
              args: { name: "desired-software-version" },
              isRequired: true,
            },
            {
              name: "--upgrade-type",
              description: "The upgrade type of cluster (major or minor)",
              args: { suggestions: ["MINOR", "MAJOR"] },
              isRequired: true,
            },
            {
              name: "--is-clone",
              description:
                "The cluster would be cloned for true and updated for false with the provided version",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
              args: { name: "json" },
            },
            optSecurityAttributes,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "work-request-error",
          description:
            "The list of work request errors returned in a work request error search",
          subcommands: [
            {
              name: "list",
              description:
                "Return a (paginated) list of errors for a given work request",
              options: [
                optWorkRequestId,
                optPage,
                optLimit,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "work-request-log-entry",
          description:
            "The list of work request log entries returned in a work request log search",
          subcommands: [
            {
              name: "list",
              description:
                "Return a (paginated) list of logs for a given work request",
              options: [
                optWorkRequestId,
                optPage,
                optLimit,
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
      name: "backup",
      description:
        "The OpenSearch service CLI provides access to OCI Search Service with OpenSearch",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes a OpensearchClusterBackup resource by identifier",
          options: [
            optOpensearchClusterBackupId,
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
          description: "Gets a OpensearchClusterBackup by identifier",
          options: [optOpensearchClusterBackupId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the OpensearchClusterBackup",
          options: [
            optOpensearchClusterBackupId,
            {
              name: "--display-name",
              description: "The name of the cluster backup",
              args: { name: "display-name" },
              isRequired: true,
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
          description: "Returns a list of OpensearchClusterBackups",
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
              name: "--source-opensearch-cluster-id",
              description:
                "A filter to return only resources that match the entire source cluster id given",
              args: { name: "source-opensearch-cluster-id" },
            },
            {
              name: "--id",
              description: "Unique OpensearchClusterBackup identifier",
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
      name: "pipeline",
      description:
        "The OpenSearch service CLI provides access to OCI Search Service with OpenSearch",
      subcommands: [
        {
          name: "create",
          description: "Creates a new OpensearchCluster Pipeline",
          options: [
            {
              name: "--display-name",
              description: "The name of the cluster pipeline",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--ocpu-count",
              description:
                "The number of OCPUs configured for each pipeline node",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--memory-gb",
              description: "The amount of memory in GB, for each pipeline node",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--node-count",
              description: "The number of nodes configured for the pipeline",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--pipeline-configuration-body",
              description: "The pipeline configuration in YAML format",
              args: { name: "pipeline-configuration-body" },
              isRequired: true,
            },
            {
              name: "--data-prepper-configuration-body",
              description: "The data prepper config in YAML format",
              args: { name: "data-prepper-configuration-body" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the pipeline in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--node-shape",
              description: "The pipeline node shape",
              args: { name: "node-shape" },
            },
            {
              name: "--vcn-id",
              description: "The OCID of the pipeline's VCN",
              args: { name: "vcn-id" },
            },
            {
              name: "--subnet-id",
              description: "The OCID of the pipeline's subnet",
              args: { name: "subnet-id" },
            },
            {
              name: "--vcn-compartment-id",
              description:
                "The OCID for the compartment where the pipeline's VCN is located",
              args: { name: "vcn-compartment-id" },
            },
            {
              name: "--subnet-compartment-id",
              description:
                "The OCID for the compartment where the pipeline's subnet is located",
              args: { name: "subnet-compartment-id" },
            },
            {
              name: "--nsg-id",
              description:
                "The OCID of the NSG where the pipeline private endpoint vnic will be attached",
              args: { name: "nsg-id" },
            },
            {
              name: "--reverse-connection-endpoints",
              description:
                "The customer IP and the corresponding fully qualified domain name that the pipeline will connect to",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--opc-dry-run",
              description:
                'Indicates that the request is a dry run, if set to "true"',
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
          description: "Gets a OpensearchCluster Pipeline by identifier",
          options: [optOpensearchClusterPipelineId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the OpensearchCluster Pipeline",
          options: [
            optOpensearchClusterPipelineId,
            {
              name: "--display-name",
              description: "The name of the pipeline",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--ocpu-count",
              description:
                "The number of OCPUs configured for each pipeline node",
              args: { name: "integer" },
            },
            {
              name: "--memory-gb",
              description: "The amount of memory in GB, for each pipeline node",
              args: { name: "integer" },
            },
            {
              name: "--node-count",
              description: "The number of nodes configured for the pipeline",
              args: { name: "integer" },
            },
            {
              name: "--node-shape",
              description: "The pipeline node shape",
              args: { name: "node-shape" },
            },
            {
              name: "--pipeline-configuration-body",
              description: "The pipeline configuration in YAML format",
              args: { name: "pipeline-configuration-body" },
            },
            {
              name: "--data-prepper-configuration-body",
              description: "The data prepper config in YAML format",
              args: { name: "data-prepper-configuration-body" },
            },
            {
              name: "--vcn-id",
              description: "The OCID of the pipeline's VCN",
              args: { name: "vcn-id" },
            },
            {
              name: "--subnet-id",
              description: "The OCID of the pipeline's subnet",
              args: { name: "subnet-id" },
            },
            {
              name: "--vcn-compartment-id",
              description:
                "The OCID for the compartment where the pipeline's VCN is located",
              args: { name: "vcn-compartment-id" },
            },
            {
              name: "--subnet-compartment-id",
              description:
                "The OCID for the compartment where the pipeline's subnet is located",
              args: { name: "subnet-compartment-id" },
            },
            {
              name: "--nsg-id",
              description:
                "The OCID of the NSG where the pipeline private endpoint vnic will be attached",
              args: { name: "nsg-id" },
            },
            {
              name: "--reverse-connection-endpoints",
              description:
                "The customer IP and the corresponding fully qualified domain name that the pipeline will connect to",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--opc-dry-run",
              description:
                'Indicates that the request is a dry run, if set to "true"',
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a OpensearchCluster Pipeline resource by identifier",
          options: [
            optOpensearchClusterPipelineId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of OpensearchClusterPipelines",
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
            {
              name: "--pipeline-component-id",
              description:
                "A filter to return pipelines whose any component has the given pipelineComponentId",
              args: { name: "pipeline-component-id" },
            },
            optDisplayName,
            {
              name: "--id",
              description: "Unique OpensearchClusterPipeline identifier",
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
  ],
};

export default completionSpec;
