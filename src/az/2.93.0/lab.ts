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
  name: "lab",
  description: "Manage azure devtest labs",
  subcommands: [
    {
      name: "delete",
      description: "Delete lab. This operation can take a while to complete",
      options: [
        {
          name: "--name",
          description: "The name of the lab",
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "get",
      description: "Get lab",
      options: [
        {
          name: "--name",
          description: "The name of the lab",
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
          name: "--expand",
          description:
            "Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'",
          args: { name: "expand" },
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
          name: "--expand",
          description:
            "Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'",
          args: { name: "expand" },
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
          name: "--name",
          description: "The name of the lab",
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
      name: "arm-template",
      description:
        "Manage azure resource manager (ARM) templates in an azure devtest lab",
      subcommands: [
        {
          name: "list",
          description:
            "List azure resource manager templates in a given artifact source",
          options: [
            {
              name: "--artifact-source-name",
              description: "The name of the artifact source",
              args: { name: "artifact-source-name" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=displayName)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of an ARM template in a lab",
          options: [
            {
              name: "--artifact-source-name",
              description: "The name of the artifact source",
              args: { name: "artifact-source-name" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the azure resource manager template",
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
              name: "--export-parameters",
              description: "Whether or not to export parameters template",
              args: {
                name: "export-parameters",
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
    {
      name: "artifact",
      description: "Manage devtest labs artifacts",
      subcommands: [
        {
          name: "list",
          description: "List artifacts in a given artifact source",
          options: [
            {
              name: "--artifact-source-name",
              description: "The name of the artifact source",
              args: { name: "artifact-source-name" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=title)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "artifact-source",
      description: "Manage devtest lab artifact sources",
      subcommands: [
        {
          name: "list",
          description: "List artifact sources in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=displayName)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show artifact source",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the artifact source",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=displayName)'",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "custom-image",
      description: "Manage custom images of a devtest lab",
      subcommands: [
        {
          name: "create",
          description:
            "Create an existing custom image. This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the custom image",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--os-state",
              description:
                "The current state of the virtual machine. For Windows virtual machines: NonSysprepped, SysprepRequested, SysprepApplied. For Linux virtual machines: NonDeprovisioned, DeprovisionRequested, DeprovisionApplied",
              args: { name: "os-state" },
              isRequired: true,
            },
            {
              name: "--os-type",
              description: "Type of the OS on which the custom image is based",
              args: { name: "os-type", suggestions: ["Linux", "Windows"] },
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
              name: "--source-vm-id",
              description:
                "The resource ID of a virtual machine in the provided lab",
              args: { name: "source-vm-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--author",
              description: "The author of the custom image",
              args: { name: "author" },
            },
            changeReference,
            {
              name: "--description",
              description: "The description of the custom image",
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
          ],
        },
        {
          name: "delete",
          description:
            "Delete custom image. This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the custom image",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List custom images in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=vm)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get custom image",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the custom image",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=vm)'",
              args: { name: "expand" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=vm)'",
              args: { name: "expand" },
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
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
            },
            {
              name: "--name",
              description: "The name of the custom image",
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
      name: "environment",
      description: "Manage environments for an azure devtest lab",
      subcommands: [
        {
          name: "create",
          description:
            "Create an existing environment. This operation can take a while to complete",
          options: [
            {
              name: "--arm-template",
              description: "Name or ID of the ARM template in the lab",
              args: { name: "arm-template" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the environment",
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
              name: "--artifact-source-name",
              description:
                "Name of the artifact source in the lab. Values from: az lab artifact-source list",
              args: { name: "artifact-source-name" },
            },
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
              name: "--parameters",
              description:
                "Path to the parameters of the azure resource manager template. JSON encoded list of parameters",
              args: { name: "parameters" },
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
          name: "delete",
          description:
            "Delete environment. This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the environment",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List environments in a given user profile",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=deploymentProperties)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get environment",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the environment",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=deploymentProperties)'",
              args: { name: "expand" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=deploymentProperties)'",
              args: { name: "expand" },
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
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the environment",
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
            {
              name: "--user-name",
              description: "The name of the user profile",
              args: { name: "user-name" },
            },
          ],
        },
      ],
    },
    {
      name: "formula",
      description: "Manage formulas for an azure devtest lab",
      subcommands: [
        {
          name: "delete",
          description: "Delete formula",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the formula",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "export-artifacts",
          description: "Export artifacts from a formula",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the formula",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=description)'",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "list",
          description: "List formulas in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=description)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show formula",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the formula",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=description)'",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "gallery-image",
      description: "Manage lab gallery image",
      subcommands: [
        {
          name: "list",
          description: "List gallery images in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=author)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "Manage secrets of an azure devtest lab",
      subcommands: [
        {
          name: "delete",
          description: "Delete secret",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the secret",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List secrets in a given user profile",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($select=value)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "set",
          description: "Set a secret for a lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the secret",
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
              name: "--value",
              description: "The value of the secret for secret creation",
              args: { name: "value" },
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
          name: "show",
          description: "Get secret",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the secret",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=value)'",
              args: { name: "expand" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=value)'",
              args: { name: "expand" },
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
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the secret",
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
            {
              name: "--user-name",
              description: "The name of the user profile",
              args: { name: "user-name" },
            },
          ],
        },
      ],
    },
    {
      name: "vm",
      description: "Manage VMs in an azure devtest lab",
      subcommands: [
        {
          name: "apply-artifacts",
          description:
            "Apply artifacts to virtual machine. This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the virtual machine",
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
              name: "--artifacts",
              description:
                "Path to the JSON encoded array of artifacts to be applied. JSON encoded list of parameters",
              args: { name: "artifacts" },
            },
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
          name: "claim",
          description: "Command to claim a VM in the Azure DevTest Lab",
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
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine to claim",
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
          name: "create",
          description: "Create a VM in a lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the virtual machine or environment",
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
              name: "--admin-password",
              description: "Password for the VM admin",
              args: { name: "admin-password" },
            },
            {
              name: "--admin-username",
              description: "Username for the VM admin",
              args: { name: "admin-username" },
            },
            {
              name: "--allow-claim",
              description:
                "Flag indicating if the VM should be created as claimable",
              args: {
                name: "allow-claim",
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
              name: "--artifacts",
              description:
                "Path to the JSON encoded array of artifacts to be applied. JSON encoded list of parameters",
              args: { name: "artifacts" },
            },
            {
              name: "--authentication-type",
              description: "Type of authentication allowed for the VM",
              args: {
                name: "authentication-type",
                suggestions: ["password", "ssh"],
              },
            },
            changeReference,
            {
              name: "--disk-type",
              description: "Storage type to use for virtual machine",
              args: {
                name: "disk-type",
                suggestions: ["Premium", "Standard", "StandardSSD"],
                isOptional: true,
              },
            },
            {
              name: "--expiration-date",
              description: "The expiration date for VM",
              args: { name: "expiration-date" },
            },
            {
              name: "--formula",
              description:
                "Name of the formula. Use az lab formula list for available formulas. Use az lab formula with the --export-artifacts flag to export and update artifacts, then pass the results via the --artifacts argument",
              args: { name: "formula" },
            },
            {
              name: "--generate-ssh-keys",
              description:
                "Generate SSH public and private key files if missing",
              args: {
                name: "generate-ssh-keys",
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
              name: "--image",
              description:
                "The name of the operating system image (gallery image name or custom image name/ID). Use az lab gallery-image list for available gallery images or az lab custom-image list for available custom images",
              args: { name: "image" },
            },
            {
              name: "--image-type",
              description: "Type of the image",
              args: { name: "image-type", suggestions: ["custom", "gallery"] },
            },
            {
              name: "--ip-configuration",
              description: "Type of IP configuration to use for the VM",
              args: {
                name: "ip-configuration",
                suggestions: ["private", "public", "shared"],
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
            {
              name: "--notes",
              description: "The notes of the virtual machine",
              args: { name: "notes" },
            },
            {
              name: "--saved-secret",
              description:
                "Name of the saved secret to be used for authentication. When this value is provided, it is used in the place of other authentication methods",
              args: { name: "saved-secret" },
            },
            {
              name: "--size",
              description:
                "The size of the VM to be created. See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info",
              args: { name: "size" },
            },
            {
              name: "--ssh-key",
              description:
                "The SSH public key or public key file path. Use --generate-ssh-keys to generate SSH keys",
              args: { name: "ssh-key" },
            },
            {
              name: "--subnet",
              description: "Name of the subnet to add the VM to",
              args: { name: "subnet" },
            },
            {
              name: "--tags",
              description:
                'The tags of the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--vnet-name",
              description: "Name of the virtual network to add the VM to",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete virtual machine. This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "hibernate",
          description:
            "Hibernate a virtual machine This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
          name: "list",
          description: "List virtual machines in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--all",
              description:
                "List all virtual machines in the lab. Cannot be used with --filters",
              args: {
                name: "all",
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
              name: "--claimable",
              description:
                "List only claimable virtual machines in the lab. Cannot be used with --filters",
              args: {
                name: "claimable",
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
              name: "--environment",
              description:
                "Name or ID of the environment to list virtual machines in. Cannot be used with --filters",
              args: { name: "environment" },
            },
            {
              name: "--expand",
              description:
                "Specify the $expand query. Example: '\"properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)\"'",
              args: { name: "expand" },
            },
            {
              name: "--filters",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filters" },
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
              name: "--object-id",
              description: "Object ID of the owner to list VMs for",
              args: { name: "object-id" },
            },
            {
              name: "--order-by",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "order-by" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show virtual machine",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: '\"properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)\"'",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "start",
          description:
            "Start a virtual machine. This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
          name: "stop",
          description:
            "Stop a virtual machine This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: '\"properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)\"'",
              args: { name: "expand" },
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
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
      name: "vnet",
      description: "Manage virtual networks of an azure devtest lab",
      subcommands: [
        {
          name: "get",
          description: "Get virtual network",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual network",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($expand=externalSubnets)'",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "list",
          description: "List virtual networks in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
                "Specify the $expand query. Example: 'properties($expand=externalSubnets)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
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
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
