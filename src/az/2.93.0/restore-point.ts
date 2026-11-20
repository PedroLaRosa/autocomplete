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
  name: "restore-point",
  description: "Manage restore point with res",
  subcommands: [
    {
      name: "create",
      description:
        "Create the restore point. Updating properties of an existing restore point is not allowed",
      options: [
        {
          name: "--collection-name",
          description: "The name of the restore point collection",
          args: { name: "collection-name" },
          isRequired: true,
        },
        {
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
          name: "--consistency-mode",
          description:
            "Consistency mode of the restore point. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details",
          args: {
            name: "consistency-mode",
            suggestions: [
              "ApplicationConsistent",
              "CrashConsistent",
              "FileSystemConsistent",
            ],
          },
        },
        {
          name: "--data-disk-restore-point-encryption-set",
          description: "Customer managed data disk encryption set resource id",
          args: {
            name: "data-disk-restore-point-encryption-set",
            isVariadic: true,
          },
        },
        {
          name: "--data-disk-restore-point-encryption-type",
          description:
            "The type of key used to encrypt the data of the data disk restore point",
          args: {
            name: "data-disk-restore-point-encryption-type",
            suggestions: [
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
              "EncryptionAtRestWithPlatformKey",
            ],
            isVariadic: true,
          },
        },
        {
          name: "--exclude-disks",
          description:
            "List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included",
          args: { name: "exclude-disks", isVariadic: true },
        },
        {
          name: [
            "--instant-access-duration-minutes",
            "--instant-access-duration",
            "--ia-duration",
          ],
          description:
            "This property determines the time in minutes the snapshot is retained as instant access for restoring Premium SSD v2 or Ultra disk with fast restore performance in this restore point",
          args: { name: "instant-access-duration-minutes" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--os-restore-point-encryption-set",
          description: "Customer managed OS disk encryption set resource id",
          args: { name: "os-restore-point-encryption-set" },
        },
        {
          name: "--os-restore-point-encryption-type",
          description:
            "The type of key used to encrypt the data of the OS disk restore point",
          args: {
            name: "os-restore-point-encryption-type",
            suggestions: [
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
              "EncryptionAtRestWithPlatformKey",
            ],
          },
        },
        {
          name: "--source-data-disk-resource",
          description: "Resource Id of the source data disk",
          args: { name: "source-data-disk-resource", isVariadic: true },
        },
        {
          name: "--source-os-resource",
          description: "Resource Id of the source OS disk",
          args: { name: "source-os-resource" },
        },
        {
          name: "--source-restore-point",
          description:
            "Resource Id of the source restore point from which a copy needs to be created",
          args: { name: "source-restore-point" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete the restore point",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--restore-point-collection-name", "--collection-name"],
          description: "The name of the restore point collection",
          args: { name: "restore-point-collection-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
      name: "show",
      description: "Get the restore point",
      options: [
        {
          name: "--collection-name",
          description: "The name of the restore point collection",
          args: { name: "collection-name" },
          isRequired: true,
        },
        {
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
          name: "--instance-view",
          description: "Show the instance view of a restore point",
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
          name: ["--restore-point-collection-name", "--collection-name"],
          description: "The name of the restore point collection",
          args: { name: "restore-point-collection-name" },
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
          name: "--expand",
          description:
            "The expand expression to apply on the operation. 'InstanceView' retrieves information about the run-time state of a restore point",
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
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
      name: "collection",
      description:
        "Create the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified",
      subcommands: [
        {
          name: "create",
          description:
            "Create operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified",
          options: [
            {
              name: ["--restore-point-collection-name", "--collection-name"],
              description: "The name of the restore point collection",
              args: { name: "restore-point-collection-name" },
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
              name: "--instant-access",
              description:
                "This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance",
              args: {
                name: "instant-access",
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
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--source-id",
              description:
                "Resource Id of the source resource used to create this restore point collection",
              args: { name: "source-id" },
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
          name: "delete",
          description:
            "Delete the restore point collection. This operation will also delete all the contained restore points",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--restore-point-collection-name", "--collection-name"],
              description: "The name of the restore point collection",
              args: { name: "restore-point-collection-name" },
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
            "Get the list of restore point collections in a resource group",
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
          name: "list-all",
          description:
            "Get the list of restore point collections in the subscription. Use nextLink property in the response to get the next page of restore point collections. Do this till nextLink is not null to fetch all the restore point collections",
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
          name: "show",
          description: "Get the restore point collection",
          options: [
            {
              name: "--collection-name",
              description: "The name of the restore point collection",
              args: { name: "collection-name" },
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
              name: "--restore-points",
              description:
                "Show all contained restore points in the restore point collection",
            },
          ],
        },
        {
          name: "update",
          description: "Update the restore point collection",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--restore-point-collection-name", "--collection-name"],
              description: "The name of the restore point collection",
              args: { name: "restore-point-collection-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instant-access",
              description:
                "This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance",
              args: {
                name: "instant-access",
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
              name: ["--restore-point-collection-name", "--collection-name"],
              description: "The name of the restore point collection",
              args: { name: "restore-point-collection-name" },
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
              name: "--expand",
              description: "The expand expression to apply on the operation",
              args: { name: "expand", suggestions: ["restorePoints"] },
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
