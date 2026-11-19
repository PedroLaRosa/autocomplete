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
  name: "redis",
  description: "Manage dedicated Redis caches for your Azure applications",
  subcommands: [
    {
      name: "create",
      description: "Create new Redis Cache instance",
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
          description: "Name of the Redis cache",
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
          description: "Type of Redis cache",
          args: { name: "sku", suggestions: ["Basic", "Premium", "Standard"] },
          isRequired: true,
        },
        {
          name: "--vm-size",
          description:
            "Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P",
          args: {
            name: "vm-size",
            suggestions: [
              "c0",
              "c1",
              "c2",
              "c3",
              "c4",
              "c5",
              "c6",
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
            ],
          },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--disable-access-keys",
          description:
            "Authentication to Redis through access keys is disabled when set as true",
          args: {
            name: "disable-access-keys",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-non-ssl-port",
          description:
            "If specified, then the non-ssl redis server port (6379) will be enabled",
        },
        {
          name: "--mi-system-assigned",
          description: "Flag to specify system assigned identity",
        },
        {
          name: "--mi-user-assigned",
          description:
            "One or more space separated resource IDs of user assigned identities",
          args: { name: "mi-user-assigned", isVariadic: true },
        },
        {
          name: "--minimum-tls-version",
          description:
            "Specifies the TLS version required by clients to connect to cache",
          args: {
            name: "minimum-tls-version",
            suggestions: ["1.0", "1.1", "1.2"],
          },
        },
        {
          name: "--redis-configuration",
          description:
            "A json file used to set redis-configuration settings. You may encounter parse errors if the json file is invalid",
          args: { name: "redis-configuration" },
        },
        {
          name: "--redis-version",
          description:
            "Redis version. This should be in the form 'major[.minor]' (only 'major' is required) or the value 'latest' which refers to the latest stable Redis version that is available. Supported versions: 4.0, 6.0 (latest). Default value is 'latest'",
          args: { name: "redis-version" },
        },
        {
          name: "--replicas-per-master",
          description: "The number of replicas to be created per master",
          args: { name: "replicas-per-master" },
        },
        {
          name: "--shard-count",
          description:
            "The number of shards to be created on a Premium Cluster Cache",
          args: { name: "shard-count" },
        },
        {
          name: "--static-ip",
          description:
            "Specify a static ip if required for the VNET. If you do not specify a static IP then an IP address is chosen automatically",
          args: { name: "static-ip" },
        },
        {
          name: "--subnet-id",
          description:
            "The full resource ID of a subnet in a virtual network to deploy the redis cache in. Example format /subscriptions/{subid}/resourceGroups/{resourceGroupName}/providers/Microsoft.{Network|ClassicNetwork}/virtualNetworks/vnet1/subnets/subnet1",
          args: { name: "subnet-id" },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--tenant-settings",
          description: "Space-separated tenant settings in key[=value] format",
          args: { name: "tenant-settings", isOptional: true, isVariadic: true },
        },
        {
          name: "--update-channel",
          description:
            'Specifies the update channel for the monthly Redis updates your Redis Cache will receive. Caches using "Preview" update channel get latest Redis updates at least 4 weeks ahead of "Stable" channel caches. Default value is "Stable"',
          args: { name: "update-channel", suggestions: ["Preview", "Stable"] },
        },
        {
          name: ["--zonal-allocation-policy", "--zonal-allocation"],
          description:
            'Specifies how availability zones are allocated to the Redis cache. "Automatic" enables zone redundancy and Azure will automatically select zones based on regional availability and capacity. "UserDefined" will select availability zones passed in by you using the "zones" parameter. "NoZones" will produce a non-zonal cache. If "zonal-allocation-policy" is not passed, it will be set to "UserDefined" when zones are passed in, otherwise, it will be set to "Automatic in regions where zones are supported and "NoZones" in regions where zones are not supported',
          args: {
            name: "zonal-allocation-policy",
            suggestions: ["Automatic", "NoZones", "UserDefined"],
          },
        },
        {
          name: ["--zones", "-z"],
          description:
            "Space-separated list of availability zones into which to provision the resource",
          args: { name: "zones", isVariadic: true },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes a Redis cache",
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
          description: "Name of the Redis cache",
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
      name: "export",
      description: "Export data stored in a Redis cache",
      options: [
        {
          name: "--container",
          description:
            "SAS url for container where data needs to be exported to",
          args: { name: "container" },
          isRequired: true,
        },
        {
          name: "--prefix",
          description: "Prefix to use for exported files",
          args: { name: "prefix" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: ["--preferred-data-archive-auth-method", "--auth-method"],
          description:
            "Preferred auth method to communicate to storage account used for data archive, default value is SAS",
          args: {
            name: "preferred-data-archive-auth-method",
            suggestions: ["ManagedIdentity", "SAS"],
          },
        },
        changeReference,
        {
          name: "--file-format",
          description:
            "Format of the blob (Currently rdb is the only supported format, with other formats expected in the future)",
          args: { name: "file-format" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--storage-subscription-id", "--storage-sub-id"],
          description: "SubscriptionId of the storage account",
          args: { name: "storage-subscription-id" },
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
      name: "flush",
      description: "Delete all of the keys in a cache",
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
          description: "Name of the Redis cache",
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
      name: "force-reboot",
      description: "Reboot specified Redis node(s)",
      options: [
        {
          name: "--reboot-type",
          description:
            "Which Redis node(s) to reboot. Depending on this value data loss is possible",
          args: {
            name: "reboot-type",
            suggestions: ["AllNodes", "PrimaryNode", "SecondaryNode"],
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
          description: "Name of the Redis cache",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--shard-id",
          description:
            "If clustering is enabled, the ID of the shard to be rebooted",
          args: { name: "shard-id" },
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
      name: "import",
      description:
        "Import data into a Redis cache. Deletes all preexisting cache data",
      options: [
        {
          name: "--files",
          description: "SAS url for blobs that needs to be imported",
          args: { name: "files", isVariadic: true },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: ["--preferred-data-archive-auth-method", "--auth-method"],
          description:
            "Preferred auth method to communicate to storage account used for data archive, default value is SAS",
          args: {
            name: "preferred-data-archive-auth-method",
            suggestions: ["ManagedIdentity", "SAS"],
          },
        },
        changeReference,
        {
          name: "--file-format",
          description:
            "Format of the blob (Currently rdb is the only supported format, with other formats expected in the future)",
          args: { name: "file-format" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--storage-subscription-id", "--storage-sub-id"],
          description: "SubscriptionId of the storage account",
          args: { name: "storage-subscription-id" },
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
      description: "List Redis Caches",
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
      name: "list-keys",
      description: "Retrieve a Redis cache's access keys",
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
          description: "Name of the Redis cache",
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
      name: "regenerate-keys",
      description: "Regenerate Redis cache's access keys",
      options: [
        {
          name: "--key-type",
          description: "The Redis access key to regenerate",
          args: { name: "key-type", suggestions: ["Primary", "Secondary"] },
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
          description: "Name of the Redis cache",
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
      description: "Gets a Redis cache (resource description)",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
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
      description: "Update a Redis cache",
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
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
          args: { name: "name" },
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
          description: "Type of Redis cache",
          args: { name: "sku", suggestions: ["Basic", "Premium", "Standard"] },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--vm-size",
          description:
            "Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P",
          args: {
            name: "vm-size",
            suggestions: [
              "c0",
              "c1",
              "c2",
              "c3",
              "c4",
              "c5",
              "c6",
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
            ],
          },
        },
      ],
    },
    {
      name: "access-policy",
      description: "Manage Access Policies for Redis Cache",
      subcommands: [
        {
          name: "create",
          description: "Add an Access Policy to the Redis Cache",
          options: [
            {
              name: "--access-policy-name",
              description:
                "The name of the access policy that is being assigned",
              args: { name: "access-policy-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description:
                "Permissions for the access policy. Learn how to configure permissions at https://aka.ms/redis/AADPreRequisites",
              args: { name: "permissions" },
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
          description: "Delete the Access Policy",
          options: [
            {
              name: "--access-policy-name",
              description:
                "The name of the access policy that is being assigned",
              args: { name: "access-policy-name" },
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
              description: "Name of the Redis cache",
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
            "Get the list of Access Policies associated with the Redis Cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
            "Get the detailed information about an Access Policy of the Redis Cache",
          options: [
            {
              name: "--access-policy-name",
              description:
                "The name of the access policy that is being assigned",
              args: { name: "access-policy-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Update an Access Policy of the Redis Cache",
          options: [
            {
              name: "--access-policy-name",
              description:
                "The name of the access policy that is being assigned",
              args: { name: "access-policy-name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description:
                "Permissions for the access policy. Learn how to configure permissions at https://aka.ms/redis/AADPreRequisites",
              args: { name: "permissions" },
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
              description: "Name of the Redis cache",
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
      name: "access-policy-assignment",
      description:
        "Manage Access Policy Assignments (Redis Users) for Redis Cache",
      subcommands: [
        {
          name: "create",
          description:
            "Add an Access Policy Assignment (Redis User) to the Redis Cache",
          options: [
            {
              name: "--access-policy-name",
              description:
                "The name of the access policy that is being assigned",
              args: { name: "access-policy-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--object-id",
              description: "Object Id to assign access policy to",
              args: { name: "object-id" },
              isRequired: true,
            },
            {
              name: "--object-id-alias",
              description:
                "User friendly name for object id. Also represents username for token based authentication",
              args: { name: "object-id-alias" },
              isRequired: true,
            },
            {
              name: "--policy-assignment-name",
              description: "The name of the access policy assignment",
              args: { name: "policy-assignment-name" },
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
          description: "Delete the Access Policy Assignment (Redis User)",
          options: [
            {
              name: "--policy-assignment-name",
              description: "The name of the access policy assignment",
              args: { name: "policy-assignment-name" },
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
              description: "Name of the Redis cache",
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
            "Get the list of Access Policy Assignments (Redis Users) associated with the Redis Cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
            "Get the detailed information about an Access Policy Assignment (Redis User) of the Redis Cache",
          options: [
            {
              name: "--policy-assignment-name",
              description: "The name of the access policy assignment",
              args: { name: "policy-assignment-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description:
            "Update an Access Policy Assignment (Redis User) of the Redis Cache",
          options: [
            {
              name: "--access-policy-name",
              description:
                "The name of the access policy that is being assigned",
              args: { name: "access-policy-name" },
              isRequired: true,
            },
            {
              name: "--object-id",
              description: "Object Id to assign access policy to",
              args: { name: "object-id" },
              isRequired: true,
            },
            {
              name: "--object-id-alias",
              description:
                "User friendly name for object id. Also represents username for token based authentication",
              args: { name: "object-id-alias" },
              isRequired: true,
            },
            {
              name: "--policy-assignment-name",
              description: "The name of the access policy assignment",
              args: { name: "policy-assignment-name" },
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
              description: "Name of the Redis cache",
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
      name: "firewall-rules",
      description: "Manage Redis firewall rules",
      subcommands: [
        {
          name: "create",
          description: "Create a redis cache firewall rule",
          options: [
            {
              name: "--end-ip",
              description: "Highest IP address included in the range",
              args: { name: "end-ip" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--start-ip",
              description: "Lowest IP address included in the range",
              args: { name: "start-ip" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a single firewall rule in a specified redis cache",
          options: [
            {
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
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
              description: "Name of the Redis cache",
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
          description: "Gets all firewall rules in the specified redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Gets a single firewall rule in a specified redis cache",
          options: [
            {
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Update a redis cache firewall rule",
          options: [
            {
              name: "--end-ip",
              description: "Highest IP address included in the range",
              args: { name: "end-ip" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--start-ip",
              description: "Lowest IP address included in the range",
              args: { name: "start-ip" },
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
              description: "Name of the Redis cache",
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
      name: "identity",
      description: "Manage identity assigned to Azure cache for Redis",
      subcommands: [
        {
          name: "assign",
          description: "Assign identity for Azure cache for Redis",
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
              name: "--mi-system-assigned",
              description: "Flag to specify system assigned identity",
            },
            {
              name: "--mi-user-assigned",
              description:
                "One or more space separated resource IDs of user assigned identities",
              args: { name: "mi-user-assigned", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description:
            "Remove the identity already assigned for Azure cache for Redis",
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
              name: "--mi-system-assigned",
              description: "Flag to specify system assigned identity",
            },
            {
              name: "--mi-user-assigned",
              description:
                "One or more space separated resource IDs of user assigned identities",
              args: { name: "mi-user-assigned", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Show the identity assigned for Azure cache for Redis",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
      name: "patch-schedule",
      description: "Manage Redis patch schedules",
      subcommands: [
        {
          name: "create",
          description: "Create patching schedule for Redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
              name: "--schedule-entries",
              description:
                'List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]',
              args: { name: "schedule-entries" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description: "Deletes the patching schedule of a redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Gets the patching schedule of a redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Update the patching schedule for Redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
              name: "--schedule-entries",
              description:
                'List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]',
              args: { name: "schedule-entries" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "server-link",
      description: "Manage Redis server links",
      subcommands: [
        {
          name: "create",
          description:
            "Adds a server link to the Redis cache (requires Premium SKU)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--replication-role",
              description: "Role of the redis cache to be linked",
              args: {
                name: "replication-role",
                suggestions: ["Primary", "Secondary"],
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
              name: "--server-to-link",
              description:
                "Resource ID or name of the redis cache to be linked",
              args: { name: "server-to-link" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the linked server from a redis cache (requires Premium SKU)",
          options: [
            {
              name: "--linked-server-name",
              description: "Name of the linked redis cache",
              args: { name: "linked-server-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
            "Gets the list of linked servers associated with this redis cache (requires Premium SKU)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
            "Gets the detailed information about a linked server of a redis cache (requires Premium SKU)",
          options: [
            {
              name: "--linked-server-name",
              description: "Name of the linked redis cache",
              args: { name: "linked-server-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
  ],
};

export default completion;
