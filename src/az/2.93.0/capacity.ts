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
  name: "capacity",
  description: "Manage capacity",
  subcommands: [
    {
      name: "reservation",
      description: "Manage capacity reservation",
      subcommands: [
        {
          name: "create",
          description:
            "Create operation to create or update a capacity reservation. Please note some properties can be set only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation for more details",
          options: [
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
              isRequired: true,
            },
            {
              name: ["--capacity-reservation-name", "--name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
                "Specify the number of virtual machines in the scale set",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--end",
              description:
                "The required end date for Block capacity reservations. Must be after the start date, with a duration of either 1–14 whole days or 3–26 whole weeks. Example: 2025-06-28",
              args: { name: "end" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Resource location When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: ["--minimum-commitment-days", "--min-commitment-days"],
              description:
                "The minimum number of days after the start date before a committed Future capacity reservation can be updated or deleted. The service supplies a default when this value is omitted",
              args: { name: "minimum-commitment-days" },
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
              name: "--schedule-profile-start",
              description:
                "The start date and time of a Future capacity reservation. The value must be at least 7 days and at most 6 months in the future. Example: 2026-08-01T12:00:00Z",
              args: { name: "schedule-profile-start" },
            },
            {
              name: ["--sku", "-s"],
              description:
                'The SKU of the resource for which capacity needs be reserved. Currently VM Skus with the capability called \\"CapacityReservationSupported\\" set to true are supported. Refer to List Microsoft.Compute SKUs in a region (https://learn.microsoft.com/rest/api/compute/resourceskus/list) for supported values',
              args: { name: "sku" },
            },
            {
              name: "--tags",
              description:
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: ["--zone", "-z"],
              description:
                'Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "zone", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete operation to delete a capacity reservation. This operation is allowed only when all the associated resources are disassociated from the capacity reservation. Please refer to https://aka.ms/CapacityReservation for more details",
          options: [
            acquirePolicyToken,
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
            },
            {
              name: ["--capacity-reservation-name", "--name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
          description:
            "List all of the capacity reservations in the specified capacity reservation group. Use the nextLink property in the response to get the next page of capacity reservations",
          options: [
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
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
              name: "--expand",
              description:
                "The expand expression to apply on the operation. Based on the expand param(s) specified we return Virtual Machine or ScaleSet VM Instance or both resource Ids which are associated to capacity reservation group in the response",
              args: {
                name: "expand",
                suggestions: [
                  "virtualMachineScaleSetVMs/$ref",
                  "virtualMachines/$ref",
                ],
              },
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
          description: "Retrieve information about the capacity reservation",
          options: [
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
            },
            {
              name: ["--capacity-reservation-name", "--name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--instance-view", "-i"],
              description:
                "Retrieve a snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations",
              args: {
                name: "instance-view",
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
          name: "update",
          description: "Update operation to update a capacity reservation",
          options: [
            acquirePolicyToken,
            {
              name: "--capacity",
              description:
                "Specify the number of virtual machines in the scale set",
              args: { name: "capacity" },
            },
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
            },
            {
              name: ["--capacity-reservation-name", "--name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
              name: "--tags",
              description:
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
            },
            {
              name: ["--capacity-reservation-name", "--name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
              name: "--expand",
              description:
                "The expand expression to apply on the operation. 'InstanceView' retrieves a snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations",
              args: { name: "expand", suggestions: ["instanceView"] },
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
          name: "group",
          description: "Manage capacity reservation group",
          subcommands: [
            {
              name: "create",
              description: "Create capacity reservation group",
              options: [
                {
                  name: ["--capacity-reservation-group", "-n"],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group" },
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
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--reservation-type",
                  description:
                    "The capacity reservation type. The reservation type cannot be changed after the capacity reservation group is created",
                  args: {
                    name: "reservation-type",
                    suggestions: ["Block", "Open", "Targeted"],
                  },
                },
                {
                  name: "--sharing-profile",
                  description:
                    "Space-separated subscription resource IDs or nothing. Specify the settings to enable sharing across subscriptions for the capacity reservation group resource. Specify it to nothing to unsharing",
                  args: {
                    name: "sharing-profile",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: ["--zones", "-z"],
                  description:
                    "Availability Zones to use for this capacity reservation group. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones",
                  args: { name: "zones", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete operation to delete a capacity reservation group. This operation is allowed only if all the associated resources are disassociated from the reservation group and all capacity reservations under the reservation group have also been deleted. Please refer to https://aka.ms/CapacityReservation for more details",
              options: [
                acquirePolicyToken,
                {
                  name: [
                    "--capacity-reservation-group-name",
                    "--capacity-reservation-group",
                    "-n",
                  ],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group-name" },
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List the capacity reservation groups",
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
                {
                  name: "--resource-ids-only",
                  description:
                    "The query option to fetch capacity reservation group resource Ids. 'CreatedInSubscription' enables fetching resource Ids for all capacity reservation group resources created in the subscription. 'SharedWithSubscription' enables fetching resource Ids for all capacity reservation group resources shared with the subscription. 'All' enables fetching resource Ids for all capacity reservation group resources shared with the subscription and created in the subscription",
                  args: {
                    name: "resource-ids-only",
                    suggestions: [
                      "All",
                      "CreatedInSubscription",
                      "SharedWithSubscription",
                    ],
                  },
                },
                {
                  name: "--vm-instance",
                  description:
                    "Retrieve the Virtual Machine Instance which are associated to capacity reservation group in the response",
                  args: {
                    name: "vm-instance",
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
                  name: "--vmss-instance",
                  description:
                    "Retrieve the ScaleSet VM Instance which are associated to capacity reservation group in the response",
                  args: {
                    name: "vmss-instance",
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
              description: "Show capacity reservation group",
              options: [
                {
                  name: ["--capacity-reservation-group", "-n"],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group" },
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
                  name: ["--instance-view", "-i"],
                  description:
                    "Retrieve the list of instance views of the capacity reservations under the capacity reservation group which is a snapshot of the runtime properties of a capacity reservation that is managed by the platform and can change outside of control plane operations",
                },
              ],
            },
            {
              name: "update",
              description: "Update capacity reservation group",
              options: [
                {
                  name: ["--capacity-reservation-group", "-n"],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group" },
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
                  name: "--reservation-type",
                  description:
                    "The capacity reservation type. The reservation type cannot be changed after the capacity reservation group is created",
                  args: {
                    name: "reservation-type",
                    suggestions: ["Block", "Open", "Targeted"],
                  },
                },
                {
                  name: "--sharing-profile",
                  description:
                    "Space-separated subscription resource IDs or nothing. Specify the settings to enable sharing across subscriptions for the capacity reservation group resource. Specify it to nothing to unsharing",
                  args: {
                    name: "sharing-profile",
                    isOptional: true,
                    isVariadic: true,
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
          ],
        },
      ],
    },
  ],
};

export default completion;
