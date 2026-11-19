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
  name: "security",
  description: "Manage your security posture with Microsoft Defender for Cloud",
  subcommands: [
    {
      name: "adaptive-application-controls",
      description:
        "Enable control which applications can run on your Azure and non-Azure machines (Windows and Linux)",
      subcommands: [
        { name: "list", description: "Adaptive Application Controls - List" },
        {
          name: "show",
          description: "Adaptive Application Controls - Get",
          options: [
            {
              name: "--group-name",
              description: "Name of an application control VM/server group",
              args: { name: "group-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                'Location of the resource. Possible values are "centralsus", "westeurope". Please use "list" operation to get all resources and locations',
              args: { name: "location" },
            },
          ],
        },
      ],
    },
    {
      name: "adaptive_network_hardenings",
      description: "View all Adaptive Network Hardening resources",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of Adaptive Network Hardenings resources in scope of an extended resource",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the resource",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-namespace",
              description: "The Namespace of the resource",
              args: { name: "resource-namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The type of the resource",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets a single Adaptive Network Hardening resource",
          options: [
            {
              name: "--adaptive-network-hardenings-resource-name",
              description: "Adaptive Network Hardening resource name",
              args: { name: "adaptive-network-hardenings-resource-name" },
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
              name: "--resource-name",
              description: "Name of the resource",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-namespace",
              description: "The Namespace of the resource",
              args: { name: "resource-namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The type of the resource",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "alert",
      description: "View security alerts",
      subcommands: [
        {
          name: "list",
          description: "List security alerts",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
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
          description: "Shows a security alert",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
          description: "Updates a security alert status",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--status",
              description:
                'Target status of the alert. possible values are "dismiss", "activate", "resolve" and "inprogress"',
              args: { name: "status" },
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
      name: "alerts-suppression-rule",
      description: "View and manage alerts suppression rules",
      subcommands: [
        {
          name: "delete",
          description: "Delete an alerts suppression rule",
          options: [
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete_scope",
          description: "Delete an alerts suppression rule scope",
          options: [
            {
              name: "--field",
              description: "Entity name",
              args: { name: "field" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description:
            "List all alerts suppression rule on a subscription scope",
        },
        {
          name: "show",
          description: "Shows an alerts suppression rule",
          options: [
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Updates or create an alerts suppression rule",
          options: [
            {
              name: "--alert-type",
              description:
                'Type of the alert to automatically suppress. For all alert types, use "*"',
              args: { name: "alert-type" },
              isRequired: true,
            },
            {
              name: "--reason",
              description: "The reason for dismissing the alert",
              args: { name: "reason" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--state",
              description:
                'Possible states of the rule. Possible values are "Enabled" and "Disabled"',
              args: { name: "state" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--comment",
              description: "Any comment regarding the rule",
              args: { name: "comment" },
            },
            {
              name: "--expiration-date-utc",
              description:
                "Expiration date of the rule, if value is not provided or provided as null this field will default to the maximum allowed expiration date",
              args: { name: "expiration-date-utc" },
            },
          ],
        },
        {
          name: "upsert_scope",
          description: "Update an alerts suppression rule with scope element",
          options: [
            {
              name: "--field",
              description: "Entity name",
              args: { name: "field" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--any-of",
              description: "A list of strings to scope the suppression rule by",
              args: { name: "any-of" },
            },
            changeReference,
            {
              name: "--contains-substring",
              description: "The string to scope the suppression rule by",
              args: { name: "contains-substring" },
            },
          ],
        },
      ],
    },
    {
      name: "allowed_connections",
      description:
        "View all possible traffic between resources for the subscription and location, based on connection type",
      subcommands: [
        {
          name: "list",
          description:
            "List of all possible traffic between resources for the subscription",
        },
        {
          name: "show",
          description:
            "List all possible traffic between resources for the subscription and location, based on connection type",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      ],
    },
    {
      name: "api-collection",
      description:
        "Discover, manage, and view security insights for API collections",
      subcommands: [
        {
          name: "apim",
          description:
            "Discover, manage, and view security insights for API collections from Azure API Management",
          subcommands: [
            {
              name: "list",
              description:
                "Gets a list of API collections that have been onboarded to Microsoft Defender for APIs",
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
                {
                  name: "--service-name",
                  description: "The name of the API Management service",
                  args: { name: "service-name" },
                },
              ],
            },
            {
              name: "offboard",
              description:
                "Offboard an Azure API Management API from Microsoft Defender for APIs. The system will stop monitoring the operations within the Azure API Management API for intrusive behaviors",
              options: [
                acquirePolicyToken,
                {
                  name: ["--api-id", "--name", "-n"],
                  description:
                    "API revision identifier. Must be unique in the API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                },
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
                  name: "--service-name",
                  description: "The name of the API Management service",
                  args: { name: "service-name" },
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
              name: "onboard",
              description:
                "Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring the operations within the Azure Management API for intrusive behaviors and provide alerts for attacks that have been detected",
              options: [
                acquirePolicyToken,
                {
                  name: ["--api-id", "--name", "-n"],
                  description:
                    "API revision identifier. Must be unique in the API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: "--service-name",
                  description: "The name of the API Management service",
                  args: { name: "service-name" },
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
                "Gets an Azure API Management API if it has been onboarded to Microsoft Defender for APIs. If an Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the operations within the Azure API Management API for intrusive behaviors and provide alerts for attacks that have been detected",
              options: [
                {
                  name: ["--api-id", "--name", "-n"],
                  description:
                    "API revision identifier. Must be unique in the API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: "--service-name",
                  description: "The name of the API Management service",
                  args: { name: "service-name" },
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
                acquirePolicyToken,
                {
                  name: ["--api-id", "--name", "-n"],
                  description:
                    "API revision identifier. Must be unique in the API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: "--service-name",
                  description: "The name of the API Management service",
                  args: { name: "service-name" },
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
      name: "assessment",
      description: "View your security assessment results",
      subcommands: [
        {
          name: "create",
          description: "Creates a customer managed security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--status-code",
              description:
                'Programmatic code for the result of the assessment. can be "Healthy", "Unhealthy" or "NotApplicable"',
              args: { name: "status-code" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--additional-data",
              description:
                "Data that is attached to the assessment result for better investigations or status clarity",
              args: { name: "additional-data" },
            },
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
            changeReference,
            {
              name: "--status-cause",
              description:
                "Programmatic code for the cause of the assessment result",
              args: { name: "status-cause" },
            },
            {
              name: "--status-description",
              description:
                "Human readable description of the cause of the assessment result",
              args: { name: "status-description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
            changeReference,
          ],
        },
        { name: "list", description: "List all security assessment results" },
        {
          name: "show",
          description: "Shows a security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
          ],
        },
      ],
    },
    {
      name: "assessment-metadata",
      description: "View your security assessment metadata",
      subcommands: [
        {
          name: "create",
          description: "Creates a customer managed security assessment type",
          options: [
            {
              name: "--description",
              description:
                "Detailed string that will help users to understand the assessment and how it is calculated",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Human readable title for this object",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--severity",
              description:
                "Indicates the importance of the security risk if the assessment is unhealthy",
              args: { name: "severity" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--remediation-description",
              description:
                "Detailed string that will help users to understand the different ways to mitigate or fix the security issue",
              args: { name: "remediation-description" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a security assessment type and all it's assessment results",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        { name: "list", description: "List all security assessment results" },
        {
          name: "show",
          description: "Shows a security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "atp",
      description: "View and manage Advanced Threat Protection settings",
      subcommands: [
        {
          name: "cosmosdb",
          description:
            "View and manage Advanced Threat Protection settings for Cosmos DB accounts",
          subcommands: [
            {
              name: "show",
              description:
                "Display Advanced Threat Protection settings for an Azure Cosmos DB account",
              options: [
                {
                  name: "--cosmosdb-account",
                  description: "Name of an existing Cosmos DB account",
                  args: { name: "cosmosdb-account" },
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
                "Toggle status of Advanced Threat Protection for an Azure Cosmos DB account",
              options: [
                {
                  name: "--cosmosdb-account",
                  description: "Name of an existing Cosmos DB account",
                  args: { name: "cosmosdb-account" },
                  isRequired: true,
                },
                {
                  name: "--is-enabled",
                  description:
                    "Enable or disable Advanced Threat Protection for a received storage or Cosmos DB account",
                  args: {
                    name: "is-enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
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
          name: "storage",
          description:
            "View and manage Advanced Threat Protection settings for storage accounts",
          subcommands: [
            {
              name: "show",
              description:
                "Display Advanced Threat Protection settings for a storage account",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--storage-account",
                  description: "Name of an existing Storage account",
                  args: { name: "storage-account" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Toggle status of Advanced Threat Protection for a storage account",
              options: [
                {
                  name: "--is-enabled",
                  description:
                    "Enable or disable Advanced Threat Protection for a received storage or Cosmos DB account",
                  args: {
                    name: "is-enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
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
                  name: "--storage-account",
                  description: "Name of an existing Storage account",
                  args: { name: "storage-account" },
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
      name: "auto-provisioning-setting",
      description: "View your auto provisioning settings",
      subcommands: [
        { name: "list", description: "List the auto provisioning settings" },
        {
          name: "show",
          description: "Shows an auto provisioning setting",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates your automatic provisioning settings on the subscription",
          options: [
            {
              name: "--auto-provision",
              description:
                'Automatic provisioning toggle. possible values are "On" or "Off"',
              args: { name: "auto-provision" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "automation",
      description: "View your security automations",
      subcommands: [
        {
          name: "create_or_update",
          description: "Creates or update a security automation",
          options: [
            {
              name: "--actions",
              description:
                "A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true",
              args: { name: "actions" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--scopes",
              description:
                "A collection of scopes on which the security automations logic is applied",
              args: { name: "scopes" },
              isRequired: true,
            },
            {
              name: "--sources",
              description:
                "A collection of the source event types which evaluate the security automation set of rules",
              args: { name: "sources" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--description",
              description: "The security automation description",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description:
                "Entity tag is used for comparing two or more entities from the same requested resource",
              args: { name: "etag" },
            },
            {
              name: "--isEnabled",
              description:
                "Indicates whether the security automation is enabled",
              args: { name: "isEnabled" },
            },
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                "A list of key value pairs that describe the resource",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a security automation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
          ],
        },
        {
          name: "list",
          description:
            "List all security automations under subscription/resource group",
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
          description: "Shows a security automation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
          name: "validate",
          description:
            "Validates a security automation model before create or update",
          options: [
            {
              name: "--actions",
              description:
                "A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true",
              args: { name: "actions" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--scopes",
              description:
                "A collection of scopes on which the security automations logic is applied",
              args: { name: "scopes" },
              isRequired: true,
            },
            {
              name: "--sources",
              description:
                "A collection of the source event types which evaluate the security automation set of rules",
              args: { name: "sources" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--description",
              description: "The security automation description",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description:
                "Entity tag is used for comparing two or more entities from the same requested resource",
              args: { name: "etag" },
            },
            {
              name: "--isEnabled",
              description:
                "Indicates whether the security automation is enabled",
              args: { name: "isEnabled" },
            },
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                "A list of key value pairs that describe the resource",
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "automation-action-event-hub",
      description: "Creates security automation event hub action",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation event hub action",
          options: [
            {
              name: "--connection-string",
              description:
                "The target Event Hub connection string (it will not be included in any response)",
              args: { name: "connection-string" },
              isRequired: true,
            },
            {
              name: "--event-hub-resource-id",
              description: "The target Event Hub Azure Resource ID",
              args: { name: "event-hub-resource-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--sas-policy-name",
              description: "The target Event Hub SAS policy name",
              args: { name: "sas-policy-name" },
            },
          ],
        },
      ],
    },
    {
      name: "automation-action-logic-app",
      description: "Creates security automation logic app action",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation logic app action",
          options: [
            {
              name: "--logic-app-resource-id",
              description:
                "The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App",
              args: { name: "logic-app-resource-id" },
              isRequired: true,
            },
            {
              name: "--uri",
              description:
                "The Logic App trigger URI endpoint (it will not be included in any response)",
              args: { name: "uri" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "automation-action-workspace",
      description: "Creates security automation workspace action",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation workspace action",
          options: [
            {
              name: "--workspace-resource-id",
              description:
                "The fully qualified Log Analytics Workspace Azure Resource ID",
              args: { name: "workspace-resource-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "automation-rule",
      description: "Creates security automation rule",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation rule",
          options: [
            {
              name: "--expected-value",
              description: "The expected value",
              args: { name: "expected-value" },
              isRequired: true,
            },
            {
              name: "--operator",
              description:
                "A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType",
              args: { name: "operator" },
              isRequired: true,
            },
            {
              name: "--property-j-path",
              description:
                "The JPath of the entity model property that should be checked",
              args: { name: "property-j-path" },
              isRequired: true,
            },
            {
              name: "--property-type",
              description:
                "The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]",
              args: { name: "property-type" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "automation-rule-set",
      description: "Creates security automation rule set",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation rule set",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--rules",
              description:
                "A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set",
              args: { name: "rules" },
            },
          ],
        },
      ],
    },
    {
      name: "automation-scope",
      description: "Creates security automation scope",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation scope",
          options: [
            {
              name: "--description",
              description: "The resources scope description",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--scope-path",
              description:
                "The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs)",
              args: { name: "scope-path" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "automation-source",
      description: "Creates security automation source",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation source",
          options: [
            {
              name: "--event-source",
              description: "A valid event source type",
              args: { name: "event-source" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--rule-sets",
              description:
                'A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical "or")',
              args: { name: "rule-sets" },
            },
          ],
        },
      ],
    },
    {
      name: "contact",
      description: "View your security contacts",
      subcommands: [
        {
          name: "create",
          description: "Creates a security contact",
          options: [
            {
              name: ["--security-contact-name", "--name", "-n"],
              description: "Name of the security contact object",
              args: { name: "security-contact-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--alert-notifications",
              description:
                'Defines whether to send email notifications about new security alerts Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "alert-notifications", isVariadic: true },
            },
            changeReference,
            {
              name: "--emails",
              description:
                "List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact",
              args: { name: "emails" },
            },
            {
              name: "--notifications-by-role",
              description:
                'Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "notifications-by-role", isVariadic: true },
            },
            {
              name: "--phone",
              description: "The security contact's phone number",
              args: { name: "phone" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete security contact configurations for the subscription",
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
              name: ["--security-contact-name", "--name", "-n"],
              description: "Name of the security contact object",
              args: { name: "security-contact-name" },
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
            "List all security contact configurations for the subscription",
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
          description:
            "Get Default Security contact configurations for the subscription",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--security-contact-name", "--name", "-n"],
              description: "Name of the security contact object",
              args: { name: "security-contact-name" },
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
            "Update security contact configurations for the subscription",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--alert-notifications",
              description:
                'Defines whether to send email notifications about new security alerts Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "alert-notifications", isVariadic: true },
            },
            changeReference,
            {
              name: "--emails",
              description:
                "List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact",
              args: { name: "emails" },
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
              name: ["--security-contact-name", "--name", "-n"],
              description: "Name of the security contact object",
              args: { name: "security-contact-name" },
            },
            {
              name: "--notifications-by-role",
              description:
                'Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "notifications-by-role", isVariadic: true },
            },
            {
              name: "--phone",
              description: "The security contact's phone number",
              args: { name: "phone" },
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
      name: "discovered-security-solution",
      description: "View your discovered security solutions",
      subcommands: [
        { name: "list", description: "List the discovered security solutions" },
        {
          name: "show",
          description: "Shows a discovered security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      ],
    },
    {
      name: "external-security-solution",
      description: "View your external security solutions",
      subcommands: [
        { name: "list", description: "List the external security solutions" },
        {
          name: "show",
          description: "Shows an external security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      ],
    },
    {
      name: "iot-alerts",
      description: "View IoT Security aggregated alerts",
      subcommands: [
        {
          name: "delete",
          description: "Dismiss an aggregated IoT Security Alert",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description: "List all yours IoT Security solution aggregated alerts",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows a single aggregated alert of yours IoT Security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "iot-analytics",
      description: "View IoT Security Analytics metrics",
      subcommands: [
        {
          name: "list",
          description: "List all IoT security Analytics metrics",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Shows IoT Security Analytics metrics",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "iot-recommendations",
      description: "View IoT Security aggregated recommendations",
      subcommands: [
        {
          name: "list",
          description:
            "List all yours IoT Security solution aggregated recommendations",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows a single aggregated recommendation of yours IoT Security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "iot-solution",
      description: "Manage your IoT Security solution",
      subcommands: [
        {
          name: "create",
          description: "Create your IoT Security solution",
          options: [
            {
              name: "--display-name",
              description: "Resource display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--iot-hubs",
              description: "IoT Hub resource IDs",
              args: { name: "iot-hubs" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description: "Delete your IoT Security solution",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description: "List all IoT Security solutions",
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
          description: "Shows a IoT Security solution",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update your IoT Security solution",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--display-name",
              description: "Resource display name",
              args: { name: "display-name" },
            },
            {
              name: "--iot-hubs",
              description: "IoT Hub resource IDs",
              args: { name: "iot-hubs" },
            },
          ],
        },
      ],
    },
    {
      name: "jit-policy",
      description: "Manage your Just in Time network access policies",
      subcommands: [
        {
          name: "list",
          description: "List your Just in Time network access policies",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
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
          description: "Shows a Just in Time network access policy",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      ],
    },
    {
      name: "location",
      description:
        "Shows the Microsoft Defender for Cloud Home region location",
      subcommands: [
        {
          name: "list",
          description:
            "Shows the Microsoft Defender for Cloud Home region location",
        },
        {
          name: "show",
          description:
            "Shows the Microsoft Defender for Cloud Home region location",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "pricing",
      description:
        "Enables managing the Azure Defender plan for the subscription",
      subcommands: [
        {
          name: "create",
          description: "Updates the Azure defender plan for the subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--tier",
              description: "Pricing tier type",
              args: { name: "tier" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--extensions",
              description: "Pricing extensions",
              args: { name: "extensions", isOptional: true, isVariadic: true },
            },
            {
              name: "--subplan",
              description: "Bundle suplan",
              args: { name: "subplan" },
            },
          ],
        },
        {
          name: "list",
          description: "Shows the Azure Defender plans for the subscription",
        },
        {
          name: "show",
          description: "Shows the Azure Defender plan for the subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "regulatory-compliance-assessments",
      description: "Regulatory compliance assessments",
      subcommands: [
        {
          name: "list",
          description:
            "Get details and state of assessments mapped to selected regulatory compliance control",
          options: [
            {
              name: "--control-name",
              description: "The compliance control name",
              args: { name: "control-name" },
              isRequired: true,
            },
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows supported regulatory compliance details and state for selected assessment",
          options: [
            {
              name: "--control-name",
              description: "The compliance control name",
              args: { name: "control-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "regulatory-compliance-controls",
      description: "Regulatory compliance controls",
      subcommands: [
        {
          name: "list",
          description:
            "List supported of regulatory compliance controls details and state for selected standard",
          options: [
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows a regulatory compliance details state for selected standard",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "regulatory-compliance-standards",
      description: "Regulatory compliance standards",
      subcommands: [
        {
          name: "list",
          description:
            "List supported regulatory compliance standards details and state results",
        },
        {
          name: "show",
          description:
            "Shows a regulatory compliance details state for selected standard",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "secure-score-control-definitions",
      description: "Secure score control definitions",
      subcommands: [
        {
          name: "list",
          description: "Get details of secure score control definitions",
        },
      ],
    },
    {
      name: "secure-score-controls",
      description: "Secure score controls",
      subcommands: [
        {
          name: "list",
          description:
            "List supported of secure score controls details and state for scope",
        },
        {
          name: "list_by_score",
          description:
            "List supported of secure score controls details and state for selected score",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "secure-scores",
      description: "Secure scores",
      subcommands: [
        {
          name: "list",
          description: "List of secure-scores details and state results",
        },
        {
          name: "show",
          description: "Shows a secure score details for selected initiative",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "security-connector",
      description:
        "Manage cloud security posture management (CSPM) and cloud workload protection (CWP) across multicloud resources",
      subcommands: [
        {
          name: "create",
          description: "Create a security connector",
          options: [
            {
              name: ["--security-connector-name", "--name", "-n"],
              description: "The security connector name",
              args: { name: "security-connector-name" },
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
              name: "--environment-data",
              description:
                'The security connector environment data. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "environment-data", isVariadic: true },
            },
            {
              name: "--environment-name",
              description: "The multi cloud resource's cloud name",
              args: {
                name: "environment-name",
                suggestions: [
                  "AWS",
                  "Azure",
                  "AzureDevOps",
                  "GCP",
                  "GitLab",
                  "Github",
                ],
              },
            },
            {
              name: "--hierarchy-identifier",
              description:
                "The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector, GUID in case DevOps connector)",
              args: { name: "hierarchy-identifier" },
            },
            {
              name: ["--location", "-l"],
              description: "Location where the resource is stored",
              args: { name: "location" },
            },
            {
              name: "--offerings",
              description:
                'A collection of offerings for the security connector. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "offerings", isVariadic: true },
            },
            {
              name: "--tags",
              description:
                'A list of key value pairs that describe the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a security connector",
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
              name: ["--security-connector-name", "--name", "-n"],
              description: "The security connector name",
              args: { name: "security-connector-name" },
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
            "List all the security connectors in the specified subscription",
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
          name: "show",
          description: "Get details of a specific security connector",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--security-connector-name", "--name", "-n"],
              description: "The security connector name",
              args: { name: "security-connector-name" },
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
          description: "Update a security connector",
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
              name: "--environment-data",
              description:
                'The security connector environment data. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "environment-data", isVariadic: true },
            },
            {
              name: "--environment-name",
              description: "The multi cloud resource's cloud name",
              args: {
                name: "environment-name",
                suggestions: [
                  "AWS",
                  "Azure",
                  "AzureDevOps",
                  "GCP",
                  "GitLab",
                  "Github",
                ],
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
              name: ["--location", "-l"],
              description: "Location where the resource is stored",
              args: { name: "location" },
            },
            {
              name: ["--security-connector-name", "--name", "-n"],
              description: "The security connector name",
              args: { name: "security-connector-name" },
            },
            {
              name: "--offerings",
              description:
                'A collection of offerings for the security connector. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "offerings", isVariadic: true },
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
                'A list of key value pairs that describe the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
          ],
        },
        {
          name: "devops",
          description: "DevOps configuration and operations",
          subcommands: [
            {
              name: "create",
              description: "Create a DevOps Configuration",
              options: [
                {
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
                  name: "--authorization-code",
                  description:
                    "Sets one-time OAuth code to exchange for refresh and access tokens",
                  args: { name: "authorization-code" },
                },
                {
                  name: "--auto-discovery",
                  description: "AutoDiscovery states",
                  args: {
                    name: "auto-discovery",
                    suggestions: ["Disabled", "Enabled", "NotApplicable"],
                  },
                },
                changeReference,
                {
                  name: "--inventory-list",
                  description:
                    'List of top-level inventory to select when AutoDiscovery is disabled. This field is ignored when AutoDiscovery is enabled. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "inventory-list", isVariadic: true },
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
              description: "Delete a DevOps Connector",
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
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
              name: "list-available-azuredevopsorgs",
              description:
                "Returns a list of all Azure DevOps organizations accessible by the user token consumed by the connector. Returns 401 if connector was created by different user or identity",
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
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
              name: "list-available-githubowners",
              description:
                "Returns a list of all GitHub owners accessible by the user token consumed by the connector. Returns 401 if connector was created by different user or identity",
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
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
              name: "list-available-gitlabgroups",
              description:
                "Returns a list of all GitLab groups accessible by the user token consumed by the connector. Returns 401 if connector was created by different user or identity",
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
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
              description: "Get a DevOps Configuration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
              description: "Update a DevOps Configuration",
              options: [
                acquirePolicyToken,
                {
                  name: "--authorization-code",
                  description:
                    "Sets one-time OAuth code to exchange for refresh and access tokens. Optional if connector was created by the same identity",
                  args: { name: "authorization-code" },
                },
                {
                  name: "--auto-discovery",
                  description: "AutoDiscovery states",
                  args: {
                    name: "auto-discovery",
                    suggestions: ["Disabled", "Enabled", "NotApplicable"],
                  },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--inventory-list",
                  description:
                    'List of top-level inventory to select when AutoDiscovery is disabled. This field is ignored when AutoDiscovery is enabled. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "inventory-list", isVariadic: true },
                },
                {
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
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
                  name: ["--security-connector-name", "--name", "-n"],
                  description: "The security connector name",
                  args: { name: "security-connector-name" },
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
              name: "azuredevopsorg",
              description: "AzureDevOps Organizations",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create monitored Azure DevOps organization details",
                  options: [
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
                      isRequired: true,
                    },
                    {
                      name: "--org-name",
                      description: "The Azure DevOps organization name",
                      args: { name: "org-name" },
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
                      name: "--actionable-remediation",
                      description:
                        'Configuration payload for PR Annotations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: {
                        name: "actionable-remediation",
                        isVariadic: true,
                      },
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
                  ],
                },
                {
                  name: "list",
                  description:
                    "List Azure DevOps organizations onboarded to the connector",
                  options: [
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
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
                    "Get a monitored Azure DevOps organization resource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
                    },
                    {
                      name: "--org-name",
                      description: "The Azure DevOps organization name",
                      args: { name: "org-name" },
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
                    "Update monitored Azure DevOps organization details",
                  options: [
                    acquirePolicyToken,
                    {
                      name: "--actionable-remediation",
                      description:
                        'Configuration payload for PR Annotations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: {
                        name: "actionable-remediation",
                        isVariadic: true,
                      },
                    },
                    changeReference,
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
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
                      name: "--org-name",
                      description: "The Azure DevOps organization name",
                      args: { name: "org-name" },
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
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition is met",
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
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
                    },
                    {
                      name: "--org-name",
                      description: "The Azure DevOps organization name",
                      args: { name: "org-name" },
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
                  name: "project",
                  description: "Azure DevOps projects",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a monitored Azure DevOps project resource",
                      options: [
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
                          isRequired: true,
                        },
                        {
                          name: "--org-name",
                          description: "The Azure DevOps organization name",
                          args: { name: "org-name" },
                          isRequired: true,
                        },
                        {
                          name: "--project-name",
                          description: "The project name",
                          args: { name: "project-name" },
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
                          name: "--actionable-remediation",
                          description:
                            'Configuration payload for PR Annotations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                          args: {
                            name: "actionable-remediation",
                            isVariadic: true,
                          },
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
                      ],
                    },
                    {
                      name: "list",
                      description:
                        "List Azure DevOps projects onboarded to the connector",
                      options: [
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
                          isRequired: true,
                        },
                        {
                          name: "--org-name",
                          description: "The Azure DevOps organization name",
                          args: { name: "org-name" },
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
                        "Get a monitored Azure DevOps project resource",
                      options: [
                        {
                          name: "--ids",
                          description:
                            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                          args: { name: "ids", isVariadic: true },
                        },
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
                        },
                        {
                          name: "--org-name",
                          description: "The Azure DevOps organization name",
                          args: { name: "org-name" },
                        },
                        {
                          name: "--project-name",
                          description: "The project name",
                          args: { name: "project-name" },
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
                        "Update a monitored Azure DevOps project resource",
                      options: [
                        acquirePolicyToken,
                        {
                          name: "--actionable-remediation",
                          description:
                            'Configuration payload for PR Annotations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                          args: {
                            name: "actionable-remediation",
                            isVariadic: true,
                          },
                        },
                        changeReference,
                        {
                          name: "--ids",
                          description:
                            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                          args: { name: "ids", isVariadic: true },
                        },
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
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
                          name: "--org-name",
                          description: "The Azure DevOps organization name",
                          args: { name: "org-name" },
                        },
                        {
                          name: "--project-name",
                          description: "The project name",
                          args: { name: "project-name" },
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
                      name: "wait",
                      description:
                        "Place the CLI in a waiting state until a condition is met",
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
                        {
                          name: "--deleted",
                          description: "Wait until deleted",
                        },
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
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
                        },
                        {
                          name: "--org-name",
                          description: "The Azure DevOps organization name",
                          args: { name: "org-name" },
                        },
                        {
                          name: "--project-name",
                          description: "The project name",
                          args: { name: "project-name" },
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
                      name: "repo",
                      description: "Azure DevOps repositories",
                      subcommands: [
                        {
                          name: "create",
                          description:
                            "Create a monitored Azure DevOps repository resource",
                          options: [
                            {
                              name: [
                                "--security-connector-name",
                                "--name",
                                "-n",
                              ],
                              description: "The security connector name",
                              args: { name: "security-connector-name" },
                              isRequired: true,
                            },
                            {
                              name: "--org-name",
                              description: "The Azure DevOps organization name",
                              args: { name: "org-name" },
                              isRequired: true,
                            },
                            {
                              name: "--project-name",
                              description: "The project name",
                              args: { name: "project-name" },
                              isRequired: true,
                            },
                            {
                              name: "--repo-name",
                              description: "The repository name",
                              args: { name: "repo-name" },
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
                              name: "--actionable-remediation",
                              description:
                                'Configuration payload for PR Annotations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                              args: {
                                name: "actionable-remediation",
                                isVariadic: true,
                              },
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
                          ],
                        },
                        {
                          name: "list",
                          description:
                            "List Azure DevOps repositories onboarded to the connector",
                          options: [
                            {
                              name: [
                                "--security-connector-name",
                                "--name",
                                "-n",
                              ],
                              description: "The security connector name",
                              args: { name: "security-connector-name" },
                              isRequired: true,
                            },
                            {
                              name: "--org-name",
                              description: "The Azure DevOps organization name",
                              args: { name: "org-name" },
                              isRequired: true,
                            },
                            {
                              name: "--project-name",
                              description: "The project name",
                              args: { name: "project-name" },
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
                            "Get a monitored Azure DevOps repository resource",
                          options: [
                            {
                              name: "--ids",
                              description:
                                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                              args: { name: "ids", isVariadic: true },
                            },
                            {
                              name: [
                                "--security-connector-name",
                                "--name",
                                "-n",
                              ],
                              description: "The security connector name",
                              args: { name: "security-connector-name" },
                            },
                            {
                              name: "--org-name",
                              description: "The Azure DevOps organization name",
                              args: { name: "org-name" },
                            },
                            {
                              name: "--project-name",
                              description: "The project name",
                              args: { name: "project-name" },
                            },
                            {
                              name: "--repo-name",
                              description: "The repository name",
                              args: { name: "repo-name" },
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
                            "Update a monitored Azure DevOps repository resource",
                          options: [
                            acquirePolicyToken,
                            {
                              name: "--actionable-remediation",
                              description:
                                'Configuration payload for PR Annotations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                              args: {
                                name: "actionable-remediation",
                                isVariadic: true,
                              },
                            },
                            changeReference,
                            {
                              name: "--ids",
                              description:
                                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                              args: { name: "ids", isVariadic: true },
                            },
                            {
                              name: [
                                "--security-connector-name",
                                "--name",
                                "-n",
                              ],
                              description: "The security connector name",
                              args: { name: "security-connector-name" },
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
                              name: "--org-name",
                              description: "The Azure DevOps organization name",
                              args: { name: "org-name" },
                            },
                            {
                              name: "--project-name",
                              description: "The project name",
                              args: { name: "project-name" },
                            },
                            {
                              name: "--repo-name",
                              description: "The repository name",
                              args: { name: "repo-name" },
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
                          name: "wait",
                          description:
                            "Place the CLI in a waiting state until a condition is met",
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
                            {
                              name: "--deleted",
                              description: "Wait until deleted",
                            },
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
                                "--security-connector-name",
                                "--name",
                                "-n",
                              ],
                              description: "The security connector name",
                              args: { name: "security-connector-name" },
                            },
                            {
                              name: "--org-name",
                              description: "The Azure DevOps organization name",
                              args: { name: "org-name" },
                            },
                            {
                              name: "--project-name",
                              description: "The project name",
                              args: { name: "project-name" },
                            },
                            {
                              name: "--repo-name",
                              description: "The repository name",
                              args: { name: "repo-name" },
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
              ],
            },
            {
              name: "githubowner",
              description: "GitHub Owners",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List a list of GitHub owners onboarded to the connector",
                  options: [
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
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
                  description: "Get a monitored GitHub owner",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
                    },
                    {
                      name: "--owner-name",
                      description: "The GitHub owner name",
                      args: { name: "owner-name" },
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
                  name: "repo",
                  description: "GitHub repositories",
                  subcommands: [
                    {
                      name: "list",
                      description:
                        "List GitHub repositories onboarded to the connector",
                      options: [
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
                          isRequired: true,
                        },
                        {
                          name: "--owner-name",
                          description: "The GitHub owner name",
                          args: { name: "owner-name" },
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
                      description: "Get a monitored GitHub repository",
                      options: [
                        {
                          name: "--ids",
                          description:
                            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                          args: { name: "ids", isVariadic: true },
                        },
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
                        },
                        {
                          name: "--owner-name",
                          description: "The GitHub owner name",
                          args: { name: "owner-name" },
                        },
                        {
                          name: "--repo-name",
                          description: "The repository name",
                          args: { name: "repo-name" },
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
              name: "gitlabgroup",
              description: "GitLab Groups",
              subcommands: [
                {
                  name: "list",
                  description: "List GitLab groups onboarded to the connector",
                  options: [
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
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
                  name: "list-subgroups",
                  description:
                    "Gets nested subgroups of given GitLab Group which are onboarded to the connector",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--group-name",
                      description: "The GitLab group fully-qualified name",
                      args: { name: "group-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
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
                    "Get a monitored GitLab Group resource for a given fully-qualified name",
                  options: [
                    {
                      name: "--group-name",
                      description: "The GitLab group fully-qualified name",
                      args: { name: "group-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--security-connector-name", "--name", "-n"],
                      description: "The security connector name",
                      args: { name: "security-connector-name" },
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
                  name: "project",
                  description: "GitLab Projects (Repositories)",
                  subcommands: [
                    {
                      name: "list",
                      description:
                        "List GitLab projects that are directly owned by given group and onboarded to the connector",
                      options: [
                        {
                          name: "--group-name",
                          description: "The GitLab group fully-qualified name",
                          args: { name: "group-name" },
                          isRequired: true,
                        },
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
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
                        "Get a monitored GitLab Project resource for a given fully-qualified group name and project name",
                      options: [
                        {
                          name: "--group-name",
                          description: "The GitLab group fully-qualified name",
                          args: { name: "group-name" },
                        },
                        {
                          name: "--ids",
                          description:
                            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                          args: { name: "ids", isVariadic: true },
                        },
                        {
                          name: ["--security-connector-name", "--name", "-n"],
                          description: "The security connector name",
                          args: { name: "security-connector-name" },
                        },
                        {
                          name: "--project-name",
                          description: "The project name",
                          args: { name: "project-name" },
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
          ],
        },
      ],
    },
    {
      name: "security-solutions",
      description: "Display all security solutions at the subscription level",
      subcommands: [
        {
          name: "list",
          description:
            "Display all security solutions at the subscription level",
        },
      ],
    },
    {
      name: "security-solutions-reference-data",
      description:
        "Display all security solutions reference data at the subscription level",
      subcommands: [
        {
          name: "list",
          description:
            "Display all security solutions reference data at the subscription level",
        },
      ],
    },
    {
      name: "setting",
      description: "View your security settings",
      subcommands: [
        {
          name: "create",
          description:
            "Create settings about different configurations in Microsoft Defender for Cloud",
          options: [
            {
              name: ["--setting-name", "--name", "-n"],
              description: "The name of the setting",
              args: {
                name: "setting-name",
                suggestions: [
                  "MCAS",
                  "Sentinel",
                  "WDATP",
                  "WDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW",
                  "WDATP_UNIFIED_SOLUTION",
                ],
              },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--alert-sync-settings",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "alert-sync-settings", isVariadic: true },
            },
            changeReference,
            {
              name: "--data-export-settings",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "data-export-settings", isVariadic: true },
            },
          ],
        },
        {
          name: "list",
          description: "List security settings",
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
          description:
            "Get of different configurations in Microsoft Defender for Cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--setting-name", "--name", "-n"],
              description: "The name of the setting",
              args: {
                name: "setting-name",
                suggestions: [
                  "MCAS",
                  "Sentinel",
                  "WDATP",
                  "WDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW",
                  "WDATP_UNIFIED_SOLUTION",
                ],
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
          name: "update",
          description:
            "Update settings about different configurations in Microsoft Defender for Cloud",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--alert-sync-settings",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "alert-sync-settings", isVariadic: true },
            },
            changeReference,
            {
              name: "--data-export-settings",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "data-export-settings", isVariadic: true },
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
              name: ["--setting-name", "--name", "-n"],
              description: "The name of the setting",
              args: {
                name: "setting-name",
                suggestions: [
                  "MCAS",
                  "Sentinel",
                  "WDATP",
                  "WDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW",
                  "WDATP_UNIFIED_SOLUTION",
                ],
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
      name: "sub-assessment",
      description: "View your security sub assessments",
      subcommands: [
        {
          name: "list",
          description: "List all security sub assessment results",
          options: [
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
            {
              name: "--assessment-name",
              description: "Name of the assessment resource",
              args: { name: "assessment-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows a security sub assessment",
          options: [
            {
              name: "--assessment-name",
              description: "Name of the assessment resource",
              args: { name: "assessment-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
          ],
        },
      ],
    },
    {
      name: "task",
      description: "View security tasks (recommendations)",
      subcommands: [
        {
          name: "list",
          description: "List security tasks (recommendations)",
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
          description: "Shows a security task (recommendation)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "topology",
      description: "Shows the network topology in your subscription",
      subcommands: [
        {
          name: "list",
          description: "Shows the network topology in your subscription",
        },
        {
          name: "show",
          description: "Shows the network topology in your subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      ],
    },
    {
      name: "va",
      description: "Manage Defender for Cloud vulnerability assessment",
      subcommands: [
        {
          name: "sql",
          description: "Manage Defender for Cloud vulnerability assessment",
          subcommands: [
            {
              name: "create",
              description: "Create the SQL Vulnerability Assessment settings",
              options: [
                {
                  name: "--resource-id",
                  description:
                    "The fully qualified Azure Resource manager identifier of the resource",
                  args: { name: "resource-id" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--state",
                  description:
                    "Represents the state of a SQL Vulnerability Assessment",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the SQL Vulnerability Assessment settings",
              options: [
                {
                  name: "--resource-id",
                  description:
                    "The fully qualified Azure Resource manager identifier of the resource",
                  args: { name: "resource-id" },
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
              name: "show",
              description: "Get the SQL Vulnerability Assessment settings",
              options: [
                {
                  name: "--resource-id",
                  description:
                    "The fully qualified Azure Resource manager identifier of the resource",
                  args: { name: "resource-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update the SQL Vulnerability Assessment settings",
              options: [
                {
                  name: "--resource-id",
                  description:
                    "The fully qualified Azure Resource manager identifier of the resource",
                  args: { name: "resource-id" },
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
                  name: "--state",
                  description:
                    "Represents the state of a SQL Vulnerability Assessment",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
              ],
            },
            {
              name: "baseline",
              description:
                "View and manage Sql Vulnerability Assessment baseline",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Set a list of baseline rules. Will overwrite any previously existing results (for all rules)",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--latest-scan",
                      description: "Take results from latest scan",
                      args: {
                        name: "latest-scan",
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
                      name: "--results",
                      description:
                        'Expected results to be inserted into the baseline. Leave this field empty if latestScan == true. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "results", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create a Baseline for a rule in a database. Will overwrite any previously existing results",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-id",
                      description: "The rule Id",
                      args: { name: "rule-id" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--latest-scan",
                      description: "Take results from latest scan",
                      args: {
                        name: "latest-scan",
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
                      name: "--results",
                      description:
                        'Expected results to be inserted into the baseline. Leave this field empty if latestScan == true. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "results", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a rule from the Baseline of a given database",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-id",
                      description: "The rule Id",
                      args: { name: "rule-id" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List the results for all rules in the Baseline",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
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
                  name: "set",
                  description:
                    "Set a list of baseline rules. Will overwrite any previously existing results (for all rules). This command has been deprecated and will be removed in a future release. Use 'az security va sql baseline add' instead",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--latest-scan",
                      description: "Take results from latest scan",
                      args: {
                        name: "latest-scan",
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
                      name: "--results",
                      description:
                        'Expected results to be inserted into the baseline. Leave this field empty if latestScan == true. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "results", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the results for a given rule in the Baseline",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-id",
                      description: "The rule Id",
                      args: { name: "rule-id" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "results",
              description: "View Sql Vulnerability Assessment scan results",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List a list of scan results for a single scan record",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--scan-id",
                      description: "The scan Id",
                      args: { name: "scan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
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
                    "Get the scan results of a single rule in a scan record",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--scan-result-id", "--rule-id"],
                      description: "The rule Id of the results",
                      args: { name: "scan-result-id" },
                      isRequired: true,
                    },
                    {
                      name: "--scan-id",
                      description: "The scan Id",
                      args: { name: "scan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "scans",
              description: "View Sql Vulnerability Assessment scan summaries",
              subcommands: [
                {
                  name: "initiate-scan",
                  description: "Initiates a vulnerability assessment scan",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to scan. Required when invoked at the server-level scope rather than on a specific database resource",
                      args: { name: "database-name" },
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
                  name: "list",
                  description: "List a list of scan records",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
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
                  description: "Get the scan details of a single scan record",
                  options: [
                    {
                      name: "--resource-id",
                      description:
                        "The fully qualified Azure Resource manager identifier of the resource",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--scan-id",
                      description:
                        "The scan Id. Type 'latest' to get the scan record for the latest scan",
                      args: { name: "scan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description:
                        "The name of the database to assess. Required when the API is called on the parent resource (e.g., server level) rather than on a specific database resource, since the database name is not part of the resource URI. This is the only way to assess system databases (e.g., master), which cannot be referenced directly in the resource URI",
                      args: { name: "database-name" },
                    },
                  ],
                },
                {
                  name: "scan-operation-result",
                  description: "Manage Scan Operation Result",
                  subcommands: [
                    {
                      name: "show",
                      description:
                        "Get the result of a scan operation initiated by the InitiateScan action",
                      options: [
                        {
                          name: "--operation-id",
                          description:
                            "The operation id of the scan operation returned by 'security va sql scans initiate-scan'",
                          args: { name: "operation-id" },
                          isRequired: true,
                        },
                        {
                          name: "--resource-id",
                          description:
                            "The fully qualified Azure Resource manager identifier of the resource",
                          args: { name: "resource-id" },
                          isRequired: true,
                        },
                        {
                          name: "--database-name",
                          description:
                            "The name of the database the scan was initiated against. Required when the original scan was initiated at the server-level scope",
                          args: { name: "database-name" },
                        },
                      ],
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
      name: "workspace-setting",
      description:
        "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a workspace settings in your subscription - these settings let you control which workspace will hold your security data",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--target-workspace",
              description:
                "An ID of the workspace resource that will hold the security data",
              args: { name: "target-workspace" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the workspace settings in your subscription - this will make the security events on the subscription be reported to the default workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description:
            "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
        },
        {
          name: "show",
          description:
            "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
