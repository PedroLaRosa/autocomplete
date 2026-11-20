// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optOpcCrossRegion: Fig.Option = {
  name: "--opc-cross-region",
  description: "To identify if the call is cross-regional",
  args: { name: "opc-cross-region" },
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
const optDashboardGroupId: Fig.Option = {
  name: "--dashboard-group-id",
  description: "The OCID of the dashboard group",
  args: { name: "dashboard-group-id" },
  isRequired: true,
};
const optDashboardId: Fig.Option = {
  name: "--dashboard-id",
  description: "The OCID of the dashboard",
  args: { name: "dashboard-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name for the dashboard",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const completionSpec: Fig.Spec = {
  name: "dashboard-service",
  description: "Dashboards",
  subcommands: [
    {
      name: "dashboard",
      description:
        "Use the Oracle Cloud Infrastructure Dashboards service CLI to manage dashboards in the Console",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified dashboard",
          options: [
            optDashboardId,
            optIfMatch,
            optOpcCrossRegion,
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
          description: "Gets the specified dashboard's information",
          options: [optDashboardId, optOpcCrossRegion, optFromJson],
        },
        {
          name: "update-dashboard-v1",
          description: "Updates the specified dashboard",
          options: [
            optDashboardId,
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the dashboard",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--config",
              description: "The layout and widget placement for the dashboard",
              args: { name: "json" },
            },
            {
              name: "--widgets",
              description:
                "The basic visualization building blocks of a dashboard",
              args: { name: "json" },
            },
            optIfMatch,
            optOpcCrossRegion,
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
          name: "create-dashboard-v1",
          description:
            "Creates a new dashboard in the dashboard group's compartment using the details provided in request body",
          options: [
            {
              name: "--dashboard-group-id",
              description:
                "The OCID of the dashboard group that the dashbaord is associated with",
              args: { name: "dashboard-group-id" },
              isRequired: true,
            },
            {
              name: "--widgets",
              description:
                "The basic visualization building blocks of a dashboard",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the dashboard",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--config",
              description: "The layout and widget placement for the dashboard",
              args: { name: "json" },
            },
            optOpcCrossRegion,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-dashboards",
          description:
            "Returns a list of dashboards with a specific dashboard group ID",
          options: [
            {
              name: "--dashboard-group-id",
              description:
                "The OCID of the dashboard group that the dashboard belongs to",
              args: { name: "dashboard-group-id" },
              isRequired: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns dashboard resources that match the lifecycle state specified",
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
              name: "--display-name",
              description:
                "A case-sensitive filter that returns resources that match the entire display name specified",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the dashboard",
              args: { name: "id" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                "The page token representing the page at which to start retrieving results",
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optOpcCrossRegion,
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
          name: "change-dashboard-group",
          description:
            "Moves a Dashboard resource from one dashboardGroup identifier to another",
          options: [
            optDashboardId,
            {
              name: "--dashboard-group-id",
              description:
                "The OCID of the dashboardGroup into which the resource should be moved",
              args: { name: "dashboard-group-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dashboard-group",
      description:
        "Use the Oracle Cloud Infrastructure Dashboards service CLI to manage dashboards in the Console",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new dashboard group using the details provided in request body",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the dashboard group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the dashboard group",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optOpcCrossRegion,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified dashboard group",
          options: [
            optDashboardGroupId,
            optIfMatch,
            optOpcCrossRegion,
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
          description: "Gets the specified dashboard group's information",
          options: [optDashboardGroupId, optOpcCrossRegion, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified dashboard group",
          options: [
            optDashboardGroupId,
            optDisplayName,
            {
              name: "--description",
              description: "A short description of the dashboard group",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optOpcCrossRegion,
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
          name: "list-dashboard-groups",
          description:
            "Returns a list of dashboard groups with a specific compartment ID",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns dashboard groups that match the lifecycle state specified",
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
              name: "--display-name",
              description:
                "A case-sensitive filter that returns resources that match the entire display name specified",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the dashboard group",
              args: { name: "id" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                "The page token representing the page at which to start retrieving results",
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optOpcCrossRegion,
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
          name: "change-compartment",
          description:
            "Moves a DashboardGroup resource from one compartment identifier to another",
          options: [
            optDashboardGroupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
