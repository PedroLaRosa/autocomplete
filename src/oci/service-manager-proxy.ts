// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const completionSpec: Fig.Spec = {
  name: "service-manager-proxy",
  description: "Service Manager Proxy",
  subcommands: [
    {
      name: "service-environment",
      description: "Detailed information about a service environment",
      subcommands: [
        {
          name: "get",
          description:
            "Get the detailed information for a specific service environment",
          options: [
            {
              name: "--service-environment-id",
              description:
                "The unique identifier associated with the service environment",
              args: { name: "service-environment-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID for the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--from-json",
              description:
                "Provide input to this command as a JSON document from a file (file://path)",
              args: { name: "file://path" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the details of Software as a Service (SaaS) environments provisioned by Service Manager",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID for the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--service-environment-id",
              description:
                "The unique identifier associated with the service environment",
              args: { name: "service-environment-id" },
            },
            {
              name: "--service-environment-type",
              description: "The environment's service definition type",
              args: { name: "service-environment-type" },
            },
            {
              name: "--limit",
              description: "How many records to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The value of the opc-next-page response header from the previous "List" call',
              args: { name: "page" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["ID"] },
            },
            {
              name: "--sort-order",
              description: "The sort order to use, either ASC or DESC",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--display-name",
              description: "The display name of the resource",
              args: { name: "display-name" },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
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
    },
  ],
};

export default completionSpec;
