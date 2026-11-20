// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optInstancePoolId: Fig.Option = {
  name: "--instance-pool-id",
  description: "The OCID of the instance pool",
  args: { name: "instance-pool-id" },
  isRequired: true,
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
      "PROVISIONING",
      "SCALING",
      "STARTING",
      "STOPPING",
      "TERMINATING",
      "STOPPED",
      "TERMINATED",
      "RUNNING",
    ],
  },
  isRepeatable: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
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
const optClusterNetworkId: Fig.Option = {
  name: "--cluster-network-id",
  description: "The OCID of the cluster network",
  args: { name: "cluster-network-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optInstanceConfigurationId: Fig.Option = {
  name: "--instance-configuration-id",
  description: "The OCID of the instance configuration",
  args: { name: "instance-configuration-id" },
  isRequired: true,
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
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optInstanceId: Fig.Option = {
  name: "--instance-id",
  description: "The OCID of the instance",
  args: { name: "instance-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment containing the instance configuration",
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
const completionSpec: Fig.Spec = {
  name: "compute-management",
  description: "Compute Management Service",
  subcommands: [
    {
      name: "instance-pool",
      description:
        "An instance pool is a set of instances within the same region that are managed as a group",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an instance pool into a different compartment within the same tenancy",
          options: [
            optInstancePoolId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the instance pool to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an instance pool",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the instance pool",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--instance-configuration-id",
              description:
                "The OCID of the instance configuration associated with the instance pool",
              args: { name: "instance-configuration-id" },
              isRequired: true,
            },
            {
              name: "--placement-configurations",
              description: "The placement configurations for the instance pool",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--size",
              description:
                "The number of instances that should be in the instance pool",
              args: { name: "integer" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--load-balancers",
              description: "The load balancers to attach to the instance pool",
              args: { name: "json" },
            },
            { name: "--override-policy", args: { name: "json" } },
            {
              name: "--instance-display-name-formatter",
              description:
                "A user-friendly formatter for the instance pool's instances",
              args: { name: "instance-display-name-formatter" },
            },
            {
              name: "--instance-hostname-formatter",
              description:
                "A user-friendly formatter for the instance pool's instances",
              args: { name: "instance-hostname-formatter" },
            },
            { name: "--lifecycle-management", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified instance pool",
          options: [optInstancePoolId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the instance pools in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "SCALING",
                  "STARTING",
                  "STOPPING",
                  "TERMINATING",
                  "STOPPED",
                  "TERMINATED",
                  "RUNNING",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reset",
          description:
            "Performs the reset (immediate power off and power on) action on the specified instance pool",
          options: [
            optInstancePoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "softreset",
          description:
            "Performs the softreset (ACPI shutdown and power on) action on the specified instance pool",
          options: [
            optInstancePoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "softstop",
          description:
            "Performs the softstop (ACPI shutdown and power on) action on the specified instance pool",
          options: [
            optInstancePoolId,
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
            "Performs the start (power on) action on the specified instance pool",
          options: [
            optInstancePoolId,
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
            "Performs the stop (immediate power off) action on the specified instance pool",
          options: [
            optInstancePoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "terminate",
          description: "Terminate the specified instance pool",
          options: [
            optInstancePoolId,
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
          description: "Update the specified instance pool",
          options: [
            optInstancePoolId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--instance-configuration-id",
              description:
                "The OCID of the instance configuration associated with the instance pool",
              args: { name: "instance-configuration-id" },
            },
            {
              name: "--placement-configurations",
              description: "The placement configurations for the instance pool",
              args: { name: "json" },
            },
            {
              name: "--size",
              description:
                "The number of instances that should be in the instance pool",
              args: { name: "integer" },
            },
            { name: "--override-policy", args: { name: "json" } },
            {
              name: "--instance-display-name-formatter",
              description:
                "A user-friendly formatter for the instance pool's instances",
              args: { name: "instance-display-name-formatter" },
            },
            {
              name: "--instance-hostname-formatter",
              description:
                "A user-friendly formatter for the instance pool's instances",
              args: { name: "instance-hostname-formatter" },
            },
            { name: "--lifecycle-management", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-instances",
          description: "List the instances in the specified instance pool",
          options: [
            optCompartmentId,
            optInstancePoolId,
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "attach-lb",
          description: "Attach a load balancer to the instance pool",
          options: [
            optInstancePoolId,
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer to attach to the instance pool",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set on the load balancer to add instances to",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--port",
              description:
                "The port value to use when creating the backend set",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--vnic-selection",
              description:
                "Indicates which VNIC on each instance in the pool should be used to associate with the load balancer",
              args: { name: "vnic-selection" },
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
          name: "detach-lb",
          description: "Detach a load balancer from the instance pool",
          options: [
            optInstancePoolId,
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer to detach from the instance pool",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set on the load balancer to detach from the instance pool",
              args: { name: "backend-set-name" },
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
          name: "lb-attachment",
          description:
            "Represents a load balancer that is attached to an instance pool",
          subcommands: [
            {
              name: "attach",
              description: "Attach a load balancer to the instance pool",
              options: [
                optInstancePoolId,
                {
                  name: "--load-balancer-id",
                  description:
                    "The OCID of the load balancer to attach to the instance pool",
                  args: { name: "load-balancer-id" },
                  isRequired: true,
                },
                {
                  name: "--backend-set-name",
                  description:
                    "The name of the backend set on the load balancer to add instances to",
                  args: { name: "backend-set-name" },
                  isRequired: true,
                },
                {
                  name: "--port",
                  description:
                    "The port value to use when creating the backend set",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--vnic-selection",
                  description:
                    "Indicates which VNIC on each instance in the pool should be used to associate with the load balancer",
                  args: { name: "vnic-selection" },
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
              name: "detach",
              description: "Detach a load balancer from the instance pool",
              options: [
                optInstancePoolId,
                {
                  name: "--load-balancer-id",
                  description:
                    "The OCID of the load balancer to detach from the instance pool",
                  args: { name: "load-balancer-id" },
                  isRequired: true,
                },
                {
                  name: "--backend-set-name",
                  description:
                    "The name of the backend set on the load balancer to detach from the instance pool",
                  args: { name: "backend-set-name" },
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
              description:
                "Gets information about a load balancer that is attached to the specified instance pool",
              options: [
                optInstancePoolId,
                {
                  name: "--lb-attachment-id",
                  description: "The OCID of the load balancer attachment",
                  args: { name: "lb-attachment-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "instance-configuration",
      description:
        "An instance configuration is a template that defines the settings to use when creating Compute instances",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an instance configuration into a different compartment within the same tenancy",
          options: [
            optInstanceConfigurationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the instance configuration to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-instance-configuration-create-gmc-configuration-details",
          description: "Creates an instance configuration",
          options: [
            optCompartmentId2,
            {
              name: "--gmc-configs",
              description: "The GPU Memory Cluster configuration entries for",
              args: { name: "json" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an instance configuration",
          options: [
            optInstanceConfigurationId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified instance configuration",
          options: [optInstanceConfigurationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the instance configurations in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the free-form tags, defined tags, and display name of an instance configuration",
          options: [
            optInstanceConfigurationId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "launch-compute-instance",
          description: "Creates an instance from an instance configuration",
          options: [
            optInstanceConfigurationId,
            {
              name: "--block-volumes",
              description: "Block volume parameters",
              args: { name: "json" },
            },
            { name: "--launch-details", args: { name: "json" } },
            {
              name: "--secondary-vnics",
              description: "Secondary VNIC parameters",
              args: { name: "json" },
            },
            {
              name: "--opc-compute-cluster-id",
              description:
                "The OCID of the compute cluster that the instance will be created in",
              args: { name: "opc-compute-cluster-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an instance configuration",
          options: [
            optCompartmentId2,
            {
              name: "--instance-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optFromJson,
          ],
        },
        {
          name: "create-from-instance",
          description: "Creates an instance configuration",
          options: [
            optCompartmentId2,
            {
              name: "--instance-id",
              description:
                "The OCID of the instance to use to create the instance configuration",
              args: { name: "instance-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cluster-network",
      description:
        "A cluster network is a group of high performance computing (HPC), GPU",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a cluster network with instance pools into a different compartment within the same tenancy",
          options: [
            optClusterNetworkId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a cluster network with instance pools",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the cluster network",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--instance-pools",
              description:
                "The data to create the instance pools in the cluster network",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--placement-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            { name: "--cluster-configuration", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about a cluster network with instance pools",
          options: [optClusterNetworkId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the cluster networks with instance pools in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "SCALING",
                  "STARTING",
                  "STOPPING",
                  "TERMINATING",
                  "STOPPED",
                  "TERMINATED",
                  "RUNNING",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "terminate",
          description:
            "Deletes (terminates) a cluster network with instance pools",
          options: [
            optClusterNetworkId,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a cluster network with instance pools",
          options: [
            optClusterNetworkId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--instance-pools",
              description:
                "The instance pools in the cluster network to update",
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
          name: "list-instances",
          description:
            "Lists the instances in a cluster network with instance pools",
          options: [
            optCompartmentId,
            optClusterNetworkId,
            optDisplayName2,
            optLimit,
            optPage,
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
      name: "instance-pool-instance",
      description:
        "Information about an instance that belongs to an instance pool",
      subcommands: [
        {
          name: "attach",
          description: "Attaches an instance to an instance pool",
          options: [
            optInstancePoolId,
            optInstanceId,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ATTACHING",
                  "ACTIVE",
                  "DETACHING",
                  "TERMINATION_AWAIT",
                  "TERMINATION_PROCEED",
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
          name: "detach",
          description: "Detaches an instance from an instance pool",
          options: [
            optInstancePoolId,
            optInstanceId,
            {
              name: "--is-decrement-size",
              description:
                "Whether to decrease the size of the instance pool when the instance is detached",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-auto-terminate",
              description:
                "Whether to permanently terminate (delete) the instance and its attached boot volume when detaching it from",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"],
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
            "Gets information about an instance that belongs to an instance pool",
          options: [optInstancePoolId, optInstanceId, optFromJson],
        },
        {
          name: "termination-proceed",
          description:
            "Marks an instance in an instance pool to be ready for termination",
          options: [optInstancePoolId, optInstanceId, optFromJson],
        },
      ],
    },
  ],
};

export default completionSpec;
