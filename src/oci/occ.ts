// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const completionSpec: Fig.Spec = {
  name: "occ",
  description: "OCI Control Center",
  subcommands: [
    {
      name: "metric-property",
      description:
        "A list of available metrics and their associated properties such as dimensions",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of available metrics for the given namespace",
          options: [
            {
              name: "--namespace-name",
              description: "The name of the source service emitting the metric",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to use for authorization",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optPage,
            optLimit,
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
      name: "namespace",
      description:
        "The list of source services called namespaces emitting metrics that you can explore using OCI Control Center",
      subcommands: [
        {
          name: "list",
          description:
            "List all the available source services called namespaces emitting metrics for this region",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to use for authorization",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optPage,
            optLimit,
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
      name: "metric-data",
      description: "A list of aggregated metric data objects with properties",
      subcommands: [
        {
          name: "read",
          description:
            "Returns the summarized data for the given metric from the given namespace",
          options: [
            {
              name: "--namespace-name",
              description:
                "The source service or application to use when searching for metric data points to aggregate",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: "--metric-name",
              description:
                "The name of a metric for retrieving aggregated data",
              args: { name: "metric-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to use for authorization to read metrics",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--dimensions",
              description: "Qualifiers to use when searching for metric data",
              args: { name: "json" },
            },
            {
              name: "--start-time",
              description:
                "The beginning of the sampled time range to use when searching for metric data points",
              args: { name: "datetime" },
            },
            {
              name: "--end-time",
              description:
                "The end of the sampled time range to use when searching for metric data points",
              args: { name: "datetime" },
            },
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
