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
  name: "appservice",
  description: "Manage Appservice",
  subcommands: [
    {
      name: "list-locations",
      description: "List regions where a plan sku is available",
      options: [
        {
          name: "--sku",
          description:
            "The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P2V2(Premium V2 Medium), P3V2(Premium V2 Large), P0V3(Premium V3 Extra Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), P1MV3(Premium Memory Optimized V3 Small), P2MV3(Premium Memory Optimized V3 Medium), P3MV3(Premium Memory Optimized V3 Large), P4MV3(Premium Memory Optimized V3 Extra Large), P5MV3(Premium Memory Optimized V3 Extra Extra Large), P0V4(Premium V4 Extra Small), P1V4(Premium V4 Small), P2V4(Premium V4 Medium), P3V4(Premium V4 Large), P1MV4(Premium Memory Optimized V4 Small), P2MV4(Premium Memory Optimized V4 Medium), P3MV4(Premium Memory Optimized V4 Large), P4MV4(Premium Memory Optimized V4 Extra Large), P5MV4(Premium Memory Optimized V4 Extra Extra Large), I1V2 (Isolated V2 I1V2), I2V2 (Isolated V2 I2V2), I3V2 (Isolated V2 I3V2), I4V2 (Isolated V2 I4V2), I5V2 (Isolated V2 I5V2), I6V2 (Isolated V2 I6V2), I1MV2 (Isolated Memory Optimized V2 I1MV2), I2MV2 (Isolated Memory Optimized V2 I2MV2), I3MV2 (Isolated Memory Optimized V2 I3MV2), I4MV2 (Isolated Memory Optimized V2 I4MV2), I5MV2 (Isolated Memory Optimized V2 I5MV2), I1V4-I6V4 (Isolated V4), I1MV4-I5MV4 (Isolated Memory Optimized V4), WS1 (Logic Apps Workflow Standard 1), WS2 (Logic Apps Workflow Standard 2), WS3 (Logic Apps Workflow Standard 3)",
          args: {
            name: "sku",
            suggestions: [
              "B1",
              "B2",
              "B3",
              "D1",
              "F1",
              "FREE",
              "I1MV2",
              "I1MV4",
              "I1V2",
              "I1V4",
              "I2MV2",
              "I2MV4",
              "I2V2",
              "I2V4",
              "I3MV2",
              "I3MV4",
              "I3V2",
              "I3V4",
              "I4MV2",
              "I4MV4",
              "I4V2",
              "I4V4",
              "I5MV2",
              "I5MV4",
              "I5V2",
              "I5V4",
              "I6V2",
              "I6V4",
              "P0V3",
              "P0V4",
              "P1MV3",
              "P1MV4",
              "P1V2",
              "P1V3",
              "P1V4",
              "P2MV3",
              "P2MV4",
              "P2V2",
              "P2V3",
              "P2V4",
              "P3MV3",
              "P3MV4",
              "P3V2",
              "P3V3",
              "P3V4",
              "P4MV3",
              "P4MV4",
              "P5MV3",
              "P5MV4",
              "S1",
              "S2",
              "S3",
              "SHARED",
              "WS1",
              "WS2",
              "WS3",
            ],
          },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--hyperv-workers-enabled",
          description:
            "Get regions which support hosting web apps on Windows Container workers",
        },
        {
          name: "--linux-workers-enabled",
          description:
            "Get regions which support hosting web apps on Linux workers",
        },
        {
          name: "--managed-instance-enabled",
          description:
            "Get regions which support hosting web apps on Managed Instance workers",
        },
      ],
    },
    {
      name: "ase",
      description: "Manage App Service Environments",
      subcommands: [
        {
          name: "create",
          description: "Create App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
              name: "--subnet",
              description:
                "Name or ID of existing subnet. To create vnet and/or subnet use az network vnet [subnet] create",
              args: { name: "subnet" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--ignore-subnet-size-validation",
              description:
                "Do not check if subnet is sized according to recommendations",
              args: {
                name: "ignore-subnet-size-validation",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--kind", "-k"],
              description: "Specify App Service Environment version",
              args: { name: "kind", suggestions: ["ASEv3"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--virtual-ip-type",
              description:
                "Specify if app service environment should be accessible from internet",
              args: {
                name: "virtual-ip-type",
                suggestions: ["External", "Internal"],
              },
            },
            {
              name: "--vnet-name",
              description:
                "Name of the vNet. Mandatory if only subnet name is specified",
              args: { name: "vnet-name" },
            },
            {
              name: "--zone-redundant",
              description:
                "Configure App Service Environment as Zone Redundant",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "create-inbound-services",
          description:
            "Private DNS Zone for Internal (ILB) App Service Environments",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
              name: "--subnet",
              description:
                "Name or ID of existing subnet for DNS Zone link. To create vnet and/or subnet use az network vnet [subnet] create",
              args: { name: "subnet" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--skip-dns",
              description:
                "Argument 'skip_dns' has been deprecated and will be removed in version '3.0.0'. Do not create Private DNS Zone and DNS records",
              args: {
                name: "skip-dns",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--vnet-name",
              description:
                "Name of the vNet. Mandatory if only subnet name is specified",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
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
          description: "List App Service Environments",
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
          name: "list-addresses",
          description:
            "List IP addresses associated with an App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
        {
          name: "list-plans",
          description:
            "List app service plans associated with an App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
        {
          name: "send-test-notification",
          description:
            "Send a test upgrade notification in App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
        {
          name: "show",
          description: "Show details of an App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
          name: "update",
          description: "Update App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--allow-incoming-ftp-connections", "-f"],
              description:
                "(ASEv3 only) Configure App Service Environment to allow FTP access. This ftpEnabled setting allows you to allow or deny FTP connections on the App Service Environment level. Individual apps will still need to configure FTP access",
              args: {
                name: "allow-incoming-ftp-connections",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--allow-new-private-endpoint-connections", "-p"],
              description:
                "(ASEv3 only) Configure Apps in App Service Environment to allow new private endpoint connections",
              args: {
                name: "allow-new-private-endpoint-connections",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--allow-remote-debugging", "-r"],
              description:
                "(ASEv3 only) Configure App Service Environment to allow remote debugging. You will still have to configure remote debugging at the individual app level",
              args: {
                name: "allow-remote-debugging",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          name: "upgrade",
          description: "Upgrade App Service Environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
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
      ],
    },
    {
      name: "domain",
      description: "Manage custom domains",
      subcommands: [
        {
          name: "create",
          description: "Create and purchase a custom domain",
          options: [
            {
              name: ["--contact-info", "-c"],
              description:
                "The file path to a JSON object with your contact info for domain registration. Please see the following link for the format of the JSON file expected: https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json",
              args: { name: "contact-info" },
              isRequired: true,
            },
            {
              name: ["--hostname", "-n"],
              description: "Name of the custom domain",
              args: { name: "hostname" },
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
              name: "--accept-terms",
              description:
                "By using this flag, you are accepting the conditions shown using the --show-hostname-purchase-terms flag",
            },
            acquirePolicyToken,
            {
              name: ["--auto-renew", "-a"],
              description: "Enable auto-renew on the domain",
            },
            changeReference,
            {
              name: "--dryrun",
              description:
                "Show summary of the purchase and create operation instead of executing it",
            },
            {
              name: ["--privacy", "-p"],
              description: "Enable privacy protection",
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
          name: "show-terms",
          description:
            "Show the legal terms for purchasing and creating a custom domain",
          options: [
            {
              name: ["--hostname", "-n"],
              description: "Name of the custom domain",
              args: { name: "hostname" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "hybrid-connection",
      description: "A method that sets the key a hybrid-connection uses",
      subcommands: [
        {
          name: "set-key",
          description:
            "Set the key that all apps in an appservice plan use to connect to the hybrid-connections in that appservice plan",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: "--key-type",
              description: "Which key (primary or secondary) should be used",
              args: { name: "key-type" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--plan",
              description: "AppService plan",
              args: { name: "plan" },
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
          ],
        },
      ],
    },
    {
      name: "plan",
      description: "Manage Plan",
      subcommands: [
        {
          name: "create",
          description: "Create an app service plan",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the new app service plan",
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
              name: ["--app-service-environment", "-e"],
              description:
                "Name or ID of the app service environment. If you want to create the app service plan in different subscription than the app service environment, please use the resource ID for --app-service-environment parameter",
              args: { name: "app-service-environment" },
            },
            {
              name: "--async-scaling-enabled",
              description:
                'Enables async scaling for the app service plan. Set to "true" to create an async operation if there are insufficient workers to scale synchronously. The SKU must be Dedicated',
              args: {
                name: "async-scaling-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--default-identity",
              description:
                "Accept system or user assigned identity separated. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity",
              args: { name: "default-identity" },
            },
            {
              name: "--enriched-errors",
              description:
                "If true, Linux App Service plan creation failures will show context-enriched diagnostics with error codes, suggested fixes, and Copilot prompts. This flag only applies to Linux plans and has no effect on Windows or Hyper-V plans",
              args: {
                name: "enriched-errors",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--hyper-v",
              description:
                "Host Windows Container Web App on Hyper-V worker. Cannot be used with --is-managed-instance",
            },
            {
              name: "--install-script",
              description:
                "Install script configurations. Provide key-value pairs for name=<name> source-uri=<uri> type=<type>",
              args: { name: "install-script", isVariadic: true },
            },
            {
              name: "--is-linux",
              description:
                'Host web app on Linux worker. Defaults to true unless --hyper-v or --is-managed-instance is specified. Use "--is-linux false" to create a Windows plan',
              args: {
                name: "is-linux",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--is-managed-instance",
              description:
                "Host web app on Managed Instance. Managed Instance supports Windows plans only and cannot be used with --hyper-v",
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Enable system-assigned managed identity for this app service plan",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Enable user-assigned managed identities for this app service plan. Accepts space-separated list of identity resource IDs",
              args: { name: "mi-user-assigned", isVariadic: true },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--number-of-workers",
              description: "Number of workers to be allocated",
              args: { name: "number-of-workers" },
            },
            {
              name: "--per-site-scaling",
              description:
                "Enable per-app scaling at the App Service plan level to allow for scaling an app independently from the App Service plan that hosts it",
            },
            {
              name: "--rdp-enabled",
              description: "Enable RDP. Requires is-custom-mode to be true",
              args: {
                name: "rdp-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--registry-adapter",
              description:
                "Registry adapter configurations. Provide key-value pairs for registry-key=<key> type=<type> secret-uri=<uri>",
              args: { name: "registry-adapter", isVariadic: true },
            },
            {
              name: "--sku",
              description:
                "The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P2V2(Premium V2 Medium), P3V2(Premium V2 Large), P0V3(Premium V3 Extra Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), P1MV3(Premium Memory Optimized V3 Small), P2MV3(Premium Memory Optimized V3 Medium), P3MV3(Premium Memory Optimized V3 Large), P4MV3(Premium Memory Optimized V3 Extra Large), P5MV3(Premium Memory Optimized V3 Extra Extra Large), P0V4(Premium V4 Extra Small), P1V4(Premium V4 Small), P2V4(Premium V4 Medium), P3V4(Premium V4 Large), P1MV4(Premium Memory Optimized V4 Small), P2MV4(Premium Memory Optimized V4 Medium), P3MV4(Premium Memory Optimized V4 Large), P4MV4(Premium Memory Optimized V4 Extra Large), P5MV4(Premium Memory Optimized V4 Extra Extra Large), I1V2 (Isolated V2 I1V2), I2V2 (Isolated V2 I2V2), I3V2 (Isolated V2 I3V2), I4V2 (Isolated V2 I4V2), I5V2 (Isolated V2 I5V2), I6V2 (Isolated V2 I6V2), I1MV2 (Isolated Memory Optimized V2 I1MV2), I2MV2 (Isolated Memory Optimized V2 I2MV2), I3MV2 (Isolated Memory Optimized V2 I3MV2), I4MV2 (Isolated Memory Optimized V2 I4MV2), I5MV2 (Isolated Memory Optimized V2 I5MV2), I1V4-I6V4 (Isolated V4), I1MV4-I5MV4 (Isolated Memory Optimized V4), WS1 (Logic Apps Workflow Standard 1), WS2 (Logic Apps Workflow Standard 2), WS3 (Logic Apps Workflow Standard 3)",
              args: {
                name: "sku",
                suggestions: [
                  "B1",
                  "B2",
                  "B3",
                  "D1",
                  "F1",
                  "FREE",
                  "I1MV2",
                  "I1MV4",
                  "I1V2",
                  "I1V4",
                  "I2MV2",
                  "I2MV4",
                  "I2V2",
                  "I2V4",
                  "I3MV2",
                  "I3MV4",
                  "I3V2",
                  "I3V4",
                  "I4MV2",
                  "I4MV4",
                  "I4V2",
                  "I4V4",
                  "I5MV2",
                  "I5MV4",
                  "I5V2",
                  "I5V4",
                  "I6V2",
                  "I6V4",
                  "P0V3",
                  "P0V4",
                  "P1MV3",
                  "P1MV4",
                  "P1V2",
                  "P1V3",
                  "P1V4",
                  "P2MV3",
                  "P2MV4",
                  "P2V2",
                  "P2V3",
                  "P2V4",
                  "P3MV3",
                  "P3MV4",
                  "P3V2",
                  "P3V3",
                  "P3V4",
                  "P4MV3",
                  "P4MV4",
                  "P5MV3",
                  "P5MV4",
                  "S1",
                  "S2",
                  "S3",
                  "SHARED",
                  "WS1",
                  "WS2",
                  "WS3",
                ],
              },
            },
            {
              name: "--storage-mount",
              description:
                "Storage mount configurations. Provide key-value pairs for name=<name> source=<source> type=<type> destination-path=<path> credentials-secret-uri=<uri>",
              args: { name: "storage-mount", isVariadic: true },
            },
            {
              name: "--subnet",
              description:
                "Name or resource ID of the pre-existing subnet to have the app service plan join. The --vnet is argument also needed if specifying subnet by name",
              args: { name: "subnet" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--vnet",
              description:
                "Name or resource ID of the regional virtual network. If there are multiple vnets of the same name across different resource groups, use vnet resource id to specify which vnet to use. If vnet name is used, by default, the vnet in the same resource group as the webapp will be used. Must be used with --subnet argument",
              args: { name: "vnet" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Enable zone redundancy for high availability. Minimum instance count is 2",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an app service plan",
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
              description: "The name of the app service plan",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List app service plans",
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
          name: "show",
          description:
            "Get the app service plans for a resource group or a set of resource groups",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
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
          description: "Update an app service plan",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--async-scaling-enabled",
              description:
                'Enables async scaling for the app service plan. Set to "true" to create an async operation if there are insufficient workers to scale synchronously. The SKU must be Dedicated',
              args: {
                name: "async-scaling-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--default-identity",
              description:
                "Accept system or user assigned identity separated. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity",
              args: { name: "default-identity" },
            },
            {
              name: "--elastic-scale",
              description:
                'Enable or disable automatic scaling. Set to "true" to enable elastic scale for this plan, or "false" to disable elastic scale for this plan. The SKU must be a Premium V2 SKU (P1V2, P2V2, P3V2) or a Premium V3 SKU (P1V3, P2V3, P3V3)',
              args: {
                name: "elastic-scale",
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
              name: "--install-script",
              description:
                "Install script configurations. Provide key-value pairs for name=<name> source-uri=<uri> type=<type>",
              args: { name: "install-script", isVariadic: true },
            },
            {
              name: ["--max-elastic-worker-count", "-m"],
              description:
                "Maximum number of instances that the plan can scale out to. The plan must be an elastic scale plan",
              args: { name: "max-elastic-worker-count" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--number-of-workers",
              description:
                "Number of workers to be allocated. Use this to scale out/in (add or remove instances), e.g. --number-of-workers 3",
              args: { name: "number-of-workers" },
            },
            {
              name: "--rdp-enabled",
              description: "Enable RDP. Requires is-custom-mode to be true",
              args: {
                name: "rdp-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--registry-adapter",
              description:
                "Registry adapter configurations. Provide key-value pairs for registry-key=<key> type=<type> secret-uri=<uri>",
              args: { name: "registry-adapter", isVariadic: true },
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
              name: "--sku",
              description:
                "SKU of the app service plan. Use this to scale up/down (change machine size), e.g. --sku P1v3",
              args: {
                name: "sku",
                suggestions: [
                  "B1",
                  "B2",
                  "B3",
                  "D1",
                  "F1",
                  "FREE",
                  "I1MV2",
                  "I1MV4",
                  "I1V2",
                  "I1V4",
                  "I2MV2",
                  "I2MV4",
                  "I2V2",
                  "I2V4",
                  "I3MV2",
                  "I3MV4",
                  "I3V2",
                  "I3V4",
                  "I4MV2",
                  "I4MV4",
                  "I4V2",
                  "I4V4",
                  "I5MV2",
                  "I5MV4",
                  "I5V2",
                  "I5V4",
                  "I6V2",
                  "I6V4",
                  "P0V3",
                  "P0V4",
                  "P1MV3",
                  "P1MV4",
                  "P1V2",
                  "P1V3",
                  "P1V4",
                  "P2MV3",
                  "P2MV4",
                  "P2V2",
                  "P2V3",
                  "P2V4",
                  "P3MV3",
                  "P3MV4",
                  "P3V2",
                  "P3V3",
                  "P3V4",
                  "P4MV3",
                  "P4MV4",
                  "P5MV3",
                  "P5MV4",
                  "S1",
                  "S2",
                  "S3",
                  "SHARED",
                  "WS1",
                  "WS2",
                  "WS3",
                ],
              },
            },
            {
              name: "--storage-mount",
              description:
                "Storage mount configurations. Provide key-value pairs for name=<name> source=<source> type=<type> destination-path=<path> credentials-secret-uri=<uri>",
              args: { name: "storage-mount", isVariadic: true },
            },
            {
              name: "--subnet",
              description:
                "Name or resource ID of the pre-existing subnet to have the app service plan join. The --vnet is argument also needed if specifying subnet by name",
              args: { name: "subnet" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vnet",
              description:
                "Name or resource ID of the regional virtual network. If there are multiple vnets of the same name across different resource groups, use vnet resource id to specify which vnet to use. If vnet name is used, by default, the vnet in the same resource group as the webapp will be used. Must be used with --subnet argument",
              args: { name: "vnet" },
            },
          ],
        },
        {
          name: "identity",
          description: "Manage managed identity for App Service plans",
          subcommands: [
            {
              name: "assign",
              description: "Assign a managed identity to an App Service plan",
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
                  description: "The name of the app service plan",
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
                {
                  name: "--system-assigned",
                  description:
                    "Assign system-assigned managed identity to this app service plan",
                },
                {
                  name: "--user-assigned",
                  description:
                    "Assign user-assigned managed identities to this app service plan. Accepts space-separated list of identity resource IDs",
                  args: { name: "user-assigned", isVariadic: true },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove managed identities from an App Service plan",
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
                  description: "The name of the app service plan",
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
                {
                  name: "--system-assigned",
                  description:
                    "Remove system-assigned managed identity from this app service plan",
                },
                {
                  name: "--user-assigned",
                  description:
                    "Remove user-assigned managed identities from this app service plan. Accepts space-separated list of identity resource IDs. If --user-assigned is specified without any resource IDs, all user-assigned managed identities are removed from this app service plan",
                  args: {
                    name: "user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "set-default",
              description:
                "Set the default managed identity for an App Service plan",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--identity",
                  description:
                    "Identity to set as default. Use '[system]' for system-assigned identity or provide user-assigned identity resource ID",
                  args: { name: "identity" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the app service plan",
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
              description: "Show the managed identity for an App Service plan",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the app service plan",
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
          name: "managed-instance",
          description: "Manage Managed Instance",
          subcommands: [
            {
              name: "install-script",
              description:
                "Manage install scripts for managed instance App Service plans",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add an install script to a managed instance App Service plan",
                  options: [
                    {
                      name: "--install-script-name",
                      description: "Name of the install script",
                      args: { name: "install-script-name" },
                      isRequired: true,
                    },
                    {
                      name: "--source-uri",
                      description: "Source URI of the install script",
                      args: { name: "source-uri" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description: "Type of the install script",
                      args: {
                        name: "type",
                        suggestions: ["PlatformStorage", "RemoteAzureBlob"],
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
                      description: "The name of the app service plan",
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
                    "List install scripts for a managed instance App Service plan",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "The name of the app service plan",
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
                  description:
                    "Remove an install script from a managed instance App Service plan",
                  options: [
                    {
                      name: "--install-script-name",
                      description: "Name of the install script to remove",
                      args: { name: "install-script-name" },
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
                      description: "The name of the app service plan",
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
              name: "instance",
              description: "Manage Instance",
              subcommands: [
                {
                  name: "connect",
                  description:
                    "Connect to a managed instance App Service plan worker instance via RDP using Azure Bastion",
                  options: [
                    {
                      name: "--bastion-name",
                      description:
                        "Name of the Azure Bastion host to use for the RDP connection",
                      args: { name: "bastion-name" },
                      isRequired: true,
                    },
                    {
                      name: "--instance-name",
                      description: "The name of the instance to connect to",
                      args: { name: "instance-name" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: "--bastion-resource-group",
                      description:
                        "Resource group name of the Azure Bastion host (defaults to the plan resource group)",
                      args: { name: "bastion-resource-group" },
                    },
                    changeReference,
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the app service plan",
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
                    "List instances for a managed instance App Service plan",
                  options: [
                    {
                      name: "--name",
                      description: "Name of the App Service plan",
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
                  name: "recycle",
                  description:
                    "Recycle a specific instance in a managed instance App Service plan",
                  options: [
                    {
                      name: "--instance-name",
                      description: "The name of the instance to recycle",
                      args: { name: "instance-name" },
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
                      description: "The name of the app service plan",
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
              name: "network",
              description:
                "Manage network integration for managed instance App Service plans",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add VNet integration to a managed instance App Service plan",
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
                      description: "The name of the app service plan",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subnet",
                      description:
                        "Name or resource ID of the pre-existing subnet to have the app service plan join. The --vnet argument is also needed if specifying subnet by name",
                      args: { name: "subnet" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--vnet",
                      description:
                        "Name or resource ID of the regional virtual network. If there are multiple vnets of the same name across different resource groups, use vnet resource id to specify which vnet to use. If vnet name is used, by default, the vnet in the same resource group as the app service plan will be used. Must be used with --subnet argument",
                      args: { name: "vnet" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove VNet integration from a managed instance App Service plan",
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
                      description: "The name of the app service plan",
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
                  description:
                    "Show the network configuration for a managed instance App Service plan",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the app service plan",
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
              name: "registry-adapter",
              description:
                "Manage registry adapters for managed instance App Service plans",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a registry adapter to a managed instance App Service plan",
                  options: [
                    {
                      name: "--registry-key",
                      description: "Registry key for the adapter",
                      args: { name: "registry-key" },
                      isRequired: true,
                    },
                    {
                      name: "--secret-uri",
                      description: "Key Vault secret URI for the value",
                      args: { name: "secret-uri" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description: "Type of the registry adapter",
                      args: {
                        name: "type",
                        suggestions: [
                          "Binary",
                          "DWord",
                          "Expand_String",
                          "Multi_String",
                          "QWord",
                          "String",
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
                      name: ["--name", "-n"],
                      description: "The name of the app service plan",
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
                    "List registry adapters for a managed instance App Service plan",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "The name of the app service plan",
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
                  description:
                    "Remove a registry adapter from a managed instance App Service plan",
                  options: [
                    {
                      name: "--registry-key",
                      description: "Registry key for the adapter to remove",
                      args: { name: "registry-key" },
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
                      description: "The name of the app service plan",
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
              name: "storage-mount",
              description:
                "Manage storage mounts for managed instance App Service plans",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a storage mount to a managed instance App Service plan",
                  options: [
                    {
                      name: "--destination-path",
                      description: "Destination path in the managed instance",
                      args: { name: "destination-path" },
                      isRequired: true,
                    },
                    {
                      name: "--mount-name",
                      description: "Name of the storage mount",
                      args: { name: "mount-name" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description: "Type of the storage mount",
                      args: {
                        name: "type",
                        suggestions: [
                          "AzureFiles",
                          "FileShare",
                          "LocalStorage",
                        ],
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--credentials-secret-uri",
                      description: "Key Vault secret URI for credentials",
                      args: { name: "credentials-secret-uri" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the app service plan",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--source",
                      description: "Source URI or path for the storage mount",
                      args: { name: "source" },
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
                    "List storage mounts for a managed instance App Service plan",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "The name of the app service plan",
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
                  description:
                    "Remove a storage mount from a managed instance App Service plan",
                  options: [
                    {
                      name: "--mount-name",
                      description: "Name of the storage mount to remove",
                      args: { name: "mount-name" },
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
                      description: "The name of the app service plan",
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
          name: "silo",
          description: "Manage Active Backup silos for an App Service plan",
          subcommands: [
            {
              name: "create",
              description: "Create an App Service plan silo",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the App Service plan",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--primary-location",
                  description: "Region of the primary App Service plan",
                  args: { name: "primary-location" },
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
                  name: "--silo",
                  description: "The name of the ServerFarmSilo",
                  args: { name: "silo" },
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
                  name: "--number-of-workers",
                  description: "Instance number override for the silo",
                  args: { name: "number-of-workers" },
                },
                {
                  name: ["--primary-server-farm-name", "--primary-plan-name"],
                  description: "Name of the primary App Service plan",
                  args: { name: "primary-server-farm-name" },
                },
                {
                  name: "--silo-location",
                  description:
                    "Azure region of the App Service plan silo, retained for compatibility. When supplied, it must identify the same region as the required root location",
                  args: { name: "silo-location" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--zone-redundant",
                  description: "Zone redundancy override for the silo",
                  args: {
                    name: "zone-redundant",
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
              description: "Delete an App Service plan silo",
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
                  description: "Name of the App Service plan",
                  args: { name: "name" },
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
                  name: "--silo",
                  description: "The name of the ServerFarmSilo",
                  args: { name: "silo" },
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
              description: "List the silos of an App Service plan",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the App Service plan",
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
              description: "Show an App Service plan silo",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the App Service plan",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--silo",
                  description: "The name of the ServerFarmSilo",
                  args: { name: "silo" },
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
              description: "Update an App Service plan silo",
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
                  name: ["--name", "-n"],
                  description: "Name of the App Service plan",
                  args: { name: "name" },
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
                  name: "--number-of-workers",
                  description: "Instance number override for the silo",
                  args: { name: "number-of-workers" },
                },
                {
                  name: "--primary-location",
                  description: "Region of the primary App Service plan",
                  args: { name: "primary-location" },
                },
                {
                  name: ["--primary-server-farm-name", "--primary-plan-name"],
                  description: "Name of the primary App Service plan",
                  args: { name: "primary-server-farm-name" },
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
                  name: "--silo",
                  description: "The name of the ServerFarmSilo",
                  args: { name: "silo" },
                },
                {
                  name: "--silo-location",
                  description:
                    "Azure region of the App Service plan silo, retained for compatibility. When supplied, it must identify the same region as the required root location",
                  args: { name: "silo-location" },
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
                  name: "--zone-redundant",
                  description: "Zone redundancy override for the silo",
                  args: {
                    name: "zone-redundant",
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
                "Wait for an App Service plan silo to satisfy a condition",
              options: [
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
                  name: ["--name", "-n"],
                  description: "Name of the App Service plan",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--silo",
                  description: "The name of the ServerFarmSilo",
                  args: { name: "silo" },
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
              name: "vnet-integration",
              description:
                "Inspect an App Service plan silo's virtual network integrations",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Show the virtual network integrations of an App Service plan silo",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the App Service plan",
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
                      name: "--silo",
                      description: "The name of the ServerFarmSilo",
                      args: { name: "silo" },
                      isRequired: true,
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
      name: "vnet-integration",
      description:
        "A method that lists the virtual network integrations used in an appservice plan",
      subcommands: [
        {
          name: "list",
          description:
            "List the virtual network integrations used in an appservice plan",
          options: [
            {
              name: "--plan",
              description: "AppService plan",
              args: { name: "plan" },
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
      ],
    },
  ],
};

export default completion;
