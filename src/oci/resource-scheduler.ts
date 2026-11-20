// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "This is used for optimistic concurrency control",
  args: { name: "if-match" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optScheduleId: Fig.Option = {
  name: "--schedule-id",
  description: "This is the OCID of the schedule",
  args: { name: "schedule-id" },
  isRequired: true,
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
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "This used for list pagination",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "This is the sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "This is the OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "This is the OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
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
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACTIVE",
      "INACTIVE",
      "CREATING",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "resource-scheduler",
  description: "Resource Scheduler",
  subcommands: [
    {
      name: "schedule",
      description:
        "A Schedule describes the date and time when an operation will be or has been applied to a set of resources",
      subcommands: [
        {
          name: "activate",
          description: "This API activates a schedule",
          options: [
            optScheduleId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "This API moves a schedule into a different compartment within the same tenancy",
          options: [
            optScheduleId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the schedule to",
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
          description: "This API creates a schedule",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which the schedule is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--action",
              description:
                "This is the action that will be executed by the schedule",
              args: {
                suggestions: [
                  "START_RESOURCE",
                  "STOP_RESOURCE",
                  "BACKUP_RESOURCE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--recurrence-details",
              description: "This is the frequency of recurrence of a schedule",
              args: { name: "recurrence-details" },
              isRequired: true,
            },
            {
              name: "--recurrence-type",
              description: "Type of recurrence of a schedule",
              args: { suggestions: ["CRON", "ICAL"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "This is a user-friendly name for the schedule",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "This is the description of the schedule",
              args: { name: "description" },
            },
            {
              name: "--resource-filters",
              description: "This is a list of resources filters",
              args: { name: "json" },
            },
            {
              name: "--resources",
              description:
                "This is the list of resources to which the scheduled operation is applied",
              args: { name: "json" },
            },
            {
              name: "--time-starts",
              description:
                "This is the date and time the schedule starts, in the format defined by RFC 3339",
              args: { name: "datetime" },
            },
            {
              name: "--time-ends",
              description:
                "This is the date and time the schedule ends, in the format defined by RFC 3339",
              args: { name: "datetime" },
            },
            {
              name: "--local-time-zone",
              description:
                "IANA timezone identifier (e.g., 'America/New_York', 'UTC', 'Europe/London')",
              args: { name: "local-time-zone" },
            },
            {
              name: "--freeform-tags",
              description: "These are free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "These are defined tags for this resource",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deactivate",
          description: "This API deactivates a schedule",
          options: [
            optScheduleId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "This API deletes a schedule",
          options: [
            optScheduleId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "This API gets information about a schedule",
          options: [optScheduleId, optFromJson],
        },
        {
          name: "list",
          description: "This API gets a list of schedules",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "This is a filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "INACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "This is a filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--schedule-id",
              description: "This is the OCID of the schedule",
              args: { name: "schedule-id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "This is the field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "lifecycleState",
                  "state",
                ],
              },
            },
            optSortOrder,
            {
              name: "--resource-id",
              description:
                "This is the OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "The API updates a schedule",
          options: [
            optScheduleId,
            {
              name: "--display-name",
              description: "This is a user-friendly name for the schedule",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "This is the description of the schedule",
              args: { name: "description" },
            },
            {
              name: "--action",
              description:
                "This is the action that will be executed by the schedule",
              args: {
                suggestions: [
                  "START_RESOURCE",
                  "STOP_RESOURCE",
                  "BACKUP_RESOURCE",
                ],
              },
            },
            {
              name: "--recurrence-details",
              description: "This is the frequency of recurrence of a schedule",
              args: { name: "recurrence-details" },
            },
            {
              name: "--recurrence-type",
              description: "Type of recurrence of a schedule",
              args: { suggestions: ["CRON", "ICAL"] },
            },
            {
              name: "--resource-filters",
              description: "This is a list of resources filters",
              args: { name: "json" },
            },
            {
              name: "--resources",
              description:
                "This is the list of resources to which the scheduled operation is applied",
              args: { name: "json" },
            },
            {
              name: "--time-starts",
              description:
                "This is the date and time the schedule starts, in the format defined by RFC 3339",
              args: { name: "datetime" },
            },
            {
              name: "--time-ends",
              description:
                "This is the date and time the schedule ends, in the format defined by RFC 3339",
              args: { name: "datetime" },
            },
            {
              name: "--local-time-zone",
              description:
                "IANA timezone identifier (e.g., 'America/New_York', 'UTC', 'Europe/London')",
              args: { name: "local-time-zone" },
            },
            {
              name: "--freeform-tags",
              description: "These are free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "These are defined tags for this resource",
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
      ],
    },
    {
      name: "work-request-error",
      description:
        "This is an error encountered while performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "This API lists the errors for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "This is the field to sort by",
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
        "This is a log message from performing an operation that is tracked by a work request",
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
              description: "This is the field to sort by",
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
      name: "work-request",
      description: "This is an asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "This API cancels a work request",
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
          description: "This API gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "This API gets a list of work requests",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "This is the OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "This is a filter to return only the resources that match the given lifecycle state",
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
                "This is the OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "This is the field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            {
              name: "--schedule-id",
              description: "This is the OCID of the schedule",
              args: { name: "schedule-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-type-collection",
      description:
        "This is the collection of resource types supported by resource scheduler",
      subcommands: [
        {
          name: "list-resource-types",
          description: "This API gets a list of schedule resource types",
          options: [
            optCompartmentId,
            {
              name: "--action-type",
              description: "This describes the Action Type",
              args: { name: "action-type" },
            },
            optLimit,
            optPage,
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
