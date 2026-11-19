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
  name: "databoxedge",
  description: "Manage device with databoxedge",
  subcommands: [
    {
      name: "list-node",
      description:
        "List all the nodes currently configured under this Data Box Edge device",
      options: [
        {
          name: ["--device-name", "-d"],
          description: "The device name",
          args: { name: "device-name" },
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
      name: "list-sku",
      description:
        "List all the available Skus and information related to them",
      options: [
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
      name: "show-job",
      description:
        "Get the details of a specified job on a Data Box Edge/Data Box Gateway device",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--device-name", "-d"],
          description: "The device name",
          args: { name: "device-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description: "The job name",
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
      name: "alert",
      description: "Manage Alert",
      subcommands: [
        {
          name: "list",
          description:
            "List all the alerts for a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
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
          description: "Get an alert by name",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The alert name",
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
      ],
    },
    {
      name: "bandwidth-schedule",
      description: "Manage Bandwidth Schedule",
      subcommands: [
        {
          name: "create",
          description: "Create a bandwidth schedule",
          options: [
            {
              name: "--days",
              description:
                'The days of the week when this schedule is applicable. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "days", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The bandwidth schedule name which needs to be added/updated",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--rate-in-mbps",
              description: "The bandwidth rate in Mbps",
              args: { name: "rate-in-mbps" },
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
              name: "--start",
              description: "The start time of the schedule in UTC",
              args: { name: "start" },
              isRequired: true,
            },
            {
              name: "--stop",
              description: "The stop time of the schedule in UTC",
              args: { name: "stop" },
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
          ],
        },
        {
          name: "delete",
          description: "Delete the specified bandwidth schedule",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The bandwidth schedule name",
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
          description:
            "List all the bandwidth schedules for a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
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
          description: "Get the properties of the specified bandwidth schedule",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The bandwidth schedule name",
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
          description: "Update a bandwidth schedule",
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
              name: "--days",
              description:
                'The days of the week when this schedule is applicable. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "days", isVariadic: true },
            },
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
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
              description: "The bandwidth schedule name",
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
              name: "--rate-in-mbps",
              description: "The bandwidth rate in Mbps",
              args: { name: "rate-in-mbps" },
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
              name: "--start",
              description: "The start time of the schedule in UTC",
              args: { name: "start" },
            },
            {
              name: "--stop",
              description: "The stop time of the schedule in UTC",
              args: { name: "stop" },
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
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
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
              description: "The bandwidth schedule name",
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
      ],
    },
    {
      name: "device",
      description: "Manage device with databoxedge",
      subcommands: [
        {
          name: "create",
          description: "Create a Data Box Edge/Data Box Gateway resource",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
              description:
                "The Description of the Data Box Edge/Gateway device",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description: "The etag for the devices",
              args: { name: "etag" },
            },
            {
              name: "--friendly-name",
              description: "The Data Box Edge/Gateway device name",
              args: { name: "friendly-name" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed. When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--model-description",
              description:
                "The description of the Data Box Edge/Gateway device model",
              args: { name: "model-description" },
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
              name: "--sku",
              description: "SKU name",
              args: {
                name: "sku",
                suggestions: [
                  "EP2_128_1T4_Mx1_W",
                  "EP2_256_2T4_W",
                  "EP2_64_1VPU_W",
                  "Edge",
                  "EdgeMR_Mini",
                  "EdgePR_Base",
                  "EdgePR_Base_UPS",
                  "EdgeP_Base",
                  "EdgeP_High",
                  "GPU",
                  "Gateway",
                  "Management",
                  "RCA_Large",
                  "RCA_Small",
                  "RDC",
                  "TCA_Large",
                  "TCA_Small",
                  "TDC",
                  "TEA_1Node",
                  "TEA_1Node_Heater",
                  "TEA_1Node_UPS",
                  "TEA_1Node_UPS_Heater",
                  "TEA_4Node_Heater",
                  "TEA_4Node_UPS_Heater",
                  "TMA",
                ],
              },
            },
            {
              name: "--status",
              description: "The status of the Data Box Edge/Gateway device",
              args: {
                name: "status",
                suggestions: [
                  "Disconnected",
                  "Maintenance",
                  "NeedsAttention",
                  "Offline",
                  "Online",
                  "PartiallyDisconnected",
                  "ReadyToSetup",
                ],
              },
            },
            {
              name: "--tags",
              description:
                'The list of tags that describe the device. These tags can be used to view and group this device (across resource groups). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Data Box Edge/Data Box Gateway device",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
          name: "download-update",
          description:
            "Downloads the updates on a Data Box Edge/Data Box Gateway device",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
          ],
        },
        {
          name: "get-extended-information",
          description:
            "Gets additional information for the specified Azure Stack Edge/Data Box Gateway device",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--device-name",
              description: "The device name",
              args: { name: "device-name" },
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
          name: "install-update",
          description:
            "Installs the updates on the Data Box Edge/Data Box Gateway device",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
          ],
        },
        {
          name: "list",
          description:
            "List all the Data Box Edge/Data Box Gateway devices in a subscription",
          options: [
            {
              name: "--expand",
              description:
                "Specify $expand=details to populate additional fields related to the resource or Specify $skipToken=token to populate the next page in the list",
              args: { name: "expand" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "scan-for-update",
          description:
            "Scans for updates on a Data Box Edge/Data Box Gateway device",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
          ],
        },
        {
          name: "show",
          description:
            "Get the properties of the Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
          name: "show-update-summary",
          description:
            "Get information about the availability of updates based on the last scan of the device. It also gets information about any ongoing download or install jobs on the device",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
          description: "Update a Data Box Edge/Data Box Gateway resource",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
              name: "--tags",
              description:
                'The tags attached to the Data Box Edge/Gateway resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
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
          name: "share",
          description: "Manage device share",
          subcommands: [
            {
              name: "create",
              description: "Create share on the device",
              options: [
                {
                  name: "--access-protocol",
                  description: "Access protocol to be used by the share",
                  args: {
                    name: "access-protocol",
                    suggestions: ["NFS", "SMB"],
                  },
                  isRequired: true,
                },
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                  isRequired: true,
                },
                {
                  name: "--monitoring-status",
                  description: "Current monitoring status of the share",
                  args: {
                    name: "monitoring-status",
                    suggestions: ["Disabled", "Enabled"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The share name",
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
                  name: "--share-status",
                  description: "Current status of the share",
                  args: {
                    name: "share-status",
                    suggestions: [
                      "NeedsAttention",
                      "OK",
                      "Offline",
                      "Unknown",
                      "Updating",
                    ],
                  },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--azure-container-info",
                  description:
                    'Azure container mapping for the share. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "azure-container-info", isVariadic: true },
                },
                changeReference,
                {
                  name: "--client-access-rights",
                  description:
                    'List of IP addresses and corresponding access rights on the share(required for NFS protocol). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "client-access-rights", isVariadic: true },
                },
                {
                  name: "--data-policy",
                  description: "Data policy of the share",
                  args: {
                    name: "data-policy",
                    suggestions: ["Cloud", "Local"],
                  },
                },
                {
                  name: "--description",
                  description: "Description for the share",
                  args: { name: "description" },
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
                  name: "--refresh-details",
                  description:
                    'Details of the refresh job on this share. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "refresh-details", isVariadic: true },
                },
                {
                  name: "--user-access-rights",
                  description:
                    'Mapping of users and corresponding access rights on the share (required for SMB protocol). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-access-rights", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the share on the Data Box Edge/Data Box Gateway device",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The share name",
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
              description:
                "List all the shares in a Data Box Edge/Data Box Gateway device",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
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
              description: "Show share",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The share name",
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
              description: "Update share on the device",
              options: [
                {
                  name: "--access-protocol",
                  description: "Access protocol to be used by the share",
                  args: {
                    name: "access-protocol",
                    suggestions: ["NFS", "SMB"],
                  },
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--azure-container-info",
                  description:
                    'Azure container mapping for the share. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "azure-container-info", isVariadic: true },
                },
                changeReference,
                {
                  name: "--client-access-rights",
                  description:
                    'List of IP addresses and corresponding access rights on the share(required for NFS protocol). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "client-access-rights", isVariadic: true },
                },
                {
                  name: "--data-policy",
                  description: "Data policy of the share",
                  args: {
                    name: "data-policy",
                    suggestions: ["Cloud", "Local"],
                  },
                },
                {
                  name: "--description",
                  description: "Description for the share",
                  args: { name: "description" },
                },
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
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
                  name: "--monitoring-status",
                  description: "Current monitoring status of the share",
                  args: {
                    name: "monitoring-status",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "The share name",
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
                  name: "--refresh-details",
                  description:
                    'Details of the refresh job on this share. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "refresh-details", isVariadic: true },
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
                  name: "--share-status",
                  description: "Current status of the share",
                  args: {
                    name: "share-status",
                    suggestions: [
                      "NeedsAttention",
                      "OK",
                      "Offline",
                      "Unknown",
                      "Updating",
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
                  name: "--user-access-rights",
                  description:
                    'Mapping of users and corresponding access rights on the share (required for SMB protocol). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-access-rights", isVariadic: true },
                },
              ],
            },
          ],
        },
        {
          name: "storage-account",
          description: "Manage device storage account",
          subcommands: [
            {
              name: "create",
              description: "Create storage account on the device",
              options: [
                {
                  name: "--data-policy",
                  description: "Data policy of the storage Account",
                  args: {
                    name: "data-policy",
                    suggestions: ["Cloud", "Local"],
                  },
                  isRequired: true,
                },
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                  isRequired: true,
                },
                {
                  name: ["--storage-account-name", "--name", "-n"],
                  description: "The StorageAccount name",
                  args: { name: "storage-account-name" },
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
                  description: "Description for the storage Account",
                  args: { name: "description" },
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
                  name: ["--storage-account-credential-id", "--sac-id"],
                  description: "Storage Account Credential Id",
                  args: { name: "storage-account-credential-id" },
                },
                {
                  name: "--storage-account-status",
                  description: "Current status of the storage account",
                  args: {
                    name: "storage-account-status",
                    suggestions: [
                      "NeedsAttention",
                      "OK",
                      "Offline",
                      "Unknown",
                      "Updating",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete storage account on the Data Box Edge/Data Box Gateway device",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--storage-account-name", "--name", "-n"],
                  description: "The StorageAccount name",
                  args: { name: "storage-account-name" },
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
                "List all the storage accounts in a Data Box Edge/Data Box Gateway device",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
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
              description: "Show storage account",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--storage-account-name", "--name", "-n"],
                  description: "The storage account name",
                  args: { name: "storage-account-name" },
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
              description: "Update storage account on the device",
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
                  name: "--data-policy",
                  description: "Data policy of the storage Account",
                  args: {
                    name: "data-policy",
                    suggestions: ["Cloud", "Local"],
                  },
                },
                {
                  name: "--description",
                  description: "Description for the storage Account",
                  args: { name: "description" },
                },
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
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
                  name: ["--storage-account-name", "--name", "-n"],
                  description: "The storage account name",
                  args: { name: "storage-account-name" },
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
                  name: ["--storage-account-credential-id", "--sac-id"],
                  description: "Storage Account Credential Id",
                  args: { name: "storage-account-credential-id" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--storage-account-status",
                  description: "Current status of the storage account",
                  args: {
                    name: "storage-account-status",
                    suggestions: [
                      "NeedsAttention",
                      "OK",
                      "Offline",
                      "Unknown",
                      "Updating",
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
              name: "container",
              description: "Manage device storage account container",
              subcommands: [
                {
                  name: "create",
                  description: "Create container on the device",
                  options: [
                    {
                      name: ["--container-name", "--name", "-n"],
                      description: "The container name",
                      args: { name: "container-name" },
                      isRequired: true,
                    },
                    {
                      name: "--data-format",
                      description: "DataFormat for Container",
                      args: {
                        name: "data-format",
                        suggestions: ["AzureFile", "BlockBlob", "PageBlob"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--device-name",
                      description: "The device name",
                      args: { name: "device-name" },
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
                      name: "--storage-account-name",
                      description: "The Storage Account Name",
                      args: { name: "storage-account-name" },
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
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete the container on the Data Box Edge/Data Box Gateway device",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--container-name", "--name", "-n"],
                      description: "The container name",
                      args: { name: "container-name" },
                    },
                    {
                      name: "--device-name",
                      description: "The device name",
                      args: { name: "device-name" },
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
                      name: "--storage-account-name",
                      description: "The Storage Account Name",
                      args: { name: "storage-account-name" },
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
                    "List all the containers of a storage account in a Data Box Edge/Data Box Gateway device",
                  options: [
                    {
                      name: "--device-name",
                      description: "The device name",
                      args: { name: "device-name" },
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
                      name: "--storage-account-name",
                      description: "The storage Account name",
                      args: { name: "storage-account-name" },
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
                  description: "Show container",
                  options: [
                    {
                      name: ["--container-name", "--name", "-n"],
                      description: "The container Name",
                      args: { name: "container-name" },
                    },
                    {
                      name: "--device-name",
                      description: "The device name",
                      args: { name: "device-name" },
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
                      name: "--storage-account-name",
                      description: "The Storage Account Name",
                      args: { name: "storage-account-name" },
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
                  description: "Update container on the device",
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
                      name: ["--container-name", "--name", "-n"],
                      description: "The container Name",
                      args: { name: "container-name" },
                    },
                    {
                      name: "--data-format",
                      description: "DataFormat for Container",
                      args: {
                        name: "data-format",
                        suggestions: ["AzureFile", "BlockBlob", "PageBlob"],
                      },
                    },
                    {
                      name: "--device-name",
                      description: "The device name",
                      args: { name: "device-name" },
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
                      name: "--storage-account-name",
                      description: "The Storage Account Name",
                      args: { name: "storage-account-name" },
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
          name: "storage-account-credential",
          description: "Manage device storage account credential",
          subcommands: [
            {
              name: "create",
              description: "Create the storage account credential",
              options: [
                {
                  name: "--account-type",
                  description:
                    "Type of storage accessed on the storage account",
                  args: {
                    name: "account-type",
                    suggestions: ["BlobStorage", "GeneralPurposeStorage"],
                  },
                  isRequired: true,
                },
                {
                  name: "--alias",
                  description: "Alias for the storage account",
                  args: { name: "alias" },
                  isRequired: true,
                },
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The storage account credential name",
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
                  name: "--ssl-status",
                  description:
                    "Signifies whether SSL needs to be enabled or not",
                  args: {
                    name: "ssl-status",
                    suggestions: ["Disabled", "Enabled"],
                  },
                  isRequired: true,
                },
                {
                  name: "--account-key",
                  description:
                    'Encrypted storage key. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "account-key", isVariadic: true },
                },
                acquirePolicyToken,
                {
                  name: "--blob-domain-name",
                  description: "Blob end point for private clouds",
                  args: { name: "blob-domain-name" },
                },
                changeReference,
                {
                  name: "--connection-string",
                  description:
                    "Connection string for the storage account. Use this string if username and account key are not specified",
                  args: { name: "connection-string" },
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
                  name: "--storage-account-id",
                  description: "Id of the storage account",
                  args: { name: "storage-account-id" },
                },
                {
                  name: "--user-name",
                  description: "Username for the storage account",
                  args: { name: "user-name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the storage account credential",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The storage account credential name",
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
              description:
                "List all the storage account credentials in a Data Box Edge/Data Box Gateway device",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
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
                "Get the properties of the specified storage account credential",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The storage account credential name",
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
              description: "Update the storage account credential",
              options: [
                {
                  name: "--account-key",
                  description:
                    'Encrypted storage key. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "account-key", isVariadic: true },
                },
                {
                  name: "--account-type",
                  description:
                    "Type of storage accessed on the storage account",
                  args: {
                    name: "account-type",
                    suggestions: ["BlobStorage", "GeneralPurposeStorage"],
                  },
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--alias",
                  description: "Alias for the storage account",
                  args: { name: "alias" },
                },
                {
                  name: "--blob-domain-name",
                  description: "Blob end point for private clouds",
                  args: { name: "blob-domain-name" },
                },
                changeReference,
                {
                  name: "--connection-string",
                  description:
                    "Connection string for the storage account. Use this string if username and account key are not specified",
                  args: { name: "connection-string" },
                },
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
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
                  description: "The storage account credential name",
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
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--ssl-status",
                  description:
                    "Signifies whether SSL needs to be enabled or not",
                  args: {
                    name: "ssl-status",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--storage-account-id",
                  description: "Id of the storage account",
                  args: { name: "storage-account-id" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--user-name",
                  description: "Username for the storage account",
                  args: { name: "user-name" },
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description: "Manage device user",
          subcommands: [
            {
              name: "create",
              description:
                "Create user on a Data Box Edge/Data Box Gateway device",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The user name",
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
                  name: "--user-type",
                  description: "Type of the user",
                  args: {
                    name: "user-type",
                    suggestions: ["ARM", "LocalManagement", "Share"],
                  },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--encrypted-password",
                  description:
                    'The password details. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "encrypted-password", isVariadic: true },
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
              description: "Delete the user on a databox edge/gateway device",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The user name",
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
              description:
                "List all the users registered on a Data Box Edge/Data Box Gateway device",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
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
                  name: "--filter",
                  description:
                    "Specify $filter='Type eq <type>' to filter on user type property",
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
              ],
            },
            {
              name: "show",
              description: "Show user",
              options: [
                {
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The user name",
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
              description:
                "Update user on a Data Box Edge/Data Box Gateway device",
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
                  name: "--device-name",
                  description: "The device name",
                  args: { name: "device-name" },
                },
                {
                  name: "--encrypted-password",
                  description:
                    'The password details. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "encrypted-password", isVariadic: true },
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
                  description: "The user name",
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
                  name: "--user-type",
                  description: "Type of the user",
                  args: {
                    name: "user-type",
                    suggestions: ["ARM", "LocalManagement", "Share"],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "order",
      description: "Manage order with databoxedge",
      subcommands: [
        {
          name: "create",
          description: "Create an order",
          options: [
            {
              name: "--address-line1",
              description: "The address line1",
              args: { name: "address-line1" },
              isRequired: true,
            },
            {
              name: "--city",
              description: "The city name",
              args: { name: "city" },
              isRequired: true,
            },
            {
              name: "--company-name",
              description: "The name of the company",
              args: { name: "company-name" },
              isRequired: true,
            },
            {
              name: "--contact-person",
              description: "The contact person name",
              args: { name: "contact-person" },
              isRequired: true,
            },
            {
              name: "--country",
              description: "The country name",
              args: { name: "country" },
              isRequired: true,
            },
            {
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
              isRequired: true,
            },
            {
              name: "--email-list",
              description:
                'The email list. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "email-list", isVariadic: true },
              isRequired: true,
            },
            {
              name: "--phone",
              description: "The phone number",
              args: { name: "phone" },
              isRequired: true,
            },
            {
              name: "--postal-code",
              description: "The postal code",
              args: { name: "postal-code" },
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
              name: "--state",
              description: "The state name",
              args: { name: "state" },
              isRequired: true,
            },
            {
              name: "--status",
              description:
                "Status of the order as per the allowed status types",
              args: {
                name: "status",
                suggestions: [
                  "Arriving",
                  "AwaitingDrop",
                  "AwaitingFulfillment",
                  "AwaitingPickup",
                  "AwaitingPreparation",
                  "AwaitingReturnShipment",
                  "AwaitingShipment",
                  "CollectedAtMicrosoft",
                  "Declined",
                  "Delivered",
                  "LostDevice",
                  "PickupCompleted",
                  "ReplacementRequested",
                  "ReturnInitiated",
                  "Shipped",
                  "ShippedBack",
                  "Untracked",
                ],
              },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--address-line2",
              description: "The address line2",
              args: { name: "address-line2" },
            },
            {
              name: "--address-line3",
              description: "The address line3",
              args: { name: "address-line3" },
            },
            changeReference,
            {
              name: "--comments",
              description: "Comments related to this status change",
              args: { name: "comments" },
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
          description: "Delete the order related to the device",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
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
            "List all the orders related to a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
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
          description: "Get a specific order by name",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
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
          description: "Update an order",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--address-line1",
              description: "The address line1",
              args: { name: "address-line1" },
            },
            {
              name: "--address-line2",
              description: "The address line2",
              args: { name: "address-line2" },
            },
            {
              name: "--address-line3",
              description: "The address line3",
              args: { name: "address-line3" },
            },
            changeReference,
            {
              name: "--city",
              description: "The city name",
              args: { name: "city" },
            },
            {
              name: "--comments",
              description: "Comments related to this status change",
              args: { name: "comments" },
            },
            {
              name: "--company-name",
              description: "The name of the company",
              args: { name: "company-name" },
            },
            {
              name: "--contact-person",
              description: "The contact person name",
              args: { name: "contact-person" },
            },
            {
              name: "--country",
              description: "The country name",
              args: { name: "country" },
            },
            {
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
            },
            {
              name: "--email-list",
              description:
                'The email list. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "email-list", isVariadic: true },
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
              name: "--phone",
              description: "The phone number",
              args: { name: "phone" },
            },
            {
              name: "--postal-code",
              description: "The postal code",
              args: { name: "postal-code" },
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
              name: "--state",
              description: "The state name",
              args: { name: "state" },
            },
            {
              name: "--status",
              description:
                "Status of the order as per the allowed status types",
              args: {
                name: "status",
                suggestions: [
                  "Arriving",
                  "AwaitingDrop",
                  "AwaitingFulfillment",
                  "AwaitingPickup",
                  "AwaitingPreparation",
                  "AwaitingReturnShipment",
                  "AwaitingShipment",
                  "CollectedAtMicrosoft",
                  "Declined",
                  "Delivered",
                  "LostDevice",
                  "PickupCompleted",
                  "ReplacementRequested",
                  "ReturnInitiated",
                  "Shipped",
                  "ShippedBack",
                  "Untracked",
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
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
            },
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
  ],
};

export default completion;
