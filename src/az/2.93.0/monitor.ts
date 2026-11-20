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
  name: "monitor",
  description: "Manage the Azure Monitor Service",
  subcommands: [
    {
      name: "clone",
      description:
        "Clone metrics alert rules from one resource to another resource",
      options: [
        {
          name: "--source-resource",
          description: "Resource ID of the source resource",
          args: { name: "source-resource" },
          isRequired: true,
        },
        {
          name: "--target-resource",
          description: "Resource ID of the target resource",
          args: { name: "target-resource" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--always-clone",
          description:
            "If this argument is applied, all monitor settings would be cloned instead of expanding its scope",
        },
        changeReference,
        {
          name: ["--types", "-t"],
          description:
            "List of types of monitor settings which would be cloned",
          args: {
            name: "types",
            suggestions: ["metricsAlert"],
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "account",
      description: "Manage monitor account",
      subcommands: [
        {
          name: "create",
          description: "Create a workspace",
          options: [
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
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
              name: [
                "--enable-access-using-resource-permissions",
                "--enable-res-perm",
              ],
              description:
                "Flag that indicates whether to enable access using resource permissions",
              args: {
                name: "enable-access-using-resource-permissions",
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
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: ["--mi-system-assigned", "--system-assigned"],
              description: "Set the system managed identity",
              args: { name: "mi-system-assigned", isOptional: true },
            },
            {
              name: ["--mi-user-assigned", "--user-assigned"],
              description:
                'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "mi-user-assigned",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--public-network-access",
              description:
                "Gets or sets allow or disallow public network access to Azure Monitor Workspace",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a workspace",
          options: [
            acquirePolicyToken,
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
            },
            changeReference,
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
          description: "List all workspaces in the specified subscription",
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
          description: "Show the specific azure monitor workspace",
          options: [
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
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
          description: "Update a workspace",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
            },
            changeReference,
            {
              name: [
                "--enable-access-using-resource-permissions",
                "--enable-res-perm",
              ],
              description:
                "Flag that indicates whether to enable access using resource permissions",
              args: {
                name: "enable-access-using-resource-permissions",
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
              name: "--public-network-access",
              description:
                "Gets or sets allow or disallow public network access to Azure Monitor Workspace",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            acquirePolicyToken,
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
            },
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
          name: "identity",
          description: "Manage Identity",
          subcommands: [
            {
              name: "assign",
              description: "Assign the user or system managed identities",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "--name", "-n"],
                  description:
                    "The name of the Azure Monitor workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Set the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove the user or system managed identities",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "--name", "-n"],
                  description:
                    "The name of the Azure Monitor workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Set the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of managed identities",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "--name", "-n"],
                  description:
                    "The name of the Azure Monitor workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
          name: "issue",
          description: "Manage Issue",
          subcommands: [
            {
              name: "add-investigation-result",
              description: "Adds investigation result",
              options: [
                {
                  name: "--id",
                  description: "The identifier of the investigation",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--result",
                  description: "The result of this investigation",
                  args: { name: "result" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--created-at",
                  description:
                    "The creation time of the investigation (in UTC)",
                  args: { name: "created-at" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
                },
                {
                  name: "--last-modified-at",
                  description:
                    "The last update time of the investigation (in UTC)",
                  args: { name: "last-modified-at" },
                },
                {
                  name: "--origin",
                  description:
                    'The origin of the investigation Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "origin", isVariadic: true },
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
              name: "add-or-update-alert",
              description: "Add or update alerts in the issue",
              options: [
                {
                  name: "--value",
                  description:
                    'A list of related alerts Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "value", isVariadic: true },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              name: "add-or-update-resource",
              description: "Add or update resources in the issue",
              options: [
                {
                  name: "--value",
                  description:
                    'A list of related resources Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "value", isVariadic: true },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              description: "Create a new issue or updates an existing one",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--issue-name", "--name", "-n"],
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
                  name: "--background",
                  description:
                    'The issue background information Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "background", isVariadic: true },
                },
                changeReference,
                {
                  name: "--impact-time",
                  description: "The issue impact time (in UTC)",
                  args: { name: "impact-time" },
                },
                {
                  name: "--notifications",
                  description:
                    'The issue notification settings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "notifications", isVariadic: true },
                },
                {
                  name: "--related",
                  description:
                    "Related resource or alert that is to be added to the issue (default: empty - the issue will be created without any related resources or alerts)",
                  args: { name: "related" },
                },
                {
                  name: "--severity",
                  description: "The issue severity",
                  args: { name: "severity" },
                },
                {
                  name: "--status",
                  description: "The issue status",
                  args: {
                    name: "status",
                    suggestions: [
                      "Canceled",
                      "Closed",
                      "InProgress",
                      "Mitigated",
                      "New",
                    ],
                  },
                },
                {
                  name: "--title",
                  description: "The issue title",
                  args: { name: "title" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an issue",
              options: [
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--issue-name", "--name", "-n"],
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              name: "fetch-background-visualization",
              description: "Fetch the background visualization of the issue",
              options: [
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              name: "fetch-investigation-result",
              description: "Fetch investigation result",
              options: [
                {
                  name: "--investigation-id",
                  description: "The unique identifier of the investigation",
                  args: { name: "investigation-id" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              description: "List all issues under the parent",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
              name: "list-alert",
              description:
                "List all alerts in the issue - this method uses pagination to return all alerts",
              options: [
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--filter",
                  description:
                    "The filter to apply on the operation. For example, to filter by relevance, use \"$filter=relevance eq 'Relevant'\". Note: this property is currently a placeholder and is not in use",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              name: "list-resource",
              description:
                "List all resources in the issue - this method uses pagination to return all resources",
              options: [
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--filter",
                  description:
                    "The filter to apply on the operation. For example, to filter by relevance, use \"$filter=relevance eq 'Relevant'\". Note: this property is currently a placeholder and is not in use",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              name: "set-background-visualization",
              description: "Set the background visualization for the issue",
              options: [
                {
                  name: "--visualization",
                  description:
                    "The background visualization content, in Adaptive Card format",
                  args: { name: "visualization" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--issue-name",
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              description: "Get issue properties",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--issue-name", "--name", "-n"],
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
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
              description: "Update a new issue or updates an existing one",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                {
                  name: "--background",
                  description:
                    'The issue background information Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "background", isVariadic: true },
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
                  name: "--impact-time",
                  description: "The issue impact time (in UTC)",
                  args: { name: "impact-time" },
                },
                {
                  name: ["--issue-name", "--name", "-n"],
                  description: "The name of the IssueResource",
                  args: { name: "issue-name" },
                },
                {
                  name: "--notifications",
                  description:
                    'The issue notification settings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "notifications", isVariadic: true },
                },
                {
                  name: "--related",
                  description:
                    "Related resource or alert that is to be added to the issue (default: empty - the issue will be created without any related resources or alerts)",
                  args: { name: "related" },
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
                  name: "--severity",
                  description: "The issue severity",
                  args: { name: "severity" },
                },
                {
                  name: "--status",
                  description: "The issue status",
                  args: {
                    name: "status",
                    suggestions: [
                      "Canceled",
                      "Closed",
                      "InProgress",
                      "Mitigated",
                      "New",
                    ],
                  },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--title",
                  description: "The issue title",
                  args: { name: "title" },
                },
              ],
            },
          ],
        },
        {
          name: "metrics-container",
          description: "Manage Metrics Container",
          subcommands: [
            {
              name: "create",
              description:
                "Create metrics container settings for a monitoring account",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--metrics-container-name", "--name", "-n"],
                  description: "The name of the MetricsContainer",
                  args: { name: "metrics-container-name" },
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
                  name: "--version",
                  description:
                    "The version of Metrics Query Service that this AMW will use for all metric queries",
                  args: { name: "version" },
                },
              ],
            },
            {
              name: "list",
              description: "List metrics containers for a monitoring account",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
                "Get metrics container settings for a monitoring account",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--metrics-container-name", "--name", "-n"],
                  description: "The name of the MetricsContainer",
                  args: { name: "metrics-container-name" },
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
                "Update metrics container settings for a monitoring account",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
                  name: ["--metrics-container-name", "--name", "-n"],
                  description: "The name of the MetricsContainer",
                  args: { name: "metrics-container-name" },
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
                  name: "--version",
                  description:
                    "The version of Metrics Query Service that this AMW will use for all metric queries",
                  args: { name: "version" },
                },
              ],
            },
          ],
        },
        {
          name: "trace-container",
          description:
            "Manage the trace container of an Azure Monitor workspace",
          subcommands: [
            {
              name: "create",
              description:
                "Create the trace container of an Azure Monitor workspace",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
                  name: "--retention-days",
                  description:
                    "The number of days for which the traces are retained. Value must be between 4 and 730 days",
                  args: { name: "retention-days" },
                },
                {
                  name: "--trace-duration-window",
                  description: "The trace duration window in seconds",
                  args: { name: "trace-duration-window" },
                },
                {
                  name: "--trace-metrics",
                  description:
                    "Controls trace-derived metrics. New containers default to Enabled",
                  args: {
                    name: "trace-metrics",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the trace container of an Azure Monitor workspace",
              options: [
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
                "Update the trace container of an Azure Monitor workspace",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
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
                  name: "--retention-days",
                  description:
                    "The number of days for which the traces are retained. Value must be between 4 and 730 days",
                  args: { name: "retention-days" },
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
                  name: "--trace-duration-window",
                  description: "The trace duration window in seconds",
                  args: { name: "trace-duration-window" },
                },
                {
                  name: "--trace-metrics",
                  description:
                    "Controls trace-derived metrics. New containers default to Enabled",
                  args: {
                    name: "trace-metrics",
                    suggestions: ["Disabled", "Enabled"],
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
                {
                  name: ["--azure-monitor-workspace-name", "-w"],
                  description:
                    "The name of the Azure Monitor Workspace. The name is case insensitive",
                  args: { name: "azure-monitor-workspace-name" },
                },
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
      ],
    },
    {
      name: "action-group",
      description: "Manage action groups",
      subcommands: [
        {
          name: "create",
          description: "Create a new action group",
          options: [
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
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
              name: ["--actions", "--action", "-a"],
              description:
                "Add receivers to the action group during the creation. Usage: --action TYPE NAME [ARG ...] Email: Format: --action email NAME EMAIL_ADDRESS [usecommonalertschema] Example: --action email bob bob@contoso.com SMS: Format: --action sms NAME COUNTRY_CODE PHONE_NUMBER Example: --action sms charli 1 5551234567 Webhook: Format: --action webhook NAME URI [useaadauth OBJECT_ID IDENTIFIER URI] [usecommonalertschema] Example: --action webhook alert_hook https://www.contoso.com/alert useaadauth testobj http://identifier usecommonalertschema Arm Role: Format: --action armrole NAME ROLE_ID [usecommonalertschema] Example: --action armole owner_role 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 Azure App Push: Format: --action azureapppush NAME EMAIL_ADDRESS Example: --action azureapppush test_apppush bob@contoso.com ITSM: Format: --action itsm NAME WORKSPACE_ID CONNECTION_ID TICKET_CONFIGURATION REGION Example: --action itsm test_itsm test_workspace test_conn ticket_blob useast Automation runbook: Format: --action automationrunbook NAME AUTOMATION_ACCOUNT_ID RUNBOOK_NAME WEBHOOK_RESOURCE_ID SERVICE_URI [isglobalrunbook] [usecommonalertschema] Example: --action automationrunbook test_runbook test_acc test_book test_webhook test_rsrc http://example.com isglobalrunbook usecommonalertschema Voice: Format: --action voice NAME COUNTRY_CODE PHONE_NUMBER Example: --action voice charli 1 4441234567 Logic App: Format: --action logicapp NAME RESOURCE_ID CALLBACK_URL [usecommonalertschema] Example: --action logicapp test_logicapp test_rsrc http://callback Azure Function: Format: --action azurefunction NAME FUNCTION_APP_RESOURCE_ID FUNCTION_NAME HTTP_TRIGGER_URL [usecommonalertschema] Example: --action azurefunction test_function test_rsrc test_func http://trigger usecommonalertschema Event Hub: Format: --action eventhub NAME SUBSCRIPTION_ID EVENT_HUB_NAME_SPACE EVENT_HUB_NAME [usecommonalertschema] Example: --action eventhub test_eventhub 5def922a-3ed4-49c1-b9fd-05ec533819a3 eventhubNameSpace testEventHubName usecommonalertschema Multiple actions can be specified by using more than one --add-action argument. 'useaadauth', 'isglobalrunbook' and 'usecommonalertschema' are optional arguements that only need to be passed to set the respective parameter to True. If the 'useaadauth' argument is passed, then the OBJECT_ID and IDENTIFIER_URI values are required as well. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "actions", isVariadic: true },
            },
            {
              name: "--arm-role-receivers",
              description:
                'The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "arm-role-receivers", isVariadic: true },
            },
            {
              name: "--automation-runbook-receivers",
              description:
                'The list of AutomationRunbook receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "automation-runbook-receivers", isVariadic: true },
            },
            {
              name: "--azure-app-push-receivers",
              description:
                'The list of AzureAppPush receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-app-push-receivers", isVariadic: true },
            },
            {
              name: "--azure-function-receivers",
              description:
                'The list of azure function receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-function-receivers", isVariadic: true },
            },
            changeReference,
            {
              name: "--email-receivers",
              description:
                'The list of email receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "email-receivers", isVariadic: true },
            },
            {
              name: "--enabled",
              description:
                "Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications",
              args: {
                name: "enabled",
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
              name: "--event-hub-receivers",
              description:
                'The list of event hub receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "event-hub-receivers", isVariadic: true },
            },
            {
              name: ["--group-short-name", "--short-name"],
              description:
                "The short name of the action group. This will be used in SMS messages",
              args: { name: "group-short-name" },
            },
            {
              name: "--incident-receivers",
              description:
                'The list of incident receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "incident-receivers", isVariadic: true },
            },
            {
              name: "--itsm-receivers",
              description:
                'The list of ITSM receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "itsm-receivers", isVariadic: true },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--logic-app-receivers",
              description:
                'The list of logic app receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "logic-app-receivers", isVariadic: true },
            },
            {
              name: ["--mi-system-assigned", "--system-assigned"],
              description: "Set the system managed identity",
              args: { name: "mi-system-assigned", isOptional: true },
            },
            {
              name: ["--mi-user-assigned", "--user-assigned"],
              description:
                'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "mi-user-assigned",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--sms-receivers",
              description:
                'The list of SMS receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sms-receivers", isVariadic: true },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--voice-receivers",
              description:
                'The list of voice receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "voice-receivers", isVariadic: true },
            },
            {
              name: "--webhook-receivers",
              description:
                'The list of webhook receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "webhook-receivers", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an action group",
          options: [
            acquirePolicyToken,
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
            },
            changeReference,
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
          name: "enable-receiver",
          description: "Enable a receiver in an action group",
          options: [
            {
              name: ["--receiver-name", "--name", "-n"],
              description: "The name of the receiver to resubscribe",
              args: { name: "receiver-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--action-group-name", "--action-group"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
            },
            changeReference,
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
          name: "list",
          description:
            "List action groups under a resource group or the current subscription",
          options: [
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
          description: "Show the details of an action group",
          options: [
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
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
          description: "Update an action group",
          options: [
            acquirePolicyToken,
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--add-actions", "--add-action", "-a"],
              description:
                "Add receivers to the action group. Usage: --add-action TYPE NAME [ARG ...] Email: Format: --add-action email NAME EMAIL_ADDRESS [usecommonalertschema] Example: --add-action email bob bob@contoso.com SMS: Format: --add-action sms NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action sms charli 1 5551234567 Webhook: Format: --add-action webhook NAME URI [useaadauth OBJECT_ID IDENTIFIER URI] [usecommonalertschema] Example: --add-action https://www.contoso.com/alert useaadauth testobj http://identifier usecommonalertschema Arm Role: Format: --add-action armrole NAME ROLE_ID [usecommonalertschema] Example: --add-action armole owner_role 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 Azure App Push: Format: --add-action azureapppush NAME EMAIL_ADDRESS Example: --add-action azureapppush test_apppush bob@contoso.com ITSM: Format: --add-action itsm NAME WORKSPACE_ID CONNECTION_ID TICKET_CONFIGURATION REGION Example: --add-action itsm test_itsm test_workspace test_conn ticket_blob useast Automation runbook: Format: --add-action automationrunbook NAME AUTOMATION_ACCOUNT_ID RUNBOOK_NAME WEBHOOK_RESOURCE_ID SERVICE_URI [isglobalrunbook] [usecommonalertschema] Example: --add-action automationrunbook test_runbook test_acc test_book test_webhook test_rsrc http://example.com isglobalrunbook usecommonalertschema Voice: Format: --add-action voice NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action voice charli 1 4441234567 Logic App: Format: --add-action logicapp NAME RESOURCE_ID CALLBACK_URL [usecommonalertschema] Example: --add-action logicapp test_logicapp test_rsrc http://callback Azure Function: Format: --add-action azurefunction NAME FUNCTION_APP_RESOURCE_ID FUNCTION_NAME HTTP_TRIGGER_URL [usecommonalertschema] Example: --add-action azurefunction test_function test_rsrc test_func http://trigger usecommonalertschema Event Hub: Format: --action eventhub NAME SUBSCRIPTION_ID EVENT_HUB_NAME_SPACE EVENT_HUB_NAME [usecommonalertschema] Example: --action eventhub test_eventhub 5def922a-3ed4-49c1-b9fd-05ec533819a3 eventhubNameSpace testEventHubName usecommonalertschema Multiple actions can be specified by using more than one --add-action argument. 'useaadauth', 'isglobalrunbook' and 'usecommonalertschema' are optional arguements that only need to be passed to set the respective parameter to True. If the 'useaadauth' argument is passed, then the OBJECT_ID and IDENTIFIER_URI values are required as well. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "add-actions", isVariadic: true },
            },
            {
              name: "--arm-role-receivers",
              description:
                'The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "arm-role-receivers", isVariadic: true },
            },
            {
              name: "--automation-runbook-receivers",
              description:
                'The list of AutomationRunbook receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "automation-runbook-receivers", isVariadic: true },
            },
            {
              name: "--azure-app-push-receivers",
              description:
                'The list of AzureAppPush receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-app-push-receivers", isVariadic: true },
            },
            {
              name: "--azure-function-receivers",
              description:
                'The list of azure function receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-function-receivers", isVariadic: true },
            },
            changeReference,
            {
              name: "--email-receivers",
              description:
                'The list of email receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "email-receivers", isVariadic: true },
            },
            {
              name: "--enabled",
              description:
                "Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications",
              args: {
                name: "enabled",
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
              name: "--event-hub-receivers",
              description:
                'The list of event hub receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "event-hub-receivers", isVariadic: true },
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
              name: ["--group-short-name", "--short-name"],
              description:
                "The short name of the action group. This will be used in SMS messages",
              args: { name: "group-short-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--incident-receivers",
              description:
                'The list of incident receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "incident-receivers", isVariadic: true },
            },
            {
              name: "--itsm-receivers",
              description:
                'The list of ITSM receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "itsm-receivers", isVariadic: true },
            },
            {
              name: "--logic-app-receivers",
              description:
                'The list of logic app receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "logic-app-receivers", isVariadic: true },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: ["--remove-action", "-r"],
              description:
                'Remove receivers from the action group. Accept space-separated list of receiver names. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "remove-action", isVariadic: true },
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
              name: "--sms-receivers",
              description:
                'The list of SMS receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sms-receivers", isVariadic: true },
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--voice-receivers",
              description:
                'The list of voice receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "voice-receivers", isVariadic: true },
            },
            {
              name: "--webhook-receivers",
              description:
                'The list of webhook receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "webhook-receivers", isVariadic: true },
            },
          ],
        },
        {
          name: "wait",
          description: "Place the CLI in a waiting state",
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
              name: ["--name", "-n"],
              description: "The name of the action group. Required",
              args: { name: "name" },
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
          name: "identity",
          description: "Manage identities of the action-group",
          subcommands: [
            {
              name: "assign",
              description: "Assign the user or system managed identities",
              options: [
                {
                  name: ["--action-group-name", "--name", "-n"],
                  description: "The name of the action group",
                  args: { name: "action-group-name" },
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
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Set the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove the user or system managed identities",
              options: [
                {
                  name: ["--action-group-name", "--name", "-n"],
                  description: "The name of the action group",
                  args: { name: "action-group-name" },
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
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Set the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of managed identities",
              options: [
                {
                  name: ["--action-group-name", "--name", "-n"],
                  description: "The name of the action group",
                  args: { name: "action-group-name" },
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
          name: "test-notifications",
          description: "Manage action groups test-notifications",
          subcommands: [
            {
              name: "create",
              description: "Create an action group test-notifications",
              options: [
                {
                  name: ["--action-group-name", "--action-group"],
                  description: "The name of the action group",
                  args: { name: "action-group-name" },
                  isRequired: true,
                },
                {
                  name: "--alert-type",
                  description:
                    "The value of the supported alert type. Supported alert type values are: servicehealth, metricstaticthreshold, metricsdynamicthreshold, logalertv2, smartalert, webtestalert, logalertv1numresult, logalertv1metricmeasurement, resourcehealth, activitylog, budget",
                  args: { name: "alert-type" },
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
                  name: ["--add-actions", "--add-action", "-a"],
                  description:
                    "Add receivers to the action group. Usage: --add-action TYPE NAME [ARG ...] Email: Format: --add-action email NAME EMAIL_ADDRESS [usecommonalertschema] Example: --add-action email bob bob@contoso.com SMS: Format: --add-action sms NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action sms charli 1 5551234567 Webhook: Format: --add-action webhook NAME URI [useaadauth OBJECT_ID IDENTIFIER URI] [usecommonalertschema] Example: --add-action https://www.contoso.com/alert useaadauth testobj http://identifier usecommonalertschema Arm Role: Format: --add-action armrole NAME ROLE_ID [usecommonalertschema] Example: --add-action armole owner_role 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 Azure App Push: Format: --add-action azureapppush NAME EMAIL_ADDRESS Example: --add-action azureapppush test_apppush bob@contoso.com ITSM: Format: --add-action itsm NAME WORKSPACE_ID CONNECTION_ID TICKET_CONFIGURATION REGION Example: --add-action itsm test_itsm test_workspace test_conn ticket_blob useast Automation runbook: Format: --add-action automationrunbook NAME AUTOMATION_ACCOUNT_ID RUNBOOK_NAME WEBHOOK_RESOURCE_ID SERVICE_URI [isglobalrunbook] [usecommonalertschema] Example: --add-action automationrunbook test_runbook test_acc test_book test_webhook test_rsrc http://example.com isglobalrunbook usecommonalertschema Voice: Format: --add-action voice NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action voice charli 1 4441234567 Logic App: Format: --add-action logicapp NAME RESOURCE_ID CALLBACK_URL [usecommonalertschema] Example: --add-action logicapp test_logicapp test_rsrc http://callback Azure Function: Format: --add-action azurefunction NAME FUNCTION_APP_RESOURCE_ID FUNCTION_NAME HTTP_TRIGGER_URL [usecommonalertschema] Example: --add-action azurefunction test_function test_rsrc test_func http://trigger usecommonalertschema Event Hub: Format: --action eventhub NAME SUBSCRIPTION_ID EVENT_HUB_NAME_SPACE EVENT_HUB_NAME [usecommonalertschema] Example: --action eventhub test_eventhub 5def922a-3ed4-49c1-b9fd-05ec533819a3 eventhubNameSpace testEventHubName usecommonalertschema Multiple actions can be specified by using more than one --add-action argument. 'useaadauth', 'isglobalrunbook' and 'usecommonalertschema' are optional arguements that only need to be passed to set the respective parameter to True. If the 'useaadauth' argument is passed, then the OBJECT_ID and IDENTIFIER_URI values are required as well. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "add-actions", isVariadic: true },
                },
                changeReference,
                {
                  name: "--incident-receivers",
                  description:
                    'The list of incident receivers that are part of this action group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "incident-receivers", isVariadic: true },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "activity-log",
      description: "Manage activity logs",
      subcommands: [
        {
          name: "list",
          description: "List and query activity log events",
          options: [
            {
              name: "--caller",
              description:
                "Caller to query for, such as an e-mail address or service principal ID",
              args: { name: "caller" },
            },
            {
              name: "--correlation-id",
              description: "Correlation ID to query",
              args: { name: "correlation-id" },
            },
            {
              name: "--end-time",
              description:
                "End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "end-time", isVariadic: true },
            },
            {
              name: "--max-events",
              description: "Maximum number of records to return",
              args: { name: "max-events" },
            },
            {
              name: "--namespace",
              description: "Resource provider namespace",
              args: { name: "namespace" },
            },
            {
              name: "--offset",
              description: "Time offset of the query range, in ##d##h format",
              args: { name: "offset" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-id",
              description: "ARM ID of a resource",
              args: { name: "resource-id" },
            },
            {
              name: "--select",
              description: "Space-separated list of properties to return",
              args: {
                name: "select",
                suggestions: [
                  "authorization",
                  "caller",
                  "category",
                  "claims",
                  "correlationId",
                  "description",
                  "eventDataId",
                  "eventName",
                  "eventTimestamp",
                  "httpRequest",
                  "id",
                  "level",
                  "operationId",
                  "operationName",
                  "properties",
                  "resourceGroupName",
                  "resourceId",
                  "resourceProviderName",
                  "resourceType",
                  "status",
                  "subStatus",
                  "submissionTimestamp",
                  "subscriptionId",
                  "tenantId",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--start-time",
              description:
                "Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time", isVariadic: true },
            },
            {
              name: "--status",
              description: "Status to query for (ex: Failed)",
              args: { name: "status" },
            },
          ],
        },
        {
          name: "list-categories",
          description:
            "List the list of available event categories supported in the Activity Logs Service",
          options: [acquirePolicyToken, changeReference],
        },
        {
          name: "alert",
          description: "Manage activity log alert rules",
          subcommands: [
            {
              name: "create",
              description: "Create a default activity log alert rule",
              options: [
                {
                  name: ["--activity-log-alert-name", "--name", "-n"],
                  description: "The name of the activity log alert",
                  args: { name: "activity-log-alert-name" },
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
                  name: ["--action-group", "-a"],
                  description:
                    'Add an action group. Accepts space-separated action group identifiers. The identifier can be the action group\'s name or its resource ID. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "action-group", isVariadic: true },
                },
                {
                  name: "--all-of",
                  description:
                    'The list of Activity Log Alert rule conditions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "all-of", isVariadic: true },
                },
                changeReference,
                {
                  name: ["--condition", "-c"],
                  description:
                    "The condition that will cause the alert rule to activate. The format is FIELD=VALUE[ and FIELD=VALUE...] The possible values for the field are 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "condition", isVariadic: true },
                },
                {
                  name: "--description",
                  description: "A description of this Activity Log Alert rule",
                  args: { name: "description" },
                },
                {
                  name: "--disable",
                  description:
                    "Disable the activity log alert rule after it is created",
                  args: {
                    name: "disable",
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
                  name: ["--scope", "-s"],
                  description:
                    'A list of strings that will be used as prefixes. The alert rule will only apply to activity logs with resourceIDs that fall under one of these prefixes. If not provided, the subscriptionId will be used. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "scope", isVariadic: true },
                },
                {
                  name: "--tags",
                  description:
                    'The tags of the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: ["--webhook-properties", "-w"],
                  description:
                    "Space-separated webhook properties in 'key[=value]' format. These properties are associated with the action groups added in this command. For any webhook receiver in these action group, this data is appended to the webhook payload. To attach different webhook properties to different action groups, add the action groups in separate update-action commands. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "webhook-properties", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an activity log alert",
              options: [
                acquirePolicyToken,
                {
                  name: ["--activity-log-alert-name", "--name", "-n"],
                  description: "The name of the activity log alert",
                  args: { name: "activity-log-alert-name" },
                },
                changeReference,
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
              name: "list",
              description:
                "List activity log alert rules under a resource group or the current subscription",
              options: [
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
              description: "Get an activity log alert",
              options: [
                {
                  name: ["--activity-log-alert-name", "--name", "-n"],
                  description: "The name of the activity log alert",
                  args: { name: "activity-log-alert-name" },
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
                "Update a new activity log alert or update an existing one",
              options: [
                acquirePolicyToken,
                {
                  name: ["--activity-log-alert-name", "--name", "-n"],
                  description: "The name of the activity log alert",
                  args: { name: "activity-log-alert-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--all-of",
                  description:
                    'The list of Activity Log Alert rule conditions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "all-of", isVariadic: true },
                },
                changeReference,
                {
                  name: ["--condition", "-c"],
                  description:
                    "The condition that will cause the alert rule to activate. The format is FIELD=VALUE[ and FIELD=VALUE...] The possible values for the field are 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "condition", isVariadic: true },
                },
                {
                  name: "--description",
                  description: "A description of this Activity Log Alert rule",
                  args: { name: "description" },
                },
                {
                  name: "--enabled",
                  description:
                    "Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated",
                  args: {
                    name: "enabled",
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
                  name: "--tags",
                  description:
                    'The tags of the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
              ],
            },
            {
              name: "action-group",
              description: "Manage action groups for activity log alert rules",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add action groups to this activity log alert rule. It can also be used to overwrite existing webhook properties of particular action groups",
                  options: [
                    {
                      name: ["--action-group", "-a"],
                      description:
                        'The names or the resource ids of the action groups to be added. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "action-group", isVariadic: true },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: ["--activity-log-alert-name", "--name", "-n"],
                      description: "The name of the activity log alert",
                      args: { name: "activity-log-alert-name" },
                    },
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
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                      args: { name: "remove", isVariadic: true },
                    },
                    {
                      name: "--reset",
                      description:
                        "Remove all the existing action groups before add new conditions",
                      args: {
                        name: "reset",
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
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                      args: { name: "set", isVariadic: true },
                    },
                    {
                      name: "--strict",
                      description:
                        "Fails the command if an action group to be added will change existing webhook properties",
                      args: {
                        name: "strict",
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
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: ["--webhook-properties", "-w"],
                      description:
                        "Space-separated webhook properties in 'key[=value]' format. These properties are associated with the action groups added in this command. For any webhook receiver in these action group, these data are appended to the webhook payload. To attach different webhook properties to different action groups, add the action groups in separate update-action commands. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                      args: { name: "webhook-properties", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove action groups from this activity log alert rule",
                  options: [
                    {
                      name: ["--action-group", "-a"],
                      description:
                        'The names or the resource ids of the action groups to be added. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "action-group", isVariadic: true },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: ["--activity-log-alert-name", "--name", "-n"],
                      description: "The name of the activity log alert",
                      args: { name: "activity-log-alert-name" },
                    },
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
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
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
              ],
            },
            {
              name: "scope",
              description: "Manage scopes for activity log alert rules",
              subcommands: [
                {
                  name: "add",
                  description: "Add scopes to this activity log alert rule",
                  options: [
                    {
                      name: ["--scope", "-s"],
                      description:
                        'List of scopes to add. Each scope could be a resource ID or a subscription ID. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "scope", isVariadic: true },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: ["--activity-log-alert-name", "--name", "-n"],
                      description: "The name of the activity log alert",
                      args: { name: "activity-log-alert-name" },
                    },
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
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                      args: { name: "remove", isVariadic: true },
                    },
                    {
                      name: "--reset",
                      description:
                        "Remove all the existing action groups before add new conditions",
                      args: {
                        name: "reset",
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
                  name: "remove",
                  description:
                    "Removes scopes from this activity log alert rule",
                  options: [
                    {
                      name: ["--scope", "-s"],
                      description:
                        'The scopes to remove. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "scope", isVariadic: true },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: ["--activity-log-alert-name", "--name", "-n"],
                      description: "The name of the activity log alert",
                      args: { name: "activity-log-alert-name" },
                    },
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
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "autoscale",
      description: "Manage autoscale settings",
      subcommands: [
        {
          name: "create",
          description: "Create new autoscale settings",
          options: [
            {
              name: "--count",
              description:
                "The numer of instances to use. If used with --min/max-count, the default number of instances to use",
              args: { name: "count" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--action", "-a"],
              description: "Add an action to fire when a scaling event occurs",
              args: { name: "action", isVariadic: true },
            },
            changeReference,
            {
              name: "--disabled",
              description: "Create the autoscale settings in a disabled state",
              args: {
                name: "disabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--email-administrator",
              description:
                "Send email to subscription administrator on scaling",
              args: {
                name: "email-administrator",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--email-coadministrators",
              description:
                "Send email to subscription co-administrators on scaling",
              args: {
                name: "email-coadministrators",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--max-count",
              description: "The maximum number of instances",
              args: { name: "max-count" },
            },
            {
              name: "--min-count",
              description: "The minimum number of instances",
              args: { name: "min-count" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the autoscale settings",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--scale-look-ahead-time",
              description:
                "The amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format (for example, 100 days would be P100D)",
              args: { name: "scale-look-ahead-time" },
            },
            {
              name: "--scale-mode",
              description: "The predictive autoscale mode",
              args: {
                name: "scale-mode",
                suggestions: ["Disabled", "Enabled", "ForecastOnly"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an autoscale setting",
          options: [
            acquirePolicyToken,
            {
              name: ["--autoscale-name", "--name", "-n"],
              description: "The autoscale setting name",
              args: { name: "autoscale-name" },
            },
            changeReference,
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
          name: "list",
          description: "Lists the autoscale settings for a resource group",
          options: [
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
          description: "Get an autoscale setting",
          options: [
            {
              name: ["--autoscale-name", "--name", "-n"],
              description: "The autoscale setting name",
              args: { name: "autoscale-name" },
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
          name: "show-predictive-metric",
          description: "Show predictive autoscale metric future data",
          options: [
            {
              name: "--aggregation",
              description:
                "The list of aggregation types (comma separated) to retrieve",
              args: { name: "aggregation" },
              isRequired: true,
            },
            {
              name: "--interval",
              description: "The interval (i.e. timegrain) of the query",
              args: { name: "interval" },
              isRequired: true,
            },
            {
              name: "--metric-name",
              description:
                "The names of the metrics (comma separated) to retrieve. Special case: If a metricname itself has a comma in it then use %2 to indicate it. Eg: 'Metric,Name1' should be **'Metric%2Name1'**",
              args: { name: "metric-name" },
              isRequired: true,
            },
            {
              name: "--metric-namespace",
              description: "Metric namespace to query metric definitions for",
              args: { name: "metric-namespace" },
              isRequired: true,
            },
            {
              name: "--timespan",
              description:
                "The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'",
              args: { name: "timespan" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--autoscale-setting-name",
              description: "The autoscale setting name",
              args: { name: "autoscale-setting-name" },
            },
            changeReference,
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
          description: "Update an autoscale setting",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--add-actions", "--add-action", "-a"],
              description:
                'Add an action to fire when a scaling event occurs. Usage: --add-action TYPE KEY [ARG ...] Email: --add-action email bob@contoso.com ann@contoso.com Webhook: --add-action webhook https://www.contoso.com/alert apiKey=value Webhook: --add-action webhook https://www.contoso.com/alert?apiKey=value Multiple actions can be specified by using more than one --add-action argument. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "add-actions", isVariadic: true },
            },
            {
              name: ["--autoscale-name", "--name", "-n"],
              description: "The autoscale setting name",
              args: { name: "autoscale-name" },
            },
            changeReference,
            {
              name: "--count",
              description:
                "The numer of instances to use. If used with --min/max-count, the default number of instances to use",
              args: { name: "count" },
            },
            {
              name: "--email-administrator",
              description:
                "Send email to subscription administrator on scaling",
              args: {
                name: "email-administrator",
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
              name: "--email-coadministrators",
              description:
                "Send email to subscription co-administrators on scaling",
              args: {
                name: "email-coadministrators",
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
              name: "--enabled",
              description:
                "The enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'",
              args: {
                name: "enabled",
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
              name: "--max-count",
              description: "The maximum number of instances",
              args: { name: "max-count" },
            },
            {
              name: "--min-count",
              description: "The minimum number of instances",
              args: { name: "min-count" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: ["--remove-actions", "--remove-action", "-r"],
              description:
                'Remove one or more actions. Usage: --remove-action TYPE KEY [KEY ...] Email: --remove-action email bob@contoso.com ann@contoso.com Webhook: --remove-action webhook https://contoso.com/alert https://alerts.contoso.com. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "remove-actions", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scale-look-ahead-time",
              description:
                "The amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format (for example, 100 days would be P100D)",
              args: { name: "scale-look-ahead-time" },
            },
            {
              name: "--scale-mode",
              description: "The predictive autoscale mode",
              args: {
                name: "scale-mode",
                suggestions: ["Disabled", "Enabled", "ForecastOnly"],
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
            {
              name: "--tags",
              description:
                'Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "profile",
          description: "Manage autoscaling profiles",
          subcommands: [
            {
              name: "create",
              description: "Create a fixed or recurring autoscale profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--count",
                  description:
                    "The numer of instances to use. If used with --min/max-count, the default number of instances to use",
                  args: { name: "count" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the autoscale profile",
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
                {
                  name: "--timezone",
                  description: "Timezone name",
                  args: { name: "timezone" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--copy-rules",
                  description:
                    "Name of an existing schedule from which to copy the scaling rules for the new schedule",
                  args: { name: "copy-rules" },
                },
                {
                  name: "--end",
                  description:
                    "When the autoscale profile ends. Format depends on the type of profile",
                  args: { name: "end", isVariadic: true },
                },
                {
                  name: "--max-count",
                  description: "The maximum number of instances",
                  args: { name: "max-count" },
                },
                {
                  name: "--min-count",
                  description: "The minimum number of instances",
                  args: { name: "min-count" },
                },
                {
                  name: ["--recurrence", "-r"],
                  description:
                    "When the profile recurs. If omitted, a fixed (non-recurring) profile is created",
                  args: { name: "recurrence", isVariadic: true },
                },
                {
                  name: "--start",
                  description:
                    "When the autoscale profile begins. Format depends on the type of profile",
                  args: { name: "start", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an autoscale profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the autoscale profile",
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
                changeReference,
              ],
            },
            {
              name: "list",
              description: "List autoscale profiles",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
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
              name: "list-timezones",
              description: "Look up time zone information",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--offset",
                  description: "Filter results based on UTC hour offset",
                  args: { name: "offset" },
                },
                {
                  name: ["--search-query", "-q"],
                  description: "Query text to find",
                  args: { name: "search-query" },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of an autoscale profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the autoscale profile",
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
              ],
            },
          ],
        },
        {
          name: "rule",
          description: "Manage autoscale scaling rules",
          subcommands: [
            {
              name: "copy",
              description: "Copy autoscale rules from one profile to another",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--dest-schedule",
                  description: "Name of the profile to copy rules to",
                  args: { name: "dest-schedule" },
                  isRequired: true,
                },
                {
                  name: "--index",
                  description:
                    "Space-separated list of rule indices to copy, or '*' to copy all rules",
                  args: { name: "index", isVariadic: true },
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
                  name: "--source-schedule",
                  description: "Name of the profile to copy rules from",
                  args: { name: "source-schedule" },
                },
              ],
            },
            {
              name: "create",
              description: "Add a new autoscale rule",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--condition",
                  description:
                    "The condition which triggers the scaling action",
                  args: { name: "condition", isVariadic: true },
                  isRequired: true,
                },
                {
                  name: "--scale",
                  description: "The direction and amount to scale",
                  args: { name: "scale", isVariadic: true },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--cooldown",
                  description:
                    "The number of minutes that must elapse before another scaling event can occur",
                  args: { name: "cooldown" },
                },
                {
                  name: "--profile-name",
                  description: "Name of the autoscale profile",
                  args: { name: "profile-name" },
                },
                {
                  name: "--resource",
                  description: "Name or ID of the target resource",
                  args: { name: "resource" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-namespace",
                  description: "Target resource provider namespace",
                  args: { name: "resource-namespace" },
                },
                {
                  name: "--resource-parent",
                  description: "Target resource parent path, if applicable",
                  args: { name: "resource-parent" },
                },
                {
                  name: "--resource-type",
                  description:
                    "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
                  args: { name: "resource-type" },
                },
                {
                  name: "--timegrain",
                  description: "The way metrics are polled across instances",
                  args: { name: "timegrain", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Remove autoscale rules from a profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--index",
                  description:
                    "Space-separated list of rule indices to remove, or '*' to clear all rules",
                  args: { name: "index", isVariadic: true },
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
                  name: "--profile-name",
                  description: "Name of the autoscale profile",
                  args: { name: "profile-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List autoscale rules for a profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
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
                  name: "--profile-name",
                  description: "Name of the autoscale profile",
                  args: { name: "profile-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dashboard",
      description: "Manage Dashboard with Grafana resources",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Dashboard with Grafana resource. This API is idempotent, so user can either create a new dashboard or update an existing dashboard",
          options: [
            {
              name: ["--dashboard-name", "--name", "-n"],
              description: "The name of the Azure Managed Dashboard",
              args: { name: "dashboard-name" },
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
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Dashboard with Grafana resource",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--dashboard-name", "--name", "-n"],
              description: "The name of the Azure Managed Dashboard",
              args: { name: "dashboard-name" },
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all Dashboard with Grafana resources under the specified resource group",
          options: [
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
            "Get the properties of a specific Dashboard with Grafana resource",
          options: [
            {
              name: ["--dashboard-name", "--name", "-n"],
              description: "The name of the Azure Managed Dashboard",
              args: { name: "dashboard-name" },
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
            {
              name: ["--dashboard-name", "--name", "-n"],
              description: "The name of the Azure Managed Dashboard",
              args: { name: "dashboard-name" },
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
      ],
    },
    {
      name: "diagnostic-settings",
      description: "Manage service diagnostic settings",
      subcommands: [
        {
          name: "create",
          description:
            "Create diagnostic settings for the specified resource. For more information, visit: https://learn.microsoft.com/rest/api/monitor/diagnosticsettings/createorupdate#metricsettings",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--event-hub",
              description:
                "Name or ID an event hub. If none is specified, the default event hub will be selected",
              args: { name: "event-hub" },
            },
            {
              name: "--event-hub-rule",
              description: "Name or ID of the event hub authorization rule",
              args: { name: "event-hub-rule" },
            },
            {
              name: "--export-to-resource-specific",
              description:
                "Indicate that the export to LA must be done to a resource specific table, a.k.a. dedicated or fixed schema table, as opposed to the default dynamic schema table called AzureDiagnostics. This argument is effective only when the argument --workspace is also given. Allowed values: false, true",
              args: {
                name: "export-to-resource-specific",
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
              name: "--logs",
              description:
                "JSON encoded list of logs settings. Use '@{file}' to load from a file. For more information, visit: https://learn.microsoft.com/rest/api/monitor/diagnosticsettings/createorupdate#logsettings. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "logs", isVariadic: true },
            },
            {
              name: "--marketplace-partner-id",
              description:
                "The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs",
              args: { name: "marketplace-partner-id" },
            },
            {
              name: "--metrics",
              description:
                'The list of metric settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metrics", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--storage-account",
              description:
                "Name or ID of the storage account to send diagnostic logs to",
              args: { name: "storage-account" },
            },
            {
              name: "--workspace",
              description:
                "Name or ID of the Log Analytics workspace to send diagnostic logs to",
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes existing diagnostic settings for the specified resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Gets the active diagnostic settings list for the specified resource",
          options: [
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the active diagnostic settings for the specified resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "update",
          description: "Update diagnostic settings for the specified resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            changeReference,
            {
              name: "--event-hub",
              description:
                "The name of the event hub. If none is specified, the default event hub will be selected",
              args: { name: "event-hub" },
            },
            {
              name: "--event-hub-rule",
              description:
                "The resource Id for the event hub authorization rule",
              args: { name: "event-hub-rule" },
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
              name: ["--log-analytics-destination-type", "--log-ana-dtype"],
              description:
                "A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: <normalized service identity>_<normalized category name>. Possible values are: Dedicated and null (null is default.)",
              args: { name: "log-analytics-destination-type" },
            },
            {
              name: "--logs",
              description:
                'The list of logs settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "logs", isVariadic: true },
            },
            {
              name: "--marketplace-partner-id",
              description:
                "The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs",
              args: { name: "marketplace-partner-id" },
            },
            {
              name: "--metrics",
              description:
                'The list of metric settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metrics", isVariadic: true },
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
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--service-bus-rule-id",
              description:
                "The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility",
              args: { name: "service-bus-rule-id" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--storage-account-id",
              description:
                "The resource ID of the storage account to which you would like to send Diagnostic Logs",
              args: { name: "storage-account-id" },
            },
            {
              name: "--workspace-id",
              description:
                "The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2",
              args: { name: "workspace-id" },
            },
          ],
        },
        {
          name: "categories",
          description: "Retrieve service diagnostic settings categories",
          subcommands: [
            {
              name: "list",
              description:
                "List the diagnostic settings categories for the specified resource",
              options: [
                {
                  name: "--resource",
                  description: "Name or ID of the target resource",
                  args: { name: "resource" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-namespace",
                  description: "Target resource provider namespace",
                  args: { name: "resource-namespace" },
                },
                {
                  name: "--resource-parent",
                  description: "Target resource parent path, if applicable",
                  args: { name: "resource-parent" },
                },
                {
                  name: "--resource-type",
                  description:
                    "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
                  args: { name: "resource-type" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the diagnostic settings category for the specified resource",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting. Required",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--resource",
                  description: "Name or ID of the target resource",
                  args: { name: "resource" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-namespace",
                  description: "Target resource provider namespace",
                  args: { name: "resource-namespace" },
                },
                {
                  name: "--resource-parent",
                  description: "Target resource parent path, if applicable",
                  args: { name: "resource-parent" },
                },
                {
                  name: "--resource-type",
                  description:
                    "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
                  args: { name: "resource-type" },
                },
              ],
            },
          ],
        },
        {
          name: "subscription",
          description: "Manage diagnostic settings for subscription",
          subcommands: [
            {
              name: "create",
              description:
                "Create subscription diagnostic settings for the specified resource",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--event-hub-auth-rule",
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-auth-rule" },
                },
                {
                  name: "--event-hub-name",
                  description:
                    "The name of the event hub. If none is specified, the default event hub will be selected",
                  args: { name: "event-hub-name" },
                },
                {
                  name: ["--location", "-l"],
                  description: "Location of the resource",
                  args: { name: "location" },
                },
                {
                  name: "--logs",
                  description:
                    "JSON encoded list of logs settings. Use '@{file}' to load from a file. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "logs", isVariadic: true },
                },
                {
                  name: "--service-bus-rule",
                  description:
                    "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resourceID}/authorizationrules/{key name}'",
                  args: { name: "service-bus-rule" },
                },
                {
                  name: "--storage-account",
                  description:
                    "The resource id of the storage account to which you would like to send the Activity Log",
                  args: { name: "storage-account" },
                },
                {
                  name: "--workspace",
                  description: "The resource id of the log analytics workspace",
                  args: { name: "workspace" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes existing subscription diagnostic settings for the specified resource",
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
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
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
                "Gets the active subscription diagnostic settings list for the specified subscriptionId. :keyword callable cls: A custom type or function that will be passed the direct response:return: SubscriptionDiagnosticSettingsResourceCollection or the result of cls(response):rtype: ~$(python-base-namespace).v2017_05_01_preview.models.SubscriptionDiagnosticSettingsResourceCollection:raises ~azure.core.exceptions.HttpResponseError:",
            },
            {
              name: "show",
              description:
                "Gets the active subscription diagnostic settings for the specified resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
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
                "Update subscription diagnostic settings for the specified resource",
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
                  name: "--event-hub-auth-rule",
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-auth-rule" },
                },
                {
                  name: "--event-hub-name",
                  description:
                    "The name of the event hub. If none is specified, the default event hub will be selected",
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--location", "-l"],
                  description: "Location of the resource",
                  args: { name: "location" },
                },
                {
                  name: "--logs",
                  description:
                    "JSON encoded list of logs settings. Use '@{file}' to load from a file. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "logs", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: "--service-bus-rule",
                  description:
                    "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resourceID}/authorizationrules/{key name}'",
                  args: { name: "service-bus-rule" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--storage-account",
                  description:
                    "The resource id of the storage account to which you would like to send the Activity Log",
                  args: { name: "storage-account" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace",
                  description: "The resource id of the log analytics workspace",
                  args: { name: "workspace" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "log-analytics",
      description: "Manage Azure log analytics",
      subcommands: [
        {
          name: "cluster",
          description: "Manage Azure log analytics cluster",
          subcommands: [
            {
              name: "create",
              description: "Create a cluster instance",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the Log Analytics cluster",
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
                  name: "--billing-type",
                  description: "The cluster's billing type",
                  args: {
                    name: "billing-type",
                    suggestions: ["Cluster", "Workspaces"],
                  },
                },
                changeReference,
                {
                  name: ["--identity-type", "--type"],
                  description: "Type of managed service identity",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned,UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: "--key-name",
                  description:
                    "The name of the key associated with the Log Analytics cluster",
                  args: { name: "key-name" },
                },
                {
                  name: "--key-rsa-size",
                  description: "Selected key minimum required size",
                  args: { name: "key-rsa-size" },
                },
                {
                  name: "--key-vault-uri",
                  description:
                    "The Key Vault uri which holds they key associated with the Log Analytics cluster",
                  args: { name: "key-vault-uri" },
                },
                {
                  name: "--key-version",
                  description:
                    "The version of the key associated with the Log Analytics cluster",
                  args: { name: "key-version" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
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
                  name: "--replication-enabled",
                  description:
                    "Specifies whether the replication is enabled or not. When true the cluster is replicate to the specified location",
                  args: {
                    name: "replication-enabled",
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
                  name: "--replication-location",
                  description:
                    "The secondary location of the replication. If replication is being enabled, enabled must be provided",
                  args: { name: "replication-location" },
                },
                {
                  name: "--sku-capacity",
                  description:
                    "The capacity of the SKU. It can be decreased only after 31 days",
                  args: {
                    name: "sku-capacity",
                    suggestions: [
                      "100",
                      "1000",
                      "10000",
                      "200",
                      "2000",
                      "25000",
                      "300",
                      "400",
                      "500",
                      "5000",
                      "50000",
                    ],
                  },
                },
                {
                  name: "--sku-name",
                  description: "The name of the SKU",
                  args: {
                    name: "sku-name",
                    suggestions: ["CapacityReservation"],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--user-assigned",
                  description:
                    "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "user-assigned", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a cluster instance",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the Log Analytics Cluster",
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
                "List all cluster instances in a resource group or in current subscription",
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
              description: "Show the properties of a cluster instance",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the Log Analytics Cluster",
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
              description: "Update a cluster instance",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--billing-type",
                  description: "The cluster's billing type",
                  args: {
                    name: "billing-type",
                    suggestions: ["Cluster", "Workspaces"],
                  },
                },
                changeReference,
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the Log Analytics Cluster",
                  args: { name: "cluster-name" },
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
                  name: ["--identity-type", "--type"],
                  description: "Type of managed service identity",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned,UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--key-name",
                  description:
                    "The name of the key associated with the Log Analytics cluster",
                  args: { name: "key-name" },
                },
                {
                  name: "--key-rsa-size",
                  description: "Selected key minimum required size",
                  args: { name: "key-rsa-size" },
                },
                {
                  name: "--key-vault-uri",
                  description:
                    "The Key Vault uri which holds they key associated with the Log Analytics cluster",
                  args: { name: "key-vault-uri" },
                },
                {
                  name: "--key-version",
                  description:
                    "The version of the key associated with the Log Analytics cluster",
                  args: { name: "key-version" },
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
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: "--replication-enabled",
                  description:
                    "Specifies whether the replication is enabled or not. When true the cluster is replicate to the specified location",
                  args: {
                    name: "replication-enabled",
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
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--sku-capacity",
                  description:
                    "The capacity of the SKU. It can be decreased only after 31 days",
                  args: {
                    name: "sku-capacity",
                    suggestions: [
                      "100",
                      "1000",
                      "10000",
                      "200",
                      "2000",
                      "25000",
                      "300",
                      "400",
                      "500",
                      "5000",
                      "50000",
                    ],
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
                  name: "--user-assigned",
                  description:
                    "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "user-assigned", isVariadic: true },
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
                  description: "Name of the Log Analytics Cluster",
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
              name: "identity",
              description: "Manage Identity",
              subcommands: [
                {
                  name: "assign",
                  description: "Assign the user or system managed identities",
                  options: [
                    {
                      name: ["--cluster-name", "--name", "-n"],
                      description: "Name of the Log Analytics Cluster",
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
                      name: ["--mi-system-assigned", "--system-assigned"],
                      description: "Set the system managed identity",
                      args: { name: "mi-system-assigned", isOptional: true },
                    },
                    {
                      name: ["--mi-user-assigned", "--user-assigned"],
                      description:
                        'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: {
                        name: "mi-user-assigned",
                        isOptional: true,
                        isVariadic: true,
                      },
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
                  ],
                },
                {
                  name: "remove",
                  description: "Remove the user or system managed identities",
                  options: [
                    {
                      name: ["--cluster-name", "--name", "-n"],
                      description: "Name of the Log Analytics Cluster",
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
                      name: ["--mi-system-assigned", "--system-assigned"],
                      description: "Set the system managed identity",
                      args: { name: "mi-system-assigned", isOptional: true },
                    },
                    {
                      name: ["--mi-user-assigned", "--user-assigned"],
                      description:
                        'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: {
                        name: "mi-user-assigned",
                        isOptional: true,
                        isVariadic: true,
                      },
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
                  ],
                },
                {
                  name: "show",
                  description: "Show the details of managed identities",
                  options: [
                    {
                      name: ["--cluster-name", "--name", "-n"],
                      description: "Name of the Log Analytics Cluster",
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
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition is met",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--cluster-name", "--name", "-n"],
                      description: "Name of the Log Analytics Cluster",
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
          ],
        },
        {
          name: "query-pack",
          description: "Manage Azure log analytics query pack",
          subcommands: [
            {
              name: "create",
              description: "Create a log analytics query pack",
              options: [
                {
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
                  name: ["--location", "-l"],
                  description:
                    "Resource location When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a log analytics query pack",
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
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
              description: "List of all log analytics query packs",
              options: [
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
              description: "Show a log analytics query pack",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
              description: "Update a log analytics query pack",
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
                  name: "--tags",
                  description:
                    'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
              ],
            },
            {
              name: "query",
              description: "Manage the query of log analytics query pack",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a specific query within a log analytics query pack",
                  options: [
                    {
                      name: "--body",
                      description: "Content of the query",
                      args: { name: "body" },
                      isRequired: true,
                    },
                    {
                      name: "--display-name",
                      description:
                        "Unique display name for your query within the query pack",
                      args: { name: "display-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                      isRequired: true,
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                      name: "--categories",
                      description:
                        'The related categories for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "categories", isVariadic: true },
                    },
                    changeReference,
                    {
                      name: "--description",
                      description: "Description of the query",
                      args: { name: "description" },
                    },
                    {
                      name: "--resource-types",
                      description:
                        'The related resource types for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "resource-types", isVariadic: true },
                    },
                    {
                      name: "--solutions",
                      description:
                        'The related Log Analytics solutions for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "solutions", isVariadic: true },
                    },
                    {
                      name: "--tags",
                      description:
                        'Tags associated with the query. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a specific query defined within a log analytics query pack",
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
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                    "List queries defined within a log analytics query pack",
                  options: [
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                      name: "--include-body",
                      description:
                        "Whether or not to return the body of each applicable query. If false, only return the query information. Default: true",
                      args: {
                        name: "include-body",
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
                  name: "search",
                  description:
                    "Search a list of queries defined within a log analytics query pack according to given search properties",
                  options: [
                    acquirePolicyToken,
                    {
                      name: "--categories",
                      description:
                        'The related categories for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "categories", isVariadic: true },
                    },
                    changeReference,
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--include-body",
                      description:
                        "Whether or not to return the body of each applicable query. If false, only return the query information. Default: true",
                      args: {
                        name: "include-body",
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
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--resource-types",
                      description:
                        'The related resource types for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "resource-types", isVariadic: true },
                    },
                    {
                      name: "--solutions",
                      description:
                        'The related Log Analytics solutions for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "solutions", isVariadic: true },
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
                        'Tags associated with the query. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show a specific query defined within a log analytics query pack",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                    "Update a specific query within a log analytics query pack",
                  options: [
                    acquirePolicyToken,
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add", isVariadic: true },
                    },
                    {
                      name: "--body",
                      description: "Content of the query",
                      args: { name: "body" },
                    },
                    {
                      name: "--categories",
                      description:
                        'The related categories for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "categories", isVariadic: true },
                    },
                    changeReference,
                    {
                      name: "--description",
                      description: "Description of the query",
                      args: { name: "description" },
                    },
                    {
                      name: "--display-name",
                      description:
                        "Unique display name for your query within the query pack",
                      args: { name: "display-name" },
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
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                      name: "--resource-types",
                      description:
                        'The related resource types for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "resource-types", isVariadic: true },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                      args: { name: "set", isVariadic: true },
                    },
                    {
                      name: "--solutions",
                      description:
                        'The related Log Analytics solutions for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "solutions", isVariadic: true },
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
                        'Tags associated with the query. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags", isVariadic: true },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "workspace",
          description: "Manage Azure log analytics workspace",
          subcommands: [
            {
              name: "create",
              description: "Create a workspace instance",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
                  name: ["--capacity-reservation-level", "--level"],
                  description:
                    "The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com",
                  args: {
                    name: "capacity-reservation-level",
                    suggestions: [
                      "100",
                      "1000",
                      "10000",
                      "200",
                      "2000",
                      "25000",
                      "300",
                      "400",
                      "500",
                      "5000",
                      "50000",
                    ],
                  },
                },
                changeReference,
                {
                  name: ["--identity-type", "--type"],
                  description: "Type of managed service identity",
                  args: {
                    name: "identity-type",
                    suggestions: ["None", "SystemAssigned", "UserAssigned"],
                  },
                },
                {
                  name: "--ingestion-access",
                  description:
                    "The public network access type to access workspace ingestion",
                  args: {
                    name: "ingestion-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
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
                  name: "--query-access",
                  description:
                    "The public network access type to access workspace query",
                  args: {
                    name: "query-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--quota",
                  description:
                    "The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited",
                  args: { name: "quota" },
                },
                {
                  name: "--replication-enabled",
                  description:
                    "Specifies whether the replication is enabled or not. When true, workspace configuration and data is replicated to the specified location. If replication is been enabled, location must be provided",
                  args: {
                    name: "replication-enabled",
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
                  name: "--replication-location",
                  description: "The location of the replication",
                  args: { name: "replication-location" },
                },
                {
                  name: "--retention-time",
                  description:
                    "The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details",
                  args: { name: "retention-time" },
                },
                {
                  name: ["--sku-name", "--sku"],
                  description: "The name of the SKU",
                  args: {
                    name: "sku-name",
                    suggestions: [
                      "CapacityReservation",
                      "Free",
                      "LACluster",
                      "PerGB2018",
                      "PerNode",
                      "Premium",
                      "Standalone",
                      "Standard",
                    ],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--user-assigned",
                  description:
                    "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "user-assigned", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a workspace resource",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--force", "-f"],
                  description:
                    "Deletes the workspace without the recovery option. A workspace that was deleted with this flag cannot be recovered",
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
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
              name: "failback",
              description:
                "Deactivates failover for the specified workspace.The failback operation is asynchronous and can take up to 30 minutes to complete.The status of the operation can be checked using the operationId returned in the response",
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
                  name: ["--workspace-name", "--name"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "failover",
              description:
                "Activates failover for the specified workspace.The specified replication location must match the location of the enabled replication for this workspace.The failover operation is asynchronous and can take up to 30 minutes to complete.The status of the operation can be checked using the operationId returned in the response",
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
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: ["--workspace-name", "--name"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "get-schema",
              description: "Get the schema for a given workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "get-shared-keys",
              description: "Get the shared keys for a workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "list",
              description:
                "Get a list of workspaces under a resource group or a subscription",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "list-available-service-tier",
              description: "List the available service tiers for the workspace",
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
                  name: ["--workspace-name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "list-deleted-workspaces",
              description:
                "Get a list of deleted workspaces that can be recovered in a subscription or a resource group",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "list-link-target",
              description:
                "List a list of workspaces which the current user has administrator privileges and are not associated with an Azure Subscription",
              options: [acquirePolicyToken, changeReference],
            },
            {
              name: "list-management-groups",
              description:
                "Get a list of management groups connected to a workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "list-usages",
              description: "Get a list of usage metrics for a workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "recover",
              description:
                "Recover a workspace in a soft-delete state within 14 days",
              options: [
                {
                  name: ["--workspace-name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
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
              ],
            },
            {
              name: "show",
              description: "Show a workspace instance",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
              description: "Update a workspace instance",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--capacity-reservation-level", "--level"],
                  description:
                    "The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com",
                  args: {
                    name: "capacity-reservation-level",
                    suggestions: [
                      "100",
                      "1000",
                      "10000",
                      "200",
                      "2000",
                      "25000",
                      "300",
                      "400",
                      "500",
                      "5000",
                      "50000",
                    ],
                  },
                },
                changeReference,
                {
                  name: "--data-collection-rule",
                  description:
                    "The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}",
                  args: { name: "data-collection-rule" },
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
                  name: ["--identity-type", "--type"],
                  description: "Type of managed service identity",
                  args: {
                    name: "identity-type",
                    suggestions: ["None", "SystemAssigned", "UserAssigned"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--ingestion-access",
                  description:
                    "The public network access type to access workspace ingestion",
                  args: {
                    name: "ingestion-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
                  name: "--query-access",
                  description:
                    "The public network access type to access workspace query",
                  args: {
                    name: "query-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--quota",
                  description:
                    "The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited",
                  args: { name: "quota" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: "--replication-enabled",
                  description:
                    "Specifies whether the replication is enabled or not. When true, workspace configuration and data is replicated to the specified location. If replication is been enabled, location must be provided",
                  args: {
                    name: "replication-enabled",
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
                  name: "--retention-time",
                  description:
                    "The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details",
                  args: { name: "retention-time" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: ["--sku-name", "--sku"],
                  description: "The name of the SKU",
                  args: {
                    name: "sku-name",
                    suggestions: [
                      "CapacityReservation",
                      "Free",
                      "LACluster",
                      "PerGB2018",
                      "PerNode",
                      "Premium",
                      "Standalone",
                      "Standard",
                    ],
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
                  name: "--user-assigned",
                  description:
                    "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "user-assigned", isVariadic: true },
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
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
              name: "data-export",
              description:
                "Manage data export ruls for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a data export rule for a given workspace",
                  options: [
                    {
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
                      isRequired: true,
                    },
                    {
                      name: "--destination",
                      description:
                        "The destination resource ID. It should be a storage account, an event hub namespace. If event hub namespace is provided without --event-hub-name, event hub would be created for each table automatically",
                      args: { name: "destination" },
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
                      name: ["--tables", "-t"],
                      description:
                        'An array of tables to export. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tables", isVariadic: true },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--enable",
                      description: "Active when enabled",
                      args: {
                        name: "enable",
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
                      name: "--event-hub-name",
                      description:
                        "Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account",
                      args: { name: "event-hub-name" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a data export rule for a given workspace",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
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
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
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
                    "List all data export ruleses for a given workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show a data export rule for a given workspace",
                  options: [
                    {
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
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
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update a data export rule for a given workspace",
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
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
                    },
                    {
                      name: "--destination",
                      description:
                        "The destination resource ID. It should be a storage account, an event hub namespace. If event hub namespace is provided without --event-hub-name, event hub would be created for each table automatically",
                      args: { name: "destination" },
                    },
                    {
                      name: "--enable",
                      description: "Active when enabled",
                      args: {
                        name: "enable",
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
                      name: "--event-hub-name",
                      description:
                        "Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account",
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
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
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
                      name: ["--tables", "-t"],
                      description:
                        'An array of tables to export. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tables", isVariadic: true },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "identity",
              description: "Manage Identity",
              subcommands: [
                {
                  name: "assign",
                  description: "Assign the user or system managed identities",
                  options: [
                    {
                      name: ["--workspace-name", "--name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
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
                      name: ["--mi-system-assigned", "--system-assigned"],
                      description: "Set the system managed identity",
                      args: { name: "mi-system-assigned", isOptional: true },
                    },
                    {
                      name: ["--mi-user-assigned", "--user-assigned"],
                      description:
                        'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: {
                        name: "mi-user-assigned",
                        isOptional: true,
                        isVariadic: true,
                      },
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
                  ],
                },
                {
                  name: "remove",
                  description: "Remove the user or system managed identities",
                  options: [
                    {
                      name: ["--workspace-name", "--name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
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
                      name: ["--mi-system-assigned", "--system-assigned"],
                      description: "Set the system managed identity",
                      args: { name: "mi-system-assigned", isOptional: true },
                    },
                    {
                      name: ["--mi-user-assigned", "--user-assigned"],
                      description:
                        'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: {
                        name: "mi-user-assigned",
                        isOptional: true,
                        isVariadic: true,
                      },
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
                  ],
                },
                {
                  name: "show",
                  description: "Show the details of managed identities",
                  options: [
                    {
                      name: ["--workspace-name", "--name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
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
                      name: ["--workspace-name", "--name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
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
              name: "linked-service",
              description: "Manage linked service for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description: "Create a linked service",
                  options: [
                    {
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
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
                      name: "--resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access",
                      args: { name: "resource-id" },
                    },
                    {
                      name: "--tags",
                      description:
                        'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags", isVariadic: true },
                    },
                    {
                      name: "--write-access-resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access",
                      args: { name: "write-access-resource-id" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a linked service",
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
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description: "Get all the linked services in a workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show the properties of a linked service",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a linked service",
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
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                      name: "--resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access",
                      args: { name: "resource-id" },
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
                      name: "--tags",
                      description:
                        'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags", isVariadic: true },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                    {
                      name: "--write-access-resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access",
                      args: { name: "write-access-resource-id" },
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
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "linked-storage",
              description:
                "Manage linked storage account for log analytics workspace",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add some linked storage accounts with specific data source type for log analytics workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--storage-accounts",
                      description:
                        "List of Name or ID of Azure Storage Account",
                      args: { name: "storage-accounts", isVariadic: true },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create some linked storage accounts for log analytics workspace",
                  options: [
                    {
                      name: ["--data-source-type", "--type"],
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "data-source-type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
                        ],
                      },
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
                      name: "--storage-accounts",
                      description:
                        'List of Name or ID of Azure Storage Account. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "storage-accounts", isVariadic: true },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete all linked storage accounts with specific data source type for log analytics workspace",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--data-source-type", "--type"],
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "data-source-type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
                        ],
                      },
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
                    {
                      name: ["--workspace-name", "-n"],
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
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
                    "List all linked storage accounts for a log analytics workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove some linked storage accounts with specific data source type for log analytics workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--storage-accounts",
                      description:
                        "List of Name or ID of Azure Storage Account",
                      args: { name: "storage-accounts", isVariadic: true },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show all linked storage accounts with specific data source type for a log analytics workspace",
                  options: [
                    {
                      name: ["--data-source-type", "--type"],
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "data-source-type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
                        ],
                      },
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
                    {
                      name: ["--workspace-name", "-n"],
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "pack",
              description:
                "Manage intelligent packs for log analytics workspace",
              subcommands: [
                {
                  name: "disable",
                  description:
                    "Disable an intelligence pack for a given workspace",
                  options: [
                    {
                      name: ["--intelligence-pack-name", "--name", "-n"],
                      description:
                        "The name of the intelligence pack to be enabled",
                      args: { name: "intelligence-pack-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                  ],
                },
                {
                  name: "enable",
                  description:
                    "Enable an intelligence pack for a given workspace",
                  options: [
                    {
                      name: ["--intelligence-pack-name", "--name", "-n"],
                      description:
                        "The name of the intelligence pack to be enabled",
                      args: { name: "intelligence-pack-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                  ],
                },
                {
                  name: "list",
                  description:
                    "List all the intelligence packs possible and whether they are enabled or disabled for a given workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              name: "saved-search",
              description: "Manage saved search for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description: "Create a saved search for a given workspace",
                  options: [
                    {
                      name: "--category",
                      description:
                        "The category of the saved search. This helps the user to find a saved search faster",
                      args: { name: "category" },
                      isRequired: true,
                    },
                    {
                      name: "--display-name",
                      description: "Display name of the saved search",
                      args: { name: "display-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
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
                    {
                      name: ["--saved-query", "-q"],
                      description: "The query expression for the saved search",
                      args: { name: "saved-query" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--func-alias", "--fa"],
                      description:
                        "Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups",
                      args: { name: "func-alias" },
                    },
                    {
                      name: ["--func-param", "--fp"],
                      description:
                        "The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://learn.microsoft.com/azure/kusto/query/functions/user-defined-functions",
                      args: { name: "func-param" },
                    },
                    {
                      name: "--tags",
                      description:
                        "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                      args: {
                        name: "tags",
                        isOptional: true,
                        isVariadic: true,
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a saved search for a given workspace",
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
                      name: ["--saved-search-name", "--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
                      args: { name: "saved-search-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List all saved searches for a given workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show a saved search for a given workspace",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--saved-search-name", "--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
                      args: { name: "saved-search-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a saved search for a given workspace",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
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
                    {
                      name: "--workspace-name",
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: "--category",
                      description:
                        "The category of the saved search. This helps the user to find a saved search faster",
                      args: { name: "category" },
                    },
                    changeReference,
                    {
                      name: "--display-name",
                      description: "Display name of the saved search",
                      args: { name: "display-name" },
                    },
                    {
                      name: ["--func-alias", "--fa"],
                      description:
                        "Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups",
                      args: { name: "func-alias" },
                    },
                    {
                      name: ["--func-param", "--fp"],
                      description:
                        "The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://learn.microsoft.com/azure/kusto/query/functions/user-defined-functions",
                      args: { name: "func-param" },
                    },
                    {
                      name: ["--saved-query", "-q"],
                      description: "The query expression for the saved search",
                      args: { name: "saved-query" },
                    },
                    {
                      name: "--tags",
                      description:
                        "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                      args: {
                        name: "tags",
                        isOptional: true,
                        isVariadic: true,
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "table",
              description: "Manage tables for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a Log Analytics workspace microsoft/custom log table. The table name needs to end with '_CL'",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the table",
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
                    {
                      name: "--workspace-name",
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--columns",
                      description:
                        "A list of table custom columns.Extracts multiple space-separated columns in column_name=column_type format",
                      args: { name: "columns", isVariadic: true },
                    },
                    {
                      name: "--description",
                      description: "Schema description",
                      args: { name: "description" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--plan",
                      description: "The table plan",
                      args: {
                        name: "plan",
                        suggestions: ["Analytics", "Basic"],
                      },
                    },
                    {
                      name: "--retention-time",
                      description:
                        "The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention",
                      args: { name: "retention-time" },
                    },
                    {
                      name: "--total-retention-time",
                      description:
                        "The table total retention in days, between 4 and 2556. Setting this property to -1 will default to table retention",
                      args: { name: "total-retention-time" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a Log Analytics workspace table",
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
                      name: ["--table-name", "--name", "-n"],
                      description: "The name of the table",
                      args: { name: "table-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
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
                    "List all the tables for the given Log Analytics workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "migrate",
                  description:
                    "Migrate a Log Analytics table from support of the Data Collector API and Custom Fields features to support of Data Collection Rule-based Custom Logs",
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
                      name: "--table-name",
                      description: "The name of the table",
                      args: { name: "table-name" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get a Log Analytics workspace table",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--table-name", "--name", "-n"],
                      description: "The name of the table",
                      args: { name: "table-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update the properties of a Log Analytics workspace table",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the table",
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
                    {
                      name: "--workspace-name",
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--columns",
                      description:
                        "A list of table custom columns.Extracts multiple space-separated columns in column_name=column_type format",
                      args: { name: "columns", isVariadic: true },
                    },
                    {
                      name: "--description",
                      description: "Table description",
                      args: { name: "description" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--plan",
                      description: "The table plan",
                      args: {
                        name: "plan",
                        suggestions: ["Analytics", "Basic"],
                      },
                    },
                    {
                      name: "--retention-time",
                      description:
                        "The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention",
                      args: { name: "retention-time" },
                    },
                    {
                      name: "--total-retention-time",
                      description:
                        "The table total retention in days, between 4 and 2556. Setting this property to -1 will default to table retention",
                      args: { name: "total-retention-time" },
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
                      name: ["--table-name", "--name", "-n"],
                      description: "The name of the table",
                      args: { name: "table-name" },
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
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "restore",
                  description:
                    "Manage tables for log analytics workspace restore logs table",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a Log Analytics workspace restore logs table. The table name needs to end with '_RST'",
                      options: [
                        {
                          name: "--end-restore-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: { name: "end-restore-time", isVariadic: true },
                          isRequired: true,
                        },
                        {
                          name: ["--name", "-n"],
                          description:
                            "Name of the table. The table name needs to end with _RST",
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
                        {
                          name: "--restore-source-table",
                          description: "The table to restore data from",
                          args: { name: "restore-source-table" },
                          isRequired: true,
                        },
                        {
                          name: "--start-restore-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: {
                            name: "start-restore-time",
                            isVariadic: true,
                          },
                          isRequired: true,
                        },
                        {
                          name: "--workspace-name",
                          description: "Name of the Log Analytics Workspace",
                          args: { name: "workspace-name" },
                          isRequired: true,
                        },
                        acquirePolicyToken,
                        changeReference,
                        {
                          name: "--no-wait",
                          description:
                            "Do not wait for the long-running operation to finish",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "search-job",
                  description:
                    "Manage tables for log analytics workspace search results table",
                  subcommands: [
                    {
                      name: "cancel",
                      description:
                        "Cancel a log analytics workspace search results table query run",
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
                          name: ["--table-name", "--name", "-n"],
                          description: "The name of the table",
                          args: { name: "table-name" },
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
                          name: "--workspace-name",
                          description: "The name of the workspace",
                          args: { name: "workspace-name" },
                        },
                      ],
                    },
                    {
                      name: "create",
                      description:
                        "Create a Log Analytics workspace search results table. The table name needs to end with '_SRCH'",
                      options: [
                        {
                          name: "--end-search-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: { name: "end-search-time", isVariadic: true },
                          isRequired: true,
                        },
                        {
                          name: ["--name", "-n"],
                          description:
                            "Name of the table. The table name needs to end with _SRCH",
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
                        {
                          name: "--search-query",
                          description: "Search job query",
                          args: { name: "search-query" },
                          isRequired: true,
                        },
                        {
                          name: "--start-search-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: { name: "start-search-time", isVariadic: true },
                          isRequired: true,
                        },
                        {
                          name: "--workspace-name",
                          description: "Name of the Log Analytics Workspace",
                          args: { name: "workspace-name" },
                          isRequired: true,
                        },
                        acquirePolicyToken,
                        changeReference,
                        {
                          name: "--limit",
                          description:
                            "Limit the search job to return up to specified number of rows",
                          args: { name: "limit" },
                        },
                        {
                          name: "--no-wait",
                          description:
                            "Do not wait for the long-running operation to finish",
                        },
                        {
                          name: "--retention-time",
                          description:
                            "The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention",
                          args: { name: "retention-time" },
                        },
                        {
                          name: "--total-retention-time",
                          description:
                            "The table total retention in days, between 4 and 2556. Setting this property to -1 will default to table retention",
                          args: { name: "total-retention-time" },
                        },
                      ],
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
      name: "log-profiles",
      description: "Manage log profiles",
      subcommands: [
        {
          name: "create",
          description: "Create a log profile in Azure Monitoring REST API",
          options: [
            {
              name: "--categories",
              description:
                "Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.' Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "categories", isVariadic: true },
              isRequired: true,
            },
            {
              name: "--days",
              description:
                "The number of days for the retention in days. A value of 0 will retain the events indefinitely",
              args: { name: "days" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Whether the retention policy is enabled. Allowed values: false, true",
              args: {
                name: "enabled",
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
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--locations",
              description:
                'Space-separated list of regions for which Activity Log events should be stored. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "locations", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--service-bus-rule-id",
              description:
                "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'",
              args: { name: "service-bus-rule-id" },
            },
            {
              name: "--storage-account-id",
              description:
                "The resource id of the storage account to which you would like to send the Activity Log",
              args: { name: "storage-account-id" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the log profile",
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
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        { name: "list", description: "List the log profiles" },
        {
          name: "show",
          description: "Get the log profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
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
          description: "Update a log profile in Azure Monitoring REST API",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--categories",
              description:
                "Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.' Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "categories", isVariadic: true },
            },
            changeReference,
            {
              name: "--days",
              description:
                "The number of days for the retention in days. A value of 0 will retain the events indefinitely",
              args: { name: "days" },
            },
            {
              name: "--enabled",
              description:
                "Whether the retention policy is enabled. Allowed values: false, true",
              args: {
                name: "enabled",
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
              name: "--locations",
              description:
                'Space-separated list of regions for which Activity Log events should be stored. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "locations", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--service-bus-rule-id",
              description:
                "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'",
              args: { name: "service-bus-rule-id" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--storage-account-id",
              description:
                "The resource id of the storage account to which you would like to send the Activity Log",
              args: { name: "storage-account-id" },
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
      ],
    },
    {
      name: "metrics",
      description: "View Azure resource metrics",
      subcommands: [
        {
          name: "list",
          description: "List the metric values for a resource",
          options: [
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: "--aggregation",
              description:
                "The list of aggregation types (space-separated) to retrieve",
              args: {
                name: "aggregation",
                suggestions: [
                  "Average",
                  "Count",
                  "Maximum",
                  "Minimum",
                  "None",
                  "Total",
                ],
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--dimension",
              description:
                "The list of dimensions (space-separated) the metrics are queried into",
              args: { name: "dimension", isOptional: true, isVariadic: true },
            },
            {
              name: "--end-time",
              description:
                "End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "end-time", isVariadic: true },
            },
            {
              name: "--filter",
              description:
                "A string used to reduce the set of metric data returned. eg. \"BlobType eq '*'\"",
              args: { name: "filter" },
            },
            {
              name: "--interval",
              description:
                "The interval over which to aggregate metrics, in ##h##m format",
              args: { name: "interval" },
            },
            {
              name: "--metadata",
              description: "Returns the metadata values instead of metric data",
            },
            {
              name: "--metrics",
              description: "Space-separated list of metric names to retrieve",
              args: { name: "metrics", isVariadic: true },
            },
            {
              name: "--namespace",
              description: "Namespace to query metric definitions for",
              args: { name: "namespace" },
            },
            {
              name: "--offset",
              description: "Time offset of the query range, in ##d##h format",
              args: { name: "offset" },
            },
            {
              name: "--orderby",
              description:
                "Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc",
              args: { name: "orderby" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--start-time",
              description:
                "Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time", isVariadic: true },
            },
            {
              name: "--top",
              description: "Max number of records to retrieve",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-definitions",
          description: "List the metric definitions for the resource",
          options: [
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--namespace",
              description: "Namespace to query metric definitions for",
              args: { name: "namespace" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list-namespaces",
          description: "List the metric namespaces for the resource",
          options: [
            {
              name: "--resource-uri",
              description: "The identifier of the resource",
              args: { name: "resource-uri" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--start-time",
              description:
                "Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time", isVariadic: true },
            },
          ],
        },
        {
          name: "list-sub",
          description:
            "Lists the metric data for a subscription. Parameters can be specified on the body",
          options: [
            {
              name: "--region",
              description: "The region where the metrics you want reside",
              args: { name: "region" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--aggregation",
              description:
                "The list of aggregation types (comma separated) to retrieve",
              args: { name: "aggregation" },
            },
            {
              name: "--auto-adjust-timegrain",
              description:
                "When set to true, if the timespan passed in is not supported by this metric, the API will return the result using the closest supported timespan. When set to false, an error is returned for invalid timespan parameters. Defaults to false",
              args: {
                name: "auto-adjust-timegrain",
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
            changeReference,
            {
              name: "--filter",
              description:
                "The **$filter** is used to reduce the set of metric data returned.<br>Example:<br>Metric contains metadata A, B and C.<br>- Return all time series of C where A = a1 and B = b1 or b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>- Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B = ‘b2’**<br>This is invalid because the logical or operator cannot separate two different metadata names.<br>- Return all time series where A = a1, B = b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>- Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**",
              args: { name: "filter" },
            },
            {
              name: "--interval",
              description:
                "The interval (i.e. timegrain) of the query in ISO 8601 duration format. Defaults to PT1M. Special case for 'FULL' value that returns single datapoint for entire time span requested. *Examples: PT15M, PT1H, P1D, FULL*",
              args: { name: "interval" },
            },
            {
              name: "--metricnames",
              description:
                "The names of the metrics (comma separated) to retrieve",
              args: { name: "metricnames" },
            },
            {
              name: "--metricnamespace",
              description: "Metric namespace where the metrics you want reside",
              args: { name: "metricnamespace" },
            },
            {
              name: "--order-by",
              description:
                "The aggregation to use for sorting results and the direction of the sort. Only one order can be specified. Examples: sum asc",
              args: { name: "order-by" },
            },
            {
              name: "--result-type",
              description:
                "Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details",
              args: { name: "result-type", suggestions: ["Data", "Metadata"] },
            },
            {
              name: "--roll-up-by",
              description:
                "Dimension name(s) to rollup results by. For example if you only want to see metric values with a filter like 'City eq Seattle or City eq Tacoma' but don't want to see separate values for each city, you can specify 'RollUpBy=City' to see the results for Seattle and Tacoma rolled up into one timeseries",
              args: { name: "roll-up-by" },
            },
            {
              name: "--timespan",
              description:
                "The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'",
              args: { name: "timespan" },
            },
            {
              name: "--top",
              description:
                "The maximum number of records to retrieve. Valid only if $filter is specified. Defaults to 10",
              args: { name: "top" },
            },
            {
              name: "--validate-dimensions",
              description:
                "When set to false, invalid filter parameter values will be ignored. When set to true, an error is returned for invalid filter parameters. Defaults to true",
              args: {
                name: "validate-dimensions",
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
          name: "list-sub-definitions",
          description: "List the metric definitions for the subscription",
          options: [
            {
              name: "--region",
              description: "The region where the metrics you want reside",
              args: { name: "region" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--metricnamespace",
              description: "Metric namespace where the metrics you want reside",
              args: { name: "metricnamespace" },
            },
          ],
        },
        {
          name: "alert",
          description: "Manage near-realtime metric alert rules",
          subcommands: [
            {
              name: "create",
              description: "Create a metric-based alert rule",
              options: [
                {
                  name: "--condition",
                  description:
                    "The condition which triggers the rule. It can be created by 'az monitor metrics alert condition create' command",
                  args: { name: "condition", isVariadic: true },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the alert rule",
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
                {
                  name: "--scopes",
                  description:
                    "Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location",
                  args: { name: "scopes", isVariadic: true },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--action", "-a"],
                  description:
                    "Add an action group and optional webhook properties to fire when the alert is triggered",
                  args: { name: "action", isVariadic: true },
                },
                {
                  name: "--auto-mitigate",
                  description: "Automatically resolve the alert",
                  args: {
                    name: "auto-mitigate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                changeReference,
                {
                  name: "--description",
                  description: "Free-text description of the rule",
                  args: { name: "description" },
                },
                {
                  name: "--disabled",
                  description: "Create the rule in a disabled state",
                  args: {
                    name: "disabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--evaluation-frequency",
                  description:
                    'Frequency with which to evaluate the rule in "##h##m##s" format',
                  args: { name: "evaluation-frequency" },
                },
                {
                  name: ["--target-resource-region", "--region"],
                  description:
                    "The region of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription",
                  args: { name: "target-resource-region" },
                },
                {
                  name: "--severity",
                  description:
                    "Severity of the alert from 0 (critical) to 4 (verbose)",
                  args: { name: "severity" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: ["--target-resource-type", "--type"],
                  description:
                    "The resource type of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription",
                  args: { name: "target-resource-type" },
                },
                {
                  name: "--window-size",
                  description:
                    'Time over which to aggregate metrics in "##h##m##s" format',
                  args: { name: "window-size" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a metrics-based alert rule",
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
                  name: ["--name", "-n"],
                  description: "Name of the alert rule",
                  args: { name: "name" },
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
              description: "List metric-based alert rules",
              options: [
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
              description: "Show a metrics-based alert rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the alert rule",
                  args: { name: "name" },
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
              description: "Update a metric-based alert rule",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--add-actions", "--add-action"],
                  description:
                    'Add an action group and optional webhook properties to fire when the alert is triggered. Usage: --add-action ACTION_GROUP_NAME_OR_ID [KEY=VAL [KEY=VAL ...]] Multiple action groups can be specified by using more than one --add-action argument. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "add-actions", isVariadic: true },
                },
                {
                  name: ["--add-conditions", "--add-condition"],
                  description:
                    "Add a condition which triggers the rule. Usage: --add-condition {avg,min,max,total,count} [NAMESPACE.]METRIC [{=,!=,>,>=,<,<=} THRESHOLD] [{>,><,<} dynamic SENSITIVITY VIOLATIONS of EVALUATIONS [since DATETIME]] [where DIMENSION {includes,excludes} VALUE [or VALUE ...] [and DIMENSION {includes,excludes} VALUE [or VALUE ...] ...]] Sensitivity can be 'low', 'medium', 'high'. Violations can be the number of violations to trigger an alert. It should be smaller or equal to evaluation. Evaluations can be the number of evaluation periods for dynamic threshold. Datetime can be the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format). Dimensions can be queried by adding the 'where' keyword and multiple dimensions can be queried by combining them with the 'and' keyword. Values for METRIC, DIMENSION and appropriate THRESHOLD values can be obtained from az monitor metrics list-definitions command. Due to server limitation, when an alert rule contains multiple criterias, the use of dimensions is limited to one value per dimension within each criterion. Multiple conditions can be specified by using more than one --add-condition argument. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "add-conditions", isVariadic: true },
                },
                {
                  name: "--auto-mitigate",
                  description: "Automatically resolve the alert",
                  args: {
                    name: "auto-mitigate",
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
                changeReference,
                {
                  name: "--description",
                  description: "Free-text description of the rule",
                  args: { name: "description" },
                },
                {
                  name: "--enabled",
                  description: "Whether the metric alert rule is enabled",
                  args: {
                    name: "enabled",
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
                  name: "--evaluation-frequency",
                  description:
                    "Frequency with which to evaluate the rule in ##h##m##s format",
                  args: { name: "evaluation-frequency" },
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
                  name: ["--name", "-n"],
                  description: "Name of the alert rule",
                  args: { name: "name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: "--remove-actions",
                  description:
                    'Space-separated list of action group names to remove. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "remove-actions", isVariadic: true },
                },
                {
                  name: "--remove-conditions",
                  description:
                    'Space-separated list of condition names to remove. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "remove-conditions", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    'Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "scopes", isVariadic: true },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--severity",
                  description:
                    "Severity of the alert from 0 (critical) to 4 (verbose)",
                  args: { name: "severity" },
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
                    'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--window-size",
                  description:
                    "Time over which to aggregate metrics in ##h##m##s format",
                  args: { name: "window-size" },
                },
              ],
            },
            {
              name: "condition",
              description: "Manage near-realtime metric alert rule conditions",
              subcommands: [
                {
                  name: "create",
                  description: "Build a metric alert rule condition",
                  options: [
                    {
                      name: "--aggregation",
                      description: "Time aggregation",
                      args: {
                        name: "aggregation",
                        suggestions: [
                          "Average",
                          "Count",
                          "Maximum",
                          "Minimum",
                          "Total",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--metric",
                      description: "Name of the metric to base the rule on",
                      args: { name: "metric" },
                      isRequired: true,
                    },
                    {
                      name: ["--operator", "--op"],
                      description:
                        "Operator for static threshold can be 'Equals', 'NotEquals', 'GreaterThan', 'GreaterThanOrEqual', 'LessThan' or 'LessThanOrEqual'. Operator for dynamic threshold can be 'GreaterThan', 'LessThan', 'GreaterOrLessThan'",
                      args: {
                        name: "operator",
                        suggestions: [
                          "Equals",
                          "GreaterOrLessThan",
                          "GreaterThan",
                          "GreaterThanOrEqual",
                          "LessThan",
                          "LessThanOrEqual",
                          "NotEquals",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--type", "-t"],
                      description: "Type of condition threshold",
                      args: {
                        name: "type",
                        suggestions: ["dynamic", "static"],
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--dimension",
                      description:
                        "Dimension created by 'az monitor metrics alert dimension create'",
                      args: { name: "dimension", isVariadic: true },
                    },
                    {
                      name: "--namespace",
                      description: "Namespace of metric",
                      args: { name: "namespace" },
                    },
                    {
                      name: "--num-periods",
                      description:
                        "The number of evaluation periods for dynamic threshold. Range: 1-6",
                      args: { name: "num-periods" },
                    },
                    {
                      name: "--num-violations",
                      description:
                        "The number of violations to trigger an dynamic alert. Range: 1-6. It should be less than or equal to --num-periods",
                      args: { name: "num-violations" },
                    },
                    {
                      name: "--sensitivity",
                      description: "Alert sensitivity for dynamic threshold",
                      args: {
                        name: "sensitivity",
                        suggestions: ["High", "Low", "Medium"],
                      },
                    },
                    {
                      name: "--since",
                      description:
                        "The date from which to start learning the metric historical data and calculate the dynamic thresholds. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                      args: { name: "since", isVariadic: true },
                    },
                    {
                      name: "--skip-metric-validation",
                      description:
                        "Cause the metric validation to be skipped. This allows to use a metric that has not been emitted yet",
                      args: {
                        name: "skip-metric-validation",
                        suggestions: ["false", "true"],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--threshold",
                      description: "Static threshold value",
                      args: { name: "threshold" },
                    },
                  ],
                },
              ],
            },
            {
              name: "dimension",
              description: "Manage near-realtime metric alert rule dimensions",
              subcommands: [
                {
                  name: "create",
                  description: "Build a metric alert rule dimension",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the dimension",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--value", "-v"],
                      description: "The values to apply on the operation",
                      args: { name: "value", isVariadic: true },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--operator", "--op"],
                      description: "Dimension operator",
                      args: {
                        name: "operator",
                        suggestions: ["Exclude", "Include"],
                      },
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
      name: "private-link-scope",
      description: "Manage monitor private link scope resource",
      subcommands: [
        {
          name: "create",
          description: "Create a private link scope resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
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
            changeReference,
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a monitor private link scope resource",
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
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
              args: { name: "name" },
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
          description: "List all monitor private link scope resources",
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
          description: "Show a monitor private link scope resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
              args: { name: "name" },
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
          description: "Update a monitor private link scope resource",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
              args: { name: "name" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
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
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
              args: { name: "name" },
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
          name: "private-endpoint-connection",
          description:
            "Manage private endpoint connection of a private link scope resource",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection of a private link scope resource",
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
                  description: "Description of private link service connection",
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
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the private endpoint connection associated with the private link scope",
                  args: { name: "name" },
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
              name: "delete",
              description:
                "Delete a private endpoint connection of a private link scope resource",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the private endpoint connection associated with the private link scope",
                  args: { name: "name" },
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                "List all private endpoint connections on a private link scope",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                "Reject a private endpoint connection of a private link scope resource",
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
                  description: "Description of private link service connection",
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
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the private endpoint connection associated with the private link scope",
                  args: { name: "name" },
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
              name: "show",
              description:
                "Show a private endpoint connection of a private link scope resource",
              options: [
                {
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the private endpoint connection associated with the private link scope",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                  name: ["--name", "-n"],
                  description:
                    "Name of the private endpoint connection associated with the private link scope",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
          description:
            "Manage private link resource of a private link scope resource",
          subcommands: [
            {
              name: "list",
              description:
                "List all private link resources of a private link scope resource",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                "Show a private link resource of a private link scope resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private link resource",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
          name: "scoped-resource",
          description:
            "Manage scoped resource of a private link scope resource",
          subcommands: [
            {
              name: "create",
              description:
                "Create a scoped resource for a private link scope resource",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
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
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--linked-resource",
                  description:
                    "ARM resource ID of the linked resource. It should be one of log analytics workspace or application insights component",
                  args: { name: "linked-resource" },
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
              ],
            },
            {
              name: "delete",
              description:
                "Delete a scoped resource of a private link scope resource",
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
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
                  args: { name: "name" },
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                "List all scoped resource of a private link scope resource",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                "Show a scoped resource of a private link scope resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
      ],
    },
    {
      name: "sli",
      description: "Manage Service Level Indicators (SLIs) in Azure Monitor",
      subcommands: [
        {
          name: "create",
          description: "Create an SLI resource",
          options: [
            {
              name: ["--mi-user-assigned", "--user-assigned"],
              description:
                'Set the user managed identities. At least one user-assigned managed identity is required; system-assigned identity is not supported by this service. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "mi-user-assigned",
                isOptional: true,
                isVariadic: true,
              },
              isRequired: true,
            },
            {
              name: "--service-group-name",
              description: "The name of the service group",
              args: { name: "service-group-name" },
              isRequired: true,
            },
            {
              name: "--sli-name",
              description: "Name of the SLI that is given by the user",
              args: { name: "sli-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--destination-amw-accounts", "--amw-accounts"],
              description:
                'Destination AMW accounts. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "destination-amw-accounts", isVariadic: true },
            },
            {
              name: "--baseline-properties",
              description:
                'Defines the SLO baseline associated with the SLI. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "baseline-properties", isVariadic: true },
            },
            {
              name: "--category",
              description:
                "Specifies the category of the SLI, used to classify signals such as Availability and Latency",
              args: {
                name: "category",
                suggestions: ["Availability", "Latency"],
              },
            },
            changeReference,
            {
              name: "--description",
              description:
                "A user-provided description of the SLI, with a maximum length of 1000 characters",
              args: { name: "description" },
            },
            {
              name: "--enable-alert",
              description: "A flag to determine whether alert is enabled",
              args: {
                name: "enable-alert",
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
              name: "--evaluation-type",
              description:
                "Determines how the SLI is evaluated—either based on request counts or time windows",
              args: {
                name: "evaluation-type",
                suggestions: ["RequestBased", "WindowBased"],
              },
            },
            {
              name: "--sli-properties",
              description:
                'Defines the SLI properties associated with the SLI. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sli-properties", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an SLI resource",
          options: [
            {
              name: "--service-group-name",
              description: "The name of the service group",
              args: { name: "service-group-name" },
              isRequired: true,
            },
            {
              name: "--sli-name",
              description: "Name of the SLI that is given by the user",
              args: { name: "sli-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all SLI resources under a parent resource",
          options: [
            {
              name: "--service-group-name",
              description: "The name of the service group",
              args: { name: "service-group-name" },
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
          description: "Get an SLI resource",
          options: [
            {
              name: "--service-group-name",
              description: "The name of the service group",
              args: { name: "service-group-name" },
              isRequired: true,
            },
            {
              name: "--sli-name",
              description: "Name of the SLI that is given by the user",
              args: { name: "sli-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an SLI resource",
          options: [
            {
              name: "--service-group-name",
              description: "The name of the service group",
              args: { name: "service-group-name" },
              isRequired: true,
            },
            {
              name: "--sli-name",
              description: "Name of the SLI that is given by the user",
              args: { name: "sli-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--destination-amw-accounts", "--amw-accounts"],
              description:
                'Destination AMW accounts. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "destination-amw-accounts", isVariadic: true },
            },
            {
              name: "--baseline-properties",
              description:
                'Defines the SLO baseline associated with the SLI. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "baseline-properties", isVariadic: true },
            },
            {
              name: "--category",
              description:
                "Specifies the category of the SLI, used to classify signals such as Availability and Latency",
              args: {
                name: "category",
                suggestions: ["Availability", "Latency"],
              },
            },
            changeReference,
            {
              name: "--description",
              description:
                "A user-provided description of the SLI, with a maximum length of 1000 characters",
              args: { name: "description" },
            },
            {
              name: "--enable-alert",
              description: "A flag to determine whether alert is enabled",
              args: {
                name: "enable-alert",
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
              name: "--evaluation-type",
              description:
                "Determines how the SLI is evaluated—either based on request counts or time windows",
              args: {
                name: "evaluation-type",
                suggestions: ["RequestBased", "WindowBased"],
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
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--sli-properties",
              description:
                'Defines the SLI properties associated with the SLI. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sli-properties", isVariadic: true },
            },
          ],
        },
      ],
    },
    {
      name: "trace-association",
      description: "Route distributed traces to an Azure Monitor workspace",
      subcommands: [
        {
          name: "create",
          description:
            "Route the traces of a scope to an Azure Monitor workspace",
          options: [
            {
              name: ["--azure-monitor-workspace", "-w"],
              description:
                "Resource ID of the Azure Monitor workspace that receives the traces",
              args: { name: "azure-monitor-workspace" },
              isRequired: true,
            },
            {
              name: "--resource-uri",
              description:
                "Resource ID of an Application Insights component, a resource group or a subscription",
              args: { name: "resource-uri" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--trace-metrics",
              description:
                "Trace-derived metrics if the workspace has no trace container yet. Default: Enabled",
              args: {
                name: "trace-metrics",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--trace-retention-days",
              description:
                "Days to keep traces, from 4 to 730, if the workspace has no trace container yet. Default: 30",
              args: { name: "trace-retention-days" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the association of a scope",
          options: [
            {
              name: "--resource-uri",
              description:
                "Resource ID of an Application Insights component, a resource group or a subscription",
              args: { name: "resource-uri" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the associations that apply to a scope, including those of its resource group and subscription",
          options: [
            {
              name: "--resource-uri",
              description:
                "Resource ID of an Application Insights component, a resource group or a subscription",
              args: { name: "resource-uri" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the association configured at exactly this scope",
          options: [
            {
              name: "--resource-uri",
              description:
                "Resource ID of an Application Insights component, a resource group or a subscription",
              args: { name: "resource-uri" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
