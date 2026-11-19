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
  name: "search",
  description: "Manage Azure AI Search",
  subcommands: [
    {
      name: "admin-key",
      description: "Manage Azure AI Search admin keys",
      subcommands: [
        {
          name: "renew",
          description:
            "Regenerates either the primary or secondary admin API key",
          options: [
            {
              name: "--key-kind",
              description: "The type (primary or secondary) of the admin key",
              args: { name: "key-kind" },
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "show",
          description:
            "Gets the primary and secondary admin API keys for the specified Azure AI Search service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "offering",
      description: "Manage Azure AI Search offerings",
      subcommands: [
        {
          name: "list",
          description: "List all Azure AI Search offerings by region",
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
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage Azure AI Search private endpoint connections",
      subcommands: [
        {
          name: "delete",
          description:
            "Disconnects the private endpoint connection and deletes it from the search service",
          options: [
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection to the Azure AI Search service with the specified resource group. Required",
              args: { name: "private-endpoint-connection-name" },
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
            "Gets a list of all private endpoint connections in the given service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the details of the private endpoint connection to the search service in the given resource group",
          options: [
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection to the Azure AI Search service with the specified resource group. Required",
              args: { name: "private-endpoint-connection-name" },
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an existing private endpoint connection in a Search service in the given resource group",
          options: [
            {
              name: "--actions-required",
              description:
                "Custom 'actions required' message when updating the private endpoint connection resource",
              args: { name: "actions-required" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "Custom description when updating the private endpoint connection resource",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the private endpoint connection resource; for example: {the name of the private endpoint resource}.{guid}",
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--status",
              description:
                "The updated status of the private endpoint connection resource",
              args: { name: "status" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage Azure AI Search private link resources",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of all supported private link resource types for the given service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "query-key",
      description: "Manage Azure AI Search query keys",
      subcommands: [
        {
          name: "create",
          description:
            "Generates a new query key for the specified search service",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the query key",
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified query key",
          options: [
            {
              name: "--key-value",
              description: "The value of the query key",
              args: { name: "key-value" },
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description:
            "Returns the list of query API keys for the given Azure AI Search service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Manage Service",
      subcommands: [
        {
          name: "check-name-availability",
          description:
            "Checks whether or not the given search service name is available for use. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net)",
          options: [
            {
              name: "--name",
              description:
                "The search service name to validate. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The type of the resource whose name is to be validated. This value must always be 'searchServices'",
              args: { name: "type", suggestions: ["searchServices"] },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "create",
          description:
            "Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values",
          options: [
            {
              name: ["--search-service-name", "--name", "-n"],
              description:
                "The name of the Azure AI Search service to create or update. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length. Search service names must be unique since they are part of the service URI (https://<name>.search.windows.net). You cannot change the service name after the service is created",
              args: { name: "search-service-name" },
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
                "The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions. 'serverless': Serverless tier with auto-scaling capabilities",
              args: {
                name: "sku",
                suggestions: [
                  "basic",
                  "free",
                  "serverless",
                  "standard",
                  "standard2",
                  "standard3",
                  "storage_optimized_l1",
                  "storage_optimized_l2",
                ],
              },
              isRequired: true,
            },
            {
              name: "--aad-auth-failure-mode",
              description:
                "Describes what response the data plane API of a Search service would send for requests that failed authentication",
              args: {
                name: "aad-auth-failure-mode",
                suggestions: ["http401WithBearerChallenge", "http403"],
              },
            },
            acquirePolicyToken,
            {
              name: "--auth-options",
              description: "Some Help",
              args: {
                name: "auth-options",
                suggestions: ["aadOrApiKey", "apiKeyOnly"],
              },
            },
            {
              name: "--bypass",
              description:
                "Possible origins of inbound traffic that can bypass the rules defined in the 'ipRules' section",
              args: { name: "bypass", suggestions: ["AzureServices", "None"] },
            },
            changeReference,
            {
              name: "--compute-type",
              description:
                "Configure this property to support the search service using either the Default Compute or Azure Confidential Compute",
              args: {
                name: "compute-type",
                suggestions: ["confidential", "default"],
              },
            },
            {
              name: ["--data-exfiltration-protections", "--data--protections"],
              description:
                "A list of data exfiltration scenarios that are explicitly disallowed for the search service. Currently, the only supported value is 'All' to disable all possible data export scenarios with more fine grained controls planned for the future. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "data-exfiltration-protections", isVariadic: true },
            },
            {
              name: "--disable-local-auth",
              description:
                "When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined",
              args: {
                name: "disable-local-auth",
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
              name: "--encryption-with-cmk",
              description:
                'Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "encryption-with-cmk", isVariadic: true },
            },
            {
              name: "--hosting-mode",
              description:
                "Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'",
              args: {
                name: "hosting-mode",
                suggestions: ["default", "highDensity"],
              },
            },
            {
              name: "--identity-type",
              description: "The identity type",
              args: {
                name: "identity-type",
                suggestions: [
                  "None",
                  "SystemAssigned",
                  "SystemAssigned, UserAssigned",
                  "UserAssigned",
                ],
              },
            },
            {
              name: "--ip-rules",
              description:
                "A list of IP defineing the inbound network(s) allowed to access to the search service endpoint",
              args: { name: "ip-rules" },
            },
            {
              name: "--knowledge-retrieval",
              description:
                "Specifies the billing plan for agentic retrieval on the Azure AI Search service",
              args: {
                name: "knowledge-retrieval",
                suggestions: ["free", "standard"],
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
              name: "--partition-count",
              description:
                "The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3",
              args: { name: "partition-count" },
            },
            {
              name: ["--public-network-access", "--public-access"],
              description:
                "This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method",
              args: {
                name: "public-network-access",
                suggestions: ["disabled", "enabled", "securedByPerimeter"],
              },
            },
            {
              name: "--replica-count",
              description:
                "The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU",
              args: { name: "replica-count" },
            },
            {
              name: "--semantic-search",
              description:
                "Sets options that control the availability of semantic search. This configuration is only possible for certain Azure AI Search SKUs in certain locations",
              args: {
                name: "semantic-search",
                suggestions: ["disabled", "free", "standard"],
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
          description:
            "Delete a search service in the given resource group, along with its associated resources",
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
              name: ["--search-service-name", "--name", "-n"],
              description:
                "The name of the Azure AI Search service associated with the specified resource group",
              args: { name: "search-service-name" },
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
            "Gets a list of all Search services in the given resource group",
          options: [
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
            "Get the search service with the given name in the given resource group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--search-service-name", "--name", "-n"],
              description:
                "The name of the Azure AI Search service associated with the specified resource group",
              args: { name: "search-service-name" },
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
            "Update an existing search service in the given resource group",
          options: [
            {
              name: "--aad-auth-failure-mode",
              description:
                "Describes what response the data plane API of a Search service would send for requests that failed authentication",
              args: {
                name: "aad-auth-failure-mode",
                suggestions: ["http401WithBearerChallenge", "http403"],
              },
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--auth-options",
              description: "Some Help",
              args: {
                name: "auth-options",
                suggestions: ["aadOrApiKey", "apiKeyOnly"],
              },
            },
            changeReference,
            {
              name: ["--data-exfiltration-protections", "--data--protections"],
              description:
                "A list of data exfiltration scenarios that are explicitly disallowed for the search service. Currently, the only supported value is 'All' to disable all possible data export scenarios with more fine grained controls planned for the future. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "data-exfiltration-protections", isVariadic: true },
            },
            {
              name: "--disable-local-auth",
              description:
                "When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined",
              args: {
                name: "disable-local-auth",
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
              name: "--encryption-with-cmk",
              description:
                'Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "encryption-with-cmk", isVariadic: true },
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
              name: "--identity-type",
              description: "The identity type",
              args: {
                name: "identity-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--ip-rules",
              description:
                "A list of IP defineing the inbound network(s) allowed to access to the search service endpoint",
              args: { name: "ip-rules" },
            },
            {
              name: "--knowledge-retrieval",
              description:
                "Specifies the billing plan for agentic retrieval on the Azure AI Search service",
              args: {
                name: "knowledge-retrieval",
                suggestions: ["free", "standard"],
              },
            },
            {
              name: ["--search-service-name", "--name", "-n"],
              description: "The name of the Azure AI Search service to update",
              args: { name: "search-service-name" },
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
              name: "--partition-count",
              description:
                "The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3",
              args: { name: "partition-count" },
            },
            {
              name: ["--public-network-access", "--public-access"],
              description:
                "This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method",
              args: {
                name: "public-network-access",
                suggestions: ["disabled", "enabled", "securedByPerimeter"],
              },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--replica-count",
              description:
                "The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU",
              args: { name: "replica-count" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--semantic-search",
              description:
                "Sets options that control the availability of semantic search. This configuration is only possible for certain Azure AI Search SKUs in certain locations",
              args: {
                name: "semantic-search",
                suggestions: ["disabled", "free", "standard"],
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
              description:
                "The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions. 'serverless': Serverless tier with auto-scaling capabilities",
              args: {
                name: "sku",
                suggestions: [
                  "basic",
                  "free",
                  "serverless",
                  "standard",
                  "standard2",
                  "standard3",
                  "storage_optimized_l1",
                  "storage_optimized_l2",
                ],
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
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrades the Azure AI Search service to the latest version available",
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
              name: "--search-service-name",
              description:
                "The name of the Azure AI Search service associated with the specified resource group",
              args: { name: "search-service-name" },
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
              name: ["--search-service-name", "--name", "-n"],
              description:
                "The name of the Azure AI Search service associated with the specified resource group",
              args: { name: "search-service-name" },
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
          name: "admin-key",
          description: "Manage Admin Key",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the primary and secondary admin API keys for the specified Azure AI Search service",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "regenerate",
              description:
                "Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time",
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
                  name: ["--key-kind", "--name", "-n"],
                  description:
                    "Specifies which key to regenerate. Valid values include 'primary' and 'secondary'",
                  args: {
                    name: "key-kind",
                    suggestions: ["primary", "secondary"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
          name: "network-security-perimeter-configuration",
          description: "Manage Network Security Perimeter Configuration",
          subcommands: [
            {
              name: "list",
              description:
                "List a list of network security perimeter configurations for a search service",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
              name: "reconcile",
              description:
                "Reconcile network security perimeter configuration for the Azure AI Search resource provider. This triggers a manual resync with network security perimeter configurations by ensuring the search service carries the latest configuration",
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
                  name: "--nsp-config-name",
                  description:
                    "The network security perimeter configuration name",
                  args: { name: "nsp-config-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
              description: "Get a network security perimeter configuration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--nsp-config-name", "--name", "-n"],
                  description:
                    "The network security perimeter configuration name",
                  args: { name: "nsp-config-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
          name: "private-endpoint-connection",
          description: "Manage Private Endpoint Connection",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete the private endpoint connection and deletes it from the search service",
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
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection to the Azure AI Search service with the specified resource group",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
                "List a list of all private endpoint connections in the given service",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
                "Get the details of the private endpoint connection to the search service in the given resource group",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection to the Azure AI Search service with the specified resource group",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
                "Update a private endpoint connection to the search service in the given resource group",
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
                  name: [
                    "--private-link-service-connection-state",
                    "--connection-state",
                  ],
                  description:
                    'Describes the current state of an existing Azure Private Link service connection to the private endpoint. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "private-link-service-connection-state",
                    isVariadic: true,
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
                  name: "--group-id",
                  description:
                    "The group ID of the Azure resource for which the private link service is for",
                  args: { name: "group-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection to the Azure AI Search service with the specified resource group",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--private-endpoint",
                  description:
                    'The private endpoint resource from Microsoft.Network provider. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "private-endpoint", isVariadic: true },
                },
                {
                  name: "--provisioning-state",
                  description:
                    "The provisioning state of the private link service connection. Valid values are Updating, Deleting, Failed, Succeeded, Incomplete, or Canceled",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Canceled",
                      "Deleting",
                      "Failed",
                      "Incomplete",
                      "Succeeded",
                      "Updating",
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
          name: "private-link-resource",
          description: "Manage Private Link Resource",
          subcommands: [
            {
              name: "list",
              description:
                "List a list of all supported private link resource types for the given service",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "query-key",
          description: "Manage Create Query Key",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new query key for the specified search service. You can create up to 50 query keys per service",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the new query API key",
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
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description:
                "Delete the specified query key. Unlike admin keys, query keys are not regenerated. The process for regenerating a query key is to delete and then recreate it",
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
                  name: ["--name", "--key", "-n"],
                  description:
                    "The query key to be deleted. Query keys are identified by value, not by name",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
                "Returns the list of query API keys for the given Azure AI Search service",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
          ],
        },
        {
          name: "shared-private-link-resource",
          description: "Manage Shared Private Link Resource",
          subcommands: [
            {
              name: "create",
              description:
                "Create the creation or update of a shared private link resource managed by the search service in the given resource group",
              options: [
                {
                  name: ["--shared-private-link-resource-name", "--name", "-n"],
                  description:
                    "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group",
                  args: { name: "shared-private-link-resource-name" },
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
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--group-id",
                  description:
                    "The group ID from the provider of resource the shared private link resource is for",
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
                  name: ["--private-link-resource-id", "--resource-id"],
                  description:
                    "The resource ID of the resource the shared private link resource is for",
                  args: { name: "private-link-resource-id" },
                },
                {
                  name: "--provisioning-state",
                  description:
                    "The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Deleting",
                      "Failed",
                      "Incomplete",
                      "Succeeded",
                      "Updating",
                    ],
                  },
                },
                {
                  name: "--request-message",
                  description:
                    "The message for requesting approval of the shared private link resource",
                  args: { name: "request-message" },
                },
                {
                  name: "--resource-region",
                  description:
                    "Optional. Can be used to specify the Azure Resource Manager location of the resource for which a shared private link is being created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service)",
                  args: { name: "resource-region" },
                },
                {
                  name: "--status",
                  description:
                    "Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected",
                  args: {
                    name: "status",
                    suggestions: [
                      "Approved",
                      "Disconnected",
                      "Pending",
                      "Rejected",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the deletion of the shared private link resource from the search service",
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
                  name: ["--shared-private-link-resource-name", "--name", "-n"],
                  description:
                    "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group",
                  args: { name: "shared-private-link-resource-name" },
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
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
                "List a list of all shared private link resources managed by the given service",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
                "Get the details of the shared private link resource managed by the search service in the given resource group",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--shared-private-link-resource-name", "--name", "-n"],
                  description:
                    "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group",
                  args: { name: "shared-private-link-resource-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
                "Update the creation or update of a shared private link resource managed by the search service in the given resource group",
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
                  name: "--group-id",
                  description:
                    "The group ID from the provider of resource the shared private link resource is for",
                  args: { name: "group-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--shared-private-link-resource-name", "--name", "-n"],
                  description:
                    "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group",
                  args: { name: "shared-private-link-resource-name" },
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
                  name: ["--private-link-resource-id", "--resource-id"],
                  description:
                    "The resource ID of the resource the shared private link resource is for",
                  args: { name: "private-link-resource-id" },
                },
                {
                  name: "--provisioning-state",
                  description:
                    "The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Deleting",
                      "Failed",
                      "Incomplete",
                      "Succeeded",
                      "Updating",
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
                  name: "--request-message",
                  description:
                    "The message for requesting approval of the shared private link resource",
                  args: { name: "request-message" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-region",
                  description:
                    "Optional. Can be used to specify the Azure Resource Manager location of the resource for which a shared private link is being created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service)",
                  args: { name: "resource-region" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--status",
                  description:
                    "Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected",
                  args: {
                    name: "status",
                    suggestions: [
                      "Approved",
                      "Disconnected",
                      "Pending",
                      "Rejected",
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
                  name: ["--shared-private-link-resource-name", "--name", "-n"],
                  description:
                    "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group",
                  args: { name: "shared-private-link-resource-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search-service-name",
                  description:
                    "The name of the Azure AI Search service associated with the specified resource group",
                  args: { name: "search-service-name" },
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
      name: "shared-private-link-resource",
      description: "Manage Azure AI Search shared private link resources",
      subcommands: [
        {
          name: "create",
          description:
            "Create shared privatelink resources in a Search service in the given resource group",
          options: [
            {
              name: "--group-id",
              description:
                "The group id of the resource; for example: blob, sql or vault",
              args: { name: "group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the shared private link resource",
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
              name: "--resource-id",
              description:
                "Fully qualified resource ID for the resource. for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/ {resourceProviderNamespace}/{resourceType}/{resourceName}",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
              name: "--request-message",
              description:
                "Custom request message when creating or updating the shared privatelink resources",
              args: { name: "request-message" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Initiates the deletion of the shared private link resource from the search service",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group. Required",
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
            "Gets a list of all shared private link resources managed by the given service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the details of the shared private link resource managed by the search service in the given resource group",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group. Required",
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update shared privatelink resources in a Search service in the given resource group",
          options: [
            {
              name: "--group-id",
              description:
                "The group id of the resource; for example: blob, sql or vault",
              args: { name: "group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the shared private link resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--request-message",
              description:
                "Custom request message when creating or updating the shared privatelink resources",
              args: { name: "request-message" },
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
              name: "--resource-id",
              description:
                "Fully qualified resource ID for the resource; for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/ {resourceProviderNamespace}/{resourceType}/{resourceName}",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
          name: "wait",
          description: "Wait for async shared private link resource operations",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the shared private link resource managed by the Azure AI Search service within the specified resource group. Required",
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
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
    {
      name: "usage",
      description: "Manage Usage",
      subcommands: [
        {
          name: "list",
          description:
            "List a list of all Azure AI Search quota usages across the subscription",
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
          description:
            "Get the quota usage for a search SKU in the given subscription",
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
              name: ["--sku-name", "--name", "-n"],
              description:
                "The unique SKU name that identifies a billable tier",
              args: { name: "sku-name" },
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
