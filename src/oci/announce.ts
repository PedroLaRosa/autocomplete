// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "The locking version, used for optimistic concurrency control",
  args: { name: "if-match" },
};
const optAnnouncementSubscriptionId: Fig.Option = {
  name: "--announcement-subscription-id",
  description: "The OCID of the announcement subscription",
  args: { name: "announcement-subscription-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
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
const optPreferredTimeZone: Fig.Option = {
  name: "--preferred-time-zone",
  description:
    "The time zone in which the user prefers to receive announcements",
  args: { name: "preferred-time-zone" },
};
const optAnnouncementId: Fig.Option = {
  name: "--announcement-id",
  description: "The OCID of the announcement",
  args: { name: "announcement-id" },
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
  args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const completionSpec: Fig.Spec = {
  name: "announce",
  description: "Announcements Service",
  subcommands: [
    {
      name: "announcements",
      description:
        "An announcement represents a message targetted to a specific tenant",
      subcommands: [
        {
          name: "list",
          description: "Gets a list of announcements for the current tenancy",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--announcement-type",
              description: "The type of announcement",
              args: { name: "announcement-type" },
            },
            {
              name: "--lifecycle-state",
              description: "The announcement's current lifecycle state",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            {
              name: "--is-banner",
              description:
                "Whether the announcement is displayed as a console banner",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sort-by",
              description: "The criteria to sort by",
              args: {
                suggestions: [
                  "timeOneValue",
                  "timeTwoValue",
                  "timeCreated",
                  "referenceTicketNumber",
                  "summary",
                  "announcementType",
                ],
              },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use. (Sorting by announcementType orders the announcements list according to importance.)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--time-one-earliest-time",
              description:
                "The boundary for the earliest timeOneValue date on announcements that you want to see",
              args: { name: "datetime" },
            },
            {
              name: "--time-one-latest-time",
              description:
                "The boundary for the latest timeOneValue date on announcements that you want to see",
              args: { name: "datetime" },
            },
            {
              name: "--environment-name",
              description:
                "A filter to return only announcements that match a specific environment name",
              args: { name: "environment-name" },
            },
            {
              name: "--service",
              description:
                "A filter to return only announcements affecting a specific service",
              args: { name: "service" },
            },
            {
              name: "--platform-type",
              description:
                "A filter to return only announcements affecting a specific platform",
              args: { suggestions: ["IAAS", "SAAS", "PAAS"] },
            },
            {
              name: "--exclude-announcement-types",
              description: "Exclude The type of announcement",
              args: { name: "exclude-announcement-types" },
              isRepeatable: true,
            },
            {
              name: "--should-show-only-latest-in-chain",
              description:
                "A filter to display only the latest announcement in a chain",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chain-id",
              description:
                "A filter to return only announcements belonging to the specified announcement chain ID",
              args: { name: "chain-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of a specific announcement",
          options: [optAnnouncementId, optFromJson],
        },
      ],
    },
    {
      name: "user-status",
      description:
        "An announcement's status regarding whether it has been acknowledged by a user",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about whether a specific announcement was acknowledged by a user",
          options: [optAnnouncementId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the status of the specified announcement with regard to whether it has been marked as read",
          options: [
            optAnnouncementId,
            {
              name: "--user-status-announcement-id",
              description:
                "The OCID of the announcement that this status is associated with",
              args: { name: "user-status-announcement-id" },
              isRequired: true,
            },
            {
              name: "--user-id",
              description:
                "The OCID of the user that this status is associated with",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--time-acknowledged",
              description:
                "The date and time the announcement was acknowledged, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "announcement-subscription",
      description: "Manage Oracle Cloud Infrastructure console announcements",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified announcement subscription from one compartment to another compartment",
          options: [
            optAnnouncementSubscriptionId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which you want to move the announcement subscription",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new announcement subscription",
          options: [
            {
              name: "--display-name",
              description:
                "A user-friendly name for the announcement subscription",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the announcement subscription",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--ons-topic-id",
              description:
                "The OCID of the Notifications service topic that is the target for publishing announcements that match",
              args: { name: "ons-topic-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description of the announcement subscription",
              args: { name: "description" },
            },
            {
              name: "--filter-groups",
              description:
                "A list of filter groups for the announcement subscription",
              args: { name: "json" },
            },
            {
              name: "--preferred-language",
              description:
                "(For announcement subscriptions with SaaS configured as the platform type or Oracle Fusion Applications",
              args: { name: "preferred-language" },
            },
            optPreferredTimeZone,
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
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
          name: "create-filter-group",
          description:
            "Creates a new filter group in the specified announcement subscription",
          options: [
            optAnnouncementSubscriptionId,
            {
              name: "--name",
              description: "The name of the filter group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--filters",
              description:
                "A list of filters against which the Announcements service will match announcements",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified announcement subscription",
          options: [
            optAnnouncementSubscriptionId,
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
          name: "delete-filter-group",
          description:
            "Deletes a filter group in the specified announcement subscription",
          options: [
            optAnnouncementSubscriptionId,
            {
              name: "--filter-group-name",
              description: "The name of the filter group",
              args: { name: "filter-group-name" },
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
          name: "get",
          description: "Gets the specified announcement subscription",
          options: [optAnnouncementSubscriptionId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified announcement subscription",
          options: [
            optAnnouncementSubscriptionId,
            {
              name: "--display-name",
              description:
                "A user-friendly name for the announcement subscription",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description of the announcement subscription",
              args: { name: "description" },
            },
            {
              name: "--ons-topic-id",
              description:
                "The OCID of the Notifications service topic that is the target for publishing announcements that match",
              args: { name: "ons-topic-id" },
            },
            {
              name: "--preferred-language",
              description:
                "(For announcement subscriptions with SaaS configured as the platform type or Oracle Fusion Applications",
              args: { name: "preferred-language" },
            },
            optPreferredTimeZone,
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
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
        {
          name: "update-filter-group",
          description:
            "Updates a filter group in the specified announcement subscription",
          options: [
            optAnnouncementSubscriptionId,
            {
              name: "--filter-group-name",
              description: "The name of the filter group",
              args: { name: "filter-group-name" },
              isRequired: true,
            },
            {
              name: "--filters",
              description:
                "A list of filters against which the Announcements service will match announcements",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of all announcement subscriptions in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only announcement subscriptions that match the given lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the announcement subscription",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description:
                "The sort order to use, whether ascending ('ASC') or descending ('DESC')",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The criteria to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "announcements-preferences",
      description: "Manage Oracle Cloud Infrastructure console announcements",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a request that specifies preferences for the tenancy regarding receiving announcements by email",
          options: [
            {
              name: "--type",
              description:
                "The entity type, which specifies a model that either creates new announcement email preferences or updates",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--preference-type",
              description:
                "The string representing the user's preference, whether to opt in to only required announcements",
              args: {
                suggestions: [
                  "OPT_IN_TENANT_ANNOUNCEMENTS",
                  "OPT_IN_TENANT_AND_INFORMATIONAL_ANNOUNCEMENTS",
                  "OPT_OUT_ALL_ANNOUNCEMENTS",
                ],
              },
              isRequired: true,
            },
            {
              name: "--is-unsubscribed",
              description:
                "A Boolean value to indicate whether the specified compartment chooses to not to receive informational",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment for which you want to manage announcement email preferences",
              args: { name: "compartment-id" },
            },
            optPreferredTimeZone,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the current preferences of the tenancy regarding receiving announcements by email",
          options: [
            {
              name: "--preference-id",
              description: "The ID of the preference",
              args: { name: "preference-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the current preferences of the tenancy regarding receiving announcements by email",
          options: [
            optCompartmentId,
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
            "Updates the preferences of the tenancy regarding receiving announcements by email",
          options: [
            {
              name: "--preference-id",
              description: "The ID of the preference",
              args: { name: "preference-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The entity type, which specifies a model that either creates new announcement email preferences or updates",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--preference-type",
              description:
                "The string representing the user's preference, whether to opt in to only required announcements",
              args: {
                suggestions: [
                  "OPT_IN_TENANT_ANNOUNCEMENTS",
                  "OPT_IN_TENANT_AND_INFORMATIONAL_ANNOUNCEMENTS",
                  "OPT_OUT_ALL_ANNOUNCEMENTS",
                ],
              },
              isRequired: true,
            },
            {
              name: "--is-unsubscribed",
              description:
                "A Boolean value to indicate whether the specified compartment chooses to not to receive informational",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment for which you want to manage announcement email preferences",
              args: { name: "compartment-id" },
            },
            optPreferredTimeZone,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Manage Oracle Cloud Infrastructure console announcements",
      subcommands: [
        {
          name: "list",
          description: "List all active services",
          options: [
            optCompartmentId,
            {
              name: "--platform-type",
              description:
                "A filter to return only announcements affecting a specific platform",
              args: { suggestions: ["IAAS", "SAAS", "PAAS"] },
            },
            {
              name: "--comms-manager-name",
              description: "Filter by comms manager name",
              args: { suggestions: ["CN", "FUSION", "AS", "ERF"] },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "Sort by service name parameter",
              args: { suggestions: ["serviceName"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, whether ascending ('ASC') or descending ('DESC')",
              args: { suggestions: ["ASC", "DESC"] },
            },
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
