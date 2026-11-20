// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
  args: { name: "page" },
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The unique identifier for the compartment",
  args: { name: "compartment-id" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either ASC or DESC",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The unique identifier for the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optListingId: Fig.Option = {
  name: "--listing-id",
  description: "The unique identifier for the listing",
  args: { name: "listing-id" },
  isRequired: true,
};
const optPublicationId: Fig.Option = {
  name: "--publication-id",
  description: "The unique identifier for the publication",
  args: { name: "publication-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "The defined tags associated with this resource, if any",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "The freeform tags associated with this resource, if any",
  args: { name: "json" },
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
const optPackageVersion: Fig.Option = {
  name: "--package-version",
  description: "The version of the package",
  args: { name: "package-version" },
  isRequired: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to use to sort listed results",
  args: { suggestions: ["TIMERELEASED"] },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "DELETING", "DELETED", "FAILED"],
  },
  isRepeatable: true,
};
const optAcceptedAgreementId: Fig.Option = {
  name: "--accepted-agreement-id",
  description: "The unique identifier for the accepted terms of use agreement",
  args: { name: "accepted-agreement-id" },
  isRequired: true,
};
const optLongDescription: Fig.Option = {
  name: "--long-description",
  description: "A long description of the publication to use in the listing",
  args: { name: "long-description" },
};
const optMatchingContextType: Fig.Option = {
  name: "--matching-context-type",
  description: "The type of matching context returned in the response",
  args: { suggestions: ["NONE", "HIGHLIGHTS"] },
};
const optPackageType: Fig.Option = {
  name: "--package-type",
  description:
    "A filter to return only packages that match the given package type exactly",
  args: { name: "package-type" },
};
const optPackageVersion2: Fig.Option = {
  name: "--package-version",
  description: "The version of the package",
  args: { name: "package-version" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "marketplace",
  description: "Marketplace Service",
  subcommands: [
    {
      name: "account",
      description:
        "Use the Marketplace CLI to manage applications in Oracle Cloud Infrastructure Marketplace",
      subcommands: [
        {
          name: "third-party-paid-listing-eligibility",
          description: "Tenant eligibility for using third party paid listings",
          subcommands: [
            {
              name: "get",
              description:
                "Returns eligibility details of the tenancy to see and launch third party paid listings",
              options: [optCompartmentId2, optFromJson],
            },
          ],
        },
        {
          name: "launch-eligibility",
          description:
            "Tenant eligibility and other information for launching a PIC image",
          subcommands: [
            {
              name: "get",
              description:
                "Returns Tenant eligibility and other information for launching a PIC image",
              options: [
                optCompartmentId2,
                {
                  name: "--image-id",
                  description: "Image ID",
                  args: { name: "image-id" },
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
      name: "publication-summary",
      description:
        "The model for a summary of an Oracle Cloud Infrastructure publication",
      subcommands: [
        {
          name: "list-publications",
          description: "Lists the publications in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--listing-type",
              description: "The type of the listing",
              args: { suggestions: ["COMMUNITY", "PARTNER", "PRIVATE"] },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the publication",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--publication-id",
              description: "The unique identifier for the publication",
              args: { name: "publication-id" },
            },
            {
              name: "--operating-systems",
              description: "The operating system of the listing",
              args: { name: "operating-systems" },
              isRepeatable: true,
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "publication-package",
      description: "A base object for all types of publication packages",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details of a specific package version within a given publication",
          options: [optPublicationId, optPackageVersion, optFromJson],
        },
        {
          name: "list",
          description: "Lists the packages in the specified publication",
          options: [
            optPublicationId,
            optPackageVersion2,
            optPackageType,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "agreement",
      description: "The model for an end user license agreement",
      subcommands: [
        {
          name: "get",
          description:
            "Returns a terms of use agreement for a package with a time-based signature that can be used to accept",
          options: [
            optListingId,
            optPackageVersion,
            {
              name: "--agreement-id",
              description: "The unique identifier for the agreement",
              args: { name: "agreement-id" },
              isRequired: true,
            },
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns the terms of use agreements that must be accepted before you can deploy the specified version of",
          options: [
            optListingId,
            optPackageVersion,
            optLimit,
            optPage,
            optCompartmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "marketplace-metadata-public-key-summary",
      description:
        "Model that contains signed marketplace instance metadata and associated signature in JWT form",
      subcommands: [
        {
          name: "list-marketplace-metadata-public-keys",
          description:
            "Get public certificates used in JWT signing, in JSON Web Key Sets format",
          options: [
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["keyId"] },
            },
            optCompartmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of workrequest",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of the specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-work-request-errors",
          description: "List all errors for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-work-request-logs",
          description: "List all logs for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List all work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--work-request-id",
              description: "The OCID of the work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources whose status matches the given OperationStatus",
              args: {
                suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"],
              },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tax-summary",
      description:
        "Tax implication that current tenant may be eligible while using specific listing",
      subcommands: [
        {
          name: "list-taxes",
          description:
            "Returns list of all tax implications that current tenant may be liable to once they launch the listing",
          options: [optListingId, optCompartmentId, optAll, optFromJson],
        },
      ],
    },
    {
      name: "create-marketplace-external-attested-metadata-details",
      description:
        "Payload that customer will use to generate JWT for launched instance associated with Marketplace listing",
      subcommands: [
        {
          name: "create-marketplace-external-attested-metadata",
          description: "Generates attested marketplace metadata",
          options: [
            {
              name: "--instance-id",
              description: "Unique id that identifies the associated instance",
              args: { name: "instance-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment that associated instance is",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "report-collection",
      description:
        "A collection of reports that match the parameters of the request",
      subcommands: [
        {
          name: "list-reports",
          description:
            "Lists reports in the compartment that match the specified report type and date",
          options: [
            {
              name: "--report-type",
              description: "The type of the report",
              args: { name: "report-type" },
              isRequired: true,
            },
            {
              name: "--date",
              description: "Date, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
              isRequired: true,
            },
            optCompartmentId2,
            optPage,
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing-summary",
      description:
        "The model for a summary of an Oracle Cloud Infrastructure Marketplace listing",
      subcommands: [
        {
          name: "search-listings",
          description:
            "Queries all Marketplace Applications to find listings that match the specified criteria",
          options: [
            {
              name: "--type",
              description:
                "The type of SearchDetails, whether FreeText or Structured",
              args: { suggestions: ["FreeText", "Structured"] },
              isRequired: true,
            },
            optMatchingContextType,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
        {
          name: "search-listings-structured",
          description:
            "Queries all Marketplace Applications to find listings that match the specified criteria",
          options: [
            optMatchingContextType,
            optPage,
            optLimit,
            {
              name: "---search-query",
              description:
                "The structured query describing which resources to search for. required",
              args: { name: "search-query" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "search-listings-free-text",
          description:
            "Queries all Marketplace Applications to find listings that match the specified criteria",
          options: [
            optMatchingContextType,
            optPage,
            optLimit,
            {
              name: "---search-text",
              description: "The text to search for. required",
              args: { name: "search-text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "publication",
      description:
        "The model for an Oracle Cloud Infrastructure Marketplace publication",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified publication from one compartment to another",
          options: [
            optPublicationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to move the publication",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a publication of the specified listing type with an optional default package",
          options: [
            {
              name: "--listing-type",
              description:
                "The publisher category to which the publication belongs",
              args: { suggestions: ["COMMUNITY", "PARTNER", "PRIVATE"] },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name of the publication, which is also used in the listing",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--short-description",
              description:
                "A short description of the publication to use in the listing",
              args: { name: "short-description" },
              isRequired: true,
            },
            {
              name: "--support-contacts",
              description:
                "Contact information for getting support from the publisher for the listing",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the publication",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--package-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-agreement-acknowledged",
              description:
                "Whether the publisher acknowledged that they have the right and authority to share the contents of",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optLongDescription,
            optDefinedTags,
            optFreeformTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-publication-create-image-publication-package",
          description:
            "Creates a publication of the specified listing type with an optional default package",
          options: [
            {
              name: "--listing-type",
              description:
                "The publisher category to which the publication belongs",
              args: { suggestions: ["COMMUNITY", "PARTNER", "PRIVATE"] },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name of the publication, which is also used in the listing",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--short-description",
              description:
                "A short description of the publication to use in the listing",
              args: { name: "short-description" },
              isRequired: true,
            },
            {
              name: "--support-contacts",
              description:
                "Contact information for getting support from the publisher for the listing",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the publication",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-agreement-acknowledged",
              description:
                "Whether the publisher acknowledged that they have the right and authority to share the contents of",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--package-details-package-version",
              description: "The package version",
              args: { name: "package-details-package-version" },
              isRequired: true,
            },
            {
              name: "--package-details-operating-system",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--package-details-eula",
              description:
                "The end user license agreeement (EULA) that consumers of this listing must accept",
              args: { name: "json" },
              isRequired: true,
            },
            optLongDescription,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--package-details-image-id",
              description:
                "The unique identifier for the base image of the publication",
              args: { name: "package-details-image-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a publication, which also removes the associated listing from anywhere it was published",
          options: [
            optPublicationId,
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
          description: "Gets the details of the specified publication",
          options: [optPublicationId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the details of an existing publication",
          options: [
            optPublicationId,
            {
              name: "--name",
              description:
                "The name of the publication, which is also used in the listing",
              args: { name: "name" },
            },
            {
              name: "--short-description",
              description:
                "A short description of the publication to use in the listing",
              args: { name: "short-description" },
            },
            optLongDescription,
            {
              name: "--support-contacts",
              description:
                "Contact information for getting support from the publisher for the listing",
              args: { name: "json" },
            },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "publisher",
      description: "The model for a publisher",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the list of all the publishers of listings available in Oracle Cloud Infrastructure Marketplace",
          options: [
            {
              name: "--publisher-id",
              description: "Limit results to just this publisher",
              args: { name: "publisher-id" },
            },
            optLimit,
            optPage,
            optCompartmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "report-type-collection",
      description: "A collection of report types",
      subcommands: [
        {
          name: "list-report-types",
          description: "Lists available types of reports for the compartment",
          options: [optCompartmentId2, optPage, optAll, optFromJson],
        },
      ],
    },
    {
      name: "accepted-agreement",
      description: "The model for an accepted terms of use agreement",
      subcommands: [
        {
          name: "create",
          description:
            "Accepts a terms of use agreement for a specific package version of a listing",
          options: [
            {
              name: "--compartment-id",
              description:
                "The unique identifier for the compartment where the agreement will be accepted",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--listing-id",
              description:
                "The unique identifier for the listing associated with the agreement",
              args: { name: "listing-id" },
              isRequired: true,
            },
            {
              name: "--package-version",
              description: "The package version associated with the agreement",
              args: { name: "package-version" },
              isRequired: true,
            },
            {
              name: "--agreement-id",
              description: "The agreement to accept",
              args: { name: "agreement-id" },
              isRequired: true,
            },
            {
              name: "--signature",
              description:
                "A signature generated for the listing package agreements that you can retrieve with GetAgreement",
              args: { name: "signature" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A display name for the accepted agreement",
              args: { name: "display-name" },
            },
            optDefinedTags,
            optFreeformTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a previously accepted terms of use agreement from the list of agreements that Marketplace checks",
          options: [
            optAcceptedAgreementId,
            {
              name: "--signature",
              description:
                "Previously, the signature generated for the listing package terms of use agreement",
              args: { name: "signature" },
            },
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
          name: "get",
          description:
            "Gets the details of a specific, previously accepted terms of use agreement",
          options: [optAcceptedAgreementId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the terms of use agreements that have been accepted in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The display name of the resource",
              args: { name: "display-name" },
            },
            {
              name: "--listing-id",
              description: "The unique identifier for the listing",
              args: { name: "listing-id" },
            },
            optPackageVersion2,
            {
              name: "--accepted-agreement-id",
              description:
                "The unique identifier for the accepted terms of use agreement",
              args: { name: "accepted-agreement-id" },
            },
            {
              name: "--sort-by",
              description: "The field to use to sort listed results",
              args: { suggestions: ["TIMEACCEPTED"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the display name or tags associated with a listing's previously accepted terms of use agreement",
          options: [
            optAcceptedAgreementId,
            {
              name: "--display-name",
              description: "A display name for the accepted agreement",
              args: { name: "display-name" },
            },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing",
      description:
        "The model for an Oracle Cloud Infrastructure Marketplace listing",
      subcommands: [
        {
          name: "export",
          description:
            "Exports container images or helm chart from marketplace to customer's registry",
          options: [
            optListingId,
            optPackageVersion,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to export container image or helm chart",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--container-repository-path",
              description:
                "The repository path (/Content/General/Concepts/identifiers.htm) of the container reposistory where",
              args: { name: "container-repository-path" },
              isRequired: true,
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets detailed information about a listing, including the listing's name, version, description, and resources",
          options: [optListingId, optCompartmentId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of listings from Oracle Cloud Infrastructure Marketplace by searching keywords and filtering",
          options: [
            {
              name: "--name",
              description: "The name of the listing",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--listing-id",
              description: "The unique identifier for the listing",
              args: { name: "listing-id" },
            },
            {
              name: "--image-id",
              description: "The image identifier of the listing",
              args: { name: "image-id" },
            },
            {
              name: "--publisher-id",
              description: "Limit results to just this publisher",
              args: { name: "publisher-id" },
            },
            optPackageType,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--category",
              description: "Name of the product category or categories",
              args: { name: "category" },
              isRepeatable: true,
            },
            {
              name: "--pricing",
              description: "Name of the pricing type",
              args: { suggestions: ["FREE", "BYOL", "PAYGO"] },
              isRepeatable: true,
            },
            {
              name: "--is-featured",
              description: "Indicates whether to show only featured listings",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--listing-types",
              description: "The type of the listing",
              args: { suggestions: ["COMMUNITY", "PARTNER", "PRIVATE"] },
              isRepeatable: true,
            },
            {
              name: "--operating-systems",
              description: "The operating system of the listing",
              args: { name: "operating-systems" },
              isRepeatable: true,
            },
            optCompartmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "category",
      description: "The model for a summary of product categories for listings",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the list of all the categories for listings published to Oracle Cloud Infrastructure Marketplace",
          options: [
            optLimit,
            optPage,
            optCompartmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "package",
      description: "A base object for all types of listing packages",
      subcommands: [
        {
          name: "get",
          description:
            "Get the details of the specified version of a package, including information needed to launch the package",
          options: [
            optListingId,
            optPackageVersion,
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets the list of packages for a listing",
          options: [
            optListingId,
            optPackageVersion2,
            optPackageType,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optCompartmentId,
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
