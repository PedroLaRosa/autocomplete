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
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment to which a request will be scoped",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATED",
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optManagementAgentId: Fig.Option = {
  name: "--management-agent-id",
  description: "Unique Management Agent identifier",
  args: { name: "management-agent-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "INACTIVE",
      "TERMINATED",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "If set to true then it fetches resources for all compartments where user has access to else only on",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "Filter to return only Management Agents in the particular lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "INACTIVE",
      "TERMINATED",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAgentId: Fig.Option = {
  name: "--agent-id",
  description: "Unique Management Agent identifier",
  args: { name: "agent-id" },
  isRequired: true,
};
const optDataSourceKey: Fig.Option = {
  name: "--data-source-key",
  description: "Data source type and name identifier",
  args: { name: "data-source-key" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optInstallKeyId: Fig.Option = {
  name: "--install-key-id",
  description: "Unique Management Agent Install Key identifier",
  args: { name: "install-key-id" },
  isRequired: true,
};
const optInstallType: Fig.Option = {
  name: "--install-type",
  description:
    "A filter to return either agents or gateway types depending upon install type selected by user",
  args: { suggestions: ["AGENT", "GATEWAY"] },
};
const optNamedCredentialId: Fig.Option = {
  name: "--named-credential-id",
  description: "Named credential ID",
  args: { name: "named-credential-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "management-agent",
  description: "Management Agent",
  subcommands: [
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "named-credential",
      description:
        "A representation of a named credential in the Management Agent",
      subcommands: [
        {
          name: "create",
          description:
            "Named credential creation request to given Management Agent",
          options: [
            {
              name: "--name",
              description: "Identifier for Named Credential",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "The type of the Named Credential",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--management-agent-id",
              description:
                "The Management Agent parent resource to associate this named credential with",
              args: { name: "management-agent-id" },
              isRequired: true,
            },
            {
              name: "--properties",
              description: "Properties for the named credential",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the Named Credential",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-named-cred-metadata",
          description:
            "Return the Metadata definition for Named Credentials supported by Management Agent",
          options: [
            optCompartmentId,
            {
              name: "--management-agent-id",
              description:
                "Filter the named credential metadata which is compatible with the given Management Agent identifier",
              args: { name: "management-agent-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "A list of Management Agent Data Sources for the given Management Agent Id",
          options: [
            {
              name: "--management-agent-id",
              description:
                "The ManagementAgentID of the agent from which the named credentials are associated",
              args: { name: "management-agent-id" },
              isRequired: true,
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["name", "type", "timeCreated", "lifecycleState"],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "Filter to return only Management Agents in the particular lifecycle state",
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
            },
            {
              name: "--name",
              description: "Filter list for these name items",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--type",
              description: "Filter list for these type values",
              args: { name: "type" },
              isRepeatable: true,
            },
            {
              name: "--id",
              description:
                "Filter list for these Named credentials identifiers (ocid) values",
              args: { name: "id" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "delete",
          description: "Cancel the work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--agent-id",
              description:
                "The ManagementAgentID of the agent from which the Management Agents to be filtered",
              args: { name: "agent-id" },
            },
            optPage,
            optLimit,
            {
              name: "--status",
              description: "The OperationStatus of the workRequest",
              args: {
                suggestions: [
                  "CREATED",
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--type",
              description: "The OperationType of the workRequest",
              args: {
                suggestions: [
                  "DEPLOY_PLUGIN",
                  "UPGRADE_PLUGIN",
                  "CREATE_PLUGIN",
                  "CREATE_UPGRADE_PLUGINS",
                  "AGENTIMAGE_UPGRADE",
                  "CREATE_DATA_SOURCE",
                  "UPDATE_DATA_SOURCE",
                  "DELETE_DATA_SOURCE",
                  "CREATE_NAMEDCREDENTIALS",
                  "UPDATE_NAMEDCREDENTIALS",
                  "DELETE_NAMEDCREDENTIALS",
                  "AGENT_UPGRADE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "Filter for items with timeCreated greater or equal to provided value. given timeCreatedGreaterThanOrEqualTo",
              args: { name: "datetime" },
            },
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
    {
      name: "agent",
      description:
        "The details of the Management Agent inventory including the associated plugins",
      subcommands: [
        {
          name: "delete-data-source",
          description: "Datasource delete request to given Management Agent",
          options: [
            optManagementAgentId,
            optDataSourceKey,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Management Agent resource by identifier",
          options: [
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optAgentId,
            optFromJson,
          ],
        },
        {
          name: "delete-named-credential",
          description:
            "Named credential delete request to sent to associated Management Agent",
          options: [
            optNamedCredentialId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "deploy-plugins",
          description: "Deploys Plugins to a given list of agentIds",
          options: [
            {
              name: "--plugin-ids",
              description: "Plugin Id",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--agent-compartment-id",
              description: "Management Agent Compartment Identifier",
              args: { name: "agent-compartment-id" },
              isRequired: true,
            },
            {
              name: "--agent-ids",
              description: "List of Agent identifiers",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-auto-upgradable-config",
          description:
            "Get the AutoUpgradable configuration for all agents in a tenancy",
          options: [optCompartmentId, optFromJson],
        },
        {
          name: "get-data-source",
          description:
            "Get Datasource details for given Id and given Management Agent",
          options: [optManagementAgentId, optDataSourceKey, optFromJson],
        },
        {
          name: "get",
          description:
            "Gets complete details of the inventory of a given agent id",
          options: [optAgentId, optFromJson],
        },
        {
          name: "get-named-credential",
          description:
            "Get Named credential details for given Id and given Management Agent",
          options: [optNamedCredentialId, optFromJson],
        },
        {
          name: "list-availability-histories",
          description:
            "Lists the availability history records of Management Agent",
          options: [
            optManagementAgentId,
            {
              name: "--time-availability-status-ended-greater-than",
              description:
                "Filter to limit the availability history results to that of time after the input time including the boundary",
              args: { name: "datetime" },
            },
            {
              name: "--time-availability-status-started-less-than",
              description:
                "Filter to limit the availability history results to that of time before the input time including the boundary",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAvailabilityStatusStarted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-data-sources",
          description:
            "A list of Management Agent Data Sources for the given Management Agent Id",
          options: [
            optManagementAgentId,
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["dataSourceName", "dataSourceType"] },
            },
            {
              name: "--name",
              description: "Unique name of the dataSource",
              args: { name: "name" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of Management Agent",
          options: [
            optCompartmentId,
            {
              name: "--plugin-name",
              description:
                "Filter to return only Management Agents having the particular Plugin installed",
              args: { name: "plugin-name" },
              isRepeatable: true,
            },
            {
              name: "--display-name",
              description:
                "Filter to return only Management Agents having the particular display name",
              args: { name: "display-name" },
            },
            optLifecycleState,
            {
              name: "--availability-status",
              description:
                "Filter to return only Management Agents in the particular availability status",
              args: { suggestions: ["ACTIVE", "SILENT", "NOT_AVAILABLE"] },
            },
            {
              name: "--host-id",
              description:
                "Filter to return only Management Agents having the particular agent host id",
              args: { name: "host-id" },
            },
            {
              name: "--platform-type",
              description:
                "Filter to return only results having the particular platform type",
              args: {
                suggestions: ["LINUX", "WINDOWS", "SOLARIS", "MACOSX", "AIX"],
              },
              isRepeatable: true,
            },
            {
              name: "--is-customer-deployed",
              description:
                "True, if the agent image is manually downloaded and installed. false",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optInstallType,
            {
              name: "--gateway-id",
              description:
                "Filter to return only results having the particular gatewayId",
              args: { name: "gateway-id" },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "host",
                  "availabilityStatus",
                  "platformType",
                  "pluginDisplayNames",
                  "version",
                ],
              },
            },
            optCompartmentIdInSubtree,
            {
              name: "--access-level",
              description:
                'When the value is "ACCESSIBLE", insufficient permissions for a compartment will filter out resources in',
              args: { name: "access-level" },
            },
            {
              name: "--data-source-type",
              description: "The type of the dataSource",
              args: {
                suggestions: ["KUBERNETES_CLUSTER", "PROMETHEUS_EMITTER"],
              },
            },
            {
              name: "--data-source-name",
              description: "Unique name of the dataSource",
              args: { name: "data-source-name" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            {
              name: "--agent-version",
              description:
                "Filter to return only Management Agents having the particular agent version",
              args: { name: "agent-version" },
            },
            optFromJson,
          ],
        },
        {
          name: "set-auto-upgradable-config",
          description:
            "Sets the AutoUpgradable configuration for all agents in a tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "Tenancy identifier i.e, Root compartment identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-agent-auto-upgradable",
              description:
                "True if the agents can be upgraded automatically; false if they must be upgraded manually",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "API to update the console managed properties of the Management Agent",
          options: [
            {
              name: "--display-name",
              description: "New displayName of Agent",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optAgentId,
            optFromJson,
          ],
        },
        {
          name: "update-named-credential",
          description:
            "Named credential update request to given Management Agent",
          options: [
            optNamedCredentialId,
            {
              name: "--properties",
              description: "Properties for the named credential",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the Named Credential",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "summarize-agent-counts",
          description:
            "Gets count of the inventory of agents for a given compartment id, group by, and isPluginDeployed parameters",
          options: [
            optCompartmentId,
            {
              name: "--group-by",
              description: "The field by which to group Management Agents",
              args: {
                suggestions: ["availabilityStatus", "platformType", "version"],
              },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--has-plugins",
              description:
                "When set to true then agents that have at least one plugin deployed will be returned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optInstallType,
            optCompartmentIdInSubtree,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "summarize-plugin-counts",
          description:
            "Gets count of the inventory of management agent plugins for a given compartment id and group by parameter",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            optPage,
            {
              name: "--plugin-group-by",
              description:
                "The field by which to group Management Agent Plugins",
              args: { suggestions: ["pluginName"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-prometheus-datasource",
          description: "Datasource creation request to given Management Agent",
          options: [
            optManagementAgentId,
            {
              name: "--name",
              description: "Unique name of the DataSource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment owning this DataSource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--url",
              description:
                "The url through which the Prometheus Exporter publishes its metrics. (http only)",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description:
                "The OCI monitoring namespace to which scraped metrics should be uploaded",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--allow-metrics",
              description: "Comma separated metric name list",
              args: { name: "allow-metrics" },
            },
            {
              name: "--proxy-url",
              description:
                "The url of the network proxy that provides access to the Prometheus Exporter's endpoint",
              args: { name: "proxy-url" },
            },
            {
              name: "--connection-timeout",
              description: "Number in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--read-timeout",
              description: "Number in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--schedule-mins",
              description: "Number in minutes",
              args: { name: "integer" },
            },
            {
              name: "--resource-group",
              description:
                "OCI monitoring resource group to assign the metric to",
              args: { name: "resource-group" },
            },
            {
              name: "--metric-dimensions",
              description:
                "The names of other user-supplied properties expressed as fixed values to be used as dimensions for every",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--read-data-limit",
              description: "Number in kilobytes",
              args: { name: "read-data-limit" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-prometheus-datasource",
          description: "Datasource update request to given Management Agent",
          options: [
            optManagementAgentId,
            optDataSourceKey,
            {
              name: "--url",
              description:
                "The url through which the Prometheus Exporter publishes its metrics. (http only)",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--allow-metrics",
              description: "Comma separated metric name list",
              args: { name: "allow-metrics" },
            },
            {
              name: "--proxy-url",
              description:
                "The url of the network proxy that provides access to the Prometheus Exporter's endpoint",
              args: { name: "proxy-url" },
            },
            {
              name: "--connection-timeout",
              description: "Number in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--read-timeout",
              description: "Number in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--schedule-mins",
              description: "Number in minutes",
              args: { name: "integer" },
            },
            {
              name: "--resource-group",
              description:
                "OCI monitoring resource group to assign the metric to",
              args: { name: "resource-group" },
            },
            {
              name: "--metric-dimensions",
              description:
                "The names of other user-supplied properties expressed as fixed values to be used as dimensions for every",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--read-data-limit",
              description: "Number in kilobytes",
              args: { name: "read-data-limit" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "agent-image",
      description: "Supported Agent downloads",
      subcommands: [
        {
          name: "list",
          description: "Get supported agent image information",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["platformType", "version"] },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire platform name given",
              args: { name: "name" },
            },
            optLifecycleState,
            optInstallType,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "install-key",
      description: "The details of the Agent install Key",
      subcommands: [
        {
          name: "create",
          description: "User creates a new install key as part of this API",
          options: [
            {
              name: "--display-name",
              description: "Management Agent install Key Name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--allowed-key-install-count",
              description: "Total number of install for this keys",
              args: { name: "integer" },
            },
            {
              name: "--time-expires",
              description: "Date after which key would expire after creation",
              args: { name: "datetime" },
            },
            {
              name: "--is-unlimited",
              description:
                "If set to true, the install key has no expiration date or usage limit",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Management Agent install Key resource by identifier",
          options: [
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optInstallKeyId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets complete details of the Agent install Key for a given key id",
          options: [optInstallKeyId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Management Agent installed Keys",
          options: [
            optCompartmentId,
            optCompartmentIdInSubtree,
            {
              name: "--access-level",
              description:
                'Value of this is always "ACCESSIBLE" and any other value is not supported',
              args: { name: "access-level" },
            },
            optLifecycleState,
            {
              name: "--display-name",
              description:
                "The display name for which the Key needs to be listed",
              args: { name: "display-name" },
            },
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optAll,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "API to update the modifiable properties of the Management Agent install key",
          options: [
            {
              name: "--is-key-active",
              description:
                "If set to true the install key state would be set to Active and if false to Inactive",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--display-name",
              description: "New displayName of Agent install key",
              args: { name: "display-name" },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optInstallKeyId,
            optFromJson,
          ],
        },
        {
          name: "get-install-key-content",
          description: "Returns a file with Management Agent install Key in it",
          options: [
            {
              name: "--management-agent-install-key-id",
              description: "Unique Management Agent Install Key identifier",
              args: { name: "management-agent-install-key-id" },
              isRequired: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--plugin-name",
              description:
                "Filter to return input plugin names uncommented in the output",
              args: { name: "plugin-name" },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Summary of the ManagementAgentPlugin",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of managementAgentPlugins",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "Filter to return only Management Agent Plugins having the particular display name",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["displayName"] },
            },
            optLifecycleState,
            {
              name: "--platform-type",
              description:
                "Filter to return only results having the particular platform type",
              args: {
                suggestions: ["LINUX", "WINDOWS", "SOLARIS", "MACOSX", "AIX"],
              },
              isRepeatable: true,
            },
            {
              name: "--agent-id",
              description:
                "The ManagementAgentID of the agent from which the Management Agents to be filtered",
              args: { name: "agent-id" },
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
