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
  name: "group",
  description: "Manage resource groups and template deployments",
  subcommands: [
    {
      name: "create",
      description: "Create a new resource group",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description: "Name of the new resource group",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--managed-by",
          description:
            "The ID of the resource that manages this resource group",
          args: { name: "managed-by" },
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
      description: "Delete a resource group",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: ["--force-deletion-types", "-f"],
          description: "The resource types you want to force delete",
          args: {
            name: "force-deletion-types",
            suggestions: [
              "Microsoft.Compute/virtualMachineScaleSets",
              "Microsoft.Compute/virtualMachines",
              "Microsoft.Databricks/workspaces",
            ],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "exists",
      description: "Check if a resource group exists",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
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
      name: "export",
      description: "Captures a resource group as a template",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--export-format",
          description: "The format of the exported template",
          args: {
            name: "export-format",
            suggestions: ["arm", "bicep", "json"],
          },
        },
        {
          name: "--include-comments",
          description: "Export template with comments",
        },
        {
          name: "--include-parameter-default-value",
          description: "Export template parameter with default value",
        },
        {
          name: "--resource-ids",
          description:
            'Space-separated resource ids to filter the export by. To export all resources, do not specify this argument or supply "*"',
          args: { name: "resource-ids", isVariadic: true },
        },
        {
          name: "--skip-all-params",
          description:
            "Export template parameter and skip all parameterization",
        },
        {
          name: "--skip-resource-name-params",
          description:
            "Export template and skip resource name parameterization",
        },
      ],
    },
    {
      name: "list",
      description: "List resource groups",
      options: [
        {
          name: "--tag",
          description:
            "A single tag in 'key[=value]' format. Use '' to clear existing tags",
          args: { name: "tag", isOptional: true },
        },
      ],
    },
    {
      name: "show",
      description: "Gets a resource group",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update a resource group",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
          args: { name: "set", isVariadic: true },
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
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the resource group is met",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
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
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
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
      name: "lock",
      description: "Manage Azure resource group locks",
      subcommands: [
        {
          name: "create",
          description: "Create a resource group lock",
          options: [
            {
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
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
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a resource group lock",
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
              description: "Name of the lock",
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
          description: "List lock information in the resource-group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--filter-string",
              description: "A query filter to use to restrict the results",
              args: { name: "filter-string" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a resource group lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
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
          name: "update",
          description: "Update a resource group lock",
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
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
            {
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
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
