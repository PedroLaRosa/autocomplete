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
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
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
const optType: Fig.Option = {
  name: "--type",
  description: "Type of the lock",
  args: { suggestions: ["FULL", "DELETE"] },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which the resource is created",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
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
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optApiId: Fig.Option = {
  name: "--api-id",
  description: "The ocid of the API",
  args: { name: "api-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ocid of the compartment in which to list resources",
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
const optLocks: Fig.Option = {
  name: "--locks",
  description: "Locks associated with this resource",
  args: { name: "json" },
};
const optMessage: Fig.Option = {
  name: "--message",
  description: "A message added by the creator of the lock",
  args: { name: "message" },
};
const optCertificateId: Fig.Option = {
  name: "--certificate-id",
  description: "The ocid of the certificate",
  args: { name: "certificate-id" },
  isRequired: true,
};
const optDeploymentId: Fig.Option = {
  name: "--deployment-id",
  description: "The ocid of the deployment",
  args: { name: "deployment-id" },
  isRequired: true,
};
const optGatewayId: Fig.Option = {
  name: "--gateway-id",
  description: "The ocid of the gateway",
  args: { name: "gateway-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the given lifecycle state",
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
};
const optSubscriberId: Fig.Option = {
  name: "--subscriber-id",
  description: "The ocid of the subscriber",
  args: { name: "subscriber-id" },
  isRequired: true,
};
const optUsagePlanId: Fig.Option = {
  name: "--usage-plan-id",
  description: "The ocid of the usage plan",
  args: { name: "usage-plan-id" },
  isRequired: true,
};
const optSdkId: Fig.Option = {
  name: "--sdk-id",
  description: "The ocid of the SDK",
  args: { name: "sdk-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ocid of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "FAILED", "DELETING", "DELETED"],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "api-gateway",
  description: "API Gateway",
  subcommands: [
    {
      name: "certificate",
      description:
        "A certificate contains information to be installed on a gateway to secure the traffic going through it",
      subcommands: [
        {
          name: "change-compartment",
          description: "Changes the certificate compartment",
          options: [
            optCertificateId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Certificate",
          options: [
            optCompartmentId,
            {
              name: "--private-key",
              description:
                "The private key associated with the certificate in pem format",
              args: { name: "private-key" },
              isRequired: true,
            },
            {
              name: "--certificate",
              description: "The data of the leaf certificate in pem format",
              args: { name: "certificate" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--intermediate-certificates",
              description:
                "The intermediate certificate data associated with the certificate in pem format",
              args: { name: "intermediate-certificates" },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--private-key-file",
              description:
                "Location of the file containing the private key associated with the certificate in pem format",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--certificate-file",
              description:
                "Location of the file containing the leaf certificate in pem format",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--intermediate-certificates-file",
              description:
                "Location of file containing the intermediate certificate data associated with the certificate in pem format",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the certificate with the given identifier",
          options: [
            optCertificateId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a certificate by identifier",
          options: [optCertificateId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of certificates",
          options: [
            optCompartmentId2,
            optDisplayName,
            optLifecycleState,
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
          description: "Updates a certificate with the given identifier",
          options: [
            optCertificateId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Certificate resource",
          options: [
            optCertificateId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a Certificate resource",
          options: [
            optCertificateId,
            optType,
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
      name: "api",
      description: "An API is simple container for an API Specification",
      subcommands: [
        {
          name: "change-compartment",
          description: "Changes the API compartment",
          options: [
            optApiId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new API",
          options: [
            optCompartmentId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--content",
              description: "API Specification content in json or yaml format",
              args: { name: "content" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the API with the given identifier",
          options: [
            optApiId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets an API by identifier",
          options: [optApiId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of APIs",
          options: [
            optCompartmentId2,
            optDisplayName,
            optLifecycleState,
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
          description: "Updates the API with the given identifier",
          options: [
            optApiId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--content",
              description: "API Specification content in json or yaml format",
              args: { name: "content" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validations",
          description: "The result of validations conducted on the API",
          subcommands: [
            {
              name: "get",
              description: "Gets the API validation results",
              options: [optApiId, optIfMatch, optFromJson],
            },
          ],
        },
        {
          name: "content",
          description: "The raw API content",
          subcommands: [
            {
              name: "get",
              description: "Get the raw API content",
              options: [
                optApiId,
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                optIfMatch,
                {
                  name: "--range",
                  description:
                    "The Range HTTP request header indicates the part of a document that the server should return",
                  args: { name: "range" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "deployment-specification",
          description: "API Deployment specification generated from API",
          subcommands: [
            {
              name: "get",
              description: "Gets an API Deployment specification by identifier",
              options: [optApiId, optIfMatch, optFromJson],
            },
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Api resource",
          options: [
            optApiId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a Api resource",
          options: [
            optApiId,
            optType,
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
      name: "sdk",
      description: "Information about the SDK",
      subcommands: [
        {
          name: "create",
          description: "Creates a new SDK",
          options: [
            {
              name: "--target-language",
              description:
                "The string representing the target programming language for generating the SDK",
              args: { name: "target-language" },
              isRequired: true,
            },
            {
              name: "--api-id",
              description: "The OCID of API resource",
              args: { name: "api-id" },
              isRequired: true,
            },
            optDisplayName,
            optLocks,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--parameters",
              description:
                "Additional optional configurations that can be passed to generate SDK Api",
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
          description: "Deletes provided SDK",
          options: [
            optSdkId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Return object store downloadable URL and metadata",
          options: [optSdkId, optFromJson],
        },
        {
          name: "list",
          description: "Returns list of generated SDKs",
          options: [
            {
              name: "--sdk-id",
              description: "The ocid of the SDK",
              args: { name: "sdk-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--api-id",
              description: "The ocid of the API",
              args: { name: "api-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the SDK with the given identifier",
          options: [
            optSdkId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Sdk resource",
          options: [
            optSdkId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a Sdk resource",
          options: [
            optSdkId,
            optType,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sdk-language-type",
      description: "SDK target language details",
      subcommands: [
        {
          name: "list",
          description:
            "Lists programming languages in which SDK can be generated",
          options: [
            optCompartmentId2,
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
      ],
    },
    {
      name: "deployment",
      description: "A deployment deploys an API on a gateway",
      subcommands: [
        {
          name: "change-compartment",
          description: "Changes the deployment compartment",
          options: [
            optDeploymentId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new deployment",
          options: [
            {
              name: "--gateway-id",
              description: "The OCID of the resource",
              args: { name: "gateway-id" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--path-prefix",
              description:
                "A path on which to deploy all routes contained in the API deployment specification",
              args: { name: "path-prefix" },
              isRequired: true,
            },
            {
              name: "--specification",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optLocks,
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
          description: "Deletes the deployment with the given identifier",
          options: [
            optDeploymentId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a deployment by identifier",
          options: [optDeploymentId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the deployment with the given identifier",
          options: [
            optDeploymentId,
            optDisplayName,
            { name: "--specification", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of deployments",
          options: [
            optCompartmentId2,
            {
              name: "--gateway-id",
              description: "Filter deployments by the gateway ocid",
              args: { name: "gateway-id" },
            },
            optDisplayName,
            optLifecycleState,
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
          name: "add-lock",
          description: "Adds a lock to a Deployment resource",
          options: [
            optDeploymentId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a Deployment resource",
          options: [
            optDeploymentId,
            optType,
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
      name: "gateway",
      description:
        "A gateway is a virtual network appliance in a regional subnet",
      subcommands: [
        {
          name: "change-compartment",
          description: "Changes the gateway compartment",
          options: [
            optGatewayId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new gateway",
          options: [
            optCompartmentId,
            {
              name: "--endpoint-type",
              description: "Gateway endpoint type",
              args: { name: "endpoint-type" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet in which related resources are created",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--network-security-group-ids",
              description:
                "An array of Network Security Groups OCIDs associated with this API Gateway",
              args: { name: "json" },
            },
            {
              name: "--certificate-id",
              description: "The OCID of the resource which can be empty string",
              args: { name: "certificate-id" },
            },
            { name: "--response-cache-details", args: { name: "json" } },
            optLocks,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--ca-bundles",
              description:
                "An array of CA bundles that should be used on the Gateway for TLS validation",
              args: { name: "json" },
            },
            {
              name: "--ip-mode",
              description:
                "Determines whether the gateway has an IPv4 or IPv6 address assigned to it, or both",
              args: { name: "ip-mode" },
            },
            { name: "--ipv6-address-configuration", args: { name: "json" } },
            { name: "--ipv4-address-configuration", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the gateway with the given identifier",
          options: [
            optGatewayId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a gateway by identifier",
          options: [optGatewayId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the gateway with the given identifier",
          options: [
            optGatewayId,
            optDisplayName,
            {
              name: "--network-security-group-ids",
              description:
                "An array of Network Security Groups OCIDs associated with this API Gateway",
              args: { name: "json" },
            },
            {
              name: "--certificate-id",
              description: "The OCID of the resource which can be empty string",
              args: { name: "certificate-id" },
            },
            { name: "--response-cache-details", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--ca-bundles",
              description:
                "An array of CA bundles that should be used on the Gateway for TLS validation",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of gateways",
          options: [
            optCompartmentId2,
            {
              name: "--certificate-id",
              description: "Filter gateways by the certificate ocid",
              args: { name: "certificate-id" },
            },
            optDisplayName,
            optLifecycleState,
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
          name: "add-lock",
          description: "Adds a lock to a Gateway resource",
          options: [
            optGatewayId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a Gateway resource",
          options: [
            optGatewayId,
            optType,
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
      name: "subscriber",
      description:
        "A subscriber, which encapsulates a number of clients and usage plans that they are subscribed to",
      subcommands: [
        {
          name: "change-compartment",
          description: "Changes the subscriber compartment",
          options: [
            optSubscriberId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new subscriber",
          options: [
            optCompartmentId,
            {
              name: "--clients",
              description: "The clients belonging to this subscriber",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--usage-plans",
              description: "An array of OCIDs of usage plan resources",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optLocks,
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
          description: "Deletes the subscriber with the given identifier",
          options: [
            optSubscriberId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a subscriber by identifier",
          options: [optSubscriberId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of subscribers",
          options: [
            optCompartmentId2,
            optDisplayName,
            optLifecycleState,
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
          description: "Updates the subscriber with the given identifier",
          options: [
            optSubscriberId,
            optDisplayName,
            {
              name: "--clients",
              description: "The clients belonging to the subscriber",
              args: { name: "json" },
            },
            {
              name: "--usage-plans",
              description: "An array of OCIDs of usage plan resources",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Subscriber resource",
          options: [
            optSubscriberId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a Subscriber resource",
          options: [
            optSubscriberId,
            optType,
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
      name: "usage-plan",
      description:
        "A usage plan controls access of subscribers to deployments, controlling rate limits and quotas for usage",
      subcommands: [
        {
          name: "change-compartment",
          description: "Changes the usage plan compartment",
          options: [
            optUsagePlanId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new usage plan",
          options: [
            {
              name: "--entitlements",
              description:
                "A collection of entitlements to assign to the newly created usage plan",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId,
            optDisplayName,
            optLocks,
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
          description: "Deletes the usage plan with the given identifier",
          options: [
            optUsagePlanId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a usage plan by identifier",
          options: [optUsagePlanId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of usage plans",
          options: [
            optCompartmentId2,
            optDisplayName,
            optLifecycleState,
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
          description: "Updates the usage plan with the given identifier",
          options: [
            optUsagePlanId,
            optDisplayName,
            {
              name: "--entitlements",
              description:
                "A collection of entitlements to update the current usage plan with",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a UsagePlan resource",
          options: [
            optUsagePlanId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a UsagePlan resource",
          options: [
            optUsagePlanId,
            optType,
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
      name: "work-request-log",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
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
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
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
      name: "work-request",
      description: "A description of the work request status",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels the work request",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description:
            "Gets the status of the work request with the given identifier",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--resource-id",
              description: "Filter work requests by the resource ocid",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
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
