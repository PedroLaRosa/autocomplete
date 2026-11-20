// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description: "The unique identifier for the subscription",
  args: { name: "subscription-id" },
  isRequired: true,
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
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
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A filter to return only resources that match the given name",
  args: { name: "display-name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName", "productId"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const completionSpec: Fig.Spec = {
  name: "self",
  description: "SELF Service",
  subcommands: [
    {
      name: "partner-integeration",
      description:
        "Use the SELF Service CLI to manage Subscriptions in Oracle Cloud Infrastructure Marketplace",
      subcommands: [
        {
          name: "partner",
          description: "Marketplace publisher partner details",
          subcommands: [
            {
              name: "list",
              description:
                "Lists marketplace publisher partner info for a compartment",
              options: [
                optCompartmentId,
                optDisplayName,
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
          name: "partner-subscription",
          description: "These api for partner to communicate to OCI",
          subcommands: [
            {
              name: "activate-subscription",
              description:
                "Activates a subscription identified by the provided subscription ID and updates its status",
              options: [
                optSubscriptionId,
                {
                  name: "--product-id",
                  description:
                    "The unique identifier of the marketplace product listing",
                  args: { name: "product-id" },
                  isRequired: true,
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "activate-subscription-deprecated",
              description: "Deprecated",
              deprecated: true,
              options: [
                optSubscriptionId,
                {
                  name: "--product-id",
                  description:
                    "The unique identifier of the marketplace product listing",
                  args: { name: "product-id" },
                  isRequired: true,
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "resolve-subscription",
              description:
                "This API returns the subscription details by resolving JWT token to corresponding subscription and move its",
              options: [
                {
                  name: "--self-token",
                  description:
                    "The base 64 encoded JWT token which is mapped to a particular subscription",
                  args: { name: "self-token" },
                  isRequired: true,
                },
                {
                  name: "--product-id",
                  description: "The OCID of the marketplace product listing",
                  args: { name: "product-id" },
                  isRequired: true,
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "resolve-subscription-deprecated",
              description: "Deprecated",
              deprecated: true,
              options: [
                {
                  name: "--self-token",
                  description:
                    "The base 64 encoded JWT token which is mapped to a particular subscription",
                  args: { name: "self-token" },
                  isRequired: true,
                },
                {
                  name: "--product-id",
                  description: "The OCID of the marketplace product listing",
                  args: { name: "product-id" },
                  isRequired: true,
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "create-subscription-usage-record-details",
          description:
            "A single usage record to submit for a marketplace offer",
          subcommands: [
            {
              name: "submit-subscription-usage-batch",
              description:
                "Asynchronously submits a UTF-8 CSV usage file for marketplace offers",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment associated with the usage records request",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--submit-subscription-usage-batch-details",
                  description:
                    "UTF-8 CSV file with no more than 30,000 usage records and a maximum size of 50 MB",
                  args: { name: "submit-subscription-usage-batch-details" },
                  isRequired: true,
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "submit-subscription-usage-records",
              description:
                "Synchronously submits usage records for marketplace offers",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment associated with the usage records request",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--subscription-usage-records",
                  description: "The usage records to submit",
                  args: { name: "json" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "listing-subs-collection",
          description: "Results of a subscription search",
          subcommands: [
            {
              name: "listing-subscriptions",
              description: "Gets information about a Subscription",
              options: [
                {
                  name: "--listing-id",
                  description: "The unique identifier for the listing",
                  args: { name: "listing-id" },
                  isRequired: true,
                },
                optDisplayName,
                optSortBy,
                optSortOrder,
                optLimit,
                optPage,
                optFromJson,
              ],
            },
            {
              name: "listing-subscriptions-deprecated",
              description: "Deprecated",
              deprecated: true,
              options: [
                {
                  name: "--listing-id",
                  description: "The unique identifier for the listing",
                  args: { name: "listing-id" },
                  isRequired: true,
                },
                optDisplayName,
                optSortBy,
                optSortOrder,
                optLimit,
                optPage,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "subscription",
      description:
        "Use the SELF Service CLI to manage Subscriptions in Oracle Cloud Infrastructure Marketplace",
      subcommands: [
        {
          name: "subscription-token",
          description:
            "The base 64 encoded JWT token which is mapped to a particular subscription",
          subcommands: [
            {
              name: "get",
              description: "Gets a token of Subscriptions",
              options: [optSubscriptionId, optFromJson],
            },
          ],
        },
        {
          name: "work-request-error",
          description:
            "An error encountered while performing an operation that is tracked by a work request",
          subcommands: [
            {
              name: "list",
              description: "Lists the errors for a work request",
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
          name: "work-request-log-entry",
          description:
            "A log message from performing an operation that is tracked by a work request",
          subcommands: [
            {
              name: "list-work-request-logs",
              description: "Lists the logs for a work request",
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
          name: "subscription-collection",
          description: "Results of a subscription search",
          subcommands: [
            {
              name: "list-subscriptions",
              description:
                "Lists the subscriptions which have been created in the specified compartment",
              options: [
                optCompartmentId,
                {
                  name: "--lifecycle-details",
                  description:
                    "A filter to return only resources that match the given lifecycle state",
                  args: {
                    suggestions: [
                      "CREATED",
                      "PENDING_ACTIVATION",
                      "PROVISIONING_STARTED",
                      "PROVISIONING_COMPLETED",
                      "PROVISIONING_FAILED",
                      "ACTIVE",
                      "EXPIRED",
                      "TERMINATED",
                      "FAILED",
                      "DELETING",
                      "UPDATING",
                      "DELETED",
                      "PENDING_CANCELLATION",
                      "SUSPENDED",
                      "CANCELED",
                    ],
                  },
                },
                optDisplayName,
                {
                  name: "--id",
                  description: "The OCID of the Subscription",
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
          name: "subscription",
          description: "The model for a listing subscription",
          subcommands: [
            {
              name: "cancel",
              description: "Requests cancellation of a Subscription",
              options: [
                optSubscriptionId,
                {
                  name: "--reason",
                  description:
                    "Optional reason provided by the customer for the cancellation",
                  args: { name: "reason" },
                },
                optIfMatch,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: {
                    suggestions: ["ACTIVE", "INACTIVE", "DELETED", "FAILED"],
                  },
                  isRepeatable: true,
                },
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "change-compartment",
              description:
                "Moves a Subscription into a different compartment within the same tenancy",
              options: [
                optSubscriptionId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the Subscription to",
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
              description: "Creates a Subscription",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to create the subscription in",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--tenant-id",
                  description:
                    "The OCID of the tenant to create the subscription in",
                  args: { name: "tenant-id" },
                  isRequired: true,
                },
                {
                  name: "--subscription-details",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--seller-id",
                  description: "The OCID for the seller in SELF Service",
                  args: { name: "seller-id" },
                  isRequired: true,
                },
                {
                  name: "--product-id",
                  description:
                    "The unique identifier of the marketplace listing in Oracle Cloud Infrastructure",
                  args: { name: "product-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The subscription name",
                  args: { name: "display-name" },
                },
                {
                  name: "--source-type",
                  description: "The type of seller in SELF Service",
                  args: { suggestions: ["OCI_NATIVE", "THIRD_PARTY"] },
                },
                {
                  name: "--additional-details",
                  description:
                    "Additional details that are specific for this subscription such as activation details",
                  args: { name: "json" },
                },
                {
                  name: "--realm",
                  description:
                    "The realm from where customer is buying the subscription",
                  args: { name: "realm" },
                },
                {
                  name: "--region-parameterconflict",
                  description:
                    "The region from where customer is buying the subscription",
                  args: { name: "region-parameterconflict" },
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
              description: "Deletes a Subscription",
              options: [
                optSubscriptionId,
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
              description: "Gets information about a Subscription",
              options: [optSubscriptionId, optFromJson],
            },
            {
              name: "update",
              description: "Updates a Subscription",
              options: [
                optSubscriptionId,
                {
                  name: "--display-name",
                  description: "The subscription name",
                  args: { name: "display-name" },
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
          ],
        },
        {
          name: "work-request",
          description: "An asynchronous work request",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels a work request",
              options: [
                optWorkRequestId,
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
              description: "Gets the details of a work request",
              options: [optWorkRequestId, optFromJson],
            },
            {
              name: "list",
              description: "Lists the work requests in a compartment",
              options: [
                optCompartmentId,
                {
                  name: "--work-request-id",
                  description: "The OCID of the asynchronous work request",
                  args: { name: "work-request-id" },
                },
                {
                  name: "--status",
                  description:
                    "A filter to return only the resources that match the given lifecycle state",
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
                    "The OCID of the resource affected by the work request",
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
      ],
    },
  ],
};

export default completionSpec;
