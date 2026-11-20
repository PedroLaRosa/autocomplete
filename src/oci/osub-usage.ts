// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the root compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optXOneOriginRegion: Fig.Option = {
  name: "--x-one-origin-region",
  description:
    "The OCI home region name in case home region is not us-ashburn-1 (IAD), e.g. ap-mumbai-1, us-phoenix-1 etc",
  args: { name: "x-one-origin-region" },
};
const completionSpec: Fig.Spec = {
  name: "osub-usage",
  description: "OneSubscription Usage Computation",
  subcommands: [
    {
      name: "computed-usage-aggregated-summary",
      description: "Subscribed Service Contract details",
      subcommands: [
        {
          name: "list-computed-usage-aggregateds",
          description:
            "This is a collection API which returns a list of aggregated computed usage details",
          options: [
            optCompartmentId,
            {
              name: "--subscription-id",
              description:
                "Subscription Id is an identifier associated to the service used for filter the Computed Usage in SPM",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: "--time-from",
              description: "Initial date to filter Computed Usage data in SPM",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-to",
              description:
                "Final date to filter Computed Usage data in SPM, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--parent-product",
              description:
                "Product part number for subscribed service line, called parent product",
              args: { name: "parent-product" },
            },
            {
              name: "--grouping",
              description:
                "Grouping criteria to use for aggregate the computed Usage, either hourly (HOURLY), daily (DAILY)",
              args: { suggestions: ["HOURLY", "DAILY", "MONTHLY", "NONE"] },
            },
            {
              name: "--limit",
              description:
                'The maximum number aggregatedComputedUsages of items to return within the Subscription "List" call',
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The value of the opc-next-page response header from the previous "List" call',
              args: { name: "page" },
            },
            optXOneOriginRegion,
            { name: "--all", description: "Fetches all pages of results" },
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
      name: "computed-usage",
      description: "Computed Usage Summary object",
      subcommands: [
        {
          name: "get",
          description:
            "This is an API which returns Computed Usage corresponding to the id passed",
          options: [
            {
              name: "--computed-usage-id",
              description: "The Computed Usage Id",
              args: { name: "computed-usage-id" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--fields",
              description:
                "Partial response refers to an optimization technique offered by the RESTful web APIs to return only",
              args: { name: "fields" },
              isRepeatable: true,
            },
            optXOneOriginRegion,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "This is a collection API which returns a list of Computed Usages for given filters",
          options: [
            optCompartmentId,
            {
              name: "--subscription-id",
              description:
                "Subscription Id is an identifier associated to the service used for filter the Computed Usage in SPM",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: "--time-from",
              description: "Initial date to filter Computed Usage data in SPM",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-to",
              description:
                "Final date to filter Computed Usage data in SPM, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--parent-product",
              description:
                "Product part number for subscribed service line, called parent product",
              args: { name: "parent-product" },
            },
            {
              name: "--computed-product",
              description: "Product part number for Computed Usage",
              args: { name: "computed-product" },
            },
            {
              name: "--limit",
              description:
                'The maximum number of items to return in a paginated "List" call',
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The value of the opc-next-page response header from the previous "List" call',
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeCreated", "timeOfArrival", "timeMeteredOn"],
              },
            },
            optXOneOriginRegion,
            { name: "--all", description: "Fetches all pages of results" },
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
  ],
};

export default completionSpec;
