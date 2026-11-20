// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "NEEDS_ATTENTION",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optListingRevisionId: Fig.Option = {
  name: "--listing-revision-id",
  description: "Listing revision",
  args: { name: "listing-revision-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The unique identifier for the compartment",
  args: { name: "compartment-id" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The name for the listing revision attachment",
  args: { name: "display-name" },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only resources that match the entire name given",
  args: { name: "name" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optListingRevisionAttachmentId: Fig.Option = {
  name: "--listing-revision-attachment-id",
  description: "Attachment OCID",
  args: { name: "listing-revision-attachment-id" },
  isRequired: true,
};
const optArtifactId: Fig.Option = {
  name: "--artifact-id",
  description: "Artifact OCID",
  args: { name: "artifact-id" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "The display name for the artifact",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optContentLanguage: Fig.Option = {
  name: "--content-language",
  args: { name: "json" },
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "The name for the listing revision",
  args: { name: "display-name" },
};
const optListingRevisionId2: Fig.Option = {
  name: "--listing-revision-id",
  description: "The OCID for the listing revision in Marketplace Publisher",
  args: { name: "listing-revision-id" },
  isRequired: true,
};
const optLongDescription: Fig.Option = {
  name: "--long-description",
  description: "A long description for the listing revision",
  args: { name: "long-description" },
};
const optShortDescription: Fig.Option = {
  name: "--short-description",
  description: "A short description for the listing revision",
  args: { name: "short-description" },
};
const optSupportContacts: Fig.Option = {
  name: "--support-contacts",
  description:
    "Contact information to use to get support from the publisher for the listing revision",
  args: { name: "json" },
};
const optSupportLinks: Fig.Option = {
  name: "--support-links",
  description: "Links to support resources for the listing revision",
  args: { name: "json" },
};
const optTagline: Fig.Option = {
  name: "--tagline",
  description: "The tagline for the listing revision",
  args: { name: "tagline" },
};
const optUsageInformation: Fig.Option = {
  name: "--usage-information",
  description: "Usage information for the listing revision",
  args: { name: "usage-information" },
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
  isRepeatable: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description for this specified attachment",
  args: { name: "description" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "The description for the listing revision attachment",
  args: { name: "description" },
};
const optListingId: Fig.Option = {
  name: "--listing-id",
  description: "Listing OCID",
  args: { name: "listing-id" },
  isRequired: true,
};
const optListingRevisionPackageId: Fig.Option = {
  name: "--listing-revision-package-id",
  description: "Unique listing revision package identifier",
  args: { name: "listing-revision-package-id" },
  isRequired: true,
};
const optTermId: Fig.Option = {
  name: "--term-id",
  description: "Term OCID",
  args: { name: "term-id" },
  isRequired: true,
};
const optTermVersionId: Fig.Option = {
  name: "--term-version-id",
  description: "Term version OCID",
  args: { name: "term-version-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The unique identifier for the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSourceType: Fig.Option = {
  name: "--source-type",
  description: "The specified attachment type is Internal or External",
  args: { name: "source-type" },
};
const optVanityUrl: Fig.Option = {
  name: "--vanity-url",
  description: "Custom link to the listing",
  args: { name: "vanity-url" },
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "INACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optListingRevisionId3: Fig.Option = {
  name: "--listing-revision-id",
  description: "OCID of the listing revision",
  args: { name: "listing-revision-id" },
  isRequired: true,
};
const optDemoUrl: Fig.Option = {
  name: "--demo-url",
  description: "Url to demo of the listing",
  args: { name: "demo-url" },
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optHeadline: Fig.Option = {
  name: "--headline",
  description: "Single line introduction for the listing revision",
  args: { name: "headline" },
  isRequired: true,
};
const optHeadline2: Fig.Option = {
  name: "--headline",
  description: "Single line introduction for the listing revision",
  args: { name: "headline" },
};
const optKeywords: Fig.Option = {
  name: "--keywords",
  description: "Keywords associated for the listing revision",
  args: { name: "keywords" },
};
const optKeywords2: Fig.Option = {
  name: "--keywords",
  description: "Keywords associated with the listing revision",
  args: { name: "keywords" },
};
const optListingId2: Fig.Option = {
  name: "--listing-id",
  description: "Listing OCID to query resource against",
  args: { name: "listing-id" },
};
const optListingId3: Fig.Option = {
  name: "--listing-id",
  description: "The unique identifier for the listing this revision belongs to",
  args: { name: "listing-id" },
  isRequired: true,
};
const optRecommendedServiceProviderListingIds: Fig.Option = {
  name: "--recommended-service-provider-listing-ids",
  description: "OCIDs of service listings attached to lead gen listing",
  args: { name: "json" },
};
const optSelfPacedTrainingUrl: Fig.Option = {
  name: "--self-paced-training-url",
  description: "Url to training resources of the listing",
  args: { name: "self-paced-training-url" },
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "The current status of the Listing revision",
  args: { name: "status" },
};
const optSupportedlanguages: Fig.Option = {
  name: "--supportedlanguages",
  description: "Languages supported by the listing revision",
  args: { name: "json" },
};
const optSupportedlanguages2: Fig.Option = {
  name: "--supportedlanguages",
  description: "Languages supported by the publisher for the listing revision",
  args: { name: "json" },
};
const optSystemRequirements: Fig.Option = {
  name: "--system-requirements",
  description: "System requirements for the listing revision",
  args: { name: "system-requirements" },
};
const optVersionDetails: Fig.Option = {
  name: "--version-details",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCustomerInstanceReportExportId: Fig.Option = {
  name: "--customer-instance-report-export-id",
  description: "Customer Instance Report export identifier",
  args: { name: "customer-instance-report-export-id" },
  isRequired: true,
};
const optListingRevisionNoteId: Fig.Option = {
  name: "--listing-revision-note-id",
  description: "Unique listing revision note identifier",
  args: { name: "listing-revision-note-id" },
  isRequired: true,
};
const optPackageVersion: Fig.Option = {
  name: "--package-version",
  description:
    "A filter to return only report records that match the package version",
  args: { name: "package-version" },
};
const optRealm: Fig.Option = {
  name: "--realm",
  description:
    "A filter to return only report records that match the instance realm",
  args: { name: "realm" },
};
const optRegionParameterconflict: Fig.Option = {
  name: "--region-parameterconflict",
  description:
    "A filter to return only report records that match the instance region",
  args: { name: "region-parameterconflict" },
};
const optShape: Fig.Option = {
  name: "--shape",
  description:
    "A filter to return only report records that match the instance shape",
  args: { name: "shape" },
};
const optStatus2: Fig.Option = {
  name: "--status",
  description:
    "A filter to return only report records that match the instance status",
  args: {
    suggestions: [
      "PROVISIONING",
      "RUNNING",
      "STOPPED",
      "TERMINATING",
      "TERMINATED",
      "DISABLED",
      "STARTING",
      "STOPPING",
      "SNAPSHOTTING",
    ],
  },
};
const optTimeInstanceCreationFromDate: Fig.Option = {
  name: "--time-instance-creation-from-date",
  description:
    "The inclusive earliest instance creation time, in RFC 3339 format",
  args: { name: "datetime" },
};
const optTimeInstanceCreationToDate: Fig.Option = {
  name: "--time-instance-creation-to-date",
  description:
    "The inclusive latest instance creation time, in RFC 3339 format",
  args: { name: "datetime" },
};
const optTimeInstanceTerminationFromDate: Fig.Option = {
  name: "--time-instance-termination-from-date",
  description:
    "The inclusive earliest instance termination time, in RFC 3339 format",
  args: { name: "datetime" },
};
const optTimeInstanceTerminationToDate: Fig.Option = {
  name: "--time-instance-termination-to-date",
  description:
    "The inclusive latest instance termination time, in RFC 3339 format",
  args: { name: "datetime" },
};
const optWaitForState6: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "marketplace-publisher",
  description: "MarketplacePublisherService",
  subcommands: [
    {
      name: "administrator-artifact",
      description:
        "Use the Marketplace Publisher CLI to manage the publishing of applications in Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "admin-publisher",
          description: "The model for a publisher details",
          subcommands: [
            {
              name: "update-admin-artifact-status",
              description:
                "Updates the specified Artifact Status identified by the id",
              options: [
                {
                  name: "--new-status",
                  description: "The new status for the artifact",
                  args: { name: "new-status" },
                  isRequired: true,
                },
                optArtifactId,
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "administrator-publisher",
      description:
        "Use the Marketplace Publisher CLI to manage the publishing of applications in Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "admin-publisher",
          description: "The model for a publisher details",
          subcommands: [
            {
              name: "get",
              description: "Gets a Publisher by identifier",
              options: [
                {
                  name: "--publisher-id",
                  description: "Publisher OCID",
                  args: { name: "publisher-id" },
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
      name: "marketplace-administrator",
      description:
        "Use the Marketplace Publisher CLI to manage the publishing of applications in Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "admin-listing-revision-package-collection",
          description: "Results of package search",
          subcommands: [
            {
              name: "list-admin-listing-revision-packages",
              description: "Gets the list of packages for a listing revision",
              options: [
                optListingRevisionId3,
                optCompartmentId2,
                optDisplayName2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only packages their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "CREATING",
                      "UPDATING",
                      "ACTIVE",
                      "INACTIVE",
                      "DELETING",
                      "DELETED",
                      "FAILED",
                    ],
                  },
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
        {
          name: "admin-term-version",
          description: "Model object for the term version details",
          subcommands: [
            {
              name: "get",
              description: "Gets a Term Version by the identifier",
              options: [optTermVersionId, optFromJson],
            },
          ],
        },
        {
          name: "admin-term-collection",
          description: "Results of the term search",
          subcommands: [
            {
              name: "list-admin-terms",
              description: "Returns a list of the publisher terms",
              options: [
                optLimit,
                optPage,
                optCompartmentId2,
                optSortOrder,
                optSortBy,
                optName,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "admin-work-request-summary",
          description: "A summary of the status of a work request",
          subcommands: [
            {
              name: "list-admin-work-requests",
              description: "Lists the work requests in a compartment",
              options: [
                optCompartmentId,
                {
                  name: "--work-request-id",
                  description: "The ID of the asynchronous work request",
                  args: { name: "work-request-id" },
                },
                {
                  name: "--status",
                  description:
                    "A filter to return only resources their lifecycleState matches the given OperationStatus",
                  args: {
                    suggestions: [
                      "ACCEPTED",
                      "IN_PROGRESS",
                      "WAITING",
                      "NEEDS_ATTENTION",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELING",
                      "CANCELED",
                    ],
                  },
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
          name: "admin-listing-revision-attachment-collection",
          description: "Results of the listing attachments search",
          subcommands: [
            {
              name: "list-admin-listing-revision-attachments",
              description:
                "Gets the list of attachments for a listing revision",
              options: [
                optListingRevisionId3,
                optDisplayName2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only attachments their lifecycleState matches the given lifecycleState",
                  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
                },
                optCompartmentId2,
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
        {
          name: "admin-listing",
          description: "The model for the Admin Marketplace Publisher listing",
          subcommands: [
            {
              name: "get",
              description: "Returns details of the Listing",
              options: [optListingId, optFromJson],
            },
          ],
        },
        {
          name: "market",
          description: "The model for the market details",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Market",
              options: [
                {
                  name: "--name",
                  description: "The name of the market",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--code",
                  description: "The code of the market",
                  args: { name: "code" },
                  isRequired: true,
                },
                {
                  name: "--category-code",
                  description: "The category code of the market",
                  args: { name: "category-code" },
                  isRequired: true,
                },
                {
                  name: "--bill-to-countries",
                  description: "Bill to countries for the market",
                  args: { name: "json" },
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
          name: "admin-publisher-sku-collection",
          description: "Results of admin listing SKU retrieval",
          subcommands: [
            {
              name: "list-admin-publisher-skus",
              description: "Retrieve a list of publisher SKUs",
              options: [optLimit, optPage, optAll, optPageSize, optFromJson],
            },
          ],
        },
        {
          name: "admin-artifact-collection",
          description: "Results of the artifact search",
          subcommands: [
            {
              name: "list-admin-artifacts",
              description: "Lists the artifacts in your compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--publisher-id",
                  description: "Unique publisher identifier",
                  args: { name: "publisher-id" },
                },
                {
                  name: "--artifact-type",
                  description:
                    "A filter to return only artifacts with specific type",
                  args: {
                    suggestions: [
                      "CONTAINER_IMAGE",
                      "HELM_CHART",
                      "MACHINE_IMAGE",
                      "STACK",
                    ],
                  },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only artifacts with their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "CREATING",
                      "UPDATING",
                      "ACTIVE",
                      "DELETING",
                      "DELETED",
                      "FAILED",
                    ],
                  },
                },
                optDisplayName2,
                {
                  name: "--status",
                  description:
                    "A filter to return only artifacts with specific status",
                  args: {
                    suggestions: ["IN_PROGRESS", "AVAILABLE", "UNAVAILABLE"],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort admin artifacts by",
                  args: {
                    suggestions: ["timeCreated", "timeUpdated", "displayName"],
                  },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "admin-term-version-collection",
          description: "Results of the term version search",
          subcommands: [
            {
              name: "list-admin-term-versions",
              description: "Returns a list of the publisher term versions",
              options: [
                optTermId,
                optCompartmentId2,
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                optDisplayName2,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "admin-listing-revision-collection",
          description: "Results of admin listing revision search",
          subcommands: [
            {
              name: "list-admin-listing-revisions",
              description: "Returns a list of all the Listing revisions",
              options: [
                {
                  name: "--listing-id",
                  description: "Listing OCID",
                  args: { name: "listing-id" },
                },
                optCompartmentId2,
                {
                  name: "--listing-type",
                  description:
                    "A filter to return listings based on their type",
                  args: {
                    suggestions: [
                      "OCI_APPLICATION",
                      "LEAD_GENERATION",
                      "SERVICE",
                    ],
                  },
                },
                optDisplayName2,
                {
                  name: "--publisher-id",
                  description: "Unique publisher identifier",
                  args: { name: "publisher-id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only listing revisions their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "CREATING",
                      "UPDATING",
                      "ACTIVE",
                      "DELETING",
                      "DELETED",
                      "FAILED",
                    ],
                  },
                },
                {
                  name: "--listing-revision-status",
                  description:
                    "A filter to return only listing revisions their status matches the given listing revision status",
                  args: {
                    suggestions: [
                      "NEW",
                      "PENDING_REVIEW",
                      "REVIEW_IN_PROGRESS",
                      "REJECTED",
                      "APPROVED",
                      "PUBLISH_IN_PROGRESS",
                      "PUBLISH_FAILED",
                      "PUBLISHED",
                      "PUBLISH_AS_PRIVATE_FAILED",
                      "PUBLISHED_AS_PRIVATE",
                      "PUBLISH_AS_PRIVATE_IN_PROGRESS",
                      "UNPUBLISH_IN_PROGRESS",
                      "UNPUBLISHED",
                    ],
                  },
                },
                {
                  name: "--status-csv",
                  description:
                    "Comma-separated listing revision status values used to filter OpenSearch admin listing revision results",
                  args: { name: "status-csv" },
                },
                {
                  name: "--product",
                  description:
                    "Product value used to filter OpenSearch admin listing revision results",
                  args: { name: "product" },
                },
                {
                  name: "--time-created-after",
                  description: "Filters data created after the specified date",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-updated-after",
                  description: "Filters data updated after the specified date",
                  args: { name: "datetime" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: ["timeCreated", "timeUpdated", "displayName"],
                  },
                },
                {
                  name: "--pricing-type",
                  description:
                    "Optional pricing type filter for listing admin listing revisions",
                  args: { name: "pricing-type" },
                },
                {
                  name: "--is-private-offer-enabled",
                  description:
                    "Optional private offer enabled filter for listing admin listing revisions",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--data-source",
                  description:
                    "Optional source for listing admin listing revisions",
                  args: { name: "data-source" },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "admin-listing-revision",
          description:
            "The model for an Oracle Cloud Infrastructure Marketplace Publisher listing revision",
          subcommands: [
            {
              name: "change-listing-revision-status-to-new",
              description: "Change the Listing Revision status to New",
              options: [optListingRevisionId, optIfMatch, optFromJson],
            },
            {
              name: "get",
              description: "Returns details of the Listing revision",
              options: [optListingRevisionId, optFromJson],
            },
          ],
        },
        {
          name: "admin-artifact",
          description: "Base model object for the artifacts",
          subcommands: [
            {
              name: "get",
              description: "Gets the specified artifact's information",
              options: [optArtifactId, optFromJson],
            },
          ],
        },
        {
          name: "admin-listing-revision-attachment",
          description: "A attachment for the listing revision",
          subcommands: [
            {
              name: "get",
              description:
                "Get the details of the specified listing revision attachment",
              options: [optListingRevisionAttachmentId, optFromJson],
            },
          ],
        },
        {
          name: "admin-listing-revision-package",
          description:
            "A base object for all types of listing revision packages",
          subcommands: [
            {
              name: "get",
              description:
                "Get the details of the specified version of a package",
              options: [optListingRevisionPackageId, optFromJson],
            },
          ],
        },
        {
          name: "admin-term",
          description: "Base model object for the admin term",
          subcommands: [
            {
              name: "get",
              description: "Gets a Term by identifier",
              options: [optTermId, optFromJson],
            },
          ],
        },
      ],
    },
    {
      name: "market-collection",
      description: "Results of a market search",
      subcommands: [
        {
          name: "list-markets",
          description: "Lists the markets in your compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optName,
            optListingId2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing-collection",
      description: "Results of listing search",
      subcommands: [
        {
          name: "list-listings",
          description: "Lists the listings in your compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only listings their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--listing-type",
              description: "A filter to return listings based on their type",
              args: {
                suggestions: ["OCI_APPLICATION", "LEAD_GENERATION", "SERVICE"],
              },
            },
            optName,
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
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels the work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description: "Gets details of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given OperationStatus",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
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
      name: "support-doc-collection",
      description: "Results of a supportDoc search",
      subcommands: [
        {
          name: "list-support-docs",
          description: "Lists the supportDocs in your compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--support-doc-group",
              description: "SupportDoc Group",
              args: { name: "support-doc-group" },
            },
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "lead-collection",
      description: "The model for the collection of Marketplace Publisher Lead",
      subcommands: [
        {
          name: "list-leads",
          description:
            "Lists the leads in your compartment that belong to a listing",
          options: [
            {
              name: "--compartment-id",
              description: "The ID of the compartment in which to list leads",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optListingId2,
            optLimit,
            optPage,
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
      ],
    },
    {
      name: "publisher-collection",
      description: "Results of a publisher search",
      subcommands: [
        {
          name: "list-publishers",
          description: "Returns a list of publishers",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "artifact",
      description: "Base model object for the artifacts",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified artifact to the specified compartment within the same tenancy",
          options: [
            optArtifactId,
            {
              name: "--compartment-id",
              description:
                "The unique identifier of the compartment for the artifact",
              args: { name: "compartment-id" },
              isRequired: true,
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
          description: "Creates a new artifact in your compartment",
          options: [
            optCompartmentId3,
            {
              name: "--artifact-type",
              description: "Artifact Type for the artifact",
              args: {
                suggestions: [
                  "CONTAINER_IMAGE",
                  "HELM_CHART",
                  "MACHINE_IMAGE",
                  "STACK",
                ],
              },
              isRequired: true,
            },
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-artifact-create-kubernetes-image-artifact-details",
          description: "Creates a new artifact in your compartment",
          options: [
            optCompartmentId3,
            { name: "--helm-chart", args: { name: "json" }, isRequired: true },
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--container-image-artifact-ids",
              description:
                "List of container image artifact uniquie identifiers included in the helm chart",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-artifact-create-stack-artifact-details",
          description: "Creates a new artifact in your compartment",
          options: [
            optCompartmentId3,
            { name: "--stack", args: { name: "json" }, isRequired: true },
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-artifact-create-container-image-artifact-details",
          description: "Creates a new artifact in your compartment",
          options: [
            optCompartmentId3,
            {
              name: "--container-image",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-artifact-create-machine-image-artifact-details",
          description: "Creates a new artifact in your compartment",
          options: [
            optCompartmentId3,
            {
              name: "--machine-image",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName3,
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
          description: "Deletes the specified artifact",
          options: [
            optArtifactId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified artifact's information",
          options: [optArtifactId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified artifact identified by the id",
          options: [
            optArtifactId,
            optCompartmentId2,
            optDisplayName3,
            {
              name: "--artifact-type",
              description: "Artifact Type for the artifact",
              args: {
                suggestions: [
                  "CONTAINER_IMAGE",
                  "HELM_CHART",
                  "MACHINE_IMAGE",
                  "STACK",
                ],
              },
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
          name: "update-artifact-update-kubernetes-image-artifact-details",
          description: "Updates the specified artifact identified by the id",
          options: [
            optArtifactId,
            optCompartmentId2,
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            { name: "--helm-chart", args: { name: "json" } },
            {
              name: "--container-image-artifact-ids",
              description:
                "List of container image artifact unique identifiers included in the helm chart",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-artifact-update-stack-artifact-details",
          description: "Updates the specified artifact identified by the id",
          options: [
            optArtifactId,
            optCompartmentId2,
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            { name: "--stack", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-artifact-update-container-image-artifact-details",
          description: "Updates the specified artifact identified by the id",
          options: [
            optArtifactId,
            optCompartmentId2,
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            { name: "--container-image", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-artifact-update-machine-image-artifact-details",
          description: "Updates the specified artifact identified by the id",
          options: [
            optArtifactId,
            optCompartmentId2,
            optDisplayName3,
            optFreeformTags,
            optDefinedTags,
            { name: "--machine-image", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate-and-publish",
          description: "Validate and publish artifact",
          options: [
            optArtifactId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "term-version",
      description: "Model object for the term version details",
      subcommands: [
        {
          name: "activate",
          description: "Mark the Term Version identified by the id as active",
          options: [
            optTermVersionId,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Term Version",
          options: [
            {
              name: "--create-term-version-content",
              description: "The term version file to upload",
              args: { name: "create-term-version-content" },
              isRequired: true,
            },
            {
              name: "--term-id",
              description: "Unique OCID identifier for the term",
              args: { name: "term-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the resource",
              args: { name: "display-name" },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Term by the identifier",
          options: [
            optTermVersionId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Term Version by the identifier",
          options: [optTermVersionId, optFromJson],
        },
        {
          name: "get-term-version-content",
          description: "Gets a Term Version content by the identifier",
          options: [optTermVersionId, optFile, optFromJson],
        },
        {
          name: "update",
          description: "Updates the Term Version",
          options: [
            optTermVersionId,
            {
              name: "--display-name",
              description: "The name for the term version",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-term-version-content",
          description: "Updates the Term Version attachment",
          options: [
            optTermVersionId,
            {
              name: "--update-term-version-content",
              description: "The term attachment to upload",
              args: { name: "update-term-version-content" },
              isRequired: true,
            },
            optIfMatch,
            {
              name: "--display-name",
              description: "The name of the resource",
              args: { name: "display-name" },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "disbursement-report-record-collection",
      description: "Disbursement report",
      subcommands: [
        {
          name: "list-disbursement-report-records",
          description: "List disbursement report records",
          options: [
            optCompartmentId,
            {
              name: "--date-range",
              description: "The date range of the report",
              args: {
                suggestions: [
                  "LAST_MONTH",
                  "LAST_THREE_MONTHS",
                  "LAST_SIX_MONTHS",
                  "LAST_TWELVE_MONTHS",
                  "LAST_EIGHTEEN_MONTHS",
                  "ALL_TIME",
                ],
              },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing-revision-attachment-collection",
      description: "Results of the listing attachments search",
      subcommands: [
        {
          name: "list-listing-revision-attachments",
          description:
            "Gets the list of attachments for a listing revision in a compartment",
          options: [
            optListingRevisionId3,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only attachments their lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
            },
            optCompartmentId2,
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
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of errors for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "supported-currency-collection",
      description:
        "Result set consisting of list of currencies supported by the Marketplace Publisher Service",
      subcommands: [
        {
          name: "list-supported-currencies",
          description:
            "Lists the currencies supported by the Marketplace Publisher Service",
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
    {
      name: "term",
      description: "Base model object for the term",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a term from one compartment to another",
          options: [
            optTermId,
            {
              name: "--compartment-id",
              description:
                "The id of the compartment which the term should be moved",
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
          description: "Creates a new Term",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the publisher's compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the term",
              args: { name: "name" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Term by the identifier",
          options: [
            optTermId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Term by identifier",
          options: [optTermId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the Term",
          options: [
            optTermId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "customer-instance-report-export-collection",
      description: "Customer Instance Report export collection",
      subcommands: [
        {
          name: "list-customer-instance-report-exports",
          description:
            "Lists existing Customer Instance Report exports for the caller",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "fileName"] },
            },
            optName,
            optListingId2,
            optStatus2,
            optShape,
            optRegionParameterconflict,
            optRealm,
            {
              name: "--tenant-admin-domain",
              description:
                "A filter to return only report records that match the tenant administrator domain",
              args: { name: "tenant-admin-domain" },
            },
            optPackageVersion,
            {
              name: "--instance-ocid",
              description:
                "A filter to return only report records that match the instance OCID",
              args: { name: "instance-ocid" },
            },
            optTimeInstanceCreationFromDate,
            optTimeInstanceCreationToDate,
            optTimeInstanceTerminationFromDate,
            optTimeInstanceTerminationToDate,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing",
      description: "The model for the Marketplace Publisher listing",
      subcommands: [
        {
          name: "cascading-delete",
          description: "Cascade delete the listing and its subresources",
          options: [
            optListingId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a listing from one compartment to another",
          options: [
            optListingId,
            {
              name: "--compartment-id",
              description:
                "The id of the compartment which the listing should be moved",
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
          description: "Creates a new listing in your compartment",
          options: [
            optCompartmentId3,
            {
              name: "--name",
              description: "The name for the listing",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--listing-type",
              description: "The listing type for the listing",
              args: {
                suggestions: ["OCI_APPLICATION", "LEAD_GENERATION", "SERVICE"],
              },
              isRequired: true,
            },
            {
              name: "--package-type",
              description: "The package type for the listing",
              args: {
                suggestions: [
                  "CONTAINER_IMAGE",
                  "HELM_CHART",
                  "MACHINE_IMAGE",
                  "STACK",
                  "NONE",
                ],
              },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a listing by the identifier",
          options: [
            optListingId,
            optIfMatch,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details for a listing",
          options: [optListingId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified Listing identified by the id",
          options: [
            optListingId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing-revision-note-collection",
      description: "Results of note search",
      subcommands: [
        {
          name: "list-listing-revision-notes",
          description: "Gets the list of notes for a listing revision",
          options: [
            optListingRevisionId3,
            optCompartmentId2,
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
    {
      name: "listing-revision-note",
      description: "The model for the listing revision notes",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Listing Revision Note",
          options: [
            {
              name: "--listing-revision-id",
              description:
                "The unique identifier of the listing revision that the specified note belongs to",
              args: { name: "listing-revision-id" },
              isRequired: true,
            },
            {
              name: "--note-details",
              description: "Notes provided for the listing revision",
              args: { name: "note-details" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a listing revision note by the identifier",
          options: [
            optListingRevisionNoteId,
            optIfMatch,
            optForce2,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get note details by the identifier",
          options: [optListingRevisionNoteId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the Listing Revision Note tag data",
          options: [
            optListingRevisionNoteId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "supported-shape-collection",
      description:
        "The list of shapes that can be used to create a database system",
      subcommands: [
        {
          name: "list-supported-shapes",
          description: "Lists the shapes available to select from",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "customer-instance-report-record-collection",
      description: "Customer instance report",
      subcommands: [
        {
          name: "list-customer-instance-report-records",
          description: "List customer instance report records",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["INSTANCE_ID"] },
            },
            optName,
            optListingId2,
            optStatus2,
            optShape,
            optRegionParameterconflict,
            optRealm,
            {
              name: "--tenant-admin-domain",
              description:
                "A filter to return only report records that match the tenant administrator domain",
              args: { name: "tenant-admin-domain" },
            },
            optPackageVersion,
            {
              name: "--instance-ocid",
              description:
                "A filter to return only report records that match the instance OCID",
              args: { name: "instance-ocid" },
            },
            optTimeInstanceCreationFromDate,
            optTimeInstanceCreationToDate,
            optTimeInstanceTerminationFromDate,
            optTimeInstanceTerminationToDate,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "customer-instance-report-export",
      description: "The model for a Customer Instance Report export",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a generated Customer Instance Report export",
          options: [
            optCustomerInstanceReportExportId,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "ACCEPTED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "CANCELED",
                  "WAITING",
                  "CANCELING",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate",
          description:
            "Generates a new asynchronous Customer Instance Report export for the selected filters",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for the export",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--sort-order",
              description: "The sort order for the generated export",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["INSTANCE_ID"] },
            },
            {
              name: "--name",
              description:
                "A filter to return only report records that match the listing name",
              args: { name: "name" },
            },
            {
              name: "--listing-id",
              description:
                "A filter to return only report records that match the listing OCID",
              args: { name: "listing-id" },
            },
            optStatus2,
            optShape,
            optRegionParameterconflict,
            optRealm,
            {
              name: "--tenant-admin-domain",
              description:
                "A filter to return only report records that match the tenant administrator email domain",
              args: { name: "tenant-admin-domain" },
            },
            optPackageVersion,
            {
              name: "--instance-id",
              description:
                "A filter to return only report records that match the instance OCID",
              args: { name: "instance-id" },
            },
            optTimeInstanceCreationFromDate,
            optTimeInstanceCreationToDate,
            optTimeInstanceTerminationFromDate,
            optTimeInstanceTerminationToDate,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details for a specific Customer Instance Report export",
          options: [optCustomerInstanceReportExportId, optFromJson],
        },
        {
          name: "get-customer-instance-report-export-content",
          description:
            "Downloads the generated Customer Instance Report CSV for the specified export",
          options: [optCustomerInstanceReportExportId, optFromJson],
        },
      ],
    },
    {
      name: "product",
      description: "The model for the product details",
      subcommands: [
        {
          name: "get",
          description: "Gets a Product by code identifier",
          options: [
            {
              name: "--product-code",
              description: "Product Code",
              args: { name: "product-code" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "support-doc",
      description: "The model for the supportDoc details",
      subcommands: [
        {
          name: "get",
          description: "Gets a SupportDoc by code identifier",
          options: [
            {
              name: "--support-doc-code",
              description: "SupportDoc Code",
              args: { name: "support-doc-code" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-support-doc-content",
          description: "Gets a Support Doc content by supportDocCode",
          options: [
            {
              name: "--support-doc-code",
              description: "SupportDoc Code",
              args: { name: "support-doc-code" },
              isRequired: true,
            },
            optFile,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing-revision",
      description:
        "The model for an Oracle Cloud Infrastructure Marketplace Publisher listing revision",
      subcommands: [
        {
          name: "cascading-delete",
          description: "Cascade delete listing revision and its subresources",
          options: [
            optListingRevisionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-listing-revision-to-new-status",
          description: "Updates the Listing Revision to New status",
          options: [
            optListingRevisionId,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "clone",
          description:
            "Clone the published/withdrawn Listing Revision identified by the identifier",
          options: [
            optListingRevisionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Listing Revision",
          options: [
            optListingId3,
            {
              name: "--listing-type",
              description: "The listing's type",
              args: {
                suggestions: ["OCI_APPLICATION", "LEAD_GENERATION", "SERVICE"],
              },
              isRequired: true,
            },
            optHeadline,
            optDisplayName4,
            optTagline,
            optKeywords2,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages2,
            optSupportContacts,
            optSupportLinks,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-create-oci-listing-revision-details",
          description: "Creates a new Listing Revision",
          options: [
            optListingId3,
            optHeadline,
            {
              name: "--pricing-type",
              description: "The pricing model for the listing revision",
              args: { name: "pricing-type" },
              isRequired: true,
            },
            {
              name: "--products",
              description: "List of Products subscribed by listing",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName4,
            optTagline,
            optKeywords2,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages2,
            optSupportContacts,
            optSupportLinks,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            optVersionDetails,
            optSystemRequirements,
            {
              name: "--pricing-plans",
              description: "List of Pricing Plans provider by publisher",
              args: { name: "json" },
            },
            {
              name: "--partner-registration-url",
              description:
                "The url provided by partner for the registration of subscription",
              args: { name: "partner-registration-url" },
            },
            {
              name: "--term-id",
              description: "The unique id of the term attached to the listing",
              args: { name: "term-id" },
            },
            optRecommendedServiceProviderListingIds,
            {
              name: "--availability-and-pricing-policy",
              description: "Listing availability and Pricing Policy statement",
              args: { name: "availability-and-pricing-policy" },
            },
            {
              name: "--is-rover-exportable",
              description: "Is this listing rover exportable",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optVanityUrl,
            optDemoUrl,
            optSelfPacedTrainingUrl,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-create-service-listing-revision-details",
          description: "Creates a new Listing Revision",
          options: [
            optListingId3,
            optHeadline,
            {
              name: "--product-codes",
              description: "List of product codes subscribed by listing",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--industries",
              description: "List of industries subscribed by listing",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName4,
            optTagline,
            optKeywords2,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages2,
            optSupportContacts,
            optSupportLinks,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--contact-us",
              description:
                "Custom text by partner regarding contact information",
              args: { name: "contact-us" },
            },
            {
              name: "--trained-professionals",
              description: "Number of trained professional per product",
              args: { name: "json" },
            },
            optVanityUrl,
            {
              name: "--geo-locations",
              description: "Support details based on geographic location",
              args: { name: "json" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-create-lead-gen-listing-revision-details",
          description: "Creates a new Listing Revision",
          options: [
            optListingId3,
            optHeadline,
            {
              name: "--pricing-type",
              description: "The pricing model for the listing revision",
              args: { name: "pricing-type" },
              isRequired: true,
            },
            {
              name: "--products",
              description: "List of Products subscribed by listing",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName4,
            optTagline,
            optKeywords2,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages2,
            optSupportContacts,
            optSupportLinks,
            optStatus,
            optFreeformTags,
            optDefinedTags,
            optVersionDetails,
            optSystemRequirements,
            optDemoUrl,
            optSelfPacedTrainingUrl,
            optRecommendedServiceProviderListingIds,
            optVanityUrl,
            { name: "--download-info", args: { name: "json" } },
            {
              name: "--pricing-plans",
              description: "Pricing details for lead gen listing",
              args: { name: "pricing-plans" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a listing by the identifier",
          options: [
            optListingRevisionId,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details for a listing revision",
          options: [optListingRevisionId, optFromJson],
        },
        {
          name: "get-listing-revision-icon-content",
          description: "Gets the content for a listing revision icon",
          options: [optListingRevisionId, optFile, optFromJson],
        },
        {
          name: "publish",
          description: "Publish the Listing revision identified by Identifier",
          options: [
            optListingRevisionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "publish-listing-revision-as-private",
          description: "Updates the Listing Revision to PublishAsPrivate",
          options: [
            optListingRevisionId,
            {
              name: "--allowed-tenancies",
              description:
                "Allowed tenancies provided when a listing is published as private",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "submit-listing-revision-for-review",
          description:
            "Update the Listing Revision identified by the id for review",
          options: [
            optListingRevisionId,
            {
              name: "--note-details",
              description: "Notes provided for the listing revision",
              args: { name: "note-details" },
            },
            {
              name: "--are-internal-tenancy-launch-allowed",
              description:
                "Identifies whether publisher allows internal tenancy launches for the listing revision",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-auto-publish-on-approval",
              description:
                "Identifies whether publisher intends to publish the listing automatically upon approval",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Listing Revision",
          options: [
            optListingRevisionId,
            {
              name: "--listing-type",
              description: "The listing's type",
              args: {
                suggestions: ["OCI_APPLICATION", "LEAD_GENERATION", "SERVICE"],
              },
              isRequired: true,
            },
            optDisplayName4,
            optHeadline2,
            optTagline,
            optKeywords,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages,
            optSupportContacts,
            optSupportLinks,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-update-service-listing-revision-details",
          description: "Updates the Listing Revision",
          options: [
            optListingRevisionId,
            optDisplayName4,
            optHeadline2,
            optTagline,
            optKeywords,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages,
            optSupportContacts,
            optSupportLinks,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--contact-us",
              description:
                "Custom text by partner regarding contact information",
              args: { name: "contact-us" },
            },
            {
              name: "--product-codes",
              description: "List of product codes subscribed by listing",
              args: { name: "json" },
            },
            {
              name: "--industries",
              description: "List of industries subscribed by listing",
              args: { name: "json" },
            },
            {
              name: "--trained-professionals",
              description: "Number of trained professional per product",
              args: { name: "json" },
            },
            optVanityUrl,
            {
              name: "--geo-locations",
              description: "Support details based on geographic location",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-update-oci-listing-revision-details",
          description: "Updates the Listing Revision",
          options: [
            optListingRevisionId,
            optDisplayName4,
            optHeadline2,
            optTagline,
            optKeywords,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages,
            optSupportContacts,
            optSupportLinks,
            optFreeformTags,
            optDefinedTags,
            optVersionDetails,
            optSystemRequirements,
            {
              name: "--pricing-type",
              description: "The pricing model for the listing revision",
              args: { name: "pricing-type" },
            },
            {
              name: "--products",
              description: "List of Products subscribed by listing",
              args: { name: "json" },
            },
            {
              name: "--partner-registration-url",
              description:
                "The url provided by partner for the registration of subscription",
              args: { name: "partner-registration-url" },
            },
            {
              name: "--term-id",
              description: "The unique id of the term attached to the listing",
              args: { name: "term-id" },
            },
            optRecommendedServiceProviderListingIds,
            {
              name: "--availability-and-pricing-policy",
              description: "Listing availability and Pricing Policy statement",
              args: { name: "availability-and-pricing-policy" },
            },
            {
              name: "--pricing-plans",
              description: "List of Pricing Plans provider by publisher",
              args: { name: "json" },
            },
            {
              name: "--is-rover-exportable",
              description: "Is this listing rover exportable",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optVanityUrl,
            optDemoUrl,
            optSelfPacedTrainingUrl,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-update-lead-gen-listing-revision-details",
          description: "Updates the Listing Revision",
          options: [
            optListingRevisionId,
            optDisplayName4,
            optHeadline2,
            optTagline,
            optKeywords,
            optShortDescription,
            optUsageInformation,
            optLongDescription,
            optContentLanguage,
            optSupportedlanguages,
            optSupportContacts,
            optSupportLinks,
            optFreeformTags,
            optDefinedTags,
            optVersionDetails,
            optSystemRequirements,
            {
              name: "--pricing-type",
              description: "The pricing model for the listing revision",
              args: { name: "pricing-type" },
            },
            {
              name: "--products",
              description: "List of Products subscribed by listing",
              args: { name: "json" },
            },
            optDemoUrl,
            optSelfPacedTrainingUrl,
            optRecommendedServiceProviderListingIds,
            optVanityUrl,
            { name: "--download-info", args: { name: "json" } },
            {
              name: "--pricing-plans",
              description: "Pricing details for lead gen listing",
              args: { name: "pricing-plans" },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-banner-content",
          description: "Updates the Listing Revision",
          options: [
            optListingRevisionId,
            {
              name: "--banner-name",
              description: "Banner name",
              args: { name: "banner-name" },
              isRequired: true,
            },
            {
              name: "--update-listing-revision-banner-content",
              description: "The listing revision icon to be updated",
              args: { name: "update-listing-revision-banner-content" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-icon-content",
          description: "Updates the Listing Revision",
          options: [
            optListingRevisionId,
            {
              name: "--update-listing-revision-icon-content",
              description: "The listing revision icon to be updated",
              args: { name: "update-listing-revision-icon-content" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "withdraw",
          description:
            "Update the Listing Revision identified by the id as Withdraw/UnPublished",
          options: [
            optListingRevisionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "product-collection",
      description: "Results of a product search",
      subcommands: [
        {
          name: "list-products",
          description: "Lists the products in your compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--product-group",
              description: "Product Group",
              args: { name: "product-group" },
            },
            optName,
            optAll,
            optPageSize,
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
            "Returns a (paginated) list of logs for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "term-version-collection",
      description: "Results of the term version search",
      subcommands: [
        {
          name: "list-term-versions",
          description: "Returns a list of the publisher term versions",
          options: [
            optTermId,
            optCompartmentId2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "term-collection",
      description: "Results of the term search",
      subcommands: [
        {
          name: "list-terms",
          description: "Returns a list of the publisher terms",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "artifact-collection",
      description: "Results of the artifact search",
      subcommands: [
        {
          name: "list-artifacts",
          description: "Lists the artifacts in your compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only artifacts with their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--status",
              description:
                "A filter to return only artifacts with specific status",
              args: {
                suggestions: ["IN_PROGRESS", "AVAILABLE", "UNAVAILABLE"],
              },
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
    {
      name: "lead",
      description: "Details of Lead",
      subcommands: [
        {
          name: "get",
          description: "Gets the details for a lead",
          options: [
            {
              name: "--lead-id",
              description: "Lead ID",
              args: { name: "lead-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "market",
      description: "The model for the market details",
      subcommands: [
        {
          name: "get",
          description: "Gets the specified market's information",
          options: [
            {
              name: "--market-code",
              description: "Market Code",
              args: { name: "market-code" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing-revision-package-collection",
      description: "Results of package search",
      subcommands: [
        {
          name: "list-listing-revision-packages",
          description: "Gets the list of packages for a listing revision",
          options: [
            optListingRevisionId3,
            optCompartmentId2,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only packages their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
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
    {
      name: "available-service-collection",
      description:
        "Results of available service provider search, returns available services",
      subcommands: [
        {
          name: "list-available-services",
          description: "List all published service listing revisions",
          options: [
            optCompartmentId,
            optName,
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
    {
      name: "listing-revision-collection",
      description: "Results of listing revision search",
      subcommands: [
        {
          name: "list-listing-revisions",
          description:
            "Lists the list of listing revisions for a specific listing ID, compartment ID or listing revision status",
          options: [
            optListingId,
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only listing revisions their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optCompartmentId2,
            {
              name: "--listing-revision-status",
              description:
                "A filter to return only listing revisions their status matches the given listing revision status",
              args: {
                suggestions: [
                  "NEW",
                  "PENDING_REVIEW",
                  "REVIEW_IN_PROGRESS",
                  "REJECTED",
                  "APPROVED",
                  "PUBLISH_IN_PROGRESS",
                  "PUBLISH_FAILED",
                  "PUBLISHED",
                  "PUBLISH_AS_PRIVATE_FAILED",
                  "PUBLISHED_AS_PRIVATE",
                  "PUBLISH_AS_PRIVATE_IN_PROGRESS",
                  "UNPUBLISH_IN_PROGRESS",
                  "UNPUBLISHED",
                ],
              },
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
    {
      name: "listing-revision-attachment",
      description: "A attachment for the listing revision",
      subcommands: [
        {
          name: "create",
          description: "Creates a new listing revision attachment",
          options: [
            optListingRevisionId2,
            {
              name: "--attachment-type",
              description: "The specified attachment type",
              args: { name: "attachment-type" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-attachment-create-supported-service-attachment",
          description: "Creates a new listing revision attachment",
          options: [
            optListingRevisionId2,
            {
              name: "--service-name",
              description: "Name of the service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of the service",
              args: { name: "type" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--url",
              description: "Optional url to service information",
              args: { name: "url" },
            },
            optSourceType,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-attachment-create-screen-shot-attachment-details",
          description: "Creates a new listing revision attachment",
          options: [
            optListingRevisionId2,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optSourceType,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-attachment-create-customer-success-attachment",
          description: "Creates a new listing revision attachment",
          options: [
            optListingRevisionId2,
            {
              name: "--customer-name",
              description: "Name of the customer",
              args: { name: "customer-name" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--url",
              description: "Optional url to success story",
              args: { name: "url" },
            },
            {
              name: "--product-codes",
              description: "List of product codes for success story",
              args: { name: "json" },
            },
            optSourceType,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-attachment-create-review-support-document-attachment",
          description: "Creates a new listing revision attachment",
          options: [
            optListingRevisionId2,
            {
              name: "--document-name",
              description: "Name of the review support document",
              args: { name: "document-name" },
              isRequired: true,
            },
            {
              name: "--template-code",
              description: "Type of review support document",
              args: { name: "template-code" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optSourceType,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-attachment-create-video-attachment-details",
          description: "Creates a new listing revision attachment",
          options: [
            optListingRevisionId2,
            {
              name: "--video-attachment-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-listing-revision-attachment-create-related-document-attachment-details",
          description: "Creates a new listing revision attachment",
          options: [
            optListingRevisionId2,
            {
              name: "--document-category",
              description:
                "The document category of the listing revision attachment",
              args: { name: "document-category" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source-url",
              description:
                "The document URL of the listing revision attachment",
              args: { name: "source-url" },
            },
            optSourceType,
            {
              name: "--is-oracle-users-only",
              description:
                "Identifies whether the attachment is for Internal Oracle Users or external users as well",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a listing revision attachment by the identifier",
          options: [
            optListingRevisionAttachmentId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get the details of the specified listing revision attachment",
          options: [optListingRevisionAttachmentId, optFromJson],
        },
        {
          name: "get-listing-revision-attachment-content",
          description: "Get the attachment content by identifier",
          options: [optListingRevisionAttachmentId, optFile, optFromJson],
        },
        {
          name: "update",
          description: "Updates the Listing Revision Attachment",
          options: [
            optListingRevisionAttachmentId,
            optDisplayName,
            optDescription2,
            {
              name: "--attachment-type",
              description:
                "The specified attachment type for the listing revision attachment",
              args: { name: "attachment-type" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-attachment-update-screen-shot-attachment-details",
          description: "Updates the Listing Revision Attachment",
          options: [
            optListingRevisionAttachmentId,
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-attachment-update-customer-success-attachment",
          description: "Updates the Listing Revision Attachment",
          options: [
            optListingRevisionAttachmentId,
            {
              name: "--customer-name",
              description: "Name of the customer",
              args: { name: "customer-name" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--url",
              description: "Optional url to success story",
              args: { name: "url" },
            },
            {
              name: "--product-codes",
              description: "List of product codes for success story",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-attachment-update-review-support-document-attachment",
          description: "Updates the Listing Revision Attachment",
          options: [
            optListingRevisionAttachmentId,
            {
              name: "--document-name",
              description: "Name of the review support document",
              args: { name: "document-name" },
              isRequired: true,
            },
            {
              name: "--template-code",
              description: "Type of review support document",
              args: { name: "template-code" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-attachment-update-related-document-attachment-details",
          description: "Updates the Listing Revision Attachment",
          options: [
            optListingRevisionAttachmentId,
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--document-category",
              description:
                "The document category of the listing revision attachment",
              args: { name: "document-category" },
            },
            {
              name: "--source-url",
              description:
                "The document URL of the listing revision attachment",
              args: { name: "source-url" },
            },
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-attachment-update-supported-service-attachment",
          description: "Updates the Listing Revision Attachment",
          options: [
            optListingRevisionAttachmentId,
            {
              name: "--service-name",
              description: "Name of the service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of service",
              args: { name: "type" },
              isRequired: true,
            },
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--url",
              description: "Optional url to service information",
              args: { name: "url" },
            },
            optSourceType,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-attachment-update-video-attachment-details",
          description: "Updates the Listing Revision Attachment",
          options: [
            optListingRevisionAttachmentId,
            optDisplayName,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-listing-revision-attachment-content",
          description: "Update a file to listing revision attachment",
          options: [
            optListingRevisionAttachmentId,
            {
              name: "--update-listing-revision-attachment-content",
              description: "The attachment to upload",
              args: { name: "update-listing-revision-attachment-content" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "publisher",
      description: "The model for a publisher details",
      subcommands: [
        {
          name: "create",
          description: "Creates a new publisher",
          options: [
            {
              name: "--email",
              description: "Email address of the publisher",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--business-phone-number",
              description: "The business phone number of the publisher",
              args: { name: "business-phone-number" },
              isRequired: true,
            },
            {
              name: "--company-name",
              description: "The company name of the publisher",
              args: { name: "company-name" },
              isRequired: true,
            },
            {
              name: "--company-description",
              description: "The company name of the publisher",
              args: { name: "company-description" },
              isRequired: true,
            },
            {
              name: "--employee-count",
              description: "Count of employees in publisher's company",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--opn-number",
              description: "OPN membership number of the publisher",
              args: { name: "opn-number" },
              isRequired: true,
            },
            {
              name: "--year-founded",
              description:
                "The year the publisher's company or organization was founded",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--city",
              description: "City",
              args: { name: "city" },
              isRequired: true,
            },
            {
              name: "--state",
              description: "State",
              args: { name: "state" },
              isRequired: true,
            },
            {
              name: "--country",
              description: "Country",
              args: { name: "country" },
              isRequired: true,
            },
            {
              name: "--website",
              description: "The publisher's website",
              args: { name: "website" },
              isRequired: true,
            },
            {
              name: "--contact-phone-number",
              description: "The contact phone number of the publisher",
              args: { name: "contact-phone-number" },
              isRequired: true,
            },
            {
              name: "--contact-email",
              description: "The contact email address of the publisher",
              args: { name: "contact-email" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The tenancy(compartment) OCID of the publisher",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--solution-description",
              description: "A description of the publisher solutions",
              args: { name: "solution-description" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Publisher by identifier",
          options: [
            {
              name: "--publisher-id",
              description: "Publisher OCID",
              args: { name: "publisher-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "category-collection",
      description: "Results of a category search",
      subcommands: [
        {
          name: "list-categories",
          description: "Lists the categories in your compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--product-code",
              description: "Product code to filter",
              args: { name: "product-code" },
            },
            optSortOrder,
            optSortBy,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "category",
      description: "The model for the category details",
      subcommands: [
        {
          name: "get",
          description: "Gets the specified category's information",
          options: [
            {
              name: "--category-code",
              description: "Category Code",
              args: { name: "category-code" },
              isRequired: true,
            },
            optCompartmentId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "listing-revision-package",
      description: "A base object for all types of listing revision packages",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Listing Revision Package",
          options: [
            optListingRevisionId2,
            {
              name: "--package-version",
              description: "The version for the package",
              args: { name: "package-version" },
              isRequired: true,
            },
            {
              name: "--artifact-id",
              description: "The unique identifier for the artifact",
              args: { name: "artifact-id" },
              isRequired: true,
            },
            {
              name: "--term-id",
              description: "The unique identifier for the term",
              args: { name: "term-id" },
              isRequired: true,
            },
            {
              name: "--are-security-upgrades-provided",
              description:
                "Identifies whether security upgrades will be provided for this package",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name for the listing revision package",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description for this package",
              args: { name: "description" },
            },
            {
              name: "--is-default",
              description:
                "Identifies that this will be default package for the listing revision",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a listing revision package by the identifier",
          options: [
            optListingRevisionPackageId,
            optIfMatch,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the details of the specified version of a package",
          options: [optListingRevisionPackageId, optFromJson],
        },
        {
          name: "mark-listing-revision-package-as-default",
          description:
            "Mark the Listing Revision Package identified by the id and package version as default",
          options: [
            optListingRevisionPackageId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "publish",
          description: "Updates the Listing Revision Package to publish status",
          options: [
            optListingRevisionPackageId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "un-publish",
          description:
            "Updates the Listing Revision Package to Unpublish status",
          options: [
            optListingRevisionPackageId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Listing Revision Package",
          options: [
            optListingRevisionPackageId,
            {
              name: "--package-version",
              description: "The version for the package",
              args: { name: "package-version" },
            },
            {
              name: "--display-name",
              description: "The name for the listing revision package",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description for this package",
              args: { name: "description" },
            },
            {
              name: "--artifact-id",
              description: "The unique identifier for the artifact",
              args: { name: "artifact-id" },
            },
            {
              name: "--term-id",
              description: "The unique term identifier",
              args: { name: "term-id" },
            },
            {
              name: "--is-default",
              description:
                "Identifies that this will be default package for the listing revision",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--are-security-upgrades-provided",
              description:
                "Identifies whether security upgrades will be provided for this package",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
