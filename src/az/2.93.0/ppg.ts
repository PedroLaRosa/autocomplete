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
  name: "ppg",
  description: "Manage Proximity Placement Groups",
  subcommands: [
    {
      name: "create",
      description: "Create a proximity placement group",
      options: [
        {
          name: ["--proximity-placement-group-name", "--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "proximity-placement-group-name" },
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
          name: "--intent-vm-sizes",
          description:
            'Specifies possible sizes of virtual machines that can be created in the proximity placement group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "intent-vm-sizes", isVariadic: true },
        },
        {
          name: ["--location", "-l"],
          description:
            "Resource location When not specified, the location of the resource group will be used",
          args: { name: "location" },
        },
        {
          name: ["--ppg-type", "--type", "-t"],
          description:
            "The type of the proximity placement group. Allowed values: Standard",
          args: { name: "ppg-type", suggestions: ["Standard", "Ultra"] },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags", isVariadic: true },
        },
        {
          name: ["--zone", "-z"],
          description:
            'Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the proximity placement group can be created. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "zone", isVariadic: true },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a proximity placement group",
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
          name: ["--proximity-placement-group-name", "--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "proximity-placement-group-name" },
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
      description: "List proximity placement groups",
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
      description: "Get a proximity placement group",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: "--include-colocation-status",
          description:
            "Enable fetching the colocation status of all the resources in the proximity placement group",
          args: {
            name: "include-colocation-status",
            suggestions: ["False", "True"],
            isOptional: true,
          },
        },
        {
          name: ["--proximity-placement-group-name", "--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "proximity-placement-group-name" },
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
      description: "Update a proximity placement group",
      options: [
        {
          name: ["--proximity-placement-group-name", "--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "proximity-placement-group-name" },
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
          name: "--intent-vm-sizes",
          description:
            'Specifies possible sizes of virtual machines that can be created in the proximity placement group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "intent-vm-sizes", isVariadic: true },
        },
        {
          name: ["--ppg-type", "--type", "-t"],
          description:
            "The type of the proximity placement group. Allowed values: Standard",
          args: { name: "ppg-type", suggestions: ["Standard", "Ultra"] },
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
      ],
    },
  ],
};

export default completion;
