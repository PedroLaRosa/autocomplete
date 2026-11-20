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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["PROVISIONING", "AVAILABLE", "TERMINATING", "TERMINATED"],
  },
  isRepeatable: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"] },
  isRepeatable: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
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
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optIpscId: Fig.Option = {
  name: "--ipsc-id",
  description: "The OCID of the IPSec connection",
  args: { name: "ipsc-id" },
  isRequired: true,
};
const optVcnId: Fig.Option = {
  name: "--vcn-id",
  description: "The OCID of the VCN",
  args: { name: "vcn-id" },
};
const optDrgId: Fig.Option = {
  name: "--drg-id",
  description: "The OCID of the DRG",
  args: { name: "drg-id" },
  isRequired: true,
};
const optSubnetId: Fig.Option = {
  name: "--subnet-id",
  description: "Specify the OCID of the subnet",
  args: { name: "subnet-id" },
  isRequired: true,
};
const optVcnId2: Fig.Option = {
  name: "--vcn-id",
  description: "Specify the OCID of the VCN",
  args: { name: "vcn-id" },
  isRequired: true,
};
const optByoipRangeId: Fig.Option = {
  name: "--byoip-range-id",
  description:
    "The OCID of the ByoipRange resource containing the BYOIP CIDR block",
  args: { name: "byoip-range-id" },
  isRequired: true,
};
const optTunnelId: Fig.Option = {
  name: "--tunnel-id",
  description: "The OCID of the tunnel",
  args: { name: "tunnel-id" },
  isRequired: true,
};
const optNsgId: Fig.Option = {
  name: "--nsg-id",
  description: "The OCID of the network security group",
  args: { name: "nsg-id" },
  isRequired: true,
};
const optVirtualCircuitId: Fig.Option = {
  name: "--virtual-circuit-id",
  description: "The OCID of the virtual circuit",
  args: { name: "virtual-circuit-id" },
  isRequired: true,
};
const optWaitForState3: Fig.Option = {
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
    ],
  },
  isRepeatable: true,
};
const optDrgNatPolicyId: Fig.Option = {
  name: "--drg-nat-policy-id",
  description: "The OCID of the DRG NAT policy",
  args: { name: "drg-nat-policy-id" },
  isRequired: true,
};
const optDrgRouteTableId: Fig.Option = {
  name: "--drg-route-table-id",
  description: "The OCID of the DRG route table",
  args: { name: "drg-route-table-id" },
  isRequired: true,
};
const optCrossConnectId: Fig.Option = {
  name: "--cross-connect-id",
  description: "The OCID of the cross-connect",
  args: { name: "cross-connect-id" },
  isRequired: true,
};
const optRouteDistributionId: Fig.Option = {
  name: "--route-distribution-id",
  description: "The OCID of the Route Distribution required",
  args: { name: "route-distribution-id" },
  isRequired: true,
};
const optRouteTableId: Fig.Option = {
  name: "--route-table-id",
  description: "The OCID of the route table the IP address or VNIC will use",
  args: { name: "route-table-id" },
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["INACTIVE", "UPDATING", "ACTIVE", "DELETING", "DELETED"],
  },
  isRepeatable: true,
};
const optLifetime: Fig.Option = {
  name: "--lifetime",
  description: "Lifetime of the IP address",
  args: { suggestions: ["EPHEMERAL", "RESERVED"] },
};
const optPublicIpPoolId: Fig.Option = {
  name: "--public-ip-pool-id",
  description: "The OCID of the public IP pool",
  args: { name: "public-ip-pool-id" },
  isRequired: true,
};
const optServiceGatewayId: Fig.Option = {
  name: "--service-gateway-id",
  description: "The service gateway's OCID",
  args: { name: "service-gateway-id" },
  isRequired: true,
};
const optByoasnId: Fig.Option = {
  name: "--byoasn-id",
  description: "The OCID of the Byoasn resource",
  args: { name: "byoasn-id" },
  isRequired: true,
};
const optCpeId: Fig.Option = {
  name: "--cpe-id",
  description: "The OCID of the CPE",
  args: { name: "cpe-id" },
  isRequired: true,
};
const optDrgAttachmentId: Fig.Option = {
  name: "--drg-attachment-id",
  description: "The OCID of the DRG attachment",
  args: { name: "drg-attachment-id" },
  isRequired: true,
};
const optLocalPeeringGatewayId: Fig.Option = {
  name: "--local-peering-gateway-id",
  description: "The OCID of the local peering gateway",
  args: { name: "local-peering-gateway-id" },
  isRequired: true,
};
const optRemotePeeringConnectionId: Fig.Option = {
  name: "--remote-peering-connection-id",
  description: "The OCID of the remote peering connection (RPC)",
  args: { name: "remote-peering-connection-id" },
  isRequired: true,
};
const optSecurityAttributes: Fig.Option = {
  name: "--security-attributes",
  description:
    "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
  args: { name: "json" },
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ATTACHING", "ATTACHED", "DETACHING", "DETACHED"] },
  isRepeatable: true,
};
const optWaitForState6: Fig.Option = {
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
    ],
  },
  isRepeatable: true,
};
const optCaptureFilterId: Fig.Option = {
  name: "--capture-filter-id",
  description: "The OCID of the capture filter",
  args: { name: "capture-filter-id" },
  isRequired: true,
};
const optCrossConnectGroupId: Fig.Option = {
  name: "--cross-connect-group-id",
  description: "The OCID of the cross-connect group",
  args: { name: "cross-connect-group-id" },
  isRequired: true,
};
const optDhcpId: Fig.Option = {
  name: "--dhcp-id",
  description: "The OCID for the set of DHCP options",
  args: { name: "dhcp-id" },
  isRequired: true,
};
const optIgId: Fig.Option = {
  name: "--ig-id",
  description: "The OCID of the internet gateway",
  args: { name: "ig-id" },
  isRequired: true,
};
const optInterfaceDownTimerValueInMilliseconds: Fig.Option = {
  name: "--interface-down-timer-value-in-milliseconds",
  description:
    "The duration of the interface down timer in milliseconds between 0 and 3000 in multiples of 500",
  args: { name: "integer" },
};
const optIpv6Id: Fig.Option = {
  name: "--ipv6-id",
  description: "The OCID of the IPv6",
  args: { name: "ipv6-id" },
  isRequired: true,
};
const optIsInterfaceHoldTimerEnabled: Fig.Option = {
  name: "--is-interface-hold-timer-enabled",
  description: "The flag to enable or disable the down timer for the interface",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to only return resources that match the given lifecycle state",
  args: {
    suggestions: ["PROVISIONING", "AVAILABLE", "TERMINATING", "TERMINATED"],
  },
};
const optMacsecProperties: Fig.Option = {
  name: "--macsec-properties",
  args: { name: "json" },
};
const optNatGatewayId: Fig.Option = {
  name: "--nat-gateway-id",
  description: "The NAT gateway's OCID",
  args: { name: "nat-gateway-id" },
  isRequired: true,
};
const optPrivateIpId: Fig.Option = {
  name: "--private-ip-id",
  description: "The OCID of the private IP or IPv6",
  args: { name: "private-ip-id" },
  isRequired: true,
};
const optProviderServiceId: Fig.Option = {
  name: "--provider-service-id",
  description: "The OCID of the provider service",
  args: { name: "provider-service-id" },
  isRequired: true,
};
const optRtId: Fig.Option = {
  name: "--rt-id",
  description: "The OCID of the route table",
  args: { name: "rt-id" },
  isRequired: true,
};
const optSecurityListId: Fig.Option = {
  name: "--security-list-id",
  description: "The OCID of the security list",
  args: { name: "security-list-id" },
  isRequired: true,
};
const optVlanId: Fig.Option = {
  name: "--vlan-id",
  description: "The OCID of the VLAN",
  args: { name: "vlan-id" },
  isRequired: true,
};
const optVlanId2: Fig.Option = {
  name: "--vlan-id",
  description: "Use this attribute only with the Oracle Cloud VMware Solution",
  args: { name: "vlan-id" },
};
const optVtapId: Fig.Option = {
  name: "--vtap-id",
  description: "The OCID of the VTAP",
  args: { name: "vtap-id" },
  isRequired: true,
};
const optAccessLevel: Fig.Option = {
  name: "--access-level",
  description: "Valid values are ANY and ACCESSIBLE",
  args: { suggestions: ["ANY", "ACCESSIBLE"] },
};
const optCacheControl: Fig.Option = {
  name: "--cache-control",
  description:
    "The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses",
  args: { name: "cache-control" },
};
const optDrgId2: Fig.Option = {
  name: "--drg-id",
  description: "The OCID of the DRG",
  args: { name: "drg-id" },
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optHostname: Fig.Option = {
  name: "--hostname",
  description: "The hostname associated with the IPv6 address",
  args: { name: "hostname" },
};
const optHostnameLabel: Fig.Option = {
  name: "--hostname-label",
  description: "The hostname for the private IP",
  args: { name: "hostname-label" },
};
const optIfNoneMatch: Fig.Option = {
  name: "--if-none-match",
  description: "For querying if there is a cached value on the server",
  args: { name: "if-none-match" },
};
const optLifecycleState2: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to only return resources that match the given lifecycle state",
  args: {
    suggestions: [
      "PROVISIONING",
      "AVAILABLE",
      "TERMINATING",
      "TERMINATED",
      "UPDATING",
    ],
  },
};
const optPublicIpId: Fig.Option = {
  name: "--public-ip-id",
  description: "The OCID of the public IP",
  args: { name: "public-ip-id" },
  isRequired: true,
};
const optQueryCompartmentSubtree: Fig.Option = {
  name: "--query-compartment-subtree",
  description:
    "When set to true, the hierarchy of compartments is traversed and the specified compartment and its",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optWaitForState7: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["AVAILABLE", "PROVISIONING", "TERMINATING", "TERMINATED"],
  },
  isRepeatable: true,
};
const optWaitForState8: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PENDING_CUSTOMER",
      "PROVISIONING",
      "PROVISIONED",
      "INACTIVE",
      "TERMINATING",
      "TERMINATED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState9: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PENDING_PROVIDER",
      "VERIFYING",
      "PROVISIONING",
      "PROVISIONED",
      "FAILED",
      "INACTIVE",
      "TERMINATING",
      "TERMINATED",
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
      "ASSIGNING",
      "ASSIGNED",
      "UNASSIGNING",
      "UNASSIGNED",
      "TERMINATING",
      "TERMINATED",
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
      "PROVISIONED",
      "INACTIVE",
      "TERMINATING",
      "TERMINATED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState12: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["UPDATING", "ACTIVE", "DELETED", "FAILED", "CREATING"],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "network",
  description: "Networking Service",
  subcommands: [
    {
      name: "subnet",
      description: "A logical subdivision of a VCN",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a subnet into a different compartment within the same tenancy",
          options: [
            optSubnetId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the subnet to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new subnet in the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to contain the subnet",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN to contain the subnet",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "Controls whether the subnet is regional or specific to an availability domain",
              args: { name: "availability-domain" },
            },
            {
              name: "--cidr-block",
              description: "The CIDR IP address range of the subnet",
              args: { name: "cidr-block" },
            },
            {
              name: "--ipv4-cidr-blocks",
              description:
                "The list of all IPv4 CIDR blocks for the subnet that meets the following criteria",
              args: { name: "json" },
            },
            optDefinedTags,
            {
              name: "--dhcp-options-id",
              description:
                "The OCID of the set of DHCP options the subnet will use",
              args: { name: "dhcp-options-id" },
            },
            optDisplayName,
            {
              name: "--dns-label",
              description:
                "A DNS label for the subnet, used in conjunction with the VNIC's hostname and VCN's DNS label to form a fully",
              args: { name: "dns-label" },
            },
            optFreeformTags,
            {
              name: "--ipv6-cidr-block",
              description: "Use this to enable IPv6 addressing for this subnet",
              args: { name: "ipv6-cidr-block" },
            },
            {
              name: "--ipv6-cidr-blocks",
              description:
                "The list of all IPv6 prefixes (Oracle allocated IPv6 GUA, ULA or private IPv6 prefixes",
              args: { name: "json" },
            },
            {
              name: "--prohibit-internet-ingress",
              description:
                "Whether to disallow ingress internet traffic to VNICs within this subnet",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--prohibit-public-ip-on-vnic",
              description:
                "Whether VNICs within this subnet can have public IP addresses",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--route-table-id",
              description: "The OCID of the route table the subnet will use",
              args: { name: "route-table-id" },
            },
            {
              name: "--security-list-ids",
              description:
                "The OCIDs of the security list or lists the subnet will use",
              args: { name: "json" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified subnet, but only if there are no instances in the subnet",
          options: [
            optSubnetId,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified subnet's information",
          options: [optSubnetId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the subnets in the specified VCN and the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optVcnId,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "modify-ipv4-subnet-cidr",
          description: "Updates the specified Ipv4 CIDR block of a Subnet",
          options: [
            optSubnetId,
            {
              name: "--ipv4-cidr-block",
              description: "The Ipv4 CIDR IP address to update",
              args: { name: "ipv4-cidr-block" },
              isRequired: true,
            },
            {
              name: "--updated-ipv4-cidr-block",
              description: "The new Ipv4 CIDR IP address",
              args: { name: "updated-ipv4-cidr-block" },
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
          name: "patch",
          description:
            "Updates a Subnet by evaluating a sequence of patch instructions (JSON List Patch)",
          options: [
            optSubnetId,
            {
              name: "--patch-subnet-instructions",
              description: "List of patch instructions for Subnet",
              args: { name: "json" },
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
          name: "update",
          description: "Updates the specified subnet",
          options: [
            optSubnetId,
            optDefinedTags,
            {
              name: "--dhcp-options-id",
              description:
                "The OCID of the set of DHCP options the subnet will use",
              args: { name: "dhcp-options-id" },
            },
            optDisplayName,
            optFreeformTags,
            {
              name: "--route-table-id",
              description: "The OCID of the route table the subnet will use",
              args: { name: "route-table-id" },
            },
            {
              name: "--security-list-ids",
              description:
                "The OCIDs of the security list or lists the subnet will use",
              args: { name: "json" },
            },
            {
              name: "--cidr-block",
              description: "The CIDR block of the subnet",
              args: { name: "cidr-block" },
            },
            {
              name: "--ipv6-cidr-block",
              description:
                "This is the IPv6 prefix for the subnet's IP address space",
              args: { name: "ipv6-cidr-block" },
            },
            {
              name: "--ipv6-cidr-blocks",
              description:
                "The list of all IPv6 prefixes (Oracle allocated IPv6 GUA, ULA or private IPv6 prefix",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-ipv6-subnet-cidr",
          description: "Add an IPv6 prefix to a subnet",
          options: [
            optSubnetId,
            {
              name: "--ipv6-cidr-block",
              description:
                "This field is not required and should only be specified when adding an IPv6 prefix to a subnet's IPv6 address",
              args: { name: "ipv6-cidr-block" },
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
          name: "remove-ipv6-subnet-cidr",
          description: "Remove an IPv6 prefix from a subnet",
          options: [
            optSubnetId,
            {
              name: "--ipv6-cidr-block",
              description:
                "This field is not required and should only be specified when removing an IPv6 prefix from a subnet's IPv6",
              args: { name: "ipv6-cidr-block" },
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
          name: "add-ipv4-subnet-cidr",
          description: "Add an IPv4 prefix to a subnet",
          options: [
            optSubnetId,
            {
              name: "--ipv4-cidr-block",
              description: "The CIDR IP address range of the subnet",
              args: { name: "ipv4-cidr-block" },
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
          name: "remove-ipv4-subnet-cidr",
          description: "Remove an IPv4 prefix from a subnet",
          options: [
            optSubnetId,
            {
              name: "--ipv4-cidr-block",
              description:
                "This field should only be specified when removing an IPv4 prefix from a subnet's IPv4 address space",
              args: { name: "ipv4-cidr-block" },
              isRequired: true,
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
      name: "public-ip",
      description:
        "A public IP is a conceptual term that refers to a public IP address and related properties",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a public IP into a different compartment within the same tenancy",
          options: [
            optPublicIpId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the public IP to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a public IP",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the public IP",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--lifetime",
              description:
                "Defines when the public IP is deleted and released back to the Oracle Cloud Infrastructure public IP pool",
              args: { suggestions: ["EPHEMERAL", "RESERVED"] },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--private-ip-id",
              description:
                "The OCID of the private IP to assign the public IP to",
              args: { name: "private-ip-id" },
            },
            {
              name: "--public-ip-pool-id",
              description: "The OCID of the public IP pool",
              args: { name: "public-ip-pool-id" },
            },
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Unassigns and deletes the specified public IP (either ephemeral or reserved)",
          options: [
            optPublicIpId,
            optIfMatch,
            optForce2,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified public IP object",
          options: [
            {
              name: "--public-ip-address",
              description: "A public IP address",
              args: { name: "public-ip-address" },
            },
            {
              name: "--public-ip-id",
              description: "The public IP's OCID",
              args: { name: "public-ip-id" },
            },
            {
              name: "--private-ip-id",
              description: "The private IP's OCID",
              args: { name: "private-ip-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the PublicIp objects in the specified compartment",
          options: [
            {
              name: "--scope",
              description:
                "Whether the public IP is regional or specific to a particular availability domain",
              args: { suggestions: ["REGION", "AVAILABILITY_DOMAIN"] },
              isRequired: true,
            },
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--availability-domain",
              description: "The name of the availability domain",
              args: { name: "availability-domain" },
            },
            {
              name: "--lifetime",
              description:
                "A filter to return only public IPs that match given lifetime",
              args: { suggestions: ["EPHEMERAL", "RESERVED"] },
            },
            {
              name: "--public-ip-pool-id",
              description:
                "A filter to return only resources that belong to the given public IP pool",
              args: { name: "public-ip-pool-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified public IP",
          options: [
            optPublicIpId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--private-ip-id",
              description:
                "The OCID of the private IP to assign the public IP to. * If the public IP is already assigned to a different",
              args: { name: "private-ip-id" },
            },
            optIfMatch,
            optForce,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "byoip-range",
      description: "Oracle offers the ability to Bring Your Own IP (BYOIP)",
      subcommands: [
        {
          name: "advertise",
          description:
            "Begins BGP route advertisements for the BYOIP CIDR block you imported to the Oracle Cloud",
          options: [optByoipRangeId, optFromJson],
        },
        {
          name: "change-compartment",
          description: "Moves a BYOIP CIDR block to a different compartment",
          options: [
            optByoipRangeId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the destination compartment for the BYOIP CIDR block move",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a subrange of the BYOIP CIDR block",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the BYOIP CIDR block",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--cidr-block",
              description: "The BYOIP CIDR block",
              args: { name: "cidr-block" },
            },
            {
              name: "--ipv6-cidr-block",
              description: "The BYOIPv6 prefix",
              args: { name: "ipv6-cidr-block" },
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified ByoipRange resource",
          options: [
            optByoipRangeId,
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
          description: "Gets the ByoipRange resource",
          options: [optByoipRangeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the ByoipRange resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state name exactly",
              args: { name: "lifecycle-state" },
            },
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "set-origin-asn",
          description: "Update BYOIP's origin ASN to byoasn",
          options: [
            optByoipRangeId,
            {
              name: "--byoasn-id",
              description: "The OCID of the Byoasn Resource to be associated",
              args: { name: "byoasn-id" },
              isRequired: true,
            },
            {
              name: "--as-path-prepend-length",
              description: "The as path prepend length",
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
          name: "set-origin-asn-to-oracle",
          description: "Update prefix's origin ASN to OCI",
          options: [optByoipRangeId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the tags or display name associated to the specified BYOIP CIDR block",
          options: [
            optByoipRangeId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate",
          description:
            "Submits the BYOIP CIDR block you are importing for validation",
          options: [
            optByoipRangeId,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "withdraw",
          description:
            "Withdraws BGP route advertisement for the BYOIP CIDR block",
          options: [optByoipRangeId, optFromJson],
        },
      ],
    },
    {
      name: "fast-connect-provider-service",
      description: "A service offering from a supported provider",
      subcommands: [
        {
          name: "get",
          description: "Gets the specified provider service",
          options: [optProviderServiceId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the service offerings from supported providers",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "virtual-circuit-bandwidth-shape",
          description: "An individual bandwidth level for virtual circuits",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the list of available virtual circuit bandwidth levels for a provider",
              options: [
                optProviderServiceId,
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
      name: "capture-filter",
      description:
        "A capture filter contains a set of rules governing what traffic is mirrored for a VTAP or captured for a VCN",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a capture filter to a new compartment in the same tenancy",
          options: [
            optCaptureFilterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the destination compartment for the VTAP capture filter move",
              args: { name: "compartment-id" },
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
          name: "create",
          description:
            "Creates a virtual test access point (VTAP) capture filter in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the capture filter",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--filter-type",
              description:
                "Indicates which service will use this capture filter",
              args: { suggestions: ["VTAP", "FLOWLOG"] },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--vtap-capture-filter-rules",
              description:
                "The set of rules governing what traffic a VTAP mirrors",
              args: { name: "json" },
            },
            {
              name: "--flow-log-capture-filter-rules",
              description:
                "The set of rules governing what traffic the VCN flow log collects",
              args: { name: "json" },
            },
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified VTAP capture filter",
          options: [
            optCaptureFilterId,
            optIfMatch,
            optForce2,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified VTAP capture filter",
          options: [optCaptureFilterId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the capture filters in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given capture filter lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
                ],
              },
            },
            {
              name: "--filter-type",
              description:
                "A filter to only return resources that match the given capture filterType",
              args: { suggestions: ["VTAP", "FLOWLOG"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified VTAP capture filter's display name or tags",
          options: [
            optCaptureFilterId,
            optDefinedTags,
            optDisplayName,
            {
              name: "--vtap-capture-filter-rules",
              description:
                "The set of rules governing what traffic a VTAP mirrors",
              args: { name: "json" },
            },
            {
              name: "--flow-log-capture-filter-rules",
              description:
                "The set of rules governing what traffic the VCN flow log collects",
              args: { name: "json" },
            },
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "virtual-circuit-public-prefix",
      description: "A public IP prefix and its details",
      subcommands: [
        {
          name: "bulk-add",
          description:
            "Adds one or more customer public IP prefixes to the specified public virtual circuit",
          options: [
            optVirtualCircuitId,
            {
              name: "--public-prefixes",
              description:
                "The public IP prefixes (CIDRs) to add to the public virtual circuit",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "bulk-delete",
          description:
            "Removes one or more customer public IP prefixes from the specified public virtual circuit",
          options: [
            optVirtualCircuitId,
            {
              name: "--public-prefixes",
              description:
                "The public IP prefixes (CIDRs) to remove from the public virtual circuit",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the public IP prefixes and their details for the specified public virtual circuit",
          options: [
            optVirtualCircuitId,
            {
              name: "--verification-state",
              description:
                "A filter to only return resources that match the given verification state",
              args: { suggestions: ["IN_PROGRESS", "COMPLETED", "FAILED"] },
            },
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subnet-topology",
      description: "Defines the visualization of a subnet in a VCN",
      subcommands: [
        {
          name: "get",
          description: "Gets a topology for a given subnet",
          options: [
            optCompartmentId,
            {
              name: "--subnet-id",
              description: "The OCID of the subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optAccessLevel,
            optQueryCompartmentSubtree,
            optIfNoneMatch,
            optCacheControl,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "byoasn",
      description:
        "Oracle offers the ability to Bring Your Own Autonomous System Number (BYOASN)",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a BYOASN Resource to a different compartment",
          options: [
            optByoasnId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the destination compartment for the BYOASN resource move",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a BYOASN Resource",
          options: [
            {
              name: "--asn",
              description:
                "The Autonomous System Number (ASN) you are importing to the Oracle cloud",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the BYOASN Resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Byoasn resource",
          options: [
            optByoasnId,
            optIfMatch,
            optForce2,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the Byoasn resource",
          options: [optByoasnId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Byoasn resources in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state name exactly",
              args: { name: "lifecycle-state" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by, for byoasn List operation",
              args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the tags or display name associated with the specified BYOASN Resource",
          options: [
            optByoasnId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState12,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate",
          description: "Submits the BYOASN for validation",
          options: [
            optByoasnId,
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
      name: "drg",
      description:
        "A dynamic routing gateway (DRG) is a virtual router that provides a path for private network traffic between",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a DRG into a different compartment within the same tenancy",
          options: [
            optDrgId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the DRG to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new dynamic routing gateway (DRG) in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to contain the DRG",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified DRG",
          options: [
            optDrgId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-all-drg-attachments",
          description:
            "Returns a complete list of DRG attachments that belong to a particular DRG",
          options: [
            optDrgId,
            optLimit,
            optPage,
            {
              name: "--attachment-type",
              description:
                "The type for the network resource attached to the DRG",
              args: {
                suggestions: [
                  "VCN",
                  "VIRTUAL_CIRCUIT",
                  "REMOTE_PEERING_CONNECTION",
                  "IPSEC_TUNNEL",
                  "ALL",
                ],
              },
            },
            {
              name: "--is-cross-tenancy",
              description:
                "Whether the DRG attachment lives in a different tenancy than the DRG",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified DRG's information",
          options: [optDrgId, optFromJson],
        },
        {
          name: "get-upgrade-status",
          description: "Returns the DRG upgrade status",
          options: [optDrgId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the DRGs in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified DRG's display name or tags",
          options: [
            optDrgId,
            optDefinedTags,
            { name: "--default-drg-route-tables", args: { name: "json" } },
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upgrade",
          description: "Upgrades the DRG",
          options: [
            optDrgId,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cpe",
      description:
        "An object you create when setting up a Site-to-Site VPN between your on-premises network and VCN",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a CPE object into a different compartment within the same tenancy",
          options: [
            optCpeId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the CPE object to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new virtual customer-premises equipment (CPE) object in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to contain the CPE",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--ip-address",
              description: "The public IP address of the on-premises router",
              args: { name: "ip-address" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--cpe-device-shape-id",
              description: "The OCID of the CPE device type",
              args: { name: "cpe-device-shape-id" },
            },
            {
              name: "--is-private",
              description:
                "Indicates whether this CPE is of type private or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified CPE object",
          options: [optCpeId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description: "Gets the specified CPE's information",
          options: [optCpeId, optFromJson],
        },
        {
          name: "get-cpe-device-config-content",
          description:
            "Renders a set of CPE configuration content that can help a network engineer configure the actual CPE device",
          options: [optCpeId, optFile, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the customer-premises equipment objects (CPEs) in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified CPE's display name or tags",
          options: [
            optCpeId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--cpe-device-shape-id",
              description: "The OCID of the CPE device type",
              args: { name: "cpe-device-shape-id" },
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cross-connect",
      description: "For use with Oracle Cloud Infrastructure FastConnect",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a cross-connect into a different compartment within the same tenancy",
          options: [
            optCrossConnectId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the cross-connect to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new cross-connect",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the cross-connect",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--location-name",
              description:
                "The name of the FastConnect location where this cross-connect will be installed",
              args: { name: "location-name" },
              isRequired: true,
            },
            {
              name: "--port-speed-shape-name",
              description: "The port speed for this cross-connect",
              args: { name: "port-speed-shape-name" },
              isRequired: true,
            },
            {
              name: "--cross-connect-group-id",
              description:
                "The OCID of the cross-connect group to put this cross-connect in",
              args: { name: "cross-connect-group-id" },
            },
            optDefinedTags,
            optDisplayName,
            {
              name: "--far-cross-connect-or-cross-connect-group-id",
              description:
                "If you already have an existing cross-connect or cross-connect group at this FastConnect location",
              args: { name: "far-cross-connect-or-cross-connect-group-id" },
            },
            optFreeformTags,
            {
              name: "--near-cross-connect-or-cross-connect-group-id",
              description:
                "If you already have an existing cross-connect or cross-connect group at this FastConnect location",
              args: { name: "near-cross-connect-or-cross-connect-group-id" },
            },
            {
              name: "--customer-reference-name",
              description:
                "A reference name or identifier for the physical fiber connection that this cross-connect uses",
              args: { name: "customer-reference-name" },
            },
            optMacsecProperties,
            optIsInterfaceHoldTimerEnabled,
            optInterfaceDownTimerValueInMilliseconds,
            {
              name: "--is-qos-enabled",
              description:
                "When true, restricts placement so cross-connects lands only on QoS-capable devices",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--oci-physical-device-name",
              description:
                "The name of the FastConnect device where this cross-connect is installed",
              args: { name: "oci-physical-device-name" },
            },
            {
              name: "--interface-name",
              description:
                "The name of the FastConnect interface where this cross-connect is installed",
              args: { name: "interface-name" },
            },
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified cross-connect",
          options: [
            optCrossConnectId,
            optIfMatch,
            optForce2,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified cross-connect's information",
          options: [optCrossConnectId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the cross-connects in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--cross-connect-group-id",
              description: "The OCID of the cross-connect group",
              args: { name: "cross-connect-group-id" },
            },
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "PENDING_CUSTOMER",
                  "PROVISIONING",
                  "PROVISIONED",
                  "INACTIVE",
                  "TERMINATING",
                  "TERMINATED",
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
          description: "Updates the specified cross-connect",
          options: [
            optCrossConnectId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--is-active",
              description: "Set to true to activate the cross-connect",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--customer-reference-name",
              description:
                "A reference name or identifier for the physical fiber connection this cross-connect uses",
              args: { name: "customer-reference-name" },
            },
            optMacsecProperties,
            optIsInterfaceHoldTimerEnabled,
            optInterfaceDownTimerValueInMilliseconds,
            optIfMatch,
            optForce,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "letter-of-authority",
      description: "The Letter of Authority for the cross-connect",
      subcommands: [
        {
          name: "get-cross-connect",
          description:
            "Gets the Letter of Authority for the specified cross-connect",
          options: [optCrossConnectId, optFromJson],
        },
        {
          name: "update-cross-connect",
          description:
            "Updates the Letter of Authority for the specified cross-connect",
          options: [
            optCrossConnectId,
            {
              name: "--should-extend",
              description:
                "A boolean flag to indicate whether to extend the expiry of the associated LOA with the provided cross-connect",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-remove-authorized-agent",
              description:
                "A boolean flag to indicate whether to remove an attached Authorized Agent to the LOA",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--authorized-agent",
              description:
                "Name of a customer authorized agent which will be appended to the LOA as the field 'Authorized Agent'",
              args: { name: "authorized-agent" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cross-connect-status",
      description: "The status of the cross-connect",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the specified cross-connect",
          options: [optCrossConnectId, optFromJson],
        },
      ],
    },
    {
      name: "vcn-topology",
      description:
        "Defines the representation of a virtual network topology for a VCN",
      subcommands: [
        {
          name: "get",
          description: "Gets a virtual network topology for a given VCN",
          options: [
            optCompartmentId,
            {
              name: "--vcn-id",
              description: "The OCID of the VCN",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optAccessLevel,
            optQueryCompartmentSubtree,
            optIfNoneMatch,
            optCacheControl,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cpe-device-shape",
      description:
        "A summary of information about a particular CPE device type",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the CPE device types that the Networking service provides CPE configuration content for (example",
          options: [optLimit, optPage, optAll, optPageSize, optFromJson],
        },
      ],
    },
    {
      name: "drg-route-rule",
      description:
        "A DRG route rule is a mapping between a destination IP address range and a DRG attachment",
      subcommands: [
        {
          name: "add",
          description:
            "Adds one or more static route rules to the specified DRG route table",
          options: [
            optDrgRouteTableId,
            {
              name: "--route-rules",
              description:
                "The collection of static rules used to insert routes into the DRG route table",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the route rules in the specified DRG route table",
          options: [
            optDrgRouteTableId,
            optLimit,
            optPage,
            {
              name: "--route-type",
              description:
                "Static routes are specified through the DRG route table API",
              args: { suggestions: ["STATIC", "DYNAMIC"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Removes one or more route rules from the specified DRG route table",
          options: [
            optDrgRouteTableId,
            {
              name: "--route-rule-ids",
              description:
                "The Oracle-assigned ID of each DRG route rule to be deleted",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more route rules in the specified DRG route table",
          options: [
            optDrgRouteTableId,
            {
              name: "--route-rules",
              description: "The DRG rute rules to update",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cpe-device-shape-detail",
      description:
        "The detailed information about a particular CPE device type",
      subcommands: [
        {
          name: "get-cpe-device-shape",
          description:
            "Gets the detailed information about the specified CPE device type",
          options: [
            {
              name: "--cpe-device-shape-id",
              description: "The OCID of the CPE device shape",
              args: { name: "cpe-device-shape-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fast-connect-provider-service-key",
      description: "A provider service key and its details",
      subcommands: [
        {
          name: "get",
          description: "Gets the specified provider service key's information",
          options: [
            optProviderServiceId,
            {
              name: "--provider-service-key-name",
              description:
                "The provider service key that the provider gives you when you set up a virtual circuit connection from",
              args: { name: "provider-service-key-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "drg-route-distribution-statement",
      description: "A single statement within a route distribution",
      subcommands: [
        {
          name: "add",
          description:
            "Adds one or more route distribution statements to the specified route distribution",
          options: [
            {
              name: "--statements",
              description:
                "The collection of route distribution statements to insert into the route distribution",
              args: { name: "json" },
              isRequired: true,
            },
            optRouteDistributionId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the statements for the specified route distribution",
          options: [
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optRouteDistributionId,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Removes one or more route distribution statements from the specified route distribution's map",
          options: [
            {
              name: "--statement-ids",
              description:
                "The Oracle-assigned ID of each route distribution to remove",
              args: { name: "json" },
            },
            optRouteDistributionId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more route distribution statements in the specified route distribution",
          options: [
            {
              name: "--statements",
              description:
                "The route distribution statements to update, and the details to be updated",
              args: { name: "json" },
              isRequired: true,
            },
            optRouteDistributionId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "drg-route-table",
      description:
        "All routing inside the DRG is driven by the contents of DRG route tables",
      subcommands: [
        {
          name: "create",
          description: "Creates a new DRG route table for the specified DRG",
          options: [
            {
              name: "--drg-id",
              description: "The OCID of the DRG the DRG route table belongs to",
              args: { name: "drg-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--is-ecmp-enabled",
              description:
                "If you want traffic to be routed using ECMP across your virtual circuits or IPSec tunnels to your on-premises",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--import-route-distribution-id",
              description:
                "The OCID of the import route distribution used to specify how incoming route advertisements through",
              args: { name: "import-route-distribution-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified DRG route table's information",
          options: [optDrgRouteTableId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the DRG route tables for the specified DRG",
          options: [
            optDrgId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter that only returns matches for the specified lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
                ],
              },
            },
            optAll,
            optPageSize,
            {
              name: "--import-route-distribution-id",
              description: "The OCID of the import Route Distribution",
              args: { name: "import-route-distribution-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified DRG route table",
          options: [
            optDrgRouteTableId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--is-ecmp-enabled",
              description:
                "If you want traffic to be routed using ECMP across your virtual circuits or IPSec tunnels to your on-prem",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--import-route-distribution-id",
              description:
                "The OCID of the import route distribution used to specify how incoming route advertisements through",
              args: { name: "import-route-distribution-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified DRG route table",
          options: [
            optDrgRouteTableId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-import-route-distribution",
          description:
            "Removes the import route distribution from the DRG route table so no routes are imported into it",
          options: [
            optDrgRouteTableId,
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
      name: "provider-remote-region-name",
      description:
        "A pair of OCI region and Provider remote region names for FastConnect MultiCloud interconnect",
      subcommands: [
        {
          name: "list-provider-remote-regions",
          description:
            "The operation lists available OCI's FastConnect MultiCloud Provider/Partner remote region names associated",
          options: [
            optProviderServiceId,
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
      name: "tunnel-security-association",
      description: "A summary of the IPSec tunnel security association details",
      subcommands: [
        {
          name: "list-ip-sec-connection",
          description:
            "Lists the tunnel security associations information for the specified IPSec tunnel ID",
          options: [
            optIpscId,
            optTunnelId,
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
      name: "internet-gateway",
      description:
        "Represents a router that connects the edge of a VCN with the Internet",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an internet gateway into a different compartment within the same tenancy",
          options: [
            optIgId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the internet gateway to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new internet gateway for the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the internet gateway",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "Whether the gateway is enabled upon creation",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description:
                "The OCID of the VCN the Internet Gateway is attached to",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--route-table-id",
              description:
                "The OCID of the route table the Internet Gateway is using",
              args: { name: "route-table-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified internet gateway",
          options: [
            optIgId,
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
          description: "Gets the specified internet gateway's information",
          options: [optIgId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the internet gateways in the specified VCN and the specified compartment",
          options: [
            optCompartmentId,
            optVcnId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified internet gateway",
          options: [
            optIgId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--is-enabled",
              description: "Whether the gateway is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--route-table-id",
              description:
                "The OCID of the route table the Internet Gateway is using",
              args: { name: "route-table-id" },
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
      name: "ip-sec-connection",
      description: "A connection between a DRG and CPE",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an IPSec connection into a different compartment within the same tenancy",
          options: [
            optIpscId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the IPSec connection to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new IPSec connection between the specified DRG and CPE",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the IPSec connection",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--cpe-id",
              description: "The OCID of the Cpe object",
              args: { name: "cpe-id" },
              isRequired: true,
            },
            optDrgId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--cpe-local-identifier",
              description: "Your identifier for your CPE device",
              args: { name: "cpe-local-identifier" },
            },
            {
              name: "--cpe-local-identifier-type",
              description: "The type of identifier for your CPE device",
              args: { suggestions: ["IP_ADDRESS", "HOSTNAME"] },
            },
            {
              name: "--static-routes",
              description: "Static routes to the CPE",
              args: { name: "json" },
            },
            {
              name: "--tunnel-configuration",
              description:
                "Information for creating the individual tunnels in the IPSec connection",
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
          description: "Deletes the specified IPSec connection",
          options: [
            optIpscId,
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
            "Gets the specified IPSec connection's basic information",
          options: [optIpscId, optFromJson],
        },
        {
          name: "get-ipsec-cpe-device-config-content",
          description:
            "Renders a set of CPE configuration content for the specified IPSec connection",
          options: [optIpscId, optFile, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the IPSec connections for the specified compartment",
          options: [
            optCompartmentId,
            optDrgId2,
            {
              name: "--cpe-id",
              description: "The OCID of the CPE",
              args: { name: "cpe-id" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified IPSec connection",
          options: [
            optIpscId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--cpe-local-identifier",
              description: "Your identifier for your CPE device",
              args: { name: "cpe-local-identifier" },
            },
            {
              name: "--cpe-local-identifier-type",
              description: "The type of identifier for your CPE device",
              args: { suggestions: ["IP_ADDRESS", "HOSTNAME"] },
            },
            {
              name: "--static-routes",
              description: "Static routes to the CPE",
              args: { name: "json" },
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
          name: "get-config",
          description: "Deprecated",
          deprecated: true,
          options: [optIpscId, optFromJson],
        },
        {
          name: "get-status",
          description: "Deprecated",
          deprecated: true,
          options: [optIpscId, optFromJson],
        },
      ],
    },
    {
      name: "tunnel-route",
      description:
        "A summary of the routes advertised to and received from the on-premises network",
      subcommands: [
        {
          name: "list-ip-sec-connection",
          description:
            "The routes advertised to the on-premises network and the routes received from the on-premises network",
          options: [
            optIpscId,
            optTunnelId,
            optLimit,
            optPage,
            {
              name: "--advertiser",
              description: "Specifies the advertiser of the routes",
              args: { suggestions: ["CUSTOMER", "ORACLE"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-list",
      description: "A set of virtual firewall rules for your VCN",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a security list into a different compartment within the same tenancy",
          options: [
            optSecurityListId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the security list to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new security list for the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the security list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--egress-security-rules",
              description: "Rules for allowing egress IP packets",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--ingress-security-rules",
              description: "Rules for allowing ingress IP packets",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN the security list belongs to",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified security list, but only if it's not associated with a subnet",
          options: [
            optSecurityListId,
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
          description: "Gets the specified security list's information",
          options: [optSecurityListId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the security lists in the specified VCN and compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optVcnId,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified security list's display name or rules",
          options: [
            optSecurityListId,
            optDefinedTags,
            optDisplayName,
            {
              name: "--egress-security-rules",
              description: "Rules for allowing egress IP packets",
              args: { name: "json" },
            },
            optFreeformTags,
            {
              name: "--ingress-security-rules",
              description: "Rules for allowing ingress IP packets",
              args: { name: "json" },
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
      name: "drg-nat-policy",
      description:
        "Collection of DRG NAT rules that is associated to a DRG Attachment to allow Network Address Translation",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a DrgNatPolicy into a different compartment within the same tenancy",
          options: [
            optDrgNatPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the DrgNatPolicy to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new DRG NAT policy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the DRG NAT policy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
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
          description: "Deletes the specified DRG NAT policy",
          options: [
            optDrgNatPolicyId,
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
          description: "Gets the specified DRG NAT policy's information",
          options: [optDrgNatPolicyId, optFromJson],
        },
        {
          name: "list",
          description: "The list of DRG NAT policies in the compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
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
          description: "Updates the specified DRG NAT policy",
          options: [
            optDrgNatPolicyId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
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
      name: "byoip-allocated-range-summary",
      description:
        "A summary of CIDR block subranges that are currently allocated to an IP pool",
      subcommands: [
        {
          name: "list-byoip-allocated-ranges",
          description:
            "Lists the subranges of a BYOIP CIDR block currently allocated to an IP pool",
          options: [
            optByoipRangeId,
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
      name: "remote-peering-connection",
      description:
        "A remote peering connection (RPC) is an object on a DRG that lets the VCN that is attached to the DRG peer",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a remote peering connection (RPC) into a different compartment within the same tenancy",
          options: [
            optRemotePeeringConnectionId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the remote peering connection to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "connect",
          description: "Connects this RPC to another one in a different region",
          options: [
            optRemotePeeringConnectionId,
            {
              name: "--peer-id",
              description: "The OCID of the RPC you want to peer with",
              args: { name: "peer-id" },
              isRequired: true,
            },
            {
              name: "--peer-region-name",
              description:
                "The name of the region that contains the RPC you want to peer with",
              args: { name: "peer-region-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new remote peering connection (RPC) for the specified DRG",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to contain the RPC",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--drg-id",
              description: "The OCID of the DRG the RPC belongs to",
              args: { name: "drg-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the remote peering connection (RPC)",
          options: [
            optRemotePeeringConnectionId,
            optIfMatch,
            optForce2,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get the specified remote peering connection's information",
          options: [optRemotePeeringConnectionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the remote peering connections (RPCs) for the specified DRG and compartment (the RPC's compartment)",
          options: [
            optCompartmentId,
            optDrgId2,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified remote peering connection (RPC)",
          options: [
            optRemotePeeringConnectionId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "nat-gateway",
      description:
        "A NAT (Network Address Translation) gateway, which represents a router that lets instances without public IPs",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a NAT gateway into a different compartment within the same tenancy",
          options: [
            optNatGatewayId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the NAT gateway to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new NAT gateway for the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the NAT gateway",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN the gateway belongs to",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--block-traffic",
              description: "Whether the NAT gateway blocks traffic through it",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--public-ip-id",
              description:
                "The OCID of the public IP address associated with the NAT gateway",
              args: { name: "public-ip-id" },
            },
            {
              name: "--route-table-id",
              description:
                "The OCID of the route table used by the NAT gateway",
              args: { name: "route-table-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified NAT gateway",
          options: [
            optNatGatewayId,
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
          description: "Gets the specified NAT gateway's information",
          options: [optNatGatewayId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the NAT gateways in the specified compartment",
          options: [
            optCompartmentId,
            optVcnId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
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
          description: "Updates the specified NAT gateway",
          options: [
            optNatGatewayId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--block-traffic",
              description: "Whether the NAT gateway blocks traffic through it",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--route-table-id",
              description:
                "The OCID of the route table used by the NAT gateway",
              args: { name: "route-table-id" },
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
      name: "drg-attachment",
      description:
        "A DRG attachment serves as a link between a DRG and a network resource",
      subcommands: [
        {
          name: "create",
          description:
            "Attaches the specified DRG to the specified network resource",
          options: [
            optDrgId,
            optDisplayName,
            {
              name: "--drg-route-table-id",
              description:
                "The OCID of the DRG route table that is assigned to this attachment",
              args: { name: "drg-route-table-id" },
            },
            { name: "--network-details", args: { name: "json" } },
            optDefinedTags,
            optFreeformTags,
            {
              name: "--route-table-id",
              description:
                "The OCID of the route table used by the DRG attachment",
              args: { name: "route-table-id" },
            },
            optVcnId,
            {
              name: "--drg-nat-policy-id",
              description: "The OCID of the DRG attachment's DRG NAT policy",
              args: { name: "drg-nat-policy-id" },
            },
            {
              name: "--does-preserve-original-routes-with-nat",
              description:
                "By default, only translated DrgNatRule CIDRs are imported into the DrgRouteTable to prevent routing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Detaches a DRG from a network resource by deleting the corresponding DrgAttachment resource",
          options: [
            optDrgAttachmentId,
            optIfMatch,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the DrgAttachment resource",
          options: [optDrgAttachmentId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the DrgAttachment resource for the specified compartment",
          options: [
            optCompartmentId,
            optVcnId,
            optDrgId2,
            optLimit,
            optPage,
            {
              name: "--drg-nat-policy-id",
              description: "The OCID of the DrgNatPolicy",
              args: { name: "drg-nat-policy-id" },
            },
            {
              name: "--network-id",
              description:
                "The OCID of the resource (virtual circuit, VCN, IPSec tunnel",
              args: { name: "network-id" },
            },
            {
              name: "--attachment-type",
              description:
                "The type for the network resource attached to the DRG",
              args: {
                suggestions: [
                  "VCN",
                  "VIRTUAL_CIRCUIT",
                  "REMOTE_PEERING_CONNECTION",
                  "IPSEC_TUNNEL",
                  "ALL",
                ],
              },
            },
            {
              name: "--drg-route-table-id",
              description:
                "The OCID of the DRG route table assigned to the DRG attachment",
              args: { name: "drg-route-table-id" },
            },
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: ["ATTACHING", "ATTACHED", "DETACHING", "DETACHED"],
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
            "Updates the display name and routing information for the specified DrgAttachment",
          options: [
            optDrgAttachmentId,
            optDisplayName,
            {
              name: "--drg-nat-policy-id",
              description: "The OCID of the DRG attachment's DRG NAT policy",
              args: { name: "drg-nat-policy-id" },
            },
            {
              name: "--does-preserve-original-routes-with-nat",
              description:
                "By default, only translated DrgNatRule CIDRs are imported into the DrgRouteTable to prevent routing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--drg-route-table-id",
              description:
                "The OCID of the DRG route table that is assigned to this attachment",
              args: { name: "drg-route-table-id" },
            },
            { name: "--network-details", args: { name: "json" } },
            optDefinedTags,
            optFreeformTags,
            {
              name: "--export-drg-route-distribution-id",
              description:
                "The OCID of the export route distribution used to specify how routes in the assigned DRG route table",
              args: { name: "export-drg-route-distribution-id" },
            },
            {
              name: "--route-table-id",
              description:
                "This is the OCID of the route table that is used to route the traffic as it enters a VCN through this",
              args: { name: "route-table-id" },
            },
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-export-route-distribution",
          description:
            "Removes the export route distribution from the DRG attachment so no routes are advertised to it",
          options: [
            optDrgAttachmentId,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-drg-nat-policy",
          description:
            "Dissociates the DRG NAT policy from the DRG attachment so no DRG NAT rules are advertised to it",
          options: [
            optDrgAttachmentId,
            optIfMatch,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "networking-topology",
      description:
        "Defines the representation of a virtual network topology for a region",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a virtual networking topology for the current region",
          options: [
            optCompartmentId,
            optAccessLevel,
            optQueryCompartmentSubtree,
            optIfNoneMatch,
            optCacheControl,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "allowed-ike-ip-sec-parameters",
      description:
        "Lists the current allowed and default IPSec tunnel parameters",
      subcommands: [
        {
          name: "get",
          description: "The parameters allowed for IKE IPSec tunnels",
          options: [optFromJson],
        },
      ],
    },
    {
      name: "vcn-dns-resolver-association",
      description:
        "The information about the VCN and the DNS resolver in the association",
      subcommands: [
        {
          name: "get",
          description: "Get the associated DNS resolver information with a vcn",
          options: [optVcnId2, optFromJson],
        },
      ],
    },
    {
      name: "cross-connect-location",
      description: "An individual FastConnect location",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the available FastConnect locations for cross-connect installation",
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
      name: "drg-nat-rule",
      description:
        "A DRG NAT rule specifies the mapping between an original source/destination IP and a translated",
      subcommands: [
        {
          name: "add",
          description: "Adds DRG NAT rules to the specified DRG NAT policy",
          options: [
            optDrgNatPolicyId,
            {
              name: "--rules",
              description:
                "The collection of DRG NAT rules to insert into the DRG NAT policy",
              args: { name: "json" },
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
          name: "list",
          description: "Lists the rules for the specified DRG NAT policy",
          options: [
            optDrgNatPolicyId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["PRIORITY"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Request with DRG NAT rules to remove from the DRG NAT policy",
          options: [
            optDrgNatPolicyId,
            {
              name: "--rule-ids",
              description:
                "The Oracle-assigned ID of each DRG NAT rule to remove",
              args: { name: "json" },
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
          name: "update",
          description: "Updates DRG NAT rules in the specified DRG NAT policy",
          options: [
            optDrgNatPolicyId,
            {
              name: "--rules",
              description:
                "The DRG NAT rules to update, and the details to be updated",
              args: { name: "json" },
              isRequired: true,
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
      name: "private-ip",
      description:
        "A private IP is a conceptual term that refers to an IPv4 private IP address and related properties",
      subcommands: [
        {
          name: "bulk-create",
          description: "Create secondary private IPv4 addresses",
          options: [
            {
              name: "--bulk-create-private-ip-item",
              description: "A secondary IPv4 address to assign",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to assign the private IPs to",
              args: { name: "vnic-id" },
            },
            optVlanId2,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet from which the private IPs is to be drawn",
              args: { name: "subnet-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-delete",
          description: "Unassign and delete secondary private IPv4s for a VNIC",
          options: [
            {
              name: "--bulk-delete-private-ip-item",
              description: "A secondary IPv4 address to delete",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description:
                "The OCID of the VNIC of which private IPs should be deleted",
              args: { name: "vnic-id" },
            },
            optVlanId2,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet from which the private IPs is to be deleted",
              args: { name: "subnet-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-detach",
          description:
            "Unassign the specified private IP addresses from the Virtual Network Interface Card (VNIC)",
          options: [
            {
              name: "--bulk-detach-private-ip-item",
              description: "Secondary IPv4 addresses to detach",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description:
                "The OCID of the VNIC of which private IPs should be detached",
              args: { name: "vnic-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-update",
          description: "Update existing secondary private IPv4s for a VNIC",
          options: [
            {
              name: "--bulk-update-private-ip-item",
              description: "A secondary IPv4 address to update",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description:
                "The OCID of the VNIC to reassign the private IPs to",
              args: { name: "vnic-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a private IP",
          options: [
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optHostnameLabel,
            {
              name: "--ip-address",
              description: "A private IP address of your choice",
              args: { name: "ip-address" },
            },
            {
              name: "--cidr-prefix-length",
              description:
                "An optional field that when combined with the ipAddress field, will be used to allocate secondary IPv4 CIDRs",
              args: { name: "integer" },
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to assign the private IP to",
              args: { name: "vnic-id" },
            },
            optVlanId2,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet from which the private IP is to be drawn",
              args: { name: "subnet-id" },
            },
            {
              name: "--ipv4-subnet-cidr-at-creation",
              description: "Any one of the IPv4 CIDRs allocated to the subnet",
              args: { name: "ipv4-subnet-cidr-at-creation" },
            },
            optLifetime,
            optRouteTableId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Unassigns and deletes the specified private IP",
          options: [optPrivateIpId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description: "Gets the specified private IP",
          options: [optPrivateIpId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the PrivateIp objects based on one of these filters",
          options: [
            optLimit,
            optPage,
            {
              name: "--ip-address",
              description: "An IP address",
              args: { name: "ip-address" },
            },
            {
              name: "--subnet-id",
              description: "The OCID of the subnet",
              args: { name: "subnet-id" },
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC",
              args: { name: "vnic-id" },
            },
            {
              name: "--ip-state",
              description: "State of the IP address",
              args: { name: "ip-state" },
            },
            {
              name: "--lifetime",
              description: "Lifetime of the IP address",
              args: { name: "lifetime" },
            },
            {
              name: "--vlan-id",
              description: "The OCID of the VLAN",
              args: { name: "vlan-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "private-ip-vnic-detach",
          description:
            "Unassign the specified PrivateIP address from Virtual Network Interface Card (VNIC)",
          options: [optPrivateIpId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified private IP",
          options: [
            optPrivateIpId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optHostnameLabel,
            optLifetime,
            optRouteTableId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "virtual-circuit",
      description: "For use with Oracle Cloud Infrastructure FastConnect",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a virtual circuit into a different compartment within the same tenancy",
          options: [
            optVirtualCircuitId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the virtual circuit to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new virtual circuit to use with Oracle Cloud Infrastructure FastConnect",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the virtual circuit",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The type of IP addresses used in this virtual circuit",
              args: { suggestions: ["PUBLIC", "PRIVATE"] },
              isRequired: true,
            },
            {
              name: "--bandwidth-shape-name",
              description: "The provisioned data rate of the connection",
              args: { name: "bandwidth-shape-name" },
            },
            {
              name: "--cross-connect-mappings",
              description:
                "Create a CrossConnectMapping for each cross-connect or cross-connect group this virtual circuit will run on",
              args: { name: "json" },
            },
            {
              name: "--routing-policy",
              description:
                "The routing policy sets how routing information about the Oracle cloud is shared over a public virtual",
              args: {
                suggestions: [
                  "ORACLE_SERVICE_NETWORK",
                  "REGIONAL",
                  "MARKET_LEVEL",
                  "GLOBAL",
                ],
              },
            },
            {
              name: "--bgp-admin-state",
              description:
                "Set to ENABLED (the default) to activate the BGP session of the virtual circuit",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--is-bfd-enabled",
              description:
                "Set to true to enable BFD for IPv4 BGP peering, or set to false to disable BFD",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-transport-mode",
              description:
                "Set to true for the virtual circuit to carry only encrypted traffic",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--customer-bgp-asn",
              description: "Deprecated",
              args: { name: "integer" },
              deprecated: true,
            },
            {
              name: "--customer-asn",
              description: "Your BGP ASN (either public or private)",
              args: { name: "integer" },
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--gateway-id",
              description: "For private virtual circuits only",
              args: { name: "gateway-id" },
            },
            {
              name: "--provider-name",
              description: "Deprecated",
              args: { name: "provider-name" },
              deprecated: true,
            },
            {
              name: "--provider-service-id",
              description:
                "The OCID of the service offered by the provider (if you're connecting via a provider)",
              args: { name: "provider-service-id" },
            },
            {
              name: "--provider-service-key-name",
              description:
                "The service key name or activation key offered by the provider (if the customer is connecting via a provider)",
              args: { name: "provider-service-key-name" },
            },
            {
              name: "--provider-service-name",
              description: "Deprecated",
              args: { name: "provider-service-name" },
              deprecated: true,
            },
            {
              name: "--public-prefixes",
              description: "For a public virtual circuit",
              args: { name: "json" },
            },
            {
              name: "--ip-mtu",
              description:
                "The layer 3 IP MTU to use with this virtual circuit",
              args: { suggestions: ["MTU_1500", "MTU_9000"] },
            },
            {
              name: "--provider-remote-region",
              description:
                "The OCI's FastConnect MultiCloud Provider/Partner remote region name associated with the OCI region",
              args: { name: "provider-remote-region" },
            },
            {
              name: "--remote-account-id",
              description:
                "Customer's account on Provider/Partner cloud (AWS, GCP or any other)",
              args: { name: "remote-account-id" },
            },
            {
              name: "--traffic-mode",
              description:
                "The traffic mode to be set with this Virtual Circuit",
              args: { suggestions: ["NORMAL", "DRAIN"] },
            },
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified virtual circuit",
          options: [
            optVirtualCircuitId,
            optIfMatch,
            optForce2,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified virtual circuit's information",
          options: [optVirtualCircuitId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the virtual circuits in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "PENDING_PROVIDER",
                  "VERIFYING",
                  "PROVISIONING",
                  "PROVISIONED",
                  "FAILED",
                  "INACTIVE",
                  "TERMINATING",
                  "TERMINATED",
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
          description: "Updates the specified virtual circuit",
          options: [
            optVirtualCircuitId,
            {
              name: "--bandwidth-shape-name",
              description: "The provisioned data rate of the connection",
              args: { name: "bandwidth-shape-name" },
            },
            {
              name: "--cross-connect-mappings",
              description:
                "An array of mappings, each containing properties for a cross-connect or cross-connect group associated",
              args: { name: "json" },
            },
            {
              name: "--routing-policy",
              description:
                "The routing policy sets how routing information about the Oracle cloud is shared over a public virtual",
              args: {
                suggestions: [
                  "ORACLE_SERVICE_NETWORK",
                  "REGIONAL",
                  "MARKET_LEVEL",
                  "GLOBAL",
                ],
              },
            },
            {
              name: "--bgp-admin-state",
              description:
                "Set to ENABLED (the default) to activate the BGP session of the virtual circuit",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--is-bfd-enabled",
              description:
                "Set to true to enable BFD for IPv4 BGP peering, or set to false to disable BFD",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-transport-mode",
              description:
                "Set to true for the virtual circuit to carry only encrypted traffic",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--customer-bgp-asn",
              description: "Deprecated",
              args: { name: "integer" },
              deprecated: true,
            },
            {
              name: "--customer-asn",
              description:
                "The BGP ASN of the network at the other end of the BGP session from Oracle",
              args: { name: "integer" },
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--traffic-mode",
              description:
                "The traffic mode to be set with this Virtual Circuit",
              args: { suggestions: ["NORMAL", "DRAIN"] },
            },
            {
              name: "--gateway-id",
              description:
                "The OCID of the dynamic routing gateway (DRG) that this private virtual circuit uses",
              args: { name: "gateway-id" },
            },
            {
              name: "--provider-state",
              description:
                "The provider's state in relation to this virtual circuit",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            {
              name: "--provider-service-key-name",
              description:
                "The service key name offered by the provider (if the customer is connecting via a provider)",
              args: { name: "provider-service-key-name" },
            },
            {
              name: "--reference-comment",
              description:
                "Provider-supplied reference information about this virtual circuit",
              args: { name: "reference-comment" },
            },
            {
              name: "--ip-mtu",
              description: "The layer 3 IP MTU to use on this virtual circuit",
              args: { suggestions: ["MTU_1500", "MTU_9000"] },
            },
            optIfMatch,
            optForce,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "local-peering-gateway",
      description:
        "A local peering gateway (LPG) is an object on a VCN that lets that VCN peer with another VCN in the same",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a local peering gateway into a different compartment within the same tenancy",
          options: [
            optLocalPeeringGatewayId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the local peering gateway to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "connect",
          description:
            "Connects this local peering gateway (LPG) to another one in the same region",
          options: [
            optLocalPeeringGatewayId,
            {
              name: "--peer-id",
              description: "The OCID of the LPG you want to peer with",
              args: { name: "peer-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new local peering gateway (LPG) for the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the local peering gateway (LPG)",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN the LPG belongs to",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optSecurityAttributes,
            {
              name: "--route-table-id",
              description: "The OCID of the route table the LPG will use",
              args: { name: "route-table-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified local peering gateway (LPG)",
          options: [
            optLocalPeeringGatewayId,
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
          description: "Gets the specified local peering gateway's information",
          options: [optLocalPeeringGatewayId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the local peering gateways (LPGs) for the specified VCN and specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optVcnId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified local peering gateway (LPG)",
          options: [
            optLocalPeeringGatewayId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optSecurityAttributes,
            {
              name: "--route-table-id",
              description: "The OCID of the route table the LPG will use",
              args: { name: "route-table-id" },
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
      name: "cross-connect-mapping-details-collection",
      description: "An array of CrossConnectMappingDetails",
      subcommands: [
        {
          name: "list-cross-connect-mappings",
          description:
            "Lists the Cross Connect mapping Details for the specified virtual circuit",
          options: [optVirtualCircuitId, optAll, optFromJson],
        },
      ],
    },
    {
      name: "ip-sec-connection-tunnel-error-details",
      description: "Details for an error on an IPSec tunnel",
      subcommands: [
        {
          name: "get-ip-sec-connection-tunnel-error",
          description:
            "Gets the identified error for the specified IPSec tunnel ID",
          options: [optIpscId, optTunnelId, optFromJson],
        },
      ],
    },
    {
      name: "tunnel-cpe-device-config",
      description: "The set of CPE configuration answers for the tunnel",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the set of CPE configuration answers for the tunnel",
          options: [optIpscId, optTunnelId, optFromJson],
        },
        {
          name: "get-tunnel-cpe-device-config-content",
          description:
            "Renders a set of CPE configuration content for the specified IPSec tunnel",
          options: [optIpscId, optTunnelId, optFile, optFromJson],
        },
        {
          name: "update",
          description:
            "Creates or updates the set of CPE configuration answers for the specified tunnel",
          options: [
            optIpscId,
            optTunnelId,
            {
              name: "--tunnel-cpe-device-config",
              description: "The set of configuration answers for a CPE device",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vlan",
      description:
        "A resource to be used only with the Oracle Cloud VMware Solution",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a VLAN into a different compartment within the same tenancy",
          options: [
            optVlanId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the VLAN to",
              args: { name: "compartment-id" },
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
          name: "create",
          description:
            "Creates a VLAN in the specified VCN and the specified compartment",
          options: [
            {
              name: "--cidr-block",
              description:
                "The range of IPv4 addresses that will be used for layer 3 communication with hosts outside the VLAN",
              args: { name: "cidr-block" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to contain the VLAN",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN to contain the VLAN",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "Controls whether the VLAN is regional or specific to an availability domain",
              args: { name: "availability-domain" },
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add all VNICs in the VLAN to",
              args: { name: "json" },
            },
            {
              name: "--route-table-id",
              description: "The OCID of the route table the VLAN will use",
              args: { name: "route-table-id" },
            },
            {
              name: "--vlan-tag",
              description: "The IEEE 802.1Q VLAN tag for this VLAN",
              args: { name: "integer" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified VLAN, but only if there are no VNICs in the VLAN",
          options: [
            optVlanId,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified VLAN's information",
          options: [optVlanId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the VLANs in the specified VCN and the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optVcnId,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified VLAN",
          options: [
            optVlanId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to use with this VLAN",
              args: { name: "json" },
            },
            {
              name: "--route-table-id",
              description: "The OCID of the route table the VLAN will use",
              args: { name: "route-table-id" },
            },
            {
              name: "--cidr-block",
              description: "The CIDR block of the VLAN",
              args: { name: "cidr-block" },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ipv6",
      description:
        "An IPv6 is a conceptual term that refers to an IPv6 address and related properties",
      subcommands: [
        {
          name: "bulk-create",
          description: "Create new IPv6s in bulk for a VNIC or subnet",
          options: [
            {
              name: "--bulk-create-ipv6s-item",
              description: "A secondary IPv6 address to assign",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to assign the IPv6s to",
              args: { name: "vnic-id" },
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet from which the IPv6s are to be drawn",
              args: { name: "subnet-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-delete",
          description: "Unassign and delete IPv6s for a VNIC in bulk",
          options: [
            {
              name: "--bulk-delete-ipv6s-item",
              description: "An IPv6 address to delete",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to assign the IPv6s to",
              args: { name: "vnic-id" },
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet from which the IPv6s addresses are deleted",
              args: { name: "subnet-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-detach",
          description: "Detach the specified IPv6s",
          options: [
            {
              name: "--bulk-detach-ipv6s-item",
              description: "A secondary IPv6 address to detach",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description:
                "The OCID of the VNIC from which multiple IPv6s should be detached",
              args: { name: "vnic-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-update",
          description: "Updates the specified IPv6s in bulk",
          options: [
            {
              name: "--bulk-update-ipv6s-item",
              description: "A secondary IPv6 address to update",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to move the IPv6s to",
              args: { name: "vnic-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an IPv6 for the specified VNIC",
          options: [
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--ip-address",
              description: "An IPv6 address of your choice",
              args: { name: "ip-address" },
            },
            {
              name: "--cidr-prefix-length",
              description: "Length of cidr range",
              args: { name: "integer" },
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to assign the IPv6 to",
              args: { name: "vnic-id" },
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet from which the IPv6 is to be drawn",
              args: { name: "subnet-id" },
            },
            optLifetime,
            optRouteTableId,
            {
              name: "--ipv6-subnet-cidr",
              description: "The IPv6 prefix allocated to the subnet",
              args: { name: "ipv6-subnet-cidr" },
            },
            optHostname,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Unassigns and deletes the specified IPv6",
          options: [
            optIpv6Id,
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
          description: "Gets the specified IPv6",
          options: [optIpv6Id, optFromJson],
        },
        {
          name: "ipv6-vnic-detach",
          description:
            "Unassign the specified IPv6 address from Virtual Network Interface Card (VNIC)",
          options: [
            optIpv6Id,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the IPv6 objects based on one of these filters",
          options: [
            optLimit,
            optPage,
            {
              name: "--ip-address",
              description: "An IP address",
              args: { name: "ip-address" },
            },
            {
              name: "--subnet-id",
              description: "The OCID of the subnet",
              args: { name: "subnet-id" },
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC",
              args: { name: "vnic-id" },
            },
            {
              name: "--ip-state",
              description: "State of the IP address",
              args: { name: "ip-state" },
            },
            {
              name: "--lifetime",
              description: "Lifetime of the IP address",
              args: { name: "lifetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified IPv6",
          options: [
            optIpv6Id,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to reassign the IPv6 to",
              args: { name: "vnic-id" },
            },
            optHostname,
            optRouteTableId,
            optLifetime,
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
      name: "cross-connect-port-speed-shape",
      description: "An individual port speed level for cross-connects",
      subcommands: [
        {
          name: "list",
          description: "Lists the available port speeds for cross-connects",
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
      name: "public-ip-pool",
      description:
        "A public IP pool is a set of public IP addresses represented as one or more IPv4 CIDR blocks",
      subcommands: [
        {
          name: "add",
          description: "Adds some or all of a CIDR block to a public IP pool",
          options: [
            optPublicIpPoolId,
            {
              name: "--byoip-range-id",
              description:
                "The OCID of the ByoipRange resource to which the CIDR block belongs",
              args: { name: "byoip-range-id" },
              isRequired: true,
            },
            {
              name: "--cidr-block",
              description: "The CIDR block to add to the public IP pool",
              args: { name: "cidr-block" },
              isRequired: true,
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a public IP pool to a different compartment",
          options: [
            optPublicIpPoolId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the destination compartment for the public IP pool move",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a public IP pool",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the public IP pool",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified public IP pool",
          options: [
            optPublicIpPoolId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified PublicIpPool object",
          options: [optPublicIpPoolId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the public IP pools in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName2,
            {
              name: "--byoip-range-id",
              description:
                "A filter to return only resources that match the given BYOIP CIDR block",
              args: { name: "byoip-range-id" },
            },
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Removes a CIDR block from the referenced public IP pool",
          options: [
            optPublicIpPoolId,
            {
              name: "--cidr-block",
              description: "The CIDR block to remove from the public IP pool",
              args: { name: "cidr-block" },
              isRequired: true,
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified public IP pool",
          options: [
            optPublicIpPoolId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "route-table",
      description:
        "A collection of RouteRule objects, which are used to route packets based on destination IP to a particular",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a route table into a different compartment within the same tenancy",
          options: [
            optRtId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the route table to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new route table for the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the route table",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--route-rules",
              description:
                "The collection of rules used for routing destination IPs to network devices",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN the route table belongs to",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified route table, but only if it's not associated with a subnet",
          options: [
            optRtId,
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
          description: "Gets the specified route table's information",
          options: [optRtId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the route tables in the specified VCN and specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optVcnId,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified route table's display name or route rules",
          options: [
            optRtId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--route-rules",
              description:
                "The collection of rules used for routing destination IPs to network devices",
              args: { name: "json" },
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
      name: "vtap",
      description:
        "A virtual test access point (VTAP) provides a way to mirror all traffic from a designated source to",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a VTAP to a new compartment within the same tenancy",
          options: [
            optVtapId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the destination compartment for the VTAP move",
              args: { name: "compartment-id" },
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
          name: "create",
          description:
            "Creates a virtual test access point (VTAP) in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the Vtap resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN containing the Vtap resource",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--source-id",
              description:
                "The OCID of the source point where packets are captured",
              args: { name: "source-id" },
              isRequired: true,
            },
            {
              name: "--capture-filter-id",
              description: "The capture filter's Oracle ID (OCID)",
              args: { name: "capture-filter-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--target-id",
              description:
                "The OCID of the destination resource where mirrored packets are sent",
              args: { name: "target-id" },
            },
            {
              name: "--target-ip",
              description:
                "The IP address of the destination resource where mirrored packets are sent",
              args: { name: "target-ip" },
            },
            {
              name: "--encapsulation-protocol",
              description:
                "Defines an encapsulation header type for the VTAP's mirrored traffic",
              args: { suggestions: ["VXLAN"] },
            },
            {
              name: "--vxlan-network-identifier",
              description:
                "The virtual extensible LAN (VXLAN) network identifier",
              args: { name: "integer" },
            },
            {
              name: "--is-vtap-enabled",
              description: "Used to start or stop a Vtap resource",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--source-type",
              description: "The source type for the VTAP",
              args: {
                suggestions: [
                  "VNIC",
                  "SUBNET",
                  "LOAD_BALANCER",
                  "DB_SYSTEM",
                  "EXADATA_VM_CLUSTER",
                  "AUTONOMOUS_DATA_WAREHOUSE",
                  "NETWORK_FIREWALL",
                ],
              },
            },
            {
              name: "--traffic-mode",
              description: "Used to control the priority of traffic",
              args: { suggestions: ["DEFAULT", "PRIORITY"] },
            },
            {
              name: "--max-packet-size",
              description:
                "The maximum size of the packets to be included in the filter",
              args: { name: "integer" },
            },
            {
              name: "--target-type",
              description: "The target type for the VTAP",
              args: {
                suggestions: ["VNIC", "NETWORK_LOAD_BALANCER", "IP_ADDRESS"],
              },
            },
            {
              name: "--source-private-endpoint-ip",
              description: "The IP Address of the source private endpoint",
              args: { name: "source-private-endpoint-ip" },
            },
            {
              name: "--source-private-endpoint-subnet-id",
              description:
                "The OCID of the subnet that source private endpoint belongs to",
              args: { name: "source-private-endpoint-subnet-id" },
            },
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified VTAP",
          options: [
            optVtapId,
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
          description: "Gets the specified Vtap resource",
          options: [optVtapId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the virtual test access points (VTAPs) in the specified compartment",
          options: [
            optCompartmentId,
            optVcnId,
            {
              name: "--source",
              description: "The OCID of the VTAP source",
              args: { name: "source" },
            },
            {
              name: "--target-id",
              description: "The OCID of the VTAP target",
              args: { name: "target-id" },
            },
            {
              name: "--target-ip",
              description: "The IP address of the VTAP target",
              args: { name: "target-ip" },
            },
            {
              name: "--is-vtap-enabled",
              description:
                "Indicates whether to list all VTAPs or only running VTAPs",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given VTAP administrative lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "UPDATING",
                  "TERMINATING",
                  "TERMINATED",
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
          description: "Updates the specified VTAP's display name or tags",
          options: [
            optVtapId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--source-id",
              description:
                "The OCID of the source point where packets are captured",
              args: { name: "source-id" },
            },
            {
              name: "--target-id",
              description:
                "The OCID of the destination resource where mirrored packets are sent",
              args: { name: "target-id" },
            },
            {
              name: "--target-ip",
              description:
                "The IP address of the destination resource where mirrored packets are sent",
              args: { name: "target-ip" },
            },
            {
              name: "--capture-filter-id",
              description: "The capture filter's Oracle ID (OCID)",
              args: { name: "capture-filter-id" },
            },
            {
              name: "--encapsulation-protocol",
              description:
                "Defines an encapsulation header type for the VTAP's mirrored traffic",
              args: { suggestions: ["VXLAN"] },
            },
            {
              name: "--vxlan-network-identifier",
              description:
                "The virtual extensible LAN (VXLAN) network identifier",
              args: { name: "integer" },
            },
            {
              name: "--is-vtap-enabled",
              description: "Used to start or stop a Vtap resource",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--traffic-mode",
              description: "Used to control the priority of traffic",
              args: { suggestions: ["DEFAULT", "PRIORITY"] },
            },
            {
              name: "--max-packet-size",
              description:
                "The maximum size of the packets to be included in the filter",
              args: { name: "integer" },
            },
            {
              name: "--source-private-endpoint-ip",
              description: "The IP Address of the source private endpoint",
              args: { name: "source-private-endpoint-ip" },
            },
            {
              name: "--source-private-endpoint-subnet-id",
              description:
                "The OCID of the subnet that source private endpoint belongs to",
              args: { name: "source-private-endpoint-subnet-id" },
            },
            {
              name: "--target-type",
              description: "The target type for the VTAP",
              args: {
                suggestions: ["VNIC", "NETWORK_LOAD_BALANCER", "IP_ADDRESS"],
              },
            },
            {
              name: "--source-type",
              description: "The source type for the VTAP",
              args: {
                suggestions: [
                  "VNIC",
                  "SUBNET",
                  "LOAD_BALANCER",
                  "DB_SYSTEM",
                  "EXADATA_VM_CLUSTER",
                  "AUTONOMOUS_DATA_WAREHOUSE",
                  "NETWORK_FIREWALL",
                ],
              },
            },
            optIfMatch,
            optForce,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vcn",
      description: "A virtual cloud network (VCN)",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a VCN into a different compartment within the same tenancy",
          options: [
            optVcnId2,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the VCN to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new virtual cloud network (VCN)",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to contain the VCN",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--cidr-block",
              description: "Deprecated",
              args: { name: "cidr-block" },
              deprecated: true,
            },
            {
              name: "--cidr-blocks",
              description:
                "The list of one or more IPv4 CIDR blocks for the VCN that meet the following criteria",
              args: { name: "json" },
            },
            {
              name: "--ipv6-private-cidr-blocks",
              description:
                "The list of one or more ULA or Private IPv6 prefixes for the VCN that meets the following criteria",
              args: { name: "json" },
            },
            {
              name: "--is-oracle-gua-allocation-enabled",
              description:
                "Specifies whether to skip Oracle allocated IPv6 GUA",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--byoipv6-cidr-details",
              description:
                "The list of BYOIPv6 OCIDs and BYOIPv6 prefixes required to create a VCN that uses BYOIPv6 address ranges",
              args: { name: "json" },
            },
            optDefinedTags,
            optDisplayName,
            {
              name: "--dns-label",
              description:
                "A DNS label for the VCN, used in conjunction with the VNIC's hostname and subnet's DNS label to form a fully",
              args: { name: "dns-label" },
            },
            optFreeformTags,
            optSecurityAttributes,
            {
              name: "--is-ipv6-enabled",
              description: "Whether IPv6 is enabled for the VCN",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-zpr-only",
              description: "Indicates whether ZPR Only mode is enforced",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified VCN",
          options: [
            optVcnId2,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified VCN's information",
          options: [optVcnId2, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the virtual cloud networks (VCNs) in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "modify-vcn-cidr",
          description: "Updates the specified CIDR block of a VCN",
          options: [
            optVcnId2,
            {
              name: "--original-cidr-block",
              description: "The CIDR IP address to update",
              args: { name: "original-cidr-block" },
              isRequired: true,
            },
            {
              name: "--new-cidr-block",
              description: "The new CIDR IP address",
              args: { name: "new-cidr-block" },
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
          name: "patch",
          description:
            "Updates a VCN by evaluating a sequence of patch instructions (JSON List Patch)",
          options: [
            optVcnId2,
            {
              name: "--patch-vcn-instructions",
              description: "List of patch instructions for VCN",
              args: { name: "json" },
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
          name: "update",
          description: "Updates the specified VCN",
          options: [
            optVcnId2,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optSecurityAttributes,
            {
              name: "--is-zpr-only",
              description: "Indicates whether ZPR Only mode is enforced",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-vcn-cidr",
          description: "Adds a CIDR block to a VCN",
          options: [
            optVcnId2,
            {
              name: "--cidr-block",
              description: "The CIDR block to add",
              args: { name: "cidr-block" },
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
          name: "remove-vcn-cidr",
          description: "Removes a specified CIDR block from a VCN",
          options: [
            optVcnId2,
            {
              name: "--cidr-block",
              description: "The CIDR block to remove",
              args: { name: "cidr-block" },
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
          name: "add-ipv6-vcn-cidr",
          description: "Add an IPv6 prefix to a VCN",
          options: [
            optVcnId2,
            optIfMatch,
            {
              name: "--ipv6-private-cidr-block",
              description:
                "This field is not required and should only be specified if a ULA or private IPv6 prefix is desired for VCN's",
              args: { name: "ipv6-private-cidr-block" },
            },
            {
              name: "--is-oracle-gua-allocation-enabled",
              description: "Indicates whether Oracle will allocate an IPv6 GUA",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--byoipv6-cidr-detail", args: { name: "json" } },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-ipv6-vcn-cidr",
          description: "Removing an existing IPv6 prefix from a VCN",
          options: [
            optVcnId2,
            optIfMatch,
            {
              name: "--ipv6-cidr-block",
              description:
                "This field is not required and should only be specified when removing ULA or private IPv6 prefix or an IPv6",
              args: { name: "ipv6-cidr-block" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vnic",
      description: "A virtual network interface card",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the information for the specified virtual network interface card (VNIC)",
          options: [
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC",
              args: { name: "vnic-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified VNIC",
          options: [
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC",
              args: { name: "vnic-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optSecurityAttributes,
            {
              name: "--hostname-label",
              description: "The hostname for the VNIC's primary private IP",
              args: { name: "hostname-label" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the VNIC to",
              args: { name: "json" },
            },
            {
              name: "--skip-source-dest-check",
              description:
                "Whether the source/destination check is disabled on the VNIC",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optRouteTableId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "assign-private-ip",
          description:
            "Assigns a secondary private IP address to the specified VNIC",
          options: [
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optHostnameLabel,
            {
              name: "--ip-address",
              description: "A private IP address of your choice",
              args: { name: "ip-address" },
            },
            {
              name: "--cidr-prefix-length",
              description:
                "An optional field that when combined with the ipAddress field, will be used to allocate secondary IPv4 CIDRs",
              args: { name: "integer" },
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to assign the private IP to",
              args: { name: "vnic-id" },
            },
            optVlanId2,
            {
              name: "--ipv4-subnet-cidr-at-creation",
              description: "Any one of the IPv4 CIDRs allocated to the subnet",
              args: { name: "ipv4-subnet-cidr-at-creation" },
            },
            optLifetime,
            optRouteTableId,
            {
              name: "--unassign-if-already-assigned",
              description:
                "Force reassignment of the IP address if it's already assigned to another VNIC in the subnet",
            },
            optFromJson,
          ],
        },
        {
          name: "unassign-private-ip",
          description: "Unassigns a secondary private IP address from a VNIC",
          options: [
            {
              name: "--vnic-id",
              description:
                "The OCID of the VNIC to unassign the private IP from",
              args: { name: "vnic-id" },
              isRequired: true,
            },
            {
              name: "--ip-address",
              description: "The secondary private IP to unassign from the VNIC",
              args: { name: "ip-address" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "assign-ipv6",
          description: "Creates an IPv6 for the specified VNIC",
          options: [
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--ip-address",
              description: "An IPv6 address of your choice",
              args: { name: "ip-address" },
            },
            {
              name: "--cidr-prefix-length",
              description: "Length of cidr range",
              args: { name: "integer" },
            },
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC to assign the IPv6 to",
              args: { name: "vnic-id" },
            },
            optLifetime,
            optRouteTableId,
            {
              name: "--ipv6-subnet-cidr",
              description: "The IPv6 prefix allocated to the subnet",
              args: { name: "ipv6-subnet-cidr" },
            },
            optHostname,
            {
              name: "--unassign-if-already-assigned",
              description:
                "Force reassignment of the IP address if it's already assigned to another VNIC in the subnet",
            },
            optFromJson,
          ],
        },
        {
          name: "unassign-ipv6",
          description: "Unassigns and deletes the specified IPv6",
          options: [
            {
              name: "--vnic-id",
              description:
                "The OCID of the VNIC to unassign the private IP from",
              args: { name: "vnic-id" },
              isRequired: true,
            },
            {
              name: "--ip-address",
              description: "The IP to unassign from the VNIC",
              args: { name: "ip-address" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dhcp-options",
      description: "A set of DHCP options",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a set of DHCP options into a different compartment within the same tenancy",
          options: [
            optDhcpId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the set of DHCP options to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new set of DHCP options for the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the set of DHCP options",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--options",
              description: "A set of DHCP options",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description:
                "The OCID of the VCN the set of DHCP options belongs to",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--domain-name-type",
              description: "The search domain name type of DHCP options",
              args: {
                suggestions: ["SUBNET_DOMAIN", "VCN_DOMAIN", "CUSTOM_DOMAIN"],
              },
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
            "Deletes the specified set of DHCP options, but only if it's not associated with a subnet",
          options: [
            optDhcpId,
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
          description: "Gets the specified set of DHCP options",
          options: [optDhcpId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the sets of DHCP options in the specified VCN and specified compartment",
          options: [
            optCompartmentId,
            optVcnId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified set of DHCP options",
          options: [
            optDhcpId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--options",
              description:
                "This option is a JSON list with items of type DhcpOption",
              args: { name: "json" },
            },
            {
              name: "--domain-name-type",
              description: "The search domain name type of DHCP options",
              args: {
                suggestions: ["SUBNET_DOMAIN", "VCN_DOMAIN", "CUSTOM_DOMAIN"],
              },
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
      name: "drg-route-distribution",
      description:
        "A route distribution establishes how routes get imported into DRG route tables and exported through the DRG",
      subcommands: [
        {
          name: "create",
          description: "Creates a new route distribution for the specified DRG",
          options: [
            {
              name: "--drg-id",
              description: "The OCID of the DRG the DRG route table belongs to",
              args: { name: "drg-id" },
              isRequired: true,
            },
            {
              name: "--distribution-type",
              description:
                "States that this distribution defines how routes get imported into route tables",
              args: { suggestions: ["IMPORT"] },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified route distribution's information",
          options: [optRouteDistributionId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the route distributions in the specified DRG",
          options: [
            optDrgId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter that only returns resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
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
          description: "Updates the specified route distribution",
          options: [
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optRouteDistributionId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified route distribution",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optRouteDistributionId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "service-gateway",
      description:
        "Represents a router that lets your VCN privately access specific Oracle services such as Object Storage",
      subcommands: [
        {
          name: "attach",
          description:
            "Adds the specified Service to the list of enabled Service objects for the specified gateway",
          options: [
            optServiceGatewayId,
            {
              name: "--service-id",
              description: "The OCID of the Service",
              args: { name: "service-id" },
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
            "Moves a service gateway into a different compartment within the same tenancy",
          options: [
            optServiceGatewayId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the service gateway to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new service gateway in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the service gateway",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--services",
              description:
                "List of the OCIDs of the Service objects to enable for the service gateway",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--route-table-id",
              description:
                "The OCID of the route table the service gateway will use",
              args: { name: "route-table-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified service gateway",
          options: [
            optServiceGatewayId,
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
          description:
            "Removes the specified Service from the list of enabled Service objects for the specified gateway",
          options: [
            optServiceGatewayId,
            {
              name: "--service-id",
              description: "The OCID of the Service",
              args: { name: "service-id" },
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
          description: "Gets the specified service gateway's information",
          options: [optServiceGatewayId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the service gateways in the specified compartment",
          options: [
            optCompartmentId,
            optVcnId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
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
          description: "Updates the specified service gateway",
          options: [
            optServiceGatewayId,
            {
              name: "--block-traffic",
              description:
                "Whether the service gateway blocks all traffic through it",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--route-table-id",
              description:
                "The OCID of the route table the service gateway will use",
              args: { name: "route-table-id" },
            },
            {
              name: "--services",
              description:
                "List of all the Service objects you want enabled on this service gateway",
              args: { name: "json" },
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
      name: "service",
      description:
        "An object that represents one or multiple Oracle services that you can enable for a ServiceGateway",
      subcommands: [
        {
          name: "get",
          description: "Gets the specified Service object",
          options: [
            {
              name: "--service-id",
              description: "The service's OCID",
              args: { name: "service-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the available Service objects that you can enable for a service gateway in this region",
          options: [optLimit, optPage, optAll, optPageSize, optFromJson],
        },
      ],
    },
    {
      name: "cross-connect-group",
      description: "For use with Oracle Cloud Infrastructure FastConnect",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a cross-connect group into a different compartment within the same tenancy",
          options: [
            optCrossConnectGroupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the cross-connect group to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new cross-connect group to use with Oracle Cloud Infrastructure FastConnect",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the cross-connect group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            {
              name: "--customer-reference-name",
              description:
                "A reference name or identifier for the physical fiber connection that this cross-connect group uses",
              args: { name: "customer-reference-name" },
            },
            optFreeformTags,
            optMacsecProperties,
            {
              name: "--minimum-links",
              description:
                "(Optional) Minimum number of active cross-connects required for the cross-connect group to be considered",
              args: { name: "integer" },
            },
            optIsInterfaceHoldTimerEnabled,
            optInterfaceDownTimerValueInMilliseconds,
            {
              name: "--is-qos-enabled",
              description:
                "(Optional) When true, restricts placement so cross-connects lands only on QoS-capable devices",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified cross-connect group",
          options: [
            optCrossConnectGroupId,
            optIfMatch,
            optForce2,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified cross-connect group's information",
          options: [optCrossConnectGroupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the cross-connect groups in the specified compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "PROVISIONED",
                  "INACTIVE",
                  "TERMINATING",
                  "TERMINATED",
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
            "Updates the specified cross-connect group's display name",
          options: [
            optCrossConnectGroupId,
            optDefinedTags,
            optDisplayName,
            {
              name: "--customer-reference-name",
              description:
                "A reference name or identifier for the physical fiber connection this cross-connect group uses",
              args: { name: "customer-reference-name" },
            },
            optFreeformTags,
            optMacsecProperties,
            {
              name: "--minimum-links",
              description:
                "(Optional) Minimum number of active cross-connects required for the cross-connect group to be considered",
              args: { name: "integer" },
            },
            optIsInterfaceHoldTimerEnabled,
            optInterfaceDownTimerValueInMilliseconds,
            optIfMatch,
            optForce,
            optWaitForState11,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "virtual-circuit-associated-tunnel-details",
      description:
        "Detailed private tunnel info associated with the virtual circuit",
      subcommands: [
        {
          name: "list-virtual-circuit-associated-tunnels",
          description:
            "Gets the specified virtual circuit's associatedTunnelsInfo",
          options: [
            optVirtualCircuitId,
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
      name: "drg-redundancy-status",
      description: "The redundancy status of the DRG",
      subcommands: [
        {
          name: "get",
          description: "Gets the redundancy status for the specified DRG",
          options: [optDrgId, optFromJson],
        },
      ],
    },
    {
      name: "ip-sec-tunnel",
      description:
        "Information about a single IPSec tunnel in an IPSec connection",
      subcommands: [
        {
          name: "get",
          description: "Gets the specified tunnel's information",
          options: [optIpscId, optTunnelId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the tunnel information for the specified IPSec connection",
          options: [
            optIpscId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified tunnel",
          options: [
            optIpscId,
            optTunnelId,
            optDisplayName,
            {
              name: "--routing",
              description:
                "The type of routing to use for this tunnel (BGP dynamic routing, static routing, or policy-based routing)",
              args: { suggestions: ["BGP", "STATIC", "POLICY"] },
            },
            {
              name: "--ike-version",
              description: "Internet Key Exchange protocol version",
              args: { suggestions: ["V1", "V2"] },
            },
            { name: "--bgp-session-config", args: { name: "json" } },
            {
              name: "--oracle-initiation",
              description:
                "Indicates whether the Oracle end of the IPSec connection is able to initiate starting up the IPSec tunnel",
              args: {
                suggestions: ["INITIATOR_OR_RESPONDER", "RESPONDER_ONLY"],
              },
            },
            {
              name: "--nat-translation-enabled",
              description:
                "By default (the AUTO setting), IKE sends packets with a source and destination port set to 500",
              args: { suggestions: ["ENABLED", "DISABLED", "AUTO"] },
            },
            { name: "--phase-one-config", args: { name: "json" } },
            { name: "--phase-two-config", args: { name: "json" } },
            { name: "--dpd-config", args: { name: "json" } },
            { name: "--encryption-domain-config", args: { name: "json" } },
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
      name: "ip-sec-psk",
      description: "The tunnel's shared secret (pre-shared key)",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the specified tunnel's shared secret (pre-shared key)",
          options: [optIpscId, optTunnelId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the shared secret (pre-shared key) for the specified tunnel",
          options: [
            optIpscId,
            optTunnelId,
            {
              name: "--shared-secret",
              description:
                "The shared secret (pre-shared key) to use for the tunnel",
              args: { name: "shared-secret" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "nsg",
      description:
        "A network security group (NSG) provides virtual firewall rules for a specific set of VNICs in a VCN",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a network security group into a different compartment within the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the network security group to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optNsgId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new network security group for the specified VCN",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the network security group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description:
                "The OCID of the VCN to create the network security group in",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified network security group",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optNsgId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the specified network security group's information",
          options: [optNsgId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists either the network security groups in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--vlan-id",
              description: "The OCID of the VLAN",
              args: { name: "vlan-id" },
            },
            optVcnId,
            optLimit,
            optPage,
            optDisplayName2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "AVAILABLE",
                  "TERMINATING",
                  "TERMINATED",
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
          description: "Updates the specified network security group",
          options: [
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optNsgId,
            optFromJson,
          ],
        },
        {
          name: "vnics",
          description:
            "Information about a VNIC that belongs to a network security group",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the VNICs in the specified network security group",
              options: [
                optLimit,
                optPage,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["TIMEASSOCIATED"] },
                },
                optSortOrder,
                optAll,
                optPageSize,
                optNsgId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "rules",
          description:
            "A security rule is one of the items in a NetworkSecurityGroup",
          subcommands: [
            {
              name: "add",
              description:
                "Adds up to 25 security rules to the specified network security group",
              options: [
                {
                  name: "--security-rules",
                  description: "An array of security rules to add to the NSG",
                  args: { name: "json" },
                },
                optNsgId,
                optFromJson,
              ],
            },
            {
              name: "remove",
              description:
                "Removes one or more security rules from the specified network security group",
              options: [
                {
                  name: "--security-rule-ids",
                  description:
                    "The Oracle-assigned ID of each SecurityRule to be deleted",
                  args: { name: "json" },
                },
                optNsgId,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Lists the security rules in the specified network security group",
              options: [
                {
                  name: "--direction",
                  description: "Direction of the security rule",
                  args: { suggestions: ["EGRESS", "INGRESS"] },
                },
                optLimit,
                optPage,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["TIMECREATED"] },
                },
                optSortOrder,
                optAll,
                optPageSize,
                optNsgId,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Updates one or more security rules in the specified network security group",
              options: [
                {
                  name: "--security-rules",
                  description: "The NSG security rules to update",
                  args: { name: "json" },
                },
                optNsgId,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ipam",
      description: "The IP Inventory CIDR utilization details of a subnet",
      subcommands: [
        {
          name: "get-subnet-cidr-utilization",
          description: "Gets the CIDR utilization data of the specified subnet",
          options: [optSubnetId, optFromJson],
        },
        {
          name: "list-ip-inventory",
          description:
            "Lists the IP Inventory information in the selected compartments",
          options: [
            {
              name: "--region-list",
              description: "Lists the selected regions",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-list",
              description: "List the OCID of the compartments",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--override-filters",
              description: "List of selected filters",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--utilization",
              description: "The CIDR utilization of a VCN",
              args: { name: "number" },
            },
            {
              name: "--overlapping-vcns-only",
              description: "List of overlapping VCNs",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--address-type-list",
              description: "List of IP address types used",
              args: { name: "json" },
            },
            {
              name: "--resource-type-list",
              description: "List of VCN resource types",
              args: { suggestions: ["Resource"] },
            },
            {
              name: "--search-keyword",
              description: "Filters the results for the specified string",
              args: { name: "search-keyword" },
            },
            {
              name: "--sort-by",
              description:
                "Provide the sort order (sortOrder) to sort the fields such as TIMECREATED in descending or descending order",
              args: {
                suggestions: [
                  "DISPLAYNAME",
                  "UTILIZATION",
                  "DNS_HOSTNAME",
                  "REGION",
                ],
              },
            },
            {
              name: "--sort-order",
              description: "Specifies the sort order to use",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--pagination-offset",
              description: "Most List operations paginate results",
              args: { name: "integer" },
            },
            {
              name: "--pagination-limit",
              description:
                'Specifies the maximum number of results displayed per page for a paginated "List" call',
              args: { name: "integer" },
            },
            optAll,
            optFromJson,
          ],
        },
        {
          name: "get-resource-ip-inventory",
          description: "Gets the IpInventory resource",
          options: [
            {
              name: "--data-request-id",
              description: "Specify the ID of the resource",
              args: { name: "data-request-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-subnet-ip-inventory",
          description: "Gets the IP Inventory data of the specified subnet",
          options: [optSubnetId, optFromJson],
        },
        {
          name: "get-vcn-overlap",
          description:
            "Gets the CIDR overlap information of the specified VCN in selected compartments",
          options: [
            optVcnId2,
            {
              name: "--region-list",
              description: "Lists the selected regions",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-list",
              description: "The list of OCID of the compartments",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
