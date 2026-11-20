const acquirePolicyToken: Fig.Option = {
  name: "--acquire-policy-token",
  description:
    "Acquiring an Azure Policy token automatically for this resource operation",
};

const changeReference: Fig.Option = {
  name: "--change-reference",
  description: "The related change reference ID for this resource operation",
  args: { name: "change-reference" },
};

const completion: Fig.Spec = {
  name: "eventhubs",
  description: "Manage Event Hub",
  subcommands: [
    {
      name: "cluster",
      description: "Manage Azure EventHubs Clusters",
      subcommands: [
        {
          name: "available-region",
          description:
            "List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region",
          options: [acquirePolicyToken, changeReference],
        },
        {
          name: "create",
          description: "Create an instance of an Event Hubs Cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Event Hubs Cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--capacity",
              description:
                "The quantity of Event Hubs Cluster Capacity Units contained in this cluster",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: ["--confidential-compute-mode", "--mode"],
              description: "Setting to Enable or Disable Confidential Compute",
              args: {
                name: "confidential-compute-mode",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--location", "-l"],
              description: "Resource location",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--provisioning-state",
              description: "Provisioning state of the Cluster",
              args: { name: "provisioning-state" },
            },
            {
              name: "--sku",
              description: "Name of this SKU",
              args: { name: "sku", suggestions: ["Dedicated"] },
            },
            {
              name: "--supports-scaling",
              description:
                "A value that indicates whether Scaling is Supported",
              args: {
                name: "supports-scaling",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--zone-redundant",
              description:
                "A value that indicates whether the cluster is zone redundant",
              args: {
                name: "zone-redundant",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing Event Hubs Cluster. This operation is idempotent",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Event Hubs Cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the available Event Hubs Clusters within an ARM resource group",
          options: [
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the resource description of the specified Event Hubs Cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Event Hubs Cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an instance of an Event Hubs Cluster",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--capacity",
              description:
                "The quantity of Event Hubs Cluster Capacity Units contained in this cluster",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Event Hubs Cluster",
              args: { name: "cluster-name" },
            },
            {
              name: ["--confidential-compute-mode", "--mode"],
              description: "Setting to Enable or Disable Confidential Compute",
              args: {
                name: "confidential-compute-mode",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--provisioning-state",
              description: "Provisioning state of the Cluster",
              args: { name: "provisioning-state" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--sku",
              description: "Name of this SKU",
              args: { name: "sku", suggestions: ["Dedicated"] },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--supports-scaling",
              description:
                "A value that indicates whether Scaling is Supported",
              args: {
                name: "supports-scaling",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--zone-redundant",
              description:
                "A value that indicates whether the cluster is zone redundant",
              args: {
                name: "zone-redundant",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Event Hubs Cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
        {
          name: "namespace",
          description: "List of Namespaces within given Cluster",
          subcommands: [
            {
              name: "list",
              description:
                "List all Event Hubs Namespace IDs in an Event Hubs Dedicated Cluster",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the Event Hubs Cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "quota-configuration",
          description:
            "Manage quota and settings configuration of an Event Hubs Dedicated Cluster",
          subcommands: [
            {
              name: "show",
              description:
                "Get all Event Hubs Cluster settings - a collection of key/value pairs which represent the quotas and settings imposed on the cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Event Hubs Cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update all specified Event Hubs Cluster settings with those contained in the request body. Leaves the settings not specified in the request body unmodified",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--cluster-name",
                  description: "The name of the Event Hubs Cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--settings",
                  description:
                    'All possible Cluster settings - a collection of key/value paired settings which apply to quotas and configurations imposed on the cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "settings", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
        {
          name: "upgrade-preference",
          description:
            "Manage upgrade preferences of an Event Hubs Dedicated Cluster",
          subcommands: [
            {
              name: "create",
              description:
                "Create the upgrade preferences for an Event Hubs Dedicated cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Event Hubs Cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--exception-windows",
                  description:
                    'Date-specific exceptions to the recurring maintenance windows. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "exception-windows", isVariadic: true },
                },
                {
                  name: "--maintenance-windows",
                  description:
                    'Recurring weekly maintenance windows in UTC. At least one window must be supplied when preferences are created or updated. A maximum of two windows can be configured, and their combined duration must be at least 16 hours per week. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "maintenance-windows", isVariadic: true },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the upgrade preferences for an Event Hubs Dedicated cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Event Hubs Cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the upgrade preferences for an Event Hubs Dedicated cluster",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: "--cluster-name",
                  description: "The name of the Event Hubs Cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--exception-windows",
                  description:
                    'Date-specific exceptions to the recurring maintenance windows. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "exception-windows", isVariadic: true },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--maintenance-windows",
                  description:
                    'Recurring weekly maintenance windows in UTC. At least one window must be supplied when preferences are created or updated. A maximum of two windows can be configured, and their combined duration must be at least 16 hours per week. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "maintenance-windows", isVariadic: true },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "upgrade-now",
              description:
                "Starts an immediate eight-hour upgrade override when an upgrade is pending",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--cluster-name",
                  description: "The name of the Event Hubs Cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "eventhub",
      description: "Manage Azure EventHubs eventhub and authorization-rule",
      subcommands: [
        {
          name: "create",
          description: "Creates the EventHubs Eventhub",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Eventhub",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--archive-name-format",
              description:
                "Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order",
              args: { name: "archive-name-format" },
            },
            {
              name: "--blob-container",
              description: "Blob container Name",
              args: { name: "blob-container" },
            },
            {
              name: "--capture-interval",
              description:
                "Allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds",
              args: { name: "capture-interval" },
            },
            {
              name: "--capture-size-limit",
              description:
                "Defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes",
              args: { name: "capture-size-limit" },
            },
            changeReference,
            {
              name: "--cleanup-policy",
              description: "Enumerates the possible values for cleanup policy",
              args: {
                name: "cleanup-policy",
                suggestions: ["Compact", "Delete", "DeleteOrCompact"],
              },
            },
            {
              name: "--destination-name",
              description:
                "Name for capture destination, should be EventHubArchive.AzureBlockBlob",
              args: { name: "destination-name" },
            },
            {
              name: "--enable-capture",
              description:
                "A boolean value that indicates whether capture is enabled",
              args: {
                name: "enable-capture",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--mi-system-assigned",
              description: "Enable System Assigned Identity",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--mi-user-assigned",
              description: "List of User Assigned Identity ids",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--min-compaction-lag-in-mins", "--min-lag"],
              description:
                "The minimum time a message will remain ineligible for compaction in the log. This value is used when cleanupPolicy is Compact or DeleteOrCompact",
              args: { name: "min-compaction-lag-in-mins" },
            },
            {
              name: "--partition-count",
              description:
                "Number of partitions created for the Event Hub. By default, allowed values are 2-32. Lower value of 1 is supported with Kafka enabled namespaces. In presence of a custom quota, the upper limit will match the upper limit of the quota",
              args: { name: "partition-count" },
            },
            {
              name: ["--retention-time-in-hours", "--retention-time"],
              description:
                "Number of hours to retain the events for this Event Hub. This value is only used when cleanupPolicy is Delete. If cleanupPolicy is Compaction the returned value of this property is Long.MaxValue",
              args: { name: "retention-time-in-hours" },
            },
            {
              name: "--skip-empty-archives",
              description:
                "A boolean value that indicates whether to Skip Empty",
              args: {
                name: "skip-empty-archives",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--status",
              description: "Status of Eventhub",
              args: {
                name: "status",
                suggestions: ["Active", "Disabled", "SendDisabled"],
              },
            },
            {
              name: "--storage-account",
              description:
                "Name (if within same resource group and not of type Classic Storage) or ARM id of the storage account to be used to create the blobs",
              args: { name: "storage-account" },
            },
            {
              name: "--timestamp-type",
              description:
                "Denotes the type of timestamp the message will hold",
              args: {
                name: "timestamp-type",
                suggestions: ["Create", "LogAppend"],
              },
            },
            {
              name: ["--tombstone-retention-time-in-hours", "--tombstone-time"],
              description:
                "Number of hours to retain the tombstone markers of a compacted Event Hub. This value is only used when cleanupPolicy is Compaction. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub",
              args: { name: "tombstone-retention-time-in-hours" },
            },
            {
              name: "--user-metadata",
              description: "Gets and Sets Metadata of User",
              args: { name: "user-metadata" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an Event Hub from the specified Namespace and resource group",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--event-hub-name", "--name", "-n"],
              description: "The Event Hub name",
              args: { name: "event-hub-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "List all the Event Hubs in a Namespace",
          options: [
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: "--skip",
              description:
                "Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description:
                "May be used to limit the number of results to the most recent N usageDetails",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get an Event Hubs description for the specified Event Hub",
          options: [
            {
              name: ["--event-hub-name", "--name", "-n"],
              description: "The Event Hub name",
              args: { name: "event-hub-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a new Event Hub as a nested resource within a Namespace",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--archive-name-format",
              description:
                "Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order",
              args: { name: "archive-name-format" },
            },
            {
              name: "--blob-container",
              description: "Blob container Name",
              args: { name: "blob-container" },
            },
            {
              name: "--capture-interval",
              description:
                "The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds",
              args: { name: "capture-interval" },
            },
            {
              name: "--capture-size-limit",
              description:
                "The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes",
              args: { name: "capture-size-limit" },
            },
            changeReference,
            {
              name: "--cleanup-policy",
              description: "Enumerates the possible values for cleanup policy",
              args: {
                name: "cleanup-policy",
                suggestions: ["Compact", "Delete", "DeleteOrCompact"],
              },
            },
            {
              name: "--destination-name",
              description: "Name for capture destination",
              args: { name: "destination-name" },
            },
            {
              name: "--enable-capture",
              description:
                "A value that indicates whether capture description is enabled",
              args: {
                name: "enable-capture",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--encoding",
              description:
                "Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version",
              args: { name: "encoding", suggestions: ["Avro", "AvroDeflate"] },
            },
            {
              name: ["--event-hub-name", "--name", "-n"],
              description: "The Event Hub name",
              args: { name: "event-hub-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--identity",
              description:
                'A value that indicates whether capture description is enabled. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity", isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--min-compaction-lag-in-mins", "--min-lag"],
              description:
                "The minimum time a message will remain ineligible for compaction in the log. This value is used when cleanupPolicy is Compact or DeleteOrCompact",
              args: { name: "min-compaction-lag-in-mins" },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--partition-count",
              description:
                "Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions",
              args: { name: "partition-count" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--retention-time-in-hours", "--retention-time"],
              description:
                "Number of hours to retain the events for this Event Hub. This value is only used when cleanupPolicy is Delete. If cleanupPolicy is Compaction the returned value of this property is Long.MaxValue",
              args: { name: "retention-time-in-hours" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--skip-empty-archives",
              description:
                "A value that indicates whether to Skip Empty Archives",
              args: {
                name: "skip-empty-archives",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--status",
              description:
                "Enumerates the possible values for the status of the Event Hub",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "Creating",
                  "Deleting",
                  "Disabled",
                  "ReceiveDisabled",
                  "Renaming",
                  "Restoring",
                  "SendDisabled",
                  "Unknown",
                ],
              },
            },
            {
              name: "--storage-account",
              description:
                "Resource id of the storage account to be used to create the blobs",
              args: { name: "storage-account" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--timestamp-type",
              description:
                'Denotes the type of timestamp the message will hold.Two types of timestamp types - "AppendTime" and "CreateTime". AppendTime refers the time in which message got appended inside broker log. CreateTime refers to the time in which the message was generated on source side and producers can set this timestamp while sending the message. Default value is AppendTime. If you are using AMQP protocol, CreateTime equals AppendTime and its behavior remains the same',
              args: {
                name: "timestamp-type",
                suggestions: ["Create", "LogAppend"],
              },
            },
            {
              name: ["--tombstone-retention-time-in-hours", "-t"],
              description:
                "Number of hours to retain the tombstone markers of a compacted Event Hub. This value is only used when cleanupPolicy is Compaction. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub",
              args: { name: "tombstone-retention-time-in-hours" },
            },
            {
              name: "--user-metadata",
              description: "Gets and Sets Metadata of User",
              args: { name: "user-metadata" },
            },
          ],
        },
        {
          name: "authorization-rule",
          description: "Eventhub authorization rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create an AuthorizationRule for the specified Event Hub. Creation/update of the AuthorizationRule will take a few seconds to take effect",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                  isRequired: true,
                },
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--rights",
                  description:
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an Event Hub AuthorizationRule",
              options: [
                acquirePolicyToken,
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                changeReference,
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List the authorization rules for an Event Hub",
              options: [
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an AuthorizationRule for an Event Hub by rule name",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an AuthorizationRule for the specified Event Hub. Creation/update of the AuthorizationRule will take a few seconds to take effect",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                changeReference,
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--rights",
                  description:
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights", isVariadic: true },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "keys",
              description: "Authorization-rule keys",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Gets the ACS and SAS connection strings for the Event Hub",
                  options: [
                    {
                      name: ["--authorization-rule-name", "--name"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--eventhub-name",
                      description: "The Event Hub name",
                      args: { name: "eventhub-name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "The Namespace name",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "renew",
                  description:
                    "Regenerates the ACS and SAS connection strings for the Event Hub",
                  options: [
                    {
                      name: "--key",
                      description: "The access key to regenerate",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: ["--authorization-rule-name", "--name"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                    },
                    changeReference,
                    {
                      name: "--eventhub-name",
                      description: "The Event Hub name",
                      args: { name: "eventhub-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--key-value",
                      description:
                        "Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType",
                      args: { name: "key-value" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The Namespace name",
                      args: { name: "namespace-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "consumer-group",
          description: "Manage Azure Event Hubs consumergroup",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Event Hubs consumer group as a nested resource within a Namespace",
              options: [
                {
                  name: ["--consumer-group-name", "--name", "-n"],
                  description: "The consumer group name",
                  args: { name: "consumer-group-name" },
                  isRequired: true,
                },
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--user-metadata",
                  description:
                    "User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored",
                  args: { name: "user-metadata" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a consumer group from the specified Event Hub and resource group",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--consumer-group-name", "--name", "-n"],
                  description: "The consumer group name",
                  args: { name: "consumer-group-name" },
                },
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace",
              options: [
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
                {
                  name: "--skip",
                  description:
                    "Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls",
                  args: { name: "skip" },
                },
                {
                  name: "--top",
                  description:
                    "May be used to limit the number of results to the most recent N usageDetails",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a description for the specified consumer group",
              options: [
                {
                  name: ["--consumer-group-name", "--name", "-n"],
                  description: "The consumer group name",
                  args: { name: "consumer-group-name" },
                },
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an Event Hubs consumer group as a nested resource within a Namespace",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: ["--consumer-group-name", "--name", "-n"],
                  description: "The consumer group name",
                  args: { name: "consumer-group-name" },
                },
                {
                  name: "--eventhub-name",
                  description: "The Event Hub name",
                  args: { name: "eventhub-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--user-metadata",
                  description:
                    "User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored",
                  args: { name: "user-metadata" },
                },
              ],
            },
          ],
        },
        {
          name: "fabric-shortcut",
          description: "Manage Fabric Shortcut",
          subcommands: [
            {
              name: "approve",
              description: "Approves a Microsoft Fabric shortcut",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--event-hub-name",
                  description: "The Event Hub name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--fabric-shortcut-name",
                  description: "The Microsoft Fabric shortcut name",
                  args: { name: "fabric-shortcut-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a Microsoft Fabric shortcut",
              options: [
                {
                  name: "--event-hub-name",
                  description: "The Event Hub name",
                  args: { name: "event-hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--fabric-shortcut-name", "--name", "-n"],
                  description: "The Microsoft Fabric shortcut name",
                  args: { name: "fabric-shortcut-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--configuration",
                  description:
                    'Microsoft Fabric workspace and artifact configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "configuration", isVariadic: true },
                },
                {
                  name: "--shortcut-status",
                  description:
                    "The current shortcut status. Only Pending can be supplied on create or update",
                  args: {
                    name: "shortcut-status",
                    suggestions: ["Approved", "Pending", "Rejected"],
                  },
                },
                {
                  name: "--shortcut-type",
                  description: "The type of the shortcut",
                  args: {
                    name: "shortcut-type",
                    suggestions: ["Entity", "Network"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Microsoft Fabric shortcut",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--event-hub-name",
                  description: "The Event Hub name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: ["--fabric-shortcut-name", "--name", "-n"],
                  description: "The Microsoft Fabric shortcut name",
                  args: { name: "fabric-shortcut-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List Microsoft Fabric shortcuts for an Event Hub",
              options: [
                {
                  name: "--event-hub-name",
                  description: "The Event Hub name",
                  args: { name: "event-hub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "reject",
              description: "Rejects a Microsoft Fabric shortcut",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--event-hub-name",
                  description: "The Event Hub name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--fabric-shortcut-name",
                  description: "The Microsoft Fabric shortcut name",
                  args: { name: "fabric-shortcut-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a Microsoft Fabric shortcut",
              options: [
                {
                  name: "--event-hub-name",
                  description: "The Event Hub name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: ["--fabric-shortcut-name", "--name", "-n"],
                  description: "The Microsoft Fabric shortcut name",
                  args: { name: "fabric-shortcut-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Microsoft Fabric shortcut",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: "--configuration",
                  description:
                    'Microsoft Fabric workspace and artifact configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "configuration", isVariadic: true },
                },
                {
                  name: "--event-hub-name",
                  description: "The Event Hub name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: ["--fabric-shortcut-name", "--name", "-n"],
                  description: "The Microsoft Fabric shortcut name",
                  args: { name: "fabric-shortcut-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--shortcut-status",
                  description:
                    "The current shortcut status. Only Pending can be supplied on create or update",
                  args: {
                    name: "shortcut-status",
                    suggestions: ["Approved", "Pending", "Rejected"],
                  },
                },
                {
                  name: "--shortcut-type",
                  description: "The type of the shortcut",
                  args: {
                    name: "shortcut-type",
                    suggestions: ["Entity", "Network"],
                  },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "georecovery-alias",
      description: "Manage Azure EventHubs Geo Recovery configuration Alias",
      subcommands: [
        {
          name: "break-pair",
          description:
            "This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces",
          options: [
            acquirePolicyToken,
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new Alias(Disaster Recovery configuration)",
          options: [
            {
              name: ["--alias", "--name", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--alternate-name",
              description:
                "Alternate name specified when alias and namespace names are same",
              args: { name: "alternate-name" },
            },
            changeReference,
            {
              name: "--partner-namespace",
              description:
                "ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing",
              args: { name: "partner-namespace" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Alias(Disaster Recovery configuration)",
          options: [
            acquirePolicyToken,
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "exists",
          description: "Check the give Namespace name availability",
          options: [
            {
              name: ["--alias", "-a"],
              description: "Name to check the namespace name availability",
              args: { name: "alias" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "fail-over",
          description:
            "Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace",
          options: [
            acquirePolicyToken,
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "List all Alias(Disaster Recovery configurations)",
          options: [
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
          ],
        },
        {
          name: "set",
          description:
            "Sets a Geo-Disaster Recovery Configuration Alias for the give Namespace",
          options: [
            {
              name: ["--alias", "-a"],
              description:
                "Name of the Geo-Disaster Recovery Configuration Alias",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--partner-namespace",
              description:
                "Name (if within the same resource group) or ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing",
              args: { name: "partner-namespace" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--alternate-name",
              description:
                "Alternate Name for the Alias, when the Namespace name and Alias name are same",
              args: { name: "alternate-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get Alias(Disaster Recovery configuration) for primary or secondary namespace",
          options: [
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "authorization-rule",
          description:
            "Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias",
          subcommands: [
            {
              name: "list",
              description: "List a list of authorization rules for a Namespace",
              options: [
                {
                  name: ["--alias", "-a"],
                  description: "The Disaster Recovery configuration name",
                  args: { name: "alias" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an AuthorizationRule for a Namespace by rule name",
              options: [
                {
                  name: ["--alias", "-a"],
                  description: "The Disaster Recovery configuration name",
                  args: { name: "alias" },
                },
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "keys",
              description:
                "Manage Azure Event Hubs Authorizationrule connection strings for Geo Recovery configuration Alias",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Gets the primary and secondary connection strings for the Namespace",
                  options: [
                    {
                      name: ["--alias", "-a"],
                      description: "The Disaster Recovery configuration name",
                      args: { name: "alias" },
                      isRequired: true,
                    },
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "The Namespace name",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "namespace",
      description: "Manage Namespace",
      subcommands: [
        {
          name: "create",
          description: "Creates the EventHubs Namespace",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Namespace",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--alternate-name",
              description:
                "Alternate name specified when alias and namespace names are same",
              args: { name: "alternate-name" },
            },
            {
              name: "--capacity",
              description: "Capacity for Sku",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--cluster-arm-id",
              description: "Cluster ARM ID of the Namespace",
              args: { name: "cluster-arm-id" },
            },
            {
              name: "--disable-local-auth",
              description:
                "A boolean value that indicates whether SAS authentication is enabled/disabled for the Event Hubs",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-auto-inflate",
              description:
                "A boolean value that indicates whether AutoInflate is enabled for eventhub namespace",
              args: {
                name: "enable-auto-inflate",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-kafka",
              description:
                "A boolean value that indicates whether Kafka is enabled for eventhub namespace",
              args: {
                name: "enable-kafka",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--encryption-config",
              description: "List of KeyVaultProperties objects",
              args: { name: "encryption-config", isVariadic: true },
            },
            {
              name: ["--geo-data-replication-config", "--replica-config"],
              description:
                "A list of regions where replicas of the namespace are maintained Object",
              args: { name: "geo-data-replication-config", isVariadic: true },
            },
            {
              name: "--infra-encryption",
              description:
                "A boolean value that indicates whether Infrastructure Encryption (Double Encryption) is enabled/disabled",
              args: {
                name: "infra-encryption",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--ip-address-type",
              description:
                "The IP address type for the namespace. Determines whether the namespace supports IPv4 only or both IPv4 and IPv6 (dualstack). Allowed values: DualStack, IPv4",
              args: { name: "ip-address-type" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--max-replication-lag-duration-in-seconds", "--max-lag"],
              description:
                "The maximum acceptable lag for data replication operations from the primary replica to a quorum of secondary replicas",
              args: { name: "max-replication-lag-duration-in-seconds" },
            },
            {
              name: "--maximum-throughput-units",
              description:
                "Upper limit of throughput units when AutoInflate is enabled, vaule should be within 0 to 20 throughput units. ( 0 if AutoInflateEnabled = true)",
              args: { name: "maximum-throughput-units" },
            },
            {
              name: "--mi-system-assigned",
              description: "Enable System Assigned Identity",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--mi-user-assigned",
              description: "List of User Assigned Identity ids",
              args: { name: "mi-user-assigned", isVariadic: true },
            },
            {
              name: ["--minimum-tls-version", "--min-tls"],
              description:
                "The minimum TLS version for the cluster to support, e.g. 1.2",
              args: {
                name: "minimum-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "1.3"],
              },
            },
            {
              name: ["--public-network-access", "--public-network"],
              description:
                "This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile' access rules",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sku",
              description: "Namespace SKU",
              args: {
                name: "sku",
                suggestions: ["Basic", "Premium", "Standard"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--zone-redundant",
              description:
                "Enabling this property creates a Standard EventHubs Namespace in regions supported availability zones",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing namespace. This operation also removes all associated resources under the namespace",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "exists",
          description: "Check the give Namespace name availability",
          options: [
            {
              name: "--name",
              description: "Name to check the namespace name availability",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "failover",
          description: "GeoDR Failover",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--force",
              description:
                "If Force is false then graceful failover is attempted after ensuring no data loss. If Force flag is set to true, Forced failover is attempted with possible data loss",
              args: {
                name: "force",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--namespace-name",
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--primary-location",
              description:
                "Query parameter for the new primary location after failover",
              args: { name: "primary-location" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all the available Namespaces within a subscription, irrespective of the resource groups",
          options: [
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the description of the specified namespace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--alternate-name",
              description:
                "Alternate name specified when alias and namespace names are same",
              args: { name: "alternate-name" },
            },
            {
              name: "--capacity",
              description:
                "The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--cluster-arm-id",
              description: "Cluster ARM ID of the Namespace",
              args: { name: "cluster-arm-id" },
            },
            {
              name: ["--confidential-compute-mode", "--mode"],
              description: "Setting to Enable or Disable Confidential Compute",
              args: {
                name: "confidential-compute-mode",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--disable-local-auth",
              description:
                "This property disables SAS authentication for the Event Hubs namespace",
              args: {
                name: "disable-local-auth",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--enable-auto-inflate",
              description:
                "Value that indicates whether AutoInflate is enabled for eventhub namespace",
              args: {
                name: "enable-auto-inflate",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--encryption",
              description:
                'Properties of BYOK Encryption description Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "encryption", isVariadic: true },
            },
            {
              name: [
                "--private-endpoint-connections",
                "--endpoint-connections",
              ],
              description:
                'List of private endpoint connections. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "private-endpoint-connections", isVariadic: true },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--identity",
              description:
                'Properties of BYOK Identity description Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity", isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--ip-address-type",
              description:
                "The IP address type for the namespace. Determines whether the namespace supports IPv4 only or both IPv4 and IPv6 (dual stack)",
              args: {
                name: "ip-address-type",
                suggestions: ["DualStack", "IPv4"],
              },
            },
            {
              name: "--kafka-enabled",
              description:
                "Value that indicates whether Kafka is enabled for eventhub namespace",
              args: {
                name: "kafka-enabled",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--locations",
              description:
                'A list of regions where replicas of the namespace are maintained. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "locations", isVariadic: true },
            },
            {
              name: ["--max-replication-lag-duration-in-seconds", "--max-lag"],
              description:
                "The maximum acceptable lag for data replication operations from the primary replica to a quorum of secondary replicas. When the lag exceeds the configured amount, operations on the primary replica will be failed",
              args: { name: "max-replication-lag-duration-in-seconds" },
            },
            {
              name: "--maximum-throughput-units",
              description:
                "Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)",
              args: { name: "maximum-throughput-units" },
            },
            {
              name: "--minimum-tls-version",
              description:
                "The minimum TLS version for the cluster to support, e.g. '1.2'",
              args: {
                name: "minimum-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "1.3"],
              },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--platform-capabilities",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "platform-capabilities", isVariadic: true },
            },
            {
              name: "--public-network-access",
              description:
                "This determines if traffic is allowed over public network. By default it is enabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled", "SecuredByPerimeter"],
              },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--sku",
              description: "Name of this SKU",
              args: {
                name: "sku",
                suggestions: ["Basic", "Premium", "Standard"],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--tier",
              description: "The billing tier of this particular SKU",
              args: {
                name: "tier",
                suggestions: ["Basic", "Premium", "Standard"],
              },
            },
            {
              name: "--zone-redundant",
              description:
                "Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones",
              args: {
                name: "zone-redundant",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The Namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
        {
          name: "application-group",
          description:
            "Manages Application Groups for premium eventhubs namespace",
          subcommands: [
            {
              name: "create",
              description:
                "Creates an application group for an EventHub namespace",
              options: [
                {
                  name: [
                    "--client-app-group-identifier",
                    "--client-app-group-id",
                  ],
                  description:
                    "The Unique identifier for application group.Supports SAS(NamespaceSASKeyName=KeyName or EntitySASKeyName=KeyName) or AAD(AADAppID=Guid)",
                  args: { name: "client-app-group-identifier" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Application Group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--is-enabled",
                  description:
                    "Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed",
                  args: {
                    name: "is-enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: [
                    "--throttling-policy-config",
                    "--throttling-policy",
                    "--policy-config",
                  ],
                  description: "List of Throttling Policy Objects",
                  args: { name: "throttling-policy-config", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an ApplicationGroup for a Namespace",
              options: [
                acquirePolicyToken,
                {
                  name: ["--application-group-name", "--name", "-n"],
                  description: "The Application Group name",
                  args: { name: "application-group-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List a list of application groups for a Namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an ApplicationGroup for a Namespace",
              options: [
                {
                  name: ["--application-group-name", "--name", "-n"],
                  description: "The Application Group name",
                  args: { name: "application-group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an ApplicationGroup for a Namespace",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--application-group-name", "--name", "-n"],
                  description: "The Application Group name",
                  args: { name: "application-group-name" },
                },
                changeReference,
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--is-enabled",
                  description:
                    "Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed",
                  args: {
                    name: "is-enabled",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--policies",
                  description:
                    'List of group policies that define the behavior of application group. The policies can support resource governance scenarios such as limiting ingress or egress traffic. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "policies", isVariadic: true },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "policy",
              description: "Append or Remove application group policies",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Appends an application group policy to the existing policy. This cmdlet can be used to append one or more throttling policies",
                  options: [
                    {
                      name: [
                        "--throttling-policy-config",
                        "--throttling-policy",
                        "--policy-config",
                      ],
                      description: "List of Throttling Policy Objects",
                      args: {
                        name: "throttling-policy-config",
                        isVariadic: true,
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of Application Group",
                      args: { name: "name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Removes an application group policy from the existing policies. This cmdlet can be used to remove one or more throttling policies",
                  options: [
                    {
                      name: "--policy",
                      description: "List of Throttling Policy Objects",
                      args: { name: "policy", isVariadic: true },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of Application Group",
                      args: { name: "name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "authorization-rule",
          description: "Eventhub namespace authorization-rule",
          subcommands: [
            {
              name: "create",
              description: "Create an AuthorizationRule for a Namespace",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--rights",
                  description:
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an AuthorizationRule for a Namespace",
              options: [
                acquirePolicyToken,
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List a list of authorization rules for a Namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an AuthorizationRule for a Namespace by rule name",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an AuthorizationRule for a Namespace",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                changeReference,
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--rights",
                  description:
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights", isVariadic: true },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "keys",
              description: "Authorization-rule keys",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Gets the primary and secondary connection strings for the Namespace",
                  options: [
                    {
                      name: ["--authorization-rule-name", "--name"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "The Namespace name",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "renew",
                  description:
                    "Regenerates the primary or secondary connection strings for the specified Namespace",
                  options: [
                    {
                      name: "--key",
                      description: "The access key to regenerate",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: ["--authorization-rule-name", "--name"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                    },
                    changeReference,
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--key-value",
                      description:
                        "Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType",
                      args: { name: "key-value" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The Namespace name",
                      args: { name: "namespace-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "encryption",
          description: "Manage eventhubs namespace encryption properties",
          subcommands: [
            {
              name: "add",
              description: "Add Encryption properties to a namespace",
              options: [
                {
                  name: "--encryption-config",
                  description: "List of KeyVaultProperties objects",
                  args: { name: "encryption-config", isVariadic: true },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--infra-encryption",
                  description:
                    "A boolean value that indicates whether Infrastructure Encryption (Double Encryption) is enabled/disabled",
                  args: {
                    name: "infra-encryption",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove one or more Encryption properties from a namespace",
              options: [
                {
                  name: "--encryption-config",
                  description: "List of KeyVaultProperties objects",
                  args: { name: "encryption-config", isVariadic: true },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
          ],
        },
        {
          name: "identity",
          description: "Manage eventhubs namespace identity",
          subcommands: [
            {
              name: "assign",
              description:
                "Assign System or User or System,User assigned identities to a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--system-assigned",
                  description: "System Assigned Identity",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--user-assigned",
                  description: "User Assigned Identity",
                  args: { name: "user-assigned", isVariadic: true },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove System or User or System,User assigned identities from a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--system-assigned",
                  description: "System Assigned Identity",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--user-assigned",
                  description: "User Assigned Identity",
                  args: { name: "user-assigned", isVariadic: true },
                },
              ],
            },
          ],
        },
        {
          name: "network-rule-set",
          description: "Manage Azure EventHubs networkruleset for namespace",
          subcommands: [
            {
              name: "create",
              description: "Create NetworkRuleSet for a Namespace",
              options: [
                {
                  name: ["--namespace-name", "--name", "-n"],
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--default-action",
                  description: "Default Action for Network Rule Set",
                  args: {
                    name: "default-action",
                    suggestions: ["Allow", "Deny"],
                  },
                },
                {
                  name: ["--enable-trusted-service-access", "-t"],
                  description:
                    "Value that indicates whether Trusted Service Access is Enabled or not",
                  args: {
                    name: "enable-trusted-service-access",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ip-rules",
                  description:
                    'List of IpRules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ip-rules", isVariadic: true },
                },
                {
                  name: "--public-network-access",
                  description:
                    "This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile's access rules",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled", "SecuredByPerimeter"],
                  },
                },
                {
                  name: "--virtual-network-rules",
                  description:
                    'List VirtualNetwork Rules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "virtual-network-rules", isVariadic: true },
                },
              ],
            },
            {
              name: "list",
              description: "List NetworkRuleSet for a Namespace",
              options: [
                {
                  name: ["--namespace-name", "--name", "-n"],
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get NetworkRuleSet for a Namespace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--namespace-name", "--name", "-n"],
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update NetworkRuleSet for a Namespace",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: "--default-action",
                  description: "Default Action for Network Rule Set",
                  args: {
                    name: "default-action",
                    suggestions: ["Allow", "Deny"],
                  },
                },
                {
                  name: ["--enable-trusted-service-access", "-t"],
                  description:
                    "Value that indicates whether Trusted Service Access is Enabled or not",
                  args: {
                    name: "enable-trusted-service-access",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--ip-rules",
                  description:
                    'List of IpRules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ip-rules", isVariadic: true },
                },
                {
                  name: ["--namespace-name", "--name", "-n"],
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--public-network-access",
                  description:
                    "This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile's access rules",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled", "SecuredByPerimeter"],
                  },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--virtual-network-rules",
                  description:
                    'List VirtualNetwork Rules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "virtual-network-rules", isVariadic: true },
                },
              ],
            },
            {
              name: "ip-rule",
              description:
                "Manage Azure eventhubs ip-rules in networkruleSet for namespace",
              subcommands: [
                {
                  name: "add",
                  description: "Add a IP-Rule for network rule of namespace",
                  options: [
                    {
                      name: ["--namespace-name", "--name", "-n"],
                      description: "Name of the Namespace",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--ip-rule",
                      description: "List VirtualNetwork Rules",
                      args: { name: "ip-rule", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove Ip-Rule from network rule of namespace",
                  options: [
                    {
                      name: ["--namespace-name", "--name", "-n"],
                      description: "Name of the Namespace",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--ip-rule",
                      description: "List VirtualNetwork Rules",
                      args: { name: "ip-rule", isVariadic: true },
                    },
                  ],
                },
              ],
            },
            {
              name: "virtual-network-rule",
              description:
                "Manage Azure eventhubs subnet-rule in networkruleSet for namespace",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a Virtual-Network-Rule for network rule of namespace",
                  options: [
                    {
                      name: ["--namespace-name", "--name", "-n"],
                      description: "Name of the Namespace",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--subnet",
                      description: "List VirtualNetwork Rules",
                      args: { name: "subnet", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove network rule for a namespace",
                  options: [
                    {
                      name: ["--namespace-name", "--name", "-n"],
                      description: "Name of the Namespace",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--subnet",
                      description: "List VirtualNetwork Rules",
                      args: { name: "subnet", isVariadic: true },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "nsp-configuration",
          description: "Manage Nsp Configurations",
          subcommands: [
            {
              name: "list",
              description:
                "List list of current NetworkSecurityPerimeterConfiguration for Namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get a NetworkSecurityPerimeterConfigurations resourceAssociationName",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--resource-association-name", "--name", "-n"],
                  description: "The ResourceAssociation Name",
                  args: { name: "resource-association-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
        {
          name: "private-endpoint-connection",
          description: "Manage eventhubs namespace private endpoint connection",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for eventhubs namesapce",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--description",
                  description: "Comments for approve operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the EventHubs Namespace. You can get it using az eventhubs namespace show",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the EventHubs Namespace",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The eventhubs namesapce name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group name of specified eventhubs namespace",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "create",
              description:
                "Create PrivateEndpointConnections of service namespace",
              options: [
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--description",
                  description: "Description of the connection state",
                  args: { name: "description" },
                },
                {
                  name: "--provisioning-state",
                  description:
                    "Provisioning state of the Private Endpoint Connection",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Canceled",
                      "Creating",
                      "Deleting",
                      "Failed",
                      "Succeeded",
                      "Updating",
                    ],
                  },
                },
                {
                  name: "--status",
                  description: "Status of the connection",
                  args: {
                    name: "status",
                    suggestions: [
                      "Approved",
                      "Disconnected",
                      "Pending",
                      "Rejected",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a private endpoint connection request for eventhubs namespace",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--description",
                  description: "Comments for delete operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the EventHubs Namespace. You can get it using az eventhubs namespace show",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the EventHubs Namespace",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The eventhubs namesapce name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group name of specified eventhubs namespace",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List the available PrivateEndpointConnections within a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "reject",
              description:
                "Reject a private endpoint connection request for eventhubs namespace",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--description",
                  description: "Comments for reject operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the EventHubs Namespace. You can get it using az eventhubs namespace show",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the EventHubs Namespace",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The eventhubs namesapce name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group name of specified eventhubs namespace",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get a description for the specified Private Endpoint Connection name",
              options: [
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the EventHubs Namespace. You can get it using az eventhubs namespace show",
                  args: { name: "id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update PrivateEndpointConnections of service namespace",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: "--description",
                  description: "Description of the connection state",
                  args: { name: "description" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--provisioning-state",
                  description:
                    "Provisioning state of the Private Endpoint Connection",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Canceled",
                      "Creating",
                      "Deleting",
                      "Failed",
                      "Succeeded",
                      "Updating",
                    ],
                  },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--status",
                  description: "Status of the connection",
                  args: {
                    name: "status",
                    suggestions: [
                      "Approved",
                      "Disconnected",
                      "Pending",
                      "Rejected",
                    ],
                  },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--created",
                  description:
                    "Wait until created with 'provisioningState' at 'Succeeded'",
                },
                {
                  name: "--custom",
                  description:
                    "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
                  args: { name: "custom" },
                },
                { name: "--deleted", description: "Wait until deleted" },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--timeout",
                  description: "Maximum wait in seconds",
                  args: { name: "timeout" },
                },
                {
                  name: "--updated",
                  description:
                    "Wait until updated with provisioningState at 'Succeeded'",
                },
              ],
            },
          ],
        },
        {
          name: "private-link-resource",
          description: "Manage eventhubs namespace private link resources",
          subcommands: [
            {
              name: "show",
              description: "List lists of resources that supports Privatelinks",
              options: [
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
          ],
        },
        {
          name: "replica",
          description: "Manage eventhubs namespace replicas",
          subcommands: [
            {
              name: "add",
              description: "Add one or more Replica properties to a namespace",
              options: [
                {
                  name: ["--geo-data-replication-config", "--replica-config"],
                  description:
                    "A list of regions where replicas of the namespace are maintained Object",
                  args: {
                    name: "geo-data-replication-config",
                    isVariadic: true,
                  },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "remove",
              description:
                "Remove one or more Replica properties to a namespace",
              options: [
                {
                  name: ["--geo-data-replication-config", "--replica-config"],
                  description:
                    "A list of regions where replicas of the namespace are maintained Object",
                  args: {
                    name: "geo-data-replication-config",
                    isVariadic: true,
                  },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
          ],
        },
        {
          name: "schema-registry",
          description: "Manages eventhubs namespace schema registry",
          subcommands: [
            {
              name: "create",
              description: "Create an EventHub schema group",
              options: [
                {
                  name: ["--schema-group-name", "--name", "-n"],
                  description: "The Schema Group name",
                  args: { name: "schema-group-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--group-properties",
                  description:
                    'Dictionary object for SchemaGroup group properties Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "group-properties", isVariadic: true },
                },
                {
                  name: "--schema-compatibility",
                  description: "Compatibility of Schema",
                  args: {
                    name: "schema-compatibility",
                    suggestions: ["Backward", "Forward", "None"],
                  },
                },
                {
                  name: "--schema-type",
                  description: "Type of Schema",
                  args: {
                    name: "schema-type",
                    suggestions: ["Avro", "Json", "ProtoBuf", "Unknown"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an EventHub schema group",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--schema-group-name", "--name", "-n"],
                  description: "The Schema Group name",
                  args: { name: "schema-group-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List all the Schema Groups in a Namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
                {
                  name: "--skip",
                  description:
                    "Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls",
                  args: { name: "skip" },
                },
                {
                  name: "--top",
                  description:
                    "May be used to limit the number of results to the most recent N usageDetails",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of an EventHub schema group",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--schema-group-name", "--name", "-n"],
                  description: "The Schema Group name",
                  args: { name: "schema-group-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an EventHub schema group",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--group-properties",
                  description:
                    'Dictionary object for SchemaGroup group properties Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "group-properties", isVariadic: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--schema-group-name", "--name", "-n"],
                  description: "The Schema Group name",
                  args: { name: "schema-group-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schema-compatibility",
                  description: "Compatibility of Schema",
                  args: {
                    name: "schema-compatibility",
                    suggestions: ["Backward", "Forward", "None"],
                  },
                },
                {
                  name: "--schema-type",
                  description: "Type of Schema",
                  args: {
                    name: "schema-type",
                    suggestions: ["Avro", "Json", "ProtoBuf", "Unknown"],
                  },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
