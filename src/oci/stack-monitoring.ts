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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
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
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
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
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier OCID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optMetricExtId: Fig.Option = {
  name: "--metric-ext-id",
  description: "The OCID of the metric extension resource. required",
  args: { name: "metric-ext-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The display name of the configuration",
  args: { name: "display-name" },
};
const optMonitoringTemplateId: Fig.Option = {
  name: "--monitoring-template-id",
  description: "The OCID of the monitoring template",
  args: { name: "monitoring-template-id" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description of the metric extension",
  args: { name: "description" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optConfigId: Fig.Option = {
  name: "--config-id",
  description: "Unique Config identifier",
  args: { name: "config-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which data is listed",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optResourceId: Fig.Option = {
  name: "--resource-id",
  description: "The OCID of monitored resource. required",
  args: { name: "resource-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment in which the configuration is created",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCollectionSchedule: Fig.Option = {
  name: "--collection-schedule",
  description:
    'Schedule of metric extension should use RFC 5545 format -> recur-rule-part = "FREQ";"INTERVAL" where FREQ',
  args: { name: "collection-schedule" },
};
const optCollectionSchedule2: Fig.Option = {
  name: "--collection-schedule",
  description:
    'Schedule of metric extension should use RFC 5545 format i.e. recur-rule-part = "FREQ";INTERVAL where FREQ',
  args: { name: "collection-schedule" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Metric Extension display name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "Metric Extension resource display name",
  args: { name: "display-name" },
};
const optMaintenanceWindowId: Fig.Option = {
  name: "--maintenance-window-id",
  description: "The OCID of maintenance window",
  args: { name: "maintenance-window-id" },
  isRequired: true,
};
const optMetricList: Fig.Option = {
  name: "--metric-list",
  description: "List of metrics which are part of this metric extension",
  args: { name: "json" },
  isRequired: true,
};
const optMetricList2: Fig.Option = {
  name: "--metric-list",
  description: "List of metrics which are part of this metric extension",
  args: { name: "json" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "Metric Extension Resource name",
  args: { name: "name" },
  isRequired: true,
};
const optResourceType: Fig.Option = {
  name: "--resource-type",
  description: "Resource type to which Metric Extension applies",
  args: { name: "resource-type" },
  isRequired: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "INACTIVE", "UPDATING", "DELETED"],
  },
  isRepeatable: true,
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "INACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment identifier",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "A friendly description",
  args: { name: "description" },
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "Monitored resource type display name",
  args: { name: "display-name" },
};
const optMetricId: Fig.Option = {
  name: "--metric-id",
  description: "Identifier for the metric required",
  args: { name: "metric-id" },
  isRequired: true,
};
const optMetricNamespace: Fig.Option = {
  name: "--metric-namespace",
  description: "Metric namespace for resource type",
  args: { name: "metric-namespace" },
};
const optName2: Fig.Option = {
  name: "--name",
  description: "Name of the task",
  args: { name: "name" },
};
const optProcessSetId: Fig.Option = {
  name: "--process-set-id",
  description: "The Process Set ID",
  args: { name: "process-set-id" },
  isRequired: true,
};
const optResourceCategory: Fig.Option = {
  name: "--resource-category",
  description: "Resource Category to indicate the kind of resource type",
  args: {
    suggestions: [
      "APPLICATION",
      "DATABASE",
      "MIDDLEWARE",
      "INFRASTRUCTURE",
      "UNKNOWN",
    ],
  },
};
const optResourceTypeId: Fig.Option = {
  name: "--resource-type-id",
  description: "The OCID of monitored resource type. required",
  args: { name: "resource-type-id" },
  isRequired: true,
};
const optSourceType: Fig.Option = {
  name: "--source-type",
  description:
    "Source type to indicate if the resource is stack monitoring discovered, OCI native resource, etc",
  args: {
    suggestions: [
      "SM_MGMT_AGENT_MONITORED",
      "SM_REPO_ONLY",
      "OCI_NATIVE",
      "PROMETHEUS",
      "TELEGRAF",
      "COLLECTD",
    ],
  },
};
const optAlarmConditionId: Fig.Option = {
  name: "--alarm-condition-id",
  description: "The OCID of the alarm condition",
  args: { name: "alarm-condition-id" },
  isRequired: true,
};
const optCompartmentId6: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which data is listed",
  args: { name: "compartment-id" },
};
const optDestinationResourceId: Fig.Option = {
  name: "--destination-resource-id",
  description: "Destination Monitored Resource Identifier OCID",
  args: { name: "destination-resource-id" },
};
const optDiscoveryJobId: Fig.Option = {
  name: "--discovery-job-id",
  description: "The Discovery Job ID",
  args: { name: "discovery-job-id" },
  isRequired: true,
};
const optExcludeFields: Fig.Option = {
  name: "--exclude-fields",
  description:
    "Partial response refers to an optimization technique offered by the RESTful web APIs",
  args: { name: "exclude-fields" },
  isRepeatable: true,
};
const optFields: Fig.Option = {
  name: "--fields",
  description:
    "Partial response refers to an optimization technique offered by the RESTful web APIs",
  args: { name: "fields" },
  isRepeatable: true,
};
const optResourceTaskId: Fig.Option = {
  name: "--resource-task-id",
  description: "The OCID of stack monitoring resource task. required",
  args: { name: "resource-task-id" },
  isRequired: true,
};
const optResourceTimeZone: Fig.Option = {
  name: "--resource-time-zone",
  description: "Time zone in the form of tz database canonical zone ID",
  args: { name: "resource-time-zone" },
};
const optResourceTypes: Fig.Option = {
  name: "--resource-types",
  description: "Multiple resource types filter",
  args: { name: "resource-types" },
  isRepeatable: true,
};
const optScriptDetails: Fig.Option = {
  name: "--script-details",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "stack-monitoring",
  description: "Stack Monitoring",
  subcommands: [
    {
      name: "metric-extension",
      description: "Detailed information of the Metric Extension resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Metric Extension resource from one compartment identifier to another",
          options: [optCompartmentId4, optIfMatch, optMetricExtId, optFromJson],
        },
        {
          name: "create",
          description:
            "Creates a new metric extension resource for a given compartment",
          options: [
            optName,
            optDisplayName2,
            optResourceType,
            optCompartmentId,
            optMetricList,
            {
              name: "--query-properties",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCollectionSchedule2,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a metric extension by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            optFromJson,
          ],
        },
        {
          name: "disable",
          description:
            "Submits a request to disable matching metric extension Id for the given Resource IDs",
          options: [
            {
              name: "--resource-ids",
              description: "List of Resource IDs OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            optFromJson,
          ],
        },
        {
          name: "enable",
          description:
            "Submits a request to enable matching metric extension Id for the given Resource IDs",
          options: [
            {
              name: "--resource-ids",
              description: "List of Resource IDs OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            optFromJson,
          ],
        },
        {
          name: "export",
          description:
            "Export generates a template used to create new metric extension resources similar to matching metric",
          options: [
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optIfMatch,
            optMetricExtId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Metric Extension by identifier",
          options: [optMetricExtId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of metric extensions",
          options: [
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "NAME",
                  "TIME_CREATED",
                  "ENABLED_ON_RESOURCE_COUNT",
                ],
              },
            },
            optSortOrder,
            optCompartmentId6,
            {
              name: "--resource-type",
              description:
                "A filter to return resources based on resource type",
              args: { name: "resource-type" },
            },
            {
              name: "--name",
              description: "A filter to return resources based on name",
              args: { name: "name" },
            },
            {
              name: "--status",
              description:
                "A filter to return resources based on status e.g. Draft or Published",
              args: { suggestions: ["DRAFT", "PUBLISHED"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return metric extensions based on Lifecycle State",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--enabled-on-resource-id",
              description:
                "A filter to return metric extensions based on input resource Id on which metric extension is enabled",
              args: { name: "enabled-on-resource-id" },
            },
            optAll,
            optPageSize,
            {
              name: "--metric-ext-id",
              description: "Identifier for the metric extension",
              args: { name: "metric-ext-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "publish",
          description: "Publish the Metric Extension identified by the id",
          options: [
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            optFromJson,
          ],
        },
        {
          name: "test",
          description:
            "Performs test of Metric Extension on a specific resource Id",
          options: [
            {
              name: "--resource-ids",
              description: "List of Resource IDs OCID",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Metric Extension",
          options: [
            optDisplayName3,
            optDescription,
            optMetricList2,
            { name: "--query-properties", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            optCollectionSchedule,
            optFromJson,
          ],
        },
        {
          name: "create-jmx-metric-ext",
          description:
            "Creates a new metric extension resource for a given compartment",
          options: [
            optName,
            optDisplayName2,
            optResourceType,
            optCompartmentId,
            optMetricList,
            optDescription,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCollectionSchedule2,
            {
              name: "--jmx-attributes",
              description:
                "List of JMX attributes or Metric Service Table columns separated by semi-colon required",
              args: { name: "jmx-attributes" },
              isRequired: true,
            },
            {
              name: "--managed-bean-query",
              description:
                "JMX Managed Bean Query or Metric Service Table name required",
              args: { name: "managed-bean-query" },
              isRequired: true,
            },
            {
              name: "--auto-row-prefix",
              description:
                "Prefix for an auto generated metric, in case multiple rows with non unique key values are returned",
              args: { name: "auto-row-prefix" },
            },
            {
              name: "--identity-metric",
              description:
                "Semi-colon separated list of key properties from Managed Bean ObjectName to be used as key metrics",
              args: { name: "identity-metric" },
            },
            {
              name: "--is-metric-service-enabled",
              description:
                "Indicates if Metric Service is enabled on server domain",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-os-cmd-metric-ext",
          description:
            "Creates a new metric extension resource for a given compartment",
          options: [
            optName,
            optDisplayName2,
            optResourceType,
            optCompartmentId,
            optMetricList,
            optDescription,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCollectionSchedule2,
            {
              name: "--command",
              description: "OS command to execute without arguments required",
              args: { name: "command" },
              isRequired: true,
            },
            {
              name: "--delimiter",
              description:
                "Character used to delimit multiple metric values in single line of output required",
              args: { name: "delimiter" },
              isRequired: true,
            },
            {
              name: "--arguments",
              description: "Arguments required by either command or script",
              args: { name: "arguments" },
            },
            optScriptDetails,
            {
              name: "--starts-with",
              description:
                "String prefix used to identify metric output of the OS Command",
              args: { name: "starts-with" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-sql-metric-ext",
          description:
            "Creates a new metric extension resource for a given compartment",
          options: [
            optName,
            optDisplayName2,
            optResourceType,
            optCompartmentId,
            optMetricList,
            optDescription,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCollectionSchedule2,
            {
              name: "--sql-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--sql-type",
              description:
                "Type of SQL data collection method i.e. either a Statement or SQL Script File required",
              args: { suggestions: ["STATEMENT", "SQL_SCRIPT"] },
              isRequired: true,
            },
            {
              name: "--in-param-details",
              description:
                "List of values and position of PL/SQL procedure IN parameters",
              args: { name: "json" },
            },
            {
              name: "--out-param-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-jmx-metric-ext",
          description: "Updates the Metric Extension",
          options: [
            optDisplayName3,
            optDescription,
            optMetricList2,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            {
              name: "--jmx-attributes",
              description:
                "List of JMX attributes or Metric Service Table columns separated by semi-colon",
              args: { name: "jmx-attributes" },
            },
            {
              name: "--managed-bean-query",
              description:
                "JMX Managed Bean Query or Metric Service Table name",
              args: { name: "managed-bean-query" },
            },
            optCollectionSchedule,
            {
              name: "--auto-row-prefix",
              description:
                "Prefix for an auto generated metric, in case multiple rows with non unique key values are returned",
              args: { name: "auto-row-prefix" },
            },
            {
              name: "--identity-metric",
              description:
                "Semi-colon separated list of key properties from Managed Bean ObjectName to be used as key metrics",
              args: { name: "identity-metric" },
            },
            {
              name: "--is-metric-service-enabled",
              description:
                "Indicates if Metric Service is enabled on server domain",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update-os-cmd-metric-ext",
          description: "Updates the Metric Extension",
          options: [
            optDisplayName3,
            optDescription,
            optMetricList2,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            {
              name: "--command",
              description: "OS command to execute without arguments",
              args: { name: "command" },
            },
            {
              name: "--delimiter",
              description:
                "Character used to delimit multiple metric values in single line of output",
              args: { name: "delimiter" },
            },
            optCollectionSchedule,
            {
              name: "--arguments",
              description: "Arguments required by either command or script",
              args: { name: "arguments" },
            },
            optScriptDetails,
            {
              name: "--starts-with",
              description:
                "String prefix used to identify metric output of the OS Command",
              args: { name: "starts-with" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-sql-metric-ext",
          description: "Updates the Metric Extension",
          options: [
            optDisplayName3,
            optDescription,
            optMetricList2,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            {
              name: "--sql-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--sql-type",
              description:
                "Type of SQL data collection method i.e. either a Statement or SQL Script File",
              args: { suggestions: ["STATEMENT", "SQL_SCRIPT"] },
            },
            optCollectionSchedule,
            {
              name: "--in-param-details",
              description:
                "List of values and position of PL/SQL procedure IN parameters",
              args: { name: "json" },
            },
            {
              name: "--out-param-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-http-metric-ext",
          description:
            "Creates a new metric extension resource for a given compartment",
          options: [
            optName,
            optDisplayName2,
            optResourceType,
            optCompartmentId,
            optMetricList,
            optDescription,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCollectionSchedule2,
            {
              name: "--response-content-type",
              description:
                "Type of content response given by the http(s) URL required",
              args: {
                suggestions: [
                  "TEXT_PLAIN",
                  "TEXT_HTML",
                  "APPLICATION_JSON",
                  "APPLICATION_XML",
                ],
              },
              isRequired: true,
            },
            {
              name: "--script-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--url",
              description: "Http(s) end point URL required",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--protocol-type",
              description:
                "Supported protocol of resources to be associated with this metric extension",
              args: { suggestions: ["HTTP", "HTTPS"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update-http-metric-ext",
          description: "Updates the Metric Extension",
          options: [
            optDisplayName3,
            optDescription,
            optMetricList2,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricExtId,
            optCollectionSchedule,
            {
              name: "--protocol-type",
              description:
                "Supported protocol of resources to be associated with this metric extension",
              args: { suggestions: ["HTTP", "HTTPS"] },
            },
            {
              name: "--response-content-type",
              description: "Type of content response given by the http(s) URL",
              args: {
                suggestions: [
                  "TEXT_PLAIN",
                  "TEXT_HTML",
                  "APPLICATION_JSON",
                  "APPLICATION_XML",
                ],
              },
            },
            optScriptDetails,
            {
              name: "--url",
              description: "Http(s) end point URL",
              args: { name: "url" },
            },
            optFromJson,
          ],
        },
        {
          name: "summarize-metrics",
          description:
            "Gets metric extension metrics count based on the aggregation criteria specified using request body",
          options: [
            {
              name: "--resource-type",
              description: "Resource type to which Metric Extension applies",
              args: { name: "resource-type" },
            },
            {
              name: "--compartment-id",
              description: "Compartment Identifier OCID",
              args: { name: "compartment-id" },
            },
            {
              name: "--sort-by",
              description: "Result will ne sorted by this parameter value",
              args: { suggestions: ["COUNT"] },
            },
            {
              name: "--sort-order",
              description: "Sort orders",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optLimit,
            optPage,
            {
              name: "--contains-metric-name",
              description:
                "Filter for metric extension resources which contain the given metric name",
              args: { name: "contains-metric-name" },
            },
            {
              name: "--metric-ext-id",
              description: "The OCID of Metric Extension resource",
              args: { name: "metric-ext-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "summarize-resources",
          description:
            "Gets metric extension resources count based on the aggregation criteria specified using request body",
          options: [
            {
              name: "--resource-type",
              description: "Resource type to which Metric Extension applies",
              args: { name: "resource-type" },
            },
            {
              name: "--compartment-id",
              description: "Compartment Identifier OCID",
              args: { name: "compartment-id" },
            },
            {
              name: "--association-status",
              description:
                "Filter to return metric extensions based on input enable status i.e. Enabled/Disabled",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--resource-id",
              description: "The OCID of Monitored Resource",
              args: { name: "resource-id" },
            },
            {
              name: "--group-by",
              description: "The field to group",
              args: { suggestions: ["METRIC_EXTENSION_ID"] },
            },
            {
              name: "--sort-by",
              description: "Result will ne sorted by this parameter value",
              args: { suggestions: ["COUNT"] },
            },
            {
              name: "--sort-order",
              description: "Sort orders",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optLimit,
            optPage,
            {
              name: "--metric-ext-id",
              description: "The OCID of Metric Extension resource",
              args: { name: "metric-ext-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "process-set",
      description: "The Process Set details",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a ProcessSet resource from one compartment identifier to another",
          options: [
            optProcessSetId,
            optCompartmentId4,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "API to create Process Set",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Name of the Process Set",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--specification",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Process Set",
          options: [
            optProcessSetId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "API to get the details of a Process Set by identifier",
          options: [optProcessSetId, optFromJson],
        },
        {
          name: "update",
          description: "API to update a Process Set identified by a given ocid",
          options: [
            optProcessSetId,
            {
              name: "--display-name",
              description: "Name of the Process Set",
              args: { name: "display-name" },
            },
            { name: "--specification", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "API to get the details of all Process Sets",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeUpdated", "name"] },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "baselineable-metric",
      description: "Summary for the baseline-able metric",
      subcommands: [
        {
          name: "create",
          description: "Creates the specified Baseline-able metric",
          options: [
            {
              name: "--compartment-id",
              description: "OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--column",
              description: "Metric column name",
              args: { name: "column" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the metric",
              args: { name: "name" },
            },
            {
              name: "--resource-group",
              description: "Resource group of the metric",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type of the metric",
              args: { name: "resource-type" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--metric-namespace",
              description: "Namespace of the metric required",
              args: { name: "metric-namespace" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the Baseline-able metric for the given id",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optMetricId,
            optFromJson,
          ],
        },
        {
          name: "evaluate",
          description:
            "Evaluates metric for anomalies for the given data points",
          options: [
            {
              name: "--resource-id",
              description: "OCID of the resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--items",
              description: "List of Metric data",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optMetricId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the Baseline-able metric for the given id",
          options: [optMetricId, optFromJson],
        },
        {
          name: "list",
          description:
            "List of summary of baseline-able metrics for a given resource group if specified",
          options: [
            {
              name: "--resource-group",
              description: "Resource Group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource Type",
              args: { name: "resource-type" },
            },
            {
              name: "--is-out-of-box",
              description:
                "Is the baseline enabled metric defined out of box by Oracle or by end-user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--name",
              description: "Metric Name",
              args: { name: "name" },
            },
            {
              name: "--metric-namespace",
              description:
                "A filter to return monitored resource types that has the matching namespace",
              args: { name: "metric-namespace" },
            },
            optLimit,
            optPage,
            optCompartmentId6,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "namespace", "resourceGroup"] },
            },
            optAll,
            optPageSize,
            {
              name: "--metric-id",
              description: "Identifier for the metric",
              args: { name: "metric-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Baseline-able metric for the given id",
          options: [
            {
              name: "--id",
              description: "OCID of the metric",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the metric",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--column",
              description: "Metric column name",
              args: { name: "column" },
              isRequired: true,
            },
            {
              name: "--resource-group",
              description: "Resource group of the metric",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--is-out-of-box",
              description: "Is the metric created out of box, default false",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "The current lifecycle state of the metric extension",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--tenancy-id",
              description: "OCID of the tenancy",
              args: { name: "tenancy-id" },
            },
            {
              name: "--compartment-id",
              description: "OCID of the compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--resource-type",
              description: "Resource type of the metric",
              args: { name: "resource-type" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--metric-namespace",
              description: "Namespace of the metric required",
              args: { name: "metric-namespace" },
              isRequired: true,
            },
            optMetricId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "maintenance-window",
      description: "Maintenance Window object",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new Maintenance Window for the given resources",
          options: [
            {
              name: "--name",
              description: "Maintenance Window name",
              args: { name: "name" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--resources",
              description:
                "List of resource Ids which are part of the Maintenance Window",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--schedule", args: { name: "json" }, isRequired: true },
            {
              name: "--description",
              description: "Maintenance Window description",
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
          description: "Deletes a maintenance window by identifier",
          options: [
            optMaintenanceWindowId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get maintenance window for the given identifier OCID",
          options: [optMaintenanceWindowId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of maintenance windows",
          options: [
            optCompartmentId2,
            {
              name: "--name",
              description:
                "A filter to return maintenance windows that match exact resource name",
              args: { name: "name" },
            },
            {
              name: "--lifecycle-details",
              description:
                "A filter to return maintenance windows with matching lifecycleDetails",
              args: { suggestions: ["IN_PROGRESS", "SCHEDULED", "COMPLETED"] },
            },
            {
              name: "--status",
              description:
                "A filter to return only maintenance windows with matching lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "INACTIVE",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "NAME",
                  "START_TIME",
                  "END_TIME",
                  "TIME_CREATED",
                  "TIME_UPDATED",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "retry-failed-maintenance-window-operation",
          description: "Retry the last failed operation",
          options: [
            optMaintenanceWindowId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description:
            "Stop a maintenance window before the end time is reached",
          options: [
            optMaintenanceWindowId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update maintenance window by the given identifier OCID",
          options: [
            optMaintenanceWindowId,
            {
              name: "--description",
              description: "Maintenance Window description",
              args: { name: "description" },
            },
            {
              name: "--resources",
              description:
                "List of resource Ids which are part of the Maintenance Window",
              args: { name: "json" },
            },
            { name: "--schedule", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "monitoring-template",
      description: "Detailed information of the Monitoring Template",
      subcommands: [
        {
          name: "apply",
          description: "Apply the Monitoring Template identified by the id",
          options: [
            optMonitoringTemplateId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new monitoring template for a given compartment",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly name for the monitoring template",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the monitoringTemplate",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--destinations",
              description: "A list of destinations for alarm notifications",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--members",
              description: "List of members of this monitoring template",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "A user-friendly description for the monitoring template",
              args: { name: "description" },
            },
            {
              name: "--is-alarms-enabled",
              description:
                "Whether the alarm is enabled or disabled, it will be Enabled by default",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--message-format",
              description: "The format to use for alarm notifications",
              args: { suggestions: ["RAW", "PRETTY_JSON", "ONS_OPTIMIZED"] },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--repeat-notif-duration",
              description:
                "The frequency for re-submitting alarm notifications, if the alarm keeps firing without interruption",
              args: { name: "repeat-notif-duration" },
            },
            {
              name: "--split-notif-enabled",
              description:
                "Whether the alarm notification is enabled or disabled, it will be Enabled by default",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the monitoring template by identifier",
          options: [
            optMonitoringTemplateId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "export",
          description: "Export the specified monitoring template",
          options: [
            optMonitoringTemplateId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Monitoring Template by identifier",
          options: [optMonitoringTemplateId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Monitoring Templates",
          options: [
            optCompartmentId6,
            {
              name: "--monitoring-template-id",
              description:
                "A filter to return monitoring template based on input monitoringTemplateId",
              args: { name: "monitoring-template-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "lifeCycleState",
                  "status",
                  "timeUpdated",
                  "timeCreated",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return monitoring template based on name",
              args: { name: "display-name" },
            },
            {
              name: "--status",
              description:
                "A filter to return monitoring template based on input status",
              args: {
                suggestions: ["NOT_APPLIED", "APPLIED", "PARTIAL_APPLIED"],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return monitoring template based on Lifecycle State",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETED",
                ],
              },
            },
            optResourceTypes,
            {
              name: "--metric-name",
              description: "MetricName filter",
              args: { name: "metric-name" },
              isRepeatable: true,
            },
            {
              name: "--namespace",
              description: "Namespace filter",
              args: { name: "namespace" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "unapply",
          description: "Unapply the Monitoring Template identified by the id",
          options: [
            optMonitoringTemplateId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Monitoring Template",
          options: [
            optMonitoringTemplateId,
            {
              name: "--display-name",
              description: "A user-friendly name for the monitoring template",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A user-friendly description for the monitoring template",
              args: { name: "description" },
            },
            {
              name: "--destinations",
              description: "A list of destinations for alarm notifications",
              args: { name: "json" },
            },
            {
              name: "--is-alarms-enabled",
              description:
                "User can create the out of box alarm only for multiple resourceTypes not for individual resource instances",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--members",
              description: "List of members of this monitoring template",
              args: { name: "json" },
            },
            {
              name: "--message-format",
              description: "The format to use for alarm notifications",
              args: { suggestions: ["RAW", "PRETTY_JSON", "ONS_OPTIMIZED"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--repeat-notif-duration",
              description:
                "The frequency for re-submitting alarm notifications, if the alarm keeps firing without interruption",
              args: { name: "repeat-notif-duration" },
            },
            {
              name: "--split-notif-enabled",
              description:
                "Whether the alarm notification is enabled or disabled, it will be Enabled by default",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-errors",
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
        {
          name: "list-logs",
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
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given OperationStatus",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The ID of the resource affected by the work request",
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
    {
      name: "alarm-condition",
      description:
        "The information about template condition in the same monitoringTemplate in a compartment",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new alarm condition in same monitoringTemplate compartment",
          options: [
            {
              name: "--namespace",
              description:
                "The stack monitoring service or application emitting the metric that is evaluated by the alarm",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The resource group OCID",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--metric-name",
              description: "The metric name",
              args: { name: "metric-name" },
              isRequired: true,
            },
            {
              name: "--condition-type",
              description: "Type of defined monitoring template",
              args: { suggestions: ["FIXED", "AVAILABILITY"] },
              isRequired: true,
            },
            {
              name: "--conditions",
              description: "Monitoring template conditions",
              args: { name: "json" },
              isRequired: true,
            },
            optMonitoringTemplateId,
            {
              name: "--composite-type",
              description:
                "The OCID of the composite resource type like EBS/PEOPLE_SOFT",
              args: { name: "composite-type" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the alarm conditions by identifier",
          options: [
            optAlarmConditionId,
            optMonitoringTemplateId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a Alarm Condition by identifier",
          options: [optAlarmConditionId, optMonitoringTemplateId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Alarm Conditions",
          options: [
            optMonitoringTemplateId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "metricName",
                  "lifeCycleState",
                  "resourceType",
                  "status",
                  "timeUpdated",
                  "timeCreated",
                ],
              },
            },
            optSortOrder,
            {
              name: "--status",
              description:
                "A filter to return alarm condition based on input status",
              args: {
                suggestions: [
                  "NOT_APPLIED",
                  "APPLIED",
                  "PARTIAL_APPLIED",
                  "ERROR",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return alarm condition based on Lifecycle State",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETED",
                ],
              },
            },
            optResourceTypes,
            {
              name: "--metric-name",
              description: "MetricName filter",
              args: { name: "metric-name" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update a Alarm Condition by identifier",
          options: [
            optAlarmConditionId,
            optMonitoringTemplateId,
            {
              name: "--namespace",
              description:
                "The stack monitoring service or application emitting the metric that is evaluated by the alarm",
              args: { name: "namespace" },
            },
            {
              name: "--composite-type",
              description:
                "The OCID of composite resource type like EBS/PEOPLE_SOFT",
              args: { name: "composite-type" },
            },
            {
              name: "--resource-type",
              description: "The resource type OCID",
              args: { name: "resource-type" },
            },
            {
              name: "--metric-name",
              description: "The metric name",
              args: { name: "metric-name" },
            },
            {
              name: "--condition-type",
              description: "Type of defined monitoring template",
              args: { suggestions: ["FIXED", "AVAILABILITY"] },
            },
            {
              name: "--conditions",
              description: "Monitoring template conditions",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "discovery-job",
      description: "The DiscoveryJob details",
      subcommands: [
        {
          name: "create",
          description:
            "API to create discovery Job and submit discovery Details to agent",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of Compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--discovery-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--discovery-type",
              description: "Add option submits new discovery Job",
              args: { suggestions: ["ADD", "ADD_WITH_RETRY", "REFRESH"] },
            },
            {
              name: "--discovery-client",
              description: "Client who submits discovery job",
              args: { name: "discovery-client" },
            },
            {
              name: "--should-propagate-tags-to-discovered-resources",
              description:
                "If this parameter set to true, the specified tags will be applied to all resources discovered in the current",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a DiscoveryJob by identifier",
          options: [
            optDiscoveryJobId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "API to get the details of discovery Job by identifier",
          options: [optDiscoveryJobId, optFromJson],
        },
        {
          name: "list",
          description: "API to get the details of all Discovery Jobs",
          options: [
            optCompartmentId2,
            {
              name: "--name",
              description:
                "A filter to return only discovery jobs that match the entire resource name given",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeUpdated", "resourceName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-logs",
          description: "API to get all the logs of a Discovery Job",
          options: [
            optDiscoveryJobId,
            {
              name: "--log-type",
              description: "The log type like INFO, WARNING, ERROR, SUCCESS",
              args: { suggestions: ["INFO", "WARNING", "ERROR", "SUCCESS"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "logType"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "config",
      description:
        "A configuration item that, for example defines whether resources of a specific type should be discovered",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves the configuration item to another compartment",
          options: [optConfigId, optCompartmentId4, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description:
            "Creates a configuration item, for example to define whether resources of a specific type should be discovered",
          options: [
            optCompartmentId3,
            {
              name: "--config-type",
              description: "The type of configuration",
              args: { name: "config-type" },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a configuration identified by the id",
          options: [
            optConfigId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of a configuration",
          options: [optConfigId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the configuration identified by the id given",
          options: [
            optConfigId,
            optDisplayName,
            {
              name: "--config-type",
              description: "The type of configuration",
              args: { name: "config-type" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-auto-promote-config",
          description:
            "Creates a configuration item, for example to define whether resources of a specific type should be discovered",
          options: [
            optCompartmentId3,
            {
              name: "--resource-type",
              description:
                "The type of resource to configure for automatic promotion",
              args: { suggestions: ["HOST"] },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description:
                "True if automatic promotion is enabled, false if it is not enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-auto-promote-config",
          description: "Updates the configuration identified by the id given",
          options: [
            optConfigId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-enabled",
              description:
                "True if automatic promotion is enabled, false if it is not enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Get a list of configurations in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--type",
              description:
                "A filter to return only configuration items for a given config type",
              args: {
                suggestions: [
                  "AUTO_PROMOTE",
                  "COMPUTE_AUTO_ACTIVATE_PLUGIN",
                  "LICENSE_AUTO_ASSIGN",
                  "LICENSE_ENTERPRISE_EXTENSIBILITY",
                  "ONBOARD",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The current state of the Config",
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
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeCreated", "configType", "displayName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-license-auto-assign-config",
          description:
            "Creates a configuration item, for example to define whether resources of a specific type should be discovered",
          options: [
            optCompartmentId3,
            {
              name: "--license",
              description: "License edition",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_FOR_GPU_INFRASTRUCTURE",
                ],
              },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-license-enterprise-extensibility-config",
          description:
            "Creates a configuration item, for example to define whether resources of a specific type should be discovered",
          options: [
            optCompartmentId3,
            {
              name: "--is-enabled",
              description:
                "True if enterprise extensibility is enabled, false if it is not enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-license-auto-assign-config",
          description: "Updates the configuration identified by the id given",
          options: [
            optConfigId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--license",
              description: "License edition",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_FOR_GPU_INFRASTRUCTURE",
                ],
              },
            },
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-license-enterprise-extensibility-config",
          description: "Updates the configuration identified by the id given",
          options: [
            optConfigId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-enabled",
              description:
                "True if enterprise extensibility is enabled, false if it is not enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-compute-auto-activate-plugin-config",
          description:
            "Creates a configuration item, for example to define whether resources of a specific type should be discovered",
          options: [
            optCompartmentId3,
            {
              name: "--is-enabled",
              description:
                "True if automatic activation of the Management Agent plugin is enabled, false if it is not enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-compute-auto-activate-plugin-config",
          description: "Updates the configuration identified by the id given",
          options: [
            optConfigId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-enabled",
              description:
                "True if automatic activation of the Management Agent plugin is enabled, false if it is not enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-onboard-config",
          description:
            "Creates a configuration item, for example to define whether resources of a specific type should be discovered",
          options: [
            optCompartmentId3,
            {
              name: "--is-manually-onboarded",
              description:
                "True if customer decides marks configuration as manually configured",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--policy-names",
              description: "List of policy names assigned for onboarding",
              args: { name: "json" },
            },
            {
              name: "--dynamic-groups",
              description:
                "List of dynamic groups dedicated for Stack Monitoring",
              args: { name: "json" },
            },
            {
              name: "--user-groups",
              description: "List of user groups dedicated for Stack Monitoring",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--onboard-version",
              description: "Assigned version to given onboard configuration",
              args: { name: "onboard-version" },
            },
            {
              name: "--additional-configs",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-onboard-config",
          description: "Updates the configuration identified by the id given",
          options: [
            optConfigId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-manually-onboarded",
              description:
                "True if customer decides marks configuration as manually configured",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--policy-names",
              description: "List of policy names assigned for onboarding",
              args: { name: "json" },
            },
            {
              name: "--dynamic-groups",
              description:
                "List of dynamic groups dedicated for Stack Monitoring",
              args: { name: "json" },
            },
            {
              name: "--user-groups",
              description: "List of user groups dedicated for Stack Monitoring",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--onboard-version",
              description: "Assigned version to given onboard configuration",
              args: { name: "onboard-version" },
            },
            {
              name: "--additional-configs",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource",
      description:
        "The response object for create monitored resource and get monitored resource operations",
      subcommands: [
        {
          name: "associate",
          description: "Create an association between two monitored resources",
          options: [
            optCompartmentId,
            {
              name: "--association-type",
              description:
                "Association type to be created between source and destination resources",
              args: { name: "association-type" },
              isRequired: true,
            },
            {
              name: "--source-resource-id",
              description: "Source Monitored Resource Identifier OCID",
              args: { name: "source-resource-id" },
              isRequired: true,
            },
            {
              name: "--destination-resource-id",
              description: "Destination Monitored Resource Identifier OCID",
              args: { name: "destination-resource-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a monitored resource from one compartment to another",
          options: [
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optResourceId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new monitored resource for the given resource type with the details and submits a work request",
          options: [
            {
              name: "--name",
              description: "Monitored Resource Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Monitored Resource Type",
              args: { name: "type" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--display-name",
              description: "Monitored resource display name",
              args: { name: "display-name" },
            },
            {
              name: "--host-name",
              description: "Host name of the monitored resource",
              args: { name: "host-name" },
            },
            {
              name: "--external-id",
              description:
                "External resource is any OCI resource identifier OCID which is not a Stack Monitoring service resource",
              args: { name: "external-id" },
            },
            {
              name: "--management-agent-id",
              description: "Management Agent Identifier OCID",
              args: { name: "management-agent-id" },
            },
            optResourceTimeZone,
            {
              name: "--license",
              description: "License edition of the monitored resource",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_FOR_GPU_INFRASTRUCTURE",
                ],
              },
            },
            {
              name: "--properties",
              description: "List of monitored resource properties",
              args: { name: "json" },
            },
            { name: "--credentials", args: { name: "json" } },
            { name: "--aliases", args: { name: "json" } },
            {
              name: "--additional-credentials",
              description: "List of MonitoredResourceCredentials",
              args: { name: "json" },
            },
            {
              name: "--additional-aliases",
              description: "List of MonitoredResourceAliasCredentials",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--external-resource-id",
              description:
                "Generally used by DBaaS to send the Database OCID stored on the DBaaS",
              args: { name: "external-resource-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--db-connection-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete monitored resource by the given identifier OCID",
          options: [
            optIfMatch,
            {
              name: "--is-delete-members",
              description:
                "If this query parameter is specified and set to true",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optResourceId,
            optFromJson,
          ],
        },
        {
          name: "disable-external-database",
          description: "Disable external database resource monitoring",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optResourceId,
            optFromJson,
          ],
        },
        {
          name: "disassociate",
          description: "Removes associations between two monitored resources",
          options: [
            optCompartmentId,
            {
              name: "--association-type",
              description:
                "Association type between source and destination resources",
              args: { name: "association-type" },
            },
            {
              name: "--source-resource-id",
              description: "Source Monitored Resource Identifier OCID",
              args: { name: "source-resource-id" },
            },
            optDestinationResourceId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get monitored resource for the given identifier OCID",
          options: [optResourceId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of monitored resources",
          options: [
            optCompartmentId2,
            {
              name: "--name",
              description:
                "A filter to return resources that match exact resource name",
              args: { name: "name" },
            },
            {
              name: "--work-request-id",
              description:
                "A filter to return resources which were impacted as part of this work request identifier",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources with matching lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME", "TIME_CREATED"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "manage-license",
          description:
            "Each resource is assigned a license based on which features are enabled for it",
          options: [
            {
              name: "--license",
              description: "License edition of the monitored resource",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_FOR_GPU_INFRASTRUCTURE",
                ],
              },
              isRequired: true,
            },
            optIfMatch,
            optResourceId,
            optFromJson,
          ],
        },
        {
          name: "search-associated-resources",
          description:
            "List all associated resources recursively up-to a specified level",
          options: [
            optCompartmentId,
            {
              name: "--resource-type",
              description:
                "A filter to return associated resources that match resources of type",
              args: { name: "resource-type" },
            },
            {
              name: "--resource-id",
              description:
                "Monitored resource identifier for which the associated resources should be fetched",
              args: { name: "resource-id" },
            },
            {
              name: "--limit-level",
              description:
                "The field which determines the depth of hierarchy while searching for associated resources",
              args: { name: "integer" },
            },
            {
              name: "--association-types",
              description:
                "Association types filter to be searched for finding associated resources",
              args: { name: "json" },
            },
            optFields,
            optExcludeFields,
            optIfMatch,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "search",
          description:
            "Gets a list of all monitored resources in a compartment for the given search criteria",
          options: [
            optCompartmentId,
            {
              name: "--compartment-ids",
              description: "Multiple compartment identifiers OCID",
              args: { name: "json" },
            },
            {
              name: "--lifecycle-states",
              description: "Multiple lifecycle states filter",
              args: { name: "json" },
            },
            {
              name: "--source-type",
              description: "Source type filter",
              args: {
                suggestions: [
                  "SM_MGMT_AGENT_MONITORED",
                  "SM_REPO_ONLY",
                  "OCI_NATIVE",
                  "PROMETHEUS",
                  "TELEGRAF",
                  "COLLECTD",
                ],
              },
            },
            {
              name: "--resource-category",
              description: "Resource category filter",
              args: {
                suggestions: [
                  "APPLICATION",
                  "DATABASE",
                  "MIDDLEWARE",
                  "INFRASTRUCTURE",
                  "UNKNOWN",
                ],
              },
            },
            {
              name: "--name",
              description:
                "A filter to return resources that match exact resource name",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description:
                "A filter to return resources that match resource name pattern given",
              args: { name: "name-contains" },
            },
            {
              name: "--type",
              description:
                "A filter to return resources that match resource type",
              args: { name: "type" },
            },
            {
              name: "--host-name",
              description: "A filter to return resources with host name match",
              args: { name: "host-name" },
            },
            {
              name: "--external-id",
              description:
                "External resource is any OCI resource identifier OCID which is not a Stack Monitoring service resource",
              args: { name: "external-id" },
            },
            {
              name: "--host-name-contains",
              description:
                "A filter to return resources with host name pattern",
              args: { name: "host-name-contains" },
            },
            {
              name: "--management-agent-id",
              description:
                "A filter to return resources with matching management agent id",
              args: { name: "management-agent-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources with matching lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--license",
              description: "License edition of the monitored resource",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_FOR_GPU_INFRASTRUCTURE",
                ],
              },
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "Search for resources that were created within a specific date range",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than",
              description:
                "Search for resources that were created within a specific date range",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-greater-than-or-equal-to",
              description:
                "Search for resources that were updated within a specific date range",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-less-than",
              description:
                "Search for resources that were updated within a specific date range",
              args: { name: "datetime" },
            },
            optResourceTimeZone,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIME_CREATED", "RESOURCE_NAME"] },
            },
            {
              name: "--property-equals",
              description: "Criteria based on resource property",
              args: { name: "json" },
            },
            optLimit,
            optPage,
            optFields,
            optExcludeFields,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-and-propagate-tags",
          description:
            "Provided tags will be added or updated in the existing list of tags for the affected resources",
          options: [
            {
              name: "--monitored-resource-id",
              description: "The OCID of monitored resource",
              args: { name: "monitored-resource-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--association-types",
              description:
                "Association types that will be traversed recursively starting from the current resource",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update monitored resource by the given identifier OCID",
          options: [
            {
              name: "--display-name",
              description: "Monitored resource display name",
              args: { name: "display-name" },
            },
            {
              name: "--host-name",
              description: "Host name of the monitored resource",
              args: { name: "host-name" },
            },
            optResourceTimeZone,
            {
              name: "--properties",
              description: "List of monitored resource properties",
              args: { name: "json" },
            },
            { name: "--credentials", args: { name: "json" } },
            { name: "--aliases", args: { name: "json" } },
            {
              name: "--additional-credentials",
              description: "List of MonitoredResourceCredentials",
              args: { name: "json" },
            },
            {
              name: "--additional-aliases",
              description: "List of MonitoredResourceAliasCredentials",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optResourceId,
            {
              name: "--db-connection-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "search-associations",
          description:
            "Search associations in the given compartment based on the search criteria",
          options: [
            optCompartmentId,
            {
              name: "--source-resource-id",
              description: "Source Monitored Resource Identifier OCID",
              args: { name: "source-resource-id" },
            },
            {
              name: "--source-resource-name",
              description: "Source Monitored Resource Name",
              args: { name: "source-resource-name" },
            },
            {
              name: "--source-resource-type",
              description: "Source Monitored Resource Type",
              args: { name: "source-resource-type" },
            },
            optDestinationResourceId,
            {
              name: "--destination-resource-name",
              description: "Source Monitored Resource Name",
              args: { name: "destination-resource-name" },
            },
            {
              name: "--destination-resource-type",
              description: "Source Monitored Resource Type",
              args: { name: "destination-resource-type" },
            },
            {
              name: "--association-type",
              description:
                "Association type filter to search associated resources",
              args: { name: "association-type" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIME_CREATED", "ASSOC_TYPE"] },
            },
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optLimit,
            optPage,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "search-members",
          description:
            "List the member resources for the given monitored resource identifier OCID",
          options: [
            optDestinationResourceId,
            {
              name: "--limit-level",
              description:
                "The field which determines the depth of hierarchy while searching for members",
              args: { name: "integer" },
            },
            {
              name: "--sort-by",
              description:
                "If this query parameter is specified, the result is sorted by this query parameter value",
              args: {
                suggestions: [
                  "resourceName",
                  "resourceType",
                  "sourceResourceType",
                ],
              },
            },
            optSortOrder,
            optPage,
            optLimit,
            optIfMatch,
            optResourceId,
            optFromJson,
          ],
        },
        {
          name: "summarize-count",
          description:
            'Gets resource count based on the aggregation criteria specified using "groupBy" parameter',
          options: [
            optCompartmentId2,
            {
              name: "--group-by",
              description: "The field to group by",
              args: {
                suggestions: [
                  "resourceType",
                  "license",
                  "parentResourceId",
                  "namespace",
                ],
              },
            },
            {
              name: "--license",
              description:
                "Filter to return resource counts that match with the given licence edition",
              args: {
                suggestions: [
                  "STANDARD_EDITION",
                  "ENTERPRISE_EDITION",
                  "ENTERPRISE_EDITION_FOR_GPU_INFRASTRUCTURE",
                ],
              },
            },
            {
              name: "--resource-type",
              description:
                "A filter to return resource counts that match exact resource type",
              args: { name: "resource-type" },
            },
            {
              name: "--sort-by",
              description:
                "If this query parameter is specified, the result is sorted by this query parameter value",
              args: { suggestions: ["count"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-task",
      description: "The request details for importing resources from Telemetry",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a stack monitoring resource task from one compartment to another",
          options: [
            optCompartmentId4,
            optIfMatch,
            optResourceTaskId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new stack monitoring resource task",
          options: [
            optCompartmentId5,
            {
              name: "--task-details",
              args: { name: "json" },
              isRequired: true,
            },
            optName2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets stack monitoring resource task details by identifier OCID",
          options: [optResourceTaskId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of stack monitoring resource tasks in the compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment for which stack monitoring resource tasks should be listed",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description:
                "A filter to return only resources that matches with lifecycleState given",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeUpdated"] },
            },
            optSortOrder,
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
            "Update stack monitoring resource task by the given identifier OCID",
          options: [
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optResourceTaskId,
            optFromJson,
          ],
        },
        {
          name: "import-telemetry-resources",
          description: "Create a new stack monitoring resource task",
          options: [
            optCompartmentId5,
            optName2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--console-path-prefix",
              description:
                "The console path prefix to use for providing service home url page navigation",
              args: { name: "console-path-prefix" },
            },
            {
              name: "--external-id-mapping",
              description:
                "The external resource identifier property in the metric dimensions",
              args: { name: "external-id-mapping" },
            },
            {
              name: "--up-status-mappings",
              description:
                "Lifecycle states of the external resource which reflects the status of the resource being up",
              args: { name: "json" },
            },
            {
              name: "--resource-name-filter",
              description: "The resource name filter",
              args: { name: "resource-name-filter" },
            },
            {
              name: "--resource-name-mapping",
              description:
                "The resource name property in the metric dimensions",
              args: { name: "resource-name-mapping" },
            },
            {
              name: "--resource-type-filter",
              description: "The resource type filter",
              args: { name: "resource-type-filter" },
            },
            {
              name: "--resource-type-mapping",
              description:
                "The resource type property in the metric dimensions",
              args: { name: "resource-type-mapping" },
            },
            {
              name: "--service-base-url",
              description:
                "The base URL of the OCI service to which the resource belongs to",
              args: { name: "service-base-url" },
            },
            {
              name: "--use-metrics-for-status",
              description:
                "Flag to indicate whether status is calculated using metrics or LifeCycleState attribute of the resource",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--namespace",
              description:
                "Name space to be used for OCI Native service resources discovery. required",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--source",
              description: "Source from where the metrics pushed to telemetry",
              args: {
                suggestions: [
                  "OCI_TELEMETRY_NATIVE",
                  "OCI_TELEMETRY_PROMETHEUS",
                ],
              },
              isRequired: true,
            },
            {
              name: "--availability-proxy-metric-collection-interval",
              description:
                "Metrics collection interval in seconds used when calculating the availability of the resource based",
              args: { name: "integer" },
            },
            {
              name: "--availability-proxy-metrics",
              description:
                "List of metrics to be used to calculate the availability of the resource",
              args: { name: "json" },
            },
            {
              name: "--resource-group",
              description:
                "The resource group to use while fetching metrics from telemetry",
              args: { name: "resource-group" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-agent-receiver",
          description: "Create a new stack monitoring resource task",
          options: [
            optCompartmentId5,
            optName2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--agent-id",
              description: "Management Agent Identifier OCID. required",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--handler-type",
              description: "Type of the handler. required",
              args: { suggestions: ["TELEGRAF", "COLLECTD"] },
              isRequired: true,
            },
            {
              name: "--is-enable",
              description:
                "True to enable the receiver and false to disable the receiver on the agent. required",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--receiver-properties",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-resource-type-configs",
          description: "Create a new stack monitoring resource task",
          options: [
            optCompartmentId5,
            optName2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--handler-type",
              description: "Type of the handler. required",
              args: { suggestions: ["TELEGRAF", "COLLECTD"] },
              isRequired: true,
            },
            {
              name: "--resource-types-config",
              description:
                "A collection of resource type configuration details",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-type",
      description:
        "The response object for create monitored resource type and get monitored resource type operations",
      subcommands: [
        {
          name: "create",
          description: "Creates a new monitored resource type",
          options: [
            {
              name: "--name",
              description: "A unique monitored resource type name",
              args: { name: "name" },
              isRequired: true,
            },
            optCompartmentId,
            optDisplayName4,
            optDescription2,
            optMetricNamespace,
            optSourceType,
            optResourceCategory,
            { name: "--metadata", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a monitored resource type by identifier OCID",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optResourceTypeId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a monitored resource type by identifier OCID",
          options: [optResourceTypeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns list of resource types accessible to the customer",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the tenancy for which monitored resource types should be listed",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "A filter to return monitored resource types that match exactly with the resource type name given",
              args: { name: "name" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources that matches with lifecycleState given",
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
              name: "--is-exclude-system-types",
              description: "A filter to exclude system resource types",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--metric-namespace",
              description:
                "A filter to return monitored resource types that has the matching namespace",
              args: { name: "metric-namespace" },
            },
            {
              name: "--source-type",
              description:
                "A filter to return only resources with matching source type",
              args: {
                suggestions: [
                  "SM_MGMT_AGENT_MONITORED",
                  "SM_REPO_ONLY",
                  "OCI_NATIVE",
                  "PROMETHEUS",
                  "TELEGRAF",
                  "COLLECTD",
                ],
              },
            },
            {
              name: "--resource-category",
              description:
                "A filter to return only resources with matching resource category",
              args: {
                suggestions: [
                  "APPLICATION",
                  "DATABASE",
                  "MIDDLEWARE",
                  "INFRASTRUCTURE",
                  "UNKNOWN",
                ],
              },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeUpdated", "name"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            optFields,
            optExcludeFields,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update the Monitored Resource Type identified by the identifier OCID",
          options: [
            optDisplayName4,
            optDescription2,
            optMetricNamespace,
            optSourceType,
            optResourceCategory,
            { name: "--metadata", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optResourceTypeId,
            optFromJson,
          ],
        },
        {
          name: "create-system-format-resource-type",
          description: "Creates a new monitored resource type",
          options: [
            {
              name: "--name",
              description: "A unique monitored resource type name",
              args: { name: "name" },
              isRequired: true,
            },
            optCompartmentId,
            optDisplayName4,
            optDescription2,
            optMetricNamespace,
            optSourceType,
            optResourceCategory,
            optFreeformTags,
            optDefinedTags,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--sub-resource-types",
              description:
                "List of valid sub-resource types for a composite resource type",
              args: { name: "json" },
            },
            {
              name: "--agent-properties",
              description:
                "List of properties needed by the agent for monitoring the resource",
              args: { name: "json" },
            },
            {
              name: "--required-properties",
              description: "List of required properties for resource type",
              args: { name: "json" },
            },
            {
              name: "--unique-property-sets",
              description:
                "List of property sets used to uniquely identify the resources",
              args: { name: "json" },
            },
            {
              name: "--valid-properties-for-create",
              description:
                "List of valid properties for resource type while creating the monitored resource",
              args: { name: "json" },
            },
            {
              name: "--valid-properties-for-update",
              description:
                "List of valid properties for resource type while updating the monitored resource",
              args: { name: "json" },
            },
            {
              name: "--valid-property-values",
              description: "List of valid values for the properties",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-system-format-resource-type",
          description:
            "Update the Monitored Resource Type identified by the identifier OCID",
          options: [
            optDisplayName4,
            optDescription2,
            optMetricNamespace,
            optSourceType,
            optResourceCategory,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--sub-resource-types",
              description:
                "List of valid sub-resource types for a composite resource type",
              args: { name: "json" },
            },
            optResourceTypeId,
            {
              name: "--agent-properties",
              description:
                "List of properties needed by the agent for monitoring the resource",
              args: { name: "json" },
            },
            {
              name: "--required-properties",
              description: "List of required properties for resource type",
              args: { name: "json" },
            },
            {
              name: "--unique-property-sets",
              description:
                "List of property sets used to uniquely identify the resources",
              args: { name: "json" },
            },
            {
              name: "--valid-properties-for-create",
              description:
                "List of valid properties for resource type while creating the monitored resource",
              args: { name: "json" },
            },
            {
              name: "--valid-properties-for-update",
              description:
                "List of valid properties for resource type while updating the monitored resource",
              args: { name: "json" },
            },
            {
              name: "--valid-property-values",
              description: "List of valid values for the properties",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "defined-mt",
      description:
        "Summary information about defined Monitoring Template for specified resourceType",
      subcommands: [
        {
          name: "list",
          description: "List Defined Monitoring Templates",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the tenancy(root) for which defined monitored templates should be listed",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["namespace"] },
            },
            {
              name: "--display-name",
              description:
                "A filter to return monitoring template based on name",
              args: { name: "display-name" },
            },
            optSortOrder,
            optResourceTypes,
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
