// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
  args: { suggestions: ["ACTIVE"] },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optManagementDashboardId: Fig.Option = {
  name: "--management-dashboard-id",
  description: "A unique dashboard identifier",
  args: { name: "management-dashboard-id" },
  isRequired: true,
};
const optManagementSavedSearchId: Fig.Option = {
  name: "--management-saved-search-id",
  description: "A unique saved search identifier",
  args: { name: "management-saved-search-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optDrilldownConfig: Fig.Option = {
  name: "--drilldown-config",
  description:
    "Drill-down configuration to define the destination of a drill-down action",
  args: { name: "json" },
};
const optFeaturesConfig: Fig.Option = {
  name: "--features-config",
  description: "Contains configuration for enabling features",
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
    "The page token representing the page on which to start retrieving results",
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
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const completionSpec: Fig.Spec = {
  name: "management-dashboard",
  description: "ManagementDashboard",
  subcommands: [
    {
      name: "dashboard",
      description: "Properties of a dashboard, including dashboard ID",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the dashboard from the existing compartment to a new compartment",
          options: [
            optManagementDashboardId,
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment to which the dashboard is being moved",
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
          description: "Creates a new dashboard",
          options: [
            {
              name: "--provider-id",
              description:
                "ID of the service (for example, log-analytics) that owns the dashboard",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--provider-name",
              description:
                "The user friendly name of the service (for example, Logging Analytics) that owns the dashboard",
              args: { name: "provider-name" },
              isRequired: true,
            },
            {
              name: "--provider-version",
              description: "The version of the metadata of the provider",
              args: { name: "provider-version" },
              isRequired: true,
            },
            {
              name: "--tiles",
              description: "Array of dashboard tiles",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Display name of the dashboard",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the dashboard",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment in which the dashboard resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-oob-dashboard",
              description:
                "Determines whether the dashboard is an Out-of-the-Box (OOB) dashboard",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--is-show-in-home",
              description:
                "Determines whether the dashboard will be displayed in Dashboard Home",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--metadata-version",
              description: "The version of the metadata defined in the API",
              args: { name: "metadata-version" },
              isRequired: true,
            },
            {
              name: "--is-show-description",
              description:
                "Determines whether the description of the dashboard is displayed",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--screen-image",
              description: "Screen image of the dashboard",
              args: { name: "screen-image" },
              isRequired: true,
            },
            {
              name: "--nls",
              description: "JSON that contains internationalization options",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--ui-config",
              description: "JSON that contains user interface options",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--data-config",
              description: "Array of JSON that contain data source options",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of dashboard",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--is-favorite",
              description:
                "Determines whether the dashboard is set as favorite",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--dashboard-id",
              description:
                "ID of the dashboard, which must only be provided for Out-of-the-Box (OOB) dashboards",
              args: { name: "dashboard-id" },
            },
            {
              name: "--parameters-config",
              description: "Defines parameters for the dashboard",
              args: { name: "json" },
            },
            optFeaturesConfig,
            optDrilldownConfig,
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
          description: "Deletes a Dashboard by ID",
          options: [
            optManagementDashboardId,
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
          description: "Gets a dashboard and its saved searches by ID",
          options: [optManagementDashboardId, optFromJson],
        },
        {
          name: "get-oob",
          description:
            "Gets an out-of-the-box dashboard and its saved searches by ID",
          options: [optManagementDashboardId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets the list of dashboards in a compartment with pagination",
          options: [
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--compartment-id-in-subtree",
              description:
                "This parameter applies only when compartmentId is root compartment",
              args: { name: "compartment-id-in-subtree" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-oob",
          description:
            "Gets the list of out-of-the-box dashboards with pagination",
          options: [
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates an existing dashboard identified by ID path parameter",
          options: [
            optManagementDashboardId,
            {
              name: "--provider-id",
              description:
                "ID of the service (for example, log-analytics) that owns the dashboard",
              args: { name: "provider-id" },
            },
            {
              name: "--provider-name",
              description:
                "The user friendly name of the service (for example, Logging Analytics) that owns the dashboard",
              args: { name: "provider-name" },
            },
            {
              name: "--provider-version",
              description: "The version of the metadata of the provider",
              args: { name: "provider-version" },
            },
            {
              name: "--tiles",
              description: "Array of dashboard tiles",
              args: { name: "json" },
            },
            {
              name: "--display-name",
              description: "Display name of the dashboard",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the dashboard",
              args: { name: "description" },
            },
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment in which the dashboard resides",
              args: { name: "compartment-id" },
            },
            {
              name: "--is-oob-dashboard",
              description:
                "Determines whether the dashboard is an Out-of-the-Box (OOB) dashboard",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-show-in-home",
              description:
                "Determines whether the dashboard will be displayed in Dashboard Home",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--metadata-version",
              description: "The version of the metadata defined in the API",
              args: { name: "metadata-version" },
            },
            {
              name: "--is-show-description",
              description:
                "Determines whether the description of the dashboard is displayed",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--screen-image",
              description: "Screen image of the dashboard",
              args: { name: "screen-image" },
            },
            {
              name: "--nls",
              description: "JSON that contains internationalization options",
              args: { name: "json" },
            },
            {
              name: "--ui-config",
              description: "JSON that contains user interface options",
              args: { name: "json" },
            },
            {
              name: "--data-config",
              description: "Array of JSON that contain data source options",
              args: { name: "json" },
            },
            {
              name: "--type",
              description: "Type of dashboard",
              args: { name: "type" },
            },
            {
              name: "--is-favorite",
              description:
                "Determines whether the dashboard is set as favorite",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--parameters-config",
              description: "Defines parameters for the dashboard",
              args: { name: "json" },
            },
            optFeaturesConfig,
            optDrilldownConfig,
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
            optFromJson,
          ],
        },
        {
          name: "import",
          description:
            "Imports an array of dashboards and their saved searches",
          options: [
            {
              name: "--dashboards",
              description: "Array of dashboards",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--override-same-name",
              description:
                "By default, if a resource with the same OCID exists in the target compartment",
              args: { name: "override-same-name" },
            },
            {
              name: "--override-dashboard-compartment-ocid",
              description:
                "If this attribute is set, the dashboard resources are created or updated in the compartment specified by OCID",
              args: { name: "override-dashboard-compartment-ocid" },
            },
            {
              name: "--override-saved-search-compartment-ocid",
              description:
                "If this attribute is set, the saved search resources are created or updated in the compartment specified",
              args: { name: "override-saved-search-compartment-ocid" },
            },
            optFromJson,
          ],
        },
        {
          name: "export",
          description:
            "Exports an array of dashboards and their saved searches",
          options: [
            {
              name: "--export-dashboard-id",
              description: "List of dashboardIds in plain text",
              args: { name: "export-dashboard-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "saved-search",
      description: "Properties of a saved search",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the saved search from the existing compartment to a new compartment",
          options: [
            optManagementSavedSearchId,
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment to which the saved search is being moved",
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
          description: "Creates a new saved search",
          options: [
            {
              name: "--display-name",
              description: "Display name of the saved search",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--provider-id",
              description:
                "ID of the service (for example log-analytics) that owns the saved search",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--provider-version",
              description: "The version of the metadata of the provider",
              args: { name: "provider-version" },
              isRequired: true,
            },
            {
              name: "--provider-name",
              description:
                "The user friendly name of the service (for example, Logging Analytics) that owns the saved search",
              args: { name: "provider-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment in which the saved search resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-oob-saved-search",
              description:
                "Determines whether the saved search is an Out-of-the-Box (OOB) saved search",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the saved search",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--nls",
              description: "JSON that contains internationalization options",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "Determines how the saved search is displayed in a dashboard",
              args: {
                suggestions: [
                  "SEARCH_SHOW_IN_DASHBOARD",
                  "SEARCH_DONT_SHOW_IN_DASHBOARD",
                  "WIDGET_SHOW_IN_DASHBOARD",
                  "WIDGET_DONT_SHOW_IN_DASHBOARD",
                  "FILTER_SHOW_IN_DASHBOARD",
                  "FILTER_DONT_SHOW_IN_DASHBOARD",
                ],
              },
              isRequired: true,
            },
            {
              name: "--ui-config",
              description:
                "It defines the visualization type of the widget saved search, the UI options of that visualization type",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--data-config",
              description: "It defines how data is fetched",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--screen-image",
              description: "Screen image of the saved search",
              args: { name: "screen-image" },
              isRequired: true,
            },
            {
              name: "--metadata-version",
              description: "The version of the metadata defined in the API",
              args: { name: "metadata-version" },
              isRequired: true,
            },
            {
              name: "--widget-template",
              description:
                "The UI template that the saved search uses to render itself",
              args: { name: "widget-template" },
              isRequired: true,
            },
            {
              name: "--widget-vm",
              description:
                "The View Model that the saved search uses to render itself",
              args: { name: "widget-vm" },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "ID of the saved search, which must only be provided for Out-of-the-Box (OOB) saved search",
              args: { name: "id" },
            },
            {
              name: "--parameters-config",
              description: "Defines parameters for the saved search",
              args: { name: "json" },
            },
            optFeaturesConfig,
            optDrilldownConfig,
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
          description: "Deletes a saved search by ID",
          options: [
            optManagementSavedSearchId,
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
          description: "Gets a saved search by ID",
          options: [optManagementSavedSearchId, optFromJson],
        },
        {
          name: "get-oob",
          description: "Gets an out-of-the-box saved search by ID",
          options: [optManagementSavedSearchId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets the list of saved searches in a compartment with pagination",
          options: [
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--compartment-id-in-subtree",
              description:
                "This parameter applies only when compartmentId is root compartment",
              args: { name: "compartment-id-in-subtree" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-oob",
          description:
            "Gets the list of out-of-the-box saved searches in a compartment with pagination",
          options: [
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates an existing saved search identified by ID path parameter",
          options: [
            optManagementSavedSearchId,
            {
              name: "--display-name",
              description: "Display name of the saved search",
              args: { name: "display-name" },
            },
            {
              name: "--provider-id",
              description:
                "ID of the service (for example log-analytics) that owns the saved search",
              args: { name: "provider-id" },
            },
            {
              name: "--provider-version",
              description: "The version of the metadata of the provider",
              args: { name: "provider-version" },
            },
            {
              name: "--provider-name",
              description:
                "The user friendly name of the service (for example, Logging Analytics) that owns the saved search",
              args: { name: "provider-name" },
            },
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment in which the saved search resides",
              args: { name: "compartment-id" },
            },
            {
              name: "--is-oob-saved-search",
              description:
                "Determines whether the saved search is an Out-of-the-Box (OOB) saved search",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--description",
              description: "Description of the saved search",
              args: { name: "description" },
            },
            {
              name: "--nls",
              description: "JSON that contains internationalization options",
              args: { name: "json" },
            },
            {
              name: "--type",
              description:
                "Determines how the saved search is displayed in a dashboard",
              args: {
                suggestions: [
                  "SEARCH_SHOW_IN_DASHBOARD",
                  "SEARCH_DONT_SHOW_IN_DASHBOARD",
                  "WIDGET_SHOW_IN_DASHBOARD",
                  "WIDGET_DONT_SHOW_IN_DASHBOARD",
                  "FILTER_SHOW_IN_DASHBOARD",
                  "FILTER_DONT_SHOW_IN_DASHBOARD",
                ],
              },
            },
            {
              name: "--ui-config",
              description:
                "It defines the visualization type of the widget saved search, the UI options of that visualization type",
              args: { name: "json" },
            },
            {
              name: "--data-config",
              description: "It defines how data is fetched",
              args: { name: "json" },
            },
            {
              name: "--screen-image",
              description: "Screen image of the saved search",
              args: { name: "screen-image" },
            },
            {
              name: "--metadata-version",
              description: "The version of the metadata defined in the API",
              args: { name: "metadata-version" },
            },
            {
              name: "--widget-template",
              description:
                "The UI template that the saved search uses to render itself",
              args: { name: "widget-template" },
            },
            {
              name: "--widget-vm",
              description:
                "The View Model that the saved search uses to render itself",
              args: { name: "widget-vm" },
            },
            {
              name: "--parameters-config",
              description: "Defines parameters for the saved search",
              args: { name: "json" },
            },
            optFeaturesConfig,
            optDrilldownConfig,
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
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
