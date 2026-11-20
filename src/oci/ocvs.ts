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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSddcId: Fig.Option = {
  name: "--sddc-id",
  description: "The OCID of the SDDC",
  args: { name: "sddc-id" },
  isRequired: true,
};
const optDatastoreClusterId: Fig.Option = {
  name: "--datastore-cluster-id",
  description: "The OCID of the Datastore Cluster",
  args: { name: "datastore-cluster-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optByolId: Fig.Option = {
  name: "--byol-id",
  description: "The OCID of the BYOL",
  args: { name: "byol-id" },
  isRequired: true,
};
const optDatastoreId: Fig.Option = {
  name: "--datastore-id",
  description: "The OCID of the Datastore",
  args: { name: "datastore-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The lifecycle state of the resource",
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
};
const optByolAllocationId: Fig.Option = {
  name: "--byol-allocation-id",
  description: "The OCID of the BYOL Allocation",
  args: { name: "byol-allocation-id" },
  isRequired: true,
};
const optCapacityReservationId: Fig.Option = {
  name: "--capacity-reservation-id",
  description: "The OCID of the Capacity Reservation",
  args: { name: "capacity-reservation-id" },
};
const optClusterId: Fig.Option = {
  name: "--cluster-id",
  description: "The OCID of the SDDC Cluster",
  args: { name: "cluster-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment as optional parameter",
  args: { name: "compartment-id" },
};
const optVcfByolAllocationId: Fig.Option = {
  name: "--vcf-byol-allocation-id",
  description:
    "The OCID of the Byol Allocation for VCF (VMware Cloud Foundation) deployment",
  args: { name: "vcf-byol-allocation-id" },
};
const optClusterId2: Fig.Option = {
  name: "--cluster-id",
  description: "The OCID of the SDDC Cluster",
  args: { name: "cluster-id" },
};
const optEsxiHostId: Fig.Option = {
  name: "--esxi-host-id",
  description: "The OCID of the ESXi host",
  args: { name: "esxi-host-id" },
  isRequired: true,
};
const optEsxiId: Fig.Option = {
  name: "--esxi-id",
  description: "The OCID of the ESXi host",
  args: { name: "esxi-id" },
  isRequired: true,
};
const optManagementApplianceId: Fig.Option = {
  name: "--management-appliance-id",
  description: "The OCID of the management appliance",
  args: { name: "management-appliance-id" },
  isRequired: true,
};
const optSddcId2: Fig.Option = {
  name: "--sddc-id",
  description: "The OCID of the SDDC",
  args: { name: "sddc-id" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
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
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "ocvs",
  description: "Oracle Cloud VMware Solution",
  subcommands: [
    {
      name: "byol",
      description:
        "Use the Oracle Cloud VMware CLI to create SDDCs and manage ESXi hosts and software",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an BYOL into a different compartment within the same tenancy",
          options: [
            optByolId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the BYOL to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an Oracle Cloud VMware Solution Bring-You-Own-License (BYOL)",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment that contains the BYOL",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A descriptive name for the BYOL",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--software-type",
              description: "The type of VMware software the BYOL applies to",
              args: { name: "software-type" },
              isRequired: true,
            },
            {
              name: "--total-units",
              description:
                "Total quantity of licensed units for the specified softwareType",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--time-term-start",
              description: "The date and time when the BYOL becomes active",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-term-end",
              description:
                "The date and time when the BYOL expires and becomes inactive",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--entitlement-key",
              description: "The Broadcom-supplied identifier of a BYOL license",
              args: { name: "entitlement-key" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description of the BYOL",
              args: { name: "description" },
            },
            {
              name: "--site-id",
              description: "The hyperscaler identifier in Broadcom systems",
              args: { name: "site-id" },
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
          description: "Deletes the specified BYOL",
          options: [
            optByolId,
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
          description: "Gets the specified BYOL's information",
          options: [optByolId, optFromJson],
        },
        {
          name: "retrieve-byol-realm-allocations",
          description:
            "Retrieve realm-wide allocation status for a specified BYOL",
          options: [
            optByolId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified BYOL",
          options: [
            optByolId,
            {
              name: "--display-name",
              description: "A descriptive name for the BYOL",
              args: { name: "display-name" },
            },
            {
              name: "--total-units",
              description:
                "Total quantity of licensed units for the specified softwareType",
              args: { name: "integer" },
            },
            {
              name: "--description",
              description: "A description of the BYOL",
              args: { name: "description" },
            },
            {
              name: "--software-type",
              description: "The type of VMware software the BYOL applies to",
              args: { name: "software-type" },
            },
            {
              name: "--time-term-start",
              description: "The date and time when the BYOL becomes active",
              args: { name: "datetime" },
            },
            {
              name: "--time-term-end",
              description:
                "The date and time when the BYOL expires and becomes inactive",
              args: { name: "datetime" },
            },
            {
              name: "--entitlement-key",
              description: "The Broadcom-supplied identifier of a BYOL license",
              args: { name: "entitlement-key" },
            },
            {
              name: "--site-id",
              description: "The hyperscaler identifier in Broadcom systems",
              args: { name: "site-id" },
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
          description: "Lists the BYOLs in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--byol-id",
              description: "The OCID of the BYOL",
              args: { name: "byol-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycle state matches the given value",
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
            {
              name: "--software-type",
              description:
                "A filter to return only resources whose softwareType matches the given value",
              args: {
                suggestions: ["VCF", "VSAN", "VDEFEND", "AVI_LOAD_BALANCER"],
              },
            },
            {
              name: "--available-units-greater-than-or-equal-to",
              description:
                "A filter to return only resources whose availableUnits greater than or equal to the given value",
              args: { name: "number" },
            },
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["displayName", "timeCreated", "timeTermStart"],
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
      name: "byol-allocation",
      description:
        "Use the Oracle Cloud VMware CLI to create SDDCs and manage ESXi hosts and software",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an BYOL Allocation into a different compartment within the same tenancy",
          options: [
            optByolAllocationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the BYOL Allocation to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an Allocation on an specific Bring-You-Own-License (BYOL)",
          options: [
            {
              name: "--byol-id",
              description:
                "The OCID of the BYOL resource from which this BYOL Allocation is derived",
              args: { name: "byol-id" },
              isRequired: true,
            },
            {
              name: "--allocated-units",
              description:
                "The quantity of licensed units that allocated to this region",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the BYOL Allocation",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A descriptive name for the BYOL Allocation",
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
          description: "Deletes the specified BYOL Allocation",
          options: [
            optByolAllocationId,
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
          description: "Gets the specified BYOL Allocation's information",
          options: [optByolAllocationId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified BYOL Allocation",
          options: [
            optByolAllocationId,
            {
              name: "--display-name",
              description: "A descriptive name for the BYOL Allocation",
              args: { name: "display-name" },
            },
            {
              name: "--allocated-units",
              description:
                "The quantity of licensed units that allocated to this region",
              args: { name: "integer" },
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
          description:
            "Lists the BYOL Allocations in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--byol-allocation-id",
              description: "The OCID of the BYOL Allocation",
              args: { name: "byol-allocation-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycle state matches the given value",
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
            {
              name: "--software-type",
              description:
                "A filter to return only resources whose softwareType matches the given value",
              args: {
                suggestions: ["VCF", "VSAN", "VDEFEND", "AVI_LOAD_BALANCER"],
              },
            },
            {
              name: "--available-units-greater-than-or-equal-to",
              description:
                "A filter to return only resources whose availableUnits greater than or equal to the given value",
              args: { name: "number" },
            },
            {
              name: "--byol-id",
              description: "The OCID of the BYOL",
              args: { name: "byol-id" },
            },
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["displayName", "timeCreated", "timeTermStart"],
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
      name: "cluster",
      description:
        "Use the Oracle Cloud VMware CLI to create SDDCs and manage ESXi hosts and software",
      subcommands: [
        {
          name: "create",
          description:
            "Create a vSphere Cluster in software-defined data center (SDDC)",
          options: [
            {
              name: "--sddc-id",
              description: "The OCID of the SDDC that the Cluster belongs to",
              args: { name: "sddc-id" },
              isRequired: true,
            },
            {
              name: "--compute-availability-domain",
              description:
                "The availability domain to create the Cluster's ESXi hosts in",
              args: { name: "compute-availability-domain" },
              isRequired: true,
            },
            {
              name: "--esxi-hosts-count",
              description: "The number of ESXi hosts to create in the Cluster",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--network-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A descriptive name for the Cluster",
              args: { name: "display-name" },
            },
            {
              name: "--instance-display-name-prefix",
              description:
                "A prefix used in the name of each ESXi host and Compute instance in the Cluster",
              args: { name: "instance-display-name-prefix" },
            },
            {
              name: "--initial-commitment",
              description:
                "The billing option selected during Cluster creation",
              args: {
                suggestions: ["HOUR", "MONTH", "ONE_YEAR", "THREE_YEARS"],
              },
            },
            {
              name: "--workload-network-cidr",
              description:
                "The CIDR block for the IP addresses that VMware VMs in the Cluster use to run application workloads",
              args: { name: "workload-network-cidr" },
            },
            {
              name: "--initial-host-shape-name",
              description:
                "The initial compute shape of the Cluster's ESXi hosts",
              args: { name: "initial-host-shape-name" },
            },
            {
              name: "--initial-host-ocpu-count",
              description: "The initial OCPU count of the Cluster's ESXi hosts",
              args: { name: "number" },
            },
            {
              name: "--is-shielded-instance-enabled",
              description:
                "Indicates whether shielded instance is enabled for this Cluster",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCapacityReservationId,
            {
              name: "--datastores",
              description: "A list of datastore info for the Cluster",
              args: { name: "json" },
            },
            {
              name: "--datastore-cluster-ids",
              description: "A list of datastore clusters",
              args: { name: "json" },
            },
            {
              name: "--vmware-software-version",
              description:
                "The VMware software bundle to install on the ESXi hosts in the Cluster",
              args: { name: "vmware-software-version" },
            },
            {
              name: "--esxi-software-version",
              description:
                "The ESXi software bundle to install on the ESXi hosts in the Cluster",
              args: { name: "esxi-software-version" },
            },
            {
              name: "--initial-fault-domain-host-distribution",
              description:
                "The initial fault domain host distribution mode for the Cluster",
              args: {
                suggestions: ["EVENLY_DISTRIBUTED", "UNEVENLY_DISTRIBUTED"],
              },
            },
            {
              name: "--cluster-byol-allocation-details",
              args: { name: "json" },
            },
            {
              name: "--initial-vcf-byol-allocation-id",
              description:
                "The OCID of the initial VMware BYOL Allocation used to deploy VMware Cloud Foundation",
              args: { name: "initial-vcf-byol-allocation-id" },
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
            "Deletes the specified Cluster, along with the other resources that were created with the Cluster",
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
          name: "get",
          description: "Gets the specified Cluster's information",
          options: [optClusterId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified Cluster",
          options: [
            optClusterId,
            {
              name: "--display-name",
              description: "The OCID of the Cluster",
              args: { name: "display-name" },
            },
            { name: "--network-configuration", args: { name: "json" } },
            {
              name: "--vmware-software-version",
              description:
                "The version of bundled VMware software that the Oracle Cloud VMware Solution will install on any new ESXi",
              args: { name: "vmware-software-version" },
            },
            {
              name: "--esxi-software-version",
              description:
                "The version of bundled ESXi software that the Oracle Cloud VMware Solution will install on any new ESXi hosts",
              args: { name: "esxi-software-version" },
            },
            {
              name: "--cluster-byol-allocation-details",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-host-distribution-report",
          description:
            "Generates report for how ESXi hosts are distributed across Fault Domains",
          options: [optClusterId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Clusters in the specified compartment",
          options: [
            optSddcId2,
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optCompartmentId2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "datastore",
      description:
        "Use the Oracle Cloud VMware CLI to create SDDCs and manage ESXi hosts and software",
      subcommands: [
        {
          name: "add-block-volume",
          description:
            "Add the specified Block Volume to the provided Datastore",
          options: [
            optDatastoreId,
            {
              name: "--block-volume-id",
              description:
                "The OCID of the Block Volume to be added to the Datastore",
              args: { name: "block-volume-id" },
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
            "Moves an Datastore into a different compartment within the same tenancy",
          options: [
            optDatastoreId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Datastore to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a Oracle Cloud VMware Solution Datastore",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the Datastore",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--block-volume-ids",
              description:
                "The List of Block volume OCIDs that belong to the Datastore",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A descriptive name for the Datastore",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description: "The availability domain to create the Datastore in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--datastore-cluster-id",
              description:
                "The OCID of the datastore cluster that Datastore belongs to",
              args: { name: "datastore-cluster-id" },
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
          description: "Deletes the specified Datastore",
          options: [
            optDatastoreId,
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
          description: "Get the specified Datastore's information",
          options: [optDatastoreId, optFromJson],
        },
        {
          name: "list",
          description: "List the Datastores in the specified compartment",
          options: [
            optCompartmentId2,
            optDisplayName,
            optClusterId2,
            {
              name: "--datastore-id",
              description: "The OCID of the Datastore",
              args: { name: "datastore-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified Datastore",
          options: [
            optDatastoreId,
            {
              name: "--display-name",
              description: "A descriptive name for the Datastore",
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
      name: "datastore-cluster",
      description:
        "Use the Oracle Cloud VMware CLI to create SDDCs and manage ESXi hosts and software",
      subcommands: [
        {
          name: "add-datastore",
          description:
            "Add the specified Datastore to the provided Datastore Cluster",
          options: [
            optDatastoreClusterId,
            {
              name: "--datastore-ids",
              description: "A list of datastores to be added",
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
          name: "attach-to-cluster",
          description:
            "Attach the specified Datastore Cluster to the provided Vmware Cluster",
          options: [
            optDatastoreClusterId,
            {
              name: "--cluster-id",
              description:
                "The OCID of the VMware cluster to attach the datastore cluster to",
              args: { name: "cluster-id" },
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
          name: "attach-to-esxi-host",
          description:
            "Attach the specified Datastore Cluster to the provided ESXi Hosts",
          options: [
            optDatastoreClusterId,
            {
              name: "--esxi-host-id",
              description:
                "The OCID of the ESXi host to attach the datastore cluster to",
              args: { name: "esxi-host-id" },
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
            "Moves an Datastore Cluster into a different compartment within the same tenancy",
          options: [
            optDatastoreClusterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Datastore Cluster to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a Oracle Cloud VMware Solution Datastore Cluster",
          options: [
            {
              name: "--display-name",
              description: "A descriptive name for the Datastore Cluster",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the Datastore Cluster",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--datastore-cluster-type",
              description: "Type of the datastore",
              args: { suggestions: ["MANAGEMENT", "WORKLOAD"] },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The availability domain to create the Datastore Cluster in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--datastore-ids",
              description:
                "The OCIDs of the Datastores that belong to the Datastore Cluster",
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
          description: "Deletes the specified Datastore Cluster",
          options: [
            optDatastoreClusterId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "detach-from-cluster",
          description:
            "Detach the specified Datastore Cluster from the provided Vmware Cluster",
          options: [
            optDatastoreClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "detach-from-esxi-host",
          description:
            "Detach the specified Datastore Cluster from the provided ESXi Hosts",
          options: [
            optDatastoreClusterId,
            {
              name: "--esxi-host-id",
              description:
                "The OCID of the ESXi host to detach the datastore cluster from",
              args: { name: "esxi-host-id" },
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
          description: "Get the specified Datastore Cluster information",
          options: [optDatastoreClusterId, optFromJson],
        },
        {
          name: "list",
          description:
            "List the Datastore Clusters in the specified compartment",
          options: [
            optCompartmentId2,
            optDisplayName,
            {
              name: "--datastore-cluster-id",
              description: "The OCID of the Datastore Cluster",
              args: { name: "datastore-cluster-id" },
            },
            optClusterId2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove-datastore",
          description:
            "Remove the specified Datastore from the provided Datastore Cluster",
          options: [
            optDatastoreClusterId,
            {
              name: "--datastore-ids",
              description: "A list of datastores to be removed",
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
          name: "update",
          description: "Updates the specified Datastore Cluster",
          options: [
            optDatastoreClusterId,
            {
              name: "--display-name",
              description: "A descriptive name for the Datastore Cluster",
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
      name: "esxi-host",
      description: "An ESXi host is a node in a Cluster",
      subcommands: [
        {
          name: "create",
          description: "Adds another ESXi host to an existing SDDC",
          options: [
            {
              name: "--cluster-id",
              description: "The OCID of the Cluster to add the ESXi host to",
              args: { name: "cluster-id" },
              isRequired: true,
            },
            {
              name: ["--display-name", "--name"],
              description: "A descriptive name for the ESXi host",
              args: { name: "display-name" },
            },
            {
              name: "--billing-donor-host-id",
              description:
                "The OCID of the deleted ESXi Host with LeftOver billing cycle",
              args: { name: "billing-donor-host-id" },
            },
            {
              name: "--current-commitment",
              description: "The billing option currently used by the ESXi host",
              args: {
                suggestions: ["HOUR", "MONTH", "ONE_YEAR", "THREE_YEARS"],
              },
            },
            {
              name: "--next-commitment",
              description:
                "The billing option to switch to after the existing billing cycle ends",
              args: {
                suggestions: ["HOUR", "MONTH", "ONE_YEAR", "THREE_YEARS"],
              },
            },
            {
              name: "--compute-availability-domain",
              description: "The availability domain to create the ESXi host in",
              args: { name: "compute-availability-domain" },
            },
            {
              name: "--host-shape-name",
              description: "The compute shape name of the ESXi host",
              args: { name: "host-shape-name" },
            },
            {
              name: "--host-ocpu-count",
              description: "The OCPU count of the ESXi host",
              args: { name: "number" },
            },
            optCapacityReservationId,
            {
              name: "--esxi-software-version",
              description:
                "The ESXi software bundle to install on the ESXi host",
              args: { name: "esxi-software-version" },
            },
            optVcfByolAllocationId,
            {
              name: "--is-vsan-byol-enabled",
              description:
                "Indicates whether this host embedded VMware vSAN with BYOL Allocation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--fault-domain-host-distribution",
              description:
                "The initial fault domain host distribution mode for the ESXi host",
              args: {
                suggestions: ["EVENLY_DISTRIBUTED", "UNEVENLY_DISTRIBUTED"],
              },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified ESXi host",
          options: [
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEsxiId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified ESXi host's information",
          options: [optEsxiId, optFromJson],
        },
        {
          name: "inplace-upgrade",
          description: "In-place upgrade a ESXi host",
          options: [
            optEsxiHostId,
            optCapacityReservationId,
            optVcfByolAllocationId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--fault-domain-host-distribution",
              description:
                "Initial Fault Domain Host distribution mode for the ESXi host",
              args: {
                suggestions: ["EVENLY_DISTRIBUTED", "UNEVENLY_DISTRIBUTED"],
              },
            },
            optFromJson,
          ],
        },
        {
          name: "replace-host",
          description:
            "Replace a faulty ESXi host whose underlying bare metal is broken",
          options: [
            optEsxiHostId,
            {
              name: "--esxi-software-version",
              description:
                "The ESXi software bundle to install on the ESXi host",
              args: { name: "esxi-software-version" },
            },
            optCapacityReservationId,
            optVcfByolAllocationId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--fault-domain-host-distribution",
              description:
                "Initial Fault Domain Host distribution mode for the ESXi host",
              args: {
                suggestions: ["EVENLY_DISTRIBUTED", "UNEVENLY_DISTRIBUTED"],
              },
            },
            optFromJson,
          ],
        },
        {
          name: "swap-billing",
          description: "Swap billing between two Active ESXi hosts",
          options: [
            optEsxiHostId,
            {
              name: "--swap-billing-host-id",
              description:
                "The OCID of the active ESXi Host to swap billing with current host",
              args: { name: "swap-billing-host-id" },
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
          name: "update",
          description: "Updates the specified ESXi host",
          options: [
            {
              name: ["--display-name", "--name"],
              description: "A descriptive name for the ESXi host",
              args: { name: "display-name" },
            },
            {
              name: "--next-commitment",
              description:
                "The billing option to switch to after the existing billing cycle ends",
              args: {
                suggestions: ["HOUR", "MONTH", "ONE_YEAR", "THREE_YEARS"],
              },
            },
            {
              name: "--billing-donor-host-id",
              description:
                "The OCID of the deleted ESXi Host with leftover billing cycle",
              args: { name: "billing-donor-host-id" },
            },
            {
              name: "--vmware-software-version",
              description:
                "The version of VMware software that Oracle Cloud VMware Solution installed on the ESXi host",
              args: { name: "vmware-software-version" },
            },
            {
              name: "--esxi-software-version",
              description:
                "The version of ESXi software that Oracle Cloud VMware Solution installed on the ESXi host",
              args: { name: "esxi-software-version" },
            },
            optVcfByolAllocationId,
            {
              name: "--is-vsan-byol-enabled",
              description:
                "Indicates whether this host embedded VMware vSAN with BYOL Allocation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEsxiId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the ESXi hosts in the specified SDDC",
          options: [
            optSddcId2,
            optClusterId2,
            {
              name: ["--display-name", "--name"],
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            {
              name: "--is-billing-donors-only",
              description:
                "If this flag/param is set to True, we return only deleted hosts with LeftOver billingCycle",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-swap-billing-only",
              description:
                "If this flag/param is set to True, we return only active hosts",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCompartmentId2,
            optAll,
            optPageSize,
            { name: "--compute-id", args: { name: "compute-id" } },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "management-appliance",
      description:
        "Use the Oracle Cloud VMware CLI to create SDDCs and manage ESXi hosts and software",
      subcommands: [
        {
          name: "create",
          description: "Creates a management appliance",
          options: [
            {
              name: "--sddc-id",
              description:
                "The OCID of SDDC in OCI, that this appliance is going to be registered in",
              args: { name: "sddc-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A descriptive name for the management appliance",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--connections",
              description: "Array of connections for management appliance",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--public-ssh-keys",
              description:
                "One or more public SSH keys to be included in ~/.ssh/authorized_keys file for Management Appliance compute",
              args: { name: "public-ssh-keys" },
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
          description: "Deletes management appliance specified",
          options: [
            optManagementApplianceId,
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
          description: "Get the specified management appliance information",
          options: [optManagementApplianceId, optFromJson],
        },
        {
          name: "list",
          description: "Lists management appliances in compartment specified",
          options: [
            optCompartmentId,
            {
              name: "--management-appliance-id",
              description: "The OCID of the management appliance",
              args: { name: "management-appliance-id" },
            },
            optSddcId2,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the management appliance",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
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
        {
          name: "update",
          description: "Updates management appliance specified",
          options: [
            optManagementApplianceId,
            {
              name: "--display-name",
              description: "A descriptive name for the management appliance",
              args: { name: "display-name" },
            },
            { name: "--configuration", args: { name: "json" } },
            {
              name: "--connections",
              description: "Array of connections for management appliance",
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
      ],
    },
    {
      name: "sddc",
      description:
        "An Oracle Cloud VMware Solution software-defined data center",
      subcommands: [
        {
          name: "cancel-downgrade-hcx",
          description:
            "Cancel the pending SDDC downgrade from HCX Enterprise to HCX Advanced",
          options: [
            optSddcId,
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
            "Moves an SDDC into a different compartment within the same tenancy",
          options: [
            optSddcId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the SDDC to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an Oracle Cloud VMware Solution software-defined data center (SDDC)",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to contain the SDDC",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--hcx-mode",
              description: "HCX configuration of the SDDC",
              args: { suggestions: ["DISABLED", "ADVANCED", "ENTERPRISE"] },
              isRequired: true,
            },
            {
              name: "--initial-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--ssh-authorized-keys",
              description:
                "One or more public SSH keys to be included in the ~/.ssh/authorized_keys file for the default user on each",
              args: { name: "ssh-authorized-keys" },
              isRequired: true,
            },
            {
              name: ["--display-name", "--name"],
              description: "A descriptive name for the SDDC",
              args: { name: "display-name" },
            },
            {
              name: "--esxi-software-version",
              description:
                "The ESXi software bundle to install on the ESXi hosts in the SDDC",
              args: { name: "esxi-software-version" },
            },
            {
              name: "--is-single-host-sddc",
              description:
                "Indicates whether this SDDC is designated for only single ESXi host",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--sddc-byol-allocation-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--byol-allocation-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--vmware-version",
              description:
                "The VMware software bundle to install on the ESXi hosts in the SDDC",
              args: { name: "vmware-version" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified SDDC, along with the other resources that were created with the SDDC",
          options: [
            optSddcId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "downgrade-hcx",
          description:
            "Downgrade the specified SDDC from HCX Enterprise to HCX Advanced",
          options: [
            {
              name: "--reserving-hcx-on-premise-license-keys",
              description:
                "The HCX on-premise license keys to be reserved when downgrading from HCX Enterprise to HCX Advanced",
              args: { name: "json" },
              isRequired: true,
            },
            optSddcId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-vmware-binary-download-info",
          description: "Generate the VMware binary download information",
          options: [
            optSddcId,
            {
              name: "--vmware-binary-file-name",
              description: "The name of the VMware binary file",
              args: { name: "vmware-binary-file-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified SDDC's information",
          options: [optSddcId, optFromJson],
        },
        {
          name: "refresh-hcx-license-status",
          description:
            "Refresh HCX on-premise licenses status of the specified SDDC",
          options: [
            optSddcId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "retrieve-password",
          description: "Retrieve the SDDC password",
          options: [
            optSddcId,
            {
              name: "--type",
              description: "The SDDC password type",
              args: { suggestions: ["VCENTER", "NSX", "HCX"] },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "retrieve-sddc-operation-status",
          description:
            "Retrieves status of the operation performed on the SDDC",
          options: [
            optSddcId,
            {
              name: "--operation-name",
              description: "The name of operation",
              args: { name: "operation-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "retrieve-vmware-binaries",
          description:
            "Retrieve the list of available VMware binaries for the SDDC",
          options: [optSddcId, optLimit, optPage, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified SDDC",
          options: [
            optSddcId,
            {
              name: ["--display-name", "--name"],
              description: "The OCID of the SDDC",
              args: { name: "display-name" },
            },
            {
              name: "--esxi-software-version",
              description:
                "The version of bundled ESXi software that the Oracle Cloud VMware Solution will install on any new ESXi hosts",
              args: { name: "esxi-software-version" },
            },
            {
              name: "--ssh-authorized-keys",
              description:
                "One or more public SSH keys to be included in the ~/.ssh/authorized_keys file for the default user on each",
              args: { name: "ssh-authorized-keys" },
            },
            { name: "--sddc-byol-allocation-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--byol-allocation-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--vmware-version",
              description:
                "The VMware software bundle to install on the ESXi hosts in the SDDC",
              args: { name: "vmware-version" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "upgrade-hcx",
          description:
            "Upgrade the specified SDDC from HCX Advanced to HCX Enterprise",
          options: [
            optSddcId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "vmware-versions",
          description:
            "Lists the versions of bundled VMware software supported by the Oracle Cloud VMware Solution",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--host-shape-name",
              description:
                "A filter to return only resources that match or support the given ESXi host shape",
              args: { name: "host-shape-name" },
            },
            {
              name: "--version-to-upgrade",
              description:
                "A filter to return only VMware software versions that the given VMware software version can be upgraded to",
              args: { name: "version-to-upgrade" },
            },
            optAll,
            optPageSize,
            {
              name: "--version-name",
              description:
                "A filter to return only resources that match the given VMware software version exactly",
              args: { name: "version-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the SDDCs in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--compute-availability-domain",
              description:
                "The name of the availability domain that the Compute instances are running in",
              args: { name: "compute-availability-domain" },
            },
            {
              name: ["--display-name", "--name"],
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
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
          description: "Gets the specified work request's information",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
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
      name: "work-request-log",
      description:
        "A log message from executing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the logs for the specified work request",
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
      name: "work-request-error",
      description:
        "An error encountered while executing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the errors for the specified work request",
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
};

export default completionSpec;
