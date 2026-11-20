// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The compartment OCID used for the license record, product license, and configuration",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optProductLicenseId: Fig.Option = {
  name: "--product-license-id",
  description: "Unique product license identifier",
  args: { name: "product-license-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optIsCompartmentIdInSubtree: Fig.Option = {
  name: "--is-compartment-id-in-subtree",
  description: "Indicates if the given compartment is the root compartment",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, whether ASC or DESC",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLicenseRecordId: Fig.Option = {
  name: "--license-record-id",
  description: "Unique license record identifier",
  args: { name: "license-record-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "license-manager",
  description: "License Manager",
  subcommands: [
    {
      name: "product-license",
      description: "The product license details",
      subcommands: [
        {
          name: "create",
          description: "Creates a new product license",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID where product licenses are created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-vendor-oracle",
              description:
                "Specifies if the product license vendor is Oracle or a third party",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Name of the product license",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--license-unit",
              description: "The product license unit",
              args: { suggestions: ["OCPU", "NAMED_USER_PLUS", "PROCESSORS"] },
              isRequired: true,
            },
            {
              name: "--vendor-name",
              description:
                "The product license vendor name, for example: Microsoft, RHEL, and so on",
              args: { name: "vendor-name" },
            },
            {
              name: "--images",
              description:
                "The image details associated with the product license",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Removes a product license",
          options: [
            optProductLicenseId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves product license details by product license ID in a given compartment",
          options: [optProductLicenseId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the list of images for a product license",
          options: [
            optProductLicenseId,
            {
              name: "--images",
              description:
                "The image details associated with the product license",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves all the product licenses from a given compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optIsCompartmentIdInSubtree,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["totalLicenseUnitsConsumed"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-product-license-consumers",
          description:
            "Retrieves the product license consumers for a particular product license ID",
          options: [
            optProductLicenseId,
            optCompartmentId,
            optLimit,
            optPage,
            optIsCompartmentIdInSubtree,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["licenseUnitsRequired"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-top-utilized-product-licenses",
          description:
            "Retrieves the top utilized product licenses for a given compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optIsCompartmentIdInSubtree,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["totalLicenseUnitsConsumed"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-top-utilized-resources",
          description:
            "Retrieves the top utilized resources for a given compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optIsCompartmentIdInSubtree,
            {
              name: "--resource-unit-type",
              description:
                "A filter to return only resources whose unit matches the given resource unit",
              args: { suggestions: ["OCPU", "ECPU"] },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["totalUnits"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "configuration",
      description: "Details of the compartment-specific configuration",
      subcommands: [
        {
          name: "get",
          description: "Retrieves configuration for a compartment",
          options: [optCompartmentId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the configuration for the compartment",
          options: [
            optCompartmentId,
            {
              name: "--email-ids",
              description:
                "List of email IDs associated with the configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "license-record",
      description: "License record summary",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new license record for the given product license ID",
          options: [
            {
              name: "--display-name",
              description: "License record name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--is-perpetual",
              description: "Specifies if the license record term is perpertual",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--is-unlimited",
              description: "Specifies if the license count is unlimited",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optProductLicenseId,
            {
              name: "--expiration-date",
              description:
                "The license record end date in RFC 3339 date format",
              args: { name: "datetime" },
            },
            {
              name: "--support-end-date",
              description:
                "The license record support end date in RFC 3339 date format",
              args: { name: "datetime" },
            },
            {
              name: "--license-count",
              description:
                "The number of license units added by a user in a license record",
              args: { name: "integer" },
            },
            {
              name: "--product-id",
              description: "The license record product ID",
              args: { name: "product-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Removes a license record",
          options: [
            optLicenseRecordId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves license record details by the license record ID in a given compartment",
          options: [optLicenseRecordId, optFromJson],
        },
        {
          name: "update",
          description: "Updates license record entity details",
          options: [
            optLicenseRecordId,
            {
              name: "--display-name",
              description: "License record name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--is-perpetual",
              description: "Specifies if the license record term is perpertual",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--is-unlimited",
              description: "Specifies if the license count is unlimited",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--expiration-date",
              description:
                "The license record end date in RFC 3339 date format",
              args: { name: "datetime" },
            },
            {
              name: "--support-end-date",
              description:
                "The license record support end date in RFC 3339 date format",
              args: { name: "datetime" },
            },
            {
              name: "--license-count",
              description:
                "The number of license units added by a user in a license record",
              args: { name: "integer" },
            },
            {
              name: "--product-id",
              description: "The license record product ID",
              args: { name: "product-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves all license records for a given product license ID",
          options: [
            optProductLicenseId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["expirationDate"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "import-licenses",
          description:
            "Bulk upload the product licenses and license records for a given compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID where license records are created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--file-name",
              description: "Name of the file that is being uploaded",
              args: { name: "file-name" },
              isRequired: true,
            },
            {
              name: "--file-content",
              description: "The file to be uploaded",
              args: { name: "file-content" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "license-metric",
      description: "Overview of product license and resources usage",
      subcommands: [
        {
          name: "get",
          description: "Retrieves the license metrics for a given compartment",
          options: [optCompartmentId, optIsCompartmentIdInSubtree, optFromJson],
        },
      ],
    },
    {
      name: "bulk-upload-template",
      description: "The bulk upload template file",
      subcommands: [
        {
          name: "get",
          description: "Provides the bulk upload file template",
          options: [optFromJson],
        },
      ],
    },
  ],
};

export default completionSpec;
