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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLoadBalancerId: Fig.Option = {
  name: "--load-balancer-id",
  description: "The OCID of the specified load balancer",
  args: { name: "load-balancer-id" },
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
const optLoadBalancerId2: Fig.Option = {
  name: "--load-balancer-id",
  description: "The OCID of the associated load balancer",
  args: { name: "load-balancer-id" },
  isRequired: true,
};
const optSslCertificateIds: Fig.Option = {
  name: "--ssl-certificate-ids",
  description:
    "A list of OCI Certificates OCIDs to be used by this Load Balancer",
  args: { name: "json" },
};
const optSslCertificateName: Fig.Option = {
  name: "--ssl-certificate-name",
  description: "A friendly name for the certificate bundle",
  args: { name: "ssl-certificate-name" },
};
const optSslVerifyDepth: Fig.Option = {
  name: "--ssl-verify-depth",
  description: "The maximum depth for peer certificate chain verification",
  args: { name: "integer" },
};
const optSslVerifyPeerCertificate: Fig.Option = {
  name: "--ssl-verify-peer-certificate",
  description:
    "Whether the load balancer listener should verify peer certificates",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLoadBalancerId3: Fig.Option = {
  name: "--load-balancer-id",
  description:
    "The OCID of the load balancer associated with the backend set and server",
  args: { name: "load-balancer-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "lb",
  description: "Load Balancing",
  subcommands: [
    {
      name: "load-balancer",
      description: "The properties that define a load balancer",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a load balancer into a different compartment within the same tenancy",
          options: [
            {
              name: "--load-balancer-id",
              description: "The OCID of the load balancer to move",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the load balancer to",
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
            "Creates a new load balancer in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the load balancer",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--shape-name",
              description:
                "A template that determines the total pre-provisioned bandwidth (ingress plus egress)",
              args: { name: "shape-name" },
              isRequired: true,
            },
            {
              name: "--subnet-ids",
              description: "An array of subnet OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--shape-details",
              description:
                "The configuration details to create load balancer using Flexible shape",
              args: { name: "json" },
            },
            {
              name: "--is-private",
              description:
                "Whether the load balancer has a VCN-local (private) IP address",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-delete-protection-enabled",
              description:
                "Whether or not the load balancer has delete protection enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ip-mode",
              description:
                "Whether the load balancer has an IPv4 or IPv6 IP address",
              args: { suggestions: ["IPV4", "IPV6"] },
            },
            {
              name: "--ipv6-subnet-cidr",
              description: "Applies to IPV6 LB creation only",
              args: { name: "ipv6-subnet-cidr" },
            },
            {
              name: "--is-request-id-enabled",
              description:
                "Whether or not the load balancer has the Request Id feature enabled for HTTP listeners",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--request-id-header",
              description:
                "If isRequestIdEnabled is true then this field contains the name of the header field that contains the unique",
              args: { name: "request-id-header" },
            },
            {
              name: "--reserved-ips",
              description: "An array of reserved Ips",
              args: { name: "json" },
            },
            {
              name: "--listeners",
              description:
                "This option is a JSON dictionary of type dict(str, ListenerDetails)",
              args: { name: "json" },
            },
            {
              name: "--hostnames",
              description:
                "This option is a JSON dictionary of type dict(str, HostnameDetails)",
              args: { name: "json" },
            },
            {
              name: "--backend-sets",
              description:
                "This option is a JSON dictionary of type dict(str, BackendSetDetails)",
              args: { name: "json" },
            },
            {
              name: "--certificates",
              description:
                "This option is a JSON dictionary of type dict(str, CertificateDetails)",
              args: { name: "json" },
            },
            {
              name: "--ssl-cipher-suites",
              description:
                "This option is a JSON dictionary of type dict(str, SSLCipherSuiteDetails)",
              args: { name: "json" },
            },
            {
              name: "--path-route-sets",
              description:
                "This option is a JSON dictionary of type dict(str, PathRouteSetDetails)",
              args: { name: "json" },
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
              description: "Extended Defined tags for ZPR for this resource",
              args: { name: "json" },
            },
            {
              name: "--rule-sets",
              description:
                "This option is a JSON dictionary of type dict(str, RuleSetDetails)",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--nsg-ids",
              description:
                "The array of NSG OCIDs to be used by this Load Balancer",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Stops a load balancer and removes it from service",
          options: [
            {
              name: "--load-balancer-id",
              description: "The OCID of the load balancer to delete",
              args: { name: "load-balancer-id" },
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
            "Gets the specified load balancer's configuration information",
          options: [
            {
              name: "--load-balancer-id",
              description: "The OCID of the load balancer to retrieve",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all load balancers in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the load balancers to list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--detail",
              description: "The level of detail to return for each result",
              args: { name: "detail" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "FAILED",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
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
          description: "Updates a load balancer's configuration",
          options: [
            {
              name: "--load-balancer-id",
              description: "The OCID of the load balancer to update",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly display name for the load balancer",
              args: { name: "display-name" },
            },
            {
              name: "--ip-mode",
              description:
                "Whether the load balancer has an IPv4 or IPv6 IP address",
              args: { suggestions: ["IPV4", "IPV6"] },
            },
            {
              name: "--ipv6-subnet-cidr",
              description:
                "Used to disambiguate which subnet prefix should be used to create an IPv6 LB",
              args: { name: "ipv6-subnet-cidr" },
            },
            {
              name: "--reserved-ips",
              description: "An array of reserved Ips",
              args: { name: "json" },
            },
            {
              name: "--is-delete-protection-enabled",
              description:
                "Whether or not the load balancer has delete protection enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-request-id-enabled",
              description:
                "Whether or not the load balancer has the Request Id feature enabled for HTTP listeners",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--request-id-header",
              description:
                "If isRequestIdEnabled is true then this field contains the name of the header field that contains the unique",
              args: { name: "request-id-header" },
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
              description: "Extended Defined tags for ZPR for this resource",
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
          name: "update-load-balancer-shape",
          description: "Update the shape of a load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer whose shape will be updated",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--shape-name",
              description: "The new shape name for the load balancer",
              args: { name: "shape-name" },
              isRequired: true,
            },
            {
              name: "--shape-details",
              description:
                "The configuration details to update load balancer to a different profile",
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
      name: "certificate",
      description: "The configuration details of a certificate bundle",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an asynchronous request to add an SSL certificate",
          options: [
            {
              name: "--certificate-name",
              description: "A friendly name for the certificate bundle",
              args: { name: "certificate-name" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer on which to add the certificate bundle",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--passphrase",
              description: "A passphrase for encrypted private keys",
              args: { name: "passphrase" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ca-certificate-file",
              description:
                "The Certificate Authority certificate, or any interim certificate",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--private-key-file",
              description:
                "The SSL private key for your certificate, in PEM format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--public-certificate-file",
              description:
                "The public certificate, in PEM format, that you received from your SSL certificate provider",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an SSL certificate bundle from a load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the certificate bundle to be deleted",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--certificate-name",
              description: "The name of the certificate bundle to delete",
              args: { name: "certificate-name" },
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
          name: "list",
          description:
            "Lists all SSL certificates bundles associated with a given load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the certificate bundles to be listed",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optIfMatch,
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listener",
      description: "The listener's configuration",
      subcommands: [
        {
          name: "create",
          description: "Adds a listener to a load balancer",
          options: [
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
              args: { name: "protocol" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "A friendly name for the listener",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer on which to add a listener",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--hostname-names",
              description: "An array of hostname resource names",
              args: { name: "json" },
            },
            {
              name: "--path-route-set-name",
              description: "Deprecated",
              args: { name: "path-route-set-name" },
              deprecated: true,
            },
            {
              name: "--routing-policy-name",
              description:
                "The name of the routing policy applied to this listener's traffic",
              args: { name: "routing-policy-name" },
            },
            {
              name: "--rule-set-names",
              description:
                "The names of the rule sets to apply to the listener",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optSslCertificateName,
            optSslCertificateIds,
            optSslVerifyDepth,
            optSslVerifyPeerCertificate,
            {
              name: "--connection-configuration-backend-tcp-proxy-protocol-version",
              description:
                "Connection Configuration Backend TCP Proxy Protocol Version",
              args: { name: "integer" },
            },
            {
              name: "--protocols",
              description: "List of protocols to be configured for listener",
              args: { name: "json" },
            },
            {
              name: "--cipher-suite-name",
              description: "Cipher suite name for listener",
              args: { name: "cipher-suite-name" },
            },
            {
              name: "--server-order-preference",
              description: "Server order preference for listener",
              args: { name: "server-order-preference" },
            },
            {
              name: "--connection-configuration-idle-timeout",
              description:
                "The maximum idle time, in seconds, allowed between two successive receive or two successive send operations",
              args: { name: "integer" },
            },
            {
              name: "--ssl-session-resumption",
              description:
                "Whether the load balancer listener should resume an encrypted session by reusing the cryptographic parameters",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a listener from a load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the listener to delete",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
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
          name: "update",
          description: "Updates a listener for a given load balancer",
          options: [
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
              args: { name: "protocol" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the listener to update",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--listener-name",
              description: "The name of the listener to update",
              args: { name: "listener-name" },
              isRequired: true,
            },
            {
              name: "--hostname-names",
              description: "An array of hostname resource names",
              args: { name: "json" },
            },
            {
              name: "--path-route-set-name",
              description: "Deprecated",
              args: { name: "path-route-set-name" },
              deprecated: true,
            },
            {
              name: "--routing-policy-name",
              description:
                "The name of the routing policy applied to this listener's traffic",
              args: { name: "routing-policy-name" },
            },
            {
              name: "--rule-set-names",
              description:
                "The names of the rule sets to apply to the listener",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optSslCertificateName,
            optSslCertificateIds,
            optSslVerifyDepth,
            optSslVerifyPeerCertificate,
            {
              name: "--connection-configuration-backend-tcp-proxy-protocol-version",
              description:
                "Connection Configuration Backend TCP Proxy Protocol Version",
              args: { name: "integer" },
            },
            {
              name: "--protocols",
              description: "List of protocols to be configured for listener",
              args: { name: "json" },
            },
            {
              name: "--cipher-suite-name",
              description: "Cipher suite name for listener",
              args: { name: "cipher-suite-name" },
            },
            {
              name: "--server-order-preference",
              description: "Server order preference for listener",
              args: { name: "server-order-preference" },
            },
            {
              name: "--connection-configuration-idle-timeout",
              description:
                "The maximum idle time, in seconds, allowed between two successive receive or two successive send operations",
              args: { name: "integer" },
            },
            {
              name: "--ssl-session-resumption",
              description:
                "Whether the load balancer listener should resume an encrypted session by reusing the cryptographic parameters",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "routing-policy",
      description:
        "A named ordered list of routing rules that is applied to a listener",
      subcommands: [
        {
          name: "create",
          description: "Adds a routing policy to a load balancer",
          options: [
            {
              name: "--name",
              description: "The name for this list of routing rules",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--condition-language-version",
              description:
                "The version of the language in which condition of rules are composed",
              args: { suggestions: ["V1"] },
              isRequired: true,
            },
            {
              name: "--rules",
              description: "The list of routing rules",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer to add the routing policy rule list to",
              args: { name: "load-balancer-id" },
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
            "Deletes a routing policy from the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the routing policy to delete",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--routing-policy-name",
              description: "The name of the routing policy to delete",
              args: { name: "routing-policy-name" },
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
          description: "Gets the specified routing policy",
          options: [
            optLoadBalancerId,
            {
              name: "--routing-policy-name",
              description: "The name of the routing policy to retrieve",
              args: { name: "routing-policy-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all routing policies associated with the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the routing policies",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optIfMatch,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Overwrites an existing routing policy on the specified load balancer",
          options: [
            {
              name: "--rules",
              description: "The list of routing rules",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the routing policy to update",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--routing-policy-name",
              description: "The name of the routing policy to update",
              args: { name: "routing-policy-name" },
              isRequired: true,
            },
            {
              name: "--condition-language-version",
              description:
                "The version of the language in which condition of rules are composed",
              args: { suggestions: ["V1"] },
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
      name: "work-request",
      description:
        "Many of the API requests you use to create and configure load balancing do not take effect immediately",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [
            {
              name: "--work-request-id",
              description: "The OCID of the work request to retrieve",
              args: { name: "work-request-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the work requests for a given load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the work requests to retrieve",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
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
      name: "backend-set-health",
      description: "The health status details for a backend set",
      subcommands: [
        {
          name: "get",
          description: "Gets the health status for the specified backend set",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the backend set health status to be retrieved",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set to retrieve the health status for",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optIfMatch,
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
            "Gets the health check policy information for a given load balancer and backend set",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the health check policy to be retrieved",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the health check policy to be retrieved",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the health check policy for a given load balancer and backend set",
          options: [
            {
              name: "--protocol",
              description:
                "The protocol the health check must use; either HTTP or TCP",
              args: { name: "protocol" },
              isRequired: true,
            },
            {
              name: "--port",
              description:
                "The backend server port against which to run the health check",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--return-code",
              description:
                "The status code a healthy backend server should return",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--retries",
              description:
                'The number of retries to attempt before a backend server is considered "unhealthy"',
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--timeout-in-millis",
              description:
                "The maximum time, in milliseconds, to wait for a reply to a health check",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--interval-in-millis",
              description:
                "The interval between health checks, in milliseconds",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--response-body-regex",
              description:
                "A regular expression for parsing the response body from the backend server",
              args: { name: "response-body-regex" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the health check policy to be updated",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the health check policy to be retrieved",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--url-path",
              description: "The path against which to run the health check",
              args: { name: "url-path" },
            },
            {
              name: "--is-dynamic-backend-weight-enabled",
              description:
                "You can enable dynamic backend weights for HTTP health checks",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--default-weight",
              description:
                "You can configure this fallback backend weight when dynamic backend weights are enabled and the backend's",
              args: { name: "integer" },
            },
            {
              name: "--is-force-plain-text",
              description:
                "Specifies if health checks should always be done using plain text instead of depending on whether or not",
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
      name: "path-route-set",
      description: "A named set of path route rules",
      subcommands: [
        {
          name: "create",
          description: "Adds a path route set to a load balancer",
          options: [
            {
              name: "--name",
              description: "The name for this set of path route rules",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path-routes",
              description: "The set of path route rules",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer to add the path route set to",
              args: { name: "load-balancer-id" },
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
            "Deletes a path route set from the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the path route set to delete",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--path-route-set-name",
              description: "The name of the path route set to delete",
              args: { name: "path-route-set-name" },
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
            "Gets the specified path route set's configuration information",
          options: [
            optLoadBalancerId,
            {
              name: "--path-route-set-name",
              description: "The name of the path route set to retrieve",
              args: { name: "path-route-set-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all path route sets associated with the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the path route sets to retrieve",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optIfMatch,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Overwrites an existing path route set on the specified load balancer",
          options: [
            {
              name: "--path-routes",
              description: "The set of path route rules",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the path route set to update",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--path-route-set-name",
              description: "The name of the path route set to update",
              args: { name: "path-route-set-name" },
              isRequired: true,
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
      name: "ssl-cipher-suite",
      description: "The configuration details of an SSL cipher suite",
      subcommands: [
        {
          name: "create",
          description: "Creates a custom SSL cipher suite",
          options: [
            {
              name: "--ciphers",
              description:
                "A list of SSL ciphers the load balancer must support for HTTPS or SSL connections",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "A friendly name for the SSL cipher suite",
              args: { name: "name" },
              isRequired: true,
            },
            optLoadBalancerId2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an SSL cipher suite from a load balancer",
          options: [
            optLoadBalancerId2,
            {
              name: "--name",
              description: "The name of the SSL cipher suite to delete",
              args: { name: "name" },
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
            "Gets the specified SSL cipher suite's configuration information",
          options: [
            optLoadBalancerId2,
            {
              name: "--name",
              description: "The name of the SSL cipher suite to retrieve",
              args: { name: "name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all SSL cipher suites associated with the specified load balancer",
          options: [optLoadBalancerId2, optIfMatch, optAll, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates an existing SSL cipher suite for the specified load balancer",
          options: [
            {
              name: "--ciphers",
              description:
                "A list of SSL ciphers the load balancer must support for HTTPS or SSL connections",
              args: { name: "json" },
              isRequired: true,
            },
            optLoadBalancerId2,
            {
              name: "--name",
              description: "The name of the SSL cipher suite to update",
              args: { name: "name" },
              isRequired: true,
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
      name: "listener-rule",
      description:
        "The attributes of a rule associated with the specified listener",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all of the rules from all of the rule sets associated with the specified listener",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the listener",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--listener-name",
              description:
                "The name of the listener the rules are associated with",
              args: { name: "listener-name" },
              isRequired: true,
            },
            optIfMatch,
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "load-balancer-health",
      description: "The health status details for the specified load balancer",
      subcommands: [
        {
          name: "get",
          description: "Gets the health status for the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer to return health status for",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the summary health statuses for all load balancers in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the load balancers to return health status information for",
              args: { name: "compartment-id" },
              isRequired: true,
            },
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
      name: "hostname",
      description:
        "A hostname resource associated with a load balancer for use by one or more listeners",
      subcommands: [
        {
          name: "create",
          description:
            "Adds a hostname resource to the specified load balancer",
          options: [
            {
              name: "--name",
              description: "A friendly name for the hostname resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description: "A virtual hostname",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer to add the hostname to",
              args: { name: "load-balancer-id" },
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
            "Deletes a hostname resource from the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the hostname to delete",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the hostname resource to delete",
              args: { name: "name" },
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
            "Gets the specified hostname resource's configuration information",
          options: [
            optLoadBalancerId,
            {
              name: "--name",
              description: "The name of the hostname resource to retrieve",
              args: { name: "name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all hostname resources associated with the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the hostnames to retrieve",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optIfMatch,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Overwrites an existing hostname resource on the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the virtual hostname to update",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the hostname resource to update",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description: "The virtual hostname to update",
              args: { name: "hostname" },
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
      name: "backend-health",
      description:
        "The health status of the specified backend server as reported by the primary and standby load balancers",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the current health status of the specified backend server",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the backend server health status to be retrieved",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend server to retrieve the health status for",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description:
                "The IP address and port of the backend server to retrieve the health status for",
              args: { name: "backend-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "rule-set",
      description: "A named set of rules associated with a load balancer",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new rule set associated with the specified load balancer",
          options: [
            optLoadBalancerId,
            {
              name: "--name",
              description: "The name for this set of rules",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--items",
              description: "An array of rules that compose the rule set",
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
          name: "delete",
          description: "Deletes a rule set from the specified load balancer",
          options: [
            optLoadBalancerId,
            {
              name: "--rule-set-name",
              description: "The name of the rule set to delete",
              args: { name: "rule-set-name" },
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
          description: "Gets the specified set of rules",
          options: [
            optLoadBalancerId,
            {
              name: "--rule-set-name",
              description: "The name of the rule set to retrieve",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all rule sets associated with the specified load balancer",
          options: [optLoadBalancerId, optIfMatch, optAll, optFromJson],
        },
        {
          name: "update",
          description:
            "Overwrites an existing set of rules on the specified load balancer",
          options: [
            optLoadBalancerId,
            {
              name: "--rule-set-name",
              description: "The name of the rule set to update",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
            {
              name: "--items",
              description: "An array of rules that compose the rule set",
              args: { name: "json" },
              isRequired: true,
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
      description: "The configuration of a load balancer backend set",
      subcommands: [
        {
          name: "create",
          description: "Adds a backend set to a load balancer",
          options: [
            {
              name: "--name",
              description: "A friendly name for the backend set",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--policy",
              description: "The load balancer policy for the backend set",
              args: { name: "policy" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer on which to add a backend set",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backends",
              description:
                "This option is a JSON list with items of type BackendDetails",
              args: { name: "json" },
            },
            {
              name: "--backend-max-connections",
              description:
                "The maximum number of simultaneous connections the load balancer can make to any backend in the backend set",
              args: { name: "integer" },
            },
            {
              name: "--lb-cookie-session-persistence-configuration",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--health-checker-interval-in-ms",
              description:
                "The interval between health checks, in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-port",
              description:
                "The backend server port against which to run the health check",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-protocol",
              description:
                "The protocol the health check must use; either HTTP or TCP",
              args: { name: "health-checker-protocol" },
              isRequired: true,
            },
            {
              name: "--health-checker-response-body-regex",
              description:
                "A regular expression for parsing the response body from the backend server",
              args: { name: "health-checker-response-body-regex" },
            },
            {
              name: "--health-checker-retries",
              description:
                'The number of retries to attempt before a backend server is considered "unhealthy"',
              args: { name: "integer" },
            },
            {
              name: "--health-checker-return-code",
              description:
                "The status code a healthy backend server should return",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-timeout-in-ms",
              description:
                "The maximum time, in milliseconds, to wait for a reply to a health check",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-url-path",
              description: "The path against which to run the health check",
              args: { name: "health-checker-url-path" },
            },
            {
              name: "--session-persistence-cookie-name",
              description:
                "The name of the cookie used to detect a session initiated by the backend server",
              args: { name: "session-persistence-cookie-name" },
            },
            {
              name: "--session-persistence-disable-fallback",
              description:
                "Whether the load balancer is prevented from directing traffic from a persistent session client to a different",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSslCertificateName,
            optSslCertificateIds,
            optSslVerifyDepth,
            optSslVerifyPeerCertificate,
            {
              name: "--protocols",
              description: "A list of protocols to be configured for backend",
              args: { name: "json" },
            },
            {
              name: "--cipher-suite-name",
              description: "Cipher suite name for backend",
              args: { name: "cipher-suite-name" },
            },
            {
              name: "--server-order-preference",
              description: "Server order preference for backend",
              args: { name: "server-order-preference" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified backend set",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the backend set",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
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
            "Gets the specified backend set's configuration information",
          options: [
            optLoadBalancerId,
            {
              name: "--backend-set-name",
              description: "The name of the backend set to retrieve",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all backend sets associated with a given load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the backend sets to retrieve",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optIfMatch,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a backend set",
          options: [
            {
              name: "--policy",
              description: "The load balancer policy for the backend set",
              args: { name: "policy" },
              isRequired: true,
            },
            { name: "--backends", args: { name: "json" }, isRequired: true },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the backend set",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description: "The name of the backend set to update",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-max-connections",
              description:
                "The maximum number of simultaneous connections the load balancer can make to any backend in the backend set",
              args: { name: "integer" },
            },
            {
              name: "--lb-cookie-session-persistence-configuration",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--health-checker-interval-in-ms",
              description:
                "The interval between health checks, in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-port",
              description:
                "The backend server port against which to run the health check",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-protocol",
              description:
                "The protocol the health check must use; either HTTP or TCP",
              args: { name: "health-checker-protocol" },
              isRequired: true,
            },
            {
              name: "--health-checker-response-body-regex",
              description:
                "A regular expression for parsing the response body from the backend server",
              args: { name: "health-checker-response-body-regex" },
            },
            {
              name: "--health-checker-retries",
              description:
                'The number of retries to attempt before a backend server is considered "unhealthy"',
              args: { name: "integer" },
            },
            {
              name: "--health-checker-return-code",
              description:
                "The status code a healthy backend server should return",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-timeout-in-ms",
              description:
                "The maximum time, in milliseconds, to wait for a reply to a health check",
              args: { name: "integer" },
            },
            {
              name: "--health-checker-url-path",
              description: "The path against which to run the health check",
              args: { name: "health-checker-url-path" },
            },
            {
              name: "--session-persistence-cookie-name",
              description:
                "The name of the cookie used to detect a session initiated by the backend server",
              args: { name: "session-persistence-cookie-name" },
            },
            {
              name: "--session-persistence-disable-fallback",
              description:
                "Whether the load balancer is prevented from directing traffic from a persistent session client to a different",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSslCertificateName,
            optSslCertificateIds,
            optSslVerifyDepth,
            optSslVerifyPeerCertificate,
            {
              name: "--protocols",
              description: "A list of protocols to be configured for backend",
              args: { name: "json" },
            },
            {
              name: "--cipher-suite-name",
              description: "Cipher suite name for backend",
              args: { name: "cipher-suite-name" },
            },
            {
              name: "--server-order-preference",
              description: "Server order preference for backend",
              args: { name: "server-order-preference" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "backend",
      description:
        "The configuration of a backend server that is a member of a load balancer backend set",
      subcommands: [
        {
          name: "create",
          description: "Adds a backend server to a backend set",
          options: [
            {
              name: "--ip-address",
              description: "The IP address of the backend server",
              args: { name: "ip-address" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "The communication port for the backend server",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the backend set and servers",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set to add the backend server to",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--weight",
              description:
                "The load balancing policy weight assigned to the server",
              args: { name: "integer" },
            },
            {
              name: "--max-connections",
              description:
                "The maximum number of simultaneous connections the load balancer can make to the backend",
              args: { name: "integer" },
            },
            {
              name: "--backup",
              description:
                "Whether the load balancer should treat this server as a backup unit",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--drain",
              description: "Whether the load balancer should drain this server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--offline",
              description:
                "Whether the load balancer should treat this server as offline",
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
            "Removes a backend server from a given load balancer and backend set",
          options: [
            optLoadBalancerId3,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend server",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description:
                "The IP address and port of the backend server to remove",
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
            "Gets the specified backend server's configuration information",
          options: [
            optLoadBalancerId3,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set that includes the backend server",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description:
                "The IP address and port of the backend server to retrieve",
              args: { name: "backend-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the backend servers for a given load balancer and backend set",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer associated with the backend set and servers",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend servers",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            optIfMatch,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the configuration of a backend server within the specified backend set",
          options: [
            {
              name: "--weight",
              description:
                "The load balancing policy weight assigned to the server",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--backup",
              description:
                "Whether the load balancer should treat this server as a backup unit",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--drain",
              description: "Whether the load balancer should drain this server",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--offline",
              description:
                "Whether the load balancer should treat this server as offline",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optLoadBalancerId3,
            {
              name: "--backend-set-name",
              description:
                "The name of the backend set associated with the backend server",
              args: { name: "backend-set-name" },
              isRequired: true,
            },
            {
              name: "--backend-name",
              description:
                "The IP address and port of the backend server to update",
              args: { name: "backend-name" },
              isRequired: true,
            },
            {
              name: "--max-connections",
              description:
                "The maximum number of simultaneous connections the load balancer can make to the backend",
              args: { name: "integer" },
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
      name: "policy",
      description:
        "A policy that determines how traffic is distributed among backend servers",
      subcommands: [
        {
          name: "list",
          description: "Lists the available load balancer policies",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the load balancer policies to list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
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
      name: "protocol",
      description:
        "A protocol that defines the type of traffic accepted by a listener",
      subcommands: [
        {
          name: "list",
          description: "Lists all supported traffic protocols",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the load balancer protocols to list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
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
      name: "shape",
      description:
        "A shape is a template that determines the total pre-provisioned bandwidth",
      subcommands: [
        {
          name: "list",
          description: "Lists the valid load balancer shapes",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the load balancer shapes to list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
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
      name: "nsg",
      subcommands: [
        {
          name: "update",
          description:
            "Updates the network security groups associated with the specified load balancer",
          options: [
            {
              name: "--load-balancer-id",
              description:
                "The OCID of the load balancer to update the NSGs for",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--nsg-ids",
              description:
                "The array of NSG OCIDs to be used by this Load Balancer",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
