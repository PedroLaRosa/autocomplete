// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optClusterId: Fig.Option = {
  name: "--cluster-id",
  description: "The OCID of the cluster",
  args: { name: "cluster-id" },
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
  description: "The optional order in which to sort the results",
  args: { suggestions: ["ASC", "DESC"] },
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
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
const optName: Fig.Option = {
  name: "--name",
  description: "The name to filter on",
  args: { name: "name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The optional field to sort the results by",
  args: { suggestions: ["ID", "NAME", "TIME_CREATED"] },
};
const optVirtualNodePoolId: Fig.Option = {
  name: "--virtual-node-pool-id",
  description: "The OCID of the virtual node pool",
  args: { name: "virtual-node-pool-id" },
  isRequired: true,
};
const optAddonName: Fig.Option = {
  name: "--addon-name",
  description: "The name of the addon",
  args: { name: "addon-name" },
  isRequired: true,
};
const optNodePoolId: Fig.Option = {
  name: "--node-pool-id",
  description: "The OCID of the node pool",
  args: { name: "node-pool-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optClusterId2: Fig.Option = {
  name: "--cluster-id",
  description: "The OCID of the cluster",
  args: { name: "cluster-id" },
};
const optIsForceDeletionAfterOverrideGraceDuration: Fig.Option = {
  name: "--is-force-deletion-after-override-grace-duration",
  description:
    "If the underlying compute instance should be deleted if you cannot evict all the pods in grace period",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optNodeId: Fig.Option = {
  name: "--node-id",
  description: "The OCID of the compute instance",
  args: { name: "node-id" },
  isRequired: true,
};
const optOverrideEvictionGraceDuration: Fig.Option = {
  name: "--override-eviction-grace-duration",
  description:
    "Duration after which OKE will give up eviction of the pods on the node",
  args: { name: "override-eviction-grace-duration" },
};
const optWorkloadMappingId: Fig.Option = {
  name: "--workload-mapping-id",
  description: "The OCID of the workloadMapping",
  args: { name: "workload-mapping-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "ce",
  description: "Kubernetes Engine",
  subcommands: [
    {
      name: "virtual-node-pool",
      description: "A pool of virtual nodes attached to a cluster",
      subcommands: [
        {
          name: "create",
          description: "Create a new virtual node pool",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment of the virtual node pool",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--cluster-id",
              description:
                "The cluster the virtual node pool is associated with",
              args: { name: "cluster-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Display name of the virtual node pool",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--size",
              description:
                "The number of Virtual Nodes that should be in the Virtual Node Pool",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--placement-configurations",
              description:
                "The list of placement configurations which determines where Virtual Nodes will be provisioned across as it",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--pod-configuration",
              description:
                "The pod configuration for pods run on virtual nodes of this virtual node pool",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--initial-virtual-node-labels",
              description:
                "Initial labels that will be added to the Kubernetes Virtual Node object when it registers",
              args: { name: "json" },
            },
            {
              name: "--taints",
              description: "A taint is a collection of <key, value, effect>",
              args: { name: "json" },
            },
            {
              name: "--nsg-ids",
              description:
                "List of network security group id's applied to the Virtual Node VNIC",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--virtual-node-tags", args: { name: "json" } },
            {
              name: "--virtual-node-pool-cycling-details",
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
          description: "Delete a virtual node pool",
          options: [
            optVirtualNodePoolId,
            optIfMatch,
            {
              name: "--override-eviction-grace-duration-vnp",
              description:
                "Duration after which SKE will give up eviction of the pods on the node",
              args: { name: "override-eviction-grace-duration-vnp" },
            },
            {
              name: "--is-force-deletion-after-override-grace-duration-vnp",
              description:
                "If the underlying virtual node should be force deleted if all the pods are not evicted in",
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
          name: "get-virtual-node",
          description: "Get the details of a virtual node",
          options: [
            optVirtualNodePoolId,
            {
              name: "--virtual-node-id",
              description: "The OCID of the virtual node",
              args: { name: "virtual-node-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the details of a virtual node pool",
          options: [optVirtualNodePoolId, optFromJson],
        },
        {
          name: "list",
          description:
            "List all the virtual node pools in a compartment, and optionally filter by cluster",
          options: [
            optCompartmentId,
            optClusterId2,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--lifecycle-state",
              description: "A virtual node pool lifecycle state to filter on",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-virtual-nodes",
          description: "List virtual nodes in a virtual node pool",
          options: [
            optVirtualNodePoolId,
            optName,
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
          name: "update",
          description: "Update the details of a virtual node pool",
          options: [
            optVirtualNodePoolId,
            {
              name: "--display-name",
              description: "Display name of the virtual node pool",
              args: { name: "display-name" },
            },
            {
              name: "--initial-virtual-node-labels",
              description:
                "Initial labels that will be added to the Kubernetes Virtual Node object when it registers",
              args: { name: "json" },
            },
            {
              name: "--taints",
              description: "A taint is a collection of <key, value, effect>",
              args: { name: "json" },
            },
            {
              name: "--size",
              description:
                "The number of Virtual Nodes that should be in the Virtual Node Pool",
              args: { name: "integer" },
            },
            {
              name: "--placement-configurations",
              description:
                "The list of placement configurations which determines where Virtual Nodes will be provisioned across as it",
              args: { name: "json" },
            },
            {
              name: "--nsg-ids",
              description:
                "List of network security group id's applied to the Virtual Node VNIC",
              args: { name: "json" },
            },
            {
              name: "--pod-configuration",
              description:
                "The pod configuration for pods run on virtual nodes of this virtual node pool",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--virtual-node-tags", args: { name: "json" } },
            {
              name: "--virtual-node-pool-cycling-details",
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
      name: "cluster",
      description: "A Kubernetes cluster",
      subcommands: [
        {
          name: "cluster-migrate-to-native-vcn",
          description: "Initiates cluster migration to use native VCN",
          options: [
            optClusterId,
            {
              name: "--endpoint-config",
              description:
                "The network configuration for access to the Cluster control plane",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--decommission-delay-duration",
              description:
                "The optional override of the non-native endpoint decommission time after migration is complete",
              args: { name: "decommission-delay-duration" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "complete-credential-rotation",
          description: "Complete cluster credential rotation",
          options: [
            optClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new cluster",
          options: [
            {
              name: "--name",
              description: "The name of the cluster",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the cluster",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description:
                "The OCID of the virtual cloud network (VCN) in which to create the cluster",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--kubernetes-version",
              description:
                "The version of Kubernetes to install into the cluster masters",
              args: { name: "kubernetes-version" },
              isRequired: true,
            },
            {
              name: "--kms-key-id",
              description:
                "The OCID of the KMS key to be used as the master encryption key for Kubernetes secret encryption",
              args: { name: "kms-key-id" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--image-policy-config",
              description:
                "The image verification policy for signature validation",
              args: { name: "json" },
            },
            {
              name: "--cluster-pod-network-options",
              description:
                "Available CNIs and network options for existing and new node pools of the cluster",
              args: { name: "json" },
            },
            {
              name: "--type",
              description: "Type of cluster",
              args: { suggestions: ["BASIC_CLUSTER", "ENHANCED_CLUSTER"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--service-lb-subnet-ids",
              description:
                "The two subnets configured to host load balancers in a Kubernetes cluster",
              args: { name: "json" },
            },
            {
              name: "--dashboard-enabled",
              description:
                "Select if you want to use the Kubernetes Dashboard to deploy and troubleshoot containerized applications",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tiller-enabled",
              description:
                "Select if you want Tiller (the server portion of Helm) to run in the Kubernetes cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--oidc-issuer-url",
              description:
                "URL of the provider that allows the API server to discover public signing keys",
              args: { name: "oidc-issuer-url" },
            },
            {
              name: "--oidc-client-id",
              description: "A client id that all tokens must be issued for",
              args: { name: "oidc-client-id" },
            },
            {
              name: "--oidc-configuration-file",
              description:
                "A base64 encoded string of kubernetes oidc auth configuration file",
              args: { name: "oidc-configuration-file", template: "filepaths" },
            },
            {
              name: "--oidc-username-claim",
              description: "JWT claim to use as the user name",
              args: { name: "oidc-username-claim" },
            },
            {
              name: "--oidc-username-prefix",
              description:
                "Prefix prepended to username claims to prevent clashes with existing names (such as system:users)",
              args: { name: "oidc-username-prefix" },
            },
            {
              name: "--oidc-groups-claim",
              description: "JWT claim to use as the user's group",
              args: { name: "oidc-groups-claim" },
            },
            {
              name: "--oidc-groups-prefix",
              description:
                "Prefix prepended to group claims to prevent clashes with existing names (such as system:groups)",
              args: { name: "oidc-groups-prefix" },
            },
            {
              name: "--oidc-required-claims",
              description:
                "A key=value pair that describes a required claim in the ID Token",
              args: { name: "json" },
            },
            {
              name: "--oidc-ca-certificate",
              description:
                "The path to the certificate for the CA that signed your identity provider's web certificate",
              args: { name: "oidc-ca-certificate" },
            },
            {
              name: "--oidc-signing-algorithms",
              description: "The signing algorithms accepted",
              args: { name: "json" },
            },
            {
              name: "--open-id-connect-auth-enabled",
              description: "Whether the cluster has OIDC Auth Config enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--open-id-connect-discovery-enabled",
              description: "Whether the cluster has OIDC Discovery enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--pods-cidr",
              description:
                "The available group of network addresses that can be allocated to pods running in the cluster",
              args: { name: "pods-cidr" },
            },
            {
              name: "--services-cidr",
              description:
                "The available group of network addresses that can be exposed as Kubernetes services (ClusterIPs)",
              args: { name: "services-cidr" },
            },
            {
              name: "--endpoint-subnet-id",
              description:
                "The OCID of the regional subnet in which to place the Cluster endpoint",
              args: { name: "endpoint-subnet-id" },
            },
            {
              name: "--service-lb-defined-tags",
              description: "Defined tags for the service load balancer",
              args: { name: "json" },
            },
            {
              name: "--service-lb-freeform-tags",
              description: "Free-form tags for the service load balancer",
              args: { name: "json" },
            },
            {
              name: "--persistent-volume-defined-tags",
              description: "Defined tags for the persistent volume",
              args: { name: "json" },
            },
            {
              name: "--persistent-volume-freeform-tags",
              description: "Free-form tags for the persistent volume",
              args: { name: "json" },
            },
            {
              name: "--endpoint-nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to apply to the cluster endpoint",
              args: { name: "json" },
            },
            {
              name: "--endpoint-public-ip-enabled",
              description:
                "Whether the cluster should be assigned a public IP address",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--endpoint-security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
              args: { name: "json" },
            },
            {
              name: "--ip-families",
              description: "A list of IP families for the cluster",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-kubeconfig",
          description: "Create the Kubeconfig YAML for a cluster",
          options: [
            optClusterId,
            {
              name: "--expiration",
              description: "Deprecated",
              args: { name: "integer" },
              deprecated: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will be updated with response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--token-version",
              description: "The version of the kubeconfig token",
              args: { suggestions: ["2.0.0"] },
            },
            {
              name: "--kube-endpoint",
              description: "The endpoint to target",
              args: {
                suggestions: [
                  "LEGACY_KUBERNETES",
                  "PUBLIC_ENDPOINT",
                  "PRIVATE_ENDPOINT",
                  "VCN_HOSTNAME",
                ],
              },
            },
            {
              name: "--overwrite",
              description:
                "Overwrites the contents of kubeconfig file specified using --file option or kubeconfig file at default",
            },
            {
              name: "--with-auth-context",
              description:
                "Appends the current authentication context (values configured in --auth and --profile) of the OCI CLI command",
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a cluster",
          options: [
            optClusterId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-addon",
          description: "Disable addon for a provisioned cluster",
          options: [
            optClusterId,
            optAddonName,
            {
              name: "--is-remove-existing-add-on",
              description:
                "Whether existing addon resources should be deleted or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
          name: "extend-endpoint-decommission-rollback-deadline",
          description:
            "Extend the rollback deadline of public api endpoint decommission for a cluster",
          options: [
            optClusterId,
            {
              name: "--rollback-deadline-delay",
              description:
                "The optional override delay of the rollback deadline once decommission is finished. maximum to 30 days could",
              args: { name: "rollback-deadline-delay" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get-addon",
          description: "Get the specified addon for a cluster",
          options: [optClusterId, optAddonName, optFromJson],
        },
        {
          name: "get",
          description: "Get the details of a cluster",
          options: [
            optClusterId,
            {
              name: "--should-include-oidc-config-file",
              description:
                "Boolean value to determine if the OpenIdConnectAuth configuration file should be displayed for the provided",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get-public-api-endpoint-decommission-status",
          description: "Get cluster public api endpoint decommission status",
          options: [optClusterId, optFromJson],
        },
        {
          name: "install-addon",
          description: "Install the specified addon for a cluster",
          options: [
            optClusterId,
            optAddonName,
            {
              name: "--version-parameterconflict",
              description: "The version of addon to be installed",
              args: { name: "version-parameterconflict" },
            },
            {
              name: "--configurations",
              description: "Addon configuration details",
              args: { name: "json" },
            },
            {
              name: "--is-override-existing",
              description:
                "Whether or not to override an existing addon installation",
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
          name: "list-addons",
          description: "List addon for a provisioned cluster",
          options: [
            optClusterId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The optional field to sort the results by",
              args: { suggestions: ["NAME", "TIME_CREATED"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List all the cluster objects in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description: "A cluster lifecycle state to filter on",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "UPDATING",
                ],
              },
              isRepeatable: true,
            },
            optName,
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
          name: "reboot-cluster-node",
          description: "Perform reboot action to node in cluster",
          options: [
            optClusterId,
            optNodeId,
            { name: "--node-eviction-settings", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "replace-boot-volume-cluster-node",
          description: "Perform cycle action to node in cluster",
          options: [
            optClusterId,
            optNodeId,
            { name: "--node-eviction-settings", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "rollback-public-api-endpoint-decommission",
          description:
            "Rollback public api endpoint decommission for a cluster",
          options: [
            optClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start-credential-rotation",
          description:
            "Start cluster credential rotation by adding new credentials",
          options: [
            optClusterId,
            {
              name: "--auto-completion-delay-duration",
              description: "The duration in days(in ISO 8601 notation eg",
              args: { name: "auto-completion-delay-duration" },
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
          name: "start-public-api-endpoint-decommission",
          description: "Start public api endpoint decommission for a cluster",
          options: [
            optClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-addon",
          description: "Update addon details for a cluster",
          options: [
            optClusterId,
            optAddonName,
            {
              name: "--version-parameterconflict",
              description: "The version of the installed addon",
              args: { name: "version-parameterconflict" },
            },
            {
              name: "--configurations",
              description: "Addon configuration details",
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
        {
          name: "update",
          description: "Update the details of a cluster",
          options: [
            optClusterId,
            {
              name: "--name",
              description: "The new name for the cluster",
              args: { name: "name" },
            },
            {
              name: "--kubernetes-version",
              description:
                "The version of Kubernetes to which the cluster masters should be upgraded",
              args: { name: "kubernetes-version" },
            },
            { name: "--options", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--image-policy-config",
              description:
                "The image verification policy for signature validation",
              args: { name: "json" },
            },
            {
              name: "--type",
              description: "Type of cluster",
              args: { suggestions: ["BASIC_CLUSTER", "ENHANCED_CLUSTER"] },
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-endpoint-config",
          description:
            "Update the details of the cluster endpoint configuration",
          options: [
            optClusterId,
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to apply to the cluster endpoint",
              args: { name: "json" },
            },
            {
              name: "--is-public-ip-enabled",
              description:
                "Whether the cluster should be assigned a public IP address",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
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
          name: "generate-token",
          description:
            "Generate an ExecCredential based token for Kubernetes SDK/CLI authentication",
          options: [optClusterId, optFromJson],
        },
      ],
    },
    {
      name: "credential-rotation-status",
      description: "Information regarding cluster's credential rotation",
      subcommands: [
        {
          name: "get",
          description: "Get cluster credential rotation status",
          options: [optClusterId, optFromJson],
        },
      ],
    },
    {
      name: "pod-shape",
      description: "Pod shape",
      subcommands: [
        {
          name: "list",
          description: "List all the Pod Shapes in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--availability-domain",
              description: "The availability domain of the pod shape",
              args: { name: "availability-domain" },
            },
            optName,
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
      name: "addon-option",
      description: "The properties that define addon summary",
      subcommands: [
        {
          name: "list",
          description:
            "Get list of supported addons for a specific kubernetes version",
          options: [
            {
              name: "--kubernetes-version",
              description: "The kubernetes version to fetch the addons",
              args: { name: "kubernetes-version" },
              isRequired: true,
            },
            {
              name: "--addon-name",
              description: "The name of the addon",
              args: { name: "addon-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The optional field to sort the results by",
              args: { suggestions: ["NAME", "TIME_CREATED"] },
            },
            {
              name: "--should-show-all-versions",
              description:
                "Specifies whether all add-on versions should be displayed",
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
      name: "work-request-log-entry",
      description: "Log entries related to a specific work request",
      subcommands: [
        {
          name: "list",
          description: "Get the logs of a work request",
          options: [optCompartmentId, optWorkRequestId, optAll, optFromJson],
        },
      ],
    },
    {
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "delete",
          description: "Cancel a work request that has not started",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Get the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "List all work requests in a compartment",
          options: [
            optCompartmentId,
            optClusterId2,
            {
              name: "--resource-id",
              description:
                "The OCID of the resource associated with a work request",
              args: { name: "resource-id" },
            },
            {
              name: "--resource-type",
              description:
                "Type of the resource associated with a work request",
              args: { suggestions: ["CLUSTER", "NODEPOOL"] },
            },
            {
              name: "--status",
              description: "A work request status to filter on",
              args: { name: "status" },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
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
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cluster-migrate-to-native-vcn-status",
      description: "Information regarding a cluster's move to Native VCN",
      subcommands: [
        {
          name: "get",
          description: "Get details on a cluster's migration to native VCN",
          options: [optClusterId, optFromJson],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "Errors related to a specific work request",
      subcommands: [
        {
          name: "list",
          description: "Get the errors of a work request",
          options: [optCompartmentId, optWorkRequestId, optAll, optFromJson],
        },
      ],
    },
    {
      name: "workload-mapping",
      description: "The properties that define an workloadMapping",
      subcommands: [
        {
          name: "create",
          description: "Create the specified workloadMapping for a cluster",
          options: [
            optClusterId,
            {
              name: "--namespace",
              description: "The namespace of the workloadMapping",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--mapped-compartment-id",
              description: "The OCID of the mapped customer compartment",
              args: { name: "mapped-compartment-id" },
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
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
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
          description: "Delete workloadMapping for a provisioned cluster",
          options: [
            optClusterId,
            optWorkloadMappingId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the specified workloadMapping for a cluster",
          options: [optClusterId, optWorkloadMappingId, optFromJson],
        },
        {
          name: "list",
          description: "List workloadMappings for a provisioned cluster",
          options: [
            optClusterId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The optional field to sort the results by",
              args: { suggestions: ["NAMESPACE", "TIMECREATED"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update workloadMapping details for a cluster",
          options: [
            optClusterId,
            optWorkloadMappingId,
            {
              name: "--mapped-compartment-id",
              description: "The OCID of the mapped customer compartment",
              args: { name: "mapped-compartment-id" },
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
                  "FAILED",
                  "DELETING",
                  "DELETED",
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
      name: "node-pool-options",
      description: "Options for creating or updating node pools",
      subcommands: [
        {
          name: "get",
          description: "Get options available for node pools",
          options: [
            {
              name: "--node-pool-option-id",
              description: "The id of the option set to retrieve",
              args: { name: "node-pool-option-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--should-list-all-patch-versions",
              description: "Option to show all kubernetes patch versions",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--node-pool-os-type",
              description: "Filter node pool options by OS type",
              args: { suggestions: ["OL7", "OL8", "UBUNTU"] },
            },
            {
              name: "--node-pool-os-arch",
              description: "Filter node pool options by OS architecture",
              args: { suggestions: ["X86_64", "AARCH64"] },
            },
            {
              name: "--node-pool-k8s-version",
              description: "Filter node pool options by Kubernetes version",
              args: { name: "node-pool-k8s-version" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "node-pool",
      description: "A pool of compute nodes attached to a cluster",
      subcommands: [
        {
          name: "create",
          description: "Create a new node pool",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the node pool exists",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--cluster-id",
              description:
                "The OCID of the cluster to which this node pool is attached",
              args: { name: "cluster-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the node pool",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--node-shape",
              description:
                "The name of the node shape of the nodes in the node pool",
              args: { name: "node-shape" },
              isRequired: true,
            },
            {
              name: "--kubernetes-version",
              description:
                "The version of Kubernetes to install on the nodes in the node pool",
              args: { name: "kubernetes-version" },
            },
            {
              name: "--node-metadata",
              description:
                "A list of key/value pairs to add to each underlying OCI instance in the node pool on launch",
              args: { name: "json" },
            },
            {
              name: "--node-image-name",
              description: "Deprecated",
              args: { name: "node-image-name" },
              deprecated: true,
            },
            {
              name: "--node-source-details",
              description:
                "Specify the source to use to launch nodes in the node pool",
              args: { name: "json" },
            },
            {
              name: "--node-shape-config",
              description:
                "Specify the configuration of the shape to launch nodes in the node pool",
              args: { name: "json" },
            },
            {
              name: "--initial-node-labels",
              description:
                "A list of key/value pairs to add to nodes after they join the Kubernetes cluster",
              args: { name: "json" },
            },
            {
              name: "--ssh-public-key",
              description:
                "The SSH public key on each node in the node pool on launch",
              args: { name: "ssh-public-key" },
            },
            {
              name: "--quantity-per-subnet",
              description: "Optional, default to 1",
              args: { name: "integer" },
            },
            {
              name: "--subnet-ids",
              description:
                "The OCIDs of the subnets in which to place nodes for this node pool",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--node-pool-cycling-details", args: { name: "json" } },
            {
              name: "--secondary-vnics",
              description: "A list of secondary vnics to attach to nodes",
              args: { name: "json" },
            },
            {
              name: "--network-launch-type",
              description:
                "Emulation type for the physical network interface card (NIC) for nodes",
              args: { suggestions: ["VFIO", "E1000", "PARAVIRTUALIZED"] },
            },
            { name: "--primary-vnic", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--node-image-id",
              description: "The OCID of the image used to launch the node",
              args: { name: "node-image-id" },
            },
            {
              name: "--node-boot-volume-size-in-gbs",
              description: "The size of the boot volume in GBs",
              args: { name: "integer" },
            },
            {
              name: "--size",
              description:
                "The number of nodes spread across placement configurations",
              args: { name: "integer" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCIDs of the Network Security Group(s) to associate nodes for this node pool with",
              args: { name: "json" },
            },
            {
              name: "--placement-configs",
              description:
                "The placement configurations that determine where the nodes will be placed",
              args: { name: "json" },
            },
            {
              name: "--node-freeform-tags",
              description: "Free-form tags for the nodes",
              args: { name: "json" },
            },
            {
              name: "--node-defined-tags",
              description: "Defined tags for the nodes",
              args: { name: "json" },
            },
            {
              name: "--node-eviction-node-pool-settings",
              description: "Node eviction settings for this nodepool",
              args: { name: "json" },
            },
            {
              name: "--kms-key-id",
              description:
                "The OCID of the Key Management Service key assigned to the boot volume",
              args: { name: "kms-key-id" },
            },
            {
              name: "--is-pv-encryption-in-transit-enabled",
              description:
                "Whether to enable in-transit encryption for the data volume's paravirtualized attachment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--max-pods-per-node",
              description:
                "The maximum number of pods that will live on a node of the node pool",
              args: { name: "integer" },
            },
            {
              name: "--pod-nsg-ids",
              description:
                "The OCIDs of the Network Security Group(s) to associate pods for this node pool with",
              args: { name: "json" },
            },
            {
              name: "--pod-subnet-ids",
              description:
                "The OCIDs of the subnets in which to place pods for this node pool",
              args: { name: "json" },
            },
            {
              name: "--cni-type",
              description: "The CNI plugin used by this node pool",
              args: { suggestions: ["OCI_VCN_IP_NATIVE", "FLANNEL_OVERLAY"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete-node",
          description: "Delete node",
          options: [
            optNodePoolId,
            optNodeId,
            {
              name: "--is-decrement-size",
              description:
                "If the nodepool should be scaled down after the node is deleted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optOverrideEvictionGraceDuration,
            optIsForceDeletionAfterOverrideGraceDuration,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a node pool",
          options: [
            optNodePoolId,
            optIfMatch,
            optOverrideEvictionGraceDuration,
            optIsForceDeletionAfterOverrideGraceDuration,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the details of a node pool",
          options: [optNodePoolId, optFromJson],
        },
        {
          name: "list",
          description:
            "List all the node pools in a compartment, and optionally filter by cluster",
          options: [
            optCompartmentId,
            optClusterId2,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--lifecycle-state",
              description:
                "A list of nodepool lifecycle states on which to filter on, matching any of the list items (OR logic). eg",
              args: {
                suggestions: [
                  "DELETED",
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "FAILED",
                  "INACTIVE",
                  "NEEDS_ATTENTION",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update a node pool",
          options: [
            optNodePoolId,
            {
              name: "--name",
              description: "The new name for the cluster",
              args: { name: "name" },
            },
            {
              name: "--kubernetes-version",
              description:
                "The version of Kubernetes to which the nodes in the node pool should be upgraded",
              args: { name: "kubernetes-version" },
            },
            {
              name: "--initial-node-labels",
              description:
                "A list of key/value pairs to add to nodes after they join the Kubernetes cluster",
              args: { name: "json" },
            },
            {
              name: "--quantity-per-subnet",
              description:
                "The number of nodes to have in each subnet specified in the subnetIds property",
              args: { name: "integer" },
            },
            {
              name: "--subnet-ids",
              description:
                "The OCIDs of the subnets in which to place nodes for this node pool",
              args: { name: "json" },
            },
            {
              name: "--node-metadata",
              description:
                "A list of key/value pairs to add to each underlying OCI instance in the node pool on launch",
              args: { name: "json" },
            },
            {
              name: "--node-source-details",
              description:
                "Specify the source to use to launch nodes in the node pool",
              args: { name: "json" },
            },
            {
              name: "--ssh-public-key",
              description:
                "The SSH public key to add to each node in the node pool on launch",
              args: { name: "ssh-public-key" },
            },
            {
              name: "--node-shape",
              description:
                "The name of the node shape of the nodes in the node pool used on launch",
              args: { name: "node-shape" },
            },
            {
              name: "--node-shape-config",
              description:
                "Specify the configuration of the shape to launch nodes in the node pool",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--node-pool-cycling-details", args: { name: "json" } },
            {
              name: "--secondary-vnics",
              description: "A list of secondary vnics to attach to nodes",
              args: { name: "json" },
            },
            {
              name: "--network-launch-type",
              description:
                "Emulation type for the physical network interface card (NIC) for nodes",
              args: { suggestions: ["VFIO", "E1000", "PARAVIRTUALIZED"] },
            },
            { name: "--primary-vnic", args: { name: "json" } },
            optIfMatch,
            optOverrideEvictionGraceDuration,
            optIsForceDeletionAfterOverrideGraceDuration,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--size",
              description:
                "The number of nodes spread across placement configurations",
              args: { name: "integer" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCIDs of the Network Security Group(s) to associate nodes for this node pool with",
              args: { name: "json" },
            },
            {
              name: "--placement-configs",
              description:
                "The placement configurations that determine where the nodes will be placed",
              args: { name: "json" },
            },
            {
              name: "--node-freeform-tags",
              description: "Free-form tags for the nodes",
              args: { name: "json" },
            },
            {
              name: "--node-defined-tags",
              description: "Defined tags for the nodes",
              args: { name: "json" },
            },
            {
              name: "--node-eviction-node-pool-settings",
              description: "Node eviction settings for this nodepool",
              args: { name: "json" },
            },
            {
              name: "--kms-key-id",
              description:
                "The OCID of the Key Management Service key assigned to the boot volume",
              args: { name: "kms-key-id" },
            },
            {
              name: "--is-pv-encryption-in-transit-enabled",
              description:
                "Whether to enable in-transit encryption for the data volume's paravirtualized attachment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--max-pods-per-node",
              description:
                "The maximum number of pods that will live on a node of the node pool",
              args: { name: "integer" },
            },
            {
              name: "--pod-nsg-ids",
              description:
                "The OCIDs of the Network Security Group(s) to associate pods for this node pool with",
              args: { name: "json" },
            },
            {
              name: "--pod-subnet-ids",
              description:
                "The OCIDs of the subnets in which to place pods for this node pool",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cluster-options",
      description: "Options for creating or updating clusters",
      subcommands: [
        {
          name: "get",
          description: "Get options available for clusters",
          options: [
            {
              name: "--cluster-option-id",
              description: "The id of the option set to retrieve",
              args: { name: "cluster-option-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--should-list-all-patch-versions",
              description: "Option to show all kubernetes patch versions",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
