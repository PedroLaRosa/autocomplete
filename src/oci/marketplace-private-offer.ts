// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optOfferQuoteId: Fig.Option = {
  name: "--offer-quote-id",
  description: "Unique offer quote identifier",
  args: { name: "offer-quote-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optOfferId: Fig.Option = {
  name: "--offer-id",
  description: "Unique Offer identifier",
  args: { name: "offer-id" },
  isRequired: true,
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitForState: Fig.Option = {
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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
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
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optAttachmentId: Fig.Option = {
  name: "--attachment-id",
  description: "Unique Offer identifier",
  args: { name: "attachment-id" },
  isRequired: true,
};
const optIsvCompartmentId: Fig.Option = {
  name: "--isv-compartment-id",
  description: "OCID of the ISV's compartment",
  args: { name: "isv-compartment-id" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources their lifecycleState matches the given lifecycleState",
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
};
const optQuoteAttachmentId: Fig.Option = {
  name: "--quote-attachment-id",
  description: "Unique offer quote attachment identifier",
  args: { name: "quote-attachment-id" },
  isRequired: true,
};
const optResellerCompartmentId: Fig.Option = {
  name: "--reseller-compartment-id",
  description: "OCID of the reseller's compartment",
  args: { name: "reseller-compartment-id" },
};
const completionSpec: Fig.Spec = {
  name: "marketplace-private-offer",
  description: "MarketplacePrivateOffer",
  subcommands: [
    {
      name: "attachment",
      description:
        "Use the Marketplace Publisher CLI to manage the publishing of applications in Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "attachment",
          description: "Description of Attachment",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Attachment",
              options: [
                {
                  name: "--file-base64-encoded",
                  description: "Base64-encoded file to attach to the Offer",
                  args: { name: "file-base64-encoded" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The name used to refer to the uploaded data",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "The type of offer attachment",
                  args: { name: "type" },
                  isRequired: true,
                },
                optOfferId,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes a Attachment resource by identifier",
              options: [
                optOfferId,
                optAttachmentId,
                optIfMatch,
                optForce,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets a Attachment by identifier",
              options: [optOfferId, optAttachmentId, optFromJson],
            },
            {
              name: "get-attachment-content",
              description: "Gets a Attachment content by identifier",
              options: [
                optOfferId,
                optAttachmentId,
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
          name: "attachment-collection",
          description: "Results of a offers search",
          subcommands: [
            {
              name: "list-attachments",
              description: "Returns a list of Attachments",
              options: [
                optOfferId,
                {
                  name: "--buyer-compartment-id",
                  description:
                    "The ID of the buyer compartment this offer is associated with",
                  args: { name: "buyer-compartment-id" },
                },
                {
                  name: "--seller-compartment-id",
                  description:
                    "The ID of the seller compartment this offer is associated with",
                  args: { name: "seller-compartment-id" },
                },
                optLifecycleState,
                optDisplayName,
                {
                  name: "--id",
                  description: "Unique Offer identifier",
                  args: { name: "id" },
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
      name: "offer",
      description:
        "Use the Marketplace Publisher CLI to manage the publishing of applications in Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "offer",
          description: "Description of Offer",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Offer",
              options: [
                {
                  name: "--display-name",
                  description: "Offers Identifier",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--seller-compartment-id",
                  description: "Compartment Identifier of the seller",
                  args: { name: "seller-compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--buyer-compartment-id",
                  description: "Compartment Identifier of the buyer",
                  args: { name: "buyer-compartment-id" },
                },
                {
                  name: "--description",
                  description: "Description of the Offer",
                  args: { name: "description" },
                },
                {
                  name: "--internal-notes",
                  description: "Internal notes of the Offer",
                  args: { name: "internal-notes" },
                },
                {
                  name: "--time-start-date",
                  description:
                    "The time the Offer will become active after it has been accepted by the Buyer",
                  args: { name: "datetime" },
                },
                {
                  name: "--duration",
                  description:
                    "Duration the Offer will be active after its start date",
                  args: { name: "duration" },
                },
                {
                  name: "--time-accept-by",
                  description:
                    "The time the Offer must be accepted by the Buyer before the Offer becomes invalid",
                  args: { name: "datetime" },
                },
                { name: "--pricing", args: { name: "json" } },
                { name: "--buyer-information", args: { name: "json" } },
                { name: "--seller-information", args: { name: "json" } },
                {
                  name: "--resource-bundles",
                  description:
                    "A list of Resource Bundles associated with an Offer",
                  args: { name: "json" },
                },
                {
                  name: "--custom-fields",
                  description:
                    "A list of key value pairs specified by the seller",
                  args: { name: "json" },
                },
                {
                  name: "--offer-type",
                  description: "The type of the offer",
                  args: { name: "offer-type" },
                },
                {
                  name: "--offer-quote-ids",
                  description: "A list of associated offer quotes",
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
              description: "Deletes an Offer resource by identifier",
              options: [
                optOfferId,
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
              description: "Gets an Offer by identifier",
              options: [optOfferId, optFromJson],
            },
            {
              name: "get-offer-internal-detail",
              description: "Gets an Offer internal details by identifier",
              options: [optOfferId, optFromJson],
            },
            {
              name: "send",
              description:
                "Sends an Offer to be reviewed and accepted by the buyer",
              options: [optOfferId, optIfMatch, optFromJson],
            },
            {
              name: "update",
              description: "Updates the Offer",
              options: [
                optOfferId,
                {
                  name: "--display-name",
                  description: "Offers Identifier",
                  args: { name: "display-name" },
                },
                {
                  name: "--buyer-compartment-id",
                  description: "OCID of the buyer's tenancy (root compartment)",
                  args: { name: "buyer-compartment-id" },
                },
                {
                  name: "--description",
                  description: "Description of the Offer",
                  args: { name: "description" },
                },
                {
                  name: "--internal-notes",
                  description: "Internal notes of the Offer",
                  args: { name: "internal-notes" },
                },
                {
                  name: "--time-start-date",
                  description:
                    "The time the Offer will become active after it has been accepted by the Buyer",
                  args: { name: "datetime" },
                },
                {
                  name: "--duration",
                  description:
                    "Duration the Offer will be active after its start date",
                  args: { name: "duration" },
                },
                {
                  name: "--time-accept-by",
                  description:
                    "The time the Offer must be accepted by the Buyer before the Offer becomes invalid",
                  args: { name: "datetime" },
                },
                { name: "--pricing", args: { name: "json" } },
                { name: "--buyer-information", args: { name: "json" } },
                { name: "--seller-information", args: { name: "json" } },
                {
                  name: "--resource-bundles",
                  description:
                    "A list of Resource Bundles associated with an Offer",
                  args: { name: "json" },
                },
                {
                  name: "--custom-fields",
                  description:
                    "A list of key value pairs specified by the seller",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform update without prompting for confirmation",
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "withdraw",
              description:
                "Withdraws an Offer and sends it back into DRAFT state",
              options: [optOfferId, optIfMatch, optFromJson],
            },
          ],
        },
        {
          name: "offer-collection",
          description: "Results of a offers search",
          subcommands: [
            {
              name: "list-offers",
              description: "Returns a list of Offers",
              options: [
                {
                  name: "--buyer-compartment-id",
                  description:
                    "The ID of the buyer compartment this offer is associated with",
                  args: { name: "buyer-compartment-id" },
                },
                {
                  name: "--seller-compartment-id",
                  description:
                    "The ID of the seller compartment this offer is associated with",
                  args: { name: "seller-compartment-id" },
                },
                optLifecycleState,
                optDisplayName,
                {
                  name: "--id",
                  description: "Unique Offer identifier",
                  args: { name: "id" },
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
      name: "offer-quote",
      description:
        "Use the Marketplace Publisher CLI to manage the publishing of applications in Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "offer-quote",
          description: "The model for the offer quote details",
          subcommands: [
            {
              name: "create",
              description: "Creates a new offer quote",
              options: [
                {
                  name: "--display-name",
                  description: "Offer quotes identifier",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--reseller-compartment-id",
                  description: "Compartment identifier of the reseller",
                  args: { name: "reseller-compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--isv-compartment-id",
                  description: "Compartment identifier of the ISV",
                  args: { name: "isv-compartment-id" },
                },
                {
                  name: "--isv-publisher-id",
                  description: "Publisher identifier of the ISV",
                  args: { name: "isv-publisher-id" },
                },
                {
                  name: "--description",
                  description: "Description of the offer quote",
                  args: { name: "description" },
                },
                {
                  name: "--resource-bundles",
                  description:
                    "A list of resource bundles associated with an offer quote",
                  args: { name: "json" },
                },
                {
                  name: "--buyer-compartment-ids",
                  description: "A list of buyer tenancies",
                  args: { name: "json" },
                },
                { name: "--reseller-information", args: { name: "json" } },
                { name: "--isv-information", args: { name: "json" } },
                {
                  name: "--buyer-acceptance-deadline",
                  description:
                    "The time the offer for the buyer must be accepted by before the offer becomes invalid",
                  args: { name: "datetime" },
                },
                {
                  name: "--buyer-offer-duration",
                  description:
                    "Duration the offer for the buyer will be active after its start date",
                  args: { name: "buyer-offer-duration" },
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
              description: "Deletes an offer quote resource by identifier",
              options: [
                optOfferQuoteId,
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
              description: "Gets an offer quote by identifier",
              options: [optOfferQuoteId, optFromJson],
            },
            {
              name: "get-offer-quote-internal-detail",
              description: "Gets an offer quote internal details by identifier",
              options: [optOfferQuoteId, optFromJson],
            },
            {
              name: "respond",
              description:
                "ISV responds to an offer quote for reseller to review",
              options: [
                optOfferQuoteId,
                { name: "--pricing", args: { name: "json" }, isRequired: true },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "send",
              description:
                "Sends an offer quote to be reviewed and updated by the ISV",
              options: [optOfferQuoteId, optIfMatch, optFromJson],
            },
            {
              name: "update",
              description: "Updates the offer quote",
              options: [
                optOfferQuoteId,
                {
                  name: "--display-name",
                  description: "Offer quotes identifier",
                  args: { name: "display-name" },
                },
                {
                  name: "--isv-compartment-id",
                  description: "Compartment identifier of the ISV",
                  args: { name: "isv-compartment-id" },
                },
                {
                  name: "--isv-publisher-id",
                  description: "Publisher identifier of the ISV",
                  args: { name: "isv-publisher-id" },
                },
                {
                  name: "--description",
                  description: "Description of the offer quote",
                  args: { name: "description" },
                },
                {
                  name: "--buyer-compartment-ids",
                  description: "A list of buyer tenancies",
                  args: { name: "json" },
                },
                { name: "--reseller-information", args: { name: "json" } },
                { name: "--isv-information", args: { name: "json" } },
                {
                  name: "--resource-bundles",
                  description:
                    "A list of resource bundles associated with an offer",
                  args: { name: "json" },
                },
                {
                  name: "--buyer-acceptance-deadline",
                  description:
                    "The time the offer for the buyer must be accepted by before the offer becomes invalid",
                  args: { name: "datetime" },
                },
                {
                  name: "--buyer-offer-duration",
                  description:
                    "Duration the offer for the buyer will be active after its start date",
                  args: { name: "buyer-offer-duration" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform update without prompting for confirmation",
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "withdraw",
              description:
                "Withdraws an offer quote and transitions to previous state",
              options: [
                optOfferQuoteId,
                optResellerCompartmentId,
                optIsvCompartmentId,
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "offer-quote-collection",
          description: "Results of offer quote summaries",
          subcommands: [
            {
              name: "list-offer-quotes",
              description: "Returns a list of offer quotes",
              options: [
                optResellerCompartmentId,
                optIsvCompartmentId,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return resources whose lifecycle state matches the given lifecycle state",
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
                optDisplayName,
                {
                  name: "--id",
                  description: "Unique offer quote identifier",
                  args: { name: "id" },
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
      name: "quote-attachment",
      description:
        "Use the Marketplace Publisher CLI to manage the publishing of applications in Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "quote-attachment-collection",
          description: "Results of offer quote attachment summaries",
          subcommands: [
            {
              name: "list-quote-attachments",
              description: "Returns a list of offer quote attachments",
              options: [
                optOfferQuoteId,
                optResellerCompartmentId,
                optIsvCompartmentId,
                optLifecycleState,
                optDisplayName,
                {
                  name: "--id",
                  description: "Unique offer quote attachment identifier",
                  args: { name: "id" },
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
          name: "quote-attachment",
          description: "Description of an offer quote attachment",
          subcommands: [
            {
              name: "create",
              description: "Creates a new offer quote attachment",
              options: [
                optOfferQuoteId,
                {
                  name: "--file-base64-encoded",
                  description:
                    "Base64-encoded file to attach to the offer quote",
                  args: { name: "file-base64-encoded" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The name used to refer to the uploaded data",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "The type of offer quote attachment",
                  args: { name: "type" },
                  isRequired: true,
                },
                {
                  name: "--recipient",
                  description: "The recipient of the offer quote attachment",
                  args: { name: "recipient" },
                  isRequired: true,
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
                "Deletes an offer quote attachment resource by identifier",
              options: [
                optOfferQuoteId,
                optQuoteAttachmentId,
                optIfMatch,
                optForce,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets an offer quote attachment by identifier",
              options: [optOfferQuoteId, optQuoteAttachmentId, optFromJson],
            },
            {
              name: "get-quote-attachment-content",
              description:
                "Gets an offer quote attachment content by identifier",
              options: [
                optOfferQuoteId,
                optQuoteAttachmentId,
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
      ],
    },
  ],
};

export default completionSpec;
