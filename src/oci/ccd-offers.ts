// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optCcdCommitmentId: Fig.Option = {
  name: "--ccd-commitment-id",
  description: "CCD commitment OCID",
  args: { name: "ccd-commitment-id" },
  isRequired: true,
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description: "The subscription ID associated with the CCD offer",
  args: { name: "subscription-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const completionSpec: Fig.Spec = {
  name: "ccd-offers",
  description: "Continuous Consumption Discounts",
  subcommands: [
    {
      name: "ccd-commitments",
      description:
        "Use the Continuous Consumption Discounts CLI to manage continuous consumption discount operations",
      subcommands: [
        {
          name: "ccd-commitment",
          description: "The created CCD commitment details",
          subcommands: [
            {
              name: "create",
              description: "Request to create a new CCD commitment",
              options: [
                {
                  name: "--ccd-offer-id",
                  description: "CCD offer OCID",
                  args: { name: "ccd-offer-id" },
                  isRequired: true,
                },
                {
                  name: "--quantity",
                  description:
                    "The hourly quantity that the customer is committing to a CCD offer's main SKU",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The CCD commitment name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--subscription-id",
                  description:
                    "The subscription OCID value the CCD offer is applicable to",
                  args: { name: "subscription-id" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The compartment OCID where you want to create the CCD commitment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--time-ccd-commitment-starts",
                  description:
                    "The inclusive date and time when the CCD commitment will be effective",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--filler-tenancy-id",
                  description:
                    "The tenancy OCID you want to apply filler usage to",
                  args: { name: "filler-tenancy-id" },
                },
                { name: "--usage-eligibility", args: { name: "json" } },
                {
                  name: "--secondary-skus",
                  description: "The bundled SKUs selected for this commitment",
                  args: { name: "json" },
                },
                {
                  name: "--time-ccd-commitment-ends",
                  description: "The exclusive time the CCD commitment ends",
                  args: { name: "datetime" },
                },
                {
                  name: "--freeform-tags",
                  description: "Free-form tags for this resource",
                  args: { name: "json" },
                },
                {
                  name: "--defined-tags",
                  description: "Defined tags for this resource",
                  args: { name: "json" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Terminates the CCD commitment",
              options: [
                optCcdCommitmentId,
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
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets the CCD commitment using the CCD commitment ID",
              options: [optCcdCommitmentId, optFromJson],
            },
            {
              name: "update",
              description:
                "Updates the free-form tags, defined tags, or both on a CCD commitment",
              options: [
                optCcdCommitmentId,
                {
                  name: "--freeform-tags",
                  description: "Free-form tags for this resource",
                  args: { name: "json" },
                },
                {
                  name: "--defined-tags",
                  description: "Defined tags for this resource",
                  args: { name: "json" },
                },
                {
                  name: "--if-match",
                  description: "For optimistic concurrency control",
                  args: { name: "if-match" },
                },
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
          ],
        },
        {
          name: "ccd-commitment-collection",
          description: "CCD commitment summary items",
          subcommands: [
            {
              name: "list-ccd-commitments",
              description: "Lists the CCD commitments",
              options: [
                optSubscriptionId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment (remember that the tenancy is simply the root compartment)",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--page",
                  description:
                    'The value of the opc-next-page response header from the previous "List" call',
                  args: { name: "page" },
                },
                {
                  name: "--limit",
                  description:
                    'The maximum number of items to return in a paginated "List" call',
                  args: { name: "integer" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "The lifecycle of a CCD commitment that's being requested, which always defaults to Active",
                  args: { suggestions: ["ACTIVE"] },
                },
                {
                  name: "--lifecycle-details",
                  description:
                    "The lifecycle details of a CCD commitment that's being requested",
                  args: {
                    suggestions: [
                      "CURRENT",
                      "ENDED",
                      "CANCELED",
                      "SCHEDULED",
                      "AWAITING_PROVISIONING",
                    ],
                  },
                },
                {
                  name: "--source-type",
                  description:
                    "Filter CCD offers or commitments by the commercial workflow that created the associated offer",
                  args: {
                    suggestions: [
                      "CONTRACT_COMMITMENT",
                      "CONTRACT_OFFER",
                      "FLEX",
                      "OCI_GENERATED",
                    ],
                  },
                },
                {
                  name: "--sort-order",
                  description: 'The sort order to use, whether "asc" or "desc"',
                  args: { suggestions: ["ASC", "DESC"] },
                },
                {
                  name: "--display-name",
                  description: "Filter by the resource display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--sort-by",
                  description:
                    'The sort by field to use, whether "DISPLAYNAME" or "TIMECREATED"',
                  args: { suggestions: ["DISPLAYNAME", "TIMECREATED"] },
                },
                { name: "--all", description: "Fetches all pages of results" },
                {
                  name: "--page-size",
                  description:
                    "When fetching results, the number of results to fetch per call",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ccd-offer",
      description: "The created CCD offer details",
      subcommands: [
        {
          name: "get",
          description: "Get a particular CCD offer details",
          options: [
            {
              name: "--ccd-offer-id",
              description: "The CCD offer OCID",
              args: { name: "ccd-offer-id" },
              isRequired: true,
            },
            optSubscriptionId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ccd-offer-collection",
      description: "CCD offer summary items",
      subcommands: [
        {
          name: "list-ccd-offers",
          description: "Lists the CCD offers for the requested subscription",
          options: [
            optSubscriptionId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment (remember that the tenancy is simply the root compartment)",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--page",
              description:
                'The value of the opc-next-page response header from the previous "List" call',
              args: { name: "page" },
            },
            {
              name: "--limit",
              description:
                'The maximum number of items to return in a paginated "List" call',
              args: { name: "integer" },
            },
            {
              name: "--lifecycle-state",
              description:
                "The life cycle of a CCD offer that's being requested, which always defaults to Active",
              args: { suggestions: ["ACTIVE"] },
            },
            {
              name: "--lifecycle-details",
              description:
                "The life cycle details of a CCD offer that's being requested",
              args: {
                suggestions: ["SCHEDULED", "CURRENT", "CANCELED", "ENDED"],
              },
            },
            {
              name: "--type-of-offer",
              description: "The CCD offer type to use when filtering results",
              args: {
                suggestions: [
                  "STANDARD",
                  "CUSTOM",
                  "PRIVATE",
                  "CONTRACTUAL",
                  "FLEX",
                ],
              },
            },
            {
              name: "--source-type",
              description:
                "Filter CCD offers or commitments by the commercial workflow that created the associated offer",
              args: {
                suggestions: [
                  "CONTRACT_COMMITMENT",
                  "CONTRACT_OFFER",
                  "FLEX",
                  "OCI_GENERATED",
                ],
              },
            },
            {
              name: "--sort-order",
              description: 'The sort order to use, whether "asc" or "desc"',
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description:
                'The sort by field to use, whether "DISPLAYNAME" or "TIMECREATED"',
              args: { suggestions: ["DISPLAYNAME", "TIMECREATED"] },
            },
            {
              name: "--display-name",
              description: "Filter by the resource display name",
              args: { name: "display-name" },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
