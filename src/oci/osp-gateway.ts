// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optOspHomeRegion: Fig.Option = {
  name: "--osp-home-region",
  description: "The home region's public name of the logged in user",
  args: { name: "osp-home-region" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optEmail: Fig.Option = {
  name: "--email",
  description: "User email",
  args: { name: "email" },
  isRequired: true,
};
const optInternalInvoiceId: Fig.Option = {
  name: "--internal-invoice-id",
  description: "The identifier of the invoice",
  args: { name: "internal-invoice-id" },
  isRequired: true,
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description: "Subscription id(OCID)",
  args: { name: "subscription-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSubscription: Fig.Option = {
  name: "--subscription",
  args: { name: "json" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "osp-gateway",
  description: "OSP Gateway",
  subcommands: [
    {
      name: "address-rule-service",
      description: "This site describes all the Rest endpoints of OSP Gateway",
      subcommands: [
        {
          name: "address-rule",
          description: "Addres rule information",
          subcommands: [
            {
              name: "get",
              description:
                "Get the address rule for the compartment based on the country code",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                {
                  name: "--country-code",
                  description:
                    "Country code for the address rule in ISO-3166-1 2-letter format",
                  args: { name: "country-code" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "address-service",
      description: "This site describes all the Rest endpoints of OSP Gateway",
      subcommands: [
        {
          name: "address",
          description: "Address details model",
          subcommands: [
            {
              name: "get",
              description: "Get the address by id for the compartment",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                {
                  name: "--address-id",
                  description: "The identifier of the address",
                  args: { name: "address-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "verify",
              description: "Verify address",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                {
                  name: "--address-key",
                  description: "Address identifier",
                  args: { name: "address-key" },
                },
                {
                  name: "--line1",
                  description: "Address line 1",
                  args: { name: "line1" },
                },
                {
                  name: "--line2",
                  description: "Address line 2",
                  args: { name: "line2" },
                },
                {
                  name: "--line3",
                  description: "Address line 3",
                  args: { name: "line3" },
                },
                {
                  name: "--line4",
                  description: "Address line 4",
                  args: { name: "line4" },
                },
                {
                  name: "--street-name",
                  description: "Street name of the address",
                  args: { name: "street-name" },
                },
                {
                  name: "--street-number",
                  description: "Street number of the address",
                  args: { name: "street-number" },
                },
                {
                  name: "--city",
                  description: "Name of the city",
                  args: { name: "city" },
                },
                {
                  name: "--county",
                  description: "County of the address",
                  args: { name: "county" },
                },
                {
                  name: "--country",
                  description: "Country of the address",
                  args: { name: "country" },
                },
                {
                  name: "--province",
                  description: "Province of the address",
                  args: { name: "province" },
                },
                {
                  name: "--postal-code",
                  description: "Post code of the address",
                  args: { name: "postal-code" },
                },
                {
                  name: "--state",
                  description: "State of the address",
                  args: { name: "state" },
                },
                {
                  name: "--email-address",
                  description: "Contact person email address",
                  args: { name: "email-address" },
                },
                {
                  name: "--company-name",
                  description: "Name of the customer company",
                  args: { name: "company-name" },
                },
                {
                  name: "--first-name",
                  description: "First name of the contact person",
                  args: { name: "first-name" },
                },
                {
                  name: "--middle-name",
                  description: "Middle name of the contact person",
                  args: { name: "middle-name" },
                },
                {
                  name: "--last-name",
                  description: "Last name of the contact person",
                  args: { name: "last-name" },
                },
                {
                  name: "--phone-country-code",
                  description: "Phone country code of the contact person",
                  args: { name: "phone-country-code" },
                },
                {
                  name: "--phone-number",
                  description: "Phone number of the contact person",
                  args: { name: "phone-number" },
                },
                {
                  name: "--job-title",
                  description: "Job title of the contact person",
                  args: { name: "job-title" },
                },
                {
                  name: "--department-name",
                  description: "Department name of the customer company",
                  args: { name: "department-name" },
                },
                {
                  name: "--internal-number",
                  description: "Internal number of the customer company",
                  args: { name: "internal-number" },
                },
                {
                  name: "--contributor-class",
                  description: "Contributor class of the customer company",
                  args: { name: "contributor-class" },
                },
                {
                  name: "--state-inscription",
                  description: "State Inscription",
                  args: { name: "state-inscription" },
                },
                {
                  name: "--municipal-inscription",
                  description: "Municipal Inscription",
                  args: { name: "municipal-inscription" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "invoice-service",
      description: "This site describes all the Rest endpoints of OSP Gateway",
      subcommands: [
        {
          name: "invoice",
          description: "Invoice details",
          subcommands: [
            {
              name: "download-pdf-content",
              description: "Returns an invoice in pdf format",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                optInternalInvoiceId,
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Returns an invoice by invoice id",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                optInternalInvoiceId,
                optFromJson,
              ],
            },
            {
              name: "list-invoice-lines",
              description: "Returns the invoice product list by invoice id",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                optInternalInvoiceId,
                optPage,
                optLimit,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Returns a list of invoices",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                {
                  name: "--invoice-id",
                  description: "The invoice query param (not unique)",
                  args: { name: "invoice-id" },
                },
                {
                  name: "--type",
                  description:
                    "A filter to only return resources that match the given type exactly",
                  args: {
                    suggestions: [
                      "HARDWARE",
                      "SUBSCRIPTION",
                      "SUPPORT",
                      "LICENSE",
                      "EDUCATION",
                      "CONSULTING",
                      "SERVICE",
                      "USAGE",
                    ],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--search-text",
                  description:
                    "A filter to only return resources that match the given value",
                  args: { name: "search-text" },
                },
                {
                  name: "--time-invoice-start",
                  description:
                    "Description: Start time (UTC) of the target invoice date range for which to fetch invoice data (inclusive)",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-invoice-end",
                  description:
                    "Description: End time (UTC) of the target invoice date range for which to fetch invoice data (exclusive)",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-payment-start",
                  description:
                    "Description: Start time (UTC) of the target payment date range for which to fetch invoice data (inclusive)",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-payment-end",
                  description:
                    "Description: End time (UTC) of the target payment date range for which to fetch invoice data (exclusive)",
                  args: { name: "datetime" },
                },
                {
                  name: "--status",
                  description:
                    "A filter to only return resources that match one of the status elements",
                  args: {
                    suggestions: [
                      "OPEN",
                      "PAST_DUE",
                      "PAYMENT_SUBMITTED",
                      "CLOSED",
                    ],
                  },
                  isRepeatable: true,
                },
                optPage,
                optLimit,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "INVOICE_NO",
                      "REF_NO",
                      "STATUS",
                      "TYPE",
                      "INVOICE_DATE",
                      "DUE_DATE",
                      "PAYM_REF",
                      "TOTAL_AMOUNT",
                      "BALANCE_DUE",
                    ],
                  },
                },
                {
                  name: "--sort-order",
                  description:
                    "The sort order to use (ascending or descending)",
                  args: { suggestions: ["ASC", "DESC"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "pay",
              description: "Pay an invoice",
              options: [
                optOspHomeRegion,
                optInternalInvoiceId,
                optCompartmentId,
                optEmail,
                {
                  name: "--language-code",
                  description: "Language code",
                  args: { name: "language-code" },
                },
                {
                  name: "--return-url",
                  description: "Callback URL",
                  args: { name: "return-url" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "subscription-service",
      description: "This site describes all the Rest endpoints of OSP Gateway",
      subcommands: [
        {
          name: "subscription",
          description:
            "Subscription details object which extends the SubscriptionSummary",
          subcommands: [
            {
              name: "authorize-subscription-payment",
              description: "PSD2 authorization for subscription payment",
              options: [
                optOspHomeRegion,
                optSubscriptionId,
                optCompartmentId,
                optSubscription,
                {
                  name: "--language-code",
                  description: "Language code",
                  args: { name: "language-code" },
                  isRequired: true,
                },
                optEmail,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Get the subscription plan",
              options: [
                optSubscriptionId,
                optOspHomeRegion,
                optCompartmentId,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Get the subscription data for the compartment",
              options: [
                optOspHomeRegion,
                optCompartmentId,
                optPage,
                optLimit,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "INVOICE_NO",
                      "REF_NO",
                      "STATUS",
                      "TYPE",
                      "INVOICE_DATE",
                      "DUE_DATE",
                      "PAYM_REF",
                      "TOTAL_AMOUNT",
                      "BALANCE_DUE",
                    ],
                  },
                },
                {
                  name: "--sort-order",
                  description:
                    "The sort order to use (ascending or descending)",
                  args: { suggestions: ["ASC", "DESC"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "pay",
              description: "Pay a subscription",
              options: [
                optOspHomeRegion,
                optSubscriptionId,
                optCompartmentId,
                optSubscription,
                {
                  name: "--language-code",
                  description: "Language code",
                  args: { name: "language-code" },
                  isRequired: true,
                },
                optEmail,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Update plan of the subscription",
              options: [
                optSubscriptionId,
                optOspHomeRegion,
                optCompartmentId,
                optSubscription,
                optEmail,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform update without prompting for confirmation",
                },
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
