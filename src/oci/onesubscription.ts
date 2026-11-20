// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the root compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The value of the 'opc-next-page' response header from the previous \"List\" call",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending ('ASC') or descending ('DESC')",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["ORDERNUMBER", "TIMEINVOICING"] },
};
const optFields: Fig.Option = {
  name: "--fields",
  description:
    "Partial response refers to an optimization technique offered by the RESTful web APIs",
  args: { name: "fields" },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "onesubscription",
  description: "OneSubscription",
  subcommands: [
    {
      name: "billing-schedule",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "billing-schedule-summary",
          description: "Billing schedule details related to subscription ID",
          subcommands: [
            {
              name: "list-billing-schedules",
              description:
                "This list API returns all billing schedules for a given subscription ID",
              options: [
                optCompartmentId,
                {
                  name: "--subscription-id",
                  description:
                    "This parameter gets the billing schedules for a particular subscription ID",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                {
                  name: "--subscribed-service-id",
                  description:
                    "This parameter gets the billing schedules for a particular subscribed service",
                  args: { name: "subscribed-service-id" },
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
      name: "commitment",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "commitment",
          description: "Subscribed service commitment summary",
          subcommands: [
            {
              name: "get",
              description:
                "Returns the commitment details corresponding to the provided ID",
              options: [
                {
                  name: "--commitment-id",
                  description: "The commitment ID",
                  args: { name: "commitment-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns all commitments for a particular subscribed service",
              options: [
                {
                  name: "--subscribed-service-id",
                  description:
                    "Obtains the commitments for a particular subscribed service",
                  args: { name: "subscribed-service-id" },
                  isRequired: true,
                },
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
      ],
    },
    {
      name: "computed-usage",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "aggregated-computed-usage-summary",
          description: "Subscribed service contract details",
          subcommands: [
            {
              name: "list-aggregated-computed-usages",
              description:
                "Collection API that returns a list of aggregated computed usage details",
              options: [
                optCompartmentId,
                {
                  name: "--subscription-id",
                  description:
                    "Subscription ID is an identifier associated with the service, used for filtering the computed usage in SPM",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                {
                  name: "--time-from",
                  description:
                    "Initial date to filter computed usage data in SPM",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--time-to",
                  description:
                    "Final date to filter computed usage data in SPM, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--parent-product",
                  description:
                    "Product part number for the subscribed service line, referred to as the parent product",
                  args: { name: "parent-product" },
                },
                {
                  name: "--grouping",
                  description:
                    "Grouping criteria to use for aggregating the computed usage, whether hourly (HOURLY), daily (DAILY), monthly",
                  args: { suggestions: ["HOURLY", "DAILY", "MONTHLY", "NONE"] },
                },
                {
                  name: "--limit",
                  description:
                    'The maximum number of aggregatedComputedUsages items to return within the Subscription "List" call',
                  args: { name: "integer" },
                },
                optPage,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "computed-usage",
          description: "Computed usage summary object",
          subcommands: [
            {
              name: "get",
              description:
                "Returns computed usage corresponding to the passed ID",
              options: [
                {
                  name: "--computed-usage-id",
                  description: "The computed usage ID",
                  args: { name: "computed-usage-id" },
                  isRequired: true,
                },
                optCompartmentId,
                optFields,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Collection API that returns a list of computed usages for the given filters",
              options: [
                optCompartmentId,
                {
                  name: "--subscription-id",
                  description:
                    "Subscription ID is an identifier associated with the service, used for filtering the computed usage in SPM",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                {
                  name: "--time-from",
                  description:
                    "Initial date to filter computed usage data in SPM",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--time-to",
                  description:
                    "Final date to filter computed usage data in SPM, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--parent-product",
                  description:
                    "Product part number for the subscribed service line, called the parent product",
                  args: { name: "parent-product" },
                },
                {
                  name: "--computed-product",
                  description: "Product part number for the computed usage",
                  args: { name: "computed-product" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "timeCreated",
                      "timeOfArrival",
                      "timeMeteredOn",
                    ],
                  },
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
      name: "invoice-summary",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "invoiceline-computed-usage",
          description: "Computed usage summary object",
          subcommands: [
            {
              name: "list",
              description:
                "Collection API that returns a list of invoiced computed usages for the given invoice line ID",
              options: [
                optCompartmentId,
                {
                  name: "--invoice-line-id",
                  description:
                    "Invoice line identifier - Primary Key SPM (Subscription Plan Management)",
                  args: { name: "invoice-line-id" },
                  isRequired: true,
                },
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by invoiced computed usages",
                  args: { suggestions: ["timeCreated", "meteredOnDate"] },
                },
                optLimit,
                optPage,
                optFields,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "invoice",
          description: "Invoice details",
          subcommands: [
            {
              name: "list",
              description:
                "Collection API that returns a list of invoices according to the given filters",
              options: [
                optCompartmentId,
                {
                  name: "--ar-customer-transaction-id",
                  description:
                    "Accounts receivable unique identifier for an invoice",
                  args: { name: "ar-customer-transaction-id" },
                  isRequired: true,
                },
                {
                  name: "--time-from",
                  description:
                    "Initial date to filter invoice data in SPM (Subscription Plan Management)",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-to",
                  description:
                    "Final date to filter invoice data in SPM (Subscription Plan Management)",
                  args: { name: "datetime" },
                },
                optSortOrder,
                optSortBy,
                optLimit,
                optPage,
                optFields,
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
      name: "organization-subscription",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "organization-subscription",
          description: "Subscription summary",
          subcommands: [
            {
              name: "list",
              description:
                "Returns data for the list of subscription IDs returned from the Organizations API",
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
      ],
    },
    {
      name: "ratecard",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "rate-card",
          description: "Rate card summary",
          subcommands: [
            {
              name: "list",
              description:
                "Returns all rate cards for a given subscription ID and account ID (if provided)",
              options: [
                {
                  name: "--subscription-id",
                  description: "Line-level subscription ID",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                optCompartmentId,
                {
                  name: "--time-from",
                  description:
                    "Gets the rate cards whose effective start date starts on or after a particular date",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-to",
                  description:
                    "Gets the rate cards whose effective end date ends on or before a particular date",
                  args: { name: "datetime" },
                },
                {
                  name: "--part-number",
                  description: "Gets the rate cards filterd by the part number",
                  args: { name: "part-number" },
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
      name: "subscribed-service",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "subscribed-service",
          description: "Subscribed service contract details",
          subcommands: [
            {
              name: "get",
              description:
                "Returns the subscribed service details corresponding to the provided ID",
              options: [
                {
                  name: "--subscribed-service-id",
                  description: "The subscribed service ID",
                  args: { name: "subscribed-service-id" },
                  isRequired: true,
                },
                optFields,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns all subscribed services for a given Subscription ID",
              options: [
                optCompartmentId,
                {
                  name: "--subscription-id",
                  description: "Line level subscription ID",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                {
                  name: "--order-line-id",
                  description:
                    "Order line identifier at subscribed service level",
                  args: { name: "integer" },
                },
                {
                  name: "--status",
                  description:
                    "This parameter filters subscribed services based on its status",
                  args: { name: "status" },
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
      name: "subscription",
      description: "OneSubscription CLI",
      subcommands: [
        {
          name: "usage-ledger-summary",
          description: "Revenue invoice consumption detail for a subscription",
          subcommands: [
            {
              name: "list-usage-ledgers",
              description:
                "Returns revenue invoice consumption details for authorization orders that draw down from the requested",
              options: [
                {
                  name: "--subscription-id",
                  description: "Subscription identifier",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                optCompartmentId,
                optLimit,
                optPage,
                {
                  name: "--sort-order",
                  description:
                    "The usage-ledger sort order to use, either ascending ('ASC') or descending ('DESC')",
                  args: { suggestions: ["ASC", "DESC"] },
                },
                {
                  name: "--sort-by",
                  description: "The usage-ledger field to sort by",
                  args: {
                    suggestions: ["timeConsumption", "consumptionAmount"],
                  },
                },
                {
                  name: "--time-consumption-greater-than-or-equal-to",
                  description:
                    "The lower bound of the consumption-date range, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-consumption-less-than",
                  description:
                    "The upper bound of the consumption-date range, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "subscription-details",
          description: "Commitment summary for a subscription",
          subcommands: [
            {
              name: "get",
              description: "Returns the commitment summary for a subscription",
              options: [
                {
                  name: "--subscription-id",
                  description: "Subscription identifier",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                optCompartmentId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "subscription",
          description: "Subscription summary",
          subcommands: [
            {
              name: "list",
              description:
                "Returns all subscriptions for a given plan number, subscription ID, or buyer email",
              options: [
                optCompartmentId,
                {
                  name: "--plan-number",
                  description: "The plan number",
                  args: { name: "plan-number" },
                },
                {
                  name: "--subscription-id",
                  description: "Line level subscription ID",
                  args: { name: "subscription-id" },
                },
                {
                  name: "--buyer-email",
                  description: "Buyer email ID",
                  args: { name: "buyer-email" },
                },
                {
                  name: "--is-commit-info-required",
                  description:
                    "Boolean value to determine whether commitment services are shown",
                  args: { name: "boolean", suggestions: ["true", "false"] },
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
  ],
};

export default completionSpec;
