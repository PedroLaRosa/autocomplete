// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const completionSpec: Fig.Spec = {
  name: "logging-search",
  description: "Logging Search",
  subcommands: [
    {
      name: "search-logs",
      description: "Submit a query to search logs",
      options: [
        {
          name: "--time-start",
          description:
            "Start filter log's date and time, in the format defined by RFC 3339",
          args: { name: "datetime" },
          isRequired: true,
        },
        {
          name: "--time-end",
          description:
            "End filter log's date and time, in the format defined by RFC 3339",
          args: { name: "datetime" },
          isRequired: true,
        },
        {
          name: "--search-query",
          description: "Query corresponding to the search operation",
          args: { name: "search-query" },
          isRequired: true,
        },
        {
          name: "--is-return-field-info",
          description:
            "Whether to return field schema information for the log stream specified in searchQuery",
          args: { name: "boolean", suggestions: ["true", "false"] },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return in a response",
          args: { name: "integer" },
        },
        {
          name: "--page",
          description: "For list pagination",
          args: { name: "page" },
        },
        {
          name: "--from-json",
          description:
            "Provide input to this command as a JSON document from a file (file://path)",
          args: { name: "file://path" },
        },
      ],
    },
  ],
};

export default completionSpec;
