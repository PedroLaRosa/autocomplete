// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "Used for optimistic concurrency control",
  args: { name: "if-match" },
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
const optProtocol: Fig.Option = {
  name: "--protocol",
  description: "The protocol used for the subscription",
  args: { name: "protocol" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "ons",
  description: "Notifications",
  subcommands: [
    {
      name: "topic",
      description: "The properties that define a topic",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a topic into a different compartment within the same tenancy",
          options: [
            {
              name: "--topic-id",
              description: "The OCID of the topic to move",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the specified topic or subscription to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified topic",
          options: [
            {
              name: "--topic-id",
              description: "The OCID of the topic to delete",
              args: { name: "topic-id" },
              isRequired: true,
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
          name: "create",
          description: "Creates a topic in the specified compartment",
          options: [
            {
              name: "--name",
              description: "The name of the topic being created",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to create the topic in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the topic being created",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified topic's configuration information",
          options: [
            {
              name: "--topic-id",
              description: "The OCID of the topic to retrieve",
              args: { name: "topic-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists topics in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "A filter to only return resources that match the given id exactly",
              args: { name: "id" },
            },
            {
              name: "--name",
              description:
                "A filter to only return resources that match the given name exactly",
              args: { name: "name" },
            },
            {
              name: "--page",
              description: "For list pagination",
              args: { name: "page" },
            },
            {
              name: "--limit",
              description: "For list pagination",
              args: { name: "integer" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "LIFECYCLESTATE"] },
            },
            {
              name: "--sort-order",
              description: "The sort order to use (ascending or descending)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--lifecycle-state",
              description: "Filter returned list by specified lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETING", "CREATING"] },
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
        {
          name: "update",
          description: "Updates the specified topic's configuration",
          options: [
            {
              name: "--topic-id",
              description: "The OCID of the topic to update",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the topic",
              args: { name: "description" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
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
      name: "subscription",
      description: "The subscription's configuration",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a subscription into a different compartment within the same tenancy",
          options: [
            {
              name: "--subscription-id",
              description: "The OCID of the subscription to move",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the specified topic or subscription to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a subscription for the specified topic and sends a subscription confirmation URL to the endpoint",
          options: [
            {
              name: "--topic-id",
              description: "The OCID of the topic for the subscription",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for the subscription",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optProtocol,
            {
              name: "--metadata",
              description: "Metadata for the subscription",
              args: { name: "metadata" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["PENDING", "ACTIVE", "DELETED"] },
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
            {
              name: "--subscription-endpoint",
              description: "The endpoint of the subscription",
              args: { name: "subscription-endpoint" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified subscription",
          options: [
            {
              name: "--subscription-id",
              description: "The OCID of the subscription to delete",
              args: { name: "subscription-id" },
              isRequired: true,
            },
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
              args: { suggestions: ["PENDING", "ACTIVE", "DELETED"] },
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
          description:
            "Gets the specified subscription's configuration information",
          options: [
            {
              name: "--subscription-id",
              description: "The OCID of the subscription to retrieve",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the subscriptions in the specified compartment or topic",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--topic-id",
              description:
                "Return all subscriptions that are subscribed to the given topic OCID",
              args: { name: "topic-id" },
            },
            {
              name: "--page",
              description: "For list pagination",
              args: { name: "page" },
            },
            {
              name: "--limit",
              description: "For list pagination",
              args: { name: "integer" },
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
        {
          name: "update",
          description: "Updates the specified subscription's configuration",
          options: [
            {
              name: "--subscription-id",
              description: "The OCID of the subscription to update",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: "--delivery-policy",
              description: "The delivery policy of the subscription",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "confirm",
          description:
            "Gets the confirmation details for the specified subscription",
          options: [
            {
              name: "--id",
              description:
                "The OCID of the subscription to get the confirmation details for",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--token",
              description: "The subscription confirmation token",
              args: { name: "token" },
              isRequired: true,
            },
            optProtocol,
            optFromJson,
          ],
        },
        {
          name: "unsubscribe",
          description: "Unsubscribes the subscription from the topic",
          options: [
            {
              name: "--id",
              description: "The OCID of the subscription to unsubscribe from",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--token",
              description: "The subscription confirmation token",
              args: { name: "token" },
              isRequired: true,
            },
            optProtocol,
            optFromJson,
          ],
        },
        {
          name: "resend-confirmation",
          description:
            "Resends the confirmation details for the specified subscription",
          options: [
            {
              name: "--id",
              description:
                "The OCID of the subscription to resend the confirmation for",
              args: { name: "id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "message",
      description: "A message for a topic",
      subcommands: [
        {
          name: "publish",
          description: "Publishes a message to the specified topic",
          options: [
            {
              name: "--topic-id",
              description: "The OCID of the topic",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--body",
              description: "The body of the message to be published",
              args: { name: "body" },
              isRequired: true,
            },
            {
              name: "--title",
              description: "The title of the message to be published",
              args: { name: "title" },
            },
            {
              name: "--message-type",
              description: "Deprecated",
              args: { suggestions: ["JSON", "RAW_TEXT"] },
              deprecated: true,
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
