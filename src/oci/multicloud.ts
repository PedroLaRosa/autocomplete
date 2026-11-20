// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description:
    "The OCID of the Multicloud subscription in which to list resources",
  args: { name: "subscription-id" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optExternalLocation: Fig.Option = {
  name: "--external-location",
  description: "The cloud service provider region",
  args: { name: "external-location" },
};
const optSubscriptionServiceName: Fig.Option = {
  name: "--subscription-service-name",
  description: "The cloud service provider",
  args: {
    suggestions: ["ORACLEDBATAZURE", "ORACLEDBATGOOGLE", "ORACLEDBATAWS"],
  },
  isRequired: true,
};
const optSubscriptionServiceName2: Fig.Option = {
  name: "--subscription-service-name",
  description: "The cloud service provider",
  args: {
    suggestions: ["ORACLEDBATAZURE", "ORACLEDBATGOOGLE", "ORACLEDBATAWS"],
  },
};
const optSubscriptionId2: Fig.Option = {
  name: "--subscription-id",
  description:
    "The OCID of the Multicloud subscription in which to list resources",
  args: { name: "subscription-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "multicloud",
  description: "Oracle Multicloud",
  subcommands: [
    {
      name: "metadata",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "external-location-summaries-metadatum-summary-collection",
          description:
            "External location summary information from OCI primitives to any CSP across all regions",
          subcommands: [
            {
              name: "list-external-location-summaries-metadata",
              description:
                "List externalLocationSummary metadata from OCI Region to the Cloud Service Provider region across all regions",
              options: [
                optSubscriptionServiceName,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the Multicloud base compartment in which to list resources",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optSubscriptionId,
                {
                  name: "--entity-type",
                  description:
                    "The resource type query (for example, dbsystem or instance)",
                  args: { suggestions: ["dbsystem"] },
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
          ],
        },
        {
          name: "external-location-mapping-metadatum-summary-collection",
          description:
            "External location information from OCI primitives to a CSP",
          subcommands: [
            {
              name: "list-external-location-mapping-metadata",
              description:
                "List mapped partner cloud regions and zones across cloud service providers for the specified Multicloud base",
              options: [
                {
                  name: "--subscription-service-name",
                  description: "The cloud service provider",
                  args: {
                    suggestions: [
                      "ORACLEDBATAZURE",
                      "ORACLEDBATGOOGLE",
                      "ORACLEDBATAWS",
                    ],
                  },
                  isRequired: true,
                  isRepeatable: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the Multicloud base compartment in which to list resources",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optSubscriptionId,
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
          name: "external-locations-metadatum-collection",
          description:
            "External location information from OCI primitives to any CSP",
          subcommands: [
            {
              name: "list-external-location-details-metadata",
              description:
                "List externalLocationDetail metadata from OCI to Cloud Service Provider for regions, Availability Zones",
              options: [
                optSubscriptionId2,
                optSubscriptionServiceName,
                {
                  name: "--entity-type",
                  description:
                    "The resource type query (for example, dbsystem or instance)",
                  args: { suggestions: ["dbsystem"] },
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the Multicloud base compartment in which to list resources",
                  args: { name: "compartment-id" },
                },
                {
                  name: "--linked-compartment-id",
                  description:
                    "The OCID of the compartment linked to the resource",
                  args: { name: "linked-compartment-id" },
                },
                optExternalLocation,
                {
                  name: "--logical-zone",
                  description:
                    "OCI logical availability domain (AD) to filter the response",
                  args: { name: "logical-zone" },
                },
                {
                  name: "--cluster-placement-group-id",
                  description: "The OCID of the cluster placement group",
                  args: { name: "cluster-placement-group-id" },
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
          ],
        },
      ],
    },
    {
      name: "multi-clouds-metadata",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "multi-cloud-metadata-collection",
          description:
            "Multicloud metadata for Multicloud subscriptions in the indicated compartment",
          subcommands: [
            {
              name: "list-multi-cloud-metadata",
              description:
                "Lists Multicloud metadata for Multicloud subscriptions in the specified compartment",
              options: [
                optCompartmentId,
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
          name: "multi-cloud-metadata",
          description: "The Multicloud metadata for the indicated subscription",
          subcommands: [
            {
              name: "get",
              description:
                "Gets details for Multicloud metadata for the specified Multicloud subscription",
              options: [
                optCompartmentId,
                {
                  name: "--subscription-id",
                  description: "The OCID of the OCI subscription",
                  args: { name: "subscription-id" },
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
      name: "multicloud-alerts",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "multicloud-alert-collection",
          description: "Multicloud Alert information",
          subcommands: [
            {
              name: "list-multicloud-alerts",
              description:
                "Gets a list of Multicloud Alerts for a given root compartment",
              options: [
                optCompartmentId,
                {
                  name: "--resource-id",
                  description:
                    "Filter alerts associated with a specific resource OCID",
                  args: { name: "resource-id" },
                },
                {
                  name: "--resource-type",
                  description:
                    "Filter alerts by resource type (e.g. ADBD, VMCluster)",
                  args: { name: "resource-type" },
                },
                {
                  name: "--alert-type",
                  description:
                    "Filter alerts by alert type (e.g. IAM_POLICY_GAP)",
                  args: { name: "alert-type" },
                },
                {
                  name: "--alert-function-name",
                  description:
                    "Filter alerts generated by a specific internal component (e.g. MCL, BILLING, ORP)",
                  args: { name: "alert-function-name" },
                },
                {
                  name: "--severity",
                  description: "Filter alerts by severity",
                  args: { suggestions: ["LOW", "MEDIUM", "HIGH", "CRITICAL"] },
                },
                {
                  name: "--alert-status",
                  description: "Filter alerts by alert status",
                  args: {
                    suggestions: ["UNACKNOWLEDGED", "ACKNOWLEDGED", "RESOLVED"],
                  },
                },
                optSubscriptionServiceName2,
                optSubscriptionId,
                optLimit,
                optPage,
                optDisplayName,
                optSortBy,
                optSortOrder,
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
      name: "multicloud-policies",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "multicloud-policy-collection",
          description: "Multicloud Policy information",
          subcommands: [
            {
              name: "list-multicloud-policies",
              description: "Gets a list of Multicloud IAM Policies",
              options: [
                optCompartmentId,
                {
                  name: "--is-force-refresh",
                  description: "Refresh the policies",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optSubscriptionId,
                optLimit,
                optPage,
                optDisplayName,
                optSortBy,
                optSortOrder,
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
      name: "multicloud-resources",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "multicloud-resource-collection",
          description:
            "Multicloud resources in the indicated Multicloud subscription",
          subcommands: [
            {
              name: "list-multicloud-resources",
              description:
                "Lists Multicloud resources in the specified Multicloud subscription",
              options: [
                {
                  name: "--resource-anchor-id",
                  description: "The OCID of the resource anchor",
                  args: { name: "resource-anchor-id" },
                },
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment in which to list resources",
                  args: { name: "compartment-id" },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                optSubscriptionServiceName2,
                optSubscriptionId,
                optExternalLocation,
                {
                  name: "--resource-type",
                  description:
                    "Filter alerts by resource type (e.g. ADBD, VMCluster)",
                  args: { name: "resource-type" },
                },
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
      name: "multicloudsubscriptions",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "multicloud-subscription-collection",
          description:
            "Properties that define activated Multicloud subscriptions in the indicated compartment",
          subcommands: [
            {
              name: "list-multicloud-subscriptions",
              description:
                "Lists activated Multicloud subscriptions in the specified compartment",
              options: [
                optCompartmentId,
                optLimit,
                optPage,
                optDisplayName,
                optSortBy,
                optSortOrder,
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
      name: "omhub-network-anchor",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "network-anchor",
          description: "A NetworkAnchor is a description of a NetworkAnchor",
          subcommands: [
            {
              name: "get",
              description: "Gets details for the specified network anchor",
              options: [
                {
                  name: "--network-anchor-id",
                  description: "The OCID of the NetworkAnchor",
                  args: { name: "network-anchor-id" },
                  isRequired: true,
                },
                optSubscriptionServiceName,
                optSubscriptionId2,
                optExternalLocation,
                {
                  name: "--should-fetch-vcn-name",
                  description:
                    "Whether to fetch and include the vcn display name, which may introduce additional latency",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "network-anchor-collection",
          description: "Results of a networkAnchor search",
          subcommands: [
            {
              name: "list-network-anchors",
              description:
                "Lists network anchors in the specified Multicloud subscription, Multicloud compartment",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the Multicloud base compartment or sub-compartment in which to list resources",
                  args: { name: "compartment-id" },
                },
                optSubscriptionId,
                optSubscriptionServiceName2,
                {
                  name: "--network-anchor-lifecycle-state",
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
                optDisplayName,
                optExternalLocation,
                {
                  name: "--network-anchor-oci-subnet-id",
                  description:
                    "A filter to return only NetworkAnchor resources that match the given OCI subnet Id",
                  args: { name: "network-anchor-oci-subnet-id" },
                },
                {
                  name: "--network-anchor-oci-vcn-id",
                  description:
                    "A filter to return only NetworkAnchor resources that match the given OCI Vcn Id",
                  args: { name: "network-anchor-oci-vcn-id" },
                },
                {
                  name: "--id",
                  description: "The OCID of the NetworkAnchor",
                  args: { name: "id" },
                },
                optLimit,
                optPage,
                {
                  name: "--should-fetch-vcn-name",
                  description:
                    "Whether to fetch and include the vcn display name, which may introduce additional latency",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
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
    },
    {
      name: "omhub-resource-anchor",
      description:
        "Use the Oracle Multicloud CLI to retrieve resource anchors and network anchors",
      subcommands: [
        {
          name: "resource-anchor-collection",
          description:
            "List of resource anchors in the indicated Multicloud subscription",
          subcommands: [
            {
              name: "list-resource-anchors",
              description:
                "Lists resource anchors in the specified Multicloud subscription",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the Multicloud base compartment or sub-compartment in which to list resources",
                  args: { name: "compartment-id" },
                },
                {
                  name: "--linked-compartment-id",
                  description:
                    "The OCID of the compartment linked to the resource",
                  args: { name: "linked-compartment-id" },
                },
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
                optDisplayName,
                {
                  name: "--id",
                  description: "The OCID of the resource anchor",
                  args: { name: "id" },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                {
                  name: "--is-compartment-id-in-subtree",
                  description:
                    "Check the sub-compartments of a given compartmentId",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--should-fetch-compartment-name",
                  description:
                    "Whether to fetch and include the compartment name",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optSubscriptionServiceName2,
                optSubscriptionId,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "resource-anchor",
          description: "A resource anchor",
          subcommands: [
            {
              name: "get",
              description: "Gets details for the specified resource anchor",
              options: [
                {
                  name: "--resource-anchor-id",
                  description: "The OCID of the resource anchor",
                  args: { name: "resource-anchor-id" },
                  isRequired: true,
                },
                optSubscriptionServiceName,
                optSubscriptionId2,
                {
                  name: "--should-fetch-compartment-name",
                  description:
                    "Whether to fetch and include the compartment name",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
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
