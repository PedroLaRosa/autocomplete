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
      "WAITING",
      "NEEDS_ATTENTION",
      "FAILED",
      "SUCCEEDED",
    ],
  },
  isRepeatable: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A short description of the resource",
  args: { name: "description" },
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
const optIotDomainId: Fig.Option = {
  name: "--iot-domain-id",
  description: "The OCID of the IoT domain",
  args: { name: "iot-domain-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "Specifies sort order to use, either ASC (ascending) or DESC (descending)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optIotFlowRuntimeId: Fig.Option = {
  name: "--iot-flow-runtime-id",
  description: "The OCID of an IoT flow runtime",
  args: { name: "iot-flow-runtime-id" },
  isRequired: true,
};
const optDigitalTwinInstanceId: Fig.Option = {
  name: "--digital-twin-instance-id",
  description: "The OCID of digital twin instance",
  args: { name: "digital-twin-instance-id" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "Filter resources whose display name matches the specified value",
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
const optId: Fig.Option = {
  name: "--id",
  description: "Filter resources by OCID",
  args: { name: "id" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment corresponding to the resource",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'For list pagination: The value of the opc-next-page response header from the previous "List" call',
  args: { name: "page" },
};
const optIotDomainGroupId: Fig.Option = {
  name: "--iot-domain-group-id",
  description: "The OCID of an IoT Domain Group",
  args: { name: "iot-domain-group-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDigitalTwinModelId: Fig.Option = {
  name: "--digital-twin-model-id",
  description: "The OCID of digital twin model",
  args: { name: "digital-twin-model-id" },
  isRequired: true,
};
const optIotDomainId2: Fig.Option = {
  name: "--iot-domain-id",
  description: "The OCID of the IoT domain in which to list IoT resources",
  args: { name: "iot-domain-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "Filter resources whose lifecycleState matches the specified value",
  args: { suggestions: ["ACTIVE", "DELETED"] },
};
const optPage2: Fig.Option = {
  name: "--page",
  description: "Page representing the requested page of items",
  args: { name: "page" },
};
const optDigitalTwinAdapterId: Fig.Option = {
  name: "--digital-twin-adapter-id",
  description: "The OCID of the digital twin adapter",
  args: { name: "digital-twin-adapter-id" },
  isRequired: true,
};
const optDigitalTwinModelId2: Fig.Option = {
  name: "--digital-twin-model-id",
  description: "The OCID of the digital twin model",
  args: { name: "digital-twin-model-id" },
};
const optDigitalTwinModelSpecUri: Fig.Option = {
  name: "--digital-twin-model-spec-uri",
  description: "The URI of the digital twin model specification",
  args: { name: "digital-twin-model-spec-uri" },
};
const optDigitalTwinRelationshipId: Fig.Option = {
  name: "--digital-twin-relationship-id",
  description: "The OCID of digital twin relationship",
  args: { name: "digital-twin-relationship-id" },
  isRequired: true,
};
const optRequestDuration: Fig.Option = {
  name: "--request-duration",
  description: "Specified duration by which to send the request by",
  args: { name: "request-duration" },
};
const optRequestEndpoint: Fig.Option = {
  name: "--request-endpoint",
  description: "Device endpoint where request should be forwarded to",
  args: { name: "request-endpoint" },
  isRequired: true,
};
const optResponseDuration: Fig.Option = {
  name: "--response-duration",
  description: "Specified duration by which to receive the response by",
  args: { name: "response-duration" },
};
const optResponseEndpoint: Fig.Option = {
  name: "--response-endpoint",
  description: "Device endpoint from which response is expected to come",
  args: { name: "response-endpoint" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "iot",
  description: "Internet of Things",
  subcommands: [
    {
      name: "digital-twin-relationship",
      description:
        "A digital twin relationship represents an association between two digital twin instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a new digital twin relationship",
          options: [
            optIotDomainId,
            {
              name: "--content-path",
              description:
                "Its the name of the relationship that links two digital twin instances",
              args: { name: "content-path" },
              isRequired: true,
            },
            {
              name: "--source-digital-twin-instance-id",
              description: "The OCID of source digital twin instance",
              args: { name: "source-digital-twin-instance-id" },
              isRequired: true,
            },
            {
              name: "--target-digital-twin-instance-id",
              description: "The OCID of target digital twin instance",
              args: { name: "target-digital-twin-instance-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            {
              name: "--content",
              description:
                "The value(s) of the relationship properties defined in the source digital twin model",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the digital twin relationship identified by the specified OCID",
          options: [
            optDigitalTwinRelationshipId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the digital twin relationship identified by the specified OCID",
          options: [optDigitalTwinRelationshipId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of digital twin relationships within the specified IoT domain",
          options: [
            optIotDomainId2,
            optDisplayName2,
            {
              name: "--content-path",
              description:
                "Filters resources that match the content path of the digital twin relationship",
              args: { name: "content-path" },
            },
            {
              name: "--source-digital-twin-instance-id",
              description:
                "Filter resources that match the specified OCID of source digital twin instance",
              args: { name: "source-digital-twin-instance-id" },
            },
            {
              name: "--target-digital-twin-instance-id",
              description:
                "Filter resources that match the specified OCID of target digital twin instance",
              args: { name: "target-digital-twin-instance-id" },
            },
            optLifecycleState,
            optLimit,
            optPage2,
            optSortOrder,
            optSortBy,
            optId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of digital twin relationship identified by the specified OCID",
          options: [
            optDigitalTwinRelationshipId,
            optDisplayName,
            optDescription,
            {
              name: "--content",
              description:
                "The value(s) of the relationship properties defined in the source digital twin model",
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
      ],
    },
    {
      name: "digital-twin-model",
      description:
        "A digital twin model, defined using Digital Twins Definition Language",
      subcommands: [
        {
          name: "create",
          description: "Creates a new digital twin model",
          options: [
            optIotDomainId,
            {
              name: "--spec",
              description: "The specification of the digital twin model (DTDL)",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the digital twin model identified by the specified OCID",
          options: [
            optDigitalTwinModelId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the digital twin model identified by the specified OCID",
          options: [optDigitalTwinModelId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of digital twin models within the specified IoT domain",
          options: [
            optIotDomainId2,
            optId,
            optDisplayName2,
            {
              name: "--spec-uri-starts-with",
              description: "Filters resources by spec URI prefix",
              args: { name: "spec-uri-starts-with" },
            },
            optLimit,
            optPage2,
            optLifecycleState,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of the digital twin model identified by the specified OCID",
          options: [
            optDigitalTwinModelId,
            optDisplayName,
            optDescription,
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
          name: "get-spec",
          description:
            "Retrieves the spec of digital twin model identified by the specified OCID",
          options: [optDigitalTwinModelId, optFromJson],
        },
      ],
    },
    {
      name: "digital-twin-adapter",
      description:
        "The digital twin adapter maps incoming data from IoT device into the corresponding digital twin instance",
      subcommands: [
        {
          name: "create",
          description: "Creates a new digital twin adapter",
          options: [
            optIotDomainId,
            optDigitalTwinModelId2,
            optDigitalTwinModelSpecUri,
            optDisplayName,
            optDescription,
            { name: "--inbound-envelope", args: { name: "json" } },
            {
              name: "--inbound-routes",
              description: "List of inbound routes",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the digital twin adapter identified by the specified OCID",
          options: [
            optDigitalTwinAdapterId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the digital twin adapter identified by the specified OCID",
          options: [optDigitalTwinAdapterId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of digital twin adapters within the specified IoT domain",
          options: [
            optIotDomainId2,
            optId,
            {
              name: "--digital-twin-model-spec-uri",
              description:
                "Filter resources that match the specified URI (DTMI) of the digital twin model",
              args: { name: "digital-twin-model-spec-uri" },
            },
            {
              name: "--digital-twin-model-id",
              description:
                "Filter resources that match the specified OCID of the digital twin model",
              args: { name: "digital-twin-model-id" },
            },
            optDisplayName2,
            optLifecycleState,
            optLimit,
            optPage2,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of digital twin adapter identified by the specified OCID",
          options: [
            optDigitalTwinAdapterId,
            optDisplayName,
            optDescription,
            { name: "--inbound-envelope", args: { name: "json" } },
            {
              name: "--inbound-routes",
              description: "List of routes",
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
      ],
    },
    {
      name: "work-request",
      description:
        "An asynchronous work request helps monitor long-running operations",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists work requests in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--id",
              description: "The OCID of the asynchronous work request",
              args: { name: "id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only the resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-errors",
          description:
            "Lists errors associated with the specified work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-logs",
          description:
            "Lists the logs associated with the specified work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "digital-twin-instance",
      description:
        "A digital twin instance is a virtual representation of a physical IoT device within the IoT domain",
      subcommands: [
        {
          name: "create",
          description: "Creates a new digital twin instance",
          options: [
            optIotDomainId,
            {
              name: "--connectivity-type",
              description: "Connectivity type of the digital twin instance",
              args: { suggestions: ["DIRECT", "INDIRECT", "GATEWAY", "NONE"] },
            },
            {
              name: "--auth-id",
              description:
                "The OCID of the resource (like VaultSecret, ClientCertificate etc.,) used to authenticate the digital twin",
              args: { name: "auth-id" },
            },
            {
              name: "--external-key",
              description:
                "A unique identifier for the physical entity (typically an IoT device) represented by the digital twin",
              args: { name: "external-key" },
            },
            optDisplayName,
            optDescription,
            {
              name: "--digital-twin-adapter-id",
              description: "The OCID of the digital twin adapter",
              args: { name: "digital-twin-adapter-id" },
            },
            optDigitalTwinModelId2,
            optDigitalTwinModelSpecUri,
            {
              name: "--gateways",
              description:
                "An array of unique ids (OCIDs) of the IoT digital twin instances with connectivityType equals to GATEWAY",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the digital twin instance identified by the specified OCID",
          options: [
            optDigitalTwinInstanceId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the digital twin instance identified by the specified OCID",
          options: [optDigitalTwinInstanceId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of digital twin instances within the specified IoT domain",
          options: [
            optIotDomainId2,
            optDisplayName2,
            optLimit,
            optPage2,
            optLifecycleState,
            optSortOrder,
            optSortBy,
            {
              name: "--digital-twin-model-id",
              description:
                "Filter resources that match the specified OCID of the digital twin model",
              args: { name: "digital-twin-model-id" },
            },
            {
              name: "--digital-twin-model-spec-uri",
              description:
                "Filter resources that match the specified URI (DTMI) of the digital twin model",
              args: { name: "digital-twin-model-spec-uri" },
            },
            {
              name: "--connectivity-type",
              description:
                "Filter resources whose connectivityType matches the specified value",
              args: { suggestions: ["DIRECT", "INDIRECT", "GATEWAY", "NONE"] },
            },
            optId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of digital twin instance identified by the specified OCID",
          options: [
            optDigitalTwinInstanceId,
            {
              name: "--connectivity-type",
              description: "Connectivity type of the digital twin instance",
              args: { suggestions: ["DIRECT", "INDIRECT", "GATEWAY", "NONE"] },
            },
            {
              name: "--external-key",
              description:
                "A unique identifier for the physical entity (typically an IoT device) represented by the digital twin",
              args: { name: "external-key" },
            },
            optDisplayName,
            optDescription,
            {
              name: "--digital-twin-adapter-id",
              description: "The OCID of the digital twin adapter",
              args: { name: "digital-twin-adapter-id" },
            },
            optDigitalTwinModelId2,
            optDigitalTwinModelSpecUri,
            {
              name: "--gateways",
              description:
                "An array of unique ids (OCIDs) of the IoT digital twin instances with connectivityType equals to GATEWAY",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--auth-id",
              description: "The OCID of the authentication resource",
              args: { name: "auth-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "invoke-raw-binary-command",
          description:
            "Invokes the raw command on the specified digital twin instance",
          options: [
            optDigitalTwinInstanceId,
            optRequestEndpoint,
            optRequestDuration,
            optResponseDuration,
            optResponseEndpoint,
            {
              name: "--request-data-content-type",
              description:
                "Mime content type of data encoded using base64, default is application/octet-stream",
              args: { name: "request-data-content-type" },
            },
            {
              name: "--request-data",
              description: "Base 64 encoded request data",
              args: { name: "request-data" },
            },
            optFromJson,
          ],
        },
        {
          name: "invoke-raw-json-command",
          description:
            "Invokes the raw command on the specified digital twin instance",
          options: [
            optDigitalTwinInstanceId,
            optRequestEndpoint,
            optRequestDuration,
            optResponseDuration,
            optResponseEndpoint,
            {
              name: "--request-data-content-type",
              description:
                "Mime content type of json data, default is application/json",
              args: { name: "request-data-content-type" },
            },
            {
              name: "--request-data",
              description: "Request data, maximum 256k",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "invoke-raw-text-command",
          description:
            "Invokes the raw command on the specified digital twin instance",
          options: [
            optDigitalTwinInstanceId,
            optRequestEndpoint,
            optRequestDuration,
            optResponseDuration,
            optResponseEndpoint,
            {
              name: "--request-data-content-type",
              description:
                "Mime content type of text data, default is text/plain",
              args: { name: "request-data-content-type" },
            },
            {
              name: "--request-data",
              description: "Plain text request data",
              args: { name: "request-data" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-content",
          description:
            "Retrieves the content associated with a digital twin instance identified by the specified OCID",
          options: [
            optDigitalTwinInstanceId,
            {
              name: "--should-include-metadata",
              description:
                "If set to true , digital twin instance metadata is included in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "domain",
      description:
        "An IoT domain is an Oracle Cloud Infrastructure resource that provides a managed environment for organizing",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an IoT domain to a different compartment within the same tenancy",
          options: [
            optIotDomainId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new IoT domain",
          options: [
            {
              name: "--iot-domain-group-id",
              description: "The OCID of the IoT domain group",
              args: { name: "iot-domain-group-id" },
              isRequired: true,
            },
            optCompartmentId,
            optDisplayName,
            optDescription,
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
            "Deletes the IoT domain identified by the specified OCID",
          options: [
            optIotDomainId,
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
            "Retrieves the IoT domain identified by the specified OCID",
          options: [optIotDomainId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of IoT domains within the specified compartment",
          options: [
            optCompartmentId2,
            optId,
            {
              name: "--iot-domain-group-id",
              description:
                "Filter resources that match the specified OCID of the IoT domain group",
              args: { name: "iot-domain-group-id" },
            },
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "Filter resources whose lifecycleState matches the specified value",
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
          description:
            "Updates the details of IoT domain identified by the specified OCID",
          options: [
            optIotDomainId,
            optDisplayName,
            optDescription,
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
          name: "change-data-retention-period",
          description: "Updates Data Retention Period of the IoT Domain",
          options: [
            optIotDomainId,
            {
              name: "--type",
              description: "The type of data retention period to apply",
              args: {
                suggestions: [
                  "RAW_DATA",
                  "REJECTED_DATA",
                  "HISTORIZED_DATA",
                  "RAW_COMMAND_DATA",
                ],
              },
              isRequired: true,
            },
            {
              name: "--data-retention-period-in-days",
              description:
                "The duration (in days) for which data will be retained in the IoT domain",
              args: { name: "integer" },
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
          name: "configure-apex-data-access",
          description: "Updates an IoT domain Data Access",
          options: [
            optIotDomainId,
            {
              name: "--db-workspace-admin-initial-password",
              description:
                "Initial admin password for APEX workspace associated with the IoT domain",
              args: { name: "db-workspace-admin-initial-password" },
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
          name: "configure-direct-data-access",
          description: "Updates an IoT domain Data Access",
          options: [
            optIotDomainId,
            {
              name: "--db-allow-listed-identity-group-names",
              description:
                "List of IAM groups of form described in here that are allowed to directly connect to the data host",
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
          name: "configure-ords-data-access",
          description: "Updates an IoT domain Data Access",
          options: [
            optIotDomainId,
            {
              name: "--db-allowed-identity-domain-host",
              description:
                "Host name of identity domain that is used for authenticating connect to data host via ORDS",
              args: { name: "db-allowed-identity-domain-host" },
              isRequired: true,
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
      name: "domain-group",
      description:
        "An IoT domain group is an Oracle Cloud Infrastructure resource that provides a managed environment",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an IoT domain group to a different compartment within the same tenancy",
          options: [
            optIotDomainGroupId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new IoT domain group",
          options: [
            optCompartmentId,
            {
              name: "--type",
              description: "Type of domain group",
              args: {
                suggestions: [
                  "PRODUCTION",
                  "DEVELOPMENT",
                  "STANDARD",
                  "LIGHTWEIGHT",
                ],
              },
            },
            optDisplayName,
            optDescription,
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
            "Deletes the IoT domain group identified by the specified OCID",
          options: [
            optIotDomainGroupId,
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
            "Retrieves the IoT domain group identified by the specified OCID",
          options: [optIotDomainGroupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of IoT domain groups within the specified compartment",
          options: [
            optCompartmentId2,
            optId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "Filter resources whose lifecycleState matches the specified value",
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
              name: "--type",
              description: "Filter resources by type",
              args: {
                suggestions: [
                  "PRODUCTION",
                  "DEVELOPMENT",
                  "STANDARD",
                  "LIGHTWEIGHT",
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
          description:
            "Updates the details of IoT domain group identified by the specified OCID",
          options: [
            optIotDomainGroupId,
            optDisplayName,
            optDescription,
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
          name: "configure-data-access",
          description: "Updates an IoT domain Group Data Access",
          options: [
            optIotDomainGroupId,
            {
              name: "--db-allow-listed-vcn-ids",
              description:
                "This is an array of VCN OCID (virtual cloud network Oracle Cloud ID) that is allowed to connect the data host",
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
      ],
    },
    {
      name: "flow-runtime",
      description:
        "An IoT flow runtime is a managed Node-RED runtime in an IoT domain for building and running Node-RED flows",
      subcommands: [
        {
          name: "activate",
          description:
            "Activates the IoT flow runtime identified by the specified OCID",
          options: [
            optIotFlowRuntimeId,
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
            "Moves an IoT flow runtime to a different compartment within the same tenancy",
          options: [
            optIotFlowRuntimeId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an IoT flow runtime",
          options: [
            optIotDomainId,
            optCompartmentId,
            {
              name: "--scale",
              description: "The scale of the IoT flow runtime",
              args: {
                suggestions: ["LOWEST", "LOW", "MEDIUM", "HIGH", "HIGHEST"],
              },
            },
            { name: "--network-config", args: { name: "json" } },
            { name: "--log-config", args: { name: "json" } },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description:
            "Deactivates the IoT flow runtime identified by the specified OCID",
          options: [
            optIotFlowRuntimeId,
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
            "Deletes the IoT flow runtime identified by the specified OCID",
          options: [
            optIotFlowRuntimeId,
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
            "Gets the IoT flow runtime identified by the specified OCID",
          options: [optIotFlowRuntimeId, optFromJson],
        },
        {
          name: "list",
          description: "Lists IoT flow runtimes in the specified compartment",
          options: [
            optCompartmentId2,
            optId,
            {
              name: "--iot-domain-id",
              description:
                "The OCID of the IoT domain in which to list flow runtime",
              args: { name: "iot-domain-id" },
            },
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "Filter resources whose lifecycleState matches the specified value",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
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
          description:
            "Updates the IoT flow runtime identified by the specified OCID",
          options: [
            optIotFlowRuntimeId,
            optDisplayName,
            optDescription,
            {
              name: "--scale",
              description: "The scale of the IoT flow runtime",
              args: {
                suggestions: ["LOWEST", "LOW", "MEDIUM", "HIGH", "HIGHEST"],
              },
            },
            { name: "--network-config", args: { name: "json" } },
            { name: "--log-config", args: { name: "json" } },
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
          name: "update-flows",
          description:
            "Replaces the complete flows document for the IoT flow runtime identified by the specified OCID",
          options: [
            optIotFlowRuntimeId,
            {
              name: "--flows-document",
              description: "The opaque flows document for the IoT flow runtime",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get-flows",
          description:
            "Gets the opaque flows document for the IoT flow runtime identified by the specified OCID",
          options: [optIotFlowRuntimeId, optFromJson],
        },
      ],
    },
  ],
};

export default completionSpec;
