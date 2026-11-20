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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment ID in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, whether 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description: "The usage statement subscription unique OCID",
  args: { name: "subscription-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optQueryDefinition: Fig.Option = {
  name: "--query-definition",
  args: { name: "json" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["displayName"] },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment OCID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCustomTableId: Fig.Option = {
  name: "--custom-table-id",
  description: "The custom table unique OCID",
  args: { name: "custom-table-id" },
  isRequired: true,
};
const optEmailRecipientsGroupId: Fig.Option = {
  name: "--email-recipients-group-id",
  description: "The email recipients group OCID",
  args: { name: "email-recipients-group-id" },
  isRequired: true,
};
const optQueryId: Fig.Option = {
  name: "--query-id",
  description: "The query unique OCID",
  args: { name: "query-id" },
  isRequired: true,
};
const optScheduleId: Fig.Option = {
  name: "--schedule-id",
  description: "The schedule unique OCID",
  args: { name: "schedule-id" },
  isRequired: true,
};
const optUsageCarbonEmissionsQueryId: Fig.Option = {
  name: "--usage-carbon-emissions-query-id",
  description: "The query unique OCID",
  args: { name: "usage-carbon-emissions-query-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "usage-api",
  description: "Usage",
  subcommands: [
    {
      name: "email-recipients-group",
      description: "The recipients group to receive usage statement emails",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a list of email recipients that can receive usage statements for the subscription",
          options: [
            {
              name: "--compartment-id",
              description: "The customer tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--recipients-list",
              description:
                "The list of recipients that will receive usage statement emails",
              args: { name: "json" },
              isRequired: true,
            },
            optSubscriptionId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the email recipients group for the usage statement subscription",
          options: [
            optEmailRecipientsGroupId,
            optSubscriptionId,
            optCompartmentId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns the saved usage statement email recipients group",
          options: [
            optEmailRecipientsGroupId,
            optSubscriptionId,
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns the saved usage statement email recipients group",
          options: [
            optSubscriptionId,
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a saved email recipients group",
          options: [
            {
              name: "--recipients-list",
              description:
                "The list of recipients will receive usage statement emails",
              args: { name: "json" },
              isRequired: true,
            },
            optEmailRecipientsGroupId,
            optSubscriptionId,
            optCompartmentId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "schedule",
      description: "The schedule",
      subcommands: [
        {
          name: "create",
          description: "Returns the created schedule",
          options: [
            {
              name: "--name",
              description: "The unique name of the user-created schedule",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The customer tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--result-location",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--schedule-recurrences",
              description:
                "Specifies the frequency according to when the schedule will be run",
              args: { name: "schedule-recurrences" },
              isRequired: true,
            },
            {
              name: "--time-scheduled",
              description: "The date and time of the first time job execution",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the schedule",
              args: { name: "description" },
            },
            {
              name: "--output-file-format",
              description: "Specifies the supported output file format",
              args: { suggestions: ["CSV", "PDF"] },
            },
            {
              name: "--saved-report-id",
              description:
                "The saved report ID which can also be used to generate a query",
              args: { name: "saved-report-id" },
            },
            { name: "--query-properties", args: { name: "json" } },
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
          name: "delete",
          description: "Delete a saved scheduled report by the OCID",
          options: [
            optScheduleId,
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
          description: "Returns the saved schedule",
          options: [optScheduleId, optFromJson],
        },
        {
          name: "list",
          description: "Returns the saved schedule list",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "timeCreated"] },
            },
            optSortOrder,
            {
              name: "--name",
              description: "The query parameter for filtering by name",
              args: { name: "name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update a saved schedule",
          options: [
            optScheduleId,
            {
              name: "--description",
              description: "The description of the schedule",
              args: { name: "description" },
            },
            {
              name: "--output-file-format",
              description: "Specifies the supported output file format",
              args: { suggestions: ["CSV", "PDF"] },
            },
            { name: "--result-location", args: { name: "json" } },
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
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "usage-summary",
      description: "The usage store result",
      subcommands: [
        {
          name: "request-summarized-usages",
          description: "Returns usage for the given account",
          options: [
            {
              name: "--tenant-id",
              description: "Tenant ID",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            {
              name: "--time-usage-started",
              description: "The usage start time",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-usage-ended",
              description: "The usage end time",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--granularity",
              description: "The usage granularity",
              args: { suggestions: ["HOURLY", "DAILY", "MONTHLY", "TOTAL"] },
              isRequired: true,
            },
            {
              name: "--is-aggregate-by-time",
              description: "Specifies whether aggregated by time",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--forecast", args: { name: "json" } },
            {
              name: "--query-type",
              description: "The query usage type",
              args: {
                suggestions: [
                  "USAGE",
                  "COST",
                  "CREDIT",
                  "EXPIREDCREDIT",
                  "ALLCREDIT",
                  "USAGE_ONLY",
                ],
              },
            },
            {
              name: "--group-by",
              description: "Aggregate the result by",
              args: { name: "json" },
            },
            {
              name: "--group-by-tag",
              description: "GroupBy a specific tagKey",
              args: { name: "json" },
            },
            {
              name: "--compartment-depth",
              description: "The compartment depth level",
              args: { name: "number" },
            },
            { name: "--filter", args: { name: "json" } },
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "usage-carbon-emissions-query",
      description:
        "The carbon emissions usage saved query to filter and aggregate",
      subcommands: [
        {
          name: "create",
          description: "Returns the created carbon emissions usage query",
          options: [optCompartmentId2, optQueryDefinition, optFromJson],
        },
        {
          name: "delete",
          description:
            "Delete a carbon emissions usage saved query by the OCID",
          options: [
            optUsageCarbonEmissionsQueryId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Returns the carbon emissions usage saved query",
          options: [optUsageCarbonEmissionsQueryId, optFromJson],
        },
        {
          name: "list",
          description: "Returns the carbon emissions usage saved query list",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update a carbon emissions usage saved query by the OCID",
          options: [
            optQueryDefinition,
            optUsageCarbonEmissionsQueryId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "configuration",
      description: "A configuration",
      subcommands: [
        {
          name: "request-summarized",
          description:
            "Returns the configurations list for the UI drop-down list",
          options: [
            {
              name: "--tenant-id",
              description: "Tenant id",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "request-usage-carbon-emission-config",
          description:
            "Returns the configuration list for the Console's carbon emission user interface drop-down list",
          options: [
            {
              name: "--tenant-id",
              description: "Tenant id",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "average-carbon-emission",
      description: "Average carbon emissions",
      subcommands: [
        {
          name: "request",
          description: "Returns the average carbon emissions summary by SKU",
          options: [
            {
              name: "--sku-part-number",
              description: "The SKU part number",
              args: { name: "sku-part-number" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "query",
      description: "The query to filter and aggregate",
      subcommands: [
        {
          name: "create",
          description: "Returns the created query",
          options: [optCompartmentId2, optQueryDefinition, optFromJson],
        },
        {
          name: "delete",
          description: "Delete a saved query by the OCID",
          options: [optQueryId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Returns the saved query",
          options: [optQueryId, optFromJson],
        },
        {
          name: "list",
          description: "Returns the saved query list",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update a saved query by the OCID",
          options: [
            optQueryDefinition,
            optQueryId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "scheduled-run",
      description: "The saved schedule run",
      subcommands: [
        {
          name: "get",
          description: "Returns the saved schedule run",
          options: [
            {
              name: "--scheduled-run-id",
              description: "The scheduled run unique OCID",
              args: { name: "scheduled-run-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns the schedule history list",
          options: [
            {
              name: "--schedule-id",
              description: "The schedule unique ID",
              args: { name: "schedule-id" },
              isRequired: true,
            },
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
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
      name: "usage-carbon-emission-summary",
      description: "The carbon emission usage store result",
      subcommands: [
        {
          name: "request-usage-carbon-emissions",
          description: "Returns carbon emission usage for the given account",
          options: [
            {
              name: "--tenant-id",
              description: "Tenant ID",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            {
              name: "--time-usage-started",
              description: "The usage start time",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-usage-ended",
              description: "The usage end time",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--emission-calculation-method",
              description:
                "Specifies the method used for emission calculation, such as POWER_BASED or SPEND_BASED",
              args: { suggestions: ["SPEND_BASED", "POWER_BASED"] },
            },
            {
              name: "--emission-type",
              description:
                "Specifies the type of emission, such as MARKET_BASED or LOCATION_BASED",
              args: { suggestions: ["MARKET_BASED", "LOCATION_BASED"] },
            },
            {
              name: "--granularity",
              description: "The carbon emission granularity",
              args: { suggestions: ["DAILY", "MONTHLY"] },
            },
            {
              name: "--is-aggregate-by-time",
              description: "Specifies whether aggregated by time",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--group-by",
              description: "Aggregate the result by",
              args: { name: "json" },
            },
            {
              name: "--group-by-tag",
              description: "GroupBy a specific tagKey",
              args: { name: "json" },
            },
            {
              name: "--compartment-depth",
              description: "The compartment depth level",
              args: { name: "integer" },
            },
            { name: "--filter", args: { name: "json" } },
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "clean-energy-usage",
      description: "Clean energy usage",
      subcommands: [
        {
          name: "request",
          description: "Returns the clean energy usage summary by region",
          options: [
            {
              name: "--region-parameterconflict",
              description: "The region",
              args: { name: "region-parameterconflict" },
              isRequired: true,
            },
            {
              name: "--ad",
              description: "The availability domain",
              args: { name: "ad" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "custom-table",
      description: "The saved custom table",
      subcommands: [
        {
          name: "create",
          description: "Returns the created custom table",
          options: [
            optCompartmentId2,
            {
              name: "--saved-report-id",
              description: "The associated saved report OCID",
              args: { name: "saved-report-id" },
              isRequired: true,
            },
            {
              name: "--saved-custom-table",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a saved custom table by the OCID",
          options: [optCustomTableId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Returns the saved custom table",
          options: [optCustomTableId, optFromJson],
        },
        {
          name: "list",
          description: "Returns the saved custom table list",
          options: [
            optCompartmentId,
            {
              name: "--saved-report-id",
              description: "The saved report ID in which to list resources",
              args: { name: "saved-report-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update a saved custom table by table ID",
          options: [
            {
              name: "--saved-custom-table",
              args: { name: "json" },
              isRequired: true,
            },
            optCustomTableId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
