const acquirePolicyToken: Fig.Option = {
  name: "--acquire-policy-token",
  description:
    "Acquiring an Azure Policy token automatically for this resource operation",
};

const changeReference: Fig.Option = {
  name: "--change-reference",
  description: "The related change reference ID for this resource operation",
  args: { name: "change-reference" },
};

const completion: Fig.Spec = {
  name: "billing",
  description: "Manage Azure Billing",
  subcommands: [
    {
      name: "account",
      description: "Billing account",
      subcommands: [
        {
          name: "list",
          description: "List the billing accounts that a user has access to",
          options: [
            {
              name: "--expand",
              description:
                "May be used to expand the soldTo, invoice sections and billing profiles",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "list-invoice-section",
          description:
            "List the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--billing-account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "billing-account-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a billing account by its ID",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description:
                "May be used to expand the soldTo, invoice sections and billing profiles",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the properties of a billing account. Currently, displayName and address can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing account",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--billing-profiles-value",
              description:
                "The billing profiles associated with the billing account. Expected value: json-string/@json-file",
              args: { name: "billing-profiles-value" },
            },
            changeReference,
            {
              name: "--departments",
              description:
                "The departments associated to the enrollment. Expected value: json-string/@json-file",
              args: { name: "departments" },
            },
            {
              name: "--display-name",
              description: "The billing account name",
              args: { name: "display-name" },
            },
            {
              name: "--enrollment-accounts",
              description:
                "The accounts associated to the enrollment. Expected value: json-string/@json-file",
              args: { name: "enrollment-accounts" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sold-to",
              description:
                "The address of the individual or organization that is responsible for the billing account",
              args: { name: "sold-to", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing account is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing account",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--expand",
              description:
                "May be used to expand the soldTo, invoice sections and billing profiles",
              args: { name: "expand" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
        {
          name: "invoice-section",
          description: "Manage account invoice section",
          subcommands: [
            {
              name: "list",
              description:
                "List all invoice sections for which a user has access",
              options: [
                {
                  name: "--billing-account-name",
                  description: "Billing Account Id",
                  args: { name: "billing-account-name" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description: "May be used to expand the billingProfiles",
                  args: { name: "expand" },
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the InvoiceSection by id",
              options: [
                {
                  name: "--billing-account-name",
                  description: "Billing Account Id",
                  args: { name: "billing-account-name" },
                  isRequired: true,
                },
                {
                  name: "--invoice-section-name",
                  description: "InvoiceSection Id",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description: "May be used to expand the billingProfiles",
                  args: { name: "expand" },
                },
              ],
            },
          ],
        },
        {
          name: "reservation",
          description: "Manage account reservation",
          subcommands: [
            {
              name: "list",
              description:
                "List the reservations for a billing account and the roll up counts of reservations group by provisioning states",
              options: [
                {
                  name: "--billing-account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "billing-account-name" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "May be used to filter by reservation properties. The filter supports 'eq', 'or', and 'and'. It does not currently support 'ne', 'gt', 'le', 'ge', or 'not'",
                  args: { name: "filter" },
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
                {
                  name: "--orderby",
                  description:
                    "May be used to sort order by reservation properties",
                  args: { name: "orderby" },
                },
                {
                  name: "--refresh-summary",
                  description:
                    "To indicate whether to refresh the roll up counts of the reservations group by provisioning states",
                  args: { name: "refresh-summary" },
                },
                {
                  name: "--selected-state",
                  description: "The selected provisioning state",
                  args: { name: "selected-state" },
                },
              ],
            },
          ],
        },
        {
          name: "transaction",
          description: "Manage billing acount transaction",
          subcommands: [
            {
              name: "list",
              description:
                "List the billed and unbilled transactions by billing account name for given start and end date. Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed under pending invoice ID and do not include tax. Tax is added to the amount once an invoice is generated",
              options: [
                {
                  name: "--billing-account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "billing-account-name" },
                  isRequired: true,
                },
                {
                  name: "--period-end-date",
                  description:
                    "The end date to fetch the transactions. The date should be specified in MM-DD-YYYY format",
                  args: { name: "period-end-date" },
                  isRequired: true,
                },
                {
                  name: "--period-start-date",
                  description:
                    "The start date to fetch the transactions. The date should be specified in MM-DD-YYYY format",
                  args: { name: "period-start-date" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "May be used to filter by transaction type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value are separated by a colon (:)",
                  args: { name: "filter" },
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "agreement",
      description: "Display billing agreement",
      subcommands: [
        {
          name: "list",
          description: "List the agreements for a billing account",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the participants",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show",
          description: "Get an agreement by ID",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies an agreement",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the participants",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "balance",
      description: "Billing balance",
      subcommands: [
        {
          name: "show",
          description:
            "The available credit balance for a billing profile. This is the balance that can be used for pay now to settle due or past due invoices. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "customer",
      description: "Billing customer",
      subcommands: [
        {
          name: "list",
          description:
            "List the customers that are billed to a billing account. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "May be used to filter the list of customers",
              args: { name: "filter" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
            {
              name: "--search",
              description:
                "Used for searching customers by their name. Any customer with name containing the search text will be included in the response",
              args: { name: "search" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a customer by its ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--customer-name", "--name", "-n"],
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description:
                "May be used to expand enabledAzurePlans and resellers",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "enrollment-account",
      description: "Manage enrollment account",
      subcommands: [
        {
          name: "list",
          description: "Lists the enrollment accounts the caller has access to",
        },
        {
          name: "show",
          description: "Gets a enrollment account by name",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the enrollment account",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "billing-permission",
          description: "Manage enrollment account billing permission",
          subcommands: [
            {
              name: "list",
              description:
                "List the billing permissions the caller has on an enrollment account",
              options: [
                {
                  name: "--billing-account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "billing-account-name" },
                  isRequired: true,
                },
                {
                  name: "--enrollment-account-name",
                  description:
                    "The ID that uniquely identifies an enrollment account",
                  args: { name: "enrollment-account-name" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "instruction",
      description: "Manage billing instruction",
      subcommands: [
        {
          name: "create",
          description:
            "Create an instruction. These are custom billing instructions and are only applicable for certain customers",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Instruction Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--amount",
              description: "The amount budgeted for this billing instruction",
              args: { name: "amount" },
            },
            changeReference,
            {
              name: "--creation-date",
              description: "The date this billing instruction was created",
              args: { name: "creation-date" },
            },
            {
              name: "--end-date",
              description:
                "The date this billing instruction is no longer in effect",
              args: { name: "end-date" },
            },
            {
              name: "--start-date",
              description: "The date this billing instruction goes into effect",
              args: { name: "start-date" },
            },
          ],
        },
        {
          name: "list",
          description: "List the instructions by billing profile id",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the instruction by name. These are custom billing instructions and are only applicable for certain customers",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Instruction Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an instruction. These are custom billing instructions and are only applicable for certain customers",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Instruction Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--amount",
              description: "The amount budgeted for this billing instruction",
              args: { name: "amount" },
            },
            changeReference,
            {
              name: "--creation-date",
              description: "The date this billing instruction was created",
              args: { name: "creation-date" },
            },
            {
              name: "--end-date",
              description:
                "The date this billing instruction is no longer in effect",
              args: { name: "end-date" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--start-date",
              description: "The date this billing instruction goes into effect",
              args: { name: "start-date" },
            },
          ],
        },
      ],
    },
    {
      name: "invoice",
      description: "Manage invoice",
      subcommands: [
        {
          name: "download",
          description: "Get URL to download invoice",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--download-token",
              description:
                "The download token with document source and document ID",
              args: { name: "download-token" },
            },
            {
              name: "--download-urls",
              description:
                "Space-separated list of download urls for individual",
              args: { name: "download-urls", isVariadic: true },
            },
            {
              name: "--invoice-name",
              description: "The ID that uniquely identifies an invoice",
              args: { name: "invoice-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List the invoices for a subscription",
          options: [
            {
              name: "--period-end-date",
              description:
                "The end date to fetch the invoices. The date should be specified in YYYY-MM-DD format",
              args: { name: "period-end-date" },
              isRequired: true,
            },
            {
              name: "--period-start-date",
              description:
                "The start date to fetch the invoices. The date should be specified in YYYY-MM-DD format",
              args: { name: "period-start-date" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies an invoice",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
            },
            {
              name: "--by-subscription",
              description:
                "When provided, it must work with --invoice-name to get an invoice by subscription ID and invoice ID",
            },
          ],
        },
        {
          name: "section",
          description: "Manage invoice section",
          subcommands: [
            {
              name: "create",
              description:
                "Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--display-name",
                  description: "The name of the invoice section",
                  args: { name: "display-name" },
                },
                {
                  name: "--labels",
                  description:
                    "Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2",
                  args: { name: "labels", isOptional: true, isVariadic: true },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "initiate-transfer",
              description:
                "Sends a request to a user in another billing account to transfer billing ownership of their subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--billing-account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "billing-account-name" },
                  isRequired: true,
                },
                {
                  name: "--billing-profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "billing-profile-name" },
                  isRequired: true,
                },
                {
                  name: "--invoice-section-name",
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--recipient-email-id",
                  description:
                    "The email ID of the recipient to whom the transfer request is sent",
                  args: { name: "recipient-email-id" },
                },
                {
                  name: "--reseller-id",
                  description:
                    "Optional MPN ID of the reseller for transfer requests that are sent from a Microsoft Partner Agreement billing account",
                  args: { name: "reseller-id" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the invoice sections that a user has access to. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--display-name",
                  description: "The name of the invoice section",
                  args: { name: "display-name" },
                },
                {
                  name: "--labels",
                  description:
                    "Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2",
                  args: { name: "labels", isOptional: true, isVariadic: true },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the billing invoice section is met",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--created",
                  description:
                    "Wait until created with 'provisioningState' at 'Succeeded'",
                },
                {
                  name: "--custom",
                  description:
                    "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
                  args: { name: "custom" },
                },
                { name: "--deleted", description: "Wait until deleted" },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: "--timeout",
                  description: "Maximum wait in seconds",
                  args: { name: "timeout" },
                },
                {
                  name: "--updated",
                  description:
                    "Wait until updated with provisioningState at 'Succeeded'",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "period",
      description: "Manage billing periods for a subscription",
      subcommands: [
        {
          name: "list",
          description:
            "List the available billing periods for a subscription in reverse chronological order",
          options: [
            {
              name: "--filter",
              description:
                "May be used to filter billing periods by billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'",
              args: { name: "filter" },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: "--skiptoken",
              description:
                "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skiptoken" },
            },
            {
              name: "--top",
              description:
                "May be used to limit the number of results to the most recent N billing periods",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a named billing period",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the billing period. Run the az billing period list command to list the name of billing period",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "permission",
      description: "List billing permissions",
      subcommands: [
        {
          name: "list",
          description:
            "List the billing permissions the caller has on a billing account",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      description: "Billing policy",
      subcommands: [
        {
          name: "show",
          description:
            'Show the policies for a customer or for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement."',
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--marketplace-purchases",
              description:
                "The policy that controls whether Azure marketplace purchases are allowed for a billing profile",
              args: {
                name: "marketplace-purchases",
                suggestions: ["AllAllowed", "NotAllowed", "OnlyFreeAllowed"],
              },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
            {
              name: "--reservation-purchases",
              description:
                "The policy that controls whether Azure reservation purchases are allowed for a billing profile",
              args: {
                name: "reservation-purchases",
                suggestions: ["Allowed", "NotAllowed"],
              },
            },
            {
              name: "--view-charges",
              description:
                "The policy that controls whether users with Azure RBAC access to a subscription can view its charges",
              args: {
                name: "view-charges",
                suggestions: ["Allowed", "NotAllowed"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "product",
      description: "Billing product",
      subcommands: [
        {
          name: "list",
          description:
            "List the products for a billing account. These don't include products billed based on usage. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--filter",
              description:
                "May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value are separated by a colon (:)",
              args: { name: "filter" },
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "move",
          description:
            "Moves a product's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a product by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the properties of a Product. Currently, auto renew can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auto-renew",
              description:
                "Indicates whether auto renewal is turned on or off for a product",
              args: { name: "auto-renew", suggestions: ["Off", "On"] },
            },
            {
              name: "--billing-frequency",
              description: "The frequency at which the product will be billed",
              args: {
                name: "billing-frequency",
                suggestions: ["Monthly", "OneTime", "UsageBased"],
              },
            },
            changeReference,
            {
              name: "--status",
              description: "The current status of the product",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "AutoRenew",
                  "Cancelled",
                  "Disabled",
                  "Expired",
                  "Expiring",
                  "Inactive",
                  "PastDue",
                ],
              },
            },
          ],
        },
        {
          name: "validate-move",
          description:
            "Validate if a product's charges can be moved to a new invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
            },
          ],
        },
      ],
    },
    {
      name: "profile",
      description: "Manage profile",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--bill-to",
              description: "Billing address",
              args: { name: "bill-to", isOptional: true, isVariadic: true },
            },
            changeReference,
            {
              name: "--display-name",
              description: "The name of the billing profile",
              args: { name: "display-name" },
            },
            {
              name: "--enabled-azure-plans",
              description: "Information about the enabled azure plans",
              args: {
                name: "enabled-azure-plans",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--invoice-email-opt-in",
              description:
                "Flag controlling whether the invoices for the billing profile are sent through email",
              args: {
                name: "invoice-email-opt-in",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--invoice-sections-value",
              description:
                "The invoice sections associated to the billing profile. Expected value: json-string/@json-file",
              args: { name: "invoice-sections-value" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--po-number",
              description:
                "The purchase order name that will appear on the invoices generated for the billing profile",
              args: { name: "po-number" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the billing profiles that a user has access to. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the invoice sections",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the invoice sections",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--bill-to",
              description: "Billing address",
              args: { name: "bill-to", isOptional: true, isVariadic: true },
            },
            changeReference,
            {
              name: "--display-name",
              description: "The name of the billing profile",
              args: { name: "display-name" },
            },
            {
              name: "--enabled-azure-plans",
              description: "Information about the enabled azure plans",
              args: {
                name: "enabled-azure-plans",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--invoice-email-opt-in",
              description:
                "Flag controlling whether the invoices for the billing profile are sent through email",
              args: {
                name: "invoice-email-opt-in",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--invoice-sections-value",
              description:
                "The invoice sections associated to the billing profile. Expected value: json-string/@json-file",
              args: { name: "invoice-sections-value" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--po-number",
              description:
                "The purchase order name that will appear on the invoices generated for the billing profile",
              args: { name: "po-number" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing profile is met",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--expand",
              description: "May be used to expand the invoice sections",
              args: { name: "expand" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
        {
          name: "reservation",
          description: "Manage profile reservation",
          subcommands: [
            {
              name: "list",
              description:
                "List the reservations for a billing profile and the roll up counts of reservations group by provisioning state",
              options: [
                {
                  name: "--billing-account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "billing-account-name" },
                  isRequired: true,
                },
                {
                  name: "--billing-profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "billing-profile-name" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "May be used to filter by reservation properties. The filter supports 'eq', 'or', and 'and'. It does not currently support 'ne', 'gt', 'le', 'ge', or 'not'",
                  args: { name: "filter" },
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
                {
                  name: "--orderby",
                  description:
                    "May be used to sort order by reservation properties",
                  args: { name: "orderby" },
                },
                {
                  name: "--refresh-summary",
                  description:
                    "To indicate whether to refresh the roll up counts of the reservations group by provisioning state",
                  args: { name: "refresh-summary" },
                },
                {
                  name: "--selected-state",
                  description: "The selected provisioning state",
                  args: { name: "selected-state" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "property",
      description: "Billing property",
      subcommands: [
        {
          name: "show",
          description:
            "Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement",
        },
        {
          name: "update",
          description:
            "Update the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--cost-center",
              description: "The cost center applied to the subscription",
              args: { name: "cost-center" },
            },
          ],
        },
      ],
    },
    {
      name: "role-assignment",
      description: "Billing role-assignment",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a role assignment",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the role assignments for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the role assignment detail for the caller within different scopes. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a role assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
      ],
    },
    {
      name: "role-definition",
      description: "Display billing role-definition",
      subcommands: [
        {
          name: "list",
          description:
            "List the role definitions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the role definition details",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name that uniquely identifies a role definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
      ],
    },
    {
      name: "subscription",
      description: "Billing subscription",
      subcommands: [
        {
          name: "list",
          description:
            "List the subscriptions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "move",
          description:
            "Moves a subscription's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a subscription by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the properties of a billing subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--cost-center",
              description: "The cost center applied to the subscription",
              args: { name: "cost-center" },
            },
            {
              name: "--sku-id",
              description: "The sku ID of the Azure plan for the subscription",
              args: { name: "sku-id" },
            },
            {
              name: "--subscription-billing-status",
              description: "The current billing status of the subscription",
              args: {
                name: "subscription-billing-status",
                suggestions: [
                  "Abandoned",
                  "Active",
                  "Deleted",
                  "Inactive",
                  "Warning",
                ],
              },
            },
          ],
        },
        {
          name: "validate-move",
          description:
            "Validate if a subscription's charges can be moved to a new invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing subscription is met",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
      ],
    },
    {
      name: "transaction",
      description: "Billing transaction",
      subcommands: [
        {
          name: "list",
          description:
            "List the transactions for an invoice. Transactions include purchases, refunds and Azure usage charges",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--invoice-name",
              description: "The ID that uniquely identifies an invoice",
              args: { name: "invoice-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "transfer",
      description: "Manage transfer",
      subcommands: [
        {
          name: "accept-transfer",
          description: "Accepts a transfer request",
          options: [
            {
              name: "--transfer-name",
              description: "The ID that uniquely identifies a transfer request",
              args: { name: "transfer-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--product-details",
              description:
                'Request parameters to accept transfer. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "product-details", isVariadic: true },
            },
          ],
        },
        {
          name: "list",
          description: "List the transfer requests received by the caller",
          options: [
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a transfer request by ID. The caller must be the recipient of the transfer request",
          options: [
            {
              name: "--transfer-name",
              description: "The ID that uniquely identifies a transfer request",
              args: { name: "transfer-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
