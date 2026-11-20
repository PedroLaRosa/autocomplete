// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optProductId: Fig.Option = {
  name: "--product-id",
  description: "OCID of the product",
  args: { name: "product-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optLimits: Fig.Option = {
  name: "--limits",
  description: "List of limits that this product is associated with",
  args: { name: "json" },
};
const optMeters: Fig.Option = {
  name: "--meters",
  description: "List of meters associated with this product",
  args: { name: "json" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment (remember that the tenancy is simply the root compartment)",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optId: Fig.Option = {
  name: "--id",
  description: "The OCID of the product to be queried",
  args: { name: "id" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "The name of the product to be queried",
  args: { name: "name" },
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
const completionSpec: Fig.Spec = {
  name: "oci-product-catalog",
  description: "Product Catalog",
  subcommands: [
    {
      name: "product",
      description: "Apis to manage the products used by the OCI service teams",
      subcommands: [
        {
          name: "product",
          description:
            "The fields of a product to be displayed to the operator in OCI Console",
          subcommands: [
            {
              name: "activate",
              description: "Activate the target Product",
              options: [
                optProductId,
                optIfMatch,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: {
                    suggestions: ["ACTIVE", "INACTIVE", "NEEDS_ATTENTION"],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--max-wait-seconds",
                  description:
                    "Maximum time to wait for the --wait-for-state state (default 1200)",
                  args: { name: "integer" },
                },
                {
                  name: "--wait-interval-seconds",
                  description:
                    "Check interval for --wait-for-state in seconds (default 30)",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Get product by ID",
              options: [optProductId, optFromJson],
            },
            {
              name: "list",
              description: "List products",
              options: [
                {
                  name: "--skus-contains",
                  description:
                    "The bPartNumber of the SKU to be used to filter the result",
                  args: { name: "skus-contains" },
                },
                optName,
                {
                  name: "--lifecycle-state",
                  description: "The lifecycleState used to filter the result",
                  args: { name: "lifecycle-state" },
                },
                {
                  name: "--time-ready-greater-than-or-equal-to",
                  description:
                    "A filter to return only the products with timeReady field greater than or equal to given value",
                  args: { name: "datetime" },
                },
                optPage,
                optLimit,
                optId,
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
      name: "product-admin",
      description: "Apis to manage the products used by the OCI service teams",
      subcommands: [
        {
          name: "admin-product",
          description: "The properties of a product",
          subcommands: [
            {
              name: "get",
              description: "Get the product by ID",
              options: [optProductId, optFromJson],
            },
          ],
        },
        {
          name: "product",
          description:
            "The fields of a product to be displayed to the operator in OCI Console",
          subcommands: [
            {
              name: "change-compartment",
              description: "Change product compartment",
              options: [
                optProductId,
                {
                  name: "--new-compartment-id",
                  description: "The new product compartment OCID",
                  args: { name: "new-compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create-admin",
              description:
                "Used by the OCI service teams to create a product to control the availability of the relative resources",
              options: [
                optCompartmentId,
                {
                  name: "--name",
                  description: "Name of the product, defined by service teams",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description to the product",
                  args: { name: "description" },
                  isRequired: true,
                },
                {
                  name: "--service-name",
                  description:
                    "Name of the metering service this product relates to",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                optMeters,
                optLimits,
                {
                  name: "--backfill-eligibility",
                  description:
                    "Optional create-time signal that marks the product as eligible for the backfill flow in existing Alloy",
                  args: { suggestions: ["BACKFILL_ELIGIBLE"] },
                },
                {
                  name: "--is-excluded",
                  description: "Optional create-time exclusion flag",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
            {
              name: "delete-admin",
              description: "Delete the product",
              options: [
                optProductId,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform deletion without prompting for confirmation",
                },
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: {
                    suggestions: ["ACTIVE", "INACTIVE", "NEEDS_ATTENTION"],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--max-wait-seconds",
                  description:
                    "Maximum time to wait for the --wait-for-state state (default 1200)",
                  args: { name: "integer" },
                },
                {
                  name: "--wait-interval-seconds",
                  description:
                    "Check interval for --wait-for-state in seconds (default 30)",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
            {
              name: "list-admin",
              description: "List the products with the filters",
              options: [
                optPage,
                optLimit,
                optName,
                optId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment (remember that the tenancy is simply the root compartment)",
                  args: { name: "compartment-id" },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update-admin",
              description: "Update the product",
              options: [
                optProductId,
                {
                  name: "--name",
                  description: "Name of the product, defined by service teams",
                  args: { name: "name" },
                },
                {
                  name: "--description",
                  description: "Description to the product",
                  args: { name: "description" },
                },
                {
                  name: "--state",
                  description: "The current state of the product",
                  args: {
                    suggestions: [
                      "READY",
                      "ENABLED",
                      "DISABLED",
                      "DELETED",
                      "NEEDS_ATTENTION",
                    ],
                  },
                },
                optMeters,
                {
                  name: "--service-name",
                  description:
                    "Name of the metering service this product relates to",
                  args: { name: "service-name" },
                },
                optLimits,
                {
                  name: "--is-excluded",
                  description: "Optional exclusion flag update",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
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
    {
      name: "product-internal",
      description: "Apis to manage the products used by the OCI service teams",
      subcommands: [
        {
          name: "product",
          description:
            "The fields of a product to be displayed to the operator in OCI Console",
          subcommands: [
            {
              name: "change-compartment",
              description: "Change product compartment",
              options: [
                optProductId,
                {
                  name: "--new-compartment-id",
                  description: "The new product compartment OCID",
                  args: { name: "new-compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create-internal",
              description:
                "Used by the OCI service teams to create a product to control the availability of the relative resources",
              options: [
                optCompartmentId,
                {
                  name: "--name",
                  description: "Name of the product, defined by service teams",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description to the product",
                  args: { name: "description" },
                  isRequired: true,
                },
                {
                  name: "--service-name",
                  description:
                    "Name of the metering service this product relates to",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                optMeters,
                optLimits,
                {
                  name: "--backfill-eligibility",
                  description:
                    "Optional create-time signal that marks the product as eligible for the backfill flow in existing Alloy",
                  args: { suggestions: ["BACKFILL_ELIGIBLE"] },
                },
                {
                  name: "--is-excluded",
                  description: "Optional create-time exclusion flag",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
            {
              name: "delete-internal",
              description: "Delete the product",
              options: [
                optProductId,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform deletion without prompting for confirmation",
                },
                optFromJson,
              ],
            },
            {
              name: "get-internal",
              description: "Get the product by ID",
              options: [optProductId, optFromJson],
            },
            {
              name: "list-internal",
              description: "List the products with the filters",
              options: [
                optCompartmentId,
                optPage,
                optLimit,
                optName,
                optId,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update-internal",
              description: "Update the product",
              options: [
                optProductId,
                {
                  name: "--name",
                  description: "Name of the product, defined by service teams",
                  args: { name: "name" },
                },
                {
                  name: "--description",
                  description: "Description to the product",
                  args: { name: "description" },
                },
                {
                  name: "--state",
                  description: "The current state of the product",
                  args: {
                    suggestions: [
                      "READY",
                      "ENABLED",
                      "DISABLED",
                      "DELETED",
                      "NEEDS_ATTENTION",
                    ],
                  },
                },
                optMeters,
                {
                  name: "--service-name",
                  description:
                    "Name of the metering service this product relates to",
                  args: { name: "service-name" },
                },
                optLimits,
                {
                  name: "--is-excluded",
                  description: "Optional exclusion flag update",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
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
