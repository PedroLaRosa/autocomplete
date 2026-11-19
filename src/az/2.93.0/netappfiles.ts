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
  name: "netappfiles",
  description: "Manage Azure NetApp Files (ANF) Resources",
  subcommands: [
    {
      name: "check-file-path-availability",
      description: "Check if a file path is available",
      options: [
        {
          name: "--name",
          description: "File path to verify",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--subnet-id",
          description:
            "The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes",
          args: { name: "subnet-id" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--availability-zone",
          description:
            "The Azure Resource logical availability zone which is used within zone mapping lookup for the subscription and region. The lookup will retrieve the physical zone where volume is placed",
          args: { name: "availability-zone" },
        },
        changeReference,
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
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
      name: "check-name-availability",
      description: "Check if a resource name is available",
      options: [
        {
          name: "--name",
          description: "Resource name to verify",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description: "Resource group name",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--type",
          description: "Resource type used for verification",
          args: {
            name: "type",
            suggestions: [
              "Microsoft.NetApp/netAppAccounts",
              "Microsoft.NetApp/netAppAccounts/backupVaults/backups",
              "Microsoft.NetApp/netAppAccounts/capacityPools",
              "Microsoft.NetApp/netAppAccounts/capacityPools/volumes",
              "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups",
              "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots",
            ],
          },
          isRequired: true,
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
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
      name: "check-quota-availability",
      description: "Check if a quota is available",
      options: [
        {
          name: "--name",
          description: "Name of the resource to verify",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description: "Resource group name",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--type",
          description: "Resource type used for verification",
          args: {
            name: "type",
            suggestions: [
              "Microsoft.NetApp/netAppAccounts",
              "Microsoft.NetApp/netAppAccounts/backupVaults/backups",
              "Microsoft.NetApp/netAppAccounts/capacityPools",
              "Microsoft.NetApp/netAppAccounts/capacityPools/volumes",
              "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups",
              "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots",
            ],
          },
          isRequired: true,
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
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
      name: "query-network-sibling-set",
      description: "Describe a network sibling set",
      options: [
        {
          name: "--network-sibling-set-id",
          description:
            "Network Sibling Set ID for a group of volumes sharing networking resources in a subnet",
          args: { name: "network-sibling-set-id" },
          isRequired: true,
        },
        {
          name: "--subnet-id",
          description:
            "The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes. Example /subscriptions/subscriptionId/resourceGroups/resourceGroup/providers/Microsoft.Network/virtualNetworks/testVnet/subnets/{mySubnet}",
          args: { name: "subnet-id" },
          isRequired: true,
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
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
      name: "update-network-sibling-set",
      description: "Update the network features of a network sibling set",
      options: [
        {
          name: "--network-sibling-set-id",
          description:
            "Network Sibling Set ID for a group of volumes sharing networking resources in a subnet",
          args: { name: "network-sibling-set-id" },
          isRequired: true,
        },
        {
          name: ["--network-sibling-set-state-id", "--state-id"],
          description:
            "Network sibling set state Id identifying the current state of the sibling set. Value can start with a dash, use ='-value'",
          args: { name: "network-sibling-set-state-id" },
          isRequired: true,
        },
        {
          name: "--subnet-id",
          description:
            "The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes. Example /subscriptions/subscriptionId/resourceGroups/resourceGroup/providers/Microsoft.Network/virtualNetworks/testVnet/subnets/{mySubnet}",
          args: { name: "subnet-id" },
          isRequired: true,
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--network-features",
          description: "Network features available to the volume",
          args: {
            name: "network-features",
            suggestions: ["Basic", "Standard"],
          },
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
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "account",
      description: "Manage Azure NetApp Files (ANF) Account Resources",
      subcommands: [
        {
          name: "change-key-vault",
          description:
            "Change KeyVault/Managed HSM that is used for encryption of volumes under NetApp account",
          options: [
            {
              name: ["--account-name", "-a", "-n"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--key-vault-private-endpoints", "--endpoint-pairs"],
              description:
                'Pairs of virtual network ID and private endpoint ID. Every virtual network that has volumes encrypted with customer-managed keys needs its own key vault private endpoint. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "key-vault-private-endpoints", isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--key-name",
              description:
                "The name of the key that should be used for encryption",
              args: { name: "key-name" },
            },
            {
              name: ["--key-vault-resource-id", "--keyvault-resource-id"],
              description:
                "Azure resource ID of the key vault/managed HSM that should be used for encryption",
              args: { name: "key-vault-resource-id" },
            },
            {
              name: ["--key-vault-uri", "-v"],
              description:
                "The URI of the key vault/managed HSM that should be used for encryption",
              args: { name: "key-vault-uri" },
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
          name: "create",
          description:
            "Create the specified NetApp account within the resource group",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: "--active-directories",
              description:
                'Active Directories Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "active-directories", isVariadic: true },
            },
            changeReference,
            {
              name: "--federated-client-id",
              description:
                "ClientId of the multi-tenant AAD Application. Used to access cross-tenant keyvaults",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--identity-type", "--type"],
              description:
                "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
              args: {
                name: "identity-type",
                suggestions: [
                  "None",
                  "SystemAssigned",
                  "SystemAssigned,UserAssigned",
                  "UserAssigned",
                ],
              },
            },
            {
              name: "--key-name",
              description: "The name of KeyVault key",
              args: { name: "key-name" },
            },
            {
              name: "--key-source",
              description:
                "The encryption keySource (provider). Possible values (case-insensitive): Microsoft.NetApp, Microsoft.KeyVault",
              args: {
                name: "key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: ["--key-vault-resource-id", "--keyvault-resource-id"],
              description: "The resource ID of KeyVault",
              args: { name: "key-vault-resource-id" },
            },
            {
              name: ["--key-vault-uri", "-v"],
              description: "The Uri of KeyVault",
              args: { name: "key-vault-uri" },
            },
            {
              name: "--ldap-configuration",
              description:
                'LDAP Configuration for the account. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ldap-configuration", isVariadic: true },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: ["--mi-system-assigned", "--system-assigned"],
              description: "Set the system managed identity",
              args: { name: "mi-system-assigned", isOptional: true },
            },
            {
              name: ["--mi-user-assigned", "--user-assigned"],
              description:
                'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "mi-user-assigned",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--nfs-v4-id-domain",
              description:
                "Domain for NFSv4 user ID mapping. This property will be set for all NetApp accounts in the subscription and region and only affect non ldap NFSv4 volumes",
              args: { name: "nfs-v4-id-domain" },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: ["--user-assigned-identities", "--user-ids"],
              description:
                'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "user-assigned-identities", isVariadic: true },
            },
            {
              name: ["--user-assigned-identity", "-u"],
              description:
                "The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified NetApp account",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the NetApp account",
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
          name: "get-key-vault-status",
          description:
            "Contains data from encryption.keyVaultProperties as well as information about which private endpoint is used by each encryption sibling set. Response from this endpoint can be used for transitiontocmk",
          options: [
            {
              name: ["--account-name", "-a", "-n"],
              description: "The name of the NetApp account",
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
          ],
        },
        {
          name: "list",
          description:
            "List and describe all NetApp accounts in the subscription",
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
          name: "migrate-backup",
          description:
            "Migrate the backups under a NetApp account to backup vault",
          options: [
            {
              name: "--backup-vault-id",
              description: "The ResourceId of the Backup Vault",
              args: { name: "backup-vault-id" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
          ],
        },
        {
          name: "refresh-ldap-bind-password",
          description:
            "Refresh LDAP Bind DN password by fetching the latest password from Azure Key Vault",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
          ],
        },
        {
          name: "renew-credentials",
          description:
            "Renew identity credentials that are used to authenticate to key vault, for customer-managed key encryption. If encryption.identity.principalId does not match identity.principalId, running this operation will fix it",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
          ],
        },
        {
          name: "show",
          description: "Get the NetApp account",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the NetApp account",
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
          name: "transitiontocmk",
          description:
            "Transitions all volumes in a VNet to a different encryption key source (Microsoft-managed key or Azure Key Vault). Operation fails if targeted volumes share encryption sibling set with volumes from another account",
          options: [
            {
              name: ["--account-name", "-a", "-n"],
              description: "The name of the NetApp account",
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
              name: "--private-endpoint-id",
              description:
                "Identifier of the private endpoint to reach the Azure Key Vault",
              args: { name: "private-endpoint-id" },
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
              name: "--virtual-network-id",
              description: "Identifier for the virtual network",
              args: { name: "virtual-network-id" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the specified NetApp account within the resource group",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--active-directories",
              description:
                'Active Directories Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "active-directories", isVariadic: true },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            changeReference,
            {
              name: "--federated-client-id",
              description:
                "ClientId of the multi-tenant AAD Application. Used to access cross-tenant keyvaults",
              args: { name: "federated-client-id" },
            },
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
              name: ["--identity-type", "--type"],
              description:
                "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
              args: {
                name: "identity-type",
                suggestions: [
                  "None",
                  "SystemAssigned",
                  "SystemAssigned,UserAssigned",
                  "UserAssigned",
                ],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--key-name",
              description: "The name of KeyVault key",
              args: { name: "key-name" },
            },
            {
              name: "--key-source",
              description:
                "The encryption keySource (provider). Possible values (case-insensitive): Microsoft.NetApp, Microsoft.KeyVault",
              args: {
                name: "key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: ["--key-vault-resource-id", "--keyvault-resource-id"],
              description: "The resource ID of KeyVault",
              args: { name: "key-vault-resource-id" },
            },
            {
              name: ["--key-vault-uri", "-v"],
              description: "The Uri of KeyVault",
              args: { name: "key-vault-uri" },
            },
            {
              name: "--ldap-configuration",
              description:
                'LDAP Configuration for the account. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ldap-configuration", isVariadic: true },
            },
            {
              name: "--nfs-v4-id-domain",
              description:
                "Domain for NFSv4 user ID mapping. This property will be set for all NetApp accounts in the subscription and region and only affect non ldap NFSv4 volumes",
              args: { name: "nfs-v4-id-domain" },
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: ["--user-assigned-identities", "--user-ids"],
              description:
                'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "user-assigned-identities", isVariadic: true },
            },
            {
              name: ["--user-assigned-identity", "-u"],
              description:
                "The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
        {
          name: "ad",
          description:
            "Manage Azure NetApp Files (ANF) Account active directories",
          subcommands: [
            {
              name: "add",
              description: "Add an active directory to the account",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: "--active-directory-id",
                  description: "Id of the Active Directory",
                  args: { name: "active-directory-id" },
                },
                {
                  name: "--ad-name",
                  description:
                    "Name of the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "ad-name" },
                },
                {
                  name: "--administrators",
                  description:
                    'Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "administrators", isVariadic: true },
                },
                {
                  name: "--aes-encryption",
                  description:
                    "If enabled, AES encryption will be enabled for SMB communication",
                  args: {
                    name: "aes-encryption",
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
                  name: [
                    "--allow-local-nfs-users-with-ldap",
                    "--allow-local-ldap-users",
                  ],
                  description:
                    "If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes",
                  args: {
                    name: "allow-local-nfs-users-with-ldap",
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
                  name: "--backup-operators",
                  description:
                    'Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "backup-operators", isVariadic: true },
                },
                changeReference,
                {
                  name: "--dns",
                  description:
                    "Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain",
                  args: { name: "dns" },
                },
                {
                  name: "--domain",
                  description: "Name of the Active Directory domain",
                  args: { name: "domain" },
                },
                {
                  name: ["--encrypt-dc-connections", "--encrypt-dc-conn"],
                  description:
                    "If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted",
                  args: {
                    name: "encrypt-dc-connections",
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
                  name: "--kdc-ip",
                  description:
                    "Kdc server IP address for the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "kdc-ip" },
                },
                {
                  name: "--ldap-over-tls",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be secured via TLS",
                  args: {
                    name: "ldap-over-tls",
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
                  name: "--ldap-search-scope",
                  description:
                    'LDAP Search scope options Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ldap-search-scope", isVariadic: true },
                },
                {
                  name: "--ldap-signing",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be signed",
                  args: {
                    name: "ldap-signing",
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
                  name: "--organizational-unit",
                  description:
                    "The Organizational Unit (OU) within the Windows Active Directory",
                  args: { name: "organizational-unit" },
                },
                {
                  name: "--password",
                  description:
                    "Plain text password of Active Directory domain administrator, value is masked in the response If value is blank it's asked from the tty",
                  args: { name: "password", isOptional: true },
                },
                {
                  name: ["--preferred-servers-for-ldap-client", "-p"],
                  description:
                    "Comma separated list of IPv4 addresses of preferred servers for LDAP client. At most two comma separated IPv4 addresses can be passed",
                  args: { name: "preferred-servers-for-ldap-client" },
                },
                {
                  name: "--security-operators",
                  description:
                    'Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "security-operators", isVariadic: true },
                },
                {
                  name: [
                    "--server-root-ca-certificate",
                    "--server-root-ca-cert",
                  ],
                  description:
                    "When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes. If value is blank it's asked from the tty",
                  args: {
                    name: "server-root-ca-certificate",
                    isOptional: true,
                  },
                },
                {
                  name: "--site",
                  description:
                    "The Active Directory site the service will limit Domain Controller discovery to",
                  args: { name: "site" },
                },
                {
                  name: "--smb-server-name",
                  description:
                    "NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes",
                  args: { name: "smb-server-name" },
                },
                {
                  name: "--username",
                  description:
                    "A domain user account with permission to create machine accounts",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: "list",
              description: "List the active directories of an account",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              name: "remove",
              description: "Remove an active directory from the account",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--active-directory-id", "--active-directory"],
                  description: "Id of the Active Directory",
                  args: { name: "active-directory-id" },
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
              name: "show",
              description: "Get the specified ANF active directory",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--active-directory-id",
                  description: "Id of the Active Directory",
                  args: { name: "active-directory-id" },
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
              name: "update",
              description: "Updates an active directory to the account",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--active-directory-id",
                  description: "Id of the Active Directory",
                  args: { name: "active-directory-id" },
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
                  name: "--ad-name",
                  description:
                    "Name of the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "ad-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--administrators",
                  description:
                    'Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "administrators", isVariadic: true },
                },
                {
                  name: "--aes-encryption",
                  description:
                    "If enabled, AES encryption will be enabled for SMB communication",
                  args: {
                    name: "aes-encryption",
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
                  name: [
                    "--allow-local-nfs-users-with-ldap",
                    "--allow-local-ldap-users",
                  ],
                  description:
                    "If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes",
                  args: {
                    name: "allow-local-nfs-users-with-ldap",
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
                  name: "--backup-operators",
                  description:
                    'Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "backup-operators", isVariadic: true },
                },
                changeReference,
                {
                  name: "--dns",
                  description:
                    "Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain",
                  args: { name: "dns" },
                },
                {
                  name: "--domain",
                  description: "Name of the Active Directory domain",
                  args: { name: "domain" },
                },
                {
                  name: "--encrypt-dc-connections",
                  description:
                    "If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted",
                  args: {
                    name: "encrypt-dc-connections",
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
                  name: "--kdc-ip",
                  description:
                    "Kdc server IP address for the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "kdc-ip" },
                },
                {
                  name: "--ldap-over-tls",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be secured via TLS",
                  args: {
                    name: "ldap-over-tls",
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
                  name: "--ldap-search-scope",
                  description:
                    'LDAP Search scope options Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ldap-search-scope", isVariadic: true },
                },
                {
                  name: "--ldap-signing",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be signed",
                  args: {
                    name: "ldap-signing",
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
                  name: "--organizational-unit",
                  description:
                    "The Organizational Unit (OU) within the Windows Active Directory",
                  args: { name: "organizational-unit" },
                },
                {
                  name: "--password",
                  description:
                    "Plain text password of Active Directory domain administrator, value is masked in the response If value is blank it's asked from the tty",
                  args: { name: "password", isOptional: true },
                },
                {
                  name: ["--preferred-servers-for-ldap-client", "-p"],
                  description:
                    "Comma separated list of IPv4 addresses of preferred servers for LDAP client. At most two comma separated IPv4 addresses can be passed",
                  args: { name: "preferred-servers-for-ldap-client" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: "--security-operators",
                  description:
                    'Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "security-operators", isVariadic: true },
                },
                {
                  name: [
                    "--server-root-ca-certificate",
                    "--server-root-ca-cert",
                  ],
                  description:
                    "When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes. If value is blank it's asked from the tty",
                  args: {
                    name: "server-root-ca-certificate",
                    isOptional: true,
                  },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--site",
                  description:
                    "The Active Directory site the service will limit Domain Controller discovery to",
                  args: { name: "site" },
                },
                {
                  name: "--smb-server-name",
                  description:
                    "NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes",
                  args: { name: "smb-server-name" },
                },
                {
                  name: "--username",
                  description:
                    "A domain user account with permission to create machine accounts",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
        {
          name: "backup-policy",
          description: "Manage Azure NetApp Files (ANF) Bakup Policy Resources",
          subcommands: [
            {
              name: "create",
              description: "Create a backup policy for Netapp Account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--backup-policy-name", "--name", "-b", "-n"],
                  description:
                    "Backup policy Name which uniquely identify backup policy",
                  args: { name: "backup-policy-name" },
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
                  name: ["--daily-backups", "-d"],
                  description: "Daily backups count to keep",
                  args: { name: "daily-backups" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                  args: {
                    name: "enabled",
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
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: ["--monthly-backups", "-m"],
                  description: "Monthly backups count to keep",
                  args: { name: "monthly-backups" },
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
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: ["--weekly-backups", "-w"],
                  description: "Weekly backups count to keep",
                  args: { name: "weekly-backups" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete backup policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--backup-policy-name", "--name", "-b", "-n"],
                  description:
                    "Backup policy Name which uniquely identify backup policy",
                  args: { name: "backup-policy-name" },
                },
                changeReference,
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
              description: "List backup policies for Netapp Account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              description: "Get a particular backup Policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-policy-name", "--name", "-b", "-n"],
                  description:
                    "Backup policy Name which uniquely identify backup policy",
                  args: { name: "backup-policy-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              description: "Update a backup policy for Netapp Account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--backup-policy-name", "--name", "-b", "-n"],
                  description:
                    "Backup policy Name which uniquely identify backup policy",
                  args: { name: "backup-policy-name" },
                },
                changeReference,
                {
                  name: ["--daily-backups", "-d"],
                  description: "Daily backups count to keep",
                  args: { name: "daily-backups" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                  args: {
                    name: "enabled",
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
                  name: ["--monthly-backups", "-m"],
                  description: "Monthly backups count to keep",
                  args: { name: "monthly-backups" },
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: ["--weekly-backups", "-w"],
                  description: "Weekly backups count to keep",
                  args: { name: "weekly-backups" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--backup-policy-name", "--name", "-b", "-n"],
                  description:
                    "Backup policy Name which uniquely identify backup policy",
                  args: { name: "backup-policy-name" },
                },
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
        {
          name: "backup-vault",
          description: "Manage Azure NetApp Files (ANF) BackupVault Resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create the specified Backup Vault in the NetApp account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--backup-vault-name", "--name", "-n", "-v"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
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
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
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
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the specified Backup Vault",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--backup-vault-name", "--name", "-n", "-v"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
                },
                changeReference,
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
                "List and describe all Backup Vaults in the NetApp account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              description: "Get the Backup Vault",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-vault-name", "--name", "-n", "-v"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
                "Update the specified Backup Vault in the NetApp account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--backup-vault-name", "--name", "-n", "-v"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--backup-vault-name", "--name", "-n", "-v"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
                },
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
              name: "backup",
              description: "Manage Azure NetApp Files (ANF) Backup Resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a backup under the Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--backup-name", "--name", "-b", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--backup-vault-name", "-v"],
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
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
                      name: "--volume-resource-id",
                      description: "ResourceId used to identify the Volume",
                      args: { name: "volume-resource-id" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--label",
                      description: "Label for backup",
                      args: { name: "label" },
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
                      name: "--snapshot-name",
                      description: "The name of the snapshot",
                      args: { name: "snapshot-name" },
                    },
                    {
                      name: "--use-existing-snapshot",
                      description:
                        "Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups",
                      args: {
                        name: "use-existing-snapshot",
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
                  description: "Delete a Backup under the Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    {
                      name: ["--backup-name", "--name", "-b", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: ["--backup-vault-name", "-v"],
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
                    changeReference,
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
                  description: "List all backups Under a Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--backup-vault-name", "-v"],
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
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
                      name: "--filter",
                      description:
                        "An option to specify the VolumeResourceId. If present, then only returns the backups under the specified volume",
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
                  ],
                },
                {
                  name: "restore-file",
                  description:
                    "Restore the specified files from the specified backup to the active filesystem",
                  options: [
                    {
                      name: "--destination-volume-id",
                      description:
                        "Resource Id of the destination volume on which the files need to be restored",
                      args: { name: "destination-volume-id" },
                      isRequired: true,
                    },
                    {
                      name: "--file-list",
                      description:
                        'List of files to be restored Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "file-list", isVariadic: true },
                      isRequired: true,
                    },
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    {
                      name: ["--backup-name", "-b"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: ["--backup-vault-name", "-v"],
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
                    changeReference,
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
                      name: "--restore-file-path",
                      description:
                        "Destination folder where the files will be restored. The path name should start with a forward slash. If it is omitted from request then restore is done at the root folder of the destination volume by default",
                      args: { name: "restore-file-path" },
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
                  description: "Get the specified Backup under Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: ["--backup-name", "--name", "-b", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: ["--backup-vault-name", "-v"],
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
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
                  description: "Update a backup under the Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add", isVariadic: true },
                    },
                    {
                      name: ["--backup-name", "--name", "-b", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: ["--backup-vault-name", "-v"],
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
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
                      name: "--label",
                      description: "Label for backup",
                      args: { name: "label" },
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
                    "Place the CLI in a waiting state until a condition is met",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    {
                      name: ["--backup-name", "--name", "-b", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: ["--backup-vault-name", "-v"],
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
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
        },
        {
          name: "identity",
          description: "Manage Identity",
          subcommands: [
            {
              name: "assign",
              description: "Assign the user or system managed identities",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Set the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
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
              ],
            },
            {
              name: "remove",
              description: "Remove the user or system managed identities",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Set the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Set the user managed identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
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
              ],
            },
            {
              name: "show",
              description: "Show the details of managed identities",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
        {
          name: "ldap-configuration",
          description: "Manage Ldap Configuration",
          subcommands: [
            {
              name: "create",
              description: "Create LDAP configuration",
              options: [
                {
                  name: "--account-name",
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: ["--bind-authentication-level", "--bind-auth-level"],
                  description:
                    "The authentication level to use when binding to the LDAP server, defaults to Anonymous",
                  args: {
                    name: "bind-authentication-level",
                    suggestions: ["Anonymous", "Simple"],
                  },
                },
                {
                  name: "--bind-dn",
                  description:
                    "The distinguished name (DN) to bind as when performing LDAP operations",
                  args: { name: "bind-dn" },
                },
                {
                  name: ["--bind-password-azure-key-vault-uri", "--bp-akv-uri"],
                  description:
                    "The Azure Key Vault URI where the Bind DN user password is stored",
                  args: { name: "bind-password-azure-key-vault-uri" },
                },
                {
                  name: ["--bind-password-secret-name", "--bp-secret-name"],
                  description:
                    "The name of the secret in Azure Key Vault that contains the Bind DN user password",
                  args: { name: "bind-password-secret-name" },
                },
                {
                  name: [
                    "--bind-password-user-assigned-identity",
                    "--bp-user-assigned-mi",
                  ],
                  description:
                    "The ARM resource identifier of the user assigned identity used to authenticate with key vault",
                  args: { name: "bind-password-user-assigned-identity" },
                },
                {
                  name: "--certificate-cn-host",
                  description:
                    "The CN host name used while generating the certificate, LDAP Over TLS requires the CN host name to create DNS host entry",
                  args: { name: "certificate-cn-host" },
                },
                changeReference,
                {
                  name: "--dns-servers",
                  description:
                    'List of DNS server IPv4 addresses for resolving the CN host certificate. This parameter is used when LDAP over TLS is enabled. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "dns-servers", isVariadic: true },
                },
                {
                  name: "--domain",
                  description: "Name of the LDAP configuration domain",
                  args: { name: "domain" },
                },
                {
                  name: "--group-dn",
                  description:
                    "This specifies the group DN (Distinguished Name), which overrides the base DN for group lookups",
                  args: { name: "group-dn" },
                },
                {
                  name: "--ldap-port",
                  description:
                    "Port number for LDAP communication. Default is 389 for LDAP",
                  args: { name: "ldap-port" },
                },
                {
                  name: "--ldap-servers",
                  description:
                    'List of LDAP server IP addresses (IPv4 only) for the LDAP domain. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ldap-servers", isVariadic: true },
                },
                {
                  name: "--net-group-dn",
                  description:
                    "This specifies the netgroup DN (Distinguished Name), which overrides the base DN for netgroup lookups",
                  args: { name: "net-group-dn" },
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
                  name: "--secure-ldap-type",
                  description:
                    "Indicates the secure LDAP mode for encrypting communication between ANF storage and customer LDAP servers",
                  args: {
                    name: "secure-ldap-type",
                    suggestions: ["LdapOverTLS", "None"],
                  },
                },
                {
                  name: "--server-ca-certificate",
                  description:
                    "When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded ldap servers CA certificate. If value is blank it's asked from the tty",
                  args: { name: "server-ca-certificate", isOptional: true },
                },
                {
                  name: "--user-dn",
                  description:
                    "This specifies the user DN (Distinguished Name), which overrides the base DN for user lookups",
                  args: { name: "user-dn" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete LDAP configuration",
              options: [
                {
                  name: "--account-name",
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              name: "show",
              description: "Show LDAP configuration",
              options: [
                {
                  name: "--account-name",
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              name: "update",
              description: "Update LDAP configuration",
              options: [
                {
                  name: "--account-name",
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                {
                  name: ["--bind-authentication-level", "--bind-auth-level"],
                  description:
                    "The authentication level to use when binding to the LDAP server, defaults to Anonymous",
                  args: {
                    name: "bind-authentication-level",
                    suggestions: ["Anonymous", "Simple"],
                  },
                },
                {
                  name: "--bind-dn",
                  description:
                    "The distinguished name (DN) to bind as when performing LDAP operations",
                  args: { name: "bind-dn" },
                },
                {
                  name: ["--bind-password-azure-key-vault-uri", "--bp-akv-uri"],
                  description:
                    "The Azure Key Vault URI where the Bind DN user password is stored",
                  args: { name: "bind-password-azure-key-vault-uri" },
                },
                {
                  name: ["--bind-password-secret-name", "--bp-secret-name"],
                  description:
                    "The name of the secret in Azure Key Vault that contains the Bind DN user password",
                  args: { name: "bind-password-secret-name" },
                },
                {
                  name: [
                    "--bind-password-user-assigned-identity",
                    "--bp-user-assigned-mi",
                  ],
                  description:
                    "The ARM resource identifier of the user assigned identity used to authenticate with key vault",
                  args: { name: "bind-password-user-assigned-identity" },
                },
                {
                  name: "--certificate-cn-host",
                  description:
                    "The CN host name used while generating the certificate, LDAP Over TLS requires the CN host name to create DNS host entry",
                  args: { name: "certificate-cn-host" },
                },
                changeReference,
                {
                  name: "--dns-servers",
                  description:
                    'List of DNS server IPv4 addresses for resolving the CN host certificate. This parameter is used when LDAP over TLS is enabled. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "dns-servers", isVariadic: true },
                },
                {
                  name: "--domain",
                  description: "Name of the LDAP configuration domain",
                  args: { name: "domain" },
                },
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
                  name: "--group-dn",
                  description:
                    "This specifies the group DN (Distinguished Name), which overrides the base DN for group lookups",
                  args: { name: "group-dn" },
                },
                {
                  name: "--ldap-port",
                  description:
                    "Port number for LDAP communication. Default is 389 for LDAP",
                  args: { name: "ldap-port" },
                },
                {
                  name: "--ldap-servers",
                  description:
                    'List of LDAP server IP addresses (IPv4 only) for the LDAP domain. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ldap-servers", isVariadic: true },
                },
                {
                  name: "--net-group-dn",
                  description:
                    "This specifies the netgroup DN (Distinguished Name), which overrides the base DN for netgroup lookups",
                  args: { name: "net-group-dn" },
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
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: "--secure-ldap-type",
                  description:
                    "Indicates the secure LDAP mode for encrypting communication between ANF storage and customer LDAP servers",
                  args: {
                    name: "secure-ldap-type",
                    suggestions: ["LdapOverTLS", "None"],
                  },
                },
                {
                  name: "--server-ca-certificate",
                  description:
                    "When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded ldap servers CA certificate. If value is blank it's asked from the tty",
                  args: { name: "server-ca-certificate", isOptional: true },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--user-dn",
                  description:
                    "This specifies the user DN (Distinguished Name), which overrides the base DN for user lookups",
                  args: { name: "user-dn" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: "--account-name",
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
        {
          name: "quota-limit",
          description: "Manage Quota Limit",
          subcommands: [
            {
              name: "list",
              description:
                "List a list of quota limits for all quotas that are under account. Currently PoolsPerAccount is the only one",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              description:
                "Get the default, current and usages account quota limit",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--quota-limit-name", "--name", "-n"],
                  description: "The name of the Quota Limit",
                  args: { name: "quota-limit-name" },
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
      name: "cache",
      description: "Manage Cache resources",
      subcommands: [
        {
          name: "create",
          description: "Create the specified Cache within the Capacity Pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--cache-name", "--name", "-n"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
              isRequired: true,
            },
            {
              name: ["--cache-subnet-resource-id", "--cache-subnet-id"],
              description:
                "The Azure Resource URI for a delegated cache subnet that will be used to allocate data IPs",
              args: { name: "cache-subnet-resource-id" },
              isRequired: true,
            },
            {
              name: "--encryption-key-source",
              description:
                "Source of key used to encrypt data in the cache. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'",
              args: {
                name: "encryption-key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
              isRequired: true,
            },
            {
              name: "--file-path",
              description: "The file path of the Cache",
              args: { name: "file-path" },
              isRequired: true,
            },
            {
              name: "--peer-addresses",
              description:
                'ONTAP Intercluster LIF IP addresses. One IP address per cluster node is required Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "peer-addresses", isVariadic: true },
              isRequired: true,
            },
            {
              name: "--peer-cluster-name",
              description:
                "ONTAP cluster name of external cluster hosting the origin volume. Must match the exact cluster name",
              args: { name: "peer-cluster-name" },
              isRequired: true,
            },
            {
              name: "--peer-volume-name",
              description:
                "External origin volume name associated to this cache",
              args: { name: "peer-volume-name" },
              isRequired: true,
            },
            {
              name: "--peer-vserver-name",
              description:
                "External Vserver (SVM) name name of the SVM hosting the origin volume",
              args: { name: "peer-vserver-name" },
              isRequired: true,
            },
            {
              name: ["--peering-subnet-resource-id", "--peering-subnet-id"],
              description:
                "The Azure Resource URI for a delegated subnet that will be used for ANF Intercluster Interface IP addresses",
              args: { name: "peering-subnet-resource-id" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: "--size",
              description:
                "Maximum storage quota allowed for a file system in bytes. Valid values are in the range 50GiB to 1PiB. Values expressed in bytes as multiples of 1GiB",
              args: { name: "size" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--cifs-change-notifications", "--cifs-change-notify"],
              description:
                "Flag indicating whether a CIFS change notification is enabled for the cache",
              args: {
                name: "cifs-change-notifications",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--export-policy-rules", "--rules"],
              description:
                'Export policy rule Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-policy-rules", isVariadic: true },
            },
            {
              name: "--global-file-locking",
              description:
                "Flag indicating whether the global file lock is enabled for the cache",
              args: {
                name: "global-file-locking",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--kerberos",
              description: "Describe if a cache is Kerberos enabled",
              args: { name: "kerberos", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: [
                "--key-vault-private-endpoint-resource-id",
                "--kv-private-endpoint-id",
              ],
              description:
                "The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'",
              args: { name: "key-vault-private-endpoint-resource-id" },
            },
            {
              name: "--ldap",
              description:
                "Specifies whether LDAP is enabled or not for flexcache volume",
              args: { name: "ldap", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--ldap-server-type",
              description:
                "Specifies the type of LDAP server for flexcache volume",
              args: {
                name: "ldap-server-type",
                suggestions: ["ActiveDirectory", "OpenLDAP"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
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
              name: "--protocol-types",
              description:
                'Set of supported protocol types, which include NFSv3, NFSv4 and SMB protocol Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "protocol-types", isVariadic: true },
            },
            {
              name: [
                "--smb-access-based-enumeration",
                "--smb-access-enumeration",
              ],
              description:
                "Enables access-based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-access-based-enumeration",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-encryption",
              description:
                "Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol cache",
              args: {
                name: "smb-encryption",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-non-browsable",
              description:
                "Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-non-browsable",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--throughput-mibps",
              description:
                "Maximum throughput in MiB/s that can be achieved by this cache volume and this will be accepted as input only for manual qosType cache",
              args: { name: "throughput-mibps" },
            },
            {
              name: "--write-back",
              description:
                "Flag indicating whether writeback is enabled for the cache",
              args: {
                name: "write-back",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--zones",
              description:
                'The availability zones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "zones", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified cache",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: ["--cache-name", "--name", "-n"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
            },
            changeReference,
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          description: "List all Caches within the Capacity Pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "list-peering-passphrase",
          description:
            "This operation will list the cluster peering command, cluster peering passphrase and the vserver peering command",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: ["--cache-name", "-c"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "pool-change",
          description: "Moves Cache to another Capacity Pool",
          options: [
            {
              name: "--new-pool-resource-id",
              description: "Resource id of the pool to move volume to",
              args: { name: "new-pool-resource-id" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: ["--cache-name", "-c"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
            },
            changeReference,
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "reset-smb-password",
          description: "Resets the SMB password for the cache",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: ["--cache-name", "-c"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
            },
            changeReference,
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          description: "Get the details of the specified Cache",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            {
              name: ["--cache-name", "--name", "-n"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          description: "Update the specified Cache within the Capacity Pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--cache-name", "--name", "-n"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
            },
            changeReference,
            {
              name: ["--cifs-change-notifications", "--cifs-change-notify"],
              description:
                "Flag indicating whether a CIFS change notification is enabled for the cache",
              args: {
                name: "cifs-change-notifications",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--export-policy-rules", "--rules"],
              description:
                'Export policy rule Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-policy-rules", isVariadic: true },
            },
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
              name: [
                "--key-vault-private-endpoint-resource-id",
                "--kv-private-endpoint-id",
              ],
              description:
                "The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'",
              args: { name: "key-vault-private-endpoint-resource-id" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
            },
            {
              name: "--protocol-types",
              description:
                'Set of supported protocol types, which include NFSv3, NFSv4 and SMB protocol Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "protocol-types", isVariadic: true },
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
              name: "--size",
              description:
                "Maximum storage quota allowed for a file system in bytes. Valid values are in the range 50GiB to 1PiB. Values expressed in bytes as multiples of 1GiB",
              args: { name: "size" },
            },
            {
              name: [
                "--smb-access-based-enumeration",
                "--smb-access-enumeration",
              ],
              description:
                "Enables access-based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-access-based-enumeration",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-encryption",
              description:
                "Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol cache",
              args: {
                name: "smb-encryption",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-non-browsable",
              description:
                "Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-non-browsable",
                suggestions: ["Disabled", "Enabled"],
              },
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--throughput-mibps",
              description:
                "Maximum throughput in MiB/s that can be achieved by this cache volume and this will be accepted as input only for manual qosType cache",
              args: { name: "throughput-mibps" },
            },
            {
              name: "--write-back",
              description:
                "Flag indicating whether writeback is enabled for the cache",
              args: {
                name: "write-back",
                suggestions: ["Disabled", "Enabled"],
              },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: ["--cache-name", "--name", "-n"],
              description: "The name of the cache resource",
              args: { name: "cache-name" },
            },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
      name: "pool",
      description: "Manage Azure NetApp Files (ANF) Capacity Pool Resources",
      subcommands: [
        {
          name: "create",
          description: "Create a capacity pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: "--cool-access",
              description:
                "If enabled (true) the pool can contain cool Access enabled volumes",
              args: {
                name: "cool-access",
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
              name: ["--custom-throughput-mibps", "--custom-throughput"],
              description:
                "Maximum throughput in MiB/s that can be achieved by this pool and this will be accepted as input only for manual qosType pool with Flexible service level",
              args: { name: "custom-throughput-mibps" },
            },
            {
              name: "--encryption-type",
              description:
                "Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool",
              args: {
                name: "encryption-type",
                suggestions: ["Double", "Single"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
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
              name: "--qos-type",
              description: "The qos type of the pool",
              args: { name: "qos-type", suggestions: ["Auto", "Manual"] },
            },
            {
              name: "--service-level",
              description: "ServiceLevel",
              args: {
                name: "service-level",
                suggestions: [
                  "Flexible",
                  "Premium",
                  "Standard",
                  "StandardZRS",
                  "Ultra",
                ],
              },
            },
            {
              name: "--size",
              description:
                "Provisioned size of the pool. Must be an integer number of tebibytes in multiples of 4. Use either --size or --size-in-bytes, not both",
              args: { name: "size" },
            },
            {
              name: "--size-in-bytes",
              description:
                "Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiple of 1099511627776). Use either --size or --size-in-bytes, not both",
              args: { name: "size-in-bytes" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified capacity pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          description: "List all capacity pools in the NetApp Account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
          description: "Get details of the specified capacity pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          description: "Update a capacity pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: "--cool-access",
              description:
                "If enabled (true) the pool can contain cool Access enabled volumes",
              args: {
                name: "cool-access",
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
              name: ["--custom-throughput-mibps", "--custom-throughput"],
              description:
                "Maximum throughput in MiB/s that can be achieved by this pool and this will be accepted as input only for manual qosType pool with Flexible service level",
              args: { name: "custom-throughput-mibps" },
            },
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
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: "--qos-type",
              description: "The qos type of the pool",
              args: { name: "qos-type", suggestions: ["Auto", "Manual"] },
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
              name: "--service-level",
              description: "ServiceLevel",
              args: {
                name: "service-level",
                suggestions: [
                  "Flexible",
                  "Premium",
                  "Standard",
                  "StandardZRS",
                  "Ultra",
                ],
              },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--size",
              description:
                "Provisioned size of the pool. Must be an integer number of tebibytes in multiples of 4. Use either --size or --size-in-bytes, not both",
              args: { name: "size" },
            },
            {
              name: "--size-in-bytes",
              description:
                "Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiple of 1099511627776). Use either --size or --size-in-bytes, not both",
              args: { name: "size-in-bytes" },
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
      name: "quota-limit",
      description: "Get quota limits",
      subcommands: [
        {
          name: "list",
          description: "List the default and current limits for quotas",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the default and current subscription quota limit",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--quota-limit-name", "--name", "-n"],
              description: "The name of the Quota Limit",
              args: { name: "quota-limit-name" },
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
      name: "resource",
      description:
        "Provides operations for Azure NetApp Files (ANF) Account Resources",
      subcommands: [
        {
          name: "query-region-info",
          description:
            "Provides storage to network proximity and logical zone mapping information",
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
          name: "region-info",
          description: "Provides region specific information",
          subcommands: [
            {
              name: "list",
              description: "List region specific information",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
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
              name: "default",
              description: "Provides region specific information",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Get storage to network proximity and logical zone mapping information",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--location", "-l"],
                      description:
                        "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                      args: { name: "location" },
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
    },
    {
      name: "snapshot",
      description: "Manage Azure NetApp Files (ANF) Snapshot Resources",
      subcommands: [
        {
          name: "create",
          description: "Create the specified snapshot within the given volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--location", "-l"],
              description:
                "Resource location When not specified, the location of the resource group will be used",
              args: { name: "location" },
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
          description: "Delete snapshot",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the snapshot",
              args: { name: "snapshot-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all snapshots associated with the volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "restore-files",
          description:
            "Restore the specified files from the specified snapshot to the active filesystem",
          options: [
            {
              name: "--file-paths",
              description:
                'List of files to be restored Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "file-paths", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--destination-path",
              description:
                "Destination folder where the files will be restored",
              args: { name: "destination-path" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the snapshot",
              args: { name: "snapshot-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details of the specified snapshot",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the snapshot",
              args: { name: "snapshot-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the specified snapshot within the given volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--snapshot-name", "--name", "-n"],
              description: "The name of the snapshot",
              args: { name: "snapshot-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the snapshot",
              args: { name: "snapshot-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "policy",
          description:
            "Manage Azure NetApp Files (ANF) Snapshot Policy Resources",
          subcommands: [
            {
              name: "create",
              description: "Create a snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--snapshot-policy-name", "--name", "-n"],
                  description: "The name of the snapshot policy",
                  args: { name: "snapshot-policy-name" },
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
                  name: "--daily-hour",
                  description:
                    "Indicates which hour in UTC timezone a snapshot should be taken",
                  args: { name: "daily-hour" },
                },
                {
                  name: "--daily-minute",
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "daily-minute" },
                },
                {
                  name: ["--snapshots-to-keep", "--daily-snapshots", "-d"],
                  description: "Daily snapshot count to keep",
                  args: { name: "snapshots-to-keep" },
                },
                {
                  name: ["--days-of-month", "--monthly-days"],
                  description:
                    "Indicates which days of the month snapshot should be taken. A comma delimited string",
                  args: { name: "days-of-month" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                  args: {
                    name: "enabled",
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
                  name: ["--monthly-hour", "--hour"],
                  description:
                    "Indicates which hour in UTC timezone a snapshot should be taken",
                  args: { name: "monthly-hour" },
                },
                {
                  name: ["--hourly-minute", "--minute"],
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "hourly-minute" },
                },
                {
                  name: ["--hourly-snapshots", "-u"],
                  description: "Hourly snapshot count to keep",
                  args: { name: "hourly-snapshots" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: "--monthly-minute",
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "monthly-minute" },
                },
                {
                  name: ["--monthly-snapshots", "-m"],
                  description: "Monthly snapshot count to keep",
                  args: { name: "monthly-snapshots" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--weekly-day",
                  description:
                    "Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english",
                  args: { name: "weekly-day" },
                },
                {
                  name: "--weekly-hour",
                  description:
                    "Indicates which hour in UTC timezone a snapshot should be taken",
                  args: { name: "weekly-hour" },
                },
                {
                  name: "--weekly-minute",
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "weekly-minute" },
                },
                {
                  name: ["--weekly-snapshots", "-w"],
                  description: "Weekly snapshot count to keep",
                  args: { name: "weekly-snapshots" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--snapshot-policy-name", "--name", "-n"],
                  description: "The name of the snapshot policy",
                  args: { name: "snapshot-policy-name" },
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
              description: "List snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
              description: "Get a snapshot Policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--snapshot-policy-name", "--name", "-n"],
                  description: "The name of the snapshot policy",
                  args: { name: "snapshot-policy-name" },
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
              description: "Update a snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: "--daily-hour",
                  description:
                    "Indicates which hour in UTC timezone a snapshot should be taken",
                  args: { name: "daily-hour" },
                },
                {
                  name: "--daily-minute",
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "daily-minute" },
                },
                {
                  name: ["--snapshots-to-keep", "--daily-snapshots", "-d"],
                  description: "Daily snapshot count to keep",
                  args: { name: "snapshots-to-keep" },
                },
                {
                  name: ["--days-of-month", "--monthly-days"],
                  description:
                    "Indicates which days of the month snapshot should be taken. A comma delimited string",
                  args: { name: "days-of-month" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                  args: {
                    name: "enabled",
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
                  name: ["--monthly-hour", "--hour"],
                  description:
                    "Indicates which hour in UTC timezone a snapshot should be taken",
                  args: { name: "monthly-hour" },
                },
                {
                  name: ["--hourly-minute", "--minute"],
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "hourly-minute" },
                },
                {
                  name: ["--hourly-snapshots", "-u"],
                  description: "Hourly snapshot count to keep",
                  args: { name: "hourly-snapshots" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--monthly-minute",
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "monthly-minute" },
                },
                {
                  name: ["--monthly-snapshots", "-m"],
                  description: "Monthly snapshot count to keep",
                  args: { name: "monthly-snapshots" },
                },
                {
                  name: ["--snapshot-policy-name", "--name", "-n"],
                  description: "The name of the snapshot policy",
                  args: { name: "snapshot-policy-name" },
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--weekly-day",
                  description:
                    "Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english",
                  args: { name: "weekly-day" },
                },
                {
                  name: "--weekly-hour",
                  description:
                    "Indicates which hour in UTC timezone a snapshot should be taken",
                  args: { name: "weekly-hour" },
                },
                {
                  name: "--weekly-minute",
                  description:
                    "Indicates which minute snapshot should be taken",
                  args: { name: "weekly-minute" },
                },
                {
                  name: ["--weekly-snapshots", "-w"],
                  description: "Weekly snapshot count to keep",
                  args: { name: "weekly-snapshots" },
                },
              ],
            },
            {
              name: "volumes",
              description: "List volumes associated with snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--snapshot-policy-name",
                  description: "The name of the snapshot policy",
                  args: { name: "snapshot-policy-name" },
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
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--snapshot-policy-name", "--name", "-n"],
                  description: "The name of the snapshot policy",
                  args: { name: "snapshot-policy-name" },
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
    },
    {
      name: "usage",
      description: "Get current subscription usages",
      subcommands: [
        {
          name: "list",
          description: "List current subscription usages",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
          name: "show",
          description: "Get current subscription usage of the specific type",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--usage-type", "--name", "-n"],
              description: "The type of usage",
              args: { name: "usage-type" },
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
      name: "volume",
      description: "Manage Azure NetApp Files (ANF) Volume Resources",
      subcommands: [
        {
          name: "break-file-locks",
          description: "Break all the file locks on a volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--client-ip",
              description:
                "To clear file locks on a volume for a particular client",
              args: { name: "client-ip" },
            },
            {
              name: ["--confirm-running-disruptive-operation", "--confirm"],
              description:
                "Break-file-locks could be a disruptive operation for application as locks on the volume will be broken, if want to process, set to true",
              args: {
                name: "confirm-running-disruptive-operation",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "create",
          description: "Create or Update a volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--creation-token", "--file-path"],
              description:
                "A unique file path for the volume. Used when creating mount targets",
              args: { name: "creation-token" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: [
                "--accept-grow-capacity-pool-for-short-term-clone-split",
                "--grow-pool-clone-split",
              ],
              description:
                "While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing. To accept capacity pool size auto grow and create a short term clone volume, set the property as accepted",
              args: {
                name: "accept-grow-capacity-pool-for-short-term-clone-split",
                suggestions: ["Accepted", "Declined"],
              },
            },
            acquirePolicyToken,
            {
              name: "--allowed-clients",
              description:
                "Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: { name: "allowed-clients" },
            },
            {
              name: "--avs-data-store",
              description:
                "Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose",
              args: {
                name: "avs-data-store",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--backup-id",
              description: "Resource identifier used to identify the Backup",
              args: { name: "backup-id" },
            },
            {
              name: "--backup-policy-id",
              description: "Backup Policy Resource ID",
              args: { name: "backup-policy-id" },
            },
            {
              name: "--backup-vault-id",
              description: "Backup Vault Resource ID",
              args: { name: "backup-vault-id" },
            },
            {
              name: "--breakthrough-mode",
              description:
                "Specifies whether the volume operates in Breakthrough Mode",
              args: {
                name: "breakthrough-mode",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--cool-access-retrieval-policy", "--ca-retrieval-policy"],
              description:
                "CoolAccessRetrievalPolicy determines the data retrieval behavior from the cool tier to standard storage based on the read pattern for cool access enabled volumes. The possible values for this field are: Default - Data will be pulled from cool tier to standard storage on random reads. This policy is the default. OnRead - All client-driven data read is pulled from cool tier to standard storage on both sequential and random reads. Never - No client-driven data is pulled from cool tier to standard storage",
              args: {
                name: "cool-access-retrieval-policy",
                suggestions: ["Default", "Never", "OnRead"],
              },
            },
            {
              name: ["--cool-access-tiering-policy", "--ca-tiering-policy"],
              description:
                "CoolAccessTieringPolicy determines which cold data blocks are moved to cool tier. The possible values for this field are: Auto - Moves cold user data blocks in both the Snapshot copies and the active file system to the cool tier tier. This policy is the default. SnapshotOnly - Moves user data blocks of the Volume Snapshot copies that are not associated with the active file system to the cool tier",
              args: {
                name: "cool-access-tiering-policy",
                suggestions: ["Auto", "SnapshotOnly"],
              },
            },
            {
              name: ["--capacity-pool-resource-id", "--pool-resource-id"],
              description:
                "Pool Resource Id used in case of creating a volume through volume group",
              args: { name: "capacity-pool-resource-id" },
            },
            changeReference,
            {
              name: "--chown-mode",
              description:
                "This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own",
              args: {
                name: "chown-mode",
                suggestions: ["Restricted", "Unrestricted"],
                isOptional: true,
              },
            },
            {
              name: "--cifs",
              description:
                "Allows CIFS protocol. Enable only for CIFS type volumes. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "cifs",
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
              name: "--cool-access",
              description:
                "Specifies whether Cool Access(tiering) is enabled for the volume",
              args: {
                name: "cool-access",
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
              name: "--coolness-period",
              description:
                "Specifies the number of days after which data that is not accessed by clients will be tiered",
              args: { name: "coolness-period" },
            },
            {
              name: "--delete-base-snapshot",
              description:
                "If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished. Defaults to false",
              args: {
                name: "delete-base-snapshot",
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
              name: [
                "--desired-ransomware-protection-state",
                "--desired-arp-state",
              ],
              description:
                "The desired value of the Advanced Ransomware Protection feature state available to the volume",
              args: {
                name: "desired-ransomware-protection-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--encryption-key-source",
              description:
                "Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'",
              args: {
                name: "encryption-key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: ["--export-policy-rules", "--rules"],
              description:
                'Export policy rule Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-policy-rules", isVariadic: true },
            },
            {
              name: "--external-host-name",
              description: "The Path to a ONTAP Host",
              args: { name: "external-host-name" },
            },
            {
              name: "--external-server-name",
              description: "The name of a server on the ONTAP Host",
              args: { name: "external-server-name" },
            },
            {
              name: "--external-volume-name",
              description: "The name of a volume on the server",
              args: { name: "external-volume-name" },
            },
            {
              name: "--has-root-access",
              description:
                "Has root access to volume. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "has-root-access",
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
              name: "--is-large-volume",
              description:
                "Specifies whether volume is a Large Volume or Regular Volume",
              args: {
                name: "is-large-volume",
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
              name: "--kerberos-enabled",
              description:
                "Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later",
              args: {
                name: "kerberos-enabled",
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
              name: "--kerberos5-r",
              description:
                "Kerberos5 Read only access. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "kerberos5-r",
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
              name: "--kerberos5-rw",
              description:
                "Kerberos5 Read and write access. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "kerberos5-rw",
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
              name: "--kerberos5i-r",
              description:
                "Kerberos5i Readonly access. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "kerberos5i-r",
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
              name: "--kerberos5i-rw",
              description:
                "Kerberos5i Read and write access. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "kerberos5i-rw",
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
              name: "--kerberos5p-r",
              description:
                "Kerberos5p Readonly access. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "kerberos5p-r",
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
              name: "--kerberos5p-rw",
              description:
                "Kerberos5p Read and write access. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "kerberos5p-rw",
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
              name: [
                "--key-vault-private-endpoint-resource-id",
                "--kv-private-endpoint-id",
              ],
              description:
                "The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'",
              args: { name: "key-vault-private-endpoint-resource-id" },
            },
            {
              name: "--ldap-enabled",
              description:
                "Specifies whether LDAP is enabled or not for a given NFS volume",
              args: {
                name: "ldap-enabled",
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
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--network-features",
              description:
                "Basic network, or Standard features available to the volume",
              args: {
                name: "network-features",
                suggestions: ["Basic", "Standard"],
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
              name: "--placement-rules",
              description:
                'Application specific placement rules for the particular volume Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "placement-rules", isVariadic: true },
            },
            {
              name: "--policy-enforced",
              description: "Policy Enforced",
              args: {
                name: "policy-enforced",
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
              name: ["--proximity-placement-group", "--ppg"],
              description:
                "Proximity placement group associated with the volume",
              args: { name: "proximity-placement-group" },
            },
            {
              name: "--protocol-types",
              description:
                'Set of protocol types, default NFSv3, CIFS for SMB protocol Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "protocol-types", isVariadic: true },
            },
            {
              name: "--relocation-requested",
              description: "Has relocation been requested for this volume",
              args: {
                name: "relocation-requested",
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
              name: ["--remote-volume-resource-id", "--remote-volume-id"],
              description: "The resource ID of the remote volume",
              args: { name: "remote-volume-resource-id" },
            },
            {
              name: "--remote-volume-region",
              description:
                "The remote region for the other end of the Volume Replication",
              args: { name: "remote-volume-region" },
            },
            {
              name: "--replication-schedule",
              description: "Schedule",
              args: {
                name: "replication-schedule",
                suggestions: ["_10minutely", "daily", "hourly"],
              },
            },
            {
              name: "--rule-index",
              description:
                "Order index. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: { name: "rule-index" },
            },
            {
              name: "--security-style",
              description:
                "The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol",
              args: { name: "security-style", suggestions: ["ntfs", "unix"] },
            },
            {
              name: "--service-level",
              description: "ServiceLevel",
              args: {
                name: "service-level",
                suggestions: [
                  "Flexible",
                  "Premium",
                  "Standard",
                  "StandardZRS",
                  "Ultra",
                ],
              },
            },
            {
              name: [
                "--smb-access-based-enumeration",
                "--smb-access-enumeration",
              ],
              description:
                "Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-access-based-enumeration",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: [
                "--smb-continuously-available",
                "--smb-continuously-avl",
                "--smb-ca",
              ],
              description:
                "Enables continuously available share property for smb volume. Only applicable for SMB volume",
              args: {
                name: "smb-continuously-available",
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
              name: "--smb-encryption",
              description:
                "Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later",
              args: {
                name: "smb-encryption",
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
              name: "--smb-non-browsable",
              description:
                "Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-non-browsable",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--snapshot-directory-visible", "--snapshot-dir-visible"],
              description:
                "If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true)",
              args: {
                name: "snapshot-directory-visible",
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
              name: "--snapshot-id",
              description: "Resource identifier used to identify the Snapshot",
              args: { name: "snapshot-id" },
            },
            {
              name: "--snapshot-policy-id",
              description: "Snapshot Policy ResourceId",
              args: { name: "snapshot-policy-id" },
            },
            {
              name: ["--subnet-id", "--subnet"],
              description:
                "The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes",
              args: { name: "subnet-id" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--throughput-mibps",
              description:
                "Maximum throughput in MiB/s that can be achieved by this volume and this will be accepted as input only for manual qosType volume",
              args: { name: "throughput-mibps" },
            },
            {
              name: "--unix-permissions",
              description:
                "UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users",
              args: { name: "unix-permissions" },
            },
            {
              name: "--unix-read-only",
              description:
                "Read only access. Exists for backwards compatibility, please use --export-policy-rules (--rules) instead",
              args: {
                name: "unix-read-only",
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
              name: "--unix-read-write",
              description:
                "Read and write access. Exists for backwards compatibility, please use --export-policy-rules --rules instead",
              args: {
                name: "unix-read-write",
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
              name: "--usage-threshold",
              description:
                "Maximum storage quota allowed for a file system in GiB",
              args: { name: "usage-threshold" },
            },
            {
              name: "--vnet",
              description:
                "Name or Resource ID of the vnet. If you want to use a vnet in other resource group, please provide the Resource ID instead of the name of the vnet",
              args: { name: "vnet" },
            },
            {
              name: "--volume-spec-name",
              description:
                "Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log",
              args: { name: "volume-spec-name" },
            },
            {
              name: "--volume-type",
              description:
                "What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection",
              args: { name: "volume-type" },
            },
            {
              name: "--zones",
              description:
                'Availability Zone Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "zones", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--force-delete", "--force"],
              description:
                "An option to force delete the volume. Will cleanup resources connected to the particular volume",
              args: {
                name: "force-delete",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "finalize-relocation",
          description:
            "Finalizes the relocation of the volume and cleans up the old volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "get-groupid-list-for-ldapuser",
          description: "Returns the list of group Ids for a specific LDAP User",
          options: [
            {
              name: "--username",
              description:
                "Username is required to fetch the group to which user is part of",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          description: "List all volumes within the capacity pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "list-quota-report",
          description: "Returns report of quotas for the volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
            },
            {
              name: "--quota-target",
              description:
                "UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running 'id' or 'getent' command for the user or group and SID can be found by running <wmic useraccount where name='user-name' get sid>. If provided, quotaType must also be specified. The quotaType and quotaTarget properties are optional, but when filtering by quota target, quotaType and quotaTarget must be supplied together. Service/API will return an error if only one is provided",
              args: { name: "quota-target" },
            },
            {
              name: "--quota-type",
              description:
                "Type of quota. If provided, quotaTarget must also be specified. The quotaType and quotaTarget properties are optional, but when filtering by quota type, quotaType and quotaTarget must be supplied together. Service/API will return an error if only one is provided",
              args: {
                name: "quota-type",
                suggestions: [
                  "DefaultGroupQuota",
                  "DefaultUserQuota",
                  "IndividualGroupQuota",
                  "IndividualUserQuota",
                ],
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
              name: ["--usage-threshold-percentage", "--usage-threshold-pct"],
              description:
                "The usageThresholdPercentage filter takes the usage threshold percentage and returns records where the usage is greater than or equal to the input value. This is an optional property",
              args: { name: "usage-threshold-percentage" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "migrate-backup",
          description: "Migrate the backups under volume to backup vault",
          options: [
            {
              name: "--backup-vault-id",
              description: "The ResourceId of the Backup Vault",
              args: { name: "backup-vault-id" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "pool-change",
          description: "Moves volume to another pool",
          options: [
            {
              name: ["--new-pool-resource-id", "-d"],
              description: "Resource id of the pool to move volume to",
              args: { name: "new-pool-resource-id" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "populate-availability-zone",
          description:
            "This operation will populate availability zone information for a volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "relocate",
          description: "Relocates volume to a new stamp",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--creation-token",
              description:
                "New creation token for the volume that controls the mount point name",
              args: { name: "creation-token" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "reset-cifs-pw",
          description: "Reset cifs password from volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "revert",
          description: "Revert a volume to the snapshot specified in the body",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--snapshot-id", "-s"],
              description: "Resource id of the snapshot",
              args: { name: "snapshot-id" },
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
          name: "revert-relocation",
          description:
            "Reverts the volume relocation process, cleans up the new volume and starts using the former-existing volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          description: "Get the details of the specified volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "splitclonefromparent",
          description:
            "Split operation to convert clone volume to an independent volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
              name: ["--volume-name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the specified volume within the capacity pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--backup-policy-id",
              description: "Backup Policy Resource ID",
              args: { name: "backup-policy-id" },
            },
            {
              name: "--backup-vault-id",
              description: "Backup Vault Resource ID",
              args: { name: "backup-vault-id" },
            },
            {
              name: ["--cool-access-retrieval-policy", "--ca-retrieval-policy"],
              description:
                "CoolAccessRetrievalPolicy determines the data retrieval behavior from the cool tier to standard storage based on the read pattern for cool access enabled volumes. The possible values for this field are: Default - Data will be pulled from cool tier to standard storage on random reads. This policy is the default. OnRead - All client-driven data read is pulled from cool tier to standard storage on both sequential and random reads. Never - No client-driven data is pulled from cool tier to standard storage",
              args: {
                name: "cool-access-retrieval-policy",
                suggestions: ["Default", "Never", "OnRead"],
              },
            },
            {
              name: ["--cool-access-tiering-policy", "--ca-tiering-policy"],
              description:
                "CoolAccessTieringPolicy determines which cold data blocks are moved to cool tier. The possible values for this field are: Auto - Moves cold user data blocks in both the Snapshot copies and the active file system to the cool tier tier. This policy is the default. SnapshotOnly - Moves user data blocks of the Volume Snapshot copies that are not associated with the active file system to the cool tier",
              args: {
                name: "cool-access-tiering-policy",
                suggestions: ["Auto", "SnapshotOnly"],
              },
            },
            {
              name: ["--capacity-pool-resource-id", "--pool-resource-id"],
              description:
                "Pool Resource Id used in case of creating a volume through volume group",
              args: { name: "capacity-pool-resource-id" },
            },
            changeReference,
            {
              name: "--cool-access",
              description:
                "Specifies whether Cool Access(tiering) is enabled for the volume",
              args: {
                name: "cool-access",
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
              name: "--coolness-period",
              description:
                "Specifies the number of days after which data that is not accessed by clients will be tiered",
              args: { name: "coolness-period" },
            },
            {
              name: "--delete-base-snapshot",
              description:
                "If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished. Defaults to false",
              args: {
                name: "delete-base-snapshot",
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
              name: "--encryption-key-source",
              description:
                "Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'",
              args: {
                name: "encryption-key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: ["--export-policy-rules", "--rules"],
              description:
                'Export policy rule Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-policy-rules", isVariadic: true },
            },
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
              name: [
                "--key-vault-private-endpoint-resource-id",
                "--kv-private-endpoint-id",
              ],
              description:
                "The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'",
              args: { name: "key-vault-private-endpoint-resource-id" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
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
              name: "--placement-rules",
              description:
                'Application specific placement rules for the particular volume Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "placement-rules", isVariadic: true },
            },
            {
              name: "--policy-enforced",
              description: "Policy Enforced",
              args: {
                name: "policy-enforced",
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
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--proximity-placement-group", "--ppg"],
              description:
                "Proximity placement group associated with the volume",
              args: { name: "proximity-placement-group" },
            },
            {
              name: "--protocol-types",
              description:
                'Set of protocol types, default NFSv3, CIFS for SMB protocol Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "protocol-types", isVariadic: true },
            },
            {
              name: "--ransomware-protection",
              description:
                'Advanced Ransomware Protection settings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ransomware-protection", isVariadic: true },
            },
            {
              name: "--relocation-requested",
              description: "Has relocation been requested for this volume",
              args: {
                name: "relocation-requested",
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
              name: "--remote-volume-region",
              description:
                "The remote region for the other end of the Volume Replication",
              args: { name: "remote-volume-region" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--replication-schedule",
              description: "Schedule",
              args: {
                name: "replication-schedule",
                suggestions: ["_10minutely", "daily", "hourly"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--service-level",
              description: "ServiceLevel",
              args: {
                name: "service-level",
                suggestions: [
                  "Flexible",
                  "Premium",
                  "Standard",
                  "StandardZRS",
                  "Ultra",
                ],
              },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: [
                "--smb-access-based-enumeration",
                "--smb-access-enumeration",
              ],
              description:
                "Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-access-based-enumeration",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: [
                "--smb-continuously-available",
                "--smb-continuously-avl",
                "--smb-ca",
              ],
              description:
                "Enables continuously available share property for smb volume. Only applicable for SMB volume",
              args: {
                name: "smb-continuously-available",
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
              name: "--smb-encryption",
              description:
                "Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later",
              args: {
                name: "smb-encryption",
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
              name: "--smb-non-browsable",
              description:
                "Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-non-browsable",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--snapshot-directory-visible", "--snapshot-dir-visible"],
              description:
                "If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true)",
              args: {
                name: "snapshot-directory-visible",
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
              name: "--snapshot-policy-id",
              description: "Snapshot Policy ResourceId",
              args: { name: "snapshot-policy-id" },
            },
            {
              name: ["--subnet-id", "--subnet"],
              description:
                "The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes",
              args: { name: "subnet-id" },
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--throughput-mibps",
              description:
                "Maximum throughput in MiB/s that can be achieved by this volume and this will be accepted as input only for manual qosType volume",
              args: { name: "throughput-mibps" },
            },
            {
              name: "--unix-permissions",
              description:
                "UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users",
              args: { name: "unix-permissions" },
            },
            {
              name: "--usage-threshold",
              description:
                "Maximum storage quota allowed for a file system in GiB",
              args: { name: "usage-threshold" },
            },
            {
              name: "--vnet",
              description:
                "Name or Resource ID of the vnet. If you want to use a vnet in other resource group or subscription, please provide the Resource ID instead of the name of the vnet",
              args: { name: "vnet" },
            },
            {
              name: "--volume-spec-name",
              description:
                "Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log",
              args: { name: "volume-spec-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
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
          name: "bucket",
          description: "Manage Bucket",
          subcommands: [
            {
              name: "create",
              description:
                "Create a bucket for a volume. A bucket allows additional services, such as AI services, connect to the volume data contained in those buckets",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--bucket-name", "--name", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: [
                    "--on-certificate-conflict-action",
                    "--cert-conflict-action",
                  ],
                  description:
                    "Action to take when there is a certificate conflict",
                  args: {
                    name: "on-certificate-conflict-action",
                    suggestions: ["Fail", "Update"],
                  },
                },
                {
                  name: ["--certificate-key-vault-uri", "--cert-kv-uri"],
                  description:
                    "The base URI of the Azure Key Vault that is used when retrieving the bucket certificate",
                  args: { name: "certificate-key-vault-uri" },
                },
                {
                  name: "--certificate-name",
                  description:
                    "The name of the bucket server certificate stored in the Azure Key Vault",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--certificate-object",
                  description:
                    "The base64-encoded contents of a PEM file, which includes both the bucket server's certificate and private key. It is generated by the end user and allows the user to access volume data in a read-only manner. Note: This is only used when Azure Key Vault is not configured. This property is mutually exclusive with the Azure Key Vault 'akv' properties. If value is blank it's asked from the tty",
                  args: { name: "certificate-object", isOptional: true },
                },
                changeReference,
                {
                  name: ["--credentials-key-vault-uri", "--creds-kv-uri"],
                  description:
                    "The base URI of the Azure Key Vault that is used when storing the bucket credentials",
                  args: { name: "credentials-key-vault-uri" },
                },
                {
                  name: "--fqdn",
                  description:
                    "The host part of the bucket URL, resolving to the bucket IP address and allowed by the server certificate",
                  args: { name: "fqdn" },
                },
                {
                  name: "--group-id",
                  description: "The NFS user's GID",
                  args: { name: "group-id" },
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
                  name: "--path",
                  description:
                    "The volume path mounted inside the bucket. The default is the root path '/' if no value is provided when the bucket is created",
                  args: { name: "path" },
                },
                {
                  name: "--permissions",
                  description:
                    "Access permissions for the bucket. Either ReadOnly or ReadWrite. The default is ReadOnly if no value is provided during bucket creation",
                  args: {
                    name: "permissions",
                    suggestions: ["ReadOnly", "ReadWrite"],
                  },
                },
                {
                  name: "--secret-name",
                  description:
                    'The name of the secret stored in Azure Key Vault. The associated key pair has the following structure: { "access_key_id": "<REDACTED>", "secret_access_key": "<REDACTED>" }',
                  args: { name: "secret-name" },
                },
                {
                  name: "--user-id",
                  description: "The NFS user's UID",
                  args: { name: "user-id" },
                },
                {
                  name: "--username",
                  description: "The CIFS user's username",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a volume's bucket",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--bucket-name", "--name", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                },
                changeReference,
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "generate-akv-credential",
              description:
                "Generate the access key and secret key used for accessing the specified volume bucket and store in Azure Key Vault",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--bucket-name", "-b", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--key-pair-expiry-days",
                  description:
                    "The number of days from now until the newly generated Access and Secret key pair will expire",
                  args: { name: "key-pair-expiry-days" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "generate-credential",
              description:
                "Generate the access key and secret key used for accessing the specified volume bucket. Also return expiry date and time of key pair (in UTC)",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--bucket-name", "-b", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--key-pair-expiry-days",
                  description:
                    "The number of days from now until the newly generated Access and Secret key pair will expire",
                  args: { name: "key-pair-expiry-days" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List all buckets belonging to a volume. Buckets allow additional services, such as AI services, connect to the volume data contained in those buckets",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
              name: "refresh-certificate",
              description:
                "This operation will fetch the certificate from Azure Key Vault and install it on the bucket server",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--bucket-name", "-b", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                },
                changeReference,
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of the specified volume's bucket. A bucket allows additional services, such as AI services, connect to the volume data contained in those buckets",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--bucket-name", "--name", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a bucket for a volume. A bucket allows additional services, such as AI services, connect to the volume data contained in those buckets",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--bucket-name", "--name", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                },
                {
                  name: [
                    "--on-certificate-conflict-action",
                    "--cert-conflict-action",
                  ],
                  description:
                    "Action to take when there is a certificate conflict",
                  args: {
                    name: "on-certificate-conflict-action",
                    suggestions: ["Fail", "Update"],
                  },
                },
                {
                  name: ["--certificate-key-vault-uri", "--cert-kv-uri"],
                  description:
                    "The base URI of the Azure Key Vault that is used when retrieving the bucket certificate",
                  args: { name: "certificate-key-vault-uri" },
                },
                {
                  name: "--certificate-name",
                  description:
                    "The name of the bucket server certificate stored in the Azure Key Vault",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--certificate-object",
                  description:
                    "The base64-encoded contents of a PEM file, which includes both the bucket server's certificate and private key. It is generated by the end user and allows the user to access volume data in a read-only manner. Note: This is only used when Azure Key Vault is not configured. This property is mutually exclusive with the Azure Key Vault 'akv' properties. If value is blank it's asked from the tty",
                  args: { name: "certificate-object", isOptional: true },
                },
                changeReference,
                {
                  name: ["--credentials-key-vault-uri", "--creds-kv-uri"],
                  description:
                    "The base URI of the Azure Key Vault that is used when storing the bucket credentials",
                  args: { name: "credentials-key-vault-uri" },
                },
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
                  name: "--fqdn",
                  description:
                    "The host part of the bucket URL, resolving to the bucket IP address and allowed by the server certificate",
                  args: { name: "fqdn" },
                },
                {
                  name: "--group-id",
                  description: "The NFS user's GID",
                  args: { name: "group-id" },
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
                  name: "--permissions",
                  description:
                    "Access permissions for the bucket. Either ReadOnly or ReadWrite. The default is ReadOnly if no value is provided during bucket creation",
                  args: {
                    name: "permissions",
                    suggestions: ["ReadOnly", "ReadWrite"],
                  },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: "--secret-name",
                  description:
                    'The name of the secret stored in Azure Key Vault. The associated key pair has the following structure: { "access_key_id": "<REDACTED>", "secret_access_key": "<REDACTED>" }',
                  args: { name: "secret-name" },
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
                  name: "--user-id",
                  description: "The NFS user's UID",
                  args: { name: "user-id" },
                },
                {
                  name: "--username",
                  description: "The CIFS user's username",
                  args: { name: "username" },
                },
                {
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: ["--bucket-name", "--name", "-n"],
                  description: "The name of the bucket",
                  args: { name: "bucket-name" },
                },
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
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
          ],
        },
        {
          name: "export-policy",
          description: "Manage Azure NetApp Files (ANF) Volume export policies",
          subcommands: [
            {
              name: "add",
              description: "Add a new rule to the export policy for a volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: "--allowed-clients",
                  description:
                    "Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names",
                  args: { name: "allowed-clients" },
                },
                changeReference,
                {
                  name: "--chown-mode",
                  description:
                    "This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own",
                  args: {
                    name: "chown-mode",
                    suggestions: ["Restricted", "Unrestricted"],
                  },
                },
                {
                  name: "--cifs",
                  description: "Allows CIFS protocol",
                  args: {
                    name: "cifs",
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
                  name: "--has-root-access",
                  description: "Has root access to volume",
                  args: {
                    name: "has-root-access",
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
                  name: "--kerberos5-read-only",
                  description:
                    "Kerberos5 Read only access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5-read-only",
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
                  name: "--kerberos5-read-write",
                  description:
                    "Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5-read-write",
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
                  name: "--kerberos5i-read-only",
                  description:
                    "Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5i-read-only",
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
                  name: "--kerberos5i-read-write",
                  description:
                    "Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5i-read-write",
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
                  name: "--kerberos5p-read-only",
                  description:
                    "Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5p-read-only",
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
                  name: "--kerberos5p-read-write",
                  description:
                    "Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5p-read-write",
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
                  name: "--nfsv3",
                  description:
                    "Allows NFSv3 protocol. Enable only for NFSv3 type volumes",
                  args: {
                    name: "nfsv3",
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
                  name: "--nfsv41",
                  description:
                    "Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes",
                  args: {
                    name: "nfsv41",
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
                  name: "--rule-index",
                  description: "Order index",
                  args: { name: "rule-index" },
                },
                {
                  name: "--unix-read-only",
                  description: "Read only access",
                  args: {
                    name: "unix-read-only",
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
                  name: "--unix-read-write",
                  description: "Read and write access",
                  args: {
                    name: "unix-read-write",
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
              description: "List the export policy rules for a volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
              name: "remove",
              description:
                "Remove a rule from the export policy for a volume by rule index. The current rules can be obtained by performing the subgroup list command",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: "--rule-index",
                  description: "Order index",
                  args: { name: "rule-index" },
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
              name: "show",
              description: "Show the export policy rule for a volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: "--rule-index",
                  description: "Order index",
                  args: { name: "rule-index" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update the export policy rule for a volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: "--rule-index",
                  description: "Order index",
                  args: { name: "rule-index" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--allowed-clients",
                  description:
                    "Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names",
                  args: { name: "allowed-clients" },
                },
                changeReference,
                {
                  name: "--chown-mode",
                  description:
                    "This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own",
                  args: {
                    name: "chown-mode",
                    suggestions: ["Restricted", "Unrestricted"],
                  },
                },
                {
                  name: "--cifs",
                  description: "Allows CIFS protocol",
                  args: {
                    name: "cifs",
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
                  name: "--has-root-access",
                  description: "Has root access to volume",
                  args: {
                    name: "has-root-access",
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
                  name: "--kerberos5-read-only",
                  description:
                    "Kerberos5 Read only access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5-read-only",
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
                  name: "--kerberos5-read-write",
                  description:
                    "Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5-read-write",
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
                  name: "--kerberos5i-read-only",
                  description:
                    "Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5i-read-only",
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
                  name: "--kerberos5i-read-write",
                  description:
                    "Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5i-read-write",
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
                  name: "--kerberos5p-read-only",
                  description:
                    "Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5p-read-only",
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
                  name: "--kerberos5p-read-write",
                  description:
                    "Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later",
                  args: {
                    name: "kerberos5p-read-write",
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
                  name: "--nfsv3",
                  description:
                    "Allows NFSv3 protocol. Enable only for NFSv3 type volumes",
                  args: {
                    name: "nfsv3",
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
                  name: "--nfsv41",
                  description:
                    "Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes",
                  args: {
                    name: "nfsv41",
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
                {
                  name: "--unix-read-only",
                  description: "Read only access",
                  args: {
                    name: "unix-read-only",
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
                  name: "--unix-read-write",
                  description: "Read and write access",
                  args: {
                    name: "unix-read-write",
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
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
          name: "latest-backup-status",
          description: "Get the latest backup status of a volume",
          subcommands: [
            {
              name: "current",
              description: "Get the latest backup status of the current volume",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Get the latest status of the backup for a volume",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--pool-name", "-p"],
                      description: "The name of the capacity pool",
                      args: { name: "pool-name" },
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
                      name: ["--volume-name", "-v"],
                      description: "The name of the volume",
                      args: { name: "volume-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "latest-restore-status",
          description: "Get the latest backup status of a volume",
          subcommands: [
            {
              name: "current",
              description: "Get the latest restore status of a volume",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Get the latest status of the restore for a volume",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--pool-name", "-p"],
                      description: "The name of the capacity pool",
                      args: { name: "pool-name" },
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
                      name: ["--volume-name", "-v"],
                      description: "The name of the volume",
                      args: { name: "volume-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "quota-rule",
          description:
            "Manage Azure NetApp Files (ANF) Volume Quota Rules Resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create the specified quota rule within the given volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--volume-quota-rule-name",
                    "--quota-rule-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of volume quota rule",
                  args: { name: "volume-quota-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
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
                  name: ["--quota-size-in-kibs", "--quota-size"],
                  description: "Size of quota in KiB",
                  args: { name: "quota-size-in-kibs" },
                },
                {
                  name: "--quota-target",
                  description:
                    "UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running id or getent command for the user or group and SID can be found by running :code:wmic useraccount where name='user-name' get sid",
                  args: { name: "quota-target" },
                },
                {
                  name: "--quota-type",
                  description: "Type of quota",
                  args: {
                    name: "quota-type",
                    suggestions: [
                      "DefaultGroupQuota",
                      "DefaultUserQuota",
                      "IndividualGroupQuota",
                      "IndividualUserQuota",
                    ],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete quota rule",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: [
                    "--volume-quota-rule-name",
                    "--quota-rule-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of volume quota rule",
                  args: { name: "volume-quota-rule-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all quota rules associated with the volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get details of the specified quota rule",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: [
                    "--volume-quota-rule-name",
                    "--quota-rule-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of volume quota rule",
                  args: { name: "volume-quota-rule-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the specified quota rule within the given volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: [
                    "--volume-quota-rule-name",
                    "--quota-rule-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of volume quota rule",
                  args: { name: "volume-quota-rule-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--quota-size-in-kibs", "--quota-size"],
                  description: "Size of quota in KiB",
                  args: { name: "quota-size-in-kibs" },
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
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
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: [
                    "--volume-quota-rule-name",
                    "--quota-rule-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of volume quota rule",
                  args: { name: "volume-quota-rule-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
          ],
        },
        {
          name: "ransomware-report",
          description: "Manage Advanced Ransomware(ARP) Reports",
          subcommands: [
            {
              name: "clear-suspect",
              description:
                'Clear ransomware suspects for the given Advanced Ransomware Protection (ARP) report. You should evaluate the report to determine whether the activity is acceptable (false positive) or whether an attack seems malicious.ARP creates snapshots named Anti_ransomware_backup when it detects a potential ransomware threat. You can use one of these ARP snapshots or another snapshot of your volume to restore data",',
              options: [
                {
                  name: "--extensions",
                  description:
                    'List of file extensions resolved (PotentialThreat or FalsePositive) Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "extensions", isVariadic: true },
                  isRequired: true,
                },
                {
                  name: "--resolution",
                  description: "ARP report suspect resolution",
                  args: {
                    name: "resolution",
                    suggestions: ["FalsePositive", "PotentialThreat"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
                },
                {
                  name: "--ransomware-report-name",
                  description: "The name of the ransomware report",
                  args: { name: "ransomware-report-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all ransomware reports for the volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
              name: "show",
              description:
                "Get details of the specified ransomware report (ARP) current gets the latest active report if there is an active event",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--ransomware-report-name", "--name", "-n"],
                  description: "The name of the ransomware report",
                  args: { name: "ransomware-report-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
          ],
        },
        {
          name: "replication",
          description: "Manage Azure NetApp Files (ANF) Volume replication",
          subcommands: [
            {
              name: "approve",
              description: "Authorize source volume replication",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--remote-volume-resource-id", "-d"],
                  description: "Resource id of the remote volume",
                  args: { name: "remote-volume-resource-id" },
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
              name: "authorize-external-replication",
              description:
                "Starts SVM peering and returns a command to be run on the external ONTAP to accept it. Once the SVM have been peered a SnapMirror will be created",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "finalize-external-replication",
              description:
                "Finalizes the migration of an external volume by releasing the replication and breaking the external cluster peering if no other migration is active",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all replications for a specified volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: "--exclude",
                  description:
                    "Exclude Replications filter. 'None' returns all replications, 'Deleted' excludes deleted replications. Default is 'None'",
                  args: { name: "exclude", suggestions: ["Deleted", "None"] },
                },
              ],
            },
            {
              name: "peer-external-cluster",
              description:
                "Starts peering the external cluster for this migration volume",
              options: [
                {
                  name: "--peer-ip-addresses",
                  description:
                    'A list of IC-LIF IPs that can be used to connect to the On-prem cluster Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "peer-ip-addresses", isVariadic: true },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "perform-replication-transfer",
              description:
                "Performs an adhoc replication transfer on a volume with volumeType Migration",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
                  name: ["--volume-name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "populate-availability-zone",
              description:
                "This operation will populate availability zone information for a volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
              name: "re-initialize",
              description:
                "Re-Initializes the replication connection on the destination volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
              name: "reestablish",
              description:
                "Re-establish a previously deleted replication between 2 volumes that have a common ad-hoc or policy-based snapshots",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--source-volume-id",
                  description:
                    "Resource id of the source volume for the replication",
                  args: { name: "source-volume-id" },
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
                "Delete the replication connection on the destination volume, and send release to the source replication",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
              name: "resume",
              description:
                "Resync the connection on the destination volume. If the operation is ran on the source volume it will reverse-resync the connection and sync from destination to source",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
              name: "status",
              description: "Get the status of the replication",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
              name: "suspend",
              description:
                "Suspend/Break the replication connection on the destination volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--force-break-replication", "--force", "-f"],
                  description:
                    "If replication is in status transferring and you want to force break the replication, set to true",
                  args: {
                    name: "force-break-replication",
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
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the volume",
                  args: { name: "volume-name" },
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
                  name: ["--pool-name", "-p"],
                  description: "The name of the capacity pool",
                  args: { name: "pool-name" },
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
      name: "volume-group",
      description: "Manage Azure NetApp Files (ANF) Volume Group Resources",
      subcommands: [
        {
          name: "create",
          description: "Create a volume group along with specified volumes",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--volume-group-name", "--group-name", "--name", "-n"],
              description: "The name of the volumeGroup",
              args: { name: "volume-group-name" },
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
              name: "--add-snapshot-capacity",
              description:
                "Additional memory to store snapshots, must be specified as % of RAM (range 0-200). This is used to auto compute storage size. Default: 50",
              args: { name: "add-snapshot-capacity" },
            },
            {
              name: ["--application-identifier", "--sap-sid"],
              description: "Application specific identifier",
              args: { name: "application-identifier" },
            },
            {
              name: "--application-type",
              description: "Application Type",
              args: {
                name: "application-type",
                suggestions: ["ORACLE", "SAP-HANA"],
              },
            },
            {
              name: "--backup-nfsv3",
              description:
                "Indicates if NFS Protocol version 3 is preferred for data backup and log backup volumes. Default is False",
              args: {
                name: "backup-nfsv3",
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
              name: "--binary-size",
              description:
                "Capacity (in GiB) for binary volume. If not provided size will automatically be calculated",
              args: { name: "binary-size" },
            },
            {
              name: "--binary-throughput",
              description:
                "Throughput in MiB/s for log binary volume. If not provided size will automatically be calculated",
              args: { name: "binary-throughput" },
            },
            changeReference,
            {
              name: "--data-backup-repl-skd",
              description: "Replication Schedule for data backup volume",
              args: {
                name: "data-backup-repl-skd",
                suggestions: ["_10minutely", "daily", "hourly"],
              },
            },
            {
              name: "--data-backup-size",
              description:
                "Capacity (in GiB) for data backup volumes. If not provided size will automatically be calculated",
              args: { name: "data-backup-size" },
            },
            {
              name: "--data-backup-src-id",
              description: "ResourceId of the data backup source volume",
              args: { name: "data-backup-src-id" },
            },
            {
              name: "--data-backup-throughput",
              description:
                "Throughput in MiB/s for data backup volumes. If not provided size will automatically be calculated",
              args: { name: "data-backup-throughput" },
            },
            {
              name: "--data-repl-skd",
              description: "Replication Schedule for data volume",
              args: {
                name: "data-repl-skd",
                suggestions: ["_10minutely", "daily", "hourly"],
              },
            },
            {
              name: "--data-size",
              description:
                "Capacity (in GiB) for data volumes. If not provided size will automatically be calculated",
              args: { name: "data-size" },
            },
            {
              name: "--data-src-id",
              description: "ResourceId of the data source volume",
              args: { name: "data-src-id" },
            },
            {
              name: "--data-throughput",
              description:
                "Throughput in MiB/s for data volumes. If not provided size will automatically be calculated",
              args: { name: "data-throughput" },
            },
            {
              name: "--database-size",
              description:
                "Oracle database size in (TiB), used to auto compute storage size and throughput",
              args: { name: "database-size" },
            },
            {
              name: "--database-throughput",
              description:
                "Oracle database throughput in (MiB/s), used to auto compute storage size and throughput",
              args: { name: "database-throughput" },
            },
            {
              name: "--encryption-key-source",
              description:
                "Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'",
              args: {
                name: "encryption-key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: "--gp-rules",
              description:
                'Application specific placement rules for the volume group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "gp-rules", isVariadic: true },
            },
            {
              name: "--group-description",
              description: "Group Description",
              args: { name: "group-description" },
            },
            {
              name: [
                "--key-vault-private-endpoint-resource-id",
                "--kv-private-endpoint-id",
              ],
              description:
                "The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'",
              args: { name: "key-vault-private-endpoint-resource-id" },
            },
            {
              name: ["--location", "-l"],
              description: "Resource location",
              args: { name: "location" },
            },
            {
              name: "--log-backup-repl-skd",
              description: "Replication Schedule for Log backup volume",
              args: {
                name: "log-backup-repl-skd",
                suggestions: ["_10minutely", "daily", "hourly"],
              },
            },
            {
              name: "--log-backup-size",
              description:
                "Capacity (in GiB) for log backup volumes. If not provided size will automatically be calculated",
              args: { name: "log-backup-size" },
            },
            {
              name: "--log-backup-src-id",
              description: "ResourceId of the log backup source volume",
              args: { name: "log-backup-src-id" },
            },
            {
              name: "--log-backup-throughput",
              description:
                "Throughput in MiB/s for log backup volumes. If not provided size will automatically be calculated",
              args: { name: "log-backup-throughput" },
            },
            {
              name: "--log-mirror-size",
              description:
                "Capacity (in GiB) for log mirror volume. If not provided size will automatically be calculated",
              args: { name: "log-mirror-size" },
            },
            {
              name: "--log-mirror-throughput",
              description:
                "Throughput in MiB/s for log mirror volume. If not provided size will automatically be calculated",
              args: { name: "log-mirror-throughput" },
            },
            {
              name: "--log-size",
              description:
                "Capacity (in GiB) for log volumes. If not provided size will automatically be calculated",
              args: { name: "log-size" },
            },
            {
              name: "--log-throughput",
              description:
                "Throughput in MiB/s for log volumes. If not provided size will automatically be calculated",
              args: { name: "log-throughput" },
            },
            {
              name: "--memory",
              description:
                "System (SAP-HANA) memory in GiB (max 12000 GiB), used to auto compute storage size and throughput",
              args: { name: "memory" },
            },
            {
              name: ["--shared-network-features", "--network-features"],
              description:
                "Network features available to the volumes in the volume group",
              args: {
                name: "shared-network-features",
                suggestions: ["Basic", "Standard"],
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
              name: ["--number-of-hosts", "--number-of-hots"],
              description:
                "Total Number of system (SAP-HANA) host in this deployment (currently max 3 nodes can be configured)",
              args: { name: "number-of-hosts" },
            },
            {
              name: "--number-of-volumes",
              description:
                "Total Number of Oracle data volumes (currently min 2 and max 8 nodes can be configured)",
              args: { name: "number-of-volumes" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF capacity pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--proximity-placement-group", "--ppg"],
              description:
                "The resource id of the Proximity Placement Group for volume placement",
              args: { name: "proximity-placement-group" },
            },
            {
              name: "--prefix",
              description:
                'All volume names will be prefixed with the given text. The default values for prefix text depends on system role. For PRIMARY it will be "" and HA it will be "HA-"',
              args: { name: "prefix" },
            },
            {
              name: "--shared-repl-skd",
              description: "Replication Schedule for shared volume",
              args: {
                name: "shared-repl-skd",
                suggestions: ["_10minutely", "daily", "hourly"],
              },
            },
            {
              name: "--shared-size",
              description:
                "Capacity (in GiB) for shared volumes. If not provided size will automatically be calculated",
              args: { name: "shared-size" },
            },
            {
              name: "--shared-src-id",
              description: "ResourceId of the shared source volume",
              args: { name: "shared-src-id" },
            },
            {
              name: "--shared-throughput",
              description:
                "Throughput in MiB/s for shared volumes. If not provided size will automatically be calculated",
              args: { name: "shared-throughput" },
            },
            {
              name: "--smb-access",
              description:
                "Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-browsable",
              description:
                "Enables non-browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-browsable",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--start-host-id",
              description:
                "Starting SAP-HANA Host ID. Host ID 1 indicates Master Host. Shared, Data Backup and Log Backup volumes are only provisioned for Master Host i.e. HostID == 1",
              args: { name: "start-host-id" },
            },
            {
              name: "--subnet",
              description: "The delegated Subnet name",
              args: { name: "subnet" },
            },
            {
              name: "--system-role",
              description:
                "Type of role for the storage account. Primary indicates first of a SAP-HANA Replication (HSR) setup or No HSR. High Availability (HA) specifies local scenario. Default is PRIMARY. Allowed values: DR, HA, PRIMARY",
              args: {
                name: "system-role",
                suggestions: ["DR", "HA", "PRIMARY"],
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--vnet",
              description: "The ARM Id or name of the vnet for the volumes",
              args: { name: "vnet" },
            },
            {
              name: "--volumes",
              description:
                'List of volumes from group Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "volumes", isVariadic: true },
            },
            {
              name: "--zones",
              description:
                'Availability Zone Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "zones", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete the specified volume group only if there are no volumes under volume group",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--volume-group-name", "--group-name", "--name", "-n"],
              description: "The name of the volumeGroup",
              args: { name: "volume-group-name" },
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
          description: "List all volume groups for given account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
          description: "Get details of the specified volume group",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            {
              name: ["--volume-group-name", "--group-name", "--name", "-n"],
              description: "The name of the volumeGroup",
              args: { name: "volume-group-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          description: "Update a volume group along with specified volumes",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: "--group-meta-data",
              description:
                'Volume group details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "group-meta-data", isVariadic: true },
            },
            {
              name: ["--volume-group-name", "--group-name", "--name", "-n"],
              description: "The name of the volumeGroup",
              args: { name: "volume-group-name" },
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
              name: "--volumes",
              description:
                'List of volumes from group Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "volumes", isVariadic: true },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
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
              name: ["--volume-group-name", "--group-name", "--name", "-n"],
              description: "The name of the volumeGroup",
              args: { name: "volume-group-name" },
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
