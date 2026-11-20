// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optNetworkFirewallPolicyId: Fig.Option = {
  name: "--network-firewall-policy-id",
  description: "Unique Network Firewall Policy identifier",
  args: { name: "network-firewall-policy-id" },
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
      "NEEDS_ATTENTION",
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
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optAddressListName: Fig.Option = {
  name: "--address-list-name",
  description: "Unique identifier for address lists",
  args: { name: "address-list-name" },
  isRequired: true,
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
const optNetworkFirewallId: Fig.Option = {
  name: "--network-firewall-id",
  description: "The OCID of the Network Firewall resource",
  args: { name: "network-firewall-id" },
  isRequired: true,
};
const optPosition: Fig.Option = { name: "--position", args: { name: "json" } };
const optCondition: Fig.Option = {
  name: "--condition",
  args: { name: "json" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "The description of the address list",
  args: { name: "description" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optApplicationGroupName: Fig.Option = {
  name: "--application-group-name",
  description:
    "Unique name identifier for Application Lists in the scope of Network Firewall Policy",
  args: { name: "application-group-name" },
  isRequired: true,
};
const optApplicationName: Fig.Option = {
  name: "--application-name",
  description: "Unique identifier for Applications",
  args: { name: "application-name" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDecryptionProfileName: Fig.Option = {
  name: "--decryption-profile-name",
  description: "Unique identifier for Decryption Profiles",
  args: { name: "decryption-profile-name" },
  isRequired: true,
};
const optDecryptionRuleName: Fig.Option = {
  name: "--decryption-rule-name",
  description:
    "Unique identifier for Decryption Rules in the network firewall policy",
  args: { name: "decryption-rule-name" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "The description of the network firewall policy",
  args: { name: "description" },
};
const optMappedSecretName: Fig.Option = {
  name: "--mapped-secret-name",
  description: "Unique identifier for Mapped Secrets",
  args: { name: "mapped-secret-name" },
  isRequired: true,
};
const optNatRuleName: Fig.Option = {
  name: "--nat-rule-name",
  description: "Unique identifier for NAT rules in the Network Firewall policy",
  args: { name: "nat-rule-name" },
  isRequired: true,
};
const optSecurityRuleName: Fig.Option = {
  name: "--security-rule-name",
  description:
    "Unique identifier for Security Rules in the network firewall policy",
  args: { name: "security-rule-name" },
  isRequired: true,
};
const optServiceListName: Fig.Option = {
  name: "--service-list-name",
  description:
    "Unique name identifier for Service Lists in the scope of Network Firewall Policy",
  args: { name: "service-list-name" },
  isRequired: true,
};
const optServiceName: Fig.Option = {
  name: "--service-name",
  description: "Unique identifier for Services",
  args: { name: "service-name" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optTunnelInspectionRuleName: Fig.Option = {
  name: "--tunnel-inspection-rule-name",
  description:
    "Unique identifier for Tunnel Inspection Rules in the network firewall policy",
  args: { name: "tunnel-inspection-rule-name" },
  isRequired: true,
};
const optUrlListName: Fig.Option = {
  name: "--url-list-name",
  description:
    "Unique name identifier for url lists in the scope of Network Firewall Policy",
  args: { name: "url-list-name" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "network-firewall",
  description: "Network Firewall",
  subcommands: [
    {
      name: "tunnel-inspection-rule",
      description: "Tunnel Inspection Rule used in the firewall policy rules",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates a new Tunnel Inspection Rule at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-tunnel-inspection-rules-details",
              description:
                "Request Details to bulk import tunnel inspection rules for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new tunnel inspection rule for the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--protocol",
              description:
                "Types of Tunnel Inspection Protocol to be applied on the traffic",
              args: { suggestions: ["VXLAN"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the tunnel inspect rule",
              args: { name: "description" },
            },
            {
              name: "--tunnel-inspection-rule-details",
              description:
                "Type specific request details to create a tunnel inspection rule for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a tunnel inspection rule resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optTunnelInspectionRuleName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get tunnel inspection rule by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optTunnelInspectionRuleName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of tunnel inspection rules for the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            {
              name: "--tunnel-inspection-rule-priority-order",
              description:
                "Unique priority order for Tunnel Inspection rules in the network firewall policy",
              args: { name: "integer" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the tunnel inspection rule with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optTunnelInspectionRuleName,
            {
              name: "--protocol",
              description:
                "Types of Tunnel Inspection Protocol to be applied on the traffic",
              args: { suggestions: ["VXLAN"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the tunnel inspect rule",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
            {
              name: "--tunnel-inspection-rule-details",
              description:
                "Type specific details to update a tunnel inspection rule for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "network-firewall",
      description:
        "A network firewall is a security resource that exists in a subnet of your choice and controls incoming",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a NetworkFirewall resource from one compartment identifier to another",
          options: [
            optNetworkFirewallId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the Network Firewalll resource should be moved",
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
          description: "Creates a new NetworkFirewall",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the Network Firewall",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet associated with the Network Firewall",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--network-firewall-policy-id",
              description: "The OCID of the Network Firewall Policy",
              args: { name: "network-firewall-policy-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the Network Firewall",
              args: { name: "display-name" },
            },
            {
              name: "--availability-domain",
              description:
                "Availability Domain where Network Firewall instance is created",
              args: { name: "availability-domain" },
            },
            {
              name: "--ipv4-address",
              description: "IPv4 address for the Network Firewall",
              args: { name: "ipv4-address" },
            },
            {
              name: "--ipv6-address",
              description: "IPv6 address for the Network Firewall",
              args: { name: "ipv6-address" },
            },
            {
              name: "--network-security-group-ids",
              description:
                "An array of network security groups OCID associated with the Network Firewall",
              args: { name: "json" },
            },
            { name: "--nat-configuration", args: { name: "json" } },
            {
              name: "--shape",
              description:
                "The shape of a firewall to determine the bandwidth that the firewall allows",
              args: { name: "shape" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
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
          description: "Deletes a NetworkFirewall resource by identifier",
          options: [
            optNetworkFirewallId,
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
          description: "Gets a NetworkFirewall by identifier",
          options: [optNetworkFirewallId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of NetworkFirewalls",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--network-firewall-policy-id",
              description:
                "A filter to return only resources that match the entire networkFirewallPolicyId given",
              args: { name: "network-firewall-policy-id" },
            },
            {
              name: "--id",
              description: "The OCID of the Network Firewall resource",
              args: { name: "id" },
            },
            {
              name: "--availability-domain",
              description:
                "A filter to return only resources that are present within the specified availability domain",
              args: { name: "availability-domain" },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources with a lifecycleState matching the given value",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the NetworkFirewall",
          options: [
            optNetworkFirewallId,
            {
              name: "--display-name",
              description: "A user-friendly name for the Network Firewall",
              args: { name: "display-name" },
            },
            {
              name: "--network-firewall-policy-id",
              description: "The OCID of the Network Firewall Policy",
              args: { name: "network-firewall-policy-id" },
            },
            {
              name: "--network-security-group-ids",
              description:
                "An array of network security groups OCID associated with the Network Firewall",
              args: { name: "json" },
            },
            { name: "--nat-configuration", args: { name: "json" } },
            {
              name: "--shape",
              description:
                "The shape of a firewall to determine the bandwidth that the firewall allows",
              args: { name: "shape" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
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
      name: "network-firewall-policy",
      description: "Description of NetworkFirewall Policy",
      subcommands: [
        {
          name: "apply",
          description:
            "Applies the candidate version of the NetworkFirewallPolicy resource",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--firewalls",
              description:
                "Ordered priority list of firewall OCIDs on which the update needs to be applied in given order",
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
          name: "change-compartment",
          description:
            "Moves a NetworkFirewallPolicy resource from one compartment identifier to another",
          options: [
            optNetworkFirewallPolicyId,
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
          name: "clone",
          description:
            "Clones a NetworkFirewallPolicy resource from an existing Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--display-name",
              description:
                "A user-friendly optional name for the cloned firewall policy",
              args: { name: "display-name" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the NetworkFirewall Policy",
              args: { name: "compartment-id" },
            },
            optDescription2,
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
          name: "create",
          description: "Creates a new Network Firewall Policy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the NetworkFirewall Policy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A user-friendly optional name for the firewall policy",
              args: { name: "display-name" },
            },
            optDescription2,
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
            "Deletes a NetworkFirewallPolicy resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
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
            "Gets a NetworkFirewallPolicy given the network firewall policy identifier",
          options: [optNetworkFirewallPolicyId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Network Firewall Policies",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--id",
              description: "Unique Network Firewall Policy identifier",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources with a lifecycleState matching the given value",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "migrate",
          description:
            "Moves a NetworkFirewallPolicy resource from one version to latest version",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the NetworkFirewallPolicy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--display-name",
              description: "A user-friendly name for the firewall",
              args: { name: "display-name" },
            },
            optDescription2,
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
      name: "url-list",
      description: "URL pattern lists of the policy",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates a new Url Lists at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-url-lists-details",
              description:
                "Request Details to bulk import URL lists for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Url List for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--name",
              description:
                "Unique name to identify the group of urls to be used in the policy rules",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--urls",
              description: "List of urls",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the Url list",
              args: { name: "description" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Url List resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optUrlListName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Url List by the given name in the context of network firewall policy",
          options: [optNetworkFirewallPolicyId, optUrlListName, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of URL lists for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Url list with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optUrlListName,
            {
              name: "--urls",
              description: "List of urls",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the Url list",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
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
            "Return a (paginated) list of logs for a given work request",
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
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
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
                  "NEEDS_ATTENTION",
                  "CANCELING",
                  "CANCELED",
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
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application-group",
      description: "A group of applications",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates a new Application Group at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-application-groups-details",
              description:
                "Request Details to bulk import the application groups for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new ApplicationGroup for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--name",
              description: "Name of the application Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--apps",
              description: "Collection of application names",
              args: { name: "json" },
            },
            {
              name: "--description",
              description: "The description of the application list",
              args: { name: "description" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a ApplicationGroup resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optApplicationGroupName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get ApplicationGroup by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optApplicationGroupName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of ApplicationGroups for the policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the ApplicationGroup with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optApplicationGroupName,
            {
              name: "--apps",
              description: "Collection of application names",
              args: { name: "json" },
            },
            {
              name: "--description",
              description: "The description of the application list",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "decryption-rule",
      description: "Decryption Rule used in the firewall policy rules",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates Decryption Rules at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-decryption-rules-details",
              description:
                "Request Details to bulk import the decryption rules for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Decryption Rule for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--name",
              description:
                "Name for the decryption rule, must be unique within the policy",
              args: { name: "name" },
              isRequired: true,
            },
            optCondition,
            {
              name: "--action",
              description: "Action",
              args: { suggestions: ["NO_DECRYPT", "DECRYPT"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the decryption rule",
              args: { name: "description" },
            },
            {
              name: "--decryption-profile",
              description: "The name of the decryption profile to use",
              args: { name: "decryption-profile" },
            },
            {
              name: "--secret",
              description: "The name of a mapped secret",
              args: { name: "secret" },
            },
            {
              name: "--secrets",
              description: "An array of mapped secrets",
              args: { name: "json" },
            },
            optPosition,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Decryption Rule resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optDecryptionRuleName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Decryption Rule by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optDecryptionRuleName,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Decryption Rule for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            {
              name: "--decryption-rule-priority-order",
              description:
                "Unique priority order for Decryption Rules in the network firewall policy",
              args: { name: "integer" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Decryption Rule with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optDecryptionRuleName,
            optCondition,
            {
              name: "--action",
              description: "Action",
              args: { suggestions: ["NO_DECRYPT", "DECRYPT"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the decryption rule",
              args: { name: "description" },
            },
            {
              name: "--decryption-profile",
              description: "The name of the decryption profile to use",
              args: { name: "decryption-profile" },
            },
            {
              name: "--secret",
              description: "The name of a mapped secret",
              args: { name: "secret" },
            },
            {
              name: "--secrets",
              description: "An array of mapped secrets",
              args: { name: "json" },
            },
            optPosition,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "address-list",
      description: "List of addresses with a reference name",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates a new Address Lists at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-address-lists-details",
              description:
                "Request Details to bulk import the address lists for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Address List for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--name",
              description:
                "Unique name to identify the group of addresses to be used in the policy rules",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of address List",
              args: { suggestions: ["FQDN", "IP"] },
              isRequired: true,
            },
            {
              name: "--addresses",
              description: "List of addresses",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Address List resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optAddressListName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Address List by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optAddressListName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of Network Firewall Policies",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Address list with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optAddressListName,
            {
              name: "--type",
              description: "Type of address List",
              args: { suggestions: ["FQDN", "IP"] },
              isRequired: true,
            },
            optDescription,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-address-list-update-fqdn-address-list-details",
          description:
            "Updates the Address list with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optAddressListName,
            {
              name: "--addresses",
              description: "List of FQDN addresses",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "update-address-list-update-ip-address-list-details",
          description:
            "Updates the Address list with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optAddressListName,
            {
              name: "--addresses",
              description:
                "List of IP addresses which could be IPv4 or IPv6 addresses or CIDR blocks",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application",
      description:
        "A protocol identifier (such as TCP, UDP, or ICMP) and protocol-specific parameters (such as a port range)",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates new Applications at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-applications-details",
              description:
                "Request Details to bulk import applications for the Network Firewall Policy Resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Application for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--type",
              description: "Describes the type of Application",
              args: { suggestions: ["ICMP", "ICMP_V6"] },
            },
            {
              name: "--description",
              description: "The description of the application",
              args: { name: "description" },
            },
            {
              name: "--application-details",
              description:
                "Type specific request details to create an application for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Application resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optApplicationName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Application by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optApplicationName,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of Applications for the policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Application with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optApplicationName,
            {
              name: "--type",
              description: "Describes the type of Application",
              args: { suggestions: ["ICMP", "ICMP_V6"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the application",
              args: { name: "description" },
            },
            optIfMatch,
            {
              name: "--application-details",
              description:
                "Type specific details to update an application for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "decryption-profile",
      description: "Decryption Profile used on the firewall policy rules",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates new Decryption Profiles at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-decryption-profiles-details",
              description:
                "Request Details to bulk import decryption profiles for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Decryption Profile for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--type",
              description:
                "Describes the type of Decryption Profile SslForwardProxy or SslInboundInspection",
              args: {
                suggestions: ["SSL_INBOUND_INSPECTION", "SSL_FORWARD_PROXY"],
              },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the decryption profile",
              args: { name: "description" },
            },
            {
              name: "--decryption-profile-details",
              description:
                "Type specific request details to create a decryption profile for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Decryption Profile resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optDecryptionProfileName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Decryption Profile by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optDecryptionProfileName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Decryption Profile for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Decryption Profile with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optDecryptionProfileName,
            {
              name: "--type",
              description:
                "Describes the type of Decryption Profile SslForwardProxy or SslInboundInspection",
              args: {
                suggestions: ["SSL_INBOUND_INSPECTION", "SSL_FORWARD_PROXY"],
              },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the decryption profile",
              args: { name: "description" },
            },
            optIfMatch,
            {
              name: "--decryption-profile-details",
              description:
                "Type specific details to update a decryption profile for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "mapped-secret",
      description: "Mapped secret used on the firewall policy rules",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates new Mapped Secrets at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-mapped-secrets-details",
              description:
                "Request Details to bulk import the mapped secrets for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Mapped Secret for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--source",
              description:
                "Source of the secrets, where the secrets are stored",
              args: { name: "source" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the mapped secret",
              args: { name: "description" },
            },
            {
              name: "--mapped-secret-details",
              description:
                "Type specific request details to create a mapped secret for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Mapped Secret resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optMappedSecretName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Mapped Secret by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optMappedSecretName,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Mapped Secret for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Mapped Secret with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optMappedSecretName,
            {
              name: "--source",
              description:
                "Source of the secrets, where the secrets are stored",
              args: { name: "source" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the mapped secret",
              args: { name: "description" },
            },
            optIfMatch,
            {
              name: "--mapped-secret-details",
              description:
                "Type specific details to update a mapped secret for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "service",
      description:
        "A Service which can be used to identify the running service",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates new Services at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-services-details",
              description:
                "Request Details to bulk import the services for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Service for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--type",
              description: "Describes the type of Service",
              args: { suggestions: ["TCP_SERVICE", "UDP_SERVICE"] },
            },
            {
              name: "--description",
              description: "The description of the service",
              args: { name: "description" },
            },
            {
              name: "--service-details",
              description:
                "Type specific request details to create a service for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Service resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optServiceName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Service by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optServiceName,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of Services for the policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Service with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optServiceName,
            {
              name: "--type",
              description: "Describes the type of Service",
              args: { suggestions: ["TCP_SERVICE", "UDP_SERVICE"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the service",
              args: { name: "description" },
            },
            optIfMatch,
            {
              name: "--service-details",
              description:
                "Type specific details to update a service for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
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
      name: "nat-rule",
      description:
        "A NAT rule defines which traffic NAT should be applied to by the firewall",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates a new NAT rule at bulk for the Network Firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-nat-rules-details",
              description:
                "Request Details to bulk import nat rules for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new NAT rule for the Network Firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--type",
              description: "NAT type",
              args: { suggestions: ["NATV4"] },
              isRequired: true,
            },
            optPosition,
            {
              name: "--nat-rule-details",
              description:
                "Type specific request details to create a nat rule for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a NAT rule resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optNatRuleName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get a NAT rule by the given name in the context of Network Firewall policy",
          options: [optNetworkFirewallPolicyId, optNatRuleName, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of NAT rules for the Network Firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            {
              name: "--nat-rule-priority-order",
              description:
                "Unique priority order for NAT rules in the Network Firewall policy",
              args: { name: "integer" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the NAT rule with the given name in the Network Firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optNatRuleName,
            {
              name: "--description",
              description: "Description of a NAT rule",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
            {
              name: "--nat-rule-details",
              description:
                "Type specific details to update a nat rule for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "service-list",
      description: "A group of services",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates a new Service List at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-service-lists-details",
              description:
                "Request Details to bulk import the service lists for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new ServiceList for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--name",
              description: "Name of the service Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--services",
              description: "Collection of service names",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the service list",
              args: { name: "description" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a ServiceList resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optServiceListName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get ServiceList by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optServiceListName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of ServiceLists for the policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the ServiceList with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optServiceListName,
            {
              name: "--services",
              description: "Collection of service names",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the service list",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "network-firewall-health-status",
      description: "Response for network firewall health status",
      subcommands: [
        {
          name: "get",
          description: "Get Overall health status of Network Firewall",
          options: [optNetworkFirewallId, optFromJson],
        },
      ],
    },
    {
      name: "security-rule",
      description: "Security Rule used in the firewall policy rules",
      subcommands: [
        {
          name: "bulk-upload",
          description:
            "Creates a new Security Rule at bulk for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bulk-upload-security-rules-details",
              description:
                "Request Details to bulk import the security rules for the Network Firewall Policy resource",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Security Rule for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            {
              name: "--name",
              description:
                "Name for the Security rule, must be unique within the policy",
              args: { name: "name" },
              isRequired: true,
            },
            optCondition,
            {
              name: "--action",
              description: "Types of Action on the Traffic flow",
              args: { suggestions: ["ALLOW", "DROP", "REJECT", "INSPECT"] },
              isRequired: true,
            },
            {
              name: "--inspection",
              description: "Type of inspection to affect the Traffic flow",
              args: {
                suggestions: ["INTRUSION_DETECTION", "INTRUSION_PREVENTION"],
              },
            },
            optPosition,
            {
              name: "--description",
              description: "The description of the security rule",
              args: { name: "description" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Security Rule resource with the given identifier",
          options: [
            optNetworkFirewallPolicyId,
            optSecurityRuleName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get Security Rule by the given name in the context of network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optSecurityRuleName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Security Rule for the Network Firewall Policy",
          options: [
            optNetworkFirewallPolicyId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName,
            {
              name: "--security-rule-priority-order",
              description:
                "Unique priority order for Security Rules in the network firewall policy",
              args: { name: "integer" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the Security Rule with the given name in the network firewall policy",
          options: [
            optNetworkFirewallPolicyId,
            optSecurityRuleName,
            optCondition,
            {
              name: "--action",
              description: "Types of Action on the Traffic flow",
              args: { suggestions: ["ALLOW", "DROP", "REJECT", "INSPECT"] },
              isRequired: true,
            },
            {
              name: "--inspection",
              description: "Type of inspection to affect the Traffic flow",
              args: {
                suggestions: ["INTRUSION_DETECTION", "INTRUSION_PREVENTION"],
              },
            },
            optPosition,
            {
              name: "--description",
              description: "The description of the security rule",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
