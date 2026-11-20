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
const optLimit: Fig.Option = {
  name: "--limit",
  description: "How many records to return",
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to apply, either ASC or DESC",
  args: { suggestions: ["ASC", "DESC"] },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optPrivateApplicationId: Fig.Option = {
  name: "--private-application-id",
  description: "The unique identifier for the private application",
  args: { name: "private-application-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Exact match name filter",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optServiceCatalogId: Fig.Option = {
  name: "--service-catalog-id",
  description: "The unique identifier for the service catalog",
  args: { name: "service-catalog-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACCEPTED", "FAILED", "SUCCEEDED"] },
  isRepeatable: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The unique identifier for the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The unique identifier for the compartment",
  args: { name: "compartment-id" },
};
const optEntityId: Fig.Option = {
  name: "--entity-id",
  description:
    "The unique identifier of the entity associated with service catalog",
  args: { name: "entity-id" },
};
const optEntityType: Fig.Option = {
  name: "--entity-type",
  description: "The type of the application in the service catalog",
  args: { name: "entity-type" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLogoFileBase64Encoded: Fig.Option = {
  name: "--logo-file-base64-encoded",
  description: "Base64-encoded logo to use as the private application icon",
  args: { name: "logo-file-base64-encoded" },
};
const optLongDescription: Fig.Option = {
  name: "--long-description",
  description: "A long description of the private application",
  args: { name: "long-description" },
};
const optPackageType: Fig.Option = {
  name: "--package-type",
  description: "Name of the package type",
  args: { suggestions: ["STACK", "IMAGE"] },
  isRepeatable: true,
};
const optServiceCatalogId2: Fig.Option = {
  name: "--service-catalog-id",
  description: "The unique identifier for the service catalog",
  args: { name: "service-catalog-id" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "service-catalog",
  description: "Service Catalog",
  subcommands: [
    {
      name: "service-catalog",
      description:
        "The model for an Oracle Cloud Infrastructure Service Catalog",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified service catalog from one compartment to another",
          options: [
            optServiceCatalogId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the service catalog",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a brand new service catalog in a given compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The unique identifier for the compartment where the service catalog will be created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the service catalog",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "The status of a service catalog",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optDefinedTags,
            optFreeformTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified service catalog from the compartment",
          options: [
            optServiceCatalogId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets detailed information about the service catalog including name, compartmentId",
          options: [optServiceCatalogId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all the service catalogs in the given compartment",
          options: [
            optCompartmentId,
            optServiceCatalogId2,
            {
              name: "--status",
              description:
                "Status of the service catalog, use as a filter to filter out all active catalogs",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "Default is TIMECREATED",
              args: { suggestions: ["TIMECREATED"] },
            },
            optSortOrder,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of a previously created service catalog",
          options: [
            optServiceCatalogId,
            {
              name: "--display-name",
              description: "A display name of the service catalog",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "The status of a service catalog",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "configuration",
      description: "Returns the service catalog mode",
      subcommands: [
        {
          name: "get",
          description:
            "Get the detail of whether the tenancy is in service catalog mode or not",
          options: [optCompartmentId, optFromJson],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "service-catalog-association",
      description: "The detailed model for service catalog association",
      subcommands: [
        {
          name: "bulk-replace",
          description:
            "Replace all associations of a given service catalog in one bulk transaction",
          options: [
            optServiceCatalogId,
            {
              name: "--items",
              description:
                "Collection of CreateServiceCatalogAssociationDetails for bulk operation",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an association between service catalog and a resource",
          options: [
            {
              name: "--service-catalog-id",
              description: "Identifier of the service catalog",
              args: { name: "service-catalog-id" },
              isRequired: true,
            },
            {
              name: "--entity-id",
              description:
                "Identifier of the entity being associated with service catalog",
              args: { name: "entity-id" },
              isRequired: true,
            },
            {
              name: "--entity-type",
              description:
                "The type of the entity that is associated with the service catalog",
              args: { name: "entity-type" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes an association between service catalog and a resource",
          options: [
            optIfMatch,
            optForce,
            {
              name: "--association-id",
              description:
                "The unique identifier of the service catalog association. required",
              args: { name: "association-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets detailed information about specific service catalog association",
          options: [
            {
              name: "--association-id",
              description:
                "The unique identifier of the service catalog association. required",
              args: { name: "association-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all the resource associations for a specific service catalog",
          options: [
            optServiceCatalogId2,
            optEntityId,
            optEntityType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "Default is TIMECREATED",
              args: { suggestions: ["TIMECREATED"] },
            },
            optAll,
            optPageSize,
            {
              name: "--association-id",
              description:
                "The unique identifier for the service catalog association",
              args: { name: "association-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "private-application",
      description:
        "Full details of an application or a solution, which lives inside the tenancy and may be included into service",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified private application from one compartment to another",
          options: [
            optPrivateApplicationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the private application",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a private application along with a single package to be hosted",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the private application",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the private application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--short-description",
              description: "A short description of the private application",
              args: { name: "short-description" },
              isRequired: true,
            },
            {
              name: "--package-details",
              args: { name: "json" },
              isRequired: true,
            },
            optLongDescription,
            optLogoFileBase64Encoded,
            optDefinedTags,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing private application",
          options: [
            optPrivateApplicationId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the specified private application",
          options: [optPrivateApplicationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all the private applications in a given compartment",
          options: [
            optCompartmentId,
            {
              name: "--private-application-id",
              description: "The unique identifier for the private application",
              args: { name: "private-application-id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to use to sort listed results",
              args: { suggestions: ["TIMECREATED", "LIFECYCLESTATE"] },
            },
            optSortOrder,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the details of an existing private application",
          options: [
            optPrivateApplicationId,
            {
              name: "--display-name",
              description: "The name of the private application",
              args: { name: "display-name" },
            },
            {
              name: "--short-description",
              description: "A short description of the private application",
              args: { name: "short-description" },
            },
            optLongDescription,
            optLogoFileBase64Encoded,
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-with-stack-package",
          description:
            "Creates a private application along with a single package to be hosted",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the private application",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the private application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--short-description",
              description: "A short description of the private application",
              args: { name: "short-description" },
              isRequired: true,
            },
            {
              name: "--package-details-version",
              description: "The package version",
              args: { name: "package-details-version" },
              isRequired: true,
            },
            {
              name: "--package-details-zip-file-base64-encoded",
              description: "Base-64 payload of the Terraform zip package",
              args: { name: "package-details-zip-file-base64-encoded" },
              isRequired: true,
            },
            optLongDescription,
            optLogoFileBase64Encoded,
            optDefinedTags,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-logo",
          description:
            "Downloads the binary payload of the logo image of the private application",
          options: [
            optPrivateApplicationId,
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
      ],
    },
    {
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given OperationStatus",
              args: { suggestions: ["ACCEPTED", "FAILED", "SUCCEEDED"] },
            },
            {
              name: "--resource-id",
              description:
                "The ID of the resource affected by the work request",
              args: { name: "resource-id" },
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
      name: "private-application-package",
      description:
        "A base object for all types of private application packages",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details of a specific package within a given private application",
          options: [
            {
              name: "--package-id",
              description:
                "The unique identifier for the private application package. required",
              args: { name: "package-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the packages in the specified private application",
          options: [
            optPrivateApplicationId,
            optPackageType,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to use to sort listed results",
              args: { suggestions: ["TIMECREATED", "VERSION"] },
            },
            optSortOrder,
            optDisplayName,
            optAll,
            optPageSize,
            {
              name: "--package-id",
              description:
                "The unique identifier for the private application package",
              args: { name: "package-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "download-config",
          description:
            "Downloads the configuration that was used to create the private application package",
          options: [
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--package-id",
              description:
                "The unique identifier for the private application package. required",
              args: { name: "package-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application-summary",
      description: "The model for summary of an application in service catalog",
      subcommands: [
        {
          name: "list-all-applications",
          description:
            "Lists all the available listings and private applications in a compartment",
          options: [
            optCompartmentId2,
            optEntityType,
            optLimit,
            optPage,
            optDisplayName,
            optEntityId,
            {
              name: "--publisher-id",
              description: "Limit results to just this publisher",
              args: { name: "publisher-id" },
              isRepeatable: true,
            },
            optPackageType,
            {
              name: "--pricing",
              description: "Name of the pricing type",
              args: { suggestions: ["FREE", "BYOL", "PAYGO"] },
              isRepeatable: true,
            },
            {
              name: "--is-featured",
              description: "Indicates whether to show only featured resources",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-applications",
          description:
            "Lists all the applications in a service catalog or a tenancy",
          options: [
            optCompartmentId2,
            optServiceCatalogId2,
            optEntityType,
            optLimit,
            optPage,
            optDisplayName,
            optEntityId,
            {
              name: "--publisher-id",
              description: "Limit results to just this publisher",
              args: { name: "publisher-id" },
              isRepeatable: true,
            },
            optPackageType,
            {
              name: "--pricing",
              description: "Name of the pricing type",
              args: { suggestions: ["FREE", "BYOL", "PAYGO"] },
              isRepeatable: true,
            },
            {
              name: "--is-featured",
              description: "Indicates whether to show only featured resources",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
