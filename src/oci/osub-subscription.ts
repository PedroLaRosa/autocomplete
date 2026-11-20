// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
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
  args: { suggestions: ["TIMECREATED", "TIMESTART"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optXOneGatewaySubscriptionId: Fig.Option = {
  name: "--x-one-gateway-subscription-id",
  description:
    "This header is meant to be used only for internal purposes and will be ignored on any public request",
  args: { name: "x-one-gateway-subscription-id" },
};
const completionSpec: Fig.Spec = {
  name: "osub-subscription",
  description: "OneSubscription Subscription, Commitment and Rate Card Details",
  subcommands: [
    {
      name: "commitment",
      description:
        "Set of CLI that return the Subscription Details, Commitment and Effective Rate Card Details",
      subcommands: [
        {
          name: "commitment-detail",
          description: "Subscribed Service commitment summary",
          subcommands: [
            {
              name: "get-commitment",
              description:
                "This API returns the commitment details corresponding to the id provided",
              options: [
                {
                  name: "--commitment-id",
                  description: "The Commitment Id",
                  args: { name: "commitment-id" },
                  isRequired: true,
                },
                optXOneGatewaySubscriptionId,
                optXOneOriginRegion,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "commitment",
          description: "Subscribed service commitment details",
          subcommands: [
            {
              name: "list",
              description:
                "This list API returns all commitments for a particular Subscribed Service",
              options: [
                {
                  name: "--subscribed-service-id",
                  description:
                    "This param is used to get the commitments for a particular subscribed service",
                  args: { name: "subscribed-service-id" },
                  isRequired: true,
                },
                optCompartmentId,
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                optXOneGatewaySubscriptionId,
                optXOneOriginRegion,
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
      name: "ratecard",
      description:
        "Set of CLI that return the Subscription Details, Commitment and Effective Rate Card Details",
      subcommands: [
        {
          name: "rate-card",
          description: "Rate Card Summary",
          subcommands: [
            {
              name: "list",
              description:
                "List API that returns all ratecards for given Subscription Id and Account ID",
              options: [
                {
                  name: "--subscription-id",
                  description: "Line level Subscription Id",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                optCompartmentId,
                {
                  name: "--time-from",
                  description:
                    "This param is used to get the rate card(s) whose effective start date starts on or after a particular date",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-to",
                  description:
                    "This param is used to get the rate card(s) whose effective end date ends on or before a particular date",
                  args: { name: "datetime" },
                },
                {
                  name: "--part-number",
                  description:
                    "This param is used to get the rate card(s) filterd by the partNumber",
                  args: { name: "part-number" },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                optXOneOriginRegion,
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
      name: "subscription",
      description:
        "Set of CLI that return the Subscription Details, Commitment and Effective Rate Card Details",
      subcommands: [
        {
          name: "subscription",
          description: "Subscription summary",
          subcommands: [
            {
              name: "list",
              description:
                "This list API returns all subscriptions for a given plan number or subscription id or buyer email",
              options: [
                optCompartmentId,
                {
                  name: "--plan-number",
                  description: "The Plan Number",
                  args: { name: "plan-number" },
                },
                {
                  name: "--subscription-id",
                  description: "Line level Subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: "--buyer-email",
                  description: "Buyer Email Id",
                  args: { name: "buyer-email" },
                },
                {
                  name: "--is-commit-info-required",
                  description:
                    "Boolean value to decide whether commitment services will be shown",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                optXOneGatewaySubscriptionId,
                optXOneOriginRegion,
                optAll,
                optPageSize,
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
