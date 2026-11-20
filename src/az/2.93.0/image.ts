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
  name: "image",
  description: "Manage custom virtual machine images",
  subcommands: [
    {
      name: "create",
      description:
        "Create a custom Virtual Machine Image from managed disks or snapshots",
      options: [
        {
          name: ["--name", "-n"],
          description: "New image name",
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
          name: "--source",
          description:
            "OS disk source from the same region, including a virtual machine ID or name, OS disk blob URI, managed OS disk ID or name, or OS snapshot ID or name",
          args: { name: "source" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--data-disk-caching",
          description: "Storage caching type for the image's data disk",
          args: {
            name: "data-disk-caching",
            suggestions: ["None", "ReadOnly", "ReadWrite"],
          },
        },
        {
          name: "--data-disk-sources",
          description:
            "Space-separated list of data disk sources, including unmanaged blob URI, managed disk ID or name, or snapshot ID or name",
          args: { name: "data-disk-sources", isVariadic: true },
        },
        {
          name: "--edge-zone",
          description: "The name of edge zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--hyper-v-generation",
          description:
            "The hypervisor generation of the Virtual Machine created from the image",
          args: { name: "hyper-v-generation", suggestions: ["V1", "V2"] },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--os-disk-caching",
          description: "Storage caching type for the image's OS disk",
          args: {
            name: "os-disk-caching",
            suggestions: ["None", "ReadOnly", "ReadWrite"],
          },
        },
        {
          name: "--os-type",
          args: { name: "os-type", suggestions: ["Linux", "Windows"] },
        },
        {
          name: "--storage-sku",
          description:
            "The SKU of the storage account with which to create the VM image. Unused if source VM is specified",
          args: {
            name: "storage-sku",
            suggestions: [
              "PremiumV2_LRS",
              "Premium_LRS",
              "Premium_ZRS",
              "StandardSSD_LRS",
              "StandardSSD_ZRS",
              "Standard_LRS",
              "UltraSSD_LRS",
            ],
          },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--zone-resilient",
          description:
            "Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage",
          args: {
            name: "zone-resilient",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an Image",
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
          name: ["--image-name", "--name", "-n"],
          description: "The name of the image",
          args: { name: "image-name" },
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
      ],
    },
    {
      name: "list",
      description: "List the list of images under a resource group",
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
      description: "Get an image",
      options: [
        {
          name: "--expand",
          description: "The expand expression to apply on the operation",
          args: { name: "expand" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--image-name", "--name", "-n"],
          description: "The name of the image",
          args: { name: "image-name" },
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
      description: "Update custom VM images",
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
          name: ["--image-name", "--name", "-n"],
          description: "The name of the image",
          args: { name: "image-name" },
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
          description: "The expand expression to apply on the operation",
          args: { name: "expand" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--image-name", "--name", "-n"],
          description: "The name of the image",
          args: { name: "image-name" },
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
      name: "builder",
      description: "Manage and build image builder templates",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel the long running image build based on the image template",
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
              description: "The name of the image template",
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
          description: "Create an image builder template",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the image template",
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
              name: "--build-timeout",
              description:
                "The Maximum duration to wait while building the image template, in minutes. Default is 60",
              args: { name: "build-timeout" },
            },
            {
              name: "--build-vm-identities",
              description:
                "Optional configuration of the virtual network to use to deploy the build virtual machine in. Omit if no specific virtual network needs to be used",
              args: { name: "build-vm-identities", isVariadic: true },
            },
            changeReference,
            {
              name: "--checksum",
              description: "The SHA256 checksum of the Red Hat ISO image",
              args: { name: "checksum" },
            },
            {
              name: "--defer",
              description:
                "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
              args: { name: "defer", isOptional: true },
            },
            {
              name: "--identity",
              description:
                "List of user assigned identities (name or ID, space delimited) of the image template",
              args: { name: "identity", isVariadic: true },
            },
            {
              name: ["--image-source", "-i"],
              description:
                "The base image to customize. Must be a valid platform image URN, platform image alias, Red Hat ISO image URI, managed image name/ID, or shared image version ID",
              args: { name: "image-source" },
            },
            {
              name: "--image-template",
              description:
                "Local path or URL to an image template file. When using --image-template, all other parameters are ignored except -g and -n. Reference: https://learn.microsoft.com/azure/virtual-machines/linux/image-builder-json",
              args: { name: "image-template" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--managed-image-destinations",
              description:
                'Managed image output distributor information. Space-separated list of key-value pairs. E.g "image_1=westus2 image_2=westus". Each key is the name or resource ID of the managed image to be created. Each value is the location of the image',
              args: { name: "managed-image-destinations", isVariadic: true },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--os-disk-size",
              description:
                "Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size",
              args: { name: "os-disk-size" },
            },
            {
              name: "--proxy-vm-size",
              description:
                "Size of the virtual machine used to build, customize and capture images (Standard_D1_v2 for Gen1 images and Standard_D2ds_v4 for Gen2 images)",
              args: { name: "proxy-vm-size" },
            },
            {
              name: "--scripts",
              description:
                "Space-separated list of shell or powershell scripts to customize the image with. Each script must be a publicly accessible URL. Infers type of script from file extension ('.sh' or'.ps1') or from source type. More more customizer options and flexibility, see: 'az image template customizer add'",
              args: { name: "scripts", isVariadic: true },
            },
            {
              name: "--shared-image-destinations",
              description:
                'Shared image gallery (sig) output distributor information. Space-separated list of key-value pairs. E.g "my_gallery_1/image_def_1=eastus,westus my_gallery_2/image_def_2=uksouth,canadaeast,francesouth." Each key is the sig image definition ID or sig gallery name and sig image definition delimited by a "/". Each value is a comma-delimited list of replica locations',
              args: { name: "shared-image-destinations", isVariadic: true },
            },
            {
              name: "--staging-resource-group",
              description:
                "The staging resource group id in the same subscription as the image template that will be used to build the image",
              args: { name: "staging-resource-group" },
            },
            {
              name: "--subnet",
              description:
                "Name or ID of subnet to deploy the build virtual machine",
              args: { name: "subnet" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--validator",
              description:
                'The type of validation you want to use on the Image. For example, "Shell" can be shell validation',
              args: { name: "validator", isVariadic: true },
            },
            {
              name: "--vm-size",
              description:
                "Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2)",
              args: { name: "vm-size" },
            },
            {
              name: "--vnet",
              description:
                "Name of VNET to deploy the build virtual machine. You should only specify it when subnet is a name",
              args: { name: "vnet" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete image builder template",
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
              description: "The name of the image template",
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
          description: "List image builder templates",
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
          name: "run",
          description: "Build an image builder template",
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
              description: "The name of the image template",
              args: { name: "name" },
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
          description: "Show an image builder template",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the image template",
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
          name: "show-runs",
          description: "Show an image builder template's run outputs",
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
              description: "The name of the image template",
              args: { name: "name" },
            },
            {
              name: "--output-name",
              description: "Name of the image builder run output",
              args: { name: "output-name" },
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
          description: "Update an image builder template",
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
              name: "--defer",
              description:
                "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
              args: { name: "defer", isOptional: true },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the image template",
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
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the template is met",
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
              description: "The name of the image template",
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
          name: "customizer",
          description: "Manage image builder template customizers",
          subcommands: [
            {
              name: "add",
              description:
                "Add an image builder customizer to an image builder template",
              options: [
                {
                  name: "--customizer-name",
                  description: "Name of the customizer",
                  args: { name: "customizer-name" },
                  isRequired: true,
                },
                {
                  name: ["--type", "-t"],
                  description:
                    "Type of customizer to be added to the image template",
                  args: {
                    name: "type",
                    suggestions: [
                      "file",
                      "powershell",
                      "shell",
                      "windows-restart",
                      "windows-update",
                    ],
                  },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--dest-path",
                  description:
                    "The absolute destination path where the file specified in --file-source will be downloaded to in the image",
                  args: { name: "dest-path" },
                },
                {
                  name: ["--exit-codes", "-e"],
                  description:
                    "Space-separated list of valid exit codes, as integers",
                  args: { name: "exit-codes", isVariadic: true },
                },
                {
                  name: "--file-source",
                  description:
                    "The URI of the file to be downloaded into the image. It can be a github link, SAS URI for Azure Storage, etc",
                  args: { name: "file-source" },
                },
                {
                  name: "--filters",
                  description:
                    "Space delimited filters to select updates to apply. Omit or specify empty array to use the default (no filter)",
                  args: { name: "filters", isVariadic: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--inline-script",
                  description:
                    "Space-separated list of inline script lines to customize the image with",
                  args: { name: "inline-script", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--restart-check-command",
                  description: "Command to verify that restart succeeded",
                  args: { name: "restart-check-command" },
                },
                {
                  name: "--restart-command",
                  description: "Command to execute the restart operation",
                  args: { name: "restart-command" },
                },
                {
                  name: "--restart-timeout",
                  description:
                    "Restart timeout specified as a string consisting of a magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours)",
                  args: { name: "restart-timeout" },
                },
                {
                  name: "--script-url",
                  description:
                    "URL of script to customize the image with. The URL must be publicly accessible",
                  args: { name: "script-url" },
                },
                {
                  name: "--search-criteria",
                  description:
                    "Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field",
                  args: { name: "search-criteria" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--update-limit",
                  description:
                    "Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)",
                  args: { name: "update-limit" },
                },
              ],
            },
            {
              name: "clear",
              description:
                "Remove all image builder customizers from an image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
              name: "remove",
              description:
                "Remove an image builder customizer from an image builder template",
              options: [
                {
                  name: "--customizer-name",
                  description: "Name of the customizer",
                  args: { name: "customizer-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
          name: "error-handler",
          description: "Manage image builder template error handler",
          subcommands: [
            {
              name: "add",
              description:
                "Add error handler to an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
                  args: { name: "name" },
                },
                {
                  name: "--on-customizer-error",
                  description:
                    'If there is a customizer error and this field is set to "cleanup", the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a customizer error and this field is set to "abort", the build VM will be preserved',
                  args: {
                    name: "on-customizer-error",
                    suggestions: ["abort", "cleanup"],
                  },
                },
                {
                  name: "--on-validation-error",
                  description:
                    'If there is a validation error and this field is set to "cleanup", the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a validation error and this field is set to "abort", the build VM will be preserved',
                  args: {
                    name: "on-validation-error",
                    suggestions: ["abort", "cleanup"],
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
              name: "remove",
              description:
                "Remove error handler from an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
              name: "show",
              description:
                "Show error handler of an existing image builder template",
              options: [
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
          name: "identity",
          description: "Manage identities of an image builder template",
          subcommands: [
            {
              name: "assign",
              description:
                "Add managed identities to an existing image builder template. Currently, only one user identity is supported",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
                  name: "--user-assigned",
                  description:
                    "Specify one user assigned identity (name or ID, space delimited) of the image template",
                  args: {
                    name: "user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove managed identities from an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
                  name: "--user-assigned",
                  description:
                    "Specify one user assigned identity (name or ID, space delimited) of the image template",
                  args: {
                    name: "user-assigned",
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
              description:
                "Display managed identities of a image builder template",
              options: [
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
          name: "optimizer",
          description: "Manage image builder template optimizer",
          subcommands: [
            {
              name: "add",
              description:
                "Add optimizer to an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--enable-vm-boot",
                  description:
                    "If this parameter is set to true, VM boot time will be improved by optimizing the final customized image output",
                  args: {
                    name: "enable-vm-boot",
                    suggestions: ["false", "true"],
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
                  description: "The name of the image template",
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
              name: "remove",
              description:
                "Remove optimizer from an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
              name: "show",
              description:
                "Show optimizer of an existing image builder template",
              options: [
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
                "Update an optimizer from an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--enable-vm-boot",
                  description:
                    "If this parameter is set to true, VM boot time will be improved by optimizing the final customized image output",
                  args: {
                    name: "enable-vm-boot",
                    suggestions: ["false", "true"],
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
                  description: "The name of the image template",
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
          name: "output",
          description: "Manage image builder template output distributors",
          subcommands: [
            {
              name: "add",
              description:
                "Add an image builder output distributor to an image builder template",
              options: [
                acquirePolicyToken,
                {
                  name: "--artifact-tags",
                  description:
                    "Tags that will be applied to the output artifact once it has been created by the distributor. space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: {
                    name: "artifact-tags",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--gallery-image-definition",
                  description:
                    "Name or ID of the existing SIG image definition to create the customized image version with",
                  args: { name: "gallery-image-definition" },
                },
                {
                  name: "--gallery-name",
                  description:
                    "Shared image gallery name, if image definition name and not ID was provided",
                  args: { name: "gallery-name" },
                },
                {
                  name: "--gallery-replication-regions",
                  description:
                    "Space-separated list of regions to replicate the image version into. Defaults to resource group's location",
                  args: {
                    name: "gallery-replication-regions",
                    isVariadic: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--is-vhd",
                  description: "The output is a VHD distributor",
                },
                {
                  name: "--managed-image",
                  description:
                    "Name or ID of the customized managed image to be created",
                  args: { name: "managed-image" },
                },
                {
                  name: "--managed-image-location",
                  description:
                    "Location where the customized image will be created. Defaults to resource group's location",
                  args: { name: "managed-image-location" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
                  args: { name: "name" },
                },
                {
                  name: "--output-name",
                  description:
                    "Name of the image builder run output. Defaults to the name of the managed image or sig image definition",
                  args: { name: "output-name" },
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
                  name: "--versioning",
                  description:
                    "Describe how to generate new x.y.z version number for distribution",
                  args: {
                    name: "versioning",
                    suggestions: ["Latest", "Source"],
                  },
                },
                {
                  name: "--vhd-uri",
                  description:
                    "Optional Azure Storage URI for the distributed VHD blob. Omit to use the default (empty string) in which case VHD would be published to the storage account in the staging resource group",
                  args: { name: "vhd-uri" },
                },
              ],
            },
            {
              name: "clear",
              description:
                "Remove all image builder output distributors from an image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
              name: "remove",
              description:
                "Remove an image builder output distributor from an image builder template",
              options: [
                {
                  name: "--output-name",
                  description: "Name of the image builder run output",
                  args: { name: "output-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
              name: "versioning",
              description: "Manage image builder template output versioner",
              subcommands: [
                {
                  name: "remove",
                  description:
                    "Remove all versioning options on specified outputs",
                  options: [
                    {
                      name: "--output-name",
                      description: "Name of the image builder run output",
                      args: { name: "output-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--defer",
                      description:
                        "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                      args: { name: "defer", isOptional: true },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the image template",
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
                  name: "set",
                  description:
                    "Set the image builder output versioner of an image builder template",
                  options: [
                    {
                      name: "--output-name",
                      description: "Name of the image builder run output",
                      args: { name: "output-name" },
                      isRequired: true,
                    },
                    {
                      name: "--scheme",
                      description: "Version numbering scheme to be used",
                      args: {
                        name: "scheme",
                        suggestions: ["Latest", "Source"],
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--defer",
                      description:
                        "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                      args: { name: "defer", isOptional: true },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--major",
                      description:
                        'Major version for the generated version number. Determine what is "latest" based on versions with this value as the major version. -1 is equivalent to leaving it unset',
                      args: { name: "major" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the image template",
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
                  name: "show",
                  description: "Show versioning options on specified outputs",
                  options: [
                    {
                      name: "--output-name",
                      description: "Name of the image builder run output",
                      args: { name: "output-name" },
                      isRequired: true,
                    },
                    {
                      name: "--defer",
                      description:
                        "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                      args: { name: "defer", isOptional: true },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the image template",
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
          ],
        },
        {
          name: "trigger",
          description: "Manage image builder template trigger",
          subcommands: [
            {
              name: "create",
              description:
                "Create a trigger for the specified virtual machine image template",
              options: [
                {
                  name: "--image-template-name",
                  description: "The name of the image Template",
                  args: { name: "image-template-name" },
                  isRequired: true,
                },
                {
                  name: ["--trigger-name", "--name", "-n"],
                  description: "The name of the trigger",
                  args: { name: "trigger-name" },
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
                  name: "--kind",
                  description: "The kind of trigger",
                  args: { name: "kind", suggestions: ["SourceImage"] },
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
                "Delete a trigger for the specified virtual machine image template",
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
                  name: "--image-template-name",
                  description: "The name of the image Template",
                  args: { name: "image-template-name" },
                },
                {
                  name: ["--trigger-name", "--name", "-n"],
                  description: "The name of the trigger",
                  args: { name: "trigger-name" },
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
                "List all triggers for the specified Image Template resource",
              options: [
                {
                  name: "--image-template-name",
                  description: "The name of the image Template",
                  args: { name: "image-template-name" },
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
                "Get the specified trigger for the specified image template resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--image-template-name",
                  description: "The name of the image Template",
                  args: { name: "image-template-name" },
                },
                {
                  name: ["--trigger-name", "--name", "-n"],
                  description: "The name of the trigger",
                  args: { name: "trigger-name" },
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
                  name: "--image-template-name",
                  description: "The name of the image Template",
                  args: { name: "image-template-name" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--trigger-name", "--name", "-n"],
                  description: "The name of the trigger",
                  args: { name: "trigger-name" },
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
          name: "validator",
          description: "Manage image builder template validate",
          subcommands: [
            {
              name: "add",
              description: "Add validate to an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: [
                    "--continue-distribute-on-failure",
                    "--dis-on-failure",
                  ],
                  description:
                    "If validation fails and this parameter is set to false, output image(s) will not be distributed",
                  args: {
                    name: "continue-distribute-on-failure",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--source-validation-only",
                  description:
                    "If this parameter is set to true, the image specified in the 'source' section will directly be validated. No separate build will be run to generate and then validate a customized image",
                  args: {
                    name: "source-validation-only",
                    suggestions: ["false", "true"],
                    isOptional: true,
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
              name: "remove",
              description:
                "Remove validate from an existing image builder template",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
              name: "show",
              description:
                "Show validate of an existing image builder template",
              options: [
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer", isOptional: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the image template",
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
      ],
    },
  ],
};

export default completion;
