// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the tenancy (root compartment) that is used to filter results",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
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
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const completionSpec: Fig.Spec = {
  name: "threat-intelligence",
  description: "Threat Intelligence",
  subcommands: [
    {
      name: "indicator",
      description:
        "A data signature observed on a network or host that indicates a potential security threat",
      subcommands: [
        {
          name: "get",
          description:
            "Get detailed information about a threat indicator with a given identifier",
          options: [
            {
              name: "--indicator-id",
              description:
                "The unique identifier (OCID) of the threat indicator",
              args: { name: "indicator-id" },
              isRequired: true,
            },
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "summarize",
          description:
            "Get indicator summaries based on advanced search criteria",
          options: [
            optCompartmentId,
            {
              name: "--indicator-type",
              description: "The type of indicator this",
              args: {
                suggestions: [
                  "DOMAIN_NAME",
                  "FILE_NAME",
                  "MD5_HASH",
                  "SHA1_HASH",
                  "SHA256_HASH",
                  "IP_ADDRESS",
                  "URL",
                ],
              },
            },
            {
              name: "--indicator-value",
              description: "The value for the type of indicator this",
              args: { name: "indicator-value" },
            },
            {
              name: "--threat-types",
              description: "The threat type of entites to be returned",
              args: { name: "json" },
            },
            {
              name: "--indicator-seen-by",
              description:
                "Filter to include indicators that have been seen by the provided source",
              args: { name: "indicator-seen-by" },
            },
            {
              name: "--malware",
              description:
                "Filter to include indicators associated with the provided malware",
              args: { name: "malware" },
            },
            {
              name: "--threat-actor",
              description:
                "Filter to included indicators associated with the provided threat actor",
              args: { name: "threat-actor" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "CONFIDENCE",
                  "TIMECREATED",
                  "TIMEUPDATED",
                  "TIMELASTSEEN",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--confidence-above",
              description: "The minimum level of confidence to return",
              args: { name: "integer" },
            },
            {
              name: "--time-created-after",
              description:
                "The oldest creation time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-before",
              description:
                "The newest creation time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-after",
              description:
                "The oldest last seen time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-before",
              description:
                "The newest last seen time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-after",
              description: "The oldest update time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-before",
              description: "The newest update time of entities to be returned",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "threat-types-collection",
      description:
        "List of threat types that can be associated with threat indicators",
      subcommands: [
        {
          name: "list-threat-types",
          description:
            "Gets a list of threat types that are available to use as parameters when querying indicators",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "indicator-summaries",
      description: "List of indicator summary objects",
      subcommands: [
        {
          name: "list-indicators",
          description:
            "Get a list of threat indicator summaries based on the search criteria",
          options: [
            optCompartmentId,
            {
              name: "--threat-type-name",
              description: "The threat type of entites to be returned",
              args: { name: "threat-type-name" },
              isRepeatable: true,
            },
            {
              name: "--type",
              description: "The indicator type of entities to be returned",
              args: {
                suggestions: [
                  "DOMAIN_NAME",
                  "FILE_NAME",
                  "MD5_HASH",
                  "SHA1_HASH",
                  "SHA256_HASH",
                  "IP_ADDRESS",
                  "URL",
                ],
              },
            },
            {
              name: "--value",
              description: "The indicator value of entities to be returned",
              args: { name: "value" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "confidence",
                  "timeCreated",
                  "timeUpdated",
                  "timeLastSeen",
                ],
              },
            },
            optAll,
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            {
              name: "--confidence-above",
              description:
                "The minimum confidence score of entities to be returned",
              args: { name: "integer" },
            },
            {
              name: "--time-updated-after",
              description: "The oldest update time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-after",
              description:
                "The oldest creation time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-before",
              description:
                "The newest creation time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-after",
              description:
                "The oldest last seen time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-seen-before",
              description:
                "The newest last seen time of entities to be returned",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-before",
              description: "The newest update time of entities to be returned",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "indicator-counts",
      description: "A list of indicator counts by indicator type",
      subcommands: [
        {
          name: "list-indicator-counts",
          description: "Get the current count of each threat indicator type",
          options: [optCompartmentId, optSortOrder, optAll, optFromJson],
        },
      ],
    },
  ],
};

export default completionSpec;
