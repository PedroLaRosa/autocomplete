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
  name: "managedservices",
  description: "Manage the registration assignments and definitions in Azure",
  subcommands: [
    {
      name: "assignment",
      description: "Manage the registration assignments in Azure",
      subcommands: [
        {
          name: "create",
          description: "Create a registration assignment",
          options: [
            {
              name: "--definition",
              description:
                "Fully qualified path of the registration definition",
              args: { name: "definition" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--assignment-id",
              description:
                "Can be used to override the generated registration assignment id",
              args: { name: "assignment-id" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a registration assignment",
          options: [
            {
              name: "--assignment",
              description:
                "The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored",
              args: { name: "assignment" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all the registration assignments",
          options: [
            {
              name: "--include-definition",
              description:
                "Tells whether to return registration definition details also along with registration assignment details",
              args: {
                name: "include-definition",
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
          description: "Show registration assignment",
          options: [
            {
              name: "--assignment",
              description:
                "The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored",
              args: { name: "assignment" },
              isRequired: true,
            },
            {
              name: "--include-definition",
              description:
                "Tells whether to return registration definition details also along with registration assignment details",
              args: {
                name: "include-definition",
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
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--assignment",
              description:
                "The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored",
              args: { name: "assignment" },
              isRequired: true,
            },
            {
              name: "--scope",
              description: "Scope of the resource",
              args: { name: "scope" },
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
              name: "--include-definition",
              description:
                "Tells whether to return registration definition details also along with registration assignment details",
              args: {
                name: "include-definition",
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
      ],
    },
    {
      name: "definition",
      description: "Manage the registration definitions in Azure",
      subcommands: [
        {
          name: "create",
          description: "Create a registration definition",
          options: [
            {
              name: "--name",
              description: "Name of the registration definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--principal-id",
              description: "The principal id",
              args: { name: "principal-id" },
              isRequired: true,
            },
            {
              name: "--role-definition-id",
              description: "The role definition id",
              args: { name: "role-definition-id" },
              isRequired: true,
            },
            {
              name: "--tenant-id",
              description: "Id of the managedBy tenant",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--definition-id",
              description: "Guid of the registration definition",
              args: { name: "definition-id" },
            },
            {
              name: "--description",
              description: "Description of the registration definition",
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
              name: "--plan-name",
              description: "The plan name",
              args: { name: "plan-name" },
            },
            {
              name: "--plan-product",
              description: "The product code",
              args: { name: "plan-product" },
            },
            {
              name: "--plan-publisher",
              description: "The publisher ID",
              args: { name: "plan-publisher" },
            },
            {
              name: "--plan-version",
              description: "The plan's version",
              args: { name: "plan-version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a registration definition",
          options: [
            {
              name: "--definition",
              description: "Guid of the registration definition",
              args: { name: "definition" },
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
          description:
            "List all the registration definitions under the default scope or under the subscription provided",
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
          ],
        },
        {
          name: "show",
          description: "Show the registration definition details",
          options: [
            {
              name: "--definition",
              description: "Guid of the registration definition",
              args: { name: "definition" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--definition",
              description: "Guid of the registration definition",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: "--scope",
              description: "Scope of the resource",
              args: { name: "scope" },
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
      ],
    },
  ],
};

export default completion;
