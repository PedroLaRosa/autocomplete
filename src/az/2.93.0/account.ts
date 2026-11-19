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
  name: "account",
  description: "Manage Azure subscription information",
  subcommands: [
    {
      name: "clear",
      description: "Clear all subscriptions from the CLI's local cache",
      options: [acquirePolicyToken, changeReference],
    },
    {
      name: "get-access-token",
      description: "Get a token for utilities to access Azure",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--subscription", "--name", "-n", "-s"],
          description: "Name or ID of subscription",
          args: { name: "subscription" },
        },
        {
          name: "--resource",
          description: "Azure resource endpoints in Microsoft Entra v1.0",
          args: { name: "resource" },
        },
        {
          name: "--resource-type",
          description: "Type of well-known resource",
          args: {
            name: "resource-type",
            suggestions: [
              "aad-graph",
              "arm",
              "batch",
              "data-lake",
              "media",
              "ms-graph",
              "oss-rdbms",
            ],
          },
        },
        {
          name: "--scope",
          description:
            "Space-separated scopes in Microsoft Entra v2.0. Default to Azure Resource Manager",
          args: { name: "scope", isOptional: true, isVariadic: true },
        },
        {
          name: ["--tenant", "-t"],
          description:
            "Tenant ID for which the token is acquired. Only available for user and service principal account, not for managed identity or Cloud Shell account",
          args: { name: "tenant" },
        },
      ],
    },
    {
      name: "list",
      description:
        "Get a list of subscriptions for the logged in account. By default, only 'Enabled' subscriptions from the current cloud is shown",
      options: [
        {
          name: "--all",
          description:
            "List all subscriptions from all clouds, including subscriptions that are not 'Enabled'",
        },
        {
          name: "--refresh",
          description: "Retrieve up-to-date subscriptions from server",
        },
      ],
    },
    {
      name: "list-locations",
      description: "List supported regions for the current subscription",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--include-extended-locations",
          description: "Whether to include extended locations",
          args: {
            name: "include-extended-locations",
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
      name: "set",
      description: "Set a subscription to be the current active subscription",
      options: [
        {
          name: ["--subscription", "--name", "-n", "-s"],
          description: "Name or ID of subscription",
          args: { name: "subscription" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "show",
      description: "Get the details of a subscription",
      options: [
        {
          name: ["--subscription", "--name", "-n", "-s"],
          description: "Name or ID of subscription",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "lock",
      description: "Manage Azure subscription level locks",
      subcommands: [
        {
          name: "create",
          description: "Create a subscription lock",
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
          description: "Delete a subscription lock",
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
          ],
        },
        {
          name: "list",
          description: "List lock information in the subscription",
          options: [
            {
              name: "--filter-string",
              description: "A query filter to use to restrict the results",
              args: { name: "filter-string" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a subscription lock",
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
          ],
        },
        {
          name: "update",
          description: "Update a subscription lock",
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
          ],
        },
      ],
    },
    {
      name: "management-group",
      description: "Manage Azure Management Groups",
      subcommands: [
        {
          name: "check-name-availability",
          description: "Check if a Management Group Name is Valid",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "create",
          description: "Create a new management group",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--display-name", "-d"],
              description:
                "Sets the display name of the management group. If null, the group name is set as the display name",
              args: { name: "display-name" },
            },
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
            {
              name: ["--parent", "-p"],
              description:
                "Sets the parent of the management group. Can be the fully qualified id or the name of the management group. If null, the root tenant group is set as the parent",
              args: { name: "parent" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing management group",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
          ],
        },
        {
          name: "list",
          description: "List all management groups in the current tenant",
          options: [
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of the management group",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the management group (the last segment of the resource ID). Do not use display name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--expand", "-e"],
              description:
                "If given, lists the children in the first level of hierarchy",
            },
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
            {
              name: ["--recurse", "-r"],
              description:
                "If given, lists the children in all levels of hierarchy",
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing management group",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
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
              name: ["--display-name", "-d"],
              description:
                "Updates the display name of the management group. If null, no change is made",
              args: { name: "display-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--parent", "-p"],
              description:
                "Update the parent of the management group. Can be the fully qualified id or the name of the management group. If null, no change is made",
              args: { name: "parent" },
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
        {
          name: "entities",
          description:
            "Entity operations (Management Group and Subscriptions) for Management Groups",
          subcommands: [
            {
              name: "list",
              description: "List all entities for the authenticated user",
            },
          ],
        },
        {
          name: "hierarchy-settings",
          description:
            "Provide operations for hierarchy settings defined at the management group level. Settings can only be set on the root Management Group of the hierarchy",
          subcommands: [
            {
              name: "create",
              description:
                "Create hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--default-management-group", "-m"],
                  description:
                    "Set the default Management Group under which new subscriptions get added in this tenant. Default setting is the Root Management Group",
                  args: { name: "default-management-group" },
                },
                {
                  name: ["--require-authorization-for-group-creation", "-r"],
                  description:
                    "Indicate whether RBAC access is required upon group creation under the root Management Group. True means user will require Microsoft.Management/managementGroups/write action on the root Management Group. Default setting is false",
                  args: { name: "require-authorization-for-group-creation" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
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
                "Get all the hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
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
                  name: ["--default-management-group", "-m"],
                  description:
                    "Set the default Management Group under which new subscriptions get added in this tenant. Default setting is the Root Management Group",
                  args: { name: "default-management-group" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--require-authorization-for-group-creation", "-r"],
                  description:
                    "Indicate whether RBAC access is required upon group creation under the root Management Group. True means user will require Microsoft.Management/managementGroups/write action on the root Management Group. Default setting is false",
                  args: { name: "require-authorization-for-group-creation" },
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
          name: "subscription",
          description: "Subscription operations for Management Groups",
          subcommands: [
            {
              name: "add",
              description: "Add a subscription to a management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--subscription", "-s"],
                  description: "Subscription Id or Name",
                  args: { name: "subscription" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "remove",
              description:
                "Remove an existing subscription from a management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--subscription", "-s"],
                  description: "Subscription Id or Name",
                  args: { name: "subscription" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a subscription under a known management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--subscription", "-s"],
                  description: "Subscription Id or Name",
                  args: { name: "subscription" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show-sub-under-mg",
              description: "Get the subscription under a management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
          ],
        },
        {
          name: "tenant-backfill",
          description:
            "Backfill Tenant Subscription Operations for Management Groups",
          subcommands: [
            {
              name: "get",
              description: "Get the backfill status for a tenant",
              options: [acquirePolicyToken, changeReference],
            },
            {
              name: "start",
              description: "Start backfilling subscriptions for a tenant",
              options: [acquirePolicyToken, changeReference],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
