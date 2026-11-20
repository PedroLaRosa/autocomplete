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
  name: "appconfig",
  description: "Manage App Configurations",
  subcommands: [
    {
      name: "create",
      description: "Create an App Configuration",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
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
        {
          name: "--appinsights-resource",
          description:
            "Resource ID of the Application Insights resource to link with this App Configuration store",
          args: { name: "appinsights-resource" },
        },
        {
          name: "--arm-auth-mode",
          description:
            "The authentication mode for accessing the App Configuration Store via ARM. 'pass-through' (Recommended) uses Microsoft Entra ID to access the store via ARM with proper authorization.'local' uses access keys for authentication. This requires access keys to be enabled",
          args: {
            name: "arm-auth-mode",
            suggestions: ["local", "pass-through"],
          },
        },
        {
          name: "--assign-identity",
          description:
            'Space-separated list of managed identities to be assigned. Use "[system]" to refer to system-assigned managed identity or a resource ID to refer to user-assigned managed identity. If this argument is provided without any value, system-assigned managed identity will be assigned by default. If this argument is not provided, no managed identities will be assigned to this App Configuration store',
          args: { name: "assign-identity", isOptional: true, isVariadic: true },
        },
        {
          name: "--azure-front-door-profile",
          description:
            "Resource ID of an Azure Front Door profile to link to this App Configuration store",
          args: { name: "azure-front-door-profile" },
        },
        changeReference,
        {
          name: "--disable-local-auth",
          description:
            "Disable all authentication methods other than AAD authentication",
          args: {
            name: "disable-local-auth",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-arm-private-network-access",
          description:
            "Enable access to the App Configuration store via ARM Private Link if resource is restricted to private network access. Requires Pass-through ARM authentication mode",
          args: {
            name: "enable-arm-private-network-access",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-public-network", "-e"],
          description:
            "Argument 'enable_public_network' has been deprecated and will be removed in a future release. Use '--public-network-access' instead. When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store",
          args: {
            name: "enable-public-network",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-purge-protection", "-p"],
          description:
            "Property specifying whether protection against purge is enabled for this App Configuration store. Setting this property to true activates protection against purge for this App Configuration store and its contents. Enabling this functionality is irreversible",
          args: {
            name: "enable-purge-protection",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--kv-revision-retention-period",
          description:
            "Duration in seconds to retain key-value revisions in the App Configuration store. For Free and Developer sku stores, revisions can be retained for a maximum of 7 days (604,800s); for Standard and Premium sku stores, up to 30 days (2,592,000s). Only Non-Free tiers can update this value. If specified, retention period must be at least 1 hour (3600s)",
          args: { name: "kv-revision-retention-period" },
        },
        {
          name: "--no-replica",
          description:
            "Proceed without replica creation for premium tier store",
          args: {
            name: "no-replica",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--public-network-access",
          description:
            "Control permission for data plane traffic coming from public networks",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled", "SecuredByPerimeter"],
          },
        },
        {
          name: "--replica-location",
          description:
            "The location of the replica of the App Configuration store",
          args: { name: "replica-location" },
        },
        {
          name: "--replica-name",
          description: "Name of the replica of the App Configuration store",
          args: { name: "replica-name" },
        },
        {
          name: "--retention-days",
          description:
            "Number of days to retain the soft delete enabled App Configuration store after deleting. Must be a positive integer between 0 and 7",
          args: { name: "retention-days" },
        },
        {
          name: "--sku",
          description: "The sku of the App Configuration store",
          args: {
            name: "sku",
            suggestions: ["Developer", "Free", "Premium", "Standard"],
          },
        },
        {
          name: "--tags",
          description: "Space-separated tags: key[=value] [key[=value] ...]",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an App Configuration store",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
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
      description:
        "Lists all App Configuration stores under the current subscription",
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
      name: "list-deleted",
      description:
        "List all deleted, but not yet purged App Configuration stores",
      options: [acquirePolicyToken, changeReference],
    },
    {
      name: "purge",
      description:
        "Permanently delete an App Configuration store. Aka 'purge' the deleted App Configuration store",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: ["--location", "-l"],
          description:
            "Location of the deleted App Configuration store. Can be viewed using command az appconfig show-deleted",
          args: { name: "location" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "recover",
      description:
        "Recover a previously deleted, but not yet purged App Configuration store",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: ["--location", "-l"],
          description:
            "Location of the deleted App Configuration store. Can be viewed using command az appconfig show-deleted",
          args: { name: "location" },
        },
        {
          name: ["--resource-group", "-g"],
          description: "Resource group of the deleted App Configuration store",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "show",
      description: "Show properties of an App Configuration store",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
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
      name: "show-deleted",
      description:
        "Show properties of a deleted, but not yet purged App Configuration store",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: ["--location", "-l"],
          description: "Location of the deleted App Configuration store",
          args: { name: "location" },
        },
      ],
    },
    {
      name: "update",
      description: "Update an App Configuration store",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--appinsights-resource",
          description:
            "Resource ID of the Application Insights resource to link with this App Configuration store",
          args: { name: "appinsights-resource" },
        },
        {
          name: "--arm-auth-mode",
          description:
            "The authentication mode for accessing the App Configuration Store via ARM. 'pass-through' (Recommended) uses Microsoft Entra ID to access the store via ARM with proper authorization.'local' uses access keys for authentication. This requires access keys to be enabled",
          args: {
            name: "arm-auth-mode",
            suggestions: ["local", "pass-through"],
          },
        },
        {
          name: "--azure-front-door-profile",
          description:
            'Resource ID of an Azure Front Door profile to link to this App Configuration store. Pass "" to unlink a Front Door profile',
          args: { name: "azure-front-door-profile" },
        },
        changeReference,
        {
          name: "--disable-local-auth",
          description:
            "Disable all authentication methods other than AAD authentication",
          args: {
            name: "disable-local-auth",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-arm-private-network-access",
          description:
            "Enable access to the App Configuration store via ARM Private Link if resource is restricted to private network access. Requires Pass-through ARM authentication mode",
          args: {
            name: "enable-arm-private-network-access",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-public-network", "-e"],
          description:
            "Argument 'enable_public_network' has been deprecated and will be removed in a future release. Use '--public-network-access' instead. When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store",
          args: {
            name: "enable-public-network",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-purge-protection", "-p"],
          description:
            "Property specifying whether protection against purge is enabled for this App Configuration store. Setting this property to true activates protection against purge for this App Configuration store and its contents. Enabling this functionality is irreversible",
          args: {
            name: "enable-purge-protection",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--encryption-key-name",
          description: "The name of the KeyVault key",
          args: { name: "encryption-key-name" },
        },
        {
          name: "--encryption-key-vault",
          description: "The URI of the KeyVault",
          args: { name: "encryption-key-vault" },
        },
        {
          name: "--encryption-key-version",
          description:
            "The version of the KeyVault key. Use the latest version by default",
          args: { name: "encryption-key-version" },
        },
        {
          name: "--identity-client-id",
          description:
            "Client ID of the managed identity with wrap and unwrap access to encryption key. Use system-assigned managed identity by default",
          args: { name: "identity-client-id" },
        },
        {
          name: "--kv-revision-retention-period",
          description:
            "Duration in seconds to retain key-value revisions in the App Configuration store. For Free and Developer sku stores, revisions can be retained for a maximum of 7 days (604,800s); for Standard and Premium sku stores, up to 30 days (2,592,000s). Only Non-Free tiers can update this value. If specified, retention period must be at least 1 hour (3600s)",
          args: { name: "kv-revision-retention-period" },
        },
        {
          name: "--public-network-access",
          description:
            "Control permission for data plane traffic coming from public networks",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled", "SecuredByPerimeter"],
          },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--sku",
          description: "The sku of the App Configuration store",
          args: {
            name: "sku",
            suggestions: ["Developer", "Free", "Premium", "Standard"],
          },
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
      name: "credential",
      description: "Manage credentials for App Configuration stores",
      subcommands: [
        {
          name: "list",
          description: "List access keys of an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
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
          name: "regenerate",
          description:
            "Regenerate an access key for an App Configuration store",
          options: [
            {
              name: "--id",
              description:
                "Id of the key to be regenerated. Can be found using az appconfig credential list command",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
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
    {
      name: "enhanced-feature-flag",
      description:
        "Manage enhanced feature flags stored in an App Configuration store",
      subcommands: [
        {
          name: "delete",
          description: "Delete enhanced feature flags",
          options: [
            {
              name: "--feature-name",
              description:
                "Name of the enhanced feature flag to be deleted. Support star sign as filters, for instance * means all enhanced feature flags and abc* means enhanced feature flags with abc as prefix",
              args: { name: "feature-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, delete the enhanced feature flag with null label. Support star sign as filters, for instance * means all labels and abc* means labels with abc as prefix",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, delete all enhanced feature flags with any tags that match the specified feature and label. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable",
          description:
            "Disable an enhanced feature flag to turn it OFF for use",
          options: [
            {
              name: "--feature-name",
              description:
                "Name of the enhanced feature flag. Enhanced feature flag name cannot contain the '%' or ':' characters",
              args: { name: "feature-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description: "If no label specified, uses the null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable an enhanced feature flag to turn it ON for use",
          options: [
            {
              name: "--feature-name",
              description:
                "Name of the enhanced feature flag. Enhanced feature flag name cannot contain the '%' or ':' characters",
              args: { name: "feature-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description: "If no label specified, uses the null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List enhanced feature flags",
          options: [
            { name: "--all", description: "List all enhanced feature flags" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature-name",
              description:
                "Name of the enhanced feature flag to be listed. Support star sign as filters, for instance * means all enhanced feature flags and abc* means enhanced feature flags with abc as prefix",
              args: { name: "feature-name" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Enhanced Feature Flags",
              args: {
                name: "fields",
                suggestions: [
                  "allocation",
                  "conditions",
                  "description",
                  "enabled",
                  "label",
                  "last_modified",
                  "name",
                  "tags",
                  "telemetry",
                  "variants",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--label",
              description:
                "If no label specified, list all labels. Support star sign as filters, for instance * means all labels and abc* means labels with abc as prefix",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, list all enhanced feature flags with any tags. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "set",
          description: "Set an enhanced feature flag",
          options: [
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--description",
              description: "Description of the enhanced feature flag to be set",
              args: { name: "description" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature-name",
              description:
                "Name of the enhanced feature flag. Enhanced feature flag name cannot contain the '%' or ':' characters",
              args: { name: "feature-name" },
            },
            {
              name: "--flag",
              description:
                "The entire enhanced feature flag, using the same property names, casing and types as the data-plane API and 'az appconfig enhanced-feature-flag show' (name, enabled, description, conditions, allocation, variants, telemetry, tags). Accepts a JSON object, a shorthand-syntax object, a file path with @ prefix (e.g. @flag.json), or @- to read from stdin. Providing --flag replaces the entire feature flag and cannot be combined with --description, --requirement-type or --telemetry-enabled. A string feature flag name is required, either inside --flag or via --feature-name",
              args: { name: "flag" },
            },
            {
              name: "--label",
              description: "If no label specified, uses the null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--requirement-type",
              description:
                'Requirement type determines if filters should use "Any" or "All" logic when evaluating the state of an enhanced feature flag',
              args: { name: "requirement-type", suggestions: ["All", "Any"] },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--telemetry-enabled",
              description:
                "Enable or disable telemetry for the enhanced feature flag",
              args: {
                name: "telemetry-enabled",
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
          name: "show",
          description: "Show all attributes of an enhanced feature flag",
          options: [
            {
              name: "--feature-name",
              description:
                "Name of the enhanced feature flag. Enhanced feature flag name cannot contain the '%' or ':' characters",
              args: { name: "feature-name" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Enhanced Feature Flags",
              args: {
                name: "fields",
                suggestions: [
                  "allocation",
                  "conditions",
                  "description",
                  "enabled",
                  "label",
                  "last_modified",
                  "name",
                  "tags",
                  "telemetry",
                  "variants",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--label",
              description: "If no label specified, uses the null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "feature",
      description: "Manage feature flags stored in an App Configuration store",
      subcommands: [
        {
          name: "delete",
          description: "Delete feature flag",
          options: [
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be deleted. If the feature flag key is different from the default key, provide the --key argument instead. Support star sign as filters, for instance * means all features and abc* means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Support star sign as filters, for instance ".appconfig.featureflag/*" means all features and ".appconfig.featureflag/abc*" means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, delete the feature flag with null label by default. Support star sign as filters, for instance * means all labels and abc* means labels with abc as prefix",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, delete all feature flags with any tags. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable a feature flag to turn it OFF for use",
          options: [
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be disabled. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, disable the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a feature flag to turn it ON for use",
          options: [
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be enabled. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, enable the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List feature flags",
          options: [
            { name: "--all", description: "List all feature flags" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be listed. If the feature flag key is different from the default key, provide the --key argument instead. Support star sign as filters, for instance * means all features and abc* means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma",
              args: { name: "feature" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Feature Flags",
              args: {
                name: "fields",
                suggestions: [
                  "conditions",
                  "description",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "name",
                  "state",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Support star sign as filters, for instance ".appconfig.featureflag/*" means all features and ".appconfig.featureflag/abc*" means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, list all labels. Support star sign as filters, for instance * means all labels and abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, list all feature flags with any tags. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "lock",
          description: "Lock a feature flag to prohibit write operations",
          options: [
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be locked. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, lock the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "set",
          description: "Set a feature flag",
          options: [
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--description",
              description: "Description of the feature flag to be set",
              args: { name: "description" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature flag to be set. Feature name cannot contain the '%' or ':' characters",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, set the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--requirement-type",
              description:
                'Requirement type determines if filters should use "Any" or "All" logic when evaluating the state of a feature',
              args: { name: "requirement-type", suggestions: ["All", "Any"] },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--telemetry-enabled",
              description: "Enable or disable telemetry for the feature flag",
              args: {
                name: "telemetry-enabled",
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
          name: "show",
          description: "Show all attributes of a feature flag",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature flag to be retrieved. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Feature Flags",
              args: {
                name: "fields",
                suggestions: [
                  "conditions",
                  "description",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "name",
                  "state",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, show entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock a feature to gain write operations",
          options: [
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be unlocked. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, unlock the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "filter",
          description:
            "Manage filters associated with feature flags stored in an App Configuration store",
          subcommands: [
            {
              name: "add",
              description: "Add a filter to a feature flag",
              options: [
                {
                  name: "--filter-name",
                  description: "Name of the filter to be added",
                  args: { name: "filter-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: {
                    name: "auth-mode",
                    suggestions: ["anonymous", "key", "login"],
                  },
                },
                changeReference,
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature to which you want to add the filter. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--filter-parameters",
                  description:
                    "Space-separated filter parameters in 'name[=value]' format. The value must be an escaped JSON string",
                  args: {
                    name: "filter-parameters",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index in the list of filters where you want to insert the new filter. If no index is specified or index is invalid, filter will be added to the end of the list",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, add to the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a filter from a feature flag",
              options: [
                acquirePolicyToken,
                {
                  name: "--all",
                  description:
                    "Delete all filters associated with a feature flag",
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: {
                    name: "auth-mode",
                    suggestions: ["anonymous", "key", "login"],
                  },
                },
                changeReference,
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature from which you want to delete the filter. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--filter-name",
                  description: "Name of the filter to be deleted",
                  args: { name: "filter-name" },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index of the filter to be deleted in case there are multiple instances with same filter name",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, delete from the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all filters for a feature flag",
              options: [
                {
                  name: "--all",
                  description:
                    "List all filters associated with a feature flag",
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: {
                    name: "auth-mode",
                    suggestions: ["anonymous", "key", "login"],
                  },
                },
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature whose filters you want to be displayed. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, display filters from the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--top", "-t"],
                  description:
                    "Maximum number of items to return. Must be a positive integer. Default to 100",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Show filters of a feature flag",
              options: [
                {
                  name: "--filter-name",
                  description: "Name of the filter to be displayed",
                  args: { name: "filter-name" },
                  isRequired: true,
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: {
                    name: "auth-mode",
                    suggestions: ["anonymous", "key", "login"],
                  },
                },
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature which contains the filter. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index of the filter to be displayed in case there are multiple instances with same filter name",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, show the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a filter in a feature flag",
              options: [
                {
                  name: "--filter-name",
                  description: "Name of the filter to be updated",
                  args: { name: "filter-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: {
                    name: "auth-mode",
                    suggestions: ["anonymous", "key", "login"],
                  },
                },
                changeReference,
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature whose filter you want to update. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--filter-parameters",
                  description:
                    "Space-separated filter parameters in 'name[=value]' format. The value must be an escaped JSON string",
                  args: {
                    name: "filter-parameters",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index of the filter to be updated in case there are multiple instances with same filter name",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, update the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Managed identities for App Configuration stores",
      subcommands: [
        {
          name: "assign",
          description:
            "Update managed identities for an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--identities",
              description:
                "Accept system-assigned or user-assigned managed identities separated by spaces. Use '[system]' to refer to system-assigned managed identity or a resource ID to refer to user-assigned managed identity. If this argument is not provided or this argument is provided without any value, system-assigned managed identity will be used by default",
              args: { name: "identities", isOptional: true, isVariadic: true },
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
          name: "remove",
          description:
            "Remove managed identities for an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--identities",
              description:
                "Accept system-assigned or user-assigned managed identities separated by spaces. Use '[system]' to refer to system-assigned managed identity, '[all]' for all managed identities or a resource ID to refer user-assigned managed identity. If this argument is not provided or this argument is provided without any value, system-assigned managed identity will be removed by default",
              args: { name: "identities", isOptional: true, isVariadic: true },
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
          description:
            "Display managed identities for an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
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
    {
      name: "kv",
      description: "Manage key-values stored in an App Configuration store",
      subcommands: [
        {
          name: "delete",
          description: "Delete key-values",
          options: [
            {
              name: "--key",
              description:
                "Support star sign as filters, for instance * means all key and abc* means keys with abc as prefix",
              args: { name: "key" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, delete entry with null label. Support star sign as filters, for instance * means all label and abc* means labels with abc as prefix",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, delete all key-values with any tags. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "export",
          description:
            "Export configurations to another place from your App Configuration store",
          options: [
            {
              name: ["--destination", "-d"],
              description:
                "The destination of exporting. Note that exporting feature flags to appservice is not supported",
              args: {
                name: "destination",
                suggestions: ["appconfig", "appservice", "file"],
              },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--appservice-account",
              description:
                "ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration store. Required for AppService arguments",
              args: { name: "appservice-account" },
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--dest-auth-mode",
              description:
                'Auth mode for connecting to the destination App Configuration store. For details, refer to "--auth-mode" argument',
              args: {
                name: "dest-auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--dest-connection-string",
              description:
                "Combination of access key and endpoint of the destination store",
              args: { name: "dest-connection-string" },
            },
            {
              name: "--dest-endpoint",
              description:
                'If --dest-auth-mode is "login", provide endpoint URL of the destination App Configuration store',
              args: { name: "dest-endpoint" },
            },
            {
              name: "--dest-label",
              description:
                "Exported KVs will be labeled with this destination label. If neither --dest-label nor --preserve-labels is specified, will assign null label",
              args: { name: "dest-label" },
            },
            {
              name: "--dest-name",
              description:
                "The name of the destination App Configuration store",
              args: { name: "dest-name" },
            },
            {
              name: "--dest-tags",
              description:
                "Exported KVs and feature flags will be assigned with these tags. If no tags are specified, exported KVs and features will retain existing tags. Support space-separated tags: key[=value] [key[=value] ...]. Use to clear existing tags",
              args: { name: "dest-tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--dry-run",
              description:
                "Preview the result of export operation without making any changes to the App Configuration store",
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--export-as-reference", "-r"],
              description:
                "Export key-values as App Configuration references. For more information, see https://learn.microsoft.com/en-us/azure/app-service/app-service-configuration-references",
              args: {
                name: "export-as-reference",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--format",
              description:
                "File format exporting to. Required for file arguments. Currently, feature flags are not supported in properties format",
              args: {
                name: "format",
                suggestions: ["json", "properties", "yaml"],
              },
            },
            {
              name: "--key",
              description:
                "If no key specified, return all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be exported",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "Only keys and feature flags with this label will be exported. If no label specified, export keys and feature flags with null label by default. When export destination is appconfig, or when export destination is file with appconfig/kvset profile, this argument supports asterisk and comma signs for label filtering, for instance, * means all labels, abc* means labels with abc as prefix, and abc,xyz means labels with abc or xyz",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--naming-convention",
              description:
                'Naming convention to be used for "Feature Management" section of file. Example: pascal = FeatureManagement, camel = featureManagement, underscore = feature_management, hyphen = feature-management',
              args: {
                name: "naming-convention",
                suggestions: ["camel", "hyphen", "pascal", "underscore"],
              },
            },
            {
              name: "--path",
              description:
                "Local configuration file path. Required for file arguments",
              args: { name: "path" },
            },
            {
              name: "--prefix",
              description:
                "Prefix to be trimmed from keys. Prefix will be ignored for feature flags",
              args: { name: "prefix" },
            },
            {
              name: "--preserve-labels",
              description:
                "Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --dest-label",
              args: {
                name: "preserve-labels",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--profile",
              description:
                "Export profile to be used for exporting the key-values. Options 'depth', 'separator', 'naming-convention', 'prefix', 'dest-label' , 'dest-tags' and, 'resolve-keyvault' are not supported when using 'appconfig/kvset' profile",
              args: {
                name: "profile",
                suggestions: ["appconfig/default", "appconfig/kvset"],
              },
            },
            {
              name: "--resolve-keyvault",
              description: "Resolve the content of key vault reference",
              args: {
                name: "resolve-keyvault",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--separator",
              description:
                "Delimiter for flattening the key-value pairs to json or yaml file. Required for exporting hierarchical structure. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'",
              args: { name: "separator" },
            },
            {
              name: "--skip-features",
              description:
                "Export items excluding all feature flags. By default, all features with the specified label will be exported to file or appconfig. Not applicable for appservice",
              args: {
                name: "skip-features",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--skip-keyvault",
              description:
                "Export items excluding all key vault references. By default, all key vault references with the specified label will be exported",
              args: {
                name: "skip-keyvault",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--snapshot",
              description:
                "Export all keys in a given snapshot of the App Configuration store. If no snapshot is specified, the keys currently in the store are exported based on the specified key and label filters",
              args: { name: "snapshot" },
            },
            {
              name: "--tags",
              description:
                "Key-values which contain the specified tags in source AppConfig will be exported. If no tags are specified, all key-values with any tags can be exported. Support space-separated tag filters: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            { name: ["--yes", "-y"], description: "Do not prompt for preview" },
          ],
        },
        {
          name: "import",
          description:
            "Import configurations into your App Configuration store from another place",
          options: [
            {
              name: ["--source", "-s"],
              description:
                "The source of importing. Note that importing feature flags from appservice is not supported",
              args: {
                name: "source",
                suggestions: ["aks", "appconfig", "appservice", "file"],
              },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--aks-cluster",
              description:
                "ARM ID for AKS OR the name of the AKS, assuming it is in the same subscription and resource group as the App Configuration store. Required for AKS arguments",
              args: { name: "aks-cluster" },
            },
            {
              name: "--appservice-account",
              description:
                "ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration store. Required for AppService arguments",
              args: { name: "appservice-account" },
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--configmap-name",
              description: "Name of the ConfigMap. Required for AKS arguments",
              args: { name: "configmap-name" },
            },
            {
              name: "--configmap-namespace",
              description:
                'Namespace of the ConfigMap. default to "default" namespace if not specified',
              args: { name: "configmap-namespace" },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--content-type",
              description: "Content type of all imported items",
              args: { name: "content-type" },
            },
            {
              name: "--depth",
              description:
                "Depth for flattening the json or yaml file to key-value pairs. Flatten to the deepest level by default if --separator is provided. Not applicable for property files or feature flags",
              args: { name: "depth" },
            },
            {
              name: "--dry-run",
              description:
                "Preview the result of import operation without making any changes to the App Configuration store",
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--format",
              description:
                "Imported file format. Required for file arguments. Currently, feature flags are not supported in properties format",
              args: {
                name: "format",
                suggestions: ["json", "properties", "yaml"],
              },
            },
            {
              name: "--import-mode",
              description:
                'If import mode is "ignore-match", only source key-values that do not already exist or whose value, content-type or tags are different from that of an existing key-value with the same key and label, will be written. Import mode "all" writes all key-values to the destination regardless of whether they exist or not',
              args: {
                name: "import-mode",
                suggestions: ["all", "ignore-match"],
              },
            },
            {
              name: "--label",
              description:
                "Imported KVs and feature flags will be assigned with this label. If no label specified, will assign null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--path",
              description:
                "Local configuration file path. Required for file arguments",
              args: { name: "path" },
            },
            {
              name: "--prefix",
              description:
                "This prefix will be appended to the front of imported keys. Prefix will be ignored for feature flags",
              args: { name: "prefix" },
            },
            {
              name: "--preserve-labels",
              description:
                "Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --label",
              args: {
                name: "preserve-labels",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--profile",
              description:
                "Import profile to be used for importing the key-values. Options 'depth', 'separator', 'content-type', 'label', 'skip-features', 'tags' and, 'prefix' are not supported when using 'appconfig/kvset' profile",
              args: {
                name: "profile",
                suggestions: ["appconfig/default", "appconfig/kvset"],
              },
            },
            {
              name: "--separator",
              description:
                "Delimiter for flattening the json or yaml file to key-value pairs. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'",
              args: { name: "separator" },
            },
            {
              name: "--skip-features",
              description:
                "Import only key values and exclude all feature flags. By default, all feature flags will be imported from file or appconfig. Not applicable for appservice",
              args: {
                name: "skip-features",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--src-auth-mode",
              description:
                'Auth mode for connecting to source App Configuration store. For details, refer to "--auth-mode" argument',
              args: {
                name: "src-auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--src-connection-string",
              description:
                "Combination of access key and endpoint of the source store",
              args: { name: "src-connection-string" },
            },
            {
              name: "--src-endpoint",
              description:
                'If --src-auth-mode is "login", provide endpoint URL of the source App Configuration store',
              args: { name: "src-endpoint" },
            },
            {
              name: "--src-key",
              description:
                "If no key specified, import all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be imported",
              args: { name: "src-key" },
            },
            {
              name: "--src-label",
              description:
                "Only keys with this label in source AppConfig will be imported. If no value specified, import keys with null label by default. Support star sign as filters, for instance * means all labels, abc* means labels with abc as prefix",
              args: { name: "src-label" },
            },
            {
              name: "--src-name",
              description: "The name of the source App Configuration store",
              args: { name: "src-name" },
            },
            {
              name: "--src-snapshot",
              description:
                "Import all keys in a given snapshot of the source App Configuration store. If no snapshot is specified, the keys currently in the store are imported based on the specified key and label filters",
              args: { name: "src-snapshot" },
            },
            {
              name: "--src-tags",
              description:
                "Key-values which contain the specified tags in source AppConfig will be imported. If no tags are specified, all key-values with any tags can be imported. Support space-separated tag filters: key[=value] [key[=value] ...]",
              args: { name: "src-tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--strict",
              description:
                "Delete all other key-values in the store with specified prefix and label",
              args: {
                name: "strict",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--tags",
              description:
                "Imported KVs and feature flags will be assigned with these tags. If no tags are specified, imported KVs and feature flags will retain existing tags. Support space-separated tags: key[=value] [key[=value] ...]. Use to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            { name: ["--yes", "-y"], description: "Do not prompt for preview" },
          ],
        },
        {
          name: "list",
          description: "List key-values",
          options: [
            { name: "--all", description: "List all items" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ss["Z"/±hh:mm]. If no time zone or offset specified, use UTC by default',
              args: { name: "datetime" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Space-separated customized output fields",
              args: {
                name: "fields",
                suggestions: [
                  "content_type",
                  "description",
                  "etag",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "tags",
                  "value",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--key",
              description:
                "If no key specified, return all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, list all labels. Support star sign as filters, for instance abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--resolve-keyvault",
              description:
                "Resolve the content of key vault reference. This argument should NOT be specified along with --fields. Instead use --query for customized query",
              args: {
                name: "resolve-keyvault",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--resolve-snapshot-references",
              description:
                "Resolve snapshot references and return the referenced snapshots' key-values",
              args: {
                name: "resolve-snapshot-references",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--snapshot",
              description:
                "List all keys in a given snapshot of the App Configuration store. If no snapshot is specified, the keys currently in the store are listed",
              args: { name: "snapshot" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, return all key-values with any tags. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "lock",
          description: "Lock a key-value to prohibit write operations",
          options: [
            {
              name: "--key",
              description: "Key to be locked",
              args: { name: "key" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, lock entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "restore",
          description: "Restore key-values",
          options: [
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ss["Z"/±hh:mm]. If no time zone or offset specified, use UTC by default',
              args: { name: "datetime" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--dry-run",
              description:
                "Preview the result of restore operation without making any changes to the App Configuration store",
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--key",
              description:
                "If no key specified, restore all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, restore all key-value pairs with all labels. Support star sign as filters, for instance abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, restore all key-values with any tags. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "set",
          description: "Set a key-value",
          options: [
            {
              name: "--key",
              description:
                "Key to be set. Key cannot be a '.' or '..', or contain the '%' character",
              args: { name: "key" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--content-type",
              description: "Content type of the key-value to be set",
              args: { name: "content-type" },
            },
            {
              name: "--description",
              description: "Description of the key-value to be set",
              args: { name: "description" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, set the key with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--value",
              description: "Value of the key-value to be set",
              args: { name: "value" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "set-keyvault",
          description: "Set a keyvault reference",
          options: [
            {
              name: "--key",
              description:
                "Key to be set. Key cannot be a '.' or '..', or contain the '%' character",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--secret-identifier",
              description:
                "ID of the Key Vault object. Can be found using 'az keyvault {collection} show' command, where collection is key, secret or certificate. To set reference to the latest version of your secret, remove version information from secret identifier",
              args: { name: "secret-identifier" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--description",
              description: "Description of the key vault reference to be set",
              args: { name: "description" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, set the key with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "set-snapshot-reference",
          description: "Set a snapshot reference",
          options: [
            {
              name: "--key",
              description:
                "Key to be set. Key cannot be a '.' or '..', or contain the '%' character",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--snapshot-name",
              description:
                "Name of the snapshot to reference. This is required",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--description",
              description: "Description of the snapshot reference to be set",
              args: { name: "description" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, set the key with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Show all attributes of a key-value",
          options: [
            {
              name: "--key",
              description: "Key to be showed",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ss["Z"/±hh:mm]. If no time zone or offset specified, use UTC by default',
              args: { name: "datetime" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, show entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock a key-value to gain write operations",
          options: [
            {
              name: "--key",
              description: "Key to be unlocked",
              args: { name: "key" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, unlock entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
      ],
    },
    {
      name: "network-security-perimeter-configuration",
      description:
        "Manage network security perimeter configurations for an App Configuration store",
      subcommands: [
        {
          name: "list",
          description:
            "List all network security perimeter configurations for an App Configuration store",
          options: [
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
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
          name: "reconcile",
          description:
            "Force a refresh of the specified network security perimeter configuration for an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the network security perimeter configuration to reconcile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
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
          description:
            "Show a specific network security perimeter configuration for an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the network security perimeter configuration to show",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
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
    {
      name: "replica",
      description: "Manage replicas of an App Configuration store",
      subcommands: [
        {
          name: "create",
          description: "Create a new replica of an App Configuration store",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location at which to create the replica",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the replica of the App Configuration store",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
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
          description: "Delete a replica of an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the replica of the App Configuration store",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
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
          description: "List replicas of an App Configuration store",
          options: [
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
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
          description:
            "Show details of a replica of an App Configuration store",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the replica of the App Configuration store",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
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
    {
      name: "revision",
      description:
        "Manage revisions for key-values stored in an App Configuration store",
      subcommands: [
        {
          name: "list",
          description: "Lists revision history of key-values",
          options: [
            { name: "--all", description: "List all items" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ss["Z"/±hh:mm]. If no time zone or offset specified, use UTC by default',
              args: { name: "datetime" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Space-separated customized output fields",
              args: {
                name: "fields",
                suggestions: [
                  "content_type",
                  "description",
                  "etag",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "tags",
                  "value",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--key",
              description:
                "If no key specified, return all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, list all labels. Support star sign as filters, for instance abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                "If no tags are specified, return all key-values with any tags. Support space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "snapshot",
      description:
        "Manage snapshots associated with an app configuration store",
      subcommands: [
        {
          name: "archive",
          description: "Archive a snapshot",
          options: [
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create an app configuration snapshot",
          options: [
            {
              name: "--filters",
              description:
                "Space-separated list of escaped JSON objects that represent the key, label and tag filters used to build an App Configuration snapshot",
              args: { name: "filters", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--composition-type",
              description:
                "Composition type used in building App Configuration snapshots. If not specified, defaults to key",
              args: {
                name: "composition-type",
                suggestions: ["key", "key_label"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--description",
              description: "Description of the App Configuration snapshot",
              args: { name: "description" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--retention-period",
              description:
                "Duration in seconds for which a snapshot can remain archived before expiry. A snapshot can be archived for a maximum of 7 days (604,800s) for free and developer tier stores and 90 days (7,776,000s) for standard and premium tier stores. If specified, retention period must be at least 1 hour (3600s)",
              args: { name: "retention-period" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "list",
          description: "List snapshots",
          options: [
            { name: "--all", description: "List all items" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Snapshots",
              args: {
                name: "fields",
                suggestions: [
                  "composition_type",
                  "created",
                  "description",
                  "etag",
                  "expires",
                  "filters",
                  "items_count",
                  "name",
                  "retention_period",
                  "size",
                  "status",
                  "tags",
                ],
                isVariadic: true,
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--snapshot-name", "-s"],
              description:
                "If no name specified, return all snapshots by default. Support star sign as filters, for instance abc* means snapshots with abc as prefix to the name",
              args: { name: "snapshot-name" },
            },
            {
              name: "--status",
              description:
                "Filter snapshots by their status. If no status specified, return all snapshots by default",
              args: {
                name: "status",
                suggestions: ["archived", "failed", "provisioning", "ready"],
                isVariadic: true,
              },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "recover",
          description: "Recover an archived snapshot",
          options: [
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            changeReference,
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show all attributes of an app configuration snapshot",
          options: [
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the --endpoint or --name and your "az login" credentials will be used for authorization. If the auth mode is "anonymous", provide the --endpoint that will be used for authorization. Anonymous mode is intended for custom endpoints only, such as the App Configuration emulator. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://learn.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: {
                name: "auth-mode",
                suggestions: ["anonymous", "key", "login"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of the App Configuration store. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login" or "anonymous", provide endpoint URL of the App Configuration store. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Snapshots",
              args: {
                name: "fields",
                suggestions: [
                  "composition_type",
                  "created",
                  "description",
                  "etag",
                  "expires",
                  "filters",
                  "items_count",
                  "name",
                  "retention_period",
                  "size",
                  "status",
                  "tags",
                ],
                isVariadic: true,
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration store. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
