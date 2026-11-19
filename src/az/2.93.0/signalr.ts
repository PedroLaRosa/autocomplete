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
  name: "signalr",
  description: "Manage Azure SignalR Service",
  subcommands: [
    {
      name: "create",
      description: "Creates a SignalR Service",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of signalr service",
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
          name: "--sku",
          description:
            "The sku name of the signalr service. Allowed values: Premium_P1, Standard_S1, Free_F1",
          args: { name: "sku" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: ["--allowed-origins", "-a"],
          description:
            'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
          args: { name: "allowed-origins", isOptional: true, isVariadic: true },
        },
        changeReference,
        {
          name: "--default-action",
          description: "Default action to apply when no rule matches",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--enable-message-logs",
          description:
            "The switch for messaging logs which signalr service will generate or not",
          args: {
            name: "enable-message-logs",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--service-mode",
          description:
            "The service mode which signalr service will be working on",
          args: {
            name: "service-mode",
            suggestions: ["Classic", "Default", "Serverless"],
          },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--unit-count",
          description: "The number of signalr service unit count",
          args: { name: "unit-count" },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes a SignalR Service",
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
          description: "Name of signalr service",
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
      description:
        "Lists all the SignalR Service under the current subscription",
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
      name: "restart",
      description: "Restart an existing SignalR Service",
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
          description: "Name of signalr service",
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
      description: "Get the details of a SignalR Service",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description: "Name of signalr service",
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
      name: "start",
      description: "Start an existing SignalR Service",
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
          description: "Name of signalr service",
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
      name: "stop",
      description: "Stop an existing SignalR Service",
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
          description: "Name of signalr service",
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
      description: "Update an existing SignalR Service",
      options: [
        acquirePolicyToken,
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add", isVariadic: true },
        },
        {
          name: ["--allowed-origins", "-a"],
          description:
            'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
          args: { name: "allowed-origins", isOptional: true, isVariadic: true },
        },
        changeReference,
        {
          name: "--client-cert-enabled",
          description:
            "Enable or disable client certificate authentication for a SignalR Service",
          args: {
            name: "client-cert-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--default-action",
          description: "Default action to apply when no rule matches",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--disable-local-auth",
          description: "Enable or disable local auth for a SignalR Service",
          args: {
            name: "disable-local-auth",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-message-logs",
          description:
            "The switch for messaging logs which signalr service will generate or not",
          args: {
            name: "enable-message-logs",
            suggestions: ["false", "true"],
            isOptional: true,
          },
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
          description: "Name of signalr service",
          args: { name: "name" },
        },
        {
          name: "--region-endpoint-enabled",
          description:
            "Enable or disable region endpoint for a SignalR Service",
          args: {
            name: "region-endpoint-enabled",
            suggestions: ["false", "true"],
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
          name: "--service-mode",
          description:
            "The service mode which signalr service will be working on",
          args: {
            name: "service-mode",
            suggestions: ["Classic", "Default", "Serverless"],
          },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
          args: { name: "set", isVariadic: true },
        },
        {
          name: "--sku",
          description: "The sku name of the signalr service. E.g. Standard_S1",
          args: { name: "sku" },
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
          name: "--unit-count",
          description: "The number of signalr service unit count",
          args: { name: "unit-count" },
        },
      ],
    },
    {
      name: "cors",
      description: "Manage CORS for Azure SignalR Service",
      subcommands: [
        {
          name: "add",
          description: "Add allowed origins to a SignalR Service",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
              args: {
                name: "allowed-origins",
                isOptional: true,
                isVariadic: true,
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
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          description: "List allowed origins of a SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          ],
        },
        {
          name: "remove",
          description: "Remove allowed origins from a SignalR Service",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
              args: {
                name: "allowed-origins",
                isOptional: true,
                isVariadic: true,
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
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          description: "Update allowed origins to a SignalR Service",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
              args: {
                name: "allowed-origins",
                isOptional: true,
                isVariadic: true,
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
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
      name: "custom-certificate",
      description: "Manage custom certificate settings",
      subcommands: [
        {
          name: "create",
          description: "Create a custom certificate of SignalR Service",
          options: [
            {
              name: "--keyvault-base-uri",
              description:
                "Key vault base URI. For example, https://contoso.vault.azure.net",
              args: { name: "keyvault-base-uri" },
              isRequired: true,
            },
            {
              name: "--keyvault-secret-name",
              description: "Key vault secret name where certificate is stored",
              args: { name: "keyvault-secret-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--keyvault-secret-version",
              description:
                "Key vault secret version where certificate is stored. If empty, will use latest version",
              args: { name: "keyvault-secret-version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a custom certificate of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description: "List custom certificate of SignalR Service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the detail of a custom certificate of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a custom certificate of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
            },
            {
              name: "--keyvault-base-uri",
              description:
                "Key vault base URI. For example, https://contoso.vault.azure.net",
              args: { name: "keyvault-base-uri" },
            },
            {
              name: "--keyvault-secret-name",
              description: "Key vault secret name where certificate is stored",
              args: { name: "keyvault-secret-name" },
            },
            {
              name: "--keyvault-secret-version",
              description:
                "Key vault secret version where certificate is stored. If empty, will use latest version",
              args: { name: "keyvault-secret-version" },
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
    },
    {
      name: "custom-domain",
      description: "Manage custom domain settings",
      subcommands: [
        {
          name: "create",
          description: "Create a custom domain of SignalR Service",
          options: [
            {
              name: "--certificate-resource-id",
              description:
                "ResourceId of a previously created custom certificate",
              args: { name: "certificate-resource-id" },
              isRequired: true,
            },
            {
              name: "--domain-name",
              description: "Custom domain name. For example, contoso.com",
              args: { name: "domain-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description: "Delete a custom domain of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description: "List custom domains of SignalR Service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the detail of a custom domain of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a custom domain of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
              name: "--certificate-resource-id",
              description:
                "ResourceId of a previously created custom certificate",
              args: { name: "certificate-resource-id" },
            },
            changeReference,
            {
              name: "--domain-name",
              description: "Custom domain name. For example, contoso.com",
              args: { name: "domain-name" },
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
      name: "identity",
      description: "Manage managed identity settings",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity for SignalR Service",
          options: [
            {
              name: "--identity",
              description:
                "Assigns managed identities to the service. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity. You can only assign either on of them",
              args: { name: "identity" },
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
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          description: "Remove managed identity for SignalR Service",
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
              description: "Name of signalr service",
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
          description: "Show managed identity for SignalR Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
      name: "key",
      description: "Manage keys for Azure SignalR Service",
      subcommands: [
        {
          name: "list",
          description: "List the access keys for a SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          ],
        },
        {
          name: "renew",
          description: "Regenerate the access key for a SignalR Service",
          options: [
            {
              name: "--key-type",
              description: "The name of access key to regenerate",
              args: { name: "key-type", suggestions: ["primary", "secondary"] },
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
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
      name: "network-rule",
      description: "Manage network rules",
      subcommands: [
        {
          name: "list",
          description: "Get the Network access control of SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          ],
        },
        {
          name: "update",
          description: "Update the Network access control of SignalR Service",
          options: [
            acquirePolicyToken,
            {
              name: "--allow",
              description:
                "The allowed virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI",
              args: { name: "allow", isOptional: true, isVariadic: true },
            },
            changeReference,
            {
              name: "--connection-name",
              description:
                "Space-separeted list of private endpoint connection name",
              args: {
                name: "connection-name",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--deny",
              description:
                "The denied virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI",
              args: { name: "deny", isOptional: true, isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
              args: { name: "name" },
            },
            {
              name: "--public-network",
              description: "Set rules for public network",
              args: {
                name: "public-network",
                suggestions: ["false", "true"],
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
          name: "ip-rule",
          description: "Manage SignalR Service IP rules",
          subcommands: [
            {
              name: "add",
              description: "Add IP rule to SignalR Service",
              options: [
                {
                  name: "--ip-rule",
                  description: "The IP rule for the hub",
                  args: { name: "ip-rule", isOptional: true, isVariadic: true },
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
                  name: ["--name", "-n"],
                  description: "Name of signalr service",
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
              description: "Remove IP rule from SignalR Service",
              options: [
                {
                  name: "--ip-rule",
                  description: "The IP rule for the hub",
                  args: { name: "ip-rule", isOptional: true, isVariadic: true },
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
                  name: ["--name", "-n"],
                  description: "Name of signalr service",
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
      name: "replica",
      description: "Manage replica settings",
      subcommands: [
        {
          name: "create",
          description: "Create a replica of SignalR Service",
          options: [
            {
              name: "--replica-name",
              description: "Name of the replica",
              args: { name: "replica-name" },
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            {
              name: "--sku",
              description:
                "The sku name of the replica. Currently allowed values: Premium_P1",
              args: { name: "sku" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--unit-count",
              description: "The number of signalr service unit count",
              args: { name: "unit-count" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a replica of SignalR Service",
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
              name: "--replica-name",
              description: "Name of the replica",
              args: { name: "replica-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
          description: "List replicas of SignalR Service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "restart",
          description: "Restart a replica of SignalR Service",
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
              name: "--replica-name",
              description: "Name of the replica",
              args: { name: "replica-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
          description: "Show the details of a replica",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--replica-name",
              description: "Name of the replica",
              args: { name: "replica-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
          name: "start",
          description: "Start a replica of SignalR Service",
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
              name: "--replica-name",
              description: "Name of the replica",
              args: { name: "replica-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
          name: "stop",
          description: "Stop a replica of SignalR Service",
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
              name: "--replica-name",
              description: "Name of the replica",
              args: { name: "replica-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
          description: "Update a replica of SignalR Service",
          options: [
            {
              name: "--replica-name",
              description: "Name of the replica",
              args: { name: "replica-name" },
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
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
            },
            {
              name: "--region-endpoint-enabled",
              description:
                "Enable or disable region endpoint for a SignalR Service",
              args: {
                name: "region-endpoint-enabled",
                suggestions: ["false", "true"],
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
              name: "--unit-count",
              description: "The number of signalr service unit count",
              args: { name: "unit-count" },
            },
          ],
        },
      ],
    },
    {
      name: "upstream",
      description: "Manage upstream settings",
      subcommands: [
        {
          name: "clear",
          description: "Clear upstream settings of an existing SignalR Service",
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
              description: "Name of signalr service",
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
          description: "List upstream settings of an existing SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          ],
        },
        {
          name: "update",
          description:
            "Update order sensitive upstream settings for an existing SignalR Service",
          options: [
            {
              name: "--template",
              description:
                'Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern"',
              args: { name: "template", isVariadic: true },
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
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
};

export default completion;
