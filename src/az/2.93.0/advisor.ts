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
  name: "advisor",
  description: "Manage Azure Advisor",
  subcommands: [
    {
      name: "configuration",
      description: "Manage Azure Advisor configuration",
      subcommands: [
        {
          name: "list",
          description:
            "List Azure Advisor configuration for the entire subscription",
        },
        {
          name: "show",
          description:
            "Show Azure Advisor configuration for the given subscription or resource group",
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
          name: "update",
          description: "Update Azure Advisor configuration",
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
              name: "--configuration-name",
              description:
                'Advisor configuration name. Value must be "default"',
              args: { name: "configuration-name" },
            },
            {
              name: ["--exclude", "-e"],
              description: "Exclude from recommendation generation",
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--include", "-i"],
              description: "Include in recommendation generation",
            },
            {
              name: ["--low-cpu-threshold", "-l"],
              description: "Value for low CPU threshold",
              args: {
                name: "low-cpu-threshold",
                suggestions: ["10", "15", "20", "5"],
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
          ],
        },
      ],
    },
    {
      name: "recommendation",
      description: "Review Azure Advisor recommendations",
      subcommands: [
        {
          name: "disable",
          description: "Dismiss Azure Advisor recommendations",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--days", "-d"],
              description:
                "Number of days to disable. If not specified, the recommendation is disabled forever",
              args: { name: "days" },
            },
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the recommendation as output by the list command",
              args: { name: "name" },
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
          name: "enable",
          description: "Enable Azure Advisor recommendations",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the recommendation as output by the list command",
              args: { name: "name" },
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
          name: "list",
          description: "List Azure Advisor recommendations",
          options: [
            {
              name: ["--category", "-c"],
              description: "Name of recommendation category",
              args: {
                name: "category",
                suggestions: [
                  "Cost",
                  "HighAvailability",
                  "Performance",
                  "Security",
                ],
              },
            },
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--refresh", "-r"],
              description: "Generate new recommendations",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
