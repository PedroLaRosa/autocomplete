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
  name: "maps",
  description: "Manage Azure Maps",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Maps accounts",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--accept-tos",
              description:
                "You must agree to the License and Privacy Statement to create an account",
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--disable-local-auth",
              description:
                "Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--kind",
              description: "Get or Set Kind property",
              args: { name: "kind", suggestions: ["Gen1", "Gen2"] },
            },
            {
              name: "--linked-resources",
              description:
                "Sets the resources to be used for Managed Identities based operations for the Map account resource",
              args: { name: "linked-resources", isVariadic: true },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--sku", "-s"],
              description:
                "The name of the SKU, in standard format (such as S0)",
              args: { name: "sku", suggestions: ["G2", "S0", "S1"] },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--type",
              description: "The identity type",
              args: {
                name: "type",
                suggestions: [
                  "None",
                  "SystemAssigned",
                  "SystemAssigned, UserAssigned",
                  "UserAssigned",
                ],
              },
            },
            {
              name: "--user-identities",
              description:
                "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Expected value: json-string/@json-file",
              args: { name: "user-identities" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Maps Account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
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
          description:
            "Show all maps accounts in a subscription or in a resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a maps account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
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
            "Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku, Tags, Properties",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--disable-local-auth",
              description:
                "Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage",
              args: {
                name: "disable-local-auth",
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
              name: "--kind",
              description: "Get or Set Kind property",
              args: { name: "kind", suggestions: ["Gen1", "Gen2"] },
            },
            {
              name: "--linked-resources",
              description:
                "Sets the resources to be used for Managed Identities based operations for the Map account resource",
              args: { name: "linked-resources", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--sku", "-s"],
              description:
                "The name of the SKU, in standard format (such as S0)",
              args: { name: "sku", suggestions: ["G2", "S0", "S1"] },
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--type",
              description: "The identity type",
              args: {
                name: "type",
                suggestions: [
                  "None",
                  "SystemAssigned",
                  "SystemAssigned, UserAssigned",
                  "UserAssigned",
                ],
              },
            },
            {
              name: "--user-identities",
              description:
                "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Expected value: json-string/@json-file",
              args: { name: "user-identities" },
            },
          ],
        },
        {
          name: "keys",
          description: "Manage Azure Maps account keys",
          subcommands: [
            {
              name: "list",
              description:
                "Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration",
              options: [
                {
                  name: ["--account-name", "--name", "-n"],
                  description: "The name of the maps account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Resource group name",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "renew",
              description:
                "Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately",
              options: [
                {
                  name: ["--account-name", "--name", "-n"],
                  description: "The name of the maps account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--key",
                  description:
                    "Whether the operation refers to the primary or secondary key",
                  args: { name: "key", suggestions: ["primary", "secondary"] },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Resource group name",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "map",
      description: "Manage map with maps",
      subcommands: [
        {
          name: "list-operation",
          description:
            "List operations available for the Maps Resource Provider",
          options: [acquirePolicyToken, changeReference],
        },
      ],
    },
  ],
};

export default completion;
