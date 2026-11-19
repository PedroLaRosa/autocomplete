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
  name: "batch",
  description: "Manage Azure Batch",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Batch accounts",
      subcommands: [
        {
          name: "create",
          description: "Create a Batch account with the specified parameters",
          options: [
            {
              name: ["--location", "-l"],
              description: "The region in which to create the account",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--encryption-key-identifier",
              description:
                "Part of the encryption configuration for the Batch account. Full path to the versioned secret. Example https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053",
              args: { name: "encryption-key-identifier" },
            },
            {
              name: "--encryption-key-source",
              description:
                "Part of the encryption configuration for the Batch account. Type of the key source. Can be either Microsoft.Batch or Microsoft.KeyVault",
              args: {
                name: "encryption-key-source",
                suggestions: ["Microsoft.Batch", "Microsoft.KeyVault"],
              },
            },
            {
              name: "--keyvault",
              description:
                "The KeyVault name or resource ID to be used for an account with a pool allocation mode of 'User Subscription'",
              args: { name: "keyvault" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Set the system managed identity on the batch services account",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Resource ID of the user assigned identity for the batch services account",
              args: { name: "mi-user-assigned" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--public-network-access",
              description:
                "The network access type for accessing Azure Batch account. Values can either be enabled or disabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-account",
              description:
                "The storage account name or resource ID to be used for auto storage",
              args: { name: "storage-account" },
            },
            {
              name: "--tags",
              description: "Space-separated tags in 'key[=value]' format",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Batch account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            "List the Batch accounts associated with a subscription or resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "login",
          description:
            "Log in to a Batch account through Azure Active Directory or Shared Key authentication",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--shared-key-auth",
              description:
                "Using Shared Key authentication, if not specified, it will use Azure Active Directory authentication",
            },
            {
              name: "--show",
              description:
                "Display the credential information for the Batch account",
            },
          ],
        },
        {
          name: "outbound-endpoints",
          description: "List an account's outbound network dependencies",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "set",
          description: "Update properties for a Batch account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--encryption-key-identifier",
              description:
                "Part of the encryption configuration for the Batch account. Full path to the versioned secret. Example https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053",
              args: { name: "encryption-key-identifier" },
            },
            {
              name: "--encryption-key-source",
              description:
                "Part of the encryption configuration for the Batch account. Type of the key source. Can be either Microsoft.Batch or Microsoft.KeyVault",
              args: { name: "encryption-key-source" },
            },
            {
              name: "--public-network-access",
              description:
                "The network access type for accessing Azure Batch account. Values can either be enabled or disabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-account",
              description:
                "The storage account name or resource ID to be used for auto storage",
              args: { name: "storage-account" },
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
          name: "show",
          description:
            "Get a specified Batch account or the currently set account",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the batch account to show. If not specified will display currently set account",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the resource group. If not specified will display currently set account",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "autostorage-keys",
          description:
            "Manage the access keys for the auto storage account configured for a Batch account",
          subcommands: [
            {
              name: "sync",
              description:
                "Synchronizes access keys for the auto-storage account configured for the specified Batch account, only if storage key authentication is being used",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Batch account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
          ],
        },
        {
          name: "identity",
          description: "Manage identities of a batch account",
          subcommands: [
            {
              name: "assign",
              description:
                "Add managed identities to an existing batch account",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the batch account to show. If not specified will display currently set account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group. If not specified will display currently set account",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--system-assigned",
                  description:
                    "Provide this flag to use system assigned identity for batch accounts. Check out help for more examples",
                },
                {
                  name: "--user-assigned",
                  description:
                    "User Assigned Identity ids to be used for batch account. Check out help for more examples",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove managed identities from an existing batch account",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the batch account to show. If not specified will display currently set account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group. If not specified will display currently set account",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--system-assigned",
                  description:
                    "Provide this flag to use system assigned identity for batch accounts. Check out help for more examples",
                },
                {
                  name: "--user-assigned",
                  description:
                    "User Assigned Identity ids to be used for batch account. Check out help for more examples",
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
              description: "Display managed identities of a batch account",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the batch account to show. If not specified will display currently set account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group. If not specified will display currently set account",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "keys",
          description: "Manage Batch account keys",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the account keys for the specified Batch account. This operation applies only to Batch accounts with allowedAuthenticationModes containing 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode, clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes instead. In this case, getting the keys will fail",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Batch account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "renew",
              description: "Renew keys for a Batch account",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--key-name",
                  description: "Name of the batch account key",
                  args: {
                    name: "key-name",
                    suggestions: ["Primary", "Secondary"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the batch account to show. If not specified will display currently set account",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group. If not specified will display currently set account",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "network-profile",
          description: "Manage Batch account Network profiles",
          subcommands: [
            {
              name: "set",
              description: "Set the Network profile for Batch account",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group. If not specified will display currently set account",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--default-action",
                  description:
                    "Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled",
                  args: {
                    name: "default-action",
                    suggestions: ["Allow", "Deny"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the batch account to show. If not specified will display currently set account",
                  args: { name: "name" },
                },
                {
                  name: "--profile",
                  description: "Network profile to set",
                  args: {
                    name: "profile",
                    suggestions: ["BatchAccount", "NodeManagement"],
                  },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get information about the Network profile for Batch account",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group. If not specified will display currently set account",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the batch account to show. If not specified will display currently set account",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "network-rule",
              description:
                "Manage Batch account Network rules in Network Profile",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Network rule from a Network Profile",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of the resource group. If not specified will display currently set account",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--ip-address",
                      description: "IPv4 address or CIDR range",
                      args: { name: "ip-address" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the batch account to show. If not specified will display currently set account",
                      args: { name: "name" },
                    },
                    {
                      name: "--profile",
                      description: "Network profile to set",
                      args: {
                        name: "profile",
                        suggestions: ["BatchAccount", "NodeManagement"],
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a Network rule from a Network Profile",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of the resource group. If not specified will display currently set account",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--ip-address",
                      description: "IPv4 address or CIDR range",
                      args: { name: "ip-address" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the batch account to show. If not specified will display currently set account",
                      args: { name: "name" },
                    },
                    {
                      name: "--profile",
                      description: "Network profile to set",
                      args: {
                        name: "profile",
                        suggestions: ["BatchAccount", "NodeManagement"],
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
                  description: "List the Network rules from a Network Profile",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of the resource group. If not specified will display currently set account",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the batch account to show. If not specified will display currently set account",
                      args: { name: "name" },
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
      name: "application",
      description: "Manage Batch applications",
      subcommands: [
        {
          name: "create",
          description: "Adds an application to the specified Batch account",
          options: [
            {
              name: "--application-name",
              description:
                "The name of the application. This must be unique within the account. Required",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--parameters",
              description:
                "The parameters for the request. Is either a Application type or a IO type. Default value is None",
              args: { name: "parameters" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an application",
          options: [
            {
              name: "--application-name",
              description:
                "The name of the application. This must be unique within the account. Required",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
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
          description: "Lists all of the applications in the specified account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--maxresults",
              description:
                "The maximum number of items to return in the response. Default value is None",
              args: { name: "maxresults" },
            },
          ],
        },
        {
          name: "set",
          description: "Update properties for a Batch application",
          options: [
            {
              name: "--application-name",
              description: "The name of the application",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--allow-updates",
              description:
                "Specify to indicate whether packages within the application may be overwritten using the same version string. Specify either 'true' or 'false' to update the property",
              args: { name: "allow-updates" },
            },
            changeReference,
            {
              name: "--default-version",
              description:
                "Specify which package to use if a client requests the application but does not specify a version",
              args: { name: "default-version" },
            },
            {
              name: "--display-name",
              description: "Specify the display name for the application",
              args: { name: "display-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about the specified application",
          options: [
            {
              name: "--application-name",
              description:
                "The name of the application. This must be unique within the account. Required",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Batch account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "package",
          description: "Manage Batch application packages",
          subcommands: [
            {
              name: "activate",
              description: "Activates a Batch application package",
              options: [
                {
                  name: "--application-name",
                  description: "The name of the application",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: "--format",
                  description:
                    "The format of the application package binary file",
                  args: { name: "format" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Batch account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--version-name",
                  description: "The version name of the application",
                  args: { name: "version-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "create",
              description:
                "Create a Batch application package record and activate it",
              options: [
                {
                  name: "--application-name",
                  description: "The name of the application",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Batch account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--package-file",
                  description:
                    "The path of the application package in zip format",
                  args: { name: "package-file" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--version-name",
                  description: "The version name of the application",
                  args: { name: "version-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description:
                "Deletes an application package record and its associated binary file",
              options: [
                {
                  name: "--application-name",
                  description:
                    "The name of the application. This must be unique within the account. Required",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Batch account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--version-name",
                  description: "The version of the application. Required",
                  args: { name: "version-name" },
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
                "Lists all of the application packages in the specified application",
              options: [
                {
                  name: "--application-name",
                  description:
                    "The name of the application. This must be unique within the account. Required",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Batch account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--maxresults",
                  description:
                    "The maximum number of items to return in the response. Default value is None",
                  args: { name: "maxresults" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets information about the specified application package",
              options: [
                {
                  name: "--application-name",
                  description:
                    "The name of the application. This must be unique within the account. Required",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Batch account",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--version-name",
                  description: "The version of the application. Required",
                  args: { name: "version-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "summary",
          description: "View a summary of Batch application packages",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the applications available in the specified account",
              options: [
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Gets information about the specified application",
              options: [
                {
                  name: "--application-id",
                  description: "The ID of the Application. Required",
                  args: { name: "application-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Manage Batch jobs",
      subcommands: [
        {
          name: "create",
          description: "Add a job to a Batch account",
          options: [
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--allow-task-preemption",
              description:
                "Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. True if flag present",
            },
            changeReference,
            {
              name: "--id",
              description:
                "A string that uniquely identifies the Job within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). Required",
              args: { name: "id" },
            },
            {
              name: "--job-manager-task-application-package-references",
              description:
                "A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line.Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format",
              args: {
                name: "job-manager-task-application-package-references",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-command-line",
              description:
                'The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). Required',
              args: { name: "job-manager-task-command-line" },
            },
            {
              name: "--job-manager-task-environment-settings",
              description:
                "A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format",
              args: {
                name: "job-manager-task-environment-settings",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-id",
              description:
                "A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. Required",
              args: { name: "job-manager-task-id" },
            },
            {
              name: "--job-manager-task-resource-files",
              description:
                "A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format",
              args: {
                name: "job-manager-task-resource-files",
                isVariadic: true,
              },
            },
            {
              name: "--job-max-task-retry-count",
              description:
                "The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries)",
              args: { name: "job-max-task-retry-count" },
            },
            {
              name: "--job-max-wall-clock-time",
              description:
                "The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration",
              args: { name: "job-max-wall-clock-time" },
            },
            {
              name: "--json-file",
              description:
                "A file containing the job specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-parallel-tasks",
              description:
                "The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API",
              args: { name: "max-parallel-tasks" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the Job as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--on-all-tasks-complete",
              description:
                'The action the Batch service should take when all Tasks in the Job are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. Known values are: "noaction" and "terminatejob"',
              args: { name: "on-all-tasks-complete" },
            },
            {
              name: "--pool-id",
              description:
                "The ID of an existing Pool. All the Tasks of the Job will run on the specified Pool. You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both",
              args: { name: "pool-id" },
            },
            {
              name: "--priority",
              description:
                "The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0",
              args: { name: "priority" },
            },
            {
              name: "--required-slots",
              description:
                "The number of scheduling slots that the Task requires to run. The default is 1. A Task can only be scheduled to run on a compute node if the node has enough free scheduling slots available. For multi-instance Tasks, this property is not supported and must not be specified",
              args: { name: "required-slots" },
            },
            {
              name: "--uses-task-dependencies",
              description:
                "Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a job from a Batch account",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job to delete. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable a Batch job",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job to disable. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--disable-tasks",
              description:
                'What to do with active Tasks associated with the Job. Required. Known values are: "requeue", "terminate", and "wait"',
              args: { name: "disable-tasks" },
            },
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--json-file",
              description:
                "A file containing the content specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Content Arguments' are ignored",
              args: { name: "json-file" },
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a Batch job",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job to enable. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all of the jobs or job schedule in a Batch account",
          options: [
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "The Batch account name. Only needed Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--filter",
              description:
                "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
              args: { name: "filter" },
            },
            {
              name: "--job-schedule-id",
              description:
                "The ID of the job schedule from which you want to get a list of jobs. If omitted, lists all jobs in the account",
              args: { name: "job-schedule-id" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "reset",
          description:
            "Update the properties of a Batch job. Unspecified properties which can be updated are reset to their defaults",
          options: [
            {
              name: "--job-id",
              description:
                "The ID of the Job whose properties you want to update. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--allow-task-preemption",
              description:
                "Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. True if flag present",
            },
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--job-max-task-retry-count",
              description:
                "The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries)",
              args: { name: "job-max-task-retry-count" },
            },
            {
              name: "--job-max-wall-clock-time",
              description:
                "The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration",
              args: { name: "job-max-wall-clock-time" },
            },
            {
              name: "--json-file",
              description:
                "A file containing the job specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-parallel-tasks",
              description:
                "The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API",
              args: { name: "max-parallel-tasks" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the Job as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--on-all-tasks-complete",
              description:
                'The action the Batch service should take when all Tasks in the Job are in the completed state. The default is noaction. Known values are: "noaction" and "terminatejob"',
              args: { name: "on-all-tasks-complete" },
            },
            {
              name: "--pool-id",
              description:
                "The ID of an existing Pool. All the Tasks of the Job will run on the specified Pool. You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both",
              args: { name: "pool-id" },
            },
            {
              name: "--priority",
              description:
                "The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0",
              args: { name: "priority" },
            },
          ],
        },
        {
          name: "set",
          description:
            "Update the properties of a Batch job. Updating a property in a subgroup will reset the unspecified properties of that group",
          options: [
            {
              name: "--job-id",
              description:
                "The ID of the Job whose properties you want to update. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--allow-task-preemption",
              description:
                "Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. True if flag present",
            },
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--job-max-task-retry-count",
              description:
                "The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries)",
              args: { name: "job-max-task-retry-count" },
            },
            {
              name: "--job-max-wall-clock-time",
              description:
                "The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration",
              args: { name: "job-max-wall-clock-time" },
            },
            {
              name: "--json-file",
              description:
                "A file containing the job specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-parallel-tasks",
              description:
                "The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API",
              args: { name: "max-parallel-tasks" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the Job as metadata. If omitted, the existing Job metadata is left unchanged. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--on-all-tasks-complete",
              description:
                'The action the Batch service should take when all Tasks in the Job are in the completed state. If omitted, the completion behavior is left unchanged. You may not change the value from terminatejob to noaction - that is, once you have engaged automatic Job termination, you cannot turn it off again. If you try to do this, the request fails with an \'invalid property value\' error response; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Known values are: "noaction" and "terminatejob"',
              args: { name: "on-all-tasks-complete" },
            },
            {
              name: "--pool-id",
              description:
                "The ID of an existing Pool. All the Tasks of the Job will run on the specified Pool. You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both",
              args: { name: "pool-id" },
            },
            {
              name: "--priority",
              description:
                "The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged",
              args: { name: "priority" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about the specified Batch job",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a running Batch job",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job to terminate. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--terminate-reason",
              description: "Termination reason",
              args: { name: "terminate-reason" },
            },
          ],
        },
        {
          name: "prep-release-status",
          description:
            "View the status of Batch job preparation and release tasks",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the execution status of the Job Preparation and Job Release Task for the specified Job across the Compute Nodes where the Job has run",
              options: [
                {
                  name: "--job-id",
                  description: "The ID of the Job. Required",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
                  args: { name: "filter" },
                },
                {
                  name: "--select",
                  description: "An OData $select clause",
                  args: { name: "select", isVariadic: true },
                },
              ],
            },
          ],
        },
        {
          name: "task-counts",
          description:
            "View the number of tasks and slots in a Batch job and their states",
          subcommands: [
            {
              name: "show",
              description: "Gets the Task counts for the specified Job",
              options: [
                {
                  name: "--job-id",
                  description: "The ID of the Job. Required",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "job-schedule",
      description: "Manage Batch job schedules",
      subcommands: [
        {
          name: "create",
          description: "Add a Batch job schedule to an account",
          options: [
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--allow-task-preemption",
              description:
                "Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. True if flag present",
            },
            changeReference,
            {
              name: "--do-not-run-after",
              description:
                "A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp",
              args: { name: "do-not-run-after" },
            },
            {
              name: "--do-not-run-until",
              description:
                "The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp",
              args: { name: "do-not-run-until" },
            },
            {
              name: "--id",
              description:
                "A string that uniquely identifies the schedule within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). Required",
              args: { name: "id" },
            },
            {
              name: "--job-manager-task-application-package-references",
              description:
                "A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line.Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format",
              args: {
                name: "job-manager-task-application-package-references",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-command-line",
              description:
                'The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). Required',
              args: { name: "job-manager-task-command-line" },
            },
            {
              name: "--job-manager-task-environment-settings",
              description:
                "A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format",
              args: {
                name: "job-manager-task-environment-settings",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-id",
              description:
                "A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. Required",
              args: { name: "job-manager-task-id" },
            },
            {
              name: "--job-manager-task-resource-files",
              description:
                "A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format",
              args: {
                name: "job-manager-task-resource-files",
                isVariadic: true,
              },
            },
            {
              name: "--job-max-task-retry-count",
              description:
                "The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries)",
              args: { name: "job-max-task-retry-count" },
            },
            {
              name: "--job-max-wall-clock-time",
              description:
                "The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration",
              args: { name: "job-max-wall-clock-time" },
            },
            {
              name: "--job-metadata",
              description:
                "A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "job-metadata", isVariadic: true },
            },
            {
              name: "--json-file",
              description:
                "A file containing the job schedule specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Schedule Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-parallel-tasks",
              description:
                "The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API",
              args: { name: "max-parallel-tasks" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--on-all-tasks-complete",
              description:
                'The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. Known values are: "noaction" and "terminatejob"',
              args: { name: "on-all-tasks-complete" },
            },
            {
              name: "--pool-id",
              description:
                "The ID of an existing Pool. All the Tasks of the Job will run on the specified Pool. You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both",
              args: { name: "pool-id" },
            },
            {
              name: "--priority",
              description:
                "The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API",
              args: { name: "priority" },
            },
            {
              name: "--recurrence-interval",
              description:
                "The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "recurrence-interval" },
            },
            {
              name: "--required-slots",
              description:
                "The number of scheduling slots that the Task requires to run. The default is 1. A Task can only be scheduled to run on a compute node if the node has enough free scheduling slots available. For multi-instance Tasks, this property is not supported and must not be specified",
              args: { name: "required-slots" },
            },
            {
              name: "--start-window",
              description:
                "The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "start-window" },
            },
            {
              name: "--uses-task-dependencies",
              description:
                "Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Job Schedule from the specified Account",
          options: [
            {
              name: "--job-schedule-id",
              description: "The ID of the Job Schedule to delete. Required",
              args: { name: "job-schedule-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable",
          description: "Disables a Job Schedule",
          options: [
            {
              name: "--job-schedule-id",
              description: "The ID of the Job Schedule to disable. Required",
              args: { name: "job-schedule-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
          ],
        },
        {
          name: "enable",
          description: "Enables a Job Schedule",
          options: [
            {
              name: "--job-schedule-id",
              description: "The ID of the Job Schedule to enable. Required",
              args: { name: "job-schedule-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all of the Job Schedules in the specified Account",
          options: [
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--filter",
              description:
                "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
              args: { name: "filter" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "reset",
          description:
            "Reset the properties of a job schedule. An updated job specification only applies to new jobs",
          options: [
            {
              name: "--job-schedule-id",
              description: "The ID of the Job Schedule to update. Required",
              args: { name: "job-schedule-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--allow-task-preemption",
              description:
                "Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. True if flag present",
            },
            changeReference,
            {
              name: "--do-not-run-after",
              description:
                "A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp",
              args: { name: "do-not-run-after" },
            },
            {
              name: "--do-not-run-until",
              description:
                "The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp",
              args: { name: "do-not-run-until" },
            },
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--job-manager-task-application-package-references",
              description:
                "A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line.Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format",
              args: {
                name: "job-manager-task-application-package-references",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-command-line",
              description:
                'The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). Required',
              args: { name: "job-manager-task-command-line" },
            },
            {
              name: "--job-manager-task-environment-settings",
              description:
                "A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format",
              args: {
                name: "job-manager-task-environment-settings",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-id",
              description:
                "A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. Required",
              args: { name: "job-manager-task-id" },
            },
            {
              name: "--job-manager-task-resource-files",
              description:
                "A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format",
              args: {
                name: "job-manager-task-resource-files",
                isVariadic: true,
              },
            },
            {
              name: "--job-max-task-retry-count",
              description:
                "The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries)",
              args: { name: "job-max-task-retry-count" },
            },
            {
              name: "--job-max-wall-clock-time",
              description:
                "The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration",
              args: { name: "job-max-wall-clock-time" },
            },
            {
              name: "--job-metadata",
              description:
                "A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "job-metadata", isVariadic: true },
            },
            {
              name: "--json-file",
              description:
                "A file containing the job schedule specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Schedule Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-parallel-tasks",
              description:
                "The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API",
              args: { name: "max-parallel-tasks" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--on-all-tasks-complete",
              description:
                'The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. Known values are: "noaction" and "terminatejob"',
              args: { name: "on-all-tasks-complete" },
            },
            {
              name: "--pool-id",
              description:
                "The ID of an existing Pool. All the Tasks of the Job will run on the specified Pool. You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both",
              args: { name: "pool-id" },
            },
            {
              name: "--priority",
              description:
                "The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API",
              args: { name: "priority" },
            },
            {
              name: "--recurrence-interval",
              description:
                "The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "recurrence-interval" },
            },
            {
              name: "--required-slots",
              description:
                "The number of scheduling slots that the Task requires to run. The default is 1. A Task can only be scheduled to run on a compute node if the node has enough free scheduling slots available. For multi-instance Tasks, this property is not supported and must not be specified",
              args: { name: "required-slots" },
            },
            {
              name: "--start-window",
              description:
                "The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "start-window" },
            },
            {
              name: "--uses-task-dependencies",
              description:
                "Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present",
            },
          ],
        },
        {
          name: "set",
          description: "Update the properties of a job schedule",
          options: [
            {
              name: "--job-schedule-id",
              description: "The ID of the Job Schedule to update. Required",
              args: { name: "job-schedule-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--allow-task-preemption",
              description:
                "Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. True if flag present",
            },
            changeReference,
            {
              name: "--do-not-run-after",
              description:
                "A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp",
              args: { name: "do-not-run-after" },
            },
            {
              name: "--do-not-run-until",
              description:
                "The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp",
              args: { name: "do-not-run-until" },
            },
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--job-manager-task-application-package-references",
              description:
                "A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line.Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format",
              args: {
                name: "job-manager-task-application-package-references",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-command-line",
              description:
                'The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). Required',
              args: { name: "job-manager-task-command-line" },
            },
            {
              name: "--job-manager-task-environment-settings",
              description:
                "A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format",
              args: {
                name: "job-manager-task-environment-settings",
                isVariadic: true,
              },
            },
            {
              name: "--job-manager-task-id",
              description:
                "A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. Required",
              args: { name: "job-manager-task-id" },
            },
            {
              name: "--job-manager-task-resource-files",
              description:
                "A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format",
              args: {
                name: "job-manager-task-resource-files",
                isVariadic: true,
              },
            },
            {
              name: "--job-max-task-retry-count",
              description:
                "The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries)",
              args: { name: "job-max-task-retry-count" },
            },
            {
              name: "--job-max-wall-clock-time",
              description:
                "The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration",
              args: { name: "job-max-wall-clock-time" },
            },
            {
              name: "--job-metadata",
              description:
                "A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "job-metadata", isVariadic: true },
            },
            {
              name: "--json-file",
              description:
                "A file containing the job schedule specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Schedule Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-parallel-tasks",
              description:
                "The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API",
              args: { name: "max-parallel-tasks" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the Job Schedule as metadata. If you do not specify this element, existing metadata is left unchanged. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--on-all-tasks-complete",
              description:
                'The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. Known values are: "noaction" and "terminatejob"',
              args: { name: "on-all-tasks-complete" },
            },
            {
              name: "--pool-id",
              description:
                "The ID of an existing Pool. All the Tasks of the Job will run on the specified Pool. You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both",
              args: { name: "pool-id" },
            },
            {
              name: "--priority",
              description:
                "The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API",
              args: { name: "priority" },
            },
            {
              name: "--recurrence-interval",
              description:
                "The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "recurrence-interval" },
            },
            {
              name: "--required-slots",
              description:
                "The number of scheduling slots that the Task requires to run. The default is 1. A Task can only be scheduled to run on a compute node if the node has enough free scheduling slots available. For multi-instance Tasks, this property is not supported and must not be specified",
              args: { name: "required-slots" },
            },
            {
              name: "--start-window",
              description:
                "The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "start-window" },
            },
            {
              name: "--uses-task-dependencies",
              description:
                "Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present",
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about the specified Job Schedule",
          options: [
            {
              name: "--job-schedule-id",
              description: "The ID of the Job Schedule to get. Required",
              args: { name: "job-schedule-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "stop",
          description: "Terminates a Job Schedule",
          options: [
            {
              name: "--job-schedule-id",
              description: "The ID of the Job Schedule to terminates. Required",
              args: { name: "job-schedule-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
          ],
        },
      ],
    },
    {
      name: "location",
      description:
        "Manage Batch service options for a subscription at the region level",
      subcommands: [
        {
          name: "list-skus",
          description: "List virtual machine SKUs available in a location",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The region for which to display the available Batch VM SKUs",
              args: { name: "location" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--filter",
              description:
                'OData filter expression. Valid properties for filtering are "familyName". Default value is None',
              args: { name: "filter" },
            },
            {
              name: "--maxresults",
              description:
                "The maximum number of items to return in the response. Default value is None",
              args: { name: "maxresults" },
            },
          ],
        },
        {
          name: "quotas",
          description: "Manage Batch service quotas at the region level",
          subcommands: [
            {
              name: "show",
              description:
                "Gets the Batch service quotas for the specified subscription at the given location",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "The region for which to display the Batch service quotas",
                  args: { name: "location" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "node",
      description: "Manage Batch compute nodes",
      subcommands: [
        {
          name: "delete",
          description: "Removes Compute Nodes from the specified Pool",
          options: [
            {
              name: "--pool-id",
              description: "The ID of the Pool to get. Required",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--json-file",
              description:
                "A file containing the content specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Content Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--node-deallocation-option",
              description:
                'Determines what to do with a Compute Node and its running task(s) after it has been selected for deallocation. The default value is requeue. Known values are: "requeue", "terminate", "taskcompletion", and "retaineddata"',
              args: { name: "node-deallocation-option" },
            },
            {
              name: "--node-list",
              description:
                "A list containing the IDs of the Compute Nodes to be removed from the specified Pool. A maximum of 100 nodes may be removed per request. Required. Space-separated values",
              args: { name: "node-list", isVariadic: true },
            },
            {
              name: "--resize-timeout",
              description:
                "The timeout for removal of Compute Nodes to the Pool. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "resize-timeout" },
            },
          ],
        },
        {
          name: "list",
          description: "Lists the Compute Nodes in the specified Pool",
          options: [
            {
              name: "--pool-id",
              description:
                "The ID of the Pool from which you want to list Compute Nodes. Required",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--filter",
              description:
                "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
              args: { name: "filter" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "reboot",
          description: "Reboot a Batch compute node",
          options: [
            {
              name: "--node-id",
              description:
                "The ID of the Compute Node that you want to restart. Required",
              args: { name: "node-id" },
              isRequired: true,
            },
            {
              name: "--pool-id",
              description:
                "The ID of the Pool that contains the Compute Node. Required",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--json-file",
              description:
                "A file containing the parameters specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Parameters Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--node-reboot-option",
              description:
                'When to reboot the Compute Node and what to do with currently running Tasks. The default value is requeue. Known values are: "requeue", "terminate", "taskcompletion", and "retaineddata"',
              args: { name: "node-reboot-option" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about the specified Compute Node",
          options: [
            {
              name: "--node-id",
              description:
                "The ID of the Compute Node that you want to get information about. Required",
              args: { name: "node-id" },
              isRequired: true,
            },
            {
              name: "--pool-id",
              description:
                "The ID of the Pool that contains the Compute Node. Required",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "file",
          description: "Manage Batch compute node files",
          subcommands: [
            {
              name: "delete",
              description: "Deletes the specified file from the Compute Node",
              options: [
                {
                  name: "--file-path",
                  description: "The path to the file or directory. Required",
                  args: { name: "file-path" },
                  isRequired: true,
                },
                {
                  name: "--node-id",
                  description: "The ID of the Compute Node. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--recursive",
                  description:
                    "Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. Default value is None",
                  args: {
                    name: "recursive",
                    suggestions: ["false", "true"],
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
              name: "download",
              description: "Download the content of the a node file",
              options: [
                {
                  name: "--destination",
                  description: "The path to the destination file or directory",
                  args: { name: "destination" },
                  isRequired: true,
                },
                {
                  name: "--file-path",
                  description:
                    "The path to the file or directory that you want to delete. Required",
                  args: { name: "file-path" },
                  isRequired: true,
                },
                {
                  name: "--node-id",
                  description:
                    "The ID of the Compute Node from which you want to delete the file. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--end-range",
                  description:
                    "The byte range to be retrieved. If not set the file will be retrieved to the end",
                  args: { name: "end-range" },
                },
                {
                  name: "--if-modified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-modified-since" },
                },
                {
                  name: "--if-unmodified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-unmodified-since" },
                },
                {
                  name: "--start-range",
                  description:
                    "The byte range to be retrieved. If not set the file will be retrieved from the beginning",
                  args: { name: "start-range" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists all of the files in Task directories on the specified Compute Node",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the Compute Node whose files you want to list. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
                  args: { name: "filter" },
                },
                {
                  name: "--recursive",
                  description: "Whether to list children of a directory",
                  args: {
                    name: "recursive",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the properties of the specified Compute Node file",
              options: [
                {
                  name: "--file-path",
                  description:
                    "The path to the file or directory that you want to delete. Required",
                  args: { name: "file-path" },
                  isRequired: true,
                },
                {
                  name: "--node-id",
                  description:
                    "The ID of the Compute Node from which you want to delete the file. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--if-modified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-modified-since" },
                },
                {
                  name: "--if-unmodified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-unmodified-since" },
                },
              ],
            },
          ],
        },
        {
          name: "remote-login-settings",
          description:
            "Retrieve the remote login settings for a Batch compute node",
          subcommands: [
            {
              name: "show",
              description:
                "Gets the settings required for remote login to a Compute Node",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the Compute Node for which to obtain the remote login settings. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
              ],
            },
          ],
        },
        {
          name: "scheduling",
          description: "Manage task scheduling for a Batch compute node",
          subcommands: [
            {
              name: "disable",
              description: "Disable scheduling on a Batch compute node",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the Compute Node on which you want to disable Task scheduling. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--json-file",
                  description:
                    "A file containing the parameters specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Parameters Arguments' are ignored",
                  args: { name: "json-file" },
                },
                {
                  name: "--node-disable-scheduling-option",
                  description:
                    'What to do with currently running Tasks when disabling Task scheduling on the Compute Node. The default value is requeue. Known values are: "requeue", "terminate", and "taskcompletion"',
                  args: { name: "node-disable-scheduling-option" },
                },
              ],
            },
            {
              name: "enable",
              description: "Enable scheduling on a Batch compute node",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the Compute Node on which you want to enable Task scheduling. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
          ],
        },
        {
          name: "service-logs",
          description: "Manage the service log files of a Batch compute node",
          subcommands: [
            {
              name: "upload",
              description:
                "Upload service logs from a specified Batch compute node",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the Compute Node for which you want to get the Remote Desktop Protocol file. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--container-url",
                  description:
                    "The URL of the container within Azure Blob Storage to which to upload the Batch Service log file(s). If a user assigned managed identity is not being used, the URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified. Required",
                  args: { name: "container-url" },
                },
                {
                  name: "--end-time",
                  description:
                    "The end of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime. Expected format is an ISO-8601 timestamp",
                  args: { name: "end-time" },
                },
                {
                  name: "--json-file",
                  description:
                    "A file containing the content specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Content Arguments' are ignored",
                  args: { name: "json-file" },
                },
                {
                  name: "--resource-id",
                  description:
                    "The ARM resource id of the user assigned identity",
                  args: { name: "resource-id" },
                },
                {
                  name: "--start-time",
                  description:
                    "The start of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. Required. Expected format is an ISO-8601 timestamp",
                  args: { name: "start-time" },
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description: "Manage the user accounts of a Batch compute node",
          subcommands: [
            {
              name: "create",
              description: "Add a user account to a Batch compute node",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the machine on which you want to create a user Account. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--expiry-time",
                  description:
                    "The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. Expected format is an ISO-8601 timestamp",
                  args: { name: "expiry-time" },
                },
                {
                  name: "--is-admin",
                  description:
                    "Whether the Account should be an administrator on the Compute Node. The default value is false. True if flag present",
                },
                {
                  name: "--json-file",
                  description:
                    "A file containing the user specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'User Arguments' are ignored",
                  args: { name: "json-file" },
                },
                {
                  name: "--name",
                  description: "The user name of the Account. Required",
                  args: { name: "name" },
                },
                {
                  name: "--password",
                  description:
                    "The password of the Account. The password is required for Windows Compute Nodes (those created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property",
                  args: { name: "password" },
                },
                {
                  name: "--ssh-public-key",
                  description:
                    "The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request)",
                  args: { name: "ssh-public-key" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes a user Account from the specified Compute Node",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the machine on which you want to delete a user Account. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description:
                    "The name of the user Account to delete. Required",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
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
              name: "reset",
              description:
                "Update the properties of a user account on a Batch compute node. Unspecified properties which can be updated are reset to their defaults",
              options: [
                {
                  name: "--node-id",
                  description:
                    "The ID of the machine on which you want to update a user Account. Required",
                  args: { name: "node-id" },
                  isRequired: true,
                },
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool that contains the Compute Node. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description:
                    "The name of the user Account to update. Required",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--expiry-time",
                  description:
                    "The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. Expected format is an ISO-8601 timestamp",
                  args: { name: "expiry-time" },
                },
                {
                  name: "--json-file",
                  description:
                    "A file containing the content specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Content Arguments' are ignored",
                  args: { name: "json-file" },
                },
                {
                  name: "--password",
                  description:
                    "The password of the Account. The password is required for Windows Compute Nodes (those created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed",
                  args: { name: "password" },
                },
                {
                  name: "--ssh-public-key",
                  description:
                    "The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed",
                  args: { name: "ssh-public-key" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "pool",
      description: "Manage Batch pools",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Batch pool in an account. When creating a pool, choose arguments from either Cloud Services Configuration or Virtual Machine Configuration",
          options: [
            {
              name: "--accelerated-networking",
              description:
                "Whether this pool should enable accelerated networking. Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, which may lead to improved networking performance. For more details, see: https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview. Set true to enable",
              args: {
                name: "accelerated-networking",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--application-package-references",
              description:
                "The list of Packages to be installed on each Compute Node in the Pool. When creating a pool, the package's application ID must be fully qualified (/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}). # pylint: disable=line-too-long Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. Space-separated application IDs with optional version in 'id[#version]' format",
              args: {
                name: "application-package-references",
                isVariadic: true,
              },
            },
            {
              name: "--auto-scale-formula",
              description:
                "A formula for the desired number of Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale Compute Nodes in an Azure Batch Pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/)",
              args: { name: "auto-scale-formula" },
            },
            changeReference,
            {
              name: "--defer-os-rolling-upgrade",
              description:
                "Defer OS upgrades on the TVMs if they are running tasks. True if flag present",
              args: {
                name: "defer-os-rolling-upgrade",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--disable-auto-rollback",
              description:
                "Whether OS image rollback feature should be disabled. True if flag present",
              args: {
                name: "disable-auto-rollback",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--disk-encryption-targets",
              description:
                "A space separated list of DiskEncryptionTargets. current possible values include OsDisk and TemporaryDisk",
              args: { name: "disk-encryption-targets" },
            },
            {
              name: "--enable-auto-os-upgrade",
              description:
                "Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. :code:<br />:code:<br /> If this is set to true for Windows based pools, WindowsConfiguration.enableAutomaticUpdates <https://learn.microsoft.com/en-us/rest/api/batchservice/pool/add?tabs=HTTP#windowsconfiguration>_ cannot be set to true. True if flag present",
              args: {
                name: "enable-auto-os-upgrade",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-cross-zone-upgrade",
              description:
                "Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size. This field is able to be set to true or false only when using NodePlacementConfiguration as Zonal. True if flag present",
              args: {
                name: "enable-cross-zone-upgrade",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-inter-node-communication",
              description:
                "Whether the Pool permits direct communication between Compute Nodes. Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. True if flag present",
            },
            {
              name: "--enable-secure-boot",
              description: "Enable secure boot",
              args: {
                name: "enable-secure-boot",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-vtpm",
              description: "Enable vTPM",
              args: {
                name: "enable-vtpm",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-write-accel",
              description:
                "Specify whether writeAccelerator should be enabled or disabled on the disk",
              args: {
                name: "enable-write-accel",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--encryption-at-host",
              description:
                "This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource",
              args: {
                name: "encryption-at-host",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--id",
              description:
                "A string that uniquely identifies the Pool within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two Pool IDs within an Account that differ only by case). Required",
              args: { name: "id" },
            },
            {
              name: "--image",
              description:
                "OS image reference. This can be either 'publisher:offer:sku[:version]' format, or a fully qualified ARM image id of the form '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'. If 'publisher:offer:sku[:version]' format, version is optional and if omitted latest will be used. Valid values can be retrieved via 'az batch pool supported-images list'. For example: 'MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:latest'",
              args: { name: "image" },
            },
            {
              name: "--json-file",
              description:
                "The file containing pool create properties parameter specification in JSON(formatted to match REST API request body). If this parameter is specified, all 'Pool Create Properties Parameter Arguments' are ignored. See https://learn.microsoft.com/rest/api/batchservice/pools/create-pool?tabs=HTTP#request-body",
              args: { name: "json-file" },
            },
            {
              name: "--max-batch-instance-percent",
              description:
                "The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The value of this field should be between 5 and 100, inclusive. If both maxBatchInstancePercent and maxUnhealthyInstancePercent are assigned with value, the value of maxBatchInstancePercent should not be more than maxUnhealthyInstancePercent",
              args: { name: "max-batch-instance-percent" },
            },
            {
              name: "--max-unhealthy-instance-percent",
              description:
                "The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The value of this field should be between 5 and 100, inclusive. If both maxBatchInstancePercent and maxUnhealthyInstancePercent are assigned with value, the value of maxBatchInstancePercent should not be more than maxUnhealthyInstancePercent",
              args: { name: "max-unhealthy-instance-percent" },
            },
            {
              name: "--max-unhealthy-upgraded-instance-percent",
              description:
                "The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The value of this field should be between 0 and 100, inclusive",
              args: { name: "max-unhealthy-upgraded-instance-percent" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the Pool as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--node-agent-sku-id",
              description:
                "The SKU of the Batch Compute Node agent to be provisioned on Compute Nodes in the Pool. The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the 'List supported Compute Node agent SKUs' operation. Required",
              args: { name: "node-agent-sku-id" },
            },
            {
              name: "--os-disk-caching",
              description:
                "Specify the caching requirements. Possible values are: None, ReadOnly, ReadWrite. The default values are: None for Standard storage. ReadOnly for Premium storage",
              args: {
                name: "os-disk-caching",
                suggestions: ["none", "readonly", "readwrite"],
              },
            },
            {
              name: "--os-disk-size",
              description:
                "The initial disk size in GB when creating new OS disk",
              args: { name: "os-disk-size" },
            },
            {
              name: "--pause-time-between-batches",
              description:
                "The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format.. Expected format is an ISO-8601 duration",
              args: { name: "pause-time-between-batches" },
            },
            {
              name: "--placement",
              description:
                'Specifies the ephemeral disk placement for operating system disk for all VMs in the pool. This property can be used by user in the request to choose the location e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at https://docs.microsoft.com/en-us/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements. "cachedisk"',
              args: { name: "placement" },
            },
            {
              name: "--policy",
              description:
                'Node placement Policy type on Batch Pools. Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy. Known values are: "regional" and "zonal"',
              args: { name: "policy" },
            },
            {
              name: "--prioritize-unhealthy-instances",
              description:
                "Upgrade all unhealthy instances in a scale set before any healthy instances. True if flag present",
              args: {
                name: "prioritize-unhealthy-instances",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--resize-timeout",
              description:
                "The timeout for allocation of Compute Nodes to the Pool. This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration",
              args: { name: "resize-timeout" },
            },
            {
              name: "--rollback-failed-instances-on-policy-breach",
              description:
                "Rollback failed instances to previous model if the Rolling Upgrade policy is violated. True if flag present",
              args: {
                name: "rollback-failed-instances-on-policy-breach",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--security-type",
              description:
                "Specify the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set",
              args: { name: "security-type" },
            },
            {
              name: "--start-task-command-line",
              description:
                'The command line of the StartTask. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). Required',
              args: { name: "start-task-command-line" },
            },
            {
              name: "--start-task-environment-settings",
              description:
                "A list of environment variable settings for the StartTask. Space-separated values in 'key=value' format",
              args: {
                name: "start-task-environment-settings",
                isVariadic: true,
              },
            },
            {
              name: "--start-task-max-task-retry-count",
              description:
                "The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit, however this is not recommended for a start task or any task. The default value is 0 (no retries)",
              args: { name: "start-task-max-task-retry-count" },
            },
            {
              name: "--start-task-resource-files",
              description:
                "A list of files that the Batch service will download to the Compute Node before running the command line. There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. Space-separated resource references in filename=httpurl format",
              args: { name: "start-task-resource-files", isVariadic: true },
            },
            {
              name: "--start-task-wait-for-success",
              description:
                "Whether the Batch service should wait for the StartTask to complete successfully (that is, to exit with exit code 0) before scheduling any Tasks on the Compute Node. If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. True if flag present",
            },
            {
              name: "--storage-account-type",
              description: "The storage account type for managed disk",
              args: {
                name: "storage-account-type",
                suggestions: ["premium_lrs", "standard_lrs", "standardssd_lrs"],
              },
            },
            {
              name: "--target-dedicated-nodes",
              description:
                "The desired number of dedicated Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both",
              args: { name: "target-dedicated-nodes" },
            },
            {
              name: "--target-low-priority-nodes",
              description:
                "The desired number of Spot/Low-priority Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both",
              args: { name: "target-low-priority-nodes" },
            },
            {
              name: "--targets",
              description:
                'The list of disk targets Batch Service will encrypt on the compute node. If omitted, no disks on the compute nodes in the pool will be encrypted. On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified. Space seperated target disks to be encrypted. Values can either be OsDisk or TemporaryDisk',
              args: { name: "targets", isVariadic: true },
            },
            {
              name: "--task-slots-per-node",
              description:
                "The number of task slots that can be used to run concurrent tasks on a single compute node in the pool. The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256",
              args: { name: "task-slots-per-node" },
            },
            {
              name: "--upgrade-policy-mode",
              description: "The mode of the pool OS upgrade",
              args: { name: "upgrade-policy-mode" },
            },
            {
              name: "--use-rolling-upgrade-policy",
              description:
                "Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS. True if flag present",
              args: {
                name: "use-rolling-upgrade-policy",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--vm-size",
              description:
                "The size of virtual machines in the Pool. All virtual machines in a Pool are the same size. For information about available VM sizes for Pools using Images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration), see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). Required",
              args: { name: "vm-size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Pool from the specified Account",
          options: [
            {
              name: "--pool-id",
              description: "The ID of the Pool to get. Required",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Lists all of the Pools in the specified Account",
          options: [
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--filter",
              description:
                "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
              args: { name: "filter" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "reset",
          description:
            "Update the properties of a Batch pool. Unspecified properties which can be updated are reset to their defaults",
          options: [
            {
              name: "--pool-id",
              description: "The ID of the pool to update",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "The Batch account name. Only needed Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--application-package-references",
              description:
                "Required. The list replaces any existing Application Package references on the Pool. Changes to Application Package references affect all new Compute Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Application Package references on any given Pool. If omitted, or if you specify an empty collection, any existing Application Packages references are removed from the Pool. A maximum of 10 references may be specified on a given Pool",
              args: {
                name: "application-package-references",
                isVariadic: true,
              },
            },
            changeReference,
            {
              name: "--json-file",
              description:
                "The file containing pool update properties parameter specification in JSON(formatted to match REST API request body). If this parameter is specified, all 'Pool Update Properties Parameter Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--metadata",
              description:
                "Required. This list replaces any existing metadataconfigured on the Pool. If omitted, or if you specify anempty collection, any existing metadata is removed from thePool",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--start-task-command-line",
              description:
                'The command line of the start task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux',
              args: { name: "start-task-command-line" },
            },
            {
              name: "--start-task-environment-settings",
              description:
                "A list of environment variable settings for the start task. Space-separated values in 'key=value' format",
              args: {
                name: "start-task-environment-settings",
                isVariadic: true,
              },
            },
            {
              name: "--start-task-max-task-retry-count",
              description:
                "The maximum number of times the task may be retried",
              args: { name: "start-task-max-task-retry-count" },
            },
            {
              name: "--start-task-resource-files",
              description:
                "A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. Space-separated resource references in filename=httpurl format",
              args: { name: "start-task-resource-files", isVariadic: true },
            },
            {
              name: "--start-task-wait-for-success",
              description:
                "Whether the Batch service should wait for the start task to complete successfully (that is, to exit with exit code 0) before scheduling any tasks on the compute node. True if flag present, otherwise defaults to False",
            },
          ],
        },
        {
          name: "resize",
          description: "Resize or stop resizing a Batch pool",
          options: [
            {
              name: "--pool-id",
              description: "The ID of the pool",
              args: { name: "pool-id" },
              isRequired: true,
            },
            { name: "--abort", description: "Stop the pool resize operation" },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "The Batch account name. Only needed Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "The operation will be performed only if the resource's current ETag exactly matches the specified value",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "The operation will be performed only if the resource has been modified since the specified timestamp",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "The operation will not be performed only if the resource's current ETag exactly matches the specified value",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "The operation will not be performed only if the resource has been modified since the specified timestamp",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--node-deallocation-option",
              description:
                "When nodes may be removed from the pool, if the pool size is decreasing",
              args: {
                name: "node-deallocation-option",
                suggestions: [
                  "requeue",
                  "retaineddata",
                  "taskcompletion",
                  "terminate",
                ],
              },
            },
            {
              name: "--resize-timeout",
              description:
                "The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). ISO-8601 duration format",
              args: { name: "resize-timeout" },
            },
            {
              name: "--target-dedicated-nodes",
              description:
                "The desired number of dedicated Compute Nodes in the Pool",
              args: { name: "target-dedicated-nodes" },
            },
            {
              name: "--target-low-priority-nodes",
              description:
                "The desired number of Spot/Low-priority Compute Nodes in the Pool",
              args: { name: "target-low-priority-nodes" },
            },
          ],
        },
        {
          name: "set",
          description:
            "Update the properties of a Batch pool. Updating a property in a subgroup will reset the unspecified properties of that group",
          options: [
            {
              name: "--pool-id",
              description: "The ID of the Pool to get. Required",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--application-package-references",
              description:
                "A list of Packages to be installed on each Compute Node in the Pool. Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. If this element is present, it replaces any existing Package references. If you specify an empty collection, then all Package references are removed from the Pool. If omitted, any existing Package references are left unchanged. Space-separated application IDs with optional version in 'id[#version]' format",
              args: {
                name: "application-package-references",
                isVariadic: true,
              },
            },
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--json-file",
              description:
                "A file containing the pool specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Pool Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--metadata",
              description:
                "A list of name-value pairs associated with the Pool as metadata. If this element is present, it replaces any existing metadata configured on the Pool. If you specify an empty collection, any metadata is removed from the Pool. If omitted, any existing metadata is left unchanged. Space-separated values in 'key=value' format",
              args: { name: "metadata", isVariadic: true },
            },
            {
              name: "--start-task-command-line",
              description:
                'The command line of the StartTask. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). Required',
              args: { name: "start-task-command-line" },
            },
            {
              name: "--start-task-environment-settings",
              description:
                "A list of environment variable settings for the StartTask. Space-separated values in 'key=value' format",
              args: {
                name: "start-task-environment-settings",
                isVariadic: true,
              },
            },
            {
              name: "--start-task-max-task-retry-count",
              description:
                "The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit, however this is not recommended for a start task or any task. The default value is 0 (no retries)",
              args: { name: "start-task-max-task-retry-count" },
            },
            {
              name: "--start-task-resource-files",
              description:
                "A list of files that the Batch service will download to the Compute Node before running the command line. There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. Space-separated resource references in filename=httpurl format",
              args: { name: "start-task-resource-files", isVariadic: true },
            },
            {
              name: "--start-task-wait-for-success",
              description:
                "Whether the Batch service should wait for the StartTask to complete successfully (that is, to exit with exit code 0) before scheduling any Tasks on the Compute Node. If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. True if flag present",
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about the specified Pool",
          options: [
            {
              name: "--pool-id",
              description: "The ID of the Pool to get. Required",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "autoscale",
          description: "Manage automatic scaling of Batch pools",
          subcommands: [
            {
              name: "disable",
              description: "Disables automatic scaling for a Pool",
              options: [
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool on which to disable automatic scaling. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "enable",
              description: "Enables automatic scaling for a Pool",
              options: [
                {
                  name: "--pool-id",
                  description: "The ID of the Pool to get. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: "--auto-scale-evaluation-interval",
                  description:
                    "The time interval at which to automatically adjust the Pool size according to the autoscale formula. The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued",
                  args: { name: "auto-scale-evaluation-interval" },
                },
                {
                  name: "--auto-scale-formula",
                  description:
                    "The formula for the desired number of Compute Nodes in the Pool. The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://learn.microsoft.com/azure/batch/batch-automatic-scaling)",
                  args: { name: "auto-scale-formula" },
                },
                changeReference,
                {
                  name: "--if-match",
                  description:
                    "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
                  args: { name: "if-match" },
                },
                {
                  name: "--if-modified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-modified-since" },
                },
                {
                  name: "--if-none-match",
                  description:
                    "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
                  args: { name: "if-none-match" },
                },
                {
                  name: "--if-unmodified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-unmodified-since" },
                },
              ],
            },
            {
              name: "evaluate",
              description:
                "Gets the result of evaluating an automatic scaling formula on the Pool",
              options: [
                {
                  name: "--pool-id",
                  description:
                    "The ID of the Pool on which to evaluate the automatic scaling formula. Required",
                  args: { name: "pool-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                {
                  name: "--auto-scale-formula",
                  description:
                    "The formula for the desired number of Compute Nodes in the Pool. The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). Required",
                  args: { name: "auto-scale-formula" },
                },
                changeReference,
                {
                  name: "--json-file",
                  description:
                    "A file containing the content specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Content Arguments' are ignored",
                  args: { name: "json-file" },
                },
              ],
            },
          ],
        },
        {
          name: "node-counts",
          description: "Get node counts for Batch pools",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the number of Compute Nodes in each state, grouped by Pool",
              options: [
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
                  args: { name: "filter" },
                },
              ],
            },
          ],
        },
        {
          name: "supported-images",
          description:
            "Query information on VM images supported by Azure Batch service",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all Virtual Machine Images supported by the Azure Batch service",
              options: [
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
                  args: { name: "filter" },
                },
              ],
            },
          ],
        },
        {
          name: "usage-metrics",
          description: "View usage metrics of Batch pools",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the usage metrics, aggregated by Pool across individual time intervals, for the specified Account",
              options: [
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--end-time",
                  description:
                    "The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available",
                  args: { name: "end-time" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
                  args: { name: "filter" },
                },
                {
                  name: "--start-time",
                  description:
                    "The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available",
                  args: { name: "start-time" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage Batch account private endpoint connections",
      subcommands: [
        {
          name: "list",
          description:
            "List all of the private endpoint connections in the specified account",
          options: [
            {
              name: "--account-name",
              description: "The name of the Batch account. Required",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--maxresults",
              description:
                "The maximum number of items to return in the response. Default value is None",
              args: { name: "maxresults" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get information about the specified private endpoint connection",
          options: [
            {
              name: "--account-name",
              description: "The name of the Batch account. Required",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The private endpoint connection name. This must be unique within the account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage Batch account private Link Resources",
      subcommands: [
        {
          name: "list",
          description:
            "List all of the private link resources in the specified account",
          options: [
            {
              name: "--account-name",
              description: "The name of the Batch account. Required",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--maxresults",
              description:
                "The maximum number of items to return in the response. Default value is None",
              args: { name: "maxresults" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get information about the specified private link resource",
          options: [
            {
              name: "--account-name",
              description: "The name of the Batch account. Required",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The private link resource name. This must be unique within the account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "task",
      description: "Manage Batch tasks",
      subcommands: [
        {
          name: "create",
          description: "Create Batch tasks",
          options: [
            {
              name: "--job-id",
              description: "The ID of the job containing the task",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "The Batch account name. Only needed Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            {
              name: "--affinity-id",
              description:
                "Required. You can pass the affinityId of a Node to indicate that this Task needs to run on that Compute Node. Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere",
              args: { name: "affinity-id" },
            },
            {
              name: "--application-package-references",
              description:
                "The space-separated list of IDs specifying the application packages to be installed. Space-separated application IDs with optional version in 'id[#version]' format",
              args: {
                name: "application-package-references",
                isVariadic: true,
              },
            },
            changeReference,
            {
              name: "--command-line",
              description:
                'The command line of the task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux',
              args: { name: "command-line" },
            },
            {
              name: "--environment-settings",
              description:
                "A list of environment variable settings for the task. Space-separated values in 'key=value' format",
              args: { name: "environment-settings", isVariadic: true },
            },
            {
              name: "--json-file",
              description:
                "The file containing the task(s) to create in JSON(formatted to match REST API request body). When submitting multiple tasks, accepts either an array of tasks or a TaskAddCollectionParamater. If this parameter is specified, all other parameters are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-task-retry-count",
              description:
                "The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit, however this is not recommended for a start task or any task. The default value is 0 (no retries)",
              args: { name: "max-task-retry-count" },
            },
            {
              name: "--max-wall-clock-time",
              description:
                "If this is not specified, there is no time limit on how long the Task may run",
              args: { name: "max-wall-clock-time" },
            },
            {
              name: "--resource-files",
              description:
                "A list of files that the Batch service will download to the compute node before running the command line. Space-separated resource references in filename=httpurl format, with httpurl being any HTTP url with public access or a SAS url with read access",
              args: { name: "resource-files", isVariadic: true },
            },
            {
              name: "--retention-time",
              description:
                "The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted",
              args: { name: "retention-time" },
            },
            {
              name: "--task-id",
              description: "The ID of the task",
              args: { name: "task-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Task from the specified Job",
          options: [
            {
              name: "--job-id",
              description:
                "The ID of the Job from which to delete the Task. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--task-id",
              description: "The ID of the Task to delete. Required",
              args: { name: "task-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
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
            "Lists all of the Tasks that are associated with the specified Job",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--filter",
              description:
                "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
              args: { name: "filter" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "reactivate",
          description:
            "Reactivates a Task, allowing it to run again even if its retry count has been exhausted",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job containing the Task. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--task-id",
              description: "The ID of the Task to reactivate. Required",
              args: { name: "task-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
          ],
        },
        {
          name: "reset",
          description: "Reset the properties of a Batch task",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job containing the Task",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--task-id",
              description: "The ID of the Task to update",
              args: { name: "task-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "The Batch account name. Only needed Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "The operation will be performed only if the resource's current ETag exactly matches the specified value",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "The operation will be performed only if the resource has been modified since the specified timestamp",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "The operation will not be performed only if the resource's current ETag exactly matches the specified value",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "The operation will not be performed only if the resource has been modified since the specified timestamp",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--json-file",
              description:
                "The file containing pool update properties parameter specification in JSON(formatted to match REST API request body). If this parameter is specified, all 'Pool Update Properties Parameter Arguments' are ignored",
              args: { name: "json-file" },
            },
            {
              name: "--max-task-retry-count",
              description:
                "The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit, however this is not recommended for a start task or any task. The default value is 0 (no retries)",
              args: { name: "max-task-retry-count" },
            },
            {
              name: "--max-wall-clock-time",
              description:
                "If this is not specified, there is no time limit on how long the Task may run. Expected format is an ISO-8601 duration",
              args: { name: "max-wall-clock-time" },
            },
            {
              name: "--retention-time",
              description:
                "The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. Expected format is an ISO-8601 duration",
              args: { name: "retention-time" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about the specified Task",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job that contains the Task. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--task-id",
              description:
                "The ID of the Task to get information about. Required",
              args: { name: "task-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            {
              name: "--expand",
              description: "An OData $expand clause",
              args: { name: "expand", isVariadic: true },
            },
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
            {
              name: "--select",
              description: "An OData $select clause",
              args: { name: "select", isVariadic: true },
            },
          ],
        },
        {
          name: "stop",
          description: "Terminates the specified Task",
          options: [
            {
              name: "--job-id",
              description: "The ID of the Job containing the Task. Required",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: "--task-id",
              description: "The ID of the Task to terminate. Required",
              args: { name: "task-id" },
              isRequired: true,
            },
            {
              name: "--account-endpoint",
              description:
                "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
              args: { name: "account-endpoint" },
            },
            {
              name: "--account-key",
              description:
                "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
              args: { name: "account-key" },
            },
            {
              name: "--account-name",
              description:
                "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
              args: { name: "account-name" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--if-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client",
              args: { name: "if-match" },
            },
            {
              name: "--if-modified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-modified-since" },
            },
            {
              name: "--if-none-match",
              description:
                "An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client",
              args: { name: "if-none-match" },
            },
            {
              name: "--if-unmodified-since",
              description:
                "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
              args: { name: "if-unmodified-since" },
            },
          ],
        },
        {
          name: "file",
          description: "Manage Batch task files",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes the specified Task file from the Compute Node where the Task ran",
              options: [
                {
                  name: "--file-path",
                  description:
                    "The path to the Task file that you want to get the content of. Required",
                  args: { name: "file-path" },
                  isRequired: true,
                },
                {
                  name: "--job-id",
                  description:
                    "The ID of the Job that contains the Task. Required",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--task-id",
                  description:
                    "The ID of the Task whose file you want to retrieve. Required",
                  args: { name: "task-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--recursive",
                  description:
                    "Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. Default value is None",
                  args: {
                    name: "recursive",
                    suggestions: ["false", "true"],
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
              name: "download",
              description: "Download the content of a Batch task file",
              options: [
                {
                  name: "--destination",
                  description: "The path to the destination file or directory",
                  args: { name: "destination" },
                  isRequired: true,
                },
                {
                  name: "--file-path",
                  description:
                    "The path to the Task file that you want to get the content of. Required",
                  args: { name: "file-path" },
                  isRequired: true,
                },
                {
                  name: "--job-id",
                  description:
                    "The ID of the Job that contains the Task. Required",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--task-id",
                  description:
                    "The ID of the Task whose file you want to retrieve. Required",
                  args: { name: "task-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--end-range",
                  description:
                    "The byte range to be retrieved. If not set the file will be retrieved to the end",
                  args: { name: "end-range" },
                },
                {
                  name: "--if-modified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-modified-since" },
                },
                {
                  name: "--if-unmodified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-unmodified-since" },
                },
                {
                  name: "--start-range",
                  description:
                    "The byte range to be retrieved. If not set the file will be retrieved from the beginning",
                  args: { name: "start-range" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists the files in a Task's directory on its Compute Node",
              options: [
                {
                  name: "--job-id",
                  description:
                    "The ID of the Job that contains the Task. Required",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--task-id",
                  description:
                    "The ID of the Task whose files you want to list. Required",
                  args: { name: "task-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData $filter clause. For more information on constructing this filter,see https://learn.microsoft.com/rest/api/batchservice/odata-filters-in-batch",
                  args: { name: "filter" },
                },
                {
                  name: "--recursive",
                  description:
                    "Whether to list children of the Task directory. This parameter can be used in combination with the filter parameter to list specific type of files",
                  args: {
                    name: "recursive",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Gets the properties of the specified Task file",
              options: [
                {
                  name: "--file-path",
                  description:
                    "The path to the Task file that you want to get the content of. Required",
                  args: { name: "file-path" },
                  isRequired: true,
                },
                {
                  name: "--job-id",
                  description:
                    "The ID of the Job that contains the Task. Required",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--task-id",
                  description:
                    "The ID of the Task whose file you want to retrieve. Required",
                  args: { name: "task-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--if-modified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-modified-since" },
                },
                {
                  name: "--if-unmodified-since",
                  description:
                    "A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time",
                  args: { name: "if-unmodified-since" },
                },
              ],
            },
          ],
        },
        {
          name: "subtask",
          description: "Manage subtask information of a Batch task",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the subtasks that are associated with the specified multi-instance Task",
              options: [
                {
                  name: "--job-id",
                  description: "The ID of the Job. Required",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--task-id",
                  description: "The ID of the Task. Required",
                  args: { name: "task-id" },
                  isRequired: true,
                },
                {
                  name: "--account-endpoint",
                  description:
                    "Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT",
                  args: { name: "account-endpoint" },
                },
                {
                  name: "--account-key",
                  description:
                    "Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY",
                  args: { name: "account-key" },
                },
                {
                  name: "--account-name",
                  description:
                    "Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT",
                  args: { name: "account-name" },
                },
                {
                  name: "--select",
                  description: "An OData $select clause",
                  args: { name: "select", isVariadic: true },
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
