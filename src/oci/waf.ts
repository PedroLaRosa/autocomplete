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
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSystemTags: Fig.Option = {
  name: "--system-tags",
  description: "Usage of system tag keys",
  args: { name: "json" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optNetworkAddressListId: Fig.Option = {
  name: "--network-address-list-id",
  description: "The OCID of the NetworkAddressList",
  args: { name: "network-address-list-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "NetworkAddressList display name, can be renamed",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optWebAppFirewallId: Fig.Option = {
  name: "--web-app-firewall-id",
  description: "The OCID of the WebAppFirewall",
  args: { name: "web-app-firewall-id" },
  isRequired: true,
};
const optWebAppFirewallPolicyId: Fig.Option = {
  name: "--web-app-firewall-policy-id",
  description: "The OCID of the WebAppFirewallPolicy",
  args: { name: "web-app-firewall-policy-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the given lifecycleState",
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
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "waf",
  description: "Web Application Firewall (WAF)",
  subcommands: [
    {
      name: "web-app-firewall",
      description:
        "A resource connecting a WebAppFirewallPolicy to a backend of particular type",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Web App Firewall resource from one compartment to another",
          options: [
            optWebAppFirewallId,
            optCompartmentId3,
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
            "Deletes a WebAppFirewall resource identified by the OCID",
          options: [
            optWebAppFirewallId,
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
          description: "Gets a WebAppFirewall by OCID",
          options: [optWebAppFirewallId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of all WebAppFirewalls in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description:
                "A filter to return only the WebAppFirewall with the given OCID",
              args: { name: "id" },
            },
            {
              name: "--web-app-firewall-policy-id",
              description:
                "A filter to return only the WebAppFirewall with the given OCID of related WebAppFirewallPolicy",
              args: { name: "web-app-firewall-policy-id" },
            },
            optLifecycleState,
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
        {
          name: "create-for-load-balancer",
          description: "Creates a new WebAppFirewall",
          options: [
            optCompartmentId2,
            {
              name: "--web-app-firewall-policy-id",
              description:
                "The OCID of WebAppFirewallPolicy, which is attached to the resource",
              args: { name: "web-app-firewall-policy-id" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "LoadBalancer OCID to which the WebAppFirewallPolicy is attached to",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "WebAppFirewall display name, can be renamed",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-for-load-balancer",
          description: "Updates the WebAppFirewall identified by the OCID",
          options: [
            optWebAppFirewallId,
            {
              name: "--display-name",
              description: "WebAppFirewall display name, can be renamed",
              args: { name: "display-name" },
            },
            {
              name: "--web-app-firewall-policy-id",
              description:
                "The OCID of WebAppFirewallPolicy, which is attached to the resource",
              args: { name: "web-app-firewall-policy-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
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
      name: "work-request-error",
      description: "An error encountered while executing a WorkRequest",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given WorkRequest",
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
      name: "protection-capability",
      description: "References an OCI-managed protection capability",
      subcommands: [
        {
          name: "list",
          description:
            "Lists of protection capabilities filtered by query parameters",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            {
              name: "--key",
              description:
                "The unique key of protection capability to filter by",
              args: { name: "key" },
            },
            {
              name: "--is-latest-version",
              description:
                "A filter to return only resources that matches given isLatestVersion",
              args: { name: "is-latest-version" },
              isRepeatable: true,
            },
            {
              name: "--type",
              description:
                "A filter to return only resources that matches given type",
              args: {
                suggestions: [
                  "REQUEST_PROTECTION_CAPABILITY",
                  "RESPONSE_PROTECTION_CAPABILITY",
                ],
              },
            },
            {
              name: "--group-tag",
              description:
                "A filter to return only resources that are accociated given group tag",
              args: { name: "group-tag" },
              isRepeatable: true,
            },
            optDisplayName,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["key", "type", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-protection-capability-group-tags",
          description:
            "Lists of available group tags filtered by query parameters",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            {
              name: "--type",
              description:
                "A filter to return only resources that matches given type",
              args: {
                suggestions: [
                  "REQUEST_PROTECTION_CAPABILITY",
                  "RESPONSE_PROTECTION_CAPABILITY",
                ],
              },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name"] },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire name given",
              args: { name: "name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "web-app-firewall-policy",
      description: "The details of WebAppFirewallPolicy",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a WebAppFirewallfPolicy resource from one compartment to another",
          options: [
            optWebAppFirewallPolicyId,
            optCompartmentId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new WebAppFirewallPolicy",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "WebAppFirewallPolicy display name, can be renamed",
              args: { name: "display-name" },
            },
            {
              name: "--actions",
              description:
                "Predefined actions for use in multiple different rules",
              args: { name: "json" },
            },
            { name: "--request-access-control", args: { name: "json" } },
            { name: "--request-rate-limiting", args: { name: "json" } },
            { name: "--request-protection", args: { name: "json" } },
            { name: "--response-access-control", args: { name: "json" } },
            { name: "--response-protection", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a WebAppFirewallPolicy resource identified by the OCID",
          options: [
            optWebAppFirewallPolicyId,
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
          description: "Gets a WebAppFirewallPolicy with the given OCID",
          options: [optWebAppFirewallPolicyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of all WebAppFirewallPolicies in a compartment",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description:
                "A filter to return only the WebAppFirewallPolicy with the given OCID",
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
          name: "update",
          description: "Update the WebAppFirewallPolicy identified by the OCID",
          options: [
            optWebAppFirewallPolicyId,
            {
              name: "--display-name",
              description: "WebAppFirewallPolicy display name, can be renamed",
              args: { name: "display-name" },
            },
            {
              name: "--actions",
              description:
                "Predefined actions for use in multiple different rules",
              args: { name: "json" },
            },
            { name: "--request-access-control", args: { name: "json" } },
            { name: "--request-rate-limiting", args: { name: "json" } },
            { name: "--request-protection", args: { name: "json" } },
            { name: "--response-access-control", args: { name: "json" } },
            { name: "--response-protection", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
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
      name: "work-request",
      description: "A description of WorkRequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the WorkRequest with the given OCID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the WorkRequests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
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
      name: "network-address-list",
      description:
        "IP addresses that can be used between different WebAppFirewallPolicies",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a NetworkAddressList resource from one compartment to another",
          options: [
            optNetworkAddressListId,
            optCompartmentId3,
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
            "Deletes a NetworkAddressList resource identified by the OCID",
          options: [
            optNetworkAddressListId,
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
          description: "Gets a NetworkAddressList by OCID",
          options: [optNetworkAddressListId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of all NetworkAddressLists in a compartment",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description:
                "A filter to return only the NetworkAddressList with the given OCID",
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
          name: "create-addresses-list",
          description: "Creates a new NetworkAddressList",
          options: [
            optCompartmentId2,
            {
              name: "--addresses",
              description: "A list of IP address prefixes in CIDR notation",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-addresses-list",
          description: "Update the NetworkAddressList identified by the OCID",
          options: [
            optNetworkAddressListId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            {
              name: "--addresses",
              description: "A list of IP address prefixes in CIDR notation",
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
          name: "create-vcn-addresses-list",
          description: "Creates a new NetworkAddressList",
          options: [
            optCompartmentId2,
            {
              name: "--vcn-addresses",
              description:
                "A list of private address prefixes, each associated with a particular VCN",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-vcn-addresses-list",
          description: "Update the NetworkAddressList identified by the OCID",
          options: [
            optNetworkAddressListId,
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            {
              name: "--vcn-addresses",
              description:
                "A list of private address prefixes, each associated with a particular VCN",
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
      name: "work-request-log",
      description: "A log message from the execution of a WorkRequest",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of logs for a given WorkRequest",
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
