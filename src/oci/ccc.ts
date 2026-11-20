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
  args: { suggestions: ["ACTIVE", "NEEDS_ATTENTION", "DELETED", "FAILED"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
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
const optInfrastructureId: Fig.Option = {
  name: "--infrastructure-id",
  description: "An OCID for a Compute Cloud@Customer Infrastructure",
  args: { name: "infrastructure-id" },
  isRequired: true,
};
const optUpgradeScheduleId: Fig.Option = {
  name: "--upgrade-schedule-id",
  description: "Compute Cloud@Customer upgrade schedule OCID",
  args: { name: "upgrade-schedule-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "ccc",
  description: "Compute Cloud@Customer",
  subcommands: [
    {
      name: "infrastructure",
      description:
        "The Oracle Cloud Infrastructure resource representing the connection to the hardware and software located",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Compute Cloud@Customer infrastructure resource from one compartment to another",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optInfrastructureId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a Compute Cloud@Customer infrastructure",
          options: [
            {
              name: "--display-name",
              description:
                "The name that will be used to display the Compute Cloud@Customer infrastructure in the Oracle Cloud",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The compartment OCID associated with the infrastructure",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "Identifier for network subnet that will be used to communicate with Compute Cloud@Customer infrastructure",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "A mutable client-meaningful text description of the Compute Cloud@Customer infrastructure",
              args: { name: "description" },
            },
            {
              name: "--connection-state",
              description:
                "The current connection state of the Compute Cloud@Customer infrastructure",
              args: { name: "connection-state" },
            },
            {
              name: "--connection-details",
              description:
                "A message describing the current connection state in more detail",
              args: { name: "connection-details" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--upgrade-schedule-id",
              description: "Schedule used for upgrades",
              args: { name: "upgrade-schedule-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Compute Cloud@Customer infrastructure resource specified by the resource OCID",
          options: [
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optInfrastructureId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Compute Cloud@Customer infrastructure",
          options: [optInfrastructureId, optFromJson],
        },
        {
          name: "update",
          description: "Updates Compute Cloud@Customer infrastructure resource",
          options: [
            {
              name: "--display-name",
              description:
                "The name that will be used to display the Compute Cloud@Customer infrastructure in the Oracle Cloud",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A mutable client-meaningful text description of the Compute Cloud@Customer infrastructure",
              args: { name: "description" },
            },
            {
              name: "--subnet-id",
              description:
                "OCID for the network subnet that is used to communicate with Compute Cloud@Customer infrastructure",
              args: { name: "subnet-id" },
            },
            {
              name: "--connection-state",
              description:
                "An updated connection state of the Compute Cloud@Customer infrastructure",
              args: { name: "connection-state" },
            },
            {
              name: "--connection-details",
              description:
                "A message describing the current connection state in more detail",
              args: { name: "connection-details" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optInfrastructureId,
            {
              name: "--upgrade-schedule-id",
              description: "Schedule used for upgrades",
              args: { name: "upgrade-schedule-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Compute Cloud@Customer infrastructures",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--compartment-id-in-subtree",
              description: "Default is false",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--access-level",
              description: "Valid values are RESTRICTED and ACCESSIBLE",
              args: { suggestions: ["RESTRICTED", "ACCESSIBLE"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter used to return only resources that match the given lifecycleState",
              args: {
                suggestions: ["ACTIVE", "NEEDS_ATTENTION", "DELETED", "FAILED"],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--display-name-contains",
              description:
                "A filter to return only resources whose display name contains the substring",
              args: { name: "display-name-contains" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                "A token representing the position at which to start retrieving results",
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            {
              name: "--infrastructure-id",
              description:
                "An OCID for a Compute Cloud@Customer Infrastructure",
              args: { name: "infrastructure-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "upgrade-schedule",
      description: "Defines a schedule for preferred upgrade times",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Compute Cloud@Customer upgrade schedule from one compartment to another using the specified OCID",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optUpgradeScheduleId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Compute Cloud@Customer upgrade schedule",
          options: [
            {
              name: "--display-name",
              description:
                "Compute Cloud@Customer upgrade schedule display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "Compartment OCID for the Compute Cloud@Customer Upgrade Schedule",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--events",
              description:
                "List of preferred times for Compute Cloud@Customer infrastructure to be upgraded",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "An optional description of the Compute Cloud@Customer upgrade schedule",
              args: { name: "description" },
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
          description:
            "Deletes a Compute Cloud@Customer upgrade schedule by the specified OCID",
          options: [
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUpgradeScheduleId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a Compute Cloud@Customer upgrade schedule by the specified OCID",
          options: [optUpgradeScheduleId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the Compute Cloud@Customer upgrade schedule",
          options: [
            {
              name: "--display-name",
              description:
                "Compute Cloud@Customer upgrade schedule display name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "An optional description of the Compute Cloud@Customer upgrade schedule",
              args: { name: "description" },
            },
            {
              name: "--events",
              description:
                "List of preferred times for a Compute Cloud@Customer infrastructure to be upgraded",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUpgradeScheduleId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Compute Cloud@Customer upgrade schedules",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--compartment-id-in-subtree",
              description: "Default is false",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--access-level",
              description: "Valid values are RESTRICTED and ACCESSIBLE",
              args: { suggestions: ["RESTRICTED", "ACCESSIBLE"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources only when their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: ["ACTIVE", "NEEDS_ATTENTION", "DELETED", "FAILED"],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--display-name-contains",
              description:
                "A filter to return only resources whose display name contains the substring",
              args: { name: "display-name-contains" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                "A token representing the position at which to start retrieving results",
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            {
              name: "--upgrade-schedule-id",
              description: "Compute Cloud@Customer upgrade schedule OCID",
              args: { name: "upgrade-schedule-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
