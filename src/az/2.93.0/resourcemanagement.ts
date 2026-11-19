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
  name: "resourcemanagement",
  description: "Resourcemanagement CLI command group",
  subcommands: [
    {
      name: "private-link",
      description: "Resourcemanagement private-link management on a resource",
      subcommands: [
        {
          name: "create",
          description: "Create a resource management group private link",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The region to create the resource management private link",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the resource management private link",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description: "Delete a resource management private link",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the resource management private link",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
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
          description: "Get all the resource management private links at scope",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Get resource management private",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the resource management private link",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
