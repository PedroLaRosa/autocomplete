// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optNetworkLoadBalancerId: Fig.Option = {
  name: "--network-load-balancer-id",
  description: "The OCID of the network load balancer to update",
  args: { name: "network-load-balancer-id" },
  isRequired: true,
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
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page from which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optIfNoneMatch: Fig.Option = {
  name: "--if-none-match",
  description: "The system returns the requested resource, with a 200 status",
  args: { name: "if-none-match" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either 'asc' (ascending) or 'desc' (descending)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment containing the network load balancers to list",
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
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The identifier of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "nlb",
  description: "NetworkLoadBalancer",
  subcommands: [
    {
      name: "listener",
      description: "The congfiguration of the listener",
      subcommands: [
        {
          name: "create",
          description: "Adds a listener to a network load balancer",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--name",
              description: "A friendly name for the listener",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--default-backend-set-name",
              description: "The name of the associated backend set",
              args: { name: "default-backend-set-name" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "The communication port for the listener",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--protocol",
              description:
                "The protocol on which the listener accepts connection requests",
              args: {
                suggestions: ["ANY", "TCP", "UDP", "TCP_AND_UDP", "L3IP"],
              },
              isRequired: true,
            },
            {
              name: "--ip-version",
              description: "IP version associated with the listener",
              args: { suggestions: ["IPV4", "IPV6"] },
            },
            {
              name: "--is-ppv2-enabled",
              description:
                "Property to enable/disable PPv2 feature for this listener",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tcp-idle-timeout",
              description: "The duration for TCP idle timeout in seconds",
              args: { name: "integer" },
            },
            {
              name: "--udp-idle-timeout",
              description: "The duration for UDP idle timeout in seconds",
              args: { name: "integer" },
            },
            {
              name: "--l3-ip-idle-timeout",
              description: "The duration for L3IP idle timeout in seconds",
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
          name: "delete",
          description: "Deletes a listener from a network load balancer",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--listener-name",
              description: "The name of the listener to delete",
              args: { name: "listener-name" },
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
          name: "get",
          description:
            "Retrieves listener properties associated with a given network load balancer and listener name",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--listener-name",
              description: "The name of the listener to get",
              args: { name: "listener-name" },
              isRequired: true,
            },
            optIfNoneMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a listener for a given network load balancer",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--listener-name",
              description: "The name of the listener to update",
              args: { name: "listener-name" },
              isRequired: true,
            },
            {
              name: "--default-backend-set-name",
              description: "The name of the associated backend set",
              args: { name: "default-backend-set-name" },
            },
            {
              name: "--port",
              description: "The communication port for the listener",
              args: { name: "integer" },
            },
            {
              name: "--protocol",
              description:
                "The protocol on which the listener accepts connection requests",
              args: {
                suggestions: ["ANY", "TCP", "UDP", "TCP_AND_UDP", "L3IP"],
              },
            },
            {
              name: "--ip-version",
              description: "IP version associated with the listener",
              args: { suggestions: ["IPV4", "IPV6"] },
            },
            {
              name: "--is-ppv2-enabled",
              description:
                "Property to enable/disable PPv2 feature for this listener",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tcp-idle-timeout",
              description: "The duration for TCP idle timeout in seconds",
              args: { name: "integer" },
            },
            {
              name: "--udp-idle-timeout",
              description: "The duration for UDP idle timeout in seconds",
              args: { name: "integer" },
            },
            {
              name: "--l3-ip-idle-timeout",
              description: "The duration for L3IP idle timeout in seconds",
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
          name: "list",
          description:
            "Lists all listeners associated with a given network load balancer",
          options: [
            optNetworkLoadBalancerId,
            optIfNoneMatch,
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
      name: "network-load-balancing-policy",
      description: "Network load balancing policy",
      subcommands: [
        {
          name: "list",
          description: "Lists the available network load balancer policies",
          options: [
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
      name: "work-request-log-entry",
      description: "A log message from the running of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optCompartmentId,
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
      name: "backend-set-health",
      description: "The health status details for a backend set",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the health status for the specified backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set for which to retrieve the health status",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "health-checker",
      description: "The health check policy configuration",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the health check policy information for a given network load balancer and backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the health check policy to be retrieved",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optIfNoneMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the health check policy for a given network load balancer and backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the health check policy to be retrieved",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--protocol",
              description:
                "The protocol that the health check must use; either HTTP, UDP, or TCP",
              args: { suggestions: ["HTTP", "HTTPS", "TCP", "UDP", "DNS"] },
            },
            {
              name: "--port",
              description:
                "The backend server port against which to run the health check",
              args: { name: "integer" },
            },
            {
              name: "--retries",
              description:
                'The number of retries to attempt before a backend server is considered "unhealthy"',
              args: { name: "integer" },
            },
            {
              name: "--timeout-in-millis",
              description:
                "The maximum time, in milliseconds, to wait for a reply to a health check",
              args: { name: "integer" },
            },
            {
              name: "--interval-in-millis",
              description:
                "The interval between health checks, in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--url-path",
              description: "The path against which to run the health check",
              args: { name: "url-path" },
            },
            {
              name: "--response-body-regex",
              description:
                "A regular expression for parsing the response body from the backend server",
              args: { name: "response-body-regex" },
            },
            {
              name: "--return-code",
              description:
                "The status code a healthy backend server should return",
              args: { name: "integer" },
            },
            {
              name: "--request-data",
              description:
                "Base64 encoded pattern to be sent as UDP or TCP health check probe",
              args: { name: "request-data" },
            },
            {
              name: "--response-data",
              description:
                "Base64 encoded pattern to be validated as UDP or TCP health check probe response",
              args: { name: "response-data" },
            },
            { name: "--dns", args: { name: "json" } },
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
      name: "work-request",
      description: "A description of work request status",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the details of the work request with the given identifier",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists all work requests",
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
      name: "backend-operational-status",
      description: "The operational status of the specified backend server",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the current operational status of the specified backend server",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend server for which to retrieve the operational status",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description:
                "The name of the backend server to retrieve health status for",
              args: { name: "backend-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "backend-health",
      description: "The health status of the specified backend server",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the current health status of the specified backend server",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend server for which to retrieve the health status",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description:
                "The name of the backend server to retrieve health status for",
              args: { name: "backend-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "An error encountered while running a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optCompartmentId,
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
      name: "network-load-balancer",
      description: "The properties that define a network load balancer",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a network load balancer into a different compartment within the same tenancy",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which to move the network load balancer",
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
          description: "Creates a network load balancer",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the network load balancer",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "Network load balancer identifier, which can be renamed",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The subnet in which the network load balancer is spawned OCIDs",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--is-preserve-source-destination",
              description:
                "This parameter can be enabled only if backends are compute OCIDs",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-symmetric-hash-enabled",
              description:
                "This can only be enabled when NLB is working in transparent mode with source destination header preservation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--reserved-ips",
              description: "An array of reserved Ips",
              args: { name: "json" },
            },
            {
              name: "--is-private",
              description:
                "Whether the network load balancer has a virtual cloud network-local (private) IP address",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--network-security-group-ids",
              description:
                "An array of network security groups OCIDs associated with the network load balancer",
              args: { name: "json" },
            },
            {
              name: "--nlb-ip-version",
              description: "IP version associated with the NLB",
              args: { suggestions: ["IPV4", "IPV4_AND_IPV6", "IPV6"] },
            },
            {
              name: "--subnet-ipv6-cidr",
              description: "IPv6 subnet prefix selection",
              args: { name: "subnet-ipv6-cidr" },
            },
            {
              name: "--assigned-private-ipv4",
              description:
                "Private IP address to be assigned to the network load balancer being created",
              args: { name: "assigned-private-ipv4" },
            },
            {
              name: "--assigned-ipv6",
              description:
                "IPv6 address to be assigned to the network load balancer being created",
              args: { name: "assigned-ipv6" },
            },
            {
              name: "--listeners",
              description:
                "Listeners associated with the network load balancer",
              args: { name: "json" },
            },
            {
              name: "--backend-sets",
              description:
                "Backend sets associated with the network load balancer",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type, or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "ZPR tags for this resource",
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
          description: "Deletes a network load balancer resource by identifier",
          options: [
            optNetworkLoadBalancerId,
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
            "Retrieves network load balancer configuration information by identifier",
          options: [optNetworkLoadBalancerId, optIfNoneMatch, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of network load balancers",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
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
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
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
          description: "Updates the network load balancer",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--display-name",
              description:
                "The user-friendly display name for the network load balancer",
              args: { name: "display-name" },
            },
            {
              name: "--is-preserve-source-destination",
              description:
                "This parameter can be enabled only if backends are compute OCIDs",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-symmetric-hash-enabled",
              description:
                "This can only be enabled when NLB is working in transparent mode with source destination header preservation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--nlb-ip-version",
              description: "IP version associated with the NLB",
              args: { suggestions: ["IPV4", "IPV4_AND_IPV6", "IPV6"] },
            },
            {
              name: "--subnet-ipv6-cidr",
              description: "IPv6 subnet prefix selection",
              args: { name: "subnet-ipv6-cidr" },
            },
            {
              name: "--assigned-ipv6",
              description:
                "IPv6 address to be assigned to the network load balancer being created",
              args: { name: "assigned-ipv6" },
            },
            {
              name: "--reserved-ipv6-id",
              description:
                "The reservedIpv6Id field is used to specify the OCID of a reserved IPv6 address to be used only when updating",
              args: { name: "reserved-ipv6-id" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "ZPR tags for this resource",
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
          name: "update-network-security-groups",
          description:
            "Updates the network security groups associated with the specified network load balancer",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--network-security-group-ids",
              description:
                "An array of network security group OCIDs associated with the network load balancer",
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
      name: "backend-set",
      description: "The configuration of a network load balancer backend set",
      subcommands: [
        {
          name: "create",
          description: "Adds a backend set to a network load balancer",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--name",
              description:
                "A user-friendly name for the backend set that must be unique and cannot be changed",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--policy",
              description:
                "The network load balancer policy for the backend set",
              args: { suggestions: ["TWO_TUPLE", "THREE_TUPLE", "FIVE_TUPLE"] },
              isRequired: true,
            },
            {
              name: "--health-checker",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-preserve-source",
              description:
                "If this parameter is enabled, then the network load balancer preserves the source IP of the packet when it",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-fail-open",
              description:
                "If enabled, the network load balancer will continue to distribute traffic in the configured distribution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-instant-failover-enabled",
              description:
                "If enabled existing connections will be forwarded to an alternative healthy backend as soon as current",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-instant-failover-tcp-reset-enabled",
              description: "This only applies when using instant failover",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--are-operationally-active-backends-preferred",
              description:
                "If enabled, NLB supports active-standby backends, with the initial standby being the configured backup",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ip-version",
              description: "IP version associated with the backend set",
              args: { suggestions: ["IPV4", "IPV6"] },
            },
            {
              name: "--backends",
              description:
                "An array of backends to be associated with the backend set",
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
          name: "delete",
          description: "Deletes the specified backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description: "The name of the backend set to delete",
              args: { name: "backend-set-name" },
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
          name: "get",
          description:
            "Retrieves the configuration information for the specified backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description: "The name of the backend set to retrieve",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optIfNoneMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description: "The name of the backend set to update",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--policy",
              description:
                "The network load balancer policy for the backend set",
              args: { name: "policy" },
            },
            {
              name: "--is-preserve-source",
              description:
                "If this parameter is enabled, then the network load balancer preserves the source IP of the packet when it",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-fail-open",
              description:
                "If enabled, the network load balancer will continue to distribute traffic in the configured distribution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-instant-failover-enabled",
              description:
                "If enabled existing connections will be forwarded to an alternative healthy backend as soon as current",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-instant-failover-tcp-reset-enabled",
              description: "This only applies when using instant failover",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--are-operationally-active-backends-preferred",
              description:
                "If enabled, NLB supports active-standby backends, with the initial standby being the configured backup",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ip-version",
              description: "The IP version associated with the backend set",
              args: { suggestions: ["IPV4", "IPV6"] },
            },
            {
              name: "--backends",
              description:
                "An array of backends associated with the backend set",
              args: { name: "json" },
            },
            { name: "--health-checker", args: { name: "json" } },
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
            "Lists all backend sets associated with a given network load balancer",
          options: [
            optNetworkLoadBalancerId,
            optIfNoneMatch,
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
      name: "backend",
      description:
        "The configuration of a backend server that is a member of a network load balancer backend set",
      subcommands: [
        {
          name: "create",
          description: "Adds a backend server to a backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--port",
              description: "The communication port for the backend server",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set to which to add the backend server",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Optional unique name identifying the backend within the backend set",
              args: { name: "name" },
            },
            {
              name: "--ip-address",
              description: "The IP address of the backend server",
              args: { name: "ip-address" },
            },
            {
              name: "--target-id",
              description:
                "The IP OCID/Instance OCID associated with the backend server",
              args: { name: "target-id" },
            },
            {
              name: "--weight",
              description:
                "The network load balancing policy weight assigned to the server",
              args: { name: "integer" },
            },
            {
              name: "--is-drain",
              description:
                "Whether the network load balancer should drain this server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-backup",
              description:
                "Whether the network load balancer should treat this server as a backup unit",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-offline",
              description:
                "Whether the network load balancer should treat this server as offline",
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
          name: "delete",
          description:
            "Removes a backend server from a given network load balancer and backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend server",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description: "The name of the backend server to remove",
              args: { name: "backend-name" },
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
          name: "get",
          description:
            "Retrieves the configuration information for the specified backend server",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set that includes the backend server",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description: "The name of the backend server to retrieve",
              args: { name: "backend-name" },
              isRequired: true,
            },
            optIfNoneMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the configuration of a backend server within the specified backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend server",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description: "The name of the backend server to update",
              args: { name: "backend-name" },
              isRequired: true,
            },
            {
              name: "--weight",
              description:
                "The load balancing policy weight assigned to the server",
              args: { name: "integer" },
            },
            {
              name: "--is-backup",
              description:
                "Whether the network load balancer should treat this server as a backup unit",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-drain",
              description:
                "Whether the network load balancer should drain this server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-offline",
              description:
                "Whether the network load balancer should treat this server as offline",
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
          name: "list",
          description:
            "Lists the backend servers for a given network load balancer and backend set",
          options: [
            optNetworkLoadBalancerId,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend servers",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optIfNoneMatch,
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
      name: "listener-protocols",
      description:
        "Protocols supported for the listener of the network load balancer",
      subcommands: [
        {
          name: "list",
          description:
            "This API has been deprecated so it won't return the updated list of supported protocls",
          options: [
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
      name: "network-load-balancer-health",
      description:
        "The health status details for the specified network load balancer",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the health status for the specified network load balancer",
          options: [optNetworkLoadBalancerId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the summary health statuses for all network load balancers in the specified compartment",
          options: [
            optCompartmentId,
            optSortOrder,
            optSortBy,
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
};

export default completionSpec;
