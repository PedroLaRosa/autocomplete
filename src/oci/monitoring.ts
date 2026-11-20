// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optAlarmId: Fig.Option = {
  name: "--alarm-id",
  description: "The OCID of an alarm",
  args: { name: "alarm-id" },
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
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "When true, returns resources from all compartments and subcompartments",
  args: { name: "boolean", suggestions: ["true", "false"] },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment containing the resources monitored by the metric that you are searching for",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optResourceGroup: Fig.Option = {
  name: "--resource-group",
  description: "Resource group that you want to match",
  args: { name: "resource-group" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Usage of predefined tag keys",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETING", "DELETED"] },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "monitoring",
  description: "Monitoring",
  subcommands: [
    {
      name: "alarm-dimension-states-collection",
      description:
        "The list of current alarm state entries for each metric stream that matches the filters",
      subcommands: [
        {
          name: "retrieve-dimension-states",
          description: "Lists the current alarm status of each metric stream",
          options: [
            optAlarmId,
            optPage,
            optLimit,
            {
              name: "--dimension-filters",
              description:
                "A filter to return only alarm state entries that match the exact set of specified dimension key-value pairs",
              args: { name: "json" },
            },
            {
              name: "--status",
              description:
                "A filter to return only alarm state entries that match the status value",
              args: { name: "status" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "metric-data",
      description: "The set of aggregated data returned for a metric",
      subcommands: [
        {
          name: "post",
          description:
            "Publishes raw metric data points to the Monitoring service",
          options: [
            {
              name: "--metric-data",
              description:
                "A metric object containing raw metric data points to be posted to the Monitoring service",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--batch-atomicity",
              description: "Batch atomicity behavior",
              args: { suggestions: ["ATOMIC", "NON_ATOMIC"] },
            },
            {
              name: "--content-encoding",
              description:
                "The optional Content-Encoding header that defines the content encodings that were applied to the payload",
              args: { name: "content-encoding" },
            },
            optFromJson,
          ],
        },
        {
          name: "summarize-metrics-data",
          description:
            "Returns aggregated data that match the criteria specified in the request",
          options: [
            optCompartmentId,
            {
              name: "--namespace",
              description:
                "The source service or application to use when searching for metric data points to aggregate",
              args: { name: "namespace" },
              isRequired: true,
            },
            optResourceGroup,
            {
              name: "--start-time",
              description:
                "The beginning of the time range to use when searching for metric data points",
              args: { name: "datetime" },
            },
            {
              name: "--end-time",
              description:
                "The end of the time range to use when searching for metric data points",
              args: { name: "datetime" },
            },
            {
              name: "--resolution",
              description: "The time between calculated aggregation windows",
              args: { name: "resolution" },
            },
            optCompartmentIdInSubtree,
            {
              name: "--query-text",
              description:
                "The Monitoring Query Language (MQL) expression to use when searching for metric data points to aggregate",
              args: { name: "query-text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "alarm-suppression-collection",
      description: "Collection of property summaries for alarm suppressions",
      subcommands: [
        {
          name: "list-alarm-suppressions",
          description: "Lists alarm suppressions for the specified alarm",
          options: [
            {
              name: "--alarm-id",
              description:
                "The OCID of the alarm that is the target of the alarm suppression",
              args: { name: "alarm-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--level",
              description: "The level of this alarm suppression",
              args: { suggestions: ["ALARM", "DIMENSION"] },
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for searching",
              args: { name: "compartment-id" },
            },
            optCompartmentIdInSubtree,
            {
              name: "--target-type",
              description:
                "The target type to use when listing alarm suppressions",
              args: { suggestions: ["ALARM", "COMPARTMENT"] },
            },
            {
              name: "--is-all-suppressions",
              description:
                "Setting this parameter to true requires the query to specify the alarm (alarmId)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sort-by",
              description:
                "The field to use when sorting returned alarm suppressions",
              args: {
                suggestions: ["displayName", "timeCreated", "timeSuppressFrom"],
              },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use when sorting returned alarm suppressions",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "metric",
      description: "The properties that define a metric",
      subcommands: [
        {
          name: "list",
          description:
            "Returns metric definitions that match the criteria specified in the request",
          options: [
            optCompartmentId,
            {
              name: "--name",
              description:
                "The metric name to use when searching for metric definitions",
              args: { name: "name" },
            },
            {
              name: "--namespace",
              description:
                "The source service or application to use when searching for metric definitions",
              args: { name: "namespace" },
            },
            optResourceGroup,
            {
              name: "--dimension-filters",
              description:
                "Qualifiers that you want to use when searching for metric definitions",
              args: { name: "json" },
            },
            {
              name: "--group-by",
              description: "Group metrics by these fields in the response",
              args: { name: "json" },
            },
            {
              name: "--sort-by",
              description:
                "The field to use when sorting returned metric definitions",
              args: { suggestions: ["NAMESPACE", "NAME", "RESOURCEGROUP"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use when sorting returned metric definitions",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optPage,
            optLimit,
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "alarm-status",
      description:
        "A summary of properties for the specified alarm and its current evaluation status",
      subcommands: [
        {
          name: "list-alarms-status",
          description:
            "List the status of each alarm in the specified compartment",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optPage,
            optLimit,
            optDisplayName,
            {
              name: "--sort-by",
              description:
                "The field to use when sorting returned alarm definitions",
              args: { suggestions: ["displayName", "severity"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use when sorting returned alarm definitions",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--resource-id",
              description:
                "A filter to return only the resource with the specified OCID",
              args: { name: "resource-id" },
            },
            {
              name: "--service-name",
              description:
                "A filter to return only resources that match the given service name exactly",
              args: { name: "service-name" },
            },
            {
              name: "--entity-id",
              description:
                "A filter to return only resources that match the given entity OCID exactly",
              args: { name: "entity-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only metric streams that match the specified status",
              args: { suggestions: ["FIRING", "OK"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "alarm-history-collection",
      description: "The configuration details for retrieving alarm history",
      subcommands: [
        {
          name: "get-alarm-history",
          description: "Get the history of the specified alarm",
          options: [
            optAlarmId,
            {
              name: "--alarm-historytype",
              description: "The type of history entries to retrieve",
              args: {
                suggestions: [
                  "STATE_HISTORY",
                  "STATE_TRANSITION_HISTORY",
                  "RULE_HISTORY",
                  "RULE_TRANSITION_HISTORY",
                ],
              },
            },
            optPage,
            optLimit,
            {
              name: "--timestamp-greater-than-or-equal-to",
              description:
                "A filter to return only alarm history entries with timestamps occurring on or after the specified date",
              args: { name: "datetime" },
            },
            {
              name: "--timestamp-less-than",
              description:
                "A filter to return only alarm history entries with timestamps occurring before the specified date and time",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "alarm",
      description: "The properties that define an alarm",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an alarm into a different compartment within the same tenancy",
          options: [
            optAlarmId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the alarm to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new alarm in the specified compartment",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly name for the alarm",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment containing the alarm",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--metric-compartment-id",
              description:
                "The OCID of the compartment containing the metric being evaluated by the alarm",
              args: { name: "metric-compartment-id" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description:
                "The source service or application emitting the metric that is evaluated by the alarm",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--severity",
              description:
                'The perceived type of response required when the alarm is in the "FIRING" state',
              args: { name: "severity" },
              isRequired: true,
            },
            {
              name: "--destinations",
              description: "A list of destinations for alarm notifications",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "Whether the alarm is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--metric-compartment-id-in-subtree",
              description:
                "When true, the alarm evaluates metrics from all compartments and subcompartments",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optResourceGroup,
            {
              name: "--resolution",
              description:
                "The time between calculated aggregation windows for the alarm",
              args: { name: "resolution" },
            },
            {
              name: "--pending-duration",
              description:
                "The period of time that the condition defined in the alarm must persist before the alarm state changes from",
              args: { name: "pending-duration" },
            },
            {
              name: "--body",
              description:
                "The human-readable content of the delivered alarm notification",
              args: { name: "body" },
            },
            {
              name: "--is-notifications-per-metric-dimension-enabled",
              description:
                "When set to true, splits alarm notifications per metric stream",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--message-format",
              description: "The format to use for alarm notifications",
              args: { suggestions: ["RAW", "PRETTY_JSON", "ONS_OPTIMIZED"] },
            },
            {
              name: "--repeat-notification-duration",
              description:
                "The frequency for re-submitting alarm notifications, if the alarm keeps firing without interruption",
              args: { name: "repeat-notification-duration" },
            },
            {
              name: "--suppression",
              description: "The configuration details for suppressing an alarm",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--overrides",
              description:
                "A set of overrides that control evaluations of the alarm",
              args: { name: "json" },
            },
            {
              name: "--rule-name",
              description:
                "Identifier of the alarm's base values for alarm evaluation, for use when the alarm contains overrides",
              args: { name: "rule-name" },
            },
            {
              name: "--notification-version",
              description:
                "The version of the alarm notification to be delivered",
              args: { name: "notification-version" },
            },
            {
              name: "--notification-title",
              description:
                "Customizable notification title (title alarm message parameter)",
              args: { name: "notification-title" },
            },
            {
              name: "--evaluation-slack-duration",
              description:
                "Customizable slack period to wait for metric ingestion before evaluating the alarm",
              args: { name: "evaluation-slack-duration" },
            },
            {
              name: "--alarm-summary",
              description:
                "Customizable alarm summary (alarmSummary alarm message parameter)",
              args: { name: "alarm-summary" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--query-text",
              description:
                "The Monitoring Query Language (MQL) expression to evaluate for the alarm",
              args: { name: "query-text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified alarm",
          options: [
            optAlarmId,
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
          description: "Gets the specified alarm",
          options: [optAlarmId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the alarms for the specified compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only alarms that match the given lifecycle state exactly",
              args: { suggestions: ["ACTIVE", "DELETING", "DELETED"] },
            },
            {
              name: "--sort-by",
              description:
                "The field to use when sorting returned alarm definitions",
              args: { suggestions: ["displayName", "severity"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use when sorting returned alarm definitions",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified alarm",
          options: [
            optAlarmId,
            {
              name: "--display-name",
              description: "A user-friendly name for the alarm",
              args: { name: "display-name" },
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment containing the alarm",
              args: { name: "compartment-id" },
            },
            {
              name: "--metric-compartment-id",
              description:
                "The OCID of the compartment containing the metric being evaluated by the alarm",
              args: { name: "metric-compartment-id" },
            },
            {
              name: "--metric-compartment-id-in-subtree",
              description:
                "When true, the alarm evaluates metrics from all compartments and subcompartments",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--namespace",
              description:
                "The source service or application emitting the metric that is evaluated by the alarm",
              args: { name: "namespace" },
            },
            optResourceGroup,
            {
              name: "--resolution",
              description:
                "The time between calculated aggregation windows for the alarm",
              args: { name: "resolution" },
            },
            {
              name: "--pending-duration",
              description:
                "The period of time that the condition defined in the alarm must persist before the alarm state changes from",
              args: { name: "pending-duration" },
            },
            {
              name: "--severity",
              description:
                "The perceived severity of the alarm with regard to the affected system",
              args: { name: "severity" },
            },
            {
              name: "--body",
              description:
                "The human-readable content of the delivered alarm notification",
              args: { name: "body" },
            },
            {
              name: "--is-notifications-per-metric-dimension-enabled",
              description:
                "When set to true, splits alarm notifications per metric stream",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--message-format",
              description: "The format to use for alarm notifications",
              args: { suggestions: ["RAW", "PRETTY_JSON", "ONS_OPTIMIZED"] },
            },
            {
              name: "--destinations",
              description: "A list of destinations for alarm notifications",
              args: { name: "json" },
            },
            {
              name: "--repeat-notification-duration",
              description:
                "The frequency for re-submitting alarm notifications, if the alarm keeps firing without interruption",
              args: { name: "repeat-notification-duration" },
            },
            {
              name: "--suppression",
              description: "The configuration details for suppressing an alarm",
              args: { name: "json" },
            },
            {
              name: "--is-enabled",
              description: "Whether the alarm is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--overrides",
              description:
                "A set of overrides that control evaluations of the alarm",
              args: { name: "json" },
            },
            {
              name: "--rule-name",
              description:
                "Identifier of the alarm's base values for alarm evaluation, for use when the alarm contains overrides",
              args: { name: "rule-name" },
            },
            {
              name: "--notification-version",
              description:
                "The version of the alarm notification to be delivered",
              args: { name: "notification-version" },
            },
            {
              name: "--notification-title",
              description:
                "Customizable notification title (title alarm message parameter)",
              args: { name: "notification-title" },
            },
            {
              name: "--evaluation-slack-duration",
              description:
                "Customizable slack period to wait for metric ingestion before evaluating the alarm",
              args: { name: "evaluation-slack-duration" },
            },
            {
              name: "--alarm-summary",
              description:
                "Customizable alarm summary (alarmSummary alarm message parameter)",
              args: { name: "alarm-summary" },
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--query-text",
              description:
                "The Monitoring Query Language (MQL) expression to evaluate for the alarm",
              args: { name: "query-text" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "suppression",
      description: "The configuration details for an alarm-wide suppression",
      subcommands: [
        {
          name: "remove",
          description:
            "Removes any existing suppression for the specified alarm",
          options: [optAlarmId, optIfMatch, optFromJson],
        },
      ],
    },
    {
      name: "alarm-suppression",
      description: "The configuration details for an alarm suppression",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new alarm suppression at the specified level (alarm-wide or dimension-specific)",
          options: [
            {
              name: "--alarm-suppression-target",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the alarm suppression",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--time-suppress-from",
              description:
                "The start date and time for the suppression to take place, inclusive",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-suppress-until",
              description:
                "The end date and time for the suppression to take place, inclusive",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--level",
              description: "The level of this alarm suppression",
              args: { name: "level" },
            },
            {
              name: "--description",
              description: "Human-readable reason for this alarm suppression",
              args: { name: "description" },
            },
            {
              name: "--dimensions",
              description:
                "A filter to suppress only alarm state entries that include the set of specified dimension key-value pairs",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--suppression-conditions",
              description: "Array of all preconditions for alarm suppression",
              args: { name: "json" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified alarm suppression",
          options: [
            {
              name: "--alarm-suppression-id",
              description: "The OCID of the alarm suppression",
              args: { name: "alarm-suppression-id" },
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
              args: { suggestions: ["ACTIVE", "DELETED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified alarm suppression",
          options: [
            {
              name: "--alarm-suppression-id",
              description: "The OCID of the alarm suppression",
              args: { name: "alarm-suppression-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "summarize-alarm-suppression-history",
          description:
            "Returns history of suppressions for the specified alarm",
          options: [
            optAlarmId,
            optPage,
            optLimit,
            {
              name: "--dimensions",
              description:
                "A filter to suppress only alarm state entries that include the set of specified dimension key-value pairs",
              args: { name: "json" },
            },
            {
              name: "--time-suppress-from-greater-than-or-equal-to",
              description:
                'A filter to return only entries with "timeSuppressFrom" time occurring on or after the specified time',
              args: { name: "datetime" },
            },
            {
              name: "--time-suppress-from-less-than",
              description:
                'A filter to return only entries with "timeSuppressFrom" time occurring before the specified time',
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
