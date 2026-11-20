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
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description:
    "The subscription ID for which rewards information is requested for",
  args: { name: "subscription-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "The maximum number of items to return in the paginated response",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The value of the 'opc-next-page' response header from the previous call",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, which can be ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optTenancyId: Fig.Option = {
  name: "--tenancy-id",
  description: "The OCID of the tenancy",
  args: { name: "tenancy-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "TIMESTART"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the root compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "usage",
  description: "Usage Proxy",
  subcommands: [
    {
      name: "resources",
      description:
        "Use the Usage Proxy CLI to list Oracle Support Rewards, view related detailed usage information",
      subcommands: [
        {
          name: "resource-summary",
          description: "The details of a resource under a service",
          subcommands: [
            {
              name: "list-resources",
              description:
                "Returns the resource details for a service > Important",
              options: [
                {
                  name: "--service-name",
                  description: "Service Name",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                optCompartmentId,
                {
                  name: "--entitlement-id",
                  description: "Subscription or entitlement Id",
                  args: { name: "entitlement-id" },
                },
                optPage,
                optLimit,
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
          name: "resource-quotum-summary",
          description: "The resource quota balance details",
          subcommands: [
            {
              name: "list-resource-quota",
              description:
                "Returns the resource quota details under a tenancy > Important",
              options: [
                {
                  name: "--service-name",
                  description: "Service Name",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                optCompartmentId,
                {
                  name: "--service-entitlement",
                  description: "Service entitlement Id",
                  args: { name: "service-entitlement" },
                },
                optPage,
                optLimit,
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
      name: "rewards",
      description:
        "Use the Usage Proxy CLI to list Oracle Support Rewards, view related detailed usage information",
      subcommands: [
        {
          name: "redeemable-user",
          description: "The summary of a user that can redeem rewards",
          subcommands: [
            {
              name: "create",
              description:
                "Adds the list of redeemable user summary for a subscription ID",
              options: [
                optTenancyId,
                optSubscriptionId,
                {
                  name: "--items",
                  description:
                    "The list of new user to be added to the list of user that can redeem rewards",
                  args: { name: "json" },
                },
                {
                  name: "--user-id",
                  description:
                    "The user ID of the person to send a copy of an email",
                  args: { name: "user-id" },
                },
                {
                  name: "--if-match",
                  description: "For optimistic concurrency control",
                  args: { name: "if-match" },
                },
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the list of redeemable user email ID for a subscription ID",
              options: [
                {
                  name: "--email-id",
                  description: "The email ID that needs to be deleted",
                  args: { name: "email-id" },
                  isRequired: true,
                },
                optTenancyId,
                optSubscriptionId,
                {
                  name: "--if-match",
                  description: "For optimistic concurrency control",
                  args: { name: "if-match" },
                },
                {
                  name: "--force",
                  description:
                    "Perform deletion without prompting for confirmation",
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "redeemable-user-summary",
          description: "User summary that can redeem rewards",
          subcommands: [
            {
              name: "list-redeemable-users",
              description:
                "Provides the list of user summary that can redeem rewards for the given subscription ID",
              options: [
                optTenancyId,
                optSubscriptionId,
                optPage,
                optLimit,
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
          name: "redemption-summary",
          description:
            "The redemption summary for the requested subscription ID and date range",
          subcommands: [
            {
              name: "list-redemptions",
              description:
                "Returns the list of redemption for the subscription ID",
              options: [
                optTenancyId,
                optSubscriptionId,
                {
                  name: "--time-redeemed-greater-than-or-equal-to",
                  description:
                    "The starting redeemed date filter for the redemption history",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-redeemed-less-than",
                  description:
                    "The ending redeemed date filter for the redemption history",
                  args: { name: "datetime" },
                },
                optPage,
                optLimit,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to be used only for list redemptions API",
                  args: { suggestions: ["TIMEREDEEMED"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "monthly-reward-summary",
          description:
            "Object describing the monthly rewards summary for the requested subscription ID",
          subcommands: [
            {
              name: "list-rewards",
              description: "Returns the list of rewards for a subscription ID",
              options: [optTenancyId, optSubscriptionId, optAll, optFromJson],
            },
          ],
        },
        {
          name: "product-summary",
          description:
            "Provides details about product rewards and the usage amount",
          subcommands: [
            {
              name: "list-products",
              description:
                "Provides product information that is specific to a reward usage period and its usage details",
              options: [
                optTenancyId,
                optSubscriptionId,
                {
                  name: "--usage-period-key",
                  description: "The SPM Identifier for the usage period",
                  args: { name: "usage-period-key" },
                  isRequired: true,
                },
                optPage,
                optLimit,
                optSortOrder,
                optSortBy,
                {
                  name: "--producttype",
                  description: "The field to specify the type of product",
                  args: { suggestions: ["ALL", "ELIGIBLE", "INELIGIBLE"] },
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
      name: "usagelimits",
      description:
        "Use the Usage Proxy CLI to list Oracle Support Rewards, view related detailed usage information",
      subcommands: [
        {
          name: "usage-limit-summary",
          description:
            "Encapsulates a collection of Hard and Soft Limits for a resource within a subscription",
          subcommands: [
            {
              name: "list-usage-limits",
              description:
                "Returns the list of usage limit for the subscription ID and tenant ID",
              options: [
                optCompartmentId,
                optSubscriptionId,
                {
                  name: "--limit-type",
                  description: "Hard or soft limit",
                  args: { name: "limit-type" },
                },
                {
                  name: "--resource-type",
                  description: "Resource Name",
                  args: { name: "resource-type" },
                },
                {
                  name: "--service-type",
                  description: "Service Name",
                  args: { name: "service-type" },
                },
                optPage,
                optLimit,
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
  ],
};

export default completionSpec;
