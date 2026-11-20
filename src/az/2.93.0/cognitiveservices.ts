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
  name: "cognitiveservices",
  description: "Manage Cognitive Services",
  subcommands: [
    {
      name: "account",
      description: "Manage Account",
      subcommands: [
        {
          name: "create",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: "--kind",
              description: "The API name of cognitive services account",
              args: { name: "kind" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
              name: ["--sku-name", "--sku"],
              description:
                "Name of the Sku of Cognitive Services account/deployment",
              args: { name: "sku-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--agent-hosting-cluster",
              description:
                "ARM resource ID of the customer-owned AKS cluster. Run preflight, prepare missing Storage and managed identities, and create the account with agent hosting",
              args: { name: "agent-hosting-cluster" },
            },
            {
              name: [
                "--agent-hosting-management-identity",
                "--agent-hosting-mi",
              ],
              description:
                "ARM resource ID of the hosting-management user-assigned identity. Validate and reuse when supplied; create when omitted. Automatically assigned to the account. Requires --agent-hosting-cluster",
              args: { name: "agent-hosting-management-identity" },
            },
            {
              name: "--agent-hosting-storage",
              description:
                "ARM resource ID of existing Storage to validate and reuse. Create Storage when omitted. Requires --agent-hosting-cluster",
              args: { name: "agent-hosting-storage" },
            },
            {
              name: ["--agent-hosting-workload-identity", "--agent-hosting-wi"],
              description:
                "ARM resource ID of the workload user-assigned identity. Validate and reuse when supplied; create when omitted. Not assigned to the account. Requires --agent-hosting-cluster",
              args: { name: "agent-hosting-workload-identity" },
            },
            {
              name: ["--allow-project-management", "--manage-projects"],
              description:
                "AIServices kind only. Enables project management. Default true",
              args: {
                name: "allow-project-management",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--api-properties",
              description:
                "Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account",
              args: {
                name: "api-properties",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--assign-identity",
              description:
                "Generate and assign an Azure Active Directory Identity for this account",
            },
            changeReference,
            {
              name: "--custom-domain",
              description:
                "User domain assigned to the account. Name is the CNAME source",
              args: { name: "custom-domain" },
            },
            {
              name: "--encryption",
              description:
                "The encryption properties for this resource, in JSON format",
              args: { name: "encryption" },
            },
            {
              name: "--storage",
              description:
                "The storage accounts for this resource, in JSON array format",
              args: { name: "storage" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--yes",
              description: "Do not prompt for terms confirmation",
            },
          ],
        },
        {
          name: "delete",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          description: "Manage Azure Cognitive Services accounts",
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
          description: "List soft-deleted Azure Cognitive Services accounts",
          options: [acquirePolicyToken, changeReference],
        },
        {
          name: "list-kinds",
          description:
            "List all valid kinds for Azure Cognitive Services account",
          options: [acquirePolicyToken, changeReference],
        },
        {
          name: "list-models",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          name: "list-skus",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--kind",
              description: "The API name of cognitive services account",
              args: { name: "kind" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
              args: { name: "name" },
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
          name: "list-usage",
          description: "List usages for Azure Cognitive Services account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          name: "purge",
          description: "Purge a soft-deleted Azure Cognitive Services account",
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
              description: "Cognitive service account name",
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
          name: "recover",
          description:
            "Recover a soft-deleted Azure Cognitive Services account",
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
              description: "Cognitive service account name",
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
          name: "show",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          name: "show-deleted",
          description: "Show a soft-deleted Azure Cognitive Services account",
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
              description: "Cognitive service account name",
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
          name: "update",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
              name: ["--allow-project-management", "--manage-projects"],
              description:
                "AIServices kind only. Enables project management. Default true",
              args: {
                name: "allow-project-management",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--api-properties",
              description:
                "Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account",
              args: {
                name: "api-properties",
                isOptional: true,
                isVariadic: true,
              },
            },
            changeReference,
            {
              name: "--custom-domain",
              description:
                "User domain assigned to the account. Name is the CNAME source",
              args: { name: "custom-domain" },
            },
            {
              name: "--encryption",
              description:
                "The encryption properties for this resource, in JSON format",
              args: { name: "encryption" },
            },
            {
              name: "--kind",
              description:
                "The target API name to transform the existing account into",
              args: { name: "kind", suggestions: ["AIServices", "OpenAI"] },
            },
            {
              name: ["--sku-name", "--sku"],
              description:
                "Name of the Sku of Cognitive Services account/deployment",
              args: { name: "sku-name" },
            },
            {
              name: "--storage",
              description:
                "The storage accounts for this resource, in JSON array format",
              args: { name: "storage" },
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
          name: "adapter-deployment",
          description:
            "Manage LoRA adapter deployments for Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "create",
              description:
                "Create (or replace / re-target) a LoRA adapter deployment attached to a managed compute deployment",
              options: [
                {
                  name: ["--adapter-deployment-name", "--adapter-name"],
                  description: "Adapter deployment name",
                  args: { name: "adapter-deployment-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--source-model-id",
                  description:
                    "Immutable Foundry fine-tuning LoRA output model URI (e.g., azureai://accounts/{account}/projects/{project}/models/{model}/versions/{version})",
                  args: { name: "source-model-id" },
                  isRequired: true,
                },
                {
                  name: "--target-deployment-name",
                  description:
                    "Name of the existing managed compute parent deployment (resolved within the same account) that will serve this adapter. Re-specify to re-target an existing adapter deployment",
                  args: { name: "target-deployment-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description:
                "Delete an adapter deployment from Azure Cognitive Services account",
              options: [
                {
                  name: ["--adapter-deployment-name", "--adapter-name"],
                  description: "Adapter deployment name",
                  args: { name: "adapter-deployment-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                "List all adapter deployments for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "show",
              description:
                "Show an adapter deployment for Azure Cognitive Services account",
              options: [
                {
                  name: ["--adapter-deployment-name", "--adapter-name"],
                  description: "Adapter deployment name",
                  args: { name: "adapter-deployment-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
          name: "commitment-plan",
          description:
            "Manage commitment plans for Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "create",
              description:
                "Create a commitment plan for Azure Cognitive Services account",
              options: [
                {
                  name: "--auto-renew",
                  description:
                    "A boolean indicating whether to apply auto renew",
                  args: {
                    name: "auto-renew",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                  isRequired: true,
                },
                {
                  name: "--commitment-plan-name",
                  description:
                    "Cognitive Services account commitment plan name",
                  args: { name: "commitment-plan-name" },
                  isRequired: true,
                },
                {
                  name: "--hosting-model",
                  description: "Cognitive Services account hosting model",
                  args: {
                    name: "hosting-model",
                    suggestions: [
                      "ConnectedContainer",
                      "DisconnectedContainer",
                      "ProvisionedWeb",
                      "Web",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--plan-type",
                  description:
                    "Cognitive Services account commitment plan type",
                  args: { name: "plan-type" },
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
                  name: "--current-count",
                  description:
                    "Cognitive Services account commitment plan current commitment period count",
                  args: { name: "current-count" },
                },
                {
                  name: "--current-tier",
                  description:
                    "Cognitive Services account commitment plan current commitment period tier",
                  args: { name: "current-tier" },
                },
                {
                  name: "--next-count",
                  description:
                    "Cognitive Services account commitment plan next commitment period count",
                  args: { name: "next-count" },
                },
                {
                  name: "--next-tier",
                  description:
                    "Cognitive Services account commitment plan next commitment period tier",
                  args: { name: "next-tier" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a commitment plan from Azure Cognitive Services account",
              options: [
                {
                  name: "--commitment-plan-name",
                  description:
                    "Cognitive Services account commitment plan name",
                  args: { name: "commitment-plan-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                "Show all commitment plans from Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "show",
              description:
                "Show a commitment plan from Azure Cognitive Services account",
              options: [
                {
                  name: "--commitment-plan-name",
                  description:
                    "Cognitive Services account commitment plan name",
                  args: { name: "commitment-plan-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
          name: "compute",
          description:
            "Manage compute resources for Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "create",
              description:
                "Create a compute resource for Azure Cognitive Services account",
              options: [
                {
                  name: "--compute-name",
                  description: "Cognitive Services account compute name",
                  args: { name: "compute-name" },
                  isRequired: true,
                },
                {
                  name: "--instance-type",
                  description:
                    "VM instance type for the pool (e.g. Standard_DS3_v2)",
                  args: { name: "instance-type" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--node-count",
                  description: "Number of nodes in the pool",
                  args: { name: "node-count" },
                  isRequired: true,
                },
                {
                  name: "--pool-name",
                  description: "Name of the compute pool",
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
                  name: ["--location", "-l"],
                  description:
                    "Location for the compute resource. If omitted, uses the configured default location or the resource group location",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--vm-priority",
                  description: "VM priority for the pool",
                  args: {
                    name: "vm-priority",
                    suggestions: ["Regular", "Spot"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a compute resource from Azure Cognitive Services account",
              options: [
                {
                  name: "--compute-name",
                  description: "Cognitive Services account compute name",
                  args: { name: "compute-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all compute resources for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "show",
              description:
                "Show a compute resource for Azure Cognitive Services account",
              options: [
                {
                  name: "--compute-name",
                  description: "Cognitive Services account compute name",
                  args: { name: "compute-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "wait",
              description:
                "Wait for a compute resource to reach a specified condition",
              options: [
                {
                  name: "--compute-name",
                  description: "Cognitive Services account compute name",
                  args: { name: "compute-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
          name: "connection",
          description:
            "Manage Azure Cognitive Services connection and its more specific derivatives",
          subcommands: [
            {
              name: "create",
              description: "Create a connection",
              options: [
                {
                  name: "--connection-name",
                  description: "Cognitive Services account connection name",
                  args: { name: "connection-name" },
                  isRequired: true,
                },
                {
                  name: "--file",
                  description:
                    "Path to the connection file in JSON or YAML format",
                  args: { name: "file" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "delete",
              description: "Delete a connection",
              options: [
                {
                  name: "--connection-name",
                  description: "Cognitive Services account connection name",
                  args: { name: "connection-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              description: "List all connections",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                { name: "--category", args: { name: "category" } },
                { name: "--include-all" },
                { name: "--target", args: { name: "target" } },
              ],
            },
            {
              name: "show",
              description: "Show details of a connection",
              options: [
                {
                  name: "--connection-name",
                  description: "Cognitive Services account connection name",
                  args: { name: "connection-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              description: "Update a connection",
              options: [
                {
                  name: "--connection-name",
                  description: "Cognitive Services account connection name",
                  args: { name: "connection-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
          name: "costcontrol",
          description: "Manage Foundry account-owned Cost Controls",
          subcommands: [
            {
              name: "create",
              description: "Create an account-owned cost control",
              options: [
                {
                  name: "--account-name",
                  description: "The name of Cognitive Services account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--cost-control-name", "--name", "-n"],
                  description:
                    "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                  args: { name: "cost-control-name" },
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
                  name: "--amount",
                  description:
                    "The positive budget amount, measured in United States dollars for the Cost category or in tokens for the Tokens category. Token amounts must be whole numbers",
                  args: { name: "amount" },
                },
                {
                  name: "--category",
                  description:
                    "Whether the budget measures estimated cost in United States dollars or token consumption. This category cannot be changed after creation",
                  args: { name: "category", suggestions: ["Cost", "Tokens"] },
                },
                changeReference,
                {
                  name: "--filter",
                  description:
                    'Optional traffic selection. Omission selects all eligible traffic within the owner\'s scope. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "filter", isVariadic: true },
                },
                {
                  name: "--grouping",
                  description:
                    'Optional additional partitioning of consumption. Omission or an empty array uses one counter for the owning account or Foundry project. Responses omit owner-default grouping. A project-owned control cannot explicitly group by project. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "grouping", isVariadic: true },
                },
                {
                  name: "--if-match",
                  description:
                    "Proceeds only if the current entity tag matches this value",
                  args: { name: "if-match" },
                },
                {
                  name: "--if-none-match",
                  description:
                    "Proceeds only if the current entity tag does not match this value. Use * to create only if absent",
                  args: { name: "if-none-match" },
                },
                {
                  name: "--notifications",
                  description:
                    'Alert notifications keyed by nonempty, case-insensitively unique names. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "notifications", isVariadic: true },
                },
                {
                  name: "--provider",
                  description:
                    "The resource provider for this budget. Omission selects Microsoft.CognitiveServices; responses return that value",
                  args: {
                    name: "provider",
                    suggestions: ["Microsoft.CognitiveServices"],
                  },
                },
                {
                  name: "--provider-properties",
                  description:
                    'Optional provider-specific enforcement settings. Omission creates no blocking actions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "provider-properties", isVariadic: true },
                },
                {
                  name: "--time-grain",
                  description:
                    "The calendar-aligned UTC interval at which consumption counters renew within the validity window",
                  args: {
                    name: "time-grain",
                    suggestions: ["Daily", "Monthly", "Weekly"],
                  },
                },
                {
                  name: "--time-period",
                  description:
                    'The finite UTC validity window during which the control applies. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "time-period", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account-owned cost control",
              options: [
                {
                  name: "--account-name",
                  description: "The name of Cognitive Services account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--cost-control-name", "--name", "-n"],
                  description:
                    "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                  args: { name: "cost-control-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--if-match",
                  description:
                    "Proceeds only if the current entity tag matches this value",
                  args: { name: "if-match" },
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
              name: "head",
              description:
                "Checks whether an account-owned cost control exists without returning its body",
              options: [
                {
                  name: "--account-name",
                  description: "The name of Cognitive Services account",
                  args: { name: "account-name" },
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--cost-control-name", "--name", "-n"],
                  description:
                    "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                  args: { name: "cost-control-name" },
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
              name: "list",
              description: "List account-owned cost controls",
              options: [
                {
                  name: "--account-name",
                  description: "The name of Cognitive Services account",
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
                "Get an account-owned cost control and its representation entity tag",
              options: [
                {
                  name: "--account-name",
                  description: "The name of Cognitive Services account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--cost-control-name", "--name", "-n"],
                  description:
                    "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                  args: { name: "cost-control-name" },
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
              description: "Update an account-owned cost control",
              options: [
                {
                  name: "--account-name",
                  description: "The name of Cognitive Services account",
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
                  name: "--amount",
                  description:
                    "Replaces the positive budget amount, measured in United States dollars for the Cost category or in whole tokens for the Tokens category",
                  args: { name: "amount" },
                },
                {
                  name: "--category",
                  description:
                    "Whether the budget measures estimated cost in United States dollars or token consumption. This category cannot be changed after creation",
                  args: { name: "category", suggestions: ["Cost", "Tokens"] },
                },
                changeReference,
                {
                  name: ["--cost-control-name", "--name", "-n"],
                  description:
                    "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                  args: { name: "cost-control-name" },
                },
                {
                  name: "--filter",
                  description:
                    'Optional traffic selection. Omission selects all eligible traffic within the owner\'s scope. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "filter", isVariadic: true },
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
                  name: "--grouping",
                  description:
                    'Optional additional partitioning of consumption. Omission or an empty array uses one counter for the owning account or Foundry project. Responses omit owner-default grouping. A project-owned control cannot explicitly group by project. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "grouping", isVariadic: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--if-match",
                  description:
                    "Proceeds only if the current entity tag matches this value",
                  args: { name: "if-match" },
                },
                {
                  name: "--if-none-match",
                  description:
                    "Proceeds only if the current entity tag does not match this value. Use * to create only if absent",
                  args: { name: "if-none-match" },
                },
                {
                  name: "--notifications",
                  description:
                    'Merges notifications by case-insensitive name, preserving existing name casing. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "notifications", isVariadic: true },
                },
                {
                  name: "--provider",
                  description:
                    "The resource provider for this budget. Omission selects Microsoft.CognitiveServices; responses return that value",
                  args: {
                    name: "provider",
                    suggestions: ["Microsoft.CognitiveServices"],
                  },
                },
                {
                  name: "--provider-properties",
                  description:
                    'Optional provider-specific enforcement settings. Omission creates no blocking actions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "provider-properties", isVariadic: true },
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
                  name: "--time-grain",
                  description:
                    "The calendar-aligned UTC interval at which consumption counters renew within the validity window",
                  args: {
                    name: "time-grain",
                    suggestions: ["Daily", "Monthly", "Weekly"],
                  },
                },
                {
                  name: "--time-period",
                  description:
                    'The finite UTC validity window during which the control applies. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "time-period", isVariadic: true },
                },
              ],
            },
          ],
        },
        {
          name: "deployment",
          description:
            "Manage deployments for Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "create",
              description:
                "Create a deployment for Azure Cognitive Services account",
              options: [
                {
                  name: "--model-format",
                  description:
                    "Cognitive Services account deployment model format",
                  args: { name: "model-format" },
                  isRequired: true,
                },
                {
                  name: "--model-name",
                  description:
                    "Cognitive Services account deployment model name",
                  args: { name: "model-name" },
                  isRequired: true,
                },
                {
                  name: "--model-version",
                  description:
                    "Cognitive Services account deployment model version",
                  args: { name: "model-version" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: ["--sku-capacity", "--capacity"],
                  description:
                    "Capacity value of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-capacity" },
                },
                changeReference,
                {
                  name: ["--country-code", "--country"],
                  description:
                    "Two-letter ISO 3166-1 alpha-2 country code of the organization, such as US. Required for Anthropic deployments. Specify together with --organization-name and --industry",
                  args: { name: "country-code" },
                },
                {
                  name: "--deployment-name",
                  description: "Cognitive Services account deployment name",
                  args: { name: "deployment-name" },
                },
                {
                  name: "--industry",
                  description:
                    "Industry of the organization using the Anthropic model, such as Law. Required for Anthropic deployments. Specify together with --organization-name and --country",
                  args: { name: "industry" },
                },
                {
                  name: "--model-source",
                  description:
                    "Cognitive Services account deployment model source",
                  args: { name: "model-source" },
                },
                {
                  name: "--organization-name",
                  description:
                    "Name of the organization using the Anthropic model. Required for Anthropic deployments. Specify together with --industry and --country",
                  args: { name: "organization-name" },
                },
                {
                  name: ["--scale-settings-capacity", "--scale-capacity"],
                  description:
                    "Cognitive Services account deployment scale settings capacity",
                  args: { name: "scale-settings-capacity" },
                },
                {
                  name: ["--scale-settings-scale-type", "--scale-type"],
                  description:
                    "Cognitive Services account deployment scale settings scale type",
                  args: {
                    name: "scale-settings-scale-type",
                    suggestions: ["Manual", "Standard"],
                  },
                },
                {
                  name: ["--sku-name", "--sku"],
                  description:
                    "Name of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-name" },
                },
                {
                  name: ["--spillover-deployment-name", "--spillover-name"],
                  description:
                    "The name of the standard deployment to use as a spillover when at capacity",
                  args: { name: "spillover-deployment-name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a deployment from Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--deployment-name",
                  description: "Cognitive Services account deployment name",
                  args: { name: "deployment-name" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Show all deployments for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "show",
              description:
                "Show a deployment for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--deployment-name",
                  description: "Cognitive Services account deployment name",
                  args: { name: "deployment-name" },
                },
              ],
            },
          ],
        },
        {
          name: "identity",
          description: "Manage identity of Cognitive Services accounts",
          subcommands: [
            {
              name: "assign",
              description: "Assign an identity of a Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "remove",
              description:
                "Remove the identity from a Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "show",
              description: "Show the identity of a Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
          name: "keys",
          description: "Manage Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "list",
              description: "Manage Azure Cognitive Services accounts",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "regenerate",
              description: "Manage Azure Cognitive Services accounts",
              options: [
                {
                  name: "--key-name",
                  description: "Key name to generate",
                  args: { name: "key-name", suggestions: ["Key1", "Key2"] },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
          ],
        },
        {
          name: "managed-compute-deployment",
          description:
            "Manage managed compute deployments for Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "create",
              description:
                "Create a managed compute deployment for Azure Cognitive Services account",
              options: [
                {
                  name: "--model",
                  description:
                    "AzureML registry model URI (e.g., azureml://registries/{registry}/models/{model}/versions/{version})",
                  args: { name: "model" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--accelerator-type",
                  description: "GPU accelerator type (e.g., H100_80GB)",
                  args: { name: "accelerator-type" },
                },
                acquirePolicyToken,
                {
                  name: ["--sku-capacity", "--capacity"],
                  description:
                    "Capacity value of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-capacity" },
                },
                changeReference,
                {
                  name: "--deployment-name",
                  description: "Managed compute deployment name",
                  args: { name: "deployment-name" },
                },
                {
                  name: "--deployment-template",
                  description:
                    "AzureML registry deployment template URI (e.g., azureml://registries/{registry}/deploymenttemplates/{template}/versions/{version})",
                  args: { name: "deployment-template" },
                },
                {
                  name: ["--sku-name", "--sku"],
                  description:
                    "Name of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-name" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: "--version-upgrade-option",
                  description:
                    "Version upgrade policy. Allowed values: OnceNewDefaultVersionAvailable, OnceCurrentVersionExpired, NoAutoUpgrade",
                  args: { name: "version-upgrade-option" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a managed compute deployment from Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--deployment-name",
                  description: "Managed compute deployment name",
                  args: { name: "deployment-name" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List all managed compute deployments for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "show",
              description:
                "Show a managed compute deployment for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--deployment-name",
                  description: "Managed compute deployment name",
                  args: { name: "deployment-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a managed compute deployment for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: ["--sku-capacity", "--capacity"],
                  description:
                    "Capacity value of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-capacity" },
                },
                changeReference,
                {
                  name: "--deployment-name",
                  description: "Managed compute deployment name",
                  args: { name: "deployment-name" },
                },
                {
                  name: ["--sku-name", "--sku"],
                  description:
                    "Name of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-name" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
              ],
            },
          ],
        },
        {
          name: "managed-network",
          description:
            "Manage the managed network settings for an Azure Cognitive Services account",
          subcommands: [
            {
              name: "create",
              description:
                "Create a managed network for an Azure Cognitive Services account",
              options: [
                {
                  name: "--managed-network",
                  description: "Isolation mode for the managed network",
                  args: {
                    name: "managed-network",
                    suggestions: [
                      "allow_internet_outbound",
                      "allow_only_approved_outbound",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--firewall-sku",
                  description: "Firewall SKU for the managed network",
                  args: {
                    name: "firewall-sku",
                    suggestions: ["Basic", "Standard"],
                  },
                },
                {
                  name: "--managed-network-name",
                  description:
                    'Name of the managed network. Only "default" is supported',
                  args: { name: "managed-network-name" },
                },
              ],
            },
            {
              name: "provision-network",
              description:
                "Provision the managed network for an Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--managed-network-name",
                  description:
                    'Name of the managed network. Only "default" is supported',
                  args: { name: "managed-network-name" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the managed network settings for an Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--managed-network-name",
                  description:
                    'Name of the managed network. Only "default" is supported',
                  args: { name: "managed-network-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update managed network settings for an Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--firewall-sku",
                  description: "Firewall SKU for the managed network",
                  args: {
                    name: "firewall-sku",
                    suggestions: ["Basic", "Standard"],
                  },
                },
                {
                  name: "--managed-network",
                  description: "Isolation mode for the managed network",
                  args: {
                    name: "managed-network",
                    suggestions: [
                      "allow_internet_outbound",
                      "allow_only_approved_outbound",
                    ],
                  },
                },
                {
                  name: "--managed-network-name",
                  description:
                    'Name of the managed network. Only "default" is supported',
                  args: { name: "managed-network-name" },
                },
              ],
            },
            {
              name: "outbound-rule",
              description:
                "Manage outbound rules for the managed network of an Azure Cognitive Services account",
              subcommands: [
                {
                  name: "bulk-set",
                  description:
                    "Bulk create or update outbound rules from a YAML or JSON file",
                  options: [
                    {
                      name: "--file",
                      description:
                        "Path to a YAML or JSON file containing outbound rules definition",
                      args: { name: "file" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
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
                    {
                      name: "--managed-network-name",
                      description:
                        'Name of the managed network. Only "default" is supported',
                      args: { name: "managed-network-name" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List all outbound rules for the managed network",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
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
                      name: "--managed-network-name",
                      description:
                        'Name of the managed network. Only "default" is supported',
                      args: { name: "managed-network-name" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove an outbound rule from the managed network",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
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
                      name: "--rule",
                      description: "Name of the outbound rule",
                      args: { name: "rule" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--managed-network-name",
                      description:
                        'Name of the managed network. Only "default" is supported',
                      args: { name: "managed-network-name" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "set",
                  description:
                    "Create or update a single outbound rule for the managed network",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
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
                      name: "--rule",
                      description: "Name of the outbound rule",
                      args: { name: "rule" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description: "Type of the outbound rule",
                      args: {
                        name: "type",
                        suggestions: ["fqdn", "privateendpoint", "servicetag"],
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: "--category",
                      description: "Category of the outbound rule",
                      args: {
                        name: "category",
                        suggestions: [
                          "Dependency",
                          "Recommended",
                          "Required",
                          "UserDefined",
                        ],
                      },
                    },
                    changeReference,
                    {
                      name: "--destination",
                      description:
                        "Destination for the outbound rule. For FQDN rules, this is the FQDN string. For PrivateEndpoint rules, this is the service resource ID. For ServiceTag rules, provide a JSON string",
                      args: { name: "destination" },
                    },
                    {
                      name: "--managed-network-name",
                      description:
                        'Name of the managed network. Only "default" is supported',
                      args: { name: "managed-network-name" },
                    },
                    {
                      name: "--subresource-target",
                      description:
                        "Subresource target for PrivateEndpoint outbound rules (e.g. blob, table, queue, file, web, dfs)",
                      args: { name: "subresource-target" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show details of an outbound rule",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
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
                      name: "--rule",
                      description: "Name of the outbound rule",
                      args: { name: "rule" },
                      isRequired: true,
                    },
                    {
                      name: "--managed-network-name",
                      description:
                        'Name of the managed network. Only "default" is supported',
                      args: { name: "managed-network-name" },
                    },
                  ],
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
              name: "add",
              description: "Add a network rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--ip-address",
                  description: "IPv4 address or CIDR range",
                  args: { name: "ip-address" },
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of subnet. If name is supplied, --vnet-name must be supplied",
                  args: { name: "subnet" },
                },
                {
                  name: "--vnet-name",
                  description: "Name of a virtual network",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List network rules",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              description: "Remove a network rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                {
                  name: "--ip-address",
                  description: "IPv4 address or CIDR range",
                  args: { name: "ip-address" },
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of subnet. If name is supplied, --vnet-name must be supplied",
                  args: { name: "subnet" },
                },
                {
                  name: "--vnet-name",
                  description: "Name of a virtual network",
                  args: { name: "vnet-name" },
                },
              ],
            },
          ],
        },
        {
          name: "project",
          description: "Manage Project",
          subcommands: [
            {
              name: "create",
              description:
                "Create a project for Azure Cognitive Services account",
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
                  description: "Cognitive service account name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "Cognitive Services account project name",
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
                  name: ["--include-system-identity", "--assign-identity"],
                  description:
                    "Use with --user-assigned-identity to generate and assign a system managed Azure Active Directory Identity for this project",
                },
                changeReference,
                {
                  name: "--description",
                  description: "Description of the project",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the project",
                  args: { name: "display-name" },
                },
                {
                  name: "--user-assigned-identity",
                  description:
                    "User assigned identity resource ID to use for the project. If not specified, a system assigned identity will be used",
                  args: { name: "user-assigned-identity" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a project",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "Cognitive Services account project name",
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
                changeReference,
              ],
            },
            {
              name: "list",
              description:
                "Returns all the projects in a Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              name: "show",
              description:
                "Returns a Cognitive Services project specified by the parameters",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "Cognitive Services account project name",
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
              ],
            },
            {
              name: "update",
              description:
                "Update a project for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "Cognitive Services account project name",
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
                changeReference,
                {
                  name: "--description",
                  description: "Description of the project",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the project",
                  args: { name: "display-name" },
                },
              ],
            },
            {
              name: "connection",
              description:
                "Manage Azure Cognitive Services connection associated with a project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a connection for Azure Cognitive Services account",
                  options: [
                    {
                      name: "--connection-name",
                      description: "Cognitive Services account connection name",
                      args: { name: "connection-name" },
                      isRequired: true,
                    },
                    {
                      name: "--file",
                      description:
                        "Path to the connection file in JSON or YAML format",
                      args: { name: "file" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--project-name",
                      description: "Cognitive Services account project name",
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
                    changeReference,
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete Cognitive Services project connection by name",
                  options: [
                    {
                      name: "--connection-name",
                      description: "Cognitive Services account connection name",
                      args: { name: "connection-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--project-name",
                      description: "Cognitive Services account project name",
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
                    changeReference,
                  ],
                },
                {
                  name: "list",
                  description:
                    "Lists all the available Cognitive Services project connections under the specified project",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--project-name",
                      description: "Cognitive Services account project name",
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
                    { name: "--category", args: { name: "category" } },
                    { name: "--include-all" },
                    { name: "--target", args: { name: "target" } },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Lists Cognitive Services project connection by name",
                  options: [
                    {
                      name: "--connection-name",
                      description: "Cognitive Services account connection name",
                      args: { name: "connection-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--project-name",
                      description: "Cognitive Services account project name",
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
                  ],
                },
                {
                  name: "update",
                  description: "Update a project connection",
                  options: [
                    {
                      name: "--connection-name",
                      description: "Cognitive Services account connection name",
                      args: { name: "connection-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Cognitive service account name",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--project-name",
                      description: "Cognitive Services account project name",
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
              name: "costcontrol",
              description: "Manage Foundry project-owned cost controls",
              subcommands: [
                {
                  name: "create",
                  description: "Create a Foundry project-owned const control",
                  options: [
                    {
                      name: "--account-name",
                      description: "The name of Cognitive Services account",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--cost-control-name", "--name", "-n"],
                      description:
                        "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                      args: { name: "cost-control-name" },
                      isRequired: true,
                    },
                    {
                      name: "--project-name",
                      description:
                        "The name of Cognitive Services account's project",
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
                      name: "--amount",
                      description:
                        "The positive budget amount, measured in United States dollars for the Cost category or in tokens for the Tokens category. Token amounts must be whole numbers",
                      args: { name: "amount" },
                    },
                    {
                      name: "--category",
                      description:
                        "Whether the budget measures estimated cost in United States dollars or token consumption. This category cannot be changed after creation",
                      args: {
                        name: "category",
                        suggestions: ["Cost", "Tokens"],
                      },
                    },
                    changeReference,
                    {
                      name: "--filter",
                      description:
                        'Optional traffic selection. Omission selects all eligible traffic within the owner\'s scope. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "filter", isVariadic: true },
                    },
                    {
                      name: "--grouping",
                      description:
                        'Optional additional partitioning of consumption. Omission or an empty array uses one counter for the owning account or Foundry project. Responses omit owner-default grouping. A project-owned control cannot explicitly group by project. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "grouping", isVariadic: true },
                    },
                    {
                      name: "--if-match",
                      description:
                        "Proceeds only if the current entity tag matches this value",
                      args: { name: "if-match" },
                    },
                    {
                      name: "--if-none-match",
                      description:
                        "Proceeds only if the current entity tag does not match this value. Use * to create only if absent",
                      args: { name: "if-none-match" },
                    },
                    {
                      name: "--notifications",
                      description:
                        'Alert notifications keyed by nonempty, case-insensitively unique names. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "notifications", isVariadic: true },
                    },
                    {
                      name: "--provider",
                      description:
                        "The resource provider for this budget. Omission selects Microsoft.CognitiveServices; responses return that value",
                      args: {
                        name: "provider",
                        suggestions: ["Microsoft.CognitiveServices"],
                      },
                    },
                    {
                      name: "--provider-properties",
                      description:
                        'Optional provider-specific enforcement settings. Omission creates no blocking actions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "provider-properties", isVariadic: true },
                    },
                    {
                      name: "--time-grain",
                      description:
                        "The calendar-aligned UTC interval at which consumption counters renew within the validity window",
                      args: {
                        name: "time-grain",
                        suggestions: ["Daily", "Monthly", "Weekly"],
                      },
                    },
                    {
                      name: "--time-period",
                      description:
                        'The finite UTC validity window during which the control applies. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "time-period", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a project-owned cost control",
                  options: [
                    {
                      name: "--account-name",
                      description: "The name of Cognitive Services account",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--cost-control-name", "--name", "-n"],
                      description:
                        "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                      args: { name: "cost-control-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--if-match",
                      description:
                        "Proceeds only if the current entity tag matches this value",
                      args: { name: "if-match" },
                    },
                    {
                      name: "--project-name",
                      description:
                        "The name of Cognitive Services account's project",
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
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "head",
                  description:
                    "Checks whether a project-owned cost control exists without returning its body",
                  options: [
                    {
                      name: "--account-name",
                      description: "The name of Cognitive Services account",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--cost-control-name", "--name", "-n"],
                      description:
                        "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                      args: { name: "cost-control-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--project-name",
                      description:
                        "The name of Cognitive Services account's project",
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
                  name: "list",
                  description: "List project-owned cost controls",
                  options: [
                    {
                      name: "--account-name",
                      description: "The name of Cognitive Services account",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: "--project-name",
                      description:
                        "The name of Cognitive Services account's project",
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
                    "Get a project-owned cost control and its representation entity tag",
                  options: [
                    {
                      name: "--account-name",
                      description: "The name of Cognitive Services account",
                      args: { name: "account-name" },
                    },
                    {
                      name: ["--cost-control-name", "--name", "-n"],
                      description:
                        "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                      args: { name: "cost-control-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--project-name",
                      description:
                        "The name of Cognitive Services account's project",
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
                  description: "Updates a Foundry project-owned const control",
                  options: [
                    {
                      name: "--account-name",
                      description: "The name of Cognitive Services account",
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
                      name: "--amount",
                      description:
                        "Replaces the positive budget amount, measured in United States dollars for the Cost category or in whole tokens for the Tokens category",
                      args: { name: "amount" },
                    },
                    {
                      name: "--category",
                      description:
                        "Whether the budget measures estimated cost in United States dollars or token consumption. This category cannot be changed after creation",
                      args: {
                        name: "category",
                        suggestions: ["Cost", "Tokens"],
                      },
                    },
                    changeReference,
                    {
                      name: ["--cost-control-name", "--name", "-n"],
                      description:
                        "The cost-control name. Names contain 1-63 ASCII letters, numbers, underscores, or hyphens, including a leading underscore or hyphen",
                      args: { name: "cost-control-name" },
                    },
                    {
                      name: "--filter",
                      description:
                        'Optional traffic selection. Omission selects all eligible traffic within the owner\'s scope. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "filter", isVariadic: true },
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
                      name: "--grouping",
                      description:
                        'Optional additional partitioning of consumption. Omission or an empty array uses one counter for the owning account or Foundry project. Responses omit owner-default grouping. A project-owned control cannot explicitly group by project. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "grouping", isVariadic: true },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--if-match",
                      description:
                        "Proceeds only if the current entity tag matches this value",
                      args: { name: "if-match" },
                    },
                    {
                      name: "--if-none-match",
                      description:
                        "Proceeds only if the current entity tag does not match this value. Use * to create only if absent",
                      args: { name: "if-none-match" },
                    },
                    {
                      name: "--notifications",
                      description:
                        'Merges notifications by case-insensitive name, preserving existing name casing. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "notifications", isVariadic: true },
                    },
                    {
                      name: "--project-name",
                      description:
                        "The name of Cognitive Services account's project",
                      args: { name: "project-name" },
                    },
                    {
                      name: "--provider",
                      description:
                        "The resource provider for this budget. Omission selects Microsoft.CognitiveServices; responses return that value",
                      args: {
                        name: "provider",
                        suggestions: ["Microsoft.CognitiveServices"],
                      },
                    },
                    {
                      name: "--provider-properties",
                      description:
                        'Optional provider-specific enforcement settings. Omission creates no blocking actions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "provider-properties", isVariadic: true },
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
                      name: "--time-grain",
                      description:
                        "The calendar-aligned UTC interval at which consumption counters renew within the validity window",
                      args: {
                        name: "time-grain",
                        suggestions: ["Daily", "Monthly", "Weekly"],
                      },
                    },
                    {
                      name: "--time-period",
                      description:
                        'The finite UTC validity window during which the control applies. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "time-period", isVariadic: true },
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
      name: "agent",
      description:
        "Control foundry agents. This command group has been deprecated and will be removed in the first release after February 28, 2027",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new hosted agent from a container image or source code",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the Cognitive Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the agent to create",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "Name of the AI Foundry project",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--build-remote",
              description:
                "Force remote build using Azure Container Registry Task",
            },
            changeReference,
            {
              name: "--cpu",
              description: "CPU allocation (default is 1 core)",
              args: { name: "cpu" },
            },
            {
              name: "--description",
              description: "Human-readable description of the agent",
              args: { name: "description" },
            },
            {
              name: "--dockerfile",
              description:
                "Name of the Dockerfile in source directory (default is 'Dockerfile')",
              args: { name: "dockerfile" },
            },
            {
              name: ["--environment-variables", "--env"],
              description: "Environment variables in key=value format",
              args: { name: "environment-variables", isVariadic: true },
            },
            {
              name: "--image",
              description: "Docker image URI with tag to use for the agent",
              args: { name: "image" },
            },
            {
              name: "--max-replicas",
              description:
                "Maximum number of replicas for scaling (default is 3)",
              args: { name: "max-replicas" },
            },
            {
              name: "--memory",
              description: "Memory allocation with unit (default is 2Gi)",
              args: { name: "memory" },
            },
            {
              name: "--min-replicas",
              description:
                "Minimum number of replicas for scaling (default is 0)",
              args: { name: "min-replicas" },
            },
            {
              name: "--no-start",
              description:
                "Skip automatic deployment after agent version creation. Use this to create the agent version without starting the deployment. Cannot be used with --min-replicas or --max-replicas",
            },
            {
              name: "--protocol",
              description: "Communication protocol (responses or streaming)",
              args: {
                name: "protocol",
                suggestions: ["responses", "streaming"],
              },
            },
            {
              name: "--protocol-version",
              description: "Protocol version (default is v1)",
              args: { name: "protocol-version" },
            },
            {
              name: "--registry",
              description: "Azure Container Registry name or full URI",
              args: { name: "registry" },
            },
            {
              name: "--show-logs",
              description:
                "Stream container console logs during deployment. Shows real-time output from the agent container as it starts up. Useful for debugging startup issues",
            },
            {
              name: "--skip-acr-check",
              description:
                "Skip validation that project managed identity has access to container registry. Use when access is configured via user-assigned identity, service principal, network-level permissions, or other methods the check cannot detect",
            },
            {
              name: "--source",
              description: "Path to source directory containing Dockerfile",
              args: { name: "source" },
            },
            {
              name: "--timeout",
              description:
                "Maximum time in seconds to wait for deployment to be ready",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete hosted agent version or all versions",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--agent-version",
              description:
                "Cognitive Services hosted agent version. If not provided, deletes all versions",
              args: { name: "agent-version" },
            },
            changeReference,
          ],
        },
        {
          name: "delete-deployment",
          description: "Delete hosted agent deployment",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--agent-version",
              description: "Cognitive Services hosted agent version",
              args: { name: "agent-version" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description: "List agents",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-versions",
          description: "List all versions of a hosted agent",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "show",
          description: "Show details of a hosted agent",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "start",
          description: "Start a hosted agent deployment",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--agent-version",
              description: "Cognitive Services hosted agent version",
              args: { name: "agent-version" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--show-logs",
              description:
                "Stream container console logs during startup. Shows real-time output from the agent container as it starts. Useful for debugging startup issues",
            },
            {
              name: "--timeout",
              description:
                "Maximum time in seconds to wait for deployment to be ready. Default: 600 seconds (10 minutes)",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "status",
          description: "Get the status of a hosted agent deployment",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--agent-version",
              description: "Cognitive Services hosted agent version",
              args: { name: "agent-version" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "stop",
          description: "Stop a hosted agent deployment",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--agent-version",
              description: "Cognitive Services hosted agent version",
              args: { name: "agent-version" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "update",
          description: "Update a hosted agent deployment",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cognitive service account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--agent-version",
              description: "Cognitive Services hosted agent version",
              args: { name: "agent-version" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive Services hosted agent name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--project-name", "-p"],
              description: "AI project name",
              args: { name: "project-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--description",
              description: "Description of the agent",
              args: { name: "description" },
            },
            {
              name: "--max-replicas",
              description: "Maximum number of replicas for horizontal scaling",
              args: { name: "max-replicas" },
            },
            {
              name: "--min-replicas",
              description: "Minimum number of replicas for horizontal scaling",
              args: { name: "min-replicas" },
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
          name: "logs",
          description: "Manage hosted agent container logs",
          subcommands: [
            {
              name: "show",
              description: "Show logs from a hosted agent container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cognitive service account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--agent-version",
                  description: "Cognitive Services hosted agent version",
                  args: { name: "agent-version" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive Services hosted agent name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "-p"],
                  description: "AI project name",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--follow", "-f"],
                  description:
                    "Stream logs in real-time. Without this flag, fetches recent logs and exits",
                },
                {
                  name: "--tail",
                  description:
                    "Number of trailing log lines to fetch (1-300). Default: 50",
                  args: { name: "tail" },
                },
                {
                  name: ["--type", "-t"],
                  description:
                    "Type of logs to stream. 'console' for stdout/stderr, 'system' for container events",
                  args: { name: "type", suggestions: ["console", "system"] },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "commitment-tier",
      description: "Manage commitment tiers for Azure Cognitive Services",
      subcommands: [
        {
          name: "list",
          description: "Show all commitment tiers for Azure Cognitive Services",
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
      ],
    },
    {
      name: "model",
      description: "Manage model for Azure Cognitive Services",
      subcommands: [
        {
          name: "list",
          description: "Show all models for Azure Cognitive Services",
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
      ],
    },
    {
      name: "usage",
      description: "Manage usage for Azure Cognitive Services",
      subcommands: [
        {
          name: "list",
          description: "Show all usages for Azure Cognitive Services",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            { name: "--filter", args: { name: "filter" } },
          ],
        },
      ],
    },
  ],
};

export default completion;
