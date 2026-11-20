// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const completionSpec: Fig.Spec = {
  name: "osub-billing-schedule",
  description: "OneSubscription Billing Schedule",
  subcommands: [
    {
      name: "billing-schedule-summary",
      description: "Billing schedule details related to Subscription Id",
      subcommands: [
        {
          name: "list-billing-schedules",
          description:
            "This list API returns all billing schedules for given subscription id and for a particular Subscribed Service",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subscription-id",
              description:
                "This param is used to get only the billing schedules for a particular Subscription Id",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: "--subscribed-service-id",
              description:
                "This param is used to get only the billing schedules for a particular Subscribed Service",
              args: { name: "subscribed-service-id" },
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
                "The value of the 'opc-next-page' response header from the previous \"List\" call",
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending ('ASC') or descending ('DESC')",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["ORDERNUMBER", "TIMEINVOICING"] },
            },
            {
              name: "--x-one-origin-region",
              description:
                "The OCI home region name in case home region is not us-ashburn-1 (IAD), e.g. ap-mumbai-1, us-phoenix-1 etc",
              args: { name: "x-one-origin-region" },
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
