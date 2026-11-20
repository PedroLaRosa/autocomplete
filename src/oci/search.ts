// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "The page at which to start retrieving results",
  args: { name: "page" },
};
const completionSpec: Fig.Spec = {
  name: "search",
  description: "Search Service",
  subcommands: [
    {
      name: "resource-type",
      description:
        "Defines a type of resource that you can find with a search or query",
      subcommands: [
        {
          name: "get",
          description:
            "Gets detailed information about a resource type by using the resource type name",
          options: [
            {
              name: "--name",
              description: "The name of the resource type",
              args: { name: "name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all resource types that you can search or query for",
          options: [
            optLimit,
            optPage,
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
      name: "resource",
      description:
        "A resource that exists in the cloud network that you're querying",
      subcommands: [
        {
          name: "free-text-search",
          description:
            "Queries any and all compartments in the specified tenancy to find resources that match the specified criteria",
          options: [
            {
              name: "--text",
              description: "The text to search for",
              args: { name: "text" },
              isRequired: true,
            },
            {
              name: "--matching-context-type",
              description:
                "The type of matching context returned in the response",
              args: { suggestions: ["NONE", "HIGHLIGHTS"] },
            },
            optLimit,
            optPage,
            {
              name: "--tenant-id",
              description:
                "The tenancy ID, which can be used to specify a different tenancy",
              args: { name: "tenant-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "structured-search",
          description:
            "Queries any and all compartments in the tenancy to find resources that match the specified criteria",
          options: [
            {
              name: "--matching-context-type",
              description:
                "The type of matching context returned in the response",
              args: { suggestions: ["NONE", "HIGHLIGHTS"] },
            },
            optLimit,
            optPage,
            {
              name: "--tenant-id",
              description:
                "The tenancy ID, which can be used to specify a different tenancy",
              args: { name: "tenant-id" },
            },
            {
              name: "--query-text",
              description:
                "The structured query describing which resources to search for",
              args: { name: "query-text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
