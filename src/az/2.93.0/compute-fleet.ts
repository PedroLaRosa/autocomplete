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
  name: "compute-fleet",
  description: "Manage for Azure Compute Fleet",
  subcommands: [
    {
      name: "create",
      description: "Create an Azure Compute Fleet",
      options: [
        {
          name: ["--fleet-name", "--name", "-n"],
          description: "The name of the Compute Fleet",
          args: { name: "fleet-name" },
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
          name: ["--additional-locations-profile", "--alp"],
          description:
            'Represents the configuration for additional locations where Fleet resources may be deployed. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "additional-locations-profile", isVariadic: true },
        },
        {
          name: "--capacity-type",
          description:
            "Specifies capacity type for Fleet Regular and Spot priority profiles. capacityType is an immutable property. Once set during Fleet creation, it cannot be updated. Specifying different capacity type for Fleet Regular and Spot priority profiles is not allowed",
          args: { name: "capacity-type", suggestions: ["VCpu", "VM"] },
        },
        changeReference,
        {
          name: ["--compute-profile", "--cp"],
          description:
            'Compute Profile to use for running user\'s workloads. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "compute-profile", isVariadic: true },
        },
        {
          name: ["--identity", "-i"],
          description:
            'The managed service identities assigned to this resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "identity", isVariadic: true },
        },
        {
          name: ["--location", "-l"],
          description:
            "The geo-location where the resource lives When not specified, the location of the resource group will be used",
          args: { name: "location" },
        },
        {
          name: "--mode",
          description: "Mode of the Fleet",
          args: { name: "mode", suggestions: ["Launch", "Managed"] },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
          name: ["--plan", "-p"],
          description:
            'Details of the resource plan. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "plan", isVariadic: true },
        },
        {
          name: ["--regular-priority-profile", "--rpp"],
          description:
            'Configuration Options for Regular instances in Compute Fleet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "regular-priority-profile", isVariadic: true },
        },
        {
          name: ["--spot-priority-profile", "--spp"],
          description:
            'Configuration Options for Spot instances in Compute Fleet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "spot-priority-profile", isVariadic: true },
        },
        {
          name: ["--tags", "-t"],
          description:
            'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags", isVariadic: true },
        },
        {
          name: ["--vm-attributes", "--vma"],
          description:
            'Attribute based Fleet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "vm-attributes", isVariadic: true },
        },
        {
          name: "--vm-name-prefix",
          description:
            "VirtualMachine prefix to be used for the virtual machines launched by Fleet. Can be used only with Launch mode",
          args: { name: "vm-name-prefix" },
        },
        {
          name: ["--vm-sizes-profile", "--vmsizeprof"],
          description:
            'List of VM sizes supported for Compute Fleet Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "vm-sizes-profile", isVariadic: true },
        },
        {
          name: ["--zones", "-z"],
          description:
            'Zones in which the Compute Fleet is available Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "zones", isVariadic: true },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an Azure Compute Fleet",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--fleet-name", "--name", "-n"],
          description: "The name of the Compute Fleet",
          args: { name: "fleet-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "List Fleet resources by subscription ID and resource group",
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
      name: "list-vms",
      description: "List VirtualMachine resources of a Launch mode Fleet",
      options: [
        {
          name: "--name",
          description: "The name of the Fleet",
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
          name: "--filter",
          description: "Filter expression to filter the virtual machines",
          args: { name: "filter" },
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
          name: "--skiptoken",
          description:
            "Skip token for pagination. Uses the token from a previous response to fetch the next page of results",
          args: { name: "skiptoken" },
        },
      ],
    },
    {
      name: "list-vmss",
      description: "List VirtualMachineScaleSet resources by Fleet",
      options: [
        {
          name: "--name",
          description: "The name of the Fleet",
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
      description: "Get a Fleet",
      options: [
        {
          name: ["--fleet-name", "--name", "-n"],
          description: "The name of the Compute Fleet",
          args: { name: "fleet-name" },
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
      description: "Update a Fleet",
      options: [
        acquirePolicyToken,
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add", isVariadic: true },
        },
        {
          name: ["--additional-locations-profile", "--alp"],
          description:
            'Represents the configuration for additional locations where Fleet resources may be deployed. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "additional-locations-profile", isVariadic: true },
        },
        {
          name: "--capacity-type",
          description:
            "Specifies capacity type for Fleet Regular and Spot priority profiles. capacityType is an immutable property. Once set during Fleet creation, it cannot be updated. Specifying different capacity type for Fleet Regular and Spot priority profiles is not allowed",
          args: { name: "capacity-type", suggestions: ["VCpu", "VM"] },
        },
        changeReference,
        {
          name: ["--compute-profile", "--cp"],
          description:
            'Compute Profile to use for running user\'s workloads. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "compute-profile", isVariadic: true },
        },
        {
          name: ["--fleet-name", "--name", "-n"],
          description: "The name of the Compute Fleet",
          args: { name: "fleet-name" },
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
          name: ["--identity", "-i"],
          description:
            'The managed service identities assigned to this resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "identity", isVariadic: true },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: "--mode",
          description: "Mode of the Fleet",
          args: { name: "mode", suggestions: ["Launch", "Managed"] },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
          name: ["--plan", "-p"],
          description:
            'Details of the resource plan. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "plan", isVariadic: true },
        },
        {
          name: ["--regular-priority-profile", "--rpp"],
          description:
            'Configuration Options for Regular instances in Compute Fleet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "regular-priority-profile", isVariadic: true },
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
          name: ["--spot-priority-profile", "--spp"],
          description:
            'Configuration Options for Spot instances in Compute Fleet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "spot-priority-profile", isVariadic: true },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: ["--tags", "-t"],
          description:
            'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags", isVariadic: true },
        },
        {
          name: ["--vm-attributes", "--vma"],
          description:
            'Attribute based Fleet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "vm-attributes", isVariadic: true },
        },
        {
          name: "--vm-name-prefix",
          description:
            "VirtualMachine prefix to be used for the virtual machines launched by Fleet. Can be used only with Launch mode",
          args: { name: "vm-name-prefix" },
        },
        {
          name: ["--vm-sizes-profile", "--vmsizeprof"],
          description:
            'List of VM sizes supported for Compute Fleet Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "vm-sizes-profile", isVariadic: true },
        },
        {
          name: ["--zones", "-z"],
          description:
            'Zones in which the Compute Fleet is available Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "zones", isVariadic: true },
        },
      ],
    },
    {
      name: "wait",
      description: "Place the CLI in a waiting state until a condition is met",
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
          name: ["--fleet-name", "--name", "-n"],
          description: "The name of the Compute Fleet",
          args: { name: "fleet-name" },
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
              name: ["--fleet-name", "--name", "-n"],
              description: "The name of the Compute Fleet",
              args: { name: "fleet-name" },
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
              name: ["--fleet-name", "--name", "-n"],
              description: "The name of the Compute Fleet",
              args: { name: "fleet-name" },
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
              name: ["--fleet-name", "--name", "-n"],
              description: "The name of the Compute Fleet",
              args: { name: "fleet-name" },
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
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: ["--fleet-name", "--name", "-n"],
              description: "The name of the Compute Fleet",
              args: { name: "fleet-name" },
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
};

export default completion;
