// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optScope: Fig.Option = {
  name: "--scope",
  description:
    "Specifies to operate only on resources that have a matching DNS scope",
  args: { suggestions: ["GLOBAL", "PRIVATE"] },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description:
    "The If-Match header field makes the request method conditional on the existence of at least one current",
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
const optIfUnmodifiedSince: Fig.Option = {
  name: "--if-unmodified-since",
  description:
    "The If-Unmodified-Since header field makes the request method conditional on the selected representation's",
  args: { name: "if-unmodified-since" },
};
const optViewId: Fig.Option = {
  name: "--view-id",
  description: "The OCID of the view the zone is associated with",
  args: { name: "view-id" },
};
const optZoneNameOrId: Fig.Option = {
  name: "--zone-name-or-id",
  description: "The name or OCID of the target zone",
  args: { name: "zone-name-or-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment the zone belongs to",
  args: { name: "compartment-id" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"] },
  isRepeatable: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optIfModifiedSince: Fig.Option = {
  name: "--if-modified-since",
  description:
    "The If-Modified-Since header field makes a GET or HEAD request method conditional on the selected",
  args: { name: "if-modified-since" },
};
const optIfNoneMatch: Fig.Option = {
  name: "--if-none-match",
  description:
    "The If-None-Match header field makes the request method conditional on the absence of any current",
  args: { name: "if-none-match" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
  args: { name: "page" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment the resource belongs to",
  args: { name: "compartment-id" },
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
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "The maximum number of items to return in a page of the collection",
  args: { name: "integer" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The order to sort the resources",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDomain: Fig.Option = {
  name: "--domain",
  description:
    "The target fully-qualified domain name (FQDN) within the target zone",
  args: { name: "domain" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optResolverId: Fig.Option = {
  name: "--resolver-id",
  description: "The OCID of the target resolver",
  args: { name: "resolver-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACTIVE",
      "CREATING",
      "DELETED",
      "DELETING",
      "FAILED",
      "UPDATING",
    ],
  },
  isRepeatable: true,
};
const optId: Fig.Option = {
  name: "--id",
  description: "The OCID of a resource",
  args: { name: "id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The displayName of a resource",
  args: { name: "display-name" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The state of a resource",
  args: {
    suggestions: [
      "ACTIVE",
      "CREATING",
      "DELETED",
      "DELETING",
      "FAILED",
      "UPDATING",
    ],
  },
};
const optRtype: Fig.Option = {
  name: "--rtype",
  description: "The type of the target RRSet within the target zone",
  args: { name: "rtype" },
  isRequired: true,
};
const optSteeringPolicyId: Fig.Option = {
  name: "--steering-policy-id",
  description: "The OCID of the target steering policy",
  args: { name: "steering-policy-id" },
  isRequired: true,
};
const optTsigKeyId: Fig.Option = {
  name: "--tsig-key-id",
  description: "The OCID of the target TSIG key",
  args: { name: "tsig-key-id" },
  isRequired: true,
};
const optViewId2: Fig.Option = {
  name: "--view-id",
  description: "The OCID of the target view",
  args: { name: "view-id" },
  isRequired: true,
};
const optViewId3: Fig.Option = {
  name: "--view-id",
  description: "The OCID of the view the resource is associated with",
  args: { name: "view-id" },
};
const optItems: Fig.Option = {
  name: "--items",
  description: "This option is a JSON list with items of type RecordDetails",
  args: { name: "json" },
};
const optItems2: Fig.Option = {
  name: "--items",
  description: "This option is a JSON list with items of type RecordOperation",
  args: { name: "json" },
};
const optResolverEndpointName: Fig.Option = {
  name: "--resolver-endpoint-name",
  description: "The name of the target resolver endpoint",
  args: { name: "resolver-endpoint-name" },
  isRequired: true,
};
const optSteeringPolicyAttachmentId: Fig.Option = {
  name: "--steering-policy-attachment-id",
  description: "The OCID of the target steering policy attachment",
  args: { name: "steering-policy-attachment-id" },
  isRequired: true,
};
const optTimeCreatedGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-created-greater-than-or-equal-to",
  description:
    "An RFC 3339 timestamp that states all returned resources were created on or after the indicated time",
  args: { name: "datetime" },
};
const optTimeCreatedLessThan: Fig.Option = {
  name: "--time-created-less-than",
  description:
    "An RFC 3339 timestamp that states all returned resources were created before the indicated time",
  args: { name: "datetime" },
};
const optZoneId: Fig.Option = {
  name: "--zone-id",
  description: "The OCID of the target zone",
  args: { name: "zone-id" },
  isRequired: true,
};
const optZoneVersion: Fig.Option = {
  name: "--zone-version",
  description: "The version of the zone for which data is requested",
  args: { name: "zone-version" },
};
const completionSpec: Fig.Spec = {
  name: "dns",
  description: "DNS",
  subcommands: [
    {
      name: "resolver",
      description: "An OCI DNS resolver",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a resolver into a different compartment along with its protected default view and any endpoints",
          options: [
            optResolverId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resolver",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optScope,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a specific resolver",
          options: [
            optResolverId,
            optIfModifiedSince,
            optIfNoneMatch,
            optScope,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of all resolvers within a compartment",
          options: [
            optCompartmentId2,
            optDisplayName,
            optId,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort resolvers",
              args: { suggestions: ["displayName", "timeCreated"] },
            },
            optLifecycleState,
            optScope,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified resolver with your new information",
          options: [
            optResolverId,
            {
              name: "--display-name",
              description: "The display name of the resolver",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--attached-views",
              description: "The attached views",
              args: { name: "json" },
            },
            {
              name: "--rules",
              description: "Rules for the resolver",
              args: { name: "json" },
            },
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "view",
      description: "An OCI DNS view",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a view into a different compartment",
          options: [
            optViewId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the view should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optScope,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new view in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the owning compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the view",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optScope,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACTIVE", "DELETED", "DELETING", "UPDATING"],
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
          description: "Deletes the specified view",
          options: [
            optViewId2,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a specific view",
          options: [
            optViewId2,
            optIfModifiedSince,
            optIfNoneMatch,
            optScope,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of all views within a compartment",
          options: [
            optCompartmentId2,
            optDisplayName,
            optId,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort views",
              args: { suggestions: ["displayName", "timeCreated"] },
            },
            {
              name: "--lifecycle-state",
              description: "The state of a resource",
              args: {
                suggestions: ["ACTIVE", "DELETED", "DELETING", "UPDATING"],
              },
            },
            optScope,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified view with your new information",
          options: [
            optViewId2,
            {
              name: "--display-name",
              description: "The display name of the view",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACTIVE", "DELETED", "DELETING", "UPDATING"],
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
      name: "zone-transfer-server",
      description:
        "An OCI nameserver that transfers zone data with external nameservers",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of IP addresses of OCI nameservers for inbound and outbound transfer of zones in the specified",
          options: [optCompartmentId2, optScope, optPage, optAll, optFromJson],
        },
      ],
    },
    {
      name: "zone",
      description: "A DNS zone",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a zone into a different compartment",
          options: [
            optZoneId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the zone should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optScope,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-zone-from-zone-file",
          description:
            "Creates a new zone from a zone file in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--create-zone-from-zone-file-details",
              description: "The zone file contents",
              args: { name: "create-zone-from-zone-file-details" },
              isRequired: true,
            },
            optScope,
            optViewId3,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified zone and all its steering policy attachments",
          options: [
            optZoneNameOrId,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optViewId,
            optCompartmentId,
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
            "Gets information about the specified zone, including its creation date, zone type, and serial",
          options: [
            optZoneNameOrId,
            optIfNoneMatch,
            optIfModifiedSince,
            optScope,
            optViewId,
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "get-zone-content",
          description: "Gets the requested zone's zone file",
          options: [
            optZoneNameOrId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optIfNoneMatch,
            optIfModifiedSince,
            optScope,
            optViewId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of all zones in the specified compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            {
              name: "--name",
              description: "A case-sensitive filter for zone names",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description: "Search by zone name",
              args: { name: "name-contains" },
            },
            {
              name: "--zone-type",
              description: "Search by zone type, PRIMARY or SECONDARY",
              args: { suggestions: ["PRIMARY", "SECONDARY"] },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            optLifecycleState,
            {
              name: "--sort-by",
              description: "The field by which to sort zones",
              args: { suggestions: ["name", "zoneType", "timeCreated"] },
            },
            optSortOrder,
            optScope,
            optViewId3,
            {
              name: "--tsig-key-id",
              description:
                "Search for zones that are associated with a TSIG key",
              args: { name: "tsig-key-id" },
            },
            {
              name: "--dnssec-state",
              description: "Search for zones that have the given DnssecState",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "promote-zone-dnssec-key-version",
          description: "Promotes a specified DnssecKeyVersion on the zone",
          options: [
            optZoneId,
            {
              name: "--dnssec-key-version-uuid",
              description:
                "The UUID of the DnssecKeyVersion that is being promoted",
              args: { name: "dnssec-key-version-uuid" },
              isRequired: true,
            },
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stage-zone-dnssec-key-version",
          description: "Stages a new DnssecKeyVersion on the zone",
          options: [
            optZoneId,
            {
              name: "--predecessor-dnssec-key-version-uuid",
              description:
                "The UUID of the DnssecKeyVersion for which a new successor should be generated",
              args: { name: "predecessor-dnssec-key-version-uuid" },
              isRequired: true,
            },
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the zone with the specified information",
          options: [
            optZoneNameOrId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--resolution-mode",
              description:
                "The resolution mode of a zone defines behavior related to how query responses can be handled",
              args: {
                suggestions: ["STATIC", "TRANSPARENT", "RTYPE_TRANSPARENT"],
              },
            },
            {
              name: "--dnssec-state",
              description: "The state of DNSSEC on the zone",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--external-masters",
              description:
                "External master servers for the zone. externalMasters becomes a required parameter when the zoneType value",
              args: { name: "json" },
            },
            {
              name: "--external-downstreams",
              description: "External secondary servers for the zone",
              args: { name: "json" },
            },
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optViewId,
            optCompartmentId,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "migrate-from-dynect",
          description:
            "Migrates a zone from DynECT into a specific compartment in OCI",
          options: [
            {
              name: "--name",
              description: "The name of the zone",
              args: { name: "name" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optScope,
            optViewId3,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCompartmentId2,
            {
              name: "--dynect-migration-details",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new zone in the specified compartment",
          options: [
            {
              name: "--name",
              description: "The name of the zone",
              args: { name: "name" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--external-masters",
              description:
                "External master servers for the zone. externalMasters becomes a required parameter when the zoneType value",
              args: { name: "json" },
            },
            {
              name: "--external-downstreams",
              description: "External secondary servers for the zone",
              args: { name: "json" },
            },
            {
              name: "--resolution-mode",
              description:
                "The resolution mode of a zone defines behavior related to how query responses can be handled",
              args: {
                suggestions: ["STATIC", "TRANSPARENT", "RTYPE_TRANSPARENT"],
              },
            },
            {
              name: "--dnssec-state",
              description: "The state of DNSSEC on the zone",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            optScope,
            optViewId3,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCompartmentId2,
            {
              name: "--zone-type",
              description: "The type of the zone",
              args: { suggestions: ["PRIMARY", "SECONDARY"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "steering-policy-attachment",
      description: "An attachment between a steering policy and a domain",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new attachment between a steering policy and a domain",
          options: [
            {
              name: "--steering-policy-id",
              description: "The OCID of the attached steering policy",
              args: { name: "steering-policy-id" },
              isRequired: true,
            },
            {
              name: "--zone-id",
              description: "The OCID of the attached zone",
              args: { name: "zone-id" },
              isRequired: true,
            },
            {
              name: "--domain-name",
              description: "The attached domain within the attached zone",
              args: { name: "domain-name" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the steering policy attachment",
              args: { name: "display-name" },
            },
            optScope,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["CREATING", "ACTIVE", "DELETING"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified steering policy attachment",
          options: [
            optSteeringPolicyAttachmentId,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
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
            "Gets information about the specified steering policy attachment",
          options: [
            optSteeringPolicyAttachmentId,
            optIfNoneMatch,
            optIfModifiedSince,
            optScope,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the steering policy attachments in the specified compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            optId,
            optDisplayName,
            {
              name: "--steering-policy-id",
              description: "Search by steering policy OCID",
              args: { name: "steering-policy-id" },
            },
            {
              name: "--zone-id",
              description: "Search by zone OCID",
              args: { name: "zone-id" },
            },
            {
              name: "--domain",
              description: "Search by domain",
              args: { name: "domain" },
            },
            {
              name: "--domain-contains",
              description: "Search by domain",
              args: { name: "domain-contains" },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            {
              name: "--lifecycle-state",
              description: "The state of a resource",
              args: { suggestions: ["CREATING", "ACTIVE", "DELETING"] },
            },
            {
              name: "--sort-by",
              description:
                "The field by which to sort steering policy attachments",
              args: {
                suggestions: ["displayName", "timeCreated", "domainName"],
              },
            },
            optSortOrder,
            optScope,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified steering policy attachment with your new information",
          options: [
            optSteeringPolicyAttachmentId,
            {
              name: "--display-name",
              description:
                "A user-friendly name for the steering policy attachment",
              args: { name: "display-name" },
            },
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["CREATING", "ACTIVE", "DELETING"] },
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
      name: "tsig-key",
      description: "A TSIG key",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a TSIG key into a different compartment",
          options: [
            optTsigKeyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the TSIG key should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optScope,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new TSIG key in the specified compartment",
          options: [
            {
              name: "--algorithm",
              description:
                "TSIG key algorithms are encoded as domain names, but most consist of only one non-empty label",
              args: { name: "algorithm" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "A globally unique domain name identifying the key for a given pair of hosts",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the TSIG key",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "A base64 string encoding the binary shared secret",
              args: { name: "secret" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optScope,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified TSIG key",
          options: [
            optTsigKeyId,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified TSIG key",
          options: [
            optTsigKeyId,
            optIfNoneMatch,
            optIfModifiedSince,
            optScope,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of all TSIG keys in the specified compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            optId,
            {
              name: "--name",
              description: "The name of a resource",
              args: { name: "name" },
            },
            optLifecycleState,
            {
              name: "--sort-by",
              description: "The field by which to sort TSIG keys",
              args: { suggestions: ["name", "timeCreated"] },
            },
            optSortOrder,
            optScope,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified TSIG key",
          options: [
            optTsigKeyId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "steering-policy",
      description: "A DNS steering policy",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a steering policy into a different compartment",
          options: [
            optSteeringPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the steering policy should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optScope,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new steering policy in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the steering policy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the steering policy",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--template",
              description:
                "A set of predefined rules based on the desired purpose of the steering policy",
              args: {
                suggestions: [
                  "FAILOVER",
                  "LOAD_BALANCE",
                  "ROUTE_BY_GEO",
                  "ROUTE_BY_ASN",
                  "ROUTE_BY_IP",
                  "CUSTOM",
                ],
              },
              isRequired: true,
            },
            {
              name: "--ttl",
              description:
                "The Time To Live (TTL) for responses from the steering policy, in seconds",
              args: { name: "integer" },
            },
            {
              name: "--health-check-monitor-id",
              description:
                "The OCID of the health check monitor providing health data about the answers of the steering policy",
              args: { name: "health-check-monitor-id" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--answers",
              description:
                "The set of all answers that can potentially issue from the steering policy",
              args: { name: "json" },
            },
            {
              name: "--rules",
              description:
                "The series of rules that will be processed in sequence to reduce the pool of answers to a response for any",
              args: { name: "json" },
            },
            optScope,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETED",
                  "DELETING",
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
          description: "Deletes the specified steering policy",
          options: [
            optSteeringPolicyId,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified steering policy",
          options: [
            optSteeringPolicyId,
            optIfNoneMatch,
            optIfModifiedSince,
            optScope,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of all steering policies in the specified compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            optId,
            optDisplayName,
            {
              name: "--display-name-contains",
              description: "The partial displayName of a resource",
              args: { name: "display-name-contains" },
            },
            {
              name: "--health-check-monitor-id",
              description: "Search by health check monitor OCID",
              args: { name: "health-check-monitor-id" },
            },
            optTimeCreatedGreaterThanOrEqualTo,
            optTimeCreatedLessThan,
            {
              name: "--template",
              description: "Search by steering template type",
              args: { name: "template" },
            },
            {
              name: "--lifecycle-state",
              description: "The state of a resource",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETED",
                  "DELETING",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field by which to sort steering policies",
              args: { suggestions: ["displayName", "timeCreated", "template"] },
            },
            optSortOrder,
            optScope,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the configuration of the specified steering policy",
          options: [
            optSteeringPolicyId,
            {
              name: "--display-name",
              description: "A user-friendly name for the steering policy",
              args: { name: "display-name" },
            },
            {
              name: "--ttl",
              description:
                "The Time To Live (TTL) for responses from the steering policy, in seconds",
              args: { name: "integer" },
            },
            {
              name: "--health-check-monitor-id",
              description:
                "The OCID of the health check monitor providing health data about the answers of the steering policy",
              args: { name: "health-check-monitor-id" },
            },
            {
              name: "--template",
              description:
                "A set of predefined rules based on the desired purpose of the steering policy",
              args: {
                suggestions: [
                  "FAILOVER",
                  "LOAD_BALANCE",
                  "ROUTE_BY_GEO",
                  "ROUTE_BY_ASN",
                  "ROUTE_BY_IP",
                  "CUSTOM",
                ],
              },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--answers",
              description:
                "The set of all answers that can potentially issue from the steering policy",
              args: { name: "json" },
            },
            {
              name: "--rules",
              description:
                "The series of rules that will be processed in sequence to reduce the pool of answers to a response for any",
              args: { name: "json" },
            },
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETED",
                  "DELETING",
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
      name: "resolver-endpoint",
      description: "An OCI DNS resolver endpoint",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified resolver endpoint",
          options: [
            optResolverId,
            optResolverEndpointName,
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a specific resolver endpoint",
          options: [
            optResolverId,
            optResolverEndpointName,
            optIfModifiedSince,
            optIfNoneMatch,
            optScope,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of all endpoints within a resolver",
          options: [
            optResolverId,
            {
              name: "--name",
              description: "The name of a resource",
              args: { name: "name" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort resolver endpoints",
              args: { suggestions: ["name", "timeCreated"] },
            },
            optLifecycleState,
            optScope,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new resolver endpoint in the same compartment as the resolver",
          options: [
            optResolverId,
            {
              name: "--name",
              description: "The name of the resolver endpoint",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--is-forwarding",
              description:
                "A Boolean flag indicating whether or not the resolver endpoint is for forwarding",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--is-listening",
              description:
                "A Boolean flag indicating whether or not the resolver endpoint is for listening",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description: "The OCID of a subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--forwarding-address",
              description:
                "An IP address from which forwarded queries may be sent",
              args: { name: "forwarding-address" },
            },
            {
              name: "--listening-address",
              description: "An IP address to listen to queries on",
              args: { name: "listening-address" },
            },
            { name: "--freeform-tags", args: { name: "json" } },
            { name: "--defined-tags", args: { name: "json" } },
            {
              name: "--nsg-ids",
              description:
                "An array of network security group OCIDs for the resolver endpoint",
              args: { name: "json" },
            },
            { name: "--security-attributes", args: { name: "json" } },
            optScope,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified resolver endpoint with your new information",
          options: [
            optResolverId,
            optResolverEndpointName,
            { name: "--freeform-tags", args: { name: "json" } },
            { name: "--defined-tags", args: { name: "json" } },
            {
              name: "--nsg-ids",
              description:
                "An array of network security group OCIDs for the resolver endpoint",
              args: { name: "json" },
            },
            { name: "--security-attributes", args: { name: "json" } },
            optIfMatch,
            optIfUnmodifiedSince,
            optScope,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "record",
      description: "A DNS record",
      subcommands: [
        {
          name: "rrset",
          description:
            "A collection of DNS records of the same domain and type",
          subcommands: [
            {
              name: "update",
              description: "Replaces records in the specified RRSet",
              options: [
                optZoneNameOrId,
                optDomain,
                optRtype,
                optItems,
                optIfMatch,
                optIfUnmodifiedSince,
                optScope,
                optViewId,
                optCompartmentId,
                optForce,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets a list of all records in the specified RRSet",
              options: [
                optZoneNameOrId,
                optDomain,
                optRtype,
                optIfNoneMatch,
                optIfModifiedSince,
                optLimit,
                optPage,
                optZoneVersion,
                optCompartmentId,
                optScope,
                optViewId,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "patch",
              description: "Updates records in the specified RRSet",
              options: [
                optZoneNameOrId,
                optDomain,
                optRtype,
                optItems2,
                optIfMatch,
                optIfUnmodifiedSince,
                optScope,
                optViewId,
                optCompartmentId,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes all records in the specified RRSet",
              options: [
                optZoneNameOrId,
                optDomain,
                optRtype,
                optIfMatch,
                optIfUnmodifiedSince,
                optCompartmentId,
                optScope,
                optViewId,
                optForce2,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "domain",
          description: "A collection of DNS records for the same domain",
          subcommands: [
            {
              name: "patch",
              description: "Updates records in the specified zone at a domain",
              options: [
                optZoneNameOrId,
                optDomain,
                optItems2,
                optIfMatch,
                optIfUnmodifiedSince,
                optScope,
                optViewId,
                optCompartmentId,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Replaces records in the specified zone at a domain with the records specified in the request body",
              options: [
                optZoneNameOrId,
                optDomain,
                optItems,
                optIfMatch,
                optIfUnmodifiedSince,
                optScope,
                optViewId,
                optCompartmentId,
                optForce,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets a list of all records at the specified zone and domain",
              options: [
                optZoneNameOrId,
                optDomain,
                optIfNoneMatch,
                optIfModifiedSince,
                optLimit,
                optPage,
                optZoneVersion,
                {
                  name: "--rtype",
                  description: "Search by record type",
                  args: { name: "rtype" },
                },
                optScope,
                optViewId,
                {
                  name: "--sort-by",
                  description: "The field by which to sort records",
                  args: { suggestions: ["rtype", "ttl"] },
                },
                optSortOrder,
                optCompartmentId,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "Deletes all records at the specified zone and domain",
              options: [
                optZoneNameOrId,
                optDomain,
                optIfMatch,
                optIfUnmodifiedSince,
                optScope,
                optViewId,
                optCompartmentId,
                optForce2,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "zone",
          description: "A collection of DNS records for the same zone",
          subcommands: [
            {
              name: "get",
              description: "Gets all records in the specified zone",
              options: [
                optZoneNameOrId,
                optIfNoneMatch,
                optIfModifiedSince,
                optLimit,
                optPage,
                optZoneVersion,
                {
                  name: "--domain",
                  description: "Search by domain",
                  args: { name: "domain" },
                },
                {
                  name: "--domain-contains",
                  description: "Search by domain",
                  args: { name: "domain-contains" },
                },
                {
                  name: "--rtype",
                  description: "Search by record type",
                  args: { name: "rtype" },
                },
                {
                  name: "--sort-by",
                  description: "The field by which to sort records",
                  args: { suggestions: ["domain", "rtype", "ttl"] },
                },
                optSortOrder,
                optCompartmentId,
                optScope,
                optViewId,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "patch",
              description:
                "Updates a collection of records in the specified zone",
              options: [
                optZoneNameOrId,
                optItems2,
                optIfMatch,
                optIfUnmodifiedSince,
                optScope,
                optViewId,
                optCompartmentId,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Replaces records in the specified zone with the records specified in the request body",
              options: [
                optZoneNameOrId,
                optItems,
                optIfMatch,
                optIfUnmodifiedSince,
                optScope,
                optViewId,
                optCompartmentId,
                optForce,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
